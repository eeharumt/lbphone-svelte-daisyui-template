import{s as g,c as y,u as w,g as b,d as S,o as E}from"../chunks/scheduler.e108d1fd.js";import{S as j,i as q,g as f,h as _,j as c,f as p,k as d,x as m,a as z,y as v,d as D,t as I}from"../chunks/index.06dfd2bc.js";const L=!0,$=Object.freeze(Object.defineProperty({__proto__:null,prerender:L},Symbol.toStringTag,{value:"Module"}));function M(i){let o,s,l,n;const r=i[3].default,t=y(r,i,i[2],null);return{c(){o=f("div"),s=f("div"),l=f("div"),t&&t.c(),this.h()},l(e){o=_(e,"DIV",{id:!0});var a=c(o);s=_(a,"DIV",{"data-theme":!0,id:!0,class:!0});var u=c(s);l=_(u,"DIV",{class:!0});var h=c(l);t&&t.l(h),h.forEach(p),u.forEach(p),a.forEach(p),this.h()},h(){d(l,"class","svelte-1tzrdqi"),m(l,"phone-wrapper",i[0]),d(s,"data-theme",i[1]),d(s,"id","app"),d(s,"class","svelte-1tzrdqi"),d(o,"id","app-root")},m(e,a){z(e,o,a),v(o,s),v(s,l),t&&t.m(l,null),n=!0},p(e,[a]){t&&t.p&&(!n||a&4)&&w(t,r,e,e[2],n?S(r,e[2],a,null):b(e[2]),null),(!n||a&1)&&m(l,"phone-wrapper",e[0]),(!n||a&2)&&d(s,"data-theme",e[1])},i(e){n||(D(t,e),n=!0)},o(e){I(t,e),n=!1},d(e){e&&p(o),t&&t.d(e)}}}function V(i,o,s){let{$$slots:l={},$$scope:n}=o,r=!1,t="light";const e=!(typeof window<"u"&&window.invokeNative);return E(()=>{e?(document.body.style.visibility="visible",s(0,r=!1)):(s(0,r=!1),window.addEventListener("message",a=>{a.data==="componentsLoaded"&&getSettings().then(u=>{s(1,t=u.display.theme)})}))}),i.$$set=a=>{"$$scope"in a&&s(2,n=a.$$scope)},[r,t,n,l]}class C extends j{constructor(o){super(),q(this,o,V,M,g,{})}}export{C as component,$ as universal};