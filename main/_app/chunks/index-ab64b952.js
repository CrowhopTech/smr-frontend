function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function c(t){return"function"==typeof t}function u(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function s(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}function i(t,n,e){t.$$.on_destroy.push(s(n,e))}function f(t,n,e,o){if(t){const r=a(t,n,e,o);return t[0](r)}}function a(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function l(t,n,e,o,r,c,u){const s=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,c);if(s){const r=a(n,e,o,u);t.p(r,s)}}function d(t){const n={};for(const e in t)"$"!==e[0]&&(n[e]=t[e]);return n}function p(t,n,e=n){return t.set(e),n}function h(t,n){t.appendChild(n)}function $(t,n,e){t.insertBefore(n,e||null)}function m(t){t.parentNode.removeChild(t)}function g(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function b(t){return document.createElement(t)}function y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function _(t){return document.createTextNode(t)}function x(){return _(" ")}function v(){return _("")}function w(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function E(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function k(t,n){for(const e in n)E(t,e,n[e])}function A(t){return Array.from(t.childNodes)}function j(t,n,e,o){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===n){let n=0;const c=[];for(;n<o.attributes.length;){const t=o.attributes[n++];e[t.name]||c.push(t.name)}for(let t=0;t<c.length;t++)o.removeAttribute(c[t]);return t.splice(r,1)[0]}}return o?y(n):b(n)}function N(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=""+n,t.splice(e,1)[0]}return _(n)}function S(t){return N(t," ")}function O(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function q(t,n=document.body){return Array.from(n.querySelectorAll(t))}let C;function L(t){C=t}function M(){if(!C)throw new Error("Function called outside component initialization");return C}function T(t){M().$$.on_mount.push(t)}function z(t){M().$$.after_update.push(t)}function B(t){M().$$.on_destroy.push(t)}function F(t,n){M().$$.context.set(t,n)}function P(t){return M().$$.context.get(t)}const D=[],G=[],H=[],I=[],J=Promise.resolve();let K=!1;function Q(t){H.push(t)}let R=!1;const U=new Set;function V(){if(!R){R=!0;do{for(let t=0;t<D.length;t+=1){const n=D[t];L(n),W(n.$$)}for(L(null),D.length=0;G.length;)G.pop()();for(let t=0;t<H.length;t+=1){const n=H[t];U.has(n)||(U.add(n),n())}H.length=0}while(D.length);for(;I.length;)I.pop()();K=!1,R=!1,U.clear()}}function W(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(Q)}}const X=new Set;let Y;function Z(){Y={r:0,c:[],p:Y}}function tt(){Y.r||r(Y.c),Y=Y.p}function nt(t,n){t&&t.i&&(X.delete(t),t.i(n))}function et(t,n,e,o){if(t&&t.o){if(X.has(t))return;X.add(t),Y.c.push((()=>{X.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function ot(t,n){const e={},o={},r={$$scope:1};let c=t.length;for(;c--;){const u=t[c],s=n[c];if(s){for(const t in u)t in s||(o[t]=1);for(const t in s)r[t]||(e[t]=s[t],r[t]=1);t[c]=s}else for(const t in u)r[t]=1}for(const u in o)u in e||(e[u]=void 0);return e}function rt(t){return"object"==typeof t&&null!==t?t:{}}function ct(t){t&&t.c()}function ut(t,n){t&&t.l(n)}function st(t,n,o,u){const{fragment:s,on_mount:i,on_destroy:f,after_update:a}=t.$$;s&&s.m(n,o),u||Q((()=>{const n=i.map(e).filter(c);f?f.push(...n):r(n),t.$$.on_mount=[]})),a.forEach(Q)}function it(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ft(t,n){-1===t.$$.dirty[0]&&(D.push(t),K||(K=!0,J.then(V)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function at(n,e,c,u,s,i,f=[-1]){const a=C;L(n);const l=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:s,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:e.context||[]),callbacks:o(),dirty:f,skip_bound:!1};let d=!1;if(l.ctx=c?c(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return l.ctx&&s(l.ctx[t],l.ctx[t]=r)&&(!l.skip_bound&&l.bound[t]&&l.bound[t](r),d&&ft(n,t)),e})):[],l.update(),d=!0,r(l.before_update),l.fragment=!!u&&u(l.ctx),e.target){if(e.hydrate){const t=A(e.target);l.fragment&&l.fragment.l(t),t.forEach(m)}else l.fragment&&l.fragment.c();e.intro&&nt(n.$$.fragment),st(n,e.target,e.anchor,e.customElement),V()}L(a)}class lt{$destroy(){it(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}export{n as A,Z as B,t as C,f as D,q as E,h as F,l as G,B as H,P as I,y as J,k as K,d as L,w as M,r as N,s as O,i as P,p as Q,g as R,lt as S,A as a,E as b,j as c,m as d,b as e,$ as f,N as g,O as h,at as i,ct as j,x as k,v as l,ut as m,S as n,st as o,ot as p,rt as q,et as r,u as s,_ as t,tt as u,nt as v,it as w,F as x,z as y,T as z};
