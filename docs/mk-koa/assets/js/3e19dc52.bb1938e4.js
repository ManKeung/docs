"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[861],{224:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(2374);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(a),d=l,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||r;return a?n.createElement(k,o(o({ref:t},u),{},{components:a})):n.createElement(k,o({ref:t},u))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8266:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>h,default:()=>O,frontMatter:()=>f,metadata:()=>v,toc:()=>N});var n=a(7640),l=a(2374),r=a(224),o=a(8290),i=a(8231),s=a(430),p=a(8656),u=a(2013);const c="tabList_c6mw",m="tabItem_tyVs";function d(e){var t;const{lazy:a,block:r,defaultValue:i,values:d,groupId:k,className:g}=e,b=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??b.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),h=(0,s.l)(f,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===i?i:i??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==v&&!f.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,p.U)(),[w,O]=(0,l.useState)(v),E=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=k){const e=y[k];null!=e&&e!==w&&f.some((t=>t.value===e))&&O(e)}const j=e=>{const t=e.currentTarget,a=E.indexOf(t),n=f[a].value;n!==w&&(T(t),O(n),null!=k&&N(k,String(n)))},C=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;a=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;a=E[t]??E[E.length-1];break}}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,o.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},g)},f.map((e=>{let{value:t,label:a,attributes:r}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>E.push(e),onKeyDown:C,onFocus:j,onClick:j},r,{className:(0,o.Z)("tabs__item",m,null==r?void 0:r.className,{"tabs__item--active":w===t})}),a??t)}))),a?(0,l.cloneElement)(b.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function k(e){const t=(0,i.Z)();return l.createElement(d,(0,n.Z)({key:String(t)},e))}const g="tabItem_FDW8";function b(e){let{children:t,hidden:a,className:n}=e;return l.createElement("div",{role:"tabpanel",className:(0,o.Z)(g,n),hidden:a},t)}const f={},h="\u5feb\u901f\u5f00\u59cb",v={unversionedId:"guide/started",id:"guide/started",title:"\u5feb\u901f\u5f00\u59cb",description:"\u672c\u9879\u76ee\u9002\u5408\u4e86\u89e3\u4e00\u5b9a\u57fa\u7840\u7684\u524d\u7aef\u5de5\u7a0b\u5e08\uff0c\u5982\u60a8\u5bf9\u524d\u7aef\u77e5\u8bc6\u8fd8\u4e0d\u4e86\u89e3\uff0c\u4f60\u53ef\u4ee5\u9605\u8bfb\u6211\u7684\u5728\u7ebf\u6587\u6863\uff0c\u91cc\u9762\u6709\u5173\u4e8e\u57fa\u7840\u524d\u7aef\u7684\u4ecb\u7ecd\u3002",source:"@site/docs/guide/started.md",sourceDirName:"guide",slug:"/guide/started",permalink:"/docs/mk-koa/docs/guide/started",draft:!1,editUrl:"https://github.com/mankeung/mk-koa/edit/master/docs/guide/started.md",tags:[],version:"current",frontMatter:{},sidebar:"\u6307\u680f",previous:{title:"\u6ce8\u610f\u4e8b\u9879",permalink:"/docs/mk-koa/docs/guide/note"}},y={},N=[{value:"\u6280\u80fd\u51c6\u5907",id:"\u6280\u80fd\u51c6\u5907",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u76ee\u5f55\u7ed3\u6784",id:"\u76ee\u5f55\u7ed3\u6784",level:2},{value:"\u5e38\u7528\u547d\u4ee4\u4ecb\u7ecd",id:"\u5e38\u7528\u547d\u4ee4\u4ecb\u7ecd",level:2},{value:"\u542f\u52a8",id:"\u542f\u52a8",level:2}],w={toc:N};function O(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},w,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,r.kt)("p",null,"\u672c\u9879\u76ee\u9002\u5408\u4e86\u89e3\u4e00\u5b9a\u57fa\u7840\u7684\u524d\u7aef\u5de5\u7a0b\u5e08\uff0c\u5982\u60a8\u5bf9\u524d\u7aef\u77e5\u8bc6\u8fd8\u4e0d\u4e86\u89e3\uff0c\u4f60\u53ef\u4ee5\u9605\u8bfb\u6211\u7684",(0,r.kt)("a",{parentName:"p",href:"https://mankeung.github.io/docs/mk-data"},"\u5728\u7ebf\u6587\u6863"),"\uff0c\u91cc\u9762\u6709\u5173\u4e8e\u57fa\u7840\u524d\u7aef\u7684\u4ecb\u7ecd\u3002"),(0,r.kt)("h2",{id:"\u6280\u80fd\u51c6\u5907"},"\u6280\u80fd\u51c6\u5907"),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"\u9879\u76ee\u642d\u5efa\u662fnode\u7248\u672c\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"v18.8.0"),"\u6240\u4ee5\u4f60\u9700\u8981\u6ce8\u610f\uff0c\u80af\u80fd\u7531\u4e8e\u7248\u672c\u5bfc\u81f4\u62a5\u9519\u54e6\uff01")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-Node-333333?style=flat&logo=node.js",alt:"Node.js"})," ",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-Koa-333333?style=flat&logo=koa",alt:"Koa.js"})," ",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-TypeScript-333333?style=flat&logo=typescript",alt:"TypeScript"})," ",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-Npm-333333?style=flat&logo=npm",alt:"npm"})," ",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-rollup.js-333333?style=flat&logo=rollup.js",alt:"rollup"})," ",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-pm2-333333?style=flat&logo=pm2",alt:"pm2"})," ",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-ts_node-333333?style=flat&logo=ts-node",alt:"ts-node"})," ",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-Git-333333?style=flat&logo=git",alt:"git"})),(0,r.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/github/mankeung/mk-koa?file=/README.md"},"\ud83d\udce6 CodeSandbox")," | ",(0,r.kt)("a",{parentName:"p",href:"https://stackblitz.com/github/mankeung/mk-koa?file=README.md"},"\u26a1 StackBlitz")),(0,r.kt)(k,{mdxType:"Tabs"},(0,r.kt)(b,{value:"github",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/mankeung/mk-koa.git\n"))),(0,r.kt)(b,{value:"gitee",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://gitee.com/mankeung/mk-koa.git\n")))),(0,r.kt)("h2",{id:"\u76ee\u5f55\u7ed3\u6784"},"\u76ee\u5f55\u7ed3\u6784"),(0,r.kt)("p",null,"\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u6253\u5f00",(0,r.kt)("a",{parentName:"p",href:"https://github1s.com/mankeung/mk-react"},"github1s\u67e5\u770b")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u76ee\u5f55\u7ed3\u6784",src:a(5321).Z,width:"199",height:"539"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("del",{parentName:"p"},"\u8fd9\u91cc\u5c31\u4e0d\u518d\u505a\u8fc7\u591a\u76ee\u5f55\u7ed3\u6784\u4ecb\u7ecd\u4e86\uff0c\u5982\u9700\u8981\u540e\u9762\u5c31\u8865\u5145\u8bf4\u660e\u3002"))),(0,r.kt)("h2",{id:"\u5e38\u7528\u547d\u4ee4\u4ecb\u7ecd"},"\u5e38\u7528\u547d\u4ee4\u4ecb\u7ecd"),(0,r.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u6211\u4f7f\u7528\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm"),"\u5305\u7ba1\u7406\u5de5\u5177\uff0c\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"yarn"),"\u6216\u8005",(0,r.kt)("inlineCode",{parentName:"p"},"npm"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pnpm install"))),(0,r.kt)("p",null,"\u521d\u59cb\u5316\u9879\u76ee\u5b89\u88c5\u4f9d\u8d56"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pnpm dev"))),(0,r.kt)("p",null,"\u542f\u52a8\u9879\u76ee"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pnpm build"))),(0,r.kt)("p",null,"\u751f\u4ea7\u73af\u5883\u6253\u5305"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pnpm lint"))),(0,r.kt)("p",null,"\u8bed\u6cd5\u6821\u9a8c"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8fd9\u91cc\u53ea\u662f\u505a\u7b80\u5355\u4ecb\u7ecd\uff0c\u5177\u4f53\u8be6\u7ec6\u4ecb\u7ecd\u8bf7\u770b",(0,r.kt)("a",{parentName:"p",href:"/docs/mk-koa/docs/config/scripts"},"\u914d\u7f6e\u53c2\u8003scripts"))),(0,r.kt)("h2",{id:"\u542f\u52a8"},"\u542f\u52a8"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm dev\n")))}O.isMDXComponent=!0},5321:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/file-5596eaa67742fb5f8cec192b8adc86aa.png"}}]);