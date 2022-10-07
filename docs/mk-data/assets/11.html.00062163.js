import{_ as n,o as s,c as a,a as p}from"./app.23d51b2e.js";const t={},e=p(`<h1 id="\u51FD\u6570\u9012\u5F52\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u9012\u5F52\u4F18\u5316" aria-hidden="true">#</a> \u51FD\u6570\u9012\u5F52\u4F18\u5316</h1><p>\u4EE5\u6700\u57FA\u7840\u7684\u6590\u6CE2\u90A3\u5951\u6570\u5217\u4E3A\u4F8B\uFF0C\u8FD9\u4E2A\u9898\u5F88\u7ECF\u5178\u4E86\uFF0C\u9012\u5F52\u548Cdp\u7684\u6559\u5B66\u4F8B\u9898\uFF0C\u4E5F\u662F\u5BB6\u5E38\u4FBF\u996D\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fib</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">||</span> num <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span>
    <span class="token keyword">return</span> <span class="token function">fib</span><span class="token punctuation">(</span>num <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">fib</span><span class="token punctuation">(</span>num <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6700\u666E\u901A\u7684\u9012\u5F52\u5B58\u5728\u5927\u91CF\u7684\u91CD\u590D\u8BA1\u7B97\uFF0C\u6240\u4EE5\uFF0C\u6700\u4F18\u89E3\u662F\u4F7F\u7528\u52A8\u6001\u89C4\u5212\u6765\u505A\uFF0C\u7528\u7A7A\u95F4\u6362\u65F6\u95F4\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fib</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>num <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
    dp<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
    dp<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> num <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> dp<span class="token punctuation">[</span>num<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u5F88\u591A\u60C5\u51B5\u4E0B\uFF0C\u9012\u5F52\u6BD4dp\u66F4\u5BB9\u6613\u5199\u51FA\u6765\uFF0C\u5982\u679C\u4F60\u6070\u5DE7\u60F3\u7528\u9012\u5F52\u6765\u89E3\u51B3\u95EE\u9898\uFF0C\u91C7\u7528\u7F13\u5B58\u6765\u9012\u5F52\u526A\u679D\u4E5F\u53EF\u4EE5\u5F97\u5230\u6700\u4F18\u89E3\u3002</p><p>\u6070\u5DE7\u524D\u7AEF\u975E\u5E38\u591A\u7684\u4E0E\u7F13\u5B58\u6253\u4EA4\u9053\uFF0C\u4E5F\u5E0C\u671B\u4F60\u5728\u4EE5\u4E0B\u8FD9\u4E9B\u9012\u5F52\u526A\u679D\u65B9\u6CD5\u4E2D\uFF0C\u638C\u63E1\u7F13\u5B58\u2014\u2014\u8FD9\u4E2A\u6BCF\u4E2AJSer\u7684\u5FC5\u4FEE\u8BFE\u3002</p><h2 id="\u95ED\u5305\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#\u95ED\u5305\u7F13\u5B58" aria-hidden="true">#</a> \u95ED\u5305\u7F13\u5B58</h2><p>\u5199\u9012\u5F52\u7684\u65F6\u5019\u5F80\u5F80\u9700\u8981\u4E00\u4E2A\u5168\u5C40\u53D8\u91CF\u6765\u8F85\u52A9\uFF0C\u8FD9\u4E2A\u53D8\u91CF\u5927\u591A\u6570\u7684\u60C5\u51B5\u4E0B\u5C31\u662F\u7F13\u5B58</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
<span class="token keyword">const</span> m <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u4F7F\u7528\u5168\u5C40\u53D8\u91CF\u505A\u5B58\u50A8</span>
<span class="token keyword">function</span> <span class="token function">fib</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>m<span class="token punctuation">[</span>num<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>                <span class="token comment">//\u5F00\u5934\u53D6</span>
        <span class="token keyword">return</span> m<span class="token punctuation">[</span>num<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>num <span class="token operator">===</span> <span class="token number">1</span>  <span class="token operator">||</span> num <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
       <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
        <span class="token keyword">return</span> m<span class="token punctuation">[</span>num<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">fib</span><span class="token punctuation">(</span>num<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">fib</span><span class="token punctuation">(</span>num<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u7ED3\u5C3E\u5B58</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5168\u5C40\u53D8\u91CF\u9020\u6210\u5168\u5C40\u6C61\u67D3\u662F\u6211\u4EEC\u4E0D\u60F3\u89C1\u5230\u7684\uFF0C\u6211\u4EEC\u66F4\u5E0C\u671B\u8FD9\u4E2A\u9012\u5F52\u51FD\u6570\u5177\u5907\u72EC\u7ACB\u89E3\u51B3\u95EE\u9898\u7684\u80FD\u529B\u3002</p><p>\u6240\u4EE5\u6211\u4F1A\u91C7\u7528\u51FD\u6570\u5D4C\u5957\u7684\u65B9\u5F0F\uFF0C\u5C06\u8FD9\u4E2A\u53D8\u91CF\u585E\u5230\u91CC\u9762\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fib</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">const</span> m <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">function</span> <span class="token function">_fib</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>m<span class="token punctuation">[</span>num<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> m<span class="token punctuation">[</span>num<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>num <span class="token operator">===</span> <span class="token number">1</span>  <span class="token operator">||</span> num <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> m<span class="token punctuation">[</span>num<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">_fib</span><span class="token punctuation">(</span>num<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">_fib</span><span class="token punctuation">(</span>num<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">return</span> <span class="token function">_fib</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u6570\u9ED8\u8BA4\u503C-\u5C3E\u9012\u5F52" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u9ED8\u8BA4\u503C-\u5C3E\u9012\u5F52" aria-hidden="true">#</a> \u53C2\u6570\u9ED8\u8BA4\u503C\uFF0C\u5C3E\u9012\u5F52</h2><p>\u7528\u4E8E\u533A\u5206\u7B2C\u4E00\u6B21\u8C03\u7528\uFF0C\u548C\u540E\u7EED\u8C03\u7528\uFF0C\u4F7F\u7528\u53C2\u6570\u9ED8\u8BA4\u503C\u7684\u65B9\u5F0F\u4E5F\u662F\u4E00\u79CD\u5E38\u89C1\u65B9\u5F0F\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fib</span><span class="token punctuation">(</span><span class="token parameter">num<span class="token punctuation">,</span>m <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//\u7B2C\u4E00\u6B21\u4F7F\u7528\u7684\u65F6\u5019\u662F1\u4E2A\u53C2\u6570 \u540E\u7EED\u90FD\u662F2\u4E2A\u53C2\u6570</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>m<span class="token punctuation">[</span>num<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span> m<span class="token punctuation">[</span>num<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> res<span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>num <span class="token operator">===</span> <span class="token number">1</span>  <span class="token operator">||</span> num <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>m<span class="token punctuation">[</span>num<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> m<span class="token punctuation">[</span>num<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">else</span>
                <span class="token keyword">return</span> m<span class="token punctuation">[</span>num<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">_fib</span><span class="token punctuation">(</span>num<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">_fib</span><span class="token punctuation">(</span>num<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">fib</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u81EA\u8BB0\u5FC6\u5316\u51FD\u6570memoization" tabindex="-1"><a class="header-anchor" href="#\u81EA\u8BB0\u5FC6\u5316\u51FD\u6570memoization" aria-hidden="true">#</a> \u81EA\u8BB0\u5FC6\u5316\u51FD\u6570memoization</h2><p>\u300AJavaScript\u5FCD\u8005\u79D8\u7C4D\u300B\u4E2D\u6709\u5199\u9053\uFF0C\u4F7F\u7528js\u7684\u51FD\u6570\u5BF9\u8C61\u505A\u7F13\u5B58\u3002</p><p>JS\u4E2D\uFF0C\u51FD\u6570 \u4E0E \u5BF9\u8C61\u7684\u533A\u522B\uFF0C\u53EA\u6709\u51FD\u6570\u591A\u4E00\u4E2A invokable \u5C5E\u6027\uFF0C\u8868\u793A\u5176\u662F\u53EF\u8C03\u7528\u7684\uFF0C\u5229\u7528\u8BE5\u7279\u6027\uFF0C\u53EF\u4EE5\u5728\u51FD\u6570\u5C5E\u6027\u4E0A\u505A\u7F13\u5B58\u3002</p><p>\u4E0D\u6D89\u53CA\u5230\u968F\u673A\u6570\u3001\u7F51\u7EDC\u8BF7\u6C42\u7B49\uFF0C\u4E00\u79CD\u81EA\u53D8\u91CF\uFF08\u5165\u53C2\uFF09\uFF0C\u5F80\u5F80\u53EA\u5BF9\u5E94\u7740\u4E00\u4E2A\uFF08\u8FD4\u56DE\u503C\uFF09\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
<span class="token keyword">function</span> <span class="token function">fib</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    fib<span class="token punctuation">.</span>m <span class="token operator">=</span> fib<span class="token punctuation">.</span>m <span class="token operator">||</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>fib<span class="token punctuation">.</span>m<span class="token punctuation">[</span>num<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span> fib<span class="token punctuation">.</span>m<span class="token punctuation">[</span>num<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span><span class="token punctuation">(</span>num <span class="token operator">===</span> <span class="token number">1</span>  <span class="token operator">||</span> num <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
        <span class="token keyword">return</span> fib<span class="token punctuation">.</span>m<span class="token punctuation">[</span>num<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">fib</span><span class="token punctuation">(</span>num<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">fib</span><span class="token punctuation">(</span>num<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),o=[e];function c(u,l){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","11.html.vue"]]);export{k as default};