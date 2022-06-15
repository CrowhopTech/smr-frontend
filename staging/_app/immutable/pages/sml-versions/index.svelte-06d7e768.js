import{S as Tt,i as Jt,d as k,bf as lt,s as Wt,e as N,a7 as v,h as I,j as G,a8 as y,k as p,n as H,ac as Y,p as x,ad as ut,a9 as b,u as d,t as h,ab as S,f as w,g as V,b0 as zt,l as R,r as O,v as At,aH as nt,am as Ft,an as Kt,ap as Qt,aI as ot,w as it,bg as Z,aM as $t,q,aV as ct,af as C,ag as D,ah as J,aW as Ut,bh as ft,bi as Xt,x as M,bl as Yt,bm as Zt}from"../../chunks/vendor-856b0c89.js";import{J as rt}from"../../chunks/graphql-90c77071.js";import{P as tt}from"../../chunks/PageControls-e87fc2b4.js";import{m as z}from"../../chunks/markdown-f8c8918c.js";import{M as at}from"../../chunks/MetaDescriptors-0fdcf703.js";import{D as mt,H as pt,B as dt,R as W,C as B}from"../../chunks/forms-accbf7c0.js";import{p as A}from"../../chunks/formatting-f0380eae.js";import"../../chunks/extras-71f1917d.js";import"../../chunks/stores-607bd200.js";import"../../chunks/paths-396f020f.js";const T="src/routes/sml-versions/index.svelte";function st(s,t,i){const o=s.slice();return o[7]=t[i],o}function F(s){let t,i,o,e;o=new tt({props:{totalPages:Math.ceil(s[2]/_),currentPage:s[4]},$$inline:!0});const n={c:function(){t=N("div"),i=N("div"),v(o.$$.fragment),this.h()},l:function(f){t=I(f,"DIV",{class:!0});var u=G(t);i=I(u,"DIV",{});var l=G(i);y(o.$$.fragment,l),l.forEach(p),u.forEach(p),this.h()},h:function(){H(i,T,41,4,1466),Y(t,"class","mb-5 ml-auto flex justify-end"),H(t,T,40,2,1418)},m:function(f,u){x(f,t,u),ut(t,i),b(o,i,null),e=!0},p:function(f,u){const l={};u&4&&(l.totalPages=Math.ceil(f[2]/_)),o.$set(l)},i:function(f){e||(d(o.$$.fragment,f),e=!0)},o:function(f){h(o.$$.fragment,f),e=!1},d:function(f){f&&p(t),S(o)}};return k("SvelteRegisterBlock",{block:n,id:F.name,type:"if",source:"(40:0) {#if totalVersions}",ctx:s}),n}function gt(s){let t,i;t=new mt({props:{class:"max-w-full",$$slots:{default:[Gt]},$$scope:{ctx:s}},$$inline:!0});const o={c:function(){v(t.$$.fragment)},l:function(n){y(t.$$.fragment,n)},m:function(n,c){b(t,n,c),i=!0},p:function(n,c){const f={};c&2051&&(f.$$scope={dirty:c,ctx:n}),t.$set(f)},i:function(n){i||(d(t.$$.fragment,n),i=!0)},o:function(n){h(t.$$.fragment,n),i=!1},d:function(n){S(t,n)}};return k("SvelteRegisterBlock",{block:o,id:gt.name,type:"else",source:"(53:2) {:else}",ctx:s}),o}function xt(s){let t,i;t=new Z({props:{$$slots:{default:[Ht]},$$scope:{ctx:s}},$$inline:!0});const o={c:function(){v(t.$$.fragment)},l:function(n){y(t.$$.fragment,n)},m:function(n,c){b(t,n,c),i=!0},p:function(n,c){const f={};c&2049&&(f.$$scope={dirty:c,ctx:n}),t.$set(f)},i:function(n){i||(d(t.$$.fragment,n),i=!0)},o:function(n){h(t.$$.fragment,n),i=!1},d:function(n){S(t,n)}};return k("SvelteRegisterBlock",{block:o,id:xt.name,type:"if",source:"(51:28) ",ctx:s}),o}function ht(s){let t,i;t=new Z({props:{$$slots:{default:[Ot]},$$scope:{ctx:s}},$$inline:!0});const o={c:function(){v(t.$$.fragment)},l:function(n){y(t.$$.fragment,n)},m:function(n,c){b(t,n,c),i=!0},p:function(n,c){const f={};c&2048&&(f.$$scope={dirty:c,ctx:n}),t.$set(f)},i:function(n){i||(d(t.$$.fragment,n),i=!0)},o:function(n){h(t.$$.fragment,n),i=!1},d:function(n){S(t,n)}};return k("SvelteRegisterBlock",{block:o,id:ht.name,type:"if",source:"(49:2) {#if $versions.fetching}",ctx:s}),o}function kt(s){let t;const i={c:function(){t=C("Version")},l:function(e){t=D(e,"Version")},m:function(e,n){x(e,t,n)},d:function(e){e&&p(t)}};return k("SvelteRegisterBlock",{block:i,id:kt.name,type:"slot",source:"(57:10) <Cell>",ctx:s}),i}function vt(s){let t;const i={c:function(){t=C("Stability")},l:function(e){t=D(e,"Stability")},m:function(e,n){x(e,t,n)},d:function(e){e&&p(t)}};return k("SvelteRegisterBlock",{block:i,id:vt.name,type:"slot",source:"(58:10) <Cell>",ctx:s}),i}function yt(s){let t;const i={c:function(){t=C("Game Version")},l:function(e){t=D(e,"Game Version")},m:function(e,n){x(e,t,n)},d:function(e){e&&p(t)}};return k("SvelteRegisterBlock",{block:i,id:yt.name,type:"slot",source:"(59:10) <Cell>",ctx:s}),i}function bt(s){let t;const i={c:function(){t=C("Release Date")},l:function(e){t=D(e,"Release Date")},m:function(e,n){x(e,t,n)},d:function(e){e&&p(t)}};return k("SvelteRegisterBlock",{block:i,id:bt.name,type:"slot",source:"(60:10) <Cell>",ctx:s}),i}function St(s){let t,i,o,e,n,c,f,u,l,$;t=new B({props:{$$slots:{default:[kt]},$$scope:{ctx:s}},$$inline:!0}),o=new B({props:{$$slots:{default:[vt]},$$scope:{ctx:s}},$$inline:!0}),n=new B({props:{$$slots:{default:[yt]},$$scope:{ctx:s}},$$inline:!0}),f=new B({props:{$$slots:{default:[bt]},$$scope:{ctx:s}},$$inline:!0}),l=new B({$$inline:!0});const g={c:function(){v(t.$$.fragment),i=w(),v(o.$$.fragment),e=w(),v(n.$$.fragment),c=w(),v(f.$$.fragment),u=w(),v(l.$$.fragment)},l:function(r){y(t.$$.fragment,r),i=R(r),y(o.$$.fragment,r),e=R(r),y(n.$$.fragment,r),c=R(r),y(f.$$.fragment,r),u=R(r),y(l.$$.fragment,r)},m:function(r,m){b(t,r,m),x(r,i,m),b(o,r,m),x(r,e,m),b(n,r,m),x(r,c,m),b(f,r,m),x(r,u,m),b(l,r,m),$=!0},p:function(r,m){const L={};m&2048&&(L.$$scope={dirty:m,ctx:r}),t.$set(L);const P={};m&2048&&(P.$$scope={dirty:m,ctx:r}),o.$set(P);const j={};m&2048&&(j.$$scope={dirty:m,ctx:r}),n.$set(j);const E={};m&2048&&(E.$$scope={dirty:m,ctx:r}),f.$set(E)},i:function(r){$||(d(t.$$.fragment,r),d(o.$$.fragment,r),d(n.$$.fragment,r),d(f.$$.fragment,r),d(l.$$.fragment,r),$=!0)},o:function(r){h(t.$$.fragment,r),h(o.$$.fragment,r),h(n.$$.fragment,r),h(f.$$.fragment,r),h(l.$$.fragment,r),$=!1},d:function(r){S(t,r),r&&p(i),S(o,r),r&&p(e),S(n,r),r&&p(c),S(f,r),r&&p(u),S(l,r)}};return k("SvelteRegisterBlock",{block:g,id:St.name,type:"slot",source:"(56:8) <Row>",ctx:s}),g}function wt(s){let t,i;t=new W({props:{$$slots:{default:[St]},$$scope:{ctx:s}},$$inline:!0});const o={c:function(){v(t.$$.fragment)},l:function(n){y(t.$$.fragment,n)},m:function(n,c){b(t,n,c),i=!0},p:function(n,c){const f={};c&2048&&(f.$$scope={dirty:c,ctx:n}),t.$set(f)},i:function(n){i||(d(t.$$.fragment,n),i=!0)},o:function(n){h(t.$$.fragment,n),i=!1},d:function(n){S(t,n)}};return k("SvelteRegisterBlock",{block:o,id:wt.name,type:"slot",source:"(55:6) <Head>",ctx:s}),o}function Rt(s){let t=s[7].version+"",i;const o={c:function(){i=C(t)},l:function(n){i=D(n,t)},m:function(n,c){x(n,i,c)},p:function(n,c){c&1&&t!==(t=n[7].version+"")&&J(i,t)},d:function(n){n&&p(i)}};return k("SvelteRegisterBlock",{block:o,id:Rt.name,type:"slot",source:"(67:12) <Cell>",ctx:s}),o}function Bt(s){let t=s[7].stability+"",i;const o={c:function(){i=C(t)},l:function(n){i=D(n,t)},m:function(n,c){x(n,i,c)},p:function(n,c){c&1&&t!==(t=n[7].stability+"")&&J(i,t)},d:function(n){n&&p(i)}};return k("SvelteRegisterBlock",{block:o,id:Bt.name,type:"slot",source:"(68:12) <Cell>",ctx:s}),o}function Vt(s){let t=s[7].satisfactory_version+"",i;const o={c:function(){i=C(t)},l:function(n){i=D(n,t)},m:function(n,c){x(n,i,c)},p:function(n,c){c&1&&t!==(t=n[7].satisfactory_version+"")&&J(i,t)},d:function(n){n&&p(i)}};return k("SvelteRegisterBlock",{block:o,id:Vt.name,type:"slot",source:"(69:12) <Cell>",ctx:s}),o}function Ct(s){let t=A(s[7].date)+"",i;const o={c:function(){i=C(t)},l:function(n){i=D(n,t)},m:function(n,c){x(n,i,c)},p:function(n,c){c&1&&t!==(t=A(n[7].date)+"")&&J(i,t)},d:function(n){n&&p(i)}};return k("SvelteRegisterBlock",{block:o,id:Ct.name,type:"slot",source:"(70:12) <Cell>",ctx:s}),o}function Dt(s){let t;const i={c:function(){t=C("View")},l:function(e){t=D(e,"View")},m:function(e,n){x(e,t,n)},d:function(e){e&&p(t)}};return k("SvelteRegisterBlock",{block:i,id:Dt.name,type:"slot",source:'(73:16) <Button variant=\\"outlined\\" href={version.link}>',ctx:s}),i}function Mt(s){let t,i,o;i=new $t({props:{variant:"outlined",href:s[7].link,$$slots:{default:[Dt]},$$scope:{ctx:s}},$$inline:!0});const e={c:function(){t=N("div"),v(i.$$.fragment),this.h()},l:function(c){t=I(c,"DIV",{class:!0});var f=G(t);y(i.$$.fragment,f),f.forEach(p),this.h()},h:function(){Y(t,"class","grid grid-flow-col gap-4"),H(t,T,71,14,2388)},m:function(c,f){x(c,t,f),b(i,t,null),o=!0},p:function(c,f){const u={};f&1&&(u.href=c[7].link),f&2048&&(u.$$scope={dirty:f,ctx:c}),i.$set(u)},i:function(c){o||(d(i.$$.fragment,c),o=!0)},o:function(c){h(i.$$.fragment,c),o=!1},d:function(c){c&&p(t),S(i)}};return k("SvelteRegisterBlock",{block:e,id:Mt.name,type:"slot",source:"(71:12) <Cell>",ctx:s}),e}function _t(s){let t,i,o,e,n,c,f,u,l,$;t=new B({props:{$$slots:{default:[Rt]},$$scope:{ctx:s}},$$inline:!0}),o=new B({props:{$$slots:{default:[Bt]},$$scope:{ctx:s}},$$inline:!0}),n=new B({props:{$$slots:{default:[Vt]},$$scope:{ctx:s}},$$inline:!0}),f=new B({props:{$$slots:{default:[Ct]},$$scope:{ctx:s}},$$inline:!0}),l=new B({props:{$$slots:{default:[Mt]},$$scope:{ctx:s}},$$inline:!0});const g={c:function(){v(t.$$.fragment),i=w(),v(o.$$.fragment),e=w(),v(n.$$.fragment),c=w(),v(f.$$.fragment),u=w(),v(l.$$.fragment)},l:function(r){y(t.$$.fragment,r),i=R(r),y(o.$$.fragment,r),e=R(r),y(n.$$.fragment,r),c=R(r),y(f.$$.fragment,r),u=R(r),y(l.$$.fragment,r)},m:function(r,m){b(t,r,m),x(r,i,m),b(o,r,m),x(r,e,m),b(n,r,m),x(r,c,m),b(f,r,m),x(r,u,m),b(l,r,m),$=!0},p:function(r,m){const L={};m&2049&&(L.$$scope={dirty:m,ctx:r}),t.$set(L);const P={};m&2049&&(P.$$scope={dirty:m,ctx:r}),o.$set(P);const j={};m&2049&&(j.$$scope={dirty:m,ctx:r}),n.$set(j);const E={};m&2049&&(E.$$scope={dirty:m,ctx:r}),f.$set(E);const et={};m&2049&&(et.$$scope={dirty:m,ctx:r}),l.$set(et)},i:function(r){$||(d(t.$$.fragment,r),d(o.$$.fragment,r),d(n.$$.fragment,r),d(f.$$.fragment,r),d(l.$$.fragment,r),$=!0)},o:function(r){h(t.$$.fragment,r),h(o.$$.fragment,r),h(n.$$.fragment,r),h(f.$$.fragment,r),h(l.$$.fragment,r),$=!1},d:function(r){S(t,r),r&&p(i),S(o,r),r&&p(e),S(n,r),r&&p(c),S(f,r),r&&p(u),S(l,r)}};return k("SvelteRegisterBlock",{block:g,id:_t.name,type:"slot",source:"(66:10) <Row on:click={() => toggleRow(version.id)}>",ctx:s}),g}function K(s){let t,i;t=new W({props:{$$slots:{default:[Nt]},$$scope:{ctx:s}},$$inline:!0});const o={c:function(){v(t.$$.fragment)},l:function(n){y(t.$$.fragment,n)},m:function(n,c){b(t,n,c),i=!0},p:function(n,c){const f={};c&2049&&(f.$$scope={dirty:c,ctx:n}),t.$set(f)},i:function(n){i||(d(t.$$.fragment,n),i=!0)},o:function(n){h(t.$$.fragment,n),i=!1},d:function(n){S(t,n)}};return k("SvelteRegisterBlock",{block:o,id:K.name,type:"if",source:"(78:10) {#if expandedVersions.has(version.id)}",ctx:s}),o}function Lt(s){const t={c:M,l:M,m:M,p:M,d:M};return k("SvelteRegisterBlock",{block:t,id:Lt.name,type:"catch",source:'(1:0) <script lang=\\"ts\\">import { GetSmlVersionsDocument }',ctx:s}),t}function Pt(s){let t,i=s[10]+"",o;const e={c:function(){t=new Yt(!1),o=V(),this.h()},l:function(c){t=Zt(c,!1),o=V(),this.h()},h:function(){t.a=o},m:function(c,f){t.m(i,c,f),x(c,o,f)},p:function(c,f){f&1&&i!==(i=c[10]+"")&&t.p(i)},d:function(c){c&&p(o),c&&t.d()}};return k("SvelteRegisterBlock",{block:e,id:Pt.name,type:"then",source:"(81:75)                    {@html changelogRendered}",ctx:s}),e}function jt(s){const t={c:M,l:M,m:M,p:M,d:M};return k("SvelteRegisterBlock",{block:t,id:jt.name,type:"pending",source:'(1:0) <script lang=\\"ts\\">import { GetSmlVersionsDocument }',ctx:s}),t}function Et(s){let t,i,o={ctx:s,current:null,token:null,hasCatch:!1,pending:jt,then:Pt,catch:Lt,value:10};ft(i=z(s[7].changelog),o);const e={c:function(){t=V(),o.block.c()},l:function(c){t=V(),o.block.l(c)},m:function(c,f){x(c,t,f),o.block.m(c,o.anchor=f),o.mount=()=>t.parentNode,o.anchor=t},p:function(c,f){s=c,o.ctx=s,f&1&&i!==(i=z(s[7].changelog))&&ft(i,o)||Xt(o,s,f)},d:function(c){c&&p(t),o.block.d(c),o.token=null,o=null}};return k("SvelteRegisterBlock",{block:e,id:Et.name,type:"slot",source:'(80:14) <Cell colspan={5} class=\\"p-2 markdown-content\\">',ctx:s}),e}function Nt(s){let t,i,o;t=new B({props:{colspan:5,class:"p-2 markdown-content",$$slots:{default:[Et]},$$scope:{ctx:s}},$$inline:!0});const e={c:function(){v(t.$$.fragment),i=w()},l:function(c){y(t.$$.fragment,c),i=R(c)},m:function(c,f){b(t,c,f),x(c,i,f),o=!0},p:function(c,f){const u={};f&2049&&(u.$$scope={dirty:f,ctx:c}),t.$set(u)},i:function(c){o||(d(t.$$.fragment,c),o=!0)},o:function(c){h(t.$$.fragment,c),o=!1},d:function(c){S(t,c),c&&p(i)}};return k("SvelteRegisterBlock",{block:e,id:Nt.name,type:"slot",source:"(79:12) <Row>",ctx:s}),e}function Q(s){let t,i,o=s[1].has(s[7].id),e,n;function c(){return s[6](s[7])}t=new W({props:{$$slots:{default:[_t]},$$scope:{ctx:s}},$$inline:!0}),t.$on("click",c);let f=o&&K(s);const u={c:function(){v(t.$$.fragment),i=w(),f&&f.c(),e=V()},l:function($){y(t.$$.fragment,$),i=R($),f&&f.l($),e=V()},m:function($,g){b(t,$,g),x($,i,g),f&&f.m($,g),x($,e,g),n=!0},p:function($,g){s=$;const a={};g&2049&&(a.$$scope={dirty:g,ctx:s}),t.$set(a),g&3&&(o=s[1].has(s[7].id)),o?f?(f.p(s,g),g&3&&d(f,1)):(f=K(s),f.c(),d(f,1),f.m(e.parentNode,e)):f&&(q(),h(f,1,1,()=>{f=null}),O())},i:function($){n||(d(t.$$.fragment,$),d(f),n=!0)},o:function($){h(t.$$.fragment,$),h(f),n=!1},d:function($){S(t,$),$&&p(i),f&&f.d($),$&&p(e)}};return k("SvelteRegisterBlock",{block:u,id:Q.name,type:"each",source:"(65:8) {#each $versions.data.getSMLVersions.sml_versions as version}",ctx:s}),u}function It(s){let t,i,o=s[0].data.getSMLVersions.sml_versions;ct(o);let e=[];for(let f=0;f<o.length;f+=1)e[f]=Q(st(s,o,f));const n=f=>h(e[f],1,1,()=>{e[f]=null}),c={c:function(){for(let u=0;u<e.length;u+=1)e[u].c();t=V()},l:function(u){for(let l=0;l<e.length;l+=1)e[l].l(u);t=V()},m:function(u,l){for(let $=0;$<e.length;$+=1)e[$].m(u,l);x(u,t,l),i=!0},p:function(u,l){if(l&35){o=u[0].data.getSMLVersions.sml_versions,ct(o);let $;for($=0;$<o.length;$+=1){const g=st(u,o,$);e[$]?(e[$].p(g,l),d(e[$],1)):(e[$]=Q(g),e[$].c(),d(e[$],1),e[$].m(t.parentNode,t))}for(q(),$=o.length;$<e.length;$+=1)n($);O()}},i:function(u){if(!i){for(let l=0;l<o.length;l+=1)d(e[l]);i=!0}},o:function(u){e=e.filter(Boolean);for(let l=0;l<e.length;l+=1)h(e[l]);i=!1},d:function(u){Ut(e,u),u&&p(t)}};return k("SvelteRegisterBlock",{block:c,id:It.name,type:"slot",source:"(64:6) <Body>",ctx:s}),c}function Gt(s){let t,i,o,e;t=new pt({props:{$$slots:{default:[wt]},$$scope:{ctx:s}},$$inline:!0}),o=new dt({props:{$$slots:{default:[It]},$$scope:{ctx:s}},$$inline:!0});const n={c:function(){v(t.$$.fragment),i=w(),v(o.$$.fragment)},l:function(f){y(t.$$.fragment,f),i=R(f),y(o.$$.fragment,f)},m:function(f,u){b(t,f,u),x(f,i,u),b(o,f,u),e=!0},p:function(f,u){const l={};u&2048&&(l.$$scope={dirty:u,ctx:f}),t.$set(l);const $={};u&2051&&($.$$scope={dirty:u,ctx:f}),o.$set($)},i:function(f){e||(d(t.$$.fragment,f),d(o.$$.fragment,f),e=!0)},o:function(f){h(t.$$.fragment,f),h(o.$$.fragment,f),e=!1},d:function(f){S(t,f),f&&p(i),S(o,f)}};return k("SvelteRegisterBlock",{block:n,id:Gt.name,type:"slot",source:'(54:4) <DataTable class=\\"max-w-full\\">',ctx:s}),n}function Ht(s){let t,i=s[0].error.message+"",o;const e={c:function(){t=C("Oh no... "),o=C(i)},l:function(c){t=D(c,"Oh no... "),o=D(c,i)},m:function(c,f){x(c,t,f),x(c,o,f)},p:function(c,f){f&1&&i!==(i=c[0].error.message+"")&&J(o,i)},d:function(c){c&&p(t),c&&p(o)}};return k("SvelteRegisterBlock",{block:e,id:Ht.name,type:"slot",source:"(52:4) <Content>",ctx:s}),e}function Ot(s){let t;const i={c:function(){t=C("Loading...")},l:function(e){t=D(e,"Loading...")},m:function(e,n){x(e,t,n)},d:function(e){e&&p(t)}};return k("SvelteRegisterBlock",{block:i,id:Ot.name,type:"slot",source:"(50:4) <Content>",ctx:s}),i}function qt(s){let t,i,o,e;const n=[ht,xt,gt],c=[];function f(l,$){return l[0].fetching?0:l[0].error?1:2}t=f(s),i=c[t]=n[t](s);const u={c:function(){i.c(),o=V()},l:function($){i.l($),o=V()},m:function($,g){c[t].m($,g),x($,o,g),e=!0},p:function($,g){let a=t;t=f($),t===a?c[t].p($,g):(q(),h(c[a],1,1,()=>{c[a]=null}),O(),i=c[t],i?i.p($,g):(i=c[t]=n[t]($),i.c()),d(i,1),i.m(o.parentNode,o))},i:function($){e||(d(i),e=!0)},o:function($){h(i),e=!1},d:function($){c[t].d($),$&&p(o)}};return k("SvelteRegisterBlock",{block:u,id:qt.name,type:"slot",source:"(48:0) <Card>",ctx:s}),u}function U(s){let t,i,o,e;o=new tt({props:{totalPages:Math.ceil(s[2]/_),currentPage:s[4]},$$inline:!0});const n={c:function(){t=N("div"),i=N("div"),v(o.$$.fragment),this.h()},l:function(f){t=I(f,"DIV",{class:!0});var u=G(t);i=I(u,"DIV",{});var l=G(i);y(o.$$.fragment,l),l.forEach(p),u.forEach(p),this.h()},h:function(){H(i,T,94,4,3028),Y(t,"class","mt-5 ml-auto flex justify-end"),H(t,T,93,2,2980)},m:function(f,u){x(f,t,u),ut(t,i),b(o,i,null),e=!0},p:function(f,u){const l={};u&4&&(l.totalPages=Math.ceil(f[2]/_)),o.$set(l)},i:function(f){e||(d(o.$$.fragment,f),e=!0)},o:function(f){h(o.$$.fragment,f),e=!1},d:function(f){f&&p(t),S(o)}};return k("SvelteRegisterBlock",{block:n,id:U.name,type:"if",source:"(93:0) {#if totalVersions}",ctx:s}),n}function X(s){let t,i,o,e,n,c,f;t=new at({props:{description:"Versions of the Satisfactory Mod Loader",title:"Satisfactory Mod Loader versions"},$$inline:!0});let u=s[2]&&F(s);e=new lt({props:{$$slots:{default:[qt]},$$scope:{ctx:s}},$$inline:!0});let l=s[2]&&U(s);const $={c:function(){v(t.$$.fragment),i=w(),u&&u.c(),o=w(),v(e.$$.fragment),n=w(),l&&l.c(),c=V(),this.h()},l:function(a){const r=zt('[data-svelte="svelte-1fte9vn"]',document.head);y(t.$$.fragment,r),r.forEach(p),i=R(a),u&&u.l(a),o=R(a),y(e.$$.fragment,a),n=R(a),l&&l.l(a),c=V(),this.h()},h:function(){document.title="SML Versions - SMR"},m:function(a,r){b(t,document.head,null),x(a,i,r),u&&u.m(a,r),x(a,o,r),b(e,a,r),x(a,n,r),l&&l.m(a,r),x(a,c,r),f=!0},p:function(a,[r]){a[2]?u?(u.p(a,r),r&4&&d(u,1)):(u=F(a),u.c(),d(u,1),u.m(o.parentNode,o)):u&&(q(),h(u,1,1,()=>{u=null}),O());const m={};r&2051&&(m.$$scope={dirty:r,ctx:a}),e.$set(m),a[2]?l?(l.p(a,r),r&4&&d(l,1)):(l=U(a),l.c(),d(l,1),l.m(c.parentNode,c)):l&&(q(),h(l,1,1,()=>{l=null}),O())},i:function(a){f||(d(t.$$.fragment,a),d(u),d(e.$$.fragment,a),d(l),f=!0)},o:function(a){h(t.$$.fragment,a),h(u),h(e.$$.fragment,a),h(l),f=!1},d:function(a){S(t),a&&p(i),u&&u.d(a),a&&p(o),S(e,a),a&&p(n),l&&l.d(a),a&&p(c)}};return k("SvelteRegisterBlock",{block:$,id:X.name,type:"component",source:"",ctx:s}),$}const _=20;function te(s,t,i){let o,{$$slots:e={},$$scope:n}=t;At("Sml_versions",e,[]);let c=new Set;const f=nt(rt,{offset:0,limit:_});Ft(f,"versions"),Kt(s,f,r=>i(0,o=r));const u=it(1);let l;u.subscribe(r=>{Qt(f,o.variables.offset=(r-1)*_,o),o.reexecute()}),ot(f);const $=r=>{c.has(r)?c.delete(r):c.add(r),i(1,c)},g=[];Object.keys(t).forEach(r=>{!~g.indexOf(r)&&r.slice(0,2)!=="$$"&&r!=="slot"&&console.warn(`<Sml_versions> was created with unknown prop '${r}'`)});const a=r=>$(r.id);return s.$capture_state=()=>({GetSmlVersionsDocument:rt,operationStore:nt,query:ot,writable:it,PageControls:tt,markdown:z,MetaDescriptors:at,Card:lt,Content:Z,DataTable:mt,Head:pt,Body:dt,Row:W,Cell:B,Button:$t,prettyDate:A,expandedVersions:c,perPage:_,versions:f,page:u,totalVersions:l,toggleRow:$,$versions:o}),s.$inject_state=r=>{"expandedVersions"in r&&i(1,c=r.expandedVersions),"totalVersions"in r&&i(2,l=r.totalVersions)},t&&"$$inject"in t&&s.$inject_state(t.$$inject),s.$$.update=()=>{s.$$.dirty&1&&i(2,l=o?.data?.getSMLVersions?.count)},[o,c,l,f,u,$,a]}class $e extends Tt{constructor(t){super(t),Jt(this,t,te,X,Wt,{}),k("SvelteRegisterComponent",{component:this,tagName:"Sml_versions",options:t,id:X.name})}}export{$e as default};
//# sourceMappingURL=index.svelte-06d7e768.js.map