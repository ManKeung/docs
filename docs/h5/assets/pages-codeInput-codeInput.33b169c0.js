var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l;import{_ as n}from"./m-common.a209cd3a.js";import{d as r,r as s,l as i,G as p,o as m,c,w as b,e as f,f as g,m as y,u as h,b as _,t as v,q as x,F as I,a as S,B as V,k as j,j as B,J as z,g as U,h as k}from"./index.1977e9bd.js";import{g as O,a as R}from"./m-status-bar.25face9c.js";import{_ as w}from"./plugin-vue_export-helper.21dcd24c.js";import"./m-navbar.81e9e845.js";var N,$,C=(N=((e,t)=>{for(var a in t||(t={}))o.call(t,a)&&u(e,a,t[a]);if(l)for(var a of l(t))d.call(t,a)&&u(e,a,t[a]);return e})({},O()),$={adjustPosition:{type:Boolean,default:R("codeInput","adjustPosition")},maxlength:{type:[String,Number],default:R("codeInput","maxlength")},dot:{type:Boolean,default:R("codeInput","dot")},mode:{type:String,default:R("codeInput","mode")},hairline:{type:Boolean,default:R("codeInput","hairline")},space:{type:[String,Number],default:R("codeInput","space")},value:{type:[String,Number],default:R("codeInput","value")},focus:{type:Boolean,default:R("codeInput","focus")},bold:{type:Boolean,default:R("codeInput","bold")},color:{type:String,default:R("codeInput","color")},fontSize:{type:[String,Number],default:R("codeInput","fontSize")},size:{type:[String,Number],default:R("codeInput","size")},disabledKeyboard:{type:Boolean,default:R("codeInput","disabledKeyboard")},borderColor:{type:String,default:R("codeInput","borderColor")},disabledDot:{type:Boolean,default:R("codeInput","disabledDot")},modelValue:{type:String,default:R("codeInput","value")}},t(N,a($)));var P=w(r({__name:"m-code-input",props:C,emits:["change","update:modelValue","finish"],setup(e,{emit:t}){const a=e,l=s(""),o=s(a.focus),d=i((()=>new Array(Number(a.maxlength))));p((()=>a.modelValue),(e=>{l.value=String(e).substring(0,a.maxlength)}),{immediate:!0});const u=i((()=>e=>{const t={width:uni.$m.addUnit(a.size),height:uni.$m.addUnit(a.size)};return"box"===a.mode&&(t.border=`${a.hairline?.5:1}px solid ${a.borderColor}`),0===Number(a.space)&&(0===e&&(t.borderTopLeftRadius="3px",t.borderBottomLeftRadius="3px"),e===d.value.length-1&&(t.borderTopRightRadius="3px",t.borderBottomRightRadius="3px"),e!==d.value.length-1&&(t.borderRight="none")),e!==d.value.length-1?t.marginRight=uni.$m.addUnit(a.space):t.marginRight=0,t})),n=i((()=>String(l.value).split(""))),r=i((()=>{const e={};return e.height=a.hairline?"2px":"4px",e.width=uni.$m.addUnit(a.size),e.backgroundColor=a.borderColor,e})),U=i((()=>({fontSize:uni.$m.addUnit(a.fontSize),fontWeight:a.bold?"bold":"normal",color:a.color}))),k=i((()=>({height:uni.$m.addUnit(a.size)}))),O=e=>{const o=e.detail.value;l.value=o,a.disabledDot&&V((()=>{l.value=o.replace(".","")})),t("change",o),t("update:modelValue",o),String(o).length>=Number(a.maxlength)&&t("finish",o)};return(e,t)=>{const l=j,s=B,i=z;return m(),c(l,{class:"m-code-input"},{default:b((()=>[(m(!0),f(I,null,g(h(d),((t,d)=>(m(),c(l,{class:"m-code-input__item",style:y([h(u)(d)]),key:d},{default:b((()=>[a.dot&&h(n).length>d?(m(),c(l,{key:0,class:"m-code-input__item__dot",style:y({backgroundColor:a.color})},null,8,["style"])):(m(),c(s,{key:1,style:y(h(U))},{default:b((()=>[_(v(h(n)[d]),1)])),_:2},1032,["style"])),"line"===a.mode?(m(),c(l,{key:2,class:"m-code-input__item__line",style:y([h(r)])},null,8,["style"])):x("",!0),o.value&&h(n).length===d?(m(),c(l,{key:3,style:y({backgroundColor:e.color}),class:"m-code-input__item__cursor"},null,8,["style"])):x("",!0)])),_:2},1032,["style"])))),128)),S(i,{class:"m-code-input__input",type:"number",focus:a.focus,maxlength:a.maxlength,disabled:a.disabledKeyboard,style:y(h(k)),onInput:O,onFocus:t[0]||(t[0]=e=>o.value=!0),onBlur:t[1]||(t[1]=e=>o.value=!1)},null,8,["focus","maxlength","disabled","style"])])),_:1})}}}),[["__scopeId","data-v-4e81ae36"]]);var D=w(r({__name:"codeInput",setup(e){const t=s(""),a=s(""),l=s(""),o=s("");return(e,d)=>{const u=U(k("m-common"),n),r=j,s=U(k("m-code-input"),P);return m(),c(r,{class:"page"},{default:b((()=>[S(u,{title:"验证码输入"}),S(r,{class:"txt"},{default:b((()=>[_(" 基本使用 ")])),_:1}),S(s,{modelValue:t.value,"onUpdate:modelValue":d[0]||(d[0]=e=>t.value=e)},null,8,["modelValue"]),S(r,{class:"txt"},{default:b((()=>[_(" 横向模式 ")])),_:1}),S(s,{modelValue:a.value,"onUpdate:modelValue":d[1]||(d[1]=e=>a.value=e),mode:"line"},null,8,["modelValue"]),S(r,{class:"txt"},{default:b((()=>[_(" 设置长度 ")])),_:1}),S(s,{modelValue:l.value,"onUpdate:modelValue":d[2]||(d[2]=e=>l.value=e),maxlength:"4"},null,8,["modelValue"]),S(r,{class:"txt"},{default:b((()=>[_(' 用"●"替代输入内容 ')])),_:1}),S(s,{modelValue:o.value,"onUpdate:modelValue":d[3]||(d[3]=e=>o.value=e),maxlength:"4",dot:""},null,8,["modelValue"])])),_:1})}}}),[["__scopeId","data-v-a899dd34"]]);export{D as default};
//# sourceMappingURL=pages-codeInput-codeInput.33b169c0.js.map
