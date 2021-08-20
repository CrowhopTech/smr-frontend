import{S as a,i as s,s as e,e as t,t as r,k as o,c as n,a as c,g as l,d as i,n as d,b as u,f as g,a2 as h,h as f,a8 as m,l as p,u as v,w as $,x,Z as E,_ as b,a1 as w,$ as k,r as y,C as D,a7 as I,a9 as j,aw as G,W as T,X as V,j as N,m as A,o as C,ax as O,Y as H,v as P}from"../../../chunks/vendor-db5fc542.js";import{p as B}from"../../../chunks/routing-405c8d47.js";import{r as S,s as q}from"../../../chunks/graphql-7b224d75.js";import{b as L}from"../../../chunks/paths-6758d194.js";import{a as U}from"../../../chunks/user-8d7a97c1.js";import{g as W}from"../../../chunks/navigation-51f4a605.js";import{D as _}from"../../../chunks/Dialog-91acdf70.js";import{T as M}from"../../../chunks/Toast-c21bf6da.js";import{m as R}from"../../../chunks/markdown-c60b2bfd.js";import"../../../chunks/singletons-12a22614.js";function X(a){let s,e,p,v,$,x,E,b,w,k,y=a[0].created_at+"";return{c(){s=t("div"),e=t("h3"),p=r("Info"),v=o(),$=t("span"),x=t("strong"),E=r("Created:"),b=o(),w=r(y),k=t("br"),this.h()},l(a){s=n(a,"DIV",{class:!0});var t=c(s);e=n(t,"H3",{class:!0});var r=c(e);p=l(r,"Info"),r.forEach(i),v=d(t),$=n(t,"SPAN",{});var o=c($);x=n(o,"STRONG",{});var u=c(x);E=l(u,"Created:"),u.forEach(i),b=d(o),w=l(o,y),o.forEach(i),k=n(t,"BR",{}),t.forEach(i),this.h()},h(){u(e,"class","text-2xl my-4 font-bold"),u(s,"class","text-lg")},m(a,t){g(a,s,t),h(s,e),h(e,p),h(s,v),h(s,$),h($,x),h(x,E),h($,b),h($,w),h(s,k)},p(a,[s]){1&s&&y!==(y=a[0].created_at+"")&&f(w,y)},i:m,o:m,d(a){a&&i(s)}}}function Y(a,s,e){let{guide:t}=s;return a.$$set=a=>{"guide"in a&&e(0,t=a.guide)},[t]}class Z extends a{constructor(a){super(),s(this,a,Y,X,e,{guide:0})}}function z(a){let s,e,p,v,$,x,E,b,w,k,y,D,I,j,G,T,V=a[0].username+"";return{c(){s=t("div"),e=t("h3"),p=r("Author"),v=o(),$=t("div"),x=t("div"),E=t("div"),w=o(),k=t("div"),y=t("a"),D=r(V),j=o(),G=t("div"),T=r("Writer"),this.h()},l(a){s=n(a,"DIV",{class:!0});var t=c(s);e=n(t,"H3",{class:!0});var r=c(e);p=l(r,"Author"),r.forEach(i),v=d(t),$=n(t,"DIV",{class:!0});var o=c($);x=n(o,"DIV",{class:!0});var u=c(x);E=n(u,"DIV",{class:!0,style:!0}),c(E).forEach(i),w=d(u),k=n(u,"DIV",{class:!0});var g=c(k);y=n(g,"A",{href:!0,class:!0});var h=c(y);D=l(h,V),h.forEach(i),j=d(g),G=n(g,"DIV",{});var f=c(G);T=l(f,"Writer"),f.forEach(i),g.forEach(i),u.forEach(i),o.forEach(i),t.forEach(i),this.h()},h(){u(e,"class","text-2xl my-4 font-bold"),u(E,"class","rounded-full bg-cover w-14 h-14"),u(E,"style",b=`background-image: url("${a[0].avatar}")`),u(y,"href",I=L+"/user/"+a[0].id+"/"),u(y,"class","text-yellow-500 underline"),u(k,"class","grid grid-flow-row"),u(x,"class","grid grid-flow-col auto-cols-min gap-x-4"),u($,"class","grid auto-rows-min text-lg gap-y-4"),u(s,"class","grid grid-flow-row gap-y-6")},m(a,t){g(a,s,t),h(s,e),h(e,p),h(s,v),h(s,$),h($,x),h(x,E),h(x,w),h(x,k),h(k,y),h(y,D),h(k,j),h(k,G),h(G,T)},p(a,[s]){1&s&&b!==(b=`background-image: url("${a[0].avatar}")`)&&u(E,"style",b),1&s&&V!==(V=a[0].username+"")&&f(D,V),1&s&&I!==(I=L+"/user/"+a[0].id+"/")&&u(y,"href",I)},i:m,o:m,d(a){a&&i(s)}}}function F(a,s,e){let{author:t}=s;return a.$$set=a=>{"author"in a&&e(0,t=a.author)},[t]}class J extends a{constructor(a){super(),s(this,a,F,z,e,{author:0})}}function K(a){let s;return{c(){s=r("404")},l(a){s=l(a,"404")},m(a,e){g(a,s,e)},p:m,i:m,o:m,d(a){a&&i(s)}}}function Q(a){let s,e,m,p,$,E,b,w,k,y,D,I,j,B,S,q,L,U,W,X,Y,z=a[2].data.getGuide.name+"",F=a[4]&&ea(a),K={ctx:a,current:null,token:null,hasCatch:!1,pending:oa,then:ra,catch:ta,value:21};function Q(s){a[18](s)}G(k=R(a[2].data.getGuide.guide),K),I=new Z({props:{guide:a[2].data.getGuide}}),B=new J({props:{author:a[2].data.getGuide.user}});let aa={$$slots:{default:[na]},$$scope:{ctx:a}};function sa(s){a[19](s)}void 0!==a[5]&&(aa.open=a[5]),q=new _({props:aa}),T.push((()=>V(q,"open",Q)));let la={$$slots:{default:[ca]},$$scope:{ctx:a}};return void 0!==a[1]&&(la.running=a[1]),W=new M({props:la}),T.push((()=>V(W,"running",sa))),{c(){s=t("div"),e=t("div"),m=t("div"),p=t("h1"),$=r(z),E=o(),F&&F.c(),b=o(),w=t("div"),K.block.c(),y=o(),D=t("div"),N(I.$$.fragment),j=o(),N(B.$$.fragment),S=o(),N(q.$$.fragment),U=o(),N(W.$$.fragment),this.h()},l(a){s=n(a,"DIV",{class:!0});var t=c(s);e=n(t,"DIV",{class:!0});var r=c(e);m=n(r,"DIV",{class:!0});var o=c(m);p=n(o,"H1",{class:!0});var u=c(p);$=l(u,z),u.forEach(i),E=d(o),F&&F.l(o),o.forEach(i),b=d(r),w=n(r,"DIV",{class:!0});var g=c(w);K.block.l(g),g.forEach(i),r.forEach(i),y=d(t),D=n(t,"DIV",{class:!0});var h=c(D);A(I.$$.fragment,h),j=d(h),A(B.$$.fragment,h),h.forEach(i),t.forEach(i),S=d(a),A(q.$$.fragment,a),U=d(a),A(W.$$.fragment,a),this.h()},h(){u(p,"class","text-4xl my-4 font-bold"),u(m,"class","grid grid-flow-col grid-auto-max h-auto gap-4 items-center svelte-1sejgqw"),u(w,"class","markdown-content"),u(e,"class","grid grid-cols-1 auto-rows-min gap-8"),u(D,"class","grid grid-cols-1 auto-rows-min gap-8"),u(s,"class","grid gap-8 grid-auto-max svelte-1sejgqw")},m(a,t){g(a,s,t),h(s,e),h(e,m),h(m,p),h(p,$),h(m,E),F&&F.m(m,null),h(e,b),h(e,w),K.block.m(w,K.anchor=null),K.mount=()=>w,K.anchor=null,h(s,y),h(s,D),C(I,D,null),h(D,j),C(B,D,null),g(a,S,t),C(q,a,t),g(a,U,t),C(W,a,t),Y=!0},p(s,e){a=s,(!Y||4&e)&&z!==(z=a[2].data.getGuide.name+"")&&f($,z),a[4]?F?F.p(a,e):(F=ea(a),F.c(),F.m(m,null)):F&&(F.d(1),F=null),K.ctx=a,4&e&&k!==(k=R(a[2].data.getGuide.guide))&&G(k,K)||O(K,a,e);const t={};4&e&&(t.guide=a[2].data.getGuide),I.$set(t);const r={};4&e&&(r.author=a[2].data.getGuide.user),B.$set(r);const o={};4194304&e&&(o.$$scope={dirty:e,ctx:a}),!L&&32&e&&(L=!0,o.open=a[5],H((()=>L=!1))),q.$set(o);const n={};4194312&e&&(n.$$scope={dirty:e,ctx:a}),!X&&2&e&&(X=!0,n.running=a[1],H((()=>X=!1))),W.$set(n)},i(a){Y||(x(I.$$.fragment,a),x(B.$$.fragment,a),x(q.$$.fragment,a),x(W.$$.fragment,a),Y=!0)},o(a){v(I.$$.fragment,a),v(B.$$.fragment,a),v(q.$$.fragment,a),v(W.$$.fragment,a),Y=!1},d(a){a&&i(s),F&&F.d(),K.block.d(),K.token=null,K=null,P(I),P(B),a&&i(S),P(q,a),a&&i(U),P(W,a)}}}function aa(a){let s,e,o,d=a[2].error.message+"";return{c(){s=t("p"),e=r("Oh no... "),o=r(d)},l(a){s=n(a,"P",{});var t=c(s);e=l(t,"Oh no... "),o=l(t,d),t.forEach(i)},m(a,t){g(a,s,t),h(s,e),h(s,o)},p(a,s){4&s&&d!==(d=a[2].error.message+"")&&f(o,d)},i:m,o:m,d(a){a&&i(s)}}}function sa(a){let s,e;return{c(){s=t("p"),e=r("Loading...")},l(a){s=n(a,"P",{});var t=c(s);e=l(t,"Loading..."),t.forEach(i)},m(a,t){g(a,s,t),h(s,e)},p:m,i:m,o:m,d(a){a&&i(s)}}}function ea(a){let s,e,f,p,v,$,x;return{c(){s=t("button"),e=r("Edit"),f=o(),p=t("button"),v=r("Delete"),this.h()},l(a){s=n(a,"BUTTON",{class:!0});var t=c(s);e=l(t,"Edit"),t.forEach(i),f=d(a),p=n(a,"BUTTON",{class:!0});var r=c(p);v=l(r,"Delete"),r.forEach(i),this.h()},h(){u(s,"class","py-2 px-4 rounded text-base bg-yellow-600"),u(p,"class","py-2 px-4 rounded text-base bg-red-500")},m(t,r){g(t,s,r),h(s,e),g(t,f,r),g(t,p,r),h(p,v),$||(x=[I(s,"click",a[14]),I(p,"click",a[15])],$=!0)},p:m,d(a){a&&i(s),a&&i(f),a&&i(p),$=!1,j(x)}}}function ta(a){return{c:m,l:m,m:m,p:m,d:m}}function ra(a){let s,e=a[21]+"";return{c(){s=t("p")},l(a){s=n(a,"P",{}),c(s).forEach(i)},m(a,t){g(a,s,t),s.innerHTML=e},p(a,t){4&t&&e!==(e=a[21]+"")&&(s.innerHTML=e)},d(a){a&&i(s)}}}function oa(a){return{c:m,l:m,m:m,p:m,d:m}}function na(a){let s,e,f,p,v,$,x,E,b,w,k,y,D,G;return{c(){s=t("div"),e=t("h3"),f=r("Delete Guide?"),p=o(),v=t("span"),$=r("Are you sure you wish to delete this guide"),x=o(),E=t("button"),b=r("Cancel"),w=o(),k=t("button"),y=r("Delete"),this.h()},l(a){s=n(a,"DIV",{class:!0});var t=c(s);e=n(t,"H3",{class:!0});var r=c(e);f=l(r,"Delete Guide?"),r.forEach(i),p=d(t),v=n(t,"SPAN",{});var o=c(v);$=l(o,"Are you sure you wish to delete this guide"),o.forEach(i),x=d(t),E=n(t,"BUTTON",{class:!0});var u=c(E);b=l(u,"Cancel"),u.forEach(i),w=d(t),k=n(t,"BUTTON",{class:!0});var g=c(k);y=l(g,"Delete"),g.forEach(i),t.forEach(i),this.h()},h(){u(e,"class","text-2xl font-bold"),u(E,"class","py-1 px-4 rounded text-base bg-yellow-600"),u(k,"class","py-1 px-4 rounded text-base bg-red-500"),u(s,"class","grid grid-flow-row gap-4")},m(t,r){g(t,s,r),h(s,e),h(e,f),h(s,p),h(s,v),h(v,$),h(s,x),h(s,E),h(E,b),h(s,w),h(s,k),h(k,y),D||(G=[I(E,"click",a[16]),I(k,"click",a[17])],D=!0)},p:m,d(a){a&&i(s),D=!1,j(G)}}}function ca(a){let s,e;return{c(){s=t("span"),e=r(a[3])},l(t){s=n(t,"SPAN",{});var r=c(s);e=l(r,a[3]),r.forEach(i)},m(a,t){g(a,s,t),h(s,e)},p(a,s){8&s&&f(e,a[3])},d(a){a&&i(s)}}}function la(a){let s,e,t,r;const o=[sa,aa,Q,K],n=[];function c(a,s){return a[2].fetching?0:a[2].error?1:a[2].data.getGuide?2:3}return s=c(a),e=n[s]=o[s](a),{c(){e.c(),t=p()},l(a){e.l(a),t=p()},m(a,e){n[s].m(a,e),g(a,t,e),r=!0},p(a,[r]){let l=s;s=c(a),s===l?n[s].p(a,r):(y(),v(n[l],1,1,(()=>{n[l]=null})),$(),e=n[s],e?e.p(a,r):(e=n[s]=o[s](a),e.c()),x(e,1),e.m(t.parentNode,t))},i(a){r||(x(e),r=!0)},o(a){v(e),r=!1},d(a){n[s].d(a),a&&i(t)}}}const ia=B();function da(a,s,e){let t,r,o,n;var c,l,i,d;E(a,U,(a=>e(13,o=a)));let{guideId:u}=s,g="",h=!1;const f=b(q,{guide:u});E(a,f,(a=>e(2,r=a)));const m=w({query:S}),p=D(!1);E(a,p,(a=>e(5,n=a)));const v=()=>{m({guideId:u}).then((a=>{a.error?(console.error(a.error.message),e(3,g="Error deleting guide: "+a.error.message),e(1,h=!0)):W(L+"/guides")}))};k(f);return a.$$set=a=>{"guideId"in a&&e(0,u=a.guideId)},a.$$.update=()=>{15876&a.$$.dirty&&e(4,t=(null===e(9,c=null==o?void 0:o.roles)||void 0===c?void 0:c.deleteContent)||(null==o?void 0:o.id)===(null===e(12,d=null===e(11,i=null===e(10,l=null==r?void 0:r.data)||void 0===l?void 0:l.getGuide)||void 0===i?void 0:i.user)||void 0===d?void 0:d.id)),2&a.$$.dirty&&(h||e(3,g=""))},[u,h,r,g,t,n,f,p,v,c,l,i,d,o,()=>W(L+"/guide/"+u+"/edit"),()=>p.set(!0),()=>p.set(!1),()=>v(),function(a){n=a,p.set(n)},function(a){h=a,e(1,h)}]}class ua extends a{constructor(a){super(),s(this,a,da,la,e,{guideId:0})}}export{ua as default,ia as load};