var r=Object.defineProperty,e=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,t=(e,a,p)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:p}):e[a]=p,o=(r,o)=>{for(var n in o||(o={}))a.call(o,n)&&t(r,n,o[n]);if(e)for(var n of e(o))p.call(o,n)&&t(r,n,o[n]);return r};const n=r=>async e=>{if(r){const a=await r(e);return o({props:o(o({},e.page.params||{}),a&&(null==a?void 0:a.props)||{})},a||{})}return{props:o({},e.page.params||{})}};export{n as p};