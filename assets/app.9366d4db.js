import{i as q,c as tt,e as nt,a as st,b as ot,d as rt,f as Pe,h as Te,g as at,j as it,k as ct,l as Ne,m as lt,s as ut,r as dt,n as h,o as Re,p as Ie,q as G,t as ft,w as pt,u as k,v as I,x as D,y as U,z as p,A as f,B as C,C as B,D as d,E as te,F as ne,G as u,H as g,I as se,_ as $,J as De,K as A,L as Be,M as O,N as oe,O as b,P as w,Q as M,R as ht,S as Oe,T as Y,U as de,V as P}from"./plugin-vue_export-helper.71bb0c0b.js";const _t="modulepreload",fe={},vt="/",Q=function(t,n){return!n||n.length===0?t():Promise.all(n.map(s=>{if(s=`${vt}${s}`,s in fe)return;fe[s]=!0;const o=s.endsWith(".css"),r=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${r}`))return;const a=document.createElement("link");if(a.rel=o?"stylesheet":_t,o||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),o)return new Promise((i,l)=>{a.addEventListener("load",i),a.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())},mt="http://www.w3.org/2000/svg",R=typeof document!="undefined"?document:null,pe=R&&R.createElement("template"),gt={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const o=t?R.createElementNS(mt,e):R.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:e=>R.createTextNode(e),createComment:e=>R.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>R.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,o,r){const a=n?n.previousSibling:t.lastChild;if(o&&(o===r||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===r||!(o=o.nextSibling)););else{pe.innerHTML=s?`<svg>${e}</svg>`:e;const i=pe.content;if(s){const l=i.firstChild;for(;l.firstChild;)i.appendChild(l.firstChild);i.removeChild(l)}t.insertBefore(i,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function bt(e,t,n){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function kt(e,t,n){const s=e.style,o=q(n);if(n&&!o){if(t&&!q(t))for(const r in t)n[r]==null&&Z(s,r,"");for(const r in n)Z(s,r,n[r])}else{const r=s.display;o?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=r)}}const he=/\s*!important$/;function Z(e,t,n){if(Pe(n))n.forEach(s=>Z(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=xt(e,t);he.test(n)?e.setProperty(Te(s),n.replace(he,""),"important"):e[s]=n}}const _e=["Webkit","Moz","ms"],J={};function xt(e,t){const n=J[t];if(n)return n;let s=at(t);if(s!=="filter"&&s in e)return J[t]=s;s=it(s);for(let o=0;o<_e.length;o++){const r=_e[o]+s;if(r in e)return J[t]=r}return t}const ve="http://www.w3.org/1999/xlink";function wt(e,t,n,s,o){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ve,t.slice(6,t.length)):e.setAttributeNS(ve,t,n);else{const r=ct(t);n==null||r&&!Ne(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function $t(e,t,n,s,o,r,a){if(t==="innerHTML"||t==="textContent"){s&&a(s,o,r),e[t]=n==null?"":n;return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){e._value=n;const c=i==="OPTION"?e.getAttribute("value"):e.value,_=n==null?"":n;c!==_&&(e.value=_),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Ne(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function Lt(e,t,n,s){e.addEventListener(t,n,s)}function yt(e,t,n,s){e.removeEventListener(t,n,s)}function St(e,t,n,s,o=null){const r=e._vei||(e._vei={}),a=r[t];if(s&&a)a.value=s;else{const[i,l]=Et(t);if(s){const c=r[t]=Pt(s,o);Lt(e,i,c,l)}else a&&(yt(e,i,a,l),r[t]=void 0)}}const me=/(?:Once|Passive|Capture)$/;function Et(e){let t;if(me.test(e)){t={};let s;for(;s=e.match(me);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Te(e.slice(2)),t]}let K=0;const At=Promise.resolve(),Ct=()=>K||(At.then(()=>K=0),K=Date.now());function Pt(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;lt(Tt(s,n.value),t,5,[s])};return n.value=e,n.attached=Ct(),n}function Tt(e,t){if(Pe(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>o=>!o._stopped&&s&&s(o))}else return t}const ge=/^on[a-z]/,Nt=(e,t,n,s,o=!1,r,a,i,l)=>{t==="class"?bt(e,s,o):t==="style"?kt(e,n,s):st(t)?ot(t)||St(e,t,n,s,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Rt(e,t,s,o))?$t(e,t,s,r,a,i,l):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),wt(e,t,s,o))};function Rt(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&ge.test(t)&&rt(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ge.test(t)&&q(n)?!1:t in e}const It=nt({patchProp:Nt},gt);let V,be=!1;function Dt(){return V=be?V:tt(It),be=!0,V}const Bt=(...e)=>{const t=Dt().createApp(...e),{mount:n}=t;return t.mount=s=>{const o=Ot(s);if(o)return n(o,!0,o instanceof SVGElement)},t};function Ot(e){return q(e)?document.querySelector(e):e}var Ht='{"lang":"en-US","title":"Jogiter`s mind","description":"EveryThing about Me!","base":"/","head":[],"themeConfig":{"repo":"Jogiter/jogiter.github.com","docsDir":"docs","docsBranch":"vitepress","editLinks":true,"editLinkText":"\u5728GitHub\u4E0A\u7F16\u8F91\u6B64\u9875\u9762","lastUpdated":"\u6700\u540E\u66F4\u65B0","algolia":{"appId":"3FNT30KAKM","apiKey":"6cba52928cfdc70de6b230fbc7fedf10","indexName":"jogiter-blog"},"nav":[{"text":"\u4E2A\u4EBA\u7B80\u4ECB","link":"/about/"},{"text":"Awesome \u5B66\u4E60\u94FE\u63A5","link":"/reading/"},{"text":"\u6742\u6587","items":[{"text":"books-to-read","link":"essay/books-to-read"},{"text":"rework","link":"essay/rework"},{"text":"the-21-laws-of-leadership","link":"essay/the-21-laws-of-leadership"}]},{"text":"\u60C5\u611F","items":[{"text":"\u5F53\u4EBA\u4EEC\u8BA9\u4F60\u5931\u671B\u65F6\uFF0C\u67096\u79CD\u65B9\u6CD5\u53EF\u4EE5\u7167\u987E\u597D\u81EA\u5DF1","link":"emotion/\u5F53\u4EBA\u4EEC\u8BA9\u4F60\u5931\u671B\u65F6\uFF0C\u67096\u79CD\u65B9\u6CD5\u53EF\u4EE5\u7167\u987E\u597D\u81EA\u5DF1"}]},{"text":"\u793E\u4EA4\u8D26\u53F7","items":[{"text":"Github","link":"https://github.com/Jogiter"},{"text":"\u90AE\u7BB1","link":"mailto:jogiter.g@gmail.com"}]}],"sidebar":{"/emotion":"auto","/essay":"auto","/about":false,"/reading":false,"/":[{"text":"\u6587\u7AE0","children":[{"text":"AIGC\u89C6\u9891\u5B57\u5E55","link":"tech/AIGC\u89C6\u9891\u5B57\u5E55"},{"text":"DDD","link":"tech/DDD"},{"text":"Nodejs-\u6743\u5A01\u6307\u5357","link":"tech/Nodejs-\u6743\u5A01\u6307\u5357"},{"text":"Typescript-guides","link":"tech/Typescript-guides"},{"text":"eventloop-task-and-microtasks","link":"tech/eventloop-task-and-microtasks"},{"text":"fetch-API","link":"tech/fetch-API"},{"text":"ffmpeg","link":"tech/ffmpeg"},{"text":"font-face","link":"tech/font-face"},{"text":"frontend-optimization","link":"tech/frontend-optimization"},{"text":"git-tutorial","link":"tech/git-tutorial"},{"text":"higher-order-function","link":"tech/higher-order-function"},{"text":"i18n","link":"tech/i18n"},{"text":"jsonp-vs-cors","link":"tech/jsonp-vs-cors"},{"text":"lerna-with-tsdx","link":"tech/lerna-with-tsdx"},{"text":"macbook-\u5F00\u53D1\u73AF\u5883\u914D\u7F6E","link":"tech/macbook-\u5F00\u53D1\u73AF\u5883\u914D\u7F6E"},{"text":"markdown \u89E3\u6790\u53CA\u8BED\u6CD5\u9AD8\u4EAE\u8C03\u7814","link":"tech/markdown \u89E3\u6790\u53CA\u8BED\u6CD5\u9AD8\u4EAE\u8C03\u7814"},{"text":"mediaSourceExtension","link":"tech/mediaSourceExtension"},{"text":"nest.js and typeOrm","link":"tech/nest.js and typeOrm"},{"text":"pwa","link":"tech/pwa"},{"text":"string-compare","link":"tech/string-compare"},{"text":"taro \u5C0F\u7A0B\u5E8F\u5F00\u53D1\u5165\u95E8\u6307\u5317","link":"tech/taro \u5C0F\u7A0B\u5E8F\u5F00\u53D1\u5165\u95E8\u6307\u5317"},{"text":"tdd","link":"tech/tdd"},{"text":"using-virtualbox-test-old-ie","link":"tech/using-virtualbox-test-old-ie"},{"text":"vue2-composition-api-faq","link":"tech/vue2-composition-api-faq"},{"text":"webpack-config","link":"tech/webpack-config"},{"text":"webrtc","link":"tech/webrtc"},{"text":"wechat-save-and-share-image","link":"tech/wechat-save-and-share-image"},{"text":"\u3010\u8BD1\u3011CentOS 8 \u670D\u52A1\u5668\u521D\u59CB\u5316\u8BBE\u7F6E","link":"tech/\u3010\u8BD1\u3011CentOS 8 \u670D\u52A1\u5668\u521D\u59CB\u5316\u8BBE\u7F6E"},{"text":"\u3010\u8BD1\u3011\u4EC0\u4E48\u662F Web3","link":"tech/\u3010\u8BD1\u3011\u4EC0\u4E48\u662F Web3"},{"text":"\u3010\u8BD1\u3011\u5728-centeros8-\u4E0A\u90E8\u7F72Node-js\u5E94\u7528\u7A0B\u5E8F","link":"tech/\u3010\u8BD1\u3011\u5728-centeros8-\u4E0A\u90E8\u7F72Node-js\u5E94\u7528\u7A0B\u5E8F"},{"text":"\u3010\u8F6C\u3011Javascript\u4E2D\u76848\u79CD\u5E38\u89C1\u6570\u636E\u7ED3\u6784","link":"tech/\u3010\u8F6C\u3011Javascript\u4E2D\u76848\u79CD\u5E38\u89C1\u6570\u636E\u7ED3\u6784"},{"text":"\u4F7F\u7528-uni-app-\u5F00\u53D1\u5C0F\u7A0B\u5E8F","link":"tech/\u4F7F\u7528-uni-app-\u5F00\u53D1\u5C0F\u7A0B\u5E8F"},{"text":"\u535A\u5BA2\u6DFB\u52A0docSearch","link":"tech/\u535A\u5BA2\u6DFB\u52A0docSearch"},{"text":"\u6253\u9020\u8212\u9002\u9AD8\u6548\u7684\u524D\u7AEF\u5F00\u53D1\u73AF\u5883","link":"tech/\u6253\u9020\u8212\u9002\u9AD8\u6548\u7684\u524D\u7AEF\u5F00\u53D1\u73AF\u5883"},{"text":"\u642D\u5EFA\u79C1\u6709-npm","link":"tech/\u642D\u5EFA\u79C1\u6709-npm"},{"text":"\u79FB\u52A8\u7AEF\u9002\u914D","link":"tech/\u79FB\u52A8\u7AEF\u9002\u914D"}]}]}},"locales":{},"langs":{}}';const He=/^https?:/i,E=typeof window!="undefined";function Ut(e,t){t.sort((n,s)=>{const o=s.split("/").length-n.split("/").length;return o!==0?o:s.length-n.length});for(const n of t)if(e.startsWith(n))return n}function ke(e,t){const n=Ut(t,Object.keys(e));return n?e[n]:void 0}function Mt(e){const{locales:t}=e.themeConfig||{},n=e.locales;return t&&n?Object.keys(t).reduce((s,o)=>(s[o]={label:t[o].label,lang:n[o].lang},s),{}):{}}function jt(e,t){t=qt(e,t);const n=ke(e.locales||{},t),s=ke(e.themeConfig.locales||{},t);return Object.assign({},e,n,{themeConfig:Object.assign({},e.themeConfig,s,{locales:{}}),lang:(n||e).lang,locales:{},langs:Mt(e)})}function qt(e,t){if(!E)return t;const n=e.base,s=n.endsWith("/")?n.slice(0,-1):n;return t.slice(s.length)}const Ue=Symbol(),re=ut(zt(Ht));function zt(e){return dt(JSON.parse(e))}function Ft(e){const t=h(()=>jt(re.value,e.path));return{site:t,theme:h(()=>t.value.themeConfig),page:h(()=>e.data),frontmatter:h(()=>e.data.frontmatter),lang:h(()=>t.value.lang),localePath:h(()=>{const{langs:n,lang:s}=t.value,o=Object.keys(n).find(r=>n[r].lang===s);return H(o||"/")}),title:h(()=>e.data.title?e.data.title+" | "+t.value.title:t.value.title),description:h(()=>e.data.description||t.value.description)}}function y(){const e=Re(Ue);if(!e)throw new Error("vitepress data not properly injected in app");return e}function Wt(e,t){return`${e}${t}`.replace(/\/+/g,"/")}function H(e){return He.test(e)?e:Wt(re.value.base,e)}function Me(e){let t=e.replace(/\.html$/,"");if(t=decodeURIComponent(t),t.endsWith("/")&&(t+="index"),E){const n="/";t=t.slice(n.length).replace(/\//g,"_")+".md";const s=__VP_HASH_MAP__[t.toLowerCase()];t=`${n}assets/${t}.${s}.js`}else t=`./${t.slice(1).replace(/\//g,"_")}.md.js`;return t}const je=Symbol(),xe="http://a.com",Gt=()=>({path:"/",component:null,data:null});function Jt(e,t){const n=Ie(Gt());function s(a=E?location.href:"/"){const i=new URL(a,xe);return!i.pathname.endsWith("/")&&!i.pathname.endsWith(".html")&&(i.pathname+=".html",a=i.pathname+i.search+i.hash),E&&(history.replaceState({scrollPosition:window.scrollY},document.title),history.pushState(null,"",a)),r(a)}let o=null;async function r(a,i=0){const l=new URL(a,xe),c=o=l.pathname;try{let _=e(c);if("then"in _&&typeof _.then=="function"&&(_=await _),o===c){o=null;const{default:v,__pageData:L}=_;if(!v)throw new Error(`Invalid route component: ${v}`);n.path=c,n.component=G(v),n.data=G(JSON.parse(L)),E&&ft(()=>{if(l.hash&&!i){let x=null;try{x=document.querySelector(decodeURIComponent(l.hash))}catch(S){console.warn(S)}if(x){we(x,l.hash);return}}window.scrollTo(0,i)})}}catch(_){_.message.match(/fetch/)||console.error(_),o===c&&(o=null,n.path=c,n.component=t?G(t):null)}}return E&&(window.addEventListener("click",a=>{const i=a.target.closest("a");if(i){const{href:l,protocol:c,hostname:_,pathname:v,hash:L,target:x}=i,S=window.location,N=v.match(/\.\w+$/);!a.ctrlKey&&!a.shiftKey&&!a.altKey&&!a.metaKey&&x!=="_blank"&&c===S.protocol&&_===S.hostname&&!(N&&N[0]!==".html")&&(a.preventDefault(),v===S.pathname?L&&L!==S.hash&&(history.pushState(null,"",L),window.dispatchEvent(new Event("hashchange")),we(i,L,i.classList.contains("header-anchor"))):s(l))}},{capture:!0}),window.addEventListener("popstate",a=>{r(location.href,a.state&&a.state.scrollPosition||0)}),window.addEventListener("hashchange",a=>{a.preventDefault()})),{route:n,go:s}}function Kt(){const e=Re(je);if(!e)throw new Error("useRouter() is called without provider.");return e}function T(){return Kt().route}function we(e,t,n=!1){let s=null;try{s=e.classList.contains(".header-anchor")?e:document.querySelector(decodeURIComponent(t))}catch(o){console.warn(o)}if(s){const o=s.offsetTop;!n||Math.abs(o-window.scrollY)>window.innerHeight?window.scrollTo(0,o):window.scrollTo({left:0,top:o,behavior:"smooth"})}}function Vt(e,t){let n=[],s=!0;const o=r=>{if(s){s=!1;return}const a=[],i=Math.min(n.length,r.length);for(let l=0;l<i;l++){let c=n[l];const[_,v,L=""]=r[l];if(c.tagName.toLocaleLowerCase()===_){for(const x in v)c.getAttribute(x)!==v[x]&&c.setAttribute(x,v[x]);for(let x=0;x<c.attributes.length;x++){const S=c.attributes[x].name;S in v||c.removeAttribute(S)}c.innerHTML!==L&&(c.innerHTML=L)}else document.head.removeChild(c),c=$e(r[l]),document.head.append(c);a.push(c)}n.slice(i).forEach(l=>document.head.removeChild(l)),r.slice(i).forEach(l=>{const c=$e(l);document.head.appendChild(c),a.push(c)}),n=a};pt(()=>{const r=e.data,a=t.value,i=r&&r.title,l=r&&r.description,c=r&&r.frontmatter.head;document.title=(i?i+" | ":"")+a.title,document.querySelector("meta[name=description]").setAttribute("content",l||a.description),o([...c?Yt(c):[]])})}function $e([e,t,n]){const s=document.createElement(e);for(const o in t)s.setAttribute(o,t[o]);return n&&(s.innerHTML=n),s}function Xt(e){return e[0]==="meta"&&e[1]&&e[1].name==="description"}function Yt(e){return e.filter(t=>!Xt(t))}const Qt=k({name:"VitePressContent",setup(){const e=T();return()=>I("div",{style:{position:"relative"}},[e.component?I(e.component):null])}});const Zt=e=>(te("data-v-da3fdc1c"),e=e(),ne(),e),en=Zt(()=>f("p",{class:"title"},"Debug",-1)),tn={class:"block"};k({__name:"Debug",setup(e){const t=y(),n=D(null),s=D(!1),o=Ie(t);return U(s,r=>{r||(n.value.scrollTop=0)}),(r,a)=>(d(),p("div",{class:B(["debug",{open:s.value}]),ref_key:"el",ref:n,onClick:a[0]||(a[0]=i=>s.value=!s.value)},[en,f("pre",tn,C(o),1)],2))}});const nn=/#.*$/,sn=/(index)?\.(md|html)$/,z=/\/$/,on=/^[a-z]+:/i;function ae(e){return Array.isArray(e)}function ie(e){return on.test(e)}function rn(e,t){if(t===void 0)return!1;const n=Le(`/${e.data.relativePath}`),s=Le(t);return n===s}function Le(e){return decodeURI(e).replace(nn,"").replace(sn,"")}function an(e,t){const n=e.endsWith("/"),s=t.startsWith("/");return n&&s?e.slice(0,-1)+t:!n&&!s?`${e}/${t}`:e+t}function ee(e){return/^\//.test(e)?e:`/${e}`}function qe(e){return e.replace(/(index)?(\.(md|html))?$/,"")||"/"}function cn(e){return e===!1||e==="auto"||ae(e)}function ln(e){return e.children!==void 0}function un(e){return ae(e)?e.length===0:!e}function ce(e,t){if(cn(e))return e;t=ee(t);for(const n in e)if(t.startsWith(ee(n)))return e[n];return"auto"}function ze(e){return e.reduce((t,n)=>(n.link&&t.push({text:n.text,link:qe(n.link)}),ln(n)&&(t=[...t,...ze(n.children)]),t),[])}const dn=["href","aria-label"],fn=["src"],pn=k({__name:"NavBarTitle",setup(e){const{site:t,theme:n,localePath:s}=y();return(o,r)=>(d(),p("a",{class:"nav-bar-title",href:u(s),"aria-label":`${u(t).title}, back to home`},[u(n).logo?(d(),p("img",{key:0,class:"logo",src:u(H)(u(n).logo),alt:"Logo"},null,8,fn)):g("v-if",!0),se(" "+C(u(t).title),1)],8,dn))}});var hn=$(pn,[["__scopeId","data-v-19158655"]]);function _n(){const{site:e,localePath:t,theme:n}=y();return h(()=>{const s=e.value.langs,o=Object.keys(s);if(o.length<2)return null;const a=T().path.replace(t.value,""),i=o.map(c=>({text:s[c].label,link:`${c}${a}`}));return{text:n.value.selectText||"Languages",items:i}})}const vn=["GitHub","GitLab","Bitbucket"].map(e=>[e,new RegExp(e,"i")]);function mn(){const{site:e}=y();return h(()=>{const t=e.value.themeConfig,n=t.docsRepo||t.repo;if(!n)return null;const s=gn(n);return{text:bn(s,t.repoLabel),link:s}})}function gn(e){return He.test(e)?e:`https://github.com/${e}`}function bn(e,t){if(t)return t;const n=e.match(/^https?:\/\/[^/]+/);if(!n)return"Source";const s=vn.find(([o,r])=>r.test(n[0]));return s&&s[0]?s[0]:"Source"}function Fe(e){const t=T(),n=ie(e.value.link);return{props:h(()=>{const o=ye(`/${t.data.relativePath}`);let r=!1;if(e.value.activeMatch)r=new RegExp(e.value.activeMatch).test(o);else{const a=ye(e.value.link);r=a==="/"?a===o:o.startsWith(a)}return{class:{active:r,isExternal:n},href:n?e.value.link:H(e.value.link),target:e.value.target||(n?"_blank":null),rel:e.value.rel||(n?"noopener noreferrer":null),"aria-label":e.value.ariaLabel}}),isExternal:n}}function ye(e){return e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\.(html|md)$/,"").replace(/\/index$/,"/")}const kn={},xn={class:"icon outbound",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},wn=f("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"},null,-1),$n=f("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"},null,-1),Ln=[wn,$n];function yn(e,t){return d(),p("svg",xn,Ln)}var le=$(kn,[["render",yn]]);const Sn={class:"nav-link"},En=k({__name:"NavLink",props:{item:{}},setup(e){const n=De(e),{props:s,isExternal:o}=Fe(n.item);return(r,a)=>(d(),p("div",Sn,[f("a",Be({class:"item"},u(s)),[se(C(r.item.text)+" ",1),u(o)?(d(),A(le,{key:0})):g("v-if",!0)],16)]))}});var Se=$(En,[["__scopeId","data-v-33cbaa06"]]);const An=e=>(te("data-v-9e81def8"),e=e(),ne(),e),Cn={class:"nav-dropdown-link-item"},Pn=An(()=>f("span",{class:"arrow"},null,-1)),Tn={class:"text"},Nn={class:"icon"},Rn=k({__name:"NavDropdownLinkItem",props:{item:{}},setup(e){const n=De(e),{props:s,isExternal:o}=Fe(n.item);return(r,a)=>(d(),p("div",Cn,[f("a",Be({class:"item"},u(s)),[Pn,f("span",Tn,C(r.item.text),1),f("span",Nn,[u(o)?(d(),A(le,{key:0})):g("v-if",!0)])],16)]))}});var In=$(Rn,[["__scopeId","data-v-9e81def8"]]);const Dn=["aria-label"],Bn={class:"button-text"},On={class:"dialog"},Hn=k({__name:"NavDropdownLink",props:{item:{}},setup(e){const t=T(),n=D(!1);U(()=>t.path,()=>{n.value=!1});function s(){n.value=!n.value}return(o,r)=>(d(),p("div",{class:B(["nav-dropdown-link",{open:n.value}])},[f("button",{class:"button","aria-label":o.item.ariaLabel,onClick:s},[f("span",Bn,C(o.item.text),1),f("span",{class:B(["button-arrow",n.value?"down":"right"])},null,2)],8,Dn),f("ul",On,[(d(!0),p(O,null,oe(o.item.items,a=>(d(),p("li",{key:a.text,class:"dialog-item"},[b(In,{item:a},null,8,["item"])]))),128))])],2))}});var Ee=$(Hn,[["__scopeId","data-v-15a3fdea"]]);const Un={key:0,class:"nav-links"},Mn={key:1,class:"item"},jn={key:2,class:"item"},qn=k({__name:"NavLinks",setup(e){const{theme:t}=y(),n=_n(),s=mn(),o=h(()=>t.value.nav||s.value||n.value);return(r,a)=>o.value?(d(),p("nav",Un,[u(t).nav?(d(!0),p(O,{key:0},oe(u(t).nav,i=>(d(),p("div",{key:i.text,class:"item"},[i.items?(d(),A(Ee,{key:0,item:i},null,8,["item"])):(d(),A(Se,{key:1,item:i},null,8,["item"]))]))),128)):g("v-if",!0),u(n)?(d(),p("div",Mn,[b(Ee,{item:u(n)},null,8,["item"])])):g("v-if",!0),u(s)?(d(),p("div",jn,[b(Se,{item:u(s)},null,8,["item"])])):g("v-if",!0)])):g("v-if",!0)}});var We=$(qn,[["__scopeId","data-v-043d24b5"]]);const zn={emits:["toggle"]},Fn=f("svg",{class:"icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"},[f("path",{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z",class:""})],-1),Wn=[Fn];function Gn(e,t,n,s,o,r){return d(),p("div",{class:"sidebar-button",onClick:t[0]||(t[0]=a=>e.$emit("toggle"))},Wn)}var Jn=$(zn,[["render",Gn]]);const Kn=e=>(te("data-v-7b01b921"),e=e(),ne(),e),Vn={class:"nav-bar"},Xn=Kn(()=>f("div",{class:"flex-grow"},null,-1)),Yn={class:"nav"},Qn=k({__name:"NavBar",emits:["toggle"],setup(e){return(t,n)=>(d(),p("header",Vn,[b(Jn,{onToggle:n[0]||(n[0]=s=>t.$emit("toggle"))}),b(hn),Xn,f("div",Yn,[b(We)]),w(t.$slots,"search",{},void 0,!0)]))}});var Zn=$(Qn,[["__scopeId","data-v-7b01b921"]]);function es(){let e=null,t=null;const n=rs(s,300);function s(){const a=ts(),i=ns(a);for(let l=0;l<i.length;l++){const c=i[l],_=i[l+1],[v,L]=os(l,c,_);if(v){history.replaceState(null,document.title,L||" "),o(L);return}}}function o(a){if(r(t),r(e),t=document.querySelector(`.sidebar a[href="${a}"]`),!t)return;t.classList.add("active");const i=t.closest(".sidebar-links > ul > li");i&&i!==t.parentElement?(e=i.querySelector("a"),e&&e.classList.add("active")):e=null}function r(a){a&&a.classList.remove("active")}M(()=>{s(),window.addEventListener("scroll",n)}),ht(()=>{o(decodeURIComponent(location.hash))}),Oe(()=>{window.removeEventListener("scroll",n)})}function ts(){return[].slice.call(document.querySelectorAll(".sidebar a.sidebar-link-item"))}function ns(e){return[].slice.call(document.querySelectorAll(".header-anchor")).filter(t=>e.some(n=>n.hash===t.hash))}function ss(){return document.querySelector(".nav-bar").offsetHeight}function Ae(e){const t=ss();return e.parentElement.offsetTop-t-15}function os(e,t,n){const s=window.scrollY;return e===0&&s===0?[!0,null]:s<Ae(t)?[!1,null]:!n||s<Ae(n)?[!0,decodeURIComponent(t.hash)]:[!1,null]}function rs(e,t){let n,s=!1;return()=>{n&&clearTimeout(n),s?n=setTimeout(e,t):(e(),s=!0,setTimeout(()=>{s=!1},t))}}function as(){const e=T(),{site:t}=y();return es(),h(()=>{const n=e.data.headers,s=e.data.frontmatter.sidebar,o=e.data.frontmatter.sidebarDepth;if(s===!1)return[];if(s==="auto")return Ce(n,o);const r=ce(t.value.themeConfig.sidebar,e.data.relativePath);return r===!1?[]:r==="auto"?Ce(n,o):r})}function Ce(e,t){const n=[];if(e===void 0)return[];let s;return e.forEach(({level:o,title:r,slug:a})=>{if(o-1>t)return;const i={text:r,link:`#${a}`};o===2?(s=i,n.push(i)):s&&(s.children||(s.children=[])).push(i)}),n}const Ge=e=>{const t=T(),{site:n,frontmatter:s}=y(),o=e.depth||1,r=s.value.sidebarDepth||1/0,a=t.data.headers,i=e.item.text,l=is(n.value.base,e.item.link),c=e.item.children,_=rn(t,e.item.link),v=o<r?Je(_,c,a,o+1):null;return I("li",{class:"sidebar-link"},[I(l?"a":"p",{class:{"sidebar-link-item":!0,active:_},href:l},i),v])};function is(e,t){return t===void 0||t.startsWith("#")?t:an(e,t)}function Je(e,t,n,s=1){return t&&t.length>0?I("ul",{class:"sidebar-links"},t.map(o=>I(Ge,{item:o,depth:s}))):e&&n?Je(!1,cs(n),void 0,s):null}function cs(e){return Ke(ls(e))}function ls(e){e=e.map(n=>Object.assign({},n));let t;return e.forEach(n=>{n.level===2?t=n:t&&(t.children||(t.children=[])).push(n)}),e.filter(n=>n.level===2)}function Ke(e){return e.map(t=>({text:t.title,link:`#${t.slug}`,children:t.children?Ke(t.children):void 0}))}const us={key:0,class:"sidebar-links"},ds=k({__name:"SideBarLinks",setup(e){const t=as();return(n,s)=>u(t).length>0?(d(),p("ul",us,[(d(!0),p(O,null,oe(u(t),o=>(d(),A(u(Ge),{item:o},null,8,["item"]))),256))])):g("v-if",!0)}});const fs=k({__name:"SideBar",props:{open:{type:Boolean}},setup(e){return(t,n)=>(d(),p("aside",{class:B(["sidebar",{open:t.open}])},[b(We,{class:"nav"}),w(t.$slots,"sidebar-top",{},void 0,!0),b(ds),w(t.$slots,"sidebar-bottom",{},void 0,!0)],2))}});var ps=$(fs,[["__scopeId","data-v-219eda98"]]);const hs=/bitbucket.org/;function _s(){const{page:e,theme:t,frontmatter:n}=y(),s=h(()=>{const{repo:r,docsDir:a="",docsBranch:i="master",docsRepo:l=r,editLinks:c}=t.value,_=n.value.editLink!=null?n.value.editLink:c,{relativePath:v}=e.value;return!_||!v||!r?null:vs(r,l,a,i,v)}),o=h(()=>t.value.editLinkText||"Edit this page");return{url:s,text:o}}function vs(e,t,n,s,o){return hs.test(e)?gs(e,t,n,s,o):ms(e,t,n,s,o)}function ms(e,t,n,s,o){return(ie(t)?t:`https://github.com/${t}`).replace(z,"")+`/edit/${s}/`+(n?n.replace(z,"")+"/":"")+o}function gs(e,t,n,s,o){return(ie(t)?t:e).replace(z,"")+`/src/${s}/`+(n?n.replace(z,"")+"/":"")+o+`?mode=edit&spa=0&at=${s}&fileviewer=file-view-default`}const bs={class:"edit-link"},ks=["href"],xs=k({__name:"EditLink",setup(e){const{url:t,text:n}=_s();return(s,o)=>(d(),p("div",bs,[u(t)?(d(),p("a",{key:0,class:"link",href:u(t),target:"_blank",rel:"noopener noreferrer"},[se(C(u(n))+" ",1),b(le,{class:"icon"})],8,ks)):g("v-if",!0)]))}});var ws=$(xs,[["__scopeId","data-v-6dc6f5be"]]);const $s={key:0,class:"last-updated"},Ls={class:"prefix"},ys={class:"datetime"},Ss=k({__name:"LastUpdated",setup(e){const{theme:t,page:n}=y(),s=h(()=>{const a=t.value.lastUpdated;return a!==void 0&&a!==!1}),o=h(()=>{const a=t.value.lastUpdated;return a===!0?"Last Updated":a}),r=D("");return M(()=>{r.value=new Date(n.value.lastUpdated).toLocaleString("en-US")}),(a,i)=>s.value?(d(),p("p",$s,[f("span",Ls,C(o.value)+":",1),f("span",ys,C(r.value),1)])):g("v-if",!0)}});var Es=$(Ss,[["__scopeId","data-v-6a1b94eb"]]);const As={class:"page-footer"},Cs={class:"edit"},Ps={class:"updated"},Ts=k({__name:"PageFooter",setup(e){return(t,n)=>(d(),p("footer",As,[f("div",Cs,[b(ws)]),f("div",Ps,[b(Es)])]))}});var Ns=$(Ts,[["__scopeId","data-v-001a5369"]]);function Rs(){const{page:e,theme:t}=y(),n=h(()=>qe(ee(e.value.relativePath))),s=h(()=>{const l=ce(t.value.sidebar,n.value);return ae(l)?ze(l):[]}),o=h(()=>s.value.findIndex(l=>l.link===n.value)),r=h(()=>{if(t.value.nextLinks!==!1&&o.value>-1&&o.value<s.value.length-1)return s.value[o.value+1]}),a=h(()=>{if(t.value.prevLinks!==!1&&o.value>0)return s.value[o.value-1]}),i=h(()=>!!r.value||!!a.value);return{next:r,prev:a,hasLinks:i}}const Is={},Ds={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Bs=f("path",{d:"M19,11H7.4l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-7,7c-0.1,0.1-0.2,0.2-0.2,0.3c-0.1,0.2-0.1,0.5,0,0.8c0.1,0.1,0.1,0.2,0.2,0.3l7,7c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L7.4,13H19c0.6,0,1-0.4,1-1S19.6,11,19,11z"},null,-1),Os=[Bs];function Hs(e,t){return d(),p("svg",Ds,Os)}var Us=$(Is,[["render",Hs]]);const Ms={},js={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},qs=f("path",{d:"M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"},null,-1),zs=[qs];function Fs(e,t){return d(),p("svg",js,zs)}var Ws=$(Ms,[["render",Fs]]);const Gs={key:0,class:"next-and-prev-link"},Js={class:"container"},Ks={class:"prev"},Vs=["href"],Xs={class:"text"},Ys={class:"next"},Qs=["href"],Zs={class:"text"},eo=k({__name:"NextAndPrevLinks",setup(e){const{hasLinks:t,prev:n,next:s}=Rs();return(o,r)=>u(t)?(d(),p("div",Gs,[f("div",Js,[f("div",Ks,[u(n)?(d(),p("a",{key:0,class:"link",href:u(H)(u(n).link)},[b(Us,{class:"icon icon-prev"}),f("span",Xs,C(u(n).text),1)],8,Vs)):g("v-if",!0)]),f("div",Ys,[u(s)?(d(),p("a",{key:0,class:"link",href:u(H)(u(s).link)},[f("span",Zs,C(u(s).text),1),b(Ws,{class:"icon icon-next"})],8,Qs)):g("v-if",!0)])])])):g("v-if",!0)}});var to=$(eo,[["__scopeId","data-v-d1d6e5da"]]);const no={class:"page"},so={class:"container"},oo=k({__name:"Page",setup(e){return(t,n)=>{const s=Y("Content");return d(),p("main",no,[f("div",so,[w(t.$slots,"top",{},void 0,!0),b(s,{class:"content"}),b(Ns),b(to),w(t.$slots,"bottom",{},void 0,!0)])])}}});var ro=$(oo,[["__scopeId","data-v-1881bce0"]]);const ao={key:0,id:"ads-container"},io=k({__name:"Layout",setup(e){const t=de(()=>Q(()=>import("./Home.4b66fb27.js"),["assets/Home.4b66fb27.js","assets/plugin-vue_export-helper.71bb0c0b.js"])),n=()=>null,s=n,o=n,r=de(()=>Q(()=>import("./AlgoliaSearchBox.4fd3e7bf.js"),["assets/AlgoliaSearchBox.4fd3e7bf.js","assets/plugin-vue_export-helper.71bb0c0b.js"])),a=T(),{site:i,page:l,theme:c,frontmatter:_}=y(),v=h(()=>!!_.value.customLayout),L=h(()=>!!_.value.home),x=h(()=>Object.keys(i.value.langs).length>1),S=h(()=>{const m=c.value;return _.value.navbar===!1||m.navbar===!1?!1:i.value.title||m.logo||m.repo||m.nav}),N=D(!1),Xe=h(()=>_.value.home||_.value.sidebar===!1?!1:!un(ce(c.value.sidebar,a.data.relativePath))),W=m=>{N.value=typeof m=="boolean"?m:!N.value},Ye=W.bind(null,!1);U(a,Ye);const Qe=h(()=>[{"no-navbar":!S.value,"sidebar-open":N.value,"no-sidebar":!Xe.value}]);return(m,ue)=>{const Ze=Y("Content"),et=Y("Debug");return d(),p(O,null,[f("div",{class:B(["theme",Qe.value])},[S.value?(d(),A(Zn,{key:0,onToggle:W},{search:P(()=>[w(m.$slots,"navbar-search",{},()=>[u(c).algolia?(d(),A(u(r),{key:0,options:u(c).algolia,multilang:x.value},null,8,["options","multilang"])):g("v-if",!0)])]),_:3})):g("v-if",!0),b(ps,{open:N.value},{"sidebar-top":P(()=>[w(m.$slots,"sidebar-top")]),"sidebar-bottom":P(()=>[w(m.$slots,"sidebar-bottom")]),_:3},8,["open"]),g(" TODO: make this button accessible "),f("div",{class:"sidebar-mask",onClick:ue[0]||(ue[0]=Lo=>W(!1))}),v.value?(d(),A(Ze,{key:1})):L.value?(d(),p(O,{key:2},[g(" A slot for customizing the entire homepage easily "),w(m.$slots,"home",{},()=>[b(u(t),null,{hero:P(()=>[w(m.$slots,"home-hero")]),features:P(()=>[w(m.$slots,"home-features")]),footer:P(()=>[w(m.$slots,"home-footer")]),_:3})])],64)):(d(),A(ro,{key:3},{top:P(()=>[w(m.$slots,"page-top-ads",{},()=>[u(c).carbonAds&&u(c).carbonAds.carbon?(d(),p("div",ao,[(d(),A(u(s),{key:"carbon"+u(l).relativePath,code:u(c).carbonAds.carbon,placement:u(c).carbonAds.placement},null,8,["code","placement"]))])):g("v-if",!0)]),w(m.$slots,"page-top")]),bottom:P(()=>[w(m.$slots,"page-bottom"),w(m.$slots,"page-bottom-ads",{},()=>[u(c).carbonAds&&u(c).carbonAds.custom?(d(),A(u(o),{key:"custom"+u(l).relativePath,code:u(c).carbonAds.custom,placement:u(c).carbonAds.placement},null,8,["code","placement"])):g("v-if",!0)])]),_:3}))],2),b(et)],64)}}}),co={class:"theme"},lo=f("h1",null,"404",-1),uo=["href"],fo=k({__name:"NotFound",setup(e){const{site:t}=y(),n=["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."];function s(){return n[Math.floor(Math.random()*n.length)]}return(o,r)=>(d(),p("div",co,[lo,f("blockquote",null,C(s()),1),f("a",{href:u(t).base,"aria-label":"go to home"},"Take me home.",8,uo)]))}}),po={Layout:io,NotFound:fo};var F={...po};const X=new Set,Ve=()=>document.createElement("link"),ho=e=>{const t=Ve();t.rel="prefetch",t.href=e,document.head.appendChild(t)},_o=e=>{const t=new XMLHttpRequest;t.open("GET",e,t.withCredentials=!0),t.send()};let j;const vo=E&&(j=Ve())&&j.relList&&j.relList.supports&&j.relList.supports("prefetch")?ho:_o;function mo(){if(!E||!window.IntersectionObserver)return;let e;if((e=navigator.connection)&&(e.saveData||/2g/.test(e.effectiveType)))return;const t=window.requestIdleCallback||setTimeout;let n=null;const s=()=>{n&&n.disconnect(),n=new IntersectionObserver(r=>{r.forEach(a=>{if(a.isIntersecting){const i=a.target;n.unobserve(i);const{pathname:l}=i;if(!X.has(l)){X.add(l);const c=Me(l);vo(c)}}})}),t(()=>{document.querySelectorAll("#app a").forEach(r=>{const{target:a,hostname:i,pathname:l}=r,c=l.match(/\.\w+$/);c&&c[0]!==".html"||a!=="_blank"&&i===location.hostname&&(l!==location.pathname?n.observe(r):X.add(l))})})};M(s);const o=T();U(()=>o.path,s),Oe(()=>{n&&n.disconnect()})}const go=k({setup(e,{slots:t}){const n=D(!1);return M(()=>{n.value=!0}),()=>n.value&&t.default?t.default():null}}),bo=F.NotFound||(()=>"404 Not Found"),ko={name:"VitePressApp",setup(){const{site:e}=y();return M(()=>{U(()=>e.value.lang,t=>{document.documentElement.lang=t},{immediate:!0})}),mo(),()=>I(F.Layout)}};function xo(){const e=$o(),t=wo();t.provide(je,e);const n=Ft(e.route);return t.provide(Ue,n),E&&Vt(e.route,n.site),t.component("Content",Qt),t.component("ClientOnly",go),t.component("Debug",()=>null),Object.defineProperty(t.config.globalProperties,"$frontmatter",{get(){return n.frontmatter.value}}),F.enhanceApp&&F.enhanceApp({app:t,router:e,siteData:re}),{app:t,router:e}}function wo(){return Bt(ko)}function $o(){let e=E,t;return Jt(n=>{let s=Me(n);return e&&(t=s),(e||t===s)&&(s=s.replace(/\.js$/,".lean.js")),E?(e=!1,Q(()=>import(s),[])):require(s)},bo)}if(E){const{app:e,router:t}=xo();t.go().then(()=>{e.mount("#app")})}export{Se as N,T as a,Kt as b,xo as createApp,y as u,H as w};