import{S as O,i as Q,s as R,as as T,j as D,m as G,o as A,x as C,u as S,v as k,at as X,aU as Y,e as b,k as N,c as x,a as I,d as m,n as P,b as E,aV as J,Z as d,f as q,V as g,aW as ee,ag as K,t as z,g as B,h as U,ae as te}from"./vendor-c631e359.js";import{a as ae,b as H}from"./paths-6758d194.js";import{g as se}from"./navigation-51f4a605.js";function ne(n){let t;return{c(){t=z("visibility")},l(a){t=B(a,"visibility")},m(a,e){q(a,t,e)},d(a){a&&m(t)}}}function ie(n){let t,a,e,s=n[0].name+"",i,_,u,c,h,f,w,y=n[0].views+"",j,o,l,v=n[0].short_description+"",p,V;return f=new K({props:{class:"material-icons",style:"font-size: inherit; vertical-align: middle;",$$slots:{default:[ne]},$$scope:{ctx:n}}}),{c(){t=b("div"),a=b("a"),e=b("span"),i=z(s),u=N(),c=b("h5"),h=b("span"),D(f.$$.fragment),w=N(),j=z(y),o=N(),l=b("div"),p=z(v),this.h()},l(r){t=x(r,"DIV",{style:!0});var $=I(t);a=x($,"A",{href:!0});var L=I(a);e=x(L,"SPAN",{class:!0});var W=I(e);i=B(W,s),W.forEach(m),L.forEach(m),u=P($),c=x($,"H5",{class:!0,style:!0});var Z=I(c);h=x(Z,"SPAN",{});var M=I(h);G(f.$$.fragment,M),w=P(M),j=B(M,y),M.forEach(m),Z.forEach(m),$.forEach(m),o=P(r),l=x(r,"DIV",{});var F=I(l);p=B(F,v),F.forEach(m),this.h()},h(){E(e,"class","text-xl text-gray-50"),E(a,"href",_=""+(H+"/guide/"+n[0].id+"/")),E(c,"class","text-sm"),d(c,"margin","0"),d(t,"margin-bottom","10px")},m(r,$){q(r,t,$),g(t,a),g(a,e),g(e,i),g(t,u),g(t,c),g(c,h),A(f,h,null),g(h,w),g(h,j),q(r,o,$),q(r,l,$),g(l,p),V=!0},p(r,$){(!V||$&1)&&s!==(s=r[0].name+"")&&U(i,s),(!V||$&1&&_!==(_=""+(H+"/guide/"+r[0].id+"/")))&&E(a,"href",_);const L={};$&8&&(L.$$scope={dirty:$,ctx:r}),f.$set(L),(!V||$&1)&&y!==(y=r[0].views+"")&&U(j,y),(!V||$&1)&&v!==(v=r[0].short_description+"")&&U(p,v)},i(r){V||(C(f.$$.fragment,r),V=!0)},o(r){S(f.$$.fragment,r),V=!1},d(r){r&&m(t),k(f),r&&m(o),r&&m(l)}}}function oe(n){let t;return{c(){t=z("info")},l(a){t=B(a,"info")},m(a,e){q(a,t,e)},d(a){a&&m(t)}}}function re(n){let t,a;return t=new K({props:{class:"material-icons",$$slots:{default:[oe]},$$scope:{ctx:n}}}),{c(){D(t.$$.fragment)},l(e){G(t.$$.fragment,e)},m(e,s){A(t,e,s),a=!0},p(e,s){const i={};s&8&&(i.$$scope={dirty:s,ctx:e}),t.$set(i)},i(e){a||(C(t.$$.fragment,e),a=!0)},o(e){S(t.$$.fragment,e),a=!1},d(e){k(t,e)}}}function le(n){let t,a;return t=new te({props:{href:""+(H+"/guide/"+n[0].id+"/"),"aria-label":"Go to guide page",title:"Go to guide page",$$slots:{default:[re]},$$scope:{ctx:n}}}),{c(){D(t.$$.fragment)},l(e){G(t.$$.fragment,e)},m(e,s){A(t,e,s),a=!0},p(e,s){const i={};s&1&&(i.href=""+(H+"/guide/"+e[0].id+"/")),s&8&&(i.$$scope={dirty:s,ctx:e}),t.$set(i)},i(e){a||(C(t.$$.fragment,e),a=!0)},o(e){S(t.$$.fragment,e),a=!1},d(e){k(t,e)}}}function fe(n){let t,a,e,s,i,_,u,c,h,f,w,y,j;return c=new X({props:{style:"display: flex; flex-direction: column; padding-bottom: 0;",$$slots:{default:[ie]},$$scope:{ctx:n}}}),f=new Y({props:{style:"align-self: end;",$$slots:{default:[le]},$$scope:{ctx:n}}}),{c(){t=b("div"),a=b("div"),e=b("img"),_=N(),u=b("div"),D(c.$$.fragment),h=N(),D(f.$$.fragment),this.h()},l(o){t=x(o,"DIV",{style:!0});var l=I(t);a=x(l,"DIV",{style:!0});var v=I(a);e=x(v,"IMG",{crossorigin:!0,src:!0,alt:!0,style:!0,class:!0}),v.forEach(m),_=P(l),u=x(l,"DIV",{style:!0});var p=I(u);G(c.$$.fragment,p),h=P(p),G(f.$$.fragment,p),p.forEach(m),l.forEach(m),this.h()},h(){E(e,"crossorigin","anonymous"),J(e.src,s=n[1])||E(e,"src",s),E(e,"alt",i=""+(n[0].name+" Logo")),d(e,"max-width","100%"),d(e,"max-height","100%"),d(e,"min-width","200px"),d(e,"min-height","200px"),E(e,"class","logo"),d(a,"max-width","200px"),d(a,"max-height","200px"),d(a,"cursor","pointer"),d(u,"display","flex"),d(u,"flex-direction","column"),d(u,"justify-content","space-between"),d(u,"width","100%"),d(t,"display","flex"),d(t,"height","100%")},m(o,l){q(o,t,l),g(t,a),g(a,e),g(t,_),g(t,u),A(c,u,null),g(u,h),A(f,u,null),w=!0,y||(j=ee(a,"click",n[2]),y=!0)},p(o,l){(!w||l&2&&!J(e.src,s=o[1]))&&E(e,"src",s),(!w||l&1&&i!==(i=""+(o[0].name+" Logo")))&&E(e,"alt",i);const v={};l&9&&(v.$$scope={dirty:l,ctx:o}),c.$set(v);const p={};l&9&&(p.$$scope={dirty:l,ctx:o}),f.$set(p)},i(o){w||(C(c.$$.fragment,o),C(f.$$.fragment,o),w=!0)},o(o){S(c.$$.fragment,o),S(f.$$.fragment,o),w=!1},d(o){o&&m(t),k(c),k(f),y=!1,j()}}}function ce(n){let t,a;return t=new T({props:{style:"height: 100%; min-width: 450px",$$slots:{default:[fe]},$$scope:{ctx:n}}}),{c(){D(t.$$.fragment)},l(e){G(t.$$.fragment,e)},m(e,s){A(t,e,s),a=!0},p(e,[s]){const i={};s&11&&(i.$$scope={dirty:s,ctx:e}),t.$set(i)},i(e){a||(C(t.$$.fragment,e),a=!0)},o(e){S(t.$$.fragment,e),a=!1},d(e){k(t,e)}}}function ue(n,t,a){let{guide:e}=t,{logo:s=ae+"/images/no_image.png"}=t;const i=()=>se(H+`/guide/${e.id}/`);return n.$$set=_=>{"guide"in _&&a(0,e=_.guide),"logo"in _&&a(1,s=_.logo)},[e,s,i]}class ge extends O{constructor(t){super();Q(this,t,ue,ce,R,{guide:0,logo:1})}}export{ge as G};
//# sourceMappingURL=GuideCard-6e95e862.js.map
