const { chromium } = require('playwright');

(async () => {
  const url = process.argv[2] || 'http://localhost:5175/';
  const out = process.argv[3] || './.figma-export/live-screens/full.png';
  const width = Number(process.argv[4] || 1440);
  const height = Number(process.argv[5] || 900);
  const fullPage = process.argv[6] !== 'viewport';

  const browser = await chromium.launch({ channel: 'msedge' }).catch(() => chromium.launch());
  const page = await browser.newPage({ viewport: { width, height } });
  const errors = [];
  page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });
  page.on('pageerror', (err) => errors.push('pageerror: ' + err.message));

  await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(800);
  await page.screenshot({ path: out, fullPage });

  console.log('Saved', out);
  console.log('Console errors:', errors.length ? errors.join('\n') : 'none');
  await browser.close();
})();
