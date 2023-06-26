import{_ as n,o as s,c as a,a as e}from"./app.822402f0.js";const p={},t=e(`<h1 id="\u8BED\u6CD5\u8FDB\u9636" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5\u8FDB\u9636" aria-hidden="true">#</a> \u8BED\u6CD5\u8FDB\u9636</h1><ul><li>\u5F15\u7528</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">test</span> <span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u5728\u51FD\u6570\u5185\u90E8%d\u5BF9\u5E94\u7684\u5185\u5B58\u5730\u5740\u662F%d&#39;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>num<span class="token punctuation">,</span> <span class="token builtin">id</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment"># \u5B9A\u4E49\u4E00\u4E2A\u5B57\u7B26\u4E32\u53D8\u91CF</span>
    result <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u51FD\u6570\u8981\u8FD4\u56DE\u6570\u636E\u7684\u5185\u5B58\u5730\u5740\u662F%d&#39;</span> <span class="token operator">%</span> <span class="token builtin">id</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment"># \u5C06\u5B57\u7B26\u4E32\u53D8\u91CF\u8FD4\u56DE</span>
    <span class="token keyword">return</span> result


<span class="token comment"># \u5B9A\u4E49\u4E00\u4E2A\u6570\u5B57\u7684\u53D8\u91CF</span>
a <span class="token operator">=</span> <span class="token number">10</span>

<span class="token comment"># \u6570\u636E\u7684\u5730\u5740\u672C\u8D28\u4E0A\u5C31\u662F\u4E00\u4E2A\u6570\u5B57</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;a\u53D8\u91CF\u4FDD\u5B58\u6570\u636E\u7684\u5185\u5B58\u5730\u5740%d&#39;</span> <span class="token operator">%</span> <span class="token builtin">id</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># \u8C03\u7528 test \u51FD\u6570 \u672C\u8D28\u4E0A\u4F20\u9012\u7684\u662F\u5B9E\u53C2\u4FDD\u5B58\u6570\u636E\u7684\u5F15\u7528 \u800C\u4E0D\u662F\u5B9E\u53C2\u4FDD\u5B58\u7684\u6570\u5B57</span>
<span class="token comment"># \u6CE8\u610F\uFF1A\u51FD\u6570\u6709\u8FD4\u56DE\u503C\u6CA1\u6709\u5B9A\u4E49\u53D8\u91CF\u63A5\u6536</span>
<span class="token comment"># \u7A0B\u5E8F\u4E0D\u4F1A\u62A5\u9519\uFF0C\u4F46\u662F\u65E0\u6CD5\u83B7\u53D6\u8FD4\u56DE\u7ED3\u679C</span>
r <span class="token operator">=</span> test<span class="token punctuation">(</span>a<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;%s\u7684\u5185\u5B58\u5730\u5740\u662F%d&#39;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>r<span class="token punctuation">,</span> <span class="token builtin">id</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;
a\u53D8\u91CF\u4FDD\u5B58\u6570\u636E\u7684\u5185\u5B58\u5730\u57409282016
\u5728\u51FD\u6570\u5185\u90E810\u5BF9\u5E94\u7684\u5185\u5B58\u5730\u5740\u662F9282016
\u51FD\u6570\u8981\u8FD4\u56DE\u6570\u636E\u7684\u5185\u5B58\u5730\u5740\u662F139915218494640
hello\u7684\u5185\u5B58\u5730\u5740\u662F139915218494640
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5C40\u90E8\u53D8\u91CF</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">demo1</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># \u5B9A\u4E49\u4E00\u4E2A\u5C40\u90E8\u53D8\u91CF</span>
    num <span class="token operator">=</span> <span class="token number">10</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u5728demo1\u51FD\u6570\u5185\u90E8\u7684\u53D8\u91CF\u662F%d&#39;</span> <span class="token operator">%</span> num<span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">demo2</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># print(&#39;%d&#39; % num)  # error</span>
    <span class="token keyword">pass</span>

demo1<span class="token punctuation">(</span><span class="token punctuation">)</span>
demo2<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5168\u5C40\u53D8\u91CF</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u5168\u5C40\u53D8\u91CF</span>
num <span class="token operator">=</span> <span class="token number">10</span>


<span class="token keyword">def</span> <span class="token function">demo1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;demo1 ==&gt; %d&#39;</span> <span class="token operator">%</span> num<span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">demo2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;demo2 ==&gt; %d&#39;</span> <span class="token operator">%</span> num<span class="token punctuation">)</span>


demo1<span class="token punctuation">(</span><span class="token punctuation">)</span>
demo2<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># \u4FEE\u6539\u5168\u5C40\u53D8\u91CF</span>
<span class="token comment"># \u5168\u5C40\u53D8\u91CF</span>
num <span class="token operator">=</span> <span class="token number">10</span>


<span class="token keyword">def</span> <span class="token function">demo1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token comment"># \u4FEE\u6539\u5168\u5C40\u53D8\u91CF</span>
    <span class="token keyword">global</span> num
    num <span class="token operator">=</span> <span class="token number">99</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;demo1 ==&gt; %d&#39;</span> <span class="token operator">%</span> num<span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">demo2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;demo2 ==&gt; %d&#39;</span> <span class="token operator">%</span> num<span class="token punctuation">)</span>


demo1<span class="token punctuation">(</span><span class="token punctuation">)</span>
demo2<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE\u591A\u4E2A\u53C2\u6570</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">measure</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&#39;&#39;&#39; \u6D4B\u91CF\u6E29\u5EA6\u548C\u6E7F\u5EA6 &#39;&#39;&#39;</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u6D4B\u91CF\u5F00\u59CB...&#39;</span><span class="token punctuation">)</span>
    temp <span class="token operator">=</span> <span class="token number">39</span>
    wetness <span class="token operator">=</span> <span class="token number">50</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u6D4B\u91CF\u7ED3\u675F...&#39;</span><span class="token punctuation">)</span>

    <span class="token comment"># \u5143\u7956 \u53EF\u4EE5\u8FD4\u56DE\u591A\u4E2A\u6570\u636E\uFF0C\u56E0\u6B64\u53EF\u4EE5\u4F7F\u7528\u5143\u7956</span>
    <span class="token comment"># \u5982\u679C\u51FD\u6570\u8FD4\u56DE\u7684\u7C7B\u578B\u662F\u5143\u7956\uFF0C\u5C0F\u62EC\u53F7\u53EF\u4EE5\u7701\u7565</span>
    <span class="token comment"># return  (temp, wetness)</span>
    <span class="token keyword">return</span> temp<span class="token punctuation">,</span> wetness


result <span class="token operator">=</span> measure<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>

<span class="token comment"># \u5355\u72EC\u5904\u7406\u6E29\u5EA6\u6216\u8005\u6E7F\u5EA6 - \u4E0D\u65B9\u4FBF</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment"># \u82E5\u679C\u8FD4\u56DE\u7C7B\u578B\u662F\u5143\u7956\uFF0C\u540C\u65F6\u5E0C\u671B\u5355\u72EC\u7684\u5904\u7406\u5143\u7956\u4E2D\u7684\u5143\u7D20</span>
<span class="token comment"># \u53EF\u4EE5\u4F7F\u7528\u591A\u4E2A\u53D8\u91CF\uFF0C\u4E00\u6B21\u63A5\u6536\u51FD\u6570\u7684\u8FD4\u56DE\u7ED3\u679C</span>
gl_temp<span class="token punctuation">,</span> gl_wetness <span class="token operator">=</span> measure<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>gl_temp<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>gl_wetness<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4EA4\u6362\u6570\u5B57</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">6</span>
b <span class="token operator">=</span> <span class="token number">100</span>

<span class="token comment"># \u89E3\u6CD51 - \u4F7F\u7528\u5176\u4ED6\u53D8\u91CF</span>
c <span class="token operator">=</span> a
a <span class="token operator">=</span> b
b <span class="token operator">=</span> c

<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>

<span class="token comment"># \u89E3\u6CD52 - \u4E0D\u4F7F\u7528\u5176\u4ED6\u53D8\u91CF</span>
a <span class="token operator">=</span> a <span class="token operator">+</span> b
b <span class="token operator">=</span> a <span class="token operator">-</span> b
a <span class="token operator">=</span> a <span class="token operator">-</span> b

<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>

<span class="token comment"># \u89E3\u6CD53 - \u5229\u7528\u5143\u7956</span>
a<span class="token punctuation">,</span> b <span class="token operator">=</span> b<span class="token punctuation">,</span> a

<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u591A\u503C\u53C2\u6570</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">demo</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> <span class="token operator">*</span>nums<span class="token punctuation">,</span> <span class="token operator">**</span>person<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span>


demo<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token string">&quot;\u5C0F\u7F8E&quot;</span><span class="token punctuation">,</span> age<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">)</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;
1
(2, 3, 4, 5)
{&#39;name&#39;: &#39;\u5C0F\u7F8E&#39;, &#39;age&#39;: 10}
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5143\u7956\u5B57\u5178\u7684\u62C6\u5305</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">demo</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>kwargs<span class="token punctuation">)</span>


<span class="token comment"># \u5143\u7956\u53D8\u91CF/\u5B57\u5178\u53D8\u91CF</span>
gl_num <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
gl_dict <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;\u5C0F\u660E&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">}</span>

demo<span class="token punctuation">(</span><span class="token operator">*</span>gl_num<span class="token punctuation">,</span> <span class="token operator">**</span>gl_dict<span class="token punctuation">)</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;
(1, 2, 3)
{&#39;name&#39;: &#39;\u5C0F\u660E&#39;, &#39;age&#39;: 18}
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u9012\u5F52\u51FD\u6570</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">sum_number</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>

    <span class="token comment"># \u9012\u5F52\u7684\u51FA\u53E3\uFF0C\u5F53\u53C2\u6570\u6EE1\u8DB3\u67D0\u4E2A\u6761\u4EF6\u65F6\uFF0C\u4E0D\u5728\u6267\u884C\u51FD\u6570</span>
    <span class="token keyword">if</span> num <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span>

    <span class="token comment"># \u81EA\u5DF1\u8C03\u7528\u81EA\u5DF1</span>
    sum_number<span class="token punctuation">(</span>num <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>


sum_number<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>

<span class="token comment"># \u9012\u5F52\u6C42\u548C</span>
<span class="token keyword">def</span> <span class="token function">sum_numbers</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token comment"># \u51FA\u53E3</span>
    <span class="token keyword">if</span> num <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token number">1</span>

    <span class="token comment"># \u6570\u5B57\u7D2F\u52A0</span>
    <span class="token comment"># \u5047\u8BBEsum_numbers \u80FD\u591F\u6B63\u786E\u5904\u74061 ... num\u7D2F\u52A0</span>
    temp <span class="token operator">=</span> sum_numbers<span class="token punctuation">(</span>num <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>

    <span class="token comment"># \u4E24\u4E2A\u6570\u5B57\u76F8\u52A0</span>
    <span class="token keyword">return</span> num <span class="token operator">+</span> temp


result <span class="token operator">=</span> sum_numbers<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),i=[t];function l(c,o){return s(),a("div",null,i)}const d=n(p,[["render",l],["__file","grammar.html.vue"]]);export{d as default};
