import{_ as n,o as s,c as a,a as p}from"./app.dc008982.js";const t={},e=p(`<h1 id="\u8FDB\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u8FDB\u7A0B" aria-hidden="true">#</a> \u8FDB\u7A0B</h1><ul><li>\u4F7F\u7528\u8FDB\u7A0B</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> time
<span class="token keyword">import</span> multiprocessing


<span class="token keyword">def</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;1--------&quot;</span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;2--------&quot;</span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    p1 <span class="token operator">=</span> multiprocessing<span class="token punctuation">.</span>Process<span class="token punctuation">(</span>target<span class="token operator">=</span>test1<span class="token punctuation">)</span>
    p2 <span class="token operator">=</span> multiprocessing<span class="token punctuation">.</span>Process<span class="token punctuation">(</span>target<span class="token operator">=</span>test2<span class="token punctuation">)</span>
    p1<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    p2<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u83B7\u53D6\u8FDB\u7A0B\u7684pid</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> multiprocessing
<span class="token keyword">import</span> os
<span class="token keyword">import</span> time


<span class="token keyword">def</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;----in \u5B50\u8FDB\u7A0B pid=%d ,\u7236\u8FDB\u7A0B\u7684pid=%d---&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>os<span class="token punctuation">.</span>getpid<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span>getppid<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;----in \u4E3B\u8FDB\u7A0B pid=%d---\u7236\u8FDB\u7A0Bpid=%d----&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>os<span class="token punctuation">.</span>getpid<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span>getppid<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    p <span class="token operator">=</span> multiprocessing<span class="token punctuation">.</span>Process<span class="token punctuation">(</span>target<span class="token operator">=</span>test<span class="token punctuation">)</span>
    p<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8FDB\u7A0B\u7684\u8FD0\u884C\u987A\u5E8F</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> multiprocessing
<span class="token keyword">import</span> os
<span class="token keyword">import</span> time


<span class="token keyword">def</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;----in \u5B50\u8FDB\u7A0B pid=%d ,\u7236\u8FDB\u7A0B\u7684pid=%d---&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>os<span class="token punctuation">.</span>getpid<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span>getppid<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;----in \u5B50\u8FDB\u7A0B2 pid=%d ,\u7236\u8FDB\u7A0B\u7684pid=%d---&quot;</span> <span class="token operator">%</span>
            <span class="token punctuation">(</span>os<span class="token punctuation">.</span>getpid<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span>getppid<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;----in \u4E3B\u8FDB\u7A0B pid=%d---\u7236\u8FDB\u7A0Bpid=%d----&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>os<span class="token punctuation">.</span>getpid<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span>getppid<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    p <span class="token operator">=</span> multiprocessing<span class="token punctuation">.</span>Process<span class="token punctuation">(</span>target<span class="token operator">=</span>test<span class="token punctuation">)</span>
    p<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>

    p2 <span class="token operator">=</span> multiprocessing<span class="token punctuation">.</span>Process<span class="token punctuation">(</span>target<span class="token operator">=</span>test2<span class="token punctuation">)</span>
    p2<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u7ED9Process\u4F20\u9012\u53C2\u6570</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> multiprocessing
<span class="token keyword">import</span> os
<span class="token keyword">import</span> time


<span class="token keyword">def</span> <span class="token function">test</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>kwargs<span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;----in \u4E3B\u8FDB\u7A0B pid=%d---\u7236\u8FDB\u7A0Bpid=%d----&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>os<span class="token punctuation">.</span>getpid<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span>getppid<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    p <span class="token operator">=</span> multiprocessing<span class="token punctuation">.</span>Process<span class="token punctuation">(</span>target<span class="token operator">=</span>test<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span>
        <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">,</span> <span class="token number">55</span><span class="token punctuation">,</span> <span class="token number">66</span><span class="token punctuation">,</span> <span class="token number">77</span><span class="token punctuation">,</span> <span class="token number">88</span><span class="token punctuation">)</span><span class="token punctuation">,</span> kwargs<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;mm&quot;</span><span class="token punctuation">:</span> <span class="token number">11</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    p<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u591A\u8FDB\u7A0B\u901A\u8FC7Queue\u6765\u5B9E\u73B0\u6570\u636E\u5171\u4EAB</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u4E0D\u5171\u4EAB\u5168\u5C40\u53D8\u91CF</span>
<span class="token keyword">import</span> multiprocessing

<span class="token triple-quoted-string string">&quot;&quot;&quot;
\u4E00\u4E2A\u8FDB\u7A0B\u5411Queue\u4E2D\u5199\u5165\u6570\u636E\uFF0C\u53E6\u5916\u4E00\u4E2A\u8FDB\u7A0B\u4ECEQueue\u4E2D\u83B7\u53D6\u6570\u636E\uFF0C
\u901A\u8FC7Queue\u5B8C\u6210\u4E86 \u591A\u4E2A\u9700\u8981\u914D\u5408\u7684\u8FDB\u7A0B\u95F4\u7684\u6570\u636E\u5171\u4EAB\uFF0C\u4ECE\u800C\u80FD\u591F \u8D77\u5230 \u89E3\u8026\u7684\u4F5C\u7528
&quot;&quot;&quot;</span>


<span class="token keyword">def</span> <span class="token function">download_from_web</span><span class="token punctuation">(</span>q<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;\u4E0B\u8F7D\u6570\u636E&quot;&quot;&quot;</span>
    <span class="token comment"># \u6A21\u62DF\u4ECE\u7F51\u4E0A\u4E0B\u8F7D\u7684\u6570\u636E</span>
    data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">]</span>

    <span class="token comment"># \u5411\u961F\u5217\u4E2D\u5199\u5165\u6570\u636E</span>
    <span class="token keyword">for</span> temp <span class="token keyword">in</span> data<span class="token punctuation">:</span>
        q<span class="token punctuation">.</span>put<span class="token punctuation">(</span>temp<span class="token punctuation">)</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;---\u4E0B\u8F7D\u5668\u5DF2\u7ECF\u4E0B\u8F7D\u5B8C\u4E86\u6570\u636E\u5E76\u4E14\u5B58\u5165\u5230\u961F\u5217\u4E2D----&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">analysis_data</span><span class="token punctuation">(</span>q<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;\u6570\u636E\u5904\u7406&quot;&quot;&quot;</span>
    waitting_analysis_data <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># \u4ECE\u961F\u5217\u4E2D\u83B7\u53D6\u6570\u636E</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        data <span class="token operator">=</span> q<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token punctuation">)</span>
        waitting_analysis_data<span class="token punctuation">.</span>append<span class="token punctuation">(</span>data<span class="token punctuation">)</span>

        <span class="token keyword">if</span> q<span class="token punctuation">.</span>empty<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">break</span>

    <span class="token comment"># \u6A21\u62DF\u6570\u636E\u5904\u7406</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>waitting_analysis_data<span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 1. \u521B\u5EFA\u4E00\u4E2A\u961F\u5217</span>
    q <span class="token operator">=</span> multiprocessing<span class="token punctuation">.</span>Queue<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># 2. \u521B\u5EFA\u591A\u4E2A\u8FDB\u7A0B\uFF0C\u5C06\u961F\u5217\u7684\u5F15\u7528\u5F53\u505A\u5B9E\u53C2\u8FDB\u884C\u4F20\u9012\u5230\u91CC\u9762</span>
    p1 <span class="token operator">=</span> multiprocessing<span class="token punctuation">.</span>Process<span class="token punctuation">(</span>target<span class="token operator">=</span>download_from_web<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span>q<span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    p2 <span class="token operator">=</span> multiprocessing<span class="token punctuation">.</span>Process<span class="token punctuation">(</span>target<span class="token operator">=</span>analysis_data<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span>q<span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    p1<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    p2<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8FDB\u7A0B\u6C60</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">from</span> multiprocessing <span class="token keyword">import</span> Pool
<span class="token keyword">import</span> os
<span class="token keyword">import</span> time
<span class="token keyword">import</span> random


<span class="token keyword">def</span> <span class="token function">worker</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">:</span>
    t_start <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;%s\u5F00\u59CB\u6267\u884C,\u8FDB\u7A0B\u53F7\u4E3A%d&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>msg<span class="token punctuation">,</span> os<span class="token punctuation">.</span>getpid<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment"># random.random()\u968F\u673A\u751F\u62100~1\u4E4B\u95F4\u7684\u6D6E\u70B9\u6570</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span>random<span class="token punctuation">.</span>random<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">)</span>
    t_stop <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>msg<span class="token punctuation">,</span> <span class="token string">&quot;\u6267\u884C\u5B8C\u6BD5\uFF0C\u8017\u65F6%0.2f&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>t_stop <span class="token operator">-</span> t_start<span class="token punctuation">)</span><span class="token punctuation">)</span>


po <span class="token operator">=</span> Pool<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>  <span class="token comment"># \u5B9A\u4E49\u4E00\u4E2A\u8FDB\u7A0B\u6C60\uFF0C\u6700\u5927\u8FDB\u7A0B\u65703</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># Pool().apply_async(\u8981\u8C03\u7528\u7684\u76EE\u6807,(\u4F20\u9012\u7ED9\u76EE\u6807\u7684\u53C2\u6570\u5143\u7956,))</span>
    <span class="token comment"># \u6BCF\u6B21\u5FAA\u73AF\u5C06\u4F1A\u7528\u7A7A\u95F2\u51FA\u6765\u7684\u5B50\u8FDB\u7A0B\u53BB\u8C03\u7528\u76EE\u6807</span>
    po<span class="token punctuation">.</span>apply_async<span class="token punctuation">(</span>worker<span class="token punctuation">,</span> <span class="token punctuation">(</span>i<span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;----start----&quot;</span><span class="token punctuation">)</span>
po<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># \u5173\u95ED\u8FDB\u7A0B\u6C60\uFF0C\u5173\u95ED\u540Epo\u4E0D\u518D\u63A5\u6536\u65B0\u7684\u8BF7\u6C42</span>
po<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># \u7B49\u5F85po\u4E2D\u6240\u6709\u5B50\u8FDB\u7A0B\u6267\u884C\u5B8C\u6210\uFF0C\u5FC5\u987B\u653E\u5728close\u8BED\u53E5\u4E4B\u540E</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;-----end-----&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u591A\u4EFB\u52A1\u6587\u4EF6\u62F7\u8D1D</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> os
<span class="token keyword">import</span> multiprocessing


<span class="token keyword">def</span> <span class="token function">copy_file</span><span class="token punctuation">(</span>q<span class="token punctuation">,</span> file_name<span class="token punctuation">,</span> old_folder_name<span class="token punctuation">,</span> new_folder_name<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;\u5B8C\u6210\u6587\u4EF6\u7684\u590D\u5236&quot;&quot;&quot;</span>
    <span class="token comment"># print(&quot;======&gt;\u6A21\u62DFcopy\u6587\u4EF6\uFF1A\u4ECE%s---&gt;\u5230%s \u6587\u4EF6\u540D\u662F:%s&quot; % (old_folder_name, new_folder_name, file_name))</span>
    old_f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span>old_folder_name <span class="token operator">+</span> <span class="token string">&quot;/&quot;</span> <span class="token operator">+</span> file_name<span class="token punctuation">,</span> <span class="token string">&quot;rb&quot;</span><span class="token punctuation">)</span>
    content <span class="token operator">=</span> old_f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
    old_f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

    new_f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span>new_folder_name <span class="token operator">+</span> <span class="token string">&quot;/&quot;</span> <span class="token operator">+</span> file_name<span class="token punctuation">,</span> <span class="token string">&quot;wb&quot;</span><span class="token punctuation">)</span>
    new_f<span class="token punctuation">.</span>write<span class="token punctuation">(</span>content<span class="token punctuation">)</span>
    new_f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># \u5982\u679C\u62F7\u8D1D\u5B8C\u4E86\u6587\u4EF6\uFF0C\u90A3\u4E48\u5C31\u5411\u961F\u5217\u4E2D\u5199\u5165\u4E00\u4E2A\u6D88\u606F\uFF0C\u8868\u793A\u5DF2\u7ECF\u5B8C\u6210</span>
    q<span class="token punctuation">.</span>put<span class="token punctuation">(</span>file_name<span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 1. \u83B7\u53D6\u7528\u6237\u8981copy\u7684\u6587\u4EF6\u5939\u7684\u540D\u5B57</span>
    old_folder_name <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u8F93\u5165\u8981copy\u7684\u6587\u4EF6\u5939\u7684\u540D\u5B57\uFF1A&quot;</span><span class="token punctuation">)</span>

    <span class="token comment"># 2. \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u6587\u4EF6\u5939</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        new_folder_name <span class="token operator">=</span> old_folder_name <span class="token operator">+</span> <span class="token string">&quot;[\u590D\u4EF6]&quot;</span>
        os<span class="token punctuation">.</span>mkdir<span class="token punctuation">(</span>new_folder_name<span class="token punctuation">)</span>
    <span class="token keyword">except</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>

    <span class="token comment"># 3. \u83B7\u53D6\u6587\u4EF6\u5939\u7684\u6240\u6709\u7684\u5F85copy\u7684\u6587\u4EF6\u540D\u5B57  listdir()</span>
    file_names <span class="token operator">=</span> os<span class="token punctuation">.</span>listdir<span class="token punctuation">(</span>old_folder_name<span class="token punctuation">)</span>
    <span class="token comment"># print(file_names)</span>

    <span class="token comment"># 4. \u521B\u5EFA\u8FDB\u7A0B\u6C60</span>
    po <span class="token operator">=</span> multiprocessing<span class="token punctuation">.</span>Pool<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>

    <span class="token comment"># 5. \u521B\u5EFA\u4E00\u4E2A\u961F\u5217</span>
    q <span class="token operator">=</span> multiprocessing<span class="token punctuation">.</span>Manager<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Queue<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># 6. \u5411\u8FDB\u7A0B\u6C60\u4E2D\u6DFB\u52A0 copy\u6587\u4EF6\u7684\u4EFB\u52A1</span>
    <span class="token keyword">for</span> file_name <span class="token keyword">in</span> file_names<span class="token punctuation">:</span>
        po<span class="token punctuation">.</span>apply_async<span class="token punctuation">(</span>copy_file<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span>
            q<span class="token punctuation">,</span> file_name<span class="token punctuation">,</span> old_folder_name<span class="token punctuation">,</span> new_folder_name<span class="token punctuation">)</span><span class="token punctuation">)</span>

    po<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># po.join()</span>
    all_file_num <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>file_names<span class="token punctuation">)</span>  <span class="token comment"># \u6D4B\u4E00\u4E0B\u6240\u6709\u7684\u6587\u4EF6\u4E2A\u6570</span>
    copy_ok_num <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        file_name <span class="token operator">=</span> q<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment"># print(&quot;\u5DF2\u7ECF\u5B8C\u6210copy\uFF1A%s&quot; % file_name)</span>
        copy_ok_num <span class="token operator">+=</span> <span class="token number">1</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;\\r\u62F7\u8D1D\u7684\u8FDB\u5EA6\u4E3A\uFF1A%.2f %%&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>copy_ok_num<span class="token operator">*</span><span class="token number">100</span><span class="token operator">/</span>all_file_num<span class="token punctuation">)</span><span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> copy_ok_num <span class="token operator">&gt;=</span> all_file_num<span class="token punctuation">:</span>
            <span class="token keyword">break</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),o=[e];function i(c,l){return s(),a("div",null,o)}const k=n(t,[["render",i],["__file","process.html.vue"]]);export{k as default};
