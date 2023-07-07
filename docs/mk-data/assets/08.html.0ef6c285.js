import{_ as n,o as s,c as a,a as e}from"./app.dc008982.js";const t={},p=e(`<h1 id="class\u7C7B" tabindex="-1"><a class="header-anchor" href="#class\u7C7B" aria-hidden="true">#</a> Class\u7C7B</h1><p>es6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ts</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5728TypeScript\u662F\u4E0D\u5141\u8BB8\u76F4\u63A5\u5728constructor \u5B9A\u4E49\u53D8\u91CF\u7684 \u9700\u8981\u5728constructor\u4E0A\u9762\u5148\u58F0\u660E</span>
    <span class="token comment">// \u5982\u679C\u4E86\u5B9A\u4E49\u4E86\u53D8\u91CF\u4E0D\u7528 \u4E5F\u4F1A\u62A5\u9519 \u901A\u5E38\u662F\u7ED9\u4E2A\u9ED8\u8BA4\u503C \u6216\u8005 \u8FDB\u884C\u8D4B\u503C</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7C7B\u7684\u4FEE\u9970\u7B26" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u7684\u4FEE\u9970\u7B26" aria-hidden="true">#</a> \u7C7B\u7684\u4FEE\u9970\u7B26</h2><p>public private protected</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u4F7F\u7528public \u4FEE\u9970\u7B26 \u53EF\u4EE5\u8BA9\u4F60\u5B9A\u4E49\u7684\u53D8\u91CF \u5185\u90E8\u8BBF\u95EE \u4E5F\u53EF\u4EE5\u5916\u90E8\u8BBF\u95EE \u5982\u679C\u4E0D\u5199\u9ED8\u8BA4\u5C31\u662Fpublic</span>
    <span class="token keyword">public</span> name<span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token comment">// \u4F7F\u7528  private \u4FEE\u9970\u7B26 \u4EE3\u8868\u5B9A\u4E49\u7684\u53D8\u91CF\u79C1\u6709\u7684\u53EA\u80FD\u5728\u5185\u90E8\u8BBF\u95EE \u4E0D\u80FD\u5728\u5916\u90E8\u8BBF\u95EE</span>
    <span class="token keyword">private</span> age<span class="token operator">:</span> <span class="token builtin">number</span>
    <span class="token comment">// \u4F7F\u7528  protected \u4FEE\u9970\u7B26 \u4EE3\u8868\u5B9A\u4E49\u7684\u53D8\u91CF\u79C1\u6709\u7684\u53EA\u80FD\u5728\u5185\u90E8\u548C\u7EE7\u627F\u7684\u5B50\u7C7B\u4E2D\u8BBF\u95EE \u4E0D\u80FD\u5728\u5916\u90E8\u8BBF\u95EE</span>
    <span class="token keyword">protected</span> data<span class="token operator">:</span> <span class="token builtin">any</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> data<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
        <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> data
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="static-\u9759\u6001\u5C5E\u6027-\u548C-\u9759\u6001\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#static-\u9759\u6001\u5C5E\u6027-\u548C-\u9759\u6001\u65B9\u6CD5" aria-hidden="true">#</a> static \u9759\u6001\u5C5E\u6027 \u548C \u9759\u6001\u65B9\u6CD5</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;mk&#39;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token comment">// error \u7528static \u5B9A\u4E49\u7684\u5C5E\u6027 \u4E0D\u53EF\u4EE5\u901A\u8FC7this \u53BB\u8BBF\u95EE \u53EA\u80FD\u901A\u8FC7\u7C7B\u540D\u53BB\u8C03\u7528</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

Person<span class="token punctuation">.</span>name <span class="token comment">// 0k</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u4E24\u4E2A\u51FD\u6570\u90FD\u662Fstatic \u9759\u6001\u7684\u662F\u53EF\u4EE5\u901A\u8FC7this\u4E92\u76F8\u8C03\u7528</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">sing</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">static</span> <span class="token function">sing</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&#39;sing&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>static \u9759\u6001\u51FD\u6570 \u540C\u6837\u4E5F\u662F\u4E0D\u80FD\u901A\u8FC7this \u53BB\u8C03\u7528 \u4E5F\u662F\u901A\u8FC7\u7C7B\u540D\u53BB\u8C03\u7528</p></blockquote><h2 id="interface-\u5B9A\u4E49-\u7C7B" tabindex="-1"><a class="header-anchor" href="#interface-\u5B9A\u4E49-\u7C7B" aria-hidden="true">#</a> interface \u5B9A\u4E49 \u7C7B</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token function">get</span><span class="token punctuation">(</span>type<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Person2</span> <span class="token punctuation">{</span>
    <span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">18</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">P</span></span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token keyword">implements</span> <span class="token class-name">Person</span><span class="token punctuation">,</span> Person2 <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token operator">=</span> <span class="token string">&#39;mk&#39;</span>
    <span class="token punctuation">}</span>

    <span class="token function">get</span><span class="token punctuation">(</span>type<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> type
    <span class="token punctuation">}</span>

    <span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>interface \u5B9A\u4E49\u7C7B \u4F7F\u7528\u5173\u952E\u5B57 implements \u540E\u9762\u8DDFinterface\u7684\u540D\u5B57\u591A\u4E2A\u7528\u9017\u53F7\u9694\u5F00 \u7EE7\u627F\u8FD8\u662F\u7528extends</p></blockquote><h2 id="\u62BD\u8C61\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u62BD\u8C61\u7C7B" aria-hidden="true">#</a> \u62BD\u8C61\u7C7B</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> name<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">new</span> <span class="token class-name"><span class="token constant">A</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// error \u62BD\u8C61\u7C7B\u65E0\u6CD5\u88AB\u5B9E\u4F8B\u5316</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u5B9A\u4E49\u7684\u62BD\u8C61\u65B9\u6CD5\u5FC5\u987B\u5728\u6D3E\u751F\u7C7B\u5B9E\u73B0</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token punctuation">}</span>

    <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
    <span class="token punctuation">}</span>

    <span class="token keyword">abstract</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token string">&#39;mk&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">B</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),c=[p];function i(o,l){return s(),a("div",null,c)}const r=n(t,[["render",i],["__file","08.html.vue"]]);export{r as default};
