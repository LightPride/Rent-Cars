import{c,b as d,j as a,i as l,d as h,e as j}from"./index-CdsmviXm.js";import{c as x,L as v,d as F,I as p,F as u,e as f,h as n,T as g,f as o,g as T,i as I,j as L,B as y,n as C}from"./handleIsFavorite-CMzabtZ4.js";const k=()=>{const e=c(x),i=d(),t=s=>{const r=n(e,s);i(r?h(s):j(s))};return a.jsx(v,{children:e.length!==0?e.map(s=>a.jsxs(F,{id:s.id,children:[a.jsx(p,{src:s.img}),a.jsx(u,{type:"button",onClick:()=>t(s),children:a.jsx(f,{isFavorite:n(e,s),width:18,height:18,children:a.jsx("use",{href:l+"#heart"})})}),a.jsxs(g,{children:[a.jsxs(o,{children:[s.make," ",a.jsx(T,{children:s.model}),", ",s.year]}),a.jsx(o,{children:s.rentalPrice})]}),a.jsx(I,{children:a.jsx(L,{children:[s.address.split(",").splice(1,2).join(" | "),s.rentalCompany,s.accessories[2],s.type,s.model,s.id,s.functionalities[0]].filter(r=>!!r).join(" | ")})}),a.jsx(y,{children:"Learn more"})]},C())):a.jsx("div",{children:"No Favorites Found"})})};function P(){return a.jsx(a.Fragment,{children:a.jsx(k,{})})}export{P as default};