import{_ as n,o as s,c as a,a as e}from"./app.a5405d0d.js";const p={},t=e(`<h1 id="never\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#never\u7C7B\u578B" aria-hidden="true">#</a> never\u7C7B\u578B</h1><p>TypeScript \u5C06\u4F7F\u7528 never \u7C7B\u578B\u6765\u8868\u793A\u4E0D\u5E94\u8BE5\u5B58\u5728\u7684\u72B6\u6001</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u8FD4\u56DEnever\u7684\u51FD\u6570\u5FC5\u987B\u5B58\u5728\u65E0\u6CD5\u8FBE\u5230\u7684\u7EC8\u70B9</span>
<span class="token comment">// \u56E0\u4E3A\u5FC5\u5B9A\u629B\u51FA\u5F02\u5E38\uFF0C\u6240\u4EE5 error \u5C06\u4E0D\u4F1A\u6709\u8FD4\u56DE\u503C</span>
<span class="token keyword">function</span> <span class="token function">error</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">never</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u56E0\u4E3A\u5B58\u5728\u6B7B\u5FAA\u73AF\uFF0C\u6240\u4EE5 loop \u5C06\u4E0D\u4F1A\u6709\u8FD4\u56DE\u503C</span>
<span class="token keyword">function</span> <span class="token function">loop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">never</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="never-\u4E0E-void-\u7684\u5DEE\u5F02" tabindex="-1"><a class="header-anchor" href="#never-\u4E0E-void-\u7684\u5DEE\u5F02" aria-hidden="true">#</a> never \u4E0E void \u7684\u5DEE\u5F02</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">//void\u7C7B\u578B\u53EA\u662F\u6CA1\u6709\u8FD4\u56DE\u503C \u4F46\u672C\u8EAB\u4E0D\u4F1A\u51FA\u9519</span>
<span class="token keyword">function</span> <span class="token function">Void</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u53EA\u4F1A\u629B\u51FA\u5F02\u5E38\u6CA1\u6709\u8FD4\u56DE\u503C</span>
<span class="token keyword">function</span> <span class="token function">Never</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">never</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u6211\u4EEC\u9F20\u6807\u79FB\u4E0A\u53BB\u7684\u65F6\u5019\u4F1A\u53D1\u73B0 \u53EA\u6709void\u548Cnumber never\u5728\u8054\u5408\u7C7B\u578B\u4E2D\u4F1A\u88AB\u76F4\u63A5\u79FB\u9664</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token operator">=</span> <span class="token keyword">void</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">never</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="never-\u7C7B\u578B\u7684\u4E00\u4E2A\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#never-\u7C7B\u578B\u7684\u4E00\u4E2A\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> never \u7C7B\u578B\u7684\u4E00\u4E2A\u5E94\u7528\u573A\u666F</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token operator">=</span> <span class="token string">&#39;mk&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;mankeung&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;mkimq&#39;</span>

<span class="token keyword">function</span> <span class="token function">IsMy</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token constant">A</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token string">&#39;mk&#39;</span><span class="token operator">:</span>
            <span class="token keyword">break</span>
        <span class="token keyword">case</span> <span class="token string">&#39;mankeung&#39;</span><span class="token operator">:</span>
            <span class="token keyword">break</span>
        <span class="token keyword">case</span> <span class="token string">&#39;mkimq&#39;</span><span class="token operator">:</span>
            <span class="token keyword">break</span>
        <span class="token keyword">default</span><span class="token operator">:</span>
            <span class="token comment">// \u662F\u7528\u4E8E\u573A\u666F\u515C\u5E95\u903B\u8F91</span>
            <span class="token keyword">const</span> error<span class="token operator">:</span> <span class="token builtin">never</span> <span class="token operator">=</span> value
            <span class="token keyword">return</span> error
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),o=[t];function c(i,l){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","12.html.vue"]]);export{d as default};
