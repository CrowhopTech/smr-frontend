import{d as e}from"./sha256-88abbcfe.js";import"./user-8d7a97c1.js";import{aO as t}from"./vendor-db5fc542.js";let r;const n=new Promise((e=>r=e));fetch(e+"/static/uplugin-json-schema.json").then((e=>e.json())).then((e=>r(new t(e))));const o=async e=>{const t=await n;try{const r=JSON.parse(e),n=t.validate(r);return n.valid?[]:n.errors.map((e=>{if("$ref"===e.keyword)return;let t="`"+e.instanceLocation+"`";const n=s(r,e.instanceLocation);return"object"!=typeof n&&(t+=' **"'+n+'"**'),t+=": "+e.error,t})).filter((e=>!!e))}catch(r){return["Invalid JSON"]}},s=(e,t)=>{const r=new RegExp("\\['?(.+?)'?\\]|\\.([^\\.\\[\\]]+)","gm");try{let n=e,o=r.exec(t);for(;null!==o;)n=n[o[1]||o[2]],o=r.exec(t);return n}catch(n){}};export{o as v};