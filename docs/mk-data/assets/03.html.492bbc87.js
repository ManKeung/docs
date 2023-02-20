import{_ as l,r as t,o as d,c as r,b as n,d as e,e as i,a}from"./app.e05edff3.js";const c={},o=a(`<h1 id="css-\u9762\u8BD5\u77E5\u8BC6\u70B9\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#css-\u9762\u8BD5\u77E5\u8BC6\u70B9\u603B\u7ED3" aria-hidden="true">#</a> CSS \u9762\u8BD5\u77E5\u8BC6\u70B9\u603B\u7ED3</h1><h2 id="_1-\u4ECB\u7ECD\u4E00\u4E0B\u6807\u51C6\u7684-css-\u7684\u76D2\u5B50\u6A21\u578B-\u4F4E\u7248\u672C-ie-\u7684\u76D2\u5B50\u6A21\u578B\u6709\u4EC0\u4E48\u4E0D\u540C\u7684" tabindex="-1"><a class="header-anchor" href="#_1-\u4ECB\u7ECD\u4E00\u4E0B\u6807\u51C6\u7684-css-\u7684\u76D2\u5B50\u6A21\u578B-\u4F4E\u7248\u672C-ie-\u7684\u76D2\u5B50\u6A21\u578B\u6709\u4EC0\u4E48\u4E0D\u540C\u7684" aria-hidden="true">#</a> 1.\u4ECB\u7ECD\u4E00\u4E0B\u6807\u51C6\u7684 CSS \u7684\u76D2\u5B50\u6A21\u578B\uFF1F\u4F4E\u7248\u672C IE \u7684\u76D2\u5B50\u6A21\u578B\u6709\u4EC0\u4E48\u4E0D\u540C\u7684\uFF1F</h2><p>\u76F8\u5173\u77E5\u8BC6\u70B9\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\uFF081\uFF09\u6709\u4E24\u79CD\u76D2\u5B50\u6A21\u578B\uFF1AIE\u76D2\u6A21\u578B\uFF08border-box\uFF09\u3001W3C\u6807\u51C6\u76D2\u6A21\u578B\uFF08content-box\uFF09
\uFF082\uFF09\u76D2\u6A21\u578B\uFF1A\u5206\u4E3A\u5185\u5BB9\uFF08content\uFF09\u3001\u586B\u5145\uFF08padding\uFF09\u3001\u8FB9\u754C\uFF08margin\uFF09\u3001\u8FB9\u6846\uFF08border\uFF09\u56DB\u4E2A\u90E8\u5206

IE\u76D2\u6A21\u578B\u548CW3C\u6807\u51C6\u76D2\u6A21\u578B\u7684\u533A\u522B\uFF1A

\uFF081\uFF09W3C\u6807\u51C6\u76D2\u6A21\u578B\uFF1A\u5C5E\u6027width\uFF0Cheight\u53EA\u5305\u542B\u5185\u5BB9content\uFF0C\u4E0D\u5305\u542Bborder\u548Cpadding
\uFF082\uFF09IE\u76D2\u6A21\u578B\uFF1A\u5C5E\u6027width\uFF0Cheight\u5305\u542Bcontent\u3001border\u548Cpadding\uFF0C\u6307\u7684\u662Fcontent
+padding+border\u3002

\u5728ie8+\u6D4F\u89C8\u5668\u4E2D\u4F7F\u7528\u54EA\u4E2A\u76D2\u6A21\u578B\u53EF\u4EE5\u7531box-sizing\uFF08CSS\u65B0\u589E\u7684\u5C5E\u6027\uFF09\u63A7\u5236\uFF0C\u9ED8\u8BA4\u503C\u4E3Acontent-box\uFF0C\u5373\u6807\u51C6\u76D2\u6A21\u578B\uFF1B
\u5982\u679C\u5C06box-sizing\u8BBE\u4E3Aborder-box\u5219\u7528\u7684\u662FIE\u76D2\u6A21\u578B\u3002\u5982\u679C\u5728ie6\uFF0C7\uFF0C8\u4E2DDOCTYPE\u7F3A\u5931\u4F1A\u5C06\u76D2\u5B50\u6A21\u578B\u89E3\u91CA\u4E3AIE
\u76D2\u5B50\u6A21\u578B\u3002\u82E5\u5728\u9875\u9762\u4E2D\u58F0\u660E\u4E86DOCTYPE\u7C7B\u578B\uFF0C\u6240\u6709\u7684\u6D4F\u89C8\u5668\u90FD\u4F1A\u628A\u76D2\u6A21\u578B\u89E3\u91CA\u4E3AW3C\u76D2\u6A21\u578B\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u56DE\u7B54\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u76D2\u6A21\u578B\u90FD\u662F\u7531\u56DB\u4E2A\u90E8\u5206\u7EC4\u6210\u7684\uFF0C\u5206\u522B\u662Fmargin\u3001border\u3001padding\u548Ccontent\u3002

\u6807\u51C6\u76D2\u6A21\u578B\u548CIE\u76D2\u6A21\u578B\u7684\u533A\u522B\u5728\u4E8E\u8BBE\u7F6Ewidth\u548Cheight\u65F6\uFF0C\u6240\u5BF9\u5E94\u7684\u8303\u56F4\u4E0D\u540C\u3002\u6807\u51C6\u76D2\u6A21\u578B\u7684width\u548Cheight\u5C5E\u6027\u7684
\u8303\u56F4\u53EA\u5305\u542B\u4E86content\uFF0C\u800CIE\u76D2\u6A21\u578B\u7684width\u548Cheight\u5C5E\u6027\u7684\u8303\u56F4\u5305\u542B\u4E86border\u3001padding\u548Ccontent\u3002

\u4E00\u822C\u6765\u8BF4\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u4FEE\u6539\u5143\u7D20\u7684box-sizing\u5C5E\u6027\u6765\u6539\u53D8\u5143\u7D20\u7684\u76D2\u6A21\u578B\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),p={href:"https://juejin.im/post/59ef72f5f265da4320026f76",target:"_blank",rel:"noopener noreferrer"},u=a(`<h2 id="_2-css-\u9009\u62E9\u7B26\u6709\u54EA\u4E9B" tabindex="-1"><a class="header-anchor" href="#_2-css-\u9009\u62E9\u7B26\u6709\u54EA\u4E9B" aria-hidden="true">#</a> 2.CSS \u9009\u62E9\u7B26\u6709\u54EA\u4E9B\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\uFF081\uFF09id\u9009\u62E9\u5668\uFF08#myid\uFF09
\uFF082\uFF09\u7C7B\u9009\u62E9\u5668\uFF08.myclassname\uFF09
\uFF083\uFF09\u6807\u7B7E\u9009\u62E9\u5668\uFF08div,h1,p\uFF09
\uFF084\uFF09\u540E\u4EE3\u9009\u62E9\u5668\uFF08h1 p\uFF09
\uFF085\uFF09\u76F8\u90BB\u540E\u4EE3\u9009\u62E9\u5668\uFF08\u5B50\uFF09\u9009\u62E9\u5668\uFF08ul&gt;li\uFF09
\uFF086\uFF09\u5144\u5F1F\u9009\u62E9\u5668\uFF08li~a\uFF09
\uFF087\uFF09\u76F8\u90BB\u5144\u5F1F\u9009\u62E9\u5668\uFF08li+a\uFF09
\uFF088\uFF09\u5C5E\u6027\u9009\u62E9\u5668\uFF08a[rel=&quot;external&quot;]\uFF09
\uFF089\uFF09\u4F2A\u7C7B\u9009\u62E9\u5668\uFF08a:hover,li:nth-child\uFF09
\uFF0810\uFF09\u4F2A\u5143\u7D20\u9009\u62E9\u5668\uFF08::before\u3001::after\uFF09
\uFF0811\uFF09\u901A\u914D\u7B26\u9009\u62E9\u5668\uFF08*\uFF09
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-before-\u548C-after-\u4E2D\u53CC\u5192\u53F7\u548C\u5355\u5192\u53F7\u6709\u4EC0\u4E48\u533A\u522B-\u89E3\u91CA\u4E00\u4E0B\u8FD9-2-\u4E2A\u4F2A\u5143\u7D20\u7684\u4F5C\u7528\u3002" tabindex="-1"><a class="header-anchor" href="#_3-before-\u548C-after-\u4E2D\u53CC\u5192\u53F7\u548C\u5355\u5192\u53F7\u6709\u4EC0\u4E48\u533A\u522B-\u89E3\u91CA\u4E00\u4E0B\u8FD9-2-\u4E2A\u4F2A\u5143\u7D20\u7684\u4F5C\u7528\u3002" aria-hidden="true">#</a> 3.::before \u548C:after \u4E2D\u53CC\u5192\u53F7\u548C\u5355\u5192\u53F7\u6709\u4EC0\u4E48\u533A\u522B\uFF1F\u89E3\u91CA\u4E00\u4E0B\u8FD9 2 \u4E2A\u4F2A\u5143\u7D20\u7684\u4F5C\u7528\u3002</h2><p>\u76F8\u5173\u77E5\u8BC6\u70B9\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5355\u5192\u53F7\uFF08:\uFF09\u7528\u4E8ECSS3\u4F2A\u7C7B\uFF0C\u53CC\u5192\u53F7\uFF08::\uFF09\u7528\u4E8ECSS3\u4F2A\u5143\u7D20\u3002\uFF08\u4F2A\u5143\u7D20\u7531\u53CC\u5192\u53F7\u548C\u4F2A\u5143\u7D20\u540D\u79F0\u7EC4\u6210\uFF09
\u53CC\u5192\u53F7\u662F\u5728\u5F53\u524D\u89C4\u8303\u4E2D\u5F15\u5165\u7684\uFF0C\u7528\u4E8E\u533A\u5206\u4F2A\u7C7B\u548C\u4F2A\u5143\u7D20\u3002\u4E0D\u8FC7\u6D4F\u89C8\u5668\u9700\u8981\u540C\u65F6\u652F\u6301\u65E7\u7684\u5DF2\u7ECF\u5B58\u5728\u7684\u4F2A\u5143\u7D20\u5199\u6CD5\uFF0C
\u6BD4\u5982:first-line\u3001:first-letter\u3001:before\u3001:after\u7B49\uFF0C
\u800C\u65B0\u7684\u5728CSS3\u4E2D\u5F15\u5165\u7684\u4F2A\u5143\u7D20\u5219\u4E0D\u5141\u8BB8\u518D\u652F\u6301\u65E7\u7684\u5355\u5192\u53F7\u7684\u5199\u6CD5\u3002

\u60F3\u8BA9\u63D2\u5165\u7684\u5185\u5BB9\u51FA\u73B0\u5728\u5176\u5B83\u5185\u5BB9\u524D\uFF0C\u4F7F\u7528::before\uFF0C\u5426\u8005\uFF0C\u4F7F\u7528::after\uFF1B
\u5728\u4EE3\u7801\u987A\u5E8F\u4E0A\uFF0C::after\u751F\u6210\u7684\u5185\u5BB9\u4E5F\u6BD4::before\u751F\u6210\u7684\u5185\u5BB9\u9760\u540E\u3002
\u5982\u679C\u6309\u5806\u6808\u89C6\u89D2\uFF0C::after\u751F\u6210\u7684\u5185\u5BB9\u4F1A\u5728::before\u751F\u6210\u7684\u5185\u5BB9\u4E4B\u4E0A\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u56DE\u7B54\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5728css3\u4E2D\u4F7F\u7528\u5355\u5192\u53F7\u6765\u8868\u793A\u4F2A\u7C7B\uFF0C\u7528\u53CC\u5192\u53F7\u6765\u8868\u793A\u4F2A\u5143\u7D20\u3002\u4F46\u662F\u4E3A\u4E86\u517C\u5BB9\u5DF2\u6709\u7684\u4F2A\u5143\u7D20\u7684\u5199\u6CD5\uFF0C\u5728\u4E00\u4E9B\u6D4F\u89C8\u5668\u4E2D\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5355\u5192\u53F7
\u6765\u8868\u793A\u4F2A\u5143\u7D20\u3002

\u4F2A\u7C7B\u4E00\u822C\u5339\u914D\u7684\u662F\u5143\u7D20\u7684\u4E00\u4E9B\u7279\u6B8A\u72B6\u6001\uFF0C\u5982hover\u3001link\u7B49\uFF0C\u800C\u4F2A\u5143\u7D20\u4E00\u822C\u5339\u914D\u7684\u7279\u6B8A\u7684\u4F4D\u7F6E\uFF0C\u6BD4\u5982after\u3001before\u7B49\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u4F2A\u7C7B\u4E0E\u4F2A\u5143\u7D20\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_4-\u4F2A\u7C7B\u4E0E\u4F2A\u5143\u7D20\u7684\u533A\u522B" aria-hidden="true">#</a> 4.\u4F2A\u7C7B\u4E0E\u4F2A\u5143\u7D20\u7684\u533A\u522B</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>css\u5F15\u5165\u4F2A\u7C7B\u548C\u4F2A\u5143\u7D20\u6982\u5FF5\u662F\u4E3A\u4E86\u683C\u5F0F\u5316\u6587\u6863\u6811\u4EE5\u5916\u7684\u4FE1\u606F\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4F2A\u7C7B\u548C\u4F2A\u5143\u7D20\u662F\u7528\u6765\u4FEE\u9970\u4E0D\u5728\u6587\u6863\u6811\u4E2D\u7684\u90E8\u5206\uFF0C\u6BD4\u5982\uFF0C\u4E00\u53E5
\u8BDD\u4E2D\u7684\u7B2C\u4E00\u4E2A\u5B57\u6BCD\uFF0C\u6216\u8005\u662F\u5217\u8868\u4E2D\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20\u3002

\u4F2A\u7C7B\u7528\u4E8E\u5F53\u5DF2\u6709\u7684\u5143\u7D20\u5904\u4E8E\u67D0\u4E2A\u72B6\u6001\u65F6\uFF0C\u4E3A\u5176\u6DFB\u52A0\u5BF9\u5E94\u7684\u6837\u5F0F\uFF0C\u8FD9\u4E2A\u72B6\u6001\u662F\u6839\u636E\u7528\u6237\u884C\u4E3A\u800C\u52A8\u6001\u53D8\u5316\u7684\u3002\u6BD4\u5982\u8BF4\uFF0C\u5F53\u7528\u6237\u60AC\u505C\u5728\u6307\u5B9A\u7684
\u5143\u7D20\u65F6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7:hover\u6765\u63CF\u8FF0\u8FD9\u4E2A\u5143\u7D20\u7684\u72B6\u6001\u3002

\u4F2A\u5143\u7D20\u7528\u4E8E\u521B\u5EFA\u4E00\u4E9B\u4E0D\u5728\u6587\u6863\u6811\u4E2D\u7684\u5143\u7D20\uFF0C\u5E76\u4E3A\u5176\u6DFB\u52A0\u6837\u5F0F\u3002\u5B83\u4EEC\u5141\u8BB8\u6211\u4EEC\u4E3A\u5143\u7D20\u7684\u67D0\u4E9B\u90E8\u5206\u8BBE\u7F6E\u6837\u5F0F\u3002\u6BD4\u5982\u8BF4\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7::be
fore\u6765\u5728\u4E00\u4E2A\u5143\u7D20\u524D\u589E\u52A0\u4E00\u4E9B\u6587\u672C\uFF0C\u5E76\u4E3A\u8FD9\u4E9B\u6587\u672C\u6DFB\u52A0\u6837\u5F0F\u3002\u867D\u7136\u7528\u6237\u53EF\u4EE5\u770B\u5230\u8FD9\u4E9B\u6587\u672C\uFF0C\u4F46\u662F\u8FD9\u4E9B\u6587\u672C\u5B9E\u9645\u4E0A\u4E0D\u5728\u6587\u6863\u6811\u4E2D\u3002

\u6709\u65F6\u4F60\u4F1A\u53D1\u73B0\u4F2A\u5143\u7D20\u4F7F\u7528\u4E86\u4E24\u4E2A\u5192\u53F7\uFF08::\uFF09\u800C\u4E0D\u662F\u4E00\u4E2A\u5192\u53F7\uFF08:\uFF09\u3002\u8FD9\u662FCSS3\u7684\u4E00\u90E8\u5206\uFF0C\u5E76\u5C1D\u8BD5\u533A\u5206\u4F2A\u7C7B\u548C\u4F2A\u5143\u7D20\u3002\u5927\u591A\u6570\u6D4F\u89C8
\u5668\u90FD\u652F\u6301\u8FD9\u4E24\u4E2A\u503C\u3002\u6309\u7167\u89C4\u5219\u5E94\u8BE5\u4F7F\u7528\uFF08::\uFF09\u800C\u4E0D\u662F\uFF08:\uFF09\uFF0C\u4ECE\u800C\u533A\u5206\u4F2A\u7C7B\u548C\u4F2A\u5143\u7D20\u3002\u4F46\u662F\uFF0C\u7531\u4E8E\u5728\u65E7\u7248\u672C\u7684W3C\u89C4\u8303\u5E76\u672A\u5BF9\u6B64\u8FDB\u884C
\u7279\u522B\u533A\u5206\uFF0C\u56E0\u6B64\u76EE\u524D\u7EDD\u5927\u591A\u6570\u7684\u6D4F\u89C8\u5668\u90FD\u652F\u6301\u4F7F\u7528\u8FD9\u4E24\u79CD\u65B9\u5F0F\u8868\u793A\u4F2A\u5143\u7D20\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),v={href:"http://www.alloyteam.com/2016/05/summary-of-pseudo-classes-and-pseudo-elements/",target:"_blank",rel:"noopener noreferrer"},m=a(`<h2 id="_5-css-\u4E2D\u54EA\u4E9B\u5C5E\u6027\u53EF\u4EE5\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#_5-css-\u4E2D\u54EA\u4E9B\u5C5E\u6027\u53EF\u4EE5\u7EE7\u627F" aria-hidden="true">#</a> 5.CSS \u4E2D\u54EA\u4E9B\u5C5E\u6027\u53EF\u4EE5\u7EE7\u627F\uFF1F</h2><p>\u76F8\u5173\u8D44\u6599\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6BCF\u4E2ACSS\u5C5E\u6027\u5B9A\u4E49\u7684\u6982\u8FF0\u90FD\u6307\u51FA\u4E86\u8FD9\u4E2A\u5C5E\u6027\u662F\u9ED8\u8BA4\u7EE7\u627F\u7684\uFF0C\u8FD8\u662F\u9ED8\u8BA4\u4E0D\u7EE7\u627F\u7684\u3002\u8FD9\u51B3\u5B9A\u4E86\u5F53\u4F60\u6CA1\u6709\u4E3A\u5143\u7D20\u7684\u5C5E\u6027\u6307\u5B9A\u503C\u65F6\u8BE5\u5982\u4F55\u8BA1\u7B97
\u503C\u3002

\u5F53\u5143\u7D20\u7684\u4E00\u4E2A\u7EE7\u627F\u5C5E\u6027\u6CA1\u6709\u6307\u5B9A\u503C\u65F6\uFF0C\u5219\u53D6\u7236\u5143\u7D20\u7684\u540C\u5C5E\u6027\u7684\u8BA1\u7B97\u503C\u3002\u53EA\u6709\u6587\u6863\u6839\u5143\u7D20\u53D6\u8BE5\u5C5E\u6027\u7684\u6982\u8FF0\u4E2D\u7ED9\u5B9A\u7684\u521D\u59CB\u503C\uFF08\u8FD9\u91CC\u7684\u610F\u601D\u5E94
\u8BE5\u662F\u5728\u8BE5\u5C5E\u6027\u672C\u8EAB\u7684\u5B9A\u4E49\u4E2D\u7684\u9ED8\u8BA4\u503C\uFF09\u3002

\u5F53\u5143\u7D20\u7684\u4E00\u4E2A\u975E\u7EE7\u627F\u5C5E\u6027\uFF08\u5728Mozilla code\u91CC\u6709\u65F6\u79F0\u4E4B\u4E3Areset property\uFF09\u6CA1\u6709\u6307\u5B9A\u503C\u65F6\uFF0C\u5219\u53D6\u5C5E\u6027\u7684\u521D\u59CB\u503Cinitial v
alue\uFF08\u8BE5\u503C\u5728\u8BE5\u5C5E\u6027\u7684\u6982\u8FF0\u91CC\u88AB\u6307\u5B9A\uFF09\u3002

\u6709\u7EE7\u627F\u6027\u7684\u5C5E\u6027\uFF1A

\uFF081\uFF09\u5B57\u4F53\u7CFB\u5217\u5C5E\u6027
font\u3001font-family\u3001font-weight\u3001font-size\u3001font-style\u3001font-variant\u3001font-stretch\u3001font-size-adjust

\uFF082\uFF09\u6587\u672C\u7CFB\u5217\u5C5E\u6027
text-indent\u3001text-align\u3001text-shadow\u3001line-height\u3001word-spacing\u3001letter-spacing\u3001
text-transform\u3001direction\u3001color

\uFF083\uFF09\u8868\u683C\u5E03\u5C40\u5C5E\u6027
caption-side border-collapse empty-cells

\uFF084\uFF09\u5217\u8868\u5C5E\u6027
list-style-type\u3001list-style-image\u3001list-style-position\u3001list-style

\uFF085\uFF09\u5149\u6807\u5C5E\u6027
cursor

\uFF086\uFF09\u5143\u7D20\u53EF\u89C1\u6027
visibility

\uFF087\uFF09\u8FD8\u6709\u4E00\u4E9B\u4E0D\u5E38\u7528\u7684\uFF1Bspeak\uFF0Cpage\uFF0C\u8BBE\u7F6E\u5D4C\u5957\u5F15\u7528\u7684\u5F15\u53F7\u7C7B\u578Bquotes\u7B49\u5C5E\u6027


\u6CE8\u610F\uFF1A\u5F53\u4E00\u4E2A\u5C5E\u6027\u4E0D\u662F\u7EE7\u627F\u5C5E\u6027\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528inherit\u5173\u952E\u5B57\u6307\u5B9A\u4E00\u4E2A\u5C5E\u6027\u5E94\u4ECE\u7236\u5143\u7D20\u7EE7\u627F\u5B83\u7684\u503C\uFF0Cinherit\u5173\u952E\u5B57\u7528\u4E8E\u663E\u5F0F\u5730
\u6307\u5B9A\u7EE7\u627F\u6027\uFF0C\u53EF\u7528\u4E8E\u4EFB\u4F55\u7EE7\u627F\u6027/\u975E\u7EE7\u627F\u6027\u5C5E\u6027\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u56DE\u7B54\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6BCF\u4E00\u4E2A\u5C5E\u6027\u5728\u5B9A\u4E49\u4E2D\u90FD\u7ED9\u51FA\u4E86\u8FD9\u4E2A\u5C5E\u6027\u662F\u5426\u5177\u6709\u7EE7\u627F\u6027\uFF0C\u4E00\u4E2A\u5177\u6709\u7EE7\u627F\u6027\u7684\u5C5E\u6027\u4F1A\u5728\u6CA1\u6709\u6307\u5B9A\u503C\u7684\u65F6\u5019\uFF0C\u4F1A\u4F7F\u7528\u7236\u5143\u7D20\u7684\u540C\u5C5E\u6027\u7684\u503C
\u6765\u4F5C\u4E3A\u81EA\u5DF1\u7684\u503C\u3002

\u4E00\u822C\u5177\u6709\u7EE7\u627F\u6027\u7684\u5C5E\u6027\u6709\uFF0C\u5B57\u4F53\u76F8\u5173\u7684\u5C5E\u6027\uFF0Cfont-size\u548Cfont-weight\u7B49\u3002\u6587\u672C\u76F8\u5173\u7684\u5C5E\u6027\uFF0Ccolor\u548Ctext-align\u7B49\u3002
\u8868\u683C\u7684\u4E00\u4E9B\u5E03\u5C40\u5C5E\u6027\u3001\u5217\u8868\u5C5E\u6027\u5982list-style\u7B49\u3002\u8FD8\u6709\u5149\u6807\u5C5E\u6027cursor\u3001\u5143\u7D20\u53EF\u89C1\u6027visibility\u3002

\u5F53\u4E00\u4E2A\u5C5E\u6027\u4E0D\u662F\u7EE7\u627F\u5C5E\u6027\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u901A\u8FC7\u5C06\u5B83\u7684\u503C\u8BBE\u7F6E\u4E3Ainherit\u6765\u4F7F\u5B83\u4ECE\u7236\u5143\u7D20\u90A3\u83B7\u53D6\u540C\u540D\u7684\u5C5E\u6027\u503C\u6765\u7EE7\u627F\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),b={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/inheritance",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.jianshu.com/p/34044e3c9317",target:"_blank",rel:"noopener noreferrer"},k=a(`<h2 id="_6-css-\u4F18\u5148\u7EA7\u7B97\u6CD5\u5982\u4F55\u8BA1\u7B97" tabindex="-1"><a class="header-anchor" href="#_6-css-\u4F18\u5148\u7EA7\u7B97\u6CD5\u5982\u4F55\u8BA1\u7B97" aria-hidden="true">#</a> 6.CSS \u4F18\u5148\u7EA7\u7B97\u6CD5\u5982\u4F55\u8BA1\u7B97\uFF1F</h2><p>\u76F8\u5173\u77E5\u8BC6\u70B9\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>CSS\u7684\u4F18\u5148\u7EA7\u662F\u6839\u636E\u6837\u5F0F\u58F0\u660E\u7684\u7279\u6B8A\u6027\u503C\u6765\u5224\u65AD\u7684\u3002

\u9009\u62E9\u5668\u7684\u7279\u6B8A\u6027\u503C\u5206\u4E3A\u56DB\u4E2A\u7B49\u7EA7\uFF0C\u5982\u4E0B\uFF1A

\uFF081\uFF09\u6807\u7B7E\u5185\u9009\u62E9\u7B26x,0,0,0
\uFF082\uFF09ID\u9009\u62E9\u7B260,x,0,0
\uFF083\uFF09class\u9009\u62E9\u7B26/\u5C5E\u6027\u9009\u62E9\u7B26/\u4F2A\u7C7B\u9009\u62E9\u7B26	0,0,x,0
\uFF084\uFF09\u5143\u7D20\u548C\u4F2A\u5143\u7D20\u9009\u62E9\u7B260,0,0,x

\u8BA1\u7B97\u65B9\u6CD5\uFF1A

\uFF081\uFF09\u6BCF\u4E2A\u7B49\u7EA7\u7684\u521D\u59CB\u503C\u4E3A0
\uFF082\uFF09\u6BCF\u4E2A\u7B49\u7EA7\u7684\u53E0\u52A0\u4E3A\u9009\u62E9\u5668\u51FA\u73B0\u7684\u6B21\u6570\u76F8\u52A0
\uFF083\uFF09\u4E0D\u53EF\u8FDB\u4F4D\uFF0C\u6BD4\u59820,99,99,99
\uFF084\uFF09\u4F9D\u6B21\u8868\u793A\u4E3A\uFF1A0,0,0,0
\uFF085\uFF09\u6BCF\u4E2A\u7B49\u7EA7\u8BA1\u6570\u4E4B\u95F4\u6CA1\u5173\u8054
\uFF086\uFF09\u7B49\u7EA7\u5224\u65AD\u4ECE\u5DE6\u5411\u53F3\uFF0C\u5982\u679C\u67D0\u4E00\u4F4D\u6570\u503C\u76F8\u540C\uFF0C\u5219\u5224\u65AD\u4E0B\u4E00\u4F4D\u6570\u503C
\uFF087\uFF09\u5982\u679C\u4E24\u4E2A\u4F18\u5148\u7EA7\u76F8\u540C\uFF0C\u5219\u6700\u540E\u51FA\u73B0\u7684\u4F18\u5148\u7EA7\u9AD8\uFF0C!important\u4E5F\u9002\u7528
\uFF088\uFF09\u901A\u914D\u7B26\u9009\u62E9\u5668\u7684\u7279\u6B8A\u6027\u503C\u4E3A\uFF1A0,0,0,0
\uFF089\uFF09\u7EE7\u627F\u6837\u5F0F\u4F18\u5148\u7EA7\u6700\u4F4E\uFF0C\u901A\u914D\u7B26\u6837\u5F0F\u4F18\u5148\u7EA7\u9AD8\u4E8E\u7EE7\u627F\u6837\u5F0F
\uFF0810\uFF09!important\uFF08\u6743\u91CD\uFF09\uFF0C\u5B83\u6CA1\u6709\u7279\u6B8A\u6027\u503C\uFF0C\u4F46\u5B83\u7684\u4F18\u5148\u7EA7\u662F\u6700\u9AD8\u7684\uFF0C\u4E3A\u4E86\u65B9\u4FBF\u8BB0\u5FC6\uFF0C\u53EF\u4EE5\u8BA4\u4E3A\u5B83\u7684\u7279\u6B8A\u6027\u503C\u4E3A1,0,0,0,0\u3002

\u8BA1\u7B97\u5B9E\u4F8B\uFF1A

\uFF081\uFF09#demo a{color: orange;}/*\u7279\u6B8A\u6027\u503C\uFF1A0,1,0,1*/
\uFF082\uFF09div#demo a{color: red;}/*\u7279\u6B8A\u6027\u503C\uFF1A0,1,0,2*/


\u6CE8\u610F\uFF1A
\uFF081\uFF09\u6837\u5F0F\u5E94\u7528\u65F6\uFF0Ccss\u4F1A\u5148\u67E5\u770B\u89C4\u5219\u7684\u6743\u91CD\uFF08!important\uFF09\uFF0C\u52A0\u4E86\u6743\u91CD\u7684\u4F18\u5148\u7EA7\u6700\u9AD8\uFF0C\u5F53\u6743\u91CD\u76F8\u540C\u7684\u65F6\u5019\uFF0C\u4F1A\u6BD4\u8F83\u89C4\u5219\u7684\u7279\u6B8A\u6027\u3002

\uFF082\uFF09\u7279\u6B8A\u6027\u503C\u8D8A\u5927\u7684\u58F0\u660E\u4F18\u5148\u7EA7\u8D8A\u9AD8\u3002

\uFF083\uFF09\u76F8\u540C\u7279\u6B8A\u6027\u503C\u7684\u58F0\u660E\uFF0C\u6839\u636E\u6837\u5F0F\u5F15\u5165\u7684\u987A\u5E8F\uFF0C\u540E\u58F0\u660E\u7684\u89C4\u5219\u4F18\u5148\u7EA7\u9AD8\uFF08\u8DDD\u79BB\u5143\u7D20\u51FA\u73B0\u6700\u8FD1\u7684\uFF09

 (4) \u90E8\u5206\u6D4F\u89C8\u5668\u7531\u4E8E\u5B57\u8282\u6EA2\u51FA\u95EE\u9898\u51FA\u73B0\u7684\u8FDB\u4F4D\u8868\u73B0\u4E0D\u505A\u8003\u8651
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u56DE\u7B54\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5224\u65AD\u4F18\u5148\u7EA7\u65F6\uFF0C\u9996\u5148\u6211\u4EEC\u4F1A\u5224\u65AD\u4E00\u6761\u5C5E\u6027\u58F0\u660E\u662F\u5426\u6709\u6743\u91CD\uFF0C\u4E5F\u5C31\u662F\u662F\u5426\u5728\u58F0\u660E\u540E\u9762\u52A0\u4E0A\u4E86!important\u3002\u4E00\u6761\u58F0\u660E\u5982\u679C\u52A0\u4E0A\u4E86\u6743\u91CD\uFF0C
\u90A3\u4E48\u5B83\u7684\u4F18\u5148\u7EA7\u5C31\u662F\u6700\u9AD8\u7684\uFF0C\u524D\u63D0\u662F\u5B83\u4E4B\u540E\u4E0D\u518D\u51FA\u73B0\u76F8\u540C\u6743\u91CD\u7684\u58F0\u660E\u3002\u5982\u679C\u6743\u91CD\u76F8\u540C\uFF0C\u6211\u4EEC\u5219\u9700\u8981\u53BB\u6BD4\u8F83\u5339\u914D\u89C4\u5219\u7684\u7279\u6B8A\u6027\u3002

\u4E00\u6761\u5339\u914D\u89C4\u5219\u4E00\u822C\u7531\u591A\u4E2A\u9009\u62E9\u5668\u7EC4\u6210\uFF0C\u4E00\u6761\u89C4\u5219\u7684\u7279\u6B8A\u6027\u7531\u7EC4\u6210\u5B83\u7684\u9009\u62E9\u5668\u7684\u7279\u6B8A\u6027\u7D2F\u52A0\u800C\u6210\u3002\u9009\u62E9\u5668\u7684\u7279\u6B8A\u6027\u53EF\u4EE5\u5206\u4E3A\u56DB\u4E2A\u7B49\u7EA7\uFF0C
\u7B2C\u4E00\u4E2A\u7B49\u7EA7\u662F\u884C\u5185\u6837\u5F0F\uFF0C\u4E3A1000\uFF0C\u7B2C\u4E8C\u4E2A\u7B49\u7EA7\u662Fid\u9009\u62E9\u5668\uFF0C\u4E3A0100\uFF0C\u7B2C\u4E09\u4E2A\u7B49\u7EA7\u662F\u7C7B\u9009\u62E9\u5668\u3001\u4F2A\u7C7B\u9009\u62E9\u5668\u548C\u5C5E\u6027\u9009\u62E9\u5668\uFF0C\u4E3A0010\uFF0C
\u7B2C\u56DB\u4E2A\u7B49\u7EA7\u662F\u5143\u7D20\u9009\u62E9\u5668\u548C\u4F2A\u5143\u7D20\u9009\u62E9\u5668\uFF0C\u4E3A0001\u3002\u89C4\u5219\u4E2D\u6BCF\u51FA\u73B0\u4E00\u4E2A\u9009\u62E9\u5668\uFF0C\u5C31\u5C06\u5B83\u7684\u7279\u6B8A\u6027\u8FDB\u884C\u53E0\u52A0\uFF0C\u8FD9\u4E2A\u53E0\u52A0\u53EA\u9650\u4E8E\u5BF9\u5E94\u7684\u7B49
\u7EA7\u7684\u53E0\u52A0\uFF0C\u4E0D\u4F1A\u4EA7\u751F\u8FDB\u4F4D\u3002\u9009\u62E9\u5668\u7279\u6B8A\u6027\u503C\u7684\u6BD4\u8F83\u662F\u4ECE\u5DE6\u5411\u53F3\u6392\u5E8F\u7684\uFF0C\u4E5F\u5C31\u662F\u8BF4\u4EE51\u5F00\u5934\u7684\u7279\u6B8A\u6027\u503C\u6BD4\u6240\u6709\u4EE50\u5F00\u5934\u7684\u7279\u6B8A\u6027\u503C\u8981\u5927\u3002
\u6BD4\u5982\u8BF4\u7279\u6B8A\u6027\u503C\u4E3A1000\u7684\u7684\u89C4\u5219\u4F18\u5148\u7EA7\u5C31\u8981\u6BD4\u7279\u6B8A\u6027\u503C\u4E3A0999\u7684\u89C4\u5219\u9AD8\u3002\u5982\u679C\u4E24\u4E2A\u89C4\u5219\u7684\u7279\u6B8A\u6027\u503C\u76F8\u7B49\u7684\u65F6\u5019\uFF0C\u90A3\u4E48\u5C31\u4F1A\u6839\u636E\u5B83\u4EEC\u5F15
\u5165\u7684\u987A\u5E8F\uFF0C\u540E\u51FA\u73B0\u7684\u89C4\u5219\u7684\u4F18\u5148\u7EA7\u6700\u9AD8\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),g={href:"https://www.jianshu.com/p/1c4e639ff7d5",target:"_blank",rel:"noopener noreferrer"},x={href:"http://www.cnblogs.com/wangmeijian/p/4207433.html",target:"_blank",rel:"noopener noreferrer"},f={href:"https://www.zhangxinxu.com/wordpress/2012/08/256-class-selector-beat-id-selector/",target:"_blank",rel:"noopener noreferrer"},_=a(`<h2 id="_7-\u5173\u4E8E\u4F2A\u7C7B-lvha-\u7684\u89E3\u91CA" tabindex="-1"><a class="header-anchor" href="#_7-\u5173\u4E8E\u4F2A\u7C7B-lvha-\u7684\u89E3\u91CA" aria-hidden="true">#</a> 7.\u5173\u4E8E\u4F2A\u7C7B LVHA \u7684\u89E3\u91CA?</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>a\u6807\u7B7E\u6709\u56DB\u79CD\u72B6\u6001\uFF1A\u94FE\u63A5\u8BBF\u95EE\u524D\u3001\u94FE\u63A5\u8BBF\u95EE\u540E\u3001\u9F20\u6807\u6ED1\u8FC7\u3001\u6FC0\u6D3B\uFF0C\u5206\u522B\u5BF9\u5E94\u56DB\u79CD\u4F2A\u7C7B:link\u3001:visited\u3001:hover\u3001:active\uFF1B

\u5F53\u94FE\u63A5\u672A\u8BBF\u95EE\u8FC7\u65F6\uFF1A

\uFF081\uFF09\u5F53\u9F20\u6807\u6ED1\u8FC7a\u94FE\u63A5\u65F6\uFF0C\u6EE1\u8DB3:link\u548C:hover\u4E24\u79CD\u72B6\u6001\uFF0C\u8981\u6539\u53D8a\u6807\u7B7E\u7684\u989C\u8272\uFF0C\u5C31\u5FC5\u987B\u5C06:hover\u4F2A\u7C7B\u5728:link\u4F2A
\u7C7B\u540E\u9762\u58F0\u660E\uFF1B
\uFF082\uFF09\u5F53\u9F20\u6807\u70B9\u51FB\u6FC0\u6D3Ba\u94FE\u63A5\u65F6\uFF0C\u540C\u65F6\u6EE1\u8DB3:link\u3001:hover\u3001:active\u4E09\u79CD\u72B6\u6001\uFF0C\u8981\u663E\u793Aa\u6807\u7B7E\u6FC0\u6D3B\u65F6\u7684\u6837\u5F0F\uFF08:active\uFF09\uFF0C
\u5FC5\u987B\u5C06:active\u58F0\u660E\u653E\u5230:link\u548C:hover\u4E4B\u540E\u3002\u56E0\u6B64\u5F97\u51FALVHA\u8FD9\u4E2A\u987A\u5E8F\u3002

\u5F53\u94FE\u63A5\u8BBF\u95EE\u8FC7\u65F6\uFF0C\u60C5\u51B5\u57FA\u672C\u540C\u4E0A\uFF0C\u53EA\u4E0D\u8FC7\u9700\u8981\u5C06:link\u6362\u6210:visited\u3002

\u8FD9\u4E2A\u987A\u5E8F\u80FD\u4E0D\u80FD\u53D8\uFF1F\u53EF\u4EE5\uFF0C\u4F46\u4E5F\u53EA\u6709:link\u548C:visited\u53EF\u4EE5\u4EA4\u6362\u4F4D\u7F6E\uFF0C\u56E0\u4E3A\u4E00\u4E2A\u94FE\u63A5\u8981\u4E48\u8BBF\u95EE\u8FC7\u8981\u4E48\u6CA1\u8BBF\u95EE\u8FC7\uFF0C\u4E0D\u53EF\u80FD\u540C\u65F6\u6EE1\u8DB3\uFF0C
\u4E5F\u5C31\u4E0D\u5B58\u5728\u8986\u76D6\u7684\u95EE\u9898\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-css3-\u65B0\u589E\u4F2A\u7C7B\u6709\u90A3\u4E9B" tabindex="-1"><a class="header-anchor" href="#_8-css3-\u65B0\u589E\u4F2A\u7C7B\u6709\u90A3\u4E9B" aria-hidden="true">#</a> 8.CSS3 \u65B0\u589E\u4F2A\u7C7B\u6709\u90A3\u4E9B\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\uFF081\uFF09elem:nth-child(n)\u9009\u4E2D\u7236\u5143\u7D20\u4E0B\u7684\u7B2Cn\u4E2A\u5B50\u5143\u7D20\uFF0C\u5E76\u4E14\u8FD9\u4E2A\u5B50\u5143\u7D20\u7684\u6807\u7B7E\u540D\u4E3Aelem\uFF0Cn\u53EF\u4EE5\u63A5\u53D7\u5177\u4F53\u7684\u6570
\u503C\uFF0C\u4E5F\u53EF\u4EE5\u63A5\u53D7\u51FD\u6570\u3002

\uFF082\uFF09elem:nth-last-child(n)\u4F5C\u7528\u540C\u4E0A\uFF0C\u4E0D\u8FC7\u662F\u4ECE\u540E\u5F00\u59CB\u67E5\u627E\u3002

\uFF083\uFF09elem:last-child\u9009\u4E2D\u6700\u540E\u4E00\u4E2A\u5B50\u5143\u7D20\u3002

\uFF084\uFF09elem:only-child\u5982\u679Celem\u662F\u7236\u5143\u7D20\u4E0B\u552F\u4E00\u7684\u5B50\u5143\u7D20\uFF0C\u5219\u9009\u4E2D\u4E4B\u3002

\uFF085\uFF09elem:nth-of-type(n)\u9009\u4E2D\u7236\u5143\u7D20\u4E0B\u7B2Cn\u4E2Aelem\u7C7B\u578B\u5143\u7D20\uFF0Cn\u53EF\u4EE5\u63A5\u53D7\u5177\u4F53\u7684\u6570\u503C\uFF0C\u4E5F\u53EF\u4EE5\u63A5\u53D7\u51FD\u6570\u3002

\uFF086\uFF09elem:first-of-type\u9009\u4E2D\u7236\u5143\u7D20\u4E0B\u7B2C\u4E00\u4E2Aelem\u7C7B\u578B\u5143\u7D20\u3002

\uFF087\uFF09elem:last-of-type\u9009\u4E2D\u7236\u5143\u7D20\u4E0B\u6700\u540E\u4E00\u4E2Aelem\u7C7B\u578B\u5143\u7D20\u3002

\uFF088\uFF09elem:only-of-type\u5982\u679C\u7236\u5143\u7D20\u4E0B\u7684\u5B50\u5143\u7D20\u53EA\u6709\u4E00\u4E2Aelem\u7C7B\u578B\u5143\u7D20\uFF0C\u5219\u9009\u4E2D\u8BE5\u5143\u7D20\u3002

\uFF089\uFF09elem:empty\u9009\u4E2D\u4E0D\u5305\u542B\u5B50\u5143\u7D20\u548C\u5185\u5BB9\u7684elem\u7C7B\u578B\u5143\u7D20\u3002

\uFF0810\uFF09elem:target\u9009\u62E9\u5F53\u524D\u6D3B\u52A8\u7684elem\u5143\u7D20\u3002

\uFF0811\uFF09:not(elem)\u9009\u62E9\u975Eelem\u5143\u7D20\u7684\u6BCF\u4E2A\u5143\u7D20\u3002

\uFF0812\uFF09:enabled \u63A7\u5236\u8868\u5355\u63A7\u4EF6\u7684\u7981\u7528\u72B6\u6001\u3002

\uFF0813\uFF09:disabled	\u63A7\u5236\u8868\u5355\u63A7\u4EF6\u7684\u7981\u7528\u72B6\u6001\u3002

(14):checked\u5355\u9009\u6846\u6216\u590D\u9009\u6846\u88AB\u9009\u4E2D\u3002

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),y={href:"https://www.cnblogs.com/SKLthegoodman/p/css3.html",target:"_blank",rel:"noopener noreferrer"},w={href:"https://blog.csdn.net/zhouziyu2011/article/details/58605705",target:"_blank",rel:"noopener noreferrer"},S=a(`<h2 id="_9-\u5982\u4F55\u5C45\u4E2D-div" tabindex="-1"><a class="header-anchor" href="#_9-\u5982\u4F55\u5C45\u4E2D-div" aria-hidden="true">#</a> 9.\u5982\u4F55\u5C45\u4E2D div\uFF1F</h2><p>-\u6C34\u5E73\u5C45\u4E2D\uFF1A\u7ED9 div \u8BBE\u7F6E\u4E00\u4E2A\u5BBD\u5EA6\uFF0C\u7136\u540E\u6DFB\u52A0 margin:0 auto \u5C5E\u6027</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>-\u6C34\u5E73\u5C45\u4E2D\uFF0C\u5229\u7528 text-align:center \u5B9E\u73B0</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>-\u8BA9\u7EDD\u5BF9\u5B9A\u4F4D\u7684 div \u5C45\u4E2D</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span> <span class="token comment">/*\u65B9\u4FBF\u770B\u6548\u679C*/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>-\u6C34\u5E73\u5782\u76F4\u5C45\u4E2D\u4E00</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/*\u786E\u5B9A\u5BB9\u5668\u7684\u5BBD\u9AD8\u5BBD500\u9AD8300\u7684\u5C42\u8BBE\u7F6E\u5C42\u7684\u5916\u8FB9\u8DDDdiv{*/</span>
<span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span><span class="token comment">/*\u7EDD\u5BF9\u5B9A\u4F4D*/</span>
<span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
<span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
<span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
<span class="token property">margin</span><span class="token punctuation">:</span> -150px 0 0 -250px<span class="token punctuation">;</span><span class="token comment">/*\u5916\u8FB9\u8DDD\u4E3A\u81EA\u8EAB\u5BBD\u9AD8\u7684\u4E00\u534A*/</span>
<span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span><span class="token comment">/*\u65B9\u4FBF\u770B\u6548\u679C*/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>-\u6C34\u5E73\u5782\u76F4\u5C45\u4E2D\u4E8C</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/*\u672A\u77E5\u5BB9\u5668\u7684\u5BBD\u9AD8\uFF0C\u5229\u7528\`transform\`\u5C5E\u6027*/</span>
<span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span> <span class="token comment">/*\u76F8\u5BF9\u5B9A\u4F4D\u6216\u7EDD\u5BF9\u5B9A\u4F4D\u5747\u53EF*/</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span> <span class="token comment">/*\u65B9\u4FBF\u770B\u6548\u679C*/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>-\u6C34\u5E73\u5782\u76F4\u5C45\u4E2D\u4E09</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/*\u5229\u7528flex\u5E03\u5C40\u5B9E\u9645\u4F7F\u7528\u65F6\u5E94\u8003\u8651\u517C\u5BB9\u6027*/</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span> <span class="token comment">/*\u5782\u76F4\u5C45\u4E2D*/</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span> <span class="token comment">/*\u6C34\u5E73\u5C45\u4E2D*/</span>
<span class="token punctuation">}</span>
<span class="token selector">.containerdiv</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span> <span class="token comment">/*\u65B9\u4FBF\u770B\u6548\u679C*/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>-\u6C34\u5E73\u5782\u76F4\u5C45\u4E2D\u56DB</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/*\u5229\u7528text-align:center\u548Cvertical-align:middle\u5C5E\u6027*/</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.container::after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
  <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u56DE\u7B54\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4E00\u822C\u5E38\u89C1\u7684\u51E0\u79CD\u5C45\u4E2D\u7684\u65B9\u6CD5\u6709\uFF1A

\u5BF9\u4E8E\u5BBD\u9AD8\u56FA\u5B9A\u7684\u5143\u7D20

\uFF081\uFF09\u6211\u4EEC\u53EF\u4EE5\u5229\u7528margin:0 auto\u6765\u5B9E\u73B0\u5143\u7D20\u7684\u6C34\u5E73\u5C45\u4E2D\u3002

\uFF082\uFF09\u5229\u7528\u7EDD\u5BF9\u5B9A\u4F4D\uFF0C\u8BBE\u7F6E\u56DB\u4E2A\u65B9\u5411\u7684\u503C\u90FD\u4E3A0\uFF0C\u5E76\u5C06margin\u8BBE\u7F6E\u4E3Aauto\uFF0C\u7531\u4E8E\u5BBD\u9AD8\u56FA\u5B9A\uFF0C\u56E0\u6B64\u5BF9\u5E94\u65B9\u5411\u5B9E\u73B0\u5E73\u5206\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u6C34
\u5E73\u548C\u5782\u76F4\u65B9\u5411\u4E0A\u7684\u5C45\u4E2D\u3002

\uFF083\uFF09\u5229\u7528\u7EDD\u5BF9\u5B9A\u4F4D\uFF0C\u5148\u5C06\u5143\u7D20\u7684\u5DE6\u4E0A\u89D2\u901A\u8FC7top:50%\u548Cleft:50%\u5B9A\u4F4D\u5230\u9875\u9762\u7684\u4E2D\u5FC3\uFF0C\u7136\u540E\u518D\u901A\u8FC7margin\u8D1F\u503C\u6765\u8C03\u6574\u5143\u7D20
\u7684\u4E2D\u5FC3\u70B9\u5230\u9875\u9762\u7684\u4E2D\u5FC3\u3002

\uFF084\uFF09\u5229\u7528\u7EDD\u5BF9\u5B9A\u4F4D\uFF0C\u5148\u5C06\u5143\u7D20\u7684\u5DE6\u4E0A\u89D2\u901A\u8FC7top:50%\u548Cleft:50%\u5B9A\u4F4D\u5230\u9875\u9762\u7684\u4E2D\u5FC3\uFF0C\u7136\u540E\u518D\u901A\u8FC7translate\u6765\u8C03\u6574\u5143\u7D20
\u7684\u4E2D\u5FC3\u70B9\u5230\u9875\u9762\u7684\u4E2D\u5FC3\u3002

\uFF085\uFF09\u4F7F\u7528flex\u5E03\u5C40\uFF0C\u901A\u8FC7align-items:center\u548Cjustify-content:center\u8BBE\u7F6E\u5BB9\u5668\u7684\u5782\u76F4\u548C\u6C34\u5E73\u65B9\u5411\u4E0A\u4E3A\u5C45\u4E2D\u5BF9
\u9F50\uFF0C\u7136\u540E\u5B83\u7684\u5B50\u5143\u7D20\u4E5F\u53EF\u4EE5\u5B9E\u73B0\u5782\u76F4\u548C\u6C34\u5E73\u7684\u5C45\u4E2D\u3002

\u5BF9\u4E8E\u5BBD\u9AD8\u4E0D\u5B9A\u7684\u5143\u7D20\uFF0C\u4E0A\u9762\u7684\u540E\u9762\u4E24\u79CD\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u5143\u7D20\u7684\u5782\u76F4\u548C\u6C34\u5E73\u7684\u5C45\u4E2D\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-display-\u6709\u54EA\u4E9B\u503C-\u8BF4\u660E\u4ED6\u4EEC\u7684\u4F5C\u7528\u3002" tabindex="-1"><a class="header-anchor" href="#_10-display-\u6709\u54EA\u4E9B\u503C-\u8BF4\u660E\u4ED6\u4EEC\u7684\u4F5C\u7528\u3002" aria-hidden="true">#</a> 10.display \u6709\u54EA\u4E9B\u503C\uFF1F\u8BF4\u660E\u4ED6\u4EEC\u7684\u4F5C\u7528\u3002</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>block	\u5757\u7C7B\u578B\u3002\u9ED8\u8BA4\u5BBD\u5EA6\u4E3A\u7236\u5143\u7D20\u5BBD\u5EA6\uFF0C\u53EF\u8BBE\u7F6E\u5BBD\u9AD8\uFF0C\u6362\u884C\u663E\u793A\u3002
none	\u5143\u7D20\u4E0D\u663E\u793A\uFF0C\u5E76\u4ECE\u6587\u6863\u6D41\u4E2D\u79FB\u9664\u3002
inline	\u884C\u5185\u5143\u7D20\u7C7B\u578B\u3002\u9ED8\u8BA4\u5BBD\u5EA6\u4E3A\u5185\u5BB9\u5BBD\u5EA6\uFF0C\u4E0D\u53EF\u8BBE\u7F6E\u5BBD\u9AD8\uFF0C\u540C\u884C\u663E\u793A\u3002
inline-block \u9ED8\u8BA4\u5BBD\u5EA6\u4E3A\u5185\u5BB9\u5BBD\u5EA6\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u5BBD\u9AD8\uFF0C\u540C\u884C\u663E\u793A\u3002
list-item	\u50CF\u5757\u7C7B\u578B\u5143\u7D20\u4E00\u6837\u663E\u793A\uFF0C\u5E76\u6DFB\u52A0\u6837\u5F0F\u5217\u8868\u6807\u8BB0\u3002
table	\u6B64\u5143\u7D20\u4F1A\u4F5C\u4E3A\u5757\u7EA7\u8868\u683C\u6765\u663E\u793A\u3002
inherit	\u89C4\u5B9A\u5E94\u8BE5\u4ECE\u7236\u5143\u7D20\u7EE7\u627Fdisplay\u5C5E\u6027\u7684\u503C\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),C={href:"http://www.w3school.com.cn/css/pr_class_display.asp",target:"_blank",rel:"noopener noreferrer"},E=a(`<h2 id="_11-position-\u7684\u503C-relative-\u548C-absolute-\u5B9A\u4F4D\u539F\u70B9\u662F" tabindex="-1"><a class="header-anchor" href="#_11-position-\u7684\u503C-relative-\u548C-absolute-\u5B9A\u4F4D\u539F\u70B9\u662F" aria-hidden="true">#</a> 11.position \u7684\u503C relative \u548C absolute \u5B9A\u4F4D\u539F\u70B9\u662F\uFF1F</h2><p>\u76F8\u5173\u77E5\u8BC6\u70B9\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>absolute
\u751F\u6210\u7EDD\u5BF9\u5B9A\u4F4D\u7684\u5143\u7D20\uFF0C\u76F8\u5BF9\u4E8E\u503C\u4E0D\u4E3Astatic\u7684\u7B2C\u4E00\u4E2A\u7236\u5143\u7D20\u7684padding box\u8FDB\u884C\u5B9A\u4F4D\uFF0C\u4E5F\u53EF\u4EE5\u7406\u89E3\u4E3A\u79BB\u81EA\u5DF1\u8FD9\u4E00\u7EA7\u5143\u7D20\u6700\u8FD1\u7684
\u4E00\u7EA7position\u8BBE\u7F6E\u4E3Aabsolute\u6216\u8005relative\u7684\u7236\u5143\u7D20\u7684padding box\u7684\u5DE6\u4E0A\u89D2\u4E3A\u539F\u70B9\u7684\u3002

fixed\uFF08\u8001IE\u4E0D\u652F\u6301\uFF09
\u751F\u6210\u7EDD\u5BF9\u5B9A\u4F4D\u7684\u5143\u7D20\uFF0C\u76F8\u5BF9\u4E8E\u6D4F\u89C8\u5668\u7A97\u53E3\u8FDB\u884C\u5B9A\u4F4D\u3002

relative
\u751F\u6210\u76F8\u5BF9\u5B9A\u4F4D\u7684\u5143\u7D20\uFF0C\u76F8\u5BF9\u4E8E\u5176\u5143\u7D20\u672C\u8EAB\u6240\u5728\u6B63\u5E38\u4F4D\u7F6E\u8FDB\u884C\u5B9A\u4F4D\u3002

static
\u9ED8\u8BA4\u503C\u3002\u6CA1\u6709\u5B9A\u4F4D\uFF0C\u5143\u7D20\u51FA\u73B0\u5728\u6B63\u5E38\u7684\u6D41\u4E2D\uFF08\u5FFD\u7565top,bottom,left,right,z-index\u58F0\u660E\uFF09\u3002

inherit
\u89C4\u5B9A\u4ECE\u7236\u5143\u7D20\u7EE7\u627Fposition\u5C5E\u6027\u7684\u503C\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u56DE\u7B54\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>relative\u5B9A\u4F4D\u7684\u5143\u7D20\uFF0C\u662F\u76F8\u5BF9\u4E8E\u5143\u7D20\u672C\u8EAB\u7684\u6B63\u5E38\u4F4D\u7F6E\u6765\u8FDB\u884C\u5B9A\u4F4D\u7684\u3002

absolute\u5B9A\u4F4D\u7684\u5143\u7D20\uFF0C\u662F\u76F8\u5BF9\u4E8E\u5B83\u7684\u7B2C\u4E00\u4E2Aposition\u503C\u4E0D\u4E3Astatic\u7684\u7956\u5148\u5143\u7D20\u7684padding box\u6765\u8FDB\u884C\u5B9A\u4F4D\u7684\u3002\u8FD9\u53E5\u8BDD
\u6211\u4EEC\u53EF\u4EE5\u8FD9\u6837\u6765\u7406\u89E3\uFF0C\u6211\u4EEC\u9996\u5148\u9700\u8981\u627E\u5230\u7EDD\u5BF9\u5B9A\u4F4D\u5143\u7D20\u7684\u4E00\u4E2Aposition\u7684\u503C\u4E0D\u4E3Astatic\u7684\u7956\u5148\u5143\u7D20\uFF0C\u7136\u540E\u76F8\u5BF9\u4E8E\u8FD9\u4E2A\u7956\u5148\u5143
\u7D20\u7684padding box\u6765\u5B9A\u4F4D\uFF0C\u4E5F\u5C31\u662F\u8BF4\u5728\u8BA1\u7B97\u5B9A\u4F4D\u8DDD\u79BB\u7684\u65F6\u5019\uFF0Cpadding\u7684\u503C\u4E5F\u8981\u7B97\u8FDB\u53BB\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_12-css3-\u6709\u54EA\u4E9B\u65B0\u7279\u6027-\u6839\u636E\u9879\u76EE\u56DE\u7B54" tabindex="-1"><a class="header-anchor" href="#_12-css3-\u6709\u54EA\u4E9B\u65B0\u7279\u6027-\u6839\u636E\u9879\u76EE\u56DE\u7B54" aria-hidden="true">#</a> 12.CSS3 \u6709\u54EA\u4E9B\u65B0\u7279\u6027\uFF1F\uFF08\u6839\u636E\u9879\u76EE\u56DE\u7B54\uFF09</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u65B0\u589E\u5404\u79CDCSS\u9009\u62E9\u5668	\uFF08:not(.input)\uFF1A\u6240\u6709class\u4E0D\u662F\u201Cinput\u201D\u7684\u8282\u70B9\uFF09
\u5706\u89D2		\uFF08border-radius:8px\uFF09
\u591A\u5217\u5E03\u5C40	\uFF08multi-column layout\uFF09
\u9634\u5F71\u548C\u53CD\u5C04	\uFF08Shadow\\Reflect\uFF09
\u6587\u5B57\u7279\u6548		\uFF08text-shadow\uFF09
\u6587\u5B57\u6E32\u67D3		\uFF08Text-decoration\uFF09
\u7EBF\u6027\u6E10\u53D8		\uFF08gradient\uFF09
\u65CB\u8F6C			\uFF08transform\uFF09
\u7F29\u653E\uFF0C\u5B9A\u4F4D\uFF0C\u503E\u659C\uFF0C\u52A8\u753B\uFF0C\u591A\u80CC\u666F
\u4F8B\u5982\uFF1Atransform:\\scale(0.85,0.90)\\translate(0px,-30px)\\skew(-9deg,0deg)\\Animation:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_13-\u8BF7\u89E3\u91CA\u4E00\u4E0B-css3-\u7684-flex-box-\u5F39\u6027\u76D2\u5E03\u5C40\u6A21\u578B-\u4EE5\u53CA\u9002\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#_13-\u8BF7\u89E3\u91CA\u4E00\u4E0B-css3-\u7684-flex-box-\u5F39\u6027\u76D2\u5E03\u5C40\u6A21\u578B-\u4EE5\u53CA\u9002\u7528\u573A\u666F" aria-hidden="true">#</a> 13.\u8BF7\u89E3\u91CA\u4E00\u4E0B CSS3 \u7684 Flex box\uFF08\u5F39\u6027\u76D2\u5E03\u5C40\u6A21\u578B\uFF09\uFF0C\u4EE5\u53CA\u9002\u7528\u573A\u666F\uFF1F</h2><p>\u76F8\u5173\u77E5\u8BC6\u70B9\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Flex\u662FFlexibleBox\u7684\u7F29\u5199\uFF0C\u610F\u4E3A&quot;\u5F39\u6027\u5E03\u5C40&quot;\uFF0C\u7528\u6765\u4E3A\u76D2\u72B6\u6A21\u578B\u63D0\u4F9B\u6700\u5927\u7684\u7075\u6D3B\u6027\u3002

\u4EFB\u4F55\u4E00\u4E2A\u5BB9\u5668\u90FD\u53EF\u4EE5\u6307\u5B9A\u4E3AFlex\u5E03\u5C40\u3002\u884C\u5185\u5143\u7D20\u4E5F\u53EF\u4EE5\u4F7F\u7528Flex\u5E03\u5C40\u3002\u6CE8\u610F\uFF0C\u8BBE\u4E3AFlex\u5E03\u5C40\u4EE5\u540E\uFF0C\u5B50\u5143\u7D20\u7684float\u3001cl
ear\u548Cvertical-align\u5C5E\u6027\u5C06\u5931\u6548\u3002

\u91C7\u7528Flex\u5E03\u5C40\u7684\u5143\u7D20\uFF0C\u79F0\u4E3AFlex\u5BB9\u5668\uFF08flex container\uFF09\uFF0C\u7B80\u79F0&quot;\u5BB9\u5668&quot;\u3002\u5B83\u7684\u6240\u6709\u5B50\u5143\u7D20\u81EA\u52A8\u6210\u4E3A\u5BB9\u5668\u6210\u5458\uFF0C\u79F0\u4E3AFlex
\u9879\u76EE\uFF08flex item\uFF09\uFF0C\u7B80\u79F0&quot;\u9879\u76EE&quot;\u3002

\u5BB9\u5668\u9ED8\u8BA4\u5B58\u5728\u4E24\u6839\u8F74\uFF1A\u6C34\u5E73\u7684\u4E3B\u8F74\uFF08main axis\uFF09\u548C\u5782\u76F4\u7684\u4EA4\u53C9\u8F74\uFF08cross axis\uFF09\uFF0C\u9879\u76EE\u9ED8\u8BA4\u6CBF\u4E3B\u8F74\u6392\u5217\u3002


\u4EE5\u4E0B6\u4E2A\u5C5E\u6027\u8BBE\u7F6E\u5728\u5BB9\u5668\u4E0A\u3002

flex-direction\u5C5E\u6027\u51B3\u5B9A\u4E3B\u8F74\u7684\u65B9\u5411\uFF08\u5373\u9879\u76EE\u7684\u6392\u5217\u65B9\u5411\uFF09\u3002

flex-wrap\u5C5E\u6027\u5B9A\u4E49\uFF0C\u5982\u679C\u4E00\u6761\u8F74\u7EBF\u6392\u4E0D\u4E0B\uFF0C\u5982\u4F55\u6362\u884C\u3002

flex-flow\u5C5E\u6027\u662Fflex-direction\u5C5E\u6027\u548Cflex-wrap\u5C5E\u6027\u7684\u7B80\u5199\u5F62\u5F0F\uFF0C\u9ED8\u8BA4\u503C\u4E3Arow nowrap\u3002

justify-content\u5C5E\u6027\u5B9A\u4E49\u4E86\u9879\u76EE\u5728\u4E3B\u8F74\u4E0A\u7684\u5BF9\u9F50\u65B9\u5F0F\u3002

align-items\u5C5E\u6027\u5B9A\u4E49\u9879\u76EE\u5728\u4EA4\u53C9\u8F74\u4E0A\u5982\u4F55\u5BF9\u9F50\u3002

align-content\u5C5E\u6027\u5B9A\u4E49\u4E86\u591A\u6839\u8F74\u7EBF\u7684\u5BF9\u9F50\u65B9\u5F0F\u3002\u5982\u679C\u9879\u76EE\u53EA\u6709\u4E00\u6839\u8F74\u7EBF\uFF0C\u8BE5\u5C5E\u6027\u4E0D\u8D77\u4F5C\u7528\u3002


\u4EE5\u4E0B6\u4E2A\u5C5E\u6027\u8BBE\u7F6E\u5728\u9879\u76EE\u4E0A\u3002

order\u5C5E\u6027\u5B9A\u4E49\u9879\u76EE\u7684\u6392\u5217\u987A\u5E8F\u3002\u6570\u503C\u8D8A\u5C0F\uFF0C\u6392\u5217\u8D8A\u9760\u524D\uFF0C\u9ED8\u8BA4\u4E3A0\u3002

flex-grow\u5C5E\u6027\u5B9A\u4E49\u9879\u76EE\u7684\u653E\u5927\u6BD4\u4F8B\uFF0C\u9ED8\u8BA4\u4E3A0\uFF0C\u5373\u5982\u679C\u5B58\u5728\u5269\u4F59\u7A7A\u95F4\uFF0C\u4E5F\u4E0D\u653E\u5927\u3002

flex-shrink\u5C5E\u6027\u5B9A\u4E49\u4E86\u9879\u76EE\u7684\u7F29\u5C0F\u6BD4\u4F8B\uFF0C\u9ED8\u8BA4\u4E3A1\uFF0C\u5373\u5982\u679C\u7A7A\u95F4\u4E0D\u8DB3\uFF0C\u8BE5\u9879\u76EE\u5C06\u7F29\u5C0F\u3002

flex-basis\u5C5E\u6027\u5B9A\u4E49\u4E86\u5728\u5206\u914D\u591A\u4F59\u7A7A\u95F4\u4E4B\u524D\uFF0C\u9879\u76EE\u5360\u636E\u7684\u4E3B\u8F74\u7A7A\u95F4\u3002\u6D4F\u89C8\u5668\u6839\u636E\u8FD9\u4E2A\u5C5E\u6027\uFF0C\u8BA1\u7B97\u4E3B\u8F74\u662F\u5426\u6709\u591A\u4F59\u7A7A\u95F4\u3002\u5B83\u7684\u9ED8\u8BA4
\u503C\u4E3Aauto\uFF0C\u5373\u9879\u76EE\u7684\u672C\u6765\u5927\u5C0F\u3002

flex\u5C5E\u6027\u662Fflex-grow\uFF0Cflex-shrink\u548Cflex-basis\u7684\u7B80\u5199\uFF0C\u9ED8\u8BA4\u503C\u4E3A0 1 auto\u3002

align-self\u5C5E\u6027\u5141\u8BB8\u5355\u4E2A\u9879\u76EE\u6709\u4E0E\u5176\u4ED6\u9879\u76EE\u4E0D\u4E00\u6837\u7684\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u8986\u76D6align-items\u5C5E\u6027\u3002\u9ED8\u8BA4\u503C\u4E3Aauto\uFF0C\u8868\u793A\u7EE7\u627F\u7236
\u5143\u7D20\u7684align-items\u5C5E\u6027\uFF0C\u5982\u679C\u6CA1\u6709\u7236\u5143\u7D20\uFF0C\u5219\u7B49\u540C\u4E8Estretch\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u56DE\u7B54\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>flex\u5E03\u5C40\u662FCSS3\u65B0\u589E\u7684\u4E00\u79CD\u5E03\u5C40\u65B9\u5F0F\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u5C06\u4E00\u4E2A\u5143\u7D20\u7684display\u5C5E\u6027\u503C\u8BBE\u7F6E\u4E3Aflex\u4ECE\u800C\u4F7F\u5B83\u6210\u4E3A\u4E00\u4E2Aflex
\u5BB9\u5668\uFF0C\u5B83\u7684\u6240\u6709\u5B50\u5143\u7D20\u90FD\u4F1A\u6210\u4E3A\u5B83\u7684\u9879\u76EE\u3002

\u4E00\u4E2A\u5BB9\u5668\u9ED8\u8BA4\u6709\u4E24\u6761\u8F74\uFF0C\u4E00\u4E2A\u662F\u6C34\u5E73\u7684\u4E3B\u8F74\uFF0C\u4E00\u4E2A\u662F\u4E0E\u4E3B\u8F74\u5782\u76F4\u7684\u4EA4\u53C9\u8F74\u3002\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528flex-direction\u6765\u6307\u5B9A\u4E3B\u8F74\u7684\u65B9\u5411\u3002
\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528justify-content\u6765\u6307\u5B9A\u5143\u7D20\u5728\u4E3B\u8F74\u4E0A\u7684\u6392\u5217\u65B9\u5F0F\uFF0C\u4F7F\u7528align-items\u6765\u6307\u5B9A\u5143\u7D20\u5728\u4EA4\u53C9\u8F74\u4E0A\u7684\u6392\u5217\u65B9\u5F0F\u3002\u8FD8
\u53EF\u4EE5\u4F7F\u7528flex-wrap\u6765\u89C4\u5B9A\u5F53\u4E00\u884C\u6392\u5217\u4E0D\u4E0B\u65F6\u7684\u6362\u884C\u65B9\u5F0F\u3002

\u5BF9\u4E8E\u5BB9\u5668\u4E2D\u7684\u9879\u76EE\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528order\u5C5E\u6027\u6765\u6307\u5B9A\u9879\u76EE\u7684\u6392\u5217\u987A\u5E8F\uFF0C\u8FD8\u53EF\u4EE5\u4F7F\u7528flex-grow\u6765\u6307\u5B9A\u5F53\u6392\u5217\u7A7A\u95F4\u6709\u5269\u4F59\u7684\u65F6\u5019\uFF0C
\u9879\u76EE\u7684\u653E\u5927\u6BD4\u4F8B\u3002\u8FD8\u53EF\u4EE5\u4F7F\u7528flex-shrink\u6765\u6307\u5B9A\u5F53\u6392\u5217\u7A7A\u95F4\u4E0D\u8DB3\u65F6\uFF0C\u9879\u76EE\u7684\u7F29\u5C0F\u6BD4\u4F8B\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),I={href:"http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html",target:"_blank",rel:"noopener noreferrer"},F={href:"http://www.ruanyifeng.com/blog/2015/07/flex-examples.html",target:"_blank",rel:"noopener noreferrer"},z=a(`<h2 id="_14-\u7528\u7EAF-css-\u521B\u5EFA\u4E00\u4E2A\u4E09\u89D2\u5F62\u7684\u539F\u7406\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_14-\u7528\u7EAF-css-\u521B\u5EFA\u4E00\u4E2A\u4E09\u89D2\u5F62\u7684\u539F\u7406\u662F\u4EC0\u4E48" aria-hidden="true">#</a> 14.\u7528\u7EAF CSS \u521B\u5EFA\u4E00\u4E2A\u4E09\u89D2\u5F62\u7684\u539F\u7406\u662F\u4EC0\u4E48\uFF1F</h2><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">\u91C7\u7528\u7684\u662F\u76F8\u90BB\u8FB9\u6846\u8FDE\u63A5\u5904\u7684\u5747\u5206\u539F\u7406\u3002
  \u5C06\u5143\u7D20\u7684\u5BBD\u9AD8\u8BBE\u4E3A0\uFF0C\u53EA\u8BBE\u7F6E
  border
  \uFF0C\u628A\u4EFB\u610F\u4E09\u6761\u8FB9\u9690\u85CF\u6389\uFF08\u989C\u8272\u8BBE\u4E3A
  transparent\uFF09\uFF0C\u5269\u4E0B\u7684\u5C31\u662F\u4E00\u4E2A\u4E09\u89D2\u5F62\u3002
  #demo</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">border-width</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">border-style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> transparent transparent red transparent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_15-\u4E00\u4E2A\u6EE1\u5C4F\u54C1\u5B57\u5E03\u5C40\u5982\u4F55\u8BBE\u8BA1" tabindex="-1"><a class="header-anchor" href="#_15-\u4E00\u4E2A\u6EE1\u5C4F\u54C1\u5B57\u5E03\u5C40\u5982\u4F55\u8BBE\u8BA1" aria-hidden="true">#</a> 15.\u4E00\u4E2A\u6EE1\u5C4F\u54C1\u5B57\u5E03\u5C40\u5982\u4F55\u8BBE\u8BA1?</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u7B80\u5355\u7684\u65B9\u5F0F\uFF1A
	\u4E0A\u9762\u7684div\u5BBD100%\uFF0C
	\u4E0B\u9762\u7684\u4E24\u4E2Adiv\u5206\u522B\u5BBD50%\uFF0C
	\u7136\u540E\u7528float\u6216\u8005inline\u4F7F\u5176\u4E0D\u6362\u884C\u5373\u53EF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_16-css-\u591A\u5217\u7B49\u9AD8\u5982\u4F55\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_16-css-\u591A\u5217\u7B49\u9AD8\u5982\u4F55\u5B9E\u73B0" aria-hidden="true">#</a> 16.CSS \u591A\u5217\u7B49\u9AD8\u5982\u4F55\u5B9E\u73B0\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\uFF081\uFF09\u5229\u7528padding-bottom|margin-bottom\u6B63\u8D1F\u503C\u76F8\u62B5\uFF0C\u4E0D\u4F1A\u5F71\u54CD\u9875\u9762\u5E03\u5C40\u7684\u7279\u70B9\u3002\u8BBE\u7F6E\u7236\u5BB9\u5668\u8BBE\u7F6E\u8D85\u51FA\u9690\u85CF\uFF08overflow:
hidden\uFF09\uFF0C\u8FD9\u6837\u7236\u5BB9\u5668\u7684\u9AD8\u5EA6\u5C31\u8FD8\u662F\u5B83\u91CC\u9762\u7684\u5217\u6CA1\u6709\u8BBE\u5B9Apadding-bottom\u65F6\u7684\u9AD8\u5EA6\uFF0C\u5F53\u5B83\u91CC\u9762\u7684\u4EFB\u4E00\u5217\u9AD8\u5EA6\u589E\u52A0\u4E86\uFF0C\u5219
\u7236\u5BB9\u5668\u7684\u9AD8\u5EA6\u88AB\u6491\u5230\u91CC\u9762\u6700\u9AD8\u90A3\u5217\u7684\u9AD8\u5EA6\uFF0C\u5176\u4ED6\u6BD4\u8FD9\u5217\u77EE\u7684\u5217\u4F1A\u7528\u5B83\u4EEC\u7684padding-bottom\u8865\u507F\u8FD9\u90E8\u5206\u9AD8\u5EA6\u5DEE\u3002

\uFF082\uFF09\u5229\u7528table-cell\u6240\u6709\u5355\u5143\u683C\u9AD8\u5EA6\u90FD\u76F8\u7B49\u7684\u7279\u6027\uFF0C\u6765\u5B9E\u73B0\u591A\u5217\u7B49\u9AD8\u3002

\uFF083\uFF09\u5229\u7528flex\u5E03\u5C40\u4E2D\u9879\u76EEalign-items\u5C5E\u6027\u9ED8\u8BA4\u4E3Astretch\uFF0C\u5982\u679C\u9879\u76EE\u672A\u8BBE\u7F6E\u9AD8\u5EA6\u6216\u8BBE\u4E3Aauto\uFF0C\u5C06\u5360\u6EE1\u6574\u4E2A\u5BB9\u5668\u7684\u9AD8\u5EA6
\u7684\u7279\u6027\uFF0C\u6765\u5B9E\u73B0\u591A\u5217\u7B49\u9AD8\u3002

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),P={href:"https://juejin.im/post/5b0fb34151882515662238fd",target:"_blank",rel:"noopener noreferrer"},j={href:"https://codepen.io/yangbo5207/post/equh",target:"_blank",rel:"noopener noreferrer"},G=a(`<h2 id="_17-\u7ECF\u5E38\u9047\u5230\u7684\u6D4F\u89C8\u5668\u7684\u517C\u5BB9\u6027\u6709\u54EA\u4E9B-\u539F\u56E0-\u89E3\u51B3\u65B9\u6CD5\u662F\u4EC0\u4E48-\u5E38\u7528-hack-\u7684\u6280\u5DE7" tabindex="-1"><a class="header-anchor" href="#_17-\u7ECF\u5E38\u9047\u5230\u7684\u6D4F\u89C8\u5668\u7684\u517C\u5BB9\u6027\u6709\u54EA\u4E9B-\u539F\u56E0-\u89E3\u51B3\u65B9\u6CD5\u662F\u4EC0\u4E48-\u5E38\u7528-hack-\u7684\u6280\u5DE7" aria-hidden="true">#</a> 17.\u7ECF\u5E38\u9047\u5230\u7684\u6D4F\u89C8\u5668\u7684\u517C\u5BB9\u6027\u6709\u54EA\u4E9B\uFF1F\u539F\u56E0\uFF0C\u89E3\u51B3\u65B9\u6CD5\u662F\u4EC0\u4E48\uFF0C\u5E38\u7528 hack \u7684\u6280\u5DE7\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\uFF081\uFF09png24\u4F4D\u7684\u56FE\u7247\u5728iE6\u6D4F\u89C8\u5668\u4E0A\u51FA\u73B0\u80CC\u666F
\u89E3\u51B3\u65B9\u6848\uFF1A\u505A\u6210PNG8\uFF0C\u4E5F\u53EF\u4EE5\u5F15\u7528\u4E00\u6BB5\u811A\u672C\u5904\u7406\u3002

\uFF082\uFF09\u6D4F\u89C8\u5668\u9ED8\u8BA4\u7684margin\u548Cpadding\u4E0D\u540C
\u89E3\u51B3\u65B9\u6848\uFF1A\u52A0\u4E00\u4E2A\u5168\u5C40\u7684*{margin:0;padding:0;}\u6765\u7EDF\u4E00\u3002

\uFF083\uFF09IE6\u53CC\u8FB9\u8DDDbug\uFF1A\u5728IE6\u4E0B\uFF0C\u5982\u679C\u5BF9\u5143\u7D20\u8BBE\u7F6E\u4E86\u6D6E\u52A8\uFF0C\u540C\u65F6\u53C8\u8BBE\u7F6E\u4E86margin-left\u6216
margin-right\uFF0Cmargin\u503C\u4F1A\u52A0\u500D\u3002

#box{float:left;width:10px;margin:0 0 0 10px;}

\u8FD9\u79CD\u60C5\u51B5\u4E4B\u4E0BIE\u4F1A\u4EA7\u751F20px\u7684\u8DDD\u79BB
\u89E3\u51B3\u65B9\u6848\uFF1A\u5728float\u7684\u6807\u7B7E\u6837\u5F0F\u63A7\u5236\u4E2D\u52A0\u5165_display:inline;\u5C06\u5176\u8F6C\u5316\u4E3A\u884C\u5185\u5C5E\u6027\u3002(_\u8FD9\u4E2A\u7B26\u53F7\u53EA\u6709ie6\u4F1A\u8BC6\u522B)

\uFF084\uFF09\u6E10\u8FDB\u8BC6\u522B\u7684\u65B9\u5F0F\uFF0C\u4ECE\u603B\u4F53\u4E2D\u9010\u6E10\u6392\u9664\u5C40\u90E8\u3002
\u9996\u5148\uFF0C\u5DE7\u5999\u7684\u4F7F\u7528&quot;\\9&quot;\u8FD9\u4E00\u6807\u8BB0\uFF0C\u5C06IE\u6E38\u89C8\u5668\u4ECE\u6240\u6709\u60C5\u51B5\u4E2D\u5206\u79BB\u51FA\u6765\u3002
\u63A5\u7740\uFF0C\u518D\u6B21\u4F7F\u7528&quot;+&quot;\u5C06IE8\u548CIE7\u3001IE6\u5206\u79BB\u5F00\u6765\uFF0C\u8FD9\u6837IE8\u5DF2\u7ECF\u72EC\u7ACB\u8BC6\u522B\u3002
.bb{
background-color:#f1ee18;/*\u6240\u6709\u8BC6\u522B*/
.background-color:#00deff\\9;/*IE6\u30017\u30018\u8BC6\u522B*/
+background-color:#a200ff;/*IE6\u30017\u8BC6\u522B*/
_background-color:#1e0bd1;/*IE6\u8BC6\u522B*/
}

\uFF085\uFF09IE\u4E0B\uFF0C\u53EF\u4EE5\u4F7F\u7528\u83B7\u53D6\u5E38\u89C4\u5C5E\u6027\u7684\u65B9\u6CD5\u6765\u83B7\u53D6\u81EA\u5B9A\u4E49\u5C5E\u6027\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528getAttribute()\u83B7\u53D6\u81EA\u5B9A\u4E49
\u5C5E\u6027\uFF1BFirefox\u4E0B\uFF0C\u53EA\u80FD\u4F7F\u7528getAttribute()\u83B7\u53D6\u81EA\u5B9A\u4E49\u5C5E\u6027
\u89E3\u51B3\u65B9\u6CD5\uFF1A\u7EDF\u4E00\u901A\u8FC7getAttribute()\u83B7\u53D6\u81EA\u5B9A\u4E49\u5C5E\u6027\u3002

\uFF086\uFF09IE\u4E0B\uFF0Cevent\u5BF9\u8C61\u6709x\u3001y\u5C5E\u6027\uFF0C\u4F46\u662F\u6CA1\u6709pageX\u3001pageY\u5C5E\u6027;Firefox\u4E0B\uFF0Cevent\u5BF9\u8C61\u6709
pageX\u3001pageY\u5C5E\u6027\uFF0C\u4F46\u662F\u6CA1\u6709x\u3001y\u5C5E\u6027\u3002
\u89E3\u51B3\u65B9\u6CD5\uFF1A\uFF08\u6761\u4EF6\u6CE8\u91CA\uFF09\u7F3A\u70B9\u662F\u5728IE\u6D4F\u89C8\u5668\u4E0B\u53EF\u80FD\u4F1A\u589E\u52A0\u989D\u5916\u7684HTTP\u8BF7\u6C42\u6570\u3002

\uFF087\uFF09Chrome\u4E2D\u6587\u754C\u9762\u4E0B\u9ED8\u8BA4\u4F1A\u5C06\u5C0F\u4E8E12px\u7684\u6587\u672C\u5F3A\u5236\u6309\u716712px\u663E\u793A
\u89E3\u51B3\u65B9\u6CD5\uFF1A

1.\u53EF\u901A\u8FC7\u52A0\u5165CSS\u5C5E\u6027-webkit-text-size-adjust:none;\u89E3\u51B3\u3002\u4F46\u662F\uFF0C\u5728chrome
\u66F4\u65B0\u523027\u7248\u672C\u4E4B\u540E\u5C31\u4E0D\u53EF\u4EE5\u7528\u4E86\u3002

2.\u8FD8\u53EF\u4EE5\u4F7F\u7528-webkit-transform:scale(0.5);\u6CE8\u610F-webkit-transform:scale(0.75);
\u6536\u7F29\u7684\u662F\u6574\u4E2Aspan\u7684\u5927\u5C0F\uFF0C\u8FD9\u65F6\u5019\uFF0C\u5FC5\u987B\u8981\u5C06span\u8F6C\u6362\u6210\u5757\u5143\u7D20\uFF0C\u53EF\u4EE5\u4F7F\u7528display\uFF1Ablock/inline-block/...\uFF1B

\uFF088\uFF09\u8D85\u94FE\u63A5\u8BBF\u95EE\u8FC7\u540Ehover\u6837\u5F0F\u5C31\u4E0D\u51FA\u73B0\u4E86\uFF0C\u88AB\u70B9\u51FB\u8BBF\u95EE\u8FC7\u7684\u8D85\u94FE\u63A5\u6837\u5F0F\u4E0D\u518D\u5177\u6709hover\u548Cactive\u4E86
\u89E3\u51B3\u65B9\u6CD5\uFF1A\u6539\u53D8CSS\u5C5E\u6027\u7684\u6392\u5217\u987A\u5E8FL-V-H-A

\uFF089\uFF09\u602A\u5F02\u6A21\u5F0F\u95EE\u9898\uFF1A\u6F0F\u5199DTD\u58F0\u660E\uFF0CFirefox\u4ECD\u7136\u4F1A\u6309\u7167\u6807\u51C6\u6A21\u5F0F\u6765\u89E3\u6790\u7F51\u9875\uFF0C\u4F46\u5728IE\u4E2D\u4F1A\u89E6\u53D1\u602A\u5F02\u6A21
\u5F0F\u3002\u4E3A\u907F\u514D\u602A\u5F02\u6A21\u5F0F\u7ED9\u6211\u4EEC\u5E26\u6765\u4E0D\u5FC5\u8981\u7684\u9EBB\u70E6\uFF0C\u6700\u597D\u517B\u6210\u4E66\u5199DTD\u58F0\u660E\u7684\u597D\u4E60\u60EF\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_18-li-\u4E0E-li-\u4E4B\u95F4\u6709\u770B\u4E0D\u89C1\u7684\u7A7A\u767D\u95F4\u9694\u662F\u4EC0\u4E48\u539F\u56E0\u5F15\u8D77\u7684-\u6709\u4EC0\u4E48\u89E3\u51B3\u529E\u6CD5" tabindex="-1"><a class="header-anchor" href="#_18-li-\u4E0E-li-\u4E4B\u95F4\u6709\u770B\u4E0D\u89C1\u7684\u7A7A\u767D\u95F4\u9694\u662F\u4EC0\u4E48\u539F\u56E0\u5F15\u8D77\u7684-\u6709\u4EC0\u4E48\u89E3\u51B3\u529E\u6CD5" aria-hidden="true">#</a> 18.li \u4E0E li \u4E4B\u95F4\u6709\u770B\u4E0D\u89C1\u7684\u7A7A\u767D\u95F4\u9694\u662F\u4EC0\u4E48\u539F\u56E0\u5F15\u8D77\u7684\uFF1F\u6709\u4EC0\u4E48\u89E3\u51B3\u529E\u6CD5\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6D4F\u89C8\u5668\u4F1A\u628Ainline\u5143\u7D20\u95F4\u7684\u7A7A\u767D\u5B57\u7B26\uFF08\u7A7A\u683C\u3001\u6362\u884C\u3001Tab\u7B49\uFF09\u6E32\u67D3\u6210\u4E00\u4E2A\u7A7A\u683C\u3002\u800C\u4E3A\u4E86\u7F8E\u89C2\u3002\u6211\u4EEC\u901A\u5E38\u662F\u4E00\u4E2A&lt;li&gt;\u653E\u5728\u4E00\u884C\uFF0C
\u8FD9\u5BFC\u81F4&lt;li&gt;\u6362\u884C\u540E\u4EA7\u751F\u6362\u884C\u5B57\u7B26\uFF0C\u5B83\u53D8\u6210\u4E00\u4E2A\u7A7A\u683C\uFF0C\u5360\u7528\u4E86\u4E00\u4E2A\u5B57\u7B26\u7684\u5BBD\u5EA6\u3002

\u89E3\u51B3\u529E\u6CD5\uFF1A

\uFF081\uFF09\u4E3A&lt;li&gt;\u8BBE\u7F6Efloat:left\u3002\u4E0D\u8DB3\uFF1A\u6709\u4E9B\u5BB9\u5668\u662F\u4E0D\u80FD\u8BBE\u7F6E\u6D6E\u52A8\uFF0C\u5982\u5DE6\u53F3\u5207\u6362\u7684\u7126\u70B9\u56FE\u7B49\u3002

\uFF082\uFF09\u5C06\u6240\u6709&lt;li&gt;\u5199\u5728\u540C\u4E00\u884C\u3002\u4E0D\u8DB3\uFF1A\u4EE3\u7801\u4E0D\u7F8E\u89C2\u3002

\uFF083\uFF09\u5C06&lt;ul&gt;\u5185\u7684\u5B57\u7B26\u5C3A\u5BF8\u76F4\u63A5\u8BBE\u4E3A0\uFF0C\u5373font-size:0\u3002\u4E0D\u8DB3\uFF1A&lt;ul&gt;\u4E2D\u7684\u5176\u4ED6\u5B57\u7B26\u5C3A\u5BF8\u4E5F\u88AB\u8BBE\u4E3A0\uFF0C\u9700\u8981\u989D\u5916\u91CD\u65B0\u8BBE\u5B9A\u5176\u4ED6
\u5B57\u7B26\u5C3A\u5BF8\uFF0C\u4E14\u5728Safari\u6D4F\u89C8\u5668\u4F9D\u7136\u4F1A\u51FA\u73B0\u7A7A\u767D\u95F4\u9694\u3002

\uFF084\uFF09\u6D88\u9664&lt;ul&gt;\u7684\u5B57\u7B26\u95F4\u9694letter-spacing:-8px\uFF0C\u4E0D\u8DB3\uFF1A\u8FD9\u4E5F\u8BBE\u7F6E\u4E86&lt;li&gt;\u5185\u7684\u5B57\u7B26\u95F4\u9694\uFF0C\u56E0\u6B64\u9700\u8981\u5C06&lt;li&gt;\u5185\u7684\u5B57\u7B26
\u95F4\u9694\u8BBE\u4E3A\u9ED8\u8BA4letter-spacing:normal\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),B={href:"https://blog.csdn.net/sjinsa/article/details/70919546",target:"_blank",rel:"noopener noreferrer"},q=a(`<h2 id="_19-\u4E3A\u4EC0\u4E48\u8981\u521D\u59CB\u5316-css-\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#_19-\u4E3A\u4EC0\u4E48\u8981\u521D\u59CB\u5316-css-\u6837\u5F0F" aria-hidden="true">#</a> 19.\u4E3A\u4EC0\u4E48\u8981\u521D\u59CB\u5316 CSS \u6837\u5F0F\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>-\u56E0\u4E3A\u6D4F\u89C8\u5668\u7684\u517C\u5BB9\u95EE\u9898\uFF0C\u4E0D\u540C\u6D4F\u89C8\u5668\u5BF9\u6709\u4E9B\u6807\u7B7E\u7684\u9ED8\u8BA4\u503C\u662F\u4E0D\u540C\u7684\uFF0C\u5982\u679C\u6CA1\u5BF9CSS\u521D\u59CB\u5316\u5F80\u5F80\u4F1A\u51FA\u73B0\u6D4F\u89C8\u5668\u4E4B\u95F4\u7684\u9875\u9762\u663E\u793A\u5DEE\u5F02\u3002

-\u5F53\u7136\uFF0C\u521D\u59CB\u5316\u6837\u5F0F\u4F1A\u5BF9SEO\u6709\u4E00\u5B9A\u7684\u5F71\u54CD\uFF0C\u4F46\u9C7C\u548C\u718A\u638C\u4E0D\u53EF\u517C\u5F97\uFF0C\u4F46\u529B\u6C42\u5F71\u54CD\u6700\u5C0F\u7684\u60C5\u51B5\u4E0B\u521D\u59CB\u5316\u3002

\u6700\u7B80\u5355\u7684\u521D\u59CB\u5316\u65B9\u6CD5\uFF1A*{padding:0;margin:0;}\uFF08\u5F3A\u70C8\u4E0D\u5EFA\u8BAE\uFF09

\u6DD8\u5B9D\u7684\u6837\u5F0F\u521D\u59CB\u5316\u4EE3\u7801\uFF1A
body,h1,h2,h3,h4,h5,h6,hr,p,blockquote,dl,dt,dd,ul,ol,li,pre,form,fieldset,legend
,button,input,textarea,th,td{margin:0;padding:0;}
body,button,input,select,textarea{font:12px/1.5tahoma,arial,\\5b8b\\4f53;}
h1,h2,h3,h4,h5,h6{font-size:100%;}
address,cite,dfn,em,var{font-style:normal;}
code,kbd,pre,samp{font-family:couriernew,courier,monospace;}
small{font-size:12px;}
ul,ol{list-style:none;}
a{text-decoration:none;}
a:hover{text-decoration:underline;}
sup{vertical-align:text-top;}
sub{vertical-align:text-bottom;}
legend{color:#000;}
fieldset,img{border:0;}
button,input,select,textarea{font-size:100%;}
table{border-collapse:collapse;border-spacing:0;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_20-\u4EC0\u4E48\u662F\u5305\u542B\u5757-\u5BF9\u4E8E\u5305\u542B\u5757\u7684\u7406\u89E3" tabindex="-1"><a class="header-anchor" href="#_20-\u4EC0\u4E48\u662F\u5305\u542B\u5757-\u5BF9\u4E8E\u5305\u542B\u5757\u7684\u7406\u89E3" aria-hidden="true">#</a> 20.\u4EC0\u4E48\u662F\u5305\u542B\u5757\uFF0C\u5BF9\u4E8E\u5305\u542B\u5757\u7684\u7406\u89E3?</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5305\u542B\u5757\uFF08containing block\uFF09\u5C31\u662F\u5143\u7D20\u7528\u6765\u8BA1\u7B97\u548C\u5B9A\u4F4D\u7684\u4E00\u4E2A\u6846\u3002

\uFF081\uFF09\u6839\u5143\u7D20\uFF08\u5F88\u591A\u573A\u666F\u4E0B\u53EF\u4EE5\u770B\u6210\u662F&lt;html&gt;\uFF09\u88AB\u79F0\u4E3A\u201C\u521D\u59CB\u5305\u542B\u5757\u201D\uFF0C\u5176\u5C3A\u5BF8\u7B49\u540C\u4E8E\u6D4F\u89C8\u5668\u53EF\u89C6\u7A97\u53E3\u7684\u5927\u5C0F\u3002

\uFF082\uFF09\u5BF9\u4E8E\u5176\u4ED6\u5143\u7D20\uFF0C\u5982\u679C\u8BE5\u5143\u7D20\u7684position\u662Frelative\u6216\u8005static\uFF0C\u5219\u201C\u5305\u542B\u5757\u201D\u7531\u5176\u6700\u8FD1\u7684\u5757\u5BB9\u5668\u7956\u5148\u76D2\u7684content box
\u8FB9\u754C\u5F62\u6210\u3002

\uFF083\uFF09\u5982\u679C\u5143\u7D20position:fixed\uFF0C\u5219\u201C\u5305\u542B\u5757\u201D\u662F\u201C\u521D\u59CB\u5305\u542B\u5757\u201D\u3002

\uFF084\uFF09\u5982\u679C\u5143\u7D20position:absolute\uFF0C\u5219\u201C\u5305\u542B\u5757\u201D\u7531\u6700\u8FD1\u7684position\u4E0D\u4E3Astatic\u7684\u7956\u5148\u5143\u7D20\u5EFA\u7ACB\uFF0C\u5177\u4F53\u65B9\u5F0F\u5982\u4E0B\uFF1A

\u5982\u679C\u8BE5\u7956\u5148\u5143\u7D20\u662F\u7EAFinline\u5143\u7D20\uFF0C\u5219\u89C4\u5219\u7565\u590D\u6742\uFF1A
\u2022\u5047\u8BBE\u7ED9\u5185\u8054\u5143\u7D20\u7684\u524D\u540E\u5404\u751F\u6210\u4E00\u4E2A\u5BBD\u5EA6\u4E3A0\u7684\u5185\u8054\u76D2\u5B50\uFF08inline box\uFF09\uFF0C\u5219\u8FD9\u4E24\u4E2A\u5185\u8054\u76D2\u5B50\u7684padding box\u5916\u9762\u7684\u5305
\u56F4\u76D2\u5C31\u662F\u5185\u8054\u5143\u7D20\u7684\u201C\u5305\u542B\u5757\u201D\uFF1B
\u2022\u5982\u679C\u8BE5\u5185\u8054\u5143\u7D20\u88AB\u8DE8\u884C\u5206\u5272\u4E86\uFF0C\u90A3\u4E48\u201C\u5305\u542B\u5757\u201D\u662F\u672A\u5B9A\u4E49\u7684\uFF0C\u4E5F\u5C31\u662FCSS2.1\u89C4\u8303\u5E76\u6CA1\u6709\u660E\u786E\u5B9A\u4E49\uFF0C\u6D4F\u89C8\u5668\u81EA\u884C\u53D1\u6325
\u5426\u5219\uFF0C\u201C\u5305\u542B\u5757\u201D\u7531\u8BE5\u7956\u5148\u7684padding box\u8FB9\u754C\u5F62\u6210\u3002

\u5982\u679C\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u7956\u5148\u5143\u7D20\uFF0C\u5219\u201C\u5305\u542B\u5757\u201D\u662F\u201C\u521D\u59CB\u5305\u542B\u5757\u201D\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_21-css-\u91CC\u7684-visibility-\u5C5E\u6027\u6709\u4E2A-collapse-\u5C5E\u6027\u503C\u662F\u5E72\u561B\u7528\u7684-\u5728\u4E0D\u540C\u6D4F\u89C8\u5668\u4E0B\u4EE5\u540E\u4EC0\u4E48\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_21-css-\u91CC\u7684-visibility-\u5C5E\u6027\u6709\u4E2A-collapse-\u5C5E\u6027\u503C\u662F\u5E72\u561B\u7528\u7684-\u5728\u4E0D\u540C\u6D4F\u89C8\u5668\u4E0B\u4EE5\u540E\u4EC0\u4E48\u533A\u522B" aria-hidden="true">#</a> 21.CSS \u91CC\u7684 visibility \u5C5E\u6027\u6709\u4E2A collapse \u5C5E\u6027\u503C\u662F\u5E72\u561B\u7528\u7684\uFF1F\u5728\u4E0D\u540C\u6D4F\u89C8\u5668\u4E0B\u4EE5\u540E\u4EC0\u4E48\u533A\u522B\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\uFF081\uFF09\u5BF9\u4E8E\u4E00\u822C\u7684\u5143\u7D20\uFF0C\u5B83\u7684\u8868\u73B0\u8DDFvisibility\uFF1Ahidden;\u662F\u4E00\u6837\u7684\u3002\u5143\u7D20\u662F\u4E0D\u53EF\u89C1\u7684\uFF0C\u4F46\u6B64\u65F6\u4ECD\u5360\u7528\u9875\u9762\u7A7A\u95F4\u3002

\uFF082\uFF09\u4F46\u4F8B\u5916\u7684\u662F\uFF0C\u5982\u679C\u8FD9\u4E2A\u5143\u7D20\u662Ftable\u76F8\u5173\u7684\u5143\u7D20\uFF0C\u4F8B\u5982table\u884C\uFF0Ctable group\uFF0Ctable\u5217\uFF0Ctable column group\uFF0C\u5B83\u7684
\u8868\u73B0\u5374\u8DDFdisplay:none\u4E00\u6837\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5B83\u4EEC\u5360\u7528\u7684\u7A7A\u95F4\u4E5F\u4F1A\u91CA\u653E\u3002

\u5728\u4E0D\u540C\u6D4F\u89C8\u5668\u4E0B\u7684\u533A\u522B\uFF1A

\u5728\u8C37\u6B4C\u6D4F\u89C8\u5668\u91CC\uFF0C\u4F7F\u7528collapse\u503C\u548C\u4F7F\u7528hidden\u503C\u6CA1\u6709\u4EC0\u4E48\u533A\u522B\u3002

\u5728\u706B\u72D0\u6D4F\u89C8\u5668\u3001Opera\u548CIE11\u91CC\uFF0C\u4F7F\u7528collapse\u503C\u7684\u6548\u679C\u5C31\u5982\u5B83\u7684\u5B57\u9762\u610F\u601D\uFF1Atable\u7684\u884C\u4F1A\u6D88\u5931\uFF0C\u5B83\u7684\u4E0B\u9762\u4E00\u884C\u4F1A\u8865\u5145\u5B83\u7684\u4F4D
\u7F6E\u3002

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),L={href:"http://www.webhek.com/post/visibility-collapse.html",target:"_blank",rel:"noopener noreferrer"},T=a(`<h2 id="_22-width-auto-\u548C-width-100-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_22-width-auto-\u548C-width-100-\u7684\u533A\u522B" aria-hidden="true">#</a> 22.width:auto \u548C width:100%\u7684\u533A\u522B</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4E00\u822C\u800C\u8A00

width:100%\u4F1A\u4F7F\u5143\u7D20box\u7684\u5BBD\u5EA6\u7B49\u4E8E\u7236\u5143\u7D20\u7684content box\u7684\u5BBD\u5EA6\u3002

width:auto\u4F1A\u4F7F\u5143\u7D20\u6491\u6EE1\u6574\u4E2A\u7236\u5143\u7D20\uFF0Cmargin\u3001border\u3001padding\u3001content\u533A\u57DF\u4F1A\u81EA\u52A8\u5206\u914D\u6C34\u5E73\u7A7A\u95F4\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_23-\u7EDD\u5BF9\u5B9A\u4F4D\u5143\u7D20\u4E0E\u975E\u7EDD\u5BF9\u5B9A\u4F4D\u5143\u7D20\u7684\u767E\u5206\u6BD4\u8BA1\u7B97\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_23-\u7EDD\u5BF9\u5B9A\u4F4D\u5143\u7D20\u4E0E\u975E\u7EDD\u5BF9\u5B9A\u4F4D\u5143\u7D20\u7684\u767E\u5206\u6BD4\u8BA1\u7B97\u7684\u533A\u522B" aria-hidden="true">#</a> 23.\u7EDD\u5BF9\u5B9A\u4F4D\u5143\u7D20\u4E0E\u975E\u7EDD\u5BF9\u5B9A\u4F4D\u5143\u7D20\u7684\u767E\u5206\u6BD4\u8BA1\u7B97\u7684\u533A\u522B</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u7EDD\u5BF9\u5B9A\u4F4D\u5143\u7D20\u7684\u5BBD\u9AD8\u767E\u5206\u6BD4\u662F\u76F8\u5BF9\u4E8E\u4E34\u8FD1\u7684position\u4E0D\u4E3Astatic\u7684\u7956\u5148\u5143\u7D20\u7684padding box\u6765\u8BA1\u7B97\u7684\u3002

\u975E\u7EDD\u5BF9\u5B9A\u4F4D\u5143\u7D20\u7684\u5BBD\u9AD8\u767E\u5206\u6BD4\u5219\u662F\u76F8\u5BF9\u4E8E\u7236\u5143\u7D20\u7684content box\u6765\u8BA1\u7B97\u7684\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_24-\u7B80\u5355\u4ECB\u7ECD\u4F7F\u7528\u56FE\u7247-base64-\u7F16\u7801\u7684\u4F18\u70B9\u548C\u7F3A\u70B9\u3002" tabindex="-1"><a class="header-anchor" href="#_24-\u7B80\u5355\u4ECB\u7ECD\u4F7F\u7528\u56FE\u7247-base64-\u7F16\u7801\u7684\u4F18\u70B9\u548C\u7F3A\u70B9\u3002" aria-hidden="true">#</a> 24.\u7B80\u5355\u4ECB\u7ECD\u4F7F\u7528\u56FE\u7247 base64 \u7F16\u7801\u7684\u4F18\u70B9\u548C\u7F3A\u70B9\u3002</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>base64\u7F16\u7801\u662F\u4E00\u79CD\u56FE\u7247\u5904\u7406\u683C\u5F0F\uFF0C\u901A\u8FC7\u7279\u5B9A\u7684\u7B97\u6CD5\u5C06\u56FE\u7247\u7F16\u7801\u6210\u4E00\u957F\u4E32\u5B57\u7B26\u4E32\uFF0C\u5728\u9875\u9762\u4E0A\u663E\u793A\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u7528\u8BE5\u5B57\u7B26\u4E32\u6765\u4EE3\u66FF\u56FE\u7247\u7684
url\u5C5E\u6027\u3002

\u4F7F\u7528base64\u7684\u4F18\u70B9\u662F\uFF1A

\uFF081\uFF09\u51CF\u5C11\u4E00\u4E2A\u56FE\u7247\u7684HTTP\u8BF7\u6C42

\u4F7F\u7528base64\u7684\u7F3A\u70B9\u662F\uFF1A

\uFF081\uFF09\u6839\u636Ebase64\u7684\u7F16\u7801\u539F\u7406\uFF0C\u7F16\u7801\u540E\u7684\u5927\u5C0F\u4F1A\u6BD4\u539F\u6587\u4EF6\u5927\u5C0F\u59271/3\uFF0C\u5982\u679C\u628A\u5927\u56FE\u7247\u7F16\u7801\u5230html/css\u4E2D\uFF0C\u4E0D\u4EC5\u4F1A\u9020\u6210\u6587\u4EF6\u4F53
\u79EF\u7684\u589E\u52A0\uFF0C\u5F71\u54CD\u6587\u4EF6\u7684\u52A0\u8F7D\u901F\u5EA6\uFF0C\u8FD8\u4F1A\u589E\u52A0\u6D4F\u89C8\u5668\u5BF9html\u6216css\u6587\u4EF6\u89E3\u6790\u6E32\u67D3\u7684\u65F6\u95F4\u3002

\uFF082\uFF09\u4F7F\u7528base64\u65E0\u6CD5\u76F4\u63A5\u7F13\u5B58\uFF0C\u8981\u7F13\u5B58\u53EA\u80FD\u7F13\u5B58\u5305\u542Bbase64\u7684\u6587\u4EF6\uFF0C\u6BD4\u5982HTML\u6216\u8005CSS\uFF0C\u8FD9\u76F8\u6BD4\u57DF\u76F4\u63A5\u7F13\u5B58\u56FE\u7247\u7684\u6548\u679C\u8981
\u5DEE\u5F88\u591A\u3002

\uFF083\uFF09\u517C\u5BB9\u6027\u7684\u95EE\u9898\uFF0Cie8\u4EE5\u524D\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u3002

\u4E00\u822C\u4E00\u4E9B\u7F51\u7AD9\u7684\u5C0F\u56FE\u6807\u53EF\u4EE5\u4F7F\u7528base64\u56FE\u7247\u6765\u5F15\u5165\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),W={href:"https://www.cnblogs.com/coco1s/p/4375774.html",target:"_blank",rel:"noopener noreferrer"},D={href:"https://www.zhihu.com/question/31155574",target:"_blank",rel:"noopener noreferrer"},N={href:"https://www.zhangxinxu.com/wordpress/2012/04/base64-url-image-%E5%9B%BE%E7%89%87-%E9%A1%B5%E9%9D%A2%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96/",target:"_blank",rel:"noopener noreferrer"},H=a(`<h2 id="_25-display-\u3001-position-\u548C-float-\u7684\u76F8\u4E92\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#_25-display-\u3001-position-\u548C-float-\u7684\u76F8\u4E92\u5173\u7CFB" aria-hidden="true">#</a> 25.&#39;display&#39;\u3001&#39;position&#39;\u548C&#39;float&#39;\u7684\u76F8\u4E92\u5173\u7CFB\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\uFF081\uFF09\u9996\u5148\u6211\u4EEC\u5224\u65ADdisplay\u5C5E\u6027\u662F\u5426\u4E3Anone\uFF0C\u5982\u679C\u4E3Anone\uFF0C\u5219position\u548Cfloat\u5C5E\u6027\u7684\u503C\u4E0D\u5F71\u54CD\u5143\u7D20\u6700\u540E\u7684\u8868\u73B0\u3002

\uFF082\uFF09\u7136\u540E\u5224\u65ADposition\u7684\u503C\u662F\u5426\u4E3Aabsolute\u6216\u8005fixed\uFF0C\u5982\u679C\u662F\uFF0C\u5219float\u5C5E\u6027\u5931\u6548\uFF0C\u5E76\u4E14display\u7684\u503C\u5E94\u8BE5\u88AB
\u8BBE\u7F6E\u4E3Atable\u6216\u8005block\uFF0C\u5177\u4F53\u8F6C\u6362\u9700\u8981\u770B\u521D\u59CB\u8F6C\u6362\u503C\u3002

\uFF083\uFF09\u5982\u679Cposition\u7684\u503C\u4E0D\u4E3Aabsolute\u6216\u8005fixed\uFF0C\u5219\u5224\u65ADfloat\u5C5E\u6027\u7684\u503C\u662F\u5426\u4E3Anone\uFF0C\u5982\u679C\u4E0D\u662F\uFF0C\u5219display
\u7684\u503C\u5219\u6309\u4E0A\u9762\u7684\u89C4\u5219\u8F6C\u6362\u3002\u6CE8\u610F\uFF0C\u5982\u679Cposition\u7684\u503C\u4E3Arelative\u5E76\u4E14float\u5C5E\u6027\u7684\u503C\u5B58\u5728\uFF0C\u5219relative\u76F8\u5BF9
\u4E8E\u6D6E\u52A8\u540E\u7684\u6700\u7EC8\u4F4D\u7F6E\u5B9A\u4F4D\u3002

\uFF084\uFF09\u5982\u679Cfloat\u7684\u503C\u4E3Anone\uFF0C\u5219\u5224\u65AD\u5143\u7D20\u662F\u5426\u4E3A\u6839\u5143\u7D20\uFF0C\u5982\u679C\u662F\u6839\u5143\u7D20\u5219display\u5C5E\u6027\u6309\u7167\u4E0A\u9762\u7684\u89C4\u5219\u8F6C\u6362\uFF0C\u5982\u679C\u4E0D\u662F\uFF0C
\u5219\u4FDD\u6301\u6307\u5B9A\u7684display\u5C5E\u6027\u503C\u4E0D\u53D8\u3002

\u603B\u7684\u6765\u8BF4\uFF0C\u53EF\u4EE5\u628A\u5B83\u770B\u4F5C\u662F\u4E00\u4E2A\u7C7B\u4F3C\u4F18\u5148\u7EA7\u7684\u673A\u5236\uFF0C&quot;position:absolute&quot;\u548C&quot;position:fixed&quot;\u4F18\u5148\u7EA7\u6700\u9AD8\uFF0C\u6709\u5B83\u5B58\u5728
\u7684\u65F6\u5019\uFF0C\u6D6E\u52A8\u4E0D\u8D77\u4F5C\u7528\uFF0C&#39;display&#39;\u7684\u503C\u4E5F\u9700\u8981\u8C03\u6574\uFF1B\u5176\u6B21\uFF0C\u5143\u7D20\u7684&#39;float&#39;\u7279\u6027\u7684\u503C\u4E0D\u662F&quot;none&quot;\u7684\u65F6\u5019\u6216\u8005\u5B83\u662F\u6839\u5143\u7D20
\u7684\u65F6\u5019\uFF0C\u8C03\u6574&#39;display&#39;\u7684\u503C\uFF1B\u6700\u540E\uFF0C\u975E\u6839\u5143\u7D20\uFF0C\u5E76\u4E14\u975E\u6D6E\u52A8\u5143\u7D20\uFF0C\u5E76\u4E14\u975E\u7EDD\u5BF9\u5B9A\u4F4D\u7684\u5143\u7D20\uFF0C&#39;display&#39;\u7279\u6027\u503C\u540C\u8BBE\u7F6E\u503C\u3002

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),M={href:"https://www.cnblogs.com/jackyWHJ/p/3756087.html",target:"_blank",rel:"noopener noreferrer"},A=a(`<h2 id="_26-margin-\u91CD\u53E0\u95EE\u9898\u7684\u7406\u89E3\u3002" tabindex="-1"><a class="header-anchor" href="#_26-margin-\u91CD\u53E0\u95EE\u9898\u7684\u7406\u89E3\u3002" aria-hidden="true">#</a> 26.margin \u91CD\u53E0\u95EE\u9898\u7684\u7406\u89E3\u3002</h2><p>\u76F8\u5173\u77E5\u8BC6\u70B9\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5757\u7EA7\u5143\u7D20\u7684\u4E0A\u5916\u8FB9\u8DDD\uFF08margin-top\uFF09\u4E0E\u4E0B\u5916\u8FB9\u8DDD\uFF08margin-bottom\uFF09\u6709\u65F6\u4F1A\u5408\u5E76\u4E3A\u5355\u4E2A\u5916\u8FB9\u8DDD\uFF0C\u8FD9\u6837\u7684\u73B0\u8C61\u79F0\u4E3A\u201Cmargin\u5408
\u5E76\u201D\u3002

\u4EA7\u751F\u6298\u53E0\u7684\u5FC5\u5907\u6761\u4EF6\uFF1Amargin\u5FC5\u987B\u662F\u90BB\u63A5\u7684!

\u800C\u6839\u636Ew3c\u89C4\u8303\uFF0C\u4E24\u4E2Amargin\u662F\u90BB\u63A5\u7684\u5FC5\u987B\u6EE1\u8DB3\u4EE5\u4E0B\u6761\u4EF6\uFF1A

\u2022\u5FC5\u987B\u662F\u5904\u4E8E\u5E38\u89C4\u6587\u6863\u6D41\uFF08\u975Efloat\u548C\u7EDD\u5BF9\u5B9A\u4F4D\uFF09\u7684\u5757\u7EA7\u76D2\u5B50\uFF0C\u5E76\u4E14\u5904\u4E8E\u540C\u4E00\u4E2ABFC\u5F53\u4E2D\u3002
\u2022\u6CA1\u6709\u7EBF\u76D2\uFF0C\u6CA1\u6709\u7A7A\u9699\uFF0C\u6CA1\u6709padding\u548Cborder\u5C06\u4ED6\u4EEC\u5206\u9694\u5F00
\u2022\u90FD\u5C5E\u4E8E\u5782\u76F4\u65B9\u5411\u4E0A\u76F8\u90BB\u7684\u5916\u8FB9\u8DDD\uFF0C\u53EF\u4EE5\u662F\u4E0B\u9762\u4EFB\u610F\u4E00\u79CD\u60C5\u51B5
\u2022\u5143\u7D20\u7684margin-top\u4E0E\u5176\u7B2C\u4E00\u4E2A\u5E38\u89C4\u6587\u6863\u6D41\u7684\u5B50\u5143\u7D20\u7684margin-top
\u2022\u5143\u7D20\u7684margin-bottom\u4E0E\u5176\u4E0B\u4E00\u4E2A\u5E38\u89C4\u6587\u6863\u6D41\u7684\u5144\u5F1F\u5143\u7D20\u7684margin-top
\u2022height\u4E3Aauto\u7684\u5143\u7D20\u7684margin-bottom\u4E0E\u5176\u6700\u540E\u4E00\u4E2A\u5E38\u89C4\u6587\u6863\u6D41\u7684\u5B50\u5143\u7D20\u7684margin-bottom
\u2022\u9AD8\u5EA6\u4E3A0\u5E76\u4E14\u6700\u5C0F\u9AD8\u5EA6\u4E5F\u4E3A0\uFF0C\u4E0D\u5305\u542B\u5E38\u89C4\u6587\u6863\u6D41\u7684\u5B50\u5143\u7D20\uFF0C\u5E76\u4E14\u81EA\u8EAB\u6CA1\u6709\u5EFA\u7ACB\u65B0\u7684BFC\u7684\u5143\u7D20\u7684margin-top
\u548Cmargin-bottom


margin\u5408\u5E76\u76843\u79CD\u573A\u666F\uFF1A

\uFF081\uFF09\u76F8\u90BB\u5144\u5F1F\u5143\u7D20margin\u5408\u5E76\u3002

\u89E3\u51B3\u529E\u6CD5\uFF1A
\u2022\u8BBE\u7F6E\u5757\u72B6\u683C\u5F0F\u5316\u4E0A\u4E0B\u6587\u5143\u7D20\uFF08BFC\uFF09

\uFF082\uFF09\u7236\u7EA7\u548C\u7B2C\u4E00\u4E2A/\u6700\u540E\u4E00\u4E2A\u5B50\u5143\u7D20\u7684margin\u5408\u5E76\u3002

\u89E3\u51B3\u529E\u6CD5\uFF1A

\u5BF9\u4E8Emargin-top\u5408\u5E76\uFF0C\u53EF\u4EE5\u8FDB\u884C\u5982\u4E0B\u64CD\u4F5C\uFF08\u6EE1\u8DB3\u4E00\u4E2A\u6761\u4EF6\u5373\u53EF\uFF09\uFF1A
\u2022\u7236\u5143\u7D20\u8BBE\u7F6E\u4E3A\u5757\u72B6\u683C\u5F0F\u5316\u4E0A\u4E0B\u6587\u5143\u7D20\uFF1B
\u2022\u7236\u5143\u7D20\u8BBE\u7F6Eborder-top\u503C\uFF1B
\u2022\u7236\u5143\u7D20\u8BBE\u7F6Epadding-top\u503C\uFF1B
\u2022\u7236\u5143\u7D20\u548C\u7B2C\u4E00\u4E2A\u5B50\u5143\u7D20\u4E4B\u95F4\u6DFB\u52A0\u5185\u8054\u5143\u7D20\u8FDB\u884C\u5206\u9694\u3002

\u5BF9\u4E8Emargin-bottom\u5408\u5E76\uFF0C\u53EF\u4EE5\u8FDB\u884C\u5982\u4E0B\u64CD\u4F5C\uFF08\u6EE1\u8DB3\u4E00\u4E2A\u6761\u4EF6\u5373\u53EF\uFF09\uFF1A
\u2022\u7236\u5143\u7D20\u8BBE\u7F6E\u4E3A\u5757\u72B6\u683C\u5F0F\u5316\u4E0A\u4E0B\u6587\u5143\u7D20\uFF1B
\u2022\u7236\u5143\u7D20\u8BBE\u7F6Eborder-bottom\u503C\uFF1B
\u2022\u7236\u5143\u7D20\u8BBE\u7F6Epadding-bottom\u503C\uFF1B
\u2022\u7236\u5143\u7D20\u548C\u6700\u540E\u4E00\u4E2A\u5B50\u5143\u7D20\u4E4B\u95F4\u6DFB\u52A0\u5185\u8054\u5143\u7D20\u8FDB\u884C\u5206\u9694\uFF1B
\u2022\u7236\u5143\u7D20\u8BBE\u7F6Eheight\u3001min-height\u6216max-height\u3002

\uFF083\uFF09\u7A7A\u5757\u7EA7\u5143\u7D20\u7684margin\u5408\u5E76\u3002

\u89E3\u51B3\u529E\u6CD5\uFF1A
\u2022\u8BBE\u7F6E\u5782\u76F4\u65B9\u5411\u7684border\uFF1B
\u2022\u8BBE\u7F6E\u5782\u76F4\u65B9\u5411\u7684padding\uFF1B
\u2022\u91CC\u9762\u6DFB\u52A0\u5185\u8054\u5143\u7D20\uFF08\u76F4\u63A5Space\u952E\u7A7A\u683C\u662F\u6CA1\u7528\u7684\uFF09\uFF1B
\u2022\u8BBE\u7F6Eheight\u6216\u8005min-height\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u56DE\u7B54\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>margin\u91CD\u53E0\u6307\u7684\u662F\u5728\u5782\u76F4\u65B9\u5411\u4E0A\uFF0C\u4E24\u4E2A\u76F8\u90BB\u5143\u7D20\u7684margin\u53D1\u751F\u91CD\u53E0\u7684\u60C5\u51B5\u3002

\u4E00\u822C\u6765\u8BF4\u53EF\u4EE5\u5206\u4E3A\u56DB\u79CD\u60C5\u5F62\uFF1A

\u7B2C\u4E00\u79CD\u662F\u76F8\u90BB\u5144\u5F1F\u5143\u7D20\u7684marin-bottom\u548Cmargin-top\u7684\u503C\u53D1\u751F\u91CD\u53E0\u3002\u8FD9\u79CD\u60C5\u51B5\u4E0B\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E\u5176\u4E2D\u4E00\u4E2A\u5143\u7D20\u4E3ABFC
\u6765\u89E3\u51B3\u3002

\u7B2C\u4E8C\u79CD\u662F\u7236\u5143\u7D20\u7684margin-top\u548C\u5B50\u5143\u7D20\u7684margin-top\u53D1\u751F\u91CD\u53E0\u3002\u5B83\u4EEC\u53D1\u751F\u91CD\u53E0\u662F\u56E0\u4E3A\u5B83\u4EEC\u662F\u76F8\u90BB\u7684\uFF0C\u6240\u4EE5\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u8FD9
\u4E00\u70B9\u6765\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u3002\u6211\u4EEC\u53EF\u4EE5\u4E3A\u7236\u5143\u7D20\u8BBE\u7F6Eborder-top\u3001padding-top\u503C\u6765\u5206\u9694\u5B83\u4EEC\uFF0C\u5F53\u7136\u6211\u4EEC\u4E5F\u53EF\u4EE5\u5C06\u7236\u5143\u7D20\u8BBE\u7F6E\u4E3ABFC
\u6765\u89E3\u51B3\u3002

\u7B2C\u4E09\u79CD\u662F\u9AD8\u5EA6\u4E3Aauto\u7684\u7236\u5143\u7D20\u7684margin-bottom\u548C\u5B50\u5143\u7D20\u7684margin-bottom\u53D1\u751F\u91CD\u53E0\u3002\u5B83\u4EEC\u53D1\u751F\u91CD\u53E0\u4E00\u4E2A\u662F\u56E0\u4E3A\u5B83\u4EEC\u76F8
\u90BB\uFF0C\u4E00\u4E2A\u662F\u56E0\u4E3A\u7236\u5143\u7D20\u7684\u9AD8\u5EA6\u4E0D\u56FA\u5B9A\u3002\u56E0\u6B64\u6211\u4EEC\u53EF\u4EE5\u4E3A\u7236\u5143\u7D20\u8BBE\u7F6Eborder-bottom\u3001padding-bottom\u6765\u5206\u9694\u5B83\u4EEC\uFF0C\u4E5F\u53EF\u4EE5\u4E3A
\u7236\u5143\u7D20\u8BBE\u7F6E\u4E00\u4E2A\u9AD8\u5EA6\uFF0Cmax-height\u548Cmin-height\u4E5F\u80FD\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u3002\u5F53\u7136\u5C06\u7236\u5143\u7D20\u8BBE\u7F6E\u4E3ABFC\u662F\u6700\u7B80\u5355\u7684\u65B9\u6CD5\u3002

\u7B2C\u56DB\u79CD\u60C5\u51B5\uFF0C\u662F\u6CA1\u6709\u5185\u5BB9\u7684\u5143\u7D20\uFF0C\u81EA\u8EAB\u7684margin-top\u548Cmargin-bottom\u53D1\u751F\u7684\u91CD\u53E0\u3002\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u4E3A\u5176\u8BBE\u7F6Eborder\u3001pa
dding\u6216\u8005\u9AD8\u5EA6\u6765\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_27-\u5BF9-bfc-\u89C4\u8303-\u5757\u7EA7\u683C\u5F0F\u5316\u4E0A\u4E0B\u6587-block-formatting-context-\u7684\u7406\u89E3" tabindex="-1"><a class="header-anchor" href="#_27-\u5BF9-bfc-\u89C4\u8303-\u5757\u7EA7\u683C\u5F0F\u5316\u4E0A\u4E0B\u6587-block-formatting-context-\u7684\u7406\u89E3" aria-hidden="true">#</a> 27.\u5BF9 BFC \u89C4\u8303\uFF08\u5757\u7EA7\u683C\u5F0F\u5316\u4E0A\u4E0B\u6587\uFF1Ablock formatting context\uFF09\u7684\u7406\u89E3\uFF1F</h2><p>\u76F8\u5173\u77E5\u8BC6\u70B9\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5757\u683C\u5F0F\u5316\u4E0A\u4E0B\u6587\uFF08Block Formatting Context\uFF0CBFC\uFF09\u662FWeb\u9875\u9762\u7684\u53EF\u89C6\u5316CSS\u6E32\u67D3\u7684\u4E00\u90E8\u5206\uFF0C\u662F\u5E03\u5C40\u8FC7\u7A0B\u4E2D\u751F\u6210\u5757\u7EA7\u76D2
\u5B50\u7684\u533A\u57DF\uFF0C\u4E5F\u662F\u6D6E\u52A8\u5143\u7D20\u4E0E\u5176\u4ED6\u5143\u7D20\u7684\u4EA4\u4E92\u9650\u5B9A\u533A\u57DF\u3002

\u901A\u4FD7\u6765\u8BB2

\u2022BFC\u662F\u4E00\u4E2A\u72EC\u7ACB\u7684\u5E03\u5C40\u73AF\u5883\uFF0C\u53EF\u4EE5\u7406\u89E3\u4E3A\u4E00\u4E2A\u5BB9\u5668\uFF0C\u5728\u8FD9\u4E2A\u5BB9\u5668\u4E2D\u6309\u7167\u4E00\u5B9A\u89C4\u5219\u8FDB\u884C\u7269\u54C1\u6446\u653E\uFF0C\u5E76\u4E14\u4E0D\u4F1A\u5F71\u54CD\u5176\u5B83\u73AF\u5883\u4E2D\u7684\u7269\u54C1\u3002
\u2022\u5982\u679C\u4E00\u4E2A\u5143\u7D20\u7B26\u5408\u89E6\u53D1BFC\u7684\u6761\u4EF6\uFF0C\u5219BFC\u4E2D\u7684\u5143\u7D20\u5E03\u5C40\u4E0D\u53D7\u5916\u90E8\u5F71\u54CD\u3002

\u521B\u5EFABFC

\uFF081\uFF09\u6839\u5143\u7D20\u6216\u5305\u542B\u6839\u5143\u7D20\u7684\u5143\u7D20
\uFF082\uFF09\u6D6E\u52A8\u5143\u7D20float\uFF1Dleft|right\u6216inherit\uFF08\u2260none\uFF09
\uFF083\uFF09\u7EDD\u5BF9\u5B9A\u4F4D\u5143\u7D20position\uFF1Dabsolute\u6216fixed
\uFF084\uFF09display\uFF1Dinline-block|flex|inline-flex|table-cell\u6216table-caption
\uFF085\uFF09overflow\uFF1Dhidden|auto\u6216scroll(\u2260visible)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u56DE\u7B54\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>BFC\u6307\u7684\u662F\u5757\u7EA7\u683C\u5F0F\u5316\u4E0A\u4E0B\u6587\uFF0C\u4E00\u4E2A\u5143\u7D20\u5F62\u6210\u4E86BFC\u4E4B\u540E\uFF0C\u90A3\u4E48\u5B83\u5185\u90E8\u5143\u7D20\u4EA7\u751F\u7684\u5E03\u5C40\u4E0D\u4F1A\u5F71\u54CD\u5230\u5916\u90E8\u5143\u7D20\uFF0C\u5916\u90E8\u5143\u7D20\u7684\u5E03\u5C40\u4E5F
\u4E0D\u4F1A\u5F71\u54CD\u5230BFC\u4E2D\u7684\u5185\u90E8\u5143\u7D20\u3002\u4E00\u4E2ABFC\u5C31\u50CF\u662F\u4E00\u4E2A\u9694\u79BB\u533A\u57DF\uFF0C\u548C\u5176\u4ED6\u533A\u57DF\u4E92\u4E0D\u5F71\u54CD\u3002

\u4E00\u822C\u6765\u8BF4\u6839\u5143\u7D20\u662F\u4E00\u4E2ABFC\u533A\u57DF\uFF0C\u6D6E\u52A8\u548C\u7EDD\u5BF9\u5B9A\u4F4D\u7684\u5143\u7D20\u4E5F\u4F1A\u5F62\u6210BFC\uFF0Cdisplay\u5C5E\u6027\u7684\u503C\u4E3Ainline-block\u3001flex\u8FD9\u4E9B
\u5C5E\u6027\u65F6\u4E5F\u4F1A\u521B\u5EFABFC\u3002\u8FD8\u6709\u5C31\u662F\u5143\u7D20\u7684overflow\u7684\u503C\u4E0D\u4E3Avisible\u65F6\u90FD\u4F1A\u521B\u5EFABFC\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),V={href:"https://www.w3cplus.com/css/understanding-bfc-and-margin-collapse.html",target:"_blank",rel:"noopener noreferrer"},O={href:"https://segmentfault.com/a/1190000013647777",target:"_blank",rel:"noopener noreferrer"},J=a(`<h2 id="_28-ifc-\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_28-ifc-\u662F\u4EC0\u4E48" aria-hidden="true">#</a> 28.IFC \u662F\u4EC0\u4E48\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>IFC\u6307\u7684\u662F\u884C\u7EA7\u683C\u5F0F\u5316\u4E0A\u4E0B\u6587\uFF0C\u5B83\u6709\u8FD9\u6837\u7684\u4E00\u4E9B\u5E03\u5C40\u89C4\u5219\uFF1A

\uFF081\uFF09\u884C\u7EA7\u4E0A\u4E0B\u6587\u5185\u90E8\u7684\u76D2\u5B50\u4F1A\u5728\u6C34\u5E73\u65B9\u5411\uFF0C\u4E00\u4E2A\u63A5\u4E00\u4E2A\u5730\u653E\u7F6E\u3002
\uFF082\uFF09\u5F53\u4E00\u884C\u4E0D\u591F\u7684\u65F6\u5019\u4F1A\u81EA\u52A8\u5207\u6362\u5230\u4E0B\u4E00\u884C\u3002
\uFF083\uFF09\u884C\u7EA7\u4E0A\u4E0B\u6587\u7684\u9AD8\u5EA6\u7531\u5185\u90E8\u6700\u9AD8\u7684\u5185\u8054\u76D2\u5B50\u7684\u9AD8\u5EA6\u51B3\u5B9A\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),R={href:"https://segmentfault.com/a/1190000004466536#articleHeader5",target:"_blank",rel:"noopener noreferrer"},U={href:"https://blog.csdn.net/paintandraw/article/details/80401741",target:"_blank",rel:"noopener noreferrer"},Y=a(`<h2 id="_29-\u8BF7\u89E3\u91CA\u4E00\u4E0B\u4E3A\u4EC0\u4E48\u9700\u8981\u6E05\u9664\u6D6E\u52A8-\u6E05\u9664\u6D6E\u52A8\u7684\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_29-\u8BF7\u89E3\u91CA\u4E00\u4E0B\u4E3A\u4EC0\u4E48\u9700\u8981\u6E05\u9664\u6D6E\u52A8-\u6E05\u9664\u6D6E\u52A8\u7684\u65B9\u5F0F" aria-hidden="true">#</a> 29.\u8BF7\u89E3\u91CA\u4E00\u4E0B\u4E3A\u4EC0\u4E48\u9700\u8981\u6E05\u9664\u6D6E\u52A8\uFF1F\u6E05\u9664\u6D6E\u52A8\u7684\u65B9\u5F0F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6D6E\u52A8\u5143\u7D20\u53EF\u4EE5\u5DE6\u53F3\u79FB\u52A8\uFF0C\u76F4\u5230\u9047\u5230\u53E6\u4E00\u4E2A\u6D6E\u52A8\u5143\u7D20\u6216\u8005\u9047\u5230\u5B83\u5916\u8FB9\u7F18\u7684\u5305\u542B\u6846\u3002\u6D6E\u52A8\u6846\u4E0D\u5C5E\u4E8E\u6587\u6863\u6D41\u4E2D\u7684\u666E\u901A\u6D41\uFF0C\u5F53\u5143\u7D20\u6D6E\u52A8\u4E4B\u540E\uFF0C
\u4E0D\u4F1A\u5F71\u54CD\u5757\u7EA7\u5143\u7D20\u7684\u5E03\u5C40\uFF0C\u53EA\u4F1A\u5F71\u54CD\u5185\u8054\u5143\u7D20\u5E03\u5C40\u3002\u6B64\u65F6\u6587\u6863\u6D41\u4E2D\u7684\u666E\u901A\u6D41\u5C31\u4F1A\u8868\u73B0\u5F97\u8BE5\u6D6E\u52A8\u6846\u4E0D\u5B58\u5728\u4E00\u6837\u7684\u5E03\u5C40\u6A21\u5F0F\u3002\u5F53\u5305\u542B\u6846
\u7684\u9AD8\u5EA6\u5C0F\u4E8E\u6D6E\u52A8\u6846\u7684\u65F6\u5019\uFF0C\u6B64\u65F6\u5C31\u4F1A\u51FA\u73B0\u201C\u9AD8\u5EA6\u584C\u9677\u201D\u3002

\u6E05\u9664\u6D6E\u52A8\u662F\u4E3A\u4E86\u6E05\u9664\u4F7F\u7528\u6D6E\u52A8\u5143\u7D20\u4EA7\u751F\u7684\u5F71\u54CD\u3002\u6D6E\u52A8\u7684\u5143\u7D20\uFF0C\u9AD8\u5EA6\u4F1A\u584C\u9677\uFF0C\u800C\u9AD8\u5EA6\u7684\u584C\u9677\u4F7F\u6211\u4EEC\u9875\u9762\u540E\u9762\u7684\u5E03\u5C40\u4E0D\u80FD\u6B63\u5E38\u663E\u793A\u3002

\u6E05\u9664\u6D6E\u52A8\u7684\u65B9\u5F0F

\uFF081\uFF09\u4F7F\u7528clear\u5C5E\u6027\u6E05\u9664\u6D6E\u52A8\u3002\u53C2\u800328\u3002

\uFF082\uFF09\u4F7F\u7528BFC\u5757\u7EA7\u683C\u5F0F\u5316\u4E0A\u4E0B\u6587\u6765\u6E05\u9664\u6D6E\u52A8\u3002\u53C2\u800326\u3002

\u56E0\u4E3ABFC\u5143\u7D20\u4E0D\u4F1A\u5F71\u54CD\u5916\u90E8\u5143\u7D20\u7684\u7279\u70B9\uFF0C\u6240\u4EE5BFC\u5143\u7D20\u4E5F\u53EF\u4EE5\u7528\u6765\u6E05\u9664\u6D6E\u52A8\u7684\u5F71\u54CD\uFF0C\u56E0\u4E3A\u5982\u679C\u4E0D\u6E05\u9664\uFF0C\u5B50\u5143\u7D20\u6D6E\u52A8\u5219\u7236\u5143
\u7D20\u9AD8\u5EA6\u584C\u9677\uFF0C\u5FC5\u7136\u4F1A\u5F71\u54CD\u540E\u9762\u5143\u7D20\u5E03\u5C40\u548C\u5B9A\u4F4D\uFF0C\u8FD9\u663E\u7136\u6709\u8FDDBFC\u5143\u7D20\u7684\u5B50\u5143\u7D20\u4E0D\u4F1A\u5F71\u54CD\u5916\u90E8\u5143\u7D20\u7684\u8BBE\u5B9A\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_30-\u4F7F\u7528-clear-\u5C5E\u6027\u6E05\u9664\u6D6E\u52A8\u7684\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_30-\u4F7F\u7528-clear-\u5C5E\u6027\u6E05\u9664\u6D6E\u52A8\u7684\u539F\u7406" aria-hidden="true">#</a> 30.\u4F7F\u7528 clear \u5C5E\u6027\u6E05\u9664\u6D6E\u52A8\u7684\u539F\u7406\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4F7F\u7528clear\u5C5E\u6027\u6E05\u9664\u6D6E\u52A8\uFF0C\u5176\u8BED\u6CD5\u5982\u4E0B\uFF1A

clear:none|left|right|both

\u5982\u679C\u5355\u770B\u5B57\u9762\u610F\u601D\uFF0Cclear:left\u5E94\u8BE5\u662F\u201C\u6E05\u9664\u5DE6\u6D6E\u52A8\u201D\uFF0Cclear:right\u5E94\u8BE5\u662F\u201C\u6E05\u9664\u53F3\u6D6E\u52A8\u201D\u7684\u610F\u601D\uFF0C\u5B9E\u9645\u4E0A\uFF0C\u8FD9\u79CD\u89E3\u91CA\u662F\u6709\u95EE
\u9898\u7684\uFF0C\u56E0\u4E3A\u6D6E\u52A8\u4E00\u76F4\u8FD8\u5728\uFF0C\u5E76\u6CA1\u6709\u6E05\u9664\u3002

\u5B98\u65B9\u5BF9clear\u5C5E\u6027\u7684\u89E3\u91CA\u662F\uFF1A\u201C\u5143\u7D20\u76D2\u5B50\u7684\u8FB9\u4E0D\u80FD\u548C\u524D\u9762\u7684\u6D6E\u52A8\u5143\u7D20\u76F8\u90BB\u3002\u201D\uFF0C\u6211\u4EEC\u5BF9\u5143\u7D20\u8BBE\u7F6Eclear\u5C5E\u6027\u662F\u4E3A\u4E86\u907F\u514D\u6D6E\u52A8\u5143\u7D20
\u5BF9\u8BE5\u5143\u7D20\u7684\u5F71\u54CD\uFF0C\u800C\u4E0D\u662F\u6E05\u9664\u6389\u6D6E\u52A8\u3002

\u8FD8\u9700\u8981\u6CE8\u610F\u7684\u4E00\u70B9\u662Fclear\u5C5E\u6027\u6307\u7684\u662F\u5143\u7D20\u76D2\u5B50\u7684\u8FB9\u4E0D\u80FD\u548C\u524D\u9762\u7684\u6D6E\u52A8\u5143\u7D20\u76F8\u90BB\uFF0C\u6CE8\u610F\u8FD9\u91CC\u201C\u524D\u9762\u7684\u201D3\u4E2A\u5B57\uFF0C\u4E5F\u5C31\u662Fclear\u5C5E
\u6027\u5BF9\u201C\u540E\u9762\u7684\u201D\u6D6E\u52A8\u5143\u7D20\u662F\u4E0D\u95FB\u4E0D\u95EE\u7684\u3002\u8003\u8651\u5230float\u5C5E\u6027\u8981\u4E48\u662Fleft\uFF0C\u8981\u4E48\u662Fright\uFF0C\u4E0D\u53EF\u80FD\u540C\u65F6\u5B58\u5728\uFF0C\u540C\u65F6\u7531\u4E8Eclear
\u5C5E\u6027\u5BF9\u201C\u540E\u9762\u7684\u201D\u6D6E\u52A8\u5143\u7D20\u4E0D\u95FB\u4E0D\u95EE\uFF0C\u56E0\u6B64\uFF0C\u5F53clear:left\u6709\u6548\u7684\u65F6\u5019\uFF0Cclear:right\u5FC5\u5B9A\u65E0\u6548\uFF0C\u4E5F\u5C31\u662F\u6B64\u65F6clear:left
\u7B49\u540C\u4E8E\u8BBE\u7F6Eclear:both\uFF1B\u540C\u6837\u5730\uFF0Cclear:right\u5982\u679C\u6709\u6548\u4E5F\u662F\u7B49\u540C\u4E8E\u8BBE\u7F6Eclear:both\u3002\u7531\u6B64\u53EF\u89C1\uFF0Cclear:left\u548Ccle
ar:right\u8FD9\u4E24\u4E2A\u58F0\u660E\u5C31\u6CA1\u6709\u4EFB\u4F55\u4F7F\u7528\u7684\u4EF7\u503C\uFF0C\u81F3\u5C11\u5728CSS\u4E16\u754C\u4E2D\u662F\u5982\u6B64\uFF0C\u76F4\u63A5\u4F7F\u7528clear:both\u5427\u3002

\u4E00\u822C\u4F7F\u7528\u4F2A\u5143\u7D20\u7684\u65B9\u5F0F\u6E05\u9664\u6D6E\u52A8

.clear::after{
content:&#39;&#39;;
display:table;//\u4E5F\u53EF\u4EE5\u662F&#39;block&#39;\uFF0C\u6216\u8005\u662F&#39;list-item&#39;
clear:both;
}

clear\u5C5E\u6027\u53EA\u6709\u5757\u7EA7\u5143\u7D20\u624D\u6709\u6548\u7684\uFF0C\u800C::after\u7B49\u4F2A\u5143\u7D20\u9ED8\u8BA4\u90FD\u662F\u5185\u8054\u6C34\u5E73\uFF0C\u8FD9\u5C31\u662F\u501F\u52A9\u4F2A\u5143\u7D20\u6E05\u9664\u6D6E\u52A8\u5F71\u54CD\u65F6\u9700\u8981\u8BBE\u7F6Edisp
lay\u5C5E\u6027\u503C\u7684\u539F\u56E0\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_31-zoom-1-\u7684\u6E05\u9664\u6D6E\u52A8\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_31-zoom-1-\u7684\u6E05\u9664\u6D6E\u52A8\u539F\u7406" aria-hidden="true">#</a> 31.zoom:1 \u7684\u6E05\u9664\u6D6E\u52A8\u539F\u7406?</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6E05\u9664\u6D6E\u52A8\uFF0C\u89E6\u53D1hasLayout\uFF1B
zoom\u5C5E\u6027\u662FIE\u6D4F\u89C8\u5668\u7684\u4E13\u6709\u5C5E\u6027\uFF0C\u5B83\u53EF\u4EE5\u8BBE\u7F6E\u6216\u68C0\u7D22\u5BF9\u8C61\u7684\u7F29\u653E\u6BD4\u4F8B\u3002\u89E3\u51B3ie\u4E0B\u6BD4\u8F83\u5947\u8469\u7684bug\u3002\u8B6C\u5982\u5916\u8FB9\u8DDD\uFF08margin\uFF09
\u7684\u91CD\u53E0\uFF0C\u6D6E\u52A8\u6E05\u9664\uFF0C\u89E6\u53D1ie\u7684haslayout\u5C5E\u6027\u7B49\u3002

\u6765\u9F99\u53BB\u8109\u5927\u6982\u5982\u4E0B\uFF1A
\u5F53\u8BBE\u7F6E\u4E86zoom\u7684\u503C\u4E4B\u540E\uFF0C\u6240\u8BBE\u7F6E\u7684\u5143\u7D20\u5C31\u4F1A\u5C31\u4F1A\u6269\u5927\u6216\u8005\u7F29\u5C0F\uFF0C\u9AD8\u5EA6\u5BBD\u5EA6\u5C31\u4F1A\u91CD\u65B0\u8BA1\u7B97\u4E86\uFF0C\u8FD9\u91CC\u4E00\u65E6\u6539\u53D8zoom\u503C\u65F6\u5176\u5B9E\u4E5F\u4F1A\u53D1
\u751F\u91CD\u65B0\u6E32\u67D3\uFF0C\u8FD0\u7528\u8FD9\u4E2A\u539F\u7406\uFF0C\u4E5F\u5C31\u89E3\u51B3\u4E86ie\u4E0B\u5B50\u5143\u7D20\u6D6E\u52A8\u65F6\u5019\u7236\u5143\u7D20\u4E0D\u968F\u7740\u81EA\u52A8\u6269\u5927\u7684\u95EE\u9898\u3002

zoom\u5C5E\u6027\u662FIE\u6D4F\u89C8\u5668\u7684\u4E13\u6709\u5C5E\u6027\uFF0C\u706B\u72D0\u548C\u8001\u7248\u672C\u7684webkit\u6838\u5FC3\u7684\u6D4F\u89C8\u5668\u90FD\u4E0D\u652F\u6301\u8FD9\u4E2A\u5C5E\u6027\u3002\u7136\u800C\uFF0Czoom\u73B0\u5728\u5DF2\u7ECF\u88AB\u9010\u6B65\u6807
\u51C6\u5316\uFF0C\u51FA\u73B0\u5728CSS3.0\u89C4\u8303\u8349\u6848\u4E2D\u3002

\u76EE\u524D\u975Eie\u7531\u4E8E\u4E0D\u652F\u6301\u8FD9\u4E2A\u5C5E\u6027\uFF0C\u5B83\u4EEC\u53C8\u662F\u901A\u8FC7\u4EC0\u4E48\u5C5E\u6027\u6765\u5B9E\u73B0\u5143\u7D20\u7684\u7F29\u653E\u5462\uFF1F\u53EF\u4EE5\u901A\u8FC7css3\u91CC\u9762\u7684\u52A8\u753B\u5C5E\u6027scale\u8FDB\u884C\u7F29\u653E\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_32-\u79FB\u52A8\u7AEF\u7684\u5E03\u5C40\u7528\u8FC7\u5A92\u4F53\u67E5\u8BE2\u5417" tabindex="-1"><a class="header-anchor" href="#_32-\u79FB\u52A8\u7AEF\u7684\u5E03\u5C40\u7528\u8FC7\u5A92\u4F53\u67E5\u8BE2\u5417" aria-hidden="true">#</a> 32.\u79FB\u52A8\u7AEF\u7684\u5E03\u5C40\u7528\u8FC7\u5A92\u4F53\u67E5\u8BE2\u5417\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5047\u8BBE\u4F60\u73B0\u5728\u6B63\u7528\u4E00\u53F0\u663E\u793A\u8BBE\u5907\u6765\u9605\u8BFB\u8FD9\u7BC7\u6587\u7AE0\uFF0C\u540C\u65F6\u4F60\u4E5F\u60F3\u628A\u5B83\u6295\u5F71\u5230\u5C4F\u5E55\u4E0A\uFF0C\u6216\u8005\u6253\u5370\u51FA\u6765\uFF0C\u800C\u663E\u793A\u8BBE\u5907\u3001\u5C4F\u5E55\u6295\u5F71\u548C\u6253\u5370\u7B49\u8FD9\u4E9B
\u5A92\u4ECB\u90FD\u6709\u81EA\u5DF1\u7684\u7279\u70B9\uFF0CCSS\u5C31\u662F\u4E3A\u6587\u6863\u63D0\u4F9B\u5728\u4E0D\u540C\u5A92\u4ECB\u4E0A\u5C55\u793A\u7684\u9002\u914D\u65B9\u6CD5

\u5F53\u5A92\u4F53\u67E5\u8BE2\u4E3A\u771F\u65F6\uFF0C\u76F8\u5173\u7684\u6837\u5F0F\u8868\u6216\u6837\u5F0F\u89C4\u5219\u4F1A\u6309\u7167\u6B63\u5E38\u7684\u7EA7\u8054\u89C4\u88AB\u5E94\u7528\u3002\u5F53\u5A92\u4F53\u67E5\u8BE2\u8FD4\u56DE\u5047\uFF0C\u6807\u7B7E\u4E0A\u5E26\u6709\u5A92\u4F53\u67E5\u8BE2\u7684\u6837\u5F0F\u8868\u4ECD\u5C06\u88AB
\u4E0B\u8F7D\uFF08\u53EA\u4E0D\u8FC7\u4E0D\u4F1A\u88AB\u5E94\u7528\uFF09\u3002

\u5305\u542B\u4E86\u4E00\u4E2A\u5A92\u4F53\u7C7B\u578B\u548C\u81F3\u5C11\u4E00\u4E2A\u4F7F\u7528\u5BBD\u5EA6\u3001\u9AD8\u5EA6\u548C\u989C\u8272\u7B49\u5A92\u4F53\u5C5E\u6027\u6765\u9650\u5236\u6837\u5F0F\u8868\u8303\u56F4\u7684\u8868\u8FBE\u5F0F\u3002CSS3\u52A0\u5165\u7684\u5A92\u4F53\u67E5\u8BE2\u4F7F\u5F97\u65E0\u9700\u4FEE\u6539
\u5185\u5BB9\u4FBF\u53EF\u4EE5\u4F7F\u6837\u5F0F\u5E94\u7528\u4E8E\u67D0\u4E9B\u7279\u5B9A\u7684\u8BBE\u5907\u8303\u56F4\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),X={href:"http://www.runoob.com/cssref/css3-pr-mediaquery.html",target:"_blank",rel:"noopener noreferrer"},K={href:"http://caibaojian.com/356.html",target:"_blank",rel:"noopener noreferrer"},Z=a(`<h2 id="_33-\u4F7F\u7528-css-\u9884\u5904\u7406\u5668\u5417-\u559C\u6B22\u54EA\u4E2A" tabindex="-1"><a class="header-anchor" href="#_33-\u4F7F\u7528-css-\u9884\u5904\u7406\u5668\u5417-\u559C\u6B22\u54EA\u4E2A" aria-hidden="true">#</a> 33.\u4F7F\u7528 CSS \u9884\u5904\u7406\u5668\u5417\uFF1F\u559C\u6B22\u54EA\u4E2A\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>SASS\uFF08SASS\u3001LESS\u6CA1\u6709\u672C\u8D28\u533A\u522B\uFF0C\u53EA\u56E0\u4E3A\u56E2\u961F\u524D\u7AEF\u90FD\u662F\u7528\u7684SASS\uFF09
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_34-css-\u4F18\u5316\u3001\u63D0\u9AD8\u6027\u80FD\u7684\u65B9\u6CD5\u6709\u54EA\u4E9B" tabindex="-1"><a class="header-anchor" href="#_34-css-\u4F18\u5316\u3001\u63D0\u9AD8\u6027\u80FD\u7684\u65B9\u6CD5\u6709\u54EA\u4E9B" aria-hidden="true">#</a> 34.CSS \u4F18\u5316\u3001\u63D0\u9AD8\u6027\u80FD\u7684\u65B9\u6CD5\u6709\u54EA\u4E9B\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u52A0\u8F7D\u6027\u80FD\uFF1A

\uFF081\uFF09css\u538B\u7F29\uFF1A\u5C06\u5199\u597D\u7684css\u8FDB\u884C\u6253\u5305\u538B\u7F29\uFF0C\u53EF\u4EE5\u51CF\u5C11\u5F88\u591A\u7684\u4F53\u79EF\u3002
\uFF082\uFF09css\u5355\u4E00\u6837\u5F0F\uFF1A\u5F53\u9700\u8981\u4E0B\u8FB9\u8DDD\u548C\u5DE6\u8FB9\u8DDD\u7684\u65F6\u5019\uFF0C\u5F88\u591A\u65F6\u5019\u9009\u62E9:margin:top 0 bottom 0;\u4F46margin-bottom:bot
tom;margin-left:left;\u6267\u884C\u7684\u6548\u7387\u66F4\u9AD8\u3002
\uFF083\uFF09\u51CF\u5C11\u4F7F\u7528@import,\u800C\u5EFA\u8BAE\u4F7F\u7528link\uFF0C\u56E0\u4E3A\u540E\u8005\u5728\u9875\u9762\u52A0\u8F7D\u65F6\u4E00\u8D77\u52A0\u8F7D\uFF0C\u524D\u8005\u662F\u7B49\u5F85\u9875\u9762\u52A0\u8F7D\u5B8C\u6210\u4E4B\u540E\u518D\u8FDB\u884C\u52A0\u8F7D\u3002

\u9009\u62E9\u5668\u6027\u80FD\uFF1A

\uFF081\uFF09\u5173\u952E\u9009\u62E9\u5668\uFF08key selector\uFF09\u3002\u9009\u62E9\u5668\u7684\u6700\u540E\u9762\u7684\u90E8\u5206\u4E3A\u5173\u952E\u9009\u62E9\u5668\uFF08\u5373\u7528\u6765\u5339\u914D\u76EE\u6807\u5143\u7D20\u7684\u90E8\u5206\uFF09\u3002CSS\u9009\u62E9\u7B26\u662F\u4ECE\u53F3\u5230
\u5DE6\u8FDB\u884C\u5339\u914D\u7684\u3002\u5F53\u4F7F\u7528\u540E\u4EE3\u9009\u62E9\u5668\u7684\u65F6\u5019\uFF0C\u6D4F\u89C8\u5668\u4F1A\u904D\u5386\u6240\u6709\u5B50\u5143\u7D20\u6765\u786E\u5B9A\u662F\u5426\u662F\u6307\u5B9A\u7684\u5143\u7D20\u7B49\u7B49\uFF1B

\uFF082\uFF09\u5982\u679C\u89C4\u5219\u62E5\u6709ID\u9009\u62E9\u5668\u4F5C\u4E3A\u5176\u5173\u952E\u9009\u62E9\u5668\uFF0C\u5219\u4E0D\u8981\u4E3A\u89C4\u5219\u589E\u52A0\u6807\u7B7E\u3002\u8FC7\u6EE4\u6389\u65E0\u5173\u7684\u89C4\u5219\uFF08\u8FD9\u6837\u6837\u5F0F\u7CFB\u7EDF\u5C31\u4E0D\u4F1A\u6D6A\u8D39\u65F6\u95F4\u53BB\u5339
\u914D\u5B83\u4EEC\u4E86\uFF09\u3002

\uFF083\uFF09\u907F\u514D\u4F7F\u7528\u901A\u914D\u89C4\u5219\uFF0C\u5982*{}\u8BA1\u7B97\u6B21\u6570\u60CA\u4EBA\uFF01\u53EA\u5BF9\u9700\u8981\u7528\u5230\u7684\u5143\u7D20\u8FDB\u884C\u9009\u62E9\u3002

\uFF084\uFF09\u5C3D\u91CF\u5C11\u7684\u53BB\u5BF9\u6807\u7B7E\u8FDB\u884C\u9009\u62E9\uFF0C\u800C\u662F\u7528class\u3002

\uFF085\uFF09\u5C3D\u91CF\u5C11\u7684\u53BB\u4F7F\u7528\u540E\u4EE3\u9009\u62E9\u5668\uFF0C\u964D\u4F4E\u9009\u62E9\u5668\u7684\u6743\u91CD\u503C\u3002\u540E\u4EE3\u9009\u62E9\u5668\u7684\u5F00\u9500\u662F\u6700\u9AD8\u7684\uFF0C\u5C3D\u91CF\u5C06\u9009\u62E9\u5668\u7684\u6DF1\u5EA6\u964D\u5230\u6700\u4F4E\uFF0C\u6700\u9AD8\u4E0D\u8981\u8D85\u8FC7
\u4E09\u5C42\uFF0C\u66F4\u591A\u7684\u4F7F\u7528\u7C7B\u6765\u5173\u8054\u6BCF\u4E00\u4E2A\u6807\u7B7E\u5143\u7D20\u3002

\uFF086\uFF09\u4E86\u89E3\u54EA\u4E9B\u5C5E\u6027\u662F\u53EF\u4EE5\u901A\u8FC7\u7EE7\u627F\u800C\u6765\u7684\uFF0C\u7136\u540E\u907F\u514D\u5BF9\u8FD9\u4E9B\u5C5E\u6027\u91CD\u590D\u6307\u5B9A\u89C4\u5219\u3002

\u6E32\u67D3\u6027\u80FD\uFF1A

\uFF081\uFF09\u614E\u91CD\u4F7F\u7528\u9AD8\u6027\u80FD\u5C5E\u6027\uFF1A\u6D6E\u52A8\u3001\u5B9A\u4F4D\u3002

\uFF082\uFF09\u5C3D\u91CF\u51CF\u5C11\u9875\u9762\u91CD\u6392\u3001\u91CD\u7ED8\u3002

\uFF083\uFF09\u53BB\u9664\u7A7A\u89C4\u5219\uFF1A\uFF5B\uFF5D\u3002\u7A7A\u89C4\u5219\u7684\u4EA7\u751F\u539F\u56E0\u4E00\u822C\u6765\u8BF4\u662F\u4E3A\u4E86\u9884\u7559\u6837\u5F0F\u3002\u53BB\u9664\u8FD9\u4E9B\u7A7A\u89C4\u5219\u65E0\u7591\u80FD\u51CF\u5C11css\u6587\u6863\u4F53\u79EF\u3002

\uFF084\uFF09\u5C5E\u6027\u503C\u4E3A0\u65F6\uFF0C\u4E0D\u52A0\u5355\u4F4D\u3002

\uFF085\uFF09\u5C5E\u6027\u503C\u4E3A\u6D6E\u52A8\u5C0F\u65700.**\uFF0C\u53EF\u4EE5\u7701\u7565\u5C0F\u6570\u70B9\u4E4B\u524D\u76840\u3002

\uFF086\uFF09\u6807\u51C6\u5316\u5404\u79CD\u6D4F\u89C8\u5668\u524D\u7F00\uFF1A\u5E26\u6D4F\u89C8\u5668\u524D\u7F00\u7684\u5728\u524D\u3002\u6807\u51C6\u5C5E\u6027\u5728\u540E\u3002

\uFF087\uFF09\u4E0D\u4F7F\u7528@import\u524D\u7F00\uFF0C\u5B83\u4F1A\u5F71\u54CDcss\u7684\u52A0\u8F7D\u901F\u5EA6\u3002

\uFF088\uFF09\u9009\u62E9\u5668\u4F18\u5316\u5D4C\u5957\uFF0C\u5C3D\u91CF\u907F\u514D\u5C42\u7EA7\u8FC7\u6DF1\u3002

\uFF089\uFF09css\u96EA\u78A7\u56FE\uFF0C\u540C\u4E00\u9875\u9762\u76F8\u8FD1\u90E8\u5206\u7684\u5C0F\u56FE\u6807\uFF0C\u65B9\u4FBF\u4F7F\u7528\uFF0C\u51CF\u5C11\u9875\u9762\u7684\u8BF7\u6C42\u6B21\u6570\uFF0C\u4F46\u662F\u540C\u65F6\u56FE\u7247\u672C\u8EAB\u4F1A\u53D8\u5927\uFF0C\u4F7F\u7528\u65F6\uFF0C\u4F18\u52A3\u8003\u8651\u6E05
\u695A\uFF0C\u518D\u4F7F\u7528\u3002

\uFF0810\uFF09\u6B63\u786E\u4F7F\u7528display\u7684\u5C5E\u6027\uFF0C\u7531\u4E8Edisplay\u7684\u4F5C\u7528\uFF0C\u67D0\u4E9B\u6837\u5F0F\u7EC4\u5408\u4F1A\u65E0\u6548\uFF0C\u5F92\u589E\u6837\u5F0F\u4F53\u79EF\u7684\u540C\u65F6\u4E5F\u5F71\u54CD\u89E3\u6790\u6027\u80FD\u3002

\uFF0811\uFF09\u4E0D\u6EE5\u7528web\u5B57\u4F53\u3002\u5BF9\u4E8E\u4E2D\u6587\u7F51\u7AD9\u6765\u8BF4WebFonts\u53EF\u80FD\u5F88\u964C\u751F\uFF0C\u56FD\u5916\u5374\u5F88\u6D41\u884C\u3002web fonts\u901A\u5E38\u4F53\u79EF\u5E9E\u5927\uFF0C\u800C\u4E14\u4E00\u4E9B\u6D4F
\u89C8\u5668\u5728\u4E0B\u8F7Dweb fonts\u65F6\u4F1A\u963B\u585E\u9875\u9762\u6E32\u67D3\u635F\u4F24\u6027\u80FD\u3002

\u53EF\u7EF4\u62A4\u6027\u3001\u5065\u58EE\u6027\uFF1A

\uFF081\uFF09\u5C06\u5177\u6709\u76F8\u540C\u5C5E\u6027\u7684\u6837\u5F0F\u62BD\u79BB\u51FA\u6765\uFF0C\u6574\u5408\u5E76\u901A\u8FC7class\u5728\u9875\u9762\u4E2D\u8FDB\u884C\u4F7F\u7528\uFF0C\u63D0\u9AD8css\u7684\u53EF\u7EF4\u62A4\u6027\u3002
\uFF082\uFF09\u6837\u5F0F\u4E0E\u5185\u5BB9\u5206\u79BB\uFF1A\u5C06css\u4EE3\u7801\u5B9A\u4E49\u5230\u5916\u90E8css\u4E2D\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),Q={href:"https://www.zhihu.com/question/19886806",target:"_blank",rel:"noopener noreferrer"},$={href:"https://www.jianshu.com/p/4e673bf24a3b",target:"_blank",rel:"noopener noreferrer"},nn=a(`<h2 id="_35-\u6D4F\u89C8\u5668\u662F\u600E\u6837\u89E3\u6790-css-\u9009\u62E9\u5668\u7684" tabindex="-1"><a class="header-anchor" href="#_35-\u6D4F\u89C8\u5668\u662F\u600E\u6837\u89E3\u6790-css-\u9009\u62E9\u5668\u7684" aria-hidden="true">#</a> 35.\u6D4F\u89C8\u5668\u662F\u600E\u6837\u89E3\u6790 CSS \u9009\u62E9\u5668\u7684\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6837\u5F0F\u7CFB\u7EDF\u4ECE\u5173\u952E\u9009\u62E9\u5668\u5F00\u59CB\u5339\u914D\uFF0C\u7136\u540E\u5DE6\u79FB\u67E5\u627E\u89C4\u5219\u9009\u62E9\u5668\u7684\u7956\u5148\u5143\u7D20\u3002\u53EA\u8981\u9009\u62E9\u5668\u7684\u5B50\u6811\u4E00\u76F4\u5728\u5DE5\u4F5C\uFF0C\u6837\u5F0F\u7CFB\u7EDF\u5C31\u4F1A\u6301\u7EED\u5DE6\u79FB\uFF0C\u76F4
\u5230\u548C\u89C4\u5219\u5339\u914D\uFF0C\u6216\u8005\u662F\u56E0\u4E3A\u4E0D\u5339\u914D\u800C\u653E\u5F03\u8BE5\u89C4\u5219\u3002

\u8BD5\u60F3\u4E00\u4E0B\uFF0C\u5982\u679C\u91C7\u7528\u4ECE\u5DE6\u81F3\u53F3\u7684\u65B9\u5F0F\u8BFB\u53D6CSS\u89C4\u5219\uFF0C\u90A3\u4E48\u5927\u591A\u6570\u89C4\u5219\u8BFB\u5230\u6700\u540E\uFF08\u6700\u53F3\uFF09\u624D\u4F1A\u53D1\u73B0\u662F\u4E0D\u5339\u914D\u7684\uFF0C\u8FD9\u6837\u505A\u4F1A\u8D39\u65F6\u8017\u80FD\uFF0C
\u6700\u540E\u6709\u5F88\u591A\u90FD\u662F\u65E0\u7528\u7684\uFF1B\u800C\u5982\u679C\u91C7\u53D6\u4ECE\u53F3\u5411\u5DE6\u7684\u65B9\u5F0F\uFF0C\u90A3\u4E48\u53EA\u8981\u53D1\u73B0\u6700\u53F3\u8FB9\u9009\u62E9\u5668\u4E0D\u5339\u914D\uFF0C\u5C31\u53EF\u4EE5\u76F4\u63A5\u820D\u5F03\u4E86\uFF0C\u907F\u514D\u4E86\u8BB8\u591A\u65E0\u6548\u5339\u914D\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),en={href:"https://juejin.im/entry/5a123c55f265da432240cc90",target:"_blank",rel:"noopener noreferrer"},sn=a(`<h2 id="_36-\u5728\u7F51\u9875\u4E2D\u5E94\u8BE5\u4F7F\u7528\u5947\u6570\u8FD8\u662F\u5076\u6570\u7684\u5B57\u4F53-\u4E3A\u4EC0\u4E48\u5462" tabindex="-1"><a class="header-anchor" href="#_36-\u5728\u7F51\u9875\u4E2D\u5E94\u8BE5\u4F7F\u7528\u5947\u6570\u8FD8\u662F\u5076\u6570\u7684\u5B57\u4F53-\u4E3A\u4EC0\u4E48\u5462" aria-hidden="true">#</a> 36.\u5728\u7F51\u9875\u4E2D\u5E94\u8BE5\u4F7F\u7528\u5947\u6570\u8FD8\u662F\u5076\u6570\u7684\u5B57\u4F53\uFF1F\u4E3A\u4EC0\u4E48\u5462\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\uFF081\uFF09\u5076\u6570\u5B57\u53F7\u76F8\u5BF9\u66F4\u5BB9\u6613\u548Cweb\u8BBE\u8BA1\u7684\u5176\u4ED6\u90E8\u5206\u6784\u6210\u6BD4\u4F8B\u5173\u7CFB\u3002\u6BD4\u5982\uFF1A\u5F53\u6211\u7528\u4E8614px\u7684\u6B63\u6587\u5B57\u53F7\uFF0C\u6211\u53EF\u80FD\u4F1A\u5728\u4E00\u4E9B\u5730\u65B9\u752814
\xD70.5=7px\u7684margin\uFF0C\u5728\u53E6\u4E00\u4E9B\u5730\u65B9\u752814\xD71.5=21px\u7684\u6807\u9898\u5B57\u53F7\u3002
\uFF082\uFF09\u6D4F\u89C8\u5668\u7F18\u6545\uFF0C\u4F4E\u7248\u672C\u7684\u6D4F\u89C8\u5668ie6\u4F1A\u628A\u5947\u6570\u5B57\u4F53\u5F3A\u5236\u8F6C\u5316\u4E3A\u5076\u6570\uFF0C\u537313px\u6E32\u67D3\u4E3A14px\u3002
\uFF083\uFF09\u7CFB\u7EDF\u5DEE\u522B\uFF0C\u65E9\u671F\u7684Windows\u91CC\uFF0C\u4E2D\u6613\u5B8B\u4F53\u70B9\u9635\u53EA\u670912\u548C14\u300115\u300116px\uFF0C\u552F\u72EC\u7F3A\u5C1113px\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),an={href:"https://blog.csdn.net/jian_xi/article/details/79346477",target:"_blank",rel:"noopener noreferrer"},ln={href:"https://www.zhihu.com/question/20440679",target:"_blank",rel:"noopener noreferrer"},tn=a(`<h2 id="_37-margin-\u548C-padding-\u5206\u522B\u9002\u5408\u4EC0\u4E48\u573A\u666F\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_37-margin-\u548C-padding-\u5206\u522B\u9002\u5408\u4EC0\u4E48\u573A\u666F\u4F7F\u7528" aria-hidden="true">#</a> 37.margin \u548C padding \u5206\u522B\u9002\u5408\u4EC0\u4E48\u573A\u666F\u4F7F\u7528\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>margin\u662F\u7528\u6765\u9694\u5F00\u5143\u7D20\u4E0E\u5143\u7D20\u7684\u95F4\u8DDD\uFF1Bpadding\u662F\u7528\u6765\u9694\u5F00\u5143\u7D20\u4E0E\u5185\u5BB9\u7684\u95F4\u9694\u3002
margin\u7528\u4E8E\u5E03\u5C40\u5206\u5F00\u5143\u7D20\u4F7F\u5143\u7D20\u4E0E\u5143\u7D20\u4E92\u4E0D\u76F8\u5E72\u3002
padding\u7528\u4E8E\u5143\u7D20\u4E0E\u5185\u5BB9\u4E4B\u95F4\u7684\u95F4\u9694\uFF0C\u8BA9\u5185\u5BB9\uFF08\u6587\u5B57\uFF09\u4E0E\uFF08\u5305\u88F9\uFF09\u5143\u7D20\u4E4B\u95F4\u6709\u4E00\u6BB5\u8DDD\u79BB\u3002

\u4F55\u65F6\u5E94\u5F53\u4F7F\u7528margin\uFF1A
\u2022\u9700\u8981\u5728border\u5916\u4FA7\u6DFB\u52A0\u7A7A\u767D\u65F6\u3002
\u2022\u7A7A\u767D\u5904\u4E0D\u9700\u8981\u80CC\u666F\uFF08\u8272\uFF09\u65F6\u3002
\u2022\u4E0A\u4E0B\u76F8\u8FDE\u7684\u4E24\u4E2A\u76D2\u5B50\u4E4B\u95F4\u7684\u7A7A\u767D\uFF0C\u9700\u8981\u76F8\u4E92\u62B5\u6D88\u65F6\u3002\u598215px+20px\u7684margin\uFF0C\u5C06\u5F97\u523020px\u7684\u7A7A\u767D\u3002

\u4F55\u65F6\u5E94\u5F53\u65F6\u7528padding\uFF1A
\u2022\u9700\u8981\u5728border\u5185\u6D4B\u6DFB\u52A0\u7A7A\u767D\u65F6\u3002
\u2022\u7A7A\u767D\u5904\u9700\u8981\u80CC\u666F\uFF08\u8272\uFF09\u65F6\u3002
\u2022\u4E0A\u4E0B\u76F8\u8FDE\u7684\u4E24\u4E2A\u76D2\u5B50\u4E4B\u95F4\u7684\u7A7A\u767D\uFF0C\u5E0C\u671B\u7B49\u4E8E\u4E24\u8005\u4E4B\u548C\u65F6\u3002\u598215px+20px\u7684padding\uFF0C\u5C06\u5F97\u523035px\u7684\u7A7A\u767D\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_38-\u62BD\u79BB\u6837\u5F0F\u6A21\u5757\u600E\u4E48\u5199-\u8BF4\u51FA\u601D\u8DEF-\u6709\u65E0\u5B9E\u8DF5\u7ECF\u9A8C-\u963F\u91CC\u822A\u65C5\u7684\u9762\u8BD5\u9898" tabindex="-1"><a class="header-anchor" href="#_38-\u62BD\u79BB\u6837\u5F0F\u6A21\u5757\u600E\u4E48\u5199-\u8BF4\u51FA\u601D\u8DEF-\u6709\u65E0\u5B9E\u8DF5\u7ECF\u9A8C-\u963F\u91CC\u822A\u65C5\u7684\u9762\u8BD5\u9898" aria-hidden="true">#</a> 38.\u62BD\u79BB\u6837\u5F0F\u6A21\u5757\u600E\u4E48\u5199\uFF0C\u8BF4\u51FA\u601D\u8DEF\uFF0C\u6709\u65E0\u5B9E\u8DF5\u7ECF\u9A8C\uFF1F[\u963F\u91CC\u822A\u65C5\u7684\u9762\u8BD5\u9898]</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6211\u7684\u7406\u89E3\u662F\u628A\u5E38\u7528\u7684css\u6837\u5F0F\u5355\u72EC\u505A\u6210css\u6587\u4EF6\u2026\u2026\u901A\u7528\u7684\u548C\u4E1A\u52A1\u76F8\u5173\u7684\u5206\u79BB\u51FA\u6765\uFF0C\u901A\u7528\u7684\u505A\u6210\u6837\u5F0F\u6A21\u5757\u513F\u5171\u4EAB\uFF0C\u4E1A\u52A1\u76F8\u5173\u7684\uFF0C\u653E
\u8FDB\u4E1A\u52A1\u76F8\u5173\u7684\u5E93\u91CC\u9762\u505A\u6210\u5BF9\u5E94\u529F\u80FD\u7684\u6A21\u5757\u513F\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,4),dn={href:"http://nec.netease.com/standard/css-sort.html",target:"_blank",rel:"noopener noreferrer"},rn=a(`<h2 id="_39-\u7B80\u5355\u8BF4\u4E00\u4E0B-css3-\u7684-all-\u5C5E\u6027\u3002" tabindex="-1"><a class="header-anchor" href="#_39-\u7B80\u5355\u8BF4\u4E00\u4E0B-css3-\u7684-all-\u5C5E\u6027\u3002" aria-hidden="true">#</a> 39.\u7B80\u5355\u8BF4\u4E00\u4E0B css3 \u7684 all \u5C5E\u6027\u3002</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>all\u5C5E\u6027\u5B9E\u9645\u4E0A\u662F\u6240\u6709CSS\u5C5E\u6027\u7684\u7F29\u5199\uFF0C\u8868\u793A\uFF0C\u6240\u6709\u7684CSS\u5C5E\u6027\u90FD\u600E\u6837\u600E\u6837\uFF0C\u4F46\u662F\uFF0C\u4E0D\u5305\u62ECunicode-bidi\u548Cdirection
\u8FD9\u4E24\u4E2ACSS\u5C5E\u6027\u3002\u652F\u6301\u4E09\u4E2ACSS\u901A\u7528\u5C5E\u6027\u503C\uFF0Cinitial,inherit,unset\u3002

initial\u662F\u521D\u59CB\u503C\u7684\u610F\u601D\uFF0C\u4E5F\u5C31\u662F\u8BE5\u5143\u7D20\u5143\u7D20\u90FD\u9664\u4E86unicode-bidi\u548Cdirection\u4EE5\u5916\u7684CSS\u5C5E\u6027\u90FD\u4F7F\u7528\u5C5E\u6027\u7684\u9ED8\u8BA4\u521D\u59CB
\u503C\u3002

inherit\u662F\u7EE7\u627F\u7684\u610F\u601D\uFF0C\u4E5F\u5C31\u662F\u8BE5\u5143\u7D20\u9664\u4E86unicode-bidi\u548Cdirection\u4EE5\u5916\u7684CSS\u5C5E\u6027\u90FD\u7EE7\u627F\u7236\u5143\u7D20\u7684\u5C5E\u6027\u503C\u3002

unset\u662F\u53D6\u6D88\u8BBE\u7F6E\u7684\u610F\u601D\uFF0C\u4E5F\u5C31\u662F\u5F53\u524D\u5143\u7D20\u6D4F\u89C8\u5668\u6216\u7528\u6237\u8BBE\u7F6E\u7684CSS\u5FFD\u7565\uFF0C\u7136\u540E\u5982\u679C\u662F\u5177\u6709\u7EE7\u627F\u7279\u6027\u7684CSS\uFF0C\u5982color\uFF0C\u5219
\u4F7F\u7528\u7EE7\u627F\u503C\uFF1B\u5982\u679C\u662F\u6CA1\u6709\u7EE7\u627F\u7279\u6027\u7684CSS\u5C5E\u6027\uFF0C\u5982background-color\uFF0C\u5219\u4F7F\u7528\u521D\u59CB\u503C\u3002

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),cn={href:"https://www.zhangxinxu.com/wordpress/2016/03/know-about-css3-all/",target:"_blank",rel:"noopener noreferrer"},on=a(`<h2 id="_40-\u4E3A\u4EC0\u4E48\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u7EDF\u914D\u7B26\u521D\u59CB\u5316-css-\u6837\u5F0F\u3002" tabindex="-1"><a class="header-anchor" href="#_40-\u4E3A\u4EC0\u4E48\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u7EDF\u914D\u7B26\u521D\u59CB\u5316-css-\u6837\u5F0F\u3002" aria-hidden="true">#</a> 40.\u4E3A\u4EC0\u4E48\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u7EDF\u914D\u7B26\u521D\u59CB\u5316 css \u6837\u5F0F\u3002</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u91C7\u7528*{padding:0;margin:0;}\u8FD9\u6837\u7684\u5199\u6CD5\u597D\u5904\u662F\u5199\u8D77\u6765\u5F88\u7B80\u5355\uFF0C\u4F46\u662F\u662F\u901A\u914D\u7B26\uFF0C\u9700\u8981\u628A\u6240\u6709\u7684\u6807\u7B7E\u90FD\u904D\u5386\u4E00\u904D\uFF0C\u5F53\u7F51\u7AD9\u8F83\u5927\u65F6\uFF0C
\u6837\u5F0F\u6BD4\u8F83\u591A\uFF0C\u8FD9\u6837\u5199\u5C31\u5927\u5927\u7684\u52A0\u5F3A\u4E86\u7F51\u7AD9\u8FD0\u884C\u7684\u8D1F\u8F7D\uFF0C\u4F1A\u4F7F\u7F51\u7AD9\u52A0\u8F7D\u7684\u65F6\u5019\u9700\u8981\u5F88\u957F\u4E00\u6BB5\u65F6\u95F4\uFF0C\u56E0\u6B64\u4E00\u822C\u5927\u578B\u7684\u7F51\u7AD9\u90FD\u6709\u5206\u5C42\u6B21\u7684\u4E00
\u5957\u521D\u59CB\u5316\u6837\u5F0F\u3002

\u51FA\u4E8E\u6027\u80FD\u7684\u8003\u8651\uFF0C\u5E76\u4E0D\u662F\u6240\u6709\u6807\u7B7E\u90FD\u4F1A\u6709padding\u548Cmargin\uFF0C\u56E0\u6B64\u5BF9\u5E38\u89C1\u7684\u5177\u6709\u9ED8\u8BA4padding\u548Cmargin\u7684\u5143\u7D20\u521D\u59CB\u5316\u5373
\u53EF\uFF0C\u5E76\u4E0D\u9700\u4F7F\u7528\u901A\u914D\u7B26*\u6765\u521D\u59CB\u5316\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_41-absolute-\u7684-containingblock-\u5305\u542B\u5757-\u8BA1\u7B97\u65B9\u5F0F\u8DDF\u6B63\u5E38\u6D41\u6709\u4EC0\u4E48\u4E0D\u540C" tabindex="-1"><a class="header-anchor" href="#_41-absolute-\u7684-containingblock-\u5305\u542B\u5757-\u8BA1\u7B97\u65B9\u5F0F\u8DDF\u6B63\u5E38\u6D41\u6709\u4EC0\u4E48\u4E0D\u540C" aria-hidden="true">#</a> 41.absolute \u7684 containingblock\uFF08\u5305\u542B\u5757\uFF09\u8BA1\u7B97\u65B9\u5F0F\u8DDF\u6B63\u5E38\u6D41\u6709\u4EC0\u4E48\u4E0D\u540C\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\uFF081\uFF09\u5185\u8054\u5143\u7D20\u4E5F\u53EF\u4EE5\u4F5C\u4E3A\u201C\u5305\u542B\u5757\u201D\u6240\u5728\u7684\u5143\u7D20\uFF1B

\uFF082\uFF09\u201C\u5305\u542B\u5757\u201D\u6240\u5728\u7684\u5143\u7D20\u4E0D\u662F\u7236\u5757\u7EA7\u5143\u7D20\uFF0C\u800C\u662F\u6700\u8FD1\u7684position\u4E0D\u4E3Astatic\u7684\u7956\u5148\u5143\u7D20\u6216\u6839\u5143\u7D20\uFF1B

\uFF083\uFF09\u8FB9\u754C\u662Fpadding box\u800C\u4E0D\u662Fcontent box\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_42-\u5BF9\u4E8E-haslayout-\u7684\u7406\u89E3" tabindex="-1"><a class="header-anchor" href="#_42-\u5BF9\u4E8E-haslayout-\u7684\u7406\u89E3" aria-hidden="true">#</a> 42.\u5BF9\u4E8E hasLayout \u7684\u7406\u89E3\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>hasLayout\u662FIE\u7279\u6709\u7684\u4E00\u4E2A\u5C5E\u6027\u3002\u5F88\u591A\u7684IE\u4E0B\u7684css bug\u90FD\u4E0E\u5176\u606F\u606F\u76F8\u5173\u3002\u5728IE\u4E2D\uFF0C\u4E00\u4E2A\u5143\u7D20\u8981\u4E48\u81EA\u5DF1\u5BF9\u81EA\u8EAB\u7684\u5185\u5BB9\u8FDB
\u884C\u8BA1\u7B97\u5927\u5C0F\u548C\u7EC4\u7EC7\uFF0C\u8981\u4E48\u4F9D\u8D56\u4E8E\u7236\u5143\u7D20\u6765\u8BA1\u7B97\u5C3A\u5BF8\u548C\u7EC4\u7EC7\u5185\u5BB9\u3002\u5F53\u4E00\u4E2A\u5143\u7D20\u7684hasLayout\u5C5E\u6027\u503C\u4E3Atrue\u65F6\uFF0C\u5B83\u8D1F\u8D23\u5BF9\u81EA\u5DF1\u548C\u53EF
\u80FD\u7684\u5B50\u5B59\u5143\u7D20\u8FDB\u884C\u5C3A\u5BF8\u8BA1\u7B97\u548C\u5B9A\u4F4D\u3002\u867D\u7136\u8FD9\u610F\u5473\u7740\u8FD9\u4E2A\u5143\u7D20\u9700\u8981\u82B1\u66F4\u591A\u7684\u4EE3\u4EF7\u6765\u7EF4\u62A4\u81EA\u8EAB\u548C\u91CC\u9762\u7684\u5185\u5BB9\uFF0C\u800C\u4E0D\u662F\u4F9D\u8D56\u4E8E\u7956\u5148\u5143\u7D20\u6765\u5B8C
\u6210\u8FD9\u4E9B\u5DE5\u4F5C\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),pn={href:"https://segmentfault.com/a/1190000010883974",target:"_blank",rel:"noopener noreferrer"},un={href:"https://segmentfault.com/a/1190000004632071",target:"_blank",rel:"noopener noreferrer"},vn=a(`<h2 id="_43-\u5143\u7D20\u7AD6\u5411\u7684\u767E\u5206\u6BD4\u8BBE\u5B9A\u662F\u76F8\u5BF9\u4E8E\u5BB9\u5668\u7684\u9AD8\u5EA6\u5417" tabindex="-1"><a class="header-anchor" href="#_43-\u5143\u7D20\u7AD6\u5411\u7684\u767E\u5206\u6BD4\u8BBE\u5B9A\u662F\u76F8\u5BF9\u4E8E\u5BB9\u5668\u7684\u9AD8\u5EA6\u5417" aria-hidden="true">#</a> 43.\u5143\u7D20\u7AD6\u5411\u7684\u767E\u5206\u6BD4\u8BBE\u5B9A\u662F\u76F8\u5BF9\u4E8E\u5BB9\u5668\u7684\u9AD8\u5EA6\u5417\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5982\u679C\u662Fheight\u7684\u8BDD\uFF0C\u662F\u76F8\u5BF9\u4E8E\u5305\u542B\u5757\u7684\u9AD8\u5EA6\u3002

\u5982\u679C\u662Fpadding\u6216\u8005margin\u7AD6\u76F4\u65B9\u5411\u7684\u5C5E\u6027\u5219\u662F\u76F8\u5BF9\u4E8E\u5305\u542B\u5757\u7684\u5BBD\u5EA6\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_44-\u5168\u5C4F\u6EDA\u52A8\u7684\u539F\u7406\u662F\u4EC0\u4E48-\u7528\u5230\u4E86-css-\u7684\u54EA\u4E9B\u5C5E\u6027-\u5F85\u6DF1\u5165\u5B9E\u8DF5" tabindex="-1"><a class="header-anchor" href="#_44-\u5168\u5C4F\u6EDA\u52A8\u7684\u539F\u7406\u662F\u4EC0\u4E48-\u7528\u5230\u4E86-css-\u7684\u54EA\u4E9B\u5C5E\u6027-\u5F85\u6DF1\u5165\u5B9E\u8DF5" aria-hidden="true">#</a> 44.\u5168\u5C4F\u6EDA\u52A8\u7684\u539F\u7406\u662F\u4EC0\u4E48\uFF1F\u7528\u5230\u4E86 CSS \u7684\u54EA\u4E9B\u5C5E\u6027\uFF1F\uFF08\u5F85\u6DF1\u5165\u5B9E\u8DF5\uFF09</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u539F\u7406\uFF1A\u6709\u70B9\u7C7B\u4F3C\u4E8E\u8F6E\u64AD\uFF0C\u6574\u4F53\u7684\u5143\u7D20\u4E00\u76F4\u6392\u5217\u4E0B\u53BB\uFF0C\u5047\u8BBE\u67095\u4E2A\u9700\u8981\u5C55\u793A\u7684\u5168\u5C4F\u9875\u9762\uFF0C\u90A3\u4E48\u9AD8\u5EA6\u662F500%\uFF0C\u53EA\u662F\u5C55\u793A100%\uFF0C\u5BB9\u5668\u53CA\u5BB9
\u5668\u5185\u7684\u9875\u9762\u53D6\u5F53\u524D\u53EF\u89C6\u533A\u9AD8\u5EA6\uFF0C\u540C\u65F6\u5BB9\u5668\u7684\u7236\u7EA7\u5143\u7D20overflow\u5C5E\u6027\u503C\u8BBE\u4E3Ahidden\uFF0C\u901A\u8FC7\u66F4\u6539\u5BB9\u5668\u53EF\u89C6\u533A\u7684\u4F4D\u7F6E\u6765\u5B9E\u73B0\u5168
\u5C4F\u6EDA\u52A8\u6548\u679C\u3002\u4E3B\u8981\u662F\u54CD\u5E94\u9F20\u6807\u4E8B\u4EF6\uFF0C\u9875\u9762\u901A\u8FC7CSS\u7684\u52A8\u753B\u6548\u679C\uFF0C\u8FDB\u884C\u79FB\u52A8\u3002

overflow\uFF1Ahidden\uFF1Btransition\uFF1Aall 1000 ms ease\uFF1B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),mn={href:"https://blog.csdn.net/liona_koukou/article/details/52680409",target:"_blank",rel:"noopener noreferrer"},bn={href:"https://juejin.im/post/5aeef41cf265da0ba0630de0",target:"_blank",rel:"noopener noreferrer"},hn=a(`<h2 id="_45-\u4EC0\u4E48\u662F\u54CD\u5E94\u5F0F\u8BBE\u8BA1-\u54CD\u5E94\u5F0F\u8BBE\u8BA1\u7684\u57FA\u672C\u539F\u7406\u662F\u4EC0\u4E48-\u5982\u4F55\u517C\u5BB9\u4F4E\u7248\u672C\u7684-ie-\u5F85\u6DF1\u5165\u4E86\u89E3" tabindex="-1"><a class="header-anchor" href="#_45-\u4EC0\u4E48\u662F\u54CD\u5E94\u5F0F\u8BBE\u8BA1-\u54CD\u5E94\u5F0F\u8BBE\u8BA1\u7684\u57FA\u672C\u539F\u7406\u662F\u4EC0\u4E48-\u5982\u4F55\u517C\u5BB9\u4F4E\u7248\u672C\u7684-ie-\u5F85\u6DF1\u5165\u4E86\u89E3" aria-hidden="true">#</a> 45.\u4EC0\u4E48\u662F\u54CD\u5E94\u5F0F\u8BBE\u8BA1\uFF1F\u54CD\u5E94\u5F0F\u8BBE\u8BA1\u7684\u57FA\u672C\u539F\u7406\u662F\u4EC0\u4E48\uFF1F\u5982\u4F55\u517C\u5BB9\u4F4E\u7248\u672C\u7684 IE\uFF1F\uFF08\u5F85\u6DF1\u5165\u4E86\u89E3\uFF09</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u54CD\u5E94\u5F0F\u7F51\u7AD9\u8BBE\u8BA1\u662F\u4E00\u4E2A\u7F51\u7AD9\u80FD\u591F\u517C\u5BB9\u591A\u4E2A\u7EC8\u7AEF\uFF0C\u800C\u4E0D\u662F\u4E3A\u6BCF\u4E00\u4E2A\u7EC8\u7AEF\u505A\u4E00\u4E2A\u7279\u5B9A\u7684\u7248\u672C\u3002\u57FA\u672C\u539F\u7406\u662F\u901A\u8FC7\u5A92\u4F53\u67E5\u8BE2\u68C0\u6D4B\u4E0D\u540C\u7684\u8BBE\u5907\u5C4F
\u5E55\u5C3A\u5BF8\u505A\u5904\u7406\u3002\u9875\u9762\u5934\u90E8\u5FC5\u987B\u6709meta\u58F0\u660E\u7684viewport\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,2),kn={href:"https://blog.csdn.net/dreamerframework/article/details/8994741",target:"_blank",rel:"noopener noreferrer"},gn={href:"http://www.mahaixiang.cn/wzsj/278.html",target:"_blank",rel:"noopener noreferrer"},xn=a(`<h2 id="_46-\u89C6\u5DEE\u6EDA\u52A8\u6548\u679C-\u5982\u4F55\u7ED9\u6BCF\u9875\u505A\u4E0D\u540C\u7684\u52A8\u753B-\u56DE\u5230\u9876\u90E8-\u5411\u4E0B\u6ED1\u52A8\u8981\u518D\u6B21\u51FA\u73B0-\u548C\u53EA\u51FA\u73B0\u4E00\u6B21\u5206\u522B\u600E\u4E48\u505A" tabindex="-1"><a class="header-anchor" href="#_46-\u89C6\u5DEE\u6EDA\u52A8\u6548\u679C-\u5982\u4F55\u7ED9\u6BCF\u9875\u505A\u4E0D\u540C\u7684\u52A8\u753B-\u56DE\u5230\u9876\u90E8-\u5411\u4E0B\u6ED1\u52A8\u8981\u518D\u6B21\u51FA\u73B0-\u548C\u53EA\u51FA\u73B0\u4E00\u6B21\u5206\u522B\u600E\u4E48\u505A" aria-hidden="true">#</a> 46.\u89C6\u5DEE\u6EDA\u52A8\u6548\u679C\uFF0C\u5982\u4F55\u7ED9\u6BCF\u9875\u505A\u4E0D\u540C\u7684\u52A8\u753B\uFF1F\uFF08\u56DE\u5230\u9876\u90E8\uFF0C\u5411\u4E0B\u6ED1\u52A8\u8981\u518D\u6B21\u51FA\u73B0\uFF0C\u548C\u53EA\u51FA\u73B0\u4E00\u6B21\u5206\u522B\u600E\u4E48\u505A\uFF1F\uFF09</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u89C6\u5DEE\u6EDA\u52A8\u662F\u6307\u591A\u5C42\u80CC\u666F\u4EE5\u4E0D\u540C\u7684\u901F\u5EA6\u79FB\u52A8\uFF0C\u5F62\u6210\u7ACB\u4F53\u7684\u8FD0\u52A8\u6548\u679C\uFF0C\u5E26\u6765\u975E\u5E38\u51FA\u8272\u7684\u89C6\u89C9\u4F53\u9A8C\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),fn={href:"https://www.zhihu.com/question/20990029",target:"_blank",rel:"noopener noreferrer"},_n=a(`<h2 id="_47-\u5982\u4F55\u4FEE\u6539-chrome-\u8BB0\u4F4F\u5BC6\u7801\u540E\u81EA\u52A8\u586B\u5145\u8868\u5355\u7684\u9EC4\u8272\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_47-\u5982\u4F55\u4FEE\u6539-chrome-\u8BB0\u4F4F\u5BC6\u7801\u540E\u81EA\u52A8\u586B\u5145\u8868\u5355\u7684\u9EC4\u8272\u80CC\u666F" aria-hidden="true">#</a> 47.\u5982\u4F55\u4FEE\u6539 chrome \u8BB0\u4F4F\u5BC6\u7801\u540E\u81EA\u52A8\u586B\u5145\u8868\u5355\u7684\u9EC4\u8272\u80CC\u666F\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>chrome\u8868\u5355\u81EA\u52A8\u586B\u5145\u540E\uFF0Cinput\u6587\u672C\u6846\u7684\u80CC\u666F\u4F1A\u53D8\u6210\u9EC4\u8272\u7684\uFF0C\u901A\u8FC7\u5BA1\u67E5\u5143\u7D20\u53EF\u4EE5\u770B\u5230\u8FD9\u662F\u7531\u4E8Echrome\u4F1A\u9ED8\u8BA4\u7ED9\u81EA\u52A8\u586B\u5145\u7684in
put\u8868\u5355\u52A0\u4E0Ainput:-webkit-autofill\u79C1\u6709\u5C5E\u6027\uFF0C\u7136\u540E\u5BF9\u5176\u8D4B\u4E88\u4EE5\u4E0B\u6837\u5F0F\uFF1A

{
background-color:rgb(250,255,189)!important;
background-image:none!important;
color:rgb(0,0,0)!important;
}

\u5BF9chrome\u9ED8\u8BA4\u5B9A\u4E49\u7684background-color\uFF0Cbackground-image\uFF0Ccolor\u4F7F\u7528important\u662F\u4E0D\u80FD\u63D0\u9AD8\u5176\u4F18\u5148\u7EA7\u7684\uFF0C\u4F46\u662F
\u5176\u4ED6\u5C5E\u6027\u53EF\u4F7F\u7528\u3002

\u4F7F\u7528\u8DB3\u591F\u5927\u7684\u7EAF\u8272\u5185\u9634\u5F71\u6765\u8986\u76D6input\u8F93\u5165\u6846\u7684\u9EC4\u8272\u80CC\u666F\uFF0C\u5904\u7406\u5982\u4E0B

input:-webkit-autofill,textarea:-webkit-autofill,select:-webkit-autofill{
-webkit-box-shadow:000px 1000px white inset;
border:1px solid #CCC !important;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),yn={href:"https://blog.csdn.net/zsl_955200/article/details/78276209",target:"_blank",rel:"noopener noreferrer"},wn={href:"https://blog.csdn.net/M_agician/article/details/73381706",target:"_blank",rel:"noopener noreferrer"},Sn=a(`<h2 id="_48-\u600E\u4E48\u8BA9-chrome-\u652F\u6301\u5C0F\u4E8E-12px-\u7684\u6587\u5B57" tabindex="-1"><a class="header-anchor" href="#_48-\u600E\u4E48\u8BA9-chrome-\u652F\u6301\u5C0F\u4E8E-12px-\u7684\u6587\u5B57" aria-hidden="true">#</a> 48.\u600E\u4E48\u8BA9 Chrome \u652F\u6301\u5C0F\u4E8E 12px \u7684\u6587\u5B57\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5728\u8C37\u6B4C\u4E0Bcss\u8BBE\u7F6E\u5B57\u4F53\u5927\u5C0F\u4E3A12px\u53CA\u4EE5\u4E0B\u65F6\uFF0C\u663E\u793A\u90FD\u662F\u4E00\u6837\u5927\u5C0F\uFF0C\u90FD\u662F\u9ED8\u8BA412px\u3002

\u89E3\u51B3\u529E\u6CD5\uFF1A

\uFF081\uFF09\u53EF\u4EE5\u4F7F\u7528Webkit\u7684\u5185\u6838\u7684-webkit-text-size-adjust\u7684\u79C1\u6709CSS\u5C5E\u6027\u6765\u89E3\u51B3\uFF0C\u53EA\u8981\u52A0\u4E86-webkit-text-size
-adjust:none;\u5B57\u4F53\u5927\u5C0F\u5C31\u4E0D\u53D7\u9650\u5236\u4E86\u3002\u4F46\u662Fchrome\u66F4\u65B0\u523027\u7248\u672C\u4E4B\u540E\u5C31\u4E0D\u53EF\u4EE5\u7528\u4E86\u3002\u6240\u4EE5\u9AD8\u7248\u672Cchrome\u8C37\u6B4C\u6D4F\u89C8\u5668
\u5DF2\u7ECF\u4E0D\u518D\u652F\u6301-webkit-text-size-adjust\u6837\u5F0F\uFF0C\u6240\u4EE5\u8981\u4F7F\u7528\u65F6\u5019\u614E\u7528\u3002

\uFF082\uFF09\u8FD8\u53EF\u4EE5\u4F7F\u7528css3\u7684transform\u7F29\u653E\u5C5E\u6027-webkit-transform:scale(0.5);\u6CE8\u610F-webkit-transform:scale(0.
75);\u6536\u7F29\u7684\u662F\u6574\u4E2A\u5143\u7D20\u7684\u5927\u5C0F\uFF0C\u8FD9\u65F6\u5019\uFF0C\u5982\u679C\u662F\u5185\u8054\u5143\u7D20\uFF0C\u5FC5\u987B\u8981\u5C06\u5185\u8054\u5143\u7D20\u8F6C\u6362\u6210\u5757\u5143\u7D20\uFF0C\u53EF\u4EE5\u4F7F\u7528display\uFF1Ablock/
inline-block/...\uFF1B

\uFF083\uFF09\u4F7F\u7528\u56FE\u7247\uFF1A\u5982\u679C\u662F\u5185\u5BB9\u56FA\u5B9A\u4E0D\u53D8\u60C5\u51B5\u4E0B\uFF0C\u4F7F\u7528\u5C06\u5C0F\u4E8E12px\u6587\u5B57\u5185\u5BB9\u5207\u51FA\u505A\u56FE\u7247\uFF0C\u8FD9\u6837\u4E0D\u5F71\u54CD\u517C\u5BB9\u4E5F\u4E0D\u5F71\u54CD\u7F8E\u89C2\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Cn={href:"https://570109268.iteye.com/blog/2406562",target:"_blank",rel:"noopener noreferrer"},En=a(`<h2 id="_49-\u8BA9\u9875\u9762\u91CC\u7684\u5B57\u4F53\u53D8\u6E05\u6670-\u53D8\u7EC6\u7528-css-\u600E\u4E48\u505A" tabindex="-1"><a class="header-anchor" href="#_49-\u8BA9\u9875\u9762\u91CC\u7684\u5B57\u4F53\u53D8\u6E05\u6670-\u53D8\u7EC6\u7528-css-\u600E\u4E48\u505A" aria-hidden="true">#</a> 49.\u8BA9\u9875\u9762\u91CC\u7684\u5B57\u4F53\u53D8\u6E05\u6670\uFF0C\u53D8\u7EC6\u7528 CSS \u600E\u4E48\u505A\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>webkit\u5185\u6838\u7684\u79C1\u6709\u5C5E\u6027\uFF1A-webkit-font-smoothing\uFF0C\u7528\u4E8E\u5B57\u4F53\u6297\u952F\u9F7F\uFF0C\u4F7F\u7528\u540E\u5B57\u4F53\u770B\u8D77\u6765\u4F1A\u66F4\u6E05\u6670\u8212\u670D\u3002

\u5728MacOS\u6D4B\u8BD5\u73AF\u5883\u4E0B\u9762\u8BBE\u7F6E-webkit-font-smoothing:antialiased;\u4F46\u662F\u8FD9\u4E2A\u5C5E\u6027\u4EC5\u4EC5\u662F\u9762\u5411MacOS\uFF0C\u5176\u4ED6\u64CD\u4F5C\u7CFB\u7EDF\u8BBE
\u7F6E\u540E\u65E0\u6548\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),In={href:"https://blog.csdn.net/huo_bao/article/details/50251585",target:"_blank",rel:"noopener noreferrer"},Fn=a(`<h2 id="_50-font-style-\u5C5E\u6027\u4E2D-italic-\u548C-oblique-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_50-font-style-\u5C5E\u6027\u4E2D-italic-\u548C-oblique-\u7684\u533A\u522B" aria-hidden="true">#</a> 50.font-style \u5C5E\u6027\u4E2D italic \u548C oblique \u7684\u533A\u522B\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>italic\u548Coblique\u8FD9\u4E24\u4E2A\u5173\u952E\u5B57\u90FD\u8868\u793A\u201C\u659C\u4F53\u201D\u7684\u610F\u601D\u3002

\u5B83\u4EEC\u7684\u533A\u522B\u5728\u4E8E\uFF0Citalic\u662F\u4F7F\u7528\u5F53\u524D\u5B57\u4F53\u7684\u659C\u4F53\u5B57\u4F53\uFF0C\u800Coblique\u53EA\u662F\u5355\u7EAF\u5730\u8BA9\u6587\u5B57\u503E\u659C\u3002\u5982\u679C\u5F53\u524D\u5B57\u4F53\u6CA1\u6709\u5BF9\u5E94\u7684\u659C\u4F53\u5B57\u4F53\uFF0C
\u5219\u9000\u800C\u6C42\u5176\u6B21\uFF0C\u89E3\u6790\u4E3Aoblique\uFF0C\u4E5F\u5C31\u662F\u5355\u7EAF\u5F62\u72B6\u503E\u659C\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_51-\u8BBE\u5907\u50CF\u7D20\u3001css-\u50CF\u7D20\u3001\u8BBE\u5907\u72EC\u7ACB\u50CF\u7D20\u3001dpr\u3001ppi-\u4E4B\u95F4\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_51-\u8BBE\u5907\u50CF\u7D20\u3001css-\u50CF\u7D20\u3001\u8BBE\u5907\u72EC\u7ACB\u50CF\u7D20\u3001dpr\u3001ppi-\u4E4B\u95F4\u7684\u533A\u522B" aria-hidden="true">#</a> 51.\u8BBE\u5907\u50CF\u7D20\u3001css \u50CF\u7D20\u3001\u8BBE\u5907\u72EC\u7ACB\u50CF\u7D20\u3001dpr\u3001ppi \u4E4B\u95F4\u7684\u533A\u522B\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8BBE\u5907\u50CF\u7D20\u6307\u7684\u662F\u7269\u7406\u50CF\u7D20\uFF0C\u4E00\u822C\u624B\u673A\u7684\u5206\u8FA8\u7387\u6307\u7684\u5C31\u662F\u8BBE\u5907\u50CF\u7D20\uFF0C\u4E00\u4E2A\u8BBE\u5907\u7684\u8BBE\u5907\u50CF\u7D20\u662F\u4E0D\u53EF\u53D8\u7684\u3002

css\u50CF\u7D20\u548C\u8BBE\u5907\u72EC\u7ACB\u50CF\u7D20\u662F\u7B49\u4EF7\u7684\uFF0C\u4E0D\u7BA1\u5728\u4F55\u79CD\u5206\u8FA8\u7387\u7684\u8BBE\u5907\u4E0A\uFF0Ccss\u50CF\u7D20\u7684\u5927\u5C0F\u5E94\u8BE5\u662F\u4E00\u81F4\u7684\uFF0Ccss\u50CF\u7D20\u662F\u4E00\u4E2A\u76F8\u5BF9\u5355\u4F4D\uFF0C\u5B83\u662F\u76F8
\u5BF9\u4E8E\u8BBE\u5907\u50CF\u7D20\u7684\uFF0C\u4E00\u4E2Acss\u50CF\u7D20\u7684\u5927\u5C0F\u53D6\u51B3\u4E8E\u9875\u9762\u7F29\u653E\u7A0B\u5EA6\u548Cdpr\u7684\u5927\u5C0F\u3002

dpr\u6307\u7684\u662F\u8BBE\u5907\u50CF\u7D20\u548C\u8BBE\u5907\u72EC\u7ACB\u50CF\u7D20\u7684\u6BD4\u503C\uFF0C\u4E00\u822C\u7684pc\u5C4F\u5E55\uFF0Cdpr=1\u3002\u5728iphone4\u65F6\uFF0C\u82F9\u679C\u63A8\u51FA\u4E86retina\u5C4F\u5E55\uFF0C\u5B83\u7684dpr
\u4E3A2\u3002\u5C4F\u5E55\u7684\u7F29\u653E\u4F1A\u6539\u53D8dpr\u7684\u503C\u3002

ppi\u6307\u7684\u662F\u6BCF\u82F1\u5BF8\u7684\u7269\u7406\u50CF\u7D20\u7684\u5BC6\u5EA6\uFF0Cppi\u8D8A\u5927\uFF0C\u5C4F\u5E55\u7684\u5206\u8FA8\u7387\u8D8A\u5927\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),zn={href:"https://www.cnblogs.com/libin-1/p/7148377.html",target:"_blank",rel:"noopener noreferrer"},Pn={href:"https://www.jianshu.com/p/af6dad66e49a",target:"_blank",rel:"noopener noreferrer"},jn={href:"https://github.com/jawil/blog/issues/21",target:"_blank",rel:"noopener noreferrer"},Gn={href:"https://github.com/wujunchuan/wujunchuan.github.io/issues/15",target:"_blank",rel:"noopener noreferrer"},Bn=a(`<h2 id="_52-layout-viewport\u3001visual-viewport-\u548C-ideal-viewport-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_52-layout-viewport\u3001visual-viewport-\u548C-ideal-viewport-\u7684\u533A\u522B" aria-hidden="true">#</a> 52.layout viewport\u3001visual viewport \u548C ideal viewport \u7684\u533A\u522B\uFF1F</h2><p>\u76F8\u5173\u77E5\u8BC6\u70B9\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5982\u679C\u628A\u79FB\u52A8\u8BBE\u5907\u4E0A\u6D4F\u89C8\u5668\u7684\u53EF\u89C6\u533A\u57DF\u8BBE\u4E3Aviewport\u7684\u8BDD\uFF0C\u67D0\u4E9B\u7F51\u7AD9\u5C31\u4F1A\u56E0\u4E3Aviewport\u592A\u7A84\u800C\u663E\u793A\u9519\u4E71\uFF0C\u6240\u4EE5\u8FD9\u4E9B\u6D4F\u89C8\u5668\u5C31\u51B3\u5B9A
\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u628Aviewport\u8BBE\u4E3A\u4E00\u4E2A\u8F83\u5BBD\u7684\u503C\uFF0C\u6BD4\u5982980px\uFF0C\u8FD9\u6837\u7684\u8BDD\u5373\u4F7F\u662F\u90A3\u4E9B\u4E3A\u684C\u9762\u8BBE\u8BA1\u7684\u7F51\u7AD9\u4E5F\u80FD\u5728\u79FB\u52A8\u6D4F\u89C8\u5668\u4E0A\u6B63\u5E38\u663E\u793A\u4E86\u3002
ppk\u628A\u8FD9\u4E2A\u6D4F\u89C8\u5668\u9ED8\u8BA4\u7684viewport\u53EB\u505Alayout viewport\u3002

layout viewport\u7684\u5BBD\u5EA6\u662F\u5927\u4E8E\u6D4F\u89C8\u5668\u53EF\u89C6\u533A\u57DF\u7684\u5BBD\u5EA6\u7684\uFF0C\u6240\u4EE5\u6211\u4EEC\u8FD8\u9700\u8981\u4E00\u4E2Aviewport\u6765\u4EE3\u8868\u6D4F\u89C8\u5668\u53EF\u89C6\u533A\u57DF\u7684\u5927\u5C0F\uFF0Cppk\u628A
\u8FD9\u4E2Aviewport\u53EB\u505Avisual viewport\u3002

ideal viewport\u662F\u6700\u9002\u5408\u79FB\u52A8\u8BBE\u5907\u7684viewport\uFF0Cideal viewport\u7684\u5BBD\u5EA6\u7B49\u4E8E\u79FB\u52A8\u8BBE\u5907\u7684\u5C4F\u5E55\u5BBD\u5EA6\uFF0C\u53EA\u8981\u5728css\u4E2D\u628A\u67D0\u4E00\u5143
\u7D20\u7684\u5BBD\u5EA6\u8BBE\u4E3Aideal viewport\u7684\u5BBD\u5EA6\uFF08\u5355\u4F4D\u7528px\uFF09\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u5143\u7D20\u7684\u5BBD\u5EA6\u5C31\u662F\u8BBE\u5907\u5C4F\u5E55\u7684\u5BBD\u5EA6\u4E86\uFF0C\u4E5F\u5C31\u662F\u5BBD\u5EA6\u4E3A100%\u7684\u6548\u679C\u3002i
deal viewport\u7684\u610F\u4E49\u5728\u4E8E\uFF0C\u65E0\u8BBA\u5728\u4F55\u79CD\u5206\u8FA8\u7387\u7684\u5C4F\u5E55\u4E0B\uFF0C\u90A3\u4E9B\u9488\u5BF9ideal viewport\u800C\u8BBE\u8BA1\u7684\u7F51\u7AD9\uFF0C\u4E0D\u9700\u8981\u7528\u6237\u624B\u52A8\u7F29\u653E\uFF0C\u4E5F
\u4E0D\u9700\u8981\u51FA\u73B0\u6A2A\u5411\u6EDA\u52A8\u6761\uFF0C\u90FD\u53EF\u4EE5\u5B8C\u7F8E\u7684\u5448\u73B0\u7ED9\u7528\u6237\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u56DE\u7B54\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u79FB\u52A8\u7AEF\u4E00\u5171\u9700\u8981\u7406\u89E3\u4E09\u4E2Aviewport\u7684\u6982\u5FF5\u7684\u7406\u89E3\u3002

\u7B2C\u4E00\u4E2A\u89C6\u53E3\u662F\u5E03\u5C40\u89C6\u53E3\uFF0C\u5728\u79FB\u52A8\u7AEF\u663E\u793A\u7F51\u9875\u65F6\uFF0C\u7531\u4E8E\u79FB\u52A8\u7AEF\u7684\u5C4F\u5E55\u5C3A\u5BF8\u6BD4\u8F83\u5C0F\uFF0C\u5982\u679C\u7F51\u9875\u4F7F\u7528\u79FB\u52A8\u7AEF\u7684\u5C4F\u5E55\u5C3A\u5BF8\u8FDB\u884C\u5E03\u5C40\u7684\u8BDD\uFF0C\u90A3\u4E48\u6574
\u4E2A\u9875\u9762\u7684\u5E03\u5C40\u90FD\u4F1A\u663E\u793A\u9519\u4E71\u3002\u6240\u4EE5\u79FB\u52A8\u7AEF\u6D4F\u89C8\u5668\u63D0\u4F9B\u4E86\u4E00\u4E2Alayout viewport\u5E03\u5C40\u89C6\u53E3\u7684\u6982\u5FF5\uFF0C\u4F7F\u7528\u8FD9\u4E2A\u89C6\u53E3\u6765\u5BF9\u9875\u9762\u8FDB\u884C\u5E03\u5C40\u5C55
\u793A\uFF0C\u4E00\u822Clayout viewport\u7684\u5927\u5C0F\u4E3A980px\uFF0C\u56E0\u6B64\u9875\u9762\u5E03\u5C40\u4E0D\u4F1A\u6709\u592A\u5927\u7684\u53D8\u5316\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u62D6\u52A8\u548C\u7F29\u653E\u6765\u67E5\u770B\u5230\u8FD9\u4E2A\u9875\u9762\u3002

\u7B2C\u4E8C\u4E2A\u89C6\u53E3\u6307\u7684\u662F\u89C6\u89C9\u89C6\u53E3\uFF0Cvisual viewport\u6307\u7684\u662F\u79FB\u52A8\u8BBE\u5907\u4E0A\u6211\u4EEC\u53EF\u89C1\u7684\u533A\u57DF\u7684\u89C6\u53E3\u5927\u5C0F\uFF0C\u4E00\u822C\u4E3A\u5C4F\u5E55\u7684\u5206\u8FA8\u7387\u7684\u5927\u5C0F\u3002visu
al viewport\u548Clayout viewport\u7684\u5173\u7CFB\uFF0C\u5C31\u50CF\u662F\u6211\u4EEC\u901A\u8FC7\u7A97\u6237\u770B\u5916\u9762\u7684\u98CE\u666F\uFF0C\u89C6\u89C9\u89C6\u53E3\u5C31\u662F\u7A97\u6237\uFF0C\u800C\u5916\u9762\u7684\u98CE\u666F\u5C31\u662F\u5E03\u5C40\u89C6\u53E3
\u4E2D\u7684\u7F51\u9875\u5185\u5BB9\u3002

\u7B2C\u4E09\u4E2A\u89C6\u53E3\u662F\u7406\u60F3\u89C6\u53E3\uFF0C\u7531\u4E8Elayout viewport\u4E00\u822C\u6BD4visual viewport\u8981\u5927\uFF0C\u6240\u4EE5\u60F3\u8981\u770B\u5230\u6574\u4E2A\u9875\u9762\u5FC5\u987B\u901A\u8FC7\u62D6\u52A8\u548C\u7F29\u653E\u624D
\u80FD\u5B9E\u73B0\u3002\u6240\u4EE5\u53C8\u63D0\u51FA\u4E86ideal viewport\u7684\u6982\u5FF5\uFF0Cideal viewport\u4E0B\u7528\u6237\u4E0D\u7528\u7F29\u653E\u548C\u6EDA\u52A8\u6761\u5C31\u80FD\u591F\u67E5\u770B\u5230\u6574\u4E2A\u9875\u9762\uFF0C\u5E76\u4E14\u9875\u9762\u5728
\u4E0D\u540C\u5206\u8FA8\u7387\u4E0B\u663E\u793A\u7684\u5185\u5BB9\u5927\u5C0F\u76F8\u540C\u3002ideal viewport\u5176\u5B9E\u5C31\u662F\u901A\u8FC7\u4FEE\u6539layout viewport\u7684\u5927\u5C0F\uFF0C\u8BA9\u5B83\u7B49\u4E8E\u8BBE\u5907\u7684\u5BBD\u5EA6\uFF0C\u8FD9\u4E2A
\u5BBD\u5EA6\u53EF\u4EE5\u7406\u89E3\u4E3A\u662F\u8BBE\u5907\u72EC\u7ACB\u50CF\u7D20\uFF0C\u56E0\u6B64\u6839\u636Eideal viewport\u8BBE\u8BA1\u7684\u9875\u9762\uFF0C\u5728\u4E0D\u540C\u5206\u8FA8\u7387\u7684\u5C4F\u5E55\u4E0B\uFF0C\u663E\u793A\u5E94\u8BE5\u76F8\u540C\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),qn={href:"https://www.cnblogs.com/2050/p/3877280.html",target:"_blank",rel:"noopener noreferrer"},Ln={href:"https://www.html.cn/archives/5975",target:"_blank",rel:"noopener noreferrer"},Tn={href:"https://juejin.im/post/5b6d21daf265da0f9d1a2ed7#heading-14",target:"_blank",rel:"noopener noreferrer"},Wn=a(`<h2 id="_53-position-fixed-\u5728-android-\u4E0B\u65E0\u6548\u600E\u4E48\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#_53-position-fixed-\u5728-android-\u4E0B\u65E0\u6548\u600E\u4E48\u5904\u7406" aria-hidden="true">#</a> 53.position:fixed;\u5728 android \u4E0B\u65E0\u6548\u600E\u4E48\u5904\u7406\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u56E0\u4E3A\u79FB\u52A8\u7AEF\u6D4F\u89C8\u5668\u9ED8\u8BA4\u7684viewport\u53EB\u505Alayout viewport\u3002\u5728\u79FB\u52A8\u7AEF\u663E\u793A\u65F6\uFF0C\u56E0\u4E3Alayout viewport\u7684\u5BBD\u5EA6\u5927\u4E8E\u79FB\u52A8\u7AEF\u5C4F\u5E55
\u7684\u5BBD\u5EA6\uFF0C\u6240\u4EE5\u9875\u9762\u4F1A\u51FA\u73B0\u6EDA\u52A8\u6761\u5DE6\u53F3\u79FB\u52A8\uFF0Cfixed\u7684\u5143\u7D20\u662F\u76F8\u5BF9layout viewport\u6765\u56FA\u5B9A\u4F4D\u7F6E\u7684\uFF0C\u800C\u4E0D\u662F\u79FB\u52A8\u7AEF\u5C4F\u5E55\u6765\u56FA\u5B9A\u4F4D\u7F6E\u7684
\uFF0C\u6240\u4EE5\u4F1A\u51FA\u73B0\u611F\u89C9fixed\u65E0\u6548\u7684\u60C5\u51B5\u3002

\u5982\u679C\u60F3\u5B9E\u73B0fixed\u76F8\u5BF9\u4E8E\u5C4F\u5E55\u7684\u56FA\u5B9A\u6548\u679C\uFF0C\u6211\u4EEC\u9700\u8981\u6539\u53D8\u7684\u662Fviewport\u7684\u5927\u5C0F\u4E3Aideal viewport\uFF0C\u53EF\u4EE5\u5982\u4E0B\u8BBE\u7F6E\uFF1A

&lt;metaname=&quot;viewport&quot;content=&quot;width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-sca
le=1.0,user-scalable=no&quot;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_54-\u5982\u679C\u9700\u8981\u624B\u52A8\u5199\u52A8\u753B-\u4F60\u8BA4\u4E3A\u6700\u5C0F\u65F6\u95F4\u95F4\u9694\u662F\u591A\u4E45-\u4E3A\u4EC0\u4E48-\u963F\u91CC" tabindex="-1"><a class="header-anchor" href="#_54-\u5982\u679C\u9700\u8981\u624B\u52A8\u5199\u52A8\u753B-\u4F60\u8BA4\u4E3A\u6700\u5C0F\u65F6\u95F4\u95F4\u9694\u662F\u591A\u4E45-\u4E3A\u4EC0\u4E48-\u963F\u91CC" aria-hidden="true">#</a> 54.\u5982\u679C\u9700\u8981\u624B\u52A8\u5199\u52A8\u753B\uFF0C\u4F60\u8BA4\u4E3A\u6700\u5C0F\u65F6\u95F4\u95F4\u9694\u662F\u591A\u4E45\uFF0C\u4E3A\u4EC0\u4E48\uFF1F\uFF08\u963F\u91CC\uFF09</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u591A\u6570\u663E\u793A\u5668\u9ED8\u8BA4\u9891\u7387\u662F60Hz\uFF0C\u53731\u79D2\u5237\u65B060\u6B21\uFF0C\u6240\u4EE5\u7406\u8BBA\u4E0A\u6700\u5C0F\u95F4\u9694\u4E3A1/60*1000ms\uFF1D16.7ms
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_55-\u5982\u4F55\u8BA9\u53BB\u9664-inline-block-\u5143\u7D20\u95F4\u95F4\u8DDD" tabindex="-1"><a class="header-anchor" href="#_55-\u5982\u4F55\u8BA9\u53BB\u9664-inline-block-\u5143\u7D20\u95F4\u95F4\u8DDD" aria-hidden="true">#</a> 55.\u5982\u4F55\u8BA9\u53BB\u9664 inline-block \u5143\u7D20\u95F4\u95F4\u8DDD\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u79FB\u9664\u7A7A\u683C\u3001\u4F7F\u7528margin\u8D1F\u503C\u3001\u4F7F\u7528font-size:0\u3001letter-spacing\u3001word-spacing
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6),Dn={href:"https://www.zhangxinxu.com/wordpress/2012/04/inline-block-space-remove-%E5%8E%BB%E9%99%A4%E9%97%B4%E8%B7%9D/",target:"_blank",rel:"noopener noreferrer"},Nn=a(`<h2 id="_56-overflow-scroll-\u65F6\u4E0D\u80FD\u5E73\u6ED1\u6EDA\u52A8\u7684\u95EE\u9898\u600E\u4E48\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#_56-overflow-scroll-\u65F6\u4E0D\u80FD\u5E73\u6ED1\u6EDA\u52A8\u7684\u95EE\u9898\u600E\u4E48\u5904\u7406" aria-hidden="true">#</a> 56.overflow:scroll \u65F6\u4E0D\u80FD\u5E73\u6ED1\u6EDA\u52A8\u7684\u95EE\u9898\u600E\u4E48\u5904\u7406\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4EE5\u4E0B\u4EE3\u7801\u53EF\u89E3\u51B3\u8FD9\u79CD\u5361\u987F\u7684\u95EE\u9898\uFF1A-webkit-overflow-scrolling:touch;\u662F\u56E0\u4E3A\u8FD9\u884C\u4EE3\u7801\u542F\u7528\u4E86\u786C\u4EF6\u52A0\u901F\u7279\u6027\uFF0C\u6240\u4EE5\u6ED1\u52A8\u5F88\u6D41
\u7545\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Hn={href:"https://www.jianshu.com/p/1f4693d0ad2d",target:"_blank",rel:"noopener noreferrer"},Mn=a(`<h2 id="_57-\u6709\u4E00\u4E2A\u9AD8\u5EA6\u81EA\u9002\u5E94\u7684-div-\u91CC\u9762\u6709\u4E24\u4E2A-div-\u4E00\u4E2A\u9AD8\u5EA6-100px-\u5E0C\u671B\u53E6\u4E00\u4E2A\u586B\u6EE1\u5269\u4E0B\u7684\u9AD8\u5EA6\u3002" tabindex="-1"><a class="header-anchor" href="#_57-\u6709\u4E00\u4E2A\u9AD8\u5EA6\u81EA\u9002\u5E94\u7684-div-\u91CC\u9762\u6709\u4E24\u4E2A-div-\u4E00\u4E2A\u9AD8\u5EA6-100px-\u5E0C\u671B\u53E6\u4E00\u4E2A\u586B\u6EE1\u5269\u4E0B\u7684\u9AD8\u5EA6\u3002" aria-hidden="true">#</a> 57.\u6709\u4E00\u4E2A\u9AD8\u5EA6\u81EA\u9002\u5E94\u7684 div\uFF0C\u91CC\u9762\u6709\u4E24\u4E2A div\uFF0C\u4E00\u4E2A\u9AD8\u5EA6 100px\uFF0C\u5E0C\u671B\u53E6\u4E00\u4E2A\u586B\u6EE1\u5269\u4E0B\u7684\u9AD8\u5EA6\u3002</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\uFF081\uFF09\u5916\u5C42div\u4F7F\u7528position\uFF1Arelative\uFF1B\u9AD8\u5EA6\u8981\u6C42\u81EA\u9002\u5E94\u7684div\u4F7F\u7528position:absolute;top:100px;bottom:0;
left:0;right:0;

\uFF082\uFF09\u4F7F\u7528flex\u5E03\u5C40\uFF0C\u8BBE\u7F6E\u4E3B\u8F74\u4E3A\u7AD6\u8F74\uFF0C\u7B2C\u4E8C\u4E2Adiv\u7684flex-grow\u4E3A1\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),An={href:"https://blog.csdn.net/xutongbao/article/details/79408522",target:"_blank",rel:"noopener noreferrer"},Vn=a(`<h2 id="_58-png\u3001jpg\u3001gif-\u8FD9\u4E9B\u56FE\u7247\u683C\u5F0F\u89E3\u91CA\u4E00\u4E0B-\u5206\u522B\u4EC0\u4E48\u65F6\u5019\u7528\u3002\u6709\u6CA1\u6709\u4E86\u89E3\u8FC7-webp" tabindex="-1"><a class="header-anchor" href="#_58-png\u3001jpg\u3001gif-\u8FD9\u4E9B\u56FE\u7247\u683C\u5F0F\u89E3\u91CA\u4E00\u4E0B-\u5206\u522B\u4EC0\u4E48\u65F6\u5019\u7528\u3002\u6709\u6CA1\u6709\u4E86\u89E3\u8FC7-webp" aria-hidden="true">#</a> 58.png\u3001jpg\u3001gif \u8FD9\u4E9B\u56FE\u7247\u683C\u5F0F\u89E3\u91CA\u4E00\u4E0B\uFF0C\u5206\u522B\u4EC0\u4E48\u65F6\u5019\u7528\u3002\u6709\u6CA1\u6709\u4E86\u89E3\u8FC7 webp\uFF1F</h2><p>\u76F8\u5173\u77E5\u8BC6\u70B9\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\uFF081\uFF09BMP\uFF0C\u662F\u65E0\u635F\u7684\u3001\u65E2\u652F\u6301\u7D22\u5F15\u8272\u4E5F\u652F\u6301\u76F4\u63A5\u8272\u7684\u3001\u70B9\u9635\u56FE\u3002\u8FD9\u79CD\u56FE\u7247\u683C\u5F0F\u51E0\u4E4E\u6CA1\u6709\u5BF9\u6570\u636E\u8FDB\u884C\u538B\u7F29\uFF0C\u6240\u4EE5BMP\u683C\u5F0F\u7684\u56FE\u7247\u901A\u5E38
\u5177\u6709\u8F83\u5927\u7684\u6587\u4EF6\u5927\u5C0F\u3002

\uFF082\uFF09GIF\u662F\u65E0\u635F\u7684\u3001\u91C7\u7528\u7D22\u5F15\u8272\u7684\u3001\u70B9\u9635\u56FE\u3002\u91C7\u7528LZW\u538B\u7F29\u7B97\u6CD5\u8FDB\u884C\u7F16\u7801\u3002\u6587\u4EF6\u5C0F\uFF0C\u662FGIF\u683C\u5F0F\u7684\u4F18\u70B9\uFF0C\u540C\u65F6\uFF0CGIF\u683C\u5F0F\u8FD8\u5177
\u6709\u652F\u6301\u52A8\u753B\u4EE5\u53CA\u900F\u660E\u7684\u4F18\u70B9\u3002\u4F46\uFF0CGIF\u683C\u5F0F\u4EC5\u652F\u63018bit\u7684\u7D22\u5F15\u8272\uFF0C\u6240\u4EE5GIF\u683C\u5F0F\u9002\u7528\u4E8E\u5BF9\u8272\u5F69\u8981\u6C42\u4E0D\u9AD8\u540C\u65F6\u9700\u8981\u6587\u4EF6\u4F53\u79EF
\u8F83\u5C0F\u7684\u573A\u666F\u3002

\uFF083\uFF09JPEG\u662F\u6709\u635F\u7684\u3001\u91C7\u7528\u76F4\u63A5\u8272\u7684\u3001\u70B9\u9635\u56FE\u3002JPEG\u7684\u56FE\u7247\u7684\u4F18\u70B9\uFF0C\u662F\u91C7\u7528\u4E86\u76F4\u63A5\u8272\uFF0C\u5F97\u76CA\u4E8E\u66F4\u4E30\u5BCC\u7684\u8272\u5F69\uFF0CJPEG\u975E\u5E38\u9002\u5408\u7528\u6765
\u5B58\u50A8\u7167\u7247\uFF0C\u4E0EGIF\u76F8\u6BD4\uFF0CJPEG\u4E0D\u9002\u5408\u7528\u6765\u5B58\u50A8\u4F01\u4E1ALogo\u3001\u7EBF\u6846\u7C7B\u7684\u56FE\u3002\u56E0\u4E3A\u6709\u635F\u538B\u7F29\u4F1A\u5BFC\u81F4\u56FE\u7247\u6A21\u7CCA\uFF0C\u800C\u76F4\u63A5\u8272\u7684\u9009\u7528\uFF0C
\u53C8\u4F1A\u5BFC\u81F4\u56FE\u7247\u6587\u4EF6\u8F83GIF\u66F4\u5927\u3002

\uFF084\uFF09PNG-8\u662F\u65E0\u635F\u7684\u3001\u4F7F\u7528\u7D22\u5F15\u8272\u7684\u3001\u70B9\u9635\u56FE\u3002PNG\u662F\u4E00\u79CD\u6BD4\u8F83\u65B0\u7684\u56FE\u7247\u683C\u5F0F\uFF0CPNG-8\u662F\u975E\u5E38\u597D\u7684GIF\u683C\u5F0F\u66FF\u4EE3\u8005\uFF0C\u5728\u53EF\u80FD\u7684
\u60C5\u51B5\u4E0B\uFF0C\u5E94\u8BE5\u5C3D\u53EF\u80FD\u7684\u4F7F\u7528PNG-8\u800C\u4E0D\u662FGIF\uFF0C\u56E0\u4E3A\u5728\u76F8\u540C\u7684\u56FE\u7247\u6548\u679C\u4E0B\uFF0CPNG-8\u5177\u6709\u66F4\u5C0F\u7684\u6587\u4EF6\u4F53\u79EF\u3002\u9664\u6B64\u4E4B\u5916\uFF0CPNG-8
\u8FD8\u652F\u6301\u900F\u660E\u5EA6\u7684\u8C03\u8282\uFF0C\u800CGIF\u5E76\u4E0D\u652F\u6301\u3002\u73B0\u5728\uFF0C\u9664\u975E\u9700\u8981\u52A8\u753B\u7684\u652F\u6301\uFF0C\u5426\u5219\u6211\u4EEC\u6CA1\u6709\u7406\u7531\u4F7F\u7528GIF\u800C\u4E0D\u662FPNG-8\u3002

\uFF085\uFF09PNG-24\u662F\u65E0\u635F\u7684\u3001\u4F7F\u7528\u76F4\u63A5\u8272\u7684\u3001\u70B9\u9635\u56FE\u3002PNG-24\u7684\u4F18\u70B9\u5728\u4E8E\uFF0C\u5B83\u538B\u7F29\u4E86\u56FE\u7247\u7684\u6570\u636E\uFF0C\u4F7F\u5F97\u540C\u6837\u6548\u679C\u7684\u56FE\u7247\uFF0CPNG-24\u683C
\u5F0F\u7684\u6587\u4EF6\u5927\u5C0F\u8981\u6BD4BMP\u5C0F\u5F97\u591A\u3002\u5F53\u7136\uFF0CPNG24\u7684\u56FE\u7247\u8FD8\u662F\u8981\u6BD4JPEG\u3001GIF\u3001PNG-8\u5927\u5F97\u591A\u3002

\uFF086\uFF09SVG\u662F\u65E0\u635F\u7684\u3001\u77E2\u91CF\u56FE\u3002SVG\u662F\u77E2\u91CF\u56FE\u3002\u8FD9\u610F\u5473\u7740SVG\u56FE\u7247\u7531\u76F4\u7EBF\u548C\u66F2\u7EBF\u4EE5\u53CA\u7ED8\u5236\u5B83\u4EEC\u7684\u65B9\u6CD5\u7EC4\u6210\u3002\u5F53\u4F60\u653E\u5927\u4E00\u4E2ASVG\u56FE
\u7247\u7684\u65F6\u5019\uFF0C\u4F60\u770B\u5230\u7684\u8FD8\u662F\u7EBF\u548C\u66F2\u7EBF\uFF0C\u800C\u4E0D\u4F1A\u51FA\u73B0\u50CF\u7D20\u70B9\u3002\u8FD9\u610F\u5473\u7740SVG\u56FE\u7247\u5728\u653E\u5927\u65F6\uFF0C\u4E0D\u4F1A\u5931\u771F\uFF0C\u6240\u4EE5\u5B83\u975E\u5E38\u9002\u5408\u7528\u6765\u7ED8\u5236\u4F01
\u4E1ALogo\u3001Icon\u7B49\u3002

\uFF087\uFF09WebP\u662F\u8C37\u6B4C\u5F00\u53D1\u7684\u4E00\u79CD\u65B0\u56FE\u7247\u683C\u5F0F\uFF0CWebP\u662F\u540C\u65F6\u652F\u6301\u6709\u635F\u548C\u65E0\u635F\u538B\u7F29\u7684\u3001\u4F7F\u7528\u76F4\u63A5\u8272\u7684\u3001\u70B9\u9635\u56FE\u3002\u4ECE\u540D\u5B57\u5C31\u53EF\u4EE5\u770B\u51FA\u6765\u5B83\u662F
\u4E3AWeb\u800C\u751F\u7684\uFF0C\u4EC0\u4E48\u53EB\u4E3AWeb\u800C\u751F\u5462\uFF1F\u5C31\u662F\u8BF4\u76F8\u540C\u8D28\u91CF\u7684\u56FE\u7247\uFF0CWebP\u5177\u6709\u66F4\u5C0F\u7684\u6587\u4EF6\u4F53\u79EF\u3002\u73B0\u5728\u7F51\u7AD9\u4E0A\u5145\u6EE1\u4E86\u5927\u91CF\u7684\u56FE\u7247\uFF0C
\u5982\u679C\u80FD\u591F\u964D\u4F4E\u6BCF\u4E00\u4E2A\u56FE\u7247\u7684\u6587\u4EF6\u5927\u5C0F\uFF0C\u90A3\u4E48\u5C06\u5927\u5927\u51CF\u5C11\u6D4F\u89C8\u5668\u548C\u670D\u52A1\u5668\u4E4B\u95F4\u7684\u6570\u636E\u4F20\u8F93\u91CF\uFF0C\u8FDB\u800C\u964D\u4F4E\u8BBF\u95EE\u5EF6\u8FDF\uFF0C\u63D0\u5347\u8BBF\u95EE\u4F53\u9A8C\u3002

\u2022\u5728\u65E0\u635F\u538B\u7F29\u7684\u60C5\u51B5\u4E0B\uFF0C\u76F8\u540C\u8D28\u91CF\u7684WebP\u56FE\u7247\uFF0C\u6587\u4EF6\u5927\u5C0F\u8981\u6BD4PNG\u5C0F26%\uFF1B
\u2022\u5728\u6709\u635F\u538B\u7F29\u7684\u60C5\u51B5\u4E0B\uFF0C\u5177\u6709\u76F8\u540C\u56FE\u7247\u7CBE\u5EA6\u7684WebP\u56FE\u7247\uFF0C\u6587\u4EF6\u5927\u5C0F\u8981\u6BD4JPEG\u5C0F25%~34%\uFF1B
\u2022WebP\u56FE\u7247\u683C\u5F0F\u652F\u6301\u56FE\u7247\u900F\u660E\u5EA6\uFF0C\u4E00\u4E2A\u65E0\u635F\u538B\u7F29\u7684WebP\u56FE\u7247\uFF0C\u5982\u679C\u8981\u652F\u6301\u900F\u660E\u5EA6\u53EA\u9700\u898122%\u7684\u683C\u5916\u6587\u4EF6\u5927\u5C0F\u3002

\u4F46\u662F\u76EE\u524D\u53EA\u6709Chrome\u6D4F\u89C8\u5668\u548COpera\u6D4F\u89C8\u5668\u652F\u6301WebP\u683C\u5F0F\uFF0C\u517C\u5BB9\u6027\u4E0D\u592A\u597D\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u56DE\u7B54\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6211\u4E86\u89E3\u5230\u7684\u4E00\u5171\u6709\u4E03\u79CD\u5E38\u89C1\u7684\u56FE\u7247\u7684\u683C\u5F0F\u3002

\uFF081\uFF09\u7B2C\u4E00\u79CD\u662FBMP\u683C\u5F0F\uFF0C\u5B83\u662F\u65E0\u635F\u538B\u7F29\u7684\uFF0C\u652F\u6301\u7D22\u5F15\u8272\u548C\u76F4\u63A5\u8272\u7684\u70B9\u9635\u56FE\u3002\u7531\u4E8E\u5B83\u57FA\u672C\u4E0A\u6CA1\u6709\u8FDB\u884C\u538B\u7F29\uFF0C\u56E0\u6B64\u5B83\u7684\u6587\u4EF6\u4F53\u79EF\u4E00\u822C\u6BD4
\u8F83\u5927\u3002

\uFF082\uFF09\u7B2C\u4E8C\u79CD\u662FGIF\u683C\u5F0F\uFF0C\u5B83\u662F\u65E0\u635F\u538B\u7F29\u7684\u4F7F\u7528\u7D22\u5F15\u8272\u7684\u70B9\u9635\u56FE\u3002\u7531\u4E8E\u4F7F\u7528\u4E86LZW\u538B\u7F29\u65B9\u6CD5\uFF0C\u56E0\u6B64\u6587\u4EF6\u7684\u4F53\u79EF\u5F88\u5C0F\u3002\u5E76\u4E14GIF\u8FD8
\u652F\u6301\u52A8\u753B\u548C\u900F\u660E\u5EA6\u3002\u4F46\u56E0\u4E3A\u5B83\u4F7F\u7528\u7684\u662F\u7D22\u5F15\u8272\uFF0C\u6240\u4EE5\u5B83\u9002\u7528\u4E8E\u4E00\u4E9B\u5BF9\u989C\u8272\u8981\u6C42\u4E0D\u9AD8\u4E14\u9700\u8981\u6587\u4EF6\u4F53\u79EF\u5C0F\u7684\u573A\u666F\u3002

\uFF083\uFF09\u7B2C\u4E09\u79CD\u662FJPEG\u683C\u5F0F\uFF0C\u5B83\u662F\u6709\u635F\u538B\u7F29\u7684\u4F7F\u7528\u76F4\u63A5\u8272\u7684\u70B9\u9635\u56FE\u3002\u7531\u4E8E\u4F7F\u7528\u4E86\u76F4\u63A5\u8272\uFF0C\u8272\u5F69\u8F83\u4E3A\u4E30\u5BCC\uFF0C\u4E00\u822C\u9002\u7528\u4E8E\u6765\u5B58\u50A8\u7167\u7247\u3002\u4F46
\u7531\u4E8E\u4F7F\u7528\u7684\u662F\u76F4\u63A5\u8272\uFF0C\u53EF\u80FD\u6587\u4EF6\u7684\u4F53\u79EF\u76F8\u5BF9\u4E8EGIF\u683C\u5F0F\u6765\u8BF4\u66F4\u5927\u3002

\uFF084\uFF09\u7B2C\u56DB\u79CD\u662FPNG-8\u683C\u5F0F\uFF0C\u5B83\u662F\u65E0\u635F\u538B\u7F29\u7684\u4F7F\u7528\u7D22\u5F15\u8272\u7684\u70B9\u9635\u56FE\u3002\u5B83\u662FGIF\u7684\u4E00\u79CD\u5F88\u597D\u7684\u66FF\u4EE3\u683C\u5F0F\uFF0C\u5B83\u4E5F\u652F\u6301\u900F\u660E\u5EA6\u7684\u8C03\u6574\uFF0C\u5E76
\u4E14\u6587\u4EF6\u7684\u4F53\u79EF\u76F8\u5BF9\u4E8EGIF\u683C\u5F0F\u66F4\u5C0F\u3002\u4E00\u822C\u6765\u8BF4\u5982\u679C\u4E0D\u662F\u9700\u8981\u52A8\u753B\u7684\u60C5\u51B5\uFF0C\u6211\u4EEC\u90FD\u53EF\u4EE5\u4F7F\u7528PNG-8\u683C\u5F0F\u4EE3\u66FFGIF\u683C\u5F0F\u3002

\uFF085\uFF09\u7B2C\u4E94\u79CD\u662FPNG-24\u683C\u5F0F\uFF0C\u5B83\u662F\u65E0\u635F\u538B\u7F29\u7684\u4F7F\u7528\u76F4\u63A5\u8272\u7684\u70B9\u9635\u56FE\u3002PNG-24\u7684\u4F18\u70B9\u662F\u5B83\u4F7F\u7528\u4E86\u538B\u7F29\u7B97\u6CD5\uFF0C\u6240\u4EE5\u5B83\u7684\u4F53\u79EF\u6BD4BMP
\u683C\u5F0F\u7684\u6587\u4EF6\u8981\u5C0F\u5F97\u591A\uFF0C\u4F46\u662F\u76F8\u5BF9\u4E8E\u5176\u4ED6\u7684\u51E0\u79CD\u683C\u5F0F\uFF0C\u8FD8\u662F\u8981\u5927\u4E00\u4E9B\u3002

\uFF086\uFF09\u7B2C\u516D\u79CD\u683C\u5F0F\u662Fsvg\u683C\u5F0F\uFF0C\u5B83\u662F\u77E2\u91CF\u56FE\uFF0C\u5B83\u8BB0\u5F55\u7684\u56FE\u7247\u7684\u7ED8\u5236\u65B9\u5F0F\uFF0C\u56E0\u6B64\u5BF9\u77E2\u91CF\u56FE\u8FDB\u884C\u653E\u5927\u548C\u7F29\u5C0F\u4E0D\u4F1A\u4EA7\u751F\u952F\u9F7F\u548C\u5931\u771F\u3002\u5B83\u4E00\u822C
\u9002\u5408\u4E8E\u7528\u6765\u5236\u4F5C\u4E00\u4E9B\u7F51\u7AD9logo\u6216\u8005\u56FE\u6807\u4E4B\u7C7B\u7684\u56FE\u7247\u3002

\uFF087\uFF09\u7B2C\u4E03\u79CD\u683C\u5F0F\u662Fwebp\u683C\u5F0F\uFF0C\u5B83\u662F\u652F\u6301\u6709\u635F\u548C\u65E0\u635F\u4E24\u79CD\u538B\u7F29\u65B9\u5F0F\u7684\u4F7F\u7528\u76F4\u63A5\u8272\u7684\u70B9\u9635\u56FE\u3002\u4F7F\u7528webp\u683C\u5F0F\u7684\u6700\u5927\u7684\u4F18\u70B9\u662F\uFF0C\u5728\u76F8
\u540C\u8D28\u91CF\u7684\u6587\u4EF6\u4E0B\uFF0C\u5B83\u62E5\u6709\u66F4\u5C0F\u7684\u6587\u4EF6\u4F53\u79EF\u3002\u56E0\u6B64\u5B83\u975E\u5E38\u9002\u5408\u4E8E\u7F51\u7EDC\u56FE\u7247\u7684\u4F20\u8F93\uFF0C\u56E0\u4E3A\u56FE\u7247\u4F53\u79EF\u7684\u51CF\u5C11\uFF0C\u610F\u5473\u7740\u8BF7\u6C42\u65F6\u95F4\u7684\u51CF\u5C0F\uFF0C
\u8FD9\u6837\u4F1A\u63D0\u9AD8\u7528\u6237\u7684\u4F53\u9A8C\u3002\u8FD9\u662F\u8C37\u6B4C\u5F00\u53D1\u7684\u4E00\u79CD\u65B0\u7684\u56FE\u7247\u683C\u5F0F\uFF0C\u76EE\u524D\u5728\u517C\u5BB9\u6027\u4E0A\u8FD8\u4E0D\u662F\u592A\u597D\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),On={href:"https://www.cnblogs.com/xinzhao/p/5130410.html",target:"_blank",rel:"noopener noreferrer"},Jn=a(`<h2 id="_59-\u6D4F\u89C8\u5668\u5982\u4F55\u5224\u65AD\u662F\u5426\u652F\u6301-webp-\u683C\u5F0F\u56FE\u7247" tabindex="-1"><a class="header-anchor" href="#_59-\u6D4F\u89C8\u5668\u5982\u4F55\u5224\u65AD\u662F\u5426\u652F\u6301-webp-\u683C\u5F0F\u56FE\u7247" aria-hidden="true">#</a> 59.\u6D4F\u89C8\u5668\u5982\u4F55\u5224\u65AD\u662F\u5426\u652F\u6301 webp \u683C\u5F0F\u56FE\u7247</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\uFF081\uFF09\u5BBD\u9AD8\u5224\u65AD\u6CD5\u3002\u901A\u8FC7\u521B\u5EFAimage\u5BF9\u8C61\uFF0C\u5C06\u5176src\u5C5E\u6027\u8BBE\u7F6E\u4E3Awebp\u683C\u5F0F\u7684\u56FE\u7247\uFF0C\u7136\u540E\u5728onload\u4E8B\u4EF6\u4E2D\u83B7\u53D6\u56FE\u7247\u7684\u5BBD\u9AD8\uFF0C\u5982
\u679C\u80FD\u591F\u83B7\u53D6\uFF0C\u5219\u8BF4\u660E\u6D4F\u89C8\u5668\u652F\u6301webp\u683C\u5F0F\u56FE\u7247\u3002\u5982\u679C\u4E0D\u80FD\u83B7\u53D6\u6216\u8005\u89E6\u53D1\u4E86onerror\u51FD\u6570\uFF0C\u90A3\u4E48\u5C31\u8BF4\u660E\u6D4F\u89C8\u5668\u4E0D\u652F\u6301webp\u683C
\u5F0F\u7684\u56FE\u7247\u3002

\uFF082\uFF09canvas\u5224\u65AD\u65B9\u6CD5\u3002\u6211\u4EEC\u53EF\u4EE5\u52A8\u6001\u7684\u521B\u5EFA\u4E00\u4E2Acanvas\u5BF9\u8C61\uFF0C\u901A\u8FC7canvas\u7684toDataURL\u5C06\u8BBE\u7F6E\u4E3Awebp\u683C\u5F0F\uFF0C\u7136\u540E\u5224\u65AD
\u8FD4\u56DE\u503C\u4E2D\u662F\u5426\u542B\u6709image/webp\u5B57\u6BB5\uFF0C\u5982\u679C\u5305\u542B\u5219\u8BF4\u660E\u652F\u6301WebP\uFF0C\u53CD\u4E4B\u5219\u4E0D\u652F\u6301\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Rn={href:"https://blog.csdn.net/jesslu/article/details/82495061",target:"_blank",rel:"noopener noreferrer"},Un={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement/toDataURL",target:"_blank",rel:"noopener noreferrer"},Yn=a(`<h2 id="_60-\u4EC0\u4E48\u662F-cookie-\u9694\u79BB-\u6216\u8005\u8BF4-\u8BF7\u6C42\u8D44\u6E90\u7684\u65F6\u5019\u4E0D\u8981\u8BA9\u5B83\u5E26-cookie-\u600E\u4E48\u505A" tabindex="-1"><a class="header-anchor" href="#_60-\u4EC0\u4E48\u662F-cookie-\u9694\u79BB-\u6216\u8005\u8BF4-\u8BF7\u6C42\u8D44\u6E90\u7684\u65F6\u5019\u4E0D\u8981\u8BA9\u5B83\u5E26-cookie-\u600E\u4E48\u505A" aria-hidden="true">#</a> 60.\u4EC0\u4E48\u662F Cookie \u9694\u79BB\uFF1F\uFF08\u6216\u8005\u8BF4\uFF1A\u8BF7\u6C42\u8D44\u6E90\u7684\u65F6\u5019\u4E0D\u8981\u8BA9\u5B83\u5E26 cookie \u600E\u4E48\u505A\uFF09</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u7F51\u7AD9\u5411\u670D\u52A1\u5668\u8BF7\u6C42\u7684\u65F6\u5019\uFF0C\u4F1A\u81EA\u52A8\u5E26\u4E0Acookie\u8FD9\u6837\u589E\u52A0\u8868\u5934\u4FE1\u606F\u91CF\uFF0C\u4F7F\u8BF7\u6C42\u53D8\u6162\u3002

\u5982\u679C\u9759\u6001\u6587\u4EF6\u90FD\u653E\u5728\u4E3B\u57DF\u540D\u4E0B\uFF0C\u90A3\u9759\u6001\u6587\u4EF6\u8BF7\u6C42\u7684\u65F6\u5019\u90FD\u5E26\u6709\u7684cookie\u7684\u6570\u636E\u63D0\u4EA4\u7ED9server\u7684\uFF0C\u975E\u5E38\u6D6A\u8D39\u6D41\u91CF\uFF0C\u6240\u4EE5\u4E0D\u5982\u9694\u79BB\u5F00
\uFF0C\u9759\u6001\u8D44\u6E90\u653ECDN\u3002

\u56E0\u4E3Acookie\u6709\u57DF\u7684\u9650\u5236\uFF0C\u56E0\u6B64\u4E0D\u80FD\u8DE8\u57DF\u63D0\u4EA4\u8BF7\u6C42\uFF0C\u6545\u4F7F\u7528\u975E\u4E3B\u8981\u57DF\u540D\u7684\u65F6\u5019\uFF0C\u8BF7\u6C42\u5934\u4E2D\u5C31\u4E0D\u4F1A\u5E26\u6709cookie\u6570\u636E\uFF0C\u8FD9\u6837\u53EF\u4EE5\u964D\u4F4E\u8BF7
\u6C42\u5934\u7684\u5927\u5C0F\uFF0C\u964D\u4F4E\u8BF7\u6C42\u65F6\u95F4\uFF0C\u4ECE\u800C\u8FBE\u5230\u964D\u4F4E\u6574\u4F53\u8BF7\u6C42\u5EF6\u65F6\u7684\u76EE\u7684\u3002

\u540C\u65F6\u8FD9\u79CD\u65B9\u5F0F\u4E0D\u4F1A\u5C06cookie\u4F20\u5165WebServer\uFF0C\u4E5F\u51CF\u5C11\u4E86WebServer\u5BF9cookie\u7684\u5904\u7406\u5206\u6790\u73AF\u8282\uFF0C\u63D0\u9AD8\u4E86webserver\u7684
http\u8BF7\u6C42\u7684\u89E3\u6790\u901F\u5EA6\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Xn={href:"https://www.zhihu.com/question/36514327?rf=37353035",target:"_blank",rel:"noopener noreferrer"},Kn=a(`<h2 id="_61-style-\u6807\u7B7E\u5199\u5728-body-\u540E\u4E0E-body-\u524D\u6709\u4EC0\u4E48\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_61-style-\u6807\u7B7E\u5199\u5728-body-\u540E\u4E0E-body-\u524D\u6709\u4EC0\u4E48\u533A\u522B" aria-hidden="true">#</a> 61.style \u6807\u7B7E\u5199\u5728 body \u540E\u4E0E body \u524D\u6709\u4EC0\u4E48\u533A\u522B\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u9875\u9762\u52A0\u8F7D\u81EA\u4E0A\u800C\u4E0B\u5F53\u7136\u662F\u5148\u52A0\u8F7D\u6837\u5F0F\u3002\u5199\u5728body\u6807\u7B7E\u540E\u7531\u4E8E\u6D4F\u89C8\u5668\u4EE5\u9010\u884C\u65B9\u5F0F\u5BF9HTML\u6587\u6863\u8FDB\u884C\u89E3\u6790\uFF0C\u5F53\u89E3\u6790\u5230\u5199\u5728\u5C3E\u90E8\u7684\u6837\u5F0F
\u8868\uFF08\u5916\u8054\u6216\u5199\u5728style\u6807\u7B7E\uFF09\u4F1A\u5BFC\u81F4\u6D4F\u89C8\u5668\u505C\u6B62\u4E4B\u524D\u7684\u6E32\u67D3\uFF0C\u7B49\u5F85\u52A0\u8F7D\u4E14\u89E3\u6790\u6837\u5F0F\u8868\u5B8C\u6210\u4E4B\u540E\u91CD\u65B0\u6E32\u67D3\uFF0C\u5728windows\u7684IE\u4E0B\u53EF
\u80FD\u4F1A\u51FA\u73B0FOUC\u73B0\u8C61\uFF08\u5373\u6837\u5F0F\u5931\u6548\u5BFC\u81F4\u7684\u9875\u9762\u95EA\u70C1\u95EE\u9898\uFF09
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_62-\u4EC0\u4E48\u662F-css-\u9884\u5904\u7406\u5668-\u540E\u5904\u7406\u5668" tabindex="-1"><a class="header-anchor" href="#_62-\u4EC0\u4E48\u662F-css-\u9884\u5904\u7406\u5668-\u540E\u5904\u7406\u5668" aria-hidden="true">#</a> 62.\u4EC0\u4E48\u662F CSS \u9884\u5904\u7406\u5668/\u540E\u5904\u7406\u5668\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>CSS\u9884\u5904\u7406\u5668\u5B9A\u4E49\u4E86\u4E00\u79CD\u65B0\u7684\u8BED\u8A00\uFF0C\u5176\u57FA\u672C\u601D\u60F3\u662F\uFF0C\u7528\u4E00\u79CD\u4E13\u95E8\u7684\u7F16\u7A0B\u8BED\u8A00\uFF0C\u4E3ACSS\u589E\u52A0\u4E86\u4E00\u4E9B\u7F16\u7A0B\u7684\u7279\u6027\uFF0C\u5C06CSS\u4F5C\u4E3A\u76EE\u6807\u751F\u6210
\u6587\u4EF6\uFF0C\u7136\u540E\u5F00\u53D1\u8005\u5C31\u53EA\u8981\u4F7F\u7528\u8FD9\u79CD\u8BED\u8A00\u8FDB\u884C\u7F16\u7801\u5DE5\u4F5C\u3002\u901A\u4FD7\u7684\u8BF4\uFF0CCSS\u9884\u5904\u7406\u5668\u7528\u4E00\u79CD\u4E13\u95E8\u7684\u7F16\u7A0B\u8BED\u8A00\uFF0C\u8FDB\u884CWeb\u9875\u9762\u6837\u5F0F\u8BBE\u8BA1\uFF0C\u7136
\u540E\u518D\u7F16\u8BD1\u6210\u6B63\u5E38\u7684CSS\u6587\u4EF6\u3002

\u9884\u5904\u7406\u5668\u4F8B\u5982\uFF1ALESS\u3001Sass\u3001Stylus\uFF0C\u7528\u6765\u9884\u7F16\u8BD1Sass\u6216less csssprite\uFF0C\u589E\u5F3A\u4E86css\u4EE3\u7801\u7684\u590D\u7528\u6027\uFF0C\u8FD8\u6709\u5C42\u7EA7\u3001mixin\u3001
\u53D8\u91CF\u3001\u5FAA\u73AF\u3001\u51FD\u6570\u7B49\uFF0C\u5177\u6709\u5F88\u65B9\u4FBF\u7684UI\u7EC4\u4EF6\u6A21\u5757\u5316\u5F00\u53D1\u80FD\u529B\uFF0C\u6781\u5927\u7684\u63D0\u9AD8\u5DE5\u4F5C\u6548\u7387\u3002

CSS\u540E\u5904\u7406\u5668\u662F\u5BF9CSS\u8FDB\u884C\u5904\u7406\uFF0C\u5E76\u6700\u7EC8\u751F\u6210CSS\u7684\u9884\u5904\u7406\u5668\uFF0C\u5B83\u5C5E\u4E8E\u5E7F\u4E49\u4E0A\u7684CSS\u9884\u5904\u7406\u5668\u3002\u6211\u4EEC\u5F88\u4E45\u4EE5\u524D\u5C31\u5728\u7528CSS\u540E
\u5904\u7406\u5668\u4E86\uFF0C\u6700\u5178\u578B\u7684\u4F8B\u5B50\u662FCSS\u538B\u7F29\u5DE5\u5177\uFF08\u5982clean-css\uFF09\uFF0C\u53EA\u4E0D\u8FC7\u4EE5\u524D\u6CA1\u5355\u72EC\u62FF\u51FA\u6765\u8BF4\u8FC7\u3002\u8FD8\u6709\u6700\u8FD1\u6BD4\u8F83\u706B\u7684Autoprefixer\uFF0C
\u4EE5CanIUse\u4E0A\u7684\u6D4F\u89C8\u5668\u652F\u6301\u6570\u636E\u4E3A\u57FA\u7840\uFF0C\u81EA\u52A8\u5904\u7406\u517C\u5BB9\u6027\u95EE\u9898\u3002

\u540E\u5904\u7406\u5668\u4F8B\u5982\uFF1APostCSS\uFF0C\u901A\u5E38\u88AB\u89C6\u4E3A\u5728\u5B8C\u6210\u7684\u6837\u5F0F\u8868\u4E2D\u6839\u636ECSS\u89C4\u8303\u5904\u7406CSS\uFF0C\u8BA9\u5176\u66F4\u6709\u6548\uFF1B\u76EE\u524D\u6700\u5E38\u505A\u7684\u662F\u7ED9CSS\u5C5E\u6027\u6DFB\u52A0\u6D4F
\u89C8\u5668\u79C1\u6709\u524D\u7F00\uFF0C\u5B9E\u73B0\u8DE8\u6D4F\u89C8\u5668\u517C\u5BB9\u6027\u7684\u95EE\u9898\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),Zn={href:"https://blog.csdn.net/yushuangyushuang/article/details/79209752",target:"_blank",rel:"noopener noreferrer"},Qn=a(`<h2 id="_63-\u9610\u8FF0\u4E00\u4E0B-csssprites" tabindex="-1"><a class="header-anchor" href="#_63-\u9610\u8FF0\u4E00\u4E0B-csssprites" aria-hidden="true">#</a> 63.\u9610\u8FF0\u4E00\u4E0B CSSSprites</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5C06\u4E00\u4E2A\u9875\u9762\u6D89\u53CA\u5230\u7684\u6240\u6709\u56FE\u7247\u90FD\u5305\u542B\u5230\u4E00\u5F20\u5927\u56FE\u4E2D\u53BB\uFF0C\u7136\u540E\u5229\u7528CSS\u7684background-image\uFF0Cbackground-repeat\uFF0Cbackground
-position\u7684\u7EC4\u5408\u8FDB\u884C\u80CC\u666F\u5B9A\u4F4D\u3002\u5229\u7528CSSSprites\u80FD\u5F88\u597D\u5730\u51CF\u5C11\u7F51\u9875\u7684http\u8BF7\u6C42\uFF0C\u4ECE\u800C\u5F88\u597D\u7684\u63D0\u9AD8\u9875\u9762\u7684\u6027\u80FD\uFF1BCSSSprites
\u80FD\u51CF\u5C11\u56FE\u7247\u7684\u5B57\u8282\u3002

\u4F18\u70B9\uFF1A

\u51CF\u5C11HTTP\u8BF7\u6C42\u6570\uFF0C\u6781\u5927\u5730\u63D0\u9AD8\u9875\u9762\u52A0\u8F7D\u901F\u5EA6
\u589E\u52A0\u56FE\u7247\u4FE1\u606F\u91CD\u590D\u5EA6\uFF0C\u63D0\u9AD8\u538B\u7F29\u6BD4\uFF0C\u51CF\u5C11\u56FE\u7247\u5927\u5C0F
\u66F4\u6362\u98CE\u683C\u65B9\u4FBF\uFF0C\u53EA\u9700\u5728\u4E00\u5F20\u6216\u51E0\u5F20\u56FE\u7247\u4E0A\u4FEE\u6539\u989C\u8272\u6216\u6837\u5F0F\u5373\u53EF\u5B9E\u73B0

\u7F3A\u70B9\uFF1A

\u56FE\u7247\u5408\u5E76\u9EBB\u70E6
\u7EF4\u62A4\u9EBB\u70E6\uFF0C\u4FEE\u6539\u4E00\u4E2A\u56FE\u7247\u53EF\u80FD\u9700\u8981\u91CD\u65B0\u5E03\u5C40\u6574\u4E2A\u56FE\u7247\uFF0C\u6837\u5F0F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_64-\u4F7F\u7528-rem-\u5E03\u5C40\u7684\u4F18\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#_64-\u4F7F\u7528-rem-\u5E03\u5C40\u7684\u4F18\u7F3A\u70B9" aria-hidden="true">#</a> 64.\u4F7F\u7528 rem \u5E03\u5C40\u7684\u4F18\u7F3A\u70B9\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4F18\u70B9\uFF1A
\u5728\u5C4F\u5E55\u5206\u8FA8\u7387\u5343\u5DEE\u4E07\u522B\u7684\u65F6\u4EE3\uFF0C\u53EA\u8981\u5C06rem\u4E0E\u5C4F\u5E55\u5206\u8FA8\u7387\u5173\u8054\u8D77\u6765\u5C31\u53EF\u4EE5\u5B9E\u73B0\u9875\u9762\u7684\u6574\u4F53\u7F29\u653E\uFF0C\u4F7F\u5F97\u5728\u8BBE\u5907\u4E0A\u7684\u5C55\u73B0\u90FD\u7EDF\u4E00\u8D77\u6765\u4E86\u3002
\u800C\u4E14\u73B0\u5728\u6D4F\u89C8\u5668\u57FA\u672C\u90FD\u5DF2\u7ECF\u652F\u6301rem\u4E86\uFF0C\u517C\u5BB9\u6027\u4E5F\u975E\u5E38\u7684\u597D\u3002

\u7F3A\u70B9\uFF1A
\uFF081\uFF09\u5728\u5947\u8469\u7684dpr\u8BBE\u5907\u4E0A\u8868\u73B0\u6548\u679C\u4E0D\u592A\u597D\uFF0C\u6BD4\u5982\u4E00\u4E9B\u534E\u4E3A\u7684\u9AD8\u7AEF\u673A\u578B\u7528rem\u5E03\u5C40\u4F1A\u51FA\u73B0\u9519\u4E71\u3002
\uFF082\uFF09\u4F7F\u7528iframe\u5F15\u7528\u4E5F\u4F1A\u51FA\u73B0\u95EE\u9898\u3002
\uFF083\uFF09rem\u5728\u591A\u5C4F\u5E55\u5C3A\u5BF8\u9002\u914D\u4E0A\u4E0E\u5F53\u524D\u4E24\u5927\u5E73\u53F0\u7684\u8BBE\u8BA1\u54F2\u5B66\u4E0D\u4E00\u81F4\u3002\u5373\u5927\u5C4F\u7684\u51FA\u73B0\u5230\u5E95\u662F\u4E3A\u4E86\u770B\u5F97\u53C8\u5927\u53C8\u6E05\u695A\uFF0C\u8FD8\u662F\u4E3A\u4E86\u770B\u7684\u66F4\u591A\u7684\u95EE
\u9898\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),$n={href:"https://www.zhihu.com/question/21504656",target:"_blank",rel:"noopener noreferrer"},ne={href:"https://www.jianshu.com/p/e8ae1c3861dc",target:"_blank",rel:"noopener noreferrer"},ee={href:"https://blog.csdn.net/Honeymao/article/details/76795089",target:"_blank",rel:"noopener noreferrer"},se={href:"https://github.com/amfe/article/issues/17",target:"_blank",rel:"noopener noreferrer"},ie=n("h2",{id:"_65-\u51E0\u79CD\u5E38\u89C1\u7684-css-\u5E03\u5C40",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_65-\u51E0\u79CD\u5E38\u89C1\u7684-css-\u5E03\u5C40","aria-hidden":"true"},"#"),e(" 65.\u51E0\u79CD\u5E38\u89C1\u7684 CSS \u5E03\u5C40")],-1),ae={href:"https://juejin.im/post/5bbcd7ff5188255c80668028#heading-12",target:"_blank",rel:"noopener noreferrer"},le=a(`<h2 id="_66-\u753B\u4E00\u6761-0-5px-\u7684\u7EBF" tabindex="-1"><a class="header-anchor" href="#_66-\u753B\u4E00\u6761-0-5px-\u7684\u7EBF" aria-hidden="true">#</a> 66.\u753B\u4E00\u6761 0.5px \u7684\u7EBF</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u91C7\u7528meta viewport\u7684\u65B9\u5F0F

\u91C7\u7528border-image\u7684\u65B9\u5F0F

\u91C7\u7528transform:scale()\u7684\u65B9\u5F0F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),te={href:"https://juejin.im/post/5ab65f40f265da2384408a95",target:"_blank",rel:"noopener noreferrer"},de=a(`<h2 id="_67-transition-\u548C-animation-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_67-transition-\u548C-animation-\u7684\u533A\u522B" aria-hidden="true">#</a> 67.transition \u548C animation \u7684\u533A\u522B</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>transition\u5173\u6CE8\u7684\u662FCSS property\u7684\u53D8\u5316\uFF0Cproperty\u503C\u548C\u65F6\u95F4\u7684\u5173\u7CFB\u662F\u4E00\u4E2A\u4E09\u6B21\u8D1D\u585E\u5C14\u66F2\u7EBF\u3002

animation\u4F5C\u7528\u4E8E\u5143\u7D20\u672C\u8EAB\u800C\u4E0D\u662F\u6837\u5F0F\u5C5E\u6027\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5173\u952E\u5E27\u7684\u6982\u5FF5\uFF0C\u5E94\u8BE5\u8BF4\u53EF\u4EE5\u5B9E\u73B0\u66F4\u81EA\u7531\u7684\u52A8\u753B\u6548\u679C\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),re={href:"https://www.zhihu.com/question/19749045",target:"_blank",rel:"noopener noreferrer"},ce={href:"https://blog.csdn.net/cddcj/article/details/53582334",target:"_blank",rel:"noopener noreferrer"},oe={href:"http://www.ruanyifeng.com/blog/2014/02/css_transition_and_animation.html",target:"_blank",rel:"noopener noreferrer"},pe={href:"https://juejin.im/post/5b137e6e51882513ac201dfb",target:"_blank",rel:"noopener noreferrer"},ue=a(`<h2 id="_68-\u4EC0\u4E48\u662F\u9996\u9009\u6700\u5C0F\u5BBD\u5EA6" tabindex="-1"><a class="header-anchor" href="#_68-\u4EC0\u4E48\u662F\u9996\u9009\u6700\u5C0F\u5BBD\u5EA6" aria-hidden="true">#</a> 68.\u4EC0\u4E48\u662F\u9996\u9009\u6700\u5C0F\u5BBD\u5EA6\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u201C\u9996\u9009\u6700\u5C0F\u5BBD\u5EA6\u201D\uFF0C\u6307\u7684\u662F\u5143\u7D20\u6700\u9002\u5408\u7684\u6700\u5C0F\u5BBD\u5EA6\u3002

\u4E1C\u4E9A\u6587\u5B57\uFF08\u5982\u4E2D\u6587\uFF09\u6700\u5C0F\u5BBD\u5EA6\u4E3A\u6BCF\u4E2A\u6C49\u5B57\u7684\u5BBD\u5EA6\u3002

\u897F\u65B9\u6587\u5B57\u6700\u5C0F\u5BBD\u5EA6\u7531\u7279\u5B9A\u7684\u8FDE\u7EED\u7684\u82F1\u6587\u5B57\u7B26\u5355\u5143\u51B3\u5B9A\u3002\u5E76\u4E0D\u662F\u6240\u6709\u7684\u82F1\u6587\u5B57\u7B26\u90FD\u4F1A\u7EC4\u6210\u8FDE\u7EED\u5355\u5143\uFF0C\u4E00\u822C\u4F1A\u7EC8\u6B62\u4E8E\u7A7A\u683C\uFF08\u666E\u901A\u7A7A\u683C\uFF09\u3001\u77ED
\u6A2A\u7EBF\u3001\u95EE\u53F7\u4EE5\u53CA\u5176\u4ED6\u975E\u82F1\u6587\u5B57\u7B26\u7B49\u3002

\u5982\u679C\u60F3\u8BA9\u82F1\u6587\u5B57\u7B26\u548C\u4E2D\u6587\u4E00\u6837\uFF0C\u6BCF\u4E00\u4E2A\u5B57\u7B26\u90FD\u7528\u6700\u5C0F\u5BBD\u5EA6\u5355\u5143\uFF0C\u53EF\u4EE5\u8BD5\u8BD5\u4F7F\u7528CSS\u4E2D\u7684word-break:break-all\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_69-\u4E3A\u4EC0\u4E48-height-100-\u4F1A\u65E0\u6548" tabindex="-1"><a class="header-anchor" href="#_69-\u4E3A\u4EC0\u4E48-height-100-\u4F1A\u65E0\u6548" aria-hidden="true">#</a> 69.\u4E3A\u4EC0\u4E48 height:100%\u4F1A\u65E0\u6548\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5BF9\u4E8E\u666E\u901A\u6587\u6863\u6D41\u4E2D\u7684\u5143\u7D20\uFF0C\u767E\u5206\u6BD4\u9AD8\u5EA6\u503C\u8981\u60F3\u8D77\u4F5C\u7528\uFF0C\u5176\u7236\u7EA7\u5FC5\u987B\u6709\u4E00\u4E2A\u53EF\u4EE5\u751F\u6548\u7684\u9AD8\u5EA6\u503C\u3002

\u539F\u56E0\u662F\u5982\u679C\u5305\u542B\u5757\u7684\u9AD8\u5EA6\u6CA1\u6709\u663E\u5F0F\u6307\u5B9A\uFF08\u5373\u9AD8\u5EA6\u7531\u5185\u5BB9\u51B3\u5B9A\uFF09\uFF0C\u5E76\u4E14\u8BE5\u5143\u7D20\u4E0D\u662F\u7EDD\u5BF9\u5B9A\u4F4D\uFF0C\u5219\u8BA1\u7B97\u503C\u4E3Aauto\uFF0C\u56E0\u4E3A\u89E3\u91CA\u6210\u4E86auto\uFF0C
\u6240\u4EE5\u65E0\u6CD5\u53C2\u4E0E\u8BA1\u7B97\u3002

\u4F7F\u7528\u7EDD\u5BF9\u5B9A\u4F4D\u7684\u5143\u7D20\u4F1A\u6709\u8BA1\u7B97\u503C\uFF0C\u5373\u4F7F\u7956\u5148\u5143\u7D20\u7684height\u8BA1\u7B97\u4E3Aauto\u4E5F\u662F\u5982\u6B64\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_70-min-width-max-width-\u548C-min-height-max-height-\u5C5E\u6027\u95F4\u7684\u8986\u76D6\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#_70-min-width-max-width-\u548C-min-height-max-height-\u5C5E\u6027\u95F4\u7684\u8986\u76D6\u89C4\u5219" aria-hidden="true">#</a> 70.min-width/max-width \u548C min-height/max-height \u5C5E\u6027\u95F4\u7684\u8986\u76D6\u89C4\u5219\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\uFF081\uFF09max-width\u4F1A\u8986\u76D6width\uFF0C\u5373\u4F7Fwidth\u662F\u884C\u7C7B\u6837\u5F0F\u6216\u8005\u8BBE\u7F6E\u4E86!important\u3002

\uFF082\uFF09min-width\u4F1A\u8986\u76D6max-width\uFF0C\u6B64\u89C4\u5219\u53D1\u751F\u5728min-width\u548Cmax-width\u51B2\u7A81\u7684\u65F6\u5019\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_71-\u5185\u8054\u76D2\u6A21\u578B\u57FA\u672C\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#_71-\u5185\u8054\u76D2\u6A21\u578B\u57FA\u672C\u6982\u5FF5" aria-hidden="true">#</a> 71.\u5185\u8054\u76D2\u6A21\u578B\u57FA\u672C\u6982\u5FF5</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\uFF081\uFF09\u5185\u5BB9\u533A\u57DF\uFF08content area\uFF09\u3002\u5185\u5BB9\u533A\u57DF\u6307\u4E00\u79CD\u56F4\u7ED5\u6587\u5B57\u770B\u4E0D\u89C1\u7684\u76D2\u5B50\uFF0C\u5176\u5927\u5C0F\u4EC5\u53D7\u5B57\u7B26\u672C\u8EAB\u7279\u6027\u63A7\u5236\uFF0C\u672C\u8D28\u4E0A\u662F\u4E00\u4E2A\u5B57\u7B26\u76D2\u5B50
\uFF08character box\uFF09\uFF1B\u4F46\u662F\u6709\u4E9B\u5143\u7D20\uFF0C\u5982\u56FE\u7247\u8FD9\u6837\u7684\u66FF\u6362\u5143\u7D20\uFF0C\u5176\u5185\u5BB9\u663E\u7136\u4E0D\u662F\u6587\u5B57\uFF0C\u4E0D\u5B58\u5728\u5B57\u7B26\u76D2\u5B50\u4E4B\u7C7B\u7684\uFF0C\u56E0\u6B64\uFF0C\u5BF9\u4E8E\u8FD9\u4E9B
\u5143\u7D20\uFF0C\u5185\u5BB9\u533A\u57DF\u53EF\u4EE5\u770B\u6210\u5143\u7D20\u81EA\u8EAB\u3002

\uFF082\uFF09\u5185\u8054\u76D2\u5B50\uFF08inline box\uFF09\u3002\u201C\u5185\u8054\u76D2\u5B50\u201D\u4E0D\u4F1A\u8BA9\u5185\u5BB9\u6210\u5757\u663E\u793A\uFF0C\u800C\u662F\u6392\u6210\u4E00\u884C\uFF0C\u8FD9\u91CC\u7684\u201C\u5185\u8054\u76D2\u5B50\u201D\u5B9E\u9645\u6307\u7684\u5C31\u662F\u5143\u7D20\u7684\u201C\u5916\u5728\u76D2
\u5B50\u201D\uFF0C\u7528\u6765\u51B3\u5B9A\u5143\u7D20\u662F\u5185\u8054\u8FD8\u662F\u5757\u7EA7\u3002\u8BE5\u76D2\u5B50\u53C8\u53EF\u4EE5\u7EC6\u5206\u4E3A\u201C\u5185\u8054\u76D2\u5B50\u201D\u548C\u201C\u533F\u540D\u5185\u8054\u76D2\u5B50\u201D\u4E24\u7C7B\u3002

\uFF083\uFF09\u884C\u6846\u76D2\u5B50\uFF08line box\uFF09\uFF0C\u6BCF\u4E00\u884C\u5C31\u662F\u4E00\u4E2A\u201C\u884C\u6846\u76D2\u5B50\u201D\uFF08\u5B9E\u7EBF\u6846\u6807\u6CE8\uFF09\uFF0C\u6BCF\u4E2A\u201C\u884C\u6846\u76D2\u5B50\u201D\u53C8\u662F\u7531\u4E00\u4E2A\u4E00\u4E2A\u201C\u5185\u8054\u76D2\u5B50\u201D\u7EC4\u6210\u7684\u3002

\uFF084\uFF09\u5305\u542B\u5757\uFF08containing box\uFF09\uFF0C\u7531\u4E00\u884C\u4E00\u884C\u7684\u201C\u884C\u6846\u76D2\u5B50\u201D\u7EC4\u6210\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_72-\u4EC0\u4E48\u662F\u5E7D\u7075\u7A7A\u767D\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#_72-\u4EC0\u4E48\u662F\u5E7D\u7075\u7A7A\u767D\u8282\u70B9" aria-hidden="true">#</a> 72.\u4EC0\u4E48\u662F\u5E7D\u7075\u7A7A\u767D\u8282\u70B9\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u201C\u5E7D\u7075\u7A7A\u767D\u8282\u70B9\u201D\u662F\u5185\u8054\u76D2\u6A21\u578B\u4E2D\u975E\u5E38\u91CD\u8981\u7684\u4E00\u4E2A\u6982\u5FF5\uFF0C\u5177\u4F53\u6307\u7684\u662F\uFF1A\u5728HTML5\u6587\u6863\u58F0\u660E\u4E2D\uFF0C\u5185\u8054\u5143\u7D20\u7684\u6240\u6709\u89E3\u6790\u548C\u6E32\u67D3\u8868\u73B0\u5C31\u5982\u540C
\u6BCF\u4E2A\u884C\u6846\u76D2\u5B50\u7684\u524D\u9762\u6709\u4E00\u4E2A\u201C\u7A7A\u767D\u8282\u70B9\u201D\u4E00\u6837\u3002\u8FD9\u4E2A\u201C\u7A7A\u767D\u8282\u70B9\u201D\u6C38\u8FDC\u900F\u660E\uFF0C\u4E0D\u5360\u636E\u4EFB\u4F55\u5BBD\u5EA6\uFF0C\u770B\u4E0D\u89C1\u4E5F\u65E0\u6CD5\u901A\u8FC7\u811A\u672C\u83B7\u53D6\uFF0C\u5C31\u597D\u50CF\u5E7D\u7075
\u4E00\u6837\uFF0C\u4F46\u53C8\u786E\u786E\u5B9E\u5B9E\u5730\u5B58\u5728\uFF0C\u8868\u73B0\u5982\u540C\u6587\u672C\u8282\u70B9\u4E00\u6837\uFF0C\u56E0\u6B64\uFF0C\u6211\u79F0\u4E4B\u4E3A\u201C\u5E7D\u7075\u7A7A\u767D\u8282\u70B9\u201D\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_73-\u4EC0\u4E48\u662F\u66FF\u6362\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#_73-\u4EC0\u4E48\u662F\u66FF\u6362\u5143\u7D20" aria-hidden="true">#</a> 73.\u4EC0\u4E48\u662F\u66FF\u6362\u5143\u7D20\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u901A\u8FC7\u4FEE\u6539\u67D0\u4E2A\u5C5E\u6027\u503C\u5448\u73B0\u7684\u5185\u5BB9\u5C31\u53EF\u4EE5\u88AB\u66FF\u6362\u7684\u5143\u7D20\u5C31\u79F0\u4E3A\u201C\u66FF\u6362\u5143\u7D20\u201D\u3002\u56E0\u6B64\uFF0C&lt;img&gt;\u3001&lt;object&gt;\u3001&lt;video&gt;\u3001&lt;iframe&gt;\u6216\u8005\u8868
\u5355\u5143\u7D20&lt;textarea&gt;\u548C&lt;input&gt;\u548C&lt;select&gt;\u90FD\u662F\u5178\u578B\u7684\u66FF\u6362\u5143\u7D20\u3002

\u66FF\u6362\u5143\u7D20\u9664\u4E86\u5185\u5BB9\u53EF\u66FF\u6362\u8FD9\u4E00\u7279\u6027\u4EE5\u5916\uFF0C\u8FD8\u6709\u4EE5\u4E0B\u4E00\u4E9B\u7279\u6027\u3002

\uFF081\uFF09\u5185\u5BB9\u7684\u5916\u89C2\u4E0D\u53D7\u9875\u9762\u4E0A\u7684CSS\u7684\u5F71\u54CD\u3002\u7528\u4E13\u4E1A\u7684\u8BDD\u8BB2\u5C31\u662F\u5728\u6837\u5F0F\u8868\u73B0\u5728CSS\u4F5C\u7528\u57DF\u4E4B\u5916\u3002\u5982\u4F55\u66F4\u6539\u66FF\u6362\u5143\u7D20\u672C\u8EAB\u7684\u5916\u89C2\u9700\u8981
\u7C7B\u4F3Cappearance\u5C5E\u6027\uFF0C\u6216\u8005\u6D4F\u89C8\u5668\u81EA\u8EAB\u66B4\u9732\u7684\u4E00\u4E9B\u6837\u5F0F\u63A5\u53E3\uFF0C

\uFF082\uFF09\u6709\u81EA\u5DF1\u7684\u5C3A\u5BF8\u3002\u5728Web\u4E2D\uFF0C\u5F88\u591A\u66FF\u6362\u5143\u7D20\u5728\u6CA1\u6709\u660E\u786E\u5C3A\u5BF8\u8BBE\u5B9A\u7684\u60C5\u51B5\u4E0B\uFF0C\u5176\u9ED8\u8BA4\u7684\u5C3A\u5BF8\uFF08\u4E0D\u5305\u62EC\u8FB9\u6846\uFF09\u662F300\u50CF\u7D20\xD7150\u50CF
\u7D20\uFF0C\u5982&lt;video&gt;\u3001&lt;iframe&gt;\u6216\u8005&lt;canvas&gt;\u7B49\uFF0C\u4E5F\u6709\u5C11\u90E8\u5206\u66FF\u6362\u5143\u7D20\u4E3A0\u50CF\u7D20\uFF0C\u5982&lt;img&gt;\u56FE\u7247\uFF0C\u800C\u8868\u5355\u5143\u7D20\u7684\u66FF\u6362\u5143\u7D20
\u7684\u5C3A\u5BF8\u5219\u548C\u6D4F\u89C8\u5668\u6709\u5173\uFF0C\u6CA1\u6709\u660E\u663E\u7684\u89C4\u5F8B\u3002

\uFF083\uFF09\u5728\u5F88\u591ACSS\u5C5E\u6027\u4E0A\u6709\u81EA\u5DF1\u7684\u4E00\u5957\u8868\u73B0\u89C4\u5219\u3002\u6BD4\u8F83\u5177\u6709\u4EE3\u8868\u6027\u7684\u5C31\u662Fvertical-align\u5C5E\u6027\uFF0C\u5BF9\u4E8E\u66FF\u6362\u5143\u7D20\u548C\u975E\u66FF\u6362\u5143\u7D20\uFF0Cve
rtical-align\u5C5E\u6027\u503C\u7684\u89E3\u91CA\u662F\u4E0D\u4E00\u6837\u7684\u3002\u6BD4\u65B9\u8BF4vertical-align\u7684\u9ED8\u8BA4\u503C\u7684baseline\uFF0C\u5F88\u7B80\u5355\u7684\u5C5E\u6027\u503C\uFF0C\u57FA\u7EBF\u4E4B\u610F\uFF0C
\u88AB\u5B9A\u4E49\u4E3A\u5B57\u7B26x\u7684\u4E0B\u8FB9\u7F18\uFF0C\u800C\u66FF\u6362\u5143\u7D20\u7684\u57FA\u7EBF\u5374\u88AB\u786C\u751F\u751F\u5B9A\u4E49\u6210\u4E86\u5143\u7D20\u7684\u4E0B\u8FB9\u7F18\u3002

\uFF084\uFF09\u6240\u6709\u7684\u66FF\u6362\u5143\u7D20\u90FD\u662F\u5185\u8054\u6C34\u5E73\u5143\u7D20\uFF0C\u4E5F\u5C31\u662F\u66FF\u6362\u5143\u7D20\u548C\u66FF\u6362\u5143\u7D20\u3001\u66FF\u6362\u5143\u7D20\u548C\u6587\u5B57\u90FD\u662F\u53EF\u4EE5\u5728\u4E00\u884C\u663E\u793A\u7684\u3002\u4F46\u662F\uFF0C\u66FF\u6362\u5143\u7D20\u9ED8\u8BA4
\u7684display\u503C\u5374\u662F\u4E0D\u4E00\u6837\u7684\uFF0C\u6709\u7684\u662Finline\uFF0C\u6709\u7684\u662Finline-block\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_74-\u66FF\u6362\u5143\u7D20\u7684\u8BA1\u7B97\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#_74-\u66FF\u6362\u5143\u7D20\u7684\u8BA1\u7B97\u89C4\u5219" aria-hidden="true">#</a> 74.\u66FF\u6362\u5143\u7D20\u7684\u8BA1\u7B97\u89C4\u5219\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u66FF\u6362\u5143\u7D20\u7684\u5C3A\u5BF8\u4ECE\u5185\u800C\u5916\u5206\u4E3A3\u7C7B\uFF1A\u56FA\u6709\u5C3A\u5BF8\u3001HTML\u5C3A\u5BF8\u548CCSS\u5C3A\u5BF8\u3002

\uFF081\uFF09\u56FA\u6709\u5C3A\u5BF8\u6307\u7684\u662F\u66FF\u6362\u5185\u5BB9\u539F\u672C\u7684\u5C3A\u5BF8\u3002\u4F8B\u5982\uFF0C\u56FE\u7247\u3001\u89C6\u9891\u4F5C\u4E3A\u4E00\u4E2A\u72EC\u7ACB\u6587\u4EF6\u5B58\u5728\u7684\u65F6\u5019\uFF0C\u90FD\u662F\u6709\u7740\u81EA\u5DF1\u7684\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u7684\u3002

\uFF082\uFF09HTML\u5C3A\u5BF8\u53EA\u80FD\u901A\u8FC7HTML\u539F\u751F\u5C5E\u6027\u6539\u53D8\uFF0C\u8FD9\u4E9BHTML\u539F\u751F\u5C5E\u6027\u5305\u62EC&lt;img&gt;\u7684width\u548Cheight\u5C5E\u6027\u3001&lt;input&gt;\u7684s
ize\u5C5E\u6027\u3001&lt;textarea&gt;\u7684cols\u548Crows\u5C5E\u6027\u7B49\u3002

\uFF083\uFF09CSS\u5C3A\u5BF8\u7279\u6307\u53EF\u4EE5\u901A\u8FC7CSS\u7684width\u548Cheight\u6216\u8005max-width/min-width\u548Cmax-height/min-height\u8BBE\u7F6E\u7684
\u5C3A\u5BF8\uFF0C\u5BF9\u5E94\u76D2\u5C3A\u5BF8\u4E2D\u7684content box\u3002

\u8FD93\u5C42\u7ED3\u6784\u7684\u8BA1\u7B97\u89C4\u5219\u5177\u4F53\u5982\u4E0B

\uFF081\uFF09\u5982\u679C\u6CA1\u6709CSS\u5C3A\u5BF8\u548CHTML\u5C3A\u5BF8\uFF0C\u5219\u4F7F\u7528\u56FA\u6709\u5C3A\u5BF8\u4F5C\u4E3A\u6700\u7EC8\u7684\u5BBD\u9AD8\u3002

\uFF082\uFF09\u5982\u679C\u6CA1\u6709CSS\u5C3A\u5BF8\uFF0C\u5219\u4F7F\u7528HTML\u5C3A\u5BF8\u4F5C\u4E3A\u6700\u7EC8\u7684\u5BBD\u9AD8\u3002

\uFF083\uFF09\u5982\u679C\u6709CSS\u5C3A\u5BF8\uFF0C\u5219\u6700\u7EC8\u5C3A\u5BF8\u7531CSS\u5C5E\u6027\u51B3\u5B9A\u3002

\uFF084\uFF09\u5982\u679C\u201C\u56FA\u6709\u5C3A\u5BF8\u201D\u542B\u6709\u56FA\u6709\u7684\u5BBD\u9AD8\u6BD4\u4F8B\uFF0C\u540C\u65F6\u4EC5\u8BBE\u7F6E\u4E86\u5BBD\u5EA6\u6216\u4EC5\u8BBE\u7F6E\u4E86\u9AD8\u5EA6\uFF0C\u5219\u5143\u7D20\u4F9D\u7136\u6309\u7167\u56FA\u6709\u7684\u5BBD\u9AD8\u6BD4\u4F8B\u663E\u793A\u3002

\uFF085\uFF09\u5982\u679C\u4E0A\u9762\u7684\u6761\u4EF6\u90FD\u4E0D\u7B26\u5408\uFF0C\u5219\u6700\u7EC8\u5BBD\u5EA6\u8868\u73B0\u4E3A300\u50CF\u7D20\uFF0C\u9AD8\u5EA6\u4E3A150\u50CF\u7D20\u3002

\uFF086\uFF09\u5185\u8054\u66FF\u6362\u5143\u7D20\u548C\u5757\u7EA7\u66FF\u6362\u5143\u7D20\u4F7F\u7528\u4E0A\u9762\u540C\u4E00\u5957\u5C3A\u5BF8\u8BA1\u7B97\u89C4\u5219\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_75-content-\u4E0E\u66FF\u6362\u5143\u7D20\u7684\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#_75-content-\u4E0E\u66FF\u6362\u5143\u7D20\u7684\u5173\u7CFB" aria-hidden="true">#</a> 75.content \u4E0E\u66FF\u6362\u5143\u7D20\u7684\u5173\u7CFB\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>content\u5C5E\u6027\u751F\u6210\u7684\u5BF9\u8C61\u79F0\u4E3A\u201C\u533F\u540D\u66FF\u6362\u5143\u7D20\u201D\u3002

\uFF081\uFF09\u6211\u4EEC\u4F7F\u7528content\u751F\u6210\u7684\u6587\u672C\u662F\u65E0\u6CD5\u9009\u4E2D\u3001\u65E0\u6CD5\u590D\u5236\u7684\uFF0C\u597D\u50CF\u8BBE\u7F6E\u4E86user select:none\u58F0\u660E\u4E00\u822C\uFF0C\u4F46\u662F\u666E\u901A\u5143\u7D20\u7684\u6587\u672C
\u5374\u53EF\u4EE5\u88AB\u8F7B\u677E\u9009\u4E2D\u3002\u540C\u65F6\uFF0Ccontent\u751F\u6210\u7684\u6587\u672C\u65E0\u6CD5\u88AB\u5C4F\u5E55\u9605\u8BFB\u8BBE\u5907\u8BFB\u53D6\uFF0C\u4E5F\u65E0\u6CD5\u88AB\u641C\u7D22\u5F15\u64CE\u6293\u53D6\uFF0C\u56E0\u6B64\uFF0C\u5343\u4E07\u4E0D\u8981\u81EA\u4EE5\u4E3A\u662F
\u5730\u628A\u91CD\u8981\u7684\u6587\u672C\u4FE1\u606F\u4F7F\u7528content\u5C5E\u6027\u751F\u6210\uFF0C\u56E0\u4E3A\u8FD9\u5BF9\u53EF\u8BBF\u95EE\u6027\u548CSEO\u90FD\u5F88\u4E0D\u53CB\u597D\u3002

\uFF082\uFF09content\u751F\u6210\u7684\u5185\u5BB9\u4E0D\u80FD\u5DE6\u53F3:empty\u4F2A\u7C7B\u3002

\uFF083\uFF09content\u52A8\u6001\u751F\u6210\u503C\u65E0\u6CD5\u83B7\u53D6\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_76-margin-auto-\u7684\u586B\u5145\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#_76-margin-auto-\u7684\u586B\u5145\u89C4\u5219" aria-hidden="true">#</a> 76.margin:auto \u7684\u586B\u5145\u89C4\u5219\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>margin\u7684&#39;auto&#39;\u53EF\u4E0D\u662F\u6446\u8BBE\uFF0C\u662F\u5177\u6709\u5F3A\u70C8\u7684\u8BA1\u7B97\u610F\u5473\u7684\u5173\u952E\u5B57\uFF0C\u7528\u6765\u8BA1\u7B97\u5143\u7D20\u5BF9\u5E94\u65B9\u5411\u5E94\u8BE5\u83B7\u5F97\u7684\u5269\u4F59\u95F4\u8DDD\u5927\u5C0F\u3002\u4F46\u662F\u89E6\u53D1mar
gin:auto\u8BA1\u7B97\u6709\u4E00\u4E2A\u524D\u63D0\u6761\u4EF6\uFF0C\u5C31\u662Fwidth\u6216height\u4E3Aauto\u65F6\uFF0C\u5143\u7D20\u662F\u5177\u6709\u5BF9\u5E94\u65B9\u5411\u7684\u81EA\u52A8\u586B\u5145\u7279\u6027\u7684\u3002

\uFF081\uFF09\u5982\u679C\u4E00\u4FA7\u5B9A\u503C\uFF0C\u4E00\u4FA7auto\uFF0C\u5219auto\u4E3A\u5269\u4F59\u7A7A\u95F4\u5927\u5C0F\u3002
\uFF082\uFF09\u5982\u679C\u4E24\u4FA7\u5747\u662Fauto\uFF0C\u5219\u5E73\u5206\u5269\u4F59\u7A7A\u95F4\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_77-margin-\u65E0\u6548\u7684\u60C5\u5F62" tabindex="-1"><a class="header-anchor" href="#_77-margin-\u65E0\u6548\u7684\u60C5\u5F62" aria-hidden="true">#</a> 77.margin \u65E0\u6548\u7684\u60C5\u5F62</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\uFF081\uFF09display\u8BA1\u7B97\u503Cinline\u7684\u975E\u66FF\u6362\u5143\u7D20\u7684\u5782\u76F4margin\u662F\u65E0\u6548\u7684\u3002\u5BF9\u4E8E\u5185\u8054\u66FF\u6362\u5143\u7D20\uFF0C\u5782\u76F4margin\u6709\u6548\uFF0C\u5E76\u4E14\u6CA1\u6709ma
rgin\u5408\u5E76\u7684\u95EE\u9898\u3002

\uFF082\uFF09\u8868\u683C\u4E2D\u7684&lt;tr&gt;\u548C&lt;td&gt;\u5143\u7D20\u6216\u8005\u8BBE\u7F6Edisplay\u8BA1\u7B97\u503C\u662Ftable-cell\u6216table-row\u7684\u5143\u7D20\u7684margin\u90FD\u662F\u65E0\u6548\u7684\u3002

\uFF083\uFF09\u7EDD\u5BF9\u5B9A\u4F4D\u5143\u7D20\u975E\u5B9A\u4F4D\u65B9\u4F4D\u7684margin\u503C\u201C\u65E0\u6548\u201D\u3002

\uFF084\uFF09\u5B9A\u9AD8\u5BB9\u5668\u7684\u5B50\u5143\u7D20\u7684margin-bottom\u6216\u8005\u5BBD\u5EA6\u5B9A\u6B7B\u7684\u5B50\u5143\u7D20\u7684margin-right\u7684\u5B9A\u4F4D\u201C\u5931\u6548\u201D\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_78-border-\u7684\u7279\u6B8A\u6027" tabindex="-1"><a class="header-anchor" href="#_78-border-\u7684\u7279\u6B8A\u6027" aria-hidden="true">#</a> 78.border \u7684\u7279\u6B8A\u6027\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\uFF081\uFF09border-width\u5374\u4E0D\u652F\u6301\u767E\u5206\u6BD4\u3002

\uFF082\uFF09border-style\u7684\u9ED8\u8BA4\u503C\u662Fnone\uFF0C\u6709\u4E00\u90E8\u5206\u4EBA\u53EF\u80FD\u4F1A\u8BEF\u4EE5\u4E3A\u662Fsolid\u3002\u8FD9\u4E5F\u662F\u5355\u7EAF\u8BBE\u7F6Eborder-width\u6216border-col
or\u6CA1\u6709\u8FB9\u6846\u663E\u793A\u7684\u539F\u56E0\u3002

\uFF083\uFF09border-style:double\u7684\u8868\u73B0\u89C4\u5219\uFF1A\u53CC\u7EBF\u5BBD\u5EA6\u6C38\u8FDC\u76F8\u7B49\uFF0C\u4E2D\u95F4\u95F4\u9694\xB11\u3002

\uFF084\uFF09border-color\u9ED8\u8BA4\u989C\u8272\u5C31\u662Fcolor\u8272\u503C\u3002

\uFF085\uFF09\u9ED8\u8BA4background\u80CC\u666F\u56FE\u7247\u662F\u76F8\u5BF9\u4E8Epadding box\u5B9A\u4F4D\u7684\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_79-\u4EC0\u4E48\u662F\u57FA\u7EBF\u548C-x-height" tabindex="-1"><a class="header-anchor" href="#_79-\u4EC0\u4E48\u662F\u57FA\u7EBF\u548C-x-height" aria-hidden="true">#</a> 79.\u4EC0\u4E48\u662F\u57FA\u7EBF\u548C x-height\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5B57\u6BCDx\u7684\u4E0B\u8FB9\u7F18\uFF08\u7EBF\uFF09\u5C31\u662F\u6211\u4EEC\u7684\u57FA\u7EBF\u3002

x-height\u6307\u7684\u5C31\u662F\u5C0F\u5199\u5B57\u6BCDx\u7684\u9AD8\u5EA6\uFF0C\u672F\u8BED\u63CF\u8FF0\u5C31\u662F\u57FA\u7EBF\u548C\u7B49\u5206\u7EBF\uFF08meanline\uFF09\uFF08\u4E5F\u79F0\u4F5C\u4E2D\u7EBF\uFF0Cmidline\uFF09\u4E4B\u95F4\u7684\u8DDD\u79BB\u3002\u5728C
SS\u4E16\u754C\u4E2D\uFF0Cmiddle\u6307\u7684\u662F\u57FA\u7EBF\u5F80\u4E0A1/2x-height\u9AD8\u5EA6\u3002\u6211\u4EEC\u53EF\u4EE5\u8FD1\u4F3C\u7406\u89E3\u4E3A\u5B57\u6BCDx\u4EA4\u53C9\u70B9\u90A3\u4E2A\u4F4D\u7F6E\u3002

ex\u662FCSS\u4E2D\u7684\u4E00\u4E2A\u76F8\u5BF9\u5355\u4F4D\uFF0C\u6307\u7684\u662F\u5C0F\u5199\u5B57\u6BCDx\u7684\u9AD8\u5EA6\uFF0C\u6CA1\u9519\uFF0C\u5C31\u662F\u6307x-height\u3002ex\u7684\u4EF7\u503C\u5C31\u5728\u5176\u526F\u4E1A\u4E0A\u4E0D\u53D7\u5B57\u4F53\u548C\u5B57\u53F7\u5F71
\u54CD\u7684\u5185\u8054\u5143\u7D20\u7684\u5782\u76F4\u5C45\u4E2D\u5BF9\u9F50\u6548\u679C\u3002\u5185\u8054\u5143\u7D20\u9ED8\u8BA4\u662F\u57FA\u7EBF\u5BF9\u9F50\u7684\uFF0C\u800C\u57FA\u7EBF\u5C31\u662Fx\u7684\u5E95\u90E8\uFF0C\u800C1ex\u5C31\u662F\u4E00\u4E2Ax\u7684\u9AD8\u5EA6\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_80-line-height-\u7684\u7279\u6B8A\u6027" tabindex="-1"><a class="header-anchor" href="#_80-line-height-\u7684\u7279\u6B8A\u6027" aria-hidden="true">#</a> 80.line-height \u7684\u7279\u6B8A\u6027\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\uFF081\uFF09\u5BF9\u4E8E\u975E\u66FF\u6362\u5143\u7D20\u7684\u7EAF\u5185\u8054\u5143\u7D20\uFF0C\u5176\u53EF\u89C6\u9AD8\u5EA6\u5B8C\u5168\u7531line-height\u51B3\u5B9A\u3002\u5BF9\u4E8E\u6587\u672C\u8FD9\u6837\u7684\u7EAF\u5185\u8054\u5143\u7D20\uFF0Cline-height\u5C31\u662F\u9AD8
\u5EA6\u8BA1\u7B97\u7684\u57FA\u77F3\uFF0C\u7528\u4E13\u4E1A\u8BF4\u6CD5\u5C31\u662F\u6307\u5B9A\u4E86\u7528\u6765\u8BA1\u7B97\u884C\u6846\u76D2\u5B50\u9AD8\u5EA6\u7684\u57FA\u7840\u9AD8\u5EA6\u3002

\uFF082\uFF09\u5185\u8054\u5143\u7D20\u7684\u9AD8\u5EA6\u7531\u56FA\u5B9A\u9AD8\u5EA6\u548C\u4E0D\u56FA\u5B9A\u9AD8\u5EA6\u7EC4\u6210\uFF0C\u8FD9\u4E2A\u4E0D\u56FA\u5B9A\u7684\u90E8\u5206\u5C31\u662F\u8FD9\u91CC\u7684\u201C\u884C\u8DDD\u201D\u3002\u6362\u53E5\u8BDD\u8BF4\uFF0Cline-height\u4E4B\u6240\u4EE5\u8D77\u4F5C
\u7528\uFF0C\u5C31\u662F\u901A\u8FC7\u6539\u53D8\u201C\u884C\u8DDD\u201D\u6765\u5B9E\u73B0\u7684\u3002\u5728CSS\u4E2D\uFF0C\u201C\u884C\u8DDD\u201D\u5206\u6563\u5728\u5F53\u524D\u6587\u5B57\u7684\u4E0A\u65B9\u548C\u4E0B\u65B9\uFF0C\u4E5F\u5C31\u662F\u5373\u4F7F\u662F\u7B2C\u4E00\u884C\u6587\u5B57\uFF0C\u5176\u4E0A\u65B9\u4E5F\u662F
\u6709\u201C\u884C\u8DDD\u201D\u7684\uFF0C\u53EA\u4E0D\u8FC7\u8FD9\u4E2A\u201C\u884C\u8DDD\u201D\u7684\u9AD8\u5EA6\u4EC5\u4EC5\u662F\u5B8C\u6574\u201C\u884C\u8DDD\u201D\u9AD8\u5EA6\u7684\u4E00\u534A\uFF0C\u56E0\u6B64\uFF0C\u4E5F\u88AB\u79F0\u4E3A\u201C\u534A\u884C\u8DDD\u201D\u3002

\uFF083\uFF09\u884C\u8DDD=line-height-font-size\u3002

\uFF084\uFF09border\u4EE5\u53CAline-height\u7B49\u4F20\u7EDFCSS\u5C5E\u6027\u5E76\u6CA1\u6709\u5C0F\u6570\u50CF\u7D20\u7684\u6982\u5FF5\u3002\u5982\u679C\u6807\u6CE8\u7684\u662F\u6587\u5B57\u4E0A\u8FB9\u8DDD\uFF0C\u5219\u5411\u4E0B\u53D6\u6574\uFF1B\u5982\u679C\u662F\u6587\u5B57\u4E0B
\u8FB9\u8DDD\uFF0C\u5219\u5411\u4E0A\u53D6\u6574\u3002

\uFF085\uFF09\u5BF9\u4E8E\u7EAF\u6587\u672C\u5143\u7D20\uFF0Cline-height\u76F4\u63A5\u51B3\u5B9A\u4E86\u6700\u7EC8\u7684\u9AD8\u5EA6\u3002\u4F46\u662F\uFF0C\u5982\u679C\u540C\u65F6\u6709\u66FF\u6362\u5143\u7D20\uFF0C\u5219line-height\u53EA\u80FD\u51B3\u5B9A\u6700\u5C0F\u9AD8\u5EA6\u3002

\uFF086\uFF09\u5BF9\u4E8E\u5757\u7EA7\u5143\u7D20\uFF0Cline-height\u5BF9\u5176\u672C\u8EAB\u662F\u6CA1\u6709\u4EFB\u4F55\u4F5C\u7528\u7684\uFF0C\u6211\u4EEC\u5E73\u65F6\u6539\u53D8line-height\uFF0C\u5757\u7EA7\u5143\u7D20\u7684\u9AD8\u5EA6\u8DDF\u7740\u53D8\u5316\u5B9E\u9645\u4E0A\u662F
\u901A\u8FC7\u6539\u53D8\u5757\u7EA7\u5143\u7D20\u91CC\u9762\u5185\u8054\u7EA7\u522B\u5143\u7D20\u5360\u636E\u7684\u9AD8\u5EA6\u5B9E\u73B0\u7684\u3002

\uFF087\uFF09line-height\u7684\u9ED8\u8BA4\u503C\u662Fnormal\uFF0C\u8FD8\u652F\u6301\u6570\u503C\u3001\u767E\u5206\u6BD4\u503C\u4EE5\u53CA\u957F\u5EA6\u503C\u3002\u4E3A\u6570\u503C\u7C7B\u578B\u65F6\uFF0C\u5176\u6700\u7EC8\u7684\u8BA1\u7B97\u503C\u662F\u548C\u5F53\u524Dfont-si
ze\u76F8\u4E58\u540E\u7684\u503C\u3002\u4E3A\u767E\u5206\u6BD4\u503C\u65F6\uFF0C\u5176\u6700\u7EC8\u7684\u8BA1\u7B97\u503C\u662F\u548C\u5F53\u524Dfont-size\u76F8\u4E58\u540E\u7684\u503C\u3002\u4E3A\u957F\u5EA6\u503C\u65F6\u539F\u610F\u4E0D\u53D8\u3002

\uFF088\uFF09\u5982\u679C\u4F7F\u7528\u6570\u503C\u4F5C\u4E3Aline-height\u7684\u5C5E\u6027\u503C\uFF0C\u90A3\u4E48\u6240\u6709\u7684\u5B50\u5143\u7D20\u7EE7\u627F\u7684\u90FD\u662F\u8FD9\u4E2A\u503C\uFF1B\u4F46\u662F\uFF0C\u5982\u679C\u4F7F\u7528\u767E\u5206\u6BD4\u503C\u6216\u8005\u957F\u5EA6\u503C\u4F5C\u4E3A
\u5C5E\u6027\u503C\uFF0C\u90A3\u4E48\u6240\u6709\u7684\u5B50\u5143\u7D20\u7EE7\u627F\u7684\u662F\u6700\u7EC8\u7684\u8BA1\u7B97\u503C\u3002

\uFF089\uFF09\u65E0\u8BBA\u5185\u8054\u5143\u7D20line-height\u5982\u4F55\u8BBE\u7F6E\uFF0C\u6700\u7EC8\u7236\u7EA7\u5143\u7D20\u7684\u9AD8\u5EA6\u90FD\u662F\u7531\u6570\u503C\u5927\u7684\u90A3\u4E2Aline-height\u51B3\u5B9A\u7684\u3002

\uFF0810\uFF09\u53EA\u8981\u6709\u201C\u5185\u8054\u76D2\u5B50\u201D\u5728\uFF0C\u5C31\u4E00\u5B9A\u4F1A\u6709\u201C\u884C\u6846\u76D2\u5B50\u201D\uFF0C\u5C31\u662F\u6BCF\u4E00\u884C\u5185\u8054\u5143\u7D20\u5916\u9762\u5305\u88F9\u7684\u4E00\u5C42\u770B\u4E0D\u89C1\u7684\u76D2\u5B50\u3002\u7136\u540E\uFF0C\u91CD\u70B9\u6765\u4E86\uFF0C\u5728\u6BCF\u4E2A
\u201C\u884C\u6846\u76D2\u5B50\u201D\u524D\u9762\u6709\u4E00\u4E2A\u5BBD\u5EA6\u4E3A0\u7684\u5177\u6709\u8BE5\u5143\u7D20\u7684\u5B57\u4F53\u548C\u884C\u9AD8\u5C5E\u6027\u7684\u770B\u4E0D\u89C1\u7684\u201C\u5E7D\u7075\u7A7A\u767D\u8282\u70B9\u201D\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_81-vertical-align-\u7684\u7279\u6B8A\u6027" tabindex="-1"><a class="header-anchor" href="#_81-vertical-align-\u7684\u7279\u6B8A\u6027" aria-hidden="true">#</a> 81.vertical-align \u7684\u7279\u6B8A\u6027\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\uFF081\uFF09vertical-align\u7684\u9ED8\u8BA4\u503C\u662Fbaseline\uFF0C\u5373\u57FA\u7EBF\u5BF9\u9F50\uFF0C\u800C\u57FA\u7EBF\u7684\u5B9A\u4E49\u662F\u5B57\u6BCDx\u7684\u4E0B\u8FB9\u7F18\u3002\u56E0\u6B64\uFF0C\u5185\u8054\u5143\u7D20\u9ED8\u8BA4\u90FD\u662F\u6CBF\u7740\u5B57
\u6BCDx\u7684\u4E0B\u8FB9\u7F18\u5BF9\u9F50\u7684\u3002\u5BF9\u4E8E\u56FE\u7247\u7B49\u66FF\u6362\u5143\u7D20\uFF0C\u5F80\u5F80\u4F7F\u7528\u5143\u7D20\u672C\u8EAB\u7684\u4E0B\u8FB9\u7F18\u4F5C\u4E3A\u57FA\u7EBF\u3002\uFF1A\u4E00\u4E2Ainline-block\u5143\u7D20\uFF0C\u5982\u679C\u91CC\u9762
\u6CA1\u6709\u5185\u8054\u5143\u7D20\uFF0C\u6216\u8005overflow\u4E0D\u662Fvisible\uFF0C\u5219\u8BE5\u5143\u7D20\u7684\u57FA\u7EBF\u5C31\u662F\u5176margin\u5E95\u8FB9\u7F18\uFF1B\u5426\u5219\u5176\u57FA\u7EBF\u5C31\u662F\u5143\u7D20\u91CC\u9762\u6700\u540E\u4E00\u884C
\u5185\u8054\u5143\u7D20\u7684\u57FA\u7EBF\u3002

\uFF082\uFF09vertical-align:top\u5C31\u662F\u5782\u76F4\u4E0A\u8FB9\u7F18\u5BF9\u9F50\uFF0C\u5982\u679C\u662F\u5185\u8054\u5143\u7D20\uFF0C\u5219\u548C\u8FD9\u4E00\u884C\u4F4D\u7F6E\u6700\u9AD8\u7684\u5185\u8054\u5143\u7D20\u7684\u9876\u90E8\u5BF9\u9F50\uFF1B\u5982\u679Cdisplay
\u8BA1\u7B97\u503C\u662Ftable-cell\u7684\u5143\u7D20\uFF0C\u6211\u4EEC\u4E0D\u59A8\u8111\u8865\u6210&lt;td&gt;\u5143\u7D20\uFF0C\u5219\u548C&lt;tr&gt;\u5143\u7D20\u4E0A\u8FB9\u7F18\u5BF9\u9F50\u3002

\uFF083\uFF09vertical-align:middle\u662F\u4E2D\u95F4\u5BF9\u9F50\uFF0C\u5BF9\u4E8E\u5185\u8054\u5143\u7D20\uFF0C\u5143\u7D20\u7684\u5782\u76F4\u4E2D\u5FC3\u70B9\u548C\u884C\u6846\u76D2\u5B50\u57FA\u7EBF\u5F80\u4E0A1/2x-height\u5904\u5BF9\u9F50\u3002\u5BF9
\u4E8Etable-cell\u5143\u7D20\uFF0C\u5355\u5143\u683C\u586B\u5145\u76D2\u5B50\u76F8\u5BF9\u4E8E\u5916\u9762\u7684\u8868\u683C\u884C\u5C45\u4E2D\u5BF9\u9F50\u3002

\uFF084\uFF09vertical-align\u652F\u6301\u6570\u503C\u5C5E\u6027\uFF0C\u6839\u636E\u6570\u503C\u7684\u4E0D\u540C\uFF0C\u76F8\u5BF9\u4E8E\u57FA\u7EBF\u5F80\u4E0A\u6216\u5F80\u4E0B\u504F\u79FB\uFF0C\u5982\u679C\u662F\u8D1F\u503C\uFF0C\u5F80\u4E0B\u504F\u79FB\uFF0C\u5982\u679C\u662F\u6B63\u503C\uFF0C\u5F80\u4E0A
\u504F\u79FB\u3002

\uFF085\uFF09vertical-align\u5C5E\u6027\u7684\u767E\u5206\u6BD4\u503C\u5219\u662F\u76F8\u5BF9\u4E8Eline-height\u7684\u8BA1\u7B97\u503C\u8BA1\u7B97\u7684\u3002

\uFF086\uFF09vertical-align\u8D77\u4F5C\u7528\u662F\u6709\u524D\u63D0\u6761\u4EF6\u7684\uFF0C\u8FD9\u4E2A\u524D\u63D0\u6761\u4EF6\u5C31\u662F\uFF1A\u53EA\u80FD\u5E94\u7528\u4E8E\u5185\u8054\u5143\u7D20\u4EE5\u53CAdisplay\u503C\u4E3Atable-cell\u7684\u5143
\u7D20\u3002

\uFF087\uFF09table-cell\u5143\u7D20\u8BBE\u7F6Evertical-align\u5782\u76F4\u5BF9\u9F50\u7684\u662F\u5B50\u5143\u7D20\uFF0C\u4F46\u662F\u5176\u4F5C\u7528\u7684\u5E76\u4E0D\u662F\u5B50\u5143\u7D20\uFF0C\u800C\u662Ftable-cell\u5143\u7D20\u81EA\u8EAB\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_82-overflow-\u7684\u7279\u6B8A\u6027" tabindex="-1"><a class="header-anchor" href="#_82-overflow-\u7684\u7279\u6B8A\u6027" aria-hidden="true">#</a> 82.overflow \u7684\u7279\u6B8A\u6027\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\uFF081\uFF09\u4E00\u4E2A\u8BBE\u7F6E\u4E86overflow:hidden\u58F0\u660E\u7684\u5143\u7D20\uFF0C\u5047\u8BBE\u540C\u65F6\u5B58\u5728border\u5C5E\u6027\u548Cpadding\u5C5E\u6027\uFF0C\u5219\u5F53\u5B50\u5143\u7D20\u5185\u5BB9\u8D85\u51FA\u5BB9\u5668\u5BBD\u5EA6
\u9AD8\u5EA6\u9650\u5236\u7684\u65F6\u5019\uFF0C\u526A\u88C1\u7684\u8FB9\u754C\u662Fborder box\u7684\u5185\u8FB9\u7F18\uFF0C\u800C\u975Epadding box\u7684\u5185\u8FB9\u7F18\u3002

\uFF082\uFF09HTML\u4E2D\u6709\u4E24\u4E2A\u6807\u7B7E\u662F\u9ED8\u8BA4\u53EF\u4EE5\u4EA7\u751F\u6EDA\u52A8\u6761\u7684\uFF0C\u4E00\u4E2A\u662F\u6839\u5143\u7D20&lt;html&gt;\uFF0C\u53E6\u4E00\u4E2A\u662F\u6587\u672C\u57DF&lt;textarea&gt;\u3002

\uFF083\uFF09\u6EDA\u52A8\u6761\u4F1A\u5360\u7528\u5BB9\u5668\u7684\u53EF\u7528\u5BBD\u5EA6\u6216\u9AD8\u5EA6\u3002

\uFF084\uFF09\u5143\u7D20\u8BBE\u7F6E\u4E86overflow:hidden\u58F0\u660E\uFF0C\u91CC\u9762\u5185\u5BB9\u9AD8\u5EA6\u6EA2\u51FA\u7684\u65F6\u5019\uFF0C\u6EDA\u52A8\u4F9D\u7136\u5B58\u5728\uFF0C\u4EC5\u4EC5\u6EDA\u52A8\u6761\u4E0D\u5B58\u5728\uFF01
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_83-\u65E0\u4F9D\u8D56\u7EDD\u5BF9\u5B9A\u4F4D\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_83-\u65E0\u4F9D\u8D56\u7EDD\u5BF9\u5B9A\u4F4D\u662F\u4EC0\u4E48" aria-hidden="true">#</a> 83.\u65E0\u4F9D\u8D56\u7EDD\u5BF9\u5B9A\u4F4D\u662F\u4EC0\u4E48\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6CA1\u6709\u8BBE\u7F6Eleft/top/right/bottom\u5C5E\u6027\u503C\u7684\u7EDD\u5BF9\u5B9A\u4F4D\u79F0\u4E3A\u201C\u65E0\u4F9D\u8D56\u7EDD\u5BF9\u5B9A\u4F4D\u201D\u3002

\u65E0\u4F9D\u8D56\u7EDD\u5BF9\u5B9A\u4F4D\u5176\u5B9A\u4F4D\u7684\u4F4D\u7F6E\u548C\u6CA1\u6709\u8BBE\u7F6Eposition:absolute\u65F6\u5019\u7684\u4F4D\u7F6E\u76F8\u5173\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_84-absolute-\u4E0E-overflow-\u7684\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#_84-absolute-\u4E0E-overflow-\u7684\u5173\u7CFB" aria-hidden="true">#</a> 84.absolute \u4E0E overflow \u7684\u5173\u7CFB\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\uFF081\uFF09\u5982\u679Coverflow\u4E0D\u662F\u5B9A\u4F4D\u5143\u7D20\uFF0C\u540C\u65F6\u7EDD\u5BF9\u5B9A\u4F4D\u5143\u7D20\u548Coverflow\u5BB9\u5668\u4E4B\u95F4\u4E5F\u6CA1\u6709\u5B9A\u4F4D\u5143\u7D20\uFF0C\u5219overflow\u65E0\u6CD5\u5BF9absolute
\u5143\u7D20\u8FDB\u884C\u526A\u88C1\u3002

\uFF082\uFF09\u5982\u679Coverflow\u7684\u5C5E\u6027\u503C\u4E0D\u662Fhidden\u800C\u662Fauto\u6216\u8005scroll\uFF0C\u5373\u4F7F\u7EDD\u5BF9\u5B9A\u4F4D\u5143\u7D20\u9AD8\u5BBD\u6BD4overflow\u5143\u7D20\u9AD8\u5BBD\u8FD8\u8981\u5927\uFF0C\u4E5F
\u90FD\u4E0D\u4F1A\u51FA\u73B0\u6EDA\u52A8\u6761\u3002

\uFF083\uFF09overflow\u5143\u7D20\u81EA\u8EABtransform\u7684\u65F6\u5019\uFF0CChrome\u548COpera\u6D4F\u89C8\u5668\u4E0B\u7684overflow\u526A\u88C1\u662F\u65E0\u6548\u7684\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_85-clip-\u88C1\u526A\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_85-clip-\u88C1\u526A\u662F\u4EC0\u4E48" aria-hidden="true">#</a> 85.clip \u88C1\u526A\u662F\u4EC0\u4E48\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6240\u8C13\u201C\u53EF\u8BBF\u95EE\u6027\u9690\u85CF\u201D\uFF0C\u6307\u7684\u662F\u867D\u7136\u5185\u5BB9\u8089\u773C\u770B\u4E0D\u89C1\uFF0C\u4F46\u662F\u5176\u4ED6\u8F85\u52A9\u8BBE\u5907\u5374\u80FD\u591F\u8FDB\u884C\u8BC6\u522B\u548C\u8BBF\u95EE\u7684\u9690\u85CF\u3002

clip\u526A\u88C1\u88AB\u6211\u79F0\u4E3A\u201C\u6700\u4F73\u53EF\u8BBF\u95EE\u6027\u9690\u85CF\u201D\u7684\u53E6\u5916\u4E00\u4E2A\u539F\u56E0\u5C31\u662F\uFF0C\u5B83\u5177\u6709\u66F4\u5F3A\u7684\u666E\u904D\u9002\u5E94\u6027\uFF0C\u4EFB\u4F55\u5143\u7D20\u3001\u4EFB\u4F55\u573A\u666F\u90FD\u53EF\u4EE5\u65E0\u969C\u788D\u4F7F\u7528\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_86-relative-\u7684\u7279\u6B8A\u6027" tabindex="-1"><a class="header-anchor" href="#_86-relative-\u7684\u7279\u6B8A\u6027" aria-hidden="true">#</a> 86.relative \u7684\u7279\u6B8A\u6027\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\uFF081\uFF09\u76F8\u5BF9\u5B9A\u4F4D\u5143\u7D20\u7684left/top/right/bottom\u7684\u767E\u5206\u6BD4\u503C\u662F\u76F8\u5BF9\u4E8E\u5305\u542B\u5757\u8BA1\u7B97\u7684\uFF0C\u800C\u4E0D\u662F\u81EA\u8EAB\u3002\u6CE8\u610F\uFF0C\u867D\u7136\u5B9A\u4F4D\u4F4D\u79FB\u662F\u76F8\u5BF9\u81EA\u8EAB\uFF0C\u4F46\u662F\u767E\u5206\u6BD4\u503C\u7684\u8BA1\u7B97\u503C\u4E0D\u662F\u3002

\uFF082\uFF09top\u548Cbottom\u8FD9\u4E24\u4E2A\u5782\u76F4\u65B9\u5411\u7684\u767E\u5206\u6BD4\u503C\u8BA1\u7B97\u8DDFheight\u7684\u767E\u5206\u6BD4\u503C\u662F\u4E00\u6837\u7684\uFF0C\u90FD\u662F\u76F8\u5BF9\u9AD8\u5EA6\u8BA1\u7B97\u7684\u3002\u540C\u65F6\uFF0C\u5982\u679C\u5305\u542B\u5757\u7684\u9AD8\u5EA6\u662Fauto\uFF0C\u90A3\u4E48\u8BA1\u7B97\u503C\u662F0\uFF0C\u504F\u79FB\u65E0\u6548\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5982\u679C\u7236\u5143\u7D20\u6CA1\u6709\u8BBE\u5B9A\u9AD8\u5EA6\u6216\u8005\u4E0D\u662F\u201C\u683C\u5F0F\u5316\u9AD8\u5EA6\u201D\uFF0C\u90A3\u4E48relative\u7C7B\u4F3Ctop:20%\u7684\u4EE3\u7801\u7B49\u540C\u4E8Etop:0\u3002

\uFF083\uFF09\u5F53\u76F8\u5BF9\u5B9A\u4F4D\u5143\u7D20\u540C\u65F6\u5E94\u7528\u5BF9\u7ACB\u65B9\u5411\u5B9A\u4F4D\u503C\u7684\u65F6\u5019\uFF0C\u4E5F\u5C31\u662Ftop/bottom\u548Cleft/right\u540C\u65F6\u4F7F\u7528\u7684\u65F6\u5019\uFF0C\u53EA\u6709\u4E00\u4E2A\u65B9\u5411\u7684\u5B9A\u4F4D\u5C5E\u6027\u4F1A\u8D77\u4F5C\u7528\u3002\u800C\u8C01\u8D77\u4F5C\u7528\u5219\u662F\u4E0E\u6587\u6863\u6D41\u7684\u987A\u5E8F\u6709\u5173\u7684\uFF0C\u9ED8\u8BA4\u7684\u6587\u6863\u6D41\u662F\u81EA\u4E0A\u800C\u4E0B\u3001\u4ECE\u5DE6\u5F80\u53F3\uFF0C\u56E0\u6B64top/bottom\u540C\u65F6\u4F7F\u7528\u7684\u65F6\u5019\uFF0Cbottom\u5931\u6548\uFF1Bleft/right\u540C\u65F6\u4F7F\u7528\u7684\u65F6\u5019\uFF0Cright\u5931\u6548\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_87-\u4EC0\u4E48\u662F\u5C42\u53E0\u4E0A\u4E0B\u6587" tabindex="-1"><a class="header-anchor" href="#_87-\u4EC0\u4E48\u662F\u5C42\u53E0\u4E0A\u4E0B\u6587" aria-hidden="true">#</a> 87.\u4EC0\u4E48\u662F\u5C42\u53E0\u4E0A\u4E0B\u6587\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5C42\u53E0\u4E0A\u4E0B\u6587\uFF0C\u82F1\u6587\u79F0\u4F5Cstacking context\uFF0C\u662FHTML\u4E2D\u7684\u4E00\u4E2A\u4E09\u7EF4\u7684\u6982\u5FF5\u3002\u5982\u679C\u4E00\u4E2A\u5143\u7D20\u542B\u6709\u5C42\u53E0\u4E0A\u4E0B\u6587\uFF0C\u6211\u4EEC\u53EF\u4EE5\u7406\u89E3\u4E3A\u8FD9\u4E2A\u5143
\u7D20\u5728z\u8F74\u4E0A\u5C31\u201C\u9AD8\u4EBA\u4E00\u7B49\u201D\u3002

\u5C42\u53E0\u4E0A\u4E0B\u6587\u5143\u7D20\u6709\u5982\u4E0B\u7279\u6027\uFF1A

\uFF081\uFF09\u5C42\u53E0\u4E0A\u4E0B\u6587\u7684\u5C42\u53E0\u6C34\u5E73\u8981\u6BD4\u666E\u901A\u5143\u7D20\u9AD8\uFF08\u539F\u56E0\u540E\u9762\u4F1A\u8BF4\u660E\uFF09\u3002
\uFF082\uFF09\u5C42\u53E0\u4E0A\u4E0B\u6587\u53EF\u4EE5\u963B\u65AD\u5143\u7D20\u7684\u6DF7\u5408\u6A21\u5F0F\u3002
\uFF083\uFF09\u5C42\u53E0\u4E0A\u4E0B\u6587\u53EF\u4EE5\u5D4C\u5957\uFF0C\u5185\u90E8\u5C42\u53E0\u4E0A\u4E0B\u6587\u53CA\u5176\u6240\u6709\u5B50\u5143\u7D20\u5747\u53D7\u5236\u4E8E\u5916\u90E8\u7684\u201C\u5C42\u53E0\u4E0A\u4E0B\u6587\u201D\u3002
\uFF084\uFF09\u6BCF\u4E2A\u5C42\u53E0\u4E0A\u4E0B\u6587\u548C\u5144\u5F1F\u5143\u7D20\u72EC\u7ACB\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5F53\u8FDB\u884C\u5C42\u53E0\u53D8\u5316\u6216\u6E32\u67D3\u7684\u65F6\u5019\uFF0C\u53EA\u9700\u8981\u8003\u8651\u540E\u4EE3\u5143\u7D20\u3002
\uFF085\uFF09\u6BCF\u4E2A\u5C42\u53E0\u4E0A\u4E0B\u6587\u662F\u81EA\u6210\u4F53\u7CFB\u7684\uFF0C\u5F53\u5143\u7D20\u53D1\u751F\u5C42\u53E0\u7684\u65F6\u5019\uFF0C\u6574\u4E2A\u5143\u7D20\u88AB\u8BA4\u4E3A\u662F\u5728\u7236\u5C42\u53E0\u4E0A\u4E0B\u6587\u7684\u5C42\u53E0\u987A\u5E8F\u4E2D\u3002


\u5C42\u53E0\u4E0A\u4E0B\u6587\u7684\u521B\u5EFA\uFF1A

\uFF081\uFF09\u9875\u9762\u6839\u5143\u7D20\u5929\u751F\u5177\u6709\u5C42\u53E0\u4E0A\u4E0B\u6587\uFF0C\u79F0\u4E3A\u6839\u5C42\u53E0\u4E0A\u4E0B\u6587\u3002\u6839\u5C42\u53E0\u4E0A\u4E0B\u6587\u6307\u7684\u662F\u9875\u9762\u6839\u5143\u7D20\uFF0C\u53EF\u4EE5\u770B\u6210\u662F&lt;html&gt;\u5143\u7D20\u3002\u56E0\u6B64\uFF0C\u9875\u9762\u4E2D\u6240\u6709\u7684\u5143\u7D20\u4E00\u5B9A\u5904\u4E8E\u81F3\u5C11\u4E00\u4E2A\u201C\u5C42\u53E0\u7ED3\u754C\u201D\u4E2D\u3002

\uFF082\uFF09\u5BF9\u4E8Eposition\u503C\u4E3Arelative/absolute\u4EE5\u53CAFirefox/IE\u6D4F\u89C8\u5668\uFF08\u4E0D\u5305\u62ECChrome\u6D4F\u89C8\u5668\uFF09\u4E0B\u542B\u6709position:fixed\u58F0\u660E\u7684\u5B9A\u4F4D\u5143\u7D20\uFF0C\u5F53\u5176z-index\u503C\u4E0D\u662Fauto\u7684\u65F6\u5019\uFF0C\u4F1A\u521B\u5EFA\u5C42\u53E0\u4E0A\u4E0B\u6587\u3002Chrome\u7B49WebKit\u5185\u6838\u6D4F\u89C8\u5668\u4E0B\uFF0Cposition:fixed\u5143\u7D20\u5929\u7136\u5C42\u53E0\u4E0A\u4E0B\u6587\u5143\u7D20\uFF0C\u65E0\u987Bz-index\u4E3A\u6570\u503C\u3002\u6839\u636E\u6211\u7684\u6D4B\u8BD5\uFF0C\u76EE\u524DIE\u548CFirefox\u4ECD\u662F\u8001\u5957\u8DEF\u3002

\uFF083\uFF09\u5176\u4ED6\u4E00\u4E9BCSS3\u5C5E\u6027\uFF0C\u6BD4\u5982\u5143\u7D20\u7684opacity\u503C\u4E0D\u662F1\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_88-\u4EC0\u4E48\u662F\u5C42\u53E0\u6C34\u5E73" tabindex="-1"><a class="header-anchor" href="#_88-\u4EC0\u4E48\u662F\u5C42\u53E0\u6C34\u5E73" aria-hidden="true">#</a> 88.\u4EC0\u4E48\u662F\u5C42\u53E0\u6C34\u5E73\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5C42\u53E0\u6C34\u5E73\uFF0C\u82F1\u6587\u79F0\u4F5Cstacking level\uFF0C\u51B3\u5B9A\u4E86\u540C\u4E00\u4E2A\u5C42\u53E0\u4E0A\u4E0B\u6587\u4E2D\u5143\u7D20\u5728z\u8F74\u4E0A\u7684\u663E\u793A\u987A\u5E8F\u3002

\u663E\u800C\u6613\u89C1\uFF0C\u6240\u6709\u7684\u5143\u7D20\u90FD\u6709\u5C42\u53E0\u6C34\u5E73\uFF0C\u5305\u62EC\u5C42\u53E0\u4E0A\u4E0B\u6587\u5143\u7D20\uFF0C\u4E5F\u5305\u62EC\u666E\u901A\u5143\u7D20\u3002\u7136\u800C\uFF0C\u5BF9\u666E\u901A\u5143\u7D20\u7684\u5C42\u53E0\u6C34\u5E73\u63A2\u8BA8\u53EA\u5C40\u9650\u5728\u5F53\u524D\u5C42\u53E0\u4E0A
\u4E0B\u6587\u5143\u7D20\u4E2D\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_89-\u5143\u7D20\u7684\u5C42\u53E0\u987A\u5E8F" tabindex="-1"><a class="header-anchor" href="#_89-\u5143\u7D20\u7684\u5C42\u53E0\u987A\u5E8F" aria-hidden="true">#</a> 89.\u5143\u7D20\u7684\u5C42\u53E0\u987A\u5E8F\uFF1F</h2><p>\u5C42\u53E0\u987A\u5E8F\uFF0C\u82F1\u6587\u79F0\u4F5C stacking order\uFF0C\u8868\u793A\u5143\u7D20\u53D1\u751F\u5C42\u53E0\u65F6\u6709\u7740\u7279\u5B9A\u7684\u5782\u76F4\u663E\u793A\u987A\u5E8F\u3002</p><p><img src="https://cavszhouyou-1254093697.cos.ap-chongqing.myqcloud.com/note-15.png" alt="\u5C42\u53E0\u987A\u5E8F"></p><h2 id="_90-\u5C42\u53E0\u51C6\u5219" tabindex="-1"><a class="header-anchor" href="#_90-\u5C42\u53E0\u51C6\u5219" aria-hidden="true">#</a> 90.\u5C42\u53E0\u51C6\u5219\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\uFF081\uFF09\u8C01\u5927\u8C01\u4E0A\uFF1A\u5F53\u5177\u6709\u660E\u663E\u7684\u5C42\u53E0\u6C34\u5E73\u6807\u8BC6\u7684\u65F6\u5019\uFF0C\u5982\u751F\u6548\u7684z-index\u5C5E\u6027\u503C\uFF0C\u5728\u540C\u4E00\u4E2A\u5C42\u53E0\u4E0A\u4E0B\u6587\u9886\u57DF\uFF0C\u5C42\u53E0\u6C34\u5E73\u503C\u5927\u7684\u90A3\u4E00\u4E2A\u8986\u76D6\u5C0F\u7684\u90A3\u4E00\u4E2A\u3002

\uFF082\uFF09\u540E\u6765\u5C45\u4E0A\uFF1A\u5F53\u5143\u7D20\u7684\u5C42\u53E0\u6C34\u5E73\u4E00\u81F4\u3001\u5C42\u53E0\u987A\u5E8F\u76F8\u540C\u7684\u65F6\u5019\uFF0C\u5728DOM\u6D41\u4E2D\u5904\u4E8E\u540E\u9762\u7684\u5143\u7D20\u4F1A\u8986\u76D6\u524D\u9762\u7684\u5143\u7D20\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_91-font-weight-\u7684\u7279\u6B8A\u6027" tabindex="-1"><a class="header-anchor" href="#_91-font-weight-\u7684\u7279\u6B8A\u6027" aria-hidden="true">#</a> 91.font-weight \u7684\u7279\u6B8A\u6027\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5982\u679C\u4F7F\u7528\u6570\u503C\u4F5C\u4E3Afont-weight\u5C5E\u6027\u503C\uFF0C\u5FC5\u987B\u662F100\uFF5E900\u7684\u6574\u767E\u6570\u3002\u56E0\u4E3A\u8FD9\u91CC\u7684\u6570\u503C\u4EC5\u4EC5\u662F\u5916\u8868\u957F\u5F97\u50CF\u6570\u503C\uFF0C\u5B9E\u9645\u4E0A\u662F\u4E00\u4E2A\u5177\u6709\u7279\u5B9A\u542B\u4E49\u7684\u5173\u952E\u5B57\uFF0C\u5E76\u4E14\u8FD9\u91CC\u7684\u6570\u503C\u5173\u952E\u5B57\u548C\u5B57\u6BCD\u5173\u952E\u5B57\u4E4B\u95F4\u662F\u6709\u5BF9\u5E94\u5173\u7CFB\u7684\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_92-text-indent-\u7684\u7279\u6B8A\u6027" tabindex="-1"><a class="header-anchor" href="#_92-text-indent-\u7684\u7279\u6B8A\u6027" aria-hidden="true">#</a> 92.text-indent \u7684\u7279\u6B8A\u6027\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\uFF081\uFF09text-indent\u4EC5\u5BF9\u7B2C\u4E00\u884C\u5185\u8054\u76D2\u5B50\u5185\u5BB9\u6709\u6548\u3002

\uFF082\uFF09\u975E\u66FF\u6362\u5143\u7D20\u4EE5\u5916\u7684display\u8BA1\u7B97\u503C\u4E3Ainline\u7684\u5185\u8054\u5143\u7D20\u8BBE\u7F6Etext-indent\u503C\u65E0\u6548\uFF0C\u5982\u679C\u8BA1\u7B97\u503Cinline-block/inli
ne-table\u5219\u4F1A\u751F\u6548\u3002

\uFF083\uFF09&lt;input&gt;\u6807\u7B7E\u6309\u94AEtext-indent\u503C\u65E0\u6548\u3002

\uFF084\uFF09&lt;button&gt;\u6807\u7B7E\u6309\u94AEtext-indent\u503C\u6709\u6548\u3002

\uFF085\uFF09text-indent\u7684\u767E\u5206\u6BD4\u503C\u662F\u76F8\u5BF9\u4E8E\u5F53\u524D\u5143\u7D20\u7684\u201C\u5305\u542B\u5757\u201D\u8BA1\u7B97\u7684\uFF0C\u800C\u4E0D\u662F\u5F53\u524D\u5143\u7D20\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_93-letter-spacing-\u4E0E\u5B57\u7B26\u95F4\u8DDD" tabindex="-1"><a class="header-anchor" href="#_93-letter-spacing-\u4E0E\u5B57\u7B26\u95F4\u8DDD" aria-hidden="true">#</a> 93.letter-spacing \u4E0E\u5B57\u7B26\u95F4\u8DDD\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>letter-spacing\u53EF\u4EE5\u7528\u6765\u63A7\u5236\u5B57\u7B26\u4E4B\u95F4\u7684\u95F4\u8DDD\uFF0C\u8FD9\u91CC\u8BF4\u7684\u201C\u5B57\u7B26\u201D\u5305\u62EC\u82F1\u6587\u5B57\u6BCD\u3001\u6C49\u5B57\u4EE5\u53CA\u7A7A\u683C\u7B49\u3002

letter-spacing\u5177\u6709\u4EE5\u4E0B\u4E00\u4E9B\u7279\u6027\u3002

\uFF081\uFF09\u7EE7\u627F\u6027\u3002
\uFF082\uFF09\u9ED8\u8BA4\u503C\u662Fnormal\u800C\u4E0D\u662F0\u3002\u867D\u7136\u8BF4\u6B63\u5E38\u60C5\u51B5\u4E0B\uFF0Cnormal\u7684\u8BA1\u7B97\u503C\u5C31\u662F0\uFF0C\u4F46\u4E24\u8005\u8FD8\u662F\u6709\u5DEE\u522B\u7684\uFF0C\u5728\u6709\u4E9B\u573A\u666F\u4E0B\uFF0Cletter-spacing\u4F1A\u8C03\u6574normal\u7684\u8BA1\u7B97\u503C\u4EE5\u5B9E\u73B0\u66F4\u597D\u7684\u7248\u9762\u5E03\u5C40\u3002
\uFF083\uFF09\u652F\u6301\u8D1F\u503C\uFF0C\u4E14\u503C\u8DB3\u591F\u5927\u7684\u65F6\u5019\uFF0C\u4F1A\u8BA9\u5B57\u7B26\u5F62\u6210\u91CD\u53E0\uFF0C\u751A\u81F3\u53CD\u5411\u6392\u5217\u3002
\uFF084\uFF09\u548Ctext-indent\u5C5E\u6027\u4E00\u6837\uFF0C\u65E0\u8BBA\u503C\u591A\u5927\u6216\u591A\u5C0F\uFF0C\u7B2C\u4E00\u884C\u4E00\u5B9A\u4F1A\u4FDD\u7559\u81F3\u5C11\u4E00\u4E2A\u5B57\u7B26\u3002
\uFF085\uFF09\u652F\u6301\u5C0F\u6570\u503C\uFF0C\u5373\u4F7F0.1px\u4E5F\u662F\u652F\u6301\u7684\u3002
\uFF086\uFF09\u6682\u4E0D\u652F\u6301\u767E\u5206\u6BD4\u503C\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_94-word-spacing-\u4E0E\u5355\u8BCD\u95F4\u8DDD" tabindex="-1"><a class="header-anchor" href="#_94-word-spacing-\u4E0E\u5355\u8BCD\u95F4\u8DDD" aria-hidden="true">#</a> 94.word-spacing \u4E0E\u5355\u8BCD\u95F4\u8DDD\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>letter-spacing\u4F5C\u7528\u4E8E\u6240\u6709\u5B57\u7B26\uFF0C\u4F46word-spacing\u4EC5\u4F5C\u7528\u4E8E\u7A7A\u683C\u5B57\u7B26\u3002\u6362\u53E5\u8BDD\u8BF4\uFF0Cword-spacing\u7684\u4F5C\u7528\u5C31\u662F\u589E\u52A0\u7A7A\u683C\u7684\u95F4\u9699
\u5BBD\u5EA6\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_95-white-space-\u4E0E\u6362\u884C\u548C\u7A7A\u683C\u7684\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#_95-white-space-\u4E0E\u6362\u884C\u548C\u7A7A\u683C\u7684\u63A7\u5236" aria-hidden="true">#</a> 95.white-space \u4E0E\u6362\u884C\u548C\u7A7A\u683C\u7684\u63A7\u5236\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>white-space\u5C5E\u6027\u58F0\u660E\u4E86\u5982\u4F55\u5904\u7406\u5143\u7D20\u5185\u7684\u7A7A\u767D\u5B57\u7B26\uFF0C\u8FD9\u7C7B\u7A7A\u767D\u5B57\u7B26\u5305\u62ECSpace\uFF08\u7A7A\u683C\uFF09\u952E\u3001Enter\uFF08\u56DE\u8F66\uFF09\u952E\u3001Tab\uFF08\u5236\u8868\u7B26\uFF09
\u952E\u4EA7\u751F\u7684\u7A7A\u767D\u3002\u56E0\u6B64\uFF0Cwhite-space\u53EF\u4EE5\u51B3\u5B9A\u56FE\u6587\u5185\u5BB9\u662F\u5426\u5728\u4E00\u884C\u663E\u793A\uFF08\u56DE\u8F66\u7A7A\u683C\u662F\u5426\u751F\u6548\uFF09\uFF0C\u662F\u5426\u663E\u793A\u5927\u6BB5\u8FDE\u7EED\u7A7A\u767D\uFF08\u7A7A\u683C\u662F\u5426
\u751F\u6548\uFF09\u7B49\u3002

\u5176\u5C5E\u6027\u503C\u5305\u62EC\u4E0B\u9762\u8FD9\u4E9B\u3002
\u2022normal\uFF1A\u5408\u5E76\u7A7A\u767D\u5B57\u7B26\u548C\u6362\u884C\u7B26\u3002
\u2022pre\uFF1A\u7A7A\u767D\u5B57\u7B26\u4E0D\u5408\u5E76\uFF0C\u5E76\u4E14\u5185\u5BB9\u53EA\u5728\u6709\u6362\u884C\u7B26\u7684\u5730\u65B9\u6362\u884C\u3002
\u2022nowrap\uFF1A\u8BE5\u503C\u548Cnormal\u4E00\u6837\u4F1A\u5408\u5E76\u7A7A\u767D\u5B57\u7B26\uFF0C\u4F46\u4E0D\u5141\u8BB8\u6587\u672C\u73AF\u7ED5\u3002
\u2022pre-wrap\uFF1A\u7A7A\u767D\u5B57\u7B26\u4E0D\u5408\u5E76\uFF0C\u5E76\u4E14\u5185\u5BB9\u53EA\u5728\u6709\u6362\u884C\u7B26\u7684\u5730\u65B9\u6362\u884C\uFF0C\u540C\u65F6\u5141\u8BB8\u6587\u672C\u73AF\u7ED5\u3002
\u2022pre-line\uFF1A\u5408\u5E76\u7A7A\u767D\u5B57\u7B26\uFF0C\u4F46\u53EA\u5728\u6709\u6362\u884C\u7B26\u7684\u5730\u65B9\u6362\u884C\uFF0C\u5141\u8BB8\u6587\u672C\u73AF\u7ED5\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_96-\u9690\u85CF\u5143\u7D20\u7684-background-image-\u5230\u5E95\u52A0\u4E0D\u52A0\u8F7D" tabindex="-1"><a class="header-anchor" href="#_96-\u9690\u85CF\u5143\u7D20\u7684-background-image-\u5230\u5E95\u52A0\u4E0D\u52A0\u8F7D" aria-hidden="true">#</a> 96.\u9690\u85CF\u5143\u7D20\u7684 background-image \u5230\u5E95\u52A0\u4E0D\u52A0\u8F7D\uFF1F</h2><p>\u76F8\u5173\u77E5\u8BC6\u70B9\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6839\u636E\u6D4B\u8BD5\uFF0C\u4E00\u4E2A\u5143\u7D20\u5982\u679Cdisplay\u8BA1\u7B97\u503C\u4E3Anone\uFF0C\u5728IE\u6D4F\u89C8\u5668\u4E0B\uFF08IE8\uFF5EIE11\uFF0C\u66F4\u9AD8\u7248\u672C\u4E0D\u786E\u5B9A\uFF09\u4F9D\u7136\u4F1A\u53D1\u9001\u56FE\u7247\u8BF7\u6C42\uFF0CFire
fox\u6D4F\u89C8\u5668\u4E0D\u4F1A\uFF0C\u81F3\u4E8EChrome\u548CSafari\u6D4F\u89C8\u5668\u5219\u4F3C\u4E4E\u66F4\u52A0\u667A\u80FD\u4E00\u70B9\uFF1A\u5982\u679C\u9690\u85CF\u5143\u7D20\u540C\u65F6\u53C8\u8BBE\u7F6E\u4E86background-image\uFF0C\u5219\u56FE\u7247
\u4F9D\u7136\u4F1A\u53BB\u52A0\u8F7D\uFF1B\u5982\u679C\u662F\u7236\u5143\u7D20\u7684display\u8BA1\u7B97\u503C\u4E3Anone\uFF0C\u5219\u80CC\u666F\u56FE\u4E0D\u4F1A\u8BF7\u6C42\uFF0C\u6B64\u65F6\u6D4F\u89C8\u5668\u6216\u8BB8\u653E\u5FC3\u5730\u8BA4\u4E3A\u8FD9\u4E2A\u80CC\u666F\u56FE\u6682\u65F6\u662F\u4E0D\u4F1A\u4F7F
\u7528\u7684\u3002

\u5982\u679C\u4E0D\u662Fbackground-image\uFF0C\u800C\u662F&lt;img&gt;\u5143\u7D20\uFF0C\u5219\u8BBE\u7F6Edisplay:none\u5728\u6240\u6709\u6D4F\u89C8\u5668\u4E0B\u4F9D\u65E7\u90FD\u4F1A\u8BF7\u6C42\u56FE\u7247\u8D44\u6E90\u3002

\u8FD8\u9700\u8981\u6CE8\u610F\u7684\u662F\u5982\u679C\u8BBE\u7F6E\u7684\u6837\u5F0F\u6CA1\u6709\u5BF9\u5E94\u7684\u5143\u7D20\uFF0C\u5219background-image\u4E5F\u4E0D\u4F1A\u52A0\u8F7D\u3002hover\u60C5\u51B5\u4E0B\u7684background-image\uFF0C\u5728\u89E6
\u53D1\u65F6\u52A0\u8F7D\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u56DE\u7B54\uFF1A</p><p>-\uFF081\uFF09\u5143\u7D20\u7684\u80CC\u666F\u56FE\u7247</p><p>-\u5143\u7D20\u672C\u8EAB\u8BBE\u7F6E display:none\uFF0C\u4F1A\u8BF7\u6C42\u56FE\u7247 -\u7236\u7EA7\u5143\u7D20\u8BBE\u7F6E display:none\uFF0C\u4E0D\u4F1A\u8BF7\u6C42\u56FE\u7247 -\u6837\u5F0F\u6CA1\u6709\u5143\u7D20\u4F7F\u7528\uFF0C\u4E0D\u4F1A\u8BF7\u6C42 -:hover \u6837\u5F0F\u4E0B\uFF0C\u89E6\u53D1\u65F6\u8BF7\u6C42</p><p>-\uFF082\uFF09img \u6807\u7B7E\u56FE\u7247\u4EFB\u4F55\u60C5\u51B5\u4E0B\u90FD\u4F1A\u8BF7\u6C42\u56FE\u7247</p>`,64),ve={href:"https://www.jb51.net/css/469033.html",target:"_blank",rel:"noopener noreferrer"},me=a(`<h2 id="_97-\u5982\u4F55\u5B9E\u73B0\u5355\u884C-\u591A\u884C\u6587\u672C\u6EA2\u51FA\u7684\u7701\u7565" tabindex="-1"><a class="header-anchor" href="#_97-\u5982\u4F55\u5B9E\u73B0\u5355\u884C-\u591A\u884C\u6587\u672C\u6EA2\u51FA\u7684\u7701\u7565" aria-hidden="true">#</a> 97.\u5982\u4F55\u5B9E\u73B0\u5355\u884C\uFF0F\u591A\u884C\u6587\u672C\u6EA2\u51FA\u7684\u7701\u7565\uFF08...\uFF09\uFF1F</h2><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/*\u5355\u884C\u6587\u672C\u6EA2\u51FA*/</span>
<span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*\u591A\u884C\u6587\u672C\u6EA2\u51FA*/</span>
<span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 1.5em<span class="token punctuation">;</span>
  <span class="token comment">/*\u9AD8\u5EA6\u4E3A\u9700\u8981\u663E\u793A\u7684\u884C\u6570*\u884C\u9AD8\uFF0C\u6BD4\u5982\u8FD9\u91CC\u6211\u4EEC\u663E\u793A\u4E24\u884C\uFF0C\u5219\u4E3A3*/</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 3em<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">p:after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;...&#39;</span><span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),be={href:"https://zhuanlan.zhihu.com/p/30707916",target:"_blank",rel:"noopener noreferrer"},he={href:"https://juejin.im/entry/587f453e1b69e60058555a5f",target:"_blank",rel:"noopener noreferrer"},ke=n("h2",{id:"_98-\u5E38\u89C1\u7684\u5143\u7D20\u9690\u85CF\u65B9\u5F0F",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_98-\u5E38\u89C1\u7684\u5143\u7D20\u9690\u85CF\u65B9\u5F0F","aria-hidden":"true"},"#"),e(" 98.\u5E38\u89C1\u7684\u5143\u7D20\u9690\u85CF\u65B9\u5F0F\uFF1F")],-1),ge=n("p",null,"-\uFF081\uFF09\u4F7F\u7528 display:none;\u9690\u85CF\u5143\u7D20\uFF0C\u6E32\u67D3\u6811\u4E0D\u4F1A\u5305\u542B\u8BE5\u6E32\u67D3\u5BF9\u8C61\uFF0C\u56E0\u6B64\u8BE5\u5143\u7D20\u4E0D\u4F1A\u5728\u9875\u9762\u4E2D\u5360\u636E\u4F4D\u7F6E\uFF0C\u4E5F\u4E0D\u4F1A\u54CD\u5E94\u7ED1\u5B9A\u7684\u76D1\u542C\u4E8B\u4EF6\u3002",-1),xe=n("p",null,"-\uFF082\uFF09\u4F7F\u7528 visibility:hidden;\u9690\u85CF\u5143\u7D20\u3002\u5143\u7D20\u5728\u9875\u9762\u4E2D\u4ECD\u5360\u636E\u7A7A\u95F4\uFF0C\u4F46\u662F\u4E0D\u4F1A\u54CD\u5E94\u7ED1\u5B9A\u7684\u76D1\u542C\u4E8B\u4EF6\u3002",-1),fe=n("p",null,"-\uFF083\uFF09\u4F7F\u7528 opacity:0;\u5C06\u5143\u7D20\u7684\u900F\u660E\u5EA6\u8BBE\u7F6E\u4E3A 0\uFF0C\u4EE5\u6B64\u6765\u5B9E\u73B0\u5143\u7D20\u7684\u9690\u85CF\u3002\u5143\u7D20\u5728\u9875\u9762\u4E2D\u4ECD\u7136\u5360\u636E\u7A7A\u95F4\uFF0C\u5E76\u4E14\u80FD\u591F\u54CD\u5E94\u5143\u7D20\u7ED1\u5B9A\u7684\u76D1\u542C\u4E8B\u4EF6\u3002",-1),_e=n("p",null,"-\uFF084\uFF09\u901A\u8FC7\u4F7F\u7528\u7EDD\u5BF9\u5B9A\u4F4D\u5C06\u5143\u7D20\u79FB\u9664\u53EF\u89C6\u533A\u57DF\u5185\uFF0C\u4EE5\u6B64\u6765\u5B9E\u73B0\u5143\u7D20\u7684\u9690\u85CF\u3002",-1),ye=n("p",null,"-\uFF085\uFF09\u901A\u8FC7 z-index \u8D1F\u503C\uFF0C\u6765\u4F7F\u5176\u4ED6\u5143\u7D20\u906E\u76D6\u4F4F\u8BE5\u5143\u7D20\uFF0C\u4EE5\u6B64\u6765\u5B9E\u73B0\u9690\u85CF\u3002",-1),we=n("p",null,"-\uFF086\uFF09\u901A\u8FC7 clip/clip-path \u5143\u7D20\u88C1\u526A\u7684\u65B9\u6CD5\u6765\u5B9E\u73B0\u5143\u7D20\u7684\u9690\u85CF\uFF0C\u8FD9\u79CD\u65B9\u6CD5\u4E0B\uFF0C\u5143\u7D20\u4ECD\u5728\u9875\u9762\u4E2D\u5360\u636E\u4F4D\u7F6E\uFF0C\u4F46\u662F\u4E0D\u4F1A\u54CD\u5E94\u7ED1\u5B9A\u7684\u76D1\u542C\u4E8B\u4EF6\u3002",-1),Se=n("p",null,"-\uFF087\uFF09\u901A\u8FC7 transform:scale(0,0)\u6765\u5C06\u5143\u7D20\u7F29\u653E\u4E3A 0\uFF0C\u4EE5\u6B64\u6765\u5B9E\u73B0\u5143\u7D20\u7684\u9690\u85CF\u3002\u8FD9\u79CD\u65B9\u6CD5\u4E0B\uFF0C\u5143\u7D20\u4ECD\u5728\u9875\u9762\u4E2D\u5360\u636E\u4F4D\u7F6E\uFF0C\u4F46\u662F\u4E0D\u4F1A\u54CD\u5E94\u7ED1\u5B9A\u7684\u76D1\u542C\u4E8B\u4EF6\u3002",-1),Ce={href:"https://juejin.im/post/584b645a128fe10058a0d625#heading-2",target:"_blank",rel:"noopener noreferrer"},Ee=a(`<h2 id="_99-css-\u5B9E\u73B0\u4E0A\u4E0B\u56FA\u5B9A\u4E2D\u95F4\u81EA\u9002\u5E94\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#_99-css-\u5B9E\u73B0\u4E0A\u4E0B\u56FA\u5B9A\u4E2D\u95F4\u81EA\u9002\u5E94\u5E03\u5C40" aria-hidden="true">#</a> 99.css \u5B9E\u73B0\u4E0A\u4E0B\u56FA\u5B9A\u4E2D\u95F4\u81EA\u9002\u5E94\u5E03\u5C40\uFF1F</h2><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">\u5229\u7528\u7EDD\u5BF9\u5B9A\u4F4D\u5B9E\u73B0body</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.header</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.footer</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">\u5229\u7528flex\u5E03\u5C40\u5B9E\u73B0html,
body</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.header</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">flex-grow</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.footer</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Ie={href:"https://www.jianshu.com/p/30bc9751e3e8",target:"_blank",rel:"noopener noreferrer"},Fe=a(`<h2 id="_100-css-\u4E24\u680F\u5E03\u5C40\u7684\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_100-css-\u4E24\u680F\u5E03\u5C40\u7684\u5B9E\u73B0" aria-hidden="true">#</a> 100.css \u4E24\u680F\u5E03\u5C40\u7684\u5B9E\u73B0\uFF1F</h2><p>\u76F8\u5173\u8D44\u6599\uFF1A</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/*\u4E24\u680F\u5E03\u5C40\u4E00\u822C\u6307\u7684\u662F\u9875\u9762\u4E2D\u4E00\u5171\u4E24\u680F\uFF0C\u5DE6\u8FB9\u56FA\u5B9A\uFF0C\u53F3\u8FB9\u81EA\u9002\u5E94\u7684\u5E03\u5C40\uFF0C\u4E00\u5171\u6709\u56DB\u79CD\u5B9E\u73B0\u7684\u65B9\u5F0F\u3002*/</span>
<span class="token comment">/*\u4EE5\u5DE6\u8FB9\u5BBD\u5EA6\u56FA\u5B9A\u4E3A200px\u4E3A\u4F8B*/</span>

<span class="token comment">/*\uFF081\uFF09\u5229\u7528\u6D6E\u52A8\uFF0C\u5C06\u5DE6\u8FB9\u5143\u7D20\u5BBD\u5EA6\u8BBE\u7F6E\u4E3A200px\uFF0C\u5E76\u4E14\u8BBE\u7F6E\u5411\u5DE6\u6D6E\u52A8\u3002\u5C06\u53F3\u8FB9\u5143\u7D20\u7684margin-left\u8BBE\u7F6E\u4E3A200px\uFF0C\u5BBD\u5EA6\u8BBE\u7F6E\u4E3Aauto\uFF08\u9ED8\u8BA4\u4E3Aauto\uFF0C\u6491\u6EE1\u6574\u4E2A\u7236\u5143\u7D20\uFF09\u3002*/</span>
<span class="token selector">.outer</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.left</span> <span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>

  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>

  <span class="token property">background</span><span class="token punctuation">:</span> tomato<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.right</span> <span class="token punctuation">{</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>

  <span class="token property">width</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>

  <span class="token property">background</span><span class="token punctuation">:</span> gold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*\uFF082\uFF09\u7B2C\u4E8C\u79CD\u662F\u5229\u7528flex\u5E03\u5C40\uFF0C\u5C06\u5DE6\u8FB9\u5143\u7D20\u7684\u653E\u5927\u548C\u7F29\u5C0F\u6BD4\u4F8B\u8BBE\u7F6E\u4E3A0\uFF0C\u57FA\u7840\u5927\u5C0F\u8BBE\u7F6E\u4E3A200px\u3002\u5C06\u53F3\u8FB9\u7684\u5143\u7D20\u7684\u653E\u5927\u6BD4\u4F8B\u8BBE\u7F6E\u4E3A1\uFF0C\u7F29\u5C0F\u6BD4\u4F8B\u8BBE\u7F6E\u4E3A1\uFF0C\u57FA\u7840\u5927\u5C0F\u8BBE\u7F6E\u4E3Aauto\u3002*/</span>
<span class="token selector">.outer</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>

  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.left</span> <span class="token punctuation">{</span>
  <span class="token property">flex-shrink</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">flex-grow</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">flex-basis</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>

  <span class="token property">background</span><span class="token punctuation">:</span> tomato<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.right</span> <span class="token punctuation">{</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
  <span class="token comment">/*11auto*/</span>

  <span class="token property">background</span><span class="token punctuation">:</span> gold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*\uFF083\uFF09\u7B2C\u4E09\u79CD\u662F\u5229\u7528\u7EDD\u5BF9\u5B9A\u4F4D\u5E03\u5C40\u7684\u65B9\u5F0F\uFF0C\u5C06\u7236\u7EA7\u5143\u7D20\u8BBE\u7F6E\u76F8\u5BF9\u5B9A\u4F4D\u3002\u5DE6\u8FB9\u5143\u7D20\u8BBE\u7F6E\u4E3Aabsolute\u5B9A\u4F4D\uFF0C\u5E76\u4E14\u5BBD\u5EA6\u8BBE\u7F6E\u4E3A
200px\u3002\u5C06\u53F3\u8FB9\u5143\u7D20\u7684margin-left\u7684\u503C\u8BBE\u7F6E\u4E3A200px\u3002*/</span>
<span class="token selector">.outer</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>

  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.left</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>

  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>

  <span class="token property">background</span><span class="token punctuation">:</span> tomato<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.right</span> <span class="token punctuation">{</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>

  <span class="token property">background</span><span class="token punctuation">:</span> gold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*\uFF084\uFF09\u7B2C\u56DB\u79CD\u8FD8\u662F\u5229\u7528\u7EDD\u5BF9\u5B9A\u4F4D\u7684\u65B9\u5F0F\uFF0C\u5C06\u7236\u7EA7\u5143\u7D20\u8BBE\u7F6E\u4E3A\u76F8\u5BF9\u5B9A\u4F4D\u3002\u5DE6\u8FB9\u5143\u7D20\u5BBD\u5EA6\u8BBE\u7F6E\u4E3A200px\uFF0C\u53F3\u8FB9\u5143\u7D20\u8BBE\u7F6E\u4E3A\u7EDD\u5BF9\u5B9A\u4F4D\uFF0C\u5DE6\u8FB9\u5B9A\u4F4D\u4E3A200px\uFF0C\u5176\u4F59\u65B9\u5411\u5B9A\u4F4D\u4E3A0\u3002*/</span>
<span class="token selector">.outer</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>

  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.left</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>

  <span class="token property">background</span><span class="token punctuation">:</span> tomato<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.right</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>

  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>

  <span class="token property">background</span><span class="token punctuation">:</span> gold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),ze={href:"http://cavszhouyou.top/Demo-Display/TwoColumnLayout/index.html",target:"_blank",rel:"noopener noreferrer"},Pe=a(`<p>\u56DE\u7B54\uFF1A</p><p>\u4E24\u680F\u5E03\u5C40\u4E00\u822C\u6307\u7684\u662F\u9875\u9762\u4E2D\u4E00\u5171\u4E24\u680F\uFF0C\u5DE6\u8FB9\u56FA\u5B9A\uFF0C\u53F3\u8FB9\u81EA\u9002\u5E94\u7684\u5E03\u5C40\uFF0C\u4E00\u5171\u6709\u56DB\u79CD\u5B9E\u73B0\u7684\u65B9\u5F0F\u3002</p><p>\u4EE5\u5DE6\u8FB9\u5BBD\u5EA6\u56FA\u5B9A\u4E3A 200px \u4E3A\u4F8B</p><p>-\uFF081\uFF09\u5229\u7528\u6D6E\u52A8\uFF0C\u5C06\u5DE6\u8FB9\u5143\u7D20\u5BBD\u5EA6\u8BBE\u7F6E\u4E3A 200px\uFF0C\u5E76\u4E14\u8BBE\u7F6E\u5411\u5DE6\u6D6E\u52A8\u3002\u5C06\u53F3\u8FB9\u5143\u7D20\u7684 margin-left \u8BBE\u7F6E\u4E3A 200px\uFF0C\u5BBD\u5EA6\u8BBE\u7F6E\u4E3A auto\uFF08\u9ED8\u8BA4\u4E3A auto\uFF0C\u6491\u6EE1\u6574\u4E2A\u7236\u5143\u7D20\uFF09\u3002</p><p>-\uFF082\uFF09\u7B2C\u4E8C\u79CD\u662F\u5229\u7528 flex \u5E03\u5C40\uFF0C\u5C06\u5DE6\u8FB9\u5143\u7D20\u7684\u653E\u5927\u548C\u7F29\u5C0F\u6BD4\u4F8B\u8BBE\u7F6E\u4E3A 0\uFF0C\u57FA\u7840\u5927\u5C0F\u8BBE\u7F6E\u4E3A 200px\u3002\u5C06\u53F3\u8FB9\u7684\u5143\u7D20\u7684\u653E\u5927\u6BD4\u4F8B\u8BBE\u7F6E\u4E3A 1\uFF0C\u7F29\u5C0F\u6BD4\u4F8B\u8BBE\u7F6E\u4E3A 1\uFF0C\u57FA\u7840\u5927\u5C0F\u8BBE\u7F6E\u4E3A auto\u3002</p><p>-\uFF083\uFF09\u7B2C\u4E09\u79CD\u662F\u5229\u7528\u7EDD\u5BF9\u5B9A\u4F4D\u5E03\u5C40\u7684\u65B9\u5F0F\uFF0C\u5C06\u7236\u7EA7\u5143\u7D20\u8BBE\u7F6E\u76F8\u5BF9\u5B9A\u4F4D\u3002\u5DE6\u8FB9\u5143\u7D20\u8BBE\u7F6E\u4E3A absolute \u5B9A\u4F4D\uFF0C\u5E76\u4E14\u5BBD\u5EA6\u8BBE\u7F6E\u4E3A 200px\u3002\u5C06\u53F3\u8FB9\u5143\u7D20\u7684 margin-left \u7684\u503C\u8BBE\u7F6E\u4E3A 200px\u3002</p><p>-\uFF084\uFF09\u7B2C\u56DB\u79CD\u8FD8\u662F\u5229\u7528\u7EDD\u5BF9\u5B9A\u4F4D\u7684\u65B9\u5F0F\uFF0C\u5C06\u7236\u7EA7\u5143\u7D20\u8BBE\u7F6E\u4E3A\u76F8\u5BF9\u5B9A\u4F4D\u3002\u5DE6\u8FB9\u5143\u7D20\u5BBD\u5EA6\u8BBE\u7F6E\u4E3A 200px\uFF0C\u53F3\u8FB9\u5143\u7D20\u8BBE\u7F6E\u4E3A\u7EDD\u5BF9\u5B9A\u4F4D\uFF0C\u5DE6\u8FB9\u5B9A\u4F4D\u4E3A 200px\uFF0C\u5176\u4F59\u65B9\u5411\u5B9A\u4F4D\u4E3A 0\u3002</p><h2 id="_101-css-\u4E09\u680F\u5E03\u5C40\u7684\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_101-css-\u4E09\u680F\u5E03\u5C40\u7684\u5B9E\u73B0" aria-hidden="true">#</a> 101.css \u4E09\u680F\u5E03\u5C40\u7684\u5B9E\u73B0\uFF1F</h2><p>\u76F8\u5173\u8D44\u6599\uFF1A</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/*\u4E09\u680F\u5E03\u5C40\u4E00\u822C\u6307\u7684\u662F\u9875\u9762\u4E2D\u4E00\u5171\u6709\u4E09\u680F\uFF0C\u5DE6\u53F3\u4E24\u680F\u5BBD\u5EA6\u56FA\u5B9A\uFF0C\u4E2D\u95F4\u81EA\u9002\u5E94\u7684\u5E03\u5C40\uFF0C\u4E00\u5171\u6709\u4E94\u79CD\u5B9E\u73B0\u65B9\u5F0F\u3002

\u8FD9\u91CC\u4EE5\u5DE6\u8FB9\u5BBD\u5EA6\u56FA\u5B9A\u4E3A100px\uFF0C\u53F3\u8FB9\u5BBD\u5EA6\u56FA\u5B9A\u4E3A200px\u4E3A\u4F8B\u3002*/</span>

<span class="token comment">/*\uFF081\uFF09\u5229\u7528\u7EDD\u5BF9\u5B9A\u4F4D\u7684\u65B9\u5F0F\uFF0C\u5DE6\u53F3\u4E24\u680F\u8BBE\u7F6E\u4E3A\u7EDD\u5BF9\u5B9A\u4F4D\uFF0C\u4E2D\u95F4\u8BBE\u7F6E\u5BF9\u5E94\u65B9\u5411\u5927\u5C0F\u7684margin\u7684\u503C\u3002*/</span>
<span class="token selector">.outer</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.left</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>

  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> tomato<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.right</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>

  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> gold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.center</span> <span class="token punctuation">{</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">margin-right</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> lightgreen<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*\uFF082\uFF09\u5229\u7528flex\u5E03\u5C40\u7684\u65B9\u5F0F\uFF0C\u5DE6\u53F3\u4E24\u680F\u7684\u653E\u5927\u548C\u7F29\u5C0F\u6BD4\u4F8B\u90FD\u8BBE\u7F6E\u4E3A0\uFF0C\u57FA\u7840\u5927\u5C0F\u8BBE\u7F6E\u4E3A\u56FA\u5B9A\u7684\u5927\u5C0F\uFF0C\u4E2D\u95F4\u4E00\u680F\u8BBE\u7F6E\u4E3Aauto*/</span>
<span class="token selector">.outer</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.left</span> <span class="token punctuation">{</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> 00100px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> tomato<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.right</span> <span class="token punctuation">{</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> 00200px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> gold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.center</span> <span class="token punctuation">{</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> lightgreen<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*\uFF083\uFF09\u5229\u7528\u6D6E\u52A8\u7684\u65B9\u5F0F\uFF0C\u5DE6\u53F3\u4E24\u680F\u8BBE\u7F6E\u56FA\u5B9A\u5927\u5C0F\uFF0C\u5E76\u8BBE\u7F6E\u5BF9\u5E94\u65B9\u5411\u7684\u6D6E\u52A8\u3002\u4E2D\u95F4\u4E00\u680F\u8BBE\u7F6E\u5DE6\u53F3\u4E24\u4E2A\u65B9\u5411\u7684margin\u503C\uFF0C\u6CE8\u610F\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u4E2D\u95F4\u4E00\u680F\u5FC5\u987B\u653E\u5230\u6700\u540E\u3002*/</span>
<span class="token selector">.outer</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.left</span> <span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> tomato<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.right</span> <span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> gold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.center</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">margin-right</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> lightgreen<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*\uFF084\uFF09\u5723\u676F\u5E03\u5C40\uFF0C\u5229\u7528\u6D6E\u52A8\u548C\u8D1F\u8FB9\u8DDD\u6765\u5B9E\u73B0\u3002\u7236\u7EA7\u5143\u7D20\u8BBE\u7F6E\u5DE6\u53F3\u7684 padding\uFF0C\u4E09\u5217\u5747\u8BBE\u7F6E\u5411\u5DE6\u6D6E\u52A8\uFF0C\u4E2D\u95F4\u4E00\u5217\u653E\u5728\u6700\u524D\u9762\uFF0C\u5BBD\u5EA6\u8BBE\u7F6E\u4E3A\u7236\u7EA7\u5143\u7D20\u7684\u5BBD\u5EA6\uFF0C\u56E0\u6B64\u540E\u9762\u4E24\u5217\u90FD\u88AB\u6324\u5230\u4E86\u4E0B\u4E00\u884C\uFF0C\u901A\u8FC7\u8BBE\u7F6E margin \u8D1F\u503C\u5C06\u5176\u79FB\u52A8\u5230\u4E0A\u4E00\u884C\uFF0C\u518D\u5229\u7528\u76F8\u5BF9\u5B9A\u4F4D\uFF0C\u5B9A\u4F4D\u5230\u4E24\u8FB9\u3002*/</span>
<span class="token selector">.outer</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">padding-left</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">padding-right</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.left</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> -100px<span class="token punctuation">;</span>

  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> -100%<span class="token punctuation">;</span>

  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> tomato<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.right</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>

  <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> -200px<span class="token punctuation">;</span>

  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> gold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.center</span> <span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>

  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> lightgreen<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*\uFF085\uFF09\u53CC\u98DE\u7FFC\u5E03\u5C40\uFF0C\u53CC\u98DE\u7FFC\u5E03\u5C40\u76F8\u5BF9\u4E8E\u5723\u676F\u5E03\u5C40\u6765\u8BF4\uFF0C\u5DE6\u53F3\u4F4D\u7F6E\u7684\u4FDD\u7559\u662F\u901A\u8FC7\u4E2D\u95F4\u5217\u7684 margin \u503C\u6765\u5B9E\u73B0\u7684\uFF0C\u800C\u4E0D\u662F\u901A\u8FC7\u7236\u5143
\u7D20\u7684 padding \u6765\u5B9E\u73B0\u7684\u3002\u672C\u8D28\u4E0A\u6765\u8BF4\uFF0C\u4E5F\u662F\u901A\u8FC7\u6D6E\u52A8\u548C\u5916\u8FB9\u8DDD\u8D1F\u503C\u6765\u5B9E\u73B0\u7684\u3002*/</span>

<span class="token selector">.outer</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.left</span> <span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> -100%<span class="token punctuation">;</span>

  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> tomato<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.right</span> <span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> -200px<span class="token punctuation">;</span>

  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> gold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.wrapper</span> <span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>

  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> lightgreen<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.center</span> <span class="token punctuation">{</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">margin-right</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),je={href:"http://cavszhouyou.top/Demo-Display/ThreeColumnLayout/index.html",target:"_blank",rel:"noopener noreferrer"},Ge=a(`<p>\u56DE\u7B54\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4E09\u680F\u5E03\u5C40\u4E00\u822C\u6307\u7684\u662F\u9875\u9762\u4E2D\u4E00\u5171\u6709\u4E09\u680F\uFF0C\u5DE6\u53F3\u4E24\u680F\u5BBD\u5EA6\u56FA\u5B9A\uFF0C\u4E2D\u95F4\u81EA\u9002\u5E94\u7684\u5E03\u5C40\uFF0C\u4E00\u5171\u6709\u4E94\u79CD\u5B9E\u73B0\u65B9\u5F0F\u3002

\u8FD9\u91CC\u4EE5\u5DE6\u8FB9\u5BBD\u5EA6\u56FA\u5B9A\u4E3A100px\uFF0C\u53F3\u8FB9\u5BBD\u5EA6\u56FA\u5B9A\u4E3A200px\u4E3A\u4F8B\u3002

\uFF081\uFF09\u5229\u7528\u7EDD\u5BF9\u5B9A\u4F4D\u7684\u65B9\u5F0F\uFF0C\u5DE6\u53F3\u4E24\u680F\u8BBE\u7F6E\u4E3A\u7EDD\u5BF9\u5B9A\u4F4D\uFF0C\u4E2D\u95F4\u8BBE\u7F6E\u5BF9\u5E94\u65B9\u5411\u5927\u5C0F\u7684margin\u7684\u503C\u3002

\uFF082\uFF09\u5229\u7528flex\u5E03\u5C40\u7684\u65B9\u5F0F\uFF0C\u5DE6\u53F3\u4E24\u680F\u7684\u653E\u5927\u548C\u7F29\u5C0F\u6BD4\u4F8B\u90FD\u8BBE\u7F6E\u4E3A0\uFF0C\u57FA\u7840\u5927\u5C0F\u8BBE\u7F6E\u4E3A\u56FA\u5B9A\u7684\u5927\u5C0F\uFF0C\u4E2D\u95F4\u4E00\u680F\u8BBE\u7F6E\u4E3Aauto\u3002

\uFF083\uFF09\u5229\u7528\u6D6E\u52A8\u7684\u65B9\u5F0F\uFF0C\u5DE6\u53F3\u4E24\u680F\u8BBE\u7F6E\u56FA\u5B9A\u5927\u5C0F\uFF0C\u5E76\u8BBE\u7F6E\u5BF9\u5E94\u65B9\u5411\u7684\u6D6E\u52A8\u3002\u4E2D\u95F4\u4E00\u680F\u8BBE\u7F6E\u5DE6\u53F3\u4E24\u4E2A\u65B9\u5411\u7684margin\u503C\uFF0C\u6CE8\u610F\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u4E2D\u95F4\u4E00\u680F\u5FC5\u987B\u653E\u5230\u6700\u540E\u3002

\uFF084\uFF09\u5723\u676F\u5E03\u5C40\uFF0C\u5229\u7528\u6D6E\u52A8\u548C\u8D1F\u8FB9\u8DDD\u6765\u5B9E\u73B0\u3002\u7236\u7EA7\u5143\u7D20\u8BBE\u7F6E\u5DE6\u53F3\u7684padding\uFF0C\u4E09\u5217\u5747\u8BBE\u7F6E\u5411\u5DE6\u6D6E\u52A8\uFF0C\u4E2D\u95F4\u4E00\u5217\u653E\u5728\u6700\u524D\u9762\uFF0C\u5BBD\u5EA6\u8BBE\u7F6E\u4E3A\u7236\u7EA7\u5143\u7D20\u7684\u5BBD\u5EA6\uFF0C\u56E0\u6B64\u540E\u9762\u4E24\u5217\u90FD\u88AB\u6324\u5230\u4E86\u4E0B\u4E00\u884C\uFF0C\u901A\u8FC7\u8BBE\u7F6Emargin\u8D1F\u503C\u5C06\u5176\u79FB\u52A8\u5230\u4E0A\u4E00\u884C\uFF0C\u518D\u5229\u7528\u76F8\u5BF9\u5B9A\u4F4D\uFF0C\u5B9A\u4F4D\u5230\u4E24\u8FB9\u3002\u5723\u676F\u5E03\u5C40\u4E2D\u95F4\u5217\u7684\u5BBD\u5EA6\u4E0D\u80FD\u5C0F\u4E8E\u4E24\u8FB9\u4EFB\u610F\u5217\u7684\u5BBD\u5EA6\uFF0C\u800C\u53CC\u98DE\u7FFC\u5E03\u5C40\u5219\u4E0D\u5B58\u5728\u8FD9\u4E2A\u95EE\u9898\u3002

\uFF085\uFF09\u53CC\u98DE\u7FFC\u5E03\u5C40\uFF0C\u53CC\u98DE\u7FFC\u5E03\u5C40\u76F8\u5BF9\u4E8E\u5723\u676F\u5E03\u5C40\u6765\u8BF4\uFF0C\u5DE6\u53F3\u4F4D\u7F6E\u7684\u4FDD\u7559\u662F\u901A\u8FC7\u4E2D\u95F4\u5217\u7684margin\u503C\u6765\u5B9E\u73B0\u7684\uFF0C\u800C\u4E0D\u662F\u901A\u8FC7\u7236\u5143\u7D20\u7684padding\u6765\u5B9E\u73B0\u7684\u3002\u672C\u8D28\u4E0A\u6765\u8BF4\uFF0C\u4E5F\u662F\u901A\u8FC7\u6D6E\u52A8\u548C\u5916\u8FB9\u8DDD\u8D1F\u503C\u6765\u5B9E\u73B0\u7684\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_102-\u5B9E\u73B0\u4E00\u4E2A\u5BBD\u9AD8\u81EA\u9002\u5E94\u7684\u6B63\u65B9\u5F62" tabindex="-1"><a class="header-anchor" href="#_102-\u5B9E\u73B0\u4E00\u4E2A\u5BBD\u9AD8\u81EA\u9002\u5E94\u7684\u6B63\u65B9\u5F62" aria-hidden="true">#</a> 102.\u5B9E\u73B0\u4E00\u4E2A\u5BBD\u9AD8\u81EA\u9002\u5E94\u7684\u6B63\u65B9\u5F62</h2><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/*1.\u7B2C\u4E00\u79CD\u65B9\u5F0F\u662F\u5229\u7528vw\u6765\u5B9E\u73B0*/</span>
<span class="token selector">.square</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 10%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 10vw<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> tomato<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*2.\u7B2C\u4E8C\u79CD\u65B9\u5F0F\u662F\u5229\u7528\u5143\u7D20\u7684margin/padding\u767E\u5206\u6BD4\u662F\u76F8\u5BF9\u7236\u5143\u7D20width\u7684\u6027\u8D28\u6765\u5B9E\u73B0*/</span>
<span class="token selector">.square</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 20%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding-top</span><span class="token punctuation">:</span> 20%<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*3.\u7B2C\u4E09\u79CD\u65B9\u5F0F\u662F\u5229\u7528\u5B50\u5143\u7D20\u7684margin-top\u7684\u503C\u6765\u5B9E\u73B0\u7684*/</span>
<span class="token selector">.square</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 30%<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.square::after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),Be={href:"http://cavszhouyou.top/Demo-Display/AdaptiveSquare/index.html",target:"_blank",rel:"noopener noreferrer"},qe=a(`<h2 id="_103-\u5B9E\u73B0\u4E00\u4E2A\u4E09\u89D2\u5F62" tabindex="-1"><a class="header-anchor" href="#_103-\u5B9E\u73B0\u4E00\u4E2A\u4E09\u89D2\u5F62" aria-hidden="true">#</a> 103.\u5B9E\u73B0\u4E00\u4E2A\u4E09\u89D2\u5F62</h2><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/*\u4E09\u89D2\u5F62\u7684\u5B9E\u73B0\u539F\u7406\u662F\u5229\u7528\u4E86\u5143\u7D20\u8FB9\u6846\u8FDE\u63A5\u5904\u7684\u7B49\u5206\u539F\u7406\u3002*/</span>
<span class="token selector">.triangle</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">border-width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">border-style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> tomatotransparenttransparenttransparent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Le={href:"http://cavszhouyou.top/Demo-Display/Triangle/index.html",target:"_blank",rel:"noopener noreferrer"},Te=a(`<h2 id="_104-\u4E00\u4E2A\u81EA\u9002\u5E94\u77E9\u5F62-\u6C34\u5E73\u5782\u76F4\u5C45\u4E2D-\u4E14\u5BBD\u9AD8\u6BD4\u4E3A-2-1" tabindex="-1"><a class="header-anchor" href="#_104-\u4E00\u4E2A\u81EA\u9002\u5E94\u77E9\u5F62-\u6C34\u5E73\u5782\u76F4\u5C45\u4E2D-\u4E14\u5BBD\u9AD8\u6BD4\u4E3A-2-1" aria-hidden="true">#</a> 104.\u4E00\u4E2A\u81EA\u9002\u5E94\u77E9\u5F62\uFF0C\u6C34\u5E73\u5782\u76F4\u5C45\u4E2D\uFF0C\u4E14\u5BBD\u9AD8\u6BD4\u4E3A 2:1</h2><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/*\u5B9E\u73B0\u539F\u7406\u53C2\u8003\u81EA\u9002\u5E94\u6B63\u65B9\u5F62\u548C\u6C34\u5E73\u5C45\u4E2D\u65B9\u5F0F*/</span>
<span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>

  <span class="token property">width</span><span class="token punctuation">:</span> 10%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding-top</span><span class="token punctuation">:</span> 20%<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> tomato<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_105-\u4F60\u77E5\u9053-css-\u4E2D\u4E0D\u540C\u5C5E\u6027\u8BBE\u7F6E\u4E3A\u767E\u5206\u6BD4-\u65F6\u5BF9\u5E94\u7684\u8BA1\u7B97\u57FA\u51C6" tabindex="-1"><a class="header-anchor" href="#_105-\u4F60\u77E5\u9053-css-\u4E2D\u4E0D\u540C\u5C5E\u6027\u8BBE\u7F6E\u4E3A\u767E\u5206\u6BD4-\u65F6\u5BF9\u5E94\u7684\u8BA1\u7B97\u57FA\u51C6" aria-hidden="true">#</a> 105.\u4F60\u77E5\u9053 CSS \u4E2D\u4E0D\u540C\u5C5E\u6027\u8BBE\u7F6E\u4E3A\u767E\u5206\u6BD4%\u65F6\u5BF9\u5E94\u7684\u8BA1\u7B97\u57FA\u51C6\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u516C\u5F0F\uFF1A\u5F53\u524D\u5143\u7D20\u67D0CSS\u5C5E\u6027\u503C = \u57FA\u51C6 * \u5BF9\u5E94\u7684\u767E\u5206\u6BD4
\u5143\u7D20\u7684 position \u4E3A relative \u548C absolute \u65F6\uFF0Ctop\u548Cbottom\u3001left\u548Cright\u57FA\u51C6\u5206\u522B\u4E3A\u5305\u542B\u5757\u7684 height\u3001width
\u5143\u7D20\u7684 position \u4E3A fixed \u65F6\uFF0Ctop\u548Cbottom\u3001left\u548Cright\u57FA\u51C6\u5206\u522B\u4E3A\u521D\u59CB\u5305\u542B\u5757\uFF08\u4E5F\u5C31\u662F\u89C6\u53E3\uFF09\u7684 height\u3001width\uFF0C\u79FB\u52A8\u8BBE\u5907\u8F83\u4E3A\u590D\u6742\uFF0C\u57FA\u51C6\u4E3A Layout viewport \u7684 height\u3001width
\u5143\u7D20\u7684 height \u548C width \u8BBE\u7F6E\u4E3A\u767E\u5206\u6BD4\u65F6\uFF0C\u57FA\u51C6\u5206\u522B\u4E3A\u5305\u542B\u5757\u7684 height \u548C width
\u5143\u7D20\u7684 margin \u548C padding \u8BBE\u7F6E\u4E3A\u767E\u5206\u6BD4\u65F6\uFF0C\u57FA\u51C6\u4E3A\u5305\u542B\u5757\u7684 width\uFF08\u6613\u9519\uFF09
\u5143\u7D20\u7684 border-width\uFF0C\u4E0D\u652F\u6301\u767E\u5206\u6BD4
\u5143\u7D20\u7684 text-indent\uFF0C\u57FA\u51C6\u4E3A\u5305\u542B\u5757\u7684 width

\u5143\u7D20\u7684 border-radius\uFF0C\u57FA\u51C6\u4E3A\u5206\u522B\u4E3A\u81EA\u8EAB\u7684height\u3001width
\u5143\u7D20\u7684 background-size\uFF0C\u57FA\u51C6\u4E3A\u5206\u522B\u4E3A\u81EA\u8EAB\u7684height\u3001width
\u5143\u7D20\u7684 translateX\u3001translateY\uFF0C\u57FA\u51C6\u4E3A\u5206\u522B\u4E3A\u81EA\u8EAB\u7684height\u3001width
\u5143\u7D20\u7684 line-height\uFF0C\u57FA\u51C6\u4E3A\u81EA\u8EAB\u7684 font-size

\u5143\u7D20\u7684 font-size\uFF0C\u57FA\u51C6\u4E3A\u7236\u5143\u7D20\u5B57\u4F53
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function We(De,Ne){const s=t("ExternalLinkIcon");return d(),r("div",null,[o,n("p",null,[e("\u8BE6\u7EC6\u7684\u8D44\u6599\u53EF\u4EE5\u53C2\u8003\uFF1A "),n("a",p,[e("\u300ACSS \u76D2\u6A21\u578B\u8BE6\u89E3\u300B"),i(s)])]),u,n("p",null,[e("\u8BE6\u7EC6\u8D44\u6599\u53EF\u4EE5\u53C2\u8003\uFF1A "),n("a",v,[e("\u300A\u603B\u7ED3\u4F2A\u7C7B\u4E0E\u4F2A\u5143\u7D20\u300B"),i(s)])]),m,n("p",null,[e("\u8BE6\u7EC6\u7684\u8D44\u6599\u53EF\u4EE5\u53C2\u8003\uFF1A "),n("a",b,[e("\u300A\u7EE7\u627F\u5C5E\u6027\u300B"),i(s)]),n("a",h,[e("\u300ACSS \u6709\u54EA\u4E9B\u5C5E\u6027\u53EF\u4EE5\u7EE7\u627F\uFF1F\u300B"),i(s)])]),k,n("p",null,[e("\u5BF9\u4E8E\u7EC4\u5408\u58F0\u660E\u7684\u7279\u6B8A\u6027\u503C\u8BA1\u7B97\u53EF\u4EE5\u53C2\u8003\uFF1A "),n("a",g,[e("\u300ACSS \u4F18\u5148\u7EA7\u8BA1\u7B97\u53CA\u5E94\u7528\u300B"),i(s)]),n("a",x,[e("\u300ACSS \u4F18\u5148\u7EA7\u8BA1\u7B97\u89C4\u5219\u300B"),i(s)]),n("a",f,[e("\u300A\u6709\u8DA3\uFF1A256 \u4E2A class \u9009\u62E9\u5668\u53EF\u4EE5\u5E72\u6389 1 \u4E2A id \u9009\u62E9\u5668\u300B"),i(s)])]),_,n("p",null,[e("\u8BE6\u7EC6\u7684\u8D44\u6599\u53EF\u4EE5\u53C2\u8003\uFF1A "),n("a",y,[e("\u300ACSS3 \u65B0\u7279\u6027\u603B\u7ED3(\u4F2A\u7C7B)\u300B"),i(s)]),n("a",w,[e("\u300A\u6D45\u8C08 CSS \u4F2A\u7C7B\u548C\u4F2A\u5143\u7D20\u53CA CSS3 \u65B0\u589E\u4F2A\u7C7B\u300B"),i(s)])]),S,n("p",null,[e("\u8BE6\u7EC6\u8D44\u6599\u53EF\u4EE5\u53C2\u8003\uFF1A "),n("a",C,[e("\u300ACSS display \u5C5E\u6027\u300B"),i(s)])]),E,n("p",null,[e("\u8BE6\u7EC6\u8D44\u6599\u53EF\u4EE5\u53C2\u8003\uFF1A "),n("a",I,[e("\u300AFlex \u5E03\u5C40\u6559\u7A0B\uFF1A\u8BED\u6CD5\u7BC7\u300B"),i(s)]),n("a",F,[e("\u300AFlex \u5E03\u5C40\u6559\u7A0B\uFF1A\u5B9E\u4F8B\u7BC7\u300B"),i(s)])]),z,n("p",null,[e("\u8BE6\u7EC6\u8D44\u6599\u53EF\u4EE5\u53C2\u8003\uFF1A "),n("a",P,[e("\u300A\u524D\u7AEF\u5E94\u8BE5\u638C\u63E1\u7684 CSS \u5B9E\u73B0\u591A\u5217\u7B49\u9AD8\u5E03\u5C40\u300B"),i(s)]),n("a",j,[e("\u300ACSS\uFF1A\u591A\u5217\u7B49\u9AD8\u5E03\u5C40\u300B"),i(s)])]),G,n("p",null,[e("\u8BE6\u7EC6\u8D44\u6599\u53EF\u4EE5\u53C2\u8003\uFF1A "),n("a",B,[e("\u300Ali \u4E0E li \u4E4B\u95F4\u6709\u770B\u4E0D\u89C1\u7684\u7A7A\u767D\u95F4\u9694\u662F\u4EC0\u4E48\u539F\u56E0\u5F15\u8D77\u7684\uFF1F\u300B"),i(s)])]),q,n("p",null,[e("\u8BE6\u7EC6\u8D44\u6599\u53EF\u4EE5\u53C2\u8003\uFF1A "),n("a",L,[e("\u300ACSS \u91CC\u7684 visibility \u5C5E\u6027\u6709\u4E2A\u9C9C\u4E3A\u4EBA\u77E5\u7684\u5C5E\u6027\u503C\uFF1Acollapse\u300B"),i(s)])]),T,n("p",null,[e("\u8BE6\u7EC6\u8D44\u6599\u53EF\u4EE5\u53C2\u8003\uFF1A "),n("a",W,[e("\u300A\u73A9\u8F6C\u56FE\u7247 base64 \u7F16\u7801\u300B"),i(s)]),n("a",D,[e("\u300A\u524D\u7AEF\u5F00\u53D1\u4E2D\uFF0C\u4F7F\u7528 base64 \u56FE\u7247\u7684\u5F0A\u7AEF\u662F\u4EC0\u4E48\uFF1F\u300B"),i(s)]),n("a",N,[e("\u300A\u5C0F tip:base64:URL \u80CC\u666F\u56FE\u7247\u4E0E web \u9875\u9762\u6027\u80FD\u4F18\u5316\u300B"),i(s)])]),H,n("p",null,[e("\u8BE6\u7EC6\u8D44\u6599\u53EF\u4EE5\u53C2\u8003\uFF1A "),n("a",M,[e("\u300Aposition \u8DDF display\u3001margincollapse\u3001overflow\u3001float \u8FD9\u4E9B\u7279\u6027\u76F8\u4E92\u53E0\u52A0\u540E\u4F1A\u600E\u4E48\u6837\uFF1F\u300B"),i(s)])]),A,n("p",null,[e("\u8BE6\u7EC6\u8D44\u6599\u53EF\u4EE5\u53C2\u8003\uFF1A "),n("a",V,[e("\u300A\u6DF1\u5165\u7406\u89E3 BFC \u548C MarginCollapse\u300B"),i(s)]),n("a",O,[e("\u300A\u524D\u7AEF\u9762\u8BD5\u9898-BFC\uFF08\u5757\u683C\u5F0F\u5316\u4E0A\u4E0B\u6587\uFF09\u300B"),i(s)])]),J,n("p",null,[e("\u8BE6\u7EC6\u8D44\u6599\u53EF\u4EE5\u53C2\u8003\uFF1A "),n("a",R,[e("\u300A[\u8BD1]:BFC \u4E0E IFC\u300B"),i(s)]),n("a",U,[e("\u300ABFC \u548C IFC \u7684\u7406\u89E3\uFF08\u5E03\u5C40\uFF09\u300B"),i(s)])]),Y,n("p",null,[e("\u8BE6\u7EC6\u8D44\u6599\u53EF\u4EE5\u53C2\u8003\uFF1A "),n("a",X,[e("\u300ACSS3@media \u67E5\u8BE2\u300B"),i(s)]),n("a",K,[e("\u300A\u54CD\u5E94\u5F0F\u5E03\u5C40\u548C\u81EA\u9002\u5E94\u5E03\u5C40\u8BE6\u89E3\u300B"),i(s)])]),Z,n("p",null,[e("\u8BE6\u7EC6\u8D44\u6599\u53EF\u4EE5\u53C2\u8003\uFF1A "),n("a",Q,[e("\u300ACSS \u4F18\u5316\u3001\u63D0\u9AD8\u6027\u80FD\u7684\u65B9\u6CD5\u6709\u54EA\u4E9B\uFF1F\u300B"),i(s)]),n("a",$,[e("\u300ACSS \u4F18\u5316\uFF0C\u63D0\u9AD8\u6027\u80FD\u7684\u65B9\u6CD5\u300B"),i(s)])]),nn,n("p",null,[e("\u8BE6\u7EC6\u8D44\u6599\u53EF\u4EE5\u53C2\u8003\uFF1A "),n("a",en,[e("\u300A\u63A2\u7A76 CSS \u89E3\u6790\u539F\u7406\u300B"),i(s)])]),sn,n("p",null,[e("\u8BE6\u7EC6\u8D44\u6599\u53EF\u4EE5\u53C2\u8003\uFF1A "),n("a",an,[e("\u300A\u8C08\u8C08\u7F51\u9875\u4E2D\u4F7F\u7528\u5947\u6570\u5B57\u4F53\u548C\u5076\u6570\u5B57\u4F53\u300B"),i(s)]),n("a",ln,[e("\u300A\u73B0\u5728\u7F51\u9875\u8BBE\u8BA1\u4E2D\u7684\u4E3A\u4EC0\u4E48\u5C11\u6709\u4EBA\u7528 11px\u300113px\u300115px \u7B49\u5947\u6570\u7684\u5B57\u4F53\uFF1F\u300B"),i(s)])]),tn,n("p",null,[e("\u8BE6\u7EC6\u8D44\u6599\u53EF\u4EE5\u53C2\u8003\uFF1A "),n("a",dn,[e("\u300ACSS \u89C4\u8303-\u5206\u7C7B\u65B9\u6CD5\u300B"),i(s)])]),rn,n("p",null,[e("\u8BE6\u7EC6\u8D44\u6599\u53EF\u4EE5\u53C2\u8003\uFF1A "),n("a",cn,[e("\u300A\u7B80\u5355\u4E86\u89E3 CSS3 \u7684 all \u5C5E\u6027\u300B"),i(s)])]),on,n("p",null,[e("\u8BE6\u7EC6\u8D44\u6599\u53EF\u4EE5\u53C2\u8003\uFF1A "),n("a",pn,[e("\u300ACSS \u57FA\u7840\u7BC7--CSS \u4E2D IE \u6D4F\u89C8\u5668\u7684 hasLayout\uFF0CIE \u4F4E\u7248\u672C\u7684 bug \u6839\u6E90\u300B"),i(s)]),n("a",un,[e("\u300ACSS \u9B54\u6CD5\u5802\uFF1AhasLayout \u539F\u6765\u662F\u8FD9\u6837\u7684\uFF01\u300B"),i(s)])]),vn,n("p",null,[e("\u8BE6\u7EC6\u8D44\u6599\u53EF\u4EE5\u53C2\u8003\uFF1A "),n("a",mn,[e("\u300Ajs \u5B9E\u73B0\u7F51\u9875\u5168\u5C4F\u5207\u6362\uFF08\u5E73\u6ED1\u8FC7\u6E21\uFF09\uFF0C\u9F20\u6807\u6EDA\u52A8\u5207\u6362\u300B"),i(s)]),n("a",bn,[e("\u300A\u7528 ES6 \u5199\u5168\u5C4F\u6EDA\u52A8\u63D2\u4EF6\u300B"),i(s)])]),hn,n("p",null,[e("\u8BE6\u7EC6\u8D44\u6599\u53EF\u4EE5\u53C2\u8003\uFF1A "),n("a",kn,[e("\u300A\u54CD\u5E94\u5F0F\u5E03\u5C40\u539F\u7406\u300B"),i(s)]),n("a",gn,[e("\u300A\u54CD\u5E94\u5F0F\u5E03\u5C40\u7684\u5B9E\u73B0\u65B9\u6CD5\u548C\u539F\u7406\u300B"),i(s)])]),xn,n("p",null,[e("\u8BE6\u7EC6\u8D44\u6599\u53EF\u4EE5\u53C2\u8003\uFF1A "),n("a",fn,[e("\u300A\u5982\u4F55\u5B9E\u73B0\u89C6\u5DEE\u6EDA\u52A8\u6548\u679C\u7684\u7F51\u9875\uFF1F\u300B"),i(s)])]),_n,n("p",null,[e("\u8BE6\u7EC6\u8D44\u6599\u53EF\u4EE5\u53C2\u8003\uFF1A "),n("a",yn,[e("\u300A\u53BB\u6389 chrome \u8BB0\u4F4F\u5BC6\u7801\u540E\u7684\u9ED8\u8BA4\u586B\u5145\u6837\u5F0F\u300B"),i(s)]),n("a",wn,[e("\u300A\u4FEE\u6539\u8C37\u6B4C\u6D4F\u89C8\u5668 chrome \u8BB0\u4F4F\u5BC6\u7801\u540E\u81EA\u52A8\u586B\u5145\u8868\u5355\u7684\u9EC4\u8272\u80CC\u666F\u300B"),i(s)])]),Sn,n("p",null,[e("\u8BE6\u7EC6\u8D44\u6599\u53EF\u4EE5\u53C2\u8003\uFF1A "),n("a",Cn,[e("\u300A\u8C37\u6B4C\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 CSS \u8BBE\u7F6E\u5C0F\u4E8E 12px \u7684\u6587\u5B57\u600E\u4E48\u529E\uFF1F\u300B"),i(s)])]),En,n("p",null,[e("\u8BE6\u7EC6\u8D44\u6599\u53EF\u4EE5\u53C2\u8003\uFF1A "),n("a",In,[e("\u300A\u8BA9\u5B57\u4F53\u53D8\u7684\u66F4\u6E05\u6670 CSS \u4E2D-webkit-font-smoothing\u300B"),i(s)])]),Fn,n("p",null,[e("\u8BE6\u7EC6\u8D44\u6599\u53EF\u4EE5\u53C2\u8003\uFF1A "),n("a",zn,[e("\u300A\u4EC0\u4E48\u662F\u7269\u7406\u50CF\u7D20\u3001\u865A\u62DF\u50CF\u7D20\u3001\u903B\u8F91\u50CF\u7D20\u3001\u8BBE\u5907\u50CF\u7D20\uFF0C\u4EC0\u4E48\u53C8\u662F PPI,DPI,DPR \u548C DIP\u300B"),i(s)]),n("a",Pn,[e("\u300A\u524D\u7AEF\u5DE5\u7A0B\u5E08\u9700\u8981\u660E\u767D\u7684\u300C\u50CF\u7D20\u300D\u300B"),i(s)]),n("a",jn,[e("\u300ACSS \u50CF\u7D20\u3001\u7269\u7406\u50CF\u7D20\u3001\u903B\u8F91\u50CF\u7D20\u3001\u8BBE\u5907\u50CF\u7D20\u6BD4\u3001PPI\u3001Viewport\u300B"),i(s)]),n("a",Gn,[e("\u300A\u524D\u7AEF\u5F00\u53D1\u4E2D\u50CF\u7D20\u7684\u6982\u5FF5\u300B"),i(s)])]),Bn,n("p",null,[e("\u8BE6\u7EC6\u8D44\u6599\u53EF\u4EE5\u53C2\u8003\uFF1A "),n("a",qn,[e("\u300A\u79FB\u52A8\u524D\u7AEF\u5F00\u53D1\u4E4B viewport \u7684\u6DF1\u5165\u7406\u89E3\u300B"),i(s)]),n("a",Ln,[e("\u300A\u8BF4\u8BF4\u79FB\u52A8\u524D\u7AEF\u4E2D viewport\uFF08\u89C6\u53E3\uFF09\u300B"),i(s)]),n("a",Tn,[e("\u300A\u79FB\u52A8\u7AEF\u9002\u914D\u77E5\u8BC6\u4F60\u5230\u5E95\u77E5\u591A\u5C11\u300B"),i(s)])]),Wn,n("p",null,[e("\u8BE6\u7EC6\u8D44\u6599\u53EF\u4EE5\u53C2\u8003\uFF1A "),n("a",Dn,[e("\u300A\u53BB\u9664 inline-block \u5143\u7D20\u95F4\u95F4\u8DDD\u7684 N \u79CD\u65B9\u6CD5\u300B"),i(s)])]),Nn,n("p",null,[e("\u8BE6\u7EC6\u8D44\u6599\u53EF\u4EE5\u53C2\u8003\uFF1A "),n("a",Hn,[e("\u300A\u89E3\u51B3\u9875\u9762\u4F7F\u7528 overflow:scroll \u5728 iOS \u4E0A\u6ED1\u52A8\u5361\u987F\u7684\u95EE\u9898\u300B"),i(s)])]),Mn,n("p",null,[e("\u8BE6\u7EC6\u8D44\u6599\u53EF\u4EE5\u53C2\u8003\uFF1A "),n("a",An,[e("\u300A\u6709\u4E00\u4E2A\u9AD8\u5EA6\u81EA\u9002\u5E94\u7684 div\uFF0C\u91CC\u9762\u6709\u4E24\u4E2A div\uFF0C\u4E00\u4E2A\u9AD8\u5EA6 100px\uFF0C\u5E0C\u671B\u53E6\u4E00\u4E2A\u586B\u6EE1\u5269\u4E0B\u7684\u9AD8\u5EA6(\u4E09\u79CD\u65B9\u6848)\u300B"),i(s)])]),Vn,n("p",null,[e("\u8BE6\u7EC6\u8D44\u6599\u53EF\u4EE5\u53C2\u8003\uFF1A "),n("a",On,[e("\u300A\u56FE\u7247\u683C\u5F0F\u90A3\u4E48\u591A\uFF0C\u54EA\u79CD\u66F4\u9002\u5408\u4F60\uFF1F\u300B"),i(s)])]),Jn,n("p",null,[e("\u8BE6\u7EC6\u8D44\u6599\u53EF\u4EE5\u53C2\u8003\uFF1A "),n("a",Rn,[e("\u300A\u5224\u65AD\u6D4F\u89C8\u5668\u662F\u5426\u652F\u6301 WebP \u56FE\u7247\u300B"),i(s)]),n("a",Un,[e("\u300AtoDataURL()\u300B"),i(s)])]),Yn,n("p",null,[e("\u8BE6\u7EC6\u8D44\u6599\u53EF\u4EE5\u53C2\u8003\uFF1A "),n("a",Xn,[e("\u300ACDN \u662F\u4EC0\u4E48\uFF1F\u4F7F\u7528 CDN \u6709\u4EC0\u4E48\u4F18\u52BF\uFF1F\u300B"),i(s)])]),Kn,n("p",null,[e("\u8BE6\u7EC6\u8D44\u6599\u53EF\u4EE5\u53C2\u8003\uFF1A "),n("a",Zn,[e("\u300ACSS \u9884\u5904\u7406\u5668\u548C\u540E\u5904\u7406\u5668\u300B"),i(s)])]),Qn,n("p",null,[e("\u8BE6\u7EC6\u8D44\u6599\u53EF\u4EE5\u53C2\u8003\uFF1A "),n("a",$n,[e("\u300Acss3 \u7684\u5B57\u4F53\u5927\u5C0F\u5355\u4F4D rem \u5230\u5E95\u597D\u5728\u54EA\uFF1F\u300B"),i(s)]),n("a",ne,[e("\u300AVW:\u662F\u65F6\u5019\u653E\u5F03 REM \u5E03\u5C40\u4E86\u300B"),i(s)]),n("a",ee,[e("\u300A\u4E3A\u4EC0\u4E48\u8BBE\u8BA1\u7A3F\u662F 750px\u300B"),i(s)]),n("a",se,[e("\u300A\u4F7F\u7528 Flexible \u5B9E\u73B0\u624B\u6DD8 H5 \u9875\u9762\u7684\u7EC8\u7AEF\u9002\u914D\u300B"),i(s)])]),ie,n("p",null,[e("\u8BE6\u7EC6\u7684\u8D44\u6599\u53EF\u4EE5\u53C2\u8003\uFF1A "),n("a",ae,[e("\u300A\u51E0\u79CD\u5E38\u89C1\u7684 CSS \u5E03\u5C40\u300B"),i(s)])]),le,n("p",null,[e("\u8BE6\u7EC6\u8D44\u6599\u53EF\u4EE5\u53C2\u8003\uFF1A "),n("a",te,[e("\u300A\u600E\u4E48\u753B\u4E00\u6761 0.5px \u7684\u8FB9\uFF08\u66F4\u65B0\uFF09\u300B"),i(s)])]),de,n("p",null,[e("\u8BE6\u7EC6\u8D44\u6599\u53EF\u4EE5\u53C2\u8003\uFF1A "),n("a",re,[e("\u300ACSSanimation \u4E0E CSStransition \u6709\u4F55\u533A\u522B\uFF1F\u300B"),i(s)]),n("a",ce,[e("\u300ACSS3Transition \u548C Animation \u533A\u522B\u53CA\u6BD4\u8F83\u300B"),i(s)]),n("a",oe,[e("\u300ACSS \u52A8\u753B\u7B80\u4ECB\u300B"),i(s)]),n("a",pe,[e("\u300ACSS \u52A8\u753B\uFF1Aanimation\u3001transition\u3001transform\u3001translate\u300B"),i(s)])]),ue,n("p",null,[e("\u8BE6\u7EC6\u8D44\u6599\u53EF\u4EE5\u53C2\u8003\uFF1A "),n("a",ve,[e("\u300ACSS \u63A7\u5236\u524D\u7AEF\u56FE\u7247 HTTP \u8BF7\u6C42\u7684\u5404\u79CD\u60C5\u51B5\u793A\u4F8B\u300B"),i(s)])]),me,n("p",null,[e("\u8BE6\u7EC6\u8D44\u6599\u53EF\u4EE5\u53C2\u8003\uFF1A "),n("a",be,[e("\u300A\u3010CSS/JS\u3011\u5982\u4F55\u5B9E\u73B0\u5355\u884C\uFF0F\u591A\u884C\u6587\u672C\u6EA2\u51FA\u7684\u7701\u7565\u300B"),i(s)]),n("a",he,[e("\u300ACSS \u591A\u884C\u6587\u672C\u6EA2\u51FA\u7701\u7565\u663E\u793A\u300B"),i(s)])]),ke,ge,xe,fe,_e,ye,we,Se,n("p",null,[e("\u8BE6\u7EC6\u8D44\u6599\u53EF\u4EE5\u53C2\u8003\uFF1A "),n("a",Ce,[e("\u300ACSS \u9690\u85CF\u5143\u7D20\u7684\u516B\u79CD\u65B9\u6CD5\u300B"),i(s)])]),Ee,n("p",null,[e("\u8BE6\u7EC6\u8D44\u6599\u53EF\u4EE5\u53C2\u8003\uFF1A "),n("a",Ie,[e("\u300Acss \u5B9E\u73B0\u4E0A\u4E0B\u56FA\u5B9A\u4E2D\u95F4\u81EA\u9002\u5E94\u5E03\u5C40\u300B"),i(s)])]),Fe,n("p",null,[n("a",ze,[e("\u300A\u4E24\u680F\u5E03\u5C40 demo \u5C55\u793A\u300B"),i(s)])]),Pe,n("p",null,[n("a",je,[e("\u300A\u4E09\u680F\u5E03\u5C40 demo \u5C55\u793A\u300B"),i(s)])]),Ge,n("p",null,[n("a",Be,[e("\u300A\u81EA\u9002\u5E94\u6B63\u65B9\u5F62 demo \u5C55\u793A\u300B"),i(s)])]),qe,n("p",null,[n("a",Le,[e("\u300A\u4E09\u89D2\u5F62 demo \u5C55\u793A\u300B"),i(s)])]),Te])}const Me=l(c,[["render",We],["__file","03.html.vue"]]);export{Me as default};
