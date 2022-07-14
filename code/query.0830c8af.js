/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const c=({finisher:o,descriptor:i})=>(n,t)=>{var e;if(t===void 0){const r=(e=n.originalKey)!==null&&e!==void 0?e:n.key,l=i!=null?{kind:"method",placement:"prototype",key:r,descriptor:i(n.key)}:{...n,key:r};return o!=null&&(l.finisher=function(u){o(u,r)}),l}{const r=n.constructor;i!==void 0&&Object.defineProperty(n,t,i(t)),o==null||o(r,t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function d(o,i){return c({descriptor:n=>{const t={get(){var e,r;return(r=(e=this.renderRoot)===null||e===void 0?void 0:e.querySelector(o))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0};if(i){const e=typeof n=="symbol"?Symbol():"__"+n;t.get=function(){var r,l;return this[e]===void 0&&(this[e]=(l=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(o))!==null&&l!==void 0?l:null),this[e]}}return t}})}export{d as i};
//# sourceMappingURL=query.0830c8af.js.map
