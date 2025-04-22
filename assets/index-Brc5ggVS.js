(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const pc=!1,_c=(n,e)=>n===e,Mn=Symbol("solid-proxy"),Ho=typeof Proxy=="function",Fn={equals:_c};let jo=Xo;const Ke=1,Un=2,Go={owned:null,cleanups:null,context:null,owner:null};var S=null;let Ri=null,gc=null,O=null,J=null,Se=null,ui=0;function qo(n,e){const t=O,i=S,s=n.length===0,r=e===void 0?i:e,o=s?Go:{owned:null,cleanups:null,context:r?r.context:null,owner:r},a=s?n:()=>n(()=>pe(()=>Xt(o)));S=o,O=null;try{return Ye(a,!0)}finally{O=t,S=i}}function B(n,e){e=e?Object.assign({},Fn,e):Fn;const t={value:n,observers:null,observerSlots:null,comparator:e.equals||void 0},i=s=>(typeof s=="function"&&(s=s(t.value)),Jo(t,s));return[Qo.bind(t),i]}function K(n,e,t){const i=Cs(n,e,!1,Ke);dn(i)}function mc(n,e,t){jo=bc;const i=Cs(n,e,!1,Ke);i.user=!0,Se?Se.push(i):dn(i)}function $(n,e,t){t=t?Object.assign({},Fn,t):Fn;const i=Cs(n,e,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=t.equals||void 0,dn(i),Qo.bind(i)}function vc(n){return Ye(n,!1)}function pe(n){if(O===null)return n();const e=O;O=null;try{return n()}finally{O=e}}function ws(n,e,t){const i=Array.isArray(n);let s,r=t&&t.defer;return o=>{let a;if(i){a=Array(n.length);for(let c=0;c<n.length;c++)a[c]=n[c]()}else a=n();if(r)return r=!1,o;const l=pe(()=>e(a,s,o));return s=a,l}}function yc(n){mc(()=>pe(n))}function Es(n){return S===null||(S.cleanups===null?S.cleanups=[n]:S.cleanups.push(n)),n}function zo(){return S}function Ko(n,e){const t=S,i=O;S=n,O=null;try{return Ye(e,!0)}catch(s){Ts(s)}finally{S=t,O=i}}function wc(n){const e=O,t=S;return Promise.resolve().then(()=>{O=e,S=t;let i;return Ye(n,!1),O=S=null,i?i.done:void 0})}const[Vm,Hm]=B(!1);function Yo(n,e){const t=Symbol("context");return{id:t,Provider:Tc(t),defaultValue:n}}function Is(n){let e;return S&&S.context&&(e=S.context[n.id])!==void 0?e:n.defaultValue}function bs(n){const e=$(n),t=$(()=>Gi(e()));return t.toArray=()=>{const i=t();return Array.isArray(i)?i:i!=null?[i]:[]},t}function Qo(){if(this.sources&&this.state)if(this.state===Ke)dn(this);else{const n=J;J=null,Ye(()=>Wn(this),!1),J=n}if(O){const n=this.observers?this.observers.length:0;O.sources?(O.sources.push(this),O.sourceSlots.push(n)):(O.sources=[this],O.sourceSlots=[n]),this.observers?(this.observers.push(O),this.observerSlots.push(O.sources.length-1)):(this.observers=[O],this.observerSlots=[O.sources.length-1])}return this.value}function Jo(n,e,t){let i=n.value;return(!n.comparator||!n.comparator(i,e))&&(n.value=e,n.observers&&n.observers.length&&Ye(()=>{for(let s=0;s<n.observers.length;s+=1){const r=n.observers[s],o=Ri&&Ri.running;o&&Ri.disposed.has(r),(o?!r.tState:!r.state)&&(r.pure?J.push(r):Se.push(r),r.observers&&Zo(r)),o||(r.state=Ke)}if(J.length>1e6)throw J=[],new Error},!1)),e}function dn(n){if(!n.fn)return;Xt(n);const e=ui;Ec(n,n.value,e)}function Ec(n,e,t){let i;const s=S,r=O;O=S=n;try{i=n.fn(e)}catch(o){return n.pure&&(n.state=Ke,n.owned&&n.owned.forEach(Xt),n.owned=null),n.updatedAt=t+1,Ts(o)}finally{O=r,S=s}(!n.updatedAt||n.updatedAt<=t)&&(n.updatedAt!=null&&"observers"in n?Jo(n,i):n.value=i,n.updatedAt=t)}function Cs(n,e,t,i=Ke,s){const r={fn:n,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:e,owner:S,context:S?S.context:null,pure:t};return S===null||S!==Go&&(S.owned?S.owned.push(r):S.owned=[r]),r}function $n(n){if(n.state===0)return;if(n.state===Un)return Wn(n);if(n.suspense&&pe(n.suspense.inFallback))return n.suspense.effects.push(n);const e=[n];for(;(n=n.owner)&&(!n.updatedAt||n.updatedAt<ui);)n.state&&e.push(n);for(let t=e.length-1;t>=0;t--)if(n=e[t],n.state===Ke)dn(n);else if(n.state===Un){const i=J;J=null,Ye(()=>Wn(n,e[0]),!1),J=i}}function Ye(n,e){if(J)return n();let t=!1;e||(J=[]),Se?t=!0:Se=[],ui++;try{const i=n();return Ic(t),i}catch(i){t||(Se=null),J=null,Ts(i)}}function Ic(n){if(J&&(Xo(J),J=null),n)return;const e=Se;Se=null,e.length&&Ye(()=>jo(e),!1)}function Xo(n){for(let e=0;e<n.length;e++)$n(n[e])}function bc(n){let e,t=0;for(e=0;e<n.length;e++){const i=n[e];i.user?n[t++]=i:$n(i)}for(e=0;e<t;e++)$n(n[e])}function Wn(n,e){n.state=0;for(let t=0;t<n.sources.length;t+=1){const i=n.sources[t];if(i.sources){const s=i.state;s===Ke?i!==e&&(!i.updatedAt||i.updatedAt<ui)&&$n(i):s===Un&&Wn(i,e)}}}function Zo(n){for(let e=0;e<n.observers.length;e+=1){const t=n.observers[e];t.state||(t.state=Un,t.pure?J.push(t):Se.push(t),t.observers&&Zo(t))}}function Xt(n){let e;if(n.sources)for(;n.sources.length;){const t=n.sources.pop(),i=n.sourceSlots.pop(),s=t.observers;if(s&&s.length){const r=s.pop(),o=t.observerSlots.pop();i<s.length&&(r.sourceSlots[o]=i,s[i]=r,t.observerSlots[i]=o)}}if(n.tOwned){for(e=n.tOwned.length-1;e>=0;e--)Xt(n.tOwned[e]);delete n.tOwned}if(n.owned){for(e=n.owned.length-1;e>=0;e--)Xt(n.owned[e]);n.owned=null}if(n.cleanups){for(e=n.cleanups.length-1;e>=0;e--)n.cleanups[e]();n.cleanups=null}n.state=0}function Cc(n){return n instanceof Error?n:new Error(typeof n=="string"?n:"Unknown error",{cause:n})}function Ts(n,e=S){throw Cc(n)}function Gi(n){if(typeof n=="function"&&!n.length)return Gi(n());if(Array.isArray(n)){const e=[];for(let t=0;t<n.length;t++){const i=Gi(n[t]);Array.isArray(i)?e.push.apply(e,i):e.push(i)}return e}return n}function Tc(n,e){return function(i){let s;return K(()=>s=pe(()=>(S.context={...S.context,[n]:i.value},bs(()=>i.children))),void 0),s}}function Y(n,e){return pe(()=>n(e||{}))}function Tn(){return!0}const qi={get(n,e,t){return e===Mn?t:n.get(e)},has(n,e){return e===Mn?!0:n.has(e)},set:Tn,deleteProperty:Tn,getOwnPropertyDescriptor(n,e){return{configurable:!0,enumerable:!0,get(){return n.get(e)},set:Tn,deleteProperty:Tn}},ownKeys(n){return n.keys()}};function Ai(n){return(n=typeof n=="function"?n():n)?n:{}}function Sc(){for(let n=0,e=this.length;n<e;++n){const t=this[n]();if(t!==void 0)return t}}function zi(...n){let e=!1;for(let o=0;o<n.length;o++){const a=n[o];e=e||!!a&&Mn in a,n[o]=typeof a=="function"?(e=!0,$(a)):a}if(Ho&&e)return new Proxy({get(o){for(let a=n.length-1;a>=0;a--){const l=Ai(n[a])[o];if(l!==void 0)return l}},has(o){for(let a=n.length-1;a>=0;a--)if(o in Ai(n[a]))return!0;return!1},keys(){const o=[];for(let a=0;a<n.length;a++)o.push(...Object.keys(Ai(n[a])));return[...new Set(o)]}},qi);const t={},i=Object.create(null);for(let o=n.length-1;o>=0;o--){const a=n[o];if(!a)continue;const l=Object.getOwnPropertyNames(a);for(let c=l.length-1;c>=0;c--){const u=l[c];if(u==="__proto__"||u==="constructor")continue;const h=Object.getOwnPropertyDescriptor(a,u);if(!i[u])i[u]=h.get?{enumerable:!0,configurable:!0,get:Sc.bind(t[u]=[h.get.bind(a)])}:h.value!==void 0?h:void 0;else{const d=t[u];d&&(h.get?d.push(h.get.bind(a)):h.value!==void 0&&d.push(()=>h.value))}}}const s={},r=Object.keys(i);for(let o=r.length-1;o>=0;o--){const a=r[o],l=i[a];l&&l.get?Object.defineProperty(s,a,l):s[a]=l?l.value:void 0}return s}function Rc(n,...e){if(Ho&&Mn in n){const s=new Set(e.length>1?e.flat():e[0]),r=e.map(o=>new Proxy({get(a){return o.includes(a)?n[a]:void 0},has(a){return o.includes(a)&&a in n},keys(){return o.filter(a=>a in n)}},qi));return r.push(new Proxy({get(o){return s.has(o)?void 0:n[o]},has(o){return s.has(o)?!1:o in n},keys(){return Object.keys(n).filter(o=>!s.has(o))}},qi)),r}const t={},i=e.map(()=>({}));for(const s of Object.getOwnPropertyNames(n)){const r=Object.getOwnPropertyDescriptor(n,s),o=!r.get&&!r.set&&r.enumerable&&r.writable&&r.configurable;let a=!1,l=0;for(const c of e)c.includes(s)&&(a=!0,o?i[l][s]=r.value:Object.defineProperty(i[l],s,r)),++l;a||(o?t[s]=r.value:Object.defineProperty(t,s,r))}return[...i,t]}const Ac=n=>`Stale read from <${n}>.`;function wt(n){const e=n.keyed,t=$(()=>n.when,void 0,void 0),i=e?t:$(t,void 0,{equals:(s,r)=>!s==!r});return $(()=>{const s=i();if(s){const r=n.children;return typeof r=="function"&&r.length>0?pe(()=>r(e?s:()=>{if(!pe(i))throw Ac("Show");return t()})):r}return n.fallback},void 0,void 0)}const kc=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Nc=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...kc]),Pc=new Set(["innerHTML","textContent","innerText","children"]),Oc=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Dc=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function xc(n,e){const t=Dc[n];return typeof t=="object"?t[e]?t.$:void 0:t}const Lc=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]);function Mc(n,e,t){let i=t.length,s=e.length,r=i,o=0,a=0,l=e[s-1].nextSibling,c=null;for(;o<s||a<r;){if(e[o]===t[a]){o++,a++;continue}for(;e[s-1]===t[r-1];)s--,r--;if(s===o){const u=r<i?a?t[a-1].nextSibling:t[r-a]:l;for(;a<r;)n.insertBefore(t[a++],u)}else if(r===a)for(;o<s;)(!c||!c.has(e[o]))&&e[o].remove(),o++;else if(e[o]===t[r-1]&&t[a]===e[s-1]){const u=e[--s].nextSibling;n.insertBefore(t[a++],e[o++].nextSibling),n.insertBefore(t[--r],u),e[s]=t[r]}else{if(!c){c=new Map;let h=a;for(;h<r;)c.set(t[h],h++)}const u=c.get(e[o]);if(u!=null)if(a<u&&u<r){let h=o,d=1,f;for(;++h<s&&h<r&&!((f=c.get(e[h]))==null||f!==u+d);)d++;if(d>u-a){const _=e[o];for(;a<u;)n.insertBefore(t[a++],_)}else n.replaceChild(t[a++],e[o++])}else o++;else e[o++].remove()}}}const Rr="_$DX_DELEGATE";function Fc(n,e,t,i={}){let s;return qo(r=>{s=r,e===document?n():Ue(e,n(),e.firstChild?null:void 0,t)},i.owner),()=>{s(),e.textContent=""}}function ve(n,e,t,i){let s;const r=()=>{const a=document.createElement("template");return a.innerHTML=n,a.content.firstChild},o=()=>(s||(s=r())).cloneNode(!0);return o.cloneNode=o,o}function Nt(n,e=window.document){const t=e[Rr]||(e[Rr]=new Set);for(let i=0,s=n.length;i<s;i++){const r=n[i];t.has(r)||(t.add(r),e.addEventListener(r,zc))}}function Ki(n,e,t){t==null?n.removeAttribute(e):n.setAttribute(e,t)}function Uc(n,e,t){t?n.setAttribute(e,""):n.removeAttribute(e)}function $c(n,e){e==null?n.removeAttribute("class"):n.className=e}function Wc(n,e,t,i){if(i)Array.isArray(t)?(n[`$$${e}`]=t[0],n[`$$${e}Data`]=t[1]):n[`$$${e}`]=t;else if(Array.isArray(t)){const s=t[0];n.addEventListener(e,t[0]=r=>s.call(n,t[1],r))}else n.addEventListener(e,t,typeof t!="function"&&t)}function Bc(n,e,t={}){const i=Object.keys(e||{}),s=Object.keys(t);let r,o;for(r=0,o=s.length;r<o;r++){const a=s[r];!a||a==="undefined"||e[a]||(Ar(n,a,!1),delete t[a])}for(r=0,o=i.length;r<o;r++){const a=i[r],l=!!e[a];!a||a==="undefined"||t[a]===l||!l||(Ar(n,a,!0),t[a]=l)}return t}function Vc(n,e,t){if(!e)return t?Ki(n,"style"):e;const i=n.style;if(typeof e=="string")return i.cssText=e;typeof t=="string"&&(i.cssText=t=void 0),t||(t={}),e||(e={});let s,r;for(r in t)e[r]==null&&i.removeProperty(r),delete t[r];for(r in e)s=e[r],s!==t[r]&&(i.setProperty(r,s),t[r]=s);return t}function Hc(n,e={},t,i){const s={};return K(()=>s.children=Zt(n,e.children,s.children)),K(()=>typeof e.ref=="function"&&jc(e.ref,n)),K(()=>Gc(n,e,t,!0,s,!0)),s}function jc(n,e,t){return pe(()=>n(e,t))}function Ue(n,e,t,i){if(t!==void 0&&!i&&(i=[]),typeof e!="function")return Zt(n,e,i,t);K(s=>Zt(n,e(),s,t),i)}function Gc(n,e,t,i,s={},r=!1){e||(e={});for(const o in s)if(!(o in e)){if(o==="children")continue;s[o]=kr(n,o,null,s[o],t,r,e)}for(const o in e){if(o==="children")continue;const a=e[o];s[o]=kr(n,o,a,s[o],t,r,e)}}function qc(n){return n.toLowerCase().replace(/-([a-z])/g,(e,t)=>t.toUpperCase())}function Ar(n,e,t){const i=e.trim().split(/\s+/);for(let s=0,r=i.length;s<r;s++)n.classList.toggle(i[s],t)}function kr(n,e,t,i,s,r,o){let a,l,c,u,h;if(e==="style")return Vc(n,t,i);if(e==="classList")return Bc(n,t,i);if(t===i)return i;if(e==="ref")r||t(n);else if(e.slice(0,3)==="on:"){const d=e.slice(3);i&&n.removeEventListener(d,i,typeof i!="function"&&i),t&&n.addEventListener(d,t,typeof t!="function"&&t)}else if(e.slice(0,10)==="oncapture:"){const d=e.slice(10);i&&n.removeEventListener(d,i,!0),t&&n.addEventListener(d,t,!0)}else if(e.slice(0,2)==="on"){const d=e.slice(2).toLowerCase(),f=Lc.has(d);if(!f&&i){const _=Array.isArray(i)?i[0]:i;n.removeEventListener(d,_)}(f||t)&&(Wc(n,d,t,f),f&&Nt([d]))}else e.slice(0,5)==="attr:"?Ki(n,e.slice(5),t):e.slice(0,5)==="bool:"?Uc(n,e.slice(5),t):(h=e.slice(0,5)==="prop:")||(c=Pc.has(e))||(u=xc(e,n.tagName))||(l=Nc.has(e))||(a=n.nodeName.includes("-")||"is"in o)?(h&&(e=e.slice(5),l=!0),e==="class"||e==="className"?$c(n,t):a&&!l&&!c?n[qc(e)]=t:n[u||e]=t):Ki(n,Oc[e]||e,t);return t}function zc(n){let e=n.target;const t=`$$${n.type}`,i=n.target,s=n.currentTarget,r=l=>Object.defineProperty(n,"target",{configurable:!0,value:l}),o=()=>{const l=e[t];if(l&&!e.disabled){const c=e[`${t}Data`];if(c!==void 0?l.call(e,c,n):l.call(e,n),n.cancelBubble)return}return e.host&&typeof e.host!="string"&&!e.host._$host&&e.contains(n.target)&&r(e.host),!0},a=()=>{for(;o()&&(e=e._$host||e.parentNode||e.host););};if(Object.defineProperty(n,"currentTarget",{configurable:!0,get(){return e||document}}),n.composedPath){const l=n.composedPath();r(l[0]);for(let c=0;c<l.length-2&&(e=l[c],!!o());c++){if(e._$host){e=e._$host,a();break}if(e.parentNode===s)break}}else a();r(i)}function Zt(n,e,t,i,s){for(;typeof t=="function";)t=t();if(e===t)return t;const r=typeof e,o=i!==void 0;if(n=o&&t[0]&&t[0].parentNode||n,r==="string"||r==="number"){if(r==="number"&&(e=e.toString(),e===t))return t;if(o){let a=t[0];a&&a.nodeType===3?a.data!==e&&(a.data=e):a=document.createTextNode(e),t=dt(n,t,i,a)}else t!==""&&typeof t=="string"?t=n.firstChild.data=e:t=n.textContent=e}else if(e==null||r==="boolean")t=dt(n,t,i);else{if(r==="function")return K(()=>{let a=e();for(;typeof a=="function";)a=a();t=Zt(n,a,t,i)}),()=>t;if(Array.isArray(e)){const a=[],l=t&&Array.isArray(t);if(Yi(a,e,t,s))return K(()=>t=Zt(n,a,t,i,!0)),()=>t;if(a.length===0){if(t=dt(n,t,i),o)return t}else l?t.length===0?Nr(n,a,i):Mc(n,t,a):(t&&dt(n),Nr(n,a));t=a}else if(e.nodeType){if(Array.isArray(t)){if(o)return t=dt(n,t,i,e);dt(n,t,null,e)}else t==null||t===""||!n.firstChild?n.appendChild(e):n.replaceChild(e,n.firstChild);t=e}}return t}function Yi(n,e,t,i){let s=!1;for(let r=0,o=e.length;r<o;r++){let a=e[r],l=t&&t[n.length],c;if(!(a==null||a===!0||a===!1))if((c=typeof a)=="object"&&a.nodeType)n.push(a);else if(Array.isArray(a))s=Yi(n,a,l)||s;else if(c==="function")if(i){for(;typeof a=="function";)a=a();s=Yi(n,Array.isArray(a)?a:[a],Array.isArray(l)?l:[l])||s}else n.push(a),s=!0;else{const u=String(a);l&&l.nodeType===3&&l.data===u?n.push(l):n.push(document.createTextNode(u))}}return s}function Nr(n,e,t=null){for(let i=0,s=e.length;i<s;i++)n.insertBefore(e[i],t)}function dt(n,e,t,i){if(t===void 0)return n.textContent="";const s=i||document.createTextNode("");if(e.length){let r=!1;for(let o=e.length-1;o>=0;o--){const a=e[o];if(s!==a){const l=a.parentNode===n;!r&&!o?l?n.replaceChild(s,a):n.insertBefore(s,t):l&&a.remove()}else r=!0}}else n.insertBefore(s,t);return[s]}const Kc=!1;function ea(){let n=new Set;function e(s){return n.add(s),()=>n.delete(s)}let t=!1;function i(s,r){if(t)return!(t=!1);const o={to:s,options:r,defaultPrevented:!1,preventDefault:()=>o.defaultPrevented=!0};for(const a of n)a.listener({...o,from:a.location,retry:l=>{l&&(t=!0),a.navigate(s,{...r,resolve:!1})}});return!o.defaultPrevented}return{subscribe:e,confirm:i}}let Qi;function Ss(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),Qi=window.history.state._depth}Ss();function Yc(n){return{...n,_depth:window.history.state&&window.history.state._depth}}function Qc(n,e){let t=!1;return()=>{const i=Qi;Ss();const s=i==null?null:Qi-i;if(t){t=!1;return}s&&e(s)?(t=!0,window.history.go(-s)):n()}}const Jc=/^(?:[a-z0-9]+:)?\/\//i,Xc=/^\/+|(\/)\/+$/g,ta="http://sr";function nt(n,e=!1){const t=n.replace(Xc,"$1");return t?e||/^[?#]/.test(t)?t:"/"+t:""}function kn(n,e,t){if(Jc.test(e))return;const i=nt(n),s=t&&nt(t);let r="";return!s||e.startsWith("/")?r=i:s.toLowerCase().indexOf(i.toLowerCase())!==0?r=i+s:r=s,(r||"/")+nt(e,!r)}function Zc(n,e){if(n==null)throw new Error(e);return n}function eu(n,e){return nt(n).replace(/\/*(\*.*)?$/g,"")+nt(e)}function na(n){const e={};return n.searchParams.forEach((t,i)=>{i in e?Array.isArray(e[i])?e[i].push(t):e[i]=[e[i],t]:e[i]=t}),e}function tu(n,e,t){const[i,s]=n.split("/*",2),r=i.split("/").filter(Boolean),o=r.length;return a=>{const l=a.split("/").filter(Boolean),c=l.length-o;if(c<0||c>0&&s===void 0&&!e)return null;const u={path:o?"":"/",params:{}},h=d=>t===void 0?void 0:t[d];for(let d=0;d<o;d++){const f=r[d],_=f[0]===":",g=_?l[d]:l[d].toLowerCase(),m=_?f.slice(1):f.toLowerCase();if(_&&ki(g,h(m)))u.params[m]=g;else if(_||!ki(g,m))return null;u.path+=`/${g}`}if(s){const d=c?l.slice(-c).join("/"):"";if(ki(d,h(s)))u.params[s]=d;else return null}return u}}function ki(n,e){const t=i=>i===n;return e===void 0?!0:typeof e=="string"?t(e):typeof e=="function"?e(n):Array.isArray(e)?e.some(t):e instanceof RegExp?e.test(n):!1}function nu(n){const[e,t]=n.pattern.split("/*",2),i=e.split("/").filter(Boolean);return i.reduce((s,r)=>s+(r.startsWith(":")?2:3),i.length-(t===void 0?0:1))}function ia(n){const e=new Map,t=zo();return new Proxy({},{get(i,s){return e.has(s)||Ko(t,()=>e.set(s,$(()=>n()[s]))),e.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(n())}})}function sa(n){let e=/(\/?\:[^\/]+)\?/.exec(n);if(!e)return[n];let t=n.slice(0,e.index),i=n.slice(e.index+e[0].length);const s=[t,t+=e[1]];for(;e=/^(\/\:[^\/]+)\?/.exec(i);)s.push(t+=e[1]),i=i.slice(e[0].length);return sa(i).reduce((r,o)=>[...r,...s.map(a=>a+o)],[])}const iu=100,ra=Yo(),Rs=Yo(),As=()=>Zc(Is(ra),"<A> and 'use' router primitives can be only used inside a Route."),su=()=>Is(Rs)||As().base,ru=n=>{const e=su();return $(()=>e.resolvePath(n()))},ou=n=>{const e=As();return $(()=>{const t=n();return t!==void 0?e.renderPath(t):t})},au=()=>As().location;function lu(n,e=""){const{component:t,preload:i,load:s,children:r,info:o}=n,a=!r||Array.isArray(r)&&!r.length,l={key:n,component:t,preload:i||s,info:o};return oa(n.path).reduce((c,u)=>{for(const h of sa(u)){const d=eu(e,h);let f=a?d:d.split("/*",1)[0];f=f.split("/").map(_=>_.startsWith(":")||_.startsWith("*")?_:encodeURIComponent(_)).join("/"),c.push({...l,originalPath:u,pattern:f,matcher:tu(f,!a,n.matchFilters)})}return c},[])}function cu(n,e=0){return{routes:n,score:nu(n[n.length-1])*1e4-e,matcher(t){const i=[];for(let s=n.length-1;s>=0;s--){const r=n[s],o=r.matcher(t);if(!o)return null;i.unshift({...o,route:r})}return i}}}function oa(n){return Array.isArray(n)?n:[n]}function aa(n,e="",t=[],i=[]){const s=oa(n);for(let r=0,o=s.length;r<o;r++){const a=s[r];if(a&&typeof a=="object"){a.hasOwnProperty("path")||(a.path="");const l=lu(a,e);for(const c of l){t.push(c);const u=Array.isArray(a.children)&&a.children.length===0;if(a.children&&!u)aa(a.children,c.pattern,t,i);else{const h=cu([...t],i.length);i.push(h)}t.pop()}}}return t.length?i:i.sort((r,o)=>o.score-r.score)}function Ni(n,e){for(let t=0,i=n.length;t<i;t++){const s=n[t].matcher(e);if(s)return s}return[]}function uu(n,e,t){const i=new URL(ta),s=$(u=>{const h=n();try{return new URL(h,i)}catch{return console.error(`Invalid path ${h}`),u}},i,{equals:(u,h)=>u.href===h.href}),r=$(()=>s().pathname),o=$(()=>s().search,!0),a=$(()=>s().hash),l=()=>"",c=ws(o,()=>na(s()));return{get pathname(){return r()},get search(){return o()},get hash(){return a()},get state(){return e()},get key(){return l()},query:t?t(c):ia(c)}}let Ze;function hu(){return Ze}function du(n,e,t,i={}){const{signal:[s,r],utils:o={}}=n,a=o.parsePath||(R=>R),l=o.renderPath||(R=>R),c=o.beforeLeave||ea(),u=kn("",i.base||"");if(u===void 0)throw new Error(`${u} is not a valid base path`);u&&!s().value&&r({value:u,replace:!0,scroll:!1});const[h,d]=B(!1);let f;const _=(R,N)=>{N.value===g()&&N.state===E()||(f===void 0&&d(!0),Ze=R,f=N,wc(()=>{f===N&&(m(f.value),w(f.state),W[1](q=>q.filter(Oe=>Oe.pending)))}).finally(()=>{f===N&&vc(()=>{Ze=void 0,R==="navigate"&&ae(f),d(!1),f=void 0})}))},[g,m]=B(s().value),[E,w]=B(s().state),M=uu(g,E,o.queryWrapper),L=[],W=B([]),ie=$(()=>typeof i.transformUrl=="function"?Ni(e(),i.transformUrl(M.pathname)):Ni(e(),M.pathname)),oe=()=>{const R=ie(),N={};for(let q=0;q<R.length;q++)Object.assign(N,R[q].params);return N},we=o.paramsWrapper?o.paramsWrapper(oe,e):ia(oe),_e={pattern:u,path:()=>u,outlet:()=>null,resolvePath(R){return kn(u,R)}};return K(ws(s,R=>_("native",R),{defer:!0})),{base:_e,location:M,params:we,isRouting:h,renderPath:l,parsePath:a,navigatorFactory:Ut,matches:ie,beforeLeave:c,preloadRoute:$t,singleFlight:i.singleFlight===void 0?!0:i.singleFlight,submissions:W};function Ee(R,N,q){pe(()=>{if(typeof N=="number"){N&&(o.go?o.go(N):console.warn("Router integration does not support relative routing"));return}const Oe=!N||N[0]==="?",{replace:Wt,resolve:x,scroll:Bt,state:De}={replace:!1,resolve:!Oe,scroll:!0,...q},Cn=x?R.resolvePath(N):kn(Oe&&M.pathname||"",N);if(Cn===void 0)throw new Error(`Path '${N}' is not a routable path`);if(L.length>=iu)throw new Error("Too many redirects");const Sr=g();(Cn!==Sr||De!==E())&&(Kc||c.confirm(Cn,q)&&(L.push({value:Sr,replace:Wt,scroll:Bt,state:E()}),_("navigate",{value:Cn,state:De})))})}function Ut(R){return R=R||Is(Rs)||_e,(N,q)=>Ee(R,N,q)}function ae(R){const N=L[0];N&&(r({...R,replace:N.replace,scroll:N.scroll}),L.length=0)}function $t(R,N){const q=Ni(e(),R.pathname),Oe=Ze;Ze="preload";for(let Wt in q){const{route:x,params:Bt}=q[Wt];x.component&&x.component.preload&&x.component.preload();const{preload:De}=x;N&&De&&Ko(t(),()=>De({params:Bt,location:{pathname:R.pathname,search:R.search,hash:R.hash,query:na(R),state:null,key:""},intent:"preload"}))}Ze=Oe}}function fu(n,e,t,i){const{base:s,location:r,params:o}=n,{pattern:a,component:l,preload:c}=i().route,u=$(()=>i().path);l&&l.preload&&l.preload();const h=c?c({params:o,location:r,intent:Ze||"initial"}):void 0;return{parent:e,pattern:a,path:u,outlet:()=>l?Y(l,{params:o,location:r,data:h,get children(){return t()}}):t(),resolvePath(f){return kn(s.path(),f,u())}}}const pu=n=>e=>{const{base:t}=e,i=bs(()=>e.children),s=$(()=>aa(i(),e.base||""));let r;const o=du(n,s,()=>r,{base:t,singleFlight:e.singleFlight,transformUrl:e.transformUrl});return n.create&&n.create(o),Y(ra.Provider,{value:o,get children(){return Y(_u,{routerState:o,get root(){return e.root},get preload(){return e.rootPreload||e.rootLoad},get children(){return[$(()=>(r=zo())&&null),Y(gu,{routerState:o,get branches(){return s()}})]}})}})};function _u(n){const e=n.routerState.location,t=n.routerState.params,i=$(()=>n.preload&&pe(()=>{n.preload({params:t,location:e,intent:hu()||"initial"})}));return Y(wt,{get when(){return n.root},keyed:!0,get fallback(){return n.children},children:s=>Y(s,{params:t,location:e,get data(){return i()},get children(){return n.children}})})}function gu(n){const e=[];let t;const i=$(ws(n.routerState.matches,(s,r,o)=>{let a=r&&s.length===r.length;const l=[];for(let c=0,u=s.length;c<u;c++){const h=r&&r[c],d=s[c];o&&h&&d.route.key===h.route.key?l[c]=o[c]:(a=!1,e[c]&&e[c](),qo(f=>{e[c]=f,l[c]=fu(n.routerState,l[c-1]||n.routerState.base,Pr(()=>i()[c+1]),()=>n.routerState.matches()[c])}))}return e.splice(s.length).forEach(c=>c()),o&&a?o:(t=l[0],l)}));return Pr(()=>i()&&t)()}const Pr=n=>()=>Y(wt,{get when(){return n()},keyed:!0,children:e=>Y(Rs.Provider,{value:e,get children(){return e.outlet()}})}),Or=n=>{const e=bs(()=>n.children);return zi(n,{get children(){return e()}})};function mu([n,e],t,i){return[n,i?s=>e(i(s)):e]}function vu(n){let e=!1;const t=s=>typeof s=="string"?{value:s}:s,i=mu(B(t(n.get()),{equals:(s,r)=>s.value===r.value&&s.state===r.state}),void 0,s=>(!e&&n.set(s),s));return n.init&&Es(n.init((s=n.get())=>{e=!0,i[1](t(s)),e=!1})),pu({signal:i,create:n.create,utils:n.utils})}function yu(n,e,t){return n.addEventListener(e,t),()=>n.removeEventListener(e,t)}function wu(n,e){const t=n&&document.getElementById(n);t?t.scrollIntoView():e&&window.scrollTo(0,0)}const Eu=new Map;function Iu(n=!0,e=!1,t="/_server",i){return s=>{const r=s.base.path(),o=s.navigatorFactory(s.base);let a,l;function c(g){return g.namespaceURI==="http://www.w3.org/2000/svg"}function u(g){if(g.defaultPrevented||g.button!==0||g.metaKey||g.altKey||g.ctrlKey||g.shiftKey)return;const m=g.composedPath().find(ie=>ie instanceof Node&&ie.nodeName.toUpperCase()==="A");if(!m||e&&!m.hasAttribute("link"))return;const E=c(m),w=E?m.href.baseVal:m.href;if((E?m.target.baseVal:m.target)||!w&&!m.hasAttribute("state"))return;const L=(m.getAttribute("rel")||"").split(/\s+/);if(m.hasAttribute("download")||L&&L.includes("external"))return;const W=E?new URL(w,document.baseURI):new URL(w);if(!(W.origin!==window.location.origin||r&&W.pathname&&!W.pathname.toLowerCase().startsWith(r.toLowerCase())))return[m,W]}function h(g){const m=u(g);if(!m)return;const[E,w]=m,M=s.parsePath(w.pathname+w.search+w.hash),L=E.getAttribute("state");g.preventDefault(),o(M,{resolve:!1,replace:E.hasAttribute("replace"),scroll:!E.hasAttribute("noscroll"),state:L?JSON.parse(L):void 0})}function d(g){const m=u(g);if(!m)return;const[E,w]=m;i&&(w.pathname=i(w.pathname)),s.preloadRoute(w,E.getAttribute("preload")!=="false")}function f(g){clearTimeout(a);const m=u(g);if(!m)return l=null;const[E,w]=m;l!==E&&(i&&(w.pathname=i(w.pathname)),a=setTimeout(()=>{s.preloadRoute(w,E.getAttribute("preload")!=="false"),l=E},20))}function _(g){if(g.defaultPrevented)return;let m=g.submitter&&g.submitter.hasAttribute("formaction")?g.submitter.getAttribute("formaction"):g.target.getAttribute("action");if(!m)return;if(!m.startsWith("https://action/")){const w=new URL(m,ta);if(m=s.parsePath(w.pathname+w.search),!m.startsWith(t))return}if(g.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const E=Eu.get(m);if(E){g.preventDefault();const w=new FormData(g.target,g.submitter);E.call({r:s,f:g.target},g.target.enctype==="multipart/form-data"?w:new URLSearchParams(w))}}Nt(["click","submit"]),document.addEventListener("click",h),n&&(document.addEventListener("mousemove",f,{passive:!0}),document.addEventListener("focusin",d,{passive:!0}),document.addEventListener("touchstart",d,{passive:!0})),document.addEventListener("submit",_),Es(()=>{document.removeEventListener("click",h),n&&(document.removeEventListener("mousemove",f),document.removeEventListener("focusin",d),document.removeEventListener("touchstart",d)),document.removeEventListener("submit",_)})}}function bu(n){const e=()=>{const i=window.location.pathname.replace(/^\/+/,"/")+window.location.search,s=window.history.state&&window.history.state._depth&&Object.keys(window.history.state).length===1?void 0:window.history.state;return{value:i+window.location.hash,state:s}},t=ea();return vu({get:e,set({value:i,replace:s,scroll:r,state:o}){s?window.history.replaceState(Yc(o),"",i):window.history.pushState(o,"",i),wu(decodeURIComponent(window.location.hash.slice(1)),r),Ss()},init:i=>yu(window,"popstate",Qc(i,s=>{if(s&&s<0)return!t.confirm(s);{const r=e();return!t.confirm(r.value,{state:r.state})}})),create:Iu(n.preload,n.explicitLinks,n.actionBase,n.transformUrl),utils:{go:i=>window.history.go(i),beforeLeave:t}})(n)}var Cu=ve("<a>");function Dr(n){n=zi({inactiveClass:"inactive",activeClass:"active"},n);const[,e]=Rc(n,["href","state","class","activeClass","inactiveClass","end"]),t=ru(()=>n.href),i=ou(t),s=au(),r=$(()=>{const o=t();if(o===void 0)return[!1,!1];const a=nt(o.split(/[?#]/,1)[0]).toLowerCase(),l=decodeURI(nt(s.pathname).toLowerCase());return[n.end?a===l:l.startsWith(a+"/")||l===a,a===l]});return(()=>{var o=Cu();return Hc(o,zi(e,{get href(){return i()||n.href},get state(){return JSON.stringify(n.state)},get classList(){return{...n.class&&{[n.class]:!0},[n.inactiveClass]:!r()[0],[n.activeClass]:r()[0],...e.classList}},link:"",get"aria-current"(){return r()[1]?"page":void 0}}),!1),o})()}const Tu=()=>{};var xr={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p=function(n,e){if(!n)throw Pt(e)},Pt=function(n){return new Error("Firebase Database ("+la.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Su=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},ks={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),i.push(t[u],t[h],t[d],t[f])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ca(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Su(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const h=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||c==null||h==null)throw new Ru;const d=r<<2|a>>4;if(i.push(d),c!==64){const f=a<<4&240|c>>2;if(i.push(f),h!==64){const _=c<<6&192|h;i.push(_)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ru extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ua=function(n){const e=ca(n);return ks.encodeByteArray(e,!0)},Bn=function(n){return ua(n).replace(/\./g,"")},Vn=function(n){try{return ks.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(n){return ha(void 0,n)}function ha(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!ku(t)||(n[t]=ha(n[t],e[t]));return n}function ku(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu=()=>Nu().__FIREBASE_DEFAULTS__,Ou=()=>{if(typeof process>"u"||typeof xr>"u")return;const n=xr.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Du=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Vn(n[1]);return e&&JSON.parse(e)},Ns=()=>{try{return Tu()||Pu()||Ou()||Du()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},da=n=>{var e,t;return(t=(e=Ns())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},xu=n=>{const e=da(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},fa=()=>{var n;return(n=Ns())===null||n===void 0?void 0:n.config},pa=n=>{var e;return(e=Ns())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Bn(JSON.stringify(t)),Bn(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ps(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ee())}function Mu(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Fu(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function _a(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Uu(){const n=ee();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function $u(){return la.NODE_ADMIN===!0}function Wu(){try{return typeof indexedDB=="object"}catch{return!1}}function Bu(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu="FirebaseError";class Qe extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Vu,Object.setPrototypeOf(this,Qe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pn.prototype.create)}}class pn{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Hu(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Qe(s,a,i)}}function Hu(n,e){return n.replace(ju,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const ju=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(n){return JSON.parse(n)}function H(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=en(Vn(r[0])||""),t=en(Vn(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},Gu=function(n){const e=ga(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},qu=function(n){const e=ga(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Et(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Ji(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Hn(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function st(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(Lr(r)&&Lr(o)){if(!st(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Lr(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)i[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const d=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(s<<5|s>>>27)+c+l+u+i[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function Ku(n,e){const t=new Yu(n,e);return t.subscribe.bind(t)}class Yu{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");Qu(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=Pi),s.error===void 0&&(s.error=Pi),s.complete===void 0&&(s.complete=Pi);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Qu(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Pi(){}function hi(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,p(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},di=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(n){return n&&n._delegate?n._delegate:n}class rt{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new fn;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e?.identifier),s=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(eh(e))try{this.getOrInitializeService({instanceIdentifier:Je})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Je){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Je){return this.instances.has(e)}getOptions(e=Je){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Zu(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Je){return this.component?this.component.multipleInstances?e:Je:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Zu(n){return n===Je?void 0:n}function eh(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Xu(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var A;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(A||(A={}));const nh={debug:A.DEBUG,verbose:A.VERBOSE,info:A.INFO,warn:A.WARN,error:A.ERROR,silent:A.SILENT},ih=A.INFO,sh={[A.DEBUG]:"log",[A.VERBOSE]:"log",[A.INFO]:"info",[A.WARN]:"warn",[A.ERROR]:"error"},rh=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=sh[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Os{constructor(e){this.name=e,this._logLevel=ih,this._logHandler=rh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in A))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?nh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,A.DEBUG,...e),this._logHandler(this,A.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,A.VERBOSE,...e),this._logHandler(this,A.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,A.INFO,...e),this._logHandler(this,A.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,A.WARN,...e),this._logHandler(this,A.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,A.ERROR,...e),this._logHandler(this,A.ERROR,...e)}}const oh=(n,e)=>e.some(t=>n instanceof t);let Mr,Fr;function ah(){return Mr||(Mr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lh(){return Fr||(Fr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ma=new WeakMap,Xi=new WeakMap,va=new WeakMap,Oi=new WeakMap,Ds=new WeakMap;function ch(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(We(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&ma.set(t,n)}).catch(()=>{}),Ds.set(e,n),e}function uh(n){if(Xi.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Xi.set(n,e)}let Zi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Xi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||va.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return We(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function hh(n){Zi=n(Zi)}function dh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Di(this),e,...t);return va.set(i,e.sort?e.sort():[e]),We(i)}:lh().includes(n)?function(...e){return n.apply(Di(this),e),We(ma.get(this))}:function(...e){return We(n.apply(Di(this),e))}}function fh(n){return typeof n=="function"?dh(n):(n instanceof IDBTransaction&&uh(n),oh(n,ah())?new Proxy(n,Zi):n)}function We(n){if(n instanceof IDBRequest)return ch(n);if(Oi.has(n))return Oi.get(n);const e=fh(n);return e!==n&&(Oi.set(n,e),Ds.set(e,n)),e}const Di=n=>Ds.get(n);function ph(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),a=We(o);return i&&o.addEventListener("upgradeneeded",l=>{i(We(o.result),l.oldVersion,l.newVersion,We(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const _h=["get","getKey","getAll","getAllKeys","count"],gh=["put","add","delete","clear"],xi=new Map;function Ur(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(xi.get(e))return xi.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=gh.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||_h.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),s&&l.done]))[0]};return xi.set(e,r),r}hh(n=>({...n,get:(e,t,i)=>Ur(e,t)||n.get(e,t,i),has:(e,t)=>!!Ur(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(vh(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function vh(n){const e=n.getComponent();return e?.type==="VERSION"}const es="@firebase/app",$r="0.11.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae=new Os("@firebase/app"),yh="@firebase/app-compat",wh="@firebase/analytics-compat",Eh="@firebase/analytics",Ih="@firebase/app-check-compat",bh="@firebase/app-check",Ch="@firebase/auth",Th="@firebase/auth-compat",Sh="@firebase/database",Rh="@firebase/data-connect",Ah="@firebase/database-compat",kh="@firebase/functions",Nh="@firebase/functions-compat",Ph="@firebase/installations",Oh="@firebase/installations-compat",Dh="@firebase/messaging",xh="@firebase/messaging-compat",Lh="@firebase/performance",Mh="@firebase/performance-compat",Fh="@firebase/remote-config",Uh="@firebase/remote-config-compat",$h="@firebase/storage",Wh="@firebase/storage-compat",Bh="@firebase/firestore",Vh="@firebase/vertexai",Hh="@firebase/firestore-compat",jh="firebase",Gh="11.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts="[DEFAULT]",qh={[es]:"fire-core",[yh]:"fire-core-compat",[Eh]:"fire-analytics",[wh]:"fire-analytics-compat",[bh]:"fire-app-check",[Ih]:"fire-app-check-compat",[Ch]:"fire-auth",[Th]:"fire-auth-compat",[Sh]:"fire-rtdb",[Rh]:"fire-data-connect",[Ah]:"fire-rtdb-compat",[kh]:"fire-fn",[Nh]:"fire-fn-compat",[Ph]:"fire-iid",[Oh]:"fire-iid-compat",[Dh]:"fire-fcm",[xh]:"fire-fcm-compat",[Lh]:"fire-perf",[Mh]:"fire-perf-compat",[Fh]:"fire-rc",[Uh]:"fire-rc-compat",[$h]:"fire-gcs",[Wh]:"fire-gcs-compat",[Bh]:"fire-fst",[Hh]:"fire-fst-compat",[Vh]:"fire-vertex","fire-js":"fire-js",[jh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=new Map,zh=new Map,ns=new Map;function Wr(n,e){try{n.container.addComponent(e)}catch(t){Ae.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function It(n){const e=n.name;if(ns.has(e))return Ae.debug(`There were multiple attempts to register component ${e}.`),!1;ns.set(e,n);for(const t of jn.values())Wr(t,n);for(const t of zh.values())Wr(t,n);return!0}function xs(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function le(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Be=new pn("app","Firebase",Kh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new rt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Be.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt=Gh;function ya(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:ts,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Be.create("bad-app-name",{appName:String(s)});if(t||(t=fa()),!t)throw Be.create("no-options");const r=jn.get(s);if(r){if(st(t,r.options)&&st(i,r.config))return r;throw Be.create("duplicate-app",{appName:s})}const o=new th(s);for(const l of ns.values())o.addComponent(l);const a=new Yh(t,i,o);return jn.set(s,a),a}function wa(n=ts){const e=jn.get(n);if(!e&&n===ts&&fa())return ya();if(!e)throw Be.create("no-app",{appName:n});return e}function Ve(n,e,t){var i;let s=(i=qh[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ae.warn(a.join(" "));return}It(new rt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh="firebase-heartbeat-database",Jh=1,tn="firebase-heartbeat-store";let Li=null;function Ea(){return Li||(Li=ph(Qh,Jh,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(tn)}catch(t){console.warn(t)}}}}).catch(n=>{throw Be.create("idb-open",{originalErrorMessage:n.message})})),Li}async function Xh(n){try{const t=(await Ea()).transaction(tn),i=await t.objectStore(tn).get(Ia(n));return await t.done,i}catch(e){if(e instanceof Qe)Ae.warn(e.message);else{const t=Be.create("idb-get",{originalErrorMessage:e?.message});Ae.warn(t.message)}}}async function Br(n,e){try{const i=(await Ea()).transaction(tn,"readwrite");await i.objectStore(tn).put(e,Ia(n)),await i.done}catch(t){if(t instanceof Qe)Ae.warn(t.message);else{const i=Be.create("idb-set",{originalErrorMessage:t?.message});Ae.warn(i.message)}}}function Ia(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh=1024,ed=30;class td{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new id(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Vr();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats.length>ed){const o=sd(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Ae.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Vr(),{heartbeatsToSend:i,unsentEntries:s}=nd(this._heartbeatsCache.heartbeats),r=Bn(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return Ae.warn(t),""}}}function Vr(){return new Date().toISOString().substring(0,10)}function nd(n,e=Zh){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Hr(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Hr(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class id{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wu()?Bu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Xh(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Br(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Br(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Hr(n){return Bn(JSON.stringify({version:2,heartbeats:n})).length}function sd(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(n){It(new rt("platform-logger",e=>new mh(e),"PRIVATE")),It(new rt("heartbeat",e=>new td(e),"PRIVATE")),Ve(es,$r,n),Ve(es,$r,"esm2017"),Ve("fire-js","")}rd("");var od="firebase",ad="11.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ve(od,ad,"app");function Ls(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function ba(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ld=ba,Ca=new pn("auth","Firebase",ba());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn=new Os("@firebase/auth");function cd(n,...e){Gn.logLevel<=A.WARN&&Gn.warn(`Auth (${Dt}): ${n}`,...e)}function Nn(n,...e){Gn.logLevel<=A.ERROR&&Gn.error(`Auth (${Dt}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(n,...e){throw Fs(n,...e)}function de(n,...e){return Fs(n,...e)}function Ms(n,e,t){const i=Object.assign(Object.assign({},ld()),{[e]:t});return new pn("auth","Firebase",i).create(e,{appName:n.name})}function it(n){return Ms(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ud(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&me(n,"argument-error"),Ms(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Fs(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Ca.create(n,...e)}function y(n,e,...t){if(!n)throw Fs(e,...t)}function be(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Nn(e),new Error(e)}function ke(n,e){n||be(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function hd(){return jr()==="http:"||jr()==="https:"}function jr(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hd()||Fu()||"connection"in navigator)?navigator.onLine:!0}function fd(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e,t){this.shortDelay=e,this.longDelay=t,ke(t>e,"Short delay should be less than long delay!"),this.isMobile=Ps()||_a()}get(){return dd()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(n,e){ke(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;be("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;be("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;be("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pd={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],gd=new _n(3e4,6e4);function $s(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function xt(n,e,t,i,s={}){return Sa(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=Ot(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const c=Object.assign({method:e,headers:l},r);return Mu()||(c.referrerPolicy="no-referrer"),Ta.fetch()(await Ra(n,n.config.apiHost,t,a),c)})}async function Sa(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},pd),e);try{const s=new vd(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Sn(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Sn(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Sn(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Sn(n,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Ms(n,u,c);me(n,u)}}catch(s){if(s instanceof Qe)throw s;me(n,"network-request-failed",{message:String(s)})}}async function md(n,e,t,i,s={}){const r=await xt(n,e,t,i,s);return"mfaPendingCredential"in r&&me(n,"multi-factor-auth-required",{_serverResponse:r}),r}async function Ra(n,e,t,i){const s=`${e}${t}?${i}`,r=n,o=r.config.emulator?Us(n.config,s):`${n.config.apiScheme}://${s}`;return _d.includes(t)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}class vd{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(de(this.auth,"network-request-failed")),gd.get())})}}function Sn(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=de(n,e,i);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yd(n,e){return xt(n,"POST","/v1/accounts:delete",e)}async function qn(n,e){return xt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wd(n,e=!1){const t=te(n),i=await t.getIdToken(e),s=Ws(i);y(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r?.sign_in_provider;return{claims:s,token:i,authTime:qt(Mi(s.auth_time)),issuedAtTime:qt(Mi(s.iat)),expirationTime:qt(Mi(s.exp)),signInProvider:o||null,signInSecondFactor:r?.sign_in_second_factor||null}}function Mi(n){return Number(n)*1e3}function Ws(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Nn("JWT malformed, contained fewer than 3 sections"),null;try{const s=Vn(t);return s?JSON.parse(s):(Nn("Failed to decode base64 JWT payload"),null)}catch(s){return Nn("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Gr(n){const e=Ws(n);return y(e,"internal-error"),y(typeof e.exp<"u","internal-error"),y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nn(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Qe&&Ed(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Ed({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=qt(this.lastLoginAt),this.creationTime=qt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zn(n){var e;const t=n.auth,i=await n.getIdToken(),s=await nn(n,qn(t,{idToken:i}));y(s?.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Aa(r.providerUserInfo):[],a=Cd(n.providerData,o),l=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!a?.length,u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new ss(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function bd(n){const e=te(n);await zn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Cd(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Aa(n){return n.map(e=>{var{providerId:t}=e,i=Ls(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Td(n,e){const t=await Sa(n,{},async()=>{const i=Ot({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=await Ra(n,s,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ta.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Sd(n,e){return xt(n,"POST","/v2/accounts:revokeToken",$s(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){y(e.idToken,"internal-error"),y(typeof e.idToken<"u","internal-error"),y(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Gr(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){y(e.length!==0,"internal-error");const t=Gr(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await Td(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new _t;return i&&(y(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(y(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(y(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _t,this.toJSON())}_performRefresh(){return be("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(n,e){y(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ue{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=Ls(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Id(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ss(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await nn(this,this.stsTokenManager.getToken(this.auth,e));return y(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return wd(this,e)}reload(){return bd(this)}_assign(e){this!==e&&(y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ue(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await zn(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(le(this.auth.app))return Promise.reject(it(this.auth));const e=await this.getIdToken();return await nn(this,yd(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,o,a,l,c,u;const h=(i=t.displayName)!==null&&i!==void 0?i:void 0,d=(s=t.email)!==null&&s!==void 0?s:void 0,f=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,_=(o=t.photoURL)!==null&&o!==void 0?o:void 0,g=(a=t.tenantId)!==null&&a!==void 0?a:void 0,m=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,E=(c=t.createdAt)!==null&&c!==void 0?c:void 0,w=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:M,emailVerified:L,isAnonymous:W,providerData:ie,stsTokenManager:oe}=t;y(M&&oe,e,"internal-error");const we=_t.fromJSON(this.name,oe);y(typeof M=="string",e,"internal-error"),xe(h,e.name),xe(d,e.name),y(typeof L=="boolean",e,"internal-error"),y(typeof W=="boolean",e,"internal-error"),xe(f,e.name),xe(_,e.name),xe(g,e.name),xe(m,e.name),xe(E,e.name),xe(w,e.name);const _e=new ue({uid:M,auth:e,email:d,emailVerified:L,displayName:h,isAnonymous:W,photoURL:_,phoneNumber:f,tenantId:g,stsTokenManager:we,createdAt:E,lastLoginAt:w});return ie&&Array.isArray(ie)&&(_e.providerData=ie.map(Ee=>Object.assign({},Ee))),m&&(_e._redirectEventId=m),_e}static async _fromIdTokenResponse(e,t,i=!1){const s=new _t;s.updateFromServerResponse(t);const r=new ue({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await zn(r),r}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];y(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?Aa(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!r?.length,a=new _t;a.updateFromIdToken(i);const l=new ue({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new ss(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!r?.length};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=new Map;function Ce(n){ke(n instanceof Function,"Expected a class definition");let e=qr.get(n);return e?(ke(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,qr.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ka.type="NONE";const zr=ka;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(n,e,t){return`firebase:${n}:${e}:${t}`}class gt{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Pn(this.userKey,s.apiKey,r),this.fullPersistenceKey=Pn("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await qn(this.auth,{idToken:e}).catch(()=>{});return t?ue._fromGetAccountInfoResponse(this.auth,t,e):null}return ue._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new gt(Ce(zr),e,i);const s=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||Ce(zr);const o=Pn(i,e.config.apiKey,e.name);let a=null;for(const c of t)try{const u=await c._get(o);if(u){let h;if(typeof u=="string"){const d=await qn(e,{idToken:u}).catch(()=>{});if(!d)break;h=await ue._fromGetAccountInfoResponse(e,d,u)}else h=ue._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new gt(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new gt(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Da(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Na(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(La(e))return"Blackberry";if(Ma(e))return"Webos";if(Pa(e))return"Safari";if((e.includes("chrome/")||Oa(e))&&!e.includes("edge/"))return"Chrome";if(xa(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if(i?.length===2)return i[1]}return"Other"}function Na(n=ee()){return/firefox\//i.test(n)}function Pa(n=ee()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Oa(n=ee()){return/crios\//i.test(n)}function Da(n=ee()){return/iemobile/i.test(n)}function xa(n=ee()){return/android/i.test(n)}function La(n=ee()){return/blackberry/i.test(n)}function Ma(n=ee()){return/webos/i.test(n)}function Bs(n=ee()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Rd(n=ee()){var e;return Bs(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ad(){return Uu()&&document.documentMode===10}function Fa(n=ee()){return Bs(n)||xa(n)||Ma(n)||La(n)||/windows phone/i.test(n)||Da(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(n,e=[]){let t;switch(n){case"Browser":t=Kr(ee());break;case"Worker":t=`${Kr(ee())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Dt}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nd(n,e={}){return xt(n,"GET","/v2/passwordPolicy",$s(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd=6;class Od{constructor(e){var t,i,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Pd,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,s,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(i=l.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yr(this),this.idTokenSubscription=new Yr(this),this.beforeStateQueue=new kd(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ca,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ce(t)),this._initializationPromise=this.queue(async()=>{var i,s,r;if(!this._deleted&&(this.persistenceManager=await gt.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await qn(this,{idToken:e}),i=await ue._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(le(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s?._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&l?.user&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await zn(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fd()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(le(this.app))return Promise.reject(it(this));const t=e?te(e):null;return t&&y(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return le(this.app)?Promise.reject(it(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return le(this.app)?Promise.reject(it(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ce(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Nd(this),t=new Od(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new pn("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await Sd(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ce(e)||this._popupRedirectResolver;y(t,this,"argument-error"),this.redirectPersistenceManager=await gt.create(this,[Ce(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(y(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,i,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ua(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(le(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&cd(`Error while retrieving App Check token: ${t.error}`),t?.token}}function fi(n){return te(n)}class Yr{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ku(t=>this.observer=t)}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function xd(n){Vs=n}function Ld(n){return Vs.loadJS(n)}function Md(){return Vs.gapiScript}function Fd(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud(n,e){const t=xs(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(st(r,e??{}))return s;me(s,"already-initialized")}return t.initialize({options:e})}function $d(n,e){const t=e?.persistence||[],i=(Array.isArray(t)?t:[t]).map(Ce);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e?.popupRedirectResolver)}function Wd(n,e,t){const i=fi(n);y(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,r=$a(e),{host:o,port:a}=Bd(e),l=a===null?"":`:${a}`,c={url:`${r}//${o}${l}/`},u=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){y(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),y(st(c,i.config.emulator)&&st(u,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=c,i.emulatorConfig=u,i.settings.appVerificationDisabledForTesting=!0,Vd()}function $a(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Bd(n){const e=$a(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Qr(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Qr(o)}}}function Qr(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Vd(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return be("not implemented")}_getIdTokenResponse(e){return be("not implemented")}_linkToIdToken(e,t){return be("not implemented")}_getReauthenticationResolver(e){return be("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mt(n,e){return md(n,"POST","/v1/accounts:signInWithIdp",$s(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd="http://localhost";class ot extends Wa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ot(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):me("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=Ls(t,["providerId","signInMethod"]);if(!i||!s)return null;const o=new ot(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return mt(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,mt(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,mt(e,t)}buildRequest(){const e={requestUri:Hd,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ot(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends Hs{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le extends gn{constructor(){super("facebook.com")}static credential(e){return ot._fromParams({providerId:Le.PROVIDER_ID,signInMethod:Le.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Le.credentialFromTaggedObject(e)}static credentialFromError(e){return Le.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Le.credential(e.oauthAccessToken)}catch{return null}}}Le.FACEBOOK_SIGN_IN_METHOD="facebook.com";Le.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie extends gn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ot._fromParams({providerId:Ie.PROVIDER_ID,signInMethod:Ie.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ie.credentialFromTaggedObject(e)}static credentialFromError(e){return Ie.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Ie.credential(t,i)}catch{return null}}}Ie.GOOGLE_SIGN_IN_METHOD="google.com";Ie.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me extends gn{constructor(){super("github.com")}static credential(e){return ot._fromParams({providerId:Me.PROVIDER_ID,signInMethod:Me.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Me.credentialFromTaggedObject(e)}static credentialFromError(e){return Me.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Me.credential(e.oauthAccessToken)}catch{return null}}}Me.GITHUB_SIGN_IN_METHOD="github.com";Me.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe extends gn{constructor(){super("twitter.com")}static credential(e,t){return ot._fromParams({providerId:Fe.PROVIDER_ID,signInMethod:Fe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Fe.credentialFromTaggedObject(e)}static credentialFromError(e){return Fe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Fe.credential(t,i)}catch{return null}}}Fe.TWITTER_SIGN_IN_METHOD="twitter.com";Fe.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await ue._fromIdTokenResponse(e,i,s),o=Jr(i);return new bt({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=Jr(i);return new bt({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function Jr(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends Qe{constructor(e,t,i,s){var r;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Kn.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new Kn(e,t,i,s)}}function Ba(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Kn._fromErrorAndOperation(n,r,e,i):r})}async function jd(n,e,t=!1){const i=await nn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return bt._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gd(n,e,t=!1){const{auth:i}=n;if(le(i.app))return Promise.reject(it(i));const s="reauthenticate";try{const r=await nn(n,Ba(i,s,e,n),t);y(r.idToken,i,"internal-error");const o=Ws(r.idToken);y(o,i,"internal-error");const{sub:a}=o;return y(n.uid===a,i,"user-mismatch"),bt._forOperation(n,s,r)}catch(r){throw r?.code==="auth/user-not-found"&&me(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qd(n,e,t=!1){if(le(n.app))return Promise.reject(it(n));const i="signIn",s=await Ba(n,i,e),r=await bt._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}function zd(n,e,t,i){return te(n).onIdTokenChanged(e,t,i)}function Kd(n,e,t){return te(n).beforeAuthStateChanged(e,t)}function Yd(n,e,t,i){return te(n).onAuthStateChanged(e,t,i)}function Qd(n){return te(n).signOut()}const Yn="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Yn,"1"),this.storage.removeItem(Yn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd=1e3,Xd=10;class Ha extends Va{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Fa(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);Ad()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Xd):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Jd)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ha.type="LOCAL";const Zd=Ha;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja extends Va{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ja.type="SESSION";const Ga=ja;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ef(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new pi(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(t.origin,r)),l=await ef(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function js(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=js("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(){return window}function nf(n){ge().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(){return typeof ge().WorkerGlobalScope<"u"&&typeof ge().importScripts=="function"}async function sf(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rf(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function of(){return qa()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za="firebaseLocalStorageDb",af=1,Qn="firebaseLocalStorage",Ka="fbase_key";class mn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function _i(n,e){return n.transaction([Qn],e?"readwrite":"readonly").objectStore(Qn)}function lf(){const n=indexedDB.deleteDatabase(za);return new mn(n).toPromise()}function rs(){const n=indexedDB.open(za,af);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Qn,{keyPath:Ka})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Qn)?e(i):(i.close(),await lf(),e(await rs()))})})}async function Xr(n,e,t){const i=_i(n,!0).put({[Ka]:e,value:t});return new mn(i).toPromise()}async function cf(n,e){const t=_i(n,!1).get(e),i=await new mn(t).toPromise();return i===void 0?null:i.value}function Zr(n,e){const t=_i(n,!0).delete(e);return new mn(t).toPromise()}const uf=800,hf=3;class Ya{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rs(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>hf)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qa()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pi._getInstance(of()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await sf(),!this.activeServiceWorker)return;this.sender=new tf(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rf()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await rs();return await Xr(e,Yn,"1"),await Zr(e,Yn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Xr(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>cf(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Zr(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=_i(s,!1).getAll();return new mn(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ya.type="LOCAL";const df=Ya;new _n(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(n,e){return e?Ce(e):(y(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs extends Wa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return mt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return mt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return mt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ff(n){return qd(n.auth,new Gs(n),n.bypassAuthState)}function pf(n){const{auth:e,user:t}=n;return y(t,e,"internal-error"),Gd(t,new Gs(n),n.bypassAuthState)}async function _f(n){const{auth:e,user:t}=n;return y(t,e,"internal-error"),jd(t,new Gs(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ff;case"linkViaPopup":case"linkViaRedirect":return _f;case"reauthViaPopup":case"reauthViaRedirect":return pf;default:me(this.auth,"internal-error")}}resolve(e){ke(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ke(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf=new _n(2e3,1e4);async function mf(n,e,t){if(le(n.app))return Promise.reject(de(n,"operation-not-supported-in-this-environment"));const i=fi(n);ud(n,e,Hs);const s=Qa(i,t);return new et(i,"signInViaPopup",e,s).executeNotNull()}class et extends Ja{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,et.currentPopupAction&&et.currentPopupAction.cancel(),et.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return y(e,this.auth,"internal-error"),e}async onExecution(){ke(this.filter.length===1,"Popup operations only handle one event");const e=js();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(de(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(de(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,et.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(de(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,gf.get())};e()}}et.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vf="pendingRedirect",On=new Map;class yf extends Ja{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=On.get(this.auth._key());if(!e){try{const i=await wf(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}On.set(this.auth._key(),e)}return this.bypassAuthState||On.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function wf(n,e){const t=bf(e),i=If(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function Ef(n,e){On.set(n._key(),e)}function If(n){return Ce(n._redirectPersistence)}function bf(n){return Pn(vf,n.config.apiKey,n.name)}async function Cf(n,e,t=!1){if(le(n.app))return Promise.reject(it(n));const i=fi(n),s=Qa(i,e),o=await new yf(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf=10*60*1e3;class Sf{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Rf(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Xa(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(de(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Tf&&this.cachedEventUids.clear(),this.cachedEventUids.has(eo(e))}saveEventToCache(e){this.cachedEventUids.add(eo(e)),this.lastProcessedEventTime=Date.now()}}function eo(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Xa({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function Rf(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xa(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Af(n,e={}){return xt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kf=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Nf=/^https?/;async function Pf(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Af(n);for(const t of e)try{if(Of(t))return}catch{}me(n,"unauthorized-domain")}function Of(n){const e=is(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!Nf.test(t))return!1;if(kf.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df=new _n(3e4,6e4);function to(){const n=ge().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function xf(n){return new Promise((e,t)=>{var i,s,r;function o(){to(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{to(),t(de(n,"network-request-failed"))},timeout:Df.get()})}if(!((s=(i=ge().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=ge().gapi)===null||r===void 0)&&r.load)o();else{const a=Fd("iframefcb");return ge()[a]=()=>{gapi.load?o():t(de(n,"network-request-failed"))},Ld(`${Md()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw Dn=null,e})}let Dn=null;function Lf(n){return Dn=Dn||xf(n),Dn}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf=new _n(5e3,15e3),Ff="__/auth/iframe",Uf="emulator/auth/iframe",$f={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Wf=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Bf(n){const e=n.config;y(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Us(e,Uf):`https://${n.config.authDomain}/${Ff}`,i={apiKey:e.apiKey,appName:n.name,v:Dt},s=Wf.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${Ot(i).slice(1)}`}async function Vf(n){const e=await Lf(n),t=ge().gapi;return y(t,n,"internal-error"),e.open({where:document.body,url:Bf(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$f,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=de(n,"network-request-failed"),a=ge().setTimeout(()=>{r(o)},Mf.get());function l(){ge().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hf={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jf=500,Gf=600,qf="_blank",zf="http://localhost";class no{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Kf(n,e,t,i=jf,s=Gf){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Hf),{width:i.toString(),height:s.toString(),top:r,left:o}),c=ee().toLowerCase();t&&(a=Oa(c)?qf:t),Na(c)&&(e=e||zf,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,_])=>`${d}${f}=${_},`,"");if(Rd(c)&&a!=="_self")return Yf(e||"",a),new no(null);const h=window.open(e||"",a,u);y(h,n,"popup-blocked");try{h.focus()}catch{}return new no(h)}function Yf(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf="__/auth/handler",Jf="emulator/auth/handler",Xf=encodeURIComponent("fac");async function io(n,e,t,i,s,r){y(n.config.authDomain,n,"auth-domain-config-required"),y(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Dt,eventId:s};if(e instanceof Hs){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Ji(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof gn){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await n._getAppCheckToken(),c=l?`#${Xf}=${encodeURIComponent(l)}`:"";return`${Zf(n)}?${Ot(a).slice(1)}${c}`}function Zf({config:n}){return n.emulator?Us(n,Jf):`https://${n.authDomain}/${Qf}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi="webStorageSupport";class ep{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ga,this._completeRedirectFn=Cf,this._overrideRedirectResult=Ef}async _openPopup(e,t,i,s){var r;ke((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await io(e,t,i,is(),s);return Kf(e,o,js())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await io(e,t,i,is(),s);return nf(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(ke(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await Vf(e),i=new Sf(e);return t.register("authEvent",s=>(y(s?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Fi,{type:Fi},s=>{var r;const o=(r=s?.[0])===null||r===void 0?void 0:r[Fi];o!==void 0&&t(!!o),me(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Pf(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Fa()||Pa()||Bs()}}const tp=ep;var so="@firebase/auth",ro="1.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ip(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function sp(n){It(new rt("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;y(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ua(n)},c=new Dd(i,s,r,l);return $d(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),It(new rt("auth-internal",e=>{const t=fi(e.getProvider("auth").getImmediate());return(i=>new np(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ve(so,ro,ip(n)),Ve(so,ro,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp=5*60,op=pa("authIdTokenMaxAge")||rp;let oo=null;const ap=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>op)return;const s=t?.token;oo!==s&&(oo=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function lp(n=wa()){const e=xs(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Ud(n,{popupRedirectResolver:tp,persistence:[df,Zd,Ga]}),i=pa("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=ap(r.toString());Kd(t,o,()=>o(t.currentUser)),zd(t,a=>o(a))}}const s=da("auth");return s&&Wd(t,`http://${s}`),t}function cp(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}xd({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=de("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",cp().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});sp("Browser");const up={apiKey:"AIzaSyDGczq0KUtIwgqosWN2Og9LP6luJ8X7DwM",authDomain:"super-apply.firebaseapp.com",databaseURL:"https://super-apply-default-rtdb.firebaseio.com",projectId:"super-apply",storageBucket:"super-apply.firebasestorage.app",messagingSenderId:"766205360424",appId:"1:766205360424:web:1f0e5d739d898a7f4db81d"},hp=ya(up),dp=new Ie,os=lp(hp),qs=B(null);var fp=ve("<div><center><h2>Sign in to continue</h2><button>Sign In");function pp(){const n=async()=>{try{await mf(os,dp)}catch(e){console.error("Sign-in error:",e)}};return(()=>{var e=fp(),t=e.firstChild,i=t.firstChild,s=i.nextSibling;return s.$$click=n,e})()}Nt(["click"]);var _p=ve("<nav><ul><li></li><li>"),gp=ve("<button>Logout"),mp=ve("<div><div><h1>Super Apply");const vp=n=>{const[e,t]=qs,[i,s]=B(!0);return yc(()=>{const r=Yd(os,o=>{t(o),s(!1)});Es(()=>r())}),(()=>{var r=mp();return r.firstChild,Ue(r,Y(wt,{get when(){return!i()},get children(){return Y(wt,{get when(){return e()},fallback:pp,get children(){return[(()=>{var o=_p(),a=o.firstChild,l=a.firstChild,c=l.nextSibling;return Ue(l,Y(Dr,{href:"/super-apply",children:"Profile"})),Ue(c,Y(Dr,{href:"/super-apply/intro",children:"Introductions"})),o})(),(()=>{var o=gp();return o.$$click=()=>Qd(os),o})(),$(()=>n.children)]}})}}),null),r})()};Nt(["click"]);var ao={};const lo="@firebase/database",co="1.0.14";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Za="";function yp(n){Za=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),H(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:en(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return ye(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new wp(e)}}catch{}return new Ep},tt=el("localStorage"),Ip=el("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt=new Os("@firebase/database"),bp=function(){let n=1;return function(){return n++}}(),tl=function(n){const e=Ju(n),t=new zu;t.update(e);const i=t.digest();return ks.encodeByteArray(i)},vn=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=vn.apply(null,i):typeof i=="object"?e+=H(i):e+=i,e+=" "}return e};let zt=null,uo=!0;const Cp=function(n,e){p(!0,"Can't turn on custom loggers persistently."),vt.logLevel=A.VERBOSE,zt=vt.log.bind(vt)},z=function(...n){if(uo===!0&&(uo=!1,zt===null&&Ip.get("logging_enabled")===!0&&Cp()),zt){const e=vn.apply(null,n);zt(e)}},yn=function(n){return function(...e){z(n,...e)}},as=function(...n){const e="FIREBASE INTERNAL ERROR: "+vn(...n);vt.error(e)},Ne=function(...n){const e=`FIREBASE FATAL ERROR: ${vn(...n)}`;throw vt.error(e),new Error(e)},Z=function(...n){const e="FIREBASE WARNING: "+vn(...n);vt.warn(e)},Tp=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Z("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},zs=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Sp=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Ct="[MIN_NAME]",at="[MAX_NAME]",ut=function(n,e){if(n===e)return 0;if(n===Ct||e===at)return-1;if(e===Ct||n===at)return 1;{const t=ho(n),i=ho(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},Rp=function(n,e){return n===e?0:n<e?-1:1},Vt=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+H(e))},Ks=function(n){if(typeof n!="object"||n===null)return H(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=H(e[i]),t+=":",t+=Ks(n[e[i]]);return t+="}",t},nl=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function Q(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const il=function(n){p(!zs(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,l;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},Ap=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},kp=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Np(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const Pp=new RegExp("^-?(0*)\\d{1,10}$"),Op=-2147483648,Dp=2147483647,ho=function(n){if(Pp.test(n)){const e=Number(n);if(e>=Op&&e<=Dp)return e}return null},Lt=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Z("Exception was thrown by user callback.",t),e},Math.floor(0))}},xp=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Kt=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,le(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Z(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(z("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Z(e)}}class xn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}xn.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys="5",sl="v",rl="s",ol="r",al="f",ll=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,cl="ls",ul="p",ls="ac",hl="websocket",dl="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e,t,i,s,r=!1,o="",a=!1,l=!1,c=null){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=tt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&tt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Fp(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function pl(n,e,t){p(typeof e=="string","typeof type must == string"),p(typeof t=="object","typeof params must == object");let i;if(e===hl)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===dl)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Fp(n)&&(t.ns=n.namespace);const s=[];return Q(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(){this.counters_={}}incrementCounter(e,t=1){ye(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Au(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui={},$i={};function Qs(n){const e=n.toString();return Ui[e]||(Ui[e]=new Up),Ui[e]}function $p(n,e){const t=n.toString();return $i[t]||($i[t]=e()),$i[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Lt(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo="start",Bp="close",Vp="pLPCommand",Hp="pRTLPCB",_l="id",gl="pw",ml="ser",jp="cb",Gp="seg",qp="ts",zp="d",Kp="dframe",vl=1870,yl=30,Yp=vl-yl,Qp=25e3,Jp=3e4;class pt{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=yn(e),this.stats_=Qs(t),this.urlFn=l=>(this.appCheckToken&&(l[ls]=this.appCheckToken),pl(t,dl,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Wp(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Jp)),Sp(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Js((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===fo)this.id=a,this.password=l;else if(o===Bp)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[fo]="t",i[ml]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[jp]=this.scriptTagHolder.uniqueCallbackIdentifier),i[sl]=Ys,this.transportSessionId&&(i[rl]=this.transportSessionId),this.lastSessionId&&(i[cl]=this.lastSessionId),this.applicationId&&(i[ul]=this.applicationId),this.appCheckToken&&(i[ls]=this.appCheckToken),typeof location<"u"&&location.hostname&&ll.test(location.hostname)&&(i[ol]=al);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){pt.forceAllow_=!0}static forceDisallow(){pt.forceDisallow_=!0}static isAvailable(){return pt.forceAllow_?!0:!pt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Ap()&&!kp()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=H(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=ua(t),s=nl(i,Yp);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[Kp]="t",i[_l]=e,i[gl]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=H(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Js{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=bp(),window[Vp+this.uniqueCallbackIdentifier]=e,window[Hp+this.uniqueCallbackIdentifier]=t,this.myIFrame=Js.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){z("frame writing exception"),a.stack&&z(a.stack),z(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||z("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[_l]=this.myID,e[gl]=this.myPW,e[ml]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+yl+i.length<=vl;){const o=this.pendingSegs.shift();i=i+"&"+Gp+s+"="+o.seg+"&"+qp+s+"="+o.ts+"&"+zp+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(Qp)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{z("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xp=16384,Zp=45e3;let Jn=null;typeof MozWebSocket<"u"?Jn=MozWebSocket:typeof WebSocket<"u"&&(Jn=WebSocket);class ce{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=yn(this.connId),this.stats_=Qs(t),this.connURL=ce.connectionURL_(t,o,a,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[sl]=Ys,typeof location<"u"&&location.hostname&&ll.test(location.hostname)&&(o[ol]=al),t&&(o[rl]=t),i&&(o[cl]=i),s&&(o[ls]=s),r&&(o[ul]=r),pl(e,hl,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,tt.set("previous_websocket_failure",!0);try{let i;$u(),this.mySock=new Jn(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){ce.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Jn!==null&&!ce.forceDisallow_}static previouslyFailed(){return tt.isInMemoryStorage||tt.get("previous_websocket_failure")===!0}markConnectionHealthy(){tt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=en(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(p(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=H(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=nl(t,Xp);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Zp))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ce.responsesRequiredToBeHealthy=2;ce.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{static get ALL_TRANSPORTS(){return[pt,ce]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=ce&&ce.isAvailable();let i=t&&!ce.previouslyFailed();if(e.webSocketOnly&&(t||Z("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[ce];else{const s=this.transports_=[];for(const r of sn.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);sn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}sn.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_=6e4,t_=5e3,n_=10*1024,i_=100*1024,Wi="t",po="d",s_="s",_o="r",r_="e",go="o",mo="a",vo="n",yo="p",o_="h";class a_{constructor(e,t,i,s,r,o,a,l,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=yn("c:"+this.id+":"),this.transportManager_=new sn(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Kt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>i_?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>n_?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Wi in e){const t=e[Wi];t===mo?this.upgradeIfSecondaryHealthy_():t===_o?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===go&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Vt("t",e),i=Vt("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:yo,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:mo,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:vo,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Vt("t",e),i=Vt("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Vt(Wi,e);if(po in e){const i=e[po];if(t===o_){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===vo){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===s_?this.onConnectionShutdown_(i):t===_o?this.onReset_(i):t===r_?as("Server Error: "+i):t===go?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):as("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Ys!==i&&Z("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),Kt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(e_))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Kt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(t_))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:yo,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(tt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e){this.allowedEvents_=e,this.listeners_={},p(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){p(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends El{static getInstance(){return new Xn}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ps()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return p(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo=32,Eo=768;class k{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function T(){return new k("")}function I(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Ge(n){return n.pieces_.length-n.pieceNum_}function D(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new k(n.pieces_,e)}function Xs(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function l_(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function rn(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Il(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new k(e,0)}function F(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof k)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new k(t,0)}function C(n){return n.pieceNum_>=n.pieces_.length}function X(n,e){const t=I(n),i=I(e);if(t===null)return e;if(t===i)return X(D(n),D(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function c_(n,e){const t=rn(n,0),i=rn(e,0);for(let s=0;s<t.length&&s<i.length;s++){const r=ut(t[s],i[s]);if(r!==0)return r}return t.length===i.length?0:t.length<i.length?-1:1}function Zs(n,e){if(Ge(n)!==Ge(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function se(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Ge(n)>Ge(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class u_{constructor(e,t){this.errorPrefix_=t,this.parts_=rn(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=di(this.parts_[i]);bl(this)}}function h_(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=di(e),bl(n)}function d_(n){const e=n.parts_.pop();n.byteLength_-=di(e),n.parts_.length>0&&(n.byteLength_-=1)}function bl(n){if(n.byteLength_>Eo)throw new Error(n.errorPrefix_+"has a key path longer than "+Eo+" bytes ("+n.byteLength_+").");if(n.parts_.length>wo)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+wo+") or object contains a cycle "+Xe(n))}function Xe(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends El{static getInstance(){return new er}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return p(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht=1e3,f_=60*5*1e3,Io=30*1e3,p_=1.3,__=3e4,g_="server_kill",bo=3;class Re extends wl{constructor(e,t,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Re.nextPersistentConnectionId_++,this.log_=yn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ht,this.maxReconnectDelay_=f_,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");er.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Xn.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(H(r)),p(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new fn,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),p(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),p(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Re.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&ye(e,"w")){const i=Et(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();Z(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||qu(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Io)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Gu(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),p(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+H(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):as("Unrecognized action received from server: "+H(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){p(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ht,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ht,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>__&&(this.reconnectDelay_=Ht),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*p_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Re.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(h){p(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?z("getToken() completed but was canceled"):(z("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new a_(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,f=>{Z(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(g_)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Z(h),l())}}}interrupt(e){z("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){z("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ji(this.interruptReasons_)&&(this.reconnectDelay_=Ht,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>Ks(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new k(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){z("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=bo&&(this.reconnectDelay_=Io,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){z("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=bo&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Za.replace(/\./g,"-")]=1,Ps()?e["framework.cordova"]=1:_a()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Xn.getInstance().currentlyOnline();return Ji(this.interruptReasons_)&&e}}Re.nextPersistentConnectionId_=0;Re.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new b(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new b(Ct,e),s=new b(Ct,t);return this.compare(i,s)!==0}minPost(){return b.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rn;class Cl extends gi{static get __EMPTY_NODE(){return Rn}static set __EMPTY_NODE(e){Rn=e}compare(e,t){return ut(e.name,t.name)}isDefinedOn(e){throw Pt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return b.MIN}maxPost(){return new b(at,Rn)}makePost(e,t){return p(typeof e=="string","KeyIndex indexValue must always be a string."),new b(e,Rn)}toString(){return".key"}}const yt=new Cl;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class G{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??G.RED,this.left=s??ne.EMPTY_NODE,this.right=r??ne.EMPTY_NODE}copy(e,t,i,s,r){return new G(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return ne.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return ne.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,G.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,G.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}G.RED=!0;G.BLACK=!1;class m_{copy(e,t,i,s,r){return this}insert(e,t,i){return new G(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ne{constructor(e,t=ne.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new ne(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,G.BLACK,null,null))}remove(e){return new ne(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,G.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new An(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new An(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new An(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new An(this.root_,null,this.comparator_,!0,e)}}ne.EMPTY_NODE=new m_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v_(n,e){return ut(n.name,e.name)}function tr(n,e){return ut(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cs;function y_(n){cs=n}const Tl=function(n){return typeof n=="number"?"number:"+il(n):"string:"+n},Sl=function(n){if(n.isLeafNode()){const e=n.val();p(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ye(e,".sv"),"Priority must be a string or number.")}else p(n===cs||n.isEmpty(),"priority of unexpected type.");p(n===cs||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Co;class j{static set __childrenNodeConstructor(e){Co=e}static get __childrenNodeConstructor(){return Co}constructor(e,t=j.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,p(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Sl(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new j(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:j.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return C(e)?this:I(e)===".priority"?this.priorityNode_:j.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:j.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=I(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(p(i!==".priority"||Ge(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,j.__childrenNodeConstructor.EMPTY_NODE.updateChild(D(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Tl(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=il(this.value_):e+=this.value_,this.lazyHash_=tl(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===j.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof j.__childrenNodeConstructor?-1:(p(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=j.VALUE_TYPE_ORDER.indexOf(t),r=j.VALUE_TYPE_ORDER.indexOf(i);return p(s>=0,"Unknown leaf type: "+t),p(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}j.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rl,Al;function w_(n){Rl=n}function E_(n){Al=n}class I_ extends gi{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?ut(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return b.MIN}maxPost(){return new b(at,new j("[PRIORITY-POST]",Al))}makePost(e,t){const i=Rl(e);return new b(t,new j("[PRIORITY-POST]",i))}toString(){return".priority"}}const U=new I_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_=Math.log(2);class C_{constructor(e){const t=r=>parseInt(Math.log(r)/b_,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Zn=function(n,e,t,i){n.sort(e);const s=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=n[l],d=t?t(h):h,new G(d,h.node,G.BLACK,null,null);{const f=parseInt(u/2,10)+l,_=s(l,f),g=s(f+1,c);return h=n[f],d=t?t(h):h,new G(d,h.node,G.BLACK,_,g)}},r=function(l){let c=null,u=null,h=n.length;const d=function(_,g){const m=h-_,E=h;h-=_;const w=s(m+1,E),M=n[m],L=t?t(M):M;f(new G(L,M.node,g,null,w))},f=function(_){c?(c.left=_,c=_):(u=_,c=_)};for(let _=0;_<l.count;++_){const g=l.nextBitIsOne(),m=Math.pow(2,l.count-(_+1));g?d(m,G.BLACK):(d(m,G.BLACK),d(m,G.RED))}return u},o=new C_(n.length),a=r(o);return new ne(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bi;const ft={};class Te{static get Default(){return p(ft&&U,"ChildrenNode.ts has not been loaded"),Bi=Bi||new Te({".priority":ft},{".priority":U}),Bi}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Et(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ne?t:null}hasIndex(e){return ye(this.indexSet_,e.toString())}addIndex(e,t){p(e!==yt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(b.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Zn(i,e.getCompare()):a=ft;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Te(u,c)}addToIndexes(e,t){const i=Hn(this.indexes_,(s,r)=>{const o=Et(this.indexSet_,r);if(p(o,"Missing index implementation for "+r),s===ft)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(b.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Zn(a,o.getCompare())}else return ft;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new b(e.name,a))),l.insert(e,e.node)}});return new Te(i,this.indexSet_)}removeFromIndexes(e,t){const i=Hn(this.indexes_,s=>{if(s===ft)return s;{const r=t.get(e.name);return r?s.remove(new b(e.name,r)):s}});return new Te(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jt;class v{static get EMPTY_NODE(){return jt||(jt=new v(new ne(tr),null,Te.Default))}constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Sl(this.priorityNode_),this.children_.isEmpty()&&p(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||jt}updatePriority(e){return this.children_.isEmpty()?this:new v(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?jt:t}}getChild(e){const t=I(e);return t===null?this:this.getImmediateChild(t).getChild(D(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(p(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new b(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?jt:this.priorityNode_;return new v(s,o,r)}}updateChild(e,t){const i=I(e);if(i===null)return t;{p(I(e)!==".priority"||Ge(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(D(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(U,(o,a)=>{t[o]=a.val(e),i++,r&&v.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Tl(this.getPriority().val())+":"),this.forEachChild(U,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":tl(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new b(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new b(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new b(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,b.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,b.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===wn?-1:0}withIndex(e){if(e===yt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new v(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===yt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(U),s=t.getIterator(U);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===yt?null:this.indexMap_.get(e.toString())}}v.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class T_ extends v{constructor(){super(new ne(tr),v.EMPTY_NODE,Te.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return v.EMPTY_NODE}isEmpty(){return!1}}const wn=new T_;Object.defineProperties(b,{MIN:{value:new b(Ct,v.EMPTY_NODE)},MAX:{value:new b(at,wn)}});Cl.__EMPTY_NODE=v.EMPTY_NODE;j.__childrenNodeConstructor=v;y_(wn);E_(wn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_=!0;function V(n,e=null){if(n===null)return v.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),p(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new j(t,V(e))}if(!(n instanceof Array)&&S_){const t=[];let i=!1;if(Q(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=V(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new b(o,l)))}}),t.length===0)return v.EMPTY_NODE;const r=Zn(t,v_,o=>o.name,tr);if(i){const o=Zn(t,U.getCompare());return new v(r,V(e),new Te({".priority":o},{".priority":U}))}else return new v(r,V(e),Te.Default)}else{let t=v.EMPTY_NODE;return Q(n,(i,s)=>{if(ye(n,i)&&i.substring(0,1)!=="."){const r=V(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(V(e))}}w_(V);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_ extends gi{constructor(e){super(),this.indexPath_=e,p(!C(e)&&I(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?ut(e.name,t.name):r}makePost(e,t){const i=V(e),s=v.EMPTY_NODE.updateChild(this.indexPath_,i);return new b(t,s)}maxPost(){const e=v.EMPTY_NODE.updateChild(this.indexPath_,wn);return new b(at,e)}toString(){return rn(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_ extends gi{compare(e,t){const i=e.node.compareTo(t.node);return i===0?ut(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return b.MIN}maxPost(){return b.MAX}makePost(e,t){const i=V(e);return new b(t,i)}toString(){return".value"}}const k_=new A_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(n){return{type:"value",snapshotNode:n}}function Tt(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function on(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function an(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function N_(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){p(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(on(t,a)):p(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Tt(t,i)):o.trackChildChange(an(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(U,(s,r)=>{t.hasChild(s)||i.trackChildChange(on(s,r))}),t.isLeafNode()||t.forEachChild(U,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(an(s,r,o))}else i.trackChildChange(Tt(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?v.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){this.indexedFilter_=new nr(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ln.getStartPost_(e),this.endPost_=ln.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new b(t,i))||(i=v.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=v.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(v.EMPTY_NODE);const r=this;return t.forEachChild(U,(o,a)=>{r.matches(new b(o,a))||(s=s.updateImmediateChild(o,v.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new ln(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new b(t,i))||(i=v.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=v.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=v.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(v.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,v.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,f)=>h(f,d)}else o=this.index_.getCompare();const a=e;p(a.numChildren()===this.limit_,"");const l=new b(t,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(t)){const h=a.getImmediateChild(t);let d=s.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=s.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,l);if(u&&!i.isEmpty()&&f>=0)return r?.trackChildChange(an(t,i,h)),a.updateImmediateChild(t,i);{r?.trackChildChange(on(t,h));const g=a.updateImmediateChild(t,v.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r?.trackChildChange(Tt(d.name,d.node)),g.updateImmediateChild(d.name,d.node)):g}}else return i.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(on(c.name,c.node)),r.trackChildChange(Tt(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(c.name,v.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=U}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return p(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return p(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ct}hasEnd(){return this.endSet_}getIndexEndValue(){return p(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return p(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:at}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return p(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===U}copy(){const e=new ir;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function O_(n){return n.loadsAllData()?new nr(n.getIndex()):n.hasLimit()?new P_(n):new ln(n)}function To(n){const e={};if(n.isDefault())return e;let t;if(n.index_===U?t="$priority":n.index_===k_?t="$value":n.index_===yt?t="$key":(p(n.index_ instanceof R_,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=H(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=H(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+H(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=H(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+H(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function So(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==U&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends wl{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(p(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=yn("p:rest:"),this.listens_={}}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ei.getListenId_(e,i),a={};this.listens_[o]=a;const l=To(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,i),Et(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",s(d,null)}})}unlisten(e,t){const i=ei.getListenId_(e,t);delete this.listens_[i]}get(e){const t=To(e._queryParams),i=e._path.toString(),s=new fn;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ot(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=en(a.responseText)}catch{Z("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&Z("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(){this.rootNode_=v.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(){return{value:null,children:new Map}}function Nl(n,e,t){if(C(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=I(e);n.children.has(i)||n.children.set(i,ti());const s=n.children.get(i);e=D(e),Nl(s,e,t)}}function us(n,e,t){n.value!==null?t(e,n.value):x_(n,(i,s)=>{const r=new k(e.toString()+"/"+i);us(s,r,t)})}function x_(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Q(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro=10*1e3,M_=30*1e3,F_=5*60*1e3;class U_{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new L_(e);const i=Ro+(M_-Ro)*Math.random();Kt(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;Q(e,(s,r)=>{r>0&&ye(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),Kt(this.reportStats_.bind(this),Math.floor(Math.random()*2*F_))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(he||(he={}));function sr(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function rr(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function or(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=he.ACK_USER_WRITE,this.source=sr()}operationForChild(e){if(C(this.path)){if(this.affectedTree.value!=null)return p(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new k(e));return new ni(T(),t,this.revert)}}else return p(I(this.path)===e,"operationForChild called for unrelated child."),new ni(D(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,t){this.source=e,this.path=t,this.type=he.LISTEN_COMPLETE}operationForChild(e){return C(this.path)?new cn(this.source,T()):new cn(this.source,D(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=he.OVERWRITE}operationForChild(e){return C(this.path)?new lt(this.source,T(),this.snap.getImmediateChild(e)):new lt(this.source,D(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=he.MERGE}operationForChild(e){if(C(this.path)){const t=this.children.subtree(new k(e));return t.isEmpty()?null:t.value?new lt(this.source,T(),t.value):new St(this.source,T(),t)}else return p(I(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new St(this.source,D(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(C(e))return this.isFullyInitialized()&&!this.filtered_;const t=I(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function W_(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(N_(o.childName,o.snapshotNode))}),Gt(n,s,"child_removed",e,i,t),Gt(n,s,"child_added",e,i,t),Gt(n,s,"child_moved",r,i,t),Gt(n,s,"child_changed",e,i,t),Gt(n,s,"value",e,i,t),s}function Gt(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,l)=>V_(n,a,l)),o.forEach(a=>{const l=B_(n,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function B_(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function V_(n,e,t){if(e.childName==null||t.childName==null)throw Pt("Should only compare child_ events.");const i=new b(e.childName,e.snapshotNode),s=new b(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(n,e){return{eventCache:n,serverCache:e}}function Yt(n,e,t,i){return mi(new qe(e,t,i),n.serverCache)}function Pl(n,e,t,i){return mi(n.eventCache,new qe(e,t,i))}function ii(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function ct(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vi;const H_=()=>(Vi||(Vi=new ne(Rp)),Vi);class P{static fromObject(e){let t=new P(null);return Q(e,(i,s)=>{t=t.set(new k(i),s)}),t}constructor(e,t=H_()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:T(),value:this.value};if(C(e))return null;{const i=I(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(D(e),t);return r!=null?{path:F(new k(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(C(e))return this;{const t=I(e),i=this.children.get(t);return i!==null?i.subtree(D(e)):new P(null)}}set(e,t){if(C(e))return new P(t,this.children);{const i=I(e),r=(this.children.get(i)||new P(null)).set(D(e),t),o=this.children.insert(i,r);return new P(this.value,o)}}remove(e){if(C(e))return this.children.isEmpty()?new P(null):new P(null,this.children);{const t=I(e),i=this.children.get(t);if(i){const s=i.remove(D(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new P(null):new P(this.value,r)}else return this}}get(e){if(C(e))return this.value;{const t=I(e),i=this.children.get(t);return i?i.get(D(e)):null}}setTree(e,t){if(C(e))return t;{const i=I(e),r=(this.children.get(i)||new P(null)).setTree(D(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new P(this.value,o)}}fold(e){return this.fold_(T(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(F(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,T(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(C(e))return null;{const r=I(e),o=this.children.get(r);return o?o.findOnPath_(D(e),F(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,T(),t)}foreachOnPath_(e,t,i){if(C(e))return this;{this.value&&i(t,this.value);const s=I(e),r=this.children.get(s);return r?r.foreachOnPath_(D(e),F(t,s),i):new P(null)}}foreach(e){this.foreach_(T(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(F(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.writeTree_=e}static empty(){return new fe(new P(null))}}function Qt(n,e,t){if(C(e))return new fe(new P(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=X(s,e);return r=r.updateChild(o,t),new fe(n.writeTree_.set(s,r))}else{const s=new P(t),r=n.writeTree_.setTree(e,s);return new fe(r)}}}function hs(n,e,t){let i=n;return Q(t,(s,r)=>{i=Qt(i,F(e,s),r)}),i}function Ao(n,e){if(C(e))return fe.empty();{const t=n.writeTree_.setTree(e,new P(null));return new fe(t)}}function ds(n,e){return ht(n,e)!=null}function ht(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(X(t.path,e)):null}function ko(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(U,(i,s)=>{e.push(new b(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new b(i,s.value))}),e}function He(n,e){if(C(e))return n;{const t=ht(n,e);return t!=null?new fe(new P(t)):new fe(n.writeTree_.subtree(e))}}function fs(n){return n.writeTree_.isEmpty()}function Rt(n,e){return Ol(T(),n.writeTree_,e)}function Ol(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(p(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=Ol(F(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(F(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(n,e){return Ml(e,n)}function j_(n,e,t,i,s){p(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=Qt(n.visibleWrites,e,t)),n.lastWriteId=i}function G_(n,e,t,i){p(i>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:i,visible:!0}),n.visibleWrites=hs(n.visibleWrites,e,t),n.lastWriteId=i}function q_(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function z_(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);p(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&K_(a,i.path)?s=!1:se(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return Y_(n),!0;if(i.snap)n.visibleWrites=Ao(n.visibleWrites,i.path);else{const a=i.children;Q(a,l=>{n.visibleWrites=Ao(n.visibleWrites,F(i.path,l))})}return!0}else return!1}function K_(n,e){if(n.snap)return se(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&se(F(n.path,t),e))return!0;return!1}function Y_(n){n.visibleWrites=Dl(n.allWrites,Q_,T()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Q_(n){return n.visible}function Dl(n,e,t){let i=fe.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)se(t,o)?(a=X(t,o),i=Qt(i,a,r.snap)):se(o,t)&&(a=X(o,t),i=Qt(i,T(),r.snap.getChild(a)));else if(r.children){if(se(t,o))a=X(t,o),i=hs(i,a,r.children);else if(se(o,t))if(a=X(o,t),C(a))i=hs(i,T(),r.children);else{const l=Et(r.children,I(a));if(l){const c=l.getChild(D(a));i=Qt(i,T(),c)}}}else throw Pt("WriteRecord should have .snap or .children")}}return i}function xl(n,e,t,i,s){if(!i&&!s){const r=ht(n.visibleWrites,e);if(r!=null)return r;{const o=He(n.visibleWrites,e);if(fs(o))return t;if(t==null&&!ds(o,T()))return null;{const a=t||v.EMPTY_NODE;return Rt(o,a)}}}else{const r=He(n.visibleWrites,e);if(!s&&fs(r))return t;if(!s&&t==null&&!ds(r,T()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(se(c.path,e)||se(e,c.path))},a=Dl(n.allWrites,o,e),l=t||v.EMPTY_NODE;return Rt(a,l)}}}function J_(n,e,t){let i=v.EMPTY_NODE;const s=ht(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(U,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=He(n.visibleWrites,e);return t.forEachChild(U,(o,a)=>{const l=Rt(He(r,new k(o)),a);i=i.updateImmediateChild(o,l)}),ko(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=He(n.visibleWrites,e);return ko(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function X_(n,e,t,i,s){p(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=F(e,t);if(ds(n.visibleWrites,r))return null;{const o=He(n.visibleWrites,r);return fs(o)?s.getChild(t):Rt(o,s.getChild(t))}}function Z_(n,e,t,i){const s=F(e,t),r=ht(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=He(n.visibleWrites,s);return Rt(o,i.getNode().getImmediateChild(t))}else return null}function eg(n,e){return ht(n.visibleWrites,e)}function tg(n,e,t,i,s,r,o){let a;const l=He(n.visibleWrites,e),c=ht(l,T());if(c!=null)a=c;else if(t!=null)a=Rt(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=d.getNext();for(;f&&u.length<s;)h(f,i)!==0&&u.push(f),f=d.getNext();return u}else return[]}function ng(){return{visibleWrites:fe.empty(),allWrites:[],lastWriteId:-1}}function si(n,e,t,i){return xl(n.writeTree,n.treePath,e,t,i)}function ar(n,e){return J_(n.writeTree,n.treePath,e)}function No(n,e,t,i){return X_(n.writeTree,n.treePath,e,t,i)}function ri(n,e){return eg(n.writeTree,F(n.treePath,e))}function ig(n,e,t,i,s,r){return tg(n.writeTree,n.treePath,e,t,i,s,r)}function lr(n,e,t){return Z_(n.writeTree,n.treePath,e,t)}function Ll(n,e){return Ml(F(n.treePath,e),n.writeTree)}function Ml(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;p(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),p(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,an(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,on(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,Tt(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,an(i,e.snapshotNode,s.oldSnap));else throw Pt("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const Fl=new rg;class cr{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new qe(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return lr(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ct(this.viewCache_),r=ig(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function og(n){return{filter:n}}function ag(n,e){p(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),p(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function lg(n,e,t,i,s){const r=new sg;let o,a;if(t.type===he.OVERWRITE){const c=t;c.source.fromUser?o=ps(n,e,c.path,c.snap,i,s,r):(p(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!C(c.path),o=oi(n,e,c.path,c.snap,i,s,a,r))}else if(t.type===he.MERGE){const c=t;c.source.fromUser?o=ug(n,e,c.path,c.children,i,s,r):(p(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=_s(n,e,c.path,c.children,i,s,a,r))}else if(t.type===he.ACK_USER_WRITE){const c=t;c.revert?o=fg(n,e,c.path,i,s,r):o=hg(n,e,c.path,c.affectedTree,i,s,r)}else if(t.type===he.LISTEN_COMPLETE)o=dg(n,e,t.path,i,r);else throw Pt("Unknown operation type: "+t.type);const l=r.getChanges();return cg(e,o,l),{viewCache:o,changes:l}}function cg(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=ii(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(kl(ii(e)))}}function Ul(n,e,t,i,s,r){const o=e.eventCache;if(ri(i,t)!=null)return e;{let a,l;if(C(t))if(p(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ct(e),u=c instanceof v?c:v.EMPTY_NODE,h=ar(i,u);a=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=si(i,ct(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=I(t);if(c===".priority"){p(Ge(t)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=No(i,t,u,l);h!=null?a=n.filter.updatePriority(u,h):a=o.getNode()}else{const u=D(t);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=No(i,t,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=lr(i,c,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),c,h,u,s,r):a=o.getNode()}}return Yt(e,a,o.isFullyInitialized()||C(t),n.filter.filtersNodes())}}function oi(n,e,t,i,s,r,o,a){const l=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(C(t))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(t,i);c=u.updateFullNode(l.getNode(),f,null)}else{const f=I(t);if(!l.isCompleteForPath(t)&&Ge(t)>1)return e;const _=D(t),m=l.getNode().getImmediateChild(f).updateChild(_,i);f===".priority"?c=u.updatePriority(l.getNode(),m):c=u.updateChild(l.getNode(),f,m,_,Fl,null)}const h=Pl(e,c,l.isFullyInitialized()||C(t),u.filtersNodes()),d=new cr(s,h,r);return Ul(n,h,t,s,d,a)}function ps(n,e,t,i,s,r,o){const a=e.eventCache;let l,c;const u=new cr(s,e,r);if(C(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=Yt(e,c,!0,n.filter.filtersNodes());else{const h=I(t);if(h===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),l=Yt(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=D(t),f=a.getNode().getImmediateChild(h);let _;if(C(d))_=i;else{const g=u.getCompleteChild(h);g!=null?Xs(d)===".priority"&&g.getChild(Il(d)).isEmpty()?_=g:_=g.updateChild(d,i):_=v.EMPTY_NODE}if(f.equals(_))l=e;else{const g=n.filter.updateChild(a.getNode(),h,_,d,u,o);l=Yt(e,g,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function Po(n,e){return n.eventCache.isCompleteForChild(e)}function ug(n,e,t,i,s,r,o){let a=e;return i.foreach((l,c)=>{const u=F(t,l);Po(e,I(u))&&(a=ps(n,a,u,c,s,r,o))}),i.foreach((l,c)=>{const u=F(t,l);Po(e,I(u))||(a=ps(n,a,u,c,s,r,o))}),a}function Oo(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function _s(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;C(t)?c=i:c=new P(null).setTree(t,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),_=Oo(n,f,d);l=oi(n,l,new k(h),_,s,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const _=e.serverCache.getNode().getImmediateChild(h),g=Oo(n,_,d);l=oi(n,l,new k(h),g,s,r,o,a)}}),l}function hg(n,e,t,i,s,r,o){if(ri(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(C(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return oi(n,e,t,l.getNode().getChild(t),s,r,a,o);if(C(t)){let c=new P(null);return l.getNode().forEachChild(yt,(u,h)=>{c=c.set(new k(u),h)}),_s(n,e,t,c,s,r,a,o)}else return e}else{let c=new P(null);return i.foreach((u,h)=>{const d=F(t,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),_s(n,e,t,c,s,r,a,o)}}function dg(n,e,t,i,s){const r=e.serverCache,o=Pl(e,r.getNode(),r.isFullyInitialized()||C(t),r.isFiltered());return Ul(n,o,t,i,Fl,s)}function fg(n,e,t,i,s,r){let o;if(ri(i,t)!=null)return e;{const a=new cr(i,e,s),l=e.eventCache.getNode();let c;if(C(t)||I(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=si(i,ct(e));else{const h=e.serverCache.getNode();p(h instanceof v,"serverChildren would be complete if leaf node"),u=ar(i,h)}u=u,c=n.filter.updateFullNode(l,u,r)}else{const u=I(t);let h=lr(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=n.filter.updateChild(l,u,h,D(t),a,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(l,u,v.EMPTY_NODE,D(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=si(i,ct(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||ri(i,T())!=null,Yt(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new nr(i.getIndex()),r=O_(i);this.processor_=og(r);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(v.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(v.EMPTY_NODE,a.getNode(),null),u=new qe(l,o.isFullyInitialized(),s.filtersNodes()),h=new qe(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=mi(h,u),this.eventGenerator_=new $_(this.query_)}get query(){return this.query_}}function _g(n){return n.viewCache_.serverCache.getNode()}function gg(n){return ii(n.viewCache_)}function mg(n,e){const t=ct(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!C(e)&&!t.getImmediateChild(I(e)).isEmpty())?t.getChild(e):null}function Do(n){return n.eventRegistrations_.length===0}function vg(n,e){n.eventRegistrations_.push(e)}function xo(n,e,t){const i=[];if(t){p(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function Lo(n,e,t,i){e.type===he.MERGE&&e.source.queryId!==null&&(p(ct(n.viewCache_),"We should always have a full cache before handling merges"),p(ii(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=lg(n.processor_,s,e,t,i);return ag(n.processor_,r.viewCache),p(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,$l(n,r.changes,r.viewCache.eventCache.getNode(),null)}function yg(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(U,(r,o)=>{i.push(Tt(r,o))}),t.isFullyInitialized()&&i.push(kl(t.getNode())),$l(n,i,t.getNode(),e)}function $l(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return W_(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ai;class Wl{constructor(){this.views=new Map}}function wg(n){p(!ai,"__referenceConstructor has already been defined"),ai=n}function Eg(){return p(ai,"Reference.ts has not been loaded"),ai}function Ig(n){return n.views.size===0}function ur(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return p(r!=null,"SyncTree gave us an op for an invalid query."),Lo(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(Lo(o,e,t,i));return r}}function Bl(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=si(t,s?i:null),l=!1;a?l=!0:i instanceof v?(a=ar(t,i),l=!1):(a=v.EMPTY_NODE,l=!1);const c=mi(new qe(a,l,!1),new qe(i,s,!1));return new pg(e,c)}return o}function bg(n,e,t,i,s,r){const o=Bl(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),vg(o,t),yg(o,t)}function Cg(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const a=ze(n);if(s==="default")for(const[l,c]of n.views.entries())o=o.concat(xo(c,t,i)),Do(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(s);l&&(o=o.concat(xo(l,t,i)),Do(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!ze(n)&&r.push(new(Eg())(e._repo,e._path)),{removed:r,events:o}}function Vl(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function je(n,e){let t=null;for(const i of n.views.values())t=t||mg(i,e);return t}function Hl(n,e){if(e._queryParams.loadsAllData())return yi(n);{const i=e._queryIdentifier;return n.views.get(i)}}function jl(n,e){return Hl(n,e)!=null}function ze(n){return yi(n)!=null}function yi(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let li;function Tg(n){p(!li,"__referenceConstructor has already been defined"),li=n}function Sg(){return p(li,"Reference.ts has not been loaded"),li}let Rg=1;class Mo{constructor(e){this.listenProvider_=e,this.syncPointTree_=new P(null),this.pendingWriteTree_=ng(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Gl(n,e,t,i,s){return j_(n.pendingWriteTree_,e,t,i,s),s?Mt(n,new lt(sr(),e,t)):[]}function Ag(n,e,t,i){G_(n.pendingWriteTree_,e,t,i);const s=P.fromObject(t);return Mt(n,new St(sr(),e,s))}function $e(n,e,t=!1){const i=q_(n.pendingWriteTree_,e);if(z_(n.pendingWriteTree_,e)){let r=new P(null);return i.snap!=null?r=r.set(T(),!0):Q(i.children,o=>{r=r.set(new k(o),!0)}),Mt(n,new ni(i.path,r,t))}else return[]}function En(n,e,t){return Mt(n,new lt(rr(),e,t))}function kg(n,e,t){const i=P.fromObject(t);return Mt(n,new St(rr(),e,i))}function Ng(n,e){return Mt(n,new cn(rr(),e))}function Pg(n,e,t){const i=dr(n,t);if(i){const s=fr(i),r=s.path,o=s.queryId,a=X(r,e),l=new cn(or(o),a);return pr(n,r,l)}else return[]}function ci(n,e,t,i,s=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||jl(o,e))){const l=Cg(o,e,t,i);Ig(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=n.syncPointTree_.findOnPath(r,(d,f)=>ze(f));if(u&&!h){const d=n.syncPointTree_.subtree(r);if(!d.isEmpty()){const f=xg(d);for(let _=0;_<f.length;++_){const g=f[_],m=g.query,E=Yl(n,g);n.listenProvider_.startListening(Jt(m),un(n,m),E.hashFn,E.onComplete)}}}!h&&c.length>0&&!i&&(u?n.listenProvider_.stopListening(Jt(e),null):c.forEach(d=>{const f=n.queryToTagMap.get(wi(d));n.listenProvider_.stopListening(Jt(d),f)}))}Lg(n,c)}return a}function ql(n,e,t,i){const s=dr(n,i);if(s!=null){const r=fr(s),o=r.path,a=r.queryId,l=X(o,e),c=new lt(or(a),l,t);return pr(n,o,c)}else return[]}function Og(n,e,t,i){const s=dr(n,i);if(s){const r=fr(s),o=r.path,a=r.queryId,l=X(o,e),c=P.fromObject(t),u=new St(or(a),l,c);return pr(n,o,u)}else return[]}function gs(n,e,t,i=!1){const s=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(d,f)=>{const _=X(d,s);r=r||je(f,_),o=o||ze(f)});let a=n.syncPointTree_.get(s);a?(o=o||ze(a),r=r||je(a,T())):(a=new Wl,n.syncPointTree_=n.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=v.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((f,_)=>{const g=je(_,T());g&&(r=r.updateImmediateChild(f,g))}));const c=jl(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=wi(e);p(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=Mg();n.queryToTagMap.set(d,f),n.tagToQueryMap.set(f,d)}const u=vi(n.pendingWriteTree_,s);let h=bg(a,e,t,u,r,l);if(!c&&!o&&!i){const d=Hl(a,e);h=h.concat(Fg(n,e,d))}return h}function hr(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=X(o,e),c=je(a,l);if(c)return c});return xl(s,e,r,t,!0)}function Dg(n,e){const t=e._path;let i=null;n.syncPointTree_.foreachOnPath(t,(c,u)=>{const h=X(c,t);i=i||je(u,h)});let s=n.syncPointTree_.get(t);s?i=i||je(s,T()):(s=new Wl,n.syncPointTree_=n.syncPointTree_.set(t,s));const r=i!=null,o=r?new qe(i,!0,!1):null,a=vi(n.pendingWriteTree_,e._path),l=Bl(s,e,a,r?o.getNode():v.EMPTY_NODE,r);return gg(l)}function Mt(n,e){return zl(e,n.syncPointTree_,null,vi(n.pendingWriteTree_,T()))}function zl(n,e,t,i){if(C(n.path))return Kl(n,e,t,i);{const s=e.get(T());t==null&&s!=null&&(t=je(s,T()));let r=[];const o=I(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,u=Ll(i,o);r=r.concat(zl(a,l,c,u))}return s&&(r=r.concat(ur(s,n,i,t))),r}}function Kl(n,e,t,i){const s=e.get(T());t==null&&s!=null&&(t=je(s,T()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=Ll(i,o),u=n.operationForChild(o);u&&(r=r.concat(Kl(u,a,l,c)))}),s&&(r=r.concat(ur(s,n,i,t))),r}function Yl(n,e){const t=e.query,i=un(n,t);return{hashFn:()=>(_g(e)||v.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?Pg(n,t._path,i):Ng(n,t._path);{const r=Np(s,t);return ci(n,t,null,r)}}}}function un(n,e){const t=wi(e);return n.queryToTagMap.get(t)}function wi(n){return n._path.toString()+"$"+n._queryIdentifier}function dr(n,e){return n.tagToQueryMap.get(e)}function fr(n){const e=n.indexOf("$");return p(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new k(n.substr(0,e))}}function pr(n,e,t){const i=n.syncPointTree_.get(e);p(i,"Missing sync point for query tag that we're tracking");const s=vi(n.pendingWriteTree_,e);return ur(i,t,s,null)}function xg(n){return n.fold((e,t,i)=>{if(t&&ze(t))return[yi(t)];{let s=[];return t&&(s=Vl(t)),Q(i,(r,o)=>{s=s.concat(o)}),s}})}function Jt(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Sg())(n._repo,n._path):n}function Lg(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=wi(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function Mg(){return Rg++}function Fg(n,e,t){const i=e._path,s=un(n,e),r=Yl(n,t),o=n.listenProvider_.startListening(Jt(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)p(!ze(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!C(c)&&u&&ze(u))return[yi(u).query];{let d=[];return u&&(d=d.concat(Vl(u).map(f=>f.query))),Q(h,(f,_)=>{d=d.concat(_)}),d}});for(let c=0;c<l.length;++c){const u=l[c];n.listenProvider_.stopListening(Jt(u),un(n,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new _r(t)}node(){return this.node_}}class gr{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=F(this.path_,e);return new gr(this.syncTree_,t)}node(){return hr(this.syncTree_,this.path_)}}const Ug=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Fo=function(n,e,t){if(!n||typeof n!="object")return n;if(p(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return $g(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Wg(n[".sv"],e);p(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},$g=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:p(!1,"Unexpected server value: "+n)}},Wg=function(n,e,t){n.hasOwnProperty("increment")||p(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&p(!1,"Unexpected increment value: "+i);const s=e.node();if(p(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},Ql=function(n,e,t,i){return mr(e,new gr(t,n),i)},Jl=function(n,e,t){return mr(n,new _r(e),t)};function mr(n,e,t){const i=n.getPriority().val(),s=Fo(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Fo(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new j(a,V(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new j(s))),o.forEachChild(U,(a,l)=>{const c=mr(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function yr(n,e){let t=e instanceof k?e:new k(e),i=n,s=I(t);for(;s!==null;){const r=Et(i.node.children,s)||{children:{},childCount:0};i=new vr(s,i,r),t=D(t),s=I(t)}return i}function Ft(n){return n.node.value}function Xl(n,e){n.node.value=e,ms(n)}function Zl(n){return n.node.childCount>0}function Bg(n){return Ft(n)===void 0&&!Zl(n)}function Ei(n,e){Q(n.node.children,(t,i)=>{e(new vr(t,n,i))})}function ec(n,e,t,i){t&&e(n),Ei(n,s=>{ec(s,e,!0)})}function Vg(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function In(n){return new k(n.parent===null?n.name:In(n.parent)+"/"+n.name)}function ms(n){n.parent!==null&&Hg(n.parent,n.name,n)}function Hg(n,e,t){const i=Bg(t),s=ye(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,ms(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,ms(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg=/[\[\].#$\/\u0000-\u001F\u007F]/,Gg=/[\[\].#$\u0000-\u001F\u007F]/,Hi=10*1024*1024,wr=function(n){return typeof n=="string"&&n.length!==0&&!jg.test(n)},tc=function(n){return typeof n=="string"&&n.length!==0&&!Gg.test(n)},qg=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),tc(n)},zg=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!zs(n)||n&&typeof n=="object"&&ye(n,".sv")},nc=function(n,e,t,i){i&&e===void 0||Ii(hi(n,"value"),e,t)},Ii=function(n,e,t){const i=t instanceof k?new u_(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Xe(i));if(typeof e=="function")throw new Error(n+"contains a function "+Xe(i)+" with contents = "+e.toString());if(zs(e))throw new Error(n+"contains "+e.toString()+" "+Xe(i));if(typeof e=="string"&&e.length>Hi/3&&di(e)>Hi)throw new Error(n+"contains a string greater than "+Hi+" utf8 bytes "+Xe(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(Q(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!wr(o)))throw new Error(n+" contains an invalid key ("+o+") "+Xe(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);h_(i,o),Ii(n,a,i),d_(i)}),s&&r)throw new Error(n+' contains ".value" child '+Xe(i)+" in addition to actual children.")}},Kg=function(n,e){let t,i;for(t=0;t<e.length;t++){i=e[t];const r=rn(i);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!wr(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(c_);let s=null;for(t=0;t<e.length;t++){if(i=e[t],s!==null&&se(s,i))throw new Error(n+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}},Yg=function(n,e,t,i){const s=hi(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const r=[];Q(e,(o,a)=>{const l=new k(o);if(Ii(s,a,F(t,l)),Xs(l)===".priority"&&!zg(a))throw new Error(s+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),Kg(s,r)},ic=function(n,e,t,i){if(!tc(t))throw new Error(hi(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Qg=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ic(n,e,t)},sc=function(n,e){if(I(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},Jg=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!wr(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!qg(t))throw new Error(hi(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function bi(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!Zs(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function rc(n,e,t){bi(n,t),oc(n,i=>Zs(i,e))}function re(n,e,t){bi(n,t),oc(n,i=>se(i,e)||se(e,i))}function oc(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(Zg(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Zg(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();zt&&z("event: "+t.toString()),Lt(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em="repo_interrupt",tm=25;class nm{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Xg,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ti(),this.transactionQueueTree_=new vr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function im(n,e,t){if(n.stats_=Qs(n.repoInfo_),n.forceRestClient_||xp())n.server_=new ei(n.repoInfo_,(i,s,r,o)=>{Uo(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>$o(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{H(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new Re(n.repoInfo_,e,(i,s,r,o)=>{Uo(n,i,s,r,o)},i=>{$o(n,i)},i=>{sm(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=$p(n.repoInfo_,()=>new U_(n.stats_,n.server_)),n.infoData_=new D_,n.infoSyncTree_=new Mo({startListening:(i,s,r,o)=>{let a=[];const l=n.infoData_.getNode(i._path);return l.isEmpty()||(a=En(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Er(n,"connected",!1),n.serverSyncTree_=new Mo({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);re(n.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function ac(n){const t=n.infoData_.getNode(new k(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Ci(n){return Ug({timestamp:ac(n)})}function Uo(n,e,t,i,s){n.dataUpdateCount++;const r=new k(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const l=Hn(t,c=>V(c));o=Og(n.serverSyncTree_,r,l,s)}else{const l=V(t);o=ql(n.serverSyncTree_,r,l,s)}else if(i){const l=Hn(t,c=>V(c));o=kg(n.serverSyncTree_,r,l)}else{const l=V(t);o=En(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=At(n,r)),re(n.eventQueue_,a,o)}function $o(n,e){Er(n,"connected",e),e===!1&&lm(n)}function sm(n,e){Q(e,(t,i)=>{Er(n,t,i)})}function Er(n,e,t){const i=new k("/.info/"+e),s=V(t);n.infoData_.updateSnapshot(i,s);const r=En(n.infoSyncTree_,i,s);re(n.eventQueue_,i,r)}function Ir(n){return n.nextWriteId_++}function rm(n,e,t){const i=Dg(n.serverSyncTree_,e);return i!=null?Promise.resolve(i):n.server_.get(e).then(s=>{const r=V(s).withIndex(e._queryParams.getIndex());gs(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=En(n.serverSyncTree_,e._path,r);else{const a=un(n.serverSyncTree_,e);o=ql(n.serverSyncTree_,e._path,r,a)}return re(n.eventQueue_,e._path,o),ci(n.serverSyncTree_,e,t,null,!0),r},s=>(bn(n,"get for query "+H(e)+" failed: "+s),Promise.reject(new Error(s))))}function om(n,e,t,i,s){bn(n,"set",{path:e.toString(),value:t,priority:i});const r=Ci(n),o=V(t,i),a=hr(n.serverSyncTree_,e),l=Jl(o,a,r),c=Ir(n),u=Gl(n.serverSyncTree_,e,l,c,!0);bi(n.eventQueue_,u),n.server_.put(e.toString(),o.val(!0),(d,f)=>{const _=d==="ok";_||Z("set at "+e+" failed: "+d);const g=$e(n.serverSyncTree_,c,!_);re(n.eventQueue_,e,g),vs(n,s,d,f)});const h=Cr(n,e);At(n,h),re(n.eventQueue_,h,[])}function am(n,e,t,i){bn(n,"update",{path:e.toString(),value:t});let s=!0;const r=Ci(n),o={};if(Q(t,(a,l)=>{s=!1,o[a]=Ql(F(e,a),V(l),n.serverSyncTree_,r)}),s)z("update() called with empty data.  Don't do anything."),vs(n,i,"ok",void 0);else{const a=Ir(n),l=Ag(n.serverSyncTree_,e,o,a);bi(n.eventQueue_,l),n.server_.merge(e.toString(),t,(c,u)=>{const h=c==="ok";h||Z("update at "+e+" failed: "+c);const d=$e(n.serverSyncTree_,a,!h),f=d.length>0?At(n,e):e;re(n.eventQueue_,f,d),vs(n,i,c,u)}),Q(t,c=>{const u=Cr(n,F(e,c));At(n,u)}),re(n.eventQueue_,e,[])}}function lm(n){bn(n,"onDisconnectEvents");const e=Ci(n),t=ti();us(n.onDisconnect_,T(),(s,r)=>{const o=Ql(s,r,n.serverSyncTree_,e);Nl(t,s,o)});let i=[];us(t,T(),(s,r)=>{i=i.concat(En(n.serverSyncTree_,s,r));const o=Cr(n,s);At(n,o)}),n.onDisconnect_=ti(),re(n.eventQueue_,T(),i)}function cm(n,e,t){let i;I(e._path)===".info"?i=gs(n.infoSyncTree_,e,t):i=gs(n.serverSyncTree_,e,t),rc(n.eventQueue_,e._path,i)}function um(n,e,t){let i;I(e._path)===".info"?i=ci(n.infoSyncTree_,e,t):i=ci(n.serverSyncTree_,e,t),rc(n.eventQueue_,e._path,i)}function hm(n){n.persistentConnection_&&n.persistentConnection_.interrupt(em)}function bn(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),z(t,...e)}function vs(n,e,t,i){e&&Lt(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function lc(n,e,t){return hr(n.serverSyncTree_,e,t)||v.EMPTY_NODE}function br(n,e=n.transactionQueueTree_){if(e||Ti(n,e),Ft(e)){const t=uc(n,e);p(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&dm(n,In(e),t)}else Zl(e)&&Ei(e,t=>{br(n,t)})}function dm(n,e,t){const i=t.map(c=>c.currentWriteId),s=lc(n,e,i);let r=s;const o=s.hash();for(let c=0;c<t.length;c++){const u=t[c];p(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=X(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{bn(n,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<t.length;d++)t[d].status=2,u=u.concat($e(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&h.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();Ti(n,yr(n.transactionQueueTree_,e)),br(n,n.transactionQueueTree_),re(n.eventQueue_,e,u);for(let d=0;d<h.length;d++)Lt(h[d])}else{if(c==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{Z("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=c}At(n,e)}},o)}function At(n,e){const t=cc(n,e),i=In(t),s=uc(n,t);return fm(n,s,i),i}function fm(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=X(t,l.path);let u=!1,h;if(p(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,s=s.concat($e(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=tm)u=!0,h="maxretry",s=s.concat($e(n.serverSyncTree_,l.currentWriteId,!0));else{const d=lc(n,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){Ii("transaction failed: Data returned ",f,l.path);let _=V(f);typeof f=="object"&&f!=null&&ye(f,".priority")||(_=_.updatePriority(d.getPriority()));const m=l.currentWriteId,E=Ci(n),w=Jl(_,d,E);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=w,l.currentWriteId=Ir(n),o.splice(o.indexOf(m),1),s=s.concat(Gl(n.serverSyncTree_,l.path,w,l.currentWriteId,l.applyLocally)),s=s.concat($e(n.serverSyncTree_,m,!0))}else u=!0,h="nodata",s=s.concat($e(n.serverSyncTree_,l.currentWriteId,!0))}re(n.eventQueue_,t,s),s=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}Ti(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)Lt(i[a]);br(n,n.transactionQueueTree_)}function cc(n,e){let t,i=n.transactionQueueTree_;for(t=I(e);t!==null&&Ft(i)===void 0;)i=yr(i,t),e=D(e),t=I(e);return i}function uc(n,e){const t=[];return hc(n,e,t),t.sort((i,s)=>i.order-s.order),t}function hc(n,e,t){const i=Ft(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);Ei(e,s=>{hc(n,s,t)})}function Ti(n,e){const t=Ft(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,Xl(e,t.length>0?t:void 0)}Ei(e,i=>{Ti(n,i)})}function Cr(n,e){const t=In(cc(n,e)),i=yr(n.transactionQueueTree_,e);return Vg(i,s=>{ji(n,s)}),ji(n,i),ec(i,s=>{ji(n,s)}),t}function ji(n,e){const t=Ft(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(p(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(p(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat($e(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Xl(e,void 0):t.length=r+1,re(n.eventQueue_,In(e),s);for(let o=0;o<i.length;o++)Lt(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pm(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function _m(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Z(`Invalid query segment '${t}' in query '${n}'`)}return e}const Wo=function(n,e){const t=gm(n),i=t.namespace;t.domain==="firebase.com"&&Ne(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&Ne("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Tp();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new fl(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new k(t.pathString)}},gm=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(s=pm(n.substring(u,h)));const d=_m(n.substring(Math.min(n.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const _=e.indexOf(".");i=e.substring(0,_).toLowerCase(),t=e.substring(_+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",mm=function(){let n=0;const e=[];return function(t){const i=t===n;n=t;let s;const r=new Array(8);for(s=7;s>=0;s--)r[s]=Bo.charAt(t%64),t=Math.floor(t/64);p(t===0,"Cannot push at time == 0");let o=r.join("");if(i){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=Bo.charAt(e[s]);return p(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+H(this.snapshot.exportVal())}}class ym{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return p(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return C(this._path)?null:Xs(this._path)}get ref(){return new Pe(this._repo,this._path)}get _queryIdentifier(){const e=So(this._queryParams),t=Ks(e);return t==="{}"?"default":t}get _queryObject(){return So(this._queryParams)}isEqual(e){if(e=te(e),!(e instanceof Tr))return!1;const t=this._repo===e._repo,i=Zs(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+l_(this._path)}}class Pe extends Tr{constructor(e,t){super(e,t,new ir,!1)}get parent(){const e=Il(this._path);return e===null?null:new Pe(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class hn{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new k(e),i=kt(this.ref,e);return new hn(this._node.getChild(t),i,U)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new hn(s,kt(this.ref,i),U)))}hasChild(e){const t=new k(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ln(n,e){return n=te(n),n._checkNotDeleted("ref"),e!==void 0?kt(n._root,e):n._root}function kt(n,e){return n=te(n),I(n._path)===null?Qg("child","path",e):ic("child","path",e),new Pe(n._repo,F(n._path,e))}function wm(n,e){n=te(n),sc("push",n._path),nc("push",e,n._path,!0);const t=ac(n._repo),i=mm(t),s=kt(n,i),r=kt(n,i);let o;return o=Promise.resolve(r),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function Vo(n,e){n=te(n),sc("set",n._path),nc("set",e,n._path,!1);const t=new fn;return om(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function Em(n,e){Yg("update",e,n._path);const t=new fn;return am(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function Im(n){n=te(n);const e=new dc(()=>{}),t=new Si(e);return rm(n._repo,n,t).then(i=>new hn(i,new Pe(n._repo,n._path),n._queryParams.getIndex()))}class Si{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new vm("value",this,new hn(e.snapshotNode,new Pe(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new ym(this,e,t):null}matches(e){return e instanceof Si?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function bm(n,e,t,i,s){const r=new dc(t,void 0),o=new Si(r);return cm(n._repo,n,o),()=>um(n._repo,n,o)}function Cm(n,e,t,i){return bm(n,"value",e)}wg(Pe);Tg(Pe);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm="FIREBASE_DATABASE_EMULATOR_HOST",ys={};let Sm=!1;function Rm(n,e,t,i){n.repoInfo_=new fl(e,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),i&&(n.authTokenProvider_=i)}function Am(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||Ne("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),z("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Wo(r,s),a=o.repoInfo,l;typeof process<"u"&&ao&&(l=ao[Tm]),l?(r=`http://${l}?ns=${a.namespace}`,o=Wo(r,s),a=o.repoInfo):o.repoInfo.secure;const c=new Mp(n.name,n.options,e);Jg("Invalid Firebase Database URL",o),C(o.path)||Ne("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Nm(a,n,c,new Lp(n,t));return new Pm(u,n)}function km(n,e){const t=ys[e];(!t||t[n.key]!==n)&&Ne(`Database ${e}(${n.repoInfo_}) has already been deleted.`),hm(n),delete t[n.key]}function Nm(n,e,t,i){let s=ys[e.name];s||(s={},ys[e.name]=s);let r=s[n.toURLString()];return r&&Ne("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new nm(n,Sm,t,i),s[n.toURLString()]=r,r}class Pm{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(im(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Pe(this._repo,T())),this._rootInternal}_delete(){return this._rootInternal!==null&&(km(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ne("Cannot call "+e+" on a deleted database.")}}function fc(n=wa(),e){const t=xs(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=xu("database");i&&Om(t,...i)}return t}function Om(n,e,t,i={}){n=te(n),n._checkNotDeleted("useEmulator");const s=`${e}:${t}`,r=n._repoInternal;if(n._instanceStarted){if(s===n._repoInternal.repoInfo_.host&&st(i,r.repoInfo_.emulatorOptions))return;Ne("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&Ne('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new xn(xn.OWNER);else if(i.mockUserToken){const a=typeof i.mockUserToken=="string"?i.mockUserToken:Lu(i.mockUserToken,n.app.options.projectId);o=new xn(a)}Rm(r,s,i,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(n){yp(Dt),It(new rt("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Am(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),Ve(lo,co,n),Ve(lo,co,"esm2017")}Re.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Re.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Dm();var xm=ve("<div><h2>Profile</h2>Name: <input type=text><br>Email: <input type=text><br>About: <textarea></textarea><br>Seeking: <textarea></textarea><br><br><button>Save");function Lm(){const[n]=qs,e=fc(),t=Ln(e,`users/${n().uid}`),[i,s]=B(""),[r,o]=B(""),[a,l]=B(""),[c,u]=B("");Im(t).then(d=>{if(d.exists()){const f=d.val();s(f.name),o(f.email),l(f.about),u(f.seeking)}else Vo(t,{name:n().displayName,email:n().email,about:"",seeking:""}),s(n().displayName),o(n().email),l(""),u("")});const h=()=>{Vo(t,{name:i(),email:r(),about:a(),seeking:c()})};return(()=>{var d=xm(),f=d.firstChild,_=f.nextSibling,g=_.nextSibling,m=g.nextSibling,E=m.nextSibling,w=E.nextSibling,M=w.nextSibling,L=M.nextSibling,W=L.nextSibling,ie=W.nextSibling,oe=ie.nextSibling,we=oe.nextSibling,_e=we.nextSibling,Ee=_e.nextSibling,Ut=Ee.nextSibling;return g.addEventListener("blur",ae=>s(ae.currentTarget.value)),w.addEventListener("blur",ae=>o(ae.currentTarget.value)),W.addEventListener("blur",ae=>l(ae.currentTarget.value)),we.addEventListener("blur",ae=>u(ae.currentTarget.value)),Ut.$$click=h,K(()=>g.value=i()),K(()=>w.value=r()),K(()=>W.value=a()),K(()=>we.value=c()),d})()}Nt(["click"]);var Mm=ve("<h3>Introduction to <!> at "),Fm=ve("<div>"),Um=ve("<div><h2>Generate Introduction</h2>Company Name: <input type=text><br>Recipient Name: <input type=text><br>Desired Role Title: <input type=text><br>About Company: <textarea></textarea><br>About the Role: <textarea></textarea><br><button>Generate"),$m=ve("<div>Loading...");function Wm(){const n=fc(),[e]=qs,[t,i]=B(""),[s,r]=B(""),[o,a]=B(""),[l,c]=B(""),[u,h]=B(""),[d,f]=B(!1),[_,g]=B(null),m=()=>{f(!0);const E={company:t(),query:"introduction",status:"submitted",user:e().uid,companyBio:l(),recipient:s(),relatedExperience:{},roleTitle:o(),roleDescription:u()},w=wm(kt(Ln(n),"queries")).key,M={};M["/queries/"+w]=E,Em(Ln(n),M),Cm(Ln(n,`/queries/${w}`),L=>{const W=L.val();W.status!=="submitted"&&g(W.response)})};return(()=>{var E=Um(),w=E.firstChild,M=w.nextSibling,L=M.nextSibling,W=L.nextSibling,ie=W.nextSibling,oe=ie.nextSibling,we=oe.nextSibling,_e=we.nextSibling,Ee=_e.nextSibling,Ut=Ee.nextSibling,ae=Ut.nextSibling,$t=ae.nextSibling,R=$t.nextSibling,N=R.nextSibling,q=N.nextSibling,Oe=q.nextSibling,Wt=Oe.nextSibling;return L.addEventListener("blur",x=>i(x.currentTarget.value)),oe.addEventListener("blur",x=>r(x.currentTarget.value)),Ee.addEventListener("blur",x=>a(x.currentTarget.value)),$t.addEventListener("blur",x=>c(x.currentTarget.value)),q.addEventListener("blur",x=>h(x.currentTarget.value)),Wt.$$click=m,Ue(E,Y(wt,{get when(){return d()},get children(){return Y(wt,{get when(){return _()},get fallback(){return $m()},get children(){return[(()=>{var x=Mm(),Bt=x.firstChild,De=Bt.nextSibling;return De.nextSibling,Ue(x,s,De),Ue(x,t,null),x})(),(()=>{var x=Fm();return Ue(x,_),x})()]}})}}),null),K(()=>L.value=t()),K(()=>oe.value=s()),K(()=>Ee.value=o()),K(()=>$t.value=l()),K(()=>q.value=u()),E})()}Nt(["click"]);const Bm=document.getElementById("root");Fc(()=>Y(bu,{root:vp,get children(){return[Y(Or,{path:"/super-apply",component:Lm}),Y(Or,{path:"/super-apply/intro",component:Wm})]}}),Bm);
