import{S as E,i as S,s as F,W as h,X as x,Y as v,m as b,t as w,$ as y,b1 as A,e as c,aa as k,c as m,d as u,ab as _,f as $,a7 as D,j,a5 as g,ac as G}from"./vendor-5142eec8.js";import{b as d,a as I}from"./paths-1c47712a.js";import{F as N}from"./FicsitCard-cb069a10.js";import{a as p}from"./formatting-b1e7d458.js";function P(r){let i;return{c(){i=k("visibility")},l(e){i=_(e,"visibility")},m(e,s){j(e,i,s)},d(e){e&&$(i)}}}function V(r){let i,e,s,t=p(r[0].views)+"",a,f;return s=new A({props:{class:"material-icons align-middle text-sm",$$slots:{default:[P]},$$scope:{ctx:r}}}),{c(){i=c("div"),e=c("span"),h(s.$$.fragment),a=k(t),this.h()},l(o){i=m(o,"DIV",{slot:!0});var n=u(i);e=m(n,"SPAN",{});var l=u(e);x(s.$$.fragment,l),a=_(l,t),l.forEach($),n.forEach($),this.h()},h(){D(i,"slot","stats")},m(o,n){j(o,i,n),g(i,e),v(s,e,null),g(e,a),f=!0},p(o,n){const l={};n&4&&(l.$$scope={dirty:n,ctx:o}),s.$set(l),(!f||n&1)&&t!==(t=p(o[0].views)+"")&&G(a,t)},i(o){f||(b(s.$$.fragment,o),f=!0)},o(o){w(s.$$.fragment,o),f=!1},d(o){o&&$(i),y(s)}}}function W(r){let i,e;return i=new N({props:{name:r[0].name,logo:r[1],description:r[0].short_description,link:d+`/guide/${r[0].id}`,$$slots:{stats:[V]},$$scope:{ctx:r}}}),{c(){h(i.$$.fragment)},l(s){x(i.$$.fragment,s)},m(s,t){v(i,s,t),e=!0},p(s,[t]){const a={};t&1&&(a.name=s[0].name),t&2&&(a.logo=s[1]),t&1&&(a.description=s[0].short_description),t&1&&(a.link=d+`/guide/${s[0].id}`),t&5&&(a.$$scope={dirty:t,ctx:s}),i.$set(a)},i(s){e||(b(i.$$.fragment,s),e=!0)},o(s){w(i.$$.fragment,s),e=!1},d(s){y(i,s)}}}function X(r,i,e){let{guide:s}=i,{logo:t=I+"/images/no_image.webp"}=i;return r.$$set=a=>{"guide"in a&&e(0,s=a.guide),"logo"in a&&e(1,t=a.logo)},[s,t]}class C extends E{constructor(i){super(),S(this,i,X,W,F,{guide:0,logo:1})}}export{C as G};
//# sourceMappingURL=GuideCard-4095afa1.js.map