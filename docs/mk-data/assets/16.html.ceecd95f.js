import{_ as n,o as s,c as a,a as e}from"./app.36dd9d4a.js";const p={},t=e(`<h1 id="namespace\u547D\u540D\u7A7A\u95F4" tabindex="-1"><a class="header-anchor" href="#namespace\u547D\u540D\u7A7A\u95F4" aria-hidden="true">#</a> namespace\u547D\u540D\u7A7A\u95F4</h1><ul><li>\u6211\u4EEC\u5728\u5DE5\u4F5C\u4E2D\u65E0\u6CD5\u907F\u514D\u5168\u5C40\u53D8\u91CF\u9020\u6210\u7684\u6C61\u67D3\uFF0CTypeScript\u63D0\u4F9B\u4E86namespace \u907F\u514D\u8FD9\u4E2A\u95EE\u9898\u51FA\u73B0 <ul><li>\u5185\u90E8\u6A21\u5757\uFF0C\u4E3B\u8981\u7528\u4E8E\u7EC4\u7EC7\u4EE3\u7801\uFF0C\u907F\u514D\u547D\u540D\u51B2\u7A81\u3002</li><li>\u547D\u540D\u7A7A\u95F4\u5185\u7684\u7C7B\u9ED8\u8BA4\u79C1\u6709</li><li>\u901A\u8FC7 export \u66B4\u9732</li><li>\u901A\u8FC7 namespace \u5173\u952E\u5B57\u5B9A\u4E49</li></ul></li></ul><p><strong>TypeScript\u4E0EECMAScript 2015\u4E00\u6837\uFF0C\u4EFB\u4F55\u5305\u542B\u9876\u7EA7import\u6216\u8005export\u7684\u6587\u4EF6\u90FD\u88AB\u5F53\u6210\u4E00\u4E2A\u6A21\u5757\u3002\u76F8\u53CD\u5730\uFF0C\u5982\u679C\u4E00\u4E2A\u6587\u4EF6\u4E0D\u5E26\u6709\u9876\u7EA7\u7684import\u6216\u8005export\u58F0\u660E\uFF0C\u90A3\u4E48\u5B83\u7684\u5185\u5BB9\u88AB\u89C6\u4E3A\u5168\u5C40\u53EF\u89C1\u7684\uFF08\u56E0\u6B64\u5BF9\u6A21\u5757\u4E5F\u662F\u53EF\u89C1\u7684\uFF09</strong></p><p>\u547D\u540D\u7A7A\u95F4\u4E2D\u901A\u8FC7export\u5C06\u60F3\u8981\u66B4\u9732\u7684\u90E8\u5206\u5BFC\u51FA \u5982\u679C\u4E0D\u7528export \u5BFC\u51FA\u662F\u65E0\u6CD5\u8BFB\u53D6\u5176\u503C\u7684</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">namespace</span> a <span class="token punctuation">{</span>
    <span class="token keyword">export</span> <span class="token keyword">const</span> Time<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">1000</span>
    <span class="token keyword">export</span> <span class="token keyword">const</span> fn <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> arg
    <span class="token punctuation">}</span>
    <span class="token function">fn</span><span class="token punctuation">(</span>Time<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">namespace</span> b <span class="token punctuation">{</span>
    <span class="token keyword">export</span> <span class="token keyword">const</span> Time<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">1000</span>
    <span class="token keyword">export</span> <span class="token keyword">const</span> fn <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> arg
    <span class="token punctuation">}</span>
    <span class="token function">fn</span><span class="token punctuation">(</span>Time<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

a<span class="token punctuation">.</span>Time
b<span class="token punctuation">.</span>Time
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5D4C\u5957\u547D\u540D\u7A7A\u95F4</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">namespace</span> a <span class="token punctuation">{</span>
    <span class="token keyword">export</span> <span class="token keyword">namespace</span> b <span class="token punctuation">{</span>
        <span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Vue</span> <span class="token punctuation">{</span>
            parameters<span class="token operator">:</span> <span class="token builtin">string</span>
            <span class="token function">constructor</span><span class="token punctuation">(</span>parameters<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>parameters <span class="token operator">=</span> parameters
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> v <span class="token operator">=</span> a<span class="token punctuation">.</span>b<span class="token punctuation">.</span>Vue

<span class="token keyword">new</span> <span class="token class-name">v</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u62BD\u79BB\u547D\u540D\u7A7A\u95F4</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// a.ts</span>
<span class="token keyword">export</span> <span class="token keyword">namespace</span> <span class="token constant">V</span> <span class="token punctuation">{</span>
    <span class="token keyword">export</span> <span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// b.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">V</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../observer/index&#39;</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">V</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B80\u5316\u547D\u540D\u7A7A\u95F4</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">namespace</span> <span class="token constant">A</span>  <span class="token punctuation">{</span>
    <span class="token keyword">export</span> <span class="token keyword">namespace</span> <span class="token constant">B</span> <span class="token punctuation">{</span>
        <span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">C</span> <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">import</span> <span class="token constant">X</span> <span class="token operator">=</span> <span class="token constant">A</span><span class="token punctuation">.</span><span class="token constant">B</span><span class="token punctuation">.</span><span class="token constant">C</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">X</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5408\u5E76\u547D\u540D\u7A7A\u95F4</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u91CD\u540D\u7684\u547D\u540D\u7A7A\u95F4\u4F1A\u5408\u5E76</span>
<span class="token keyword">namespace</span> a <span class="token punctuation">{</span>
    <span class="token keyword">export</span> <span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token number">1</span>
<span class="token punctuation">}</span>

<span class="token keyword">namespace</span> a <span class="token punctuation">{</span>
    <span class="token keyword">export</span> <span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token number">2</span>
<span class="token punctuation">}</span>

a<span class="token punctuation">.</span>b
a<span class="token punctuation">.</span>c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),o=[t];function c(l,i){return s(),a("div",null,o)}const u=n(p,[["render",c],["__file","16.html.vue"]]);export{u as default};
