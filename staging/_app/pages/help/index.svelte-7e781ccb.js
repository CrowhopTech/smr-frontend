import{S as z,i as J,s as Q,bc as R,a6 as L,d as T,e as f,W as U,aT as W,a7 as E,h as i,j as M,f as g,g as w,X as N,k as _,a8 as I,l as p,m as y,t as S,q as A,aa as C,bd as V,bi as j,bj as P,V as $,a5 as G,y as X,$ as l,bk as K,bl as Z,aM as ee}from"../../chunks/vendor-c539ab3b.js";import{m as D}from"../../chunks/markdown-e391b8a1.js";import{v as te}from"../../chunks/uplugin-2b58a956.js";import{M as ne}from"../../chunks/MetaDescriptors-a8cd2896.js";import"../../chunks/extras-7497b851.js";import"../../chunks/api-82c76902.js";import"../../chunks/user-5d6a437f.js";import"../../chunks/stores-0ab1fd98.js";import"../../chunks/paths-396f020f.js";function B(r,n,a){const e=r.slice();return e[8]=n[a],e}function ae(r){return{c:l,l,m:l,p:l,d:l}}function se(r){let n,a=r[12]+"",e;return{c(){n=new K,e=$(),this.h()},l(t){n=Z(t),e=$(),this.h()},h(){n.a=e},m(t,s){n.m(a,t,s),p(t,e,s)},p:l,d(t){t&&i(e),t&&n.d()}}}function re(r){return{c:l,l,m:l,p:l,d:l}}function oe(r){let n,a,e,t,s={ctx:r,current:null,token:null,hasCatch:!1,pending:re,then:se,catch:ae,value:12};return j(D(r[2]),s),{c(){n=f("h3"),a=U("<mod>.uplugin format"),e=T(),t=f("div"),s.block.c(),this.h()},l(o){n=g(o,"H3",{class:!0});var c=w(n);a=N(c,"<mod>.uplugin format"),c.forEach(i),e=M(o),t=g(o,"DIV",{class:!0});var b=w(t);s.block.l(b),b.forEach(i),this.h()},h(){_(n,"class","text-2xl my-4 font-bold"),_(t,"class","markdown-content")},m(o,c){p(o,n,c),y(n,a),p(o,e,c),p(o,t,c),s.block.m(t,s.anchor=null),s.mount=()=>t,s.anchor=null},p(o,c){r=o,P(s,r,c)},d(o){o&&i(n),o&&i(e),o&&i(t),s.block.d(),s.token=null,s=null}}}function le(r){let n,a;return n=new V({props:{$$slots:{default:[oe]},$$scope:{ctx:r}}}),{c(){L(n.$$.fragment)},l(e){E(n.$$.fragment,e)},m(e,t){I(n,e,t),a=!0},p(e,t){const s={};t&8192&&(s.$$scope={dirty:t,ctx:e}),n.$set(s)},i(e){a||(S(n.$$.fragment,e),a=!0)},o(e){A(n.$$.fragment,e),a=!1},d(e){C(n,e)}}}function F(r){let n,a,e={ctx:r,current:null,token:null,hasCatch:!1,pending:fe,then:ce,catch:ie,value:7};return j(a=r[1],e),{c(){n=$(),e.block.c()},l(t){n=$(),e.block.l(t)},m(t,s){p(t,n,s),e.block.m(t,e.anchor=s),e.mount=()=>n.parentNode,e.anchor=n},p(t,s){r=t,e.ctx=r,s&2&&a!==(a=r[1])&&j(a,e)||P(e,r,s)},d(t){t&&i(n),e.block.d(t),e.token=null,e=null}}}function ie(r){return{c:l,l,m:l,p:l,d:l}}function ce(r){let n;function a(s,o){return s[7].length===0?ue:he}let e=a(r),t=e(r);return{c(){t.c(),n=$()},l(s){t.l(s),n=$()},m(s,o){t.m(s,o),p(s,n,o)},p(s,o){e===(e=a(s))&&t?t.p(s,o):(t.d(1),t=e(s),t&&(t.c(),t.m(n.parentNode,n)))},d(s){t.d(s),s&&i(n)}}}function he(r){let n,a=r[7],e=[];for(let t=0;t<a.length;t+=1)e[t]=Y(B(r,a,t));return{c(){n=f("ul");for(let t=0;t<e.length;t+=1)e[t].c()},l(t){n=g(t,"UL",{});var s=w(n);for(let o=0;o<e.length;o+=1)e[o].l(s);s.forEach(i)},m(t,s){p(t,n,s);for(let o=0;o<e.length;o+=1)e[o].m(n,null)},p(t,s){if(s&2){a=t[7];let o;for(o=0;o<a.length;o+=1){const c=B(t,a,o);e[o]?e[o].p(c,s):(e[o]=Y(c),e[o].c(),e[o].m(n,null))}for(;o<e.length;o+=1)e[o].d(1);e.length=a.length}},d(t){t&&i(n),ee(e,t)}}}function ue(r){let n,a;return{c(){n=f("h3"),a=U("<mod>.uplugin valid!"),this.h()},l(e){n=g(e,"H3",{class:!0});var t=w(n);a=N(t,"<mod>.uplugin valid!"),t.forEach(i),this.h()},h(){_(n,"class","text-2xl my-4 font-bold")},m(e,t){p(e,n,t),y(n,a)},p:l,d(e){e&&i(n)}}}function de(r){return{c:l,l,m:l,p:l,d:l}}function pe(r){let n,a=r[11]+"",e;return{c(){n=f("li"),e=T(),this.h()},l(t){n=g(t,"LI",{class:!0});var s=w(n);s.forEach(i),e=M(t),this.h()},h(){_(n,"class","markdown-content")},m(t,s){p(t,n,s),n.innerHTML=a,p(t,e,s)},p(t,s){s&2&&a!==(a=t[11]+"")&&(n.innerHTML=a)},d(t){t&&i(n),t&&i(e)}}}function me(r){return{c:l,l,m:l,p:l,d:l}}function Y(r){let n,a,e={ctx:r,current:null,token:null,hasCatch:!1,pending:me,then:pe,catch:de,value:11};return j(a=D(r[8]),e),{c(){n=$(),e.block.c()},l(t){n=$(),e.block.l(t)},m(t,s){p(t,n,s),e.block.m(t,e.anchor=s),e.mount=()=>n.parentNode,e.anchor=n},p(t,s){r=t,e.ctx=r,s&2&&a!==(a=D(r[8]))&&j(a,e)||P(e,r,s)},d(t){t&&i(n),e.block.d(t),e.token=null,e=null}}}function fe(r){let n,a;return{c(){n=f("p"),a=U("Loading...")},l(e){n=g(e,"P",{});var t=w(n);a=N(t,"Loading..."),t.forEach(i)},m(e,t){p(e,n,t),y(n,a)},p:l,d(e){e&&i(n)}}}function ge(r){let n,a,e,t,s,o,c,b,u=r[0]!==""&&F(r);return{c(){n=f("h3"),a=U("Validate your <mod>.uplugin"),e=T(),t=f("textarea"),s=T(),u&&u.c(),o=$(),this.h()},l(h){n=g(h,"H3",{class:!0});var m=w(n);a=N(m,"Validate your <mod>.uplugin"),m.forEach(i),e=M(h),t=g(h,"TEXTAREA",{placeholder:!0,rows:!0,class:!0}),w(t).forEach(i),s=M(h),u&&u.l(h),o=$(),this.h()},h(){_(n,"class","text-2xl my-4 font-bold"),_(t,"placeholder","enter your <mod>.uplugin"),_(t,"rows","23"),_(t,"class","markdownEditor")},m(h,m){p(h,n,m),y(n,a),p(h,e,m),p(h,t,m),G(t,r[0]),p(h,s,m),u&&u.m(h,m),p(h,o,m),c||(b=X(t,"input",r[4]),c=!0)},p(h,m){m&1&&G(t,h[0]),h[0]!==""?u?u.p(h,m):(u=F(h),u.c(),u.m(o.parentNode,o)):u&&(u.d(1),u=null)},d(h){h&&i(n),h&&i(e),h&&i(t),h&&i(s),u&&u.d(h),h&&i(o),c=!1,b()}}}function we(r){let n,a;return n=new V({props:{$$slots:{default:[ge]},$$scope:{ctx:r}}}),{c(){L(n.$$.fragment)},l(e){E(n.$$.fragment,e)},m(e,t){I(n,e,t),a=!0},p(e,t){const s={};t&8195&&(s.$$scope={dirty:t,ctx:e}),n.$set(s)},i(e){a||(S(n.$$.fragment,e),a=!0)},o(e){A(n.$$.fragment,e),a=!1},d(e){C(n,e)}}}function ke(r){return{c:l,l,m:l,p:l,d:l}}function be(r){let n,a=r[6]+"";return{c(){n=f("p")},l(e){n=g(e,"P",{});var t=w(n);t.forEach(i)},m(e,t){p(e,n,t),n.innerHTML=a},p:l,d(e){e&&i(n)}}}function _e(r){return{c:l,l,m:l,p:l,d:l}}function ye(r){let n,a={ctx:r,current:null,token:null,hasCatch:!1,pending:_e,then:be,catch:ke,value:6};return j(r[3],a),{c(){n=f("div"),a.block.c(),this.h()},l(e){n=g(e,"DIV",{class:!0});var t=w(n);a.block.l(t),t.forEach(i),this.h()},h(){_(n,"class","markdown-content")},m(e,t){p(e,n,t),a.block.m(n,a.anchor=null),a.mount=()=>n,a.anchor=null},p(e,t){r=e,P(a,r,t)},d(e){e&&i(n),a.block.d(),a.token=null,a=null}}}function $e(r){let n,a;return n=new V({props:{$$slots:{default:[ye]},$$scope:{ctx:r}}}),{c(){L(n.$$.fragment)},l(e){E(n.$$.fragment,e)},m(e,t){I(n,e,t),a=!0},p(e,t){const s={};t&8192&&(s.$$scope={dirty:t,ctx:e}),n.$set(s)},i(e){a||(S(n.$$.fragment,e),a=!0)},o(e){A(n.$$.fragment,e),a=!1},d(e){C(n,e)}}}function ve(r){let n,a,e,t,s,o,c,b,u,h,m,H,O;return n=new ne({props:{description:"Help for submitting modules to the Satsifactory Mod Repository",title:"Help"}}),s=new R({props:{$$slots:{default:[le]},$$scope:{ctx:r}}}),c=new R({props:{$$slots:{default:[we]},$$scope:{ctx:r}}}),H=new R({props:{$$slots:{default:[$e]},$$scope:{ctx:r}}}),{c(){L(n.$$.fragment),a=T(),e=f("div"),t=f("div"),L(s.$$.fragment),o=T(),L(c.$$.fragment),b=T(),u=f("h1"),h=U("Markdown"),m=T(),L(H.$$.fragment),this.h()},l(d){const k=W('[data-svelte="svelte-13ontw3"]',document.head);E(n.$$.fragment,k),k.forEach(i),a=M(d),e=g(d,"DIV",{});var v=w(e);t=g(v,"DIV",{class:!0});var x=w(t);E(s.$$.fragment,x),o=M(x),E(c.$$.fragment,x),x.forEach(i),b=M(v),u=g(v,"H1",{class:!0});var q=w(u);h=N(q,"Markdown"),q.forEach(i),m=M(v),E(H.$$.fragment,v),v.forEach(i),this.h()},h(){document.title="Help - SMR",_(t,"class","grid gap-4 grid-flow-col grid-cols-2"),_(u,"class","text-4xl my-4 font-bold")},m(d,k){I(n,document.head,null),p(d,a,k),p(d,e,k),y(e,t),I(s,t,null),y(t,o),I(c,t,null),y(e,b),y(e,u),y(u,h),y(e,m),I(H,e,null),O=!0},p(d,[k]){const v={};k&8192&&(v.$$scope={dirty:k,ctx:d}),s.$set(v);const x={};k&8195&&(x.$$scope={dirty:k,ctx:d}),c.$set(x);const q={};k&8192&&(q.$$scope={dirty:k,ctx:d}),H.$set(q)},i(d){O||(S(n.$$.fragment,d),S(s.$$.fragment,d),S(c.$$.fragment,d),S(H.$$.fragment,d),O=!0)},o(d){A(n.$$.fragment,d),A(s.$$.fragment,d),A(c.$$.fragment,d),A(H.$$.fragment,d),O=!1},d(d){C(n),d&&i(a),d&&i(e),C(s),C(c),C(H)}}}function He(r,n,a){let e;const t="```json\n"+JSON.stringify({CanContainContent:!0,FileVersion:3,SemVersion:"1.0.0",Version:1,Modules:[{LoadingPhase:"PostDefault",Name:"testmod",Type:"Runtime"}],Plugins:[{Name:"SML",SemVersion:"^3.0.0"}]},null,2)+"\n```",o=D(`
## Headers

\`\`\`markdown
# H1
## H2
### H3
#### H4
##### H5
###### H6

Alternatively, for H1 and H2, an underline-ish style:

Alt-H1
======

Alt-H2
------
\`\`\`

# H1
## H2
### H3
#### H4
##### H5
###### H6

Alternatively, for H1 and H2, an underline-ish style:

Alt-H1
======

Alt-H2
------

## Emphasis

\`\`\`markdown
Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~
\`\`\`

Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~


## Lists

\`\`\`markdown
1. First ordered list item
2. Another item
  * Unordered sub-list.
1. Actual numbers don't matter, just that it's a number
  1. Ordered sub-list
4. And another item.

   You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

   To have a line break without a paragraph, you will need to use two trailing spaces.
   Note that this line is separate, but within the same paragraph.
   (This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

* Unordered list can use asterisks
- Or minuses
+ Or pluses
\`\`\`

1. First ordered list item
2. Another item
  * Unordered sub-list.
1. Actual numbers don't matter, just that it's a number
  1. Ordered sub-list
4. And another item.

   You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

   To have a line break without a paragraph, you will need to use two trailing spaces.
   Note that this line is separate, but within the same paragraph.
   (This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

* Unordered list can use asterisks
- Or minuses
+ Or pluses

## Links

There are two ways to create links.

\`\`\`markdown
[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links.
http://www.example.com or <http://www.example.com> and sometimes
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com
\`\`\`

[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links.
http://www.example.com or <http://www.example.com> and sometimes
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com

## Images

\`\`\`markdown
Here's our logo (hover to see the title text):

Inline-style:
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style:
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"
\`\`\`

Here's our logo (hover to see the title text):

Inline-style:
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style:
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"

## Code and Syntax Highlighting

Code blocks are part of the Markdown spec, but syntax highlighting isn't. However, many renderers -- like Github's and *Markdown Here* -- support syntax highlighting. Which languages are supported and how those language names should be written will vary from renderer to renderer. *Markdown Here* supports highlighting for dozens of languages (and not-really-languages, like diffs and HTTP headers); to see the complete list, and how to write the language names, see the [highlight.js demo page](http://softwaremaniacs.org/media/soft/highlight/test.html).

\`\`\`markdown
Inline \`code\` has \`back-ticks around\` it.
\`\`\`

Inline \`code\` has \`back-ticks around\` it.

Blocks of code are either fenced by lines with three back-ticks <code>\`\`\`</code>, or are indented with four spaces. I recommend only using the fenced code blocks -- they're easier and only they support syntax highlighting.

<pre lang="markdown"><code>\`\`\`javascript
var s = "JavaScript syntax highlighting";
alert(s);
\`\`\`

\`\`\`python
s = "Python syntax highlighting"
print s
\`\`\`

\`\`\`
No language indicated, so no syntax highlighting.
But let's throw in a &lt;b&gt;tag&lt;/b&gt;.
\`\`\`
</code></pre>



\`\`\`javascript
var s = "JavaScript syntax highlighting";
alert(s);
\`\`\`

\`\`\`python
s = "Python syntax highlighting"
print s
\`\`\`

\`\`\`
No language indicated, so no syntax highlighting in Markdown Here (varies on Github).
But let's throw in a <b>tag</b>.
\`\`\`


## Tables

Tables aren't part of the core Markdown spec, but they are part of GFM and *Markdown Here* supports them. They are an easy way of adding tables to your email -- a task that would otherwise require copy-pasting from another application.

\`\`\`markdown
Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the
raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | \`renders\` | **nicely**
1 | 2 | 3
\`\`\`

Colons can be used to align columns.

| Tables        | Are           | Cool |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

There must be at least 3 dashes separating each header cell. The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | \`renders\` | **nicely**
1 | 2 | 3

## Blockquotes

\`\`\`markdown
> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.
\`\`\`

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.

## Inline HTML

You can also use raw HTML in your Markdown, and it'll mostly work pretty well.

\`\`\`html
<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>
\`\`\`

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

## Horizontal Rule

\`\`\`markdown
Three or more...

---

Hyphens

***

Asterisks

___

Underscores
\`\`\`

Three or more...

---

Hyphens

***

Asterisks

___

Underscores

## Line Breaks

My basic recommendation for learning how line breaks work is to experiment and discover -- hit &lt;Enter&gt; once (i.e., insert one newline), then hit it twice (i.e., insert two newlines), see what happens.
To add more than 1 empty line, use the html break tag.

Here are some things to try out:

\`\`\`html
Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a *separate paragraph*.

This line is also a separate paragraph, but...
This line is only separated by a single newline, so it's a separate line in the *same paragraph*.

<br><br><br>

This line is way far down
\`\`\`

Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a *separate paragraph*.

This line is also begins a separate paragraph, but...
This line is only separated by a single newline, so it's a separate line in the *same paragraph*.

<br><br><br>

This line is way far down

(Technical note: *Markdown Here* uses GFM line breaks, so there's no need to use MD's two-space line breaks.)
`);let c="";function b(){c=this.value,a(0,c)}return r.$$.update=()=>{r.$$.dirty&1&&a(1,e=te(c))},[c,e,t,o,b]}class je extends z{constructor(n){super();J(this,n,He,ve,Q,{})}}export{je as default};
//# sourceMappingURL=index.svelte-7e781ccb.js.map
