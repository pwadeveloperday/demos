if(!self.define){let e,s={};const l=(l,o)=>(l=new URL(l+".js",o).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(o,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let r={};const c=e=>l(e,i),a={module:{uri:i},exports:r,require:c};s[i]=Promise.all(o.map((e=>a[e]||c(e)))).then((e=>(n(...e),r)))}}define(["./workbox-fce6b9f0"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/icons/apple-touch-icon.png",revision:"b8952e38332be0801065a5b82ca30e49"},{url:"assets/icons/icon_16.png",revision:"6d5011cad990ccaed1a56636eed638bc"},{url:"assets/icons/icon_192.png",revision:"6b6d4a915b02793196b09a0cdb55e811"},{url:"assets/icons/icon_32.png",revision:"e511c653eae0bef6b02d6556d60987b6"},{url:"assets/icons/icon_512.png",revision:"31fbe2943ad59fc115c4714f895065c1"},{url:"assets/logo/chrome.png",revision:"fa57dce03977758d30dc76fdb629ff7d"},{url:"assets/logo/chromium.png",revision:"9d8fd638b4e68066c50fa30bd1d24ca6"},{url:"assets/logo/edge.png",revision:"f7b816aafd1448afd6ff5a757dea7e93"},{url:"assets/logo/firefox.png",revision:"47ff71667d3625a6df8c4b23b063c661"},{url:"assets/logo/intel-logo-1-1.png",revision:"c5a5ead7e00b28796d48b5fe3f962599"},{url:"assets/logo/intel-logo.png",revision:"1bbde9b9af98f7aaafa5368bb98714f9"},{url:"assets/logo/intel.png",revision:"19a9c78ec6497cd4f992245199a60d4f"},{url:"assets/logo/opera.png",revision:"46dc922012fe9bd8f768663e9c671e1e"},{url:"assets/logo/safari.png",revision:"5ac2fc1cfe172050bd405de6475bba74"},{url:"assets/logo/vivaldi.png",revision:"0a78bb3222a9898bfc75aeddbc1fbb76"},{url:"assets/sample/pwa-fugu.png",revision:"023f5b6868b8b24c74a10c916148b33d"},{url:"assets/screenshots/screen.png",revision:"47214ece453ffdef0c040385e4179017"},{url:"code/app-about.5579668b.js",revision:null},{url:"code/app-coc.5d08f6e3.js",revision:null},{url:"code/app-privacy.1b7029d0.js",revision:null},{url:"code/index.f9c4bfbf.js",revision:null},{url:"code/index.fd189ef9.css",revision:null},{url:"code/lit-video.6fc33520.js",revision:null},{url:"code/query.0830c8af.js",revision:null},{url:"code/sample-ac.815758cd.js",revision:null},{url:"code/sample-as.91b36d10.js",revision:null},{url:"code/sample-b.097fe6a4.js",revision:null},{url:"code/sample-c.6ff22996.js",revision:null},{url:"code/sample-ed.7bc5474d.js",revision:null},{url:"code/sample-fh.837fccee.js",revision:null},{url:"code/sample-fsa.56646ade.js",revision:null},{url:"code/sample-gs.f91a4eb3.js",revision:null},{url:"code/sample-lfa.a8b1e43f.js",revision:null},{url:"code/sample-mp.e904001d.js",revision:null},{url:"code/sample-n.21e22ab2.js",revision:null},{url:"code/sample-na.060df465.js",revision:null},{url:"code/sample-sd.9db0d624.js",revision:null},{url:"code/sample-swl.9281ae29.js",revision:null},{url:"code/sample-uph.8d58eb0f.js",revision:null},{url:"code/sample-wco.5049b822.js",revision:null},{url:"code/sample-ws.0dc699e9.js",revision:null},{url:"index.html",revision:"c226d3728a273fe431efa911457360a1"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/unpkg\.com\/.*/i,new e.CacheFirst({cacheName:"unpkg-libs-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
//# sourceMappingURL=sw.js.map
