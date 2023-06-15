import{_ as e,r as i,o as t,c as l,b as n,d as s,e as o,a as p}from"./app.fe9eae39.js";const c={},r={id:"git",tabindex:"-1"},d=n("a",{class:"header-anchor",href:"#git","aria-hidden":"true"},"#",-1),m={href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"},v=p(`<p>\u7248\u672C\u63A7\u5236\u7CFB\u7EDF</p><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><p>Git\u7684\u8BBE\u7F6E\u6587\u4EF6\u4E3A.gitconfig\uFF0C\u5B83\u53EF\u4EE5\u5728\u7528\u6237\u4E3B\u76EE\u5F55\u4E0B\uFF08\u5168\u5C40\u914D\u7F6E\uFF09\uFF0C\u4E5F\u53EF\u4EE5\u5728\u9879\u76EE\u76EE\u5F55\u4E0B\uFF08\u9879\u76EE\u914D\u7F6E\uFF09\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5F53\u524D\u7684git\u914D\u7F6E</span>
<span class="token function">git</span> config <span class="token parameter variable">--list</span>

<span class="token comment"># \u7F16\u8F91git\u914D\u7F6E\u6587\u4EF6</span>
<span class="token function">git</span> config <span class="token parameter variable">-e</span> <span class="token punctuation">[</span>--global<span class="token punctuation">]</span>

<span class="token comment"># \u8BBE\u7F6E\u63D0\u4EA4\u4EE3\u7801\u65F6\u7684\u7528\u6237\u4FE1\u606F</span>
<span class="token function">git</span> config <span class="token punctuation">[</span>--global<span class="token punctuation">]</span> user.name <span class="token string">&#39;&lt;name&gt;&#39;</span>
<span class="token function">git</span> config <span class="token punctuation">[</span>--global<span class="token punctuation">]</span> user.email <span class="token string">&#39;&lt;email address&gt;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u65B0\u5EFA\u62C9\u53D6\u4EE3\u7801\u5E93" tabindex="-1"><a class="header-anchor" href="#\u65B0\u5EFA\u62C9\u53D6\u4EE3\u7801\u5E93" aria-hidden="true">#</a> \u65B0\u5EFA\u62C9\u53D6\u4EE3\u7801\u5E93</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5728\u5F53\u524D\u76EE\u5F55\u65B0\u5EFAgit\u4EE3\u7801\u5E93</span>
<span class="token function">git</span> init

<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2A\u76EE\u5F55\uFF0C\u5C06\u5176\u521D\u59CB\u5316\u4E3Agit\u4EE3\u7801\u5E93</span>
<span class="token function">git</span> init <span class="token operator">&lt;</span>project-name<span class="token operator">&gt;</span>

<span class="token comment"># \u4E0B\u8F7D\u4E00\u4E2A\u9879\u76EE\u548C\u5B83\u7684\u6574\u4E2A\u4EE3\u7801\u5386\u53F2</span>
<span class="token function">git</span> clone <span class="token operator">&lt;</span>url<span class="token operator">&gt;</span>

<span class="token comment"># \u53EA\u4E0B\u8F7D\u8FDC\u7A0B\u5355\u4E2A\u5206\u652F\u7684\u6700\u65B0\u4E00\u6B21\u63D0\u4EA4</span>
<span class="token function">git</span> clone <span class="token parameter variable">-b</span> <span class="token operator">&lt;</span>branch-name<span class="token operator">&gt;</span> <span class="token parameter variable">--depth</span> <span class="token number">1</span> <span class="token operator">&lt;</span>url<span class="token operator">&gt;</span> <span class="token comment"># branch-name\u4E5F\u53EF\u4EE5\u66FF\u6362tag\uFF0C\u53EA\u4E0B\u8F7Dtag</span>

<span class="token comment"># \u4E0B\u8F7D\u8FDC\u7A0B\u5206\u652F\u5230\u672C\u5730</span>
<span class="token function">git</span> fetch origin dev <span class="token comment"># dev\u4E3A\u8FDC\u7A0B\u4ED3\u5E93\u7684\u5206\u652F\u540D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5FFD\u7565\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5FFD\u7565\u6587\u4EF6" aria-hidden="true">#</a> \u5FFD\u7565\u6587\u4EF6</h2><ul><li>.gitignore\u7528\u4E8E\u5B9A\u4E49\u5FFD\u7565\u63D0\u4EA4\u7684\u6587\u4EF6 <ul><li>\u6240\u6709\u7A7A\u884C\u6216\u8005\u4EE5\u6CE8\u91CA\u7B26\u53F7 \uFF03 \u5F00\u5934\u7684\u884C\u90FD\u4F1A\u88AB Git \u5FFD\u7565\u3002</li><li>\u5339\u914D\u6A21\u5F0F\u6700\u540E\u8DDF\u53CD\u659C\u6760\uFF08/\uFF09\u8BF4\u660E\u8981\u5FFD\u7565\u7684\u662F\u76EE\u5F55\u3002</li><li>\u53EF\u4EE5\u4F7F\u7528\u6807\u51C6\u7684 glob \u6A21\u5F0F\u5339\u914D\u3002</li></ul></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.idea
/vendor
.env
/node_modules
/public/storage
*.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u589E\u52A0-\u5220\u9664-\u4FEE\u6539\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u589E\u52A0-\u5220\u9664-\u4FEE\u6539\u6587\u4EF6" aria-hidden="true">#</a> \u589E\u52A0/\u5220\u9664/\u4FEE\u6539\u6587\u4EF6</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u72B6\u6001</span>
<span class="token function">git</span> status

<span class="token comment"># \u67E5\u770B\u53D8\u66F4\u5185\u5BB9</span>
<span class="token function">git</span> <span class="token function">diff</span>

<span class="token comment"># \u6DFB\u52A0\u6307\u5B9A\u6587\u4EF6\u5230\u6682\u5B58\u533A</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token operator">&lt;</span>file<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span> <span class="token operator">&lt;</span>file<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> <span class="token punctuation">..</span>.

<span class="token comment"># \u6DFB\u52A0\u6307\u5B9A\u76EE\u5F55\u5230\u6682\u5B58\u533A\uFF0C\u5305\u542B\u5B50\u76EE\u5F55</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token operator">&lt;</span>dir<span class="token operator">&gt;</span>

<span class="token comment"># \u6DFB\u52A0\u5F53\u524D\u76EE\u5F55\u7684\u6240\u6709\u6587\u4EF6\u5230\u6682\u5B58\u533A</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>

<span class="token comment"># \u6DFB\u52A0\u6BCF\u4E2A\u53D8\u5316\u524D\uFF0C\u90FD\u4F1A\u8981\u6C42\u786E\u8BA4</span>
<span class="token comment"># \u5BF9\u4E8E\u540C\u4E00\u4E2A\u6587\u4EF6\u591A\u5904\u53D8\u5316\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u5206\u6B21\u63D0\u4EA4</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-p</span>

<span class="token comment"># \u5220\u9664\u5DE5\u4F5C\u53D6\u6587\u4EF6\uFF0C\u5E76\u4E14\u5C06\u8FD9\u6B21\u5220\u9664\u653E\u5165\u6682\u5B58\u533A</span>
<span class="token function">git</span> <span class="token function">rm</span> <span class="token operator">&lt;</span>file<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span> <span class="token operator">&lt;</span>file<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> <span class="token punctuation">..</span>.

<span class="token comment"># \u505C\u6B62\u8FFD\u8E2A\u6307\u5B9A\u6587\u4EF6\uFF0C\u4F46\u8BE5\u6587\u4EF6\u4F1A\u4FDD\u7559\u5728\u5DE5\u4F5C\u533A</span>
<span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">--cached</span> <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>

<span class="token comment"># \u6539\u6587\u4EF6\u540D\uFF0C\u5E76\u4E14\u5C06\u8FD9\u4E2A\u6539\u540D\u653E\u5165\u6682\u5B58\u533A</span>
<span class="token function">git</span> <span class="token function">mv</span> <span class="token operator">&lt;</span>file-original<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>file-renamed<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4EE3\u7801\u63D0\u4EA4" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u63D0\u4EA4" aria-hidden="true">#</a> \u4EE3\u7801\u63D0\u4EA4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u63D0\u4EA4\u6682\u5B58\u533A\u5230\u4ED3\u5E93\u533A</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token operator">&lt;</span>message<span class="token operator">&gt;</span>

<span class="token comment"># \u63D0\u4EA4\u6682\u5B58\u533A\u6307\u5B9A\u6587\u4EF6\u5230\u4ED3\u5E93\u533A</span>
<span class="token function">git</span> commit <span class="token operator">&lt;</span>file<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span> <span class="token operator">&lt;</span>file<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> <span class="token punctuation">..</span>. <span class="token parameter variable">-m</span> <span class="token operator">&lt;</span>message<span class="token operator">&gt;</span>

<span class="token comment"># \u63D0\u4EA4\u5DE5\u4F5C\u533A\u4E0A\u6B21commit\u4E4B\u540E\u7684\u53D8\u5316\uFF0C\u76F4\u63A5\u5230\u4ED3\u5E93\u533A</span>
<span class="token function">git</span> commit <span class="token parameter variable">-a</span>

<span class="token comment"># \u63D0\u4EA4\u65F6\u663E\u793A\u6240\u6709diff\u4FE1\u606F</span>
<span class="token function">git</span> commit <span class="token parameter variable">-v</span>

<span class="token comment"># \u4F7F\u7528\u4E00\u6B21\u65B0\u7684commit\uFF0C\u66FF\u4EE3\u4E0A\u4E00\u6B21\u63D0\u4EA4</span>
<span class="token comment"># \u5982\u679C\u4EE3\u7801\u6CA1\u6709\u4EFB\u4F55\u65B0\u53D8\u5316\uFF0C\u5219\u7528\u6765\u4FEE\u6539\u4E0A\u4E00\u6B21commit\u63D0\u4EA4\u4FE1\u606F</span>
<span class="token function">git</span> commit <span class="token parameter variable">--amend</span> <span class="token parameter variable">-m</span> <span class="token operator">&lt;</span>message<span class="token operator">&gt;</span>

<span class="token comment"># \u91CD\u505A\u4E0A\u4E00\u6B21commit\uFF0C\u5E76\u5305\u62EC\u6307\u5B9A\u6587\u4EF6\u7684\u65B0\u53D8\u5316</span>
<span class="token function">git</span> commit <span class="token parameter variable">--amend</span> <span class="token operator">&lt;</span>file<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span> <span class="token operator">&lt;</span>file<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u5206\u652F" aria-hidden="true">#</a> \u5206\u652F</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u663E\u793A\u6240\u6709\u672C\u5730\u5206\u652F</span>
<span class="token function">git</span> branch

<span class="token comment"># \u663E\u793A\u6240\u6709\u8FDC\u7A0B\u5206\u652F</span>
<span class="token function">git</span> branch <span class="token parameter variable">-r</span>

<span class="token comment"># \u5217\u51FA\u6240\u6709\u672C\u5730\u548C\u8FDC\u7A0B\u5206\u652F</span>
<span class="token function">git</span> branch <span class="token parameter variable">-a</span>

<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2A\u5206\u652F\uFF0C\u4F46\u4F9D\u7136\u505C\u7559\u5728\u5F53\u524D\u5206\u652F</span>
<span class="token function">git</span> branch <span class="token operator">&lt;</span>branch-name<span class="token operator">&gt;</span>

<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2A\u5206\u652F\uFF0C\u4E0E\u6307\u5B9A\u7684\u8FDC\u7A0B\u5206\u652F\u5EFA\u7ACB\u8FFD\u8E2A\u5173\u7CFB</span>
<span class="token function">git</span> branch <span class="token parameter variable">--trach</span> <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>remote-branch<span class="token operator">&gt;</span>

<span class="token comment"># \u5220\u9664\u5206\u652F</span>
<span class="token function">git</span> branch <span class="token parameter variable">-d</span> <span class="token operator">&lt;</span>branch-name<span class="token operator">&gt;</span>

<span class="token comment"># \u5220\u9664\u8FDC\u7A0B\u5206\u652F</span>
<span class="token function">git</span> push origin <span class="token parameter variable">--delete</span> <span class="token operator">&lt;</span>branch-name<span class="token operator">&gt;</span>
<span class="token function">git</span> branch <span class="token parameter variable">-dr</span> <span class="token operator">&lt;</span>remote/branch<span class="token operator">&gt;</span>

<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2A\u5206\u652F\u5E76\u5207\u6362\u5230\u8BE5\u5206\u652F</span>
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span>

<span class="token comment"># \u5207\u6362\u5230\u6307\u5B9A\u5206\u652F\u5E76\u66F4\u65B0\u5DE5\u4F5C\u533A</span>
<span class="token function">git</span> checkout <span class="token operator">&lt;</span>branch-name<span class="token operator">&gt;</span>

<span class="token comment"># \u5207\u6362\u5230\u4E0A\u4E00\u4E2A\u5206\u652F</span>
<span class="token function">git</span> checkout -

<span class="token comment"># \u5EFA\u7ACB\u8FFD\u8E2A\u5173\u7CFB\uFF0C\u5728\u73B0\u6709\u5206\u652F\u4E0E\u6307\u5B9A\u7684\u8FDC\u7A0B\u5206\u652F\u4E4B\u95F4</span>
<span class="token function">git</span> branch --set-upstream <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>remote-branch<span class="token operator">&gt;</span>

<span class="token comment"># \u5408\u5E76\u6307\u5B9A\u5206\u652F\u5230\u5F53\u524D\u5206\u652F</span>
<span class="token function">git</span> merge <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span>

<span class="token comment"># \u884D\u5408\u6307\u5B9A\u5206\u652F\u5230\u5F53\u524D\u5206\u652F</span>
<span class="token function">git</span> rebase <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span>

<span class="token comment"># \u9009\u62E9\u4E00\u4E2Acommit\u5408\u5E76\u8FDB\u5F53\u524D\u5206\u652F</span>
<span class="token function">git</span> cherry-pick <span class="token operator">&lt;</span>commit<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#\u6807\u7B7E" aria-hidden="true">#</a> \u6807\u7B7E</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u672C\u5730\u6240\u6709\u6807\u7B7E</span>
<span class="token function">git</span> tag

<span class="token comment"># \u65B0\u5EFA\u6807\u7B7E\u57FA\u4E8E\u6700\u65B0\u63D0\u4EA4</span>
<span class="token function">git</span> tag <span class="token operator">&lt;</span>tagname<span class="token operator">&gt;</span>

<span class="token comment"># \u5220\u9664\u6807\u7B7E</span>
<span class="token function">git</span> tag <span class="token parameter variable">-d</span> <span class="token operator">&lt;</span>tagname<span class="token operator">&gt;</span>

<span class="token comment"># \u5220\u9664\u8FDC\u7A0Btag</span>
<span class="token function">git</span> push <span class="token operator">&lt;</span>remote<span class="token operator">&gt;</span> :refs/tags/<span class="token operator">&lt;</span>tagname<span class="token operator">&gt;</span>

<span class="token comment"># \u67E5\u770Btag\u4FE1\u606F</span>
<span class="token function">git</span> show <span class="token operator">&lt;</span>tag<span class="token operator">&gt;</span>

<span class="token comment"># \u63D0\u4EA4\u6307\u5B9Atag</span>
<span class="token function">git</span> push <span class="token operator">&lt;</span>remote<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>tag<span class="token operator">&gt;</span>

<span class="token comment"># \u63D0\u4EA4\u6240\u6709tag</span>
<span class="token function">git</span> push <span class="token operator">&lt;</span>remote<span class="token operator">&gt;</span> <span class="token parameter variable">--tags</span>

<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2A\u5206\u652F\uFF0C\u6307\u5411\u67D0\u4E2Atag</span>
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>tag<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u67E5\u770B\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u4FE1\u606F" aria-hidden="true">#</a> \u67E5\u770B\u4FE1\u606F</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u663E\u793A\u6709\u53D8\u66F4\u7684\u6587\u4EF6</span>
<span class="token function">git</span> status

<span class="token comment"># \u663E\u793A\u5F53\u524D\u5206\u652F\u7684\u7248\u672C\u5386\u53F2</span>
<span class="token function">git</span> log

<span class="token comment"># \u663E\u793Acommit\u5386\u53F2\uFF0C\u4EE5\u53CA\u6BCF\u6B21commit\u53D1\u751F\u53D8\u66F4\u7684\u6587\u4EF6</span>
<span class="token function">git</span> log <span class="token parameter variable">--stat</span>

<span class="token comment"># \u641C\u7D22\u63D0\u4EA4\u5386\u53F2\uFF0C\u66F4\u5177\u5173\u952E\u8BCD</span>
<span class="token function">git</span> log <span class="token parameter variable">-S</span> <span class="token operator">&lt;</span>keyword<span class="token operator">&gt;</span>

<span class="token comment"># \u663E\u793A\u67D0\u4E2Acommit\u4E4B\u540E\u7684\u6240\u6709\u53D8\u52A8\uFF0C\u6BCF\u4E2Acommit\u5360\u636E\u4E00\u884C</span>
<span class="token function">git</span> log <span class="token operator">&lt;</span>tag<span class="token operator">&gt;</span> HEAD <span class="token parameter variable">--pretty</span><span class="token operator">=</span>format:%s

<span class="token comment"># \u663E\u793A\u67D0\u4E2Acommit\u4E4B\u540E\u6240\u6709\u53D8\u52A8\uFF0C\u5176\u63D0\u4EA4\u8BF4\u660E\u5FC5\u987B\u7B26\u5408\u641C\u7D22\u6761\u4EF6</span>
<span class="token function">git</span> log <span class="token operator">&lt;</span>tag<span class="token operator">&gt;</span> HEAD <span class="token parameter variable">--grep</span> feature

<span class="token comment"># \u663E\u793A\u67D0\u4E2A\u6587\u4EF6\u7248\u672C\u5386\u53F2\uFF0C\u5305\u542B\u6587\u4EF6\u6539\u540D</span>
<span class="token function">git</span> log <span class="token parameter variable">--follow</span> <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>
<span class="token function">git</span> whatchanged <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>

<span class="token comment"># \u663E\u793A\u6307\u5B9A\u6587\u4EF6\u548C\u76F8\u5173\u7684\u6BCF\u4E00\u6B21diff</span>
<span class="token function">git</span> log <span class="token parameter variable">-p</span> <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>

<span class="token comment"># \u663E\u793A\u8FC7\u53BB5\u6B21\u63D0\u4EA4</span>
<span class="token function">git</span> log <span class="token parameter variable">-5</span> <span class="token parameter variable">--pretty</span> <span class="token parameter variable">--oneline</span>

<span class="token comment"># \u663E\u793A\u6240\u6709\u63D0\u4EA4\u8FC7\u7684\u7528\u6237\uFF0C\u6309\u63D0\u4EA4\u6B21\u6570\u6392\u5E8F</span>
<span class="token function">git</span> shortlog <span class="token parameter variable">-sn</span>

<span class="token comment"># \u663E\u793A\u6307\u5B9A\u6587\u4EF6\u662F\u4EC0\u4E48\u4EBA\u5728\u4EC0\u4E48\u65F6\u95F4\u4FEE\u6539</span>
<span class="token function">git</span> blame <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>

<span class="token comment"># \u663E\u793A\u6682\u5B58\u533A\u548C\u5DE5\u4F5C\u533A\u5DEE\u5F02</span>
<span class="token function">git</span> <span class="token function">diff</span>

<span class="token comment"># \u663E\u793A\u6682\u5B58\u533A\u548C\u4E0A\u4E00\u4E2Acommit\u7684\u5DEE\u5F02</span>
<span class="token function">git</span> <span class="token function">diff</span> <span class="token parameter variable">-cached</span> <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>

<span class="token comment"># \u663E\u793A\u5DE5\u4F5C\u533A\u4E0E\u5F53\u524D\u5206\u652F\u6700\u65B0commit\u4E4B\u95F4\u7684\u5DEE\u5F02</span>
<span class="token function">git</span> <span class="token function">diff</span> HEAD

<span class="token comment"># \u663E\u793A\u4E24\u6B21\u63D0\u4EA4\u4E4B\u524D\u7684\u5DEE\u5F02</span>
<span class="token function">git</span> <span class="token function">diff</span> <span class="token operator">&lt;</span>first-branch<span class="token operator">&gt;</span><span class="token punctuation">..</span>.<span class="token operator">&lt;</span>second-branch<span class="token operator">&gt;</span>

<span class="token comment"># \u663E\u793A\u4ECA\u5929\u4F60\u5199\u4E86\u591A\u5C11\u884C\u4EE3\u7801</span>
<span class="token function">git</span> <span class="token function">diff</span> <span class="token parameter variable">--shortstat</span> <span class="token string">&#39;@{0 day ago}&#39;</span>

<span class="token comment"># \u663E\u793A\u67D0\u6B21\u63D0\u7684\u5143\u6570\u636E\u548C\u5185\u5BB9\u53D8\u5316</span>
<span class="token function">git</span> show <span class="token operator">&lt;</span>commit<span class="token operator">&gt;</span>

<span class="token comment"># \u663E\u793A\u67D0\u6B21\u63D0\u4EA4\u53D1\u751F\u53D8\u5316\u7684\u6587\u4EF6</span>
<span class="token function">git</span> show --name-only

<span class="token comment"># \u663E\u793A\u67D0\u6B21\u63D0\u4EA4\u65F6\uFF0C\u67D0\u4E2A\u6587\u4EF6\u7684\u5185\u5BB9</span>
<span class="token function">git</span> show <span class="token operator">&lt;</span>commit<span class="token operator">&gt;</span>:<span class="token operator">&lt;</span>filename<span class="token operator">&gt;</span>

<span class="token comment"># \u663E\u793A\u5F53\u524D\u5206\u652F\u7684\u6700\u8FD1\u51E0\u6B21\u63D0\u4EA4</span>
<span class="token function">git</span> reflog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8FDC\u7A0B\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u8FDC\u7A0B\u64CD\u4F5C" aria-hidden="true">#</a> \u8FDC\u7A0B\u64CD\u4F5C</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4E0B\u8F7D\u8FDC\u7A0B\u4ED3\u5E93\u6240\u6709\u53D8\u52A8</span>
<span class="token function">git</span> fetch <span class="token operator">&lt;</span>remote<span class="token operator">&gt;</span>

<span class="token comment"># \u53D6\u56DE\u8FDC\u7A0B\u4ED3\u5E93\u53D8\u5316\uFF0C\u5E76\u4E0E\u672C\u5730\u5206\u652F\u5408\u5E76</span>
<span class="token function">git</span> pull <span class="token operator">&lt;</span>remote<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span>

<span class="token comment"># \u663E\u793A\u6240\u6709\u8FDC\u7A0B\u4ED3\u5E93\u4FE1\u606F</span>
<span class="token function">git</span> remote <span class="token parameter variable">-v</span>

<span class="token comment"># \u663E\u793A\u67D0\u4E2A\u8FDC\u7A0B\u4ED3\u5E93\u4FE1\u606F</span>
<span class="token function">git</span> remote show <span class="token operator">&lt;</span>remote<span class="token operator">&gt;</span>

<span class="token comment"># \u589E\u52A0\u4E00\u4E2A\u65B0\u7684\u8FDC\u7A0B\u4ED3\u5E93\uFF0C\u5E76\u547D\u540D</span>
<span class="token function">git</span> remote <span class="token function">add</span> <span class="token operator">&lt;</span>shortname<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>url<span class="token operator">&gt;</span>

<span class="token comment"># \u4E0A\u4F20\u672C\u5730\u6307\u5B9A\u5206\u652F\u5230\u8FDC\u7A0B\u4ED3\u5E93</span>
<span class="token function">git</span> push <span class="token operator">&lt;</span>remote<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span>

<span class="token comment"># \u5F3A\u884C\u63A8\u9001\u5F53\u524D\u5206\u652F\u5230\u8FDC\u7A0B\u4ED3\u5E93\uFF0C\u5373\u4F7F\u6709\u51B2\u7A81</span>
<span class="token function">git</span> push <span class="token operator">&lt;</span>remote<span class="token operator">&gt;</span> <span class="token parameter variable">--force</span>

<span class="token comment"># \u63A8\u9001\u6240\u6709\u5206\u652F\u5230\u8FDC\u7A0B\u4ED3\u5E93</span>
<span class="token function">git</span> push <span class="token operator">&lt;</span>remote<span class="token operator">&gt;</span> <span class="token parameter variable">--all</span>

<span class="token comment"># \u5220\u9664\u8FDC\u7A0B\u5206\u652F\u6216\u6807\u7B7E</span>
<span class="token function">git</span> push <span class="token operator">&lt;</span>remote<span class="token operator">&gt;</span> :<span class="token operator">&lt;</span>branch/tag-name<span class="token operator">&gt;</span>

<span class="token comment"># \u4E0A\u4F20\u6240\u6709\u6807\u7B7E</span>
<span class="token function">git</span> push <span class="token parameter variable">--tags</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u64A4\u9500" tabindex="-1"><a class="header-anchor" href="#\u64A4\u9500" aria-hidden="true">#</a> \u64A4\u9500</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u64A4\u9500\u5DE5\u4F5C\u76EE\u5F55\u4E2D\u6240\u6709\u672A\u63D0\u4EA4\u7684\u6587\u4EF6\u4FEE\u6539\u5185\u5BB9</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> HEAD

<span class="token comment"># \u64A4\u9500\u6307\u5B9A\u7684\u672A\u63D0\u4EA4\u6587\u4EF6\u7684\u4FEE\u6539\u5185\u5BB9</span>
<span class="token function">git</span> checkout HEAD <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>

<span class="token comment"># \u64A4\u9500\u6307\u5B9A\u7684\u63D0\u4EA4</span>
<span class="token function">git</span> revert <span class="token operator">&lt;</span>commit<span class="token operator">&gt;</span>

<span class="token comment"># \u9000\u56DE\u5230\u4E4B\u524D1\u5929\u7684\u7248\u672C</span>
<span class="token function">git</span> log <span class="token parameter variable">--before</span><span class="token operator">=</span><span class="token string">&#39;1 days&#39;</span>

<span class="token comment"># \u6062\u590D\u6682\u5B58\u533A\u7684\u6307\u5B9A\u6587\u4EF6\u5230\u5DE5\u4F5C\u533A</span>
<span class="token function">git</span> checkout <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>

<span class="token comment"># \u6062\u590D\u67D0\u4E2Acommit\u7684\u6307\u5B9A\u6587\u4EF6\u5230\u6682\u5B58\u533A\u548C\u5DE5\u4F5C\u533A</span>
<span class="token function">git</span> checkout <span class="token operator">&lt;</span>commit<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>

<span class="token comment"># \u6062\u590D\u6682\u5B58\u533A\u7684\u6240\u6709\u6587\u4EF6\u5230\u5DE5\u4F5C\u533A</span>
<span class="token function">git</span> checkout <span class="token builtin class-name">.</span>

<span class="token comment"># \u91CD\u7F6E\u6682\u5B58\u533A\u7684\u6307\u5B9A\u6587\u4EF6\uFF0C\u4E0E\u4E0A\u4E00\u6B21commit\u4FDD\u6301\u4E00\u81F4\uFF0C\u4F46\u5DE5\u4F5C\u533A\u4E0D\u53D8</span>
<span class="token function">git</span> reset <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>

<span class="token comment"># \u91CD\u7F6E\u6682\u5B58\u533A\u4E0E\u5DE5\u4F5C\u533A\uFF0C\u4E0E\u4E0A\u4E00\u6B21\u63D0\u4EA4commit\u4FDD\u6301\u4E00\u81F4</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span>

<span class="token comment"># \u91CD\u7F6E\u5F53\u524D\u5206\u652F\u7684\u6307\u9488\u4E3A\u6307\u5B9Acommit\uFF0C\u540C\u65F6\u91CD\u7F6E\u6682\u5B58\u533A\uFF0C\u4F46\u5DE5\u4F5C\u533A\u4E0D\u53D8</span>
<span class="token function">git</span> reset <span class="token operator">&lt;</span>commit<span class="token operator">&gt;</span>

<span class="token comment"># \u91CD\u7F6E\u5F53\u524D\u5206\u652FHEAD\u4E3A\u6307\u5B9Acommit\uFF0C\u540C\u65F6\u91CD\u7F6E\u6682\u5B58\u533A\u548C\u5DE5\u4F5C\u533A\uFF0C\u4E0E\u6307\u5B9Acommit\u4E00\u81F4</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> <span class="token operator">&lt;</span>commit<span class="token operator">&gt;</span>

<span class="token comment"># \u91CD\u7F6E\u5F53\u524DHEAD\u4E3A\u6307\u5B9Acommit\uFF0C\u4F46\u4FDD\u6301\u6682\u5B58\u533A\u548C\u5DE5\u4F5C\u533A\u4E0D\u53D8</span>
<span class="token function">git</span> reset <span class="token parameter variable">--keep</span> <span class="token operator">&lt;</span>commit<span class="token operator">&gt;</span>

<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2Acommit\uFF0C\u7528\u6765\u64A4\u9500commit</span>
<span class="token comment"># \u540E\u8005\u7684\u6240\u6709\u53D8\u5316\u90FD\u5C06\u88AB\u524D\u8005\u62B5\u6D88\uFF0C\u5E76\u4E14\u5E94\u7528\u5230\u5F53\u524D\u5206\u652F</span>
<span class="token function">git</span> revert <span class="token operator">&lt;</span>commit<span class="token operator">&gt;</span>

<span class="token comment"># \u6682\u65F6\u5C06\u672A\u63D0\u4EA4\u7684\u53D8\u5316\u79FB\u9664\uFF0C\u7A0D\u540E\u518D\u79FB\u5165</span>

<span class="token comment"># \u50A8\u85CF\u5DE5\u4F5C</span>
<span class="token function">git</span> stash

<span class="token comment"># \u67E5\u770B\u50A8\u85CF\u5217\u8868</span>
<span class="token function">git</span> stash list

<span class="token comment"># \u5E94\u7528\u6700\u8FD1\u7684\u50A8\u85CF</span>
<span class="token function">git</span> stash apply

<span class="token comment"># \u5E94\u7528\u66F4\u65E9\u7684\u50A8\u85CF</span>
<span class="token function">git</span> stash apply stash@<span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span>

<span class="token comment"># \u5220\u9664\u50A8\u85CF</span>
<span class="token function">git</span> stash drop stash@<span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span>

<span class="token comment"># \u5E94\u7528\u5E76\u5220\u9664\u50A8\u85CF</span>
<span class="token function">git</span> stash pop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23);function u(k,b){const a=i("ExternalLinkIcon");return t(),l("div",null,[n("h1",r,[d,s(),n("a",m,[s("git"),o(a)])]),v])}const f=e(c,[["render",u],["__file","git.html.vue"]]);export{f as default};
