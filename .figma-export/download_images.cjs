const fs = require('fs');
const path = require('path');
const https = require('https');

const urls = require('./needed_image_urls.json');

const map = {
  'a0723c7b0a436133059d4921f5f5add18a940f64': 'images/hero/hero-background.jpg',
  'b35e4fb3197f9883d19e0c5346f123216852b70e': 'images/about/about-img-1.jpg',
  '2a90478a24021395bbd9dc5acf2875e2088accf1': 'images/about/about-img-1-full.jpg',
  '61c425771488435bb8466ef0e57dcc63af9edc7d': 'images/about/about-img-2.jpg',
  'b04725d679691f240df56c623f9069b6647d38e4': 'images/about/about-img-2-full.jpg',
  'a913bb12258223ce7c33e17d2c89ae0649e3355d': 'images/about/avatar-client-1.jpg',
  '843dbc480bf076d4e490fd443d01997e6a6d8d77': 'images/about/avatar-client-2.jpg',
  '04df15b78919b3f426b71552ee0b32ac2b4814bc': 'images/about/avatar-client-3.jpg',
  '639b64d1d2611c3b62289af1806066f18abd427c': 'images/about/avatar-client-4.jpg',
  '8994f05d1c666975ad8f58dd8735ce4836a212d5': 'images/about/avatar-client-5.jpg',
  'a83ad818af2956ff71a7e5b2e2c8415f01eb9a65': 'images/programs/program-card-1.jpg',
  '27ef2427f3a3d41280b05e52713345baf366262e': 'images/programs/program-card-2.jpg',
  'bdded020720e2cae5c895b98579f2a645041e0c3': 'images/programs/program-card-3.jpg',
  '7e5f33a46bf8d471b3cc4b85c0d7d4e09560c1a9': 'images/programs/program-card-4.jpg',
  'ef2215f97c7db869d445941174d5766cc194adf5': 'images/why-us/why-us-image.jpg',
  '2b2f8f46a7045c2644f49ff4bbb937df497d82cf': 'images/why-us/thumb-ellipse.jpg',
  '06b2c562b597f2282d1c7c79912269745f9d1135': 'images/how-it-works/how-it-works-img-1.jpg',
  '1a6bfafb9a19e06b1553867fb31c27b5376cbe7e': 'images/how-it-works/how-it-works-img-2.jpg',
  '04d28695ee12b283ccdaac02941dbee76528a99c': 'images/testimonials/testimonial-main.jpg',
  'e8e6dd96ea212b99031b1ac10f0da4ac71a9b215': 'images/testimonials/testimonial-thumb-1.jpg',
  'c6aac37ca3f25de5b0392dd8cc20aa0b9492d84c': 'images/testimonials/testimonial-thumb-2.jpg',
  '49b1163d1ce304add3709d7ac63ddcf883fc396a': 'images/testimonials/testimonial-thumb-3.jpg',
  '55e131122e27518abc5c315df95560d024ec9b1b': 'images/promo/live-stage-card.jpg',
  'd4259e0a9c973eae74bf49a3c3c92b7d207b7f58': 'images/promo/podcast-promo-card.jpg',
  'c0b0ede59e54bf90eb794a35dd91b25e17c6e065': 'images/insights/insight-2.jpg',
  '5f1c47f73fe4151b44a7252db9635c843355dd02': 'images/insights/insight-3.jpg',
  'ebb0f056182b321f490611a489fdd0bd1968c554': 'images/cta/final-cta-bg.jpg',
  '3ba45599d5736b3b4dcfb2aa7d0ef4cc158be00d': 'images/footer/footer-bg.jpg',
  '4fd46072748f180876f74afe0a052c17f1900282': 'images/footer/footer-image.jpg',
  '6810983707e6f74a56bd81290f4a7d39503906ac': 'logo/logo-mark.png',
  '5e3e77698e11465a11538df1c1a736583d5353b9': 'logo/logo-wordmark.png',
  'a2bd3f179daf1e6213a2fd379ee78baf9884bb0e': 'images/hero/avatar-1.jpg',
  '7e69128c3f65b721fc10bde1905d06f0912194b7': 'images/hero/avatar-2.jpg',
  '587dca5e8edf15536cbe94e8d3d232d08880bac0': 'images/hero/avatar-3.jpg',
};

const outRoot = path.join(__dirname, '..', 'src', 'assets');

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve, reject);
      }
      if (res.statusCode !== 200) return reject(new Error('status ' + res.statusCode + ' for ' + url));
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', reject);
  });
}

(async () => {
  let ok = 0, fail = 0;
  for (const [ref, rel] of Object.entries(map)) {
    const url = urls[ref];
    if (!url) { console.log('NO URL for', ref); fail++; continue; }
    const dest = path.join(outRoot, rel);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    try {
      await download(url, dest);
      ok++;
    } catch (e) {
      console.log('FAILED', ref, e.message);
      fail++;
    }
  }
  console.log('done. ok=', ok, 'fail=', fail);
})();
