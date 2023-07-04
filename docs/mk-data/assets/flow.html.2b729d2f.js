import{_ as n,o as s,c as a,a as e}from"./app.b10861d5.js";const p={},t=e(`<h1 id="\u6D41\u7A0B\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#\u6D41\u7A0B\u63A7\u5236" aria-hidden="true">#</a> \u6D41\u7A0B\u63A7\u5236</h1><h2 id="\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u5206\u652F" aria-hidden="true">#</a> \u5206\u652F</h2><ul><li>if\u5224\u65AD</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u8F93\u5165\u7528\u6237\u5E74\u9F84</span>
age <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BF7\u8F93\u5165\u4F60\u7684\u5E74\u9F84\uFF1A&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># \u5224\u65AD\u662F\u5426\u6EE118\u5C81 (&gt;=)</span>
<span class="token keyword">if</span> age <span class="token operator">&gt;=</span> <span class="token number">18</span><span class="token punctuation">:</span>
    <span class="token comment"># \u5982\u679C\u6EE118\u5C81\uFF0C\u5141\u8BB8\u8FDB\u5165\u7F51\u5427</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u4F60\u5DF2\u7ECF\u6210\u5E74\uFF0C\u6B22\u8FCE\u8FDB\u5165\u7F51\u5427\u55E8\u76AE&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># \u5982\u679C\u672A\u6EE118\u5C81\uFF0C\u63D0\u793A\u56DE\u5BB6\u5199\u4F5C\u4E1A</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u4F60\u8FD8\u6CA1\u6210\u5E74\uFF0C\u8BF7\u56DE\u5BB6\u5199\u4F5C\u4E1A\u5427\uFF01&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># \u8FD9\u53E5\u4EE3\u7801\u65E0\u8BBA\u6761\u4EF6\u662F\u5426\u6EE1\u8DB3\u90FD\u6267\u884C</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u8FD9\u53E5\u4EE3\u7801\u4EC0\u4E48\u65F6\u5019\u6267\u884C\uFF1F&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u903B\u8F91\u9884\u7B97\u7B26</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>age <span class="token operator">=</span> <span class="token number">12</span>
<span class="token comment"># if age &gt;= 0 and age &lt;= 120</span>
<span class="token keyword">if</span> age <span class="token operator">&gt;=</span><span class="token number">0</span> <span class="token keyword">and</span> age <span class="token operator">&lt;=</span> <span class="token number">120</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u5E74\u9F84\u6B63\u786E&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u5E74\u9F84\u9519\u8BEF&#39;</span><span class="token punctuation">)</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot; ******* &quot;&quot;&quot;</span>
python_score <span class="token operator">=</span> <span class="token number">80</span>
c_score <span class="token operator">=</span> <span class="token number">75</span>

<span class="token keyword">if</span> python_score <span class="token operator">&gt;</span> <span class="token number">60</span> <span class="token keyword">or</span> c_score <span class="token operator">&gt;</span> <span class="token number">60</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u8003\u8BD5\u901A\u8FC7&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u8003\u8BD5\u5931\u8D25\uFF0C\u7EE7\u7EED\u52AA\u529B&#39;</span><span class="token punctuation">)</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot; ******* &quot;&quot;&quot;</span>
is_employee <span class="token operator">=</span> <span class="token boolean">True</span>

<span class="token keyword">if</span> <span class="token keyword">not</span> is_employee<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u7981\u6B62\u5165\u5185&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u6B22\u8FCE\u8FDB\u5165&#39;</span><span class="token punctuation">)</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot; ******* &quot;&quot;&quot;</span>
holiday_name <span class="token operator">=</span> <span class="token string">&#39;\u5E73\u5B89\u591C&#39;</span>

<span class="token keyword">if</span> holiday_name <span class="token operator">==</span> <span class="token string">&#39;\u60C5\u4EBA\u8282&#39;</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u4E70\u73AB\u7470&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">elif</span> holiday_name <span class="token operator">==</span> <span class="token string">&#39;\u5E73\u5B89\u591C&#39;</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u4E70\u82F9\u679C&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">elif</span> holiday_name <span class="token operator">==</span> <span class="token string">&#39;\u751F\u65E5&#39;</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u4E70\u86CB\u7CD5&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u6BCF\u5929\u90FD\u662F\u8282\u65E5&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#\u5FAA\u73AF" aria-hidden="true">#</a> \u5FAA\u73AF</h2><ul><li>while</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>i <span class="token operator">=</span> <span class="token number">1</span>

<span class="token keyword">while</span> i <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;hello python %d&#39;</span> <span class="token operator">%</span> i<span class="token punctuation">)</span>
    i <span class="token operator">+=</span> <span class="token number">1</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u5FAA\u73AF\u7ED3\u675F\u540E\uFF0Ci = %d&#39;</span> <span class="token operator">%</span> i<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>break</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>i <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">while</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">:</span>
        <span class="token keyword">break</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    i <span class="token operator">+=</span> <span class="token number">1</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;over&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>continue</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>i <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">while</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">:</span>
        i <span class="token operator">+=</span> <span class="token number">1</span>
        <span class="token keyword">continue</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    i <span class="token operator">+=</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>print</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u2764&#39;</span><span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4E5D\u4E5D\u4E58\u6CD5\u8868</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>row <span class="token operator">=</span> <span class="token number">1</span>

<span class="token keyword">while</span> row <span class="token operator">&lt;=</span> <span class="token number">9</span><span class="token punctuation">:</span>
    col <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token keyword">while</span> col <span class="token operator">&lt;=</span> row<span class="token punctuation">:</span>
        <span class="token comment"># print(&#39;%d * %d = %2d&#39; % (col, row, col * row), end=&#39;  &#39;)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;%d * %d = %d&#39;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>col<span class="token punctuation">,</span> row<span class="token punctuation">,</span> col <span class="token operator">*</span> row<span class="token punctuation">)</span><span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&#39;\\t&#39;</span><span class="token punctuation">)</span>
        col <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
    row <span class="token operator">+=</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8F6C\u4E49\u5B57\u7B26</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \\t \u5728\u63A7\u5236\u53F0\u8F93\u51FA \u5236\u8868\u7B26 \u534F\u52A9\u8F93\u51FA\u6587\u672C\u65F6 \u5782\u76F4\u65B9\u5411 \u4FDD\u6301\u5BF9\u5176</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\\t1 \\t2 \\t3&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\\t10 \\t20 \\t30&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># \\n \u6362\u884C\u7B26</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;hello\\npython&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;hello \\&quot; python&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),o=[t];function i(l,c){return s(),a("div",null,o)}const u=n(p,[["render",i],["__file","flow.html.vue"]]);export{u as default};
