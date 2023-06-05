import{_ as n,o as s,c as a,a as t}from"./app.e2206fe9.js";const p={},e=t(`<h1 id="\u7EBF\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u7EBF\u7A0B" aria-hidden="true">#</a> \u7EBF\u7A0B</h1><ul><li>\u57FA\u672C\u7528\u6CD5</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> time
<span class="token keyword">import</span> threading

<span class="token keyword">def</span> <span class="token function">sing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot; \u5531\u6B4C5\u79D2 &quot;&quot;&quot;</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;---\u6B63\u5728\u5531:\u83CA\u82B1\u53F0---&#39;</span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">dance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot; \u8DF3\u821E5\u79D2 &quot;&quot;&quot;</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;---\u6B63\u5728\u8DF3\u821E---&#39;</span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    t1 <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>sing<span class="token punctuation">)</span>
    t2 <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>dance<span class="token punctuation">)</span>
    t1<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    t2<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5FAA\u73AF\u67E5\u770B\u5F53\u524D\u8FD0\u884C\u7684\u7EBF\u7A0B</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> threading
<span class="token keyword">import</span> time


<span class="token keyword">def</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;-----test1---%d---&#39;</span> <span class="token operator">%</span> i<span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;-----test2---%d---&#39;</span> <span class="token operator">%</span> i<span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    t1 <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>test1<span class="token punctuation">)</span>
    t2 <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>test2<span class="token punctuation">)</span>

    t1<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    t2<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">while</span> <span class="token builtin">len</span><span class="token punctuation">(</span>threading<span class="token punctuation">.</span><span class="token builtin">enumerate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>threading<span class="token punctuation">.</span><span class="token builtin">enumerate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u591A\u7EBF\u7A0B\u5171\u4EAB\u5168\u5C40\u53D8\u91CF</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> threading
<span class="token keyword">import</span> time


<span class="token keyword">def</span> <span class="token function">test1</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">:</span>
    temp<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token number">33</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;---in test1 temp=%s---&#39;</span> <span class="token operator">%</span> <span class="token builtin">str</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">test2</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;---in test2 temp=%s---&#39;</span> <span class="token operator">%</span> <span class="token builtin">str</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">)</span>


g_nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">]</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># target\u6307\u5B9A\u5C06\u6765 \u8FD9\u4E2A\u7EBF\u7A0B\u53BB\u54EA\u4E2A\u51FD\u6570\u6267\u884C\u4EE3\u7801</span>
    <span class="token comment"># args\u6307\u5B9A\u5C06\u6765\u8C03\u7528\u51FD\u6570\u7684\u65F6\u5019 \u4F20\u9012\u4EC0\u4E48\u53C2\u6570\u8FC7\u53BB</span>
    t1 <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>test1<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span>g_nums<span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    t2 <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>test2<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span>g_nums<span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    t1<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

    t2<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;---in main Thread g_nums = %s---&#39;</span> <span class="token operator">%</span> <span class="token builtin">str</span><span class="token punctuation">(</span>g_nums<span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u7EBF\u7A0B\u5171\u4EAB\u5168\u5C40\u53D8\u91CF\u7684\u95EE\u9898</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> threading
<span class="token keyword">import</span> time


<span class="token comment"># \u5B9A\u4E49\u4E00\u4E2A\u5168\u5C40\u53D8\u91CF</span>
g_num <span class="token operator">=</span> <span class="token number">0</span>


<span class="token keyword">def</span> <span class="token function">test1</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">global</span> g_num
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">:</span>
        g_num <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;---in test1 g_num=%d---&#39;</span> <span class="token operator">%</span> g_num<span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">test2</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">global</span> g_num
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">:</span>
        g_num <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;---in test2 g_num=%d---&#39;</span> <span class="token operator">%</span> g_num<span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    t1 <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>test1<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">1000000</span><span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    t2 <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>test2<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">1000000</span><span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    t1<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    t2<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># \u7B49\u5F85\u4E24\u4E2A\u7EBF\u7A0B\u6267\u884C\u5B8C\u6BD5</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;---in main Thread g_num = %d---&#39;</span> <span class="token operator">%</span> g_num<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;
---in test1 g_num=1242490---
---in test2 g_num=1511787---
---in main Thread g_num = 1511787---
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4E92\u65A5\u9501\u89E3\u51B3\u8D44\u6E90\u7ADE\u4E89\u95EE\u9898</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> threading
<span class="token keyword">import</span> time


<span class="token comment"># \u5B9A\u4E49\u4E00\u4E2A\u5168\u5C40\u53D8\u91CF</span>
g_num <span class="token operator">=</span> <span class="token number">0</span>


<span class="token keyword">def</span> <span class="token function">test1</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">global</span> g_num

    <span class="token comment"># \u4E0A\u9501\uFF0C\u5982\u679C\u4E4B\u524D\u6CA1\u6709\u4E0A\u9501\uFF0C\u90A3\u4E48\u6B64\u65F6 \u4E0A\u9501\u6210\u529F</span>
    <span class="token comment"># \u5982\u679C\u4E0A\u9501\u4E4B\u524D \u5DF2\u7ECF\u88AB\u4E0A\u9501\u4E86\uFF0C\u90A3\u4E48\u6B64\u65F6\u4F1A\u5835\u585E\u5728\u8FD9\u91CC\uFF0C\u77E5\u9053 \u8FD9\u4E2A\u9501\u88AB\u89E3\u9501</span>
    <span class="token comment"># mutex.acquire()  #  \u539F\u5219\u4E0A\u9501\u4F4F\u4EE3\u7801\u8D8A\u5C11\u8D8A\u597D</span>

    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">:</span>
        mutex<span class="token punctuation">.</span>acquire<span class="token punctuation">(</span><span class="token punctuation">)</span>
        g_num <span class="token operator">+=</span> <span class="token number">1</span>
        mutex<span class="token punctuation">.</span>release<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># \u89E3\u9501</span>
    <span class="token comment"># mutex.release()</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;---in test1 g_num=%d---&#39;</span> <span class="token operator">%</span> g_num<span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">test2</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">global</span> g_num
    <span class="token comment"># mutex.acquire()</span>

    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">:</span>
        mutex<span class="token punctuation">.</span>acquire<span class="token punctuation">(</span><span class="token punctuation">)</span>
        g_num <span class="token operator">+=</span> <span class="token number">1</span>
        mutex<span class="token punctuation">.</span>release<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># mutex.release()</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;---in test2 g_num=%d---&#39;</span> <span class="token operator">%</span> g_num<span class="token punctuation">)</span>


<span class="token comment"># \u521B\u5EFA\u4E00\u4E2A\u4E92\u65A5\u9501\uFF0C\u9ED8\u8BA4\u662F\u6CA1\u6709\u4E0A\u9501</span>
mutex <span class="token operator">=</span> threading<span class="token punctuation">.</span>Lock<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    t1 <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>test1<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">1000000</span><span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    t2 <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>test2<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">1000000</span><span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    t1<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    t2<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># \u7B49\u5F85\u4E24\u4E2A\u7EBF\u7A0B\u6267\u884C\u5B8C\u6BD5</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;---in main Thread g_num = %d---&#39;</span> <span class="token operator">%</span> g_num<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u6848\u4F8B\u591A\u7EBF\u7A0Budp\u804A\u5929</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> socket
<span class="token keyword">import</span> threading


<span class="token keyword">def</span> <span class="token function">recv_msg</span><span class="token punctuation">(</span>udp_socket<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot; \u63A5\u6536\u6570\u636E\u5E76\u663E\u793A &quot;&quot;&quot;</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        recv_data <span class="token operator">=</span> udp_socket<span class="token punctuation">.</span>recvfrom<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>recv_data<span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">send_msg</span><span class="token punctuation">(</span>udp_socket<span class="token punctuation">,</span> dest_ip<span class="token punctuation">,</span> dest_port<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot; \u53D1\u9001\u6570\u636E &quot;&quot;&quot;</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        send_data <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;\u8F93\u5165\u53D1\u9001\u7684\u6570\u636E\uFF1A&#39;</span><span class="token punctuation">)</span>
        udp_socket<span class="token punctuation">.</span>sendto<span class="token punctuation">(</span>send_data<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&#39;gbk&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>dest_ip<span class="token punctuation">,</span> dest_port<span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot; \u5B8C\u6210udp\u804A\u5929\u5668\u7684\u6574\u4F53\u63A7\u5236 &quot;&quot;&quot;</span>

    <span class="token comment"># \u521B\u5EFA\u5957\u63A5\u5B57</span>
    udp_socket <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SOCK_DGRAM<span class="token punctuation">)</span>

    <span class="token comment"># \u7ED1\u5B9A\u672C\u5730\u4FE1\u606F</span>
    udp_socket<span class="token punctuation">.</span>bind<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token number">7890</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment"># \u83B7\u53D6\u5BF9\u65B9\u7684ip</span>
    <span class="token comment"># dest_ip = input(&#39;\u8BF7\u8F93\u5165\u5BF9\u65B9\u7684ip\uFF1A&#39;)</span>
    dest_ip <span class="token operator">=</span> <span class="token string">&#39;192.168.247.1&#39;</span>
    <span class="token comment"># dest_port = int(input(&#39;\u8BF7\u8F93\u5165\u5BF9\u65B9\u7684port\uFF1A&#39;))</span>
    dest_port <span class="token operator">=</span> <span class="token number">8080</span>

    <span class="token comment"># \u521B\u5EFA\u4E24\u4E2A\u7EBF\u7A0B\u6267\u884C\u76F8\u5E94\u7684\u529F\u80FD</span>
    t_recv <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>recv_msg<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span>udp_socket<span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    t_send <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>
        target<span class="token operator">=</span>send_msg<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span>udp_socket<span class="token punctuation">,</span> dest_ip<span class="token punctuation">,</span> dest_port<span class="token punctuation">)</span><span class="token punctuation">)</span>

    t_recv<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    t_send<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),i=[e];function o(c,l){return s(),a("div",null,i)}const d=n(p,[["render",o],["__file","thread.html.vue"]]);export{d as default};
