import{S as e,i as t,s as a,A as i,J as n,c as s,a as r,d as o,K as l,f as c,p as d,C as f,L as h,e as u,t as p,k as m,j as g,g as v,n as b,m as k,b as w,F as y,o as E,h as N,v as $,r as S,w as x,B as V,u as D,M as I,l as A,N as M}from"../chunks/index-e4289dff.js";import{a as F}from"../chunks/paths-0c317a3d.js";import{z as _,A as P}from"../chunks/urql-svelte-c8c3b940.js";var j={body:'<path d="M13 14h-2V9h2m0 9h-2v-2h2M1 21h22L12 2L1 21z" fill="currentColor"/>',width:24,height:24};function L(e){var t={exports:{}};return e(t,t.exports),t.exports}var O=L((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.merge=void 0,t.merge=function(e,t,a){const i=Object.create(null),n=[e,t,a];for(let s=0;s<3;s++){const e=n[s];if("object"==typeof e&&e)for(const t in e)i[t]=e[t]}return i}})),T=L((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.fullCustomisations=t.defaults=void 0,t.defaults=Object.freeze({inline:!1,width:null,height:null,hAlign:"center",vAlign:"middle",slice:!1,hFlip:!1,vFlip:!1,rotate:0}),t.fullCustomisations=function(e){return O.merge(t.defaults,e)}})),z=L((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.alignmentFromString=t.flipFromString=void 0;const a=/[\s,]+/;t.flipFromString=function(e,t){t.split(a).forEach((t=>{switch(t.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0}}))},t.alignmentFromString=function(e,t){t.split(a).forEach((t=>{const a=t.trim();switch(a){case"left":case"center":case"right":e.hAlign=a;break;case"top":case"middle":case"bottom":e.vAlign=a;break;case"slice":case"crop":e.slice=!0;break;case"meet":e.slice=!1}}))}})),C=L((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.rotateFromString=void 0,t.rotateFromString=function(e){const t=e.replace(/^-?[0-9.]*/,"");function a(e){for(;e<0;)e+=4;return e%4}if(""===t){const t=parseInt(e);return isNaN(t)?0:a(t)}if(t!==e){let i=0;switch(t){case"%":i=25;break;case"deg":i=90}if(i){let n=parseFloat(e.slice(0,e.length-t.length));return isNaN(n)?0:(n/=i,n%1==0?a(n):0)}}return 0}})),H=L((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.fullIcon=t.iconDefaults=void 0,t.iconDefaults=Object.freeze({body:"",left:0,top:0,width:16,height:16,rotate:0,vFlip:!1,hFlip:!1}),t.fullIcon=function(e){return O.merge(t.iconDefaults,e)}})),U=L((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.calculateSize=void 0;const a=/(-?[0-9.]*[0-9]+[0-9.]*)/g,i=/^-?[0-9.]*[0-9]+[0-9.]*$/g;t.calculateSize=function(e,t,n){if(1===t)return e;if(n=void 0===n?100:n,"number"==typeof e)return Math.ceil(e*t*n)/n;if("string"!=typeof e)return e;const s=e.split(a);if(null===s||!s.length)return e;const r=[];let o=s.shift(),l=i.test(o);for(;;){if(l){const e=parseFloat(o);isNaN(e)?r.push(o):r.push(Math.ceil(e*t*n)/n)}else r.push(o);if(o=s.shift(),void 0===o)return r.join("");l=!l}}})),B=L((function(e,t){function a(e){let t="";switch(e.hAlign){case"left":t+="xMin";break;case"right":t+="xMax";break;default:t+="xMid"}switch(e.vAlign){case"top":t+="YMin";break;case"bottom":t+="YMax";break;default:t+="YMid"}return t+=e.slice?" slice":" meet",t}Object.defineProperty(t,"__esModule",{value:!0}),t.iconToSVG=void 0,t.iconToSVG=function(e,t){const i={left:e.left,top:e.top,width:e.width,height:e.height},n=[],s=t.hFlip!==e.hFlip,r=t.vFlip!==e.vFlip;let o,l,c,d=t.rotate+e.rotate;switch(s?r?d+=2:(n.push("translate("+(i.width+i.left)+" "+(0-i.top)+")"),n.push("scale(-1 1)"),i.top=i.left=0):r&&(n.push("translate("+(0-i.left)+" "+(i.height+i.top)+")"),n.push("scale(1 -1)"),i.top=i.left=0),d%=4,d){case 1:o=i.height/2+i.top,n.unshift("rotate(90 "+o+" "+o+")");break;case 2:n.unshift("rotate(180 "+(i.width/2+i.left)+" "+(i.height/2+i.top)+")");break;case 3:o=i.width/2+i.left,n.unshift("rotate(-90 "+o+" "+o+")")}d%2==1&&(0===i.left&&0===i.top||(o=i.left,i.left=i.top,i.top=o),i.width!==i.height&&(o=i.width,i.width=i.height,i.height=o)),null===t.width&&null===t.height?(c="1em",l=U.calculateSize(c,i.width/i.height)):null!==t.width&&null!==t.height?(l=t.width,c=t.height):null!==t.height?(c=t.height,l=U.calculateSize(c,i.width/i.height)):(l=t.width,c=U.calculateSize(l,i.height/i.width)),"auto"===l&&(l=i.width),"auto"===c&&(c=i.height),l="string"==typeof l?l:l+"",c="string"==typeof c?c:c+"";let f=e.body;n.length&&(f='<g transform="'+n.join(" ")+'">'+f+"</g>");const h={attributes:{width:l,height:c,preserveAspectRatio:a(t),viewBox:i.left+" "+i.top+" "+i.width+" "+i.height},body:f};return t.inline&&(h.inline=!0),h}})),R=L((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.replaceIDs=void 0;const a=/\sid="(\S+)"/g,i="IconifyId-"+Date.now().toString(16)+"-"+(16777216*Math.random()|0).toString(16)+"-";let n=0;function s(e,t,a){let i=0;for(;-1!==(i=a.indexOf(e,i));)a=a.slice(0,i)+t+a.slice(i+e.length),i+=t.length;return a}t.replaceIDs=function(e,t=i){const r=[];let o;for(;o=a.exec(e);)r.push(o[1]);return r.length?(r.forEach((a=>{const i="function"==typeof t?t():t+n++;e=s('="'+a+'"','="'+i+'"',e),e=s('="#'+a+'"','="#'+i+'"',e),e=s("(#"+a+")","(#"+i+")",e)})),e):e}}));const G={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"};function Y(e){let t,a=e[0].body+"",h=[e[0].attributes],u={};for(let n=0;n<h.length;n+=1)u=i(u,h[n]);return{c(){t=n("svg"),this.h()},l(e){t=s(e,"svg",{},1),r(t).forEach(o),this.h()},h(){l(t,u)},m(e,i){c(e,t,i),t.innerHTML=a},p(e,[i]){1&i&&a!==(a=e[0].body+"")&&(t.innerHTML=a),l(t,u=d(h,[1&i&&e[0].attributes]))},i:f,o:f,d(e){e&&o(t)}}}function q(e,t,a){let n;return e.$$set=e=>{a(1,t=i(i({},t),h(e)))},e.$$.update=()=>{a(0,n=function(e){let t=H.fullIcon(e.icon);if(!t)return{attributes:G,body:""};const a=O.merge(T.defaults,e),i=O.merge(G);let n="string"==typeof e.style?e.style:"";for(let l in e){const t=e[l];switch(l){case"icon":case"style":break;case"flip":z.flipFromString(a,t);break;case"align":z.alignmentFromString(a,t);break;case"color":n="color: "+t+"; "+n;break;case"rotate":"number"!=typeof t?a[l]=C.rotateFromString(t):i[l]=t;break;case"ariaHidden":case"aria-hidden":!0!==t&&"true"!==t&&delete i["aria-hidden"];break;default:void 0===T.defaults[l]&&(i[l]=t)}}const s=B.iconToSVG(t,a);for(let l in s.attributes)i[l]=s.attributes[l];s.inline&&(n="vertical-align: -0.125em; "+n),""!==n&&(i.style=n);let r=0;const o=e.id;return{attributes:i,body:R.replaceIDs(s.body,o?()=>o+"-"+r++:"iconify-svelte-")}}(t))},t=h(t),[n]}class X extends e{constructor(e){super(),t(this,e,q,Y,a,{})}}var J,K,Q,W,Z,ee,te,ae,ie,ne,se,re,oe,le,ce={body:'<path d="M5 20h14v-2H5m14-9h-4V3H9v6H5l7 7l7-7z" fill="currentColor"/>',width:24,height:24},de={body:'<path d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z" fill="currentColor"/>',width:24,height:24},fe={body:'<path d="M14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7z" fill="currentColor"/>',width:24,height:24};function he(e){let t,a,i,n,l,d,f,h,V,D,I,A,M,F,_,P,j=e[0].short_description+"";return D=new X({props:{icon:ce,inline:!0,class:"inline-block"}}),_=new X({props:{icon:fe,inline:!0,class:"inline-block"}}),{c(){t=u("div"),a=u("div"),i=u("span"),n=p(j),l=m(),d=u("div"),f=u("button"),h=u("span"),V=p("Install "),g(D.$$.fragment),I=m(),A=u("button"),M=u("span"),F=p("More info "),g(_.$$.fragment),this.h()},l(e){t=s(e,"DIV",{class:!0});var c=r(t);a=s(c,"DIV",{});var u=r(a);i=s(u,"SPAN",{class:!0});var p=r(i);n=v(p,j),p.forEach(o),u.forEach(o),l=b(c),d=s(c,"DIV",{class:!0});var m=r(d);f=s(m,"BUTTON",{class:!0});var g=r(f);h=s(g,"SPAN",{});var w=r(h);V=v(w,"Install "),k(D.$$.fragment,w),w.forEach(o),g.forEach(o),I=b(m),A=s(m,"BUTTON",{class:!0});var y=r(A);M=s(y,"SPAN",{});var E=r(M);F=v(E,"More info "),k(_.$$.fragment,E),E.forEach(o),y.forEach(o),m.forEach(o),c.forEach(o),this.h()},h(){w(i,"class","text-base"),w(f,"class","shadowed py-1 px-4 rounded text-base bg-lime-600 svelte-1e4dn8p"),w(A,"class","shadowed py-1 px-4 rounded text-base bg-blue-500 svelte-1e4dn8p"),w(d,"class","grid grid-flow-col justify-between"),w(t,"class","expanded grid grid-flow-row content-between")},m(e,s){c(e,t,s),y(t,a),y(a,i),y(i,n),y(t,l),y(t,d),y(d,f),y(f,h),y(h,V),E(D,h,null),y(d,I),y(d,A),y(A,M),y(M,F),E(_,M,null),P=!0},p(e,t){(!P||1&t)&&j!==(j=e[0].short_description+"")&&N(n,j)},i(e){P||($(D.$$.fragment,e),$(_.$$.fragment,e),P=!0)},o(e){S(D.$$.fragment,e),S(_.$$.fragment,e),P=!1},d(e){e&&o(t),x(D),x(_)}}}function ue(e){let t,a,i,n,l,d,f,h,I,A,M,F,_,P,j,L,O,T,z,C,H,U,B,R,G=e[0].name+"",Y=e[0].views+"",q=e[0].downloads+"";j=new X({props:{icon:de,inline:!0,class:"inline-block"}}),C=new X({props:{icon:ce,inline:!0,class:"inline-block"}});let J=e[1]&&he(e);return{c(){t=u("div"),a=u("div"),i=u("div"),n=u("img"),f=m(),h=u("div"),I=u("div"),A=u("span"),M=p(G),F=m(),_=u("div"),P=u("span"),g(j.$$.fragment),L=m(),O=p(Y),T=m(),z=u("span"),g(C.$$.fragment),H=m(),U=p(q),B=m(),J&&J.c(),this.h()},l(e){t=s(e,"DIV",{class:!0});var l=r(t);a=s(l,"DIV",{class:!0});var c=r(a);i=s(c,"DIV",{class:!0});var d=r(i);n=s(d,"IMG",{src:!0,alt:!0}),d.forEach(o),f=b(c),h=s(c,"DIV",{});var u=r(h);I=s(u,"DIV",{});var p=r(I);A=s(p,"SPAN",{class:!0});var m=r(A);M=v(m,G),m.forEach(o),p.forEach(o),F=b(u),_=s(u,"DIV",{class:!0});var g=r(_);P=s(g,"SPAN",{});var w=r(P);k(j.$$.fragment,w),L=b(w),O=v(w,Y),w.forEach(o),T=b(g),z=s(g,"SPAN",{});var y=r(z);k(C.$$.fragment,y),H=b(y),U=v(y,q),y.forEach(o),g.forEach(o),u.forEach(o),c.forEach(o),B=b(l),J&&J.l(l),l.forEach(o),this.h()},h(){n.src!==(l=e[2])&&w(n,"src",l),w(n,"alt",d=e[0].name+" Logo"),w(i,"class","mod-logo shadowed svelte-1e4dn8p"),w(A,"class","text-xl"),w(_,"class","text-sm text-gray-300"),w(a,"class","top grid grid-flow-col gap-4 svelte-1e4dn8p"),w(t,"class","mod-card shadowed h-64 grid grid-flow-row p-3 bg-gray-700 gap-2 svelte-1e4dn8p")},m(e,s){c(e,t,s),y(t,a),y(a,i),y(i,n),y(a,f),y(a,h),y(h,I),y(I,A),y(A,M),y(h,F),y(h,_),y(_,P),E(j,P,null),y(P,L),y(P,O),y(_,T),y(_,z),E(C,z,null),y(z,H),y(z,U),y(t,B),J&&J.m(t,null),R=!0},p(e,[a]){(!R||4&a&&n.src!==(l=e[2]))&&w(n,"src",l),(!R||1&a&&d!==(d=e[0].name+" Logo"))&&w(n,"alt",d),(!R||1&a)&&G!==(G=e[0].name+"")&&N(M,G),(!R||1&a)&&Y!==(Y=e[0].views+"")&&N(O,Y),(!R||1&a)&&q!==(q=e[0].downloads+"")&&N(U,q),e[1]?J?(J.p(e,a),2&a&&$(J,1)):(J=he(e),J.c(),$(J,1),J.m(t,null)):J&&(V(),S(J,1,1,(()=>{J=null})),D())},i(e){R||($(j.$$.fragment,e),$(C.$$.fragment,e),$(J),R=!0)},o(e){S(j.$$.fragment,e),S(C.$$.fragment,e),S(J),R=!1},d(e){e&&o(t),x(j),x(C),J&&J.d()}}}function pe(e,t,a){let i,{mod:n}=t,{expanded:s=!1}=t;return e.$$set=e=>{"mod"in e&&a(0,n=e.mod),"expanded"in e&&a(1,s=e.expanded)},e.$$.update=()=>{1&e.$$.dirty&&a(2,i=n.logo||F+"/images/no_image.png")},[n,s,i]}class me extends e{constructor(e){super(),t(this,e,pe,ue,a,{mod:0,expanded:1})}}(K=J||(J={})).Name="name",K.CreatedAt="created_at",K.UpdatedAt="updated_at",K.SatisfactoryVersion="satisfactory_version",K.Date="date",(W=Q||(Q={})).Name="name",W.CreatedAt="created_at",W.UpdatedAt="updated_at",W.Views="views",(ee=Z||(Z={})).CreatedAt="created_at",ee.UpdatedAt="updated_at",ee.Name="name",ee.Views="views",ee.Downloads="downloads",ee.Hotness="hotness",ee.Popularity="popularity",ee.LastVersionDate="last_version_date",ee.Search="search",(ae=te||(te={})).Asc="asc",ae.Desc="desc",(ne=ie||(ie={})).Name="name",ne.CreatedAt="created_at",ne.UpdatedAt="updated_at",ne.SatisfactoryVersion="satisfactory_version",ne.Date="date",(re=se||(se={})).CreatedAt="created_at",re.UpdatedAt="updated_at",re.Downloads="downloads",(le=oe||(oe={})).Alpha="alpha",le.Beta="beta",le.Release="release";const ge={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetMods"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"offset"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"limit"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"getMods"},arguments:[{kind:"Argument",name:{kind:"Name",value:"filter"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"limit"},value:{kind:"Variable",name:{kind:"Name",value:"limit"}}},{kind:"ObjectField",name:{kind:"Name",value:"offset"},value:{kind:"Variable",name:{kind:"Name",value:"offset"}}}]}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"count"}},{kind:"Field",name:{kind:"Name",value:"mods"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"logo"}},{kind:"Field",name:{kind:"Name",value:"views"}},{kind:"Field",name:{kind:"Name",value:"downloads"}},{kind:"Field",name:{kind:"Name",value:"short_description"}}]}}]}}]}}]};function ve(e,t,a){const i=e.slice();return i[2]=t[a],i}function be(e){let t,a,i=e[0].data.getMods.mods,n=[];for(let r=0;r<i.length;r+=1)n[r]=ye(ve(e,i,r));const s=e=>S(n[e],1,1,(()=>{n[e]=null}));return{c(){for(let e=0;e<n.length;e+=1)n[e].c();t=A()},l(e){for(let t=0;t<n.length;t+=1)n[t].l(e);t=A()},m(e,i){for(let t=0;t<n.length;t+=1)n[t].m(e,i);c(e,t,i),a=!0},p(e,a){if(1&a){let r;for(i=e[0].data.getMods.mods,r=0;r<i.length;r+=1){const s=ve(e,i,r);n[r]?(n[r].p(s,a),$(n[r],1)):(n[r]=ye(s),n[r].c(),$(n[r],1),n[r].m(t.parentNode,t))}for(V(),r=i.length;r<n.length;r+=1)s(r);D()}},i(e){if(!a){for(let e=0;e<i.length;e+=1)$(n[e]);a=!0}},o(e){n=n.filter(Boolean);for(let t=0;t<n.length;t+=1)S(n[t]);a=!1},d(e){M(n,e),e&&o(t)}}}function ke(e){let t,a,i,n=e[0].error.message+"";return{c(){t=u("p"),a=p("Oh no... "),i=p(n)},l(e){t=s(e,"P",{});var l=r(t);a=v(l,"Oh no... "),i=v(l,n),l.forEach(o)},m(e,n){c(e,t,n),y(t,a),y(t,i)},p(e,t){1&t&&n!==(n=e[0].error.message+"")&&N(i,n)},i:f,o:f,d(e){e&&o(t)}}}function we(e){let t,a;return{c(){t=u("p"),a=p("Loading...")},l(e){t=s(e,"P",{});var i=r(t);a=v(i,"Loading..."),i.forEach(o)},m(e,i){c(e,t,i),y(t,a)},p:f,i:f,o:f,d(e){e&&o(t)}}}function ye(e){let t,a;return t=new me({props:{mod:e[2],expanded:!0}}),{c(){g(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,i){E(t,e,i),a=!0},p(e,a){const i={};1&a&&(i.mod=e[2]),t.$set(i)},i(e){a||($(t.$$.fragment,e),a=!0)},o(e){S(t.$$.fragment,e),a=!1},d(e){x(t,e)}}}function Ee(e){let t,a,i,n,l,d,f,h,N,I,A,M,F,_,P,L,O,T,z,C,H,U,B,R,G,Y,q,J,K,Q,W,Z,ee,te,ae,ie,ne,se,re,oe,le,ce,de,fe,he,ue,pe,me,ge,ve,ye,Ee,Ne,$e,Se,xe,Ve,De,Ie,Ae,Me,Fe,_e,Pe,je,Le,Oe,Te,ze,Ce,He,Ue,Be;Q=new X({props:{icon:j,inline:!0,class:"inline-block"}});const Re=[we,ke,be],Ge=[];function Ye(e,t){return e[0].fetching?0:e[0].error?1:2}return He=Ye(e),Ue=Ge[He]=Re[He](e),{c(){t=u("div"),a=u("div"),i=u("div"),n=u("span"),l=p("Link 1"),d=m(),f=u("span"),h=p("Link 2"),N=m(),I=u("span"),A=p("Link 3"),M=m(),F=u("div"),_=p("Log in / register"),P=m(),L=u("div"),O=u("div"),T=u("span"),z=p("SMR"),C=m(),H=u("span"),U=p("Satisfactory Mod Repository"),B=m(),R=u("div"),G=u("span"),Y=p("The unofficially official source for Satisfactory mods"),q=m(),J=u("div"),K=u("span"),g(Q.$$.fragment),W=m(),Z=u("span"),ee=p("Mods do not currently work on Experimental (EXP) / Update 4 - More info"),te=m(),ae=u("div"),ie=u("div"),ne=u("div"),se=p("Link 1"),re=m(),oe=u("div"),le=p("Link 2"),ce=m(),de=u("div"),fe=p("Link 3"),he=m(),ue=u("div"),pe=u("span"),me=p("Type here to search, you can use #tags or !awards"),ge=m(),ve=u("div"),ye=u("div"),Ee=u("div"),Ne=u("div"),$e=u("span"),Se=p("Featured mods:"),xe=m(),Ve=u("span"),De=p("Newest"),Ie=m(),Ae=u("div"),Me=u("span"),Fe=p("Browse all"),_e=m(),Pe=u("span"),je=p("330"),Le=m(),Oe=u("span"),Te=p("mods"),ze=m(),Ce=u("div"),Ue.c(),this.h()},l(e){t=s(e,"DIV",{class:!0});var c=r(t);a=s(c,"DIV",{class:!0});var u=r(a);i=s(u,"DIV",{class:!0});var p=r(i);n=s(p,"SPAN",{class:!0});var m=r(n);l=v(m,"Link 1"),m.forEach(o),d=b(p),f=s(p,"SPAN",{class:!0});var g=r(f);h=v(g,"Link 2"),g.forEach(o),N=b(p),I=s(p,"SPAN",{class:!0});var w=r(I);A=v(w,"Link 3"),w.forEach(o),p.forEach(o),M=b(u),F=s(u,"DIV",{class:!0});var y=r(F);_=v(y,"Log in / register"),y.forEach(o),u.forEach(o),P=b(c),L=s(c,"DIV",{class:!0});var E=r(L);O=s(E,"DIV",{class:!0});var $=r(O);T=s($,"SPAN",{class:!0});var S=r(T);z=v(S,"SMR"),S.forEach(o),C=b($),H=s($,"SPAN",{});var x=r(H);U=v(x,"Satisfactory Mod Repository"),x.forEach(o),$.forEach(o),B=b(E),R=s(E,"DIV",{class:!0});var V=r(R);G=s(V,"SPAN",{});var D=r(G);Y=v(D,"The unofficially official source for Satisfactory mods"),D.forEach(o),V.forEach(o),q=b(E),J=s(E,"DIV",{class:!0});var j=r(J);K=s(j,"SPAN",{});var X=r(K);k(Q.$$.fragment,X),X.forEach(o),W=b(j),Z=s(j,"SPAN",{});var be=r(Z);ee=v(be,"Mods do not currently work on Experimental (EXP) / Update 4 - More info"),be.forEach(o),j.forEach(o),E.forEach(o),te=b(c),ae=s(c,"DIV",{class:!0});var ke=r(ae);ie=s(ke,"DIV",{class:!0});var we=r(ie);ne=s(we,"DIV",{});var He=r(ne);se=v(He,"Link 1"),He.forEach(o),re=b(we),oe=s(we,"DIV",{});var Be=r(oe);le=v(Be,"Link 2"),Be.forEach(o),ce=b(we),de=s(we,"DIV",{});var Re=r(de);fe=v(Re,"Link 3"),Re.forEach(o),we.forEach(o),he=b(ke),ue=s(ke,"DIV",{class:!0});var Ge=r(ue);pe=s(Ge,"SPAN",{});var Ye=r(pe);me=v(Ye,"Type here to search, you can use #tags or !awards"),Ye.forEach(o),Ge.forEach(o),ke.forEach(o),ge=b(c),ve=s(c,"DIV",{class:!0});var qe=r(ve);ye=s(qe,"DIV",{class:!0});var Xe=r(ye);Ee=s(Xe,"DIV",{class:!0});var Je=r(Ee);Ne=s(Je,"DIV",{});var Ke=r(Ne);$e=s(Ke,"SPAN",{});var Qe=r($e);Se=v(Qe,"Featured mods:"),Qe.forEach(o),xe=b(Ke),Ve=s(Ke,"SPAN",{class:!0});var We=r(Ve);De=v(We,"Newest"),We.forEach(o),Ke.forEach(o),Ie=b(Je),Ae=s(Je,"DIV",{class:!0});var Ze=r(Ae);Me=s(Ze,"SPAN",{});var et=r(Me);Fe=v(et,"Browse all"),et.forEach(o),_e=b(Ze),Pe=s(Ze,"SPAN",{class:!0});var tt=r(Pe);je=v(tt,"330"),tt.forEach(o),Le=b(Ze),Oe=s(Ze,"SPAN",{});var at=r(Oe);Te=v(at,"mods"),at.forEach(o),Ze.forEach(o),Je.forEach(o),ze=b(Xe),Ce=s(Xe,"DIV",{class:!0});var it=r(Ce);Ue.l(it),it.forEach(o),Xe.forEach(o),qe.forEach(o),c.forEach(o),this.h()},h(){w(n,"class","border-r-2 border-white px-4"),w(f,"class","border-r-2 border-white px-4"),w(I,"class","px-4"),w(i,"class","grid grid-flow-col justify-self-center items-center svelte-d76vyt"),w(F,"class","log-in justify-self-center svelte-d76vyt"),w(a,"class","menu grid bg-black bg-opacity-70 py-2.5 px-4 items-center svelte-d76vyt"),w(T,"class","text-lime-500"),w(O,"class","header text-6xl"),w(R,"class","under-header text-3xl"),w(J,"class","alert mt-10 bg-red-700 inline-block mx-auto p-4 shadow-md"),w(L,"class","text-center self-center"),w(ie,"class","grid grid-flow-col justify-around h-14 mb-3 bg-black bg-opacity-70"),w(ue,"class","h-14 bg-black bg-opacity-70"),w(ae,"class","w-5/6 justify-self-center"),w(Ve,"class","text-lime-500"),w(Pe,"class","text-lime-500"),w(Ae,"class","text-right"),w(Ee,"class","w-5/6 mx-auto grid grid-flow-col mb-3"),w(Ce,"class","featured-mods w-5/6 mx-auto grid grid-flow-col gap-4"),w(ye,"class","py-8 bg-black bg-opacity-70"),w(ve,"class","grid"),w(t,"class","fold grid svelte-d76vyt")},m(e,s){c(e,t,s),y(t,a),y(a,i),y(i,n),y(n,l),y(i,d),y(i,f),y(f,h),y(i,N),y(i,I),y(I,A),y(a,M),y(a,F),y(F,_),y(t,P),y(t,L),y(L,O),y(O,T),y(T,z),y(O,C),y(O,H),y(H,U),y(L,B),y(L,R),y(R,G),y(G,Y),y(L,q),y(L,J),y(J,K),E(Q,K,null),y(J,W),y(J,Z),y(Z,ee),y(t,te),y(t,ae),y(ae,ie),y(ie,ne),y(ne,se),y(ie,re),y(ie,oe),y(oe,le),y(ie,ce),y(ie,de),y(de,fe),y(ae,he),y(ae,ue),y(ue,pe),y(pe,me),y(t,ge),y(t,ve),y(ve,ye),y(ye,Ee),y(Ee,Ne),y(Ne,$e),y($e,Se),y(Ne,xe),y(Ne,Ve),y(Ve,De),y(Ee,Ie),y(Ee,Ae),y(Ae,Me),y(Me,Fe),y(Ae,_e),y(Ae,Pe),y(Pe,je),y(Ae,Le),y(Ae,Oe),y(Oe,Te),y(ye,ze),y(ye,Ce),Ge[He].m(Ce,null),Be=!0},p(e,[t]){let a=He;He=Ye(e),He===a?Ge[He].p(e,t):(V(),S(Ge[a],1,1,(()=>{Ge[a]=null})),D(),Ue=Ge[He],Ue?Ue.p(e,t):(Ue=Ge[He]=Re[He](e),Ue.c()),$(Ue,1),Ue.m(Ce,null))},i(e){Be||($(Q.$$.fragment,e),$(Ue),Be=!0)},o(e){S(Q.$$.fragment,e),S(Ue),Be=!1},d(e){e&&o(t),x(Q),Ge[He].d()}}}function Ne(e,t,a){let i;const n=_(ge,{offset:0,limit:5});return I(e,n,(e=>a(0,i=e))),P(n),[i,n]}export default class extends e{constructor(e){super(),t(this,e,Ne,Ee,a,{})}}