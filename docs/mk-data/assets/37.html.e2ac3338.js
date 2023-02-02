import{_ as t,r as p,o,c,b as s,d as n,e,a as i}from"./app.3b7c88d8.js";const l={},r=s("h1",{id:"\u4E3A\u4EC0\u4E48-proxy-\u4E00\u5B9A\u8981\u914D\u5408-reflect-\u4F7F\u7528",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u4E3A\u4EC0\u4E48-proxy-\u4E00\u5B9A\u8981\u914D\u5408-reflect-\u4F7F\u7528","aria-hidden":"true"},"#"),n(" \u4E3A\u4EC0\u4E48 Proxy \u4E00\u5B9A\u8981\u914D\u5408 Reflect \u4F7F\u7528\uFF1F")],-1),u=s("h2",{id:"\u5F15\u8A00",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u5F15\u8A00","aria-hidden":"true"},"#"),n(" \u5F15\u8A00")],-1),d={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy",target:"_blank",rel:"noopener noreferrer"},k={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect",target:"_blank",rel:"noopener noreferrer"},v={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty",target:"_blank",rel:"noopener noreferrer"},m=i(`<p>\u5927\u591A\u6570\u5F00\u53D1\u8005\u90FD\u4E86\u89E3\u8FD9\u4E24\u4E2A Es6 \u4E2D\u7684\u65B0\u589E\u5185\u7F6E\u6A21\u5757\uFF0C\u53EF\u662F\u4F60\u4E5F\u8BB8\u5E76\u4E0D\u6E05\u695A\u4E3A\u4EC0\u4E48 Proxy \u4E00\u5B9A\u8981\u914D\u5408 Reflect \u4F7F\u7528\u3002</p><p>\u8FD9\u91CC\uFF0C\u6587\u7AE0\u901A\u8FC7\u51E0\u4E2A\u901A\u4FD7\u6613\u61C2\u7684\u4F8B\u5B50\u6765\u8BB2\u8FF0\u5B83\u4EEC\u4E4B\u95F4\u76F8\u8F85\u76F8\u6210\u7684\u5173\u7CFB\u3002</p><h2 id="\u524D\u7F6E\u77E5\u8BC6" tabindex="-1"><a class="header-anchor" href="#\u524D\u7F6E\u77E5\u8BC6" aria-hidden="true">#</a> \u524D\u7F6E\u77E5\u8BC6</h2><p>Proxy \u4EE3\u7406\uFF0C\u5B83\u5185\u7F6E\u4E86\u4E00\u7CFB\u5217\u201D\u9677\u9631\u201C\u7528\u4E8E\u521B\u5EFA\u4E00\u4E2A\u5BF9\u8C61\u7684\u4EE3\u7406\uFF0C\u4ECE\u800C\u5B9E\u73B0\u57FA\u672C\u64CD\u4F5C\u7684\u62E6\u622A\u548C\u81EA\u5B9A\u4E49\uFF08\u5982\u5C5E\u6027\u67E5\u627E\u3001\u8D4B\u503C\u3001\u679A\u4E3E\u3001\u51FD\u6570\u8C03\u7528\u7B49\uFF09\u3002</p><p>Reflect \u53CD\u5C04\uFF0C\u5B83\u63D0\u4F9B\u62E6\u622A JavaScript \u64CD\u4F5C\u7684\u65B9\u6CD5\u3002\u8FD9\u4E9B\u65B9\u6CD5\u4E0E Proxy \u7684\u65B9\u6CD5\u76F8\u540C\u3002</p><p>\u7B80\u5355\u6765\u8BF4\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 Proxy \u521B\u5EFA\u5BF9\u4E8E\u539F\u59CB\u5BF9\u8C61\u7684\u4EE3\u7406\u5BF9\u8C61\uFF0C\u4ECE\u800C\u5728\u4EE3\u7406\u5BF9\u8C61\u4E2D\u4F7F\u7528 Reflect \u8FBE\u5230\u5BF9\u4E8E JavaScript \u539F\u59CB\u64CD\u4F5C\u7684\u62E6\u622A\u3002</p><p>\u5982\u679C\u4F60\u8FD8\u4E0D\u4E86\u89E3 &amp; \uFF0C\u90A3\u4E48\u8D76\u5FEB\u53BB MDN \u4E0A\u53BB\u8865\u4E60\u4ED6\u4EEC\u7684\u77E5\u8BC6\u5427\u3002</p><p>\u6BD5\u7ADF\u5927\u540D\u9F0E\u9F0E\u7684 VueJs/Core \u4E2D\u6838\u5FC3\u7684\u54CD\u5E94\u5F0F\u6A21\u5757\u5C31\u662F\u57FA\u4E8E\u8FD9\u4E24\u4E2A Api \u6765\u5B9E\u73B0\u7684\u3002</p><h2 id="\u5355\u72EC\u4F7F\u7528-proxy" tabindex="-1"><a class="header-anchor" href="#\u5355\u72EC\u4F7F\u7528-proxy" aria-hidden="true">#</a> \u5355\u72EC\u4F7F\u7528 Proxy</h2><p>\u5F00\u59CB\u7684\u7B2C\u4E00\u4E2A\u4F8B\u5B50\uFF0C\u6211\u4EEC\u5148\u5355\u72EC\u4F7F\u7528 Proxy \u6765\u70F9\u996A\u4E00\u9053\u7B80\u5355\u7684\u5F00\u80C3\u5C0F\u83DC\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;mankeung&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token comment">// get\u9677\u9631\u4E2Dtarget\u8868\u793A\u539F\u5BF9\u8C61 key\u8868\u793A\u8BBF\u95EE\u7684\u5C5E\u6027\u540D</span>
    <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u52AB\u6301\u4F60\u7684\u6570\u636E\u8BBF\u95EE&quot;</span> <span class="token operator">+</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> target<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

proxy<span class="token punctuation">.</span>name<span class="token punctuation">;</span> <span class="token comment">// \u52AB\u6301\u4F60\u7684\u6570\u636E\u8BBF\u95EEname -&gt; mankeung</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u770B\u8D77\u6765\u5F88\u7B80\u5355\u5BF9\u5427\uFF0C\u6211\u4EEC\u901A\u8FC7 Proxy \u521B\u5EFA\u4E86\u4E00\u4E2A\u57FA\u4E8E obj \u5BF9\u8C61\u7684\u4EE3\u7406\uFF0C\u540C\u65F6\u5728 Proxy \u4E2D\u58F0\u660E\u4E86\u4E00\u4E2A get \u9677\u9631\u3002</p><p>\u5F53\u8BBF\u95EE\u6211\u4EEC\u8BBF\u95EE proxy.name \u65F6\u5B9E\u9645\u89E6\u53D1\u4E86\u5BF9\u5E94\u7684 get \u9677\u9631\uFF0C\u5B83\u4F1A\u6267\u884C get \u9677\u9631\u4E2D\u7684\u903B\u8F91\uFF0C\u540C\u65F6\u4F1A\u6267\u884C\u5BF9\u5E94\u9677\u9631\u4E2D\u7684\u903B\u8F91\uFF0C\u6700\u7EC8\u8FD4\u56DE\u5BF9\u5E94\u7684 <code>target[key]</code> \u4E5F\u5C31\u662F\u6240\u8C13\u7684 mankeung .</p><h2 id="proxy-\u4E2D\u7684-receiver" tabindex="-1"><a class="header-anchor" href="#proxy-\u4E2D\u7684-receiver" aria-hidden="true">#</a> Proxy \u4E2D\u7684 receiver</h2><p>\u4E0A\u8FB9\u7684 Demo \u4E2D\u4E00\u5207\u90FD\u770B\u8D77\u6765\u987A\u98CE\u987A\u6C34\u6CA1\u9519\u5427\uFF0C\u7EC6\u5FC3\u7684\u540C\u5B66\u5728\u9605\u8BFB Proxy \u7684 MDN \u6587\u6863\u4E0A\u53EF\u80FD\u4F1A\u53D1\u73B0\u5176\u5B9E Proxy \u4E2D get \u9677\u9631\u4E2D\u8FD8\u4F1A\u5B58\u5728\u4E00\u4E2A\u989D\u5916\u7684\u53C2\u6570 receiver \u3002</p><p>\u90A3\u4E48\u8FD9\u91CC\u7684 receiver \u7A76\u7ADF\u8868\u793A\u4EC0\u4E48\u610F\u601D\u5462\uFF1F\u5927\u591A\u6570\u540C\u5B66\u4F1A\u5C06\u5B83\u7406\u89E3\u6210\u4E3A\u4EE3\u7406\u5BF9\u8C61\uFF0C\u4F46\u8FD9\u662F\u4E0D\u5168\u9762\u7684\u3002</p><p>\u63A5\u4E0B\u6765\u540C\u6837\u8BA9\u6211\u4EEC\u4EE5\u4E00\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\u6765\u4F5C\u4E3A\u5207\u5165\u70B9\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;mankeung&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token comment">// get\u9677\u9631\u4E2Dtarget\u8868\u793A\u539F\u5BF9\u8C61 key\u8868\u793A\u8BBF\u95EE\u7684\u5C5E\u6027\u540D</span>
    <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>receiver <span class="token operator">===</span> proxy<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> target<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// log: true</span>
proxy<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u8FF0\u7684\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u5728 Proxy \u5B9E\u4F8B\u5BF9\u8C61\u7684 get \u9677\u9631\u4E0A\u63A5\u6536\u4E86 receiver \u8FD9\u4E2A\u53C2\u6570\u3002</p><p>\u540C\u65F6\uFF0C\u6211\u4EEC\u5728\u9677\u9631\u5185\u90E8\u6253\u5370 console.log(receiver === proxy); \u5B83\u4F1A\u6253\u5370\u51FA true \uFF0C\u8868\u793A\u8FD9\u91CC receiver \u7684\u786E\u662F\u548C\u4EE3\u7406\u5BF9\u8C61\u76F8\u7B49\u7684\u3002</p><p>\u6240\u4EE5 receiver \u7684\u786E\u662F\u53EF\u4EE5\u8868\u793A\u4EE3\u7406\u5BF9\u8C61\uFF0C\u4F46\u662F\u8FD9\u4EC5\u4EC5\u662F receiver \u4EE3\u8868\u7684\u4E00\u79CD\u60C5\u51B5\u800C\u5DF2\u3002</p><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u6765\u770B\u53E6\u5916\u4E00\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> parent <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">get</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;19mk&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>parent<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token comment">// get\u9677\u9631\u4E2Dtarget\u8868\u793A\u539F\u5BF9\u8C61 key\u8868\u793A\u8BBF\u95EE\u7684\u5C5E\u6027\u540D</span>
    <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>receiver <span class="token operator">===</span> proxy<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> target<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;mankeung&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u8BBE\u7F6Eobj\u7EE7\u627F\u4E0Eparent\u7684\u4EE3\u7406\u5BF9\u8C61proxy</span>
Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> proxy<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// log: false</span>
obj<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\uFF0C\u4E0A\u8FF0\u7684\u4EE3\u7801\u540C\u6837\u6211\u5728 proxy \u5BF9\u8C61\u7684 get \u9677\u9631\u4E0A\u6253\u5370\u4E86 console.log(receiver === proxy); \u7ED3\u679C\u5374\u662F false \u3002</p><p>\u90A3\u4E48\u4F60\u53EF\u4EE5\u7A0D\u5FAE\u601D\u8003\u4E0B\u8FD9\u91CC\u7684 receiver \u7A76\u7ADF\u662F\u4EC0\u4E48\u5462\uFF1F\u5176\u5B9E\u8FD9\u4E5F\u662F proxy \u4E2D get \u9677\u9631\u7B2C\u4E09\u4E2A receiver \u5B58\u5728\u7684\u610F\u4E49\u3002</p><p>\u5B83\u662F\u4E3A\u4E86\u4F20\u9012\u6B63\u786E\u7684\u8C03\u7528\u8005\u6307\u5411\uFF0C\u4F60\u53EF\u4EE5\u770B\u770B\u4E0B\u65B9\u7684\u4EE3\u7801\uFF1A</p><div class="language-diff ext-diff line-numbers-mode"><pre class="language-diff"><code>const proxy = new Proxy(parent, {
<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   // get\u9677\u9631\u4E2Dtarget\u8868\u793A\u539F\u5BF9\u8C61 key\u8868\u793A\u8BBF\u95EE\u7684\u5C5E\u6027\u540D
</span><span class="token prefix unchanged"> </span><span class="token line">   get(target, key, receiver) {
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">        console.log(receiver === proxy); // log:false
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">        console.log(receiver === obj); // log:true
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">       return target[key];
</span><span class="token prefix unchanged"> </span><span class="token line">   },
</span></span>});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u5B9E\u7B80\u5355\u6765\u8BF4\uFF0Cget \u9677\u9631\u4E2D\u7684 receiver \u5B58\u5728\u7684\u610F\u4E49\u5C31\u662F\u4E3A\u4E86\u6B63\u786E\u7684\u5728\u9677\u9631\u4E2D\u4F20\u9012\u4E0A\u4E0B\u6587\u3002</p><p>\u6D89\u53CA\u5230\u5C5E\u6027\u8BBF\u95EE\u65F6\uFF0C\u4E0D\u8981\u5FD8\u8BB0 get \u9677\u9631\u8FD8\u4F1A\u89E6\u53D1\u5BF9\u5E94\u7684\u5C5E\u6027\u8BBF\u95EE\u5668\uFF0C\u4E5F\u5C31\u662F\u6240\u8C13\u7684 get \u8BBF\u95EE\u5668\u65B9\u6CD5\u3002</p><p>\u6211\u4EEC\u53EF\u4EE5\u6E05\u695A\u7684\u770B\u5230\u4E0A\u8FF0\u7684 receiver \u4EE3\u8868\u7684\u662F\u7EE7\u627F\u4E0E Proxy \u7684\u5BF9\u8C61\uFF0C\u4E5F\u5C31\u662F obj\u3002</p><p><strong>\u770B\u5230\u8FD9\u91CC\uFF0C\u6211\u4EEC\u660E\u767D\u4E86 Proxy \u4E2D get \u9677\u9631\u7684 receiver \u4E0D\u4EC5\u4EC5\u4EE3\u8868\u7684\u662F Proxy \u4EE3\u7406\u5BF9\u8C61\u672C\u8EAB\uFF0C\u540C\u65F6\u4E5F\u8BB8\u4ED6\u4F1A\u4EE3\u8868\u7EE7\u627F Proxy \u7684\u90A3\u4E2A\u5BF9\u8C61\u3002</strong></p><p>\u5176\u5B9E\u672C\u8D28\u4E0A\u6765\u8BF4\u5B83\u8FD8\u662F\u4E3A\u4E86\u786E\u4FDD\u9677\u9631\u51FD\u6570\u4E2D\u8C03\u7528\u8005\u7684\u6B63\u786E\u7684\u4E0A\u4E0B\u6587\u8BBF\u95EE\uFF0C\u6BD4\u5982\u8FD9\u91CC\u7684 receiver \u6307\u5411\u7684\u662F obj \u3002</p><blockquote><p>\u5F53\u7136\uFF0C\u4F60\u4E0D\u8981\u5C06 revceiver \u548C get \u9677\u9631\u4E2D\u7684 this \u5F04\u6DF7\u4E86\uFF0C\u9677\u9631\u4E2D\u7684 this \u5173\u952E\u5B57\u8868\u793A\u7684\u662F\u4EE3\u7406\u7684 handler \u5BF9\u8C61\u3002</p></blockquote><p>\u6BD4\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> parent <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">get</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;19mk&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> handler <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">===</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// log: true</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>receiver <span class="token operator">===</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// log: true</span>
        <span class="token keyword">return</span> target<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>parent<span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;mankeung&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u8BBE\u7F6Eobj\u7EE7\u627F\u4E0Eparent\u7684\u4EE3\u7406\u5BF9\u8C61proxy</span>
Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> proxy<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// log: false</span>
obj<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reflect-\u4E2D\u7684-receiver" tabindex="-1"><a class="header-anchor" href="#reflect-\u4E2D\u7684-receiver" aria-hidden="true">#</a> Reflect \u4E2D\u7684 receiver</h2><p>\u5728\u6E05\u695A\u4E86 Proxy \u4E2D get \u9677\u9631\u7684 receiver \u540E\uFF0C\u8D81\u70ED\u6253\u94C1\u6211\u4EEC\u6765\u804A\u804A Reflect \u53CD\u5C04 API \u4E2D get \u9677\u9631\u7684 receiver\u3002</p><p>\u6211\u4EEC\u77E5\u9053\u5728 Proxy \u4E2D\uFF08\u4EE5\u4E0B\u6211\u4EEC\u90FD\u4EE5 get \u9677\u9631\u4E3A\u4F8B\uFF09\u7B2C\u4E09\u4E2A\u53C2\u6570 receiver \u4EE3\u8868\u7684\u662F\u4EE3\u7406\u5BF9\u8C61\u672C\u8EAB\u6216\u8005\u7EE7\u627F\u4E0E\u4EE3\u7406\u5BF9\u8C61\u7684\u5BF9\u8C61\uFF0C\u5B83\u8868\u793A\u89E6\u53D1\u9677\u9631\u65F6\u6B63\u786E\u7684\u4E0A\u4E0B\u6587\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> parent <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;19mk&quot;</span><span class="token punctuation">,</span>
    <span class="token keyword">get</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> handler <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u8FD9\u91CC\u76F8\u5F53\u4E8E return target[key]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>parent<span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;mankeung&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u8BBE\u7F6Eobj\u7EE7\u627F\u4E0Eparent\u7684\u4EE3\u7406\u5BF9\u8C61proxy</span>
Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> proxy<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// log: false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u6211\u4EEC\u7A0D\u5FAE\u5206\u6790\u4E0B\u4E0A\u8FB9\u7684\u4EE3\u7801\uFF1A <ul><li>\u5F53\u6211\u4EEC\u8C03\u7528 obj.value \u65F6\uFF0C\u7531\u4E8E obj \u672C\u8EAB\u4E0D\u5B58\u5728 value \u5C5E\u6027\u3002</li><li>\u5B83\u7EE7\u627F\u7684 proxy \u5BF9\u8C61\u4E2D\u5B58\u5728 value \u7684\u5C5E\u6027\u8BBF\u95EE\u64CD\u4F5C\u7B26\uFF0C\u6240\u4EE5\u4F1A\u53D1\u751F\u5C4F\u853D\u6548\u679C\u3002</li><li>\u6B64\u65F6\u4F1A\u89E6\u53D1 proxy \u4E0A\u7684 get value() \u5C5E\u6027\u8BBF\u95EE\u64CD\u4F5C\u3002</li><li>\u540C\u65F6\u7531\u4E8E\u8BBF\u95EE\u4E86 proxy \u4E0A\u7684 value \u5C5E\u6027\u8BBF\u95EE\u5668\uFF0C\u6240\u4EE5\u6B64\u65F6\u4F1A\u89E6\u53D1 get \u9677\u9631\u3002</li><li>\u8FDB\u5165\u9677\u9631\u65F6\uFF0Ctarget \u4E3A\u6E90\u5BF9\u8C61\u4E5F\u5C31\u662F parent \uFF0Ckey \u4E3A value \u3002</li><li>\u9677\u9631\u4E2D\u8FD4\u56DE Reflect.get(target,key) \u76F8\u5F53\u4E8E <code>target[key]</code>\u3002</li><li>\u6B64\u65F6\uFF0C\u4E0D\u77E5\u4E0D\u89C9\u4E2D this \u6307\u5411\u5728 get \u9677\u9631\u4E2D\u88AB\u5077\u5077\u4FEE\u6539\u6389\u4E86\uFF01\uFF01</li><li>\u539F\u672C\u8C03\u7528\u65B9\u7684 obj \u5728\u9677\u9631\u4E2D\u88AB\u4FEE\u6539\u6210\u4E3A\u4E86\u5BF9\u5E94\u7684 target \u4E5F\u5C31\u662F parent \u3002</li><li>\u81EA\u7136\u800C\u7136\u6253\u5370\u51FA\u4E86\u5BF9\u5E94\u7684 <code>parent[value]</code> \u4E5F\u5C31\u662F 19mk \u3002</li></ul></li></ul><p>\u8FD9\u663E\u7136\u4E0D\u662F\u6211\u4EEC\u671F\u671B\u7684\u7ED3\u679C\uFF0C\u5F53\u6211\u8BBF\u95EE obj.value \u65F6\uFF0C\u6211\u5E0C\u671B\u5E94\u8BE5\u6B63\u786E\u8F93\u51FA\u5BF9\u5E94\u7684\u81EA\u8EAB\u4E0A\u7684 name \u5C5E\u6027\u4E5F\u5C31\u662F\u6240\u8C13\u7684 obj.value =&gt; mankeung \u3002</p><p>\u90A3\u4E48\uFF0CRelfect \u4E2D get \u9677\u9631\u7684 receiver \u5C31\u5927\u663E\u795E\u901A\u4E86\u3002</p><div class="language-diff ext-diff line-numbers-mode"><pre class="language-diff"><code>const parent = {
<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> name: &#39;19mk&#39;,
</span><span class="token prefix unchanged"> </span><span class="token line"> get value() {
</span><span class="token prefix unchanged"> </span><span class="token line">   return this.name;
</span><span class="token prefix unchanged"> </span><span class="token line"> },
</span></span>};

const handler = {
<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> get(target, key, receiver) {
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">   return Reflect.get(target, key);
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">   return Reflect.get(target, key, receiver);
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> },
</span></span>};

const proxy = new Proxy(parent, handler);

const obj = {
<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> name: &#39;mankeung&#39;,
</span></span>};

// \u8BBE\u7F6Eobj\u7EE7\u627F\u4E0Eparent\u7684\u4EE3\u7406\u5BF9\u8C61proxy
Object.setPrototypeOf(obj, proxy);

// log: mankeung
console.log(obj.value);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4E0A\u8FF0\u4EE3\u7801\u539F\u7406\u5176\u5B9E\u975E\u5E38\u7B80\u5355\uFF1A <ul><li>\u9996\u5148\uFF0C\u4E4B\u524D\u6211\u4EEC\u63D0\u5230\u8FC7\u5728 Proxy \u4E2D get \u9677\u9631\u7684 receiver \u4E0D\u4EC5\u4EC5\u4F1A\u8868\u793A\u4EE3\u7406\u5BF9\u8C61\u672C\u8EAB\u540C\u65F6\u4E5F\u8FD8\u6709\u53EF\u80FD\u8868\u793A\u7EE7\u627F\u4E8E\u4EE3\u7406\u5BF9\u8C61\u7684\u5BF9\u8C61\uFF0C\u5177\u4F53\u9700\u8981\u533A\u522B\u4E8E\u8C03\u7528\u65B9\u3002\u8FD9\u91CC\u663E\u7136\u5B83\u662F\u6307\u5411\u7EE7\u627F\u4E0E\u4EE3\u7406\u5BF9\u8C61\u7684 obj \u3002</li><li>\u5176\u6B21\uFF0C\u6211\u4EEC\u5728 Reflect \u4E2D get \u9677\u9631\u4E2D\u7B2C\u4E09\u4E2A\u53C2\u6570\u4F20\u9012\u4E86 Proxy \u4E2D\u7684 receiver \u4E5F\u5C31\u662F obj \u4F5C\u4E3A\u5F62\u53C2\uFF0C\u5B83\u4F1A\u4FEE\u6539\u8C03\u7528\u65F6\u7684 this \u6307\u5411\u3002</li></ul></li></ul><blockquote><p>\u4F60\u53EF\u4EE5\u7B80\u5355\u7684\u5C06 Reflect.get(target, key, receiver) \u7406\u89E3\u6210\u4E3A <code>target[key].call(receiver)</code>\uFF0C\u4E0D\u8FC7\u8FD9\u662F\u4E00\u6BB5\u4F2A\u4EE3\u7801\uFF0C\u4F46\u662F\u8FD9\u6837\u4F60\u53EF\u80FD\u66F4\u597D\u7406\u89E3\u3002</p></blockquote><p>\u76F8\u4FE1\u770B\u5230\u8FD9\u91CC\u4F60\u5DF2\u7ECF\u660E\u767D Relfect \u4E2D\u7684 receiver \u4EE3\u8868\u7684\u542B\u4E49\u662F\u4EC0\u4E48\u4E86\uFF0C\u6CA1\u9519\u5B83\u6B63\u662F\u53EF\u4EE5\u4FEE\u6539\u5C5E\u6027\u8BBF\u95EE\u4E2D\u7684 this \u6307\u5411\u4E3A\u4F20\u5165\u7684 receiver \u5BF9\u8C61\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u76F8\u4FE1\u770B\u5230\u8FD9\u91CC\u5927\u5BB6\u90FD\u5DF2\u7ECF\u660E\u767D\u4E86\uFF0C\u4E3A\u4EC0\u4E48Proxy\u4E00\u5B9A\u8981\u914D\u5408Reflect\u4F7F\u7528\u3002\u6070\u6070\u662F\u4E3A\u4EC0\u4E48\u89E6\u53D1\u4EE3\u7406\u5BF9\u8C61\u7684\u52AB\u6301\u65F6\uFF0C\u8981\u4FDD\u8BC1\u6B63\u786E\u7684 this \u4E0A\u4E0B\u6587\u6307\u5411\u3002</p><ul><li>\u6211\u4EEC\u518D\u6765\u7A0D\u7A0D\u56DE\u5FC6\u4E00\u4E0B\uFF0C\u9488\u5BF9\u4E8E get \u9677\u9631\uFF08\u5F53\u7136 set \u5176\u4ED6\u4E4B\u7C7B\u6D89\u53CA\u5230 receiver \u7684\u9677\u9631\u540C\u7406\uFF09\uFF1A <ul><li>Proxy \u4E2D\u63A5\u53D7\u7684 Receiver \u5F62\u53C2\u8868\u793A\u4EE3\u7406\u5BF9\u8C61\u672C\u8EAB\u6216\u8005\u7EE7\u627F\u4E0E\u4EE3\u7406\u5BF9\u8C61\u7684\u5BF9\u8C61\u3002</li><li>Reflect \u4E2D\u4F20\u9012\u7684 Receiver \u5B9E\u53C2\u8868\u793A\u4FEE\u6539\u6267\u884C\u539F\u59CB\u64CD\u4F5C\u65F6\u7684 this \u6307\u5411\u3002</li></ul></li></ul><h2 id="\u7ED3\u5C3E" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u5C3E" aria-hidden="true">#</a> \u7ED3\u5C3E</h2><p>\u8FD9\u91CC\u5C31\u5230\u4E86\u6587\u7AE0\u7684\u7ED3\u5C3E\u4E86\uFF0C\u81F3\u4E8E\u4E3A\u4EC0\u4E48\u4F1A\u7A81\u7136\u63D0\u5230 Proxy &amp; Reflect \u7684\u8BDD\u9898\u3002</p><p>\u5176\u5B9E\u662F\u7B14\u8005\u6700\u8FD1\u5728\u9605\u8BFB Vue/corejs \u7684\u6E90\u4EE3\u7801\u5185\u5BB9\uFF0C\u521A\u597D\u5B83\u5185\u90E8\u5927\u91CF\u5E94\u7528\u4E8E Proxy &amp; Reflect \u6240\u4EE5\u5C31\u4EA7\u751F\u4E86\u8FD9\u7BC7\u6587\u7AE0\u3002</p><p>\u5173\u4E8E Proxy \u4E3A\u4EC0\u4E48\u4E00\u5B9A\u8981\u914D\u5408 Reflect \u4F7F\u7528\uFF0C\u5177\u4F53\u7ED3\u5408 VueJs \u4E2D\u54CD\u5E94\u5F0F\u6A21\u5757\u7684\u4F9D\u8D56\u6536\u96C6\u5176\u5B9E\u4F1A\u66F4\u597D\u7406\u89E3\u4E00\u4E9B\u3002\u4E0D\u8FC7\u8FD9\u91CC\u4E3A\u4E86\u7167\u987E\u4E0D\u592A\u719F\u6089 VueJs \u7684\u540C\u5B66\u6240\u4EE5\u5C31\u6CA1\u6709\u5C55\u5F00\u4E86\u3002</p>`,53);function b(g,y){const a=p("ExternalLinkIcon");return o(),c("div",null,[r,u,s("p",null,[n("EcmaScript 2015 \u4E2D\u5F15\u5165\u4E86 "),s("a",d,[n("Proxy \u4EE3\u7406"),e(a)]),n(" \u4E0E "),s("a",k,[n("Reflect \u53CD\u5C04"),e(a)]),n(" \u4E24\u4E2A\u65B0\u7684\u5185\u7F6E\u6A21\u5757\u3002")]),s("p",null,[n("\u6211\u4EEC\u53EF\u4EE5\u5229\u7528 Proxy \u548C Reflect \u6765\u5B9E\u73B0\u5BF9\u4E8E\u5BF9\u8C61\u7684\u4EE3\u7406\u52AB\u6301\u64CD\u4F5C\uFF0C\u7C7B\u4F3C\u4E8E Es 5 \u4E2D "),s("a",v,[n("Object.defineProperty()"),e(a)]),n("\u7684\u6548\u679C\uFF0C\u4E0D\u8FC7 Reflect & Proxy \u8FDC\u8FDC\u6BD4\u5B83\u5F3A\u5927\u3002")]),m])}const x=t(l,[["render",b],["__file","37.html.vue"]]);export{x as default};