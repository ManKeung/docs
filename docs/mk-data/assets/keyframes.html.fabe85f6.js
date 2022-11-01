import{_ as l,r as i,o,c,b as n,d as a,e as s,a as t}from"./app.f6970029.js";const d={},r=t(`<h1 id="\u5E27\u52A8\u753B" tabindex="-1"><a class="header-anchor" href="#\u5E27\u52A8\u753B" aria-hidden="true">#</a> \u5E27\u52A8\u753B</h1><p>\u901A\u8FC7\u5B9A\u4E49\u4E00\u6BB5\u52A8\u753B\u4E2D\u7684\u5173\u952E\u70B9\u3001\u5173\u952E\u72B6\u6001\u6765\u521B\u5EFA\u52A8\u753B\u3002Keyframes\u76F8\u6BD4transition\u5BF9\u52A8\u753B\u8FC7\u7A0B\u548C\u7EC6\u8282\u6709\u66F4\u5F3A\u7684\u63A7\u5236\u3002</p><p>\u8FC7\u6E21\u52A8\u753B\u662F\u4E24\u4E2A\u72B6\u6001\u95F4\u7684\u53D8\u5316\uFF0C\u5E27\u52A8\u753B\u53EF\u4EE5\u5904\u7406\u52A8\u753B\u8FC7\u7A0B\u4E2D\u4E0D\u540C\u65F6\u95F4\u7684\u7EC6\u8282\u53D8\u5316\uFF0C\u4E0D\u8FC7\u5BF9\u8FC7\u6E21\u52A8\u753B\u7406\u89E3\u540E\u518D\u4E0D\u4E60\u5E27\u52A8\u753B\u4F1A\u975E\u5E38\u5BB9\u6613\uFF0C\u4E5F\u53EF\u4EE5\u628A\u5E27\u52A8\u753B\u7406\u89E3\u4E3A\u591A\u4E2A\u5E27\u4E4B\u95F4\u7684\u8FC7\u6E21\u52A8\u753B\u3002</p><h2 id="\u5173\u952E\u5E27" tabindex="-1"><a class="header-anchor" href="#\u5173\u952E\u5E27" aria-hidden="true">#</a> \u5173\u952E\u5E27</h2><ul><li>\u4F7F\u7528@keyframes \u89C4\u5219\u914D\u7F6E\u52A8\u753B\u4E2D\u7684\u5404\u4E2A\u5E27 <ul><li>from \u8868\u793A\u8D77\u59CB\u70B9</li><li>to\u8868\u793A\u7EC8\u70B9</li><li>\u53EF\u4EE5\u4F7F\u7528\u767E\u5206\u6570\u5982 20%\u52A8\u753B\u8FD0\u884C\u523020%\u65F6\u95F4\u65F6</li></ul></li></ul><h3 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> \u57FA\u672C\u4F7F\u7528</h3><p>\u4E0B\u9762\u4F7F\u7528 @keyframes \u5B9A\u4E49\u4E86\u52A8\u753B\u53EB hd \u5E76\u914D\u7F6E\u4E86\u4E24\u4E2A\u5E27\u52A8\u4F5Cfrom/to \uFF0C\u7136\u540E\u5728div\u5143\u7D20\u4E2D\u4F7F\u7528animation-name \u5F15\u7528\u4E86\u52A8\u753B\u5E76\u4F7F\u7528animation-duration\u58F0\u660E\u6267\u884C\u4E09\u79D2\u3002</p><blockquote><p>\u52A8\u753B\u547D\u540D\u4E0D\u8981\u4F7F\u7528CSS\u5173\u952E\u5B57\u5982 none</p></blockquote><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> solid 20px #ddd<span class="token punctuation">;</span>
    <span class="token property">animation-name</span><span class="token punctuation">:</span> hd<span class="token punctuation">;</span>
    <span class="token property">animation-duration</span><span class="token punctuation">:</span> 3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@keyframes</span> hd</span> <span class="token punctuation">{</span>
    <span class="token selector">from</span> <span class="token punctuation">{</span>
        <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">to</span> <span class="token punctuation">{</span>
        <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u65F6\u95F4\u70B9" tabindex="-1"><a class="header-anchor" href="#\u65F6\u95F4\u70B9" aria-hidden="true">#</a> \u65F6\u95F4\u70B9</h3><ul><li>\u5E27\u52A8\u753B\u9700\u8981\u5B9A\u4E49\u5728\u4E0D\u540C\u65F6\u95F4\u6267\u884C\u7684\u52A8\u4F5C\uFF0C\u5F00\u59CB\u4E0E\u7ED3\u675F\u53EF\u4EE5\u4F7F\u7528 form/to \u6216 0%/100% \u58F0\u660E\u3002 <ul><li>\u5FC5\u987B\u6DFB\u52A0\u767E\u5206\u53F7\uFF0C25%\u662F\u6B63\u786E\u5199\u6CD5</li><li>\u65F6\u95F4\u70B9\u6CA1\u6709\u987A\u5E8F\u8981\u6C42\uFF0C\u5373100%\u5199\u572825%\u524D\u4E5F\u53EF\u4EE5</li><li>\u672A\u8BBE\u7F6E0%\u4E0E100% \u65F6\u5C06\u4F7F\u7528\u5143\u7D20\u539F\u59CB\u72B6\u6001</li></ul></li></ul><h2 id="\u4F7F\u7528\u52A8\u753B" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u52A8\u753B" aria-hidden="true">#</a> \u4F7F\u7528\u52A8\u753B</h2><ul><li>\u4F7F\u7528animation-name \u89C4\u5219\u53EF\u4EE5\u5728\u5143\u7D20\u8EAB\u4E0A\u540C\u65F6\u4F7F\u7528\u591A\u4E2A\u52A8\u753B\u3002 <ul><li>\u4F7F\u7528\u591A\u4E2A\u52A8\u753B\u65F6\u7528\u9017\u53F7\u5206\u9694</li><li>\u591A\u4E2A\u52A8\u753B\u6709\u76F8\u540C\u5C5E\u6027\u65F6\uFF0C\u540E\u9762\u52A8\u753B\u7684\u5C5E\u6027\u4F18\u5148\u4F7F\u7528</li></ul></li></ul><h3 id="\u57FA\u672C\u4F7F\u7528-1" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528-1" aria-hidden="true">#</a> \u57FA\u672C\u4F7F\u7528</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #e67e22<span class="token punctuation">;</span>
    <span class="token property">animation-name</span><span class="token punctuation">:</span> hd<span class="token punctuation">,</span> scale<span class="token punctuation">;</span>
    <span class="token property">animation-duration</span><span class="token punctuation">:</span> 3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@keyframes</span> hd</span> <span class="token punctuation">{</span>
    <span class="token selector">25%</span> <span class="token punctuation">{</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>300%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">50%</span> <span class="token punctuation">{</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>300%<span class="token punctuation">,</span> 300%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">75%</span> <span class="token punctuation">{</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 300%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">25%,
    75%</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #9b59b6<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">50%,
    100%</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #e67e22<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@keyframes</span> scale</span> <span class="token punctuation">{</span>
    <span class="token selector">from</span> <span class="token punctuation">{</span>
        <span class="token property">border-radius</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">75%</span> <span class="token punctuation">{</span>
        <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">to</span> <span class="token punctuation">{</span>
        <span class="token property">border-radius</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u52A8\u753B\u65F6\u95F4" tabindex="-1"><a class="header-anchor" href="#\u52A8\u753B\u65F6\u95F4" aria-hidden="true">#</a> \u52A8\u753B\u65F6\u95F4</h2><ul><li>\u4F7F\u7528 animation-duration \u53EF\u4EE5\u58F0\u660E\u52A8\u753B\u64AD\u653E\u7684\u65F6\u95F4\uFF0C\u5373\u628A\u6240\u6709\u5E27\u6267\u884C\u4E00\u904D\u6240\u9700\u8981\u7684\u65F6\u95F4\u3002 <ul><li>\u53EF\u4EE5\u4F7F\u7528m\u79D2\uFF0Cms\u6BEB\u79D2\u65F6\u95F4\u5355\u4F4D</li><li>\u53EF\u4E3A\u4E0D\u540C\u52A8\u753B\u5355\u72EC\u8BBE\u7F6E\u6267\u884C\u65F6\u95F4</li><li>\u5982\u679C\u52A8\u753B\u6570\u91CF\u5927\u4E8E\u65F6\u95F4\u6570\u91CF\uFF0C\u5C06\u91CD\u65B0\u4ECE\u65F6\u95F4\u5217\u8868\u4E2D\u8BA1\u7B97</li></ul></li></ul><h2 id="\u5C5E\u6027\u91CD\u53E0" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027\u91CD\u53E0" aria-hidden="true">#</a> \u5C5E\u6027\u91CD\u53E0</h2><p>\u5982\u679C\u591A\u4E2A\u5E27\u52A8\u753B\u8BBE\u7F6E\u4E86\u76F8\u540C\u7684\u5C5E\u6027\uFF0C\u4E0D\u540C\u6D4F\u89C8\u5668\u7684\u5BF9\u5F85\u65B9\u5F0F\u7565\u6709\u4E0D\u540C\u3002\u6BD4\u5982 chrome/edge\u6700\u65B0\u7248\u672C\u5BF9\u52A8\u753B\u7684\u8BA1\u7B97\u5C31\u6709\u53D8\u5316\u3002</p><blockquote><p>\u6240\u4EE5\u5EFA\u8BAE\u5C3D\u91CF\u4E0D\u8981\u5728\u4E24\u4E2A\u52A8\u753B\u4E2D\u63A7\u5236\u76F8\u540C\u7684\u5C5E\u6027</p></blockquote><h2 id="\u52A8\u753B\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u52A8\u753B\u5C5E\u6027" aria-hidden="true">#</a> \u52A8\u753B\u5C5E\u6027</h2>`,21),u={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties",target:"_blank",rel:"noopener noreferrer"},k=t('<h2 id="\u91CD\u590D\u52A8\u753B" tabindex="-1"><a class="header-anchor" href="#\u91CD\u590D\u52A8\u753B" aria-hidden="true">#</a> \u91CD\u590D\u52A8\u753B</h2><ul><li>\u4F7F\u7528animation-iteration-count \u89C4\u5219\u8BBE\u7F6E\u52A8\u753B\u91CD\u590D\u6267\u884C\u6B21\u6570\uFF0C\u8BBE\u7F6E\u503C\u4E3A infinite \u8868\u793A\u65E0\u9650\u5FAA\u73AF\u6267\u884C\u3002 <ul><li>\u53EF\u540C\u65F6\u8BBE\u7F6E\u5143\u7D20\u7684\u591A\u4E2A\u52A8\u753B\u91CD\u590D\uFF0C\u4F7F\u7528\u9017\u53F7\u5206\u9694</li><li>\u5982\u679C\u52A8\u753B\u6570\u91CF\u5927\u4E8E\u91CD\u590D\u6570\u91CF\u5B9A\u4E49\uFF0C\u540E\u9762\u7684\u52A8\u753B\u5C06\u91CD\u65B0\u8BA1\u7B97\u91CD\u590D</li></ul></li></ul><h2 id="\u52A8\u753B\u65B9\u5411" tabindex="-1"><a class="header-anchor" href="#\u52A8\u753B\u65B9\u5411" aria-hidden="true">#</a> \u52A8\u753B\u65B9\u5411</h2><p>\u4F7F\u7528 animation-direction \u63A7\u5236\u52A8\u753B\u8FD0\u884C\u7684\u65B9\u5411\u3002</p><table><thead><tr><th>\u9009\u9879</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>normal</td><td>\u4ECE0%\u5230100%\u8FD0\u884C\u52A8\u753B</td></tr><tr><td>reverse</td><td>\u4ECE100%\u52300%\u8FD0\u884C\u52A8\u753B</td></tr><tr><td>alternate</td><td>\u5148\u4ECE0%\u5230100%\uFF0C\u7136\u540E\u4ECE100%\u52300%</td></tr><tr><td>alternate-reverse</td><td>\u5148\u4ECE100%\u52300%\uFF0C\u7136\u540E\u4ECE0%\u5230100%</td></tr></tbody></table><h2 id="\u5EF6\u8FDF\u52A8\u753B" tabindex="-1"><a class="header-anchor" href="#\u5EF6\u8FDF\u52A8\u753B" aria-hidden="true">#</a> \u5EF6\u8FDF\u52A8\u753B</h2><p>\u4F7F\u7528 animation-delay \u89C4\u5219\u5B9A\u4E49\u52A8\u753B\u7B49\u5F85\u591A\u957F\u65F6\u95F4\u540E\u6267\u884C\u3002</p><h2 id="\u52A8\u753B\u901F\u7387" tabindex="-1"><a class="header-anchor" href="#\u52A8\u753B\u901F\u7387" aria-hidden="true">#</a> \u52A8\u753B\u901F\u7387</h2><table><thead><tr><th>\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>linear</td><td>\u89C4\u5B9A\u4EE5\u76F8\u540C\u901F\u5EA6\u5F00\u59CB\u81F3\u7ED3\u675F\u7684\u8FC7\u6E21\u6548\u679C\uFF08\u7B49\u4E8E cubic-bezier(0,0,1,1)\uFF09\u3002</td></tr><tr><td>ease</td><td>\u5F00\u59CB\u6162\uFF0C\u7136\u540E\u5FEB\uFF0C\u6162\u4E0B\u6765\uFF0C\u7ED3\u675F\u65F6\u975E\u5E38\u6162\uFF08cubic-bezier(0.25,0.1,0.25,1)\uFF09</td></tr><tr><td>ease-in</td><td>\u5F00\u59CB\u6162\uFF0C\u7ED3\u675F\u5FEB\uFF08\u7B49\u4E8E cubic-bezier(0.42,0,1,1)\uFF09</td></tr><tr><td>ease-out</td><td>\u5F00\u59CB\u5FEB\uFF0C\u7ED3\u675F\u6162\uFF08\u7B49\u4E8E cubic-bezier(0,0,0.58,1)\uFF09</td></tr><tr><td>ease-in-out</td><td>\u4E2D\u95F4\u5FEB\uFF0C\u4E24\u8FB9\u6162\uFF08\u7B49\u4E8E cubic-bezier(0.42,0,0.58,1)\uFF09</td></tr><tr><td>cubic-bezier(n,n,n,n)</td><td>\u5728 cubic-bezier \u51FD\u6570\u4E2D\u5B9A\u4E49\u81EA\u5DF1\u7684\u503C</td></tr></tbody></table><blockquote><p>\u53EF\u4EE5\u5728\u5E27\u4E2D\u5355\u72EC\u5B9A\u4E49\uFF0C\u5C06\u5F71\u54CD\u5F53\u524D\u5E27\u7684\u901F\u7387</p></blockquote><ol><li>\u5F39\u8DF3\u5C0F\u7403</li></ol>',11),v=n("ol",{start:"2"},[n("li",null,"\u9B54\u672F\u5C0F\u7403")],-1),h=t('<h2 id="\u6B65\u8FDB\u901F\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u6B65\u8FDB\u901F\u5EA6" aria-hidden="true">#</a> \u6B65\u8FDB\u901F\u5EA6</h2><p>\u8FC7\u6E21\u4F7F\u7528\u9636\u68AF\u5316\u5448\u73B0\uFF0C\u6709\u70B9\u50CF\u73B0\u5B9E\u751F\u6D3B\u4E2D\u7684\u673A\u68B0\u821E\uFF0C\u4E0B\u9762\u662F\u628A\u8FC7\u6E21\u5206\u4E94\u6B65\u5B8C\u6210\u3002</p><table><thead><tr><th>\u9009\u9879</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>steps(n,start)</td><td>\u8BBE\u7F6En\u4E2A\u65F6\u95F4\u70B9\uFF0C\u7B2C\u4E00\u65F6\u95F4\u70B9\u53D8\u5316\u72B6\u6001</td></tr><tr><td>steps(n,end)</td><td>\u8BBE\u7F6En\u4E2A\u65F6\u95F4\u70B9\uFF0C\u7B2C\u4E00\u65F6\u95F4\u70B9\u521D\u59CB\u72B6\u6001</td></tr><tr><td>step-start</td><td>\u7B49\u4E8Esteps(1,start)\uFF0C\u53EF\u4EE5\u7406\u89E3\u4E3A\u4ECE\u4E0B\u4E00\u6B65\u5F00\u59CB</td></tr><tr><td>step-end</td><td>\u7B49\u4E8Esteps(1,end)\uFF0C\u53EF\u4EE5\u7406\u89E3\u4E3A\u4ECE\u5F53\u524D\u6B65\u5F00\u59CB</td></tr></tbody></table><blockquote><p>animation-timing-function: steps(4, end)</p></blockquote><h2 id="\u586B\u5145\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u586B\u5145\u6A21\u5F0F" aria-hidden="true">#</a> \u586B\u5145\u6A21\u5F0F</h2><p>animation-fill-mode \u7528\u4E8E\u5B9A\u4E49\u52A8\u753B\u64AD\u653E\u7ED3\u675F\u540E\u7684\u5904\u7406\u6A21\u5F0F\uFF0C\u662F\u56DE\u5230\u539F\u6765\u72B6\u6001\u8FD8\u662F\u505C\u6B62\u5728\u52A8\u753B\u7ED3\u675F\u72B6\u6001\u3002</p><table><thead><tr><th>\u9009\u9879</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>none</td><td>\u9700\u8981\u7B49\u5EF6\u8FDF\u7ED3\u675F\uFF0C\u8D77\u59CB\u5E27\u5C5E\u6027\u624D\u5E94\u7528</td></tr><tr><td>backwards</td><td>\u52A8\u753B\u6548\u679C\u5728\u8D77\u59CB\u5E27\uFF0C\u4E0D\u7B49\u5EF6\u8FDF\u7ED3\u675F</td></tr><tr><td>forwards</td><td>\u7ED3\u675F\u540E\u505C\u7559\u52A8\u753B\u7684\u6700\u540E\u4E00\u5E27</td></tr><tr><td>both</td><td>\u5305\u542Bbackwards\u4E0Eforwards\u89C4\u5219\uFF0C\u5373\u52A8\u753B\u6548\u679C\u5728\u8D77\u59CB\u5E27\uFF0C\u4E0D\u7B49\u5EF6\u8FDF\u7ED3\u675F\uFF0C\u5E76\u4E14\u5728\u7ED3\u675F\u540E\u505C\u6B62\u5728\u6700\u540E\u4E00\u5E27</td></tr></tbody></table><h2 id="\u7EC4\u5408\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u5408\u5B9A\u4E49" aria-hidden="true">#</a> \u7EC4\u5408\u5B9A\u4E49</h2><ul><li>\u548CCSS\u4E2D\u7684\u5176\u4ED6\u5C5E\u6027\u4E00\u6837\uFF0C\u53EF\u4EE5\u4F7F\u7528animation\u7EC4\u5408\u5B9A\u4E49\u5E27\u52A8\u753B\u3002animation \u5C5E\u6027\u662F\u4E00\u4E2A\u7B80\u5199\u5C5E\u6027\uFF0C\u7528\u4E8E\u8BBE\u7F6E\u516D\u4E2A\u52A8\u753B\u5C5E\u6027\uFF1A <ul><li>animation-name</li><li>animation-duration</li><li>animation-timing-function</li><li>animation-delay</li><li>animation-iteration-count</li><li>animation-direction</li></ul></li></ul><blockquote><p>\u5FC5\u987B\u5B58\u5728 animation-duration\u5C5E\u6027\uFF0C\u5426\u5219\u8FC7\u6E21\u65F6\u95F4\u4E3A0\u6CA1\u6709\u52A8\u753B\u6548\u679C\u3002</p></blockquote>',10);function b(m,f){const p=i("ExternalLinkIcon"),e=i("code-open");return o(),c("div",null,[r,n("p",null,[a("\u4E0D\u662F\u6240\u6709css\u5C5E\u6027\u90FD\u6709\u8FC7\u6E21\u6548\u679C\uFF0C"),n("a",u,[a("\u67E5\u770B\u652F\u6301\u52A8\u753B\u7684CSS\u5C5E\u6027"),s(p)]),a("\uFF0C\u4E00\u822C\u6765\u8BB2\u6709\u4E2D\u95F4\u503C\u7684\u5C5E\u6027\u90FD\u53EF\u4EE5\u8BBE\u7F6E\u52A8\u753B\u5982\u5BBD\u5EA6\u3001\u900F\u660E\u5EA6\u7B49\u3002")]),k,s(e,{id:"JjMPRYr"}),v,s(e,{id:"popzRMo"}),h])}const _=l(d,[["render",b],["__file","keyframes.html.vue"]]);export{_ as default};