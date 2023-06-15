import{_ as n,o as s,c as a,a as e}from"./app.cf2d5c41.js";const p={},t=e(`<h1 id="\u5F02\u5E38" tabindex="-1"><a class="header-anchor" href="#\u5F02\u5E38" aria-hidden="true">#</a> \u5F02\u5E38</h1><ul><li>\u7B80\u5355\u7684\u5F02\u5E38\u6355\u83B7</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">try</span><span class="token punctuation">:</span>
    <span class="token comment"># \u4E0D\u80FD\u786E\u5B9A\u6267\u884C\u7684\u4EE3\u7801</span>
    num <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BF7\u8F93\u5165\u4E00\u4E2A\u6574\u6570\uFF1A&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">except</span><span class="token punctuation">:</span>
    <span class="token comment"># \u9519\u8BEF\u7684\u5904\u7406\u4EE3\u7801</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u6574\u6570&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span> <span class="token operator">*</span> <span class="token number">50</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u6355\u83B7\u5F02\u5E38\u7C7B\u578B</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">try</span><span class="token punctuation">:</span>
    num <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;\u8F93\u5165\u4E00\u4E2A\u6574\u6570\uFF1A&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    result <span class="token operator">=</span> <span class="token number">8</span> <span class="token operator">/</span> num

    <span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
<span class="token keyword">except</span> ZeroDivisionError<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u96640\u9519\u8BEF&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">except</span> ValueError<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u6574\u6570&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># \u9519\u8BEF\u7C7B\u578B \u5F02\u5E38\u629B\u51FA\u6700\u540E\u4E00\u884C \u7B2C\u4E00\u4E2A\u5355\u8BCD</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u6355\u83B7\u672A\u77E5\u5F02\u5E38</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">try</span><span class="token punctuation">:</span>
    num <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;\u8F93\u5165\u4E00\u4E2A\u6574\u6570\uFF1A&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    result <span class="token operator">=</span> <span class="token number">8</span> <span class="token operator">/</span> num

    <span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
<span class="token keyword">except</span> ValueError<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u6574\u6570&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">except</span> Exception <span class="token keyword">as</span> error<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u672A\u77E5\u9519\u8BEF %s&#39;</span> <span class="token operator">%</span> error<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5B8C\u6574\u7684\u5F02\u5E38\u8BED\u6CD5</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">try</span><span class="token punctuation">:</span>
    num <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;\u8F93\u5165\u4E00\u4E2A\u6574\u6570\uFF1A&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    result <span class="token operator">=</span> <span class="token number">8</span> <span class="token operator">/</span> num

    <span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
<span class="token keyword">except</span> ValueError<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u6574\u6570&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">except</span> Exception <span class="token keyword">as</span> error<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u672A\u77E5\u9519\u8BEF %s&#39;</span> <span class="token operator">%</span> error<span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u5C1D\u8BD5\u6210\u529F&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">finally</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u65E0\u8BBA\u662F\u5426\u51FA\u73B0\u9519\u8BEF\u90FD\u4F1A\u6267\u884C\u7684\u4EE3\u7801&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span> <span class="token operator">*</span> <span class="token number">50</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5F02\u5E38\u7684\u4F20\u9012</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">demo1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;\u8F93\u5165\u6574\u6570\uFF1A&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">demo2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> demo1<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token comment"># \u5229\u7528\u5F02\u5E38\u7684\u4F20\u9012\u6027\uFF0C\u5728\u4E3B\u7A0B\u5E8F\u6355\u83B7\u5F02\u5E38</span>
<span class="token keyword">try</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>demo2<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">except</span> Exception <span class="token keyword">as</span> error<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u672A\u77E5\u9519\u8BEF %s&#39;</span> <span class="token operator">%</span> error<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u629B\u51FA\u5F02\u5E38</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">input_password</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token comment"># \u63D0\u793A\u7528\u6237\u8F93\u5165\u5BC6\u7801</span>
    pwd <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BF7\u8F93\u5165\u5BC6\u7801\uFF1A&#39;</span><span class="token punctuation">)</span>

    <span class="token comment"># \u5224\u65AD\u5BC6\u7801\u957F\u5EA6 &gt;= 8 \u8FD4\u56DE\u8F93\u5165\u7684\u5BC6\u7801</span>
    <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>pwd<span class="token punctuation">)</span> <span class="token operator">&gt;=</span> <span class="token number">8</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> pwd

    <span class="token comment"># \u5982\u679C &lt; 8 \u4E3B\u52A8\u629B\u51FA\u5F02\u5E38</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u4E3B\u52A8\u629B\u51FA\u5F02\u5E38&#39;</span><span class="token punctuation">)</span>
    <span class="token comment"># \u521B\u5EFA\u5F02\u5E38\u5BF9\u8C61</span>
    ex <span class="token operator">=</span> Exception<span class="token punctuation">(</span><span class="token string">&#39;\u5BC6\u7801\u957F\u5EA6\u4E0D\u591F&#39;</span><span class="token punctuation">)</span>

    <span class="token comment"># \u4E3B\u52A8\u629B\u51FA\u5F02\u5E38</span>
    <span class="token keyword">raise</span> ex


<span class="token comment"># \u63D0\u793A\u7528\u6237\u8F93\u5165\u5BC6\u7801</span>
<span class="token keyword">try</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>input_password<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">except</span> Exception <span class="token keyword">as</span> error<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u6355\u83B7\u5F02\u5E38\uFF1A%s&#39;</span> <span class="token operator">%</span> error<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),i=[t];function o(l,c){return s(),a("div",null,i)}const r=n(p,[["render",o],["__file","err.html.vue"]]);export{r as default};
