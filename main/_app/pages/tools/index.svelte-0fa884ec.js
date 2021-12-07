import{S as q,i as H,s as N,as as W,j as I,m as T,o as j,x,u as E,v as A,at as O,aU as Q,e as k,k as C,c as b,a as S,d as p,n as V,b as w,aV as U,Z as v,f as D,V as y,aW as Z,t as z,g as M,h as G,ae as J,ag as Y,X as tt,a1 as et,w as ot,az as at,r as st}from"../../chunks/vendor-c631e359.js";import{a as rt}from"../../chunks/paths-6758d194.js";import{g as nt}from"../../chunks/navigation-51f4a605.js";import{M as it}from"../../chunks/MetaDescriptors-1371ef7f.js";import"../../chunks/singletons-12a22614.js";import"../../chunks/stores-57c7b888.js";function lt(n){let e,o,t,s=n[0].name+"",f,g,$,u,r,_=n[0].author+"",a,c,i,l=n[0].description+"",d;return{c(){e=k("div"),o=k("a"),t=k("span"),f=z(s),$=C(),u=k("h5"),r=k("span"),a=z(_),c=C(),i=k("div"),d=z(l),this.h()},l(m){e=b(m,"DIV",{style:!0});var h=S(e);o=b(h,"A",{href:!0});var P=S(o);t=b(P,"SPAN",{class:!0});var R=S(t);f=M(R,s),R.forEach(p),P.forEach(p),$=V(h),u=b(h,"H5",{class:!0,style:!0});var B=S(u);r=b(B,"SPAN",{});var L=S(r);a=M(L,_),L.forEach(p),B.forEach(p),h.forEach(p),c=V(m),i=b(m,"DIV",{});var X=S(i);d=M(X,l),X.forEach(p),this.h()},h(){w(t,"class","text-xl text-gray-50"),w(o,"href",g=n[0].link),w(u,"class","text-sm"),v(u,"margin","0"),v(e,"margin-bottom","10px")},m(m,h){D(m,e,h),y(e,o),y(o,t),y(t,f),y(e,$),y(e,u),y(u,r),y(r,a),D(m,c,h),D(m,i,h),y(i,d)},p(m,h){h&1&&s!==(s=m[0].name+"")&&G(f,s),h&1&&g!==(g=m[0].link)&&w(o,"href",g),h&1&&_!==(_=m[0].author+"")&&G(a,_),h&1&&l!==(l=m[0].description+"")&&G(d,l)},d(m){m&&p(e),m&&p(c),m&&p(i)}}}function ct(n){let e;return{c(){e=z("info")},l(o){e=M(o,"info")},m(o,t){D(o,e,t)},d(o){o&&p(e)}}}function ft(n){let e,o;return e=new Y({props:{class:"material-icons",$$slots:{default:[ct]},$$scope:{ctx:n}}}),{c(){I(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,s){j(e,t,s),o=!0},p(t,s){const f={};s&8&&(f.$$scope={dirty:s,ctx:t}),e.$set(f)},i(t){o||(x(e.$$.fragment,t),o=!0)},o(t){E(e.$$.fragment,t),o=!1},d(t){A(e,t)}}}function ut(n){let e,o;return e=new J({props:{href:n[0].link,"aria-label":"Go to tool page",title:"Go to tool page",$$slots:{default:[ft]},$$scope:{ctx:n}}}),{c(){I(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,s){j(e,t,s),o=!0},p(t,s){const f={};s&1&&(f.href=t[0].link),s&8&&(f.$$scope={dirty:s,ctx:t}),e.$set(f)},i(t){o||(x(e.$$.fragment,t),o=!0)},o(t){E(e.$$.fragment,t),o=!1},d(t){A(e,t)}}}function dt(n){let e,o,t,s,f,g,$,u,r,_,a,c,i;return u=new O({props:{style:"display: flex; flex-direction: column; padding-bottom: 0;",$$slots:{default:[lt]},$$scope:{ctx:n}}}),_=new Q({props:{style:"align-self: end;",$$slots:{default:[ut]},$$scope:{ctx:n}}}),{c(){e=k("div"),o=k("div"),t=k("img"),g=C(),$=k("div"),I(u.$$.fragment),r=C(),I(_.$$.fragment),this.h()},l(l){e=b(l,"DIV",{style:!0});var d=S(e);o=b(d,"DIV",{style:!0});var m=S(o);t=b(m,"IMG",{crossorigin:!0,src:!0,alt:!0,style:!0,class:!0}),m.forEach(p),g=V(d),$=b(d,"DIV",{style:!0});var h=S($);T(u.$$.fragment,h),r=V(h),T(_.$$.fragment,h),h.forEach(p),d.forEach(p),this.h()},h(){w(t,"crossorigin","anonymous"),U(t.src,s=n[1])||w(t,"src",s),w(t,"alt",f=""+(n[0].name+" Logo")),v(t,"max-width","100%"),v(t,"max-height","100%"),v(t,"min-width","200px"),v(t,"min-height","200px"),w(t,"class","logo"),v(o,"max-width","200px"),v(o,"max-height","200px"),v(o,"cursor","pointer"),v($,"display","flex"),v($,"flex-direction","column"),v($,"justify-content","space-between"),v($,"width","100%"),v(e,"display","flex"),v(e,"height","100%")},m(l,d){D(l,e,d),y(e,o),y(o,t),y(e,g),y(e,$),j(u,$,null),y($,r),j(_,$,null),a=!0,c||(i=Z(o,"click",n[2]),c=!0)},p(l,d){(!a||d&2&&!U(t.src,s=l[1]))&&w(t,"src",s),(!a||d&1&&f!==(f=""+(l[0].name+" Logo")))&&w(t,"alt",f);const m={};d&9&&(m.$$scope={dirty:d,ctx:l}),u.$set(m);const h={};d&9&&(h.$$scope={dirty:d,ctx:l}),_.$set(h)},i(l){a||(x(u.$$.fragment,l),x(_.$$.fragment,l),a=!0)},o(l){E(u.$$.fragment,l),E(_.$$.fragment,l),a=!1},d(l){l&&p(e),A(u),A(_),c=!1,i()}}}function mt(n){let e,o;return e=new W({props:{style:"height: 100%; min-width: 450px",$$slots:{default:[dt]},$$scope:{ctx:n}}}),{c(){I(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,s){j(e,t,s),o=!0},p(t,[s]){const f={};s&11&&(f.$$scope={dirty:s,ctx:t}),e.$set(f)},i(t){o||(x(e.$$.fragment,t),o=!0)},o(t){E(e.$$.fragment,t),o=!1},d(t){A(e,t)}}}function ht(n,e,o){let t,{tool:s}=e;const f=()=>nt(s.link);return n.$$set=g=>{"tool"in g&&o(0,s=g.tool)},n.$$.update=()=>{n.$$.dirty&1&&o(1,t=s.logo||rt+"/images/no_image.png")},[s,t,f]}class pt extends q{constructor(e){super();H(this,e,ht,mt,N,{tool:0})}}function F(n,e,o){const t=n.slice();return t[1]=e[o],t}function K(n){let e,o;return e=new pt({props:{tool:n[1]}}),{c(){I(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,s){j(e,t,s),o=!0},p:tt,i(t){o||(x(e.$$.fragment,t),o=!0)},o(t){E(e.$$.fragment,t),o=!1},d(t){A(e,t)}}}function gt(n){let e,o,t,s,f,g,$;e=new it({props:{description:"A collection of useful tools for Satisfactory, such as recipe calculators and save editors",title:"Tools"}});let u=n[0],r=[];for(let a=0;a<u.length;a+=1)r[a]=K(F(n,u,a));const _=a=>E(r[a],1,1,()=>{r[a]=null});return{c(){I(e.$$.fragment),o=C(),t=k("h1"),s=z("Tools"),f=C(),g=k("div");for(let a=0;a<r.length;a+=1)r[a].c();this.h()},l(a){const c=et('[data-svelte="svelte-f11w9o"]',document.head);T(e.$$.fragment,c),c.forEach(p),o=V(a),t=b(a,"H1",{class:!0});var i=S(t);s=M(i,"Tools"),i.forEach(p),f=V(a),g=b(a,"DIV",{class:!0});var l=S(g);for(let d=0;d<r.length;d+=1)r[d].l(l);l.forEach(p),this.h()},h(){document.title="Tools - SMR",w(t,"class","text-4xl my-4 font-bold"),w(g,"class","grid 3xl:grid-cols-3 2xl:grid-cols-2 grid-cols-1 gap-4")},m(a,c){j(e,document.head,null),D(a,o,c),D(a,t,c),y(t,s),D(a,f,c),D(a,g,c);for(let i=0;i<r.length;i+=1)r[i].m(g,null);$=!0},p(a,[c]){if(c&1){u=a[0];let i;for(i=0;i<u.length;i+=1){const l=F(a,u,i);r[i]?(r[i].p(l,c),x(r[i],1)):(r[i]=K(l),r[i].c(),x(r[i],1),r[i].m(g,null))}for(st(),i=u.length;i<r.length;i+=1)_(i);ot()}},i(a){if(!$){x(e.$$.fragment,a);for(let c=0;c<u.length;c+=1)x(r[c]);$=!0}},o(a){E(e.$$.fragment,a),r=r.filter(Boolean);for(let c=0;c<r.length;c+=1)E(r[c]);$=!1},d(a){A(e),a&&p(o),a&&p(t),a&&p(f),a&&p(g),at(r,a)}}}function $t(n){return[[{name:"Save Editor",author:"Goz3rr",logo:"https://cdn.jsdelivr.net/gh/Goz3rr/SatisfactorySaveEditor@6958101e3f2c0e50ba92df798ebefe4e6bdd4eb5/Reference%20Materials/SatisfactorySaveEditorLogo.png",description:"A work in progress save editor for Satisfactory. Consists of both a save parser and an application for viewing and editing the parsed data.",link:"https://github.com/Goz3rr/SatisfactorySaveEditor"},{name:"Satisfactory Tools",author:"greeny",logo:"https://i.imgur.com/WQEHo26.png",description:"A collection of powerful tools for planning and building the perfect base. Calculate your production or consumption, browse items, buildings, and schematics and share your builds with others!",link:"https://www.satisfactorytools.com/"},{name:"Recipe Calculator",author:"KirkMcDonald",logo:"",description:"Recipe calculator using sankey diagrams.",link:"https://kirkmcdonald.github.io/satisfactory-calculator/calc.html"},{name:"Map",author:"Cornik and S4XXX",logo:"",description:"Satisfactory map based on in-game coordinates.",link:"https://www.satisfactorymap.com/"},{name:"SatisGraphtory",author:"tehalexf and thinkaliker",logo:"https://cdn.jsdelivr.net/gh/rhocode/rhocode.github.io@4713b4887e8821f1482de7af4ae32fb6a4b2bcaf/img/satoolsfactory_icons/dot.png",description:"This is a factory planner/optimizer/analyzer tool for factories old and new! Simulate resource chains, factory layouts, and more!",link:"https://satisgraphtory.com/"},{name:"Satisfactory Calculator",author:"Anthor",logo:"",description:"Collection of tools for Satisfactory (Production planner, Interactive map, Recipes, etc)",link:"https://satisfactory-calculator.com/"},{name:"Savegame Tool",author:"SillyBits",logo:"",description:"Allows for numerous options regarding satisfactory savegames, e.g. searching and erasing damaged entities",link:"https://github.com/SillyBits/satisfactory-savegame-tool-ng"},{name:"Satisfactory UI Kit",author:"Deantendo",logo:"",description:"A UI kit for Satisfactory mods",link:"https://github.com/deantendo/sfuikit"},{name:"Ficsit.info",author:"Nevir",logo:"https://github.com/ficsit/ficsit.info/blob/master/web/assets/site-icons/maskable-512.png?raw=true",description:"Production line optimization tool, and game info database",link:"https://ficsit.info/"},{name:"Daniel's Satisfactory Tools",author:"DanielTheProgrammer",logo:"https://i.imgur.com/Ogt0r9k.png",description:"Visualize production chains, and browse items and recipes!",link:"https://daniel2013.github.io/satisfactory/"},{name:"Satisfactory Toolbox",author:"Lucek",logo:"",description:'Factory tool collection, with main tool called "factory planner" with detailed, realtime stats for production and consumption, overclocking and much more.',link:"https://toolbox.satisfactory.lucek.io/"}]]}class St extends q{constructor(e){super();H(this,e,$t,gt,N,{})}}export{St as default};
//# sourceMappingURL=index.svelte-0fa884ec.js.map
