var y=Object.defineProperty,f=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;var c=(n,e,r)=>e in n?y(n,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[e]=r,d=(n,e)=>{for(var r in e||(e={}))h.call(e,r)&&c(n,r,e[r]);if(u)for(var r of u(e))a.call(e,r)&&c(n,r,e[r]);return n},s=(n,e)=>f(n,p(e));/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const b=({finisher:n,descriptor:e})=>(r,i)=>{var t;if(i===void 0){const o=(t=r.originalKey)!==null&&t!==void 0?t:r.key,l=e!=null?{kind:"method",placement:"prototype",key:o,descriptor:e(r.key)}:s(d({},r),{key:o});return n!=null&&(l.finisher=function(v){n(v,o)}),l}{const o=r.constructor;e!==void 0&&Object.defineProperty(r,i,e(i)),n==null||n(o,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function m(n,e){return b({descriptor:r=>{const i={get(){var t,o;return(o=(t=this.renderRoot)===null||t===void 0?void 0:t.querySelector(n))!==null&&o!==void 0?o:null},enumerable:!0,configurable:!0};if(e){const t=typeof r=="symbol"?Symbol():"__"+r;i.get=function(){var o,l;return this[t]===void 0&&(this[t]=(l=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(n))!==null&&l!==void 0?l:null),this[t]}}return i}})}export{m as i};
//# sourceMappingURL=query.0830c8af.js.map
