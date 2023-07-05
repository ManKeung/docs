import{_ as n,o as s,c as a,a as e}from"./app.b7a23fca.js";const t={},i=e(`<h1 id="\u521D\u8BA4\u8BC6" tabindex="-1"><a class="header-anchor" href="#\u521D\u8BA4\u8BC6" aria-hidden="true">#</a> \u521D\u8BA4\u8BC6</h1><ul><li>hello.py</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;hello python&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">1.01</span><span class="token operator">**</span><span class="token number">365</span><span class="token punctuation">)</span>
<span class="token comment"># \u8FD9\u662F\u4E00\u4E2A\u6CE8\u91CA</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot; \u591A\u884C\u6CE8\u91CA &quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4E2A\u4EBA\u4FE1\u606F</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
\u59D3\u540D\uFF1A\u5C0F\u660E
\u5E74\u9F84\uFF1A18\u5C81
\u6027\u522B\uFF1A\u662F\u7537\u751F
\u8EAB\u9AD8\uFF1A1.75\u7C73
\u4F53\u91CD\uFF1A75.0\u516C\u65A4
&quot;&quot;&quot;</span>

<span class="token comment"># \u5728 python\u4E2D\uFF0C\u5B9A\u4E49\u53D8\u91CF\u65F6\u662F\u4E0D\u9700\u8981\u6307\u5B9A\u53D8\u91CF\u7684\u7C7B\u578B</span>
<span class="token comment"># \u5728\u8FD0\u884C\u7684\u65F6\u5019\uFF0Cpython\u89E3\u91CA\u5668\uFF0C\u4F1A\u6839\u636E\u8D4B\u503C\u8BED\u53E5\u7B49\u53F7\u53F3\u4FA7</span>
<span class="token comment"># \u81EA\u52A8\u63A8\u51FA\u53D8\u91CF\u4E2D\u4FDD\u5B58\u6570\u636E\u7684\u51C6\u786E\u7C7B\u578B</span>

<span class="token comment"># str \u8868\u793A\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u7C7B\u578B</span>
name <span class="token operator">=</span> <span class="token string">&quot;\u5C0F\u660E&quot;</span>
<span class="token comment"># int \u8868\u793A\u662F\u4E00\u4E2A\u6574\u6570\u7C7B\u578B</span>
age <span class="token operator">=</span> <span class="token number">18</span>
<span class="token comment"># bool \u8868\u793A\u662F\u4E00\u4E2A\u5E03\u5C14\u7C7B\u578B\uFF0C\u771F True \u6216\u8005\u662F False</span>
gender <span class="token operator">=</span> <span class="token boolean">True</span>
<span class="token comment"># float \u8868\u793A\u662F\u4E00\u4E2A\u5C0F\u6570\u7C7B\u578B\uFF0C\u6D6E\u70B9\u578B</span>
height <span class="token operator">=</span> <span class="token number">1.75</span>
weight <span class="token operator">=</span> <span class="token number">75.0</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8D85\u5E02\u4E70\u82F9\u679C</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># 1. \u82F9\u679C\u5355\u4EF7\u8F93\u5165</span>
<span class="token comment"># price_str = input(&quot;\u82F9\u679C\u7684\u5355\u4EF7\uFF1A&quot;)</span>
price <span class="token operator">=</span> <span class="token builtin">float</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;\u82F9\u679C\u7684\u5355\u4EF7\uFF1A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 2. \u8F93\u5165\u82F9\u679C\u7684\u91CD\u91CF</span>
<span class="token comment"># weight_str = input(&quot;\u82F9\u679C\u7684\u91CD\u91CF\uFF1A&quot;)</span>
weight <span class="token operator">=</span> <span class="token builtin">float</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;\u82F9\u679C\u7684\u91CD\u91CF\uFF1A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 3. \u8BA1\u7B97\u652F\u4ED8\u7684\u603B\u989D</span>
<span class="token comment"># \u6CE8\u610F\uFF1A\u4E24\u4E2A\u5B57\u7B26\u4E32\u53D8\u91CF\u4E4B\u524D\u662F\u4E0D\u80FD\u76F4\u63A5\u7528\u4E58\u6CD5</span>
<span class="token comment"># money = price_str * weight_str</span>
<span class="token comment"># \u8F6C\u6362\u6210\u5C0F\u6570</span>
<span class="token comment"># price = float(price_str)</span>
<span class="token comment"># weight = float(weight_str)</span>
money <span class="token operator">=</span> price <span class="token operator">*</span> weight

<span class="token keyword">print</span><span class="token punctuation">(</span>money<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u683C\u5F0F\u5316\u8F93\u51FA</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>name <span class="token operator">=</span> <span class="token string">&quot;\u5C0F\u660E&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;\u6211\u7684\u540D\u5B57\u53EB%s\uFF0C\u8BF7\u591A\u591A\u5173\u7167\uFF01&quot;</span> <span class="token operator">%</span> name<span class="token punctuation">)</span>

student_no <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;\u6211\u7684\u5B66\u53F7\u662F%06d&quot;</span> <span class="token operator">%</span> student_no<span class="token punctuation">)</span>

price <span class="token operator">=</span> <span class="token number">12.4</span>
weight <span class="token operator">=</span> <span class="token number">3.2</span>
money <span class="token operator">=</span> price <span class="token operator">*</span> weight
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;\u82F9\u679C\u5355\u4EF7%.02f\u5143/\u65A4\uFF0C\u8D2D\u4E70\u4E86%.02f\u65A4\uFF0C\u9700\u8981\u652F\u4ED8%.02f\u5143\u3002&quot;</span> <span class="token operator">%</span><span class="token punctuation">(</span>price<span class="token punctuation">,</span> weight<span class="token punctuation">,</span> money<span class="token punctuation">)</span><span class="token punctuation">)</span>

scale <span class="token operator">=</span> <span class="token number">0.2</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;\u6570\u636E\u6BD4\u4F8B\u662F%.02f%%&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>scale <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">import</span> keyword
<span class="token keyword">print</span><span class="token punctuation">(</span>keyword<span class="token punctuation">.</span>kwlist<span class="token punctuation">)</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
[&#39;False&#39;, &#39;None&#39;, &#39;True&#39;, &#39;and&#39;, &#39;as&#39;, &#39;assert&#39;, &#39;async&#39;, &#39;await&#39;, &#39;break&#39;, &#39;class&#39;, &#39;continue&#39;, &#39;def&#39;, &#39;del&#39;, &#39;elif&#39;, &#39;else&#39;, &#39;except&#39;, &#39;finally&#39;, &#39;for&#39;, &#39;from&#39;, &#39;global&#39;, &#39;if&#39;, &#39;import&#39;, &#39;in&#39;, &#39;is&#39;, &#39;lambda&#39;, &#39;nonlocal&#39;, &#39;not&#39;, &#39;or&#39;, &#39;pass&#39;, &#39;raise&#39;, &#39;return&#39;, &#39;try&#39;, &#39;while&#39;, &#39;with&#39;, &#39;yield&#39;]
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),p=[i];function o(l,c){return s(),a("div",null,p)}const r=n(t,[["render",o],["__file","base.html.vue"]]);export{r as default};
