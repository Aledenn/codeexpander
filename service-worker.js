/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8aef5cc947cce13dc8c3a234a2d3e19d"
  },
  {
    "url": "assets/css/0.styles.fcc32028.css",
    "revision": "ecdd8b996d6ce5f948d13427bcbc3db3"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/weixin-profile.1a275092.jpg",
    "revision": "1a2750928cffb146f2913680f3fccd46"
  },
  {
    "url": "assets/js/1.f3aaecaa.js",
    "revision": "1957d507695e52a9775b0ff65fefd696"
  },
  {
    "url": "assets/js/10.ec30e454.js",
    "revision": "2e8fd22ff95e34291425b2388e2bdec5"
  },
  {
    "url": "assets/js/11.e399033d.js",
    "revision": "856899d7e6971bbd1ec5f4456ca71408"
  },
  {
    "url": "assets/js/12.6b47bf81.js",
    "revision": "48284256ccc763c7b789e674b514b5af"
  },
  {
    "url": "assets/js/13.5be32de5.js",
    "revision": "1415d1e38d7a6b80b72fbade167a298c"
  },
  {
    "url": "assets/js/14.07a73e93.js",
    "revision": "a2dfad891cb70fbe8178e9a6483ed50f"
  },
  {
    "url": "assets/js/15.b126df7d.js",
    "revision": "581c1fba6e3e93f3f65fdf9e14255c9b"
  },
  {
    "url": "assets/js/16.bd8f0157.js",
    "revision": "07a45788ad4fa5e9cdecd1ba9db96f73"
  },
  {
    "url": "assets/js/17.b83d951d.js",
    "revision": "8ec8e9d72912a6466e33def0a8fa46e8"
  },
  {
    "url": "assets/js/18.f5912b65.js",
    "revision": "f53f06ac10836f1dc21e205c568a0fc5"
  },
  {
    "url": "assets/js/19.576db072.js",
    "revision": "fb6fbbb62363434815d89b399bd60d7e"
  },
  {
    "url": "assets/js/2.c9f00841.js",
    "revision": "107686a7bbe0496b94ee5d3f30956a0c"
  },
  {
    "url": "assets/js/20.b3a73994.js",
    "revision": "a6dc6a531e052ff28bf2769872e8bcc8"
  },
  {
    "url": "assets/js/21.960d0bb9.js",
    "revision": "e4d79aa136c46f3b49b16990322e59e4"
  },
  {
    "url": "assets/js/22.85aeb91d.js",
    "revision": "ca0acb8570fecc394ea7b2f494e71545"
  },
  {
    "url": "assets/js/23.161e174f.js",
    "revision": "58a8cd3fb3a8838c4a4c9da41cc4ad56"
  },
  {
    "url": "assets/js/24.25d19531.js",
    "revision": "9c65a6dd7476eab214c882d02549bca9"
  },
  {
    "url": "assets/js/25.341267d0.js",
    "revision": "c356da40c01b095a9134ff204c056bc4"
  },
  {
    "url": "assets/js/26.1fe0d499.js",
    "revision": "83f973f3ba1c2138fd00644fe52a2d9d"
  },
  {
    "url": "assets/js/27.e1ded1e4.js",
    "revision": "7bff59e9029e89f7290291445487ffba"
  },
  {
    "url": "assets/js/28.8b29e362.js",
    "revision": "02f9b887d0b050977b3b3a53a6540ca1"
  },
  {
    "url": "assets/js/29.54fae7fc.js",
    "revision": "87914f463e417edac6a851e622eecf66"
  },
  {
    "url": "assets/js/30.ee80b383.js",
    "revision": "a4a7e9228b0d79caa6017826dadc05bc"
  },
  {
    "url": "assets/js/31.3e79d9e7.js",
    "revision": "a0678b9a8acfb23ab80696c1ff8f84b4"
  },
  {
    "url": "assets/js/32.3246fa23.js",
    "revision": "ad18e86d77023b96e75f40d7ddd7136b"
  },
  {
    "url": "assets/js/33.374a1c3f.js",
    "revision": "a698565bbd43dee7a067dcde8e2a5e0c"
  },
  {
    "url": "assets/js/34.4ce7a1d1.js",
    "revision": "764b08ac460a8d000354748f2a7431ad"
  },
  {
    "url": "assets/js/35.2e3dbccc.js",
    "revision": "f79b0955809fb59e481a466f7205cb5e"
  },
  {
    "url": "assets/js/36.82811a3f.js",
    "revision": "31897d58f947e97c08b01b51110a14bf"
  },
  {
    "url": "assets/js/37.66b32ae8.js",
    "revision": "b9680aa8dccf236defab322eeed98a2e"
  },
  {
    "url": "assets/js/38.ccf5ca9d.js",
    "revision": "7ec77cf573e28475a735cfe59d735970"
  },
  {
    "url": "assets/js/39.668fbbb8.js",
    "revision": "450f83ecde8f993716c45ec57aad6099"
  },
  {
    "url": "assets/js/40.55ca35b5.js",
    "revision": "8543385ad56c0ae19fb058836f03f116"
  },
  {
    "url": "assets/js/41.50c6a948.js",
    "revision": "4f12c59010f65e4ade8fe993f0e85c44"
  },
  {
    "url": "assets/js/42.cecbf81d.js",
    "revision": "258cdb3aaf94d2e411cf9194d3a4c27c"
  },
  {
    "url": "assets/js/43.d022a607.js",
    "revision": "a8109fbce99e2795881a3064a338bb7e"
  },
  {
    "url": "assets/js/44.171b645e.js",
    "revision": "3d00238f5448e92a8b0d10cd88e034de"
  },
  {
    "url": "assets/js/45.7cbe18b0.js",
    "revision": "605bfa408e0461b546a50da01ba825d7"
  },
  {
    "url": "assets/js/46.ba3781c8.js",
    "revision": "fc9b46df03bd4e31bebb879c017ee592"
  },
  {
    "url": "assets/js/47.b9b6d55d.js",
    "revision": "63bb1afaded501cdcb8a0844311ab80a"
  },
  {
    "url": "assets/js/48.fcb87f45.js",
    "revision": "502e8e5d674d892bda7b82c6bf989168"
  },
  {
    "url": "assets/js/49.13488107.js",
    "revision": "1fbedaf6722de39bde189a82f0979e94"
  },
  {
    "url": "assets/js/50.dc4f3d67.js",
    "revision": "e8c0dcb1ca1c76bf618af099a9428c2a"
  },
  {
    "url": "assets/js/51.7dbff0de.js",
    "revision": "6d8d2a5b2aa947b2abc119343acca60f"
  },
  {
    "url": "assets/js/52.e3a587c8.js",
    "revision": "a608376f6553d879ae1c5b4b5667e0d0"
  },
  {
    "url": "assets/js/53.34c403c7.js",
    "revision": "f27959ee9f0f3f65db2fc9370ef8df82"
  },
  {
    "url": "assets/js/54.ffe38f8f.js",
    "revision": "b549b6fc12cdd26b3d71a6ba2c38df77"
  },
  {
    "url": "assets/js/6.b3b4af32.js",
    "revision": "b1627c1c6d26aba1f91abe3e9fb5fb11"
  },
  {
    "url": "assets/js/7.c5b35ad7.js",
    "revision": "2fc14a6a1ee062ab5e85dca7b16d577a"
  },
  {
    "url": "assets/js/8.bfcc1792.js",
    "revision": "e11a2cc741ccaa616cf7190a29721189"
  },
  {
    "url": "assets/js/9.aa7177d0.js",
    "revision": "872fcb0e6a48133d0c4be6adff21a9a0"
  },
  {
    "url": "assets/js/app.62a6a870.js",
    "revision": "07b9f5518119973af67257818dfa620c"
  },
  {
    "url": "assets/js/vendors~docsearch.062970df.js",
    "revision": "c5f082027d930236bdf01443b9f1b032"
  },
  {
    "url": "assets/js/vendors~flowchart.914912f6.js",
    "revision": "3b026aebe818f239a418c27e214c4c51"
  },
  {
    "url": "categories/index.html",
    "revision": "e6cdd9d1a8c3d385e11258406114b5ff"
  },
  {
    "url": "en/index.html",
    "revision": "d8006b4d9e3fffa31f7d05e04a912dac"
  },
  {
    "url": "en/views/advance/calendar.html",
    "revision": "ee47882cdad09960a7893a18e55ef6a6"
  },
  {
    "url": "en/views/advance/fill-in.html",
    "revision": "17168e618356873db1a7f113db15b23c"
  },
  {
    "url": "en/views/advance/group.html",
    "revision": "7c528b410635042f6be2d9fcc671ae4d"
  },
  {
    "url": "en/views/advance/keyboard.html",
    "revision": "beff9a76a9ac07b5e6588e225316a71f"
  },
  {
    "url": "en/views/advance/rich-text.html",
    "revision": "39c37372f87d17f9594351f7448d1d27"
  },
  {
    "url": "en/views/advance/text-and-script.html",
    "revision": "96cd538e32ee2bd74a4a9d822c6abd41"
  },
  {
    "url": "en/views/introduce/basic-usage.html",
    "revision": "280cfa7bc2b98bd7dca9fffd52159974"
  },
  {
    "url": "en/views/introduce/features.html",
    "revision": "18e27aa53ea0924b80c7e2a3ac84d088"
  },
  {
    "url": "en/views/introduce/installation.html",
    "revision": "52123119a568e1fff0142f3bc80ac565"
  },
  {
    "url": "en/views/introduce/quick-browse.html",
    "revision": "8c526b4ade3cc6070c4a2638b10a872f"
  },
  {
    "url": "en/views/price.html",
    "revision": "de8561acbc91d5d33cd3069dfaf8bfcf"
  },
  {
    "url": "en/views/reference/changelog.html",
    "revision": "c4320fa84f2bb70ce85c91e02863aacb"
  },
  {
    "url": "en/views/reference/faq.html",
    "revision": "901802ba8a3eaf0e891efa717b662e90"
  },
  {
    "url": "en/views/reference/privacy-policy.html",
    "revision": "22298d972b0484329327550909617789"
  },
  {
    "url": "en/views/reference/shortcut.html",
    "revision": "75a2663c42aebc3ca2fe2970337027d3"
  },
  {
    "url": "index.html",
    "revision": "c7a654dd35dbfce16728ebaf9dc068c3"
  },
  {
    "url": "static/head.png",
    "revision": "dd03fa8d6242c13528f676b1a035c306"
  },
  {
    "url": "static/icon_codeexpander.svg",
    "revision": "d8e877e0520ecbd7a7afecdfe46b5a09"
  },
  {
    "url": "static/icon.png",
    "revision": "99c6bf0783502be7a3b2b546fe0e779a"
  },
  {
    "url": "tag/index.html",
    "revision": "ae283f32bdb98efd31cfd3d744650a41"
  },
  {
    "url": "timeline/index.html",
    "revision": "c0fa7c1a9f59f62228ba708c300a4ffe"
  },
  {
    "url": "views/advance/calendar.html",
    "revision": "f750e39b79860a3ab376f9acc4123578"
  },
  {
    "url": "views/advance/fill-in.html",
    "revision": "dbf808253f2f696f1b7748176133ffb9"
  },
  {
    "url": "views/advance/group.html",
    "revision": "7874ebeec45caf39267781dacea2402f"
  },
  {
    "url": "views/advance/keyboard.html",
    "revision": "0dc2e386d090c4466bebc4fa794a0878"
  },
  {
    "url": "views/advance/rich-text.html",
    "revision": "0beb86b830769e0219f486d83bd05741"
  },
  {
    "url": "views/advance/text-and-script.html",
    "revision": "6cc6948cf75b4f3167e8de702fee9310"
  },
  {
    "url": "views/introduce/basic-usage.html",
    "revision": "6dfcc074f3f05aac83c50ee68d8fe3ab"
  },
  {
    "url": "views/introduce/features.html",
    "revision": "f7eed57f8cbe464c1342693192c0e37f"
  },
  {
    "url": "views/introduce/installation.html",
    "revision": "bea161494c33478ed2fcebb603726dee"
  },
  {
    "url": "views/introduce/quick-browse.html",
    "revision": "5a389adaeb4c5d877cc717995d107da4"
  },
  {
    "url": "views/price.html",
    "revision": "7a7f868ac899751644a35514c2137500"
  },
  {
    "url": "views/reference/faq.html",
    "revision": "0f05b6b1d7877df1d8562611f9674922"
  },
  {
    "url": "views/reference/privacy-policy.html",
    "revision": "2ca7693c6f901475ea3ef0e5dffb7d59"
  },
  {
    "url": "views/reference/shortcut.html",
    "revision": "db685b88028a72c51ffd5c226a053203"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
