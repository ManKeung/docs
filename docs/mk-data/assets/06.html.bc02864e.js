import{_ as n,o as s,c as a,a as e}from"./app.a5405d0d.js";const p={},t=e(`<h1 id="\u7C7B\u578B\u65AD\u8A00-\u8054\u5408\u7C7B\u578B-\u4EA4\u53C9\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u65AD\u8A00-\u8054\u5408\u7C7B\u578B-\u4EA4\u53C9\u7C7B\u578B" aria-hidden="true">#</a> \u7C7B\u578B\u65AD\u8A00 | \u8054\u5408\u7C7B\u578B | \u4EA4\u53C9\u7C7B\u578B</h1><h2 id="\u8054\u5408\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u8054\u5408\u7C7B\u578B" aria-hidden="true">#</a> \u8054\u5408\u7C7B\u578B</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> phone<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span>

phone <span class="token operator">=</span> <span class="token number">18888888888</span>
phone <span class="token operator">=</span> <span class="token string">&#39;+86-18888888888&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u51FD\u6570\u4F7F\u7528\u8054\u5408\u7C7B\u578B</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span>v<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">!</span><span class="token operator">!</span>v
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4EA4\u53C9\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u4EA4\u53C9\u7C7B\u578B" aria-hidden="true">#</a> \u4EA4\u53C9\u7C7B\u578B</h2><p>\u591A\u79CD\u7C7B\u578B\u7684\u96C6\u5408\uFF0C\u8054\u5408\u5BF9\u8C61\u5C06\u5177\u6709\u6240\u8054\u5408\u7C7B\u578B\u7684\u6240\u6709\u6210\u5458</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">People</span> <span class="token punctuation">{</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
    height<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Boy</span> <span class="token punctuation">{</span>
    sex<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">b</span> <span class="token operator">=</span> <span class="token punctuation">(</span>b<span class="token operator">:</span> People <span class="token operator">&amp;</span> Boy<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>age<span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>height<span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>sex<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">{</span>age<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span> height<span class="token operator">:</span> <span class="token number">180</span><span class="token punctuation">,</span> sex<span class="token operator">:</span> <span class="token string">&#39;boy&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7C7B\u578B\u65AD\u8A00" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u65AD\u8A00" aria-hidden="true">#</a> \u7C7B\u578B\u65AD\u8A00</h2><p>\u8BED\u6CD5\uFF1A\u503Cas\u7C7B\u578B\u6216&lt;\u7C7B\u578B&gt;\u503C<code>value as string &lt;string&gt;value</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
    run<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token punctuation">{</span>
    sing<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span>v<span class="token operator">:</span> <span class="token constant">A</span> <span class="token operator">|</span> <span class="token constant">B</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> v<span class="token punctuation">.</span>run <span class="token comment">// \u8FD9\u6837\u5199\u662F\u6709\u8B66\u544A\u7684\u5E94\u4E3AB\u7684\u63A5\u53E3\u4E0A\u9762\u662F\u6CA1\u6709\u5B9A\u4E49run\u8FD9\u4E2A\u5C5E\u6027\u7684</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
    run<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token punctuation">{</span>
    sing<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span>v<span class="token operator">:</span> <span class="token constant">A</span> <span class="token operator">|</span> <span class="token constant">B</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>v <span class="token keyword">as</span> <span class="token constant">A</span><span class="token punctuation">)</span><span class="token punctuation">.</span>run <span class="token comment">// ok</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u7C7B\u578B\u65AD\u8A00\u53EA\u80FD\u591F\u300C\u6B3A\u9A97\u300DTypeScript \u7F16\u8BD1\u5668\uFF0C\u65E0\u6CD5\u907F\u514D\u8FD0\u884C\u65F6\u7684\u9519\u8BEF\uFF0C\u53CD\u800C\u6EE5\u7528\u7C7B\u578B\u65AD\u8A00\u53EF\u80FD\u4F1A\u5BFC\u81F4\u8FD0\u884C\u65F6\u9519\u8BEF</p></blockquote><h2 id="\u4F7F\u7528any\u4E34\u65F6\u65AD\u8A00" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528any\u4E34\u65F6\u65AD\u8A00" aria-hidden="true">#</a> \u4F7F\u7528any\u4E34\u65F6\u65AD\u8A00</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>window<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token string">&#39;a&#39;</span> <span class="token comment">// error</span>

<span class="token punctuation">(</span>window <span class="token keyword">as</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token string">&#39;a&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="as-const" tabindex="-1"><a class="header-anchor" href="#as-const" aria-hidden="true">#</a> as const</h2><p>\u662F\u5BF9\u5B57\u9762\u503C\u7684\u65AD\u8A00\uFF0C\u4E0Econst\u76F4\u63A5\u5B9A\u4E49\u5E38\u91CF\u662F\u6709\u533A\u522B\u7684</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&#39;mk&#39;</span>
name <span class="token operator">=</span> <span class="token string">&#39;mankeung&#39;</span> <span class="token comment">// error</span>

<span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">&#39;mk&#39;</span> <span class="token keyword">as</span> <span class="token keyword">const</span>
name <span class="token operator">=</span> <span class="token string">&#39;mankeung&#39;</span> <span class="token comment">// error</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token keyword">as</span> <span class="token keyword">const</span>
<span class="token keyword">const</span> a2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>

a<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token comment">// error</span>
a2<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token comment">// ok</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7C7B\u578B\u65AD\u8A00\u662F\u4E0D\u5177\u5F71\u54CD\u529B\u7684" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u65AD\u8A00\u662F\u4E0D\u5177\u5F71\u54CD\u529B\u7684" aria-hidden="true">#</a> \u7C7B\u578B\u65AD\u8A00\u662F\u4E0D\u5177\u5F71\u54CD\u529B\u7684</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span>v<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> v <span class="token keyword">as</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>

<span class="token function">fn</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// \u7F16\u8BD1\u8FC7\u7A0B\u4E2D\u4F1A\u5220\u9664\u7C7B\u578B\u65AD\u8A00 \u8FD4\u56DE1\u5E76\u4E0D\u4F1A\u53D8\u5E03\u5C14\u503C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),o=[t];function c(i,l){return s(),a("div",null,o)}const u=n(p,[["render",c],["__file","06.html.vue"]]);export{u as default};
