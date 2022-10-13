"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[403],{224:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(2374);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),f=o,y=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},525:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7640),o=(n(2374),n(224));const a={},i="\u603b\u4e8b\u52a1",l={unversionedId:"api/tools/mitt",id:"api/tools/mitt",title:"\u603b\u4e8b\u52a1",description:"\u7531\u4e8eVue3.x\u4e2d\u5220\u9664\u4e86on\u548coff\uff0c\u56e0\u6b64\u4e0d\u80fd\u501f\u52a9\u4e8e\u4e00\u4e2a\u5355\u72ec\u7684Vue\u5b9e\u4f8b\u6765\u5b9e\u73b0\u5168\u5c40\u4e8b\u4ef6\u7684\u53d1\u5e03\u548c\u8ba2\u9605\u4e0e\u53d6\u6d88\u8ba2\u9605\uff08\u4e5f\u5c31\u662f\u8de8\u7ec4\u4ef6\u901a\u8baf\uff09\u3002\u8fd9\u91cc\u4f7f\u7528\u7b2c\u4e09\u65b9mitt\u5e93\u3002",source:"@site/docs/api/tools/mitt.md",sourceDirName:"api/tools",slug:"/api/tools/mitt",permalink:"/docs/api/tools/mitt",draft:!1,editUrl:"https://github.com/mankeung/mk-react/edit/master/docs/api/tools/mitt.md",tags:[],version:"current",frontMatter:{},sidebar:"API",previous:{title:"\u6309\u952e\u76d1\u542c",permalink:"/docs/api/tools/hotkeys"},next:{title:"\u9632\u653b\u51fb",permalink:"/docs/api/tools/xss"}},c={},p=[],s={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u603b\u4e8b\u52a1"},"\u603b\u4e8b\u52a1"),(0,o.kt)("p",null,"\u7531\u4e8eVue3.x\u4e2d\u5220\u9664\u4e86on\u548coff\uff0c\u56e0\u6b64\u4e0d\u80fd\u501f\u52a9\u4e8e\u4e00\u4e2a\u5355\u72ec\u7684Vue\u5b9e\u4f8b\u6765\u5b9e\u73b0\u5168\u5c40\u4e8b\u4ef6\u7684\u53d1\u5e03\u548c\u8ba2\u9605\u4e0e\u53d6\u6d88\u8ba2\u9605\uff08\u4e5f\u5c31\u662f\u8de8\u7ec4\u4ef6\u901a\u8baf\uff09\u3002\u8fd9\u91cc\u4f7f\u7528\u7b2c\u4e09\u65b9",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/mitt"},"mitt"),"\u5e93\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f8b\u5b50\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const emitter = $mk.utils.mitt\n\nemitter.on('foo', e => console.log('foo', e))\n\nemitter.on('*', (type, e) => console.log(type, e))\n\nemitter.emit('foo', { a: 'b' })\n\nemitter.all.clear()\n\nfunction onFoo() {}\nemitter.on('foo', onFoo)\nemitter.off('foo', onFoo)\n")))}u.isMDXComponent=!0}}]);