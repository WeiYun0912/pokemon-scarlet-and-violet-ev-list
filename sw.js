if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let t={};const o=e=>s(e,c),f={module:{uri:c},exports:t,require:o};i[c]=Promise.all(n.map((e=>f[e]||o(e)))).then((e=>(r(...e),t)))}}define(["./workbox-ab116399"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-7b5c3343.js",revision:null},{url:"assets/index-ee6f312b.css",revision:null},{url:"index.html",revision:"0cfbfc7ad17fcc42ab55db4a9d1643f8"},{url:"registerSW.js",revision:"7fcbe4329a7e4c3f8d532d460b1e9cbe"},{url:"eevee-512x512.png",revision:"27728d038149114636aa84b1cba580f7"},{url:"eevee.png",revision:"e6de08eeafc81e1ea24f644f0b9f4ce3"},{url:"menu.png",revision:"ebd71b3c5e04b79725c3c19c6f402e84"},{url:"site.webmanifest",revision:"7e2f7237eda46762140eee2532c777b2"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"manifest.webmanifest",revision:"2ed7fdf801ca5639d2278854bdbcf2a7"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute((({url:e})=>e.pathname.startsWith("/")),new e.CacheFirst({cacheName:"cache",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
