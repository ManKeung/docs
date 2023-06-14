import{_ as n,o as s,c as a,a as e}from"./app.211258b5.js";const p={},t=e(`<h1 id="\u63A5\u53E3\u548C\u5BF9\u8C61\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u63A5\u53E3\u548C\u5BF9\u8C61\u7C7B\u578B" aria-hidden="true">#</a> \u63A5\u53E3\u548C\u5BF9\u8C61\u7C7B\u578B</h1><h2 id="\u5BF9\u8C61\u7684\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61\u7684\u7C7B\u578B" aria-hidden="true">#</a> \u5BF9\u8C61\u7684\u7C7B\u578B</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> p<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
    age<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&#39;mk&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u91CD\u540Dinterface  \u53EF\u4EE5\u5408\u5E76</span>
<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> a<span class="token operator">:</span> <span class="token constant">A</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;mk&#39;</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7EE7\u627F</span>
<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">A</span></span><span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token constant">A</span></span><span class="token punctuation">{</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> b<span class="token operator">:</span><span class="token constant">B</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    age<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&quot;mk&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53EF\u9009\u5C5E\u6027-\u4F7F\u7528-\u64CD\u4F5C\u7B26" tabindex="-1"><a class="header-anchor" href="#\u53EF\u9009\u5C5E\u6027-\u4F7F\u7528-\u64CD\u4F5C\u7B26" aria-hidden="true">#</a> \u53EF\u9009\u5C5E\u6027 \u4F7F\u7528?\u64CD\u4F5C\u7B26</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    age<span class="token operator">?</span><span class="token operator">:</span> number
    <span class="token literal-property property">name</span><span class="token operator">:</span> string
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token literal-property property">p</span><span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;mk&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4EFB\u610F\u5C5E\u6027-propname-string" tabindex="-1"><a class="header-anchor" href="#\u4EFB\u610F\u5C5E\u6027-propname-string" aria-hidden="true">#</a> \u4EFB\u610F\u5C5E\u6027 [propName: string]</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token punctuation">[</span>propName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> p<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;mk&#39;</span><span class="token punctuation">,</span>
    sex<span class="token operator">:</span> <span class="token string">&#39;boy&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53EA\u8BFB\u5C5E\u6027-readonly" tabindex="-1"><a class="header-anchor" href="#\u53EA\u8BFB\u5C5E\u6027-readonly" aria-hidden="true">#</a> \u53EA\u8BFB\u5C5E\u6027 readonly</h2><p>readonly \u53EA\u8BFB\u5C5E\u6027\u662F\u4E0D\u5141\u8BB8\u88AB\u8D4B\u503C\u7684\u53EA\u80FD\u8BFB\u53D6</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">readonly</span> sex<span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token punctuation">[</span>propName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> p<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
    sex<span class="token operator">:</span> <span class="token string">&#39;boy&#39;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&#39;mk&#39;</span>
<span class="token punctuation">}</span>

p<span class="token punctuation">.</span>sex <span class="token operator">=</span> <span class="token string">&#39;girl&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u4E00\u65E6\u5B9A\u4E49\u4E86\u4EFB\u610F\u5C5E\u6027\uFF0C\u90A3\u4E48\u786E\u5B9A\u5C5E\u6027\u548C\u53EF\u9009\u5C5E\u6027\u7684\u7C7B\u578B\u90FD\u5FC5\u987B\u662F\u5B83\u7684\u7C7B\u578B\u7684\u5B50\u96C6</p></blockquote><h2 id="\u6DFB\u52A0\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u51FD\u6570" aria-hidden="true">#</a> \u6DFB\u52A0\u51FD\u6570</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">cb</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> p<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">cb</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;person&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),i=[t];function o(l,c){return s(),a("div",null,i)}const d=n(p,[["render",o],["__file","03.html.vue"]]);export{d as default};
