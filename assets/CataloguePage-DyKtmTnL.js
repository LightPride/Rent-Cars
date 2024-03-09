import{u as n,j as e,i as F,r as a,a as Q,b as J,c as g,f as X,L as Z,d as _,e as ee,s as te}from"./index-CdsmviXm.js";import{n as j,s as ne,a as se,b as oe,c as re,L as ie,d as ae,I as le,F as ce,e as pe,h as P,T as de,f as V,g as xe,i as fe,j as he,B as A}from"./handleIsFavorite-CMzabtZ4.js";const ue=n.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 541px;
  height: auto;
  padding: 40px;

  border-radius: 24px;
  background: #fff;
`,ge=n.svg`
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
`,me=n.div`
  border-radius: 14px;
  background: #f3f3f2;
  width: 461px;
  height: 248px;
  overflow: hidden;

  background-image: url(${t=>t.imgLink});
  background-size: cover;
  background-position: center;
`,je=n.h3`
  color: #121417;
  font-family: Manrope, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-top: 16px;
`,ye=n.p`
  color: #121417;
  font-family: Manrope, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-top: 14px;
`,be=n.h3`
  color: #121417;
  font-family: Manrope, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-top: 24px;
`,R=n.p`
  color: rgba(18, 20, 23, 0.5);
  font-family: Manrope, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-top: 8px;
`,we=n.h3`
  color: #121417;
  font-family: Manrope, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-top: 24px;
`,Ce=n.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  width: 461px;
  height: 72px;
  margin-top: 8px;
`,L=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  padding: 0 14px;
  border-radius: 35px;
  background: #f9f9f9;
`,ve=n.p`
  color: #363535;
  font-family: Manrope, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.24px;
`,I=n.span`
  color: #3470ff;
  font-family: Manrope, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.24px;
`,Te=n.a`
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
`,ke=t=>{const o=t.data,h=o.rentalConditions.split(`
`),d=c=>Number(c)?e.jsx(I,{style:{color:"#3470FF"},children:c},j()):e.jsx(ve,{children:c},j()),l=h.map(c=>e.jsx(L,{children:c.split(" ").map(d)},j()));return e.jsxs(ue,{children:[e.jsx(ge,{onClick:t.onCrossClick,children:e.jsx("use",{href:F+"#cross"})}),e.jsx(me,{imgLink:o.img}),e.jsxs(je,{children:[o.make," ",e.jsx("span",{style:{color:"#3470FF"},children:o.model})," ",o.year]}),e.jsxs(R,{children:[o.address.split(",").splice(1,2).join(" | ")," | id: ",o.id," | Year: ",o.year," | Type: ",o.type," | Fuel Consumption:"," ",o.fuelConsumption," | Engine Size: ",o.engineSize]}),e.jsx(ye,{children:o.description}),e.jsx(be,{children:"Accessories and functionalities:"}),e.jsx(R,{children:o.accessories.concat(o.functionalities).join(" | ")}),e.jsx(we,{children:"Rental Conditions:"}),e.jsxs(Ce,{children:[l,e.jsxs(L,{children:["Mileage: ",e.jsx(I,{children:o.mileage})]}),e.jsxs(L,{children:["Price: ",e.jsx(I,{children:o.rentalPrice})]})]}),e.jsx(Te,{href:"tel: +380730000000",children:"Rental car"})]})},Fe=n.div`
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

  opacity: ${t=>t.showModal?"1":"0"};

  transition: 300ms;
`,Me=n.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  scale: ${t=>t.showModal?"1":"0"};

  transition: 300ms;
`,Se=document.querySelector("#modal-root"),Be=({onClose:t,showModal:o,children:h})=>{const[d,l]=a.useState(!1);a.useEffect(()=>{l(o)},[o]);const c=a.useMemo(()=>p=>{p.code==="Escape"&&(l(!1),setTimeout(()=>t(),300))},[t]),u=p=>{p.currentTarget===p.target&&(l(!1),setTimeout(()=>t(),300))};return a.useEffect(()=>(window.addEventListener("keydown",c),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",c),document.body.style.overflow="visible"}),[c]),Q.createPortal(e.jsx(Fe,{onClick:u,showModal:d,children:e.jsx(Me,{showModal:d,children:h})}),Se)},De=()=>{const[t]=a.useState(50),[o,h]=a.useState(12),[d,l]=a.useState(!1),[c,u]=a.useState(null),p=J(),{filteredCatalogue:y}=g(s=>s.catalogue);a.useEffect(()=>{p(X(o))},[p,o]);const v=g(ne),b=g(se),T=g(oe),w=g(re),M=s=>{if(P(w,s)){p(_(s));return}p(ee(s))},S=({address:s,rentalCompany:C,accessories:B,type:D,model:r,id:x,functionalities:i})=>[s.split(",").splice(1,2).join(" | "),C,B[2],D,r,x,i[0]].filter(f=>!!f).join(" | ");return e.jsx(e.Fragment,{children:e.jsxs(ie,{children:[b&&e.jsx("div",{children:b}),T?e.jsx(Z,{}):(y.length?y:v).map(s=>e.jsxs(ae,{id:s.id,children:[e.jsx(le,{src:s.img}),e.jsx(ce,{type:"button",onClick:()=>M(s),children:e.jsx(pe,{isFavorite:P(w,s),width:18,height:18,children:e.jsx("use",{href:F+"#heart"})})}),e.jsxs(de,{children:[e.jsxs(V,{children:[s.make," ",e.jsx(xe,{children:s.model}),", ",s.year]}),e.jsx(V,{children:s.rentalPrice})]}),e.jsx(fe,{children:e.jsx(he,{children:S(s)})}),e.jsx(A,{type:"button",onClick:()=>{u(s),l(!d)},children:"Learn more"})]},j())),t>o&&e.jsx(A,{type:"button",onClick:()=>h(s=>s+12),children:"Load more"}),d&&e.jsx(Be,{onClose:()=>{l(!1)},showModal:d,children:e.jsx(ke,{data:c,onCrossClick:()=>{l(!1)}})})]})})},Le=n.form`
  display: flex;
  align-items: flex-end;
  gap: 18px;

  margin: 50px auto 0px auto;
  width: 859px;
  height: 74px;
`,E=n.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: ${t=>{switch(t.selectType){case"brand":return"224px";case"price":return"125px";case"input":return"474px"}}};
  height: 74px;
`,z=n.span`
  color: #8a8a89;
  font-family: Manrope, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`,W=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: ${t=>t.selectType==="brand"?"224px":"125px"};
  height: 48px;
  padding: 0 18px;

  border-radius: 14px;
  background: #f7f7fb;

  cursor: pointer;
  user-select: none;
`,N=n.span`
  color: #121417;
  font-family: Manrope, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`,H=n.svg`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 20px;
  height: 20px;

  fill: none;

  transition: 300ms;

  transform: rotate(
    ${t=>t.isBrandDropDownOpen?"180deg":"0"}
  );
`,K=n.div`
  position: absolute;
  top: 78px;
  left: 0;

  display: flex;

  width: ${t=>t.selectType==="brand"?"224px":"125px"};
`,q=n.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  width: 100%;
  height: ${t=>t.selectType==="brand"?"272px":"188px"};
  padding: 14px 8px 14px 18px;

  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);
  background: #fff;
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);

  transition: 300ms;

  overflow-y: scroll;
  opacity: ${t=>t.isBrandDropDownOpen?"1":"0"};

  pointer-events: ${t=>t.isBrandDropDownOpen?"all":"none"};
  z-index: 3;
`,G=n.li`
  width: 190px;
  color: ${t=>t.itemValue===t.isItemActive?"rgba(18, 20, 23)":"rgba(18, 20, 23, 0.2)"};
  font-family: Manrope, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

  transition: 150ms;
  cursor: pointer;

  &:hover {
    color: #121417;
  }
`,Ie=n.div`
  position: relative;
  display: flex;

  width: 474px;
  height: 48px;
`,U=n.span`
  position: absolute;

  color: #121417;
  font-family: Manrope, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

  pointer-events: none;

  &:nth-last-of-type(1) {
    top: 14px;
    left: 24px;
  }
  &:nth-last-of-type(2) {
    top: 14px;
    left: 184px;
  }
`,Y=n.input`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 160px;
  height: 48px;

  border: none;
  outline: none;
  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background: #f7f7fb;
  padding-left: 68px;

  color: #121417;
  font-family: Manrope, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

  &:nth-last-of-type(1) {
    border-radius: 0px 14px 14px 0px;
    border-right: none;
    margin-right: 1px;
    padding-left: 48px;
  }
`,Ee=n.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 136px;
  height: 48px;
  margin-left: 18px;
  border-radius: 12px;
  background: #3470ff;
  border: none;
  outline: none;

  color: #fff;
  font-family: Manrope, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;

  cursor: pointer;
`,ze=[30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200],Oe=["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land"],$e=()=>{const[t,o]=a.useState(null),[h,d]=a.useState(!1),[l,c]=a.useState(null),[u,p]=a.useState(!1),[y,v]=a.useState(""),[b,T]=a.useState(""),w=J(),{isLoading:M}=g(r=>r.catalogue),S=g(r=>r.catalogue.listOfCars),s=a.useRef(null);a.useEffect(()=>{const r=i=>{s.current&&!s.current.contains(i.target)&&!selectButton.contains(i.target)&&d(!1)},x=i=>{s.current&&!s.current.contains(i.target)&&!selectButton2.contains(i.target)&&p(!1)};return document.addEventListener("click",r),document.addEventListener("click",x),()=>{document.removeEventListener("click",r),document.removeEventListener("click",x)}},[w]);const C=r=>{const{name:x,value:i}=r.currentTarget;x==="formFromText"?v(i):x==="formToText"&&T(i)},B=(r,x)=>x.filter(i=>Object.entries(r).every(([f,m])=>{if(f==="make")return!m||i[f]===m;if(f==="rentalPrice"){const k=typeof i[f]=="string"?parseFloat(i[f].replace(/\D/g,"")):i[f];return!m||typeof m=="number"&&k<=parseFloat(m)}if(f==="mileage"){const{from:k,to:O}=m,$=parseInt(i[f]);return(!k||$>=parseInt(k))&&(!O||$<=parseInt(O))}return!0})),D=r=>{r.preventDefault();const i=B({make:t,rentalPrice:l,mileage:{from:y,to:b}},S);w(te(i)),o(null),c(null),v(""),T("")};return e.jsx(e.Fragment,{children:M?e.jsx(e.Fragment,{}):e.jsxs(Le,{onSubmit:D,children:[e.jsxs(E,{selectType:"brand",children:[e.jsx(z,{children:"Car brand"}),e.jsxs(W,{id:"selectButton",onClick:()=>{d(!h)},selectType:"brand",children:[e.jsx(N,{children:t||"Enter the text"}),e.jsx(H,{width:20,height:20,isBrandDropDownOpen:h,children:e.jsx("use",{href:F+"#arrowDown"})})]}),e.jsx(K,{ref:s,selectType:"brand",children:e.jsx(q,{isBrandDropDownOpen:h,selectType:"brand",children:Oe.map(r=>e.jsx(G,{onClick:()=>{o(r)},itemValue:r,isItemActive:t,children:r},j()))})})]}),e.jsxs(E,{selectType:"price",children:[e.jsx(z,{children:"Price/ 1 hour"}),e.jsxs(W,{id:"selectButton2",onClick:()=>{p(!u)},selectType:"price",children:[e.jsx(N,{children:`To ${l||""}$`}),e.jsx(H,{width:20,height:20,isBrandDropDownOpen:u,children:e.jsx("use",{href:F+"#arrowDown"})})]}),e.jsx(K,{ref:s,selectType:"price",children:e.jsx(q,{isBrandDropDownOpen:u,selectType:"price",children:ze.map(r=>e.jsx(G,{onClick:()=>{c(r)},itemValue:r,isItemActive:l,children:r},j()))})})]}),e.jsxs(E,{selectType:"input",children:[e.jsx(z,{children:"Сar mileage / km"}),e.jsxs(Ie,{children:[e.jsx(U,{children:"To"}),e.jsx(U,{children:"From"}),e.jsx(Y,{type:"number",name:"formFromText",value:y,onChange:C}),e.jsx(Y,{type:"number",name:"formToText",value:b,onChange:C}),e.jsx(Ee,{type:"submit",children:"Search"})]})]})]})})},Pe=()=>e.jsxs(e.Fragment,{children:[e.jsx($e,{}),e.jsx(De,{})]});function Re(){return e.jsx(Pe,{})}export{Re as default};
