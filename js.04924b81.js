parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"pgBx":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.renderDOM=void 0;const r=(e,s)=>{if(!Array.isArray(e))throw new Error("htmlelements is not array");return e.forEach((t,o)=>{if(Array.isArray(t)){const a=Array.isArray(e[o-1]);r(t,0===o||a?s:e[o-1])}else s.appendChild(t)}),s};exports.renderDOM=r;
},{}],"wYpU":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.actionTypes=void 0;const e=Object.freeze({UPDATE_RANDOM_PHOTO_URL:"UPDATE_RANDOM_PHOTO_URL"});exports.actionTypes=e;
},{}],"DYOU":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.reducer=void 0;var e=require("./actionTypes.js");function r(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function t(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach(function(r){o(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}const n=(r={randomPhotoUrl:void 0},o)=>{switch(o.type){case e.actionTypes.UPDATE_RANDOM_PHOTO_URL:return t({},r,{randomPhotoUrl:o.randomPhotoUrl})}};exports.reducer=n;
},{"./actionTypes.js":"wYpU"}],"LhQd":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.store=void 0;var e=require("./reducer.js");const r=e=>{let r={};const t=[];return{getState:()=>r,subscribe:e=>{t.push(e);t.length;return()=>{const r=t.indexOf(e);index>-1&&t.splice(r,1)}},dispatch:s=>{r=e(r,s),t.forEach(e=>e())}}},t=r(e.reducer);exports.store=t;
},{"./reducer.js":"DYOU"}],"f2Ee":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.styled=void 0;const e=e=>Array.isArray(e)?e[0]:e,t=e=>{let t="";const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";for(var n=0;n<e;n++)t+=r.charAt(Math.floor(Math.random()*r.length));return t},r=()=>{const r=document.getElementsByTagName("head")[0],n={};return s=>{const o=e(s),a=document.createElement(o);return s=>{const o=e(s),c=n[o];if(c)return a.className=c,a;const l=t(7),d=document.createElement("style");return d.textContent=`.${l} { ${o} }`,r.appendChild(d),a.className=l,n[o.replace(/\s+/g,"")]=l,a}}},n=r();exports.styled=n;
},{}],"H6DT":[function(require,module,exports) {
"use strict";function r(r,t,n,e,o,u,i){try{var a=r[u](i),c=a.value}catch(p){return void n(p)}a.done?t(c):Promise.resolve(c).then(e,o)}function t(t){return function(){var n=this,e=arguments;return new Promise(function(o,u){var i=t.apply(n,e);function a(t){r(i,o,u,a,c,"next",t)}function c(t){r(i,o,u,a,c,"throw",t)}a(void 0)})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.tryCatchWrapper=void 0;const n=function(){var r=t(function*(r){try{return{data:yield r,error:null}}catch(t){return{data:null,error:t}}});return function(t){return r.apply(this,arguments)}}();exports.tryCatchWrapper=n;
},{}],"WaDl":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.fetchSingleRandomPhoto=exports.RANDOM_PHOTO_URL=void 0;var e=require("./tryCatchWrapper.js");const t="https://source.unsplash.com/random";exports.RANDOM_PHOTO_URL=t;const o=()=>(0,e.tryCatchWrapper)(fetch(t));exports.fetchSingleRandomPhoto=o;
},{"./tryCatchWrapper.js":"H6DT"}],"ZUq0":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.__useEffect=void 0;const e=({renderCount:e,setRenderCount:s})=>{const t={deps:[]};return(o,r)=>{const u=0===e.value,d=t.deps.some((e,s)=>e!==r[s]);if(u||d)return o(),(e=>{t.deps=[],e.forEach(e=>t.deps.push(e))})(r),void s(e.value+1)}};exports.__useEffect=e;
},{}],"FohU":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.__useStateInteral=exports.__useState=void 0;const e=({renderCount:e,setRenderCount:t})=>{const r={value:void 0},n={render:void 0},o=o=>{r.value=o,e.value>0&&(n.render(),t(e.value+1))};return(e,t)=>(n.render||(n.render=t,o(e)),[r,o])};exports.__useState=e;const t=()=>{const e={value:void 0},t=t=>{e.value=t};return r=>(t(r),[e,t])};exports.__useStateInteral=t;
},{}],"ymkr":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.initializeHooks=void 0;var e=require("./useEffect.js"),t=require("./useState.js");const s=()=>{const s=(0,t.__useStateInteral)(),[r,u]=s(0);return{useEffect:(0,e.__useEffect)({renderCount:r,setRenderCount:u}),useState:(0,t.__useState)({renderCount:r,setRenderCount:u})}};exports.initializeHooks=s;
},{"./useEffect.js":"ZUq0","./useState.js":"FohU"}],"hVou":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.updateRandomPhoto=void 0;var e=require("./actionTypes.js");const o=o=>({type:e.actionTypes.UPDATE_RANDOM_PHOTO_URL,randomPhotoUrl:o});exports.updateRandomPhoto=o;
},{"./actionTypes.js":"wYpU"}],"rTwc":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=require("../ui/styled.js"),e=require("../api/api.js"),o=require("../hooks/index.js"),n=require("../global-state/actions.js");function r(t,e,o,n,r,i,u){try{var a=t[i](u),s=a.value}catch(c){return void o(c)}a.done?e(s):Promise.resolve(s).then(n,r)}function i(t){return function(){var e=this,o=arguments;return new Promise(function(n,i){var u=t.apply(e,o);function a(t){r(u,n,i,a,s,"next",t)}function s(t){r(u,n,i,a,s,"throw",t)}a(void 0)})}}const{useEffect:u,useState:a}=(0,o.initializeHooks)(),s=t.styled`button``
  width: max-content;
  min-width: 250px;
  height: 50px;
  background-color: white;
  border: 1px solid black;
  cursor: pointer;
  font-size: 32px;
`,c=t=>{const o=()=>{const[r,c]=a(!1,o),d=function(){var o=i(function*(){c(!0);const{data:o,error:r}=yield(0,e.fetchSingleRandomPhoto)();r&&console.error(r),t.dispatch((0,n.updateRandomPhoto)(o.url)),c(!1)});return function(){return o.apply(this,arguments)}}();return u(()=>{d()},[]),s.onclick=d,r.value?s.textContent="loading":s.textContent="click the button to request random image",s};return o};var d=c;exports.default=d;
},{"../ui/styled.js":"f2Ee","../api/api.js":"WaDl","../hooks/index.js":"ymkr","../global-state/actions.js":"hVou"}],"xbj2":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("../ui/styled.js");const t=e.styled`section``
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;var s=()=>()=>t;exports.default=s;
},{"../ui/styled.js":"f2Ee"}],"IBdJ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("../ui/styled.js"),t=require("../ui/renderDOM.js"),r=require("../hooks/index.js");const{useEffect:i}=(0,r.initializeHooks)(),o=e.styled`figure``
  border: 1px solid black;
  min-width: 500px;
  min-height: 500px;
  display: flex;
`,s=e.styled`img``
  max-width: 500px;
  max-height: 500px;
  margin: auto;
`;var d=e=>{return()=>{const r=e.getState().randomPhotoUrl;return i(()=>{r&&console.log(`The URL has changed to ${r}`)},[r]),s.setAttribute("loading","lazy"),r&&(s.src=r),(0,t.renderDOM)([s],o)}};exports.default=d;
},{"../ui/styled.js":"f2Ee","../ui/renderDOM.js":"pgBx","../hooks/index.js":"ymkr"}],"QvaY":[function(require,module,exports) {
"use strict";var e=require("./ui/renderDOM.js"),t=require("./global-state/store.js"),o=n(require("./components/RequestRandomPhotoButton.js")),r=n(require("./components/Layout.js")),s=n(require("./components/PhotoViewer.js"));function n(e){return e&&e.__esModule?e:{default:e}}const u=()=>{const n=document.getElementById("root"),u=t=>{(0,e.renderDOM)([(0,r.default)()(),[(0,s.default)(t)(),(0,o.default)(t)()]],n)};t.store.subscribe(()=>{u(t.store)}),u(t.store)};window.onload=u;
},{"./ui/renderDOM.js":"pgBx","./global-state/store.js":"LhQd","./components/RequestRandomPhotoButton.js":"rTwc","./components/Layout.js":"xbj2","./components/PhotoViewer.js":"IBdJ"}]},{},["QvaY"], null)
//# sourceMappingURL=/ui-theory/js.04924b81.js.map