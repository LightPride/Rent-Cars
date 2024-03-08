import{u as i,j as e,r as l,a as D,b as P,f as R,c as f,d as A,e as W}from"./index-B8PDJhHE.js";import{n as x,i as b,s as $,a as q,b as K,c as N,L as V,d as Y,I as G,F as H,e as J,h as C,T as O,f as v,g as Q,j as U,k as X,B as w}from"./handleIsFavorite-C1ktL0fk.js";const Z=i.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 460px;
  /* height: 752px; */
  padding: 40px;

  border-radius: 24px;
  background: #fff;
`,_=i.svg`
  position: absolute;
  top: 16px;
  right: 16px;

  stroke: #121417;
  fill: none;

  width: 24px;
  height: 24px;

  transition: 300ms;
  cursor: pointer;

  &:hover {
    stroke: #3470ff;
  }
`,ee=i.div`
  border-radius: 14px;
  background: #f3f3f2;
  width: 461px;
  height: 248px;
  overflow: hidden;

  background-image: url(${s=>s.imgLink});
  background-size: cover;
  background-position: center;
`,te=i.h3`
  color: #121417;
  font-family: Manrope, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-top: 16px;
`,ne=i.p`
  color: #121417;
  font-family: Manrope, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-top: 14px;
`,se=i.h3`
  color: #121417;
  font-family: Manrope, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-top: 24px;
`,k=i.p`
  color: rgba(18, 20, 23, 0.5);
  font-family: Manrope, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-top: 8px;
`,ie=i.h3`
  color: #121417;
  font-family: Manrope, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-top: 24px;
`,oe=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  width: 461px;
  height: 72px;
  margin-top: 8px;
`,g=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  height: 32px;
  padding: 0 14px;
  border-radius: 35px;
  background: #f9f9f9;
`,re=i.p`
  color: #363535;
  font-family: Manrope, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.24px;
`,u=i.span`
  color: #3470ff;
  font-family: Manrope, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.24px;
`,ae=i.a`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 168px;
  height: 44px;
  margin-top: 24px;
  border-radius: 12px;
  background: #3470ff;

  cursor: pointer;

  color: #fff;
  font-family: Manrope, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
`,le=s=>{const t=s.data,d=t.rentalConditions.split(`
`),c=o=>Number(o)?e.jsx(u,{style:{color:"#3470FF"},children:o},x()):e.jsx(re,{children:o},x()),r=d.map(o=>e.jsx(g,{children:o.split(" ").map(c)},x()));return e.jsxs(Z,{children:[e.jsx(_,{onClick:s.onCrossClick,children:e.jsx("use",{href:b+"#cross"})}),e.jsx(ee,{imgLink:t.img}),e.jsxs(te,{children:[t.make," ",e.jsx("span",{style:{color:"#3470FF"},children:t.model})," ",t.year]}),e.jsxs(k,{children:[t.address.split(",").splice(1,2).join(" | ")," | id: ",t.id," | Year: ",t.year," | Type: ",t.type," | Fuel Consumption:"," ",t.fuelConsumption," | Engine Size: ",t.engineSize]}),e.jsx(ne,{children:t.description}),e.jsx(se,{children:"Accessories and functionalities:"}),e.jsx(k,{children:t.accessories.concat(t.functionalities).join(" | ")}),e.jsx(ie,{children:"Rental Conditions:"}),e.jsxs(oe,{children:[r,e.jsxs(g,{children:["Mileage: ",e.jsx(u,{children:t.mileage})]}),e.jsxs(g,{children:["Price: ",e.jsx(u,{children:t.rentalPrice})]})]}),e.jsx(ae,{href:"tel: +380730000000",children:"Rental car"})]})},ce=i.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  transform: scale(1);
  padding: 15px;

  z-index: 2;

  opacity: ${s=>s.showModal?"1":"0"};

  transition: 300ms;
`,de=i.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  scale: ${s=>s.showModal?"1":"0"};

  transition: 300ms;
`,pe=document.querySelector("#modal-root"),fe=({onClose:s,showModal:t,children:d})=>{const[c,r]=l.useState(!1);l.useEffect(()=>{r(t)},[t]);const o=l.useMemo(()=>a=>{a.code==="Escape"&&(r(!1),setTimeout(()=>s(),300))},[s]),h=a=>{a.currentTarget===a.target&&(r(!1),setTimeout(()=>s(),300))};return l.useEffect(()=>(window.addEventListener("keydown",o),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",o),document.body.style.overflow="visible"}),[o]),D.createPortal(e.jsx(ce,{onClick:h,showModal:c,children:e.jsx(de,{showModal:c,children:d})}),pe)},xe=()=>{const[s]=l.useState(1),[t,d]=l.useState(12),[c,r]=l.useState(!1),[o,h]=l.useState(null),a=P();l.useEffect(()=>{a(R(s))},[a,s]);const p=f($),m=f(q),M=f(K),j=f(N),F=n=>{if(C(j,n)){a(A(n));return}a(W(n))},L=({address:n,rentalCompany:y,accessories:T,type:z,model:E,id:S,functionalities:I})=>[n.split(",").splice(1,2).join(" | "),y,T[2],z,E,S,I[0]].filter(B=>!!B).join(" | ");return e.jsxs(e.Fragment,{children:[e.jsxs(V,{children:[m&&e.jsx("div",{children:m}),M?e.jsx("div",{children:"Loading..."}):p.map(n=>e.jsxs(Y,{id:n.id,children:[e.jsx(G,{src:n.img}),e.jsx(H,{type:"button",onClick:()=>F(n),children:e.jsx(J,{isFavorite:C(j,n),width:18,height:18,children:e.jsx("use",{href:b+"#heart"})})}),e.jsxs(O,{children:[e.jsxs(v,{children:[n.make," ",e.jsx(Q,{children:n.model}),", ",n.year]}),e.jsx(v,{children:n.rentalPrice})]}),e.jsx(U,{children:e.jsx(X,{children:L(n)})}),e.jsx(w,{type:"button",onClick:()=>{h(n),r(!c)},children:"Learn more"})]},x())),(p==null?void 0:p.totalCount)>t&&e.jsx(w,{type:"button",onClick:()=>d(n=>n+12),children:"Load more"}),c&&e.jsx(fe,{onClose:()=>{r(!1)},showModal:c,children:e.jsx(le,{data:o,onCrossClick:()=>{r(!1)}})})]}),e.jsx("img",{src:"https://gifdb.com/images/high/stationary-rat-vertical-spin-0jmp9hxvxz4p24ms.gif",alt:""})]})},he=()=>e.jsx(e.Fragment,{children:e.jsx(xe,{})});function me(){return e.jsx(he,{})}export{me as default};
