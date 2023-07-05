import{_ as n,o as s,c as a,a as t}from"./app.c5a3bfa0.js";const e={},p=t(`<h1 id="\u521D\u8BC6\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u521D\u8BC6\u670D\u52A1" aria-hidden="true">#</a> \u521D\u8BC6\u670D\u52A1</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 1. \u5F15\u5165http\u6A21\u5757</span>
<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 2. \u7528http\u6A21\u5757\u521B\u5EFA\u670D\u52A1</span>

<span class="token comment">/*
request \u83B7\u53D6url\u4FE1\u606F
response \u6D4F\u89C8\u5668\u8FD4\u56DE\u54CD\u5E94\u4FE1\u606F
 */</span>

http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;***********&#39;</span><span class="token punctuation">)</span>
    <span class="token comment">// console.log(request)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;***********&#39;</span><span class="token punctuation">)</span>
    <span class="token comment">// \u53D1\u9001HTTP\u5934\u90E8</span>
    <span class="token comment">// HTTP\u72B6\u6001\u503C: 200:ok</span>
    <span class="token comment">// \u8BBE\u7F6EHTTP\u5934\u90E8\uFF0C\u72B6\u6001\u7801\u662F200\uFF0C\u6587\u4EF6\u7C7B\u578Bhtml\uFF0C\u5B57\u7B26\u96C6\u662Furl</span>
    response<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string-property property">&#39;Content-Type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;text/html;charset=&quot;utf-8&quot;&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    response<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;hello world&#39;</span><span class="token punctuation">)</span>
    response<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;I am is nodejs&#39;</span><span class="token punctuation">)</span>
    response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u7ED3\u675F\u54CD\u5E94</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>url\u6A21\u5757\u83B7\u53D6get\u53C2\u6570</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5F15\u5165\u6A21\u5757</span>
<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;url&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// \u7528http\u6A21\u5757\u521B\u5EFA\u670D\u52A1</span>

<span class="token comment">/*
request \u83B7\u53D6url\u4FE1\u606F
response \u6D4F\u89C8\u5668\u8FD4\u56DE\u54CD\u5E94\u4FE1\u606F
 */</span>

http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// http://localhost:8000/new?aid=123 \u62FF\u5230 aid</span>
    <span class="token comment">// http://localhost:8000/new?aid=123&amp;cid=3 \u62FF\u5230 aid cid</span>
    <span class="token comment">// console.log(request.url)</span>
    <span class="token comment">// const query = url.parse(request.url, true)</span>
    <span class="token comment">// console.log(query)</span>
    <span class="token comment">// \u53D1\u9001HTTP\u5934\u90E8</span>
    <span class="token comment">// HTTP\u72B6\u6001\u503C: 200:ok</span>
    <span class="token comment">// \u8BBE\u7F6EHTTP\u5934\u90E8\uFF0C\u72B6\u6001\u7801\u662F200\uFF0C\u6587\u4EF6\u7C7B\u578Bhtml\uFF0C\u5B57\u7B26\u96C6\u662Furl</span>
    response<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string-property property">&#39;Content-Type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;text/html;charset=&quot;utf-8&quot;&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>request<span class="token punctuation">.</span>url <span class="token operator">!=</span> <span class="token string">&#39;/favicon.ico&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> result <span class="token operator">=</span> url<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>url<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// \u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u5730\u5740    \u7B2C\u4E8C\u4E2A\u53C2\u6570\u662Ftrue\u7684\u8BDD\u8868\u793A\u628Aget\u4F20\u503C\u8F6C\u6362\u6210\u5BF9\u8C61</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;aid=&#39;</span> <span class="token operator">+</span> result<span class="token punctuation">.</span>query<span class="token punctuation">.</span>aid<span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;cid=&#39;</span> <span class="token operator">+</span> result<span class="token punctuation">.</span>query<span class="token punctuation">.</span>cid<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    response<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;hello world&#39;</span><span class="token punctuation">)</span>
    response<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;I am is nodejs&#39;</span><span class="token punctuation">)</span>
    response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u7ED3\u675F\u54CD\u5E94</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>supervisor\u6539\u4EE3\u7801\u81EA\u52A8\u91CD\u542Fweb\u670D\u52A1</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> supervisor <span class="token parameter variable">-D</span>
supervisor index.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u6A21\u5757\u5316</li></ul><ol><li>config.js</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u65B9\u5F0F\u4E00</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;this isconfig&#39;</span>
<span class="token keyword">export</span><span class="token punctuation">.</span>str <span class="token operator">=</span> str <span class="token comment">// \u5BFC\u51FA</span>

<span class="token comment">// \u5BFC\u5165</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>str<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./config&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// \u65B9\u5F0F\uFF12</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;this isconfig&#39;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> str <span class="token comment">// \u5BFC\u51FA\u9ED8\u8BA4\u6A21\u5757</span>

<span class="token comment">// \u5BFC\u5165</span>
<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./config&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u9ED8\u8BA4\u5728\u76EE\u5F55\u4E0B\u9762\u6CA1\u6709\uFF0C\u6CA1\u6709\u7684\u8BDDnodejs\u4F1A\u5728node_modules\u91CC\u9762\u627E\u8FD9\u4E2A\u6A21\u5757 \u627E package.json \u5165\u53E3\u6587\u4EF6 &quot;main&quot;: &quot;nav.js&quot;</p></blockquote>`,10),o=[p];function c(l,i){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","http.html.vue"]]);export{r as default};
