const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const root = path.join(__dirname, '..', 'src', 'assets');

// [relative path, target max width, target max height]
const targets = [
  ['images/hero/hero-background.jpg', 1920, 1150],
  ['images/about/about-img-1.jpg', 960, 1210],
  ['images/about/about-img-1-full.jpg', 1242, 1658],
  ['images/about/about-img-2.jpg', 470, 488],
  ['images/about/about-img-2-full.jpg', 804, 536],
  ['images/about/avatar-client-1.jpg', 100, 100],
  ['images/about/avatar-client-2.jpg', 100, 100],
  ['images/about/avatar-client-3.jpg', 100, 100],
  ['images/about/avatar-client-4.jpg', 100, 100],
  ['images/about/avatar-client-5.jpg', 100, 100],
  ['images/programs/program-card-1.jpg', 604, 440],
  ['images/programs/program-card-2.jpg', 604, 440],
  ['images/programs/program-card-3.jpg', 604, 440],
  ['images/programs/program-card-4.jpg', 604, 440],
  ['images/why-us/why-us-image.jpg', 1126, 1200],
  ['images/why-us/thumb-ellipse.jpg', 64, 64],
  ['images/how-it-works/how-it-works-img-1.jpg', 680, 840],
  ['images/how-it-works/how-it-works-img-2.jpg', 758, 840],
  ['images/testimonials/testimonial-main.jpg', 1920, 960],
  ['images/testimonials/testimonial-thumb-1.jpg', 758, 400],
  ['images/testimonials/testimonial-thumb-2.jpg', 758, 400],
  ['images/testimonials/testimonial-thumb-3.jpg', 758, 400],
  ['images/promo/live-stage-card.jpg', 1294, 880],
  ['images/promo/podcast-promo-card.jpg', 1522, 688],
  ['images/insights/insight-2.jpg', 758, 440],
  ['images/insights/insight-3.jpg', 758, 440],
  ['images/cta/final-cta-bg.jpg', 1920, 975],
  ['images/footer/footer-bg.jpg', 1920, 875],
  ['images/footer/footer-image.jpg', 1920, 850],
  ['images/hero/avatar-1.jpg', 48, 48],
  ['images/hero/avatar-2.jpg', 48, 48],
  ['images/hero/avatar-3.jpg', 48, 48],
];

const pngTargets = [
  ['logo/logo-mark.png', 604, 574],
  ['logo/logo-wordmark.png', 488, 100],
];

(async () => {
  let totalBefore = 0, totalAfter = 0;
  for (const [rel, w, h] of targets) {
    const p = path.join(root, rel);
    if (!fs.existsSync(p)) { console.log('MISSING', rel); continue; }
    const before = fs.statSync(p).size;
    const buf = await sharp(p).resize({ width: w, height: h, fit: 'inside', withoutEnlargement: true }).jpeg({ quality: 76, mozjpeg: true }).toBuffer();
    const tmp = p + '.tmp';
    fs.writeFileSync(tmp, buf);
    fs.renameSync(tmp, p);
    const after = buf.length;
    totalBefore += before; totalAfter += after;
    console.log(rel, (before/1024).toFixed(0)+'KB ->', (after/1024).toFixed(0)+'KB');
  }
  for (const [rel, w, h] of pngTargets) {
    const p = path.join(root, rel);
    if (!fs.existsSync(p)) { console.log('MISSING', rel); continue; }
    const before = fs.statSync(p).size;
    const buf = await sharp(p).resize({ width: w, height: h, fit: 'inside', withoutEnlargement: true }).png({ quality: 85, compressionLevel: 9 }).toBuffer();
    const tmp = p + '.tmp';
    fs.writeFileSync(tmp, buf);
    fs.renameSync(tmp, p);
    const after = buf.length;
    totalBefore += before; totalAfter += after;
    console.log(rel, (before/1024).toFixed(0)+'KB ->', (after/1024).toFixed(0)+'KB');
  }
  console.log('TOTAL', (totalBefore/1024/1024).toFixed(2)+'MB ->', (totalAfter/1024/1024).toFixed(2)+'MB');
})();
