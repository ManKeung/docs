var o=Object.defineProperty,e=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,n=(e,a,i)=>a in e?o(e,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[a]=i;import{_ as r}from"./m-common.9ffacffc.js";import{d as s,l as d,g,h as p,o as m,c,w as u,a as f,m as _,s as y,n as b,b as v,t as S,i as j,k as x,j as P,r as C}from"./index.2180f076.js";import{_ as $,a as w}from"./m-cell-group.32b83649.js";import{_ as z}from"./m-loading-icon.878271f5.js";import{_ as k}from"./m-transition.54eea085.js";import{_ as O}from"./plugin-vue_export-helper.21dcd24c.js";import"./m-navbar.01e56689.js";import"./m-icon.f652525a.js";import"./m-line.1355d3ca.js";var h,I,M=(h=((o,e)=>{for(var a in e||(e={}))l.call(e,a)&&n(o,a,e[a]);if(i)for(var a of i(e))t.call(e,a)&&n(o,a,e[a]);return o})({},uni.$m.config.props),I={loadingText:{type:[String,Number],default:uni.$m.props.loadingPage.loadingText},image:{type:String,default:uni.$m.props.loadingPage.image},loadingMode:{type:String,default:uni.$m.props.loadingPage.loadingMode},loading:{type:Boolean,default:uni.$m.props.loadingPage.loading},bgColor:{type:String,default:uni.$m.props.loadingPage.bgColor},color:{type:String,default:uni.$m.props.loadingPage.color},fontSize:{type:[String,Number],default:uni.$m.props.loadingPage.fontSize},loadingColor:{type:String,default:uni.$m.props.loadingPage.loadingColor},loadingInactiveColor:{type:String,default:uni.$m.props.loadingPage.loadingInactiveColor},iconSize:{type:[String,Number],default:uni.$m.props.loadingPage.loadingSize}},e(h,a(I)));var T=O(s({props:M,setup(o){const e=o,a=d((()=>{if(e.iconSize)return e.iconSize;return-1!==["spinner","semicircle","circle"].indexOf(e.loadingMode)?28:"default"===e.loadingMode?10:16}));return(o,i)=>{const l=j,t=g(p("m-loading-icon"),z),n=x,r=P,s=g(p("m-transition"),k);return m(),c(s,{show:e.loading,"custom-style":{position:"fixed",zIndex:10100,top:0,left:0,right:0,bottom:0,backgroundColor:e.bgColor,display:"flex"}},{default:u((()=>[f(n,{class:"m-loading-page"},{default:u((()=>[f(n,{class:"m-loading-page__warpper"},{default:u((()=>[f(n,{class:"m-loading-page__warpper__loading-icon"},{default:u((()=>[e.image?(m(),c(l,{key:0,src:e.image,mode:"widthFit",class:"m-loading-page__warpper__loading-icon__img"},null,8,["src"])):(m(),c(t,{key:1,mode:e.loadingMode,size:_(a),color:e.loadingColor,"inactive-color":e.loadingInactiveColor},null,8,["mode","size","color","inactive-color"]))])),_:1}),y(o.$slots,"default",{},(()=>[f(r,{class:"m-loading-page__warpper__text",style:b({fontSize:o.$m.addUnit(e.fontSize),color:e.color})},{default:u((()=>[v(S(e.loadingText),1)])),_:1},8,["style"])]),!0)])),_:3})])),_:3})])),_:3},8,["show","custom-style"])}}}),[["__scopeId","data-v-6a382986"]]);const N=s({setup(o){const e=C(!1),a=C("正在加载"),i=C(""),l=(o={})=>{const{text:l="正在加载",mode:t="circle"}=o;e.value=!0,a.value=l,i.value=t,setTimeout((()=>{e.value=!1}),1e3)};return(o,t)=>{const n=g(p("m-common"),r),s=g(p("m-cell"),$),d=g(p("m-cell-group"),w),_=g(p("m-loading-page"),T),y=x;return m(),c(y,null,{default:u((()=>[f(n,{title:"加载页"}),f(d,{border:""},{default:u((()=>[f(s,{title:"基本使用","is-link":"",onClick:t[0]||(t[0]=o=>l({text:"正在加载"}))}),f(s,{title:"自定义提示文字","is-link":"",onClick:t[1]||(t[1]=o=>l({text:"loading..."}))}),f(s,{title:"动画模式","is-link":"",onClick:t[2]||(t[2]=o=>l({mode:"spinner"}))})])),_:1}),f(_,{loading:e.value,"loading-text":a.value,"loading-mode":i.value},null,8,["loading","loading-text","loading-mode"])])),_:1})}}});export{N as default};
//# sourceMappingURL=pages-loadingPage-loadingPage.d735530a.js.map
