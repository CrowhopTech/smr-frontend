import{S as y,i as x,s as ee,bc as te,a6 as F,a7 as L,a8 as B,t as w,q as I,aa as H,bd as se,be as le,c as Y,e as V,d as S,f as E,g as D,h as d,j as A,k as h,bf as q,l as v,m as C,y as ae,u as G,n as M,o as W,V as O,W as P,X as T,Y as X,B as oe,C as ne,aY as z,$ as fe,a$ as ie,b1 as re}from"./vendor-c539ab3b.js";import{a as J}from"./paths-396f020f.js";import{p as ce,g as ue}from"./navigation-d7362a67.js";const _e=a=>({}),K=a=>({}),me=a=>({}),Q=a=>({}),de=a=>({}),R=a=>({});function pe(a){let e,s,t;return{c(){e=V("img"),this.h()},l(l){e=E(l,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){z(e.src,s=a[4])||h(e,"src",s),h(e,"alt",t=""+(a[3]+" Logo")),h(e,"class","logo max-w-full max-h-full svelte-16fsik6")},m(l,o){v(l,e,o)},p(l,o){o&16&&!z(e.src,s=l[4])&&h(e,"src",s),o&8&&t!==(t=""+(l[3]+" Logo"))&&h(e,"alt",t)},d(l){l&&d(e)}}}function ge(a){let e;return{c(){e=V("div"),this.h()},l(s){e=E(s,"DIV",{class:!0}),D(e).forEach(d),this.h()},h(){h(e,"class","bg-gray-500 logo min-w-full min-h-full max-w-full max-h-full svelte-16fsik6")},m(s,t){v(s,e,t)},p:fe,d(s){s&&d(e)}}}function U(a){let e,s;return{c(){e=V("span"),s=P("Card stats"),this.h()},l(t){e=E(t,"SPAN",{class:!0});var l=D(e);s=T(l,"Card stats"),l.forEach(d),this.h()},h(){h(e,"class","font-flow")},m(t,l){v(t,e,l),C(e,s)},d(t){t&&d(e)}}}function he(a){let e,s=a[1]&&U();return{c(){s&&s.c(),e=O()},l(t){s&&s.l(t),e=O()},m(t,l){s&&s.m(t,l),v(t,e,l)},p(t,l){t[1]?s||(s=U(),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null)},d(t){s&&s.d(t),t&&d(e)}}}function $e(a){let e,s,t,l,o,f,c,u,$,p;const k=a[10].stats,b=Y(k,a,a[12],R),m=b||he(a);return{c(){e=V("div"),s=V("a"),t=V("span"),l=P(a[3]),o=S(),f=V("h5"),m&&m.c(),c=S(),u=V("div"),$=P(a[2]),this.h()},l(n){e=E(n,"DIV",{class:!0});var _=D(e);s=E(_,"A",{href:!0,class:!0});var g=D(s);t=E(g,"SPAN",{class:!0});var i=D(t);l=T(i,a[3]),i.forEach(d),g.forEach(d),o=A(_),f=E(_,"H5",{class:!0});var r=D(f);m&&m.l(r),r.forEach(d),_.forEach(d),c=A(n),u=E(n,"DIV",{class:!0});var j=D(u);$=T(j,a[2]),j.forEach(d),this.h()},h(){h(t,"class","text-xl break-words"),h(s,"href",a[0]),h(s,"class","text-white"),h(f,"class","text-sm m-0"),h(e,"class","mb-2"),h(u,"class","break-words"),q(u,"font-flow",a[1])},m(n,_){v(n,e,_),C(e,s),C(s,t),C(t,l),C(e,o),C(e,f),m&&m.m(f,null),v(n,c,_),v(n,u,_),C(u,$),p=!0},p(n,_){(!p||_&8)&&X(l,n[3]),(!p||_&1)&&h(s,"href",n[0]),b?b.p&&(!p||_&4096)&&G(b,k,n,n[12],p?W(k,n[12],_,de):M(n[12]),R):m&&m.p&&(!p||_&2)&&m.p(n,p?_:-1),(!p||_&4)&&X($,n[2]),_&2&&q(u,"font-flow",n[1])},i(n){p||(w(m,n),p=!0)},o(n){I(m,n),p=!1},d(n){n&&d(e),m&&m.d(n),n&&d(c),n&&d(u)}}}function Z(a){let e,s,t;e=new ie({props:{href:a[0],"aria-label":"View "+a[3],title:"View "+a[3],$$slots:{default:[ve]},$$scope:{ctx:a}}});const l=a[10].actions,o=Y(l,a,a[12],Q);return{c(){F(e.$$.fragment),s=S(),o&&o.c()},l(f){L(e.$$.fragment,f),s=A(f),o&&o.l(f)},m(f,c){B(e,f,c),v(f,s,c),o&&o.m(f,c),t=!0},p(f,c){const u={};c&1&&(u.href=f[0]),c&8&&(u["aria-label"]="View "+f[3]),c&8&&(u.title="View "+f[3]),c&4096&&(u.$$scope={dirty:c,ctx:f}),e.$set(u),o&&o.p&&(!t||c&4096)&&G(o,l,f,f[12],t?W(l,f[12],c,me):M(f[12]),Q)},i(f){t||(w(e.$$.fragment,f),w(o,f),t=!0)},o(f){I(e.$$.fragment,f),I(o,f),t=!1},d(f){H(e,f),f&&d(s),o&&o.d(f)}}}function be(a){let e;return{c(){e=P("info")},l(s){e=T(s,"info")},m(s,t){v(s,e,t)},d(s){s&&d(e)}}}function ve(a){let e,s;return e=new re({props:{class:"material-icons",$$slots:{default:[be]},$$scope:{ctx:a}}}),{c(){F(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,l){B(e,t,l),s=!0},p(t,l){const o={};l&4096&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){s||(w(e.$$.fragment,t),s=!0)},o(t){I(e.$$.fragment,t),s=!1},d(t){H(e,t)}}}function ke(a){let e,s,t=!a[1]&&Z(a);return{c(){t&&t.c(),e=O()},l(l){t&&t.l(l),e=O()},m(l,o){t&&t.m(l,o),v(l,e,o),s=!0},p(l,o){l[1]?t&&(oe(),I(t,1,1,()=>{t=null}),ne()):t?(t.p(l,o),o&2&&w(t,1)):(t=Z(l),t.c(),w(t,1),t.m(e.parentNode,e))},i(l){s||(w(t),s=!0)},o(l){I(t),s=!1},d(l){t&&t.d(l),l&&d(e)}}}function we(a){let e,s,t,l,o,f,c,u,$,p,k;function b(i,r){return i[1]?ge:pe}let m=b(a),n=m(a);o=new se({props:{class:"flex flex-col pb-0",$$slots:{default:[$e]},$$scope:{ctx:a}}}),c=new le({props:{class:"self-end",$$slots:{default:[ke]},$$scope:{ctx:a}}});const _=a[10].outer,g=Y(_,a,a[12],K);return{c(){e=V("div"),s=V("div"),n.c(),t=S(),l=V("div"),F(o.$$.fragment),f=S(),F(c.$$.fragment),u=S(),g&&g.c(),this.h()},l(i){e=E(i,"DIV",{class:!0});var r=D(e);s=E(r,"DIV",{class:!0});var j=D(s);n.l(j),j.forEach(d),t=A(r),l=E(r,"DIV",{class:!0});var N=D(l);L(o.$$.fragment,N),f=A(N),L(c.$$.fragment,N),N.forEach(d),r.forEach(d),u=A(i),g&&g.l(i),this.h()},h(){h(s,"class","cursor-pointer card-image-container"),h(l,"class","w-full flex flex-col justify-between"),h(e,"class","grid grid-max-auto sm:grid-cols-2 grid-cols-1 justify-items-center svelte-16fsik6"),q(e,"text-gray-500",a[1]),q(e,"font-flow",a[1])},m(i,r){v(i,e,r),C(e,s),n.m(s,null),C(e,t),C(e,l),B(o,l,null),C(l,f),B(c,l,null),v(i,u,r),g&&g.m(i,r),$=!0,p||(k=ae(s,"click",a[11]),p=!0)},p(i,r){m===(m=b(i))&&n?n.p(i,r):(n.d(1),n=m(i),n&&(n.c(),n.m(s,null)));const j={};r&4111&&(j.$$scope={dirty:r,ctx:i}),o.$set(j);const N={};r&4107&&(N.$$scope={dirty:r,ctx:i}),c.$set(N),r&2&&q(e,"text-gray-500",i[1]),r&2&&q(e,"font-flow",i[1]),g&&g.p&&(!$||r&4096)&&G(g,_,i,i[12],$?W(_,i[12],r,_e):M(i[12]),K)},i(i){$||(w(o.$$.fragment,i),w(c.$$.fragment,i),w(g,i),$=!0)},o(i){I(o.$$.fragment,i),I(c.$$.fragment,i),I(g,i),$=!1},d(i){i&&d(e),n.d(),H(o),H(c),i&&d(u),g&&g.d(i),p=!1,k()}}}function Ve(a){let e,s;return e=new te({props:{class:"h-full overflow-hidden",$$slots:{default:[we]},$$scope:{ctx:a}}}),e.$on("mouseover",a[5]),e.$on("mouseout",a[6]),{c(){F(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,l){B(e,t,l),s=!0},p(t,[l]){const o={};l&4127&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){s||(w(e.$$.fragment,t),s=!0)},o(t){I(e.$$.fragment,t),s=!1},d(t){H(e,t)}}}function Ee(a,e,s){let t,l,o,{$$slots:f={},$$scope:c}=e,{name:u=""}=e,{logo:$=J+"/images/no_image.webp"}=e,{description:p=""}=e,{link:k="/"}=e,{fake:b=!1}=e,m=!1,n;const _=()=>{m||(n=setTimeout(()=>{m=!0,ce(k)},250))},g=()=>{m||clearTimeout(n)},i=()=>ue(k);return a.$$set=r=>{"name"in r&&s(7,u=r.name),"logo"in r&&s(8,$=r.logo),"description"in r&&s(9,p=r.description),"link"in r&&s(0,k=r.link),"fake"in r&&s(1,b=r.fake),"$$scope"in r&&s(12,c=r.$$scope)},a.$$.update=()=>{a.$$.dirty&256&&s(4,t=$||J+"/images/no_image.webp"),a.$$.dirty&130&&s(3,l=u||b&&"Card Name"),a.$$.dirty&514&&s(2,o=p||b&&"Short card description")},[k,b,o,l,t,_,g,u,$,p,f,i,c]}class je extends y{constructor(e){super();x(this,e,Ee,Ve,ee,{name:7,logo:8,description:9,link:0,fake:1})}}export{je as F};
//# sourceMappingURL=FicsitCard-c8af5ace.js.map
