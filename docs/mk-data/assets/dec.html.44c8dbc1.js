import{_ as n,o as s,c as a,a as t}from"./app.26f3bee3.js";const p={},e=t(`<h1 id="\u95ED\u5305\u4E0E\u88C5\u9970\u5668" tabindex="-1"><a class="header-anchor" href="#\u95ED\u5305\u4E0E\u88C5\u9970\u5668" aria-hidden="true">#</a> \u95ED\u5305\u4E0E\u88C5\u9970\u5668</h1><ul><li>\u95ED\u5305\u521D\u8BC6</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Line</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> k<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>k <span class="token operator">=</span> k
        self<span class="token punctuation">.</span>b <span class="token operator">=</span> b

    <span class="token keyword">def</span> <span class="token function">__call__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>k <span class="token operator">*</span> x <span class="token operator">+</span> self<span class="token punctuation">.</span>b<span class="token punctuation">)</span>


line <span class="token operator">=</span> Line<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
line<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
line<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment"># \u7F3A\u70B9\uFF1A\u4E3A\u4E86\u8BA1\u7B97\u591A\u6761\u7EBF\u4E0A\u7684y\u503C\uFF0C\u6240\u4EE5\u9700\u8981\u4FDD\u5B58\u591A\u4E2Ak, b\u7684\u503C\uFF0C\u56E0\u6B64\u7528\u4E86\u5F88\u591A\u4E2A\u5B9E\u4F8B\u5BF9\u8C61\uFF0C \u6D6A\u8D39\u8D44\u6E90</span>


<span class="token keyword">def</span> <span class="token function">lineFn</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">create_y</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>k<span class="token operator">*</span>x <span class="token operator">+</span> b<span class="token punctuation">)</span>

    <span class="token keyword">return</span> create_y


fn <span class="token operator">=</span> lineFn<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>

fn<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
fn<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4FEE\u6539\u95ED\u5305\u4E2D\u7684\u6570\u636E</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>x <span class="token operator">=</span> <span class="token number">300</span>


<span class="token keyword">def</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	x <span class="token operator">=</span> <span class="token number">200</span>

	<span class="token keyword">def</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
		<span class="token keyword">nonlocal</span> x
		<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;----1----x=%d&quot;</span> <span class="token operator">%</span> x<span class="token punctuation">)</span>
		x <span class="token operator">=</span> <span class="token number">100</span>
		<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;----2----x=%d&quot;</span> <span class="token operator">%</span> x<span class="token punctuation">)</span>

	<span class="token keyword">return</span> test2


t1 <span class="token operator">=</span> test1<span class="token punctuation">(</span><span class="token punctuation">)</span>
t1<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u88C5\u9970\u5668\u6F14\u793A</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> time


<span class="token keyword">def</span> <span class="token function">set_func</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">def</span> <span class="token function">call_func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
		start_time <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
		func<span class="token punctuation">(</span><span class="token punctuation">)</span>
		stop_time <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;alltimes is %f&#39;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>stop_time<span class="token operator">-</span>start_time<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> call_func


<span class="token decorator annotation punctuation">@set_func</span>  <span class="token comment"># \u7B49\u4EF7\u4E8Etest1 = set_func(test1)</span>
<span class="token keyword">def</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;-----test1----&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
		<span class="token keyword">pass</span>


test1<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5E26\u4E0D\u5B9A\u53C2\u6570</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">set_func</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;---\u5F00\u59CB\u8FDB\u884C\u88C5\u9970&quot;</span><span class="token punctuation">)</span>

	<span class="token keyword">def</span> <span class="token function">call_func</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
		<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;---\u8FD9\u662F\u6743\u9650\u9A8C\u8BC11----&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;---\u8FD9\u662F\u6743\u9650\u9A8C\u8BC12----&quot;</span><span class="token punctuation">)</span>
		<span class="token comment"># func(args, kwargs)  # \u4E0D\u884C\uFF0C\u76F8\u5F53\u4E8E\u4F20\u9012\u4E862\u4E2A\u53C2\u6570 \uFF1A1\u4E2A\u5143\u7EC4\uFF0C1\u4E2A\u5B57\u5178</span>
		func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>  <span class="token comment"># \u62C6\u5305</span>
	<span class="token keyword">return</span> call_func


<span class="token decorator annotation punctuation">@set_func</span>  <span class="token comment"># \u76F8\u5F53\u4E8E test1 = set_func(test1)</span>
<span class="token keyword">def</span> <span class="token function">test1</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;-----test1----%d&quot;</span> <span class="token operator">%</span> num<span class="token punctuation">)</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;-----test1----&quot;</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;-----test1----&quot;</span><span class="token punctuation">,</span> kwargs<span class="token punctuation">)</span>


test1<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
test1<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span>
test1<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">,</span> mm<span class="token operator">=</span><span class="token number">100</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5E26\u8FD4\u56DE\u503C</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">set_func</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;---\u5F00\u59CB\u8FDB\u884C\u88C5\u9970&quot;</span><span class="token punctuation">)</span>

	<span class="token keyword">def</span> <span class="token function">call_func</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
		<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;---\u8FD9\u662F\u6743\u9650\u9A8C\u8BC11----&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;---\u8FD9\u662F\u6743\u9650\u9A8C\u8BC12----&quot;</span><span class="token punctuation">)</span>
		<span class="token comment"># func(args, kwargs)  # \u4E0D\u884C\uFF0C\u76F8\u5F53\u4E8E\u4F20\u9012\u4E862\u4E2A\u53C2\u6570 \uFF1A1\u4E2A\u5143\u7EC4\uFF0C1\u4E2A\u5B57\u5178</span>
		<span class="token keyword">return</span> func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>  <span class="token comment"># \u62C6\u5305</span>
	<span class="token keyword">return</span> call_func


<span class="token decorator annotation punctuation">@set_func</span>  <span class="token comment"># \u76F8\u5F53\u4E8E test1 = set_func(test1)</span>
<span class="token keyword">def</span> <span class="token function">test1</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;-----test1----%d&quot;</span> <span class="token operator">%</span> num<span class="token punctuation">)</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;-----test1----&quot;</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;-----test1----&quot;</span><span class="token punctuation">,</span> kwargs<span class="token punctuation">)</span>
	<span class="token keyword">return</span> <span class="token string">&#39;ok&#39;</span>


ret <span class="token operator">=</span> test1<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4F7F\u7528\u7C7B\u505A\u88C5\u9970\u5668</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Test</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> func<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>func <span class="token operator">=</span> func

    <span class="token keyword">def</span> <span class="token function">__call__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># print(&#39;\u8FD9\u91CC\u662F\u88C5\u9970\u5668\u6DFB\u52A0\u7684\u529F\u80FD... %s&#39; % self.func())</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u8FD9\u91CC\u662F\u88C5\u9970\u5668\u6DFB\u52A0\u7684\u529F\u80FD...&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token string">&#39;\u8FD9\u91CC\u662F\u88C5\u9970\u5668\u6DFB\u52A0\u7684\u529F\u80FD... %s&#39;</span> <span class="token operator">%</span> self<span class="token punctuation">.</span>func<span class="token punctuation">(</span>a<span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@Test</span>  <span class="token comment"># \u76F8\u5F53\u4E8Eget_str = Test(get_str)</span>
<span class="token keyword">def</span> <span class="token function">get_str</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token string">&#39;haah&#39;</span>


<span class="token keyword">print</span><span class="token punctuation">(</span>get_str<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5E26\u53C2\u6570\u88C5\u9970\u5668</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">set_level</span><span class="token punctuation">(</span>level_num<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">set_func</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">def</span> <span class="token function">call_func</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> level_num <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span>
                <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;---\u6743\u9650\u9A8C\u8BC1\u7EA7\u522B1\uFF0C\u9A8C\u8BC1---&#39;</span><span class="token punctuation">)</span>
            <span class="token keyword">elif</span> level_num <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">:</span>
                <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;---\u6743\u9650\u9A8C\u8BC1\u7EA7\u522B2\uFF0C\u9A8C\u8BC1---&#39;</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> func<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> call_func
    <span class="token keyword">return</span> set_func


<span class="token decorator annotation punctuation">@set_level</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;----test---&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token string">&#39;ok&#39;</span>


<span class="token decorator annotation punctuation">@set_level</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;----test2---&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token string">&#39;ok&#39;</span>


test<span class="token punctuation">(</span><span class="token punctuation">)</span>
test2<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","dec.html.vue"]]);export{k as default};
