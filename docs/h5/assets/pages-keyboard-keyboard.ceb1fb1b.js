var e=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,n=(a,o,t)=>o in a?e(a,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[o]=t;import{_ as s}from"./m-common.9ffacffc.js";import{d as c,r as i,l as d,G as u,g as m,h as p,o as b,c as _,w as y,e as v,f as k,F as f,q as h,b as C,t as w,m as g,H as B,j as O,k as $,a as x,s as T,p as I}from"./index.2180f076.js";import{_ as j,a as S}from"./m-cell-group.32b83649.js";import{a as z}from"./m-icon.f652525a.js";import{_ as D}from"./plugin-vue_export-helper.21dcd24c.js";import{_ as A}from"./m-popup.d9f0644f.js";import"./m-navbar.01e56689.js";import"./m-line.1355d3ca.js";import"./m-overlay.8c9d5019.js";import"./m-transition.54eea085.js";var M=D(c({props:{random:{type:Boolean,default:!1},dotDisabled:{type:Boolean,default:!0},vibrate:{type:Boolean,default:!1},mode:{type:String,default:"number"}},emits:["change","backspace"],setup(e,{emit:a}){const o=e,t=i(null),r=d((()=>{let e=["1","2","3","4","5","6","7","8","9",".","X","0"];if("number"===o.mode){const a=["X"];o.dotDisabled&&a.push("."),e=e.filter((e=>-1===a.indexOf(e)))}else e=e.filter((e=>"."!==e));o.random&&(e=e.sort((()=>Math.random()>.5?-1:1))),e.push("clear");const a=[];return a[0]=e.slice(0,3),a[1]=e.slice(3,6),a[2]=e.slice(6,9),a[3]=e.slice(9),a})),l=(e="")=>{if(o.vibrate&&uni.$m.vibrate(),"clear"===e)return a("backspace"),clearInterval(t.value),void(t.value=setInterval((()=>{a("backspace")}),250));a("change",e)},n=(e="clear")=>{"clear"===e&&(clearInterval(t.value),t.value=null)};return u((()=>{n()})),(e,a)=>{const o=m(p("m-icon"),z),t=O,s=$;return b(),_(s,{class:"m-keyboard",onTouchmove:B(e.$m.noop,["stop","prevent"])},{default:y((()=>[(b(!0),v(f,null,k(g(r),((e,a)=>(b(),_(s,{key:a,class:"m-keyboard__button"},{default:y((()=>[(b(!0),v(f,null,k(e,((e,a)=>(b(),_(s,{class:h(["m-keyboard__button__inner-wrapper",{btn:"clear"===e}]),key:a},{default:y((()=>["clear"===e?(b(),_(s,{key:0,class:h(["m-keyboard__button__inner-wrapper__inner",{btn:"clear"===e}]),"hover-class":"m-hover-class","hover-stay-time":200,onTouchstart:a=>l(e),onTouchend:a=>n(e)},{default:y((()=>["clear"===e?(b(),_(o,{key:0,size:"28",name:"backspace",color:"#303133"})):(b(),_(t,{key:1,class:"m-keyboard__button__inner-wrapper__inner__text"},{default:y((()=>[C(w(e),1)])),_:2},1024))])),_:2},1032,["class","onTouchstart","onTouchend"])):(b(),_(s,{key:1,class:h(["m-keyboard__button__inner-wrapper__inner",{btn:"clear"===e}]),"hover-class":"m-hover-class","hover-stay-time":200,onClick:a=>l(e)},{default:y((()=>["clear"===e?(b(),_(o,{key:0,size:"28",name:"backspace",color:"#303133"})):(b(),_(t,{key:1,class:"m-keyboard__button__inner-wrapper__inner__text"},{default:y((()=>[C(w(e),1)])),_:2},1024))])),_:2},1032,["class","onClick"]))])),_:2},1032,["class"])))),128))])),_:2},1024)))),128))])),_:1},8,["onTouchmove"])}}}),[["__scopeId","data-v-365b0d30"]]);var P,L,X=D(c({props:{random:{type:Boolean,default:!1},vibrate:{type:Boolean,default:!1}},emits:["change","backspace"],setup(e,{emit:a}){const o=e,t=i(null),r=i(!0),l=i(!0),n=d((()=>{let e=["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"].map((e=>r.value?e.toLocaleLowerCase():e)),a=[":","'","/",">",".","?",",","<"],t=["1","2","3","4","5","6","7","8","9","0"],n=["`","!","@","#","$","%","^","&","*","(",")","-","+","=","{","}","[","]",";",'"',"~","?","|","_","-","\\"];o.random&&(e=e.sort((()=>Math.random()>.5?-1:1)),a=a.sort((()=>Math.random()>.5?-1:1)),t=t.sort((()=>Math.random()>.5?-1:1)),n=n.sort((()=>Math.random()>.5?-1:1)));const s=[];return l.value?(s[0]=e.slice(0,10),s[1]=e.slice(10,20),s[2]=["abc",...e.slice(20,26),...a.slice(0,2)],s[3]=["@123",...a.slice(2,8),"clear"]):(s[0]=t,s[1]=n.slice(0,10),s[2]=n.slice(10,20),s[3]=["abc",...n.slice(20,26),"clear"]),s})),s=d((()=>(e="")=>e?"abc"===e?r.value&&l.value?"ABC":"abc":e:"")),c=(e="")=>(o.vibrate&&uni.$m.vibrate(),l.value&&"abc"===e?r.value=!r.value:l.value||"abc"!==e?"@123"===e?l.value=!1:"clear"===e?(a("backspace"),clearInterval(t.value),void(t.value=setInterval((()=>{a("backspace")}),250))):void a("change",e):l.value=!0),x=(e="clear")=>{"clear"===e&&(clearInterval(t.value),t.value=null)};return u((()=>{x()})),(e,a)=>{const o=m(p("m-icon"),z),t=O,r=$;return b(),_(r,{class:"m-keyboard",onTouchmove:B(e.$m.noop,["stop","prevent"])},{default:y((()=>[(b(!0),v(f,null,k(g(n),((e,a)=>(b(),_(r,{key:a,class:"m-keyboard__button"},{default:y((()=>[(b(!0),v(f,null,k(e,((e,a)=>(b(),_(r,{class:h(["m-keyboard__button__inner-wrapper",{btn:-1!==["abc","@123","clear"].indexOf(e)}]),key:a},{default:y((()=>["clear"===e?(b(),_(r,{key:0,class:h(["m-keyboard__button__inner-wrapper__inner",{btn:-1!==["abc","@123","clear"].indexOf(e)}]),"hover-class":"m-hover-class","hover-stay-time":200,onTouchstart:a=>c(e),onTouchend:a=>x(e)},{default:y((()=>["clear"===e?(b(),_(o,{key:0,size:"28",name:"backspace",color:"#303133"})):(b(),_(t,{key:1,class:"m-keyboard__button__inner-wrapper__inner__text"},{default:y((()=>[C(w(g(s)(e)),1)])),_:2},1024))])),_:2},1032,["class","onTouchstart","onTouchend"])):(b(),_(r,{key:1,class:h(["m-keyboard__button__inner-wrapper__inner",{btn:-1!==["abc","@123","clear"].indexOf(e)}]),"hover-class":"m-hover-class","hover-stay-time":200,onClick:a=>c(e)},{default:y((()=>["clear"===e?(b(),_(o,{key:0,size:"28",name:"backspace",color:"#303133"})):(b(),_(t,{key:1,class:"m-keyboard__button__inner-wrapper__inner__text"},{default:y((()=>[C(w(g(s)(e)),1)])),_:2},1024))])),_:2},1032,["class","onClick"]))])),_:2},1032,["class"])))),128))])),_:2},1024)))),128))])),_:1},8,["onTouchmove"])}}}),[["__scopeId","data-v-6bc9f70b"]]),E=(P=((e,a)=>{for(var o in a||(a={}))r.call(a,o)&&n(e,o,a[o]);if(t)for(var o of t(a))l.call(a,o)&&n(e,o,a[o]);return e})({},uni.$m.config.props),L={mode:{type:String,default:uni.$m.props.keyboard.mode},dotDisabled:{type:Boolean,default:uni.$m.props.keyboard.dotDisabled},tooltip:{type:Boolean,default:uni.$m.props.keyboard.tooltip},showTips:{type:Boolean,default:uni.$m.props.keyboard.showTips},tips:{type:String,default:uni.$m.props.keyboard.tips},showCancel:{type:Boolean,default:uni.$m.props.keyboard.showCancel},showConfirm:{type:Boolean,default:uni.$m.props.keyboard.showConfirm},random:{type:Boolean,default:uni.$m.props.keyboard.random},safeAreaInsetBottom:{type:Boolean,default:uni.$m.props.keyboard.safeAreaInsetBottom},closeOnClickOverlay:{type:Boolean,default:uni.$m.props.keyboard.closeOnClickOverlay},show:{type:Boolean,default:uni.$m.props.keyboard.show},overlay:{type:Boolean,default:uni.$m.props.keyboard.overlay},zIndex:{type:[String,Number],default:uni.$m.props.keyboard.zIndex},cancelText:{type:String,default:uni.$m.props.keyboard.cancelText},confirmText:{type:String,default:uni.$m.props.keyboard.confirmText},vibrate:{type:Boolean,default:uni.$m.props.keyboard.vibrate}},a(P,o(L)));var F=D(c({props:E,emits:["change","close","confirm","cancel","backspace"],setup(e,{emit:a}){const o=e,t=(e="")=>{a("change",e)},r=()=>{a("close")},l=()=>{a("confirm")},n=()=>{a("cancel")},s=()=>{a("backspace")};return(e,a)=>{const c=O,i=$,d=m(p("m-number-keyboard"),M),u=m(p("m-english-keyboard"),X),v=m(p("m-popup"),A);return b(),_(v,{mode:"bottom",overlay:o.overlay,closeOnClickOverlay:o.closeOnClickOverlay,popup:!1,show:o.show,safeAreaInsetBottom:o.safeAreaInsetBottom,onClose:r,zIndex:o.zIndex,customStyle:{backgroundColor:"rgb(214, 218, 220)"}},{default:y((()=>[x(i,{class:"m-keyboard"},{default:y((()=>[T(e.$slots,"default",{},void 0,!0),o.tooltip?(b(),_(i,{key:0,class:"m-keyboard__tooltip"},{default:y((()=>[x(i,{"hover-class":"m-hover-class","hover-stay-time":200},{default:y((()=>[o.showCancel?(b(),_(c,{key:0,class:"m-keyboard__tooltip__item m-keyboard__tooltip__cancel",onClick:n},{default:y((()=>[C(w(o.showCancel&&o.cancelText),1)])),_:1})):I("",!0)])),_:1}),o.showTips?(b(),_(i,{key:0,class:"m-keyboard__tooltip__item m-keyboard__tooltip__tips"},{default:y((()=>[C(w(o.tips?o.tips:"number"==o.mode?"数字键盘":"card"==e.mode?"身份证键盘":"英文键盘"),1)])),_:1})):I("",!0),x(i,{"hover-class":"m-hover-class","hover-stay-time":100},{default:y((()=>[o.showConfirm?(b(),_(c,{key:0,class:"m-keyboard__tooltip__item m-keyboard__tooltip__submit","hover-class":"m-hover-class",onClick:l},{default:y((()=>[C(w(o.showConfirm&&o.confirmText),1)])),_:1})):I("",!0)])),_:1})])),_:1})):I("",!0),"number"===o.mode||"card"===o.mode?(b(),_(d,{key:1,random:o.random,mode:o.mode,dotDisabled:o.dotDisabled,vibrate:o.vibrate,onChange:t,onBackspace:s},null,8,["random","mode","dotDisabled","vibrate"])):(b(),_(u,{key:2,random:o.random,mode:o.mode,vibrate:o.vibrate,onChange:t,onBackspace:s},null,8,["random","mode","vibrate"]))])),_:3})])),_:3},8,["overlay","closeOnClickOverlay","show","safeAreaInsetBottom","zIndex","customStyle"])}}}),[["__scopeId","data-v-78414694"]]);const G=c({setup(e){const a=i(!1),o=i(""),t=i(!1),r=i(!1),l=i(""),n=e=>{l.value="",a.value=!0,o.value={0:"",1:"number",2:"card",3:"number",4:""}[e],t.value=3===e,r.value=4===e},c=e=>{l.value+=e,console.log(l.value)},d=()=>{l.value.length&&(l.value=l.value.substr(0,l.value.length-1)),console.log(l.value)};return(e,l)=>{const i=m(p("m-common"),s),u=m(p("m-cell"),j),v=m(p("m-cell-group"),S),k=m(p("m-keyboard"),F),f=$;return b(),_(f,null,{default:y((()=>[x(i,{title:"键盘"}),x(v,{border:""},{default:y((()=>[x(u,{title:"基本使用","is-link":"",onClick:l[0]||(l[0]=e=>n(0))}),x(u,{title:"数字键盘","is-link":"",onClick:l[1]||(l[1]=e=>n(1))}),x(u,{title:"身份证键盘","is-link":"",onClick:l[2]||(l[2]=e=>n(2))}),x(u,{title:"隐藏键盘'.'符号","is-link":"",onClick:l[3]||(l[3]=e=>n(3))}),x(u,{title:"打乱键盘顺序","is-link":"",onClick:l[4]||(l[4]=e=>n(4))})])),_:1}),x(k,{show:a.value,mode:o.value,random:r.value,"dot-disabled":t.value,onClose:l[5]||(l[5]=e=>a.value=!1),onCancel:l[6]||(l[6]=e=>a.value=!1),onConfirm:l[7]||(l[7]=e=>a.value=!1),onChange:c,onBackspace:d},null,8,["show","mode","random","dot-disabled"])])),_:1})}}});export{G as default};
//# sourceMappingURL=pages-keyboard-keyboard.ceb1fb1b.js.map
