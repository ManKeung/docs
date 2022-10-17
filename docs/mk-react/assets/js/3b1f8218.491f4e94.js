"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[403],{224:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(2374);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||a;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},525:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(7640),o=(r(2374),r(224));const a={},i="\u603b\u4e8b\u52a1",c={unversionedId:"api/tools/mitt",id:"api/tools/mitt",title:"\u603b\u4e8b\u52a1",description:"\u7531\u4e8eVue3.x\u4e2d\u5220\u9664\u4e86on\u548coff\uff0c\u56e0\u6b64\u4e0d\u80fd\u501f\u52a9\u4e8e\u4e00\u4e2a\u5355\u72ec\u7684Vue\u5b9e\u4f8b\u6765\u5b9e\u73b0\u5168\u5c40\u4e8b\u4ef6\u7684\u53d1\u5e03\u548c\u8ba2\u9605\u4e0e\u53d6\u6d88\u8ba2\u9605\uff08\u4e5f\u5c31\u662f\u8de8\u7ec4\u4ef6\u901a\u8baf\uff09\u3002\u8fd9\u91cc\u4f7f\u7528\u7b2c\u4e09\u65b9mitt\u5e93\u3002",source:"@site/docs/api/tools/mitt.md",sourceDirName:"api/tools",slug:"/api/tools/mitt",permalink:"/docs/mk-react/docs/api/tools/mitt",draft:!1,editUrl:"https://github.com/mankeung/mk-react/edit/master/docs/api/tools/mitt.md",tags:[],version:"current",frontMatter:{},sidebar:"API",previous:{title:"\u6309\u952e\u76d1\u542c",permalink:"/docs/mk-react/docs/api/tools/hotkeys"},next:{title:"\u9632\u653b\u51fb",permalink:"/docs/mk-react/docs/api/tools/xss"}},l={},p=[],s={toc:p};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u603b\u4e8b\u52a1"},"\u603b\u4e8b\u52a1"),(0,o.kt)("p",null,"\u7531\u4e8eVue3.x\u4e2d\u5220\u9664\u4e86on\u548coff\uff0c\u56e0\u6b64\u4e0d\u80fd\u501f\u52a9\u4e8e\u4e00\u4e2a\u5355\u72ec\u7684Vue\u5b9e\u4f8b\u6765\u5b9e\u73b0\u5168\u5c40\u4e8b\u4ef6\u7684\u53d1\u5e03\u548c\u8ba2\u9605\u4e0e\u53d6\u6d88\u8ba2\u9605\uff08\u4e5f\u5c31\u662f\u8de8\u7ec4\u4ef6\u901a\u8baf\uff09\u3002\u8fd9\u91cc\u4f7f\u7528\u7b2c\u4e09\u65b9",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/mitt"},"mitt"),"\u5e93\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f8b\u5b50\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const emitter = $mk.utils.mitt\n\nemitter.on('foo', e => console.log('foo', e))\n\nemitter.on('*', (type, e) => console.log(type, e))\n\nemitter.emit('foo', { a: 'b' })\n\nemitter.all.clear()\n\nfunction onFoo() {}\nemitter.on('foo', onFoo)\nemitter.off('foo', onFoo)\n")))}m.isMDXComponent=!0}}]);