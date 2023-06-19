import{_ as e,o as t,c as a,a as r}from"./app.6afbe0de.js";const i={},l=r('<h1 id="react" tabindex="-1"><a class="header-anchor" href="#react" aria-hidden="true">#</a> React</h1><h2 id="\u8C08\u8C08\u5BF9react\u7684\u7406\u89E3" tabindex="-1"><a class="header-anchor" href="#\u8C08\u8C08\u5BF9react\u7684\u7406\u89E3" aria-hidden="true">#</a> \u8C08\u8C08\u5BF9react\u7684\u7406\u89E3</h2><p>react\u662F\u57FA\u4E8Ev\uFF08\u89C6\u56FE\u5C42\uFF09\u5C42\u7684\u4E00\u6B3E\u6846\u67B6\uFF0C\u865A\u62DFdom\u548Cdiff\u7B97\u6CD5 react\u7279\u70B9\uFF1A \u58F0\u660E\u5F0F\u8BBE\u8BA1 \u9AD8\u6548\uFF0C\u5176\u4E2D\u9AD8\u6548\u4EE5\u73B0\u5728\u865A\u62DFdom\uFF0C\u6700\u5927\u9650\u5EA6\u51CF\u5C11\u4E0Edom\u7684\u4EA4\u4E92\u548Cdiff\u7B97\u6CD5 \u7075\u6D3B\uFF0C\u4F53\u73B0\u5728\u53EF\u4EE5\u4E0E\u5DF2\u77E5\u7684\u6846\u67B6\u6216\u5E93\u5F88\u597D\u7684\u914D\u5408 JSX\uFF0C\u662Fjs\u8BED\u6CD5\u7684\u6269\u5C55 \u7EC4\u4EF6\u5316\uFF0C\u6784\u5EFA\u7EC4\u4EF6\uFF0C\u662F\u4EE3\u7801\u7684\u66F4\u5BB9\u6613\u5F97\u5230\u590D\u7528\uFF0C\u6BD4\u8F83\u5EFA\u8BAE\u5728\u5927\u578B\u9879\u76EE\u7684\u5F00\u53D1 \u5355\u9879\u6570\u636E\uFF0C\u5B9E\u73B0\u5355\u9879\u6570\u6D41\uFF0C\u4ECE\u800C\u51CF\u5C11\u4EE3\u7801\u590D\u7528</p><h2 id="react\u6709\u54EA\u51E0\u4E2A\u751F\u547D\u5468\u671F" tabindex="-1"><a class="header-anchor" href="#react\u6709\u54EA\u51E0\u4E2A\u751F\u547D\u5468\u671F" aria-hidden="true">#</a> react\u6709\u54EA\u51E0\u4E2A\u751F\u547D\u5468\u671F</h2><p>\u5206\u4E3A\u4E09\u4E2A\u9636\u6BB5\uFF0C\u521D\u59CB\uFF0C\u8FD0\u884C\u4E2D\uFF0C\u9500\u6BC1</p><ul><li><p>\u521D\u59CB\u5316\uFF1A</p><ul><li>\u6267\u884CgetDefaultProps\u94A9\u5B50\u51FD\u6570\uFF0C\u6267\u884C\u4E00\u6B21\uFF0C\u6302\u8F7D\u5C5E\u6027props\uFF08\u65E0Dom\u5143\u7D20\uFF0C\u6709\u7EC4\u4EF6\u76F8\u5173\u7684this\u4F46\u662F\u65E0\u6CD5\u83B7\u53D6\u6570\u636E\uFF0C\u7EC4\u4EF6\u60F3\u8981\u62E5\u6709\u9ED8\u8BA4\u5C5E\u6027\u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E2A\u94A9\u5B50\u51FD\u6570\u8BBE\u7F6E\uFF09</li><li>\u6267\u884CgetInitialState\u94A9\u5B50\u51FD\u6570\uFF0C\u521D\u59CB\u5316\u81EA\u8EAB\u72B6\u6001state\uFF08\u540C\u4E0A\uFF0C\u65E0Dom\u5143\u7D20\uFF0C\u6709\u7EC4\u4EF6\u76F8\u5173\u7684this\uFF0C\u4F46\u662F\u65E0\u6CD5\u83B7\u53D6\u6570\u636E\uFF0C\u7EC4\u4EF6\u60F3\u8981\u62E5\u6709\u72B6\u6001\u53EA\u80FD\u901A\u8FC7\u8FD9\u4E2A\u94A9\u5B50\u51FD\u6570\uFF09</li><li>componentWillMount\uFF08\uFF09\u6302\u8F7D\u524D\uFF08\u7C7B\u4F3C\u4E8EVue\u7684created\u52A0beforeMount\u9636\u6BB5\uFF0C\u53EF\u4EE5\u8FDB\u884C\u6570\u636E\u8BF7\u6C42\uFF08ajax\uFF09\uFF0C\u505A\u4E00\u4E9B\u521D\u59CB\u6570\u636E\u7684\u83B7\u53D6\u548C\u8BBE\u7F6E\uFF0C\u5E76\u4E14\u5728\u8FD9\u91CC\u66F4\u6539\u6570\u636E\u4E0D\u4F1A\u89E6\u53D1\u8FD0\u884C\u9636\u6BB5\u7684\u94A9\u5B50\u51FD\u6570\uFF0C\u5728 - \u91CC\u8FD8\u53EF\u4EE5\u66F4\u6539this\u7684\u6307\u5411\u95EE\u9898\uFF09</li><li>render(\u6784\u5EFA\u7EC4\u4EF6\u7684\u865A\u62DFDOM\u7ED3\u6784\u8FDB\u884C\u7F16\u8BD1)</li><li>componentDidMount\uFF08\uFF09\u6302\u8F7D\u5B8C\u6210\uFF08\u6709Dom\u5143\u7D20\uFF0C\u6570\u636E\u51C6\u5907\u5B8C\u6BD5\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u64CD\u4F5CDOM\uFF0C\u5E76\u4E14\u53EF\u4EE5\u8BBF\u95EE\u5DF2\u7ECF\u6E32\u67D3\u7684DOM\uFF0C\u5728\u8FD9\u4E2A\u94A9\u5B50\u51FD\u6570\u91CC\u9762\u4E5F\u53EF\u4EE5\u8FDB\u884C\u5BF9\u6570\u636E\u7684\u83B7\u53D6\uFF09</li></ul></li><li><p>\u8FD0\u884C\u4E2D\uFF1A</p><ul><li>componentWillReceiveProps\u51FD\u6570\uFF1A\u5F53props\u53D1\u751F\u53D8\u5316\u65F6\u8C03\u7528\uFF08\u5F53\u63A5\u6536\u5230\u7684\u5C5E\u6027\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1\uFF0C\u53EF\u4EE5\u5728\u8FD9\u91CC\u66F4\u6539\u6539\u53D8\u540E\u7684\u5C5E\u6027\u53BB\u505A\u4E00\u4E9B\u4E8B\u60C5\uFF0C\u6BD4\u5982\u66F4\u6539\u81EA\u5DF1\u7684\u72B6\u6001\uFF0C\u5728\u8FD9\u91CCthis\u4E0A\u7684\u5C5E\u6027\u8FD8\u6CA1\u6709\u66F4\u65B0\uFF0C\u8981\u60F3\u4F7F\u7528\u65B0\u7684\u6570\u636E\u9700\u8981\u4ECE\u53C2\u6570\u4E2D\u5F97\u5230\uFF09</li><li>shouldComponentUpdate\u51FD\u6570\uFF1A\u4E3B\u8981\u505A\u6548\u7387\u4F18\u5316\uFF0C\u63A7\u5236\u7EC4\u4EF6\u662F\u5426\u968F\u4E4B\u66F4\u65B0\uFF0C\u51FD\u6570\u8FD4\u56DE\u7684true\u6216false\u8868\u793A\u89C6\u56FE\u662F\u5426\u6E32\u67D3\uFF0C\u5982\uFF1A\u5728\u51FD\u6570\u4E2D\u6BD4\u8F83this.props.name\uFF08\u6570\u636E\u66F4\u65B0\u524D\uFF09\u548Cprops.name\uFF08\u6570\u636E\u66F4\u65B0\u540E\uFF09\u5BF9\u6BD4\uFF0C\u4E8C\u8005\u662F\u5426\u76F8\u540C\uFF0C\u4ECE\u800C\u907F\u514D\u91CD\u590D\u6E32\u67D3\uFF0C\u52A0\u5F3A\u4F18\u5316</li><li>componentWillUpdate\u51FD\u6570\uFF1A\u51C6\u5907\u5DE5\u4F5C\uFF0C\u591A\u505A\u4E00\u4E9B\u8C03\u8BD5\u5DE5\u4F5C\uFF0C\u5728props\u548Cstate\u53D1\u751F\u6539\u53D8\u7684\u65F6\u5019\u6267\u884C\uFF0C\u5E76\u4E14\u5728render\u65B9\u6CD5\u4E4B\u524D\u6267\u884C\uFF0C\u4F46\u662F\u4F60\u5728\u8FD9\u4E2A\u94A9\u5B50\u51FD\u6570\u91CC\u4E0D\u80FD\u66F4\u6539\u72B6\u6001\uFF0C\u5426\u5219\u4F1A\u9020\u6210\u6B7B\u5FAA\u73AF\uFF0C\u7C7B\u4F3CVue\u4E2D\u7684beforeUpdate render\uFF1A\u91CD\u65B0\u6E32\u67D3Dom</li><li>componentDidUpdate\uFF1A\u9875\u9762\u66F4\u65B0\u6E32\u67D3\u5B8C\u6210\uFF0C\u7EC4\u4EF6\u7684\u66F4\u65B0\u7ED3\u675F\u540E\u6267\u884C,\u5728\u8FD9\u91CC\u53EF\u4EE5\u64CD\u4F5C\u66F4\u65B0\u5B8C\u6210\u540E\u7684dom\uFF0C\u7C7B\u4F3CVue\u7684updated</li></ul></li><li><p>\u7EC4\u4EF6\u9500\u6BC1\uFF1A</p><ul><li>componentWillUnmount\uFF1A\u7EC4\u4EF6\u5C06\u8981\u9500\u6BC1\uFF0C\u53EF\u4EE5\u5C06\u5B9A\u65F6\u5668\uFF0C\u4E8B\u4EF6\u7B49\u53D6\u6D88\u6216\u7ED3\u675F \uFF08ReactDOM.unmountComponentAtNode(node) \u9500\u6BC1\u8282\u70B9\u4E2D\u7684\u7EC4\u4EF6\uFF09</li></ul></li></ul><h2 id="props\u4E0Estate\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#props\u4E0Estate\u7684\u533A\u522B" aria-hidden="true">#</a> props\u4E0Estate\u7684\u533A\u522B</h2><p>props\u662F\u4E00\u4E2A\u4ECE\u5916\u90E8\u4F20\u8FDB\u7EC4\u4EF6\u7684\u53C2\u6570\uFF0C\u7531\u4E8EReact\u5177\u6709\u5355\u5411\u6570\u636E\u6D41\uFF0C\u6240\u4EE5\u5B83\u7684\u4E3B\u8981\u4F5C\u7528\u662F\u4ECE\u7236\u7EC4\u4EF6\u5411\u5B50\u7EC4\u4EF6\u4F20\u9012\u6570\u636E\uFF0C\u5B83\u662F\u4E0D\u53EF\u6539\u53D8\u7684\u3002\u5982\u679C\u60F3\u8981\u6539\u53D8\u5B83\uFF0C\u53EA\u80FD\u901A\u8FC7\u5916\u90E8\u7EC4\u4EF6\u4F20\u5165\u65B0\u7684props\u6765\u91CD\u65B0\u6E32\u67D3\u5B50\u7EC4\u4EF6\uFF0C\u5426\u5219\u5B50\u7EC4\u4EF6\u7684props\u4EE5\u53CA\u5C55\u73B0\u5F62\u5F0F\u4E0D\u4F1A\u6539\u53D8\u3002props\u9664\u4E86\u53EF\u4EE5\u4F20\u5B57\u7B26\u4E32\u3001\u6570\u5B57\uFF0C\u8FD8\u53EF\u4EE5\u4F20\u6570\u7EC4\uFF0C\u5BF9\u8C61\u3001\u751A\u81F3\u662F\u56DE\u8C03\u51FD\u6570\u3002</p><p>state\u7684\u4E3B\u8981\u4F5C\u7528\u662F\u7528\u4E8E\u7EC4\u4EF6\u4FDD\u5B58\u3001\u63A7\u5236\u4EE5\u53CA\u4FEE\u6539\u81EA\u5DF1\u7684\u72B6\u6001\uFF0C\u5B83\u53EA\u80FD\u5728constructor\u4E2D\u521D\u59CB\u5316\uFF0Cstate\u662F\u53EF\u4EE5\u88AB\u6539\u53D8\u7684\u3002state\u653E\u6539\u52A8\u7684\u4E00\u4E9B\u5C5E\u6027\uFF0C\u6BD4\u5982\u70B9\u51FB\u9009\u4E2D\uFF0C\u518D\u70B9\u51FB\u53D6\u6D88\u3002\u7C7B\u4F3C\u7684\u8FD9\u79CD\u5C5E\u6027\u5C31\u53EF\u4EE5\u653E\u5230state\u91CC\u3002\u6CA1\u6709state\u7684\u53EB\u505A\u65E0\u72B6\u6001\u7EC4\u4EF6\uFF0C\u591A\u7528props\u5C11\u7528state\uFF0C\u591A\u5199\u65E0\u72B6\u6001\u7EC4\u4EF6\u3002\u4FEE\u6539state\u7684\u503C\u65F6\uFF0C\u5FC5\u987B\u901A\u8FC7setState()\u65B9\u6CD5\u3002\u5F53\u6211\u4EEC\u8C03\u7528this.setState\u65B9\u6CD5\u65F6\uFF0CReact\u4F1A\u66F4\u65B0\u7EC4\u4EF6\u7684\u6570\u636E\u72B6\u6001state\uFF0C\u5E76\u4E14\u91CD\u65B0\u8C03\u7528render\u65B9\u6CD5</p><p>\u4E3B\u8981\u533A\u522B\uFF1A state\u662F\u7EC4\u4EF6\u81EA\u5DF1\u7BA1\u7406\u6570\u636E\uFF0C\u63A7\u5236\u81EA\u5DF1\u7684\u72B6\u6001\uFF0C\u503C\u662F\u53EF\u4EE5\u6539\u53D8\u7684\uFF1B props\u662F\u5916\u90E8\u4F20\u5165\u7684\u6570\u636E\u53C2\u6570\uFF0C\u4E0D\u53EF\u53D8\uFF1B</p><ul><li><p>\u76F8\u540C\u70B9\uFF1A</p><ul><li>props\u548Cstate\u90FD\u662F\u5BFC\u51FAHTML\u7684\u539F\u59CB\u6570\u636E</li><li>props\u548Cstate\u90FD\u662F\u786E\u5B9A\u6027\u7684\uFF0C\u5982\u679C\u6211\u4EEC\u5199\u7684\u7EC4\u4EF6\u4E3A\u540C\u4E00props\u548Cstate\u7684\u7EC4\u5408\u751F\u6210\u4E86\u4E0D\u540C\u7684\u8F93\u51FA\uFF0C\u90A3\u4E48\u6211\u4EEC\u80AF\u5B9A\u5728\u54EA\u91CC\u505A\u9519\u4E86</li><li>props\u548Cstate\u66F4\u6539\u90FD\u4F1A\u89E6\u53D1\u6E32\u67D3\u66F4\u65B0\uFF0C\u8FD9\u91CC\u8BA8\u8BBA\u540C\u4E00\u4E2A\u7EC4\u4EF6\u5185\u7684props\u548Cstate\uFF0C\u5373props\u662F\u4ECE\u5916\u5C42\u7EC4\u4EF6\u83B7\u53D6\u7684\uFF0C\u800Cstate\u662F\u5F53\u524D\u7EC4\u4EF6\u81EA\u5DF1\u7EF4\u62A4\u7684\uFF08\u8FD9\u91CC\u53EF\u4EE5\u770B\u505A\u662F\u5171\u540C\u70B9\u4E5F\u53EF\u770B\u505A\u662F\u4E0D\u540C\u70B9\uFF0C\u56E0\u4E3A\u867D\u7136\u90FD\u662F\u4F1A\u89E6\u53D1\u6E32\u67D3\u66F4\u65B0\uFF0C\u4F46\u662F\u5982\u4F55\u66F4\u6539\u7684\u673A\u5236\u4E0D\u4E00\u6837\uFF09</li><li>props\u548Cstate\u90FD\u662F\u7EAFJS\u5BF9\u8C61\uFF08\u5BF9\u8C61\u5B57\u9762\u91CF\uFF0C{}\uFF0C\u6211\u4EEC\u4F1A\u7B80\u79F0\u4E3A\u5BF9\u8C61\uFF1B\u5BF9\u4E8E[]\uFF0C\u6211\u4EEC\u4F1A\u7B80\u79F0\u4E3A\u6570\u7EC4\uFF09\uFF0C\u6211\u4EEC\u53EF\u4EE5\u7528typeof\u6765\u5224\u65AD\u4ED6\u4EEC\uFF0C\u7ED3\u679C\u90FD\u662Fobject</li><li>\u53EF\u4EE5\u4ECE\u7236\u7EC4\u4EF6\u5F97\u5230\u521D\u59CB\u503Cprops\u548Cstate\u7684\u521D\u59CB\u503C</li></ul></li><li><p>\u4E0D\u540C\u70B9\uFF1A</p><ul><li>\u53EF\u4EE5\u4ECE\u7236\u7EC4\u4EF6\u4FEE\u6539\u81EA\u7EC4\u4EF6\u7684props\uFF0C\u800C\u4E0D\u80FD\u4ECE\u7236\u7EC4\u4EF6\u4FEE\u6539\u81EA\u7EC4\u4EF6\u7684state</li><li>\u53EF\u4EE5\u5728\u7EC4\u4EF6\u5185\u90E8\u5206\u522B\u5BF9state\u548Cprops\u8BBE\u7F6E\u521D\u59CB\u503C</li><li>props\u4E0D\u53EF\u4EE5\u5728\u7EC4\u4EF6\u5185\u90E8\u4FEE\u6539\uFF0C\u4F46state\u53EF\u4EE5\u5728\u5185\u90E8\u4FEE\u6539</li></ul></li></ul><h2 id="react\u7EC4\u4EF6\u4E4B\u95F4\u5982\u4F55\u4F20\u503C" tabindex="-1"><a class="header-anchor" href="#react\u7EC4\u4EF6\u4E4B\u95F4\u5982\u4F55\u4F20\u503C" aria-hidden="true">#</a> react\u7EC4\u4EF6\u4E4B\u95F4\u5982\u4F55\u4F20\u503C\uFF1F</h2><p>\u7236\u7EC4\u4EF6\u5411\u5B50\u7EC4\u4EF6\u4F20\u503C\uFF0C\u521D\u6B65\u4F7F\u7528\uFF0C\u8FD9\u4E2A\u662F\u76F8\u5F53\u5BB9\u6613\u7684\uFF0C\u5728\u4F7F\u7528 React \u5F00\u53D1\u7684\u8FC7\u7A0B\u4E2D\u7ECF\u5E38\u4F1A\u4F7F\u7528\u5230\uFF0C\u4E3B\u8981\u662F\u5229\u7528props\u6765\u8FDB\u884C\u4EA4\u6D41 \u5B50\u7EC4\u4EF6\u5411\u7236\u7EC4\u4EF6\u4F20\u503C\uFF0C\u5B50\u7EC4\u4EF6\u63A7\u5236\u81EA\u5DF1\u7684 state \u7136\u540E\u544A\u8BC9\u7236\u7EC4\u4EF6\u7684\u70B9\u51FB\u72B6\u6001\uFF0C\u7136\u540E\u5728\u7236\u7EC4\u4EF6\u4E2D\u5C55\u793A\u51FA\u6765\u3002 \u6CA1\u6709\u4EFB\u4F55\u5D4C\u5957\u5173\u7CFB\u7684\u7EC4\u4EF6\u4E4B\u95F4\u4F20\u503C(\u4E8B\u4EF6\u603B\u7EBF\uFF0Cflux\uFF0Credux)</p><h2 id="react\u4E2D-\u5728setstate\u540E-\u53D1\u751F\u4E86\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#react\u4E2D-\u5728setstate\u540E-\u53D1\u751F\u4E86\u4EC0\u4E48" aria-hidden="true">#</a> React\u4E2D\uFF0C\u5728setState\u540E\uFF0C\u53D1\u751F\u4E86\u4EC0\u4E48</h2><p>\u5F53\u8C03\u7528 setState \u65F6\uFF0CReact\u4F1A\u505A\u7684\u7B2C\u4E00\u4EF6\u4E8B\u60C5\u662F\u5C06\u4F20\u9012\u7ED9 setState \u7684\u5BF9\u8C61\u5408\u5E76\u5230\u7EC4\u4EF6\u7684\u5F53\u524D\u72B6\u6001\u3002\u8FD9\u5C06\u542F\u52A8\u4E00\u4E2A\u79F0\u4E3A\u548C\u89E3\uFF08reconciliation\uFF09\u7684\u8FC7\u7A0B\u3002\u548C\u89E3\uFF08reconciliation\uFF09\u7684\u6700\u7EC8\u76EE\u6807\u662F\u4EE5\u6700\u6709\u6548\u7684\u65B9\u5F0F\uFF0C\u6839\u636E\u8FD9\u4E2A\u65B0\u7684\u72B6\u6001\u6765\u66F4\u65B0UI\u3002\u4E3A\u6B64\uFF0CReact\u5C06\u6784\u5EFA\u4E00\u4E2A\u65B0\u7684React\u5143\u7D20\u6811\uFF08\u53EF\u4EE5\u5C06\u5176\u89C6\u4E3A UI \u7684\u5BF9\u8C61\u8868\u793A\uFF09\u3002\u4E00\u65E6\u6709\u4E86\u8FD9\u4E2A\u6811\uFF0C\u4E3A\u4E86\u5F04\u6E05 UI \u5982\u4F55\u54CD\u5E94\u65B0\u7684\u72B6\u6001\u800C\u6539\u53D8\uFF0CReact \u4F1A\u5C06\u8FD9\u4E2A\u65B0\u6811\u4E0E\u4E0A\u4E00\u4E2A\u5143\u7D20\u6811\u76F8\u6BD4\u8F83\uFF08diff\uFF09\u3002\u901A\u8FC7\u8FD9\u6837\u505A\uFF0C React \u5C06\u4F1A\u77E5\u9053\u53D1\u751F\u7684\u786E\u5207\u53D8\u5316\uFF0C\u5E76\u4E14\u901A\u8FC7\u4E86\u89E3\u53D1\u751F\u4EC0\u4E48\u53D8\u5316\uFF0C\u53EA\u9700\u5728\u7EDD\u5BF9\u5FC5\u8981\u7684\u60C5\u51B5\u4E0B\u8FDB\u884C\u66F4\u65B0\u5373\u53EF\u6700\u5C0F\u5316 UI \u7684\u5360\u7528\u7A7A\u95F4\u3002</p><h2 id="vue-react-angular-\u600E\u4E48\u68C0\u6D4B\u6570\u636E\u53D8\u5316\u7684" tabindex="-1"><a class="header-anchor" href="#vue-react-angular-\u600E\u4E48\u68C0\u6D4B\u6570\u636E\u53D8\u5316\u7684" aria-hidden="true">#</a> vue react angular \u600E\u4E48\u68C0\u6D4B\u6570\u636E\u53D8\u5316\u7684</h2><p>Angular\uFF1A\u5728angular\u7248\u672C\u91CC\u9762\u8FD8\u662F\u91C7\u7528\u810F\u503C\u68C0\u6D4B\u6765\u68C0\u6D4B\u6570\u636E\u7684\u53D8\u66F4\u7684\uFF0C\u4F46\u662F\u548Cangularjs\u4E0D\u4E00\u6837\u7684\u662F,angular\u5F15\u5165\u4E86zone.js\u6765\u5904\u7406\u6570\u636E\u7684\u53D8\u66F4\u3002\u6027\u80FD\u53EF\u4EE5\u8FBE\u5230angularjs\u810F\u503C\u68C0\u6D4B\u76843\u523010\u500D Vue\uFF1Avue.js \u5219\u662F\u91C7\u7528\u6570\u636E\u52AB\u6301\u7ED3\u5408\u53D1\u5E03\u8005-\u8BA2\u9605\u8005\u6A21\u5F0F\u7684\u65B9\u5F0F\uFF0C\u901A\u8FC7Object.defineProperty()\u6765\u52AB\u6301\u5404\u4E2A\u5C5E\u6027\u7684setter\uFF0Cgetter\uFF0C\u5728\u6570\u636E\u53D8\u52A8\u65F6\u53D1\u5E03\u6D88\u606F\u7ED9\u8BA2\u9605\u8005\uFF0C\u89E6\u53D1\u76F8\u5E94\u7684\u76D1\u542C\u56DE\u8C03 React\uFF1Areact\u72B6\u6001\u53D8\u5316\u53EA\u80FD\u901A\u8FC7setState,\u8C03\u7528setState\u5C31\u4F1A\u66F4\u65B0\u72B6\u6001\u91CD\u65B0\u6E32\u67D3dom</p><h2 id="virtual-dom\u5B9E\u73B0\u7684\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#virtual-dom\u5B9E\u73B0\u7684\u539F\u7406" aria-hidden="true">#</a> Virtual Dom\u5B9E\u73B0\u7684\u539F\u7406</h2><p>\u865A\u62DFdom\u76F8\u5F53\u5728js\u548C\u771F\u5B9Edom\u4E2D\u95F4\u52A0\u4E86\u4E00\u4E2A\u7F13\u5B58\uFF0C\u5229\u7528dom diff\u7B97\u6CD5\u907F\u514D\u4E86\u6CA1\u6709\u5FC5\u8981\u7684dom\u64CD\u4F5C\uFF0C\u4ECE\u800C\u63D0\u9AD8\u6027\u80FD \u7528 javaScript\u5BF9\u8C61\u7ED3\u6784\u8868\u793Adom\u6811\u7684\u7ED3\u6784\uFF1B\u7136\u540E\u7528\u8FD9\u4E2A\u6811\u6784\u5EFA\u4E00\u4E2A\u771F\u6B63\u7684dom\u6811\uFF0C\u63D2\u5230\u6587\u6863\u4E2D \u5F53\u72B6\u6001\u53D8\u66F4\u7684\u65F6\u5019\uFF0C\u91CD\u65B0\u6784\u5EFA\u4E00\u9897\u65B0\u7684\u5BF9\u8C61\u6811\u3002\u7136\u540E\u7528\u65B0\u7684\u6811\u548C\u65E7\u7684\u6811\u8FDB\u884C\u6BD4\u8F83\uFF0C\u8BB0\u5F55\u4E24\u9897\u6811\u7684\u5DEE\u5F02 \u628A\u8BB0\u5F55\u7684\u5DEE\u5F02\u4E4B\u5904\u91CD\u65B0\u8FDB\u884Cdom \u6E32\u67D3 \u89C6\u56FE\u5C31\u66F4\u65B0\u4E86</p><h2 id="\u5982\u4F55\u5B9E\u73B0virtual-dom\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u5B9E\u73B0virtual-dom\u7B97\u6CD5" aria-hidden="true">#</a> \u5982\u4F55\u5B9E\u73B0Virtual Dom\u7B97\u6CD5</h2><p>\u6811\u7684\u9012\u5F52\uFF1A \u65B0\u7684\u8282\u70B9\u7684tagName\u6216\u8005key\u548C\u65E7\u7684\u4E0D\u540C\uFF0C\u8FD9\u79CD\u60C5\u51B5\u4EE3\u8868\u9700\u8981\u66FF\u6362\u65E7\u7684\u8282\u70B9\uFF0C\u5E76\u4E14\u4E5F\u4E0D\u518D\u9700\u8981\u904D\u5386\u65B0\u65E7\u8282\u70B9\u7684\u5B50\u5143\u7D20\u4E86\uFF0C\u56E0\u4E3A\u6574\u4E2A\u65E7\u8282\u70B9\u90FD\u88AB\u5220\u6389\u4E86\uFF0C\u65B0\u7684\u8282\u70B9\u7684tagName\u548C key\uFF08\u53EF\u80FD\u90FD\u6CA1\u6709\uFF09\u548C\u65E7\u7684\u76F8\u540C\uFF0C\u5F00\u59CB\u904D\u5386\u5B50\u6811\uFF0C\u6CA1\u6709\u65B0\u7684\u8282\u70B9\uFF0C\u90A3\u4E48\u4EC0\u4E48\u90FD\u4E0D\u7528\u505A</p><ul><li><p>\u5224\u65AD\u5C5E\u6027\u7684\u66F4\u6539\uFF08\u5177\u4F53\u5206\u4E3A\u4E09\u4E2A\u6B65\u9AA4\uFF09\uFF1A</p><ul><li>\u904D\u5386\u65E7\u7684\u5C5E\u6027\u5217\u8868\uFF0C\u67E5\u770B\u6BCF\u4E2A\u5C5E\u6027\u662F\u5426\u8FD8\u5B58\u5728\u4E8E\u65B0\u7684\u5C5E\u6027\u5217\u8868\u4E2D</li><li>\u904D\u5386\u65B0\u7684\u5C5E\u6027\u5217\u8868\uFF0C\u5224\u65AD\u4E24\u4E2A\u5217\u8868\u4E2D\u90FD\u5B58\u5728\u7684\u5C5E\u6027\u7684\u503C\u662F\u5426\u6709\u53D8\u5316</li><li>\u5728\u7B2C\u4E8C\u6B65\u4E2D\u540C\u65F6\u67E5\u770B\u662F\u5426\u6709\u5C5E\u6027\u4E0D\u5B58\u5728\u4E0E\u65E7\u7684\u5C5E\u6027\u5217\u5217\u8868\u4E2D</li></ul></li><li><p>\u5224\u65AD\u5217\u8868\u5DEE\u5F02\u7B97\u6CD5\u5B9E\u73B0\uFF08\u8FD9\u4E2A\u7B97\u6CD5\u662F\u6574\u4E2A Virtual Dom \u4E2D\u6700\u6838\u5FC3\u7684\u7B97\u6CD5\uFF09\uFF1A</p><ul><li>\u904D\u5386\u65E7\u7684\u8282\u70B9\u5217\u8868\uFF0C\u67E5\u770B\u6BCF\u4E2A\u8282\u70B9\u662F\u5426\u8FD8\u5B58\u5728\u4E8E\u65B0\u7684\u8282\u70B9\u5217\u8868\u4E2D</li><li>\u904D\u5386\u65B0\u7684\u8282\u70B9\u5217\u8868\uFF0C\u5224\u65AD\u662F\u5426\u6709\u65B0\u7684\u8282\u70B9</li><li>\u5728\u7B2C\u4E8C\u6B65\u4E2D\u540C\u65F6\u5224\u65AD\u8282\u70B9\u662F\u5426\u6709\u79FB\u52A8</li></ul></li><li><p>\u904D\u5386\u5B50\u5143\u7D20\u5E76\u521B\u5EFA\u6807\u8BC6\uFF1A</p><ul><li>\u5224\u65AD\u4E24\u4E2A\u5217\u8868\u5DEE\u5F02</li><li>\u7ED9\u8282\u70B9\u6253\u4E0A\u6807\u8BB0</li></ul></li><li><p>\u6E32\u67D3\u5DEE\u5F02\uFF1A</p><ul><li>\u6DF1\u5EA6\u904D\u5386\u6811\uFF0C\u5C06\u9700\u8981\u505A\u53D8\u66F4\u64CD\u4F5C\u7684\u53D6\u51FA\u6765</li><li>\u5C40\u90E8\u66F4\u65B0 DOM</li></ul></li></ul><h2 id="\u4F7F\u7528setstate\u9047\u5230\u7684\u95EE\u9898-\u5F02\u6B65" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528setstate\u9047\u5230\u7684\u95EE\u9898-\u5F02\u6B65" aria-hidden="true">#</a> \u4F7F\u7528setState\u9047\u5230\u7684\u95EE\u9898\uFF08\u5F02\u6B65\uFF09</h2><p>this.setState()\u4F1A\u8C03\u7528render\u65B9\u6CD5\uFF0C\u4F46\u5E76\u4E0D\u4F1A\u7ACB\u5373\u6539\u53D8state\u7684\u503C\uFF0Cstate\u662F\u5728render\u65B9\u6CD5\u4E2D\u8D4B\u503C\u7684\u3002\u6240\u4EE5\u6267\u884Cthis.setState()\u540E\u7ACB\u5373\u83B7\u53D6state\u7684\u503C\u662F\u4E0D\u53D8\u7684\u3002\u540C\u6837\u7684\u76F4\u63A5\u8D4B\u503Cstate\u5E76\u4E0D\u4F1A\u89E6\u53D1\u66F4\u65B0\uFF0C\u56E0\u4E3A\u6CA1\u6709\u8C03\u7528render\u51FD\u6570\u3002</p><p>\u89E3\u51B3\u65B9\u6CD5\uFF1A setState(data\uFF0Ccallback)\uFF0CDOM\u6E32\u67D3\u5B8C\u6210\u540E\u8C03\u7528\u7B2C\u4E8C\u4E2A\u53C2\u6570callback\uFF0C\u89E3\u51B3\u5F02\u6B65\u95EE\u9898</p><h2 id="\u5728react\u4E2D-\u4EC0\u4E48\u662F\u9AD8\u9636\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5728react\u4E2D-\u4EC0\u4E48\u662F\u9AD8\u9636\u7EC4\u4EF6" aria-hidden="true">#</a> \u5728react\u4E2D\uFF0C\u4EC0\u4E48\u662F\u9AD8\u9636\u7EC4\u4EF6</h2><p>\u9AD8\u9636\u7EC4\u4EF6\u5C31\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u4E14\u8BE5\u51FD\u6570\u63A5\u53D7\u4E00\u4E2A\u7EC4\u4EF6\u4F5C\u4E3A\u53C2\u6570\uFF0C\u5E76\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u7EC4\u4EF6\u3002\u9AD8\u9636\u7EC4\u4EF6\u7684\u4F5C\u7528\uFF0C\u5176\u5B9E\u5C31\u662F\u4E3A\u4E86\u7EC4\u4EF6\u4E4B\u95F4\u7684\u4EE3\u7801\u590D\u7528\u3002\u7EC4\u4EF6\u53EF\u80FD\u6709\u7740\u67D0\u4E9B\u76F8\u540C\u7684\u903B\u8F91\uFF0C\u628A\u8FD9\u4E9B\u903B\u8F91\u62BD\u79BB\u51FA\u6765\uFF0C\u653E\u5230\u9AD8\u9636\u7EC4\u4EF6\u4E2D\u8FDB\u884C\u590D\u7528\u3002\u9AD8\u9636\u7EC4\u4EF6\u5185\u90E8\u7684\u5305\u88C5\u7EC4\u4EF6\u548C\u88AB\u5305\u88C5\u7EC4\u4EF6\u4E4B\u95F4\u901A\u8FC7 props \u4F20\u9012\u6570\u636E\u3002</p><h2 id="\u5982\u4F55\u5728react\u4E2D\u8BBF\u95EEdom" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u5728react\u4E2D\u8BBF\u95EEdom" aria-hidden="true">#</a> \u5982\u4F55\u5728React\u4E2D\u8BBF\u95EEDOM</h2><p>\u5728React\u7684\u6807\u7B7E\u4E2D\u53EF\u4EE5\u901A\u8FC7ref={(ele) =&gt; this.ele= ele}\u63A5\u6536\u653E\u5728\u5B9E\u4F8B\u4E0A\u5B9E\u9645\u7684 DOM \u5143\u7D20ele\uFF0C\u901A\u8FC7this.ele\u8BBF\u95EE\u539F\u751Fele\u6807\u7B7E\uFF0C\u5728React\u4E2D\uFF0Crefs\u5141\u8BB8\u4F60\u76F4\u63A5\u8BBF\u95EEDOM\u5143\u7D20\u6216\u7EC4\u4EF6\u5B9E\u4F8B\u3002\u4E3A\u4E86\u4F7F\u7528\u5B83\u4EEC\uFF0C\u53EF\u4EE5\u5411\u7EC4\u4EF6\u6DFB\u52A0\u4E00\u4E2A ref \u5C5E\u6027\uFF0C\u8BE5\u5C5E\u6027\u7684\u503C\u662F\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\uFF0C\u5B83\u5C06\u63A5\u6536\u5E95\u5C42\u7684 DOM \u5143\u7D20\u6216\u7EC4\u4EF6\u7684\u5DF2\u6302\u63A5\u5B9E\u4F8B\uFF0C\u4F5C\u4E3A\u5176\u7B2C\u4E00\u4E2A\u53C2\u6570\u3002</p><h2 id="react-native\u76F8\u5BF9\u4E8E\u539F\u751F\u7684ios\u548Candroid\u6709\u54EA\u4E9B\u4F18\u52A3\u52BF" tabindex="-1"><a class="header-anchor" href="#react-native\u76F8\u5BF9\u4E8E\u539F\u751F\u7684ios\u548Candroid\u6709\u54EA\u4E9B\u4F18\u52A3\u52BF" aria-hidden="true">#</a> React Native\u76F8\u5BF9\u4E8E\u539F\u751F\u7684ios\u548CAndroid\u6709\u54EA\u4E9B\u4F18\u52A3\u52BF</h2><p>\u4F18\u52BF: \u5B83\u5BF9\u6BD4\u539F\u751F\u5F00\u53D1\u66F4\u4E3A\u7075\u6D3B\uFF0C\u5BF9\u6BD4H5\u4F53\u9A8C\u66F4\u4E3A\u9AD8\u6548\u3002 \u8DE8\u5E73\u53F0\uFF0C\u5F00\u53D1\u8005\u53EA\u9700\u5B66\u4E60\u4E00\u79CD\u8BED\u8A00\u5C31\u80FD\u8F7B\u6613\u4E3A\u4EFB\u4F55\u5E73\u53F0\u9AD8\u6548\u5730\u7F16\u5199\u4EE3\u7801\u3002 \u66FF\u4EE3\u4F20\u7EDF\u7684WebView\uFF0C\u6253\u5F00\u6548\u7387\u66F4\u9AD8\uFF0C\u548C\u539F\u751F\u4E4B\u95F4\u7684\u4EA4\u4E92\u66F4\u65B9\u4FBF\u3002 \u591A\u4E2A\u7248\u672C\u8FED\u4EE3\u540E\u7684\u4ECA\u5929\uFF0C\u5B83\u5DF2\u7ECF\u62E5\u6709\u4E86\u4E30\u5BCC\u7B2C\u4E09\u65B9\u63D2\u4EF6\u652F\u6301\u3002 React Native\u89E3\u51B3\u4E0D\u4E86\u7684\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5404\u4F4D\u719F\u6089\u7684\u539F\u751F\u6765\u89E3\u51B3\uFF0C\u4E92\u8865\u76CA\u5F70\u3002 \u66F4\u65B9\u4FBF\u7684\u70ED\u66F4\u65B0\u3002</p><p>\u52A3\u52BF: \u5C3D\u7BA1\u662F\u8DE8\u5E73\u53F0\uFF0C\u4F46\u662F\u4E0D\u540C\u5E73\u53F0Api\u7684\u7279\u6027\u4E0E\u663E\u793A\u5E76\u4E0D\u4E00\u5B9A\u4E00\u81F4\u3002 \u76F8\u5BF9\u589E\u5927\u4E86app\u7684\u4F53\u79EF\u3002 \u8C03\u8BD5\u76F8\u5BF9\u9EBB\u70E6\u3002 Android\u4E0A\u7684\u517C\u5BB9\u6027\u95EE\u9898\u3002</p><p>React Native\u9002\u5408\u4F5C\u4E3A\u9879\u76EE\u4E2D\u7684\u8865\u5145\uFF0C\u800C\u4E0D\u662F\u4F5C\u4E3A\u6838\u5FC3\u53BB\u5F00\u53D1APP\u3002\u56E0\u4E3A\u5C3D\u7BA1\u662F\u8DE8\u5E73\u53F0\u548C\u5FEB\u6377\u5F00\u53D1\uFF0C\u4F46\u662F\u4EE5React Native\u4E3A\u6838\u5FC3\uFF0C\u53BB\u5F00\u53D1\u7A0D\u5FAE\u504F\u4E2D\u578B\u4EE5\u4E0A\u7684\u9879\u76EE\uFF0C\u540E\u671F\u7EF4\u62A4\u7684\u4EBA\u5458\u7EDD\u5BF9\u4E0D\u6BD4\u539F\u751F\u7684\u5C11\u591A\u5C11\uFF0C\u800C\u4E14\u9879\u76EE\u5927\u4E86\uFF0C\u4F53\u9A8C\u4F9D\u65E7\u662F\u4E2A\u5927\u95EE\u9898\u3002 \u76F8\u53CD\uFF0C\u628AReact Native\u4F5C\u4E3A\u9879\u76EE\u5F00\u53D1\u4E2D\u7684\u8865\u5145\uFF0C\u53EF\u4EE5\u5728\u4E00\u5B9A\u7A0B\u5EA6\u4E0A\u5B9E\u73B0\u5E73\u53F0\u4E1A\u52A1\u7684\u7EDF\u4E00\uFF0C\u8FD8\u6709\u7075\u6D3B\u7684\u5F00\u53D1\u6548\u7387\uFF0C\u8865\u5145\u539F\u751F\u7684\u4E0D\u8DB3\u3002</p><h2 id="react-router\u6709\u51E0\u79CD\u4F20\u53C2\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#react-router\u6709\u51E0\u79CD\u4F20\u53C2\u65B9\u5F0F" aria-hidden="true">#</a> react-router\u6709\u51E0\u79CD\u4F20\u53C2\u65B9\u5F0F</h2><p>React Router \u662F\u4E00\u4E2A\u57FA\u4E8EReact\u4E4B\u4E0A\u7684\u5F3A\u5927\u8DEF\u7531\u5E93</p><ul><li>\u4F20\u53C2\u65B9\u5F0F\uFF1A <ul><li>params\uFF1A\u5728\u7F16\u7A0B\u5F0F\u5BFC\u822A\u7684push\u6216replace\u4E2D\u52A0 / : key\uFF0C\u4F20\u9012\u65B9\u5F0F\u7531\u8DEF\u7531\u5339\u914D\uFF0C\u53EA\u80FD\u4F20\u5B57\u7B26\uFF08JOSN\u5904\u7406\uFF09\uFF0C\u5237\u65B0\u754C\u9762\u4F9D\u7136\u4FDD\u5B58</li><li>query\uFF1A\u5728\u8DEF\u7531path\u5904\u5199<code>{path\uFF1A\u2018/admin\u2019\uFF0Cquery\uFF1A{name\uFF1Aaaa\uFF0Cage\uFF1A20}}</code>,\u65E0\u9700\u52A8\u6001\u8DEF\u7531\uFF08\u5373\uFF0C\u5728\u8DEF\u5F84\u5904\u6709\u4E2A /\uFF1Akey\uFF09\uFF0C\u5237\u65B0\u540E\u4E0D\u4FDD\u5B58\uFF0C\u53EF\u4F20\u4EFB\u4F55\u6570\u636E</li><li>state\uFF1A\u7C7B\u4F3Cquery\uFF0C\u5728\u8DEF\u7531path\u5904\u5199<code>{path\uFF1A\u2018/admin\u2019\uFF0Cstate\uFF1A{name\uFF1Aaaa\uFF0Cage\uFF1A20}}</code>\uFF0C\u65E0\u9700\u52A8\u6001\u8DEF\u7531\uFF0C\u5237\u65B0\u540E\u4FDD\u5B58\uFF0C\u53EF\u4F20\u4EFB\u4F55\u6570\u636E</li></ul></li></ul><h2 id="react-router\u7684\u5B9E\u73B0\u539F\u7406\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#react-router\u7684\u5B9E\u73B0\u539F\u7406\u662F\u4EC0\u4E48" aria-hidden="true">#</a> react-router\u7684\u5B9E\u73B0\u539F\u7406\u662F\u4EC0\u4E48</h2><p>\u5F53\u7528\u6237\u70B9\u51FB\u9875\u9762\u8DF3\u8F6C\u65F6\uFF0Creact-router\u963B\u6B62\u4E86\u6D4F\u89C8\u5668\u7684\u9ED8\u8BA4\u8DF3\u8F6C\u884C\u4E3A\uFF0C\u800C\u6539\u7528history\u6A21\u5757\u7684pushState\u65B9\u6CD5\u53BB\u89E6\u53D1url\u66F4\u65B0\uFF0C\u5F53\u6267\u884Chistory.push\u65F6\uFF0C\u6267\u884C\u4E86\u6CE8\u518C\u7684listener\u51FD\u6570\uFF0Clistener\u4E2D\u7684setState\u51FD\u6570\u4E5F\u88AB\u6267\u884C\uFF0C\u5C06\u5F53\u524Durl\u5730\u5740\u680F\u5BF9\u5E94\u7684url\u4F20\u9012\u4E0B\u53BB\uFF0C\u5F53Route\u7EC4\u4EF6\u5339\u914D\u5230\u8BE5\u5730\u5740\u680F\u7684\u65F6\u5019\uFF0C\u5C31\u4F1A\u6E32\u67D3\u8BE5\u7EC4\u4EF6\uFF0C\u5982\u679C\u5339\u914D\u4E0D\u5230\uFF0CRoute\u7EC4\u4EF6\u5C31\u8FD4\u56DEnull</p><p>react-router\u4F9D\u8D56\u57FA\u7840\u662Fhistory\u5E93\uFF1A \u8001\u6D4F\u89C8\u5668\u7684history: \u4E3B\u8981\u901A\u8FC7hash\u6765\u5B9E\u73B0\uFF0C\u5BF9\u5E94createHashHistory \u9AD8\u7248\u672C\u6D4F\u89C8\u5668: \u901A\u8FC7html5\u91CC\u9762\u7684history\uFF0C\u5BF9\u5E94createBrowserHistory node\u73AF\u5883\u4E0B: \u4E3B\u8981\u5B58\u50A8\u5728memeory\u91CC\u9762\uFF0C\u5BF9\u5E94createMemoryHistory</p><h2 id="\u8BF4\u8BF4\u5BF9vuex-flux\u548Credux\u7684\u7406\u89E3" tabindex="-1"><a class="header-anchor" href="#\u8BF4\u8BF4\u5BF9vuex-flux\u548Credux\u7684\u7406\u89E3" aria-hidden="true">#</a> \u8BF4\u8BF4\u5BF9Vuex\uFF0CFlux\u548CRedux\u7684\u7406\u89E3</h2><p>Vuex\u662F\u4E00\u4E2A\u4E13\u4E3AVue.js\u5E94\u7528\u7A0B\u5E8F\u5F00\u53D1\u7684\u72B6\u6001\u7BA1\u7406\u6A21\u5F0F\uFF0C\u5B83\u91C7\u7528\u96C6\u4E2D\u5F0F\u5B58\u50A8\u7BA1\u7406\u5E94\u7528\u7684\u6240\u6709\u7EC4\u4EF6\u7684\u72B6\u6001\uFF0C\u5E76\u4EE5\u76F8\u5E94\u7684\u89C4\u5219\u4FDD\u8BC1\u72B6\u6001\u4EE5\u4E00\u79CD\u53EF\u9884\u6D4B\u7684\u65B9\u5F0F\u53D1\u751F\u53D8\u5316</p><p>Flux\u548CRedux\u90FD\u4E0D\u662F\u5FC5\u987B\u548CReact\u642D\u914D\u4F7F\u7528\u7684\uFF0C\u56E0\u4E3AFlux\u548CRedux\u662F\u5B8C\u6574\u7684\u67B6\u6784\uFF0C\u5728\u5B66\u4E60React\u7684\u65F6\u5019\uFF0C\u53EA\u662F\u5C06React\u7684\u7EC4\u4EF6\u4F5C\u4E3ARedux\u4E2D\u7684\u89C6\u56FE\u5C42\u53BB\u4F7F\u7528\u4E86</p><p>Flux\u548CRedux\u533A\u522B\uFF1ARedux\u662F\u57FA\u4E8EFlux\u5B9E\u73B0\u7684\uFF0CVuex\u662FRedux\u7684\u57FA\u7840\u4E0A\u8FDB\u884C\u6539\u53D8\uFF0C\u5728Redux\u4E2D\u6211\u4EEC\u53EA\u80FD\u5B9A\u4E49\u4E00\u4E2Astore\uFF0C\u5728Flux\u4E2D\u6211\u4EEC\u53EF\u4EE5\u5B9A\u4E49\u591A\u4E2A\uFF0C\u5728Redux\u4E2D\uFF0Cstore\u548Cdispatch\u90FD\u653E\u5230\u4E86store\uFF0C\u5728redux\u4E2D\u672C\u8EAB\u5C31\u5185\u7F6EState\u5BF9\u8C61</p><p>Redux\u548CVuex\u7684\u533A\u522B\uFF1AVuex\u662F\u5728Redux\u7684\u57FA\u7840\u4E0A\u8FDB\u884C\u6539\u53D8\uFF0CVuex\u4F7F\u7528mutation\u6765\u66FF\u6362Redux\u4E2D\u7684reducer\uFF0CVuex\u6709\u81EA\u52A8\u6E32\u67D3\u7684\u529F\u80FD</p><p>\u4E00\u4E2AFlux\u5E94\u7528\u5305\u542B\u56DB\u4E2A\u90E8\u5206\uFF1A</p><p>Dispatcher\uFF0C\u5904\u7406\u52A8\u4F5C\u5206\u53D1\uFF0C\u7EF4\u6301 Store \u4E4B\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB Store\uFF0C\u8D1F\u8D23\u5B58\u50A8\u6570\u636E\u548C\u5904\u7406\u6570\u636E\u76F8\u5173\u903B\u8F91 Action\uFF0C\u89E6\u53D1 Dispatcher View\uFF0C\u89C6\u56FE\uFF0C\u8D1F\u8D23\u663E\u793A\u7528\u6237\u754C\u9762</p><p>Redux\u5206\u4E3A\u4E09\u90E8\u5206 \uFF1A</p><p>Action\uFF0C\u5C31\u662F\u4E00\u4E2A\u5355\u7EAF\u7684\u5305\u542B { type, payload } \u7684\u5BF9\u8C61\uFF0Ctype \u662F\u4E00\u4E2A\u5E38\u91CF\u7528\u6765\u6807\u793A\u52A8\u4F5C\u7C7B\u578B\uFF0Cpayload \u662F\u8FD9\u4E2A\u52A8\u4F5C\u643A\u5E26\u7684\u6570\u636E\u3002 Reducer \u7528\u6765\u5904\u7406 Action \u89E6\u53D1\u7684\u5BF9\u72B6\u6001\u6811\u7684\u66F4\u6539\u3002<br> Store \u7684\u4F5C\u7528\u5C31\u662F\u8FDE\u63A5\u4E0A\u4E24\u8005</p><p>vuex\u6838\u5FC3\uFF1A</p><p>state\uFF1A\u5B58\u653E\u591A\u4E2A\u7EC4\u4EF6\u5171\u4EAB\u7684\u72B6\u6001\uFF08\u6570\u636E\uFF09 mutations\uFF1A\u5B58\u653E\u66F4\u6539state\u91CC\u72B6\u6001\u7684\u65B9\u6CD5\uFF0C\u7528\u4E8E\u53D8\u66F4\u72B6\u6001\uFF0C\u662F\u552F\u4E00\u4E00\u4E2A\u66F4\u6539\u72B6\u6001\u7684\u5C5E\u6027 getters\uFF1A\u5C06state\u4E2D\u67D0\u4E2A\u72B6\u6001\u8FDB\u884C\u8FC7\u6EE4\uFF0C\u7136\u540E\u83B7\u53D6\u65B0\u7684\u72B6\u6001\uFF0C\u7C7B\u4F3C\u4E8Evue\u4E2D\u7684computed actions\uFF1A\u7528\u4E8E\u8C03\u7528\u4E8B\u4EF6\u52A8\u4F5C\uFF0C\u5E76\u4F20\u9012\u7ED9mutation modules\uFF1A\u4E3B\u8981\u7528\u6765\u62C6\u5206state</p><p>\u8BF4\u660EFlux\u548CRedux\u7684\u5904\u7406\u6D41\u7A0B</p><ul><li><p>Flux\uFF1A</p><ul><li>\u7528\u6237\u901A\u8FC7\u4E0E view \u4EA4\u4E92\u6216\u8005\u5916\u90E8\u4EA7\u751F\u4E00\u4E2A Action\uFF0CDispatcher \u63A5\u6536\u5230 Action \u5E76\u6267\u884C\u90A3\u4E9B\u5DF2\u7ECF\u6CE8\u518C\u7684\u56DE\u8C03\uFF0C\u5411\u6240\u6709 Store \u5206\u53D1 Action\u3002</li><li>\u901A\u8FC7\u6CE8\u518C\u7684\u56DE\u8C03\uFF0CStore \u54CD\u5E94\u90A3\u4E9B\u4E0E\u4ED6\u4EEC\u6240\u4FDD\u5B58\u7684\u72B6\u6001\u6709\u5173\u7684 Action\u3002</li><li>\u7136\u540E Store \u4F1A\u89E6\u53D1\u4E00\u4E2A change \u4E8B\u4EF6\uFF0C\u6765\u63D0\u9192 controller-views \u6570\u636E\u5DF2\u7ECF\u53D1\u751F\u4E86\u6539\u53D8\u3002</li><li>Controller-views \u76D1\u542C\u8FD9\u4E9B\u4E8B\u4EF6\u5E76\u91CD\u65B0\u4ECE Store \u4E2D\u83B7\u53D6\u6570\u636E\u3002</li><li>\u8FD9\u4E9B controller-views \u8C03\u7528\u4ED6\u4EEC\u81EA\u5DF1\u7684 setState() \u65B9\u6CD5\uFF0C\u91CD\u65B0\u6E32\u67D3\u81EA\u8EAB\u4EE5\u53CA\u7EC4\u4EF6\u6811\u4E0A\u7684\u6240\u6709\u540E\u4EE3\u7EC4\u4EF6\u3002</li></ul></li><li><p>Redux\uFF1A</p><ul><li>store\u901A\u8FC7reducer\u521B\u5EFA\u4E86\u521D\u59CB\u72B6\u6001</li><li>view\u901A\u8FC7store.getState()\u83B7\u53D6\u5230\u4E86store\u4E2D\u4FDD\u5B58\u7684state\u6302\u8F7D\u5728\u4E86\u81EA\u5DF1\u7684\u72B6\u6001\u4E0A</li><li>\u7528\u6237\u4EA7\u751F\u4E86\u64CD\u4F5C\uFF0C\u8C03\u7528\u4E86actions \u7684\u65B9\u6CD5</li><li>actions\u7684\u65B9\u6CD5\u88AB\u8C03\u7528\uFF0C\u521B\u5EFA\u4E86\u5E26\u6709\u6807\u793A\u6027\u4FE1\u606F\u7684action</li><li>actions\u5C06action\u901A\u8FC7\u8C03\u7528store.dispatch\u65B9\u6CD5\u53D1\u9001\u5230\u4E86reducer\u4E2D</li><li>reducer\u63A5\u6536\u5230action\u5E76\u6839\u636E\u6807\u8BC6\u4FE1\u606F\u5224\u65AD\u4E4B\u540E\u8FD4\u56DE\u4E86\u65B0\u7684state</li><li>store\u7684state\u88ABreducer\u66F4\u6539\u4E3A\u65B0state\u7684\u65F6\u5019\uFF0Cstore.subscribe\u65B9\u6CD5\u91CC\u7684\u56DE\u8C03\u51FD\u6570\u4F1A\u6267\u884C\uFF0C\u6B64\u65F6\u5C31\u53EF\u4EE5\u901A\u77E5view\u53BB\u91CD\u65B0\u83B7\u53D6state</li></ul></li></ul>',52),s=[l];function o(p,d){return t(),a("div",null,s)}const u=e(i,[["render",o],["__file","15.html.vue"]]);export{u as default};
