import{S as rt,i as at,s as st,ba as nt,W as P,X as S,Y as _,m as v,t as E,$ as j,bb as lt,e as x,aa as C,a as T,c as w,d as b,ab as N,f,g as M,a7 as V,j as D,a5 as g,ac as J,aC as xt,b as Q,aT as wt,l as U,al as it,q as yt,aB as Et,k as Z,r as A,w as bt,ae as pt,u as ht,ad as vt,aH as tt,aA as It,bc as ot,bd as Gt,aF as Dt,aG as kt}from"../../../chunks/vendor-5142eec8.js";import{l as Vt}from"../../../chunks/gql-a9b1b36c.js";import{k as At,l as Ct}from"../../../chunks/graphql-cad820f4.js";import{p as Nt}from"../../../chunks/routing-c6322149.js";import{p as ft}from"../../../chunks/formatting-b1e7d458.js";import{b as et}from"../../../chunks/paths-1c47712a.js";import{a as Ht}from"../../../chunks/user-d4c6e855.js";import{g as ct}from"../../../chunks/navigation-ce539261.js";import{T as Pt}from"../../../chunks/Toast-e8354faa.js";import{m as ut}from"../../../chunks/markdown-6a2ff7f0.js";import{M as St}from"../../../chunks/MetaDescriptors-2c89eebb.js";import"../../../chunks/global-d21eb674.js";import"../../../chunks/singletons-cdeec3fd.js";import"../../../chunks/extras-8984d02f.js";import"../../../chunks/stores-8521e192.js";function _t(n){let t,r,e,s,a,l,i,p,c=ft(n[0].created_at)+"",$,o;return{c(){t=x("div"),r=x("h3"),e=C("Info"),s=T(),a=x("span"),l=x("strong"),i=C("Created:"),p=T(),$=C(c),o=x("br"),this.h()},l(d){t=w(d,"DIV",{class:!0});var h=b(t);r=w(h,"H3",{class:!0});var H=b(r);e=N(H,"Info"),H.forEach(f),s=M(h),a=w(h,"SPAN",{});var k=b(a);l=w(k,"STRONG",{});var O=b(l);i=N(O,"Created:"),O.forEach(f),p=M(k),$=N(k,c),k.forEach(f),o=w(h,"BR",{}),h.forEach(f),this.h()},h(){V(r,"class","text-2xl my-4 font-bold"),V(t,"class","text-lg")},m(d,h){D(d,t,h),g(t,r),g(r,e),g(t,s),g(t,a),g(a,l),g(l,i),g(a,p),g(a,$),g(t,o)},p(d,h){h&1&&c!==(c=ft(d[0].created_at)+"")&&J($,c)},d(d){d&&f(t)}}}function jt(n){let t,r;return t=new lt({props:{$$slots:{default:[_t]},$$scope:{ctx:n}}}),{c(){P(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,s){_(t,e,s),r=!0},p(e,s){const a={};s&3&&(a.$$scope={dirty:s,ctx:e}),t.$set(a)},i(e){r||(v(t.$$.fragment,e),r=!0)},o(e){E(t.$$.fragment,e),r=!1},d(e){j(t,e)}}}function Lt(n){let t,r;return t=new nt({props:{$$slots:{default:[jt]},$$scope:{ctx:n}}}),{c(){P(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,s){_(t,e,s),r=!0},p(e,[s]){const a={};s&3&&(a.$$scope={dirty:s,ctx:e}),t.$set(a)},i(e){r||(v(t.$$.fragment,e),r=!0)},o(e){E(t.$$.fragment,e),r=!1},d(e){j(t,e)}}}function Tt(n,t,r){let{guide:e}=t;return n.$$set=s=>{"guide"in s&&r(0,e=s.guide)},[e]}class Mt extends rt{constructor(t){super(),at(this,t,Tt,Lt,st,{guide:0})}}function Ot(n){let t,r,e,s,a,l,i,p,c,$,o,d=n[0].username+"",h,H,k,O,W;return{c(){t=x("div"),r=x("h3"),e=C("Author"),s=T(),a=x("div"),l=x("div"),i=x("div"),c=T(),$=x("div"),o=x("a"),h=C(d),k=T(),O=x("div"),W=C("Writer"),this.h()},l(G){t=w(G,"DIV",{class:!0});var L=b(t);r=w(L,"H3",{class:!0});var q=b(r);e=N(q,"Author"),q.forEach(f),s=M(L),a=w(L,"DIV",{class:!0});var y=b(a);l=w(y,"DIV",{class:!0});var m=b(l);i=w(m,"DIV",{class:!0,style:!0}),b(i).forEach(f),c=M(m),$=w(m,"DIV",{class:!0});var F=b($);o=w(F,"A",{href:!0,class:!0});var X=b(o);h=N(X,d),X.forEach(f),k=M(F),O=w(F,"DIV",{});var u=b(O);W=N(u,"Writer"),u.forEach(f),F.forEach(f),m.forEach(f),y.forEach(f),L.forEach(f),this.h()},h(){V(r,"class","text-2xl my-4 font-bold"),V(i,"class","rounded-full bg-cover w-14 h-14"),V(i,"style",p=`background-image: url("${n[0].avatar}")`),V(o,"href",H=et+"/user/"+n[0].id+"/"),V(o,"class","text-yellow-500 underline"),V($,"class","grid grid-flow-row"),V(l,"class","grid grid-flow-col auto-cols-min gap-x-4"),V(a,"class","grid auto-rows-min text-lg gap-y-4"),V(t,"class","grid grid-flow-row gap-y-2")},m(G,L){D(G,t,L),g(t,r),g(r,e),g(t,s),g(t,a),g(a,l),g(l,i),g(l,c),g(l,$),g($,o),g(o,h),g($,k),g($,O),g(O,W)},p(G,L){L&1&&p!==(p=`background-image: url("${G[0].avatar}")`)&&V(i,"style",p),L&1&&d!==(d=G[0].username+"")&&J(h,d),L&1&&H!==(H=et+"/user/"+G[0].id+"/")&&V(o,"href",H)},d(G){G&&f(t)}}}function Wt(n){let t,r;return t=new lt({props:{$$slots:{default:[Ot]},$$scope:{ctx:n}}}),{c(){P(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,s){_(t,e,s),r=!0},p(e,s){const a={};s&3&&(a.$$scope={dirty:s,ctx:e}),t.$set(a)},i(e){r||(v(t.$$.fragment,e),r=!0)},o(e){E(t.$$.fragment,e),r=!1},d(e){j(t,e)}}}function qt(n){let t,r;return t=new nt({props:{$$slots:{default:[Wt]},$$scope:{ctx:n}}}),{c(){P(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,s){_(t,e,s),r=!0},p(e,[s]){const a={};s&3&&(a.$$scope={dirty:s,ctx:e}),t.$set(a)},i(e){r||(v(t.$$.fragment,e),r=!0)},o(e){E(t.$$.fragment,e),r=!1},d(e){j(t,e)}}}function Bt(n,t,r){let{author:e}=t;return n.$$set=s=>{"author"in s&&r(0,e=s.author)},[e]}class Rt extends rt{constructor(t){super(),at(this,t,Bt,qt,st,{author:0})}}function $t(n){let t,r;return t=new St({props:{description:n[3].data.getGuide.short_description,title:n[3].data.getGuide.name}}),{c(){P(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,s){_(t,e,s),r=!0},p(e,s){const a={};s&8&&(a.description=e[3].data.getGuide.short_description),s&8&&(a.title=e[3].data.getGuide.name),t.$set(a)},i(e){r||(v(t.$$.fragment,e),r=!0)},o(e){E(t.$$.fragment,e),r=!1},d(e){j(t,e)}}}function Ft(n){let t;return{c(){t=C("404")},l(r){t=N(r,"404")},m(r,e){D(r,t,e)},p:A,i:A,o:A,d(r){r&&f(t)}}}function Xt(n){let t,r,e,s=n[3].data.getGuide.name+"",a,l,i,p,c,$,o,d,h,H,k,O,W,G,L,q,y=n[5]&&dt(n);$=new nt({props:{class:"h-fit",$$slots:{default:[ee]},$$scope:{ctx:n}}}),h=new Mt({props:{guide:n[3].data.getGuide}}),k=new Rt({props:{author:n[3].data.getGuide.user}});let m=n[5]&&mt(n);function F(u){n[15](u)}let X={$$slots:{default:[ie]},$$scope:{ctx:n}};return n[2]!==void 0&&(X.running=n[2]),G=new Pt({props:X}),ht.push(()=>vt(G,"running",F)),{c(){t=x("div"),r=x("div"),e=x("h1"),a=C(s),l=T(),i=x("div"),y&&y.c(),p=T(),c=x("div"),P($.$$.fragment),o=T(),d=x("div"),P(h.$$.fragment),H=T(),P(k.$$.fragment),O=T(),m&&m.c(),W=T(),P(G.$$.fragment),this.h()},l(u){t=w(u,"DIV",{class:!0});var I=b(t);r=w(I,"DIV",{class:!0});var R=b(r);e=w(R,"H1",{class:!0});var Y=b(e);a=N(Y,s),Y.forEach(f),l=M(R),i=w(R,"DIV",{});var z=b(i);y&&y.l(z),z.forEach(f),R.forEach(f),p=M(I),c=w(I,"DIV",{class:!0});var B=b(c);S($.$$.fragment,B),o=M(B),d=w(B,"DIV",{class:!0});var K=b(d);S(h.$$.fragment,K),H=M(K),S(k.$$.fragment,K),K.forEach(f),B.forEach(f),I.forEach(f),O=M(u),m&&m.l(u),W=M(u),S(G.$$.fragment,u),this.h()},h(){V(e,"class","text-4xl font-bold"),V(r,"class","flex flex-wrap h-auto justify-between items-center"),V(d,"class","grid grid-cols-1 auto-rows-min gap-8"),V(c,"class","grid grid-auto-max auto-cols-fr gap-4"),V(t,"class","grid gap-6 xlx:grid-flow-row")},m(u,I){D(u,t,I),g(t,r),g(r,e),g(e,a),g(r,l),g(r,i),y&&y.m(i,null),g(t,p),g(t,c),_($,c,null),g(c,o),g(c,d),_(h,d,null),g(d,H),_(k,d,null),D(u,O,I),m&&m.m(u,I),D(u,W,I),_(G,u,I),q=!0},p(u,I){(!q||I&8)&&s!==(s=u[3].data.getGuide.name+"")&&J(a,s),u[5]?y?(y.p(u,I),I&32&&v(y,1)):(y=dt(u),y.c(),v(y,1),y.m(i,null)):y&&(Z(),E(y,1,1,()=>{y=null}),U());const R={};I&262152&&(R.$$scope={dirty:I,ctx:u}),$.$set(R);const Y={};I&8&&(Y.guide=u[3].data.getGuide),h.$set(Y);const z={};I&8&&(z.author=u[3].data.getGuide.user),k.$set(z),u[5]?m?(m.p(u,I),I&32&&v(m,1)):(m=mt(u),m.c(),v(m,1),m.m(W.parentNode,W)):m&&(Z(),E(m,1,1,()=>{m=null}),U());const B={};I&262160&&(B.$$scope={dirty:I,ctx:u}),!L&&I&4&&(L=!0,B.running=u[2],pt(()=>L=!1)),G.$set(B)},i(u){q||(v(y),v($.$$.fragment,u),v(h.$$.fragment,u),v(k.$$.fragment,u),v(m),v(G.$$.fragment,u),q=!0)},o(u){E(y),E($.$$.fragment,u),E(h.$$.fragment,u),E(k.$$.fragment,u),E(m),E(G.$$.fragment,u),q=!1},d(u){u&&f(t),y&&y.d(),j($),j(h),j(k),u&&f(O),m&&m.d(u),u&&f(W),j(G,u)}}}function Yt(n){let t,r,e=n[3].error.message+"",s;return{c(){t=x("p"),r=C("Oh no... "),s=C(e)},l(a){t=w(a,"P",{});var l=b(t);r=N(l,"Oh no... "),s=N(l,e),l.forEach(f)},m(a,l){D(a,t,l),g(t,r),g(t,s)},p(a,l){l&8&&e!==(e=a[3].error.message+"")&&J(s,e)},i:A,o:A,d(a){a&&f(t)}}}function zt(n){let t,r;return{c(){t=x("p"),r=C("Loading...")},l(e){t=w(e,"P",{});var s=b(t);r=N(s,"Loading..."),s.forEach(f)},m(e,s){D(e,t,s),g(t,r)},p:A,i:A,o:A,d(e){e&&f(t)}}}function dt(n){let t,r,e,s;return t=new tt({props:{variant:"outlined",$$slots:{default:[Jt]},$$scope:{ctx:n}}}),t.$on("click",n[10]),e=new tt({props:{variant:"outlined",$$slots:{default:[Kt]},$$scope:{ctx:n}}}),e.$on("click",n[11]),{c(){P(t.$$.fragment),r=T(),P(e.$$.fragment)},l(a){S(t.$$.fragment,a),r=M(a),S(e.$$.fragment,a)},m(a,l){_(t,a,l),D(a,r,l),_(e,a,l),s=!0},p(a,l){const i={};l&262144&&(i.$$scope={dirty:l,ctx:a}),t.$set(i);const p={};l&262144&&(p.$$scope={dirty:l,ctx:a}),e.$set(p)},i(a){s||(v(t.$$.fragment,a),v(e.$$.fragment,a),s=!0)},o(a){E(t.$$.fragment,a),E(e.$$.fragment,a),s=!1},d(a){j(t,a),a&&f(r),j(e,a)}}}function Jt(n){let t;return{c(){t=C("Edit")},l(r){t=N(r,"Edit")},m(r,e){D(r,t,e)},d(r){r&&f(t)}}}function Kt(n){let t;return{c(){t=C("Delete")},l(r){t=N(r,"Delete")},m(r,e){D(r,t,e)},d(r){r&&f(t)}}}function Qt(n){return{c:A,l:A,m:A,p:A,d:A}}function Ut(n){let t,r=n[17]+"";return{c(){t=x("p")},l(e){t=w(e,"P",{});var s=b(t);s.forEach(f)},m(e,s){D(e,t,s),t.innerHTML=r},p(e,s){s&8&&r!==(r=e[17]+"")&&(t.innerHTML=r)},d(e){e&&f(t)}}}function Zt(n){return{c:A,l:A,m:A,p:A,d:A}}function te(n){let t,r,e={ctx:n,current:null,token:null,hasCatch:!1,pending:Zt,then:Ut,catch:Qt,value:17};return ot(r=ut(n[3].data.getGuide.guide),e),{c(){t=x("div"),e.block.c(),this.h()},l(s){t=w(s,"DIV",{class:!0});var a=b(t);e.block.l(a),a.forEach(f),this.h()},h(){V(t,"class","markdown-content break-words")},m(s,a){D(s,t,a),e.block.m(t,e.anchor=null),e.mount=()=>t,e.anchor=null},p(s,a){n=s,e.ctx=n,a&8&&r!==(r=ut(n[3].data.getGuide.guide))&&ot(r,e)||Gt(e,n,a)},d(s){s&&f(t),e.block.d(),e.token=null,e=null}}}function ee(n){let t,r;return t=new lt({props:{$$slots:{default:[te]},$$scope:{ctx:n}}}),{c(){P(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,s){_(t,e,s),r=!0},p(e,s){const a={};s&262152&&(a.$$scope={dirty:s,ctx:e}),t.$set(a)},i(e){r||(v(t.$$.fragment,e),r=!0)},o(e){E(t.$$.fragment,e),r=!1},d(e){j(t,e)}}}function mt(n){let t,r,e;function s(l){n[14](l)}let a={$$slots:{default:[le]},$$scope:{ctx:n}};return n[6]!==void 0&&(a.open=n[6]),t=new It({props:a}),ht.push(()=>vt(t,"open",s)),{c(){P(t.$$.fragment)},l(l){S(t.$$.fragment,l)},m(l,i){_(t,l,i),e=!0},p(l,i){const p={};i&262144&&(p.$$scope={dirty:i,ctx:l}),!r&&i&64&&(r=!0,p.open=l[6],pt(()=>r=!1)),t.$set(p)},i(l){e||(v(t.$$.fragment,l),e=!0)},o(l){E(t.$$.fragment,l),e=!1},d(l){j(t,l)}}}function re(n){let t;return{c(){t=C("Delete Guide?")},l(r){t=N(r,"Delete Guide?")},m(r,e){D(r,t,e)},d(r){r&&f(t)}}}function ae(n){let t;return{c(){t=C("Cancel")},l(r){t=N(r,"Cancel")},m(r,e){D(r,t,e)},d(r){r&&f(t)}}}function se(n){let t;return{c(){t=C("Delete")},l(r){t=N(r,"Delete")},m(r,e){D(r,t,e)},d(r){r&&f(t)}}}function ne(n){let t,r,e,s,a,l,i,p;return a=new tt({props:{variant:"outlined",$$slots:{default:[ae]},$$scope:{ctx:n}}}),a.$on("click",n[12]),i=new tt({props:{variant:"outlined",$$slots:{default:[se]},$$scope:{ctx:n}}}),i.$on("click",n[13]),{c(){t=x("div"),r=x("span"),e=C("Are you sure you wish to delete this guide"),s=T(),P(a.$$.fragment),l=T(),P(i.$$.fragment),this.h()},l(c){t=w(c,"DIV",{class:!0});var $=b(t);r=w($,"SPAN",{});var o=b(r);e=N(o,"Are you sure you wish to delete this guide"),o.forEach(f),s=M($),S(a.$$.fragment,$),l=M($),S(i.$$.fragment,$),$.forEach(f),this.h()},h(){V(t,"class","grid grid-flow-row gap-4")},m(c,$){D(c,t,$),g(t,r),g(r,e),g(t,s),_(a,t,null),g(t,l),_(i,t,null),p=!0},p(c,$){const o={};$&262144&&(o.$$scope={dirty:$,ctx:c}),a.$set(o);const d={};$&262144&&(d.$$scope={dirty:$,ctx:c}),i.$set(d)},i(c){p||(v(a.$$.fragment,c),v(i.$$.fragment,c),p=!0)},o(c){E(a.$$.fragment,c),E(i.$$.fragment,c),p=!1},d(c){c&&f(t),j(a),j(i)}}}function le(n){let t,r,e,s;return t=new Dt({props:{$$slots:{default:[re]},$$scope:{ctx:n}}}),e=new kt({props:{$$slots:{default:[ne]},$$scope:{ctx:n}}}),{c(){P(t.$$.fragment),r=T(),P(e.$$.fragment)},l(a){S(t.$$.fragment,a),r=M(a),S(e.$$.fragment,a)},m(a,l){_(t,a,l),D(a,r,l),_(e,a,l),s=!0},p(a,l){const i={};l&262144&&(i.$$scope={dirty:l,ctx:a}),t.$set(i);const p={};l&262144&&(p.$$scope={dirty:l,ctx:a}),e.$set(p)},i(a){s||(v(t.$$.fragment,a),v(e.$$.fragment,a),s=!0)},o(a){E(t.$$.fragment,a),E(e.$$.fragment,a),s=!1},d(a){j(t,a),a&&f(r),j(e,a)}}}function ie(n){let t,r;return{c(){t=x("span"),r=C(n[4])},l(e){t=w(e,"SPAN",{});var s=b(t);r=N(s,n[4]),s.forEach(f)},m(e,s){D(e,t,s),g(t,r)},p(e,s){s&16&&J(r,e[4])},d(e){e&&f(t)}}}function oe(n){let t,r,e,s,a,l,i=!n[3].fetching&&!n[3].error&&n[3].data.getGuide&&$t(n);const p=[zt,Yt,Xt,Ft],c=[];function $(o,d){return o[3].fetching?0:o[3].error?1:o[3].data.getGuide?2:3}return e=$(n),s=c[e]=p[e](n),{c(){i&&i.c(),t=Q(),r=T(),s.c(),a=Q()},l(o){const d=wt('[data-svelte="svelte-bhfvpi"]',document.head);i&&i.l(d),t=Q(),d.forEach(f),r=M(o),s.l(o),a=Q()},m(o,d){i&&i.m(document.head,null),g(document.head,t),D(o,r,d),c[e].m(o,d),D(o,a,d),l=!0},p(o,[d]){!o[3].fetching&&!o[3].error&&o[3].data.getGuide?i?(i.p(o,d),d&8&&v(i,1)):(i=$t(o),i.c(),v(i,1),i.m(t.parentNode,t)):i&&(Z(),E(i,1,1,()=>{i=null}),U());let h=e;e=$(o),e===h?c[e].p(o,d):(Z(),E(c[h],1,1,()=>{c[h]=null}),U(),s=c[e],s?s.p(o,d):(s=c[e]=p[e](o),s.c()),v(s,1),s.m(a.parentNode,a))},i(o){l||(v(i),v(s),l=!0)},o(o){E(i),E(s),l=!1},d(o){i&&i.d(o),f(t),o&&f(r),c[e].d(o),o&&f(a)}}}const gt=xt(At,{guide:void 0}),Ge=Nt(async n=>(gt.variables.guide=n.params.guideId,Vt({guide:gt})(n)));function fe(n,t,r){let e,s,a=A,l=()=>(a(),a=yt($,m=>r(3,s=m)),$),i,p;it(n,Ht,m=>r(9,i=m)),n.$$.on_destroy.push(()=>a());let{guideId:c}=t,{guide:$}=t;l();let o="",d=!1;const h=Et({query:Ct}),H=bt(!1);it(n,H,m=>r(6,p=m));const k=()=>{h({guideId:c}).then(m=>{m.error?(console.error(m.error.message),r(4,o="Error deleting guide: "+m.error.message),r(2,d=!0)):ct(et+"/guides")})},O=()=>ct(et+"/guide/"+c+"/edit"),W=()=>H.set(!0),G=()=>H.set(!1),L=()=>k();function q(m){p=m,H.set(p)}function y(m){d=m,r(2,d)}return n.$$set=m=>{"guideId"in m&&r(0,c=m.guideId),"guide"in m&&l(r(1,$=m.guide))},n.$$.update=()=>{n.$$.dirty&520&&r(5,e=i?.roles?.deleteContent||i?.id===s?.data?.getGuide?.user?.id),n.$$.dirty&4&&(d||r(4,o=""))},[c,$,d,s,o,e,p,H,k,i,O,W,G,L,q,y]}class De extends rt{constructor(t){super(),at(this,t,fe,oe,st,{guideId:0,guide:1})}}export{De as default,Ge as load};
//# sourceMappingURL=index.svelte-aa284406.js.map