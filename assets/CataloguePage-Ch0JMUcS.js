import{u as n,j as e,i as M,r as a,a as J,b as Y,c as y,f as Q,d as X,e as Z,g as _,s as ee}from"./index-BGocFOd_.js";import{n as j,s as te,a as ne,b as oe,L as se,c as re,I as ie,F as ae,d as le,h as P,T as ce,e as $,f as pe,g as de,i as fe,B as V}from"./handleIsFavorite-K6QKCZVp.js";const xe=n.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 541px;
  height: auto;
  padding: 40px;

  border-radius: 24px;
  background: #fff;
`,he=n.svg`
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
`,ue=n.div`
  border-radius: 14px;
  background: #f3f3f2;
  width: 461px;
  height: 248px;
  overflow: hidden;

  background-image: url(${t=>t.imgLink});
  background-size: cover;
  background-position: center;
`,ge=n.h3`
  color: #121417;
  font-family: Manrope, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-top: 16px;
`,me=n.p`
  color: #121417;
  font-family: Manrope, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-top: 14px;
`,ye=n.h3`
  color: #121417;
  font-family: Manrope, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-top: 24px;
`,A=n.p`
  color: rgba(18, 20, 23, 0.5);
  font-family: Manrope, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-top: 8px;
`,je=n.h3`
  color: #121417;
  font-family: Manrope, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-top: 24px;
`,be=n.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  width: 461px;
  height: 72px;
  margin-top: 8px;
`,D=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  padding: 0 14px;
  border-radius: 35px;
  background: #f9f9f9;
`,we=n.p`
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
`,Ce=n.a`
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
`,ve=t=>{const s=t.data,p=s.rentalConditions.split(`
`),d=l=>Number(l)?e.jsx(I,{style:{color:"#3470FF"},children:l},j()):e.jsx(we,{children:l},j()),c=p.map(l=>e.jsx(D,{children:l.split(" ").map(d)},j()));return e.jsxs(xe,{children:[e.jsx(he,{onClick:t.onCrossClick,children:e.jsx("use",{href:M+"#cross"})}),e.jsx(ue,{imgLink:s.img}),e.jsxs(ge,{children:[s.make," ",e.jsx("span",{style:{color:"#3470FF"},children:s.model})," ",s.year]}),e.jsxs(A,{children:[s.address.split(",").splice(1,2).join(" | ")," | id: ",s.id," | Year: ",s.year," | Type: ",s.type," | Fuel Consumption:"," ",s.fuelConsumption," | Engine Size: ",s.engineSize]}),e.jsx(me,{children:s.description}),e.jsx(ye,{children:"Accessories and functionalities:"}),e.jsx(A,{children:s.accessories.concat(s.functionalities).join(" | ")}),e.jsx(je,{children:"Rental Conditions:"}),e.jsxs(be,{children:[c,e.jsxs(D,{children:["Mileage: ",e.jsx(I,{children:s.mileage})]}),e.jsxs(D,{children:["Price: ",e.jsx(I,{children:s.rentalPrice})]})]}),e.jsx(Ce,{href:"tel: +380730000000",children:"Rental car"})]})},Te=n.div`
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
`,ke=n.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  scale: ${t=>t.showModal?"1":"0"};

  transition: 300ms;
`,Me=document.querySelector("#modal-root"),Fe=({onClose:t,showModal:s,children:p})=>{const[d,c]=a.useState(!1);a.useEffect(()=>{c(s)},[s]);const l=a.useMemo(()=>x=>{x.code==="Escape"&&(c(!1),setTimeout(()=>t(),300))},[t]),f=x=>{x.currentTarget===x.target&&(c(!1),setTimeout(()=>t(),300))};return a.useEffect(()=>(window.addEventListener("keydown",l),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",l),document.body.style.overflow="visible"}),[l]),J.createPortal(e.jsx(Te,{onClick:f,showModal:d,children:e.jsx(ke,{showModal:d,children:p})}),Me)},Se=()=>{const[t,s]=a.useState(1),[p,d]=a.useState(!1),[c,l]=a.useState(null),f=Y(),{filteredCatalogue:x}=y(o=>o.catalogue),g=y(te),b=y(ne),w=y(oe);a.useEffect(()=>{f(Q())},[f]);const v=o=>{if(P(w,o)){f(X(o));return}f(Z(o))},T=()=>{s(o=>o+1),f(_(t))},F=({address:o,rentalCompany:C,accessories:S,type:B,model:r,id:h,functionalities:i})=>[o.split(",").splice(1,2).join(" | "),C,S[2],B,r,h,i[0]].filter(u=>!!u).join(" | ");return e.jsx(e.Fragment,{children:e.jsxs(se,{children:[b&&e.jsx("div",{children:b}),(x.length?x:g).map(o=>e.jsxs(re,{id:o.id,children:[e.jsx(ie,{src:o.img}),e.jsx(ae,{type:"button",onClick:()=>v(o),children:e.jsx(le,{isFavorite:P(w,o),width:18,height:18,children:e.jsx("use",{href:M+"#heart"})})}),e.jsxs(ce,{children:[e.jsxs($,{children:[o.make," ",e.jsx(pe,{children:o.model}),", ",o.year]}),e.jsx($,{children:o.rentalPrice})]}),e.jsx(de,{children:e.jsx(fe,{children:F(o)})}),e.jsx(V,{type:"button",onClick:()=>{l(o),d(!p)},children:"Learn more"})]},j())),(g==null?void 0:g.length)%12===0&&e.jsx(V,{type:"button",onClick:()=>T(),children:"Load more"}),p&&e.jsx(Fe,{onClose:()=>{d(!1)},showModal:p,children:e.jsx(ve,{data:c,onCrossClick:()=>{d(!1)}})})]})})},Be=n.form`
  display: flex;
  align-items: flex-end;
  gap: 18px;

  margin: 50px auto 0px auto;
  width: 859px;
  height: 74px;
`,L=n.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: ${t=>{switch(t.selectType){case"brand":return"224px";case"price":return"125px";case"input":return"474px"}}};
  height: 74px;
`,E=n.span`
  color: #8a8a89;
  font-family: Manrope, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`,R=n.div`
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
`,W=n.span`
  color: #121417;
  font-family: Manrope, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`,N=n.svg`
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
`,H=n.div`
  position: absolute;
  top: 78px;
  left: 0;

  display: flex;

  width: ${t=>t.selectType==="brand"?"224px":"125px"};
`,K=n.ul`
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
`,q=n.li`
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
`,De=n.div`
  position: relative;
  display: flex;

  width: 474px;
  height: 48px;
`,G=n.span`
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
`,U=n.input`
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
`,Ie=n.button`
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
`,Le=[30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200],Ee=["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land"],ze=()=>{const[t,s]=a.useState(null),[p,d]=a.useState(!1),[c,l]=a.useState(null),[f,x]=a.useState(!1),[g,b]=a.useState(""),[w,v]=a.useState(""),T=Y();y(r=>r.catalogue);const F=y(r=>r.catalogue.listOfCars),o=a.useRef(null);a.useEffect(()=>{const r=i=>{o.current&&!o.current.contains(i.target)&&!selectButton.contains(i.target)&&d(!1)},h=i=>{o.current&&!o.current.contains(i.target)&&!selectButton2.contains(i.target)&&x(!1)};return document.addEventListener("click",r),document.addEventListener("click",h),()=>{document.removeEventListener("click",r),document.removeEventListener("click",h)}},[T]);const C=r=>{const{name:h,value:i}=r.currentTarget;h==="formFromText"?b(i):h==="formToText"&&v(i)},S=(r,h)=>h.filter(i=>Object.entries(r).every(([u,m])=>{if(u==="make")return!m||i[u]===m;if(u==="rentalPrice"){const k=typeof i[u]=="string"?parseFloat(i[u].replace(/\D/g,"")):i[u];return!m||typeof m=="number"&&k<=parseFloat(m)}if(u==="mileage"){const{from:k,to:z}=m,O=parseInt(i[u]);return(!k||O>=parseInt(k))&&(!z||O<=parseInt(z))}return!0})),B=r=>{r.preventDefault();const i=S({make:t,rentalPrice:c,mileage:{from:g,to:w}},F);T(ee(i)),s(null),l(null),b(""),v("")};return e.jsx(e.Fragment,{children:e.jsxs(Be,{onSubmit:B,children:[e.jsxs(L,{selectType:"brand",children:[e.jsx(E,{children:"Car brand"}),e.jsxs(R,{id:"selectButton",onClick:()=>{d(!p)},selectType:"brand",children:[e.jsx(W,{children:t||"Enter the text"}),e.jsx(N,{width:20,height:20,isBrandDropDownOpen:p,children:e.jsx("use",{href:M+"#arrowDown"})})]}),e.jsx(H,{ref:o,selectType:"brand",children:e.jsx(K,{isBrandDropDownOpen:p,selectType:"brand",children:Ee.map(r=>e.jsx(q,{onClick:()=>{s(r)},itemValue:r,isItemActive:t,children:r},j()))})})]}),e.jsxs(L,{selectType:"price",children:[e.jsx(E,{children:"Price/ 1 hour"}),e.jsxs(R,{id:"selectButton2",onClick:()=>{x(!f)},selectType:"price",children:[e.jsx(W,{children:`To ${c||""}$`}),e.jsx(N,{width:20,height:20,isBrandDropDownOpen:f,children:e.jsx("use",{href:M+"#arrowDown"})})]}),e.jsx(H,{ref:o,selectType:"price",children:e.jsx(K,{isBrandDropDownOpen:f,selectType:"price",children:Le.map(r=>e.jsx(q,{onClick:()=>{l(r)},itemValue:r,isItemActive:c,children:r},j()))})})]}),e.jsxs(L,{selectType:"input",children:[e.jsx(E,{children:"Сar mileage / km"}),e.jsxs(De,{children:[e.jsx(G,{children:"To"}),e.jsx(G,{children:"From"}),e.jsx(U,{type:"number",name:"formFromText",value:g,onChange:C}),e.jsx(U,{type:"number",name:"formToText",value:w,onChange:C}),e.jsx(Ie,{type:"submit",children:"Search"})]})]})]})})},Oe=()=>e.jsxs(e.Fragment,{children:[e.jsx(ze,{}),e.jsx(Se,{})]});function Ve(){return e.jsx(Oe,{})}export{Ve as default};
