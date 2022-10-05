import{_ as n,o as s,c as a,a as t}from"./app.efc882a5.js";const p={},e=t(`<h1 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h1><p>\u6A21\u677F\u63D0\u4F9B\u4E86\u57FA\u7840\u529F\u51FD\u6570\u65B9\u6CD5\uFF0C\u4F60\u53EF\u4EE5\u6839\u636E\u81EA\u5DF1\u60C5\u51B5\u65B0\u589E\u65B9\u6CD5\u3002</p><h4 id="\u5168\u5C40\u6CE8\u5165" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u6CE8\u5165" aria-hidden="true">#</a> \u5168\u5C40\u6CE8\u5165</h4><p>\u67E5\u770B<code>src/global</code>\u4E86\u89E3\u5168\u5C40\u6CE8\u5165\uFF0C\u672C\u6A21\u677F\u5168\u5C40\u6302\u8F7D\u5728<code>vue</code>\u548C<code>window</code>\u4E0A\uFF0C\u8FD9\u91CC\u4F7F\u7528\u7684<code>$mk</code>\u3002\u8FD9\u91CC<code>$mk</code>\u5DF2\u7ECF\u672C\u5360\u7528\u4E86\uFF0C\u5982\u679C<code>$mk</code>\u4E0E\u4F60\u9879\u76EE\u6709\u51B2\u7A81\u4F60\u53EF\u4EE5\u4FEE\u6539\u6B21\u53D8\u91CF\u540D\u3002</p><h4 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h4><ul><li><code>this</code></li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$mk<span class="token punctuation">.</span>http<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/api/get&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>data <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;mock\u6A21\u62DF\u6570\u636E&#39;</span><span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;mock\u6A21\u62DF\u6570\u636E&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>setup</code></li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

instance<span class="token punctuation">.</span>proxy<span class="token punctuation">.</span>$mk<span class="token punctuation">.</span>http<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/api/get&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>data <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;mock\u6A21\u62DF\u6570\u636E&#39;</span><span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;mock\u6A21\u62DF\u6570\u636E&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>window</code></li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>		window<span class="token punctuation">.</span>$mk<span class="token punctuation">.</span>http<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/api/get&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\r
			<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;mock\u6A21\u62DF\u6570\u636E&#39;</span><span class="token punctuation">)</span>\r
			<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>\r
			<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;mock\u6A21\u62DF\u6570\u636E&#39;</span><span class="token punctuation">)</span>\r
		<span class="token punctuation">}</span><span class="token punctuation">)</span>\r
	<span class="token punctuation">}</span><span class="token punctuation">)</span>\r
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>\r
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u67E5\u770B\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u7248\u672C" aria-hidden="true">#</a> \u67E5\u770B\u7248\u672C</h4><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>$mk<span class="token punctuation">.</span>version<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u63D0\u793A" tabindex="-1"><a class="header-anchor" href="#\u63D0\u793A" aria-hidden="true">#</a> \u63D0\u793A</h4><p>\u6A21\u677F\u9ED8\u8BA4<code>window</code>\u548C<code>vue</code>\u5168\u5C40\u6302\u8F7D\uFF0C\u4F60\u53EF\u4EE5\u66F4\u5177\u81EA\u5DF1\u5B9E\u9645\u60C5\u51B5\u9009\u62E9\u6302\u8F7D\u65B9\u5F0F\u3002</p>`,15),c=[e];function o(i,l){return s(),a("div",null,c)}const d=n(p,[["render",o],["__file","index.html.vue"]]);export{d as default};
