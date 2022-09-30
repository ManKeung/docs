import{_ as t,r as p,o as e,c as o,b as n,e as c,d as s,a as i}from"./app.ac481352.js";const l={},u=n("h1",{id:"\u6700\u5E38\u7528\u7684-javascript-\u5B9E\u7528\u7A0B\u5E8F\u51FD\u6570",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6700\u5E38\u7528\u7684-javascript-\u5B9E\u7528\u7A0B\u5E8F\u51FD\u6570","aria-hidden":"true"},"#"),s(" \u6700\u5E38\u7528\u7684 JavaScript \u5B9E\u7528\u7A0B\u5E8F\u51FD\u6570")],-1),r=n("h2",{id:"\u5C06\u6570\u5B57\u8F6C\u6362\u4E3A\u8D27\u5E01",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5C06\u6570\u5B57\u8F6C\u6362\u4E3A\u8D27\u5E01","aria-hidden":"true"},"#"),s(" \u5C06\u6570\u5B57\u8F6C\u6362\u4E3A\u8D27\u5E01")],-1),k=n("p",null,"\u5728 JavaScript \u4E2D\u5904\u7406\u8D27\u5E01\u65F6\uFF0C\u4E8B\u60C5\u4F1A\u53D8\u5F97\u590D\u6742\u3002\u7279\u522B\u662F\u5F53\u4F60\u9700\u8981\u5904\u7406\u663E\u793A\u4E0D\u540C\u7C7B\u578B\u7684\u8D27\u5E01\u65F6\u3002",-1),d=s("JavaScript \u63D0\u4F9B\u4E86 "),v={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat",target:"_blank",rel:"noopener noreferrer"},m=s("Intl.NumberFormat"),b=s(" \u5BF9\u8C61\uFF0C\u5B83\u5141\u8BB8\u4F60\u4EE5\u5BF9\u8BED\u8A00\u654F\u611F\u7684\u65B9\u5F0F\u683C\u5F0F\u5316\u6570\u5B57\u3002\u5B83\u63D0\u4F9B\u7684\u9009\u9879\u4E4B\u4E00\u662F\u5C06\u6570\u5B57\u683C\u5F0F\u5316\u4E3A\u8D27\u5E01\u3002"),f=i(`<ul><li>\u8BE5\u51FD\u6570\u63A5\u53D7 3 \u4E2A\u53C2\u6570\uFF1A <ul><li>num - \u8981\u683C\u5F0F\u5316\u7684\u6570\u5B57\u3002</li><li>currency\u2014\u2014\u8981\u683C\u5F0F\u5316\u7684\u8D27\u5E01\u2014\u2014\u9ED8\u8BA4\u8BBE\u7F6E\u4E3A\u201C\u6B27\u5143\u201D\uFF0C\u6B27\u5143\u7684\u4EF7\u683C\u3002</li><li>locale \u2014 \u9ED8\u8BA4\u8BBE\u7F6E\u4E3A\u201Cnl-NL\u201D\uFF0C\u8377\u5170\u7684\u4EF7\u683C\u3002</li></ul></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">convertToCurrency</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> currency <span class="token operator">=</span> <span class="token string">&#39;EUR&#39;</span><span class="token punctuation">,</span> locale <span class="token operator">=</span> <span class="token string">&#39;nl-NL&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> formatter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Intl<span class="token punctuation">.</span>NumberFormat</span><span class="token punctuation">(</span>locale<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token string">&#39;currency&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">currency</span><span class="token operator">:</span> currency
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> formatter<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5C06-html-\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A-dom-\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u5C06-html-\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A-dom-\u5BF9\u8C61" aria-hidden="true">#</a> \u5C06 HTML \u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A DOM \u5BF9\u8C61</h2><p>\u5728\u5F88\u591A\u60C5\u51B5\u4E0B\uFF0C\u4F60\u53EF\u80FD\u4F1A\u6536\u5230 HTML \u5B57\u7B26\u4E32\u800C\u4E0D\u662F HTML \u5143\u7D20\u3002\u4F8B\u5982\uFF0C\u5F53\u63A5\u6536\u6765\u81EA API \u7684 JSON \u54CD\u5E94\u4E2D\u7684 HTML \u6216\u901A\u8FC7 Nunjucks \u4E4B\u7C7B\u7684\u6A21\u677F\u89E3\u6790\u5668\u5448\u73B0\u6A21\u677F\u65F6\u3002</p><p>\u4F60\u53EF\u4EE5\u901A\u8FC7 innerHTML \u5C5E\u6027\u5C06\u6B64 HTML \u5B57\u7B26\u4E32\u76F4\u63A5\u6CE8\u5165\u5230 dom \u4E2D\uFF0C\u4F46\u6709\u65F6\u4F60\u5E0C\u671B\u5C06\u6B64\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A HTML \u5BF9\u8C61\u4EE5\u8FDB\u884C\u989D\u5916\u7684\u8F6C\u6362\u3001\u9A8C\u8BC1\u6216\u66F4\u5177\u4F53\u7684 DOM \u6CE8\u5165\u3002</p><ul><li>\u8BE5\u51FD\u6570\u63A5\u53D7 2 \u4E2A\u53C2\u6570\uFF1A <ul><li>content \u2014 \u8981\u8F6C\u6362\u4E3A\u5BF9\u8C61\u7684 HTML \u5B57\u7B26\u4E32\u3002</li><li>selector\u2014\u2014\u4F60\u60F3\u8981\u63A5\u6536\u7684\u9009\u62E9\u5668\u2014\u2014DOMParser \u5BF9\u8C61\u5C06\u521B\u5EFA\u4E00\u4E2A\u5B8C\u6574\u7684 HTMLObject\uFF0C\u5305\u62EC\u4E00\u4E2A <code>&lt;html&gt;</code> \u548C <code>&lt;body&gt;</code> \u6807\u8BB0\u3002\u5982\u679C\u4F60\u53EA\u60F3\u8981\u67D0\u4E2A\u5143\u7D20\uFF0C\u4F60\u53EF\u4EE5\u4F20\u5165\u9009\u62E9\u5668\uFF0C\u4F8B\u5982\u201Csection\u201D\uFF0C\u4F60\u5C06\u6536\u5230\u8BE5\u5143\u7D20\u3002</li></ul></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">parseStringAsHtml</span><span class="token punctuation">(</span>
    <span class="token parameter">content<span class="token punctuation">,</span>
    selector</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> domParser <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DOMParser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> parsed <span class="token operator">=</span> domParser<span class="token punctuation">.</span><span class="token function">parseFromString</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> <span class="token string">&#39;text/html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> parsed<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>selector<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53BB\u6296" tabindex="-1"><a class="header-anchor" href="#\u53BB\u6296" aria-hidden="true">#</a> \u53BB\u6296</h2><p>\u5728 JavaScript \u4E2D\uFF0Cdebounce \u51FD\u6570\u5C06\u786E\u4FDD\u4F60\u7684\u51FD\u6570\u53EA\u4F1A\u5728\u6BCF\u6B21\u7528\u6237\u8F93\u5165\u65F6\u89E6\u53D1\u4E00\u6B21\uFF0C\u6216\u8005\u5728\u7B49\u5F85\u53C2\u6570\u4E2D\u6307\u5B9A\u7684\u65F6\u95F4\u6BB5\u5185\u81F3\u5C11\u89E6\u53D1\u4E00\u6B21\u3002</p><p>\u4F8B\u5982\uFF0C\u5047\u8BBE\u6211\u4EEC\u60F3\u6839\u636E\u641C\u7D22\u67E5\u8BE2\u5411\u7528\u6237\u663E\u793A\u5EFA\u8BAE\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728\u7528\u6237\u8F93\u5165\u65F6\u663E\u793A\u5EFA\u8BAE\u5E76\u5728\u8F93\u5165\u6BCF\u4E2A\u5B57\u6BCD\u540E\u5237\u65B0\uFF0C\u4F46\u8FD9\u53EF\u80FD\u4F1A\u8BA9\u7528\u6237\u611F\u5230\u70E6\u607C\u3002\u901A\u5E38\u5728\u8F93\u5165\u4E00\u4E2A\u952E\u540E\u7B49\u5F85\u81F3\u5C11 300 \u6BEB\u79D2\u4EE5\u663E\u793A\u5EFA\u8BAE\u4EE5\u786E\u4FDD\u7528\u6237\u5B8C\u6210\u8F93\u5165\u3002</p><ul><li>\u8FD9\u4E2A\u51FD\u6570\u6709 3 \u4E2A\u53C2\u6570\uFF1A <ul><li>fn - \u8981\u6267\u884C\u7684\u51FD\u6570\u3002</li><li>wait \u2014 \u51FD\u6570\u6267\u884C\u524D\u7684\u7B49\u5F85\u65F6\u95F4\u3002</li><li>immediate \u2014 \u4E00\u4E2A\u5E03\u5C14\u503C\uFF0C\u6307\u793A\u7B2C\u4E00\u6B21\u8C03\u7528\u51FD\u6570\u65F6\u662F\u5426\u5E94\u7ACB\u5373\u8C03\u7528\u3002</li></ul></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> wait<span class="token punctuation">,</span> immediate</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> timeout<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">setDebounce</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token function-variable function">later</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            timeout <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>immediate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token keyword">const</span> callNow <span class="token operator">=</span> immediate <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>timeout<span class="token punctuation">;</span>
        <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span><span class="token punctuation">;</span>
        timeout <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>later<span class="token punctuation">,</span> wait <span class="token operator">||</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>callNow<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u65E5\u671F\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u65E5\u671F\u9A8C\u8BC1" aria-hidden="true">#</a> \u65E5\u671F\u9A8C\u8BC1</h2><p>\u6709\u65F6\uFF0C\u4F60\u4ECE\u4EE3\u7801\u3001\u7528\u6237\u8F93\u5165\u6216 API \u4E2D\u7684\u67D0\u5904\u6536\u5230\u65E5\u671F\u5B57\u7B26\u4E32\uFF0C\u4F60\u5C06\u5176\u8F6C\u6362\u4E3A\u65E5\u671F\u5BF9\u8C61\u5E76\u5C1D\u8BD5\u7F16\u8F91\u6216\u663E\u793A\u65E5\u671F\u5E76\u6536\u5230\u65E5\u671F\u65E0\u6548\u7684\u9519\u8BEF\u3002</p><p>\u4F7F\u7528\u8FD9\u4E2A\u7B80\u5355\u7684\u5B9E\u7528\u65B9\u6CD5\uFF0C\u4F60\u53EF\u4EE5\u9A8C\u8BC1\u65B0\u6784\u5EFA\u7684\u65E5\u671F\u5BF9\u8C61\u662F\u5426\u5B9E\u9645\u4E0A\u662F\u6709\u6548\u7684\u65E5\u671F\u5BF9\u8C61\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">isDateValid</span><span class="token punctuation">(</span><span class="token parameter">date</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">!</span>Number<span class="token punctuation">.</span><span class="token function">isNaN</span><span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5C06-formdata-\u8F6C\u6362\u4E3A-json" tabindex="-1"><a class="header-anchor" href="#\u5C06-formdata-\u8F6C\u6362\u4E3A-json" aria-hidden="true">#</a> \u5C06 FormData \u8F6C\u6362\u4E3A JSON</h2><p>\u521B\u5EFA FormData \u5BF9\u8C61\u65F6\uFF0C\u6709\u65F6\u5C06\u5176\u8F6C\u6362\u4E3A\u7C7B\u4F3C JSON \u7684\u5BF9\u8C61\u5F88\u6709\u7528\u3002\u4F8B\u5982\uFF0C\u5F53\u4F60\u5411\u5176\u53D1\u5E03\u6570\u636E\u7684 API \u53EA\u63A5\u53D7 JSON \u8BF7\u6C42\u65F6\uFF0C\u5B83\u4E0D\u63A5\u53D7\u4EFB\u4F55\u5185\u5BB9\u3002</p><p>\u5728\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C\u4E00\u4E2A FormData \u5BF9\u8C61\u53EF\u4EE5\u5F88\u5BB9\u6613\u5730\u6620\u5C04\u5230\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u4F46\u662F\u5728\u5904\u7406\u591A\u9009\u590D\u9009\u6846\u65F6\uFF0C\u4E8B\u60C5\u4F1A\u53D8\u5F97\u6DF7\u4E71\u3002\u7531\u4E8E\u6BCF\u4E2A\u590D\u9009\u6846\u90FD\u5177\u6709\u76F8\u540C\u7684\u540D\u79F0\uFF0C\u56E0\u6B64\u5BF9\u8C61\u7684\u952E\u503C\u5BF9\u5C06\u76F8\u4E92\u8986\u76D6\u3002</p><p>\u8FD9\u4E2A\u7B80\u5355\u7684\u5B9E\u7528\u65B9\u6CD5\u4E3AFormData \u8F6C\u6362\u4E3A\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5E76\u786E\u4FDD\u5C06\u591A\u9009\u503C\u6620\u5C04\u5230\u4E00\u4E2A\u6570\u7EC4\uFF0C\u800C\u4E0D\u662F\u6BCF\u6B21\u90FD\u8986\u76D6\u8BE5\u503C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">convertFormdataToJsonObject</span><span class="token punctuation">(</span><span class="token parameter">formData</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span> <span class="token keyword">of</span> formData<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> oldValue <span class="token operator">=</span> data<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                data<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                data<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>oldValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            data<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">continue</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        data<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> data<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8861\u91CF\u4E00\u4E2A\u51FD\u6570\u7684\u6027\u80FD" tabindex="-1"><a class="header-anchor" href="#\u8861\u91CF\u4E00\u4E2A\u51FD\u6570\u7684\u6027\u80FD" aria-hidden="true">#</a> \u8861\u91CF\u4E00\u4E2A\u51FD\u6570\u7684\u6027\u80FD</h2><p>\u6709\u65F6\u4F60\u60F3\u77E5\u9053\u4F60\u7684\u5E94\u7528\u7A0B\u5E8F\u7684\u54EA\u4E00\u90E8\u5206\u6B63\u5728\u51CF\u6162\u4F60\u7684\u7F51\u7AD9\u901F\u5EA6\uFF0C\u8C03\u8BD5\u51FD\u6570\u7684\u6267\u884C\u65F6\u95F4\u5F88\u6709\u7528\u3002</p><p>\u5E78\u8FD0\u7684\u662F\uFF0C\u6D4F\u89C8\u5668\u63D0\u4F9B\u4E86\u672C\u5730\u652F\u6301\u6765\u5E2E\u52A9\u4F60\u8BA1\u7B97\u8FD9\u4E00\u70B9\u3002\u4F46\u4E0D\u662F\u5C06\u8FD9\u4E9B\u63A7\u5236\u53F0\u65B9\u6CD5\u6DFB\u52A0\u5230\u6BCF\u4E2A\u51FD\u6570\u4E2D\uFF0C\u800C\u662F\u6BCF\u6B21\u90FD\u60F3\u6D4B\u8BD5\uFF0C\u4F60\u53EF\u4EE5\u7B80\u5355\u5730\u8C03\u7528\u8FD9\u4E2A\u6709\u7528\u7684\u5B9E\u7528\u7A0B\u5E8F\u65B9\u6CD5\u3002</p><ul><li>\u6B64\u51FD\u6570\u9700\u8981 2 \u4E2A\u6216\u66F4\u591A\u53C2\u6570\uFF1A <ul><li>name \u2014 \u6807\u7B7E\u7684\u540D\u79F0\u663E\u793A\u5728\u63A7\u5236\u53F0\u4E2D\u3002</li><li>fn - \u60A8\u8981\u8861\u91CF\u5176\u6027\u80FD\u7684\u51FD\u6570\u3002</li><li>\u4EFB\u4F55\u9644\u52A0\u53C2\u6570\u2014\u2014\u4F60\u6B63\u5728\u8C03\u7528\u7684\u51FD\u6570\u7684\u53C2\u6570\u3002</li></ul></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">measurePerformance</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> fn<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> fn <span class="token operator">!==</span> <span class="token string">&quot;function&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Provide a valid function, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">typeof</span> fn<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> provided</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  console<span class="token punctuation">.</span><span class="token function">time</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
  <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">timeEnd</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4ECE\u6570\u7EC4\u4E2D\u5220\u9664\u91CD\u590D\u9879" tabindex="-1"><a class="header-anchor" href="#\u4ECE\u6570\u7EC4\u4E2D\u5220\u9664\u91CD\u590D\u9879" aria-hidden="true">#</a> \u4ECE\u6570\u7EC4\u4E2D\u5220\u9664\u91CD\u590D\u9879</h2><p>\u6211\u7ECF\u5E38\u53D1\u73B0\u81EA\u5DF1\u9700\u8981\u4ECE\u6570\u7EC4\u4E2D\u5220\u9664\u53EF\u80FD\u7684\u91CD\u590D\u9879\u3002\u6B64\u65B9\u6CD5\u53EA\u662F\u5728\u5C06\u6570\u7EC4\u8F6C\u6362\u4E3A Set \u5E76\u8FD4\u56DE\u540E\u8FD4\u56DE\u4E00\u4E2A\u65B0\u6570\u7EC4\u3002</p><p>\u96C6\u5408\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u5BF9\u8C61\uFF0C\u5B83\u5B58\u50A8\u53EA\u80FD\u51FA\u73B0\u4E00\u6B21\u7684\u503C\uFF0C\u4F7F\u5176\u6210\u4E3A\u5BF9\u6570\u7EC4\u8FDB\u884C\u91CD\u590D\u6570\u636E\u5220\u9664\u7684\u7B80\u5355\u65B9\u6CD5\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">removeDuplicates</span><span class="token punctuation">(</span><span class="token parameter">array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">array expected, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">typeof</span> array<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> provided</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30);function y(h,g){const a=p("ExternalLinkIcon");return e(),o("div",null,[u,r,k,n("p",null,[d,n("a",v,[m,c(a)]),b]),f])}var _=t(l,[["render",y],["__file","28.html.vue"]]);export{_ as default};
