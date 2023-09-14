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
    "revision": "28349489fe8c809c531d79e5d5b407a1"
  },
  {
    "url": "assets/css/0.styles.5184230a.css",
    "revision": "fc69eb59482f93c92fefd69b93391f8f"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/alipay.8701cc62.svg",
    "revision": "8701cc6229ab9a0b625126cdc1838777"
  },
  {
    "url": "assets/img/bg.a2d1cf1a.svg",
    "revision": "a2d1cf1ad2becdd79823541dae101fcd"
  },
  {
    "url": "assets/img/github.23fc8f81.svg",
    "revision": "23fc8f81f92bb2981d8f9e089d7df14a"
  },
  {
    "url": "assets/img/iconfont.b555cd18.svg",
    "revision": "b555cd1856984a1bbcc86791b54db341"
  },
  {
    "url": "assets/img/love.335eff6a.svg",
    "revision": "335eff6a0aefd9ce25d8624c9cae2f54"
  },
  {
    "url": "assets/img/paypal.0614c8ec.svg",
    "revision": "0614c8ec69152b15a48a6508c9ab7373"
  },
  {
    "url": "assets/img/qq.63e39c8c.svg",
    "revision": "63e39c8cb5ba4f6931ea28f722e0f065"
  },
  {
    "url": "assets/img/wechat.702bca7b.svg",
    "revision": "702bca7befb1db3ac5dace5bb9912188"
  },
  {
    "url": "assets/js/1.5781ff04.js",
    "revision": "b7abf3d322247f15d429e4f96067c9ea"
  },
  {
    "url": "assets/js/10.f5fcea20.js",
    "revision": "d3b43329b0af58eecc772f99e789a98e"
  },
  {
    "url": "assets/js/11.b8900be2.js",
    "revision": "f3a777796b2b461dc0c9db25273550eb"
  },
  {
    "url": "assets/js/12.d447bfdd.js",
    "revision": "5b9c530e5a77ea1dea4b7617d8195754"
  },
  {
    "url": "assets/js/13.e9c5b5bc.js",
    "revision": "24386d18faf868fbe2f69795c256a4a4"
  },
  {
    "url": "assets/js/14.92bad355.js",
    "revision": "6b5fc941a73fa10c0fd5614c0cdfdc88"
  },
  {
    "url": "assets/js/15.63759d74.js",
    "revision": "23ac8da891fe6940f5eba03c0f9a3528"
  },
  {
    "url": "assets/js/16.89ee6ea8.js",
    "revision": "53b42b118dd0ca03a04faf6c90a3abe3"
  },
  {
    "url": "assets/js/17.5ac53d0c.js",
    "revision": "3497202878028bf55e00a1ecad785aa4"
  },
  {
    "url": "assets/js/18.8f8aac43.js",
    "revision": "db152938c8efb1bb807c0312187e6907"
  },
  {
    "url": "assets/js/19.95ee8e30.js",
    "revision": "f72465a2c397c4baa3bcb4913487e9c8"
  },
  {
    "url": "assets/js/2.b5f871c5.js",
    "revision": "eb0181ddf27d3e5e9dd54b83bfc7963f"
  },
  {
    "url": "assets/js/20.5b95e24a.js",
    "revision": "b7b8f36dd1bd2079b66943057b3e9576"
  },
  {
    "url": "assets/js/21.b5a53104.js",
    "revision": "be754e740732723cbd12ebe1eed87f2b"
  },
  {
    "url": "assets/js/22.0b09ecac.js",
    "revision": "711a2e728d3be3df33db93f6f4f44133"
  },
  {
    "url": "assets/js/23.3ff43859.js",
    "revision": "802bd0dfa250f898f0fe877f784dbfee"
  },
  {
    "url": "assets/js/24.2ea2cb6e.js",
    "revision": "b10ddf19b580c8dd24d7ed351aafae28"
  },
  {
    "url": "assets/js/25.8f0b6da8.js",
    "revision": "dd4b8e9a54ed8b43495206ad4b5c8f5d"
  },
  {
    "url": "assets/js/26.6855bb6e.js",
    "revision": "02904a6a0aff7200c814a6f7a795efd7"
  },
  {
    "url": "assets/js/27.5c1fa531.js",
    "revision": "76357cb8c05cec06340c2a9eb2e68e13"
  },
  {
    "url": "assets/js/28.de47abbe.js",
    "revision": "24e8aa43cc8d7355386ef1d52189b79d"
  },
  {
    "url": "assets/js/29.99b420c4.js",
    "revision": "4a44f146d20860a7546094914ea5e18d"
  },
  {
    "url": "assets/js/30.a73d2315.js",
    "revision": "07ce77608f859319e1f8ecdbf25d53a2"
  },
  {
    "url": "assets/js/31.8c85705a.js",
    "revision": "9ee2dd7fa44b6b7f33b3d41270f3e19d"
  },
  {
    "url": "assets/js/32.afa2668e.js",
    "revision": "7de21b695a245c37fdd8358a5e42487d"
  },
  {
    "url": "assets/js/33.cf660ffb.js",
    "revision": "fe68ae96f20661e44435767a2bb38179"
  },
  {
    "url": "assets/js/34.bcef5c7e.js",
    "revision": "21b4ca9005313eb8fe060596c63a1e71"
  },
  {
    "url": "assets/js/35.d5ce1852.js",
    "revision": "51b3b14a7c728532ce0a2ac5d2da521d"
  },
  {
    "url": "assets/js/36.df05ced5.js",
    "revision": "aec771812a344cfee20d16423df34e78"
  },
  {
    "url": "assets/js/37.0a29ca72.js",
    "revision": "9830456351f5c32c4b1fa234f4944441"
  },
  {
    "url": "assets/js/38.a1f180c9.js",
    "revision": "30af42490a4fb3afdfcd05fbddf113ac"
  },
  {
    "url": "assets/js/39.b0f9a879.js",
    "revision": "8d6e61638d1aefcea8ad945f55b09cea"
  },
  {
    "url": "assets/js/4.815ba154.js",
    "revision": "24a5facf1b1e844d83ead43d40f18be1"
  },
  {
    "url": "assets/js/40.198658c9.js",
    "revision": "fb26190fee8bf5957f5905750658502f"
  },
  {
    "url": "assets/js/41.69420bd5.js",
    "revision": "8da59f6300b59366e046d8ab4f954f33"
  },
  {
    "url": "assets/js/42.b5514ad5.js",
    "revision": "ce608b7db986b298111bb54236ff7311"
  },
  {
    "url": "assets/js/43.c02cc79c.js",
    "revision": "919c8d607c968d53b4efd24c7d9f7792"
  },
  {
    "url": "assets/js/44.6ebd1d64.js",
    "revision": "fa3df76e8defe1738da1c45571abb3f9"
  },
  {
    "url": "assets/js/45.0f59df2a.js",
    "revision": "3b9277a3b1545b3ccdcf96fd7bb4e130"
  },
  {
    "url": "assets/js/46.0b7d0688.js",
    "revision": "2bef859f7bd46482f00b87b9bba0bf94"
  },
  {
    "url": "assets/js/47.8eee96bb.js",
    "revision": "a514351023cbafcb6ccc27ed69a82b0c"
  },
  {
    "url": "assets/js/48.3c03b040.js",
    "revision": "3fd4fbcf08ce297f6caa8381487695ca"
  },
  {
    "url": "assets/js/49.6d810b34.js",
    "revision": "173a2a1935066670d611e1b34a5767a3"
  },
  {
    "url": "assets/js/5.188257f1.js",
    "revision": "548a43a2eea4b86e06d2717c67eaa4a7"
  },
  {
    "url": "assets/js/50.94a85f8a.js",
    "revision": "e0f2fca6caa0aed9e35515d2fda679db"
  },
  {
    "url": "assets/js/6.c00c8b55.js",
    "revision": "811099fe3cd21a50aac1e135cf482399"
  },
  {
    "url": "assets/js/7.6ece050c.js",
    "revision": "d5c068f673e6d62545a654b0cd0aed06"
  },
  {
    "url": "assets/js/8.e8816c83.js",
    "revision": "8aeace20380c7dfce26b6fd390147a69"
  },
  {
    "url": "assets/js/9.05f1110d.js",
    "revision": "25315b8180cb356e569996c965163698"
  },
  {
    "url": "assets/js/app.e72e5307.js",
    "revision": "a03ee1f87e332aa649bba11f023d6700"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/高效开发/右键文件用VSC打开/index.html",
    "revision": "7e809b087ca92aa2020d6abc7b906dfe"
  },
  {
    "url": "blogs/高效开发/网站ico图标/index.html",
    "revision": "618e1ed5e3794de6c5d8a2ad2c2ab413"
  },
  {
    "url": "categories/cesium三维地图/index.html",
    "revision": "f9d6f5950992635e7a719df45570bd78"
  },
  {
    "url": "categories/index.html",
    "revision": "e40c0b2849e1b305535263f8fde54a8b"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "c85efafb3a33c1a9e6c4d4e4ba9ea2e1"
  },
  {
    "url": "categories/TypeScript/index.html",
    "revision": "2ceb28cee69e6b34b53628599e3665ce"
  },
  {
    "url": "categories/VUE2/index.html",
    "revision": "b23d68fd4add15d4371e49d53059d21f"
  },
  {
    "url": "categories/VUE3/index.html",
    "revision": "1f04fe1084306ec9223e0bd02a2fa8ac"
  },
  {
    "url": "categories/博客搭建/index.html",
    "revision": "d4493d56bd525936c7d32a6425d24567"
  },
  {
    "url": "categories/高效开发/index.html",
    "revision": "fbfad4af5e880e0c7a2ead1979863655"
  },
  {
    "url": "css/font.min.css",
    "revision": "8d673d72f9a9bf401e4ca3b9b2abc07c"
  },
  {
    "url": "css/style.css",
    "revision": "72181c88f2ba6a20d61ef36298d9c115"
  },
  {
    "url": "docs/cesium三维地图/cesium配置/index.html",
    "revision": "c4bda21d71ddc421ccbcb3f9d0c15a1e"
  },
  {
    "url": "docs/cesium三维地图/index.html",
    "revision": "faac5c1d02baacf4544df358c8b9c14e"
  },
  {
    "url": "docs/cesium三维地图/地图坐标以及点击弹框/index.html",
    "revision": "edf7db52632a37bbba87ff63ce1c57ee"
  },
  {
    "url": "docs/cesium三维地图/坐标地面闪烁/index.html",
    "revision": "1e01c60293dacefb80d2482a0db702c7"
  },
  {
    "url": "docs/cesium三维地图/添加一个立方体/index.html",
    "revision": "3ee6525f73ac7feabe3327ab7c46cb00"
  },
  {
    "url": "docs/cesium三维地图/点位起飞并有落地线/index.html",
    "revision": "7dc56efcc7d3f34edab4d521e11088ae"
  },
  {
    "url": "docs/cesium三维地图/离线地图瓦片引用/index.html",
    "revision": "ed287164a5b4839c0ec4698b3c87118e"
  },
  {
    "url": "docs/JavaScript/index.html",
    "revision": "4f80b26fd89f0b68349c7866d40f50a9"
  },
  {
    "url": "docs/JavaScript/js数据类型判断/index.html",
    "revision": "c2e595a8b170ce024f62275c84f5a930"
  },
  {
    "url": "docs/JavaScript/去重/index.html",
    "revision": "bca970eac32f6288f41f3b8455bf4662"
  },
  {
    "url": "docs/JavaScript/面试题笔录/index.html",
    "revision": "182423abf8c892023dfa8cdf8764a528"
  },
  {
    "url": "docs/TypeScript/index.html",
    "revision": "3ece8f6f2265bb5bea8c79da1dd0833a"
  },
  {
    "url": "docs/TypeScript/函数/index.html",
    "revision": "83bb2aff1316fdc49fcde34a6ad9b4b8"
  },
  {
    "url": "docs/TypeScript/接口/index.html",
    "revision": "0d8c9a62dd57d0b30632b6083354d822"
  },
  {
    "url": "docs/TypeScript/数据类型/index.html",
    "revision": "9cafe75ffd537b56e59b0a532ffc2d7f"
  },
  {
    "url": "docs/TypeScript/泛型/index.html",
    "revision": "d272aca1e240e61788faf0a661609e04"
  },
  {
    "url": "docs/TypeScript/类/index.html",
    "revision": "c7a80bafcbb1514763e6da731174f52b"
  },
  {
    "url": "docs/VUE2/computed和watch/index.html",
    "revision": "3a4a18a0b857f907c3d7709a9e504b2f"
  },
  {
    "url": "docs/VUE2/index.html",
    "revision": "e548c5505804a7da9d28048e6967a88b"
  },
  {
    "url": "docs/VUE2/vue开发技巧/index.html",
    "revision": "4343a2a77286462298fd60f5dfeb40a4"
  },
  {
    "url": "docs/VUE2/VUE的指令/index.html",
    "revision": "72f7d33d4749a1f8ffa68eb57993548e"
  },
  {
    "url": "docs/VUE2/传参方式/index.html",
    "revision": "b274c65c0caabf1e0652b19da5a636bc"
  },
  {
    "url": "docs/VUE2/列表滚动/index.html",
    "revision": "835e6d715a43b54ebefc6daa270c103b"
  },
  {
    "url": "docs/VUE2/生命周期/index.html",
    "revision": "80cb23df0e565b590cdef435e2b97a64"
  },
  {
    "url": "docs/VUE2/组件缓存/index.html",
    "revision": "b9435d57bfb1f017aebdcde184db78c0"
  },
  {
    "url": "docs/VUE2/路由/index.html",
    "revision": "c797f29a3a7824d70dfd9197efb50fa1"
  },
  {
    "url": "docs/VUE3/composition组合式API/index.html",
    "revision": "3c0b47ee5b49645400129f4b93da301e"
  },
  {
    "url": "docs/VUE3/index.html",
    "revision": "ff05d809caf52d3e2f809c2499b3c66b"
  },
  {
    "url": "docs/VUE3/Pinia/index.html",
    "revision": "eba8315bbcc286138c478c3cfe99d053"
  },
  {
    "url": "docs/VUE3/新组件/index.html",
    "revision": "dad4083957e33f86e128fd05ca9269a6"
  },
  {
    "url": "docs/博客/index.html",
    "revision": "f3fd90e0574596f6fdd370e54efc9479"
  },
  {
    "url": "docs/博客/侧边栏/index.html",
    "revision": "5de69e6bd7f0ac1c60655522d2df3c41"
  },
  {
    "url": "docs/博客/插件大全/index.html",
    "revision": "baa4cf76f86ac8c7363a50f75f293d15"
  },
  {
    "url": "docs/博客/插件的使用/index.html",
    "revision": "2dd36755d0d7bbeb6e3122d857f7e465"
  },
  {
    "url": "docs/博客/部署github和gitee/index.html",
    "revision": "2553185700e95faa17d6cdadb9ce0d23"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "img/tangmi.jpg",
    "revision": "b8ddc462d10d78c7caadc02d09fbc7b3"
  },
  {
    "url": "index.html",
    "revision": "a834df6a3b7564a8d5a80f6b43acacc7"
  },
  {
    "url": "js/background.js",
    "revision": "3eaf056031e4adea3c4067b57eb49877"
  },
  {
    "url": "js/main.js",
    "revision": "f5b45e852c6552c1fd990ca1716948b7"
  },
  {
    "url": "js/windows.js",
    "revision": "789dc605134ad9a24e32025b546c113a"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "tag/cesium三维地图/index.html",
    "revision": "10ef82a38447745e49ba218c2e3b4e47"
  },
  {
    "url": "tag/index.html",
    "revision": "c1a4c2b78c676f3a6f8093bf3a146e8b"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "2cab86579c0f0cff21df1eb716191040"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "203dbf1157b9165f92e16249681763ba"
  },
  {
    "url": "tag/VUE2/index.html",
    "revision": "f6e0043962525522a08e99d1c012823c"
  },
  {
    "url": "tag/VUE3/index.html",
    "revision": "6c2c4c603ead7305801d24b20370d626"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "6a30297ef640e616bc93d957ab75ab84"
  },
  {
    "url": "tag/高效开发/index.html",
    "revision": "9dc24565a3c4040361a111f480a1e639"
  },
  {
    "url": "timeline/index.html",
    "revision": "db0b9de1a5c62c276e5b139376011cf4"
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
