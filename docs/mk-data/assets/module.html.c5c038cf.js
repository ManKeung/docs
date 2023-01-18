import{_ as n,o as s,c as a,a as e}from"./app.6d9b4f94.js";const t={},p=e(`<h1 id="\u6A21\u5757\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5757\u7BA1\u7406" aria-hidden="true">#</a> \u6A21\u5757\u7BA1\u7406</h1><h2 id="\u547D\u540D\u7A7A\u95F4" tabindex="-1"><a class="header-anchor" href="#\u547D\u540D\u7A7A\u95F4" aria-hidden="true">#</a> \u547D\u540D\u7A7A\u95F4</h2><p>TypeScript \u50CF\u5176\u4ED6\u7F16\u7A0B\u8BED\u8A00\u4E00\u6837\uFF0C\u5B58\u5728\u547D\u540D\u7A7A\u95F4\uFF08namespace\uFF09\u7684\u6982\u5FF5\u3002</p><p>\u5F53\u6211\u4EEC\u5B9A\u4E49\u4EE5\u4E0B\u540C\u540D\u53D8\u91CF\u65F6\u662F\u4E0D\u5141\u8BB8\u7684\uFF0C\u8FD9\u79CD\u60C5\u51B5\u53EF\u4EE5\u901A\u8FC7\u547D\u540D\u7A7A\u95F4\u89E3\u51B3</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;mkimq&#39;</span>
<span class="token keyword">let</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;mkimq.com&#39;</span> <span class="token comment">// error</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0B\u9762\u662F\u4F7F\u7528\u547D\u540D\u7A7A\u95F4\u5C06\u53D8\u91CF\u9694\u79BB</p><ul><li>\u6570\u636E\u9700\u8981\u4F7F\u7528 export \u5BFC\u51FA\u624D\u53EF\u4EE5\u4F7F\u7528</li><li>\u5B50\u547D\u540D\u7A7A\u95F4\u4E5F\u9700\u8981 export \u540E\u624D\u53EF\u4EE5\u4F7F\u7528</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">namespace</span> User <span class="token punctuation">{</span>
	<span class="token keyword">export</span> <span class="token keyword">let</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;mkimq&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">namespace</span> Member <span class="token punctuation">{</span>
	<span class="token keyword">let</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;mkimq.com&#39;</span>
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>User<span class="token punctuation">.</span>name<span class="token punctuation">)</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Member<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// error</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u547D\u540D\u7A7A\u95F4\u652F\u6301\u5D4C\u5957</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">namespace</span> User <span class="token punctuation">{</span>
	<span class="token keyword">export</span> <span class="token keyword">let</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;mkimq&#39;</span>

	<span class="token keyword">export</span> <span class="token keyword">namespace</span> Memebr <span class="token punctuation">{</span>
		<span class="token keyword">export</span> <span class="token keyword">let</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;mkimq.com&#39;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>User<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>User<span class="token punctuation">.</span>Memebr<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> reference</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">/// &lt;reference path=&quot;user.ts&quot;&gt;</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>User<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="declare" tabindex="-1"><a class="header-anchor" href="#declare" aria-hidden="true">#</a> declare</h2><p>\u58F0\u660E\u6587\u4EF6</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// packages/global.d.ts</span>

<span class="token keyword">declare</span> <span class="token keyword">var</span> __DEV__<span class="token operator">:</span> <span class="token builtin">boolean</span>

<span class="token keyword">declare</span> <span class="token keyword">namespace</span> <span class="token constant">D3</span> <span class="token punctuation">{</span>
	<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Selectors</span> <span class="token punctuation">{</span>
		select<span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token punctuation">(</span>selector<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token function">Selection</span>
			<span class="token punctuation">(</span>element<span class="token operator">:</span> EventTarget<span class="token punctuation">)</span><span class="token operator">:</span> Selection
		<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Event</span> <span class="token punctuation">{</span>
		x<span class="token operator">:</span> <span class="token builtin">number</span>
		y<span class="token operator">:</span> <span class="token builtin">number</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Base</span> <span class="token keyword">extends</span> <span class="token class-name">Selectors</span> <span class="token punctuation">{</span>
		event<span class="token operator">:</span> Event
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),l=[p];function c(i,o){return s(),a("div",null,l)}const d=n(t,[["render",c],["__file","module.html.vue"]]);export{d as default};
