/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2020/posts/143f7edb/index.html","b2414c910d339d3fed0f52e8d8065512"],["/2020/posts/2c805e6b/index.html","411d6bde00116ae75cac049875179852"],["/2020/posts/37890470/index.html","113b60777071e24c19ad74af829cf0b7"],["/2020/posts/62a00332/index.html","a66ad7bb912e05db69accee20631cd6d"],["/2020/posts/7a1e39fd/index.html","3f442d8e915e6b708643e4680fc5791a"],["/2020/posts/7d8b55fe/index.html","0e89209ad85ac0e3cb2ee894aebe27d2"],["/2020/posts/91fe0fc4/index.html","ac5f5c507f5e00198140e93316c37108"],["/2020/posts/d6df3a18/index.html","17772ad6291a1ad18ffac519a94ed32a"],["/2020/posts/dcfdf76e/index.html","f8b29f7352d0104939b4e188d6b37571"],["/2020/posts/e8563c5f/index.html","9cf6f9da929447558d8f5521f7e65030"],["/404.html","48099526f0165c8fb72fcc54a78ba9bd"],["/Artitalk/index.html","4cf2416a480ea097b516ae9b2fef73aa"],["/Browsing info.js","d165103d6f023ca720a8c9b8b4c8f392"],["/FCDN.svg","3b72119a351f7dba9647b64a53bbe3f1"],["/Hosting.svg","ddb7993467b1c8dba706d4734c0b642d"],["/Jump.html","4bd8d315c2bc41d0ce799fd4df4eca02"],["/WT.svg","026e755dc980c1a59cc0039709909a3f"],["/about/index.html","e08d0f2ff6ad1d94063919f8047e5c95"],["/archives/2020/05/index.html","61173da46cbd185ea7c04328a9fa5411"],["/archives/2020/06/index.html","a8a1a6cda920929af9962376c3685852"],["/archives/2020/index.html","8dbd0d7053b5161523ccfee5c048fc16"],["/archives/index.html","b4fc8ef42cb7283a5bbbd2033eb9fc44"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/index.html","6f2251e370a0b9a72a03ebae2f934900"],["/cdn-nig/my/logo.png","9bcb2f3f88e6dc7da309f2e7aa4307b0"],["/cdn.svg","f34424324baf3a51ead48d99c469177e"],["/css/font-awesome-animation.min.css","67046ea250d57883c8508731b0bb7270"],["/css/iconfont.css","b55efc57f12c54688972ce21d81aeb75"],["/css/iconfont.min.css","7b769ae53f696b40cc191b53dfef2cf6"],["/css/index.css","c3b53cc80d56eb161369b1c75bcecb15"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/files/index.html","5c953ec6098fece1ee0b02e2e97517fd"],["/icp备案/cx/blog.slqwq.cn/index.html","1ccf25d3ad839296888b0700399b762d"],["/icp备案/index.html","050b6bf027417a95992dc7cf72a84a6f"],["/images/BeJ.jpg","ed163163aa7cda1dac611b3287e6c2ac"],["/images/alipay.png","819dd0110c4f574b52bf4d193de5b0f5"],["/images/banner.jpg","ed163163aa7cda1dac611b3287e6c2ac"],["/images/co.jpg","85c8d8b1b531184dacacff58cc8858cf"],["/images/ds.png","6b702e62a9be704b562407d933479311"],["/images/icons/apple-touch-icon.png","94ffbe44b4a3b5eece162e4ca617c4cb"],["/images/icons/icon-128x128.png","13223e34c2d397703cd68dece1b6852d"],["/images/icons/icon-144x144.png","8702c204dd725f2be03000687700a7a6"],["/images/icons/icon-152x152.png","dff2a0cb044d64e271d45789efb09746"],["/images/icons/icon-192x192.png","94ffbe44b4a3b5eece162e4ca617c4cb"],["/images/icons/icon-384x384.png","94ffbe44b4a3b5eece162e4ca617c4cb"],["/images/icons/icon-512x512.png","94ffbe44b4a3b5eece162e4ca617c4cb"],["/images/icons/icon-72x72.png","6719039ea60cc90e2a5f76ee989db58b"],["/images/icons/icon-96x96.png","d81d66e16f2eb037b4a808afab83e64e"],["/images/loding.gif","e24d90ef6b23a0780753c03324437c2a"],["/images/logo.png","58fd5639c6a7b7150f4ef427ce04a2ca"],["/images/th.png","ed163163aa7cda1dac611b3287e6c2ac"],["/images/upyunlogo.png","c8effd97f77fead52d73c4331d6299b2"],["/images/wechat.png","b876a8446e11c13deb9f7c04093d5369"],["/images/wer.jpg","2fda1fdab83b4446b7e0a0308dbb10f8"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","58fd5639c6a7b7150f4ef427ce04a2ca"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/fras.jpg","46ae22a80c7d968a44e129cf27d4de67"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/logoc.png","ff7220727fe71b6c0675d9c92bcaf0ef"],["/img/miicon.png","4b63179db3c45dfd9078a252b2575cd1"],["/img/pg.png","24dc3afa58446ffac8b0098c0f72318e"],["/img/pj.jpg","2667eb14fe7e26be97723df53e3d0a9d"],["/img/yticon.png","8c5979ba87e63644eeda841588ce7e34"],["/index.html","bb47f6258b3ae823d571960aaa0c9ea1"],["/js/main.js","af1fc968dd48dafada95cd797f906acc"],["/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["/js/utils.js","9a79a530e612235ae91149848ed41a83"],["/la.js","c8bd754a8fb5d8e40718e94f807095ed"],["/link/index.html","caec748dcd1211b08690e6875a1a85d9"],["/pace-1.0.2/README.html","134c35a65e9ec67bc3c8c15debaa1b21"],["/pace-1.0.2/docs/intro.html","314843afa987dd7e524eb2ddebbe285a"],["/pace-1.0.2/docs/lib/color.js","662871ae46427e84fd55ef321b413cc3"],["/pace-1.0.2/docs/lib/themes.js","6681521f57742148eac5d93df8e861a5"],["/pace-1.0.2/docs/resources/barber-pole-orange.css","b142ace84085bdf2e746451eefd179a2"],["/pace-1.0.2/docs/resources/flash-white.css","5be5315011ad834944c28f1b805a6a59"],["/pace-1.0.2/docs/welcome/index.html","3edf6a761f3bcda7b21cd24d9e5fb7b0"],["/pace-1.0.2/pace.js","7af7d7420c800c66abd79cf7c1049324"],["/pace-1.0.2/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/pace-1.0.2/templates/pace-theme-barber-shop.tmpl.css","c782cbbe42e4e5a4b75885988716aef3"],["/pace-1.0.2/templates/pace-theme-big-counter.tmpl.css","e428dc45d67bc640cd600fe679920bf8"],["/pace-1.0.2/templates/pace-theme-bounce.tmpl.css","ad410a39c8e21fb16eae9f0a38fd165f"],["/pace-1.0.2/templates/pace-theme-center-atom.tmpl.css","a462ff7f29b3c2702e19a8c6d7e48946"],["/pace-1.0.2/templates/pace-theme-center-circle.tmpl.css","e033679675461e94e6e89d4ccfca7056"],["/pace-1.0.2/templates/pace-theme-center-radar.tmpl.css","0feaa69701ac55402a488a06f67f45a2"],["/pace-1.0.2/templates/pace-theme-center-simple.tmpl.css","1cbf6e0dc7b05f40e3b3129164e917d1"],["/pace-1.0.2/templates/pace-theme-corner-indicator.tmpl.css","66b735ba124890d43a7bbd99931e01b7"],["/pace-1.0.2/templates/pace-theme-fill-left.tmpl.css","744637bfe91c69d21e13f602e2461ec1"],["/pace-1.0.2/templates/pace-theme-flash.tmpl.css","344875fcb7f77d745e7c2375b88cfb6e"],["/pace-1.0.2/templates/pace-theme-flat-top.tmpl.css","21022acb38f689135c357c30445653a3"],["/pace-1.0.2/templates/pace-theme-loading-bar.tmpl.css","f07a2524630d35efea14901cff51bcd5"],["/pace-1.0.2/templates/pace-theme-mac-osx.tmpl.css","3de7737c99a2d55db1f1bade3c6e134a"],["/pace-1.0.2/templates/pace-theme-minimal.tmpl.css","defd3c7b3a9e23f2db4b6291fc34f37a"],["/pace-1.0.2/tests/demo.html","bdad60650e2870b1c77739e1bdbe5190"],["/pace-1.0.2/themes/black/pace-theme-barber-shop.css","7bd09f65733ea7ea1b198d870979bc02"],["/pace-1.0.2/themes/black/pace-theme-big-counter.css","2ffc9101240b4eb2b7cddb4eed8e89c8"],["/pace-1.0.2/themes/black/pace-theme-bounce.css","0e81e01b799e70e0fc776ed229c862eb"],["/pace-1.0.2/themes/black/pace-theme-center-atom.css","e5437f59d832cd2712ac9d545bae3812"],["/pace-1.0.2/themes/black/pace-theme-center-circle.css","96920b0b7a61593a85fc92bbcbb14dcd"],["/pace-1.0.2/themes/black/pace-theme-center-radar.css","12c190a642e6193cddaea6213f72dcb9"],["/pace-1.0.2/themes/black/pace-theme-center-simple.css","36c1e0d6b46681ed95447419fa5fa99b"],["/pace-1.0.2/themes/black/pace-theme-corner-indicator.css","e2c0320b3a9443ff491289ebf59fc04e"],["/pace-1.0.2/themes/black/pace-theme-fill-left.css","04468ef669d7a93c9416cb79a1634ca9"],["/pace-1.0.2/themes/black/pace-theme-flash.css","12d827a35cf0bde24a02d149c80e2c1e"],["/pace-1.0.2/themes/black/pace-theme-flat-top.css","42e7fc0a2e7c55baf20f82f31f09a421"],["/pace-1.0.2/themes/black/pace-theme-loading-bar.css","cb2713170baf45301c360903d5e10d1b"],["/pace-1.0.2/themes/black/pace-theme-mac-osx.css","bc099acf8839302051d613b6dcac0744"],["/pace-1.0.2/themes/black/pace-theme-minimal.css","b4742db8316793cb0f89cf78aae06947"],["/pace-1.0.2/themes/blue/pace-theme-barber-shop.css","efad24d8a11296026c45a326759428bb"],["/pace-1.0.2/themes/blue/pace-theme-big-counter.css","de5b681732fbbc67987936a75a708290"],["/pace-1.0.2/themes/blue/pace-theme-bounce.css","ea0291cc48e1cf369e1a1927b65a5bb4"],["/pace-1.0.2/themes/blue/pace-theme-center-atom.css","121719cf48c3bdb994d633220e611ed7"],["/pace-1.0.2/themes/blue/pace-theme-center-circle.css","a70351a9e130286ad38f0cbf87258bd1"],["/pace-1.0.2/themes/blue/pace-theme-center-radar.css","aaa7774857c0281bfdf70702fe39529d"],["/pace-1.0.2/themes/blue/pace-theme-center-simple.css","f4013cb7a62edcfeb2e28605016788a9"],["/pace-1.0.2/themes/blue/pace-theme-corner-indicator.css","66b7d07513089a55cef743bbfe3d8835"],["/pace-1.0.2/themes/blue/pace-theme-fill-left.css","071888bc7e2fe76939c6a45dcee25a7c"],["/pace-1.0.2/themes/blue/pace-theme-flash.css","28958b9ac2bb370e6ad688adc034413a"],["/pace-1.0.2/themes/blue/pace-theme-flat-top.css","815ff0cf0daf2dafa2c2cb3faca798dd"],["/pace-1.0.2/themes/blue/pace-theme-loading-bar.css","9cb1d8ef30990676dd17448d1593d07f"],["/pace-1.0.2/themes/blue/pace-theme-mac-osx.css","9ce4a234e8b590dc0bbcaeb9429d8e04"],["/pace-1.0.2/themes/blue/pace-theme-minimal.css","7bba84cb68736f6ea9ae77cd934d995a"],["/pace-1.0.2/themes/green/pace-theme-barber-shop.css","b1faccb4a4157ab853e69b587fd76fc1"],["/pace-1.0.2/themes/green/pace-theme-big-counter.css","5ac488db4cff2b4afbc9e1e9d79c02e7"],["/pace-1.0.2/themes/green/pace-theme-bounce.css","1ff636580608ae28e798ae39f88662e0"],["/pace-1.0.2/themes/green/pace-theme-center-atom.css","f9a0d2baf4f606b65771ed61d22ff754"],["/pace-1.0.2/themes/green/pace-theme-center-circle.css","c8401f82eb69b3788d75c6cd8cc4a1c8"],["/pace-1.0.2/themes/green/pace-theme-center-radar.css","2463150181c5952d4b2aae2bf585144a"],["/pace-1.0.2/themes/green/pace-theme-center-simple.css","b788ea31de3294324a8b29fa21be56db"],["/pace-1.0.2/themes/green/pace-theme-corner-indicator.css","a765aa7ae450774e1d58a654e7e660e7"],["/pace-1.0.2/themes/green/pace-theme-fill-left.css","33d016afb117951bd58373c3e98ad069"],["/pace-1.0.2/themes/green/pace-theme-flash.css","626bad52d4efb0314b655c99e38f6199"],["/pace-1.0.2/themes/green/pace-theme-flat-top.css","96d01d7c3403005451c08aaf7b89bfe6"],["/pace-1.0.2/themes/green/pace-theme-loading-bar.css","28d94d5c1b3d9d570b2648c189cc7612"],["/pace-1.0.2/themes/green/pace-theme-mac-osx.css","2c5432400ecb9d26afe9cd3772270b40"],["/pace-1.0.2/themes/green/pace-theme-minimal.css","d5c0e9986615d00dbb20bc4d1341b6b6"],["/pace-1.0.2/themes/orange/pace-theme-barber-shop.css","1df49d6ba10b240cea1dacc8d462143b"],["/pace-1.0.2/themes/orange/pace-theme-big-counter.css","db05cbb4d771cecfaac9f3750264f640"],["/pace-1.0.2/themes/orange/pace-theme-bounce.css","f81173c8214f7d7e8855ec934248cd98"],["/pace-1.0.2/themes/orange/pace-theme-center-atom.css","56d0e7b8a5194afca5ad1b9328ad9d96"],["/pace-1.0.2/themes/orange/pace-theme-center-circle.css","3d238431131f37c3c8cfcd76f7e998d5"],["/pace-1.0.2/themes/orange/pace-theme-center-radar.css","ed52b7c705120a50274a97582c17873a"],["/pace-1.0.2/themes/orange/pace-theme-center-simple.css","6ad04146582d31cff3b979eea4ea1d04"],["/pace-1.0.2/themes/orange/pace-theme-corner-indicator.css","ffecc42ae73df8a365f9c4f74080161b"],["/pace-1.0.2/themes/orange/pace-theme-fill-left.css","4f44647fd369a4f89dd26c722b7a9f92"],["/pace-1.0.2/themes/orange/pace-theme-flash.css","851d4d1a00d61a47effca61d22518e43"],["/pace-1.0.2/themes/orange/pace-theme-flat-top.css","216fa508fde913b2ec058cdbf661fd5e"],["/pace-1.0.2/themes/orange/pace-theme-loading-bar.css","7c9ea3aa955dbd55cdfa35592ee073ca"],["/pace-1.0.2/themes/orange/pace-theme-mac-osx.css","c8c6edfe83e6c279d4184bccbee47dad"],["/pace-1.0.2/themes/orange/pace-theme-minimal.css","a71cbb0fc1da8dcd5672e586a33d1e29"],["/pace-1.0.2/themes/pink/pace-theme-barber-shop.css","6433ca39f3ba4c51d40b074647a57354"],["/pace-1.0.2/themes/pink/pace-theme-big-counter.css","e01dba53ffe1867e550509b9843eea3c"],["/pace-1.0.2/themes/pink/pace-theme-bounce.css","aeff1b28fd3b56b338f2233af1511ad6"],["/pace-1.0.2/themes/pink/pace-theme-center-atom.css","f5a58968ed7b8c80bf44fd61815db104"],["/pace-1.0.2/themes/pink/pace-theme-center-circle.css","dae9b8ae02a33ff7dd972c0d2208b03c"],["/pace-1.0.2/themes/pink/pace-theme-center-radar.css","431c38bc7438ffb4e8d3b17aec383919"],["/pace-1.0.2/themes/pink/pace-theme-center-simple.css","d84a3513f3c8a957a0808fd424522178"],["/pace-1.0.2/themes/pink/pace-theme-corner-indicator.css","988c93891a873cc5ca44b69db80d99ca"],["/pace-1.0.2/themes/pink/pace-theme-fill-left.css","2e0de53e1bc454900b6378396be89bb4"],["/pace-1.0.2/themes/pink/pace-theme-flash.css","d9f0ae04cf220565093aea14ff1fa2ed"],["/pace-1.0.2/themes/pink/pace-theme-flat-top.css","af2cc43531973fee010b9bdfeb020033"],["/pace-1.0.2/themes/pink/pace-theme-loading-bar.css","14fdf93e584a0484fa5a91205e2acf2e"],["/pace-1.0.2/themes/pink/pace-theme-mac-osx.css","984d455b0214a25e47968dfdead453da"],["/pace-1.0.2/themes/pink/pace-theme-minimal.css","63483a4441790941b65c00e3b3216f79"],["/pace-1.0.2/themes/purple/pace-theme-barber-shop.css","72f3f06b8fe2d7c86019642e14450a0b"],["/pace-1.0.2/themes/purple/pace-theme-big-counter.css","433c8f7caaa62f6b8d90d085edda5f67"],["/pace-1.0.2/themes/purple/pace-theme-bounce.css","81a46504fd747f34f16f0cd39635e953"],["/pace-1.0.2/themes/purple/pace-theme-center-atom.css","bad3a1aa3b510e94164037a17994d002"],["/pace-1.0.2/themes/purple/pace-theme-center-circle.css","ed2aaa5775c2fd083f69232500ed21de"],["/pace-1.0.2/themes/purple/pace-theme-center-radar.css","688e78f46cb10cc91287de81658f6fd8"],["/pace-1.0.2/themes/purple/pace-theme-center-simple.css","c7dfcd3682aed026702c1e7a29307fe9"],["/pace-1.0.2/themes/purple/pace-theme-corner-indicator.css","b8b135f29437d82e22bbd61cfb648aa7"],["/pace-1.0.2/themes/purple/pace-theme-fill-left.css","1af470a65c017018b31cc6bb5f70f70e"],["/pace-1.0.2/themes/purple/pace-theme-flash.css","729f26dcbac42a296356bd7404255489"],["/pace-1.0.2/themes/purple/pace-theme-flat-top.css","c92040d9c50b4883c86f70b17839cfef"],["/pace-1.0.2/themes/purple/pace-theme-loading-bar.css","f664ed0b6f7c4d2880c7266a1c070200"],["/pace-1.0.2/themes/purple/pace-theme-mac-osx.css","bed606945a3fcc2c7f31ddc6c0bd17c2"],["/pace-1.0.2/themes/purple/pace-theme-minimal.css","82a0fd446deaa0609ea223cb9e510bee"],["/pace-1.0.2/themes/red/pace-theme-barber-shop.css","6d336d79ea95261e11f6d40a44930c38"],["/pace-1.0.2/themes/red/pace-theme-big-counter.css","15c1417149fdf0b736a7ec5e9c47afb3"],["/pace-1.0.2/themes/red/pace-theme-bounce.css","b0fb2170d72615ec050f3ecdcf63669c"],["/pace-1.0.2/themes/red/pace-theme-center-atom.css","67cc1ddfe8c655abcf1ed9a8a0866e7f"],["/pace-1.0.2/themes/red/pace-theme-center-circle.css","0cfc2d18a6c727345f7296246147d2bf"],["/pace-1.0.2/themes/red/pace-theme-center-radar.css","d722dc39469c1d922137c9529bb6f67d"],["/pace-1.0.2/themes/red/pace-theme-center-simple.css","42dc43a947ab37a1f3f88e967daffebc"],["/pace-1.0.2/themes/red/pace-theme-corner-indicator.css","ade64e7246d7aaec4f68c24170362be2"],["/pace-1.0.2/themes/red/pace-theme-fill-left.css","238c1d4df97573b1091ecc5f213f95ab"],["/pace-1.0.2/themes/red/pace-theme-flash.css","fb28a831950138f2b74f081359a2f4f5"],["/pace-1.0.2/themes/red/pace-theme-flat-top.css","7741127c85d2c2823a3ac1514f4bcade"],["/pace-1.0.2/themes/red/pace-theme-loading-bar.css","27da69e80fca0bd21ca11a94504b8cd2"],["/pace-1.0.2/themes/red/pace-theme-mac-osx.css","f017fd7f8853a4c7d300e35fc2281780"],["/pace-1.0.2/themes/red/pace-theme-minimal.css","4f9be763d71bb2e8227112d8952e0141"],["/pace-1.0.2/themes/silver/pace-theme-barber-shop.css","a6b562bd49dbc3d93f00cd3ab30b3538"],["/pace-1.0.2/themes/silver/pace-theme-big-counter.css","5e6aea883517fc7242d81ddf2d0a43f0"],["/pace-1.0.2/themes/silver/pace-theme-bounce.css","55a3df829dfa2068534da4e87f5712b3"],["/pace-1.0.2/themes/silver/pace-theme-center-atom.css","e97a2b02eaaa77e61c53898ec23e662b"],["/pace-1.0.2/themes/silver/pace-theme-center-circle.css","546cd840db5c85382244555bb6843a4b"],["/pace-1.0.2/themes/silver/pace-theme-center-radar.css","9b65f0b0b8c65f3b6743df9ecc08c3c7"],["/pace-1.0.2/themes/silver/pace-theme-center-simple.css","f020fd9049a04661593a807289d2ff7c"],["/pace-1.0.2/themes/silver/pace-theme-corner-indicator.css","1c5e4d018fe818e33f20d012d6ec1306"],["/pace-1.0.2/themes/silver/pace-theme-fill-left.css","74ecac47186196cced4cfbde42cfa2ad"],["/pace-1.0.2/themes/silver/pace-theme-flash.css","27ea737051e10ccf85c585c771393ea8"],["/pace-1.0.2/themes/silver/pace-theme-flat-top.css","b31c2b6472cb0bb93a6616ee0cecfa9e"],["/pace-1.0.2/themes/silver/pace-theme-loading-bar.css","bee30f5d36ab3ccdcfc35a047dd2945f"],["/pace-1.0.2/themes/silver/pace-theme-mac-osx.css","141d49a72742dc56b2ac5573a3dd1f1b"],["/pace-1.0.2/themes/silver/pace-theme-minimal.css","7f1d4b01b82af9e8d56b05819b1d8b98"],["/pace-1.0.2/themes/white/pace-theme-barber-shop.css","1ef670df196e044d99874df7e528f832"],["/pace-1.0.2/themes/white/pace-theme-big-counter.css","5d206728c435343e5fa3ddbd2f0544cb"],["/pace-1.0.2/themes/white/pace-theme-bounce.css","893ec6b7e3135893744cb2dceff32159"],["/pace-1.0.2/themes/white/pace-theme-center-atom.css","fb1e71060996d8b66aa536e94eaae533"],["/pace-1.0.2/themes/white/pace-theme-center-circle.css","e4fbbc28a8d0f9bb5a6e280a4a98f38a"],["/pace-1.0.2/themes/white/pace-theme-center-radar.css","a6d1408b0c8c4f4364195cba45b5c6fd"],["/pace-1.0.2/themes/white/pace-theme-center-simple.css","dc5b93f3ca94c3baa527f7f3731dc9be"],["/pace-1.0.2/themes/white/pace-theme-corner-indicator.css","94a20479da5450def9042872e41294b1"],["/pace-1.0.2/themes/white/pace-theme-fill-left.css","9316c475b469f8a6912a14625cf06b1c"],["/pace-1.0.2/themes/white/pace-theme-flash.css","852fd8dcd2ba0f99acb4549cfed4c88c"],["/pace-1.0.2/themes/white/pace-theme-flat-top.css","241d6883060bf1c5fabf11c33a9d7325"],["/pace-1.0.2/themes/white/pace-theme-loading-bar.css","8012cdca29fff57ccd8234f8cb8ce285"],["/pace-1.0.2/themes/white/pace-theme-mac-osx.css","b2cfcd5bda678e12fd555824eda3aebe"],["/pace-1.0.2/themes/white/pace-theme-minimal.css","1f4d897012fce205c44de1125c17e1c0"],["/pace-1.0.2/themes/yellow/pace-theme-barber-shop.css","0cdbf72103fa8f565be29a60088da808"],["/pace-1.0.2/themes/yellow/pace-theme-big-counter.css","faeadfbd714c04135a75709447c452b4"],["/pace-1.0.2/themes/yellow/pace-theme-bounce.css","3ba40c68e3f0c69461a9c13a509f280f"],["/pace-1.0.2/themes/yellow/pace-theme-center-atom.css","866cac26845ba25cc73a28a2d747c54f"],["/pace-1.0.2/themes/yellow/pace-theme-center-circle.css","734e6680ed866c2ebbf3be1085d53388"],["/pace-1.0.2/themes/yellow/pace-theme-center-radar.css","643539c93bd5df86736a919a19cb099f"],["/pace-1.0.2/themes/yellow/pace-theme-center-simple.css","507f5e16093f52d6000a1ade5752728b"],["/pace-1.0.2/themes/yellow/pace-theme-corner-indicator.css","867b9c1909bc1c7de1ab378867c05a47"],["/pace-1.0.2/themes/yellow/pace-theme-fill-left.css","6bd4c8a06dfb2739316ea0e50a06d8cb"],["/pace-1.0.2/themes/yellow/pace-theme-flash.css","1658f150ca6b01dd4b4d8e074cfa9e1e"],["/pace-1.0.2/themes/yellow/pace-theme-flat-top.css","4297a1ab546704100c4165db8ff8d2bc"],["/pace-1.0.2/themes/yellow/pace-theme-loading-bar.css","14ff604440b235fb6d7f63fe2eb3ee66"],["/pace-1.0.2/themes/yellow/pace-theme-mac-osx.css","fbd2585c5515cc8d5424472092562cc9"],["/pace-1.0.2/themes/yellow/pace-theme-minimal.css","5d58f58738de69794a1d7d714540a804"],["/tag-plu.js","176cc4b7e4b28ae27e5faa4d28159966"],["/tags/Hexo/index.html","4573f26214c24e308973c83b9673d370"],["/tags/搭建Hexo系列/index.html","092ece9c6bde0d821c2a4f0b4196dfd3"],["/tags/白嫖党福利/index.html","48b82fd044473339861d97ad47f6be0a"],["/tpa.js","e964488536c0824197d9795115bc8acd"],["/unmusic/8613dc4a154ff52d48f0.worker.js","2ec206c711a1057e205916287d027391"],["/unmusic/css/app.2a97a82f.css","d8fca42d0acc4f3820be4cdb798d09e9"],["/unmusic/css/chunk-vendors.8cf7dd44.css","b31af048fbd0b380c4491b10ab5ce387"],["/unmusic/dd7b61cd056c7c1a936b.worker.js","c00529d5ca13c9382f73fe6594629b2b"],["/unmusic/fonts/element-icons.535877f5.woff","535877f50039c0cb49a6196a5b7517cd"],["/unmusic/fonts/element-icons.732389de.ttf","732389ded34cb9c52dd88271f1345af9"],["/unmusic/img/icons/android-chrome-192x192.png","77129ee7ef4478f1a9c729a15a2179e3"],["/unmusic/img/icons/android-chrome-512x512.png","9e527be9a89e36f506622f769c1f7dc5"],["/unmusic/img/icons/apple-touch-icon-152x152.png","ce66f8626bac88be2d212ccab78a8eed"],["/unmusic/img/icons/favicon-16x16.png","0898a9a57a856ca3df406f29e5a8077c"],["/unmusic/img/icons/favicon-32x32.png","bd9f0f20f5533e3e16da30bc5180d4d7"],["/unmusic/img/icons/msapplication-icon-144x144.png","51b5233d43629c3ea8285812fbe08308"],["/unmusic/img/icons/safari-pinned-tab.svg","b9107e3f993da212c629880a221f3056"],["/unmusic/index.html","529eb064a7d095eb1cdd94f335de0b46"],["/unmusic/js/app-legacy.a24b7f5d.js","09f0888c4f1ae919fd1769f29888927c"],["/unmusic/js/app.04b68717.js","611cf6aeddc7dde769ff63d90b283d47"],["/unmusic/js/chunk-vendors-legacy.5e8ccdec.js","faba7472569967c3020eeab999d99395"],["/unmusic/js/chunk-vendors.40fe813d.js","d9393cd862a44d019ed8aaea2b588046"],["/unmusic/precache-manifest.0c84f9a37f30f47ea36c8e5c48afe680.js","0c84f9a37f30f47ea36c8e5c48afe680"],["/unmusic/precache-manifest.99ca4986ad03bbc1bf365f5a591ec502.js","99ca4986ad03bbc1bf365f5a591ec502"],["/unmusic/service-worker.js","8325aa93a299dfddd9bb6775a4d613cb"],["/update/index.html","36fa4c9fa0ccbb28ca020065885e812b"],["/合作伙伴们/betapages/index.html","a7f230f8e9ce2756b789e5cfa50eb26f"],["/合作伙伴们/index.html","87df5a08f176daefedbda041ae984c0e"],["/您的隐私问题/index.html","1a4c6570ea5a2efb23319745e18d46b8"],["/网站鸣谢/index.html","c03db3482d7378b68563b8c0e4f9c850"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"https://blog.slqwq.cn/"});




