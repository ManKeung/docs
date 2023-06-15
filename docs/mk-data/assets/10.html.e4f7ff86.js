import{_ as n,o as s,c as a,a as e}from"./app.fe9eae39.js";const t={},p=e(`<h1 id="\u679A\u4E3E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u679A\u4E3E\u7C7B\u578B" aria-hidden="true">#</a> \u679A\u4E3E\u7C7B\u578B</h1><p>\u4F7F\u7528\u679A\u4E3E \u901A\u8FC7enum\u5173\u952E\u5B57\u5B9A\u4E49\u6211\u4EEC\u7684\u679A\u4E3E</p><h2 id="\u6570\u5B57\u679A\u4E3E" tabindex="-1"><a class="header-anchor" href="#\u6570\u5B57\u679A\u4E3E" aria-hidden="true">#</a> \u6570\u5B57\u679A\u4E3E</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">enum</span> Types <span class="token punctuation">{</span>
    Red<span class="token punctuation">,</span>
    Green<span class="token punctuation">,</span>
    Blue
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u7EA2\u7EFF\u84DD Red = 0 Green = 1 Blue= 2 \u5206\u522B\u4EE3\u8868\u7EA2\u82720 \u7EFF\u8272\u4E3A1 \u84DD\u8272\u4E3A2 \u9ED8\u8BA4\u5C31\u662F\u4ECE0\u5F00\u59CB\u7684</p></blockquote><p>\u589E\u957F\u679A\u4E3E</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">enum</span> Types <span class="token punctuation">{</span>
    Red <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
    Green<span class="token punctuation">,</span>
    Blue
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5B9A\u4E49\u4E86\u4E00\u4E2A\u6570\u5B57\u679A\u4E3E\uFF0C Red\u4F7F\u7528\u521D\u59CB\u5316\u4E3A 1\u3002 \u5176\u4F59\u7684\u6210\u5458\u4F1A\u4ECE 1\u5F00\u59CB\u81EA\u52A8\u589E\u957F\u3002 \u6362\u53E5\u8BDD\u8BF4\uFF0C Type.Red\u7684\u503C\u4E3A 1\uFF0C Green\u4E3A 2\uFF0C Blue\u4E3A 3\u3002</p></blockquote><h2 id="\u5B57\u7B26\u4E32\u679A\u4E3E" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32\u679A\u4E3E" aria-hidden="true">#</a> \u5B57\u7B26\u4E32\u679A\u4E3E</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">enum</span> Types <span class="token punctuation">{</span>
    Red <span class="token operator">=</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span>
    Green <span class="token operator">=</span> <span class="token string">&#39;green&#39;</span><span class="token punctuation">,</span>
    Blue <span class="token operator">=</span> <span class="token string">&#39;blue&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5F02\u6784\u679A\u4E3E" tabindex="-1"><a class="header-anchor" href="#\u5F02\u6784\u679A\u4E3E" aria-hidden="true">#</a> \u5F02\u6784\u679A\u4E3E</h2><p>\u679A\u4E3E\u53EF\u4EE5\u6DF7\u5408\u5B57\u7B26\u4E32\u548C\u6570\u5B57\u6210\u5458</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">enum</span> Types<span class="token punctuation">{</span>
   No <span class="token operator">=</span> <span class="token string">&#39;No&#39;</span><span class="token punctuation">,</span>
   Yes <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u63A5\u53E3\u679A\u4E3E" tabindex="-1"><a class="header-anchor" href="#\u63A5\u53E3\u679A\u4E3E" aria-hidden="true">#</a> \u63A5\u53E3\u679A\u4E3E</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">enum</span> Types <span class="token punctuation">{</span>
    name<span class="token punctuation">,</span>
    age
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> Types<span class="token punctuation">.</span>name
<span class="token punctuation">}</span>

<span class="token keyword">let</span> obj<span class="token operator">:</span> <span class="token constant">A</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> Types<span class="token punctuation">.</span>name
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="const\u679A\u4E3E" tabindex="-1"><a class="header-anchor" href="#const\u679A\u4E3E" aria-hidden="true">#</a> const\u679A\u4E3E</h2><p>let\u548Cvar\u90FD\u662F\u4E0D\u5141\u8BB8\u7684\u58F0\u660E\u53EA\u80FD\u4F7F\u7528const</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token keyword">enum</span> Types<span class="token punctuation">{</span>
   No <span class="token operator">=</span> <span class="token string">&#39;No&#39;</span><span class="token punctuation">,</span>
   Yes <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>const \u58F0\u660E\u7684\u679A\u4E3E\u4F1A\u88AB\u7F16\u8BD1\u6210\u5E38\u91CF</p></blockquote><h2 id="\u53CD\u5411\u6620\u5C04" tabindex="-1"><a class="header-anchor" href="#\u53CD\u5411\u6620\u5C04" aria-hidden="true">#</a> \u53CD\u5411\u6620\u5C04</h2><p>\u5B83\u5305\u542B\u4E86\u6B63\u5411\u6620\u5C04\uFF08 name -&gt; value\uFF09\u548C\u53CD\u5411\u6620\u5C04\uFF08 value -&gt; name\uFF09</p><p>\u8981\u6CE8\u610F\u7684\u662F \u4E0D\u4F1A\u4E3A\u5B57\u7B26\u4E32\u679A\u4E3E\u6210\u5458\u751F\u6210\u53CD\u5411\u6620\u5C04\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">enum</span> Enum <span class="token punctuation">{</span>
    fall
<span class="token punctuation">}</span>

<span class="token keyword">const</span> a <span class="token operator">=</span> Enum<span class="token punctuation">.</span>fall
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token keyword">const</span> name <span class="token operator">=</span> Enum<span class="token punctuation">[</span>a<span class="token punctuation">]</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23),i=[p];function c(l,o){return s(),a("div",null,i)}const r=n(t,[["render",c],["__file","10.html.vue"]]);export{r as default};
