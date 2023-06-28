import{_ as n,o as s,c as a,a as e}from"./app.aec40525.js";const t={},p=e(`<h1 id="\u9762\u8BD5\u5B98-\u5982\u679C-100-\u4E2A\u8BF7\u6C42-\u4F60\u600E\u4E48\u7528-promise-\u53BB\u63A7\u5236\u5E76\u53D1" tabindex="-1"><a class="header-anchor" href="#\u9762\u8BD5\u5B98-\u5982\u679C-100-\u4E2A\u8BF7\u6C42-\u4F60\u600E\u4E48\u7528-promise-\u53BB\u63A7\u5236\u5E76\u53D1" aria-hidden="true">#</a> \u9762\u8BD5\u5B98\uFF1A\u5982\u679C 100 \u4E2A\u8BF7\u6C42\uFF0C\u4F60\u600E\u4E48\u7528 Promise \u53BB\u63A7\u5236\u5E76\u53D1\uFF1F</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u8BBE\u8BA1\u4E00\u4E2A\u51FD\u6570\uFF0C\u53EF\u4EE5\u9650\u5236\u8BF7\u6C42\u7684\u5E76\u53D1\uFF0C\u540C\u65F6\u8BF7\u6C42\u7ED3\u675F\u4E4B\u540E\uFF0C\u8C03\u7528callback\u51FD\u6570</span>
<span class="token comment">// sendRequest(requestList:,limits,callback):void</span>
<span class="token function">sendRequest</span><span class="token punctuation">(</span>

<span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token string">&#39;4&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

<span class="token number">3</span><span class="token punctuation">,</span> <span class="token comment">//\u5E76\u53D1\u6570</span>

<span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u5176\u4E2Drequest \u53EF\u4EE5\u662F\uFF1A</span>
<span class="token keyword">function</span> <span class="token function">request</span> <span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span>time<span class="token operator">=</span><span class="token number">1</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>

        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>

            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BF7\u6C42\u7ED3\u675F\uFF1A&#39;</span><span class="token operator">+</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">if</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

                <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;\u6210\u529F&#39;</span><span class="token punctuation">)</span>

            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>

                <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&#39;\u9519\u8BEF;&#39;</span><span class="token punctuation">)</span>

            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span><span class="token punctuation">,</span>time<span class="token operator">*</span><span class="token number">1e3</span><span class="token punctuation">)</span>

    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>\u8FD9\u91CC\u6709\u51E0\u4E2A\u6982\u5FF5\u9700\u8981\u660E\u786E\u4E00\u4E0B</p><ul><li>\u5E76\u53D1\uFF1A\u5E76\u53D1\u662F\u591A\u4E2A\u4EFB\u52A1\u540C\u65F6\u4EA4\u66FF\u7684\u6267\u884C\uFF08\u56E0\u4E3Acpu\u6267\u884C\u6307\u4EE4\u7684\u901F\u5EA6\u975E\u5E38\u4E4B\u5FEB\uFF0C\u5B83\u53EF\u4EE5\u4E0D\u5FC5\u6309\u987A\u5E8F\u4E00\u6BB5\u4EE3\u7801\u4E00\u6BB5\u4EE3\u7801\u7684\u6267\u884C\uFF0C\u8FD9\u6837\u6548\u7387\u53CD\u800C\u66F4\u52A0\u4F4E\u4E0B\uFF09\uFF0C\u8FD9\u6837\u770B\u8D77\u6765\u5C31\u662F\u4E00\u8D77\u6267\u884C\u7684\uFF0C\u6240\u4EE5\u53EB\u5E76\u53D1\u3002</li><li>\u5E76\u884C\uFF1A\u53EF\u4EE5\u7406\u89E3\u4E3A\u591A\u4E2A\u7269\u7406cpu\u6216\u8005\u6709\u5206\u5E03\u5F0F\u7CFB\u7EDF\uFF0C\u662F\u771F\u6B63\u7684&#39;\u540C\u65F6&#39;\u6267\u884C</li><li>\u5E76\u53D1\u63A7\u5236\uFF1A\u610F\u601D\u662F\u591A\u4E2A\u5E76\u53D1\u7684\u4EFB\u52A1\uFF0C\u4E00\u65E6\u6709\u4EFB\u52A1\u5B8C\u6210\uFF0C\u5C31\u7ACB\u523B\u5F00\u542F\u4E0B\u4E00\u4E2A\u4EFB\u52A1</li><li>\u5207\u7247\u63A7\u5236\uFF1A\u5C06\u5E76\u53D1\u4EFB\u52A1\u5207\u7247\u7684\u5206\u914D\u51FA\u6765\uFF0C\u6BD4\u598210\u4E2A\u4EFB\u52A1\uFF0C\u5207\u62102\u4E2A\u7247\uFF0C\u6BCF\u7247\u67095\u4E2A\u4EFB\u52A1\uFF0C\u5F53\u524D\u4E00\u7247\u7684\u4EFB\u52A1\u6267\u884C\u5B8C\u6BD5\uFF0C\u518D\u5F00\u59CB\u4E0B\u4E00\u4E2A\u7247\u7684\u4EFB\u52A1\uFF0C\u8FD9\u6837\u660E\u663E\u6548\u7387\u6CA1\u5E76\u53D1\u63A7\u5236\u90A3\u4E48\u9AD8\u4E86</li></ul></li><li><p>\u5FAA\u73AF\u53BB\u542F\u52A8\u80FD\u6267\u884C\u7684\u4EFB\u52A1</p></li><li><p>\u53D6\u51FA\u4EFB\u52A1\u5E76\u4E14\u63A8\u5230\u6267\u884C\u5668\u6267\u884C</p></li><li><p>\u6267\u884C\u5668\u5185\u66F4\u65B0\u5F53\u524D\u7684\u5E76\u53D1\u6570\uFF0C\u5E76\u4E14\u89E6\u53D1\u635E\u8D77\u4EFB\u52A1</p></li><li><p>\u635E\u8D77\u4EFB\u52A1\u91CC\u9762\u53EF\u4EE5\u89E6\u53D1\u6700\u7EC8\u7684\u56DE\u8C03\u51FD\u6570\u548C\u8C03\u8D77\u6267\u884C\u5668\u7EE7\u7EED\u6267\u884C\u4EFB\u52A1</p></li></ul><h2 id="\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0" aria-hidden="true">#</a> \u5B9E\u73B0</h2><p>\u5B9A\u4E49\u5E38\u91CF\u548C\u51FD\u6570</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">sendRequest</span><span class="token punctuation">(</span><span class="token parameter">requestList<span class="token punctuation">,</span>limits<span class="token punctuation">,</span>callback</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// \u5B9A\u4E49\u6267\u884C\u961F\u5217\uFF0C\u8868\u793A\u6240\u6709\u5F85\u6267\u884C\u7684\u4EFB\u52A1</span>
    <span class="token keyword">const</span> promises <span class="token operator">=</span> requestList<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// \u5B9A\u4E49\u5F00\u59CB\u65F6\u80FD\u6267\u884C\u7684\u5E76\u53D1\u6570</span>
    <span class="token keyword">const</span> concurrentNum <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>limits<span class="token punctuation">,</span>requestList<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
    <span class="token keyword">let</span> concurrentCount <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// \u5F53\u524D\u5E76\u53D1\u6570</span>
    <span class="token comment">// \u542F\u52A8\u521D\u6B21\u80FD\u6267\u884C\u7684\u4EFB\u52A1</span>
    <span class="token keyword">const</span> <span class="token function-variable function">runTaskNeeded</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>i<span class="token operator">&lt;</span>concurrentNum<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">runTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u53D6\u51FA\u4EFB\u52A1\u5E76\u63A8\u9001\u5230\u6267\u884C\u5668</span>
    <span class="token keyword">const</span> <span class="token function-variable function">runTask</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token comment">// \u6267\u884C\u5668\uFF0C\u8FD9\u91CC\u53BB\u6267\u884C\u4EFB\u52A1</span>
    <span class="token keyword">const</span> <span class="token function-variable function">runner</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token comment">// \u635E\u8D77\u4E0B\u4E00\u4E2A\u4EFB\u52A1</span>
    <span class="token keyword">const</span> <span class="token function-variable function">picker</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token comment">// \u5F00\u59CB\u6267\u884C\uFF01</span>
    <span class="token function">runTaskNeeded</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B9E\u73B0\u5BF9\u5E94\u7684\u51FD\u6570</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">sendRequest</span><span class="token punctuation">(</span><span class="token parameter">requestList<span class="token punctuation">,</span>limits<span class="token punctuation">,</span>callback</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token keyword">const</span> promises <span class="token operator">=</span> requestList<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u53D6\u5F97\u8BF7\u6C42list\uFF08\u6D45\u62F7\u8D1D\u4E00\u4EFD\uFF09</span>

    <span class="token comment">// \u5F97\u5230\u5F00\u59CB\u65F6\uFF0C\u80FD\u6267\u884C\u7684\u5E76\u53D1\u6570</span>

    <span class="token keyword">const</span> concurrentNum <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>limits<span class="token punctuation">,</span>requestList<span class="token punctuation">.</span>length<span class="token punctuation">)</span>

    <span class="token keyword">let</span> concurrentCount <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// \u5F53\u524D\u5E76\u53D1\u6570</span>

    <span class="token comment">// \u7B2C\u4E00\u6B21\u5148\u8DD1\u8D77\u53EF\u4EE5\u5E76\u53D1\u7684\u4EFB\u52A1</span>

    <span class="token keyword">const</span> <span class="token function-variable function">runTaskNeeded</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>

        <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span>

        <span class="token comment">// \u542F\u52A8\u5F53\u524D\u80FD\u6267\u884C\u7684\u4EFB\u52A1</span>

        <span class="token keyword">while</span><span class="token punctuation">(</span>i<span class="token operator">&lt;</span>concurrentNum<span class="token punctuation">)</span><span class="token punctuation">{</span>

            i<span class="token operator">++</span>

            <span class="token function">runTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

    <span class="token comment">// \u53D6\u51FA\u4EFB\u52A1\u5E76\u4E14\u6267\u884C\u4EFB\u52A1</span>

    <span class="token keyword">const</span> <span class="token function-variable function">runTask</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>

        <span class="token keyword">const</span> task <span class="token operator">=</span> promises<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        task <span class="token operator">&amp;&amp;</span> <span class="token function">runner</span><span class="token punctuation">(</span>task<span class="token punctuation">)</span>

    <span class="token punctuation">}</span>




    <span class="token comment">// \u6267\u884C\u5668</span>

    <span class="token comment">// \u6267\u884C\u4EFB\u52A1\uFF0C\u540C\u65F6\u66F4\u65B0\u5F53\u524D\u5E76\u53D1\u6570</span>

    <span class="token keyword">const</span> <span class="token function-variable function">runner</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">task</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>

        <span class="token keyword">try</span> <span class="token punctuation">{</span>

            concurrentCount<span class="token operator">++</span>

            <span class="token keyword">await</span> <span class="token function">task</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token punctuation">}</span><span class="token keyword">finally</span><span class="token punctuation">{</span>

            <span class="token comment">// \u5E76\u53D1\u6570--</span>

            concurrentCount<span class="token operator">--</span>

            <span class="token comment">// \u635E\u8D77\u4E0B\u4E00\u4E2A\u4EFB\u52A1</span>
            <span class="token function">picker</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

<span class="token comment">// \u635E\u8D77\u4E0B\u4E00\u4E2A\u4EFB\u52A1</span>

    <span class="token keyword">const</span> <span class="token function-variable function">picker</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>

        <span class="token comment">// \u4EFB\u52A1\u961F\u5217\u91CC\u8FD8\u6709\u4EFB\u52A1\u5E76\u4E14\u6B64\u65F6\u8FD8\u6709\u5269\u4F59\u5E76\u53D1\u6570\u7684\u65F6\u5019 \u6267\u884C</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>concurrentCount <span class="token operator">&lt;</span> limits <span class="token operator">&amp;&amp;</span> promises<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>

            <span class="token comment">// \u7EE7\u7EED\u6267\u884C\u4EFB\u52A1</span>

            <span class="token function">runTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment">// \u961F\u5217\u4E3A\u7A7A\u7684\u65F6\u5019\uFF0C\u5E76\u4E14\u8BF7\u6C42\u6C60\u6E05\u7A7A\u4E86\uFF0C\u5C31\u53EF\u4EE5\u6267\u884C\u6700\u540E\u7684\u56DE\u8C03\u51FD\u6570\u4E86</span>

        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>promises<span class="token punctuation">.</span>length <span class="token operator">==</span><span class="token number">0</span> <span class="token operator">&amp;&amp;</span> concurrentCount <span class="token operator">==</span><span class="token number">0</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>

            <span class="token comment">// \u6267\u884C\u7ED3\u675F</span>

            callback <span class="token operator">&amp;&amp;</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>



    <span class="token comment">// \u5165\u53E3\u6267\u884C</span>

    <span class="token function">runTaskNeeded</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53E6\u4E00\u79CD\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u53E6\u4E00\u79CD\u5B9E\u73B0" aria-hidden="true">#</a> \u53E6\u4E00\u79CD\u5B9E\u73B0</h2><p>\u6838\u5FC3\u4EE3\u7801\u662F\u5224\u65AD\u662F\u5F53\u4F60 \u3010\u6709\u4EFB\u52A1\u6267\u884C\u5B8C\u6210\u3011 \uFF0C\u518D\u53BB\u5224\u65AD\u662F\u5426\u6709\u5269\u4F59\u8FD8\u6709\u4EFB\u52A1\u53EF\u6267\u884C\u3002\u53EF\u4EE5\u5148\u7EF4\u62A4\u4E00\u4E2Apool\uFF08\u4EE3\u8868\u5F53\u524D\u6267\u884C\u7684\u4EFB\u52A1\uFF09\uFF0C\u5229\u7528await Promise.race\u8FD9\u4E2Apool\uFF0C\u4E0D\u5C31\u77E5\u9053\u662F\u5426\u6709\u4EFB\u52A1\u6267\u884C\u5B8C\u6BD5\u4E86\u5417\uFF1F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">sendRequest</span><span class="token punctuation">(</span><span class="token parameter">requestList<span class="token punctuation">,</span>limits<span class="token punctuation">,</span>callback</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token comment">// \u7EF4\u62A4\u4E00\u4E2Apromise\u961F\u5217</span>

    <span class="token keyword">const</span> promises <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token comment">// \u5F53\u524D\u7684\u5E76\u53D1\u6C60,\u7528Set\u7ED3\u6784\u65B9\u4FBF\u5220\u9664</span>

    <span class="token keyword">const</span> pool <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// set\u4E5F\u662FIterable&lt;any&gt;[]\u7C7B\u578B\uFF0C\u56E0\u6B64\u53EF\u4EE5\u653E\u5165\u5230race\u91CC</span>

    <span class="token comment">// \u5F00\u59CB\u5E76\u53D1\u6267\u884C\u6240\u6709\u7684\u4EFB\u52A1</span>

    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> request <span class="token keyword">of</span> requestList<span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token comment">// \u5F00\u59CB\u6267\u884C\u524D\uFF0C\u5148await \u5224\u65AD \u5F53\u524D\u7684\u5E76\u53D1\u4EFB\u52A1\u662F\u5426\u8D85\u8FC7\u9650\u5236</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span>pool<span class="token punctuation">.</span>size <span class="token operator">&gt;=</span> limits<span class="token punctuation">)</span><span class="token punctuation">{</span>

            <span class="token comment">// \u8FD9\u91CC\u56E0\u4E3A\u6CA1\u6709try catch \uFF0C\u6240\u4EE5\u8981\u6355\u83B7\u4E00\u4E0B\u9519\u8BEF\uFF0C\u4E0D\u7136\u5F71\u54CD\u4E0B\u9762\u5FAE\u4EFB\u52A1\u7684\u6267\u884C</span>


            <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">race</span><span class="token punctuation">(</span>pool<span class="token punctuation">)</span>

            <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token operator">=&gt;</span>err<span class="token punctuation">)</span>

        <span class="token punctuation">}</span>

        <span class="token keyword">const</span> promise <span class="token operator">=</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">// \u62FF\u5230promise</span>

        <span class="token comment">// \u5220\u9664\u8BF7\u6C42\u7ED3\u675F\u540E\uFF0C\u4ECEpool\u91CC\u9762\u79FB\u9664</span>

        <span class="token keyword">const</span> <span class="token function-variable function">cb</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>

            pool<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>promise<span class="token punctuation">)</span>

        <span class="token punctuation">}</span>

        <span class="token comment">// \u6CE8\u518C\u4E0Bthen\u7684\u4EFB\u52A1</span>

        promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>cb<span class="token punctuation">,</span>cb<span class="token punctuation">)</span>

        pool<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>promise<span class="token punctuation">)</span>

        promises<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>promise<span class="token punctuation">)</span>

    <span class="token punctuation">}</span>

    <span class="token comment">// \u7B49\u6700\u540E\u4E00\u4E2Afor await \u7ED3\u675F\uFF0C\u8FD9\u91CC\u662F\u5C5E\u4E8E\u6700\u540E\u4E00\u4E2A await \u540E\u9762\u7684 \u5FAE\u4EFB\u52A1</span>

    <span class="token comment">// \u6CE8\u610F\u8FD9\u91CC\u5176\u5B9E\u662F\u5728\u5FAE\u4EFB\u52A1\u5F53\u4E2D\u4E86\uFF0C\u5F53\u524D\u7684promises\u91CC\u9762\u662F\u80FD\u786E\u4FDD\u6240\u6709\u7684promise\u90FD\u5728\u5176\u4E2D(\u524D\u63D0\u662Fawait\u90A3\u91CC\u547D\u4E2D\u4E86if)</span>


    Promise<span class="token punctuation">.</span><span class="token function">allSettled</span><span class="token punctuation">(</span>promises<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>callback<span class="token punctuation">,</span>callback<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u603B\u7ED3\u4E00\u4E0B\u8981\u70B9\uFF1A <ul><li>\u5229\u7528race\u7684\u7279\u6027\u53EF\u4EE5\u627E\u5230 \u5E76\u53D1\u4EFB\u52A1 \u91CC\u6700\u5FEB\u7ED3\u675F\u7684\u8BF7\u6C42</li><li>\u5229\u7528for await \u53EF\u4EE5\u4FDD\u8BC1for\u7ED3\u6784\u4F53\u4E0B\u9762\u7684\u4EE3\u7801\u662F\u6700\u540Eawait \u540E\u7684\u5FAE\u4EFB\u52A1\uFF0C\u800C\u5728\u6700\u540E\u4E00\u4E2A\u5FAE\u4EFB\u52A1\u4E0B\uFF0C\u53EF\u4EE5\u4FDD\u8BC1\u6240\u6709\u7684promise\u5DF2\u7ECF\u5B58\u5165promises\u91CC\uFF08\u5982\u679C\u6CA1\u547D\u4E2D\u4EFB\u4F55\u4E00\u4E2Aawait\uFF0C\u5373\u9650\u5236\u5E76\u53D1\u6570&gt;\u4EFB\u52A1\u6570\u7684\u65F6\u5019\uFF0C\u867D\u7136\u4E0D\u662F\u5728\u5FAE\u4EFB\u52A1\u5F53\u4E2D\uFF0C\u4E5F\u53EF\u4EE5\u4FDD\u8BC1\u6240\u6709\u7684promise\u90FD\u5728\u91CC\u9762\uFF09\uFF0C\u6700\u540E\u5229\u7528allSettled\uFF0C\u7B49\u5F85\u6240\u6709\u7684promise\u72B6\u6001\u8F6C\u53D8\u540E\uFF0C\u8C03\u7528\u56DE\u8C03\u51FD\u6570</li><li>\u5E76\u53D1\u4EFB\u52A1\u6C60 \u7528Set\u7ED3\u6784\u5B58\u50A8\uFF0C\u53EF\u4EE5\u901A\u8FC7\u6307\u9488\u6765\u5220\u9664\u5BF9\u5E94\u7684\u4EFB\u52A1\uFF0C\u901A\u8FC7\u95ED\u5305\u5F15\u7528\u8BE5\u6307\u9488\u4ECE\u800C\u8FBE\u5230 \u52A8\u6001\u63A7\u5236\u5E76\u53D1\u6C60\u6570\u76EE</li><li>for await \u7ED3\u6784\u4F53\u91CC\uFF0C\u5176\u5B9Eawait\u4E0B\u9762\uFF0C\u5305\u62EC\u7ED3\u6784\u4F53\u5916 \u90FD\u662F\u5C5E\u4E8E\u5FAE\u4EFB\u52A1\uFF08\u524D\u63D0\u662F\u6709\u4E00\u4E2Aawait\u91CC\u9762\u7684if\u88AB\u547D\u4E2D\uFF09\uFF0C\u81F3\u4E8E\u8FD9\u4E2A\u5FAE\u4EFB\u52A1\u4EC0\u4E48\u65F6\u5019\u88AB\u52A0\u5165\u5FAE\u4EFB\u52A1\u961F\u5217\uFF0C\u8981\u770B\u8BF7\u6C42\u7684\u90A3\u91CC\u7684\u5728\u4EC0\u4E48\u65F6\u5019\u5F00\u59CB\u6807\u8BB0\uFF08resolve/reject \uFF09</li><li>for await \u91CC\u5176\u5B9E \u5DF2\u7ECF\u5728\u6B64\u8F6E\u5B8F\u4EFB\u52A1\u5F53\u4E2D\u5E76\u53D1\u6267\u884C\u4E86\uFF0Cawait\u540E\u9762\u7684\u4EE3\u7801\u88AB\u6302\u8D77\u6765\uFF0C\u7B49\u524D\u4E00\u4E2Apromise\u8F6C\u53D8\u72B6\u6001--&gt;\u79FB\u51FApool--&gt;\u5C06\u4E0B\u4E00\u4E2Apromise\u635E\u8D77\u52A0\u5165pool\u5F53\u4E2D --&gt;\u4E0B\u4E00\u4E2Aawait\u7B49\u5F85\u6700\u5FEB\u7684promise\uFF0C\u5982\u6B64\u5F80\u590D\u3002</li></ul></li></ul><p>\u53EF\u4EE5\u60F3\u8C61\u8FD9\u6837\u4E00\u4E2A\u573A\u666F\uFF0C\u51E0\u7EC4\u4EBA \u5728\u73A9\u767E\u7C73\u63A5\u529B\u8D5B\uFF0C\u6BCF\u4E00\u7EC4\u5206\u522B\u57280m,100m,200m\u7684\u5730\u65B9\uFF0C\u6709\u51E0\u4E2A\u8D5B\u9053\u6BCF\u7EC4\u5C31\u6709\u51E0\u4E2A\u4EBA\u3002\uFF08\u6CE8\u610F\uFF0C\u8FD9\u91CC\u60F3\u8C61\u6210 \u6BCF\u4E2A\u8282\u70B9\uFF08\u6BD4\u59820m\u5904\uFF09 \u8FD9\u51E0\u4E2A\u4EBA\u662F\u4E00\u7EC4\uFF09\uFF0C\u6BCF\u5230\u4E0B\u4E00\u4E2A\u8282\u70B9\u7684\u4EBA\uFF0C\u5C06\u68D2\u5B50\u4EA4\u7ED9\u6392\u961F\u5728\u6700\u524D\u9762\u7684\u4E0B\u4E00\u4E2A\u4EBA\uFF0C\u4E0B\u4E00\u4E2A\u4EBA\u5C31\u5F00\u59CB\u8DD1\u3002</p>`,13),i=[p];function c(o,l){return s(),a("div",null,i)}const r=n(t,[["render",c],["__file","19.html.vue"]]);export{r as default};
