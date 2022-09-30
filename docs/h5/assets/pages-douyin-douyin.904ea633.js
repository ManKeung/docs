var t=Object.defineProperty,e=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,l=(e,s,i)=>s in e?t(e,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[s]=i,a=(t,e)=>{for(var s in e||(e={}))o.call(e,s)&&l(t,s,e[s]);if(i)for(var s of i(e))n.call(e,s)&&l(t,s,e[s]);return t},r=(t,i)=>e(t,s(i));import{d as h,u as c,l as p,g as u,h as d,o as m,c as f,w as y,a as g,m as v,n as w,s as x,b,t as $,p as M,B as T,v as _,j as k,k as S,A as C,q as j,r as I,x as P,C as H,e as O,f as X,F as D,D as U,y as B}from"./index.2180f076.js";import{_ as E,a as Y}from"./m-icon.f652525a.js";import{_ as W}from"./plugin-vue_export-helper.21dcd24c.js";import{_ as z}from"./m-loading-icon.878271f5.js";var F=W(h({props:r(a({},uni.$m.config.props),{bgc:{type:String,default:""},linear:{type:String,default:""},back:{type:Function},left:{type:Boolean,default:!0},leftTitle:{type:String,default:""},leftIcon:{type:String,default:"left"},leftColor:{type:String,default:""},title:{type:String,default:""},titleLen:{type:[Number,String],default:12},titleColor:{type:String,default:""},sty:{type:Object,default:()=>{}}}),setup(t){const e=t,s=c(),i=p((()=>{const t={height:`${uni.$m.sys().customBar}px`,zIndex:uni.$m.zIndex.navBar};return e.bgc&&(t.backgroundColor=e.bgc),e.linear&&(t.backgroundImage=e.linear),a(a(a({},t),e.sty),uni.$m.addStyle(e.customStyle))}));p((()=>e.leftIcon?`m-${e.leftIcon}`:"m-left"));const o=p((()=>s.left||!e.leftColor?{}:e.leftColor?{color:e.leftColor}:void 0)),n=p((()=>{const t={};return t.top=uni.$m.sys().statusBarHeight+"px",e.titleColor&&(t.color=e.titleColor),!e.titleColor&&e.leftColor&&(t.color=e.leftColor),t})),l=p((()=>{if(!e.title)return"";const t=e.title+"";let s=1*e.title.len;return Number.isNaN(s)&&(s=12),t.length<=s?t:(e.title+"").slice(0,s)+"..."})),r=()=>{1!==T().length&&(e.back?e.back():uni.$Route?uni.$Route.navigateBack():_())};return(t,a)=>{const h=u(d("m-status-bar"),E),c=u(d("m-icon"),Y),p=k,T=S;return m(),f(T,{class:"m-header",style:w(v(i))},{default:y((()=>[g(h),g(T,{class:"m-header-content"},{default:y((()=>[e.left||v(s).left?(m(),f(T,{key:0,class:"m-header-left",style:w(v(o))},{default:y((()=>[x(t.$slots,"left",{},(()=>[g(c,{name:"left",color:"",size:"42rpx",stop:"",onClick:r}),e.leftTitle?(m(),f(p,{key:0,class:"txt"},{default:y((()=>[b($(e.leftTitle),1)])),_:1})):M("",!0)]),!0)])),_:3},8,["style"])):M("",!0),v(s).default?(m(),f(T,{key:1,class:"m-header-center"},{default:y((()=>[x(t.$slots,"default",{},void 0,!0)])),_:3})):M("",!0),v(l)&&!v(s).default?(m(),f(T,{key:2,class:"m-header-center center",style:w(v(n))},{default:y((()=>[b($(v(l)),1)])),_:1},8,["style"])):M("",!0),v(s).right?(m(),f(T,{key:3,class:"m-header-right"},{default:y((()=>[x(t.$slots,"right",{},void 0,!0)])),_:3})):M("",!0)])),_:3})])),_:3},8,["style"])}}}),[["__scopeId","data-v-42f1a9b0"]]),N={options:{type:Object,default:()=>{}}},q=null;const A={data:()=>({ins:null,timer:null,me:{},self:{top:0,oldTop:0,isTouch:!1,startXY:{x:0,y:0},isDown:!1,isUp:!1,isPrevent:!1}}),mounted(){this.ins||(this.ins=this.$ownerInstance)},methods:{propObserver(t={}){this.me=t,!this.me.loading&&this.ins&&(this.onMoving({cls:".m-swiper-down .right",style:{opacity:0,transition:"none"}}),this.onMoving({cls:".m-swiper-down .left",style:{opacity:0,transition:"none"}}))},onMoving(t={}){const{cls:e=".m-swiper-box",top:s=0,type:i="none",style:o={},time:n=null}=t,l=a({"will-change":"transform",top:`${s}px`,transition:`${i} 0.5s`},o);n?(this.timer&&(this.ins.clearTimeout(q),this.timer=null),this.timer=this.ins.setTimeout((()=>{this.ins.requestAnimationFrame((()=>{this.ins.selectComponent(e).setStyle(l),".m-swiper-box"===e&&"top"===i&&(this.self.top=s)})),q=null}),n)):this.ins.requestAnimationFrame((()=>{this.ins.selectComponent(e).setStyle(l),".m-swiper-box"===e&&"top"===i&&(this.self.top=s)}))},setIndex(t={}){const{index:e=0}=t,s=this.me.index+-1*e;return!(s>this.me.len-1)&&(!(s<0)&&(this.me.index=s,this.ins.callMethod("$emitWXS",{type:"setIndex",value:s}),!0))},funPrevent(t){return!!this.self.isPrevent&&(t.stopPropagation(),t.preventDefault(),!0)},touchstartEvent(t){this.funPrevent(t);const e=t.changedTouches||[],s=e[0].pageX||0,i=e[0].pageY||0;!e.length||e.length>=2||(this.self.isTouch=!0,this.self.oldTop=this.self.top,this.self.startXY={x:s,y:i})},touchmoveEvent(t){this.funPrevent(t);const{startXY:e,oldTop:s,isTouch:i}=this.self,o=this.me.index;if(!i)return;const n=t.changedTouches||[],l=n[0].pageX||0,a=n[0].pageY||0,r=l-e.x,h=a-e.y,c=Math.abs(h)-Math.abs(r);if(c<0&&c<10)return;h<0&&!this.self.isDown&&(this.self.isMoveUP=!0);const p=Math.abs(h);if(h>0&&0===o&&!this.self.isMoveUP&&(this.self.isDown=!0),h<0&&o===this.me.len-1&&(this.self.isUp=!0),this.self.isDown){let t=0,e=0;return h>this.me.dH?(t=this.me.dH,e=1):(t=h,e=h/this.me.dH),e=h<-1*this.me.dH?1:Math.abs(h/this.me.dH),e>1&&(e=1),!this.me.loading&&this.onMoving({cls:".m-swiper-down",top:t,style:{opacity:1}}),!this.me.loading&&this.onMoving({cls:".m-swiper-down .left",style:{opacity:e}}),!this.me.loading&&this.onMoving({cls:".m-swiper-down .right",style:{opacity:e}}),void this.ins.callMethod("$emitWXS",{type:"header",value:{opacity:1-e,top:t}})}if(this.self.isUp){let t=0,e=this.me.maxH;return t=h<e?e:h,void this.onMoving({top:s+t})}if(h>0&&o)this.onMoving({top:s+p});else if(0===o&&h>0){const t=s-p;this.onMoving({top:t<0?0:t})}else this.onMoving({top:s-p})},touchendEvent(t){this.funPrevent(t);const{loading:e,index:s,height:i}=this.me,{startXY:o,oldTop:n,isTouch:l}=this.self;if(!l)return;const a=t.changedTouches||[],r=(a[0].pageX,a[0].pageY||0);o.x;const h=r-o.y,c=Math.abs(h);this.self.isTouch=!1,this.self.isMoveUP=!1;const p=h>0?1:-1;if(this.self.isDown)return this.self.isDown=!1,h>=this.me.dH&&!e?(this.onMoving({cls:".m-swiper-down",top:0,style:{transition:"all 0.5s"}}),this.onMoving({cls:".m-swiper-down .left",style:{opacity:0,transition:"all 0.5s"},time:1e3}),this.onMoving({cls:".m-swiper-down .right",style:{opacity:1,transition:"all 0.5s"}}),this.ins.callMethod("$emitWXS",{type:"isDown",value:!0})):(this.onMoving({cls:".m-swiper-down",top:0,style:{transition:"none 0.5s"}}),this.onMoving({cls:".m-swiper-down .left",style:{opacity:0,transition:"none 0.5s"}}),this.onMoving({cls:".m-swiper-down .right",style:{opacity:0,transition:"none 0.5s"}}),this.ins.callMethod("$emitWXS",{type:"header",value:{opacity:1,top:0}})),void this.onMoving({top:n,type:"top"});if(this.self.isUp){this.self.isUp=!1;return h<=this.me.maxH&&!e&&this.ins.callMethod("$emitWXS",{type:"isUp",value:!0}),void this.onMoving({top:n,type:"top"})}if(c<this.me.scrollH)return void this.onMoving({top:n,type:"top"});this.setIndex({index:p})?this.onMoving({top:n+i*p,type:"top"}):this.onMoving({top:n,type:"top"})}}};var R=t=>{t.$renderjs||(t.$renderjs=[]),t.$renderjs.push("wxs"),t.mixins||(t.mixins=[]),t.mixins.push({beforeCreate(){this.wxs=this},mounted(){this.$ownerInstance=this.$gcd(this,!0)}}),t.mixins.push(A)};const L=h({emits:["change"],methods:{$emitWXS(t){this.$emit("change",t)}}}),G=h(r(a({},L),{props:N,setup(t){const e=t;C().proxy;const s=p((()=>{const{height:t,width:s}=e.options;return{width:`${s}px`,height:`${t}px`}})),i=p((()=>({height:`${uni.$m.sys().customBar}px`}))),o=p((()=>"")),n=p((()=>{const{height:t,width:s,data:i=[]}=e;return{width:`${s}px`,height:t*i.length+"px"}}));return(t,l)=>{const a=u(d("m-loading-icon"),z),r=S,h=u(d("m-status-bar"),E);return m(),f(r,{class:"m-swiper","change:prop":t.wxs.propObserver,prop:e.options,style:w(v(s)),onTouchstart:t.wxs.touchstartEvent,onTouchmove:t.wxs.touchmoveEvent,onTouchend:t.wxs.touchendEvent,onTouchcancel:t.wxs.touchendEvent},{default:y((()=>[g(r,{class:"m-swiper-up",style:w(v(s))},{default:y((()=>[g(a,{class:"loading",size:14,duration:900,mode:"bicircle"})])),_:1},8,["style"]),g(r,{class:"m-swiper-box",style:w(v(n))},{default:y((()=>[x(t.$slots,"default",{},void 0,!0)])),_:3},8,["style"]),g(r,{class:"m-swiper-down",style:w(v(i))},{default:y((()=>[g(h),g(r,{class:"m-swiper-down-box"},{default:y((()=>[g(r,{class:"left"}),g(r,{class:j(["right",v(o)])},{default:y((()=>[g(a,{size:14,duration:900,mode:"bicircle"})])),_:1},8,["class"])])),_:1})])),_:1},8,["style"])])),_:3},8,["change:prop","prop","style","onTouchstart","onTouchmove","onTouchend","onTouchcancel"])}}}));R(G);var J=W(G,[["__scopeId","data-v-4173b486"]]);var K=W(h({setup(t){const e=I(0),s=I(0),i=I(0),o=I(["red","blue","pink","yellow"]),n=I(!1),l=I(1),h=I(0),c=I(!1),x=p((()=>({width:`${s.value}px`,height:`${e.value}px`}))),M=p((()=>c.value?{opacity:l.value,transition:"all 0.5s",top:h.value/2+"px"}:{opacity:1,transition:"all 0.1s",top:0})),T=p({get:()=>({len:o.value.length,index:i.value,height:e.value,width:s.value,loading:n.value,maxH:-1*U(200),scrollH:U(200),dH:uni.$m.sys.customBar}),set(t){const{type:e,value:s}=t;switch(e){case"isUp":n.value=s,setTimeout((()=>{n.value=!1}),3e3);break;case"setIndex":i.value=s;break;case"isDown":n.value=s,setTimeout((()=>{n.value=!1,c.value=!1}),3e3);break;case"header":l.value=s.opacity,c.value=!0,h.value=s.top}}}),_=t=>T.value=t;return P((()=>{C().proxy,H((()=>{B().select(".page").boundingClientRect((t=>{const{width:i=0,height:o=0}=t;e.value=o,s.value=i})).exec()}))})),(t,e)=>{const s=u(d("m-header"),F),n=S,l=u(d("m-douyin"),J);return m(),f(n,{class:"page"},{default:y((()=>[g(s,{"left-color":"#fff",sty:v(M),title:"测试标题测试标题测试标题测试标题测试标题"},null,8,["sty"]),g(l,{options:v(T),onChange:_},{default:y((()=>[(m(!0),O(D,null,X(o.value,(t=>(m(),f(n,{key:t,style:w(r(a({},v(x)),{background:t})),class:"item"},{default:y((()=>[b($(t)+" "+$(i.value),1)])),_:2},1032,["style"])))),128))])),_:1},8,["options"])])),_:1})}}}),[["__scopeId","data-v-4bf0bf9c"]]);export{K as default};
//# sourceMappingURL=pages-douyin-douyin.904ea633.js.map
