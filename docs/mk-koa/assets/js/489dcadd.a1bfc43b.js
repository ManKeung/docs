"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[999],{224:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(2374);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=c(t),d=l,g=m["".concat(o,".").concat(d)]||m[d]||u[d]||i;return t?r.createElement(g,s(s({ref:n},p),{},{components:t})):r.createElement(g,s({ref:n},p))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,s=new Array(i);s[0]=m;var a={};for(var o in n)hasOwnProperty.call(n,o)&&(a[o]=n[o]);a.originalType=e,a.mdxType="string"==typeof e?e:l,s[1]=a;for(var c=2;c<i;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6095:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=t(7640),l=(t(2374),t(224));const i={},s="\u4ee3\u7801\u89c4\u8303",a={unversionedId:"config/lint",id:"config/lint",title:"\u4ee3\u7801\u89c4\u8303",description:"\u8fd9\u91cc\u4e0d\u505a\u8be6\u7ec6\u914d\u7f6e\u8bf4\u660e\uff0c\u4f60\u53ef\u4ee5\u67e5\u770b\u4e4b\u524d\u6587\u7ae0\u524d\u7aef\u4ee3\u7801\u5de5\u4f5c\u6d41\u3001**\u4ece 0 \u5230 1 \u642d\u5efa\u4e00\u4e2a\u4f01\u4e1a\u7ea7\u524d\u7aef\u5f00\u53d1\u89c4\u8303**\u4e86\u89e3\u3002",source:"@site/docs/config/lint.md",sourceDirName:"config",slug:"/config/lint",permalink:"/docs/mk-koa/docs/config/lint",draft:!1,editUrl:"https://github.com/mankeung/mk-koa/edit/master/docs/config/lint.md",tags:[],version:"current",frontMatter:{},sidebar:"\u914d\u7f6e\u53c2\u8003",previous:{title:"\u4ecb\u7ecd",permalink:"/docs/mk-koa/docs/config"},next:{title:"scripts",permalink:"/docs/mk-koa/docs/config/scripts"}},o={},c=[{value:"EditorConfig",id:"editorconfig",level:2},{value:".editorconfig",id:"editorconfig-1",level:3},{value:".vscode/settings.json",id:"vscodesettingsjson",level:3},{value:"eslint",id:"eslint",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:".eslintrc.js",id:"eslintrcjs",level:3},{value:".eslintignore",id:"eslintignore",level:3},{value:"npm\u547d\u4ee4\u914d\u7f6e",id:"npm\u547d\u4ee4\u914d\u7f6e",level:3},{value:"prettier",id:"prettier",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5-1",level:3},{value:".prettierrc.js",id:"prettierrcjs",level:3},{value:"npm\u547d\u4ee4\u914d\u7f6e",id:"npm\u547d\u4ee4\u914d\u7f6e-1",level:3},{value:"husky",id:"husky",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5-2",level:3},{value:"commitlint.config.js",id:"commitlintconfigjs",level:3},{value:"scripts/prepare.js",id:"scriptspreparejs",level:3},{value:"npm\u547d\u4ee4\u914d\u7f6e",id:"npm\u547d\u4ee4\u914d\u7f6e-2",level:3}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u4ee3\u7801\u89c4\u8303"},"\u4ee3\u7801\u89c4\u8303"),(0,l.kt)("admonition",{title:"\u6ce8\u610f",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u8fd9\u91cc\u4e0d\u505a\u8be6\u7ec6\u914d\u7f6e\u8bf4\u660e\uff0c\u4f60\u53ef\u4ee5\u67e5\u770b\u4e4b\u524d\u6587\u7ae0",(0,l.kt)("a",{parentName:"p",href:"https://mankeung.github.io/docs/mk-data/tools_article/23.html"},(0,l.kt)("strong",{parentName:"a"},"\u524d\u7aef\u4ee3\u7801\u5de5\u4f5c\u6d41")),"\u3001",(0,l.kt)("a",{parentName:"p",href:"https://mankeung.github.io/docs/mk-data/tools_article/23.html"},(0,l.kt)("strong",{parentName:"a"},"\u4ece 0 \u5230 1 \u642d\u5efa\u4e00\u4e2a\u4f01\u4e1a\u7ea7\u524d\u7aef\u5f00\u53d1\u89c4\u8303")),"\u4e86\u89e3\u3002")),(0,l.kt)("h2",{id:"editorconfig"},"EditorConfig"),(0,l.kt)("h3",{id:"editorconfig-1"},".editorconfig"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u70b9\u51fb\u67e5\u770b\u8be6\u60c5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"root = true\n\n[*]\ncharset = utf-8\nindent_style = space\nindent_size = 4\nend_of_line = lf\ninsert_final_newline = true\ntrim_trailing_whitespace = true\n\n[*.md]\ntrim_trailing_whitespace = false\n"))),(0,l.kt)("h3",{id:"vscodesettingsjson"},".vscode/settings.json"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u70b9\u51fb\u67e5\u770b\u8be6\u60c5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    // highlight-next-line\n    "editor.tabSize": 4,\n    "cSpell.words": [\n        "cmfcmf"\n    ]\n}\n'))),(0,l.kt)("h2",{id:"eslint"},"eslint"),(0,l.kt)("h3",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add eslint eslint-plugin-import eslint-plugin-promise -D\n")),(0,l.kt)("h3",{id:"eslintrcjs"},".eslintrc.js"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u70b9\u51fb\u67e5\u770b\u8be6\u60c5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n    root: true, // \u4f5c\u7528\u7684\u76ee\u5f55\u662f\u6839\u76ee\u5f55\n    extends: ['eslint:recommended', 'plugin:@typescript-eslint/eslint-recommended', 'plugin:@typescript-eslint/recommended'], // \u7ee7\u627f\u6807\u51c6\u89c4\u5219\n    // extends: 'tslint:recommended', // \u7ee7\u627f\u6807\u51c6\u89c4\u5219\n    plugins: [\n        '@typescript-eslint', // \u4f7f\u7528eslint-plugin-html\n        'import',\n        'promise'\n    ],\n    parser: '@typescript-eslint/parser',\n    parserOptions: {\n        ecmaVersion: 'latest',\n        sourceType: 'module' // \u6309\u7167\u6a21\u5757\u7684\u65b9\u5f0f\u89e3\u6790\n    },\n    env: {\n        node: true, //\n        es6: true\n    },\n    rules: {\n        // \u91cd\u65b0\u8986\u76d6 extends: 'standard'\u7684\u89c4\u5219\n        // \u81ea\u5b9a\u4e49\u7684\u89c4\u5219\n        // 'linebreak-style': [0, 'error', 'windows'],\n        indent: ['error', 4], // error\u7c7b\u578b\uff0c\u7f29\u8fdb4\u4e2a\u7a7a\u683c\n        // 'space-before-function-paren': 0, // \u5728\u51fd\u6570\u5de6\u62ec\u53f7\u7684\u524d\u9762\u662f\u5426\u6709\u7a7a\u683c\n        'eol-last': 0, // \u4e0d\u68c0\u6d4b\u65b0\u6587\u4ef6\u672b\u5c3e\u662f\u5426\u6709\u7a7a\u884c\n        quotes: [1, 'single'], // \u5b57\u7b26\u4e32\u6ca1\u6709\u4f7f\u7528\u5355\u5f15\u53f7\n        // 'no-console': ['error', {\n        //     allow: ['log', 'warn']\n        // }], // \u5141\u8bb8\u4f7f\u7528console.log()\n        // 'arrow-parens': 0,\n        'no-new': 0, // \u5141\u8bb8\u4f7f\u7528 new \u5173\u952e\u5b57\n        '@typescript-eslint/no-explicit-any': 0,\n        'no-eval': 0,\n    },\n    globals: {\n        // \u5141\u8bb8\u5168\u5c40\u53d8\u91cf,\u5c06$\u8bbe\u7f6e\u4e3atrue\uff0c\u8868\u793a\u5141\u8bb8\u4f7f\u7528\u5168\u5c40\u53d8\u91cf$\n        // 'jQuery': true,\n        // $: true\n    }\n}\n"))),(0,l.kt)("h3",{id:"eslintignore"},".eslintignore"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u70b9\u51fb\u67e5\u770b\u8be6\u60c5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"# \u6839\u636e\u81ea\u5df1\u7684\u5b9e\u9645\u9700\u6c42\u8fdb\u884c\u6dfb\u52a0\n\n# npm\n\nnode_modules\n\n# folder\n\ndist\npublic\nscripts\nwww\n\n# file\n\n# vscode\n\n.vscode\n"))),(0,l.kt)("h3",{id:"npm\u547d\u4ee4\u914d\u7f6e"},"npm\u547d\u4ee4\u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"lint:eslint": "eslint ./src/\\*_/_.ts --fix"\n')),(0,l.kt)("h2",{id:"prettier"},"prettier"),(0,l.kt)("h3",{id:"\u5b89\u88c5-1"},"\u5b89\u88c5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add prettier --dev\n")),(0,l.kt)("h3",{id:"prettierrcjs"},".prettierrc.js"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u70b9\u51fb\u67e5\u770b\u8be6\u60c5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n    printWidth: 180, //\u4e00\u884c\u7684\u5b57\u7b26\u6570\uff0c\u5982\u679c\u8d85\u8fc7\u4f1a\u8fdb\u884c\u6362\u884c\uff0c\u9ed8\u8ba4\u4e3a80\n    tabWidth: 4, //\u4e00\u4e2atab\u4ee3\u8868\u51e0\u4e2a\u7a7a\u683c\u6570\uff0c\u9ed8\u8ba4\u4e3a80\n    useTabs: true, //\u662f\u5426\u4f7f\u7528tab\u8fdb\u884c\u7f29\u8fdb\uff0c\u9ed8\u8ba4\u4e3afalse\uff0c\u8868\u793a\u7528\u7a7a\u683c\u8fdb\u884c\u7f29\u51cf\n    singleQuote: true, //\u5b57\u7b26\u4e32\u662f\u5426\u4f7f\u7528\u5355\u5f15\u53f7\uff0c\u9ed8\u8ba4\u4e3afalse\uff0c\u4f7f\u7528\u53cc\u5f15\u53f7\n    semi: false, //\u884c\u4f4d\u662f\u5426\u4f7f\u7528\u5206\u53f7\uff0c\u9ed8\u8ba4\u4e3atrue\n    trailingComma: 'none', //\u662f\u5426\u4f7f\u7528\u5c3e\u9017\u53f7\uff0c\u6709\u4e09\u4e2a\u53ef\u9009\u503c\"<none|es5|all>\"\n    bracketSpacing: true, //\u5bf9\u8c61\u5927\u62ec\u53f7\u76f4\u63a5\u662f\u5426\u6709\u7a7a\u683c\uff0c\u9ed8\u8ba4\u4e3atrue\uff0c\u6548\u679c\uff1a{ foo: bar }\n    endOfLine: 'auto'\n}\n"))),(0,l.kt)("h3",{id:"npm\u547d\u4ee4\u914d\u7f6e-1"},"npm\u547d\u4ee4\u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"lint:perttier": "prettier --write --loglevel warn src/\\*_/_.ts"\n')),(0,l.kt)("h2",{id:"husky"},"husky"),(0,l.kt)("h3",{id:"\u5b89\u88c5-2"},"\u5b89\u88c5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add husky @commitlint/cli @commitlint/config-conventional\n")),(0,l.kt)("h3",{id:"commitlintconfigjs"},"commitlint.config.js"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u70b9\u51fb\u67e5\u770b\u8be6\u60c5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n    extends: ['@commitlint/config-conventional'],\n    rules: {\n        'type-enum': [\n            2,\n            'always',\n            [\n                'feat', // \u65b0\u7279\u6027\n                'improvement', // \u52a0\u5f3a\u73b0\u6709\u7279\u6027\n                'fix', // \u4fee\u8865bug\n                'refactor', // \u91cd\u6784\n                'docs', // \u6587\u6863\n                'test', // \u5355\u5143\u6d4b\u8bd5\n                'config', // \u914d\u7f6e\u6587\u4ef6\n                'style', // \u683c\u5f0f\u9700\u6539\n                'perf', // \u6027\u80fd\u63d0\u5347\n                'ci', // ci \u4e3b\u8981\u76ee\u7684\u662f\u4fee\u6539\u9879\u76ee\u7ee7\u7eed\u96c6\u6210\u6d41\u7a0b(\u4f8b\u5982 Travis\uff0cJenkins\uff0cGitLab CI\uff0cCircle\u7b49)\u7684\u63d0\u4ea4\n                'revert', // \u7248\u672c\u56de\u9000\n                'chore', // \u5176\u4ed6\u4fee\u6539\n                'scope' // commit \u5f71\u54cd\u7684\u8303\u56f4\uff08\u9009\u586b\uff09, \u6bd4\u5982: route, component, utils, build\n            ]\n        ],\n        'type-empty': [2, 'never'], // type\u4e0d\u80fd\u4e3a\u7a7a\n        'type-case': [0, 'always', 'lower-case'], // type\u4e0d\u9650\u5236\u5927\u5c0f\u5199\n        'subject-empty': [2, 'never'], // subject\uff08\u7b80\u77ed\u5f97\u63cf\u8ff0\uff09\u4e0d\u80fd\u4e3a\u7a7a\n        'subject-max-length': [1, 'always', 50], // subject\u6700\u5927\u957f\u5ea6\uff0c\u8d85\u51fa\u53ea\u4f1a\u8b66\u544a\uff0c\u4e0d\u963b\u6b62\u63d0\u4ea4\n        'body-leading-blank': [1, 'always'],\n        'footer-leading-blank': [1, 'always'],\n        'header-max-length': [2, 'always', 72]\n    }\n}\n"))),(0,l.kt)("h3",{id:"scriptspreparejs"},"scripts/prepare.js"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u70b9\u51fb\u67e5\u770b\u8be6\u60c5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const { funExec } = require('./utils')\nconst chalk = require('chalk')\n\nasync function init() {\n    const child = await funExec('git diff --cached --name-only')\n\n    if (!child) {\n        console.log(chalk.red('\u6ca1\u6709\u5f85\u63d0\u4ea4\u5185\u5bb9'))\n        process.exit(1)\n    }\n\n    const disSubmitFiles = await inExcludeFile(child.trim().split('\\n'))\n\n    if (disSubmitFiles.length) {\n        disSubmitFiles.forEach(file => {\n            console.log(`${chalk.red('\u7981\u6b62\u63d0\u4ea4\u6587\u4ef6\uff1a')}${chalk.green(file)}`)\n            console.log(`${chalk.red('\u4f60\u53ef\u4ee5\u4f7f\u7528\uff1a')}${chalk.green(`git reset -- ${file}`)} ${chalk.red('\u64a4\u9500\u6682\u5b58\u533a')}`)\n        })\n        process.exit(1)\n    } else {\n        console.log(chalk.green('\u7528\u6237\u6743\u9650\u6821\u9a8c\u5b8c\u6210'))\n    }\n}\n\nfunction inExcludeFile(files) {\n    return new Promise(async resolve => {\n        // \u83b7\u53d6\u7528\u6237\n        let userEmail = await funExec('git config --get user.email')\n        userEmail = userEmail.replaceAll('\\n', '')\n        console.log(chalk.green(`\u6821\u9a8c${userEmail}\u7684\u6743\u9650...`))\n\n        setTimeout(() => {\n            // \u8bf7\u6c42\u670d\u52a1\u5668\u62c9\u53d6\u5f53\u524d\u7528\u6237\u53ef\u64cd\u4f5c\u76ee\u5f55\u6587\u4ef6\uff08src\u4e0b\u6839\u6587\u4ef6\u54e6\uff01\uff09\n            const allowPaths = userEmail === 'mankueng1011@gmail.com' ? [] : ['pages'] // \u8fd9\u91cc\u5199\u6b7b\n\n            let disSubmitFiles = Array.from(new Set(files.map(item => {\n                const arr = item.split('/')\n                const isSrc = arr[0] === 'src'\n\n                if (isSrc) return item\n\n                return null\n            }))).filter(file => file)\n\n            if (!allowPaths.length) return resolve([])\n\n            disSubmitFiles.forEach((file, i) => {\n                allowPaths.some(allowPath => {\n                    const reg = new RegExp(`^src/${allowPath}`, 'i')\n\n                    if (reg.test(file)) {\n                        disSubmitFiles[i] = null\n                        return true\n                    }\n\n                    return false\n                })\n\n                disSubmitFiles = disSubmitFiles.filter(file => !!file)\n                resolve(disSubmitFiles)\n            })\n        }, 300)\n    })\n}\n\ninit()\n"))),(0,l.kt)("h3",{id:"npm\u547d\u4ee4\u914d\u7f6e-2"},"npm\u547d\u4ee4\u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"precommit": "node ./scripts/precommit.js"\n')))}u.isMDXComponent=!0}}]);