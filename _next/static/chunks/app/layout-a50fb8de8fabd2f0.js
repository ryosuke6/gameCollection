(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{461:function(e,t,n){Promise.resolve().then(n.t.bind(n,8326,23)),Promise.resolve().then(n.t.bind(n,3994,23)),Promise.resolve().then(n.t.bind(n,569,23)),Promise.resolve().then(n.t.bind(n,8410,23)),Promise.resolve().then(n.t.bind(n,2489,23))},863:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},isEqualNode:function(){return isEqualNode},default:function(){return initHeadManager}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function reactElementToDOM(e){let{type:t,props:n}=e,a=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let o=r[e]||e.toLowerCase();"script"===t&&("async"===o||"defer"===o||"noModule"===o)?a[o]=!!n[e]:a.setAttribute(o,n[e])}let{children:o,dangerouslySetInnerHTML:l}=n;return l?a.innerHTML=l.__html||"":o&&(a.textContent="string"==typeof o?o:Array.isArray(o)?o.join(""):""),a}function isEqualNode(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function initHeadManager(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,a="";if(r){let{children:e}=r.props;a="string"==typeof e?e:Array.isArray(e)?e.join(""):""}a!==document.title&&(document.title=a),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),a=Number(r.content),o=[];for(let t=0,n=r.previousElementSibling;t<a;t++,n=(null==n?void 0:n.previousElementSibling)||null){var l;(null==n?void 0:null==(l=n.tagName)?void 0:l.toLowerCase())===e&&o.push(n)}let i=t.map(reactElementToDOM).filter(e=>{for(let t=0,n=o.length;t<n;t++){let n=o[t];if(isEqualNode(n,e))return o.splice(t,1),!1}return!0});o.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),i.forEach(e=>n.insertBefore(e,r)),r.content=(a-o.length+i.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3994:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{handleClientScriptLoad:function(){return handleClientScriptLoad},initScriptLoader:function(){return initScriptLoader},default:function(){return p}});let r=n(1024),a=n(8533),o=r._(n(4887)),l=a._(n(2265)),i=n(1852),u=n(863),d=n(2389),c=new Map,s=new Set,f=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],insertStylesheets=e=>{if(o.default.preinit){e.forEach(e=>{o.default.preinit(e,{as:"style"})});return}{let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},loadScript=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:a=null,dangerouslySetInnerHTML:o,children:l="",strategy:i="afterInteractive",onError:d,stylesheets:p}=e,y=n||t;if(y&&s.has(y))return;if(c.has(t)){s.add(y),c.get(t).then(r,d);return}let afterLoad=()=>{a&&a(),s.add(y)},h=document.createElement("script"),_=new Promise((e,t)=>{h.addEventListener("load",function(t){e(),r&&r.call(this,t),afterLoad()}),h.addEventListener("error",function(e){t(e)})}).catch(function(e){d&&d(e)});for(let[n,r]of(o?(h.innerHTML=o.__html||"",afterLoad()):l?(h.textContent="string"==typeof l?l:Array.isArray(l)?l.join(""):"",afterLoad()):t&&(h.src=t,c.set(t,_)),Object.entries(e))){if(void 0===r||f.includes(n))continue;let e=u.DOMAttributeNames[n]||n.toLowerCase();h.setAttribute(e,r)}"worker"===i&&h.setAttribute("type","text/partytown"),h.setAttribute("data-nscript",i),p&&insertStylesheets(p),document.body.appendChild(h)};function handleClientScriptLoad(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,d.requestIdleCallback)(()=>loadScript(e))}):loadScript(e)}function initScriptLoader(e){e.forEach(handleClientScriptLoad),function(){let e=[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')];e.forEach(e=>{let t=e.id||e.getAttribute("src");s.add(t)})}()}function Script(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:a=null,strategy:u="afterInteractive",onError:c,stylesheets:f,...p}=e,{updateScripts:y,scripts:h,getIsSsr:_,appDir:m,nonce:b}=(0,l.useContext)(i.HeadManagerContext),S=(0,l.useRef)(!1);(0,l.useEffect)(()=>{let e=t||n;S.current||(a&&e&&s.has(e)&&a(),S.current=!0)},[a,t,n]);let g=(0,l.useRef)(!1);if((0,l.useEffect)(()=>{!g.current&&("afterInteractive"===u?loadScript(e):"lazyOnload"===u&&("complete"===document.readyState?(0,d.requestIdleCallback)(()=>loadScript(e)):window.addEventListener("load",()=>{(0,d.requestIdleCallback)(()=>loadScript(e))})),g.current=!0)},[e,u]),("beforeInteractive"===u||"worker"===u)&&(y?(h[u]=(h[u]||[]).concat([{id:t,src:n,onLoad:r,onReady:a,onError:c,...p}]),y(h)):_&&_()?s.add(t||n):_&&!_()&&loadScript(e)),m){if(f&&f.forEach(e=>{o.default.preinit(e,{as:"style"})}),"beforeInteractive"===u)return n?(o.default.preload(n,p.integrity?{as:"script",integrity:p.integrity}:{as:"script"}),l.default.createElement("script",{nonce:b,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n])+")"}})):(p.dangerouslySetInnerHTML&&(p.children=p.dangerouslySetInnerHTML.__html,delete p.dangerouslySetInnerHTML),l.default.createElement("script",{nonce:b,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...p}])+")"}}));"afterInteractive"===u&&n&&o.default.preload(n,p.integrity?{as:"script",integrity:p.integrity}:{as:"script"})}return null}Object.defineProperty(Script,"__nextScript",{value:!0});let p=Script;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2489:function(){},569:function(e){e.exports={layout:"layout_layout__dCqca",header:"layout_header__2zrGa",headerLinks:"layout_headerLinks__LVQ8u",footer:"layout_footer__lSNf_"}},8410:function(e){e.exports={style:{fontFamily:"'__Inter_e3803a', '__Inter_Fallback_e3803a'",fontStyle:"normal"},className:"__className_e3803a"}}},function(e){e.O(0,[326,971,472,744],function(){return e(e.s=461)}),_N_E=e.O()}]);