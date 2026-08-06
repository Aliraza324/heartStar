const { chromium } = require('playwright');

(async () => {
  const url = process.argv[2] || 'http://localhost:5175/';
  const browser = await chromium.launch({ channel: 'msedge' }).catch(() => chromium.launch());
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(500);

  const sections = await page.evaluate(() => {
    const els = document.querySelectorAll('main > div > section, main section');
    return Array.from(els).map((el) => {
      const rect = el.getBoundingClientRect();
      return {
        id: el.id || null,
        classes: el.className.slice(0, 60),
        top: Math.round(rect.top + window.scrollY),
        height: Math.round(rect.height),
      };
    });
  });
  console.log(JSON.stringify(sections, null, 2));

  await browser.close();
})();
