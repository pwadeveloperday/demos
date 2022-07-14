/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const fe=new WeakMap,T=i=>typeof i=="function"&&fe.has(i);/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const D=typeof window!="undefined"&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0,j=(i,e,t=null)=>{for(;e!==t;){const s=e.nextSibling;i.removeChild(e),e=s}};/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const u={},J={};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const _=`{{lit-${String(Math.random()).slice(2)}}}`,X=`<!--${_}-->`,K=new RegExp(`${_}|${X}`),P="$lit$";class Z{constructor(e,t){this.parts=[],this.element=t;const s=[],n=[],r=document.createTreeWalker(t.content,133,null,!1);let a=0,o=-1,l=0;const{strings:d,values:{length:h}}=e;for(;l<h;){const c=r.nextNode();if(c===null){r.currentNode=n.pop();continue}if(o++,c.nodeType===1){if(c.hasAttributes()){const p=c.attributes,{length:N}=p;let g=0;for(let f=0;f<N;f++)G(p[f].name,P)&&g++;for(;g-- >0;){const f=d[l],w=O.exec(f)[2],v=w.toLowerCase()+P,S=c.getAttribute(v);c.removeAttribute(v);const m=S.split(K);this.parts.push({type:"attribute",index:o,name:w,strings:m}),l+=m.length-1}}c.tagName==="TEMPLATE"&&(n.push(c),r.currentNode=c.content)}else if(c.nodeType===3){const p=c.data;if(p.indexOf(_)>=0){const N=c.parentNode,g=p.split(K),f=g.length-1;for(let w=0;w<f;w++){let v,S=g[w];if(S==="")v=y();else{const m=O.exec(S);m!==null&&G(m[2],P)&&(S=S.slice(0,m.index)+m[1]+m[2].slice(0,-P.length)+m[3]),v=document.createTextNode(S)}N.insertBefore(v,c),this.parts.push({type:"node",index:++o})}g[f]===""?(N.insertBefore(y(),c),s.push(c)):c.data=g[f],l+=f}}else if(c.nodeType===8)if(c.data===_){const p=c.parentNode;(c.previousSibling===null||o===a)&&(o++,p.insertBefore(y(),c)),a=o,this.parts.push({type:"node",index:o}),c.nextSibling===null?c.data="":(s.push(c),o--),l++}else{let p=-1;for(;(p=c.data.indexOf(_,p+1))!==-1;)this.parts.push({type:"node",index:-1}),l++}}for(const c of s)c.parentNode.removeChild(c)}}const G=(i,e)=>{const t=i.length-e.length;return t>=0&&i.slice(t)===e},ee=i=>i.index!==-1,y=()=>document.createComment(""),O=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class M{constructor(e,t,s){this.__parts=[],this.template=e,this.processor=t,this.options=s}update(e){let t=0;for(const s of this.__parts)s!==void 0&&s.setValue(e[t]),t++;for(const s of this.__parts)s!==void 0&&s.commit()}_clone(){const e=D?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],s=this.template.parts,n=document.createTreeWalker(e,133,null,!1);let r=0,a=0,o,l=n.nextNode();for(;r<s.length;){if(o=s[r],!ee(o)){this.__parts.push(void 0),r++;continue}for(;a<o.index;)a++,l.nodeName==="TEMPLATE"&&(t.push(l),n.currentNode=l.content),(l=n.nextNode())===null&&(n.currentNode=t.pop(),l=n.nextNode());if(o.type==="node"){const d=this.processor.handleTextExpression(this.options);d.insertAfterNode(l.previousSibling),this.__parts.push(d)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,o.name,o.strings,this.options));r++}return D&&(document.adoptNode(e),customElements.upgrade(e)),e}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Y=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:i=>i}),me=` ${_} `;class H{constructor(e,t,s,n){this.strings=e,this.values=t,this.type=s,this.processor=n}getHTML(){const e=this.strings.length-1;let t="",s=!1;for(let n=0;n<e;n++){const r=this.strings[n],a=r.lastIndexOf("<!--");s=(a>-1||s)&&r.indexOf("-->",a+1)===-1;const o=O.exec(r);o===null?t+=r+(s?me:X):t+=r.substr(0,o.index)+o[1]+o[2]+P+o[3]+_}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return Y!==void 0&&(t=Y.createHTML(t)),e.innerHTML=t,e}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const B=i=>i===null||!(typeof i=="object"||typeof i=="function"),L=i=>Array.isArray(i)||!!(i&&i[Symbol.iterator]);class te{constructor(e,t,s){this.dirty=!0,this.element=e,this.name=t,this.strings=s,this.parts=[];for(let n=0;n<s.length-1;n++)this.parts[n]=this._createPart()}_createPart(){return new se(this)}_getValue(){const e=this.strings,t=e.length-1,s=this.parts;if(t===1&&e[0]===""&&e[1]===""){const r=s[0].value;if(typeof r=="symbol")return String(r);if(typeof r=="string"||!L(r))return r}let n="";for(let r=0;r<t;r++){n+=e[r];const a=s[r];if(a!==void 0){const o=a.value;if(B(o)||!L(o))n+=typeof o=="string"?o:String(o);else for(const l of o)n+=typeof l=="string"?l:String(l)}}return n+=e[t],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class se{constructor(e){this.value=void 0,this.committer=e}setValue(e){e!==u&&(!B(e)||e!==this.value)&&(this.value=e,T(e)||(this.committer.dirty=!0))}commit(){for(;T(this.value);){const e=this.value;this.value=u,e(this)}this.value!==u&&this.committer.commit()}}class R{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(y()),this.endNode=e.appendChild(y())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=y()),e.__insert(this.endNode=y())}insertAfterPart(e){e.__insert(this.startNode=y()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(this.startNode.parentNode===null)return;for(;T(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=u,t(this)}const e=this.__pendingValue;e!==u&&(B(e)?e!==this.value&&this.__commitText(e):e instanceof H?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):L(e)?this.__commitIterable(e):e===J?(this.value=J,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling;e=e==null?"":e;const s=typeof e=="string"?e:String(e);t===this.endNode.previousSibling&&t.nodeType===3?t.data=s:this.__commitNode(document.createTextNode(s)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof M&&this.value.template===t)this.value.update(e.values);else{const s=new M(t,e.processor,this.options),n=s._clone();s.update(e.values),this.__commitNode(n),this.value=s}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let s=0,n;for(const r of e)n=t[s],n===void 0&&(n=new R(this.options),t.push(n),s===0?n.appendIntoPart(this):n.insertAfterPart(t[s-1])),n.setValue(r),n.commit(),s++;s<t.length&&(t.length=s,this.clear(n&&n.endNode))}clear(e=this.startNode){j(this.startNode.parentNode,e.nextSibling,this.endNode)}}class _e{constructor(e,t,s){if(this.value=void 0,this.__pendingValue=void 0,s.length!==2||s[0]!==""||s[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=s}setValue(e){this.__pendingValue=e}commit(){for(;T(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=u,t(this)}if(this.__pendingValue===u)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=u}}class ye extends te{constructor(e,t,s){super(e,t,s),this.single=s.length===2&&s[0]===""&&s[1]===""}_createPart(){return new ge(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class ge extends se{}let ie=!1;(()=>{try{const i={get capture(){return ie=!0,!1}};window.addEventListener("test",i,i),window.removeEventListener("test",i,i)}catch{}})();class Se{constructor(e,t,s){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=s,this.__boundHandleEvent=n=>this.handleEvent(n)}setValue(e){this.__pendingValue=e}commit(){for(;T(this.__pendingValue);){const r=this.__pendingValue;this.__pendingValue=u,r(this)}if(this.__pendingValue===u)return;const e=this.__pendingValue,t=this.value,s=e==null||t!=null&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),n=e!=null&&(t==null||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=we(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=u}handleEvent(e){typeof this.value=="function"?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const we=i=>i&&(ie?{capture:i.capture,passive:i.passive,once:i.once}:i.capture);/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class ve{handleAttributeExpressions(e,t,s,n){const r=t[0];return r==="."?new ye(e,t.slice(1),s).parts:r==="@"?[new Se(e,t.slice(1),n.eventContext)]:r==="?"?[new _e(e,t.slice(1),s)]:new te(e,t,s).parts}handleTextExpression(e){return new R(e)}}const be=new ve;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function Pe(i){let e=C.get(i.type);e===void 0&&(e={stringsArray:new WeakMap,keyString:new Map},C.set(i.type,e));let t=e.stringsArray.get(i.strings);if(t!==void 0)return t;const s=i.strings.join(_);return t=e.keyString.get(s),t===void 0&&(t=new Z(i,i.getTemplateElement()),e.keyString.set(s,t)),e.stringsArray.set(i.strings,t),t}const C=new Map;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const b=new WeakMap,xe=(i,e,t)=>{let s=b.get(e);s===void 0&&(j(e,e.firstChild),b.set(e,s=new R(Object.assign({templateFactory:Pe},t))),s.appendInto(e)),s.setValue(i),s.commit()};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */typeof window!="undefined"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const E=(i,...e)=>new H(i,e,"html",be);/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const z=133;function ne(i,e){const{element:{content:t},parts:s}=i,n=document.createTreeWalker(t,z,null,!1);let r=x(s),a=s[r],o=-1,l=0;const d=[];let h=null;for(;n.nextNode();){o++;const c=n.currentNode;for(c.previousSibling===h&&(h=null),e.has(c)&&(d.push(c),h===null&&(h=c)),h!==null&&l++;a!==void 0&&a.index===o;)a.index=h!==null?-1:a.index-l,r=x(s,r),a=s[r]}d.forEach(c=>c.parentNode.removeChild(c))}const Te=i=>{let e=i.nodeType===11?0:1;const t=document.createTreeWalker(i,z,null,!1);for(;t.nextNode();)e++;return e},x=(i,e=-1)=>{for(let t=e+1;t<i.length;t++){const s=i[t];if(ee(s))return t}return-1};function Ce(i,e,t=null){const{element:{content:s},parts:n}=i;if(t==null){s.appendChild(e);return}const r=document.createTreeWalker(s,z,null,!1);let a=x(n),o=0,l=-1;for(;r.nextNode();)for(l++,r.currentNode===t&&(o=Te(e),t.parentNode.insertBefore(e,t));a!==-1&&n[a].index===l;){if(o>0){for(;a!==-1;)n[a].index+=o,a=x(n,a);return}a=x(n,a)}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const re=(i,e)=>`${i}--${e}`;let k=!0;typeof window.ShadyCSS=="undefined"?k=!1:typeof window.ShadyCSS.prepareTemplateDom=="undefined"&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),k=!1);const Ne=i=>e=>{const t=re(e.type,i);let s=C.get(t);s===void 0&&(s={stringsArray:new WeakMap,keyString:new Map},C.set(t,s));let n=s.stringsArray.get(e.strings);if(n!==void 0)return n;const r=e.strings.join(_);if(n=s.keyString.get(r),n===void 0){const a=e.getTemplateElement();k&&window.ShadyCSS.prepareTemplateDom(a,i),n=new Z(e,a),s.keyString.set(r,n)}return s.stringsArray.set(e.strings,n),n},Ee=["html","svg"],Ae=i=>{Ee.forEach(e=>{const t=C.get(re(e,i));t!==void 0&&t.keyString.forEach(s=>{const{element:{content:n}}=s,r=new Set;Array.from(n.querySelectorAll("style")).forEach(a=>{r.add(a)}),ne(s,r)})})},oe=new Set,ke=(i,e,t)=>{oe.add(i);const s=t?t.element:document.createElement("template"),n=e.querySelectorAll("style"),{length:r}=n;if(r===0){window.ShadyCSS.prepareTemplateStyles(s,i);return}const a=document.createElement("style");for(let d=0;d<r;d++){const h=n[d];h.parentNode.removeChild(h),a.textContent+=h.textContent}Ae(i);const o=s.content;t?Ce(t,a,o.firstChild):o.insertBefore(a,o.firstChild),window.ShadyCSS.prepareTemplateStyles(s,i);const l=o.querySelector("style");if(window.ShadyCSS.nativeShadow&&l!==null)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(t){o.insertBefore(a,o.firstChild);const d=new Set;d.add(a),ne(t,d)}},Re=(i,e,t)=>{if(!t||typeof t!="object"||!t.scopeName)throw new Error("The `scopeName` option is required.");const s=t.scopeName,n=b.has(e),r=k&&e.nodeType===11&&!!e.host,a=r&&!oe.has(s),o=a?document.createDocumentFragment():e;if(xe(i,o,Object.assign({templateFactory:Ne(s)},t)),a){const l=b.get(o);b.delete(o);const d=l.value instanceof M?l.value.template:void 0;ke(s,o,d),j(e,e.firstChild),e.appendChild(o),b.set(e,l)}!n&&r&&window.ShadyCSS.styleElement(e.host)};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */var ae;window.JSCompiler_renameProperty=(i,e)=>i;const q={toAttribute(i,e){switch(e){case Boolean:return i?"":null;case Object:case Array:return i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){switch(e){case Boolean:return i!==null;case Number:return i===null?null:Number(i);case Object:case Array:return JSON.parse(i)}return i}},le=(i,e)=>e!==i&&(e===e||i===i),A={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:le},Ve=Promise.resolve(!0),V=1,$=1<<2,I=1<<3,U=1<<4,Q=1<<5,F="finalized";class ce extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=Ve,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,s)=>{const n=this._attributeNameForProperty(s,t);n!==void 0&&(this._attributeToPropertyMap.set(n,s),e.push(n))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;e!==void 0&&e.forEach((t,s)=>this._classProperties.set(s,t))}}static createProperty(e,t=A){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const s=typeof e=="symbol"?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[s]},set(n){const r=this[e];this[s]=n,this._requestUpdate(e,r)},configurable:!0,enumerable:!0})}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty(F)||e.finalize(),this[F]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,s=[...Object.getOwnPropertyNames(t),...typeof Object.getOwnPropertySymbols=="function"?Object.getOwnPropertySymbols(t):[]];for(const n of s)this.createProperty(n,t[n])}}static _attributeNameForProperty(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}static _valueHasChanged(e,t,s=le){return s(e,t)}static _propertyValueFromAttribute(e,t){const s=t.type,n=t.converter||q,r=typeof n=="function"?n:n.fromAttribute;return r?r(e,s):e}static _propertyValueToAttribute(e,t){if(t.reflect===void 0)return;const s=t.type,n=t.converter;return(n&&n.toAttribute||q.toAttribute)(e,s)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const s=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,s)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|Q,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,s){t!==s&&this._attributeToProperty(e,s)}_propertyToAttribute(e,t,s=A){const n=this.constructor,r=n._attributeNameForProperty(e,s);if(r!==void 0){const a=n._propertyValueToAttribute(t,s);if(a===void 0)return;this._updateState=this._updateState|I,a==null?this.removeAttribute(r):this.setAttribute(r,a),this._updateState=this._updateState&~I}}_attributeToProperty(e,t){if(this._updateState&I)return;const s=this.constructor,n=s._attributeToPropertyMap.get(e);if(n!==void 0){const r=s._classProperties.get(n)||A;this._updateState=this._updateState|U,this[n]=s._propertyValueFromAttribute(t,r),this._updateState=this._updateState&~U}}_requestUpdate(e,t){let s=!0;if(e!==void 0){const n=this.constructor,r=n._classProperties.get(e)||A;n._valueHasChanged(this[e],t,r.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),r.reflect===!0&&!(this._updateState&U)&&(this._reflectingProperties===void 0&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,r))):s=!1}!this._hasRequestedUpdate&&s&&this._enqueueUpdate()}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=this._updateState|$;let e,t;const s=this._updatePromise;this._updatePromise=new Promise((n,r)=>{e=n,t=r});try{await s}catch{}this._hasConnected||await new Promise(n=>this._hasConnectedResolver=n);try{const n=this.performUpdate();n!=null&&await n}catch(n){t(n)}e(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&Q}get _hasRequestedUpdate(){return this._updateState&$}get hasUpdated(){return this._updateState&V}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e&&this.update(t)}catch(s){throw e=!1,s}finally{this._markUpdated()}e&&(this._updateState&V||(this._updateState=this._updateState|V,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~$}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){this._reflectingProperties!==void 0&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,s)=>this._propertyToAttribute(s,this[s],t)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}ae=F;ce[ae]=!0;/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const de="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,he=Symbol();class pe{constructor(e,t){if(t!==he)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return this._styleSheet===void 0&&(de?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const $e=i=>{if(i instanceof pe)return i.cssText;if(typeof i=="number")return i;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${i}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`)},Ie=(i,...e)=>{const t=e.reduce((s,n,r)=>s+$e(n)+i[r+1],i[0]);return new pe(t,he)};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");function ue(i,e=[]){for(let t=0,s=i.length;t<s;t++){const n=i[t];Array.isArray(n)?ue(n,e):e.push(n)}return e}const Ue=i=>i.flat?i.flat(1/0):ue(i);class W extends ce{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];return Array.isArray(e)?Ue(e).reduceRight((r,a)=>(r.add(a),r),new Set).forEach(r=>t.unshift(r)):e&&t.push(e),t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;e.length!==0&&(window.ShadyCSS!==void 0&&!window.ShadyCSS.nativeShadow?window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(t=>t.cssText),this.localName):de?this.renderRoot.adoptedStyleSheets=e.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0)}connectedCallback(){super.connectedCallback(),this.hasUpdated&&window.ShadyCSS!==void 0&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof H&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(s=>{const n=document.createElement("style");n.textContent=s.cssText,this.renderRoot.appendChild(n)}))}render(){}}W.finalized=!0;W.render=Re;const Oe=(...i)=>{const[e,t,s,n,r,a,o,l,d,h]=i;let c=null;return e==="simple"?c=E`
            <video
               id="video"
               src=${t+o}
               type=${s} 
               poster=${a} 
               preload=${d}
               autoplay=${h}
               controls>
               <track 
                   src=${l.src}
                   label=${l.label}
                   kind=${l.kind} 
                   srclang=${l.srclang} 
                   default>
              <p>${n}</p>
            </video>`:e==="complex"&&(c=E`
          <video 
            id="video"
            poster=${a} 
            preload=${d}
            autoplay=${h}
            controls> 
          ${r.map(p=>E`
           <source src=${p.src} type=${p.type}> 
          `)}
          <track 
                    src=${l.src}
                    label=${l.label}
                    kind=${l.kind} 
                    srclang=${l.srclang} 
                    default>
        <p>${n}</p>
      </video>
          `),E`
    <div class="container">
        <div class="video">
          ${c}
        </div>
    </div>
    `},Me=()=>Ie`
:host{
  }

  .video {
	display: grid;
	grid-template-columns: repeat(16, 1fr);
	grid-template-rows: repeat(9, 1fr);
	position: relative;
}

.video::before {
	content: "";
	display: block;
	padding-bottom: 100%;
}

.video > iframe,
  .video > video {
	position: absolute;
	width: 100%;
	height: 100%;
}

.container {
	width: 75%;
	max-width: 960px;
	min-width: 320px;
	margin-left: auto;
	margin-right: auto;
}

`;class Le extends W{constructor(){super(),this.__initProperties()}static get properties(){return{option:{type:String},src:{type:String},type:{type:String},txtError:{type:String},formats:{type:Array},poster:{type:String},intervalReproduction:{type:String},track:{type:Object},autoplay:{type:Boolean}}}__initProperties(){this.option="simple",this.src="",this.type="",this.txtError="default",this.formats=[],this.poster="",this.intervalReproduction="",this.track={},this.preload="",this.autoplay=!1}static get styles(){return Me()}render(){return Oe(this.option,this.src,this.type,this.txtError,this.formats,this.poster,this.intervalReproduction,this.track,this.preload,this.autoplay)}_load(){if(this.shadowRoot.querySelector("#video"))this.shadowRoot.querySelector("#video").load();else return}_play(){if(this.shadowRoot.querySelector("#video"))this.shadowRoot.querySelector("#video").play();else return}_pause(){if(this.shadowRoot.querySelector("#video"))this.shadowRoot.querySelector("#video").pause();else return}}customElements.define("lit-video",Le);
//# sourceMappingURL=lit-video.6fc33520.js.map
