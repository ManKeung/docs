import{_ as p,f as u,o as n,c as r,F as f,l as g,a,t as m}from"./app.f89bcd4a.js";const o="docs";const v={class:"site-box"},x=["href","title"],y=["src"],h=["textContent"],S=u({__name:"Site",props:{list:{type:Array,default:()=>[]}},setup(_){const i=t=>t?t.indexOf("/")===0?t.replace("/",`/${o}/`):t:`/${o}/assets/icon_site.png`,c=t=>{const s=`/${o}/assets/icon_site.png`;t.target.src=s};return(t,s)=>(n(),r("div",v,[(n(!0),r(f,null,g(_.list,(e,l)=>(n(),r("a",{href:e.url,target:"_blank",key:l,title:e.title||e.name},[a("img",{src:i(e.img),alt:"",onError:s[0]||(s[0]=d=>c(d))},null,40,y),a("p",{textContent:m(e.name)},null,8,h)],8,x))),128))]))}});var E=p(S,[["__scopeId","data-v-679646cd"],["__file","Site.vue"]]);export{E as default};
