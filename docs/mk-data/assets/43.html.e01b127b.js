import{_ as n,o as s,c as a,a as e}from"./app.77669ddb.js";const t={},p=e(`<h1 id="\u79FB\u52A8\u7AEF-\u89E3\u51B3scroll\u548Ctouch\u4E8B\u4EF6\u7684\u51B2\u7A81-\u5192\u6CE1" tabindex="-1"><a class="header-anchor" href="#\u79FB\u52A8\u7AEF-\u89E3\u51B3scroll\u548Ctouch\u4E8B\u4EF6\u7684\u51B2\u7A81-\u5192\u6CE1" aria-hidden="true">#</a> \u79FB\u52A8\u7AEF/\u89E3\u51B3scroll\u548Ctouch\u4E8B\u4EF6\u7684\u51B2\u7A81/\u5192\u6CE1</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">preventTouch</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> flag <span class="token operator">=</span> <span class="token boolean">false</span> <span class="token comment">// \u662F\u5426\u6EDA\u52A8</span>
    <span class="token keyword">const</span> main <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;main&#39;</span><span class="token punctuation">)</span> <span class="token comment">//\u6709\u6EDA\u52A8\u7684\u9762\u677F</span>
    <span class="token keyword">const</span> cur <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token keyword">let</span> dur <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// \u89E6\u6478\u65F6\u95F4\uFF0C\u592A\u77ED\u4E0D\u89E6\u53D1</span>
    <span class="token keyword">let</span> date_start<span class="token punctuation">,</span> date_end

    main<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;touchstart&#39;</span><span class="token punctuation">,</span> handler<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">passive</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    main<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;touchmove&#39;</span><span class="token punctuation">,</span> handler<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">passive</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    main<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;scroll&#39;</span><span class="token punctuation">,</span> handler<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">passive</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">function</span> <span class="token function">handler</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">switch</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token string">&#39;touchstart&#39;</span><span class="token operator">:</span>
                flag <span class="token operator">=</span> <span class="token boolean">false</span>
                date_start <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token keyword">break</span>
            <span class="token keyword">case</span> <span class="token string">&#39;touchmove&#39;</span><span class="token operator">:</span>
                date_end <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                dur <span class="token operator">=</span> date_end <span class="token operator">-</span> date_start
                <span class="token keyword">if</span> <span class="token punctuation">(</span>flag <span class="token operator">||</span> dur <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//\u8868\u793A\u662F\u6EDA\u52A8\u5B8C\u6210\u540E\u7684\u90A3\u4E2Atouch\u4E0D\u89E6\u53D1/\u95F4\u9694\u592A\u77ED</span>
                    e<span class="token punctuation">.</span><span class="token function">stopImmediatePropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u963B\u6B62\u5192\u6CE1</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">break</span>
            <span class="token keyword">case</span> <span class="token string">&#39;scroll&#39;</span><span class="token operator">:</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>flag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    flag <span class="token operator">=</span> <span class="token boolean">true</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">break</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[p];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","43.html.vue"]]);export{r as default};
