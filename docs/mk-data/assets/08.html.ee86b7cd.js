import{_ as n,o as s,c as a,a as t}from"./app.7d9b123f.js";const p={},c=t(`<h1 id="\u7ACB\u5373\u6267\u884C\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u7ACB\u5373\u6267\u884C\u51FD\u6570" aria-hidden="true">#</a> \u7ACB\u5373\u6267\u884C\u51FD\u6570</h1><p><strong>\u5173\u952E\u8BCD</strong>: \u7ACB\u5373\u6267\u884C\u51FD\u6570 \u533F\u540D\u51FD\u6570 \u4F5C\u7528\u57DF</p><p><strong>\u683C\u5F0F</strong>: (function())()</p><p><strong>\u4F5C\u7528</strong>: \u7ACB\u5373\u6267\u884C\u51FD\u6570(function())()\u662F\u533F\u540D\u51FD\u6570, \u4E3B\u8981\u5229\u7528\u51FD\u6570\u7684\u4F5C\u7528\u57DF, \u51CF\u5C11\u5168\u5C40\u53D8\u91CF\u7684\u4F7F\u7528\u3002</p><h2 id="\u89E3\u91CA" tabindex="-1"><a class="header-anchor" href="#\u89E3\u91CA" aria-hidden="true">#</a> \u89E3\u91CA</h2><h3 id="\u524D\u63D0\u77E5\u8BC6" tabindex="-1"><a class="header-anchor" href="#\u524D\u63D0\u77E5\u8BC6" aria-hidden="true">#</a> \u524D\u63D0\u77E5\u8BC6</h3><p>js\u4E2D\u7684\u51FD\u6570\u901A\u5E38\u6709\u4E24\u79CD\u547D\u540D\u65B9\u5F0F,\u5206\u522B\u662F\u58F0\u660E\u5F0F\u51FD\u6570 \u548C \u51FD\u6570\u8868\u8FBE\u5F0F\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u58F0\u660E\u5F0F\u51FD\u6570</span>
<span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">// \u51FD\u6570\u8868\u8FBE\u5F0F</span>
<span class="token keyword">const</span> <span class="token function-variable function">func</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u5206\u6790" aria-hidden="true">#</a> \u5206\u6790</h3><p>\u5F53\u6211\u4EEC\u7684\u6709\u4E9B\u7B80\u5355\u51FD\u6570\u53EA\u6267\u884C\u4E00\u6B21\u7684\u65F6\u5019,\u6211\u4EEC\u901A\u5E38\u4F1A\u8FD9\u4E48\u505A\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u58F0\u660E\u5F0F\u51FD\u6570</span>
<span class="token keyword">function</span> <span class="token function">func</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;I am a cat&#39;</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
<span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// I am a cat</span>
<span class="token comment">// \u8868\u8FBE\u5F0F\u51FD\u6570</span>
<span class="token keyword">const</span> <span class="token function-variable function">func</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;I am a cat&#39;</span><span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token comment">// \u65B9\u6CD51</span>
<span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// I am a cat</span>
<span class="token keyword">const</span> <span class="token function-variable function">func</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;I am a cat&#39;</span><span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u65B9\u6CD52</span>
func <span class="token comment">// I am a cat</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u65F6\u5019\u6211\u4EEC\u4F1A\u6CE8\u610F\u5230\u51FD\u6570\u7684\u8C03\u7528\u90FD\u8981\u7528\u5230\u51FD\u6570\u540D, \u90A3\u4E48\u5982\u679C\u6211\u4EEC\u4E0D\u60F3\u8981\u8FD9\u4E2A\u51FD\u6570\u540D\u5462?</p><p>\u53EF\u4EE5\u53D1\u73B0\u51FD\u6570\u8868\u8FBE\u5F0F \u65B9\u6CD52 \u4E2D\u5728\u51FD\u6570\u58F0\u660E\u7684\u65F6\u5019\u76F4\u63A5\u5C06\u51FD\u6570\u7ED3\u679C\u8FD4\u56DE\u7ED9\u4E86\u53D8\u91CF func, \u5E76\u4E14\u5728\u8C03\u7528\u53D8\u91CF func \u7684\u65F6\u5019\u6210\u529F\u8FD4\u56DE\u7ED3\u679C\u3002</p><p>\u90A3\u4E48\u662F\u5426\u53EF\u4EE5\u8FD9\u6837\u7406\u89E3, \u76F4\u63A5\u4F7F\u7528function () {console.log(&#39;I am a cat&#39;)}\u5C31\u53EF\u4EE5\u5B9E\u73B0\u6211\u4EEC\u7684\u76EE\u7684?</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;I am a cat&#39;</span><span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token comment">// Function statements require a function name</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5931\u8D25\u4E86? \u51FD\u6570\u9700\u8981\u4E00\u4E2A\u51FD\u6570\u540D!</p><p>\u8FD9\u662F\u56E0\u4E3A\u5F53\u6211\u4EEC\u76F4\u63A5\u4F7F\u7528function () {console.log(&#39;I am a cat&#39;)}\u7684\u65F6\u5019, js\u89E3\u91CA\u5668\u4F1A\u8BA4\u4E3A\u6211\u4EEC\u7684\u51FD\u6570\u662F\u4E00\u4E2A\u58F0\u660E\u5F0F\u51FD\u6570, \u800C\u975E\u8868\u8FBE\u5F0F\u51FD\u6570\u3002</p><p>\u56E0\u6B64\u5FC5\u987B\u4F7F\u7528\u4E00\u4E9B\u7279\u6B8A\u624B\u6BB5,\u8BA9js\u89E3\u91CA\u5668\u8BA4\u51FA\u6211\u4EEC\u5E94\u8BE5\u662F\u51FD\u6570\u8868\u8FBE\u5F0F\u3002 \u8FD9\u6837\u7684\u65B9\u6CD5\u6709\u5F88\u591A,\u6700\u5E38\u89C1\u7684\u83AB\u8FC7\u4E8E\u4EE5\u4E0B\u5199\u6CD5. \u8FD9\u4E5F\u662F\u6211\u6700\u63A8\u8350\u7684\u5199\u6CD5\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;I am a cat&#39;</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token comment">// I am a cat</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5176\u4ED6\u5199\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u5199\u6CD5" aria-hidden="true">#</a> \u5176\u4ED6\u5199\u6CD5</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u77E5\u9053\u5373\u53EF\uFF0C\u9632\u6B62\u9047\u89C1\u4E86\u4E0D\u8BA4\u8BC6</span>
<span class="token operator">!</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">~</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">-</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ES6 \u7BAD\u5934\u51FD\u6570</span>
<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),o=[c];function e(u,i){return s(),a("div",null,o)}const k=n(p,[["render",e],["__file","08.html.vue"]]);export{k as default};