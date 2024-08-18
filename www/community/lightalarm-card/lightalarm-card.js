/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function t(t,e,i,n){var r,s=arguments.length,a=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var o=t.length-1;o>=0;o--)(r=t[o])&&(a=(s<3?r(a):s>3?r(e,i,a):r(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a
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
 */}const e=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},n=`{{lit-${String(Math.random()).slice(2)}}}`,r=`\x3c!--${n}--\x3e`,s=new RegExp(`${n}|${r}`);class a{constructor(t,e){this.parts=[],this.element=e;const i=[],r=[],a=document.createTreeWalker(e.content,133,null,!1);let l=0,d=-1,h=0;const{strings:p,values:{length:m}}=t;for(;h<m;){const t=a.nextNode();if(null!==t){if(d++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let n=0;for(let t=0;t<i;t++)o(e[t].name,"$lit$")&&n++;for(;n-- >0;){const e=p[h],i=u.exec(e)[2],n=i.toLowerCase()+"$lit$",r=t.getAttribute(n);t.removeAttribute(n);const a=r.split(s);this.parts.push({type:"attribute",index:d,name:i,strings:a}),h+=a.length-1}}"TEMPLATE"===t.tagName&&(r.push(t),a.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(n)>=0){const n=t.parentNode,r=e.split(s),a=r.length-1;for(let e=0;e<a;e++){let i,s=r[e];if(""===s)i=c();else{const t=u.exec(s);null!==t&&o(t[2],"$lit$")&&(s=s.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),i=document.createTextNode(s)}n.insertBefore(i,t),this.parts.push({type:"node",index:++d})}""===r[a]?(n.insertBefore(c(),t),i.push(t)):t.data=r[a],h+=a}}else if(8===t.nodeType)if(t.data===n){const e=t.parentNode;null!==t.previousSibling&&d!==l||(d++,e.insertBefore(c(),t)),l=d,this.parts.push({type:"node",index:d}),null===t.nextSibling?t.data="":(i.push(t),d--),h++}else{let e=-1;for(;-1!==(e=t.data.indexOf(n,e+1));)this.parts.push({type:"node",index:-1}),h++}}else a.currentNode=r.pop()}for(const t of i)t.parentNode.removeChild(t)}}const o=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},l=t=>-1!==t.index,c=()=>document.createComment(""),u=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function d(t,e){const{element:{content:i},parts:n}=t,r=document.createTreeWalker(i,133,null,!1);let s=p(n),a=n[s],o=-1,l=0;const c=[];let u=null;for(;r.nextNode();){o++;const t=r.currentNode;for(t.previousSibling===u&&(u=null),e.has(t)&&(c.push(t),null===u&&(u=t)),null!==u&&l++;void 0!==a&&a.index===o;)a.index=null!==u?-1:a.index-l,s=p(n,s),a=n[s]}c.forEach(t=>t.parentNode.removeChild(t))}const h=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)e++;return e},p=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(l(e))return i}return-1};
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
 */
const m=new WeakMap,g=t=>"function"==typeof t&&m.has(t),f={},_={};
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
 */
class y{constructor(t,e,i){this.__parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.__parts)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],n=this.template.parts,r=document.createTreeWalker(t,133,null,!1);let s,a=0,o=0,c=r.nextNode();for(;a<n.length;)if(s=n[a],l(s)){for(;o<s.index;)o++,"TEMPLATE"===c.nodeName&&(i.push(c),r.currentNode=c.content),null===(c=r.nextNode())&&(r.currentNode=i.pop(),c=r.nextNode());if("node"===s.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(c.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,s.name,s.strings,this.options));a++}else this.__parts.push(void 0),a++;return e&&(document.adoptNode(t),customElements.upgrade(t)),t}}
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
 */const v=` ${n} `;class w{constructor(t,e,i,n){this.strings=t,this.values=e,this.type=i,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",i=!1;for(let s=0;s<t;s++){const t=this.strings[s],a=t.lastIndexOf("\x3c!--");i=(a>-1||i)&&-1===t.indexOf("--\x3e",a+1);const o=u.exec(t);e+=null===o?t+(i?v:r):t.substr(0,o.index)+o[1]+o[2]+"$lit$"+o[3]+n}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
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
 */const b=t=>null===t||!("object"==typeof t||"function"==typeof t),S=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class x{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new k(this)}_getValue(){const t=this.strings,e=t.length-1;let i="";for(let n=0;n<e;n++){i+=t[n];const e=this.parts[n];if(void 0!==e){const t=e.value;if(b(t)||!S(t))i+="string"==typeof t?t:String(t);else for(const e of t)i+="string"==typeof e?e:String(e)}}return i+=t[e],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class k{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===f||b(t)&&t===this.value||(this.value=t,g(t)||(this.committer.dirty=!0))}commit(){for(;g(this.value);){const t=this.value;this.value=f,t(this)}this.value!==f&&this.committer.commit()}}class C{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(c()),this.endNode=t.appendChild(c())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=c()),t.__insert(this.endNode=c())}insertAfterPart(t){t.__insert(this.startNode=c()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;g(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}const t=this.__pendingValue;t!==f&&(b(t)?t!==this.value&&this.__commitText(t):t instanceof w?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):S(t)?this.__commitIterable(t):t===_?(this.value=_,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof y&&this.value.template===e)this.value.update(t.values);else{const i=new y(e,t.processor,this.options),n=i._clone();i.update(t.values),this.__commitNode(n),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,n=0;for(const r of t)i=e[n],void 0===i&&(i=new C(this.options),e.push(i),0===n?i.appendIntoPart(this):i.insertAfterPart(e[n-1])),i.setValue(r),i.commit(),n++;n<e.length&&(e.length=n,this.clear(i&&i.endNode))}clear(t=this.startNode){i(this.startNode.parentNode,t.nextSibling,this.endNode)}}class P{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;g(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}if(this.__pendingValue===f)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=f}}class N extends x{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new T(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class T extends k{}let E=!1;try{const t={get capture(){return E=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class ${constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;g(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}if(this.__pendingValue===f)return;const t=this.__pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=M(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=f}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const M=t=>t&&(E?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
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
 */;function V(t){let e=A.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},A.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const r=t.strings.join(n);return i=e.keyString.get(r),void 0===i&&(i=new a(t,t.getTemplateElement()),e.keyString.set(r,i)),e.stringsArray.set(t.strings,i),i}const A=new Map,I=new WeakMap;
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
 */const O=new
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
 */
class{handleAttributeExpressions(t,e,i,n){const r=e[0];if("."===r){return new N(t,e.slice(1),i).parts}if("@"===r)return[new $(t,e.slice(1),n.eventContext)];if("?"===r)return[new P(t,e.slice(1),i)];return new x(t,e,i).parts}handleTextExpression(t){return new C(t)}};
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
 */(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const D=(t,...e)=>new w(t,e,"html",O)
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
 */,R=(t,e)=>`${t}--${e}`;let z=!0;void 0===window.ShadyCSS?z=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),z=!1);const B=t=>e=>{const i=R(e.type,t);let r=A.get(i);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},A.set(i,r));let s=r.stringsArray.get(e.strings);if(void 0!==s)return s;const o=e.strings.join(n);if(s=r.keyString.get(o),void 0===s){const i=e.getTemplateElement();z&&window.ShadyCSS.prepareTemplateDom(i,t),s=new a(e,i),r.keyString.set(o,s)}return r.stringsArray.set(e.strings,s),s},j=["html","svg"],L=new Set,U=(t,e,i)=>{L.add(t);const n=i?i.element:document.createElement("template"),r=e.querySelectorAll("style"),{length:s}=r;if(0===s)return void window.ShadyCSS.prepareTemplateStyles(n,t);const a=document.createElement("style");for(let t=0;t<s;t++){const e=r[t];e.parentNode.removeChild(e),a.textContent+=e.textContent}(t=>{j.forEach(e=>{const i=A.get(R(e,t));void 0!==i&&i.keyString.forEach(t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{i.add(t)}),d(t,i)})})})(t);const o=n.content;i?function(t,e,i=null){const{element:{content:n},parts:r}=t;if(null==i)return void n.appendChild(e);const s=document.createTreeWalker(n,133,null,!1);let a=p(r),o=0,l=-1;for(;s.nextNode();){l++;for(s.currentNode===i&&(o=h(e),i.parentNode.insertBefore(e,i));-1!==a&&r[a].index===l;){if(o>0){for(;-1!==a;)r[a].index+=o,a=p(r,a);return}a=p(r,a)}}}(i,a,o.firstChild):o.insertBefore(a,o.firstChild),window.ShadyCSS.prepareTemplateStyles(n,t);const l=o.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(i){o.insertBefore(a,o.firstChild);const t=new Set;t.add(a),d(i,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const q={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},Y=(t,e)=>e!==t&&(e==e||t==t),H={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:Y};class F extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,i)=>{const n=this._attributeNameForProperty(i,e);void 0!==n&&(this._attributeToPropertyMap.set(n,i),t.push(n))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=H){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const r=this[t];this[e]=n,this.requestUpdateInternal(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||H}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=Y){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,n=e.converter||q,r="function"==typeof n?n:n.fromAttribute;return r?r(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,n=e.converter;return(n&&n.toAttribute||q.toAttribute)(t,i)}initialize(){this._updateState=0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=H){const n=this.constructor,r=n._attributeNameForProperty(t,i);if(void 0!==r){const t=n._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(r):this.setAttribute(r,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const i=this.constructor,n=i._attributeToPropertyMap.get(t);if(void 0!==n){const t=i.getPropertyOptions(n);this._updateState=16|this._updateState,this[n]=i._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,i){let n=!0;if(void 0!==t){const r=this.constructor;i=i||r.getPropertyOptions(t),r._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}F.finalized=!0;
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
 */
const W=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:n}=e;return{kind:i,elements:n,finisher(e){window.customElements.define(t,e)}}})(t,e),Z=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(i){i.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function J(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):Z(t,e)}function G(t){return J({attribute:!1,hasChanged:null==t?void 0:t.hasChanged})}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const K=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol();class X{constructor(t,e){if(e!==Q)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(K?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const tt=(t,...e)=>{const i=e.reduce((e,i,n)=>e+(t=>{if(t instanceof X)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[n+1],t[0]);return new X(i,Q)};
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
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const et={};class it extends F{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,i)=>t.reduceRight((t,i)=>Array.isArray(i)?e(i,t):(t.add(i),t),i),i=e(t,new Set),n=[];i.forEach(t=>n.unshift(t)),this._styles=n}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!K){const e=Array.prototype.slice.call(t.cssRules).reduce((t,e)=>t+e.cssText,"");return new X(String(e),Q)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?K?this.renderRoot.adoptedStyleSheets=t.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==et&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return et}}it.finalized=!0,it.render=(t,e,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const r=n.scopeName,s=I.has(e),a=z&&11===e.nodeType&&!!e.host,o=a&&!L.has(r),l=o?document.createDocumentFragment():e;if(((t,e,n)=>{let r=I.get(e);void 0===r&&(i(e,e.firstChild),I.set(e,r=new C(Object.assign({templateFactory:V},n))),r.appendInto(e)),r.setValue(t),r.commit()})(t,l,Object.assign({templateFactory:B(r)},n)),o){const t=I.get(l);I.delete(l);const n=t.value instanceof y?t.value.template:void 0;U(r,l,n),i(e,e.firstChild),e.appendChild(l),I.set(e,t)}!s&&a&&window.ShadyCSS.styleElement(e.host)};
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
 */
const nt=(t,e)=>{const i=t.startNode.parentNode,n=void 0===e?t.endNode:e.startNode,r=i.insertBefore(c(),n);i.insertBefore(c(),n);const s=new C(t.options);return s.insertAfterNode(r),s},rt=(t,e)=>(t.setValue(e),t.commit(),t),st=(t,e,i)=>{const n=t.startNode.parentNode,r=i?i.startNode:t.endNode,s=e.endNode.nextSibling;s!==r&&((t,e,i=null,n=null)=>{for(;e!==i;){const i=e.nextSibling;t.insertBefore(e,n),e=i}})(n,e.startNode,s,r)},at=t=>{i(t.startNode.parentNode,t.startNode,t.endNode.nextSibling)},ot=(t,e,i)=>{const n=new Map;for(let r=e;r<=i;r++)n.set(t[r],r);return n},lt=new WeakMap,ct=new WeakMap,ut=(dt=(t,e,i)=>{let n;return void 0===i?i=e:void 0!==e&&(n=e),e=>{if(!(e instanceof C))throw new Error("repeat can only be used in text bindings");const r=lt.get(e)||[],s=ct.get(e)||[],a=[],o=[],l=[];let c,u,d=0;for(const e of t)l[d]=n?n(e,d):d,o[d]=i(e,d),d++;let h=0,p=r.length-1,m=0,g=o.length-1;for(;h<=p&&m<=g;)if(null===r[h])h++;else if(null===r[p])p--;else if(s[h]===l[m])a[m]=rt(r[h],o[m]),h++,m++;else if(s[p]===l[g])a[g]=rt(r[p],o[g]),p--,g--;else if(s[h]===l[g])a[g]=rt(r[h],o[g]),st(e,r[h],a[g+1]),h++,g--;else if(s[p]===l[m])a[m]=rt(r[p],o[m]),st(e,r[p],r[h]),p--,m++;else if(void 0===c&&(c=ot(l,m,g),u=ot(s,h,p)),c.has(s[h]))if(c.has(s[p])){const t=u.get(l[m]),i=void 0!==t?r[t]:null;if(null===i){const t=nt(e,r[h]);rt(t,o[m]),a[m]=t}else a[m]=rt(i,o[m]),st(e,i,r[h]),r[t]=null;m++}else at(r[p]),p--;else at(r[h]),h++;for(;m<=g;){const t=nt(e,a[g+1]);rt(t,o[m]),a[m++]=t}for(;h<=p;){const t=r[h++];null!==t&&at(t)}lt.set(e,a),ct.set(e,l)}},(...t)=>{const e=dt(...t);return m.set(e,!0),e});var dt,ht=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,pt="[^\\s]+",mt=/\[([^]*?)\]/gm;function gt(t,e){for(var i=[],n=0,r=t.length;n<r;n++)i.push(t[n].substr(0,e));return i}var ft=function(t){return function(e,i){var n=i[t].map((function(t){return t.toLowerCase()})).indexOf(e.toLowerCase());return n>-1?n:null}};function _t(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];for(var n=0,r=e;n<r.length;n++){var s=r[n];for(var a in s)t[a]=s[a]}return t}var yt=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],vt=["January","February","March","April","May","June","July","August","September","October","November","December"],wt=gt(vt,3),bt={dayNamesShort:gt(yt,3),dayNames:yt,monthNamesShort:wt,monthNames:vt,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10?1:0)*t%10]}},St=_t({},bt),xt=function(t,e){for(void 0===e&&(e=2),t=String(t);t.length<e;)t="0"+t;return t},kt={D:function(t){return String(t.getDate())},DD:function(t){return xt(t.getDate())},Do:function(t,e){return e.DoFn(t.getDate())},d:function(t){return String(t.getDay())},dd:function(t){return xt(t.getDay())},ddd:function(t,e){return e.dayNamesShort[t.getDay()]},dddd:function(t,e){return e.dayNames[t.getDay()]},M:function(t){return String(t.getMonth()+1)},MM:function(t){return xt(t.getMonth()+1)},MMM:function(t,e){return e.monthNamesShort[t.getMonth()]},MMMM:function(t,e){return e.monthNames[t.getMonth()]},YY:function(t){return xt(String(t.getFullYear()),4).substr(2)},YYYY:function(t){return xt(t.getFullYear(),4)},h:function(t){return String(t.getHours()%12||12)},hh:function(t){return xt(t.getHours()%12||12)},H:function(t){return String(t.getHours())},HH:function(t){return xt(t.getHours())},m:function(t){return String(t.getMinutes())},mm:function(t){return xt(t.getMinutes())},s:function(t){return String(t.getSeconds())},ss:function(t){return xt(t.getSeconds())},S:function(t){return String(Math.round(t.getMilliseconds()/100))},SS:function(t){return xt(Math.round(t.getMilliseconds()/10),2)},SSS:function(t){return xt(t.getMilliseconds(),3)},a:function(t,e){return t.getHours()<12?e.amPm[0]:e.amPm[1]},A:function(t,e){return t.getHours()<12?e.amPm[0].toUpperCase():e.amPm[1].toUpperCase()},ZZ:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+xt(100*Math.floor(Math.abs(e)/60)+Math.abs(e)%60,4)},Z:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+xt(Math.floor(Math.abs(e)/60),2)+":"+xt(Math.abs(e)%60,2)}},Ct=function(t){return+t-1},Pt=[null,"[1-9]\\d?"],Nt=[null,pt],Tt=["isPm",pt,function(t,e){var i=t.toLowerCase();return i===e.amPm[0]?0:i===e.amPm[1]?1:null}],Et=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(t){var e=(t+"").match(/([+-]|\d\d)/gi);if(e){var i=60*+e[1]+parseInt(e[2],10);return"+"===e[0]?i:-i}return 0}],$t=(ft("monthNamesShort"),ft("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"});var Mt=function(t,e,i){if(void 0===e&&(e=$t.default),void 0===i&&(i={}),"number"==typeof t&&(t=new Date(t)),"[object Date]"!==Object.prototype.toString.call(t)||isNaN(t.getTime()))throw new Error("Invalid Date pass to format");var n=[];e=(e=$t[e]||e).replace(mt,(function(t,e){return n.push(e),"@@@"}));var r=_t(_t({},St),i);return(e=e.replace(ht,(function(e){return kt[e](t,r)}))).replace(/@@@/g,(function(){return n.shift()}))};(function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}})(),function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(t){return"RangeError"===t.name}}();var Vt=function(t,e,i,n){n=n||{},i=null==i?{}:i;var r=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return r.detail=i,t.dispatchEvent(r),r};var At={optional:"Optional",name:"Titel",time_entity:"Zeit-Entität",override_time_entity:"Zeit-Überschreibungs-Entität",mode_entity:"Modus-Entität",duration_entity:"Dauer-Entität",invalid_configuration:"Ungültige Konfiguration",required_entity_missing:"Die notwendige Entität %entity% ist nicht gesetzt",required_entity_not_found:"Die notwendige Entität %entity% konnte nicht gefunden werden",force_native_time_picker_for_device:"Das integrierte Zeitauswahlmenü dises Browsers verwenden"},It={alarm_mode:"Alarmmodus",alarm_duration:"Alarmdauer"},Ot={config:At,card:It},Dt=Object.freeze({__proto__:null,config:At,card:It,default:Ot}),Rt={optional:"Optional",name:"Title",time_entity:"Time Entity",override_time_entity:"Time Override Entity",mode_entity:"Mode Entity",duration_entity:"Duration Entity",invalid_configuration:"Invalid configuration",required_entity_missing:"A required entity %entity% is not set",required_entity_not_found:"A required entity %entity% is not found",force_native_time_picker_for_device:"Force the native time picker in this browser"},zt={alarm_mode:"Alarm Mode",alarm_duration:"Alarm Duration"},Bt={config:Rt,card:zt},jt=Object.freeze({__proto__:null,config:Rt,card:zt,default:Bt}),Lt={optional:"Valgfri",name:"Tittel",time_entity:"Tidsenhet",mode_entity:"Modusenhet",duration_entity:"Varighet Enhet",invalid_configuration:"Ugyldig konfigurasjon",required_entity_missing:"En obligatorisk %entity% er ikke angitt",required_entity_not_found:"En nødvendig enhet %entity% er ikke funnet",force_native_time_picker_for_device:"Tving den opprinnelige tidsvelgeren i denne nettleseren"},Ut={alarm_mode:"Alarm Modus",alarm_duration:"Alarmens varighet"},qt={config:Lt,card:Ut},Yt=Object.freeze({__proto__:null,config:Lt,card:Ut,default:qt}),Ht={optional:"Opcjonalny",name:"Tytuł",time_entity:"Encja czasu",mode_entity:"Encja trybu",duration_entity:"Encja czasu trwania",invalid_configuration:"Niewłaściwa konfiguracja",required_entity_missing:"Wymagana encja %entity% nie została skonfigurowana",required_entity_not_found:"Wymagana encja %entity% nie została znaleziona",force_native_time_picker_for_device:"Wymuś natywny sposób wyboru czasu w tej przeglądarce"},Ft={alarm_mode:"Tryb alarmu",alarm_duration:"Czas trwania alarmu"},Wt={config:Ht,card:Ft};const Zt={de:Dt,en:jt,nb:Yt,no:Yt,pl:Object.freeze({__proto__:null,config:Ht,card:Ft,default:Wt})};function Jt(t,e="",i=""){const n=t.split(".")[0],r=t.split(".")[1],s=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let a;try{a=Zt[s][n][r]}catch(t){a=Zt.en[n][r]}return void 0===a&&(a=Zt.en[n][r]),""!==e&&""!==i&&(a=a.replace(e,i)),a}let Gt=class extends it{setConfig(t){this._config=t}get _title(){return this._config&&this._config.name||""}get _time_entity(){return this._config&&this._config.time_entity||""}get _override_time_entity(){return this._config&&this._config.override_time_entity||""}get _mode_entity(){return this._config&&this._config.mode_entity||""}get _duration_entity(){return this._config&&this._config.duration_entity||""}get _force_native_time_picker_for_device(){return"true"===localStorage.getItem("lightalarmCard.forceNativePicker")}render(){if(!this.hass)return D``;try{window.loadCardHelpers()}catch(t){}const t=Object.keys(this.hass.states).filter(t=>"input_datetime"===t.substring(0,t.indexOf("."))),e=Object.keys(this.hass.states).filter(t=>"sensor"===t.substring(0,t.indexOf("."))),i=Object.keys(this.hass.states).filter(t=>"input_select"===t.substring(0,t.indexOf("."))),n=Object.keys(this.hass.states).filter(t=>"input_number"===t.substring(0,t.indexOf(".")));return D`
      <div class="card-config">
        <ha-textfield
          label="${Jt("config.name")} (${Jt("config.optional")})"
          .value=${this._title}
          .configValue=${"name"}
          @input=${this._valueChanged}
          class="padding-bottom full-width"
        ></ha-textfield>

        <div class="indent">
          <ha-select
            label="${Jt("config.time_entity")}"
            @selected=${this._valueChanged}
            .configValue=${"time_entity"}
            .value=${this._time_entity}
            class="padding-bottom full-width"
          >
            ${t.map(t=>D`
                <mwc-list-item .value="${t}">${t}</mwc-list-item>
              `)}
          </ha-select>
          <br />
          <ha-select
            label="${Jt("config.override_time_entity")}"
            @selected=${this._valueChanged}
            .configValue=${"override_time_entity"}
            .value=${this._override_time_entity}
            class="padding-bottom full-width"
          >
            ${e.map(t=>D`
                <mwc-list-item .value="${t}">${t}</mwc-list-item>
              `)}
          </ha-select>
          <br />
          <ha-select
            label="${Jt("config.mode_entity")}"
            @selected=${this._valueChanged}
            .configValue=${"mode_entity"}
            .value=${this._mode_entity}
            class="padding-bottom full-width"
          >
            ${i.map(t=>D`
                <mwc-list-item .value="${t}">${t}</mwc-list-item>
              `)}
          </ha-select>
          <br />
          <ha-select
            label="${Jt("config.duration_entity")}"
            @selected=${this._valueChanged}
            .configValue=${"duration_entity"}
            .value=${this._duration_entity}
            class="padding-bottom full-width"
          >
            ${n.map(t=>D`
                <mwc-list-item .value="${t}">${t}</mwc-list-item>
              `)}
          </ha-select>
        </div>
        <br />
        <ha-switch
          .checked=${this._force_native_time_picker_for_device}
          .configValue=${"force_native_time_picker_for_device"}
          @change=${this._valueChanged}
        ></ha-switch>
        <span class="switch-label">${Jt("config.force_native_time_picker_for_device")}</span>
      </div>
    `}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target;this["_"+e.configValue]!==e.value&&(e.configValue&&("force_native_time_picker_for_device"===e.configValue?localStorage.setItem("lightalarmCard.forceNativePicker",e.checked?"true":"false"):this._config=Object.assign(Object.assign({},this._config),{[e.configValue]:void 0!==e.checked?e.checked:e.value})),Vt(this,"config-changed",{config:this._config}))}static get styles(){return tt`
      .padding-bottom {
        padding-bottom: 8px;
      }
      .full-width {
        width: 100%;
      }
      .switch-label {
        padding-left: 10px;
      }
    `}};t([J({attribute:!1})],Gt.prototype,"hass",void 0),t([G()],Gt.prototype,"_config",void 0),Gt=t([W("lightalarm-card-editor")],Gt);const Kt=window;Kt.customCards=Kt.customCards||[],Kt.customCards.push({type:"lightalarm-card",name:"Lightalarm Card",preview:!1,description:"Coordinate light alarm settings in a beautiful way"});const Qt="4.0.1";console.info(`%c LIGHTALARM-CARD %c ${Qt} `,"color: cornsilk; font-weight: bold; background: firebrick","color: firebrick; font-weight: bold; background: cornsilk");let Xt=class extends it{constructor(){super(...arguments),this.timeInputStatus="none"}static async getConfigElement(){return document.createElement("lightalarm-card-editor")}static getStubConfig(){return{}}setConfig(t){if(!t)throw new Error(Jt("config.invalid_configuration"));if(!t.time_entity)throw new Error(Jt("config.required_entity_missing","%entity%",Jt("config.time_entity")));if(!t.mode_entity)throw new Error(Jt("config.required_entity_missing","%entity%",Jt("config.mode_entity")));if(!t.duration_entity)throw new Error(Jt("config.required_entity_missing","%entity%",Jt("config.duration_entity")));try{window.loadCardHelpers()}catch(t){}this.config=t}shouldUpdate(t){const e=function(t,e,i){if(e.has("config")||i)return!0;if(t.config.entity){var n=e.get("hass");return!n||n.states[t.config.entity]!==t.hass.states[t.config.entity]}return!1}(this,t,!1);if(!e){const e=t.hass;return!e||e.states[this.config.time_entity]!==this.hass.states[this.config.time_entity]||e.states[this.config.mode_entity]!==this.hass.states[this.config.mode_entity]||e.states[this.config.duration_entity]!==this.hass.states[this.config.duration_entity]}return e}render(){var t;if(!this.config||!this.hass)return D``;const e=this.hass.states[this.config.time_entity];if(!e)return D`
        <hui-warning
          >${this.hass.localize("config.required_entity_not_found","%entity%",this.config.time_entity)}</hui-warning
        >
      `;const i=this.hass.states[this.config.mode_entity];if(!i)return D`
        <hui-warning
          >${this.hass.localize("config.required_entity_not_found","%entity%",this.config.mode_entity)}</hui-warning
        >
      `;const n=this.hass.states[this.config.duration_entity];if(!n)return D`
        <hui-warning
          >${this.hass.localize("config.required_entity_not_found","%entity%",this.config.duration_entity)}</hui-warning
        >
      `;const r=this.config.override_time_entity?null===(t=this.hass.states[this.config.override_time_entity])||void 0===t?void 0:t.state:void 0,s=r&&"unknown"!==r&&"unavailable"!==r&&e.state!==r;return D`
      <ha-card .header=${this.config.name} tabindex="0">
        <div class="lightalarm-wrapper" id="lightalarm-wrapper">
          <div class="alarm-time-and-decorator-wrap${s?" has-override":""}">
            <svg viewBox="0 0 24 24" class="alarm-time-decorator">
              <path
                d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22A9,9 0 0,0 21,13A9,9 0 0,0 12,4M7.88,3.39L6.6,1.86L2,5.71L3.29,7.24L7.88,3.39M22,5.72L17.4,1.86L16.11,3.39L20.71,7.25L22,5.72Z"
              />
            </svg>
            <div class="alarm-time-wrap">
              <span class="alarm-time-display">
                ${"unknown"===e.state?"--:--":("0"+e.attributes.hour).slice(-2)+":"+("0"+e.attributes.minute).slice(-2)}
              </span>
              <input
                type="time"
                class="alarm-time-picker alarm-time-picker-left"
                required
                value="${"unknown"===e.state?"07:00":("0"+e.attributes.hour).slice(-2)+":"+("0"+e.attributes.minute).slice(-2)}"
                id="lightalarm-time-picker-left"
                @input=${this._selectedTimeValueChangedPicker}
                @blur=${this._timePickerBlur}
                @click=${this._timePickerLeftClick}
              />
              <input
                type="time"
                class="alarm-time-picker alarm-time-picker-right"
                required
                value="${"unknown"===e.state?"07:00":("0"+e.attributes.hour).slice(-2)+":"+("0"+e.attributes.minute).slice(-2)}"
                id="lightalarm-time-picker-right"
                @input=${this._selectedTimeValueChangedPicker}
                @blur=${this._timePickerBlur}
                @click=${this._timePickerRightClick}
              />
              <div class="alarm-time-input">
                <input
                  type="number"
                  required
                  min="0"
                  max="23"
                  value="${"unknown"===e.state?"07":("0"+e.attributes.hour).slice(-2)}"
                  id="lightalarm-time-input-hour"
                  @input=${this._selectedTimeValueChangedInput}
                  @blur=${this._timeInputsBlur}
                  @focus=${this._timePickerLeftClick}
                /><span>:</span
                ><input
                  type="number"
                  required
                  min="0"
                  max="59"
                  value="${"unknown"===e.state?"00":("0"+e.attributes.minute).slice(-2)}"
                  id="lightalarm-time-input-minute"
                  @input=${this._selectedTimeValueChangedInput}
                  @blur=${this._timeInputsBlur}
                  @focus=${this._timePickerRightClick}
                />
              </div>
            </div>
            ${s?D`
                  <div class="alarm-time-override">
                    <span>${null==r?void 0:r.substring(0,5)}</span>
                  </div>
                `:""}
          </div>

          <div class="alarm-properties-wrap">
            <ha-select
              naturalMenuWidth
              class="alarm-mode"
              label="${i.attributes.friendly_name||Jt("card.alarm_mode")}"
              .value=${i.state}
              @selected="${this._selectedModeChanged}"
            >
              ${ut(i.attributes.options,t=>D`
                    <mwc-list-item .value=${t}>${t}</mwc-list-item>
                  `)}
            </ha-select>

            <div class="alarm-duration">
              <label slot="label" for="duration-input"
                >${n.attributes.friendly_name||Jt("card.alarm_duration")}</label
              >
              <div class="alarm-duration-slider">
                <ha-slider
                  .dir="${a=this.hass,function(t){var e=t.language||"en";return t.translationMetadata.translations[e]&&t.translationMetadata.translations[e].isRTL||!1}(a)?"rtl":"ltr"}"
                  .step="${Number(n.attributes.step)}"
                  .min="${Number(n.attributes.min)}"
                  .max="${Number(n.attributes.max)}"
                  .value="${Number(n.state)}"
                  pin
                  @change="${this._selectedDurationValueChanged}"
                  ignore-bar-touch
                  id="duration-input"
                ></ha-slider>
                <span>
                  ${Number(n.state)} ${n.attributes.unit_of_measurement}
                </span>
              </div>
            </div>
          </div>
        </div>
      </ha-card>
    `;var a}static get styles(){return tt`
      ha-card:focus {
        outline: none;
      }
      ha-card::-moz-focus-inner {
        border: 0;
      }

      .lightalarm-wrapper {
        max-width: 100%;
        padding: 5px 15px 5px 0;
        display: flex;
        align-items: stretch;
      }
      .lightalarm-wrapper .alarm-time-and-decorator-wrap {
        flex-basis: auto;
        flex-basis: content;
        position: relative;
        margin-right: 5px;
      }
      .lightalarm-wrapper .alarm-properties-wrap {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
      }

      .lightalarm-wrapper .alarm-time-decorator {
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        width: 100%;
        fill: var(--paper-item-icon-color, --text-color);
        opacity: 0.3;
        transition: opacity 150ms ease-in-out;
      }

      .lightalarm-wrapper.show-input .alarm-time-decorator,
      .lightalarm-wrapper.force-native-input-hour .alarm-time-decorator,
      .lightalarm-wrapper.force-native-input-minute .alarm-time-decorator {
        opacity: 0.07;
      }

      .lightalarm-wrapper .alarm-time-override {
        text-align: center;
        position: relative;
        top: 35%;
        font-size: 1.3rem;
      }
      .lightalarm-wrapper .alarm-time-wrap {
        position: relative;
        font-size: 1.4rem;
        line-height: 1em;
        text-align: center;
        z-index: 2;
        top: 50%;
        margin-top: -0.2em;
      }
      .lightalarm-wrapper .has-override .alarm-time-wrap {
        top: 64%;
        font-size: 0.9rem;
        text-decoration: line-through;
        color: var(--secondary-text-color);
      }
      .lightalarm-wrapper .alarm-time-display {
        box-sizing: border-box;
        position: relative;
        margin: 0 2.5rem;
      }
      .lightalarm-wrapper.show-input .alarm-time-display,
      .lightalarm-wrapper.force-native-input-hour .alarm-time-display,
      .lightalarm-wrapper.force-native-input-minute .alarm-time-display {
        opacity: 0;
      }
      .lightalarm-wrapper .alarm-time-picker {
        position: absolute;
        opacity: 0;
        width: 42%;
        top: 0;
        border: 0;
        padding: 0;
        margin: 0;
        margin-top: -0.7em;
        line-height: 3em;
        font-family: inherit;
        z-index: 2;
      }

      .lightalarm-wrapper .alarm-time-picker-left {
        left: 8%;
      }
      .lightalarm-wrapper .alarm-time-picker-right {
        left: 50%;
      }

      .lightalarm-wrapper.force-native-input-hour .alarm-time-picker-left {
        opacity: 1;
        width: 84%;
        left: 50%;
        transform: translate(-50%, 0);
      }
      .lightalarm-wrapper.force-native-input-minute .alarm-time-picker-right {
        opacity: 1;
        width: 84%;
        left: 50%;
        transform: translate(-50%, 0);
      }

      .lightalarm-wrapper .alarm-time-input {
        position: absolute;
        display: none;
        top: -0.4rem;
        left: 8%;
        width: 84%;
        opacity: 1;
      }
      .lightalarm-wrapper.show-input .alarm-time-input {
        display: block;
      }
      .lightalarm-wrapper .alarm-time-input input {
        width: 1.5em;
        width: 2.3ch;
        box-sizing: content-box;
        display: inline-block;
        padding: 2px;
        background: none;
        border: none;
        border-bottom: 1px solid var(--paper-input-container-color, var(--secondary-text-color));
        color: inherit;
        font-family: inherit;
        text-align: center;
        font-size: inherit;
      }
      .lightalarm-wrapper .alarm-time-input span {
        margin: 0 1px;
      }
      .lightalarm-wrapper .alarm-time-input input:focused {
        border-bottom: 1px solid var(--paper-input-container-focus-color, var(--primary-color));
      }
      .lightalarm-wrapper .alarm-time-input input[type='number'] {
        -moz-appearance: textfield;
      }
      .lightalarm-wrapper .alarm-time-input input::-webkit-outer-spin-button,
      .lightalarm-wrapper .alarm-time-input input::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }

      .lightalarm-wrapper .alarm-mode {
        margin: 8px 0;
      }

      .lightalarm-wrapper .alarm-duration label {
        font-family: var(--paper-font-subhead_-_font-family);
        -webkit-font-smoothing: var(--paper-font-subhead_-_-webkit-font-smoothing);
        font-size: calc(var(--paper-font-subhead_-_font-size) * 0.75);
        font-weight: var(--paper-font-subhead_-_font-weight);
        line-height: var(--paper-font-subhead_-_line-height);
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: scale(0.75);
        transform: scale(0.75);
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }
      .lightalarm-wrapper .alarm-duration-slider {
        display: flex;
        align-items: center;
      }
      .lightalarm-wrapper .alarm-duration-slider ha-slider {
        flex-grow: 1;
        width: auto;
        margin-left: calc(-15px - var(--calculated-paper-slider-height) / 2);
      }
    `}_showTimeInputs(){const t=this.shadowRoot.getElementById("lightalarm-wrapper");t&&"shown"!==this.timeInputStatus&&(t.classList.add("show-input"),this.timeInputStatus="shown")}_selectedTimeValueChangedPicker(t){const e=t.target.value;if("true"===localStorage.getItem("lightalarmCard.forceNativePicker"))this._debounce("saveTimePickerValue",3e3,!1,e);else{this._saveTimePickerValue(e);const t=this.shadowRoot.getElementById("lightalarm-time-input-hour");t.value=e.split(":")[0],null==t||t.blur(),clearTimeout(this.inputBlurTimer);const i=this.shadowRoot.getElementById("lightalarm-time-input-minute");i.value=e.split(":")[1],null==i||i.blur(),clearTimeout(this.inputBlurTimer);const n=this.shadowRoot.getElementById("lightalarm-wrapper");if(!n)return;n.classList.remove("show-input","force-native-input-hour","force-native-input-minute"),this.timeInputStatus="none"}}_selectedTimeValueChangedInput(){this._debounce("saveTimeInputValue",3e3)}_saveTimePickerValue(t){const e=this.hass.states[this.config.time_entity];if(""===t)return;this.shadowRoot.getElementById("lightalarm-time-picker-left").value=t;this.shadowRoot.getElementById("lightalarm-time-picker-right").value=t,t!==e.state&&this.hass.callService(e.entity_id.split(".",1)[0],"set_datetime",{entity_id:e.entity_id,time:t})}_saveTimeInputValue(){const t=this.hass.states[this.config.time_entity],e=this.shadowRoot.getElementById("lightalarm-time-input-hour"),i=this.shadowRoot.getElementById("lightalarm-time-input-minute"),n=Number(e.value),r=Number(i.value);if(isNaN(n)||isNaN(r)||n<0||n>23||r<0||r>59)return void console.error(`Values for lightalarm time of '${e.value}' hours and '${i.value}' is not a valid time!`);const s=("0"+n).slice(-2)+":"+("0"+r).slice(-2);this.shadowRoot.getElementById("lightalarm-time-picker-left").value=s;this.shadowRoot.getElementById("lightalarm-time-picker-right").value=s,s!==t.state&&this.hass.callService(t.entity_id.split(".",1)[0],"set_datetime",{entity_id:t.entity_id,time:s})}_timePickerLeftClick(){this._timePickerClick(!0)}_timePickerRightClick(){this._timePickerClick(!1)}_timePickerClick(t){if("true"===localStorage.getItem("lightalarmCard.forceNativePicker")){const e=this.shadowRoot.getElementById("lightalarm-wrapper");if(!e)return;t?e.classList.add("force-native-input-hour"):e.classList.add("force-native-input-minute")}else if(this._showTimeInputs(),clearTimeout(this.inputBlurTimer),t){const t=this.shadowRoot.getElementById("lightalarm-time-input-hour");null==t||t.focus(),this._moveCursorToEnd(t)}else{const t=this.shadowRoot.getElementById("lightalarm-time-input-minute");null==t||t.focus(),this._moveCursorToEnd(t)}}_timePickerBlur(t){if("true"===localStorage.getItem("lightalarmCard.forceNativePicker")){this._debounce("saveTimePickerValue",0,!0,t.target.value);const e=this.shadowRoot.getElementById("lightalarm-wrapper");if(!e)return;e.classList.remove("force-native-input-hour","force-native-input-minute")}}_timeInputsBlur(){this.inputBlurTimer=setTimeout(()=>{this._debounce("saveTimeInputValue",0,!0);const t=this.shadowRoot.getElementById("lightalarm-wrapper");t&&(t.classList.remove("show-input"),this.timeInputStatus="none")},20)}_selectedModeChanged(t){Vt(window,"haptic","light");const e=this.hass.states[this.config.mode_entity];t.target.value&&""!==t.target.value&&t.target.value!==e.state&&this.hass.callService("input_select","select_option",{option:t.target.value,entity_id:e.entity_id})}_selectedDurationValueChanged(){const t=this.shadowRoot.querySelector("#duration-input"),e=this.hass.states[this.config.duration_entity];t.value!==e.state&&this.hass.callService(e.entity_id.split(".",1)[0],"set_value",{value:t.value,entity_id:e.entity_id})}_moveCursorToEnd(t){if(!t)return;t.focus();const e=t.value;t.value="",t.value=e}_debounce(t,e,i=!1,n=""){switch(clearTimeout(this.debounceTimer),t){case"saveTimeInputValue":i?this._saveTimeInputValue():this.debounceTimer=setTimeout(()=>this._saveTimeInputValue(),e);break;case"saveTimePickerValue":i?this._saveTimePickerValue(n):this.debounceTimer=setTimeout(()=>this._saveTimePickerValue(n),e)}}};t([J({attribute:!1})],Xt.prototype,"hass",void 0),t([G()],Xt.prototype,"config",void 0),Xt=t([W("lightalarm-card")],Xt);export{Xt as LightalarmCard};
