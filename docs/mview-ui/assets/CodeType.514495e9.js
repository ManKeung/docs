import{f as r,g as t,o as u,c as d,b as p,t as _,u as s,h as c,n as i,_ as f}from"./app.c6be04c0.js";const m=["textContent"],y=r({__name:"CodeType",props:{bad:{type:Boolean,default:!1},title:{type:String,required:!1,default:""}},setup(a){const e=a,o=t(()=>e.title?e.title:e.bad?"\u53CD\u9762\u4F8B\u5B50":"\u6B63\u9762\u4F8B\u5B50"),n=t(()=>e.bad?"style-example-bad":"style-example-good");return(l,B)=>(u(),d("div",{class:i([s(n),"style-example"])},[p("h4",{textContent:_(s(o))},null,8,m),c(l.$slots,"default",{},void 0,!0)],2))}});const x=f(y,[["__scopeId","data-v-fd733898"],["__file","CodeType.vue"]]);export{x as default};