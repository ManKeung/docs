import{_ as s,o as n,c as a,a as e}from"./app.a5405d0d.js";const p={},o=e(`<h1 id="\u57FA\u7840\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u7C7B\u578B" aria-hidden="true">#</a> \u57FA\u7840\u7C7B\u578B</h1><p>\u57FA\u7840\u7C7B\u578B\uFF1ABoolean\u3001Number\u3001String\u3001null\u3001undefined \u4EE5\u53CAES6\u7684Symbol\u548CES10\u7684BigInt</p><h2 id="\u5B57\u7B26\u4E32\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32\u7C7B\u578B" aria-hidden="true">#</a> \u5B57\u7B26\u4E32\u7C7B\u578B</h2><p>\u5B57\u7B26\u4E32\u662F\u4F7F\u7528string\u5B9A\u4E49\u7684</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> hello<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span>
<span class="token keyword">const</span> str<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>hello<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> world</span><span class="token template-punctuation string">\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6570\u5B57\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u6570\u5B57\u7C7B\u578B" aria-hidden="true">#</a> \u6570\u5B57\u7C7B\u578B</h2><p>\u652F\u6301\u5341\u516D\u8FDB\u5236\u3001\u5341\u8FDB\u5236\u3001\u516B\u8FDB\u5236\u548C\u4E8C\u8FDB\u5236</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> notANumber<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">NaN</span> <span class="token comment">// Nan</span>
<span class="token keyword">const</span> num<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token comment">// \u666E\u901A\u6570\u5B57</span>
<span class="token keyword">const</span> infinityNumber<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">Infinity</span> <span class="token comment">//\u65E0\u7A77\u5927</span>
<span class="token keyword">const</span> decimal<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">10</span> <span class="token comment">// \u5341\u8FDB\u5236</span>
<span class="token keyword">const</span> hex<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0x0010</span> <span class="token comment">// \u5341\u516D\u8FDB\u5236</span>
<span class="token keyword">const</span> binary<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0b0010</span> <span class="token comment">// \u4E8C\u8FDB\u5236</span>
<span class="token keyword">const</span> octal<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0o0010</span> <span class="token comment">// \u516B\u8FDB\u5236</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5E03\u5C14\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u5E03\u5C14\u7C7B\u578B" aria-hidden="true">#</a> \u5E03\u5C14\u7C7B\u578B</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> b<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Boolean</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// error \u8FD9\u6837\u4F1A\u62A5\u9519 \u5E94\u4E3A\u4E8B\u5B9E\u4E0A new Boolean() \u8FD4\u56DE\u7684\u662F\u4E00\u4E2A Boolean \u5BF9\u8C61</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> b<span class="token operator">:</span> Boolean <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Boolean</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u6CE8\u610F\uFF0C\u4F7F\u7528\u6784\u9020\u51FD\u6570 Boolean \u521B\u9020\u7684\u5BF9\u8C61\u4E0D\u662F\u5E03\u5C14\u503C</p></blockquote><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> b<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token keyword">const</span> b2<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7A7A\u503C\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u7A7A\u503C\u7C7B\u578B" aria-hidden="true">#</a> \u7A7A\u503C\u7C7B\u578B</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">voidFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello world&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>void \u7C7B\u578B\u7684\u7528\u6CD5\uFF0C\u4E3B\u8981\u662F\u7528\u5728\u6211\u4EEC\u4E0D\u5E0C\u671B\u8C03\u7528\u8005\u5173\u5FC3\u51FD\u6570\u8FD4\u56DE\u503C\u7684\u60C5\u51B5\u4E0B\uFF0C\u6BD4\u5982\u901A\u5E38\u7684\u5F02\u6B65\u56DE\u8C03\u51FD\u6570</p><p>void\u4E5F\u53EF\u4EE5\u5B9A\u4E49undefined \u548C null\u7C7B\u578B</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> u<span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=</span> <span class="token keyword">undefined</span>
<span class="token keyword">const</span> n<span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=</span> <span class="token keyword">null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="null\u548Cundefined\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#null\u548Cundefined\u7C7B\u578B" aria-hidden="true">#</a> Null\u548Cundefined\u7C7B\u578B</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> u<span class="token operator">:</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span>
<span class="token keyword">const</span> n<span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>void \u548C undefined \u548C null \u6700\u5927\u7684\u533A\u522B</li></ul><p>\u4E0E void \u7684\u533A\u522B\u662F\uFF0Cundefined \u548C null \u662F\u6240\u6709\u7C7B\u578B\u7684\u5B50\u7C7B\u578B\u3002\u4E5F\u5C31\u662F\u8BF4 undefined \u7C7B\u578B\u7684\u53D8\u91CF\uFF0C\u53EF\u4EE5\u8D4B\u503C\u7ED9 string \u7C7B\u578B\u7684\u53D8\u91CF\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> t<span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=</span> <span class="token keyword">undefined</span>
<span class="token keyword">let</span> s<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;str&#39;</span>

<span class="token comment">// \u8FD9\u6837\u5199\u4F1A\u62A5\u9519 void\u7C7B\u578B\u4E0D\u53EF\u4EE5\u5206\u7ED9\u5176\u4ED6\u7C7B\u578B</span>
s <span class="token operator">=</span> t
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u8FD9\u6837\u662F\u6CA1\u95EE\u9898\u7684</span>
<span class="token keyword">let</span> t<span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token keyword">let</span> s<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;str&#39;</span>

s <span class="token operator">=</span> t

<span class="token comment">// \u6216\u8005</span>
<span class="token keyword">let</span> t<span class="token operator">:</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span>
<span class="token keyword">let</span> s<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;str&#39;</span>

s <span class="token operator">=</span> t
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5982\u679C\u4F60\u914D\u7F6E\u4E86tsconfig.json \u5F00\u542F\u4E86\u4E25\u683C\u6A21\u5F0F</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>null \u4E0D\u80FD \u8D4B\u4E88 void \u7C7B\u578B</p></blockquote>`,27),t=[o];function l(i,c){return n(),a("div",null,t)}const d=s(p,[["render",l],["__file","01.html.vue"]]);export{d as default};
