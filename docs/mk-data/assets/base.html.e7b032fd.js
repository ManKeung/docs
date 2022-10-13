import{_ as t,r as i,o as c,c as l,b as s,d as n,e,a as p}from"./app.fbf02b19.js";const o={},u={id:"less",tabindex:"-1"},r=s("a",{class:"header-anchor",href:"#less","aria-hidden":"true"},"#",-1),d={href:"https://less.bootcss.com/",target:"_blank",rel:"noopener noreferrer"},v=p(`<p>Less \uFF08Leaner Style Sheets \u7684\u7F29\u5199\uFF09 \u662F\u4E00\u95E8\u5411\u540E\u517C\u5BB9\u7684 CSS \u6269\u5C55\u8BED\u8A00\u3002\u8FD9\u91CC\u5448\u73B0\u7684\u662F Less \u7684\u5B98\u65B9\u6587\u6863\uFF08\u4E2D\u6587\u7248\uFF09\uFF0C\u5305\u542B\u4E86 Less \u8BED\u8A00\u4EE5\u53CA\u5229\u7528 JavaScript \u5F00\u53D1\u7684\u7528\u4E8E\u5C06 Less \u6837\u5F0F\u8F6C\u6362\u6210 CSS \u6837\u5F0F\u7684 Less.js \u5DE5\u5177\u3002</p><h2 id="\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF" aria-hidden="true">#</a> \u53D8\u91CF</h2><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token variable">@width<span class="token punctuation">:</span></span> 10px<span class="token punctuation">;</span>
<span class="token variable">@height<span class="token punctuation">:</span></span> <span class="token variable">@width</span> <span class="token operator">+</span> 10px<span class="token punctuation">;</span>

<span class="token selector">#header</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">@width</span><span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> <span class="token variable">@height</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7F16\u8BD1</span>
<span class="token selector">#header</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6DF7\u5408" tabindex="-1"><a class="header-anchor" href="#\u6DF7\u5408" aria-hidden="true">#</a> \u6DF7\u5408</h2><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">.bordered</span> <span class="token punctuation">{</span>
    <span class="token property">border-top</span><span class="token punctuation">:</span> dotted 1x black<span class="token punctuation">;</span>
    <span class="token property">border-bottom</span><span class="token punctuation">:</span> solid 2px black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#menu a</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #111<span class="token punctuation">;</span>
    <span class="token mixin-usage function">.bordered</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5D4C\u5957" tabindex="-1"><a class="header-anchor" href="#\u5D4C\u5957" aria-hidden="true">#</a> \u5D4C\u5957</h2><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">#header</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
    <span class="token selector">.navigation</span> <span class="token punctuation">{</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.logo</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7F16\u8BD1</span>
<span class="token selector">#header</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#header .navigation</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#header .logo</span> <span class="token punctuation">{</span>
     <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.clearfix</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token property">zoom</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>

    <span class="token selector">&amp;:after</span> <span class="token punctuation">{</span>
        <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
        <span class="token property">visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u89C4\u5219\u5D4C\u5957\u548C\u5192\u6CE1" tabindex="-1"><a class="header-anchor" href="#\u89C4\u5219\u5D4C\u5957\u548C\u5192\u6CE1" aria-hidden="true">#</a> @\u89C4\u5219\u5D4C\u5957\u548C\u5192\u6CE1</h2><p>@ \u89C4\u5219\uFF08\u4F8B\u5982 @media \u6216 @supports\uFF09\u53EF\u4EE5\u4E0E\u9009\u62E9\u5668\u4EE5\u76F8\u540C\u7684\u65B9\u5F0F\u8FDB\u884C\u5D4C\u5957\u3002@ \u89C4\u5219\u4F1A\u88AB\u653E\u5728\u524D\u9762\uFF0C\u540C\u4E00\u89C4\u5219\u96C6\u4E2D\u7684\u5176\u5B83\u5143\u7D20\u7684\u76F8\u5BF9\u987A\u5E8F\u4FDD\u6301\u4E0D\u53D8\u3002\u8FD9\u53EB\u505A\u5192\u6CE1\uFF08bubbling\uFF09\u3002</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">.component</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token atrule">@media <span class="token punctuation">(</span>min-width<span class="token punctuation">:</span> 768px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
        <span class="token atrule">@media  <span class="token punctuation">(</span>min-resolution<span class="token punctuation">:</span> 192dpi<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
        <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>/img/retina2x.png<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token atrule">@media <span class="token punctuation">(</span>min-width<span class="token punctuation">:</span> 1280px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u7F16\u8BD1</span>
<span class="token selector">.component</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token atrule">@media <span class="token punctuation">(</span>min-width<span class="token punctuation">:</span> 768px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token selector">.component</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token atrule">@media <span class="token punctuation">(</span>min-width<span class="token punctuation">:</span> 768px<span class="token punctuation">)</span> and <span class="token punctuation">(</span>min-resolution<span class="token punctuation">:</span> 192dpi<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token selector">.component</span> <span class="token punctuation">{</span>
        <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>/img/retina2x.png<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token atrule">@media <span class="token punctuation">(</span>min-width<span class="token punctuation">:</span> 1280px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token selector">.component</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8FD0\u7B97" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u7B97" aria-hidden="true">#</a> \u8FD0\u7B97</h2><p>\u7B97\u672F\u8FD0\u7B97\u7B26 +\u3001-\u3001*\u3001/ \u53EF\u4EE5\u5BF9\u4EFB\u4F55\u6570\u5B57\u3001\u989C\u8272\u6216\u53D8\u91CF\u8FDB\u884C\u8FD0\u7B97\u3002\u5982\u679C\u53EF\u80FD\u7684\u8BDD\uFF0C\u7B97\u672F\u8FD0\u7B97\u7B26\u5728\u52A0\u3001\u51CF\u6216\u6BD4\u8F83\u4E4B\u524D\u4F1A\u8FDB\u884C\u5355\u4F4D\u6362\u7B97\u3002\u8BA1\u7B97\u7684\u7ED3\u679C\u4EE5\u6700\u5DE6\u4FA7\u64CD\u4F5C\u6570\u7684\u5355\u4F4D\u7C7B\u578B\u4E3A\u51C6\u3002\u5982\u679C\u5355\u4F4D\u6362\u7B97\u65E0\u6548\u6216\u5931\u53BB\u610F\u4E49\uFF0C\u5219\u5FFD\u7565\u5355\u4F4D\u3002\u65E0\u6548\u7684\u5355\u4F4D\u6362\u7B97\u4F8B\u5982\uFF1Apx \u5230 cm \u6216 rad \u5230 % \u7684\u8F6C\u6362\u3002</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token comment">// \u6240\u6709\u64CD\u4F5C\u6570\u88AB\u8F6C\u6362\u6210\u76F8\u540C\u7684\u5355\u4F4D</span>
<span class="token variable">@conversion-1<span class="token punctuation">:</span></span> 5cm <span class="token operator">+</span> 10mm<span class="token punctuation">;</span> <span class="token comment">// \u7ED3\u679C\u662F 6cm</span>
<span class="token variable">@conversion-2<span class="token punctuation">:</span></span> 2 <span class="token operator">-</span> 3cm <span class="token operator">-</span> 5mm<span class="token punctuation">;</span> <span class="token comment">// \u7ED3\u679C\u662F -1.5cm</span>

<span class="token comment">// conversion is impossible</span>
<span class="token variable">@incompatible-units<span class="token punctuation">:</span></span> 2 <span class="token operator">+</span> 5px <span class="token operator">-</span> 3cm<span class="token punctuation">;</span> <span class="token comment">// \u7ED3\u679C\u662F 4px</span>

<span class="token comment">// example with variables</span>
<span class="token variable">@base<span class="token punctuation">:</span></span> 5%<span class="token punctuation">;</span>
<span class="token variable">@filler<span class="token punctuation">:</span></span> <span class="token variable">@base</span> <span class="token operator">*</span> 2<span class="token punctuation">;</span> <span class="token comment">// \u7ED3\u679C\u662F 10%</span>
<span class="token variable">@other<span class="token punctuation">:</span></span> <span class="token variable">@base</span> <span class="token operator">+</span> <span class="token variable">@filler</span><span class="token punctuation">;</span> <span class="token comment">// \u7ED3\u679C\u662F 15%</span>

<span class="token comment">// \u4E58\u6CD5\u548C\u9664\u6CD5\u4E0D\u4F5C\u8F6C\u6362\u3002\u56E0\u4E3A\u8FD9\u4E24\u79CD\u8FD0\u7B97\u5728\u5927\u591A\u6570\u60C5\u51B5\u4E0B\u90FD\u6CA1\u6709\u610F\u4E49\uFF0C\u4E00\u4E2A\u957F\u5EA6\u4E58\u4EE5\u4E00\u4E2A\u957F\u5EA6\u5C31\u5F97\u5230\u4E00\u4E2A\u533A\u57DF\uFF0C\u800C CSS \u662F\u4E0D\u652F\u6301\u6307\u5B9A\u533A\u57DF\u7684\u3002Less \u5C06\u6309\u6570\u5B57\u7684\u539F\u6837\u8FDB\u884C\u64CD\u4F5C\uFF0C\u5E76\u5C06\u4E3A\u8BA1\u7B97\u7ED3\u679C\u6307\u5B9A\u660E\u786E\u7684\u5355\u4F4D\u7C7B\u578B\u3002</span>
<span class="token variable">@base<span class="token punctuation">:</span></span> 2cm <span class="token operator">*</span> 3mm<span class="token punctuation">;</span> <span class="token comment">// \u7ED3\u679C\u662F 6cm</span>

<span class="token comment">// \u5BF9\u989C\u8272\u8FDB\u884C\u7B97\u672F\u8FD0\u7B97\uFF1A</span>
<span class="token variable">@color<span class="token punctuation">:</span></span> #224488 <span class="token operator">/</span> 2<span class="token punctuation">;</span> <span class="token comment">//\u7ED3\u679C\u662F #112244</span>
<span class="token property">background-color</span><span class="token punctuation">:</span> #112244 <span class="token operator">+</span> #111<span class="token punctuation">;</span> <span class="token comment">// \u7ED3\u679C\u662F #223355</span>

<span class="token comment">// calc() \u7279\u4F8B</span>
<span class="token variable">@var<span class="token punctuation">:</span></span> 50vh<span class="token operator">/</span>2<span class="token punctuation">;</span>
<span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>50% <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token variable">@var</span> <span class="token operator">-</span> 20px<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// \u7ED3\u679C\u662F calc(50% + (25vh - 20px))</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8F6C\u4E49" tabindex="-1"><a class="header-anchor" href="#\u8F6C\u4E49" aria-hidden="true">#</a> \u8F6C\u4E49</h2><p>\u8F6C\u4E49\uFF08Escaping\uFF09\u5141\u8BB8\u4F60\u4F7F\u7528\u4EFB\u610F\u5B57\u7B26\u4E32\u4F5C\u4E3A\u5C5E\u6027\u6216\u53D8\u91CF\u503C\u3002\u4EFB\u4F55 ~&quot;anything&quot; \u6216 ~&#39;anything&#39; \u5F62\u5F0F\u7684\u5185\u5BB9\u90FD\u5C06\u6309\u539F\u6837\u8F93\u51FA\uFF0C\u9664\u975E interpolation\u3002</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token variable">@min768<span class="token punctuation">:</span></span> ~<span class="token string">&quot;(min-width: 768px)&quot;</span><span class="token punctuation">;</span>
<span class="token selector">.element</span> <span class="token punctuation">{</span>
    <span class="token atrule">@media @min768</span> <span class="token punctuation">{</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 1.2rem<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7F16\u8BD1</span>
<span class="token atrule">@media <span class="token punctuation">(</span>min-width<span class="token punctuation">:</span> 768px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token selector">.element</span> <span class="token punctuation">{</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 1.2rem<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4ECE Less 3.5 \u5F00\u59CB\uFF0C\u53EF\u4EE5\u7B80\u5199\u4E3A</span>
<span class="token variable">@min768<span class="token punctuation">:</span></span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token selector">.element</span> <span class="token punctuation">{</span>
    <span class="token atrule">@media @min768</span> <span class="token punctuation">{</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 1.2rem<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u5728 Less 3.5+ \u7248\u672C\u4E2D\uFF0C\u8BB8\u591A\u4EE5\u524D\u9700\u8981\u201C\u5F15\u53F7\u8F6C\u4E49\u201D\u7684\u60C5\u51B5\u5C31\u4E0D\u518D\u9700\u8981\u4E86</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570" aria-hidden="true">#</a> \u51FD\u6570</h2>`,17),k={href:"https://less.bootcss.com/functions/",target:"_blank",rel:"noopener noreferrer"},m=p(`<p>\u51FD\u6570\u7684\u7528\u6CD5\u975E\u5E38\u7B80\u5355\u3002\u4E0B\u9762\u8FD9\u4E2A\u4F8B\u5B50\u5C06\u4ECB\u7ECD\u5982\u4F55\u5229\u7528 percentage \u51FD\u6570\u5C06 0.5 \u8F6C\u6362\u4E3A 50%\uFF0C\u5C06\u989C\u8272\u9971\u548C\u5EA6\u589E\u52A0 5%\uFF0C\u4EE5\u53CA\u989C\u8272\u4EAE\u5EA6\u964D\u4F4E 25% \u5E76\u4E14\u8272\u76F8\u503C\u589E\u52A0 8 \u7B49\u7528\u6CD5\uFF1A</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token variable">@base<span class="token punctuation">:</span></span> #f04615<span class="token punctuation">;</span>
<span class="token variable">@width<span class="token punctuation">:</span></span> 0.5<span class="token punctuation">;</span>

<span class="token selector">.class</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">percentage</span><span class="token punctuation">(</span><span class="token variable">@width</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// returns \`50%\`</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">saturate</span><span class="token punctuation">(</span><span class="token variable">@base</span><span class="token punctuation">,</span> 5%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">spin</span><span class="token punctuation">(</span><span class="token function">lighten</span><span class="token punctuation">(</span><span class="token variable">@base</span><span class="token punctuation">,</span> 25%<span class="token punctuation">)</span><span class="token punctuation">,</span> 8<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u547D\u540D\u7A7A\u95F4\u548C\u8BBF\u95EE\u7B26" tabindex="-1"><a class="header-anchor" href="#\u547D\u540D\u7A7A\u95F4\u548C\u8BBF\u95EE\u7B26" aria-hidden="true">#</a> \u547D\u540D\u7A7A\u95F4\u548C\u8BBF\u95EE\u7B26</h2><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">#bundle()</span> <span class="token punctuation">{</span>
    <span class="token selector">.button</span> <span class="token punctuation">{</span>
        <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> 1px solid black<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> grey<span class="token punctuation">;</span>
        <span class="token selector">&amp;:hover</span> <span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.tab</span> <span class="token punctuation">{</span> ... <span class="token punctuation">}</span>
    <span class="token selector">.citation</span> <span class="token punctuation">{</span> ... <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">#header a</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
    <span class="token mixin-usage function">#bundle.button</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// \u8FD8\u53EF\u4EE5\u4E66\u5199\u4E3A #bundle &gt; .button \u5F62\u5F0F</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6620\u5C04" tabindex="-1"><a class="header-anchor" href="#\u6620\u5C04" aria-hidden="true">#</a> \u6620\u5C04</h2><p>\u4ECE Less 3.5 \u7248\u672C\u5F00\u59CB\uFF0C\u4F60\u8FD8\u53EF\u4EE5\u5C06\u6DF7\u5408\uFF08mixins\uFF09\u548C\u89C4\u5219\u96C6\uFF08rulesets\uFF09\u4F5C\u4E3A\u4E00\u7EC4\u503C\u7684\u6620\u5C04\uFF08map\uFF09\u4F7F\u7528\u3002</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">#colors()</span> <span class="token punctuation">{</span>
    <span class="token property">primary</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
    <span class="token property">secondary</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.button</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #colors[primary]<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #colors[secondary]<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u7528\u57DF" aria-hidden="true">#</a> \u4F5C\u7528\u57DF</h2><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token variable">@var<span class="token punctuation">:</span></span> red<span class="token punctuation">;</span>

<span class="token selector">#page</span> <span class="token punctuation">{</span>
    <span class="token variable">@var<span class="token punctuation">:</span></span> white<span class="token punctuation">;</span>
    <span class="token selector">#header</span> <span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">@var</span><span class="token punctuation">;</span> <span class="token comment">// white</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u4E0E CSS \u81EA\u5B9A\u4E49\u5C5E\u6027\u4E00\u6837\uFF0C\u6DF7\u5408\uFF08mixin\uFF09\u548C\u53D8\u91CF\u7684\u5B9A\u4E49\u4E0D\u5FC5\u5728\u5F15\u7528\u4E4B\u524D\u4E8B\u5148\u5B9A\u4E49\u3002\u56E0\u6B64\uFF0C\u4E0B\u9762\u7684 Less \u4EE3\u7801\u793A\u4F8B\u548C\u4E0A\u9762\u7684\u4EE3\u7801\u793A\u4F8B\u662F\u76F8\u540C\u7684\uFF1A</span>
<span class="token variable">@var<span class="token punctuation">:</span></span> red<span class="token punctuation">;</span>

<span class="token selector">#page</span> <span class="token punctuation">{</span>
    <span class="token selector">#header</span> <span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">@var</span><span class="token punctuation">;</span> <span class="token comment">// white</span>
    <span class="token punctuation">}</span>
    <span class="token variable">@var<span class="token punctuation">:</span></span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6CE8\u91CA" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u91CA" aria-hidden="true">#</a> \u6CE8\u91CA</h2><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token comment">/* \u4E00\u4E2A\u5757\u6CE8\u91CA
 * style comment! */</span>
<span class="token variable">@var<span class="token punctuation">:</span></span> red<span class="token punctuation">;</span>

<span class="token comment">// \u8FD9\u4E00\u884C\u88AB\u6CE8\u91CA\u6389\u4E86\uFF01</span>
<span class="token variable">@var<span class="token punctuation">:</span></span> white<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5BFC\u5165" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u5165" aria-hidden="true">#</a> \u5BFC\u5165</h2><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token variable">@import</span> <span class="token string">&quot;library&quot;</span><span class="token punctuation">;</span> <span class="token comment">// library.less</span>
<span class="token variable">@import</span> <span class="token string">&quot;typo.css&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function b(h,g){const a=i("ExternalLinkIcon");return c(),l("div",null,[s("h1",u,[r,n(),s("a",d,[n("less"),e(a)])]),v,s("p",null,[n("Less \u5185\u7F6E\u4E86\u591A\u79CD\u51FD\u6570\u7528\u4E8E\u8F6C\u6362\u989C\u8272\u3001\u5904\u7406\u5B57\u7B26\u4E32\u3001\u7B97\u672F\u8FD0\u7B97\u7B49\u3002\u8FD9\u4E9B\u51FD\u6570\u5728"),s("a",k,[n("Less \u51FD\u6570\u624B\u518C"),e(a)]),n("\u4E2D\u6709\u8BE6\u7EC6\u4ECB\u7ECD\u3002")]),m])}const y=t(o,[["render",b],["__file","base.html.vue"]]);export{y as default};
