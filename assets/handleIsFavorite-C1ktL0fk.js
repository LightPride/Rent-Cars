import{u as e}from"./index-B8PDJhHE.js";const r=t=>t.catalogue.listOfCars,c=t=>t.catalogue.favorites,l=t=>t.catalogue.isLoading,p=t=>t.catalogue.error,i="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let g=(t=21)=>{let o="",n=crypto.getRandomValues(new Uint8Array(t));for(;t--;)o+=i[n[t]&63];return o};const u="/Rent-Cars/assets/icons-RcrHhW5J.svg",d=e.ul`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  row-gap: 50px;
  column-gap: 29px;
  margin-top: 50px;
`,f=e.li`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 274px;
  height: 426px;
  border-radius: 14px;
  align-self: stretch;
`,x=e.img`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 268px;
  border-radius: 14px;
  margin-bottom: 14px;

  object-fit: cover;
`,b=e.button`
  position: absolute;
  top: 14px;
  right: 14px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: var(--clr-brand-blue-lt);
  border: none;
  outline: none;

  z-index: 2;

  &:hover svg {
    scale: 1.2;
  }
`,h=e.svg`
  display: flex;
  justify-content: center;
  align-items: center;
  stroke: ${t=>t.isFavorite?"#3470FF":"#fff"};
  fill: ${t=>t.isFavorite?"#3470FF":"none"};

  width: 18px;
  height: 18px;

  transition: 300ms;
`,m=e.h3`
  color: #121417;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`,v=e.div`
  display: flex;
  justify-content: space-between;
`,y=e.span`
  color: #3470ff;
`,F=e.ul`
  margin-bottom: 28px;
`,w=e.p`
  color: rgba(18, 20, 23, 0.5);
`,j=e.button`
  display: inline-flex;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  color: #fff;
  background-color: #0b44cd;
  border: none;
  margin-top: auto;
  transition: background-color 300ms ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: #3470ff;
  }
`,k=(t,o)=>t.some(s=>s.id===o.id);export{j as B,b as F,x as I,d as L,v as T,p as a,l as b,c,f as d,h as e,m as f,y as g,k as h,u as i,F as j,w as k,g as n,r as s};
