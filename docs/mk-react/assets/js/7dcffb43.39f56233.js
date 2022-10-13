"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[670],{224:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(2374);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1859:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(7640),o=(n(2374),n(224));const l={},a="\u6df1\u62f7\u8d1d",i={unversionedId:"api/tools/deepClone",id:"api/tools/deepClone",title:"\u6df1\u62f7\u8d1d",description:"deepClone(target: T)",source:"@site/docs/api/tools/deepClone.md",sourceDirName:"api/tools",slug:"/api/tools/deepClone",permalink:"/docs/mk-react/docs/api/tools/deepClone",draft:!1,editUrl:"https://github.com/mankeung/mk-react/edit/master/docs/api/tools/deepClone.md",tags:[],version:"current",frontMatter:{},sidebar:"API",previous:{title:"\u8282\u6d41\u9632\u6296",permalink:"/docs/mk-react/docs/api/tools/debounce"},next:{title:"\u6570\u636e\u52a0\u5bc6",permalink:"/docs/mk-react/docs/api/tools/encryption"}},s={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6df1\u62f7\u8d1d"},"\u6df1\u62f7\u8d1d"),(0,o.kt)("p",null,"deepClone(target: T)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"target")," \u62f7\u8d1d\u5185\u5bb9")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"\u70b9\u51fb\u67e5\u770b\u8be6\u60c5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="@/src/utils/deepClone.ts"',title:'"@/src/utils/deepClone.ts"'},"function deepClone<T>(target: T): T {\n    // \u5b9a\u4e49\u4e00\u4e2a\u53d8\u91cf\n    let result: any\n    // \u5982\u679c\u5f53\u524d\u9700\u8981\u6df1\u62f7\u8d1d\u7684\u662f\u4e00\u4e2a\u5bf9\u8c61\u7684\u8bdd\n    if (typeof target === 'object') {\n        // \u5982\u679c\u662f\u4e00\u4e2a\u6570\u7ec4\u7684\u8bdd\n        if (Array.isArray(target)) {\n            result = [] // \u5c06result\u8d4b\u503c\u4e3a\u4e00\u4e2a\u6570\u7ec4\uff0c\u5e76\u4e14\u6267\u884c\u904d\u5386\n            for (const i in target) {\n                // \u9012\u5f52\u514b\u9686\u6570\u7ec4\u4e2d\u7684\u6bcf\u4e00\u9879\n                result.push(deepClone(target[i]))\n            }\n            // \u5224\u65ad\u5982\u679c\u5f53\u524d\u7684\u503c\u662fnull\u7684\u8bdd\uff1b\u76f4\u63a5\u8d4b\u503c\u4e3anull\n        } else if (target === null) {\n            result = null\n            // \u5224\u65ad\u5982\u679c\u5f53\u524d\u7684\u503c\u662f\u4e00\u4e2aRegExp\u5bf9\u8c61\u7684\u8bdd\uff0c\u76f4\u63a5\u8d4b\u503c\n        } else if (target.constructor === RegExp) {\n            result = target\n        } else {\n            // \u5426\u5219\u662f\u666e\u901a\u5bf9\u8c61\uff0c\u76f4\u63a5for in\u5faa\u73af\uff0c\u9012\u5f52\u8d4b\u503c\u5bf9\u8c61\u7684\u6240\u6709\u503c\n            result = {}\n            for (const i in target) {\n                result[i] = deepClone(target[i])\n            }\n        }\n        // \u5982\u679c\u4e0d\u662f\u5bf9\u8c61\u7684\u8bdd\uff0c\u5c31\u662f\u57fa\u672c\u6570\u636e\u7c7b\u578b\uff0c\u90a3\u4e48\u76f4\u63a5\u8d4b\u503c\n    } else {\n        result = target\n    }\n    // \u8fd4\u56de\u6700\u7ec8\u7ed3\u679c\n    return result\n}\n"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f8b\u5b50\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const obj = $mk.utils.deepClone({\n    name: 'mankeung'\n})\n\nconsole.log(obj)\n")))}u.isMDXComponent=!0}}]);