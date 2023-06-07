import{_ as n,o as s,c as a,a as t}from"./app.9fb31c86.js";const p={},e=t(`<h1 id="\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6" aria-hidden="true">#</a> \u6587\u4EF6</h1><ul><li>\u8BFB\u53D6\u6587\u4EF6</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u6253\u5F00\u6587\u4EF6</span>
<span class="token builtin">file</span> <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;./txt.txt&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># \u8BFB\u53D6\u6587\u4EF6</span>
text <span class="token operator">=</span> <span class="token builtin">file</span><span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span>

<span class="token comment"># \u5173\u95ED</span>
<span class="token builtin">file</span><span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8BFB\u53D6\u6587\u4EF6\u540E\u6587\u4EF6\u6307\u9488\u4F1A\u6539\u53D8</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u6253\u5F00\u6587\u4EF6</span>
<span class="token builtin">file</span> <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;./txt.txt&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># \u8BFB\u53D6\u6587\u4EF6</span>
text <span class="token operator">=</span> <span class="token builtin">file</span><span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span> <span class="token operator">*</span> <span class="token number">50</span><span class="token punctuation">)</span>

text2 <span class="token operator">=</span> <span class="token builtin">file</span><span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>text2<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>text2<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># \u5173\u95ED</span>
<span class="token builtin">file</span><span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5199\u5165\u6587\u4EF6</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u6253\u5F00</span>
<span class="token comment"># file = open(&#39;./text.txt&#39;, &#39;w&#39;)</span>
<span class="token builtin">file</span> <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;./text.txt&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># \u5199\u5165\u6587\u4EF6</span>
<span class="token builtin">file</span><span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">&#39;hello world!&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># \u5173\u95ED\u6587\u4EF6</span>
<span class="token builtin">file</span><span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5206\u884C\u8BFB\u53D6\u6587\u4EF6</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token builtin">file</span> <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;./txt.txt&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
    text <span class="token operator">=</span> <span class="token builtin">file</span><span class="token punctuation">.</span>readline<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># \u5224\u65AD\u662F\u5426\u8BFB\u53D6\u5230\u5185\u5BB9</span>
    <span class="token keyword">if</span> <span class="token keyword">not</span> text<span class="token punctuation">:</span>
        <span class="token keyword">break</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span>

<span class="token builtin">file</span><span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u590D\u5236\u6587\u4EF6</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u6253\u5F00</span>
file_read <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;./txt.txt&#39;</span><span class="token punctuation">)</span>
file_write <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;./txt[\u9644\u4EF6].txt&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;w&#39;</span><span class="token punctuation">)</span>


<span class="token comment"># \u8BFB\u3001\u5199</span>
text <span class="token operator">=</span> file_read<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
file_write<span class="token punctuation">.</span>write<span class="token punctuation">(</span>text<span class="token punctuation">)</span>


<span class="token comment"># \u5173\u95ED</span>
file_read<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
file_write<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot; \u590D\u5236\u5927\u6587\u4EF6 &quot;&quot;&quot;</span>
<span class="token comment"># \u6253\u5F00</span>
file_read <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;./txt.txt&#39;</span><span class="token punctuation">)</span>
file_write <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;./txt[\u9644\u4EF6].txt&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;w&#39;</span><span class="token punctuation">)</span>


<span class="token comment"># \u8BFB\u3001\u5199</span>
<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
    text <span class="token operator">=</span> file_read<span class="token punctuation">.</span>readline<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token keyword">not</span> text<span class="token punctuation">:</span>
        <span class="token keyword">break</span>

    file_write<span class="token punctuation">.</span>write<span class="token punctuation">(</span>text<span class="token punctuation">)</span>


<span class="token comment"># \u5173\u95ED</span>
file_read<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
file_write<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>eval</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>input_str <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;\u8F93\u5165\u7B97\u672F\u9898\uFF1A&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">eval</span><span class="token punctuation">(</span>input_str<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>os</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> os
<span class="token keyword">print</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>getcwd<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># \u83B7\u53D6\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55\u8DEF\u5F84</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>abspath<span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># \u83B7\u53D6\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55\u8DEF\u5F84</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>abspath<span class="token punctuation">(</span><span class="token string">&#39;txt.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># \u83B7\u53D6\u5F53\u524D\u76EE\u5F55\u6587\u4EF6\u4E0B\u7684\u5DE5\u4F5C\u76EE\u5F55\u8DEF\u5F84</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>abspath<span class="token punctuation">(</span><span class="token string">&#39;..&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># \u83B7\u53D6\u5F53\u524D\u5DE5\u4F5C\u7684\u7236\u76EE\u5F55 \uFF01\u6CE8\u610F\u662F\u7236\u76EE\u5F55\u8DEF\u5F84</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>abspath<span class="token punctuation">(</span>os<span class="token punctuation">.</span>curdir<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># \u83B7\u53D6\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55\u8DEF\u5F84</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>listdir<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>with</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u81EA\u5DF1\u5B9E\u73B0</span>
<span class="token keyword">from</span> contextlib <span class="token keyword">import</span> contextmanager

<span class="token decorator annotation punctuation">@contextmanager</span>
<span class="token keyword">def</span> <span class="token function">my_open</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> mode<span class="token punctuation">)</span><span class="token punctuation">:</span>
    f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> mode<span class="token punctuation">)</span>
    <span class="token keyword">yield</span> f
    f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">with</span> my_open<span class="token punctuation">(</span><span class="token string">&#39;out.txt&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;w&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
    f<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">&#39;hello , the simplest context manager&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># with open\u6253\u5F00\u6587\u4EF6</span>
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;out.txt&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;w&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
    f<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">&#39;hello , the simplest context manager&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u4E0A\u4E0B\u6587\u7BA1\u7406\u5668</span>
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;./1.txt&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
    f<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">&#39;hello flask&#39;</span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__enter__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot; \u8FDB\u5165with\u8BED\u53E5\u7684\u65F6\u5019\u88ABwith\u8C03\u7528 &quot;&quot;&quot;</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;enter called&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">__exit__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> exc_type<span class="token punctuation">,</span> exc_val<span class="token punctuation">,</span> exc_tb<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot; \u79BB\u5F00with\u8BED\u53E5\u7684\u65F6\u5019\u88ABwith\u8C03\u7528 &quot;&quot;&quot;</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;exit called&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;exc_type: %s&#39;</span> <span class="token operator">%</span> exc_type<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;exc_val: %s&#39;</span> <span class="token operator">%</span> exc_val<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;exc_tb: %s&#39;</span> <span class="token operator">%</span> exc_tb<span class="token punctuation">)</span>

<span class="token keyword">with</span> Foo<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> foo<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;hello python&#39;</span><span class="token punctuation">)</span>
    a <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">/</span> <span class="token number">0</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;hello end&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),i=[e];function o(l,c){return s(),a("div",null,i)}const d=n(p,[["render",o],["__file","file.html.vue"]]);export{d as default};
