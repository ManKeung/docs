import{_ as n,o as s,c as a,a as t}from"./app.ac481352.js";const p={},e=t(`<h1 id="\u7F51\u7EDC\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u7F51\u7EDC\u8BF7\u6C42" aria-hidden="true">#</a> \u7F51\u7EDC\u8BF7\u6C42</h1><h2 id="xmlhttprequest" tabindex="-1"><a class="header-anchor" href="#xmlhttprequest" aria-hidden="true">#</a> XMLHttpRequest</h2><h3 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> \u57FA\u672C\u4F7F\u7528</h3><p>\u4F7F\u7528XMLHttpRequest \u53D1\u9001\u8BF7\u6C42\u9700\u8981\u6267\u884C\u4EE5\u4E0B\u51E0\u6B65</p><ol><li>\u4F7F\u7528 new XMLHttpRequest\u521B\u5EFAxhr\u5BF9\u8C61</li><li>xhr.open \u521D\u59CB\u5316\u8BF7\u6C42\u53C2\u6570</li><li>xhr.send \u53D1\u9001\u7F51\u7EDC\u8BF7\u6C42</li><li>xhr.onload \u76D1\u542C\u8BF7\u6C42\u7ED3\u679C</li><li>xhr.onerror \u8BF7\u6C42\u4E2D\u65AD\u7B49\u9519\u8BEF\u53D1\u751F\u65F6\u7684\u5904\u7406</li></ol><h3 id="\u54CD\u5E94\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u54CD\u5E94\u7C7B\u578B" aria-hidden="true">#</a> \u54CD\u5E94\u7C7B\u578B</h3><p>\u901A\u8FC7\u8BBE\u7F6E xhr.responseType \u5BF9\u54CD\u5E94\u7ED3\u679C\u8FDB\u884C\u58F0\u660E\uFF0C\u6765\u5BF9\u7ED3\u679C\u81EA\u52A8\u8FDB\u884C\u5904\u7406\u3002</p><p>\u4E0B\u9762\u662F\u53EF\u4EE5\u4F7F\u7528\u7684\u54CD\u5E94\u7C7B\u578B</p><table><thead><tr><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>text</td><td>\u54CD\u5E94\u7ED3\u679C\u4E3A\u6587\u672C</td></tr><tr><td>json</td><td>\u54CD\u5E94\u5185\u5BB9\u4E3AJSON\uFF0C\u7CFB\u7EDF\u4F1A\u81EA\u52A8\u5C06\u7ED3\u679C\u8F6C\u4E3AJSON\u5BF9\u8C61</td></tr><tr><td>blob</td><td>\u4E8C\u8FDB\u5236\u6570\u636E\u54CD\u5E94</td></tr><tr><td>document</td><td>XML DOCUMENT \u5185\u5BB9</td></tr></tbody></table><h3 id="\u54CD\u5E94\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u54CD\u5E94\u7ED3\u679C" aria-hidden="true">#</a> \u54CD\u5E94\u7ED3\u679C</h3><p>xhr.onload \u7528\u4E8E\u5904\u7406\u54CD\u5E94\u5B8C\u6BD5\u540E\u7684\u5904\u7406</p><p>\u4F7F\u7528\u4EE5\u4E0B\u5C5E\u6027\u6765\u5904\u7406\u7ED3\u679C</p><ul><li>xhr.status \u4E3AHTTP\u72B6\u6001\u7801 \u5982 404/422/403\u7B49\uFF0C\u5F53\u4E3A200\u65F6\u4E3A\u6B63\u786E\u54CD\u5E94</li><li>xhr.statusText HTTP\u72B6\u6001\u7801\u5185\u5BB9\uFF0C200\u65F6\u4E3Aok,404 \u4E3ANot Found</li><li>xhr.response \u670D\u52A1\u5668\u7AEF\u54CD\u5E94\u7684\u5185\u5BB9</li></ul><h3 id="readystate" tabindex="-1"><a class="header-anchor" href="#readystate" aria-hidden="true">#</a> readyState</h3><table><thead><tr><th>\u8FD4\u56DE\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>0</td><td>\u672A\u521D\u59CB\u5316\u3002\u8868\u793A\u5BF9\u8C61\u5DF2\u7ECF\u5EFA\u7ACB\uFF0C\u4F46\u662F\u5C1A\u672A\u521D\u59CB\u5316\uFF0C\u5C1A\u672A\u8C03\u7528 open() \u65B9\u6CD5</td></tr><tr><td>1</td><td>\u521D\u59CB\u5316\u3002\u8868\u793A\u5BF9\u8C61\u5DF2\u7ECF\u5EFA\u7ACB\uFF0C\u5C1A\u672A\u8C03\u7528 send() \u65B9\u6CD5</td></tr><tr><td>2</td><td>\u53D1\u9001\u6570\u636E\u3002\u8868\u793A send() \u65B9\u6CD5\u5DF2\u7ECF\u8C03\u7528\uFF0C\u4F46\u662F\u5F53\u524D\u7684\u72B6\u6001\u53CA HTTP \u5934\u672A\u77E5</td></tr><tr><td>3</td><td>\u6570\u636E\u4F20\u9001\u4E2D\u3002\u5DF2\u7ECF\u63A5\u6536\u90E8\u5206\u6570\u636E\uFF0C\u56E0\u4E3A\u54CD\u5E94\u53CA HTTP \u5934\u4E0D\u5B89\u5168\uFF0C\u8FD9\u65F6\u901A\u8FC7 responseBody \u548C responseText \u83B7\u53D6\u90E8\u5206\u6570\u636E\u4F1A\u51FA\u73B0\u9519\u8BEF</td></tr><tr><td>4</td><td>\u5B8C\u6210\u3002\u6570\u636E\u63A5\u6536\u5B8C\u6BD5\uFF0C\u6B64\u65F6\u53EF\u4EE5\u901A\u8FC7 responseBody \u548C responseText \u83B7\u53D6\u5B8C\u6574\u7684\u54CD\u5E94\u6570\u636E</td></tr></tbody></table><h3 id="xhr-abort" tabindex="-1"><a class="header-anchor" href="#xhr-abort" aria-hidden="true">#</a> xhr.abort()</h3><p>\u7EC8\u6B62\u8BF7\u6C42</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>  <span class="token comment">//\u6E05\u7406\u4E8B\u4EF6\u54CD\u5E94\u51FD\u6570</span>
xhr<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">//\u4E2D\u6B62\u8BF7\u6C42</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="onreadystatechange" tabindex="-1"><a class="header-anchor" href="#onreadystatechange" aria-hidden="true">#</a> onreadystatechange</h3><p>\u5B58\u50A8\u51FD\u6570\uFF08\u6216\u51FD\u6570\u540D\uFF09\uFF0C\u6BCF\u5F53 readyState \u5C5E\u6027\u6539\u53D8\u65F6\uFF0C\u5C31\u4F1A\u8C03\u7528\u8BE5\u51FD\u6570\u3002</p><h3 id="\u57FA\u672C\u4F7F\u7528-1" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528-1" aria-hidden="true">#</a> \u57FA\u672C\u4F7F\u7528</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

xhr<span class="token punctuation">.</span>timeout <span class="token operator">=</span> <span class="token number">5000</span>
xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;http://api.kunyun.site/mock/20/test&#39;</span><span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span>responseType <span class="token operator">=</span> <span class="token string">&#39;json&#39;</span>

xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;state&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> state <span class="token operator">=</span> xhr<span class="token punctuation">.</span>readyState
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>state <span class="token operator">===</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        xhr<span class="token punctuation">.</span>onreadystatechange <span class="token operator">=</span> <span class="token keyword">null</span>
        xhr<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;state&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

xhr<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

xhr<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>response<span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>xhr<span class="token punctuation">.</span>status<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>xhr<span class="token punctuation">.</span>statusText<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5C01\u88C5\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u5C01\u88C5\u8BF7\u6C42" aria-hidden="true">#</a> \u5C01\u88C5\u8BF7\u6C42</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Ajax</span> <span class="token punctuation">{</span>
	options <span class="token operator">=</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">responseType</span><span class="token operator">:</span> <span class="token string">&#39;json&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">5</span> <span class="token operator">*</span> <span class="token number">1000</span>
	<span class="token punctuation">}</span>

	<span class="token function">constructor</span><span class="token punctuation">(</span>method <span class="token operator">=</span> <span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span> url<span class="token punctuation">,</span> data <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span> options<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>method <span class="token operator">=</span> method
		<span class="token keyword">this</span><span class="token punctuation">.</span>url <span class="token operator">=</span> url
		<span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">formatData</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token function">formatData</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> data <span class="token operator">!=</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">||</span> data <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
		<span class="token keyword">let</span> form <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token punctuation">[</span>name<span class="token punctuation">,</span> value<span class="token punctuation">]</span> <span class="token keyword">of</span> Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			form<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">return</span> form
	<span class="token punctuation">}</span>

	<span class="token keyword">static</span> <span class="token function">get</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> options<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">this</span><span class="token punctuation">(</span><span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span> url<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">xhr</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">static</span> <span class="token function">post</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> data<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">this</span><span class="token punctuation">(</span><span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span> url<span class="token punctuation">,</span> data<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">xhr</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token function">xhr</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>method<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>url<span class="token punctuation">)</span>
			xhr<span class="token punctuation">.</span>responseType <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>responseType
			xhr<span class="token punctuation">.</span>timeout <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>timeout
			xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">)</span>

			xhr<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">!==</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token function">reject</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
						<span class="token literal-property property">status</span><span class="token operator">:</span> xhr<span class="token punctuation">.</span>status<span class="token punctuation">,</span>
						<span class="token literal-property property">error</span><span class="token operator">:</span> xhr<span class="token punctuation">.</span>statusText
					<span class="token punctuation">}</span><span class="token punctuation">)</span>
				<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
					<span class="token function">resolve</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>response<span class="token punctuation">)</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>

			xhr<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),o=[e];function c(i,l){return s(),a("div",null,o)}var r=n(p,[["render",c],["__file","ajax.html.vue"]]);export{r as default};
