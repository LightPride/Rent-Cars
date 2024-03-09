import{u as e}from"./index-CdsmviXm.js";const r=t=>t.catalogue.listOfCars,c=t=>t.catalogue.favorites,l=t=>t.catalogue.isLoading,p=t=>t.catalogue.error,i="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let d=(t=21)=>{let o="",n=crypto.getRandomValues(new Uint8Array(t));for(;t--;)o+=i[n[t]&63];return o};const g=e.ul`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  row-gap: 50px;
  column-gap: 29px;
  margin-top: 50px;
  padding-bottom: 50px;
`,u=e.li`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 274px;
  height: 426px;
  border-radius: 14px;
  align-self: stretch;
`,f=e.img`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 268px;
  border-radius: 14px;
  margin-bottom: 14px;

  object-fit: cover;
`,x=e.button`
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
`,b=e.svg`
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
`,h=e.div`
  display: flex;
  justify-content: space-between;
`,v=e.span`
  color: #3470ff;
`,y=e.ul`
  margin-bottom: 28px;
`,F=e.p`
  color: rgba(18, 20, 23, 0.5);
`,w=e.button`
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
`,j=(t,o)=>t.some(s=>s.id===o.id);export{w as B,x as F,f as I,g as L,h as T,p as a,l as b,c,u as d,b as e,m as f,v as g,j as h,y as i,F as j,d as n,r as s};
