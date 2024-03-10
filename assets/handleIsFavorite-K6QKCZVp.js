import{u as e}from"./index-BGocFOd_.js";const a=t=>t.catalogue.listOfCars,c=t=>t.catalogue.favorites,l=t=>t.catalogue.error,s="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let p=(t=21)=>{let o="",n=crypto.getRandomValues(new Uint8Array(t));for(;t--;)o+=s[n[t]&63];return o};const d=e.ul`
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
`,g=e.img`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 268px;
  border-radius: 14px;
  margin-bottom: 14px;

  object-fit: cover;
`,f=e.button`
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
`,x=e.svg`
  display: flex;
  justify-content: center;
  align-items: center;
  stroke: ${t=>t.isFavorite?"#3470FF":"#fff"};
  fill: ${t=>t.isFavorite?"#3470FF":"none"};

  width: 18px;
  height: 18px;

  transition: 300ms;
`,b=e.h3`
  color: #121417;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`,m=e.div`
  display: flex;
  justify-content: space-between;
`,h=e.span`
  color: #3470ff;
`,v=e.ul`
  margin-bottom: 28px;
`,y=e.p`
  color: rgba(18, 20, 23, 0.5);
`,F=e.button`
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
`,w=(t,o)=>t.some(i=>i.id===o.id);export{F as B,f as F,g as I,d as L,m as T,l as a,c as b,u as c,x as d,b as e,h as f,v as g,w as h,y as i,p as n,a as s};
