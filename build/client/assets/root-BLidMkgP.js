import{r as i,j as e}from"./jsx-runtime-56DGgGmo.js";import{l as y,n as x,o as S,p as f,_ as w,q as a,M as j,L as g,O as k,S as M}from"./components-vsE2zdOU.js";/**
 * @remix-run/react v2.17.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let l="positions";function H({getKey:r,...c}){let{isSpaMode:p}=y(),o=x(),u=S();f({getKey:r,storageKey:l});let d=i.useMemo(()=>{if(!r)return null;let t=r(o,u);return t!==o.key?t:null},[]);if(p)return null;let m=((t,h)=>{if(!window.history.state||!window.history.state.key){let s=Math.random().toString(32).slice(2);window.history.replaceState({key:s},"")}try{let n=JSON.parse(sessionStorage.getItem(t)||"{}")[h||window.history.state.key];typeof n=="number"&&window.scrollTo(0,n)}catch(s){console.error(s),sessionStorage.removeItem(t)}}).toString();return i.createElement("script",w({},c,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${m})(${a(JSON.stringify(l))}, ${a(JSON.stringify(d))})`}}))}const O="/assets/app-82T3T9TH.css",R=()=>[{rel:"stylesheet",href:O}];function _(){return e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx(j,{}),e.jsx(g,{})]}),e.jsxs("body",{children:[e.jsx(k,{}),e.jsx(H,{}),e.jsx(M,{})]})]})}export{_ as default,R as links};
