"use strict";var precacheConfig=[["/index.html","5934a3af074a5ad01f686c5a20f79096"],["/static/css/main.ee1a67cf.css","b5997413881a5898e2c5309f4d302a28"],["/static/js/main.92ecc967.js","3476370c3ebd2e4025f679c07acfbd54"],["/static/media/Avtorization.1e3deecd.scss","1e3deecd62f047754e22e2c531fb097b"],["/static/media/Contacts.34f4d670.scss","34f4d670a798e1856a4a0ba6c629deef"],["/static/media/Content.b605ee0c.scss","b605ee0c20563c01f5fa5efa3443fc7f"],["/static/media/Header.4475ac3f.scss","4475ac3f33e9f439626fee7195e4531c"],["/static/media/Mens_accessories.8ea660d2.scss","8ea660d27e7a62fa73080d2f973a086a"],["/static/media/Slider.8490cee7.scss","8490cee79314b6776cebf686738a1d17"],["/static/media/context_menu.047402ee.scss","047402ee5820bc6b059822d933f9ad09"],["/static/media/image_1.59ebaecf.png","59ebaecf16afdbe699846bd744824ba4"],["/static/media/logo.8ea86a32.scss","8ea86a321c4b405b7db72e4757c3d31b"],["/static/media/marker_ellipse.53782bc9.svg","53782bc9f5a2339802db614185dc9e05"],["/static/media/menu.2c24b706.scss","2c24b706e6a40c12dee7d16fedecdfec"],["/static/media/menu_369.65e0c20c.scss","65e0c20cea2c817bce3a00c0bc8fc11e"],["/static/media/poisk.d4be0ca7.scss","d4be0ca72ef2a1daad956825c4cad145"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var s=new URL(e);return n&&s.pathname.match(n)||(s.search+=(s.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),s.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),s=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var s="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(s,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});