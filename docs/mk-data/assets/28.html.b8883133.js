import{_ as s,o as n,c as a,a as e}from"./app.a5405d0d.js";const p={},t=e(`<h1 id="infer-\u9012\u5F52" tabindex="-1"><a class="header-anchor" href="#infer-\u9012\u5F52" aria-hidden="true">#</a> infer \u9012\u5F52</h1><p>\u6709\u8FD9\u4E48\u4E00\u4E2A\u7C7B\u578B</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Arr</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5E0C\u671B\u901A\u8FC7\u4E00\u4E2A ts \u5DE5\u5177\u53D8\u6210</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Arr</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B8C\u6574\u4EE3\u7801</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Arr</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>

<span class="token keyword">type</span> <span class="token class-name">ReveArr<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token punctuation">[</span><span class="token keyword">infer</span> First<span class="token punctuation">,</span> <span class="token operator">...</span><span class="token keyword">infer</span> rest<span class="token punctuation">]</span> <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token operator">...</span>ReveArr<span class="token operator">&lt;</span>rest<span class="token operator">&gt;</span><span class="token punctuation">,</span> First<span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token constant">T</span>

<span class="token keyword">type</span> <span class="token class-name">Res</span> <span class="token operator">=</span> ReveArr<span class="token operator">&lt;</span>Arr<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5177\u4F53\u601D\u8DEF \u9996\u5148\u4F7F\u7528\u6CDB\u578B\u7EA6\u675F \u7EA6\u675F\u53EA\u80FD\u4F20\u5165\u6570\u7EC4\u7C7B\u578B\u7684\u4E1C\u897F \u7136\u540E\u4ECE\u6570\u7EC4\u4E2D\u63D0\u53D6\u7B2C\u4E00\u4E2A\uFF0C\u653E\u5165\u65B0\u6570\u7EC4\u7684\u672B\u5C3E\uFF0C\u53CD\u590D\u6B64\u64CD\u4F5C\uFF0C\u5F62\u6210\u9012\u5F52 \u6EE1\u8DB3\u7ED3\u675F\u6761\u4EF6\u8FD4\u56DE\u8BE5\u7C7B\u578B</p></blockquote>`,8),o=[t];function c(l,r){return n(),a("div",null,o)}const u=s(p,[["render",c],["__file","28.html.vue"]]);export{u as default};
