import{g as n,h as p,o as s,c as o,t as c,u as r,_}from"./app.016ef5c5.js";const i=["data-p","textContent"],d=n({__name:"Tip",props:{type:{type:String,default:"a"},title:{type:String,required:!1,default:""}},setup(u){const t=u,a=p(()=>{if(t.title)return t.title;const e={a:"\u5FC5\u8981",b:"\u5F3A\u70C8\u63A8\u8350",c:"\u63A8\u8350",d:"\u8C28\u614E\u4F7F\u7528"};return e[t.type]?e[t.type]:"\u5FC5\u8981"});return(e,l)=>(s(),o("sup",{"data-p":u.type,textContent:c(r(a))},null,8,i))}});const y=_(d,[["__scopeId","data-v-5afdd4ca"],["__file","Tip.vue"]]);export{y as default};