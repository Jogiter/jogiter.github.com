import{u as y,w as F,N as g}from"./app.9366d4db.js";import{u as v,n as c,D as o,z as a,G as s,A as _,H as n,B as l,K as x,_ as m,M as I,N as L,T as A,O as d,P as k}from"./plugin-vue_export-helper.71bb0c0b.js";const B={key:0,class:"home-hero"},N={key:0,class:"figure"},C=["src","alt"],b={key:1,id:"main-title",class:"title"},w={key:2,class:"tagline"},D=v({__name:"HomeHero",setup(h){const{site:t,frontmatter:e}=y(),i=c(()=>{const{heroImage:r,heroText:u,tagline:H,actionLink:$,actionText:T}=e.value;return r||u||H||$&&T}),p=c(()=>e.value.heroText||t.value.title),f=c(()=>e.value.tagline||t.value.description);return(r,u)=>i.value?(o(),a("header",B,[s(e).heroImage?(o(),a("figure",N,[_("img",{class:"image",src:s(F)(s(e).heroImage),alt:s(e).heroAlt},null,8,C)])):n("v-if",!0),p.value?(o(),a("h1",b,l(p.value),1)):n("v-if",!0),f.value?(o(),a("p",w,l(f.value),1)):n("v-if",!0),s(e).actionLink&&s(e).actionText?(o(),x(g,{key:3,item:{link:s(e).actionLink,text:s(e).actionText},class:"action"},null,8,["item"])):n("v-if",!0),s(e).altActionLink&&s(e).altActionText?(o(),x(g,{key:4,item:{link:s(e).altActionLink,text:s(e).altActionText},class:"action alt"},null,8,["item"])):n("v-if",!0)])):n("v-if",!0)}});var V=m(D,[["__scopeId","data-v-04869c74"]]);const S={key:0,class:"home-features"},z={class:"wrapper"},E={class:"container"},G={class:"features"},K={key:0,class:"title"},M={key:1,class:"details"},O=v({__name:"HomeFeatures",setup(h){const{frontmatter:t}=y(),e=c(()=>t.value.features&&t.value.features.length>0),i=c(()=>t.value.features?t.value.features:[]);return(p,f)=>e.value?(o(),a("div",S,[_("div",z,[_("div",E,[_("div",G,[(o(!0),a(I,null,L(i.value,(r,u)=>(o(),a("section",{key:u,class:"feature"},[r.title?(o(),a("h2",K,l(r.title),1)):n("v-if",!0),r.details?(o(),a("p",M,l(r.details),1)):n("v-if",!0)]))),128))])])])])):n("v-if",!0)}});var P=m(O,[["__scopeId","data-v-8bc9d278"]]);const j={key:0,class:"footer"},q={class:"container"},J={class:"text"},Q=v({__name:"HomeFooter",setup(h){const{frontmatter:t}=y();return(e,i)=>s(t).footer?(o(),a("footer",j,[_("div",q,[_("p",J,l(s(t).footer),1)])])):n("v-if",!0)}});var R=m(Q,[["__scopeId","data-v-4e4a28ec"]]);const U={class:"home","aria-labelledby":"main-title"},W={class:"home-content"},X=v({__name:"Home",setup(h){return(t,e)=>{const i=A("Content");return o(),a("main",U,[d(V),k(t.$slots,"hero",{},void 0,!0),d(P),_("div",W,[d(i)]),k(t.$slots,"features",{},void 0,!0),d(R),k(t.$slots,"footer",{},void 0,!0)])}}});var ee=m(X,[["__scopeId","data-v-235baf2a"]]);export{ee as default};
