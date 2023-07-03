import{_ as e,r as o,o as c,c as l,b as s,d as n,e as p,a as t}from"./app.36dd9d4a.js";const i={},u=t(`<h1 id="\u5173\u4E8E\u56FE\u7247\u52A0\u8F7D-\u4F60\u9700\u8981\u5B66\u4E60\u4E00\u4E0B" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E\u56FE\u7247\u52A0\u8F7D-\u4F60\u9700\u8981\u5B66\u4E60\u4E00\u4E0B" aria-hidden="true">#</a> \u5173\u4E8E\u56FE\u7247\u52A0\u8F7D\uFF0C\u4F60\u9700\u8981\u5B66\u4E60\u4E00\u4E0B</h1><p>\u6211\u7684\u8BBE\u8BA1\u60F3\u6CD5\u662F\uFF1A\u901A\u8FC7\u4E00\u4E2A\u52A0\u8F7D\u7C7B\uFF0C\u4F20\u5165 dom \u5143\u7D20\u3001 props \u548C emit\u3002\u5148\u521B\u5EFA\u51FA\u4E00\u4E2A\u865A\u62DF\u7684 image \u5143\u7D20\u8FDB\u884C\u5C1D\u8BD5\u52A0\u8F7D\uFF0C\u52A0\u8F7D\u6210\u529F\u83B7\u5931\u8D25\u90FD\u4F1A\u8FDB\u5165\u4E0B\u4E00\u6B65\u7684\u51FD\u6570\uFF0C\u505A\u51FA\u5BF9\u5E94\u4ECE\u5904\u7406\u903B\u8F91\u3002</p><h2 id="\u521D\u6B65\u8BBE\u8BA1" tabindex="-1"><a class="header-anchor" href="#\u521D\u6B65\u8BBE\u8BA1" aria-hidden="true">#</a> \u521D\u6B65\u8BBE\u8BA1</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Load</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> props<span class="token punctuation">,</span> emit</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>node <span class="token operator">=</span> node
    <span class="token keyword">this</span><span class="token punctuation">.</span>props <span class="token operator">=</span> props
    <span class="token keyword">this</span><span class="token punctuation">.</span>emit <span class="token operator">=</span> emit
  <span class="token punctuation">}</span>
  <span class="token comment">// \u52A0\u8F7D src</span>
  <span class="token function-variable function">loadCreateImg</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newImg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u65B0\u5EFA\u4E00\u4E2A\u865A\u62DF\u7684 img</span>

    newImg<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>src <span class="token comment">// \u5C06\u4F20\u5165\u7684 src \u8D4B\u503C\u7ED9\u865A\u62DF\u8282\u70B9</span>

    <span class="token comment">// src \u52A0\u8F7D\u5931\u8D25</span>
    newImg<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">evt</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u52A0\u8F7D\u5931\u8D25\u7684\u5904\u7406</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// src \u52A0\u8F7D\u6210\u529F</span>
    newImg<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;load&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">evt</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u52A0\u8F7D\u6210\u529F\u7684\u5904\u7406</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9996\u5148\u6211\u521B\u5EFA\u4E86\u4E00\u4E2A<code>Load</code>\u7684\u52A0\u8F7D\u7C7B\uFF0C\u9700\u8981\u4F20\u5165<code>node</code>\u53C2\u6570\u4F5C\u4E3A\u6700\u7EC8\u9700\u8981\u6E32\u67D3\u7684<code>dom</code>\u8282\u70B9\uFF0C<code>props</code>\u662F\u4F20\u5165\u7684\u7EC4\u4EF6\u5185\u90E8\u7684<code>props</code>\u53C2\u6570\uFF0C\u5185\u90E8\u5305\u542B\u56FE\u7247\u9700\u8981\u52A0\u8F7D\u7684<code>src</code>\u8DEF\u5F84\uFF0C<code>emit</code>\u5305\u62EC\u4E00\u4E9B\u56DE\u8C03\u53C2\u6570\u3002</p><p>\u7C7B\u7684\u5185\u90E8\u6709\u4E2A<code>loadCreateImg</code>\u7684\u65B9\u6CD5\uFF0C\u8C03\u7528\u53EF\u521B\u5EFA\u4E00\u4E2A\u865A\u62DF\u7684<code>Image</code>\u5143\u7D20\uFF0C\u76F4\u63A5\u5C06\u4F20\u5165\u7684<code>props.src</code>\u8D4B\u503C\u5E76\u52A0\u8F7D\u3002\u76D1\u542C\u4E0A\u9762\u7684<code>error</code>\u548C<code>load</code>\u4E8B\u4EF6\uFF0C\u5373\u53EF\u76D1\u542C\u5230\u56FE\u7247\u662F\u5426\u52A0\u8F7D\u6210\u529F\uFF0C\u4EE5\u4FBF\u505A\u51FA\u4E0D\u540C\u7684\u72B6\u6001\u3002</p><h2 id="\u6210\u529F\u548C\u5931\u8D25" tabindex="-1"><a class="header-anchor" href="#\u6210\u529F\u548C\u5931\u8D25" aria-hidden="true">#</a> \u6210\u529F\u548C\u5931\u8D25</h2><p>\u5BF9\u4E8E\u6210\u529F\u6216\u5931\u8D25\u7684\u5904\u7406\uFF0C\u6211\u65B0\u589E\u4E86<code>onerror</code>\u548C<code>onload</code>\u65B9\u6CD5\uFF0C\u6765\u5904\u7406\u52A0\u8F7D\u6210\u529F\u548C\u5931\u8D25\u4E4B\u540E\u7684\u4E0D\u540C\u5904\u7406\u72B6\u6001</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Load</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> props<span class="token punctuation">,</span> emit</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>node <span class="token operator">=</span> node
    <span class="token keyword">this</span><span class="token punctuation">.</span>props <span class="token operator">=</span> props
    <span class="token keyword">this</span><span class="token punctuation">.</span>emit <span class="token operator">=</span> emit
  <span class="token punctuation">}</span>
  <span class="token function-variable function">loadCreateImg</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newImg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    newImg<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>src

    newImg<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">evt</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onerror</span><span class="token punctuation">(</span>evt<span class="token punctuation">)</span> <span class="token comment">// \u65B0\u589E</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    newImg<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;load&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">evt</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onload</span><span class="token punctuation">(</span>evt<span class="token punctuation">)</span> <span class="token comment">// \u65B0\u589E</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u52A0\u8F7D\u6210\u529F</span>
  <span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">evt</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>node<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>src
  <span class="token punctuation">}</span>
  <span class="token comment">// \u52A0\u8F7D\u5931\u8D25</span>
  <span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">evt</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u2026\u2026</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u4E8E\u52A0\u8F7D\u6210\u529F\uFF0C\u5904\u7406\u65B9\u5F0F\u662F\uFF0C\u5C06\u4F20\u5165\u7684\u771F\u662F\u7684 dom \u8282\u70B9\u76F4\u63A5\u8D4B\u503C\u7ED9\u4F20\u5165\u7684 props.src \u5373\u53EF\u5B8C\u6210\u52A0\u8F7D\u3002</p><h2 id="\u52A0\u8F7D\u5931\u8D25" tabindex="-1"><a class="header-anchor" href="#\u52A0\u8F7D\u5931\u8D25" aria-hidden="true">#</a> \u52A0\u8F7D\u5931\u8D25</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Load</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> props<span class="token punctuation">,</span> emit</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>node <span class="token operator">=</span> node
    <span class="token keyword">this</span><span class="token punctuation">.</span>props <span class="token operator">=</span> props
    <span class="token keyword">this</span><span class="token punctuation">.</span>emit <span class="token operator">=</span> emit
  <span class="token punctuation">}</span>
  <span class="token function-variable function">loadCreateImg</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">errSrc<span class="token operator">?</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newImg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// \u5982\u679C errSrc \u5B58\u5728 \u5C31\u5C1D\u8BD5\u52A0\u8F7D errSrc</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>errSrc<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      newImg<span class="token punctuation">.</span>src <span class="token operator">=</span> errSrc
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      newImg<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>src
    <span class="token punctuation">}</span>

    newImg<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">evt</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onerror</span><span class="token punctuation">(</span>evt<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    newImg<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;load&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">evt</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onload</span><span class="token punctuation">(</span>evt<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">evt</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>node<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>src
  <span class="token punctuation">}</span>
  <span class="token comment">// \u52A0\u8F7D\u5931\u8D25</span>
  <span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">evt</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5982\u679C\u5B58\u5728 errSrc \u5219\u7EE7\u7EED\u5C1D\u8BD5\u52A0\u8F7D</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>errSrc<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5C06 errSrc \u4F20\u7ED9 loadCreateImg \u65B9\u6CD5</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">loadCreateImg</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>errSrc<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u5426\u5219\u8FD4\u56DE\u5931\u8D25\u56DE\u8C03</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> evt<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F46\u662F\u4E0A\u9762\u4EE3\u7801\u5B58\u5728\u4E24\u4E2A\u95EE\u9898\uFF1A</p><ul><li>\u9996\u5148\u6211\u4EEC\u53D1\u73B0\uFF0C\u5728 <code>onload</code> \u52A0\u8F7D\u6210\u529F\u7684\u65B9\u6CD5\u4E2D\uFF0C\u5C06\u771F\u5B9E <code>dom</code> \u59CB\u7EC8\u8D4B\u503C\u7684\u59CB\u7EC8 \u662F <code>src</code>\uFF1A</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">evt</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u59CB\u7EC8\u8D4B\u503C\u4E3A props.src</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>node<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>src
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F46\u662F<code>src</code>\u5E76\u4E0D\u662F\u59CB\u7EC8\u53EF\u4EE5\u52A0\u8F7D\u6210\u529F\u7684\uFF0C\u6240\u4EE5\u8FD8\u662F\u9700\u8981\u52A8\u6001\u7684\u53BB\u5C06\u771F\u6B63\u52A0\u8F7D\u6210\u529F\u7684<code>src</code>\u4F20\u7ED9<code>onload</code>\u65B9\u6CD5\uFF0C\u90A3\u4E48\u771F\u6B63\u52A0\u8F7D\u6210\u529F\u7684<code>src</code>\u4E5F\u5C31\u662F\u5728<code>load</code>\u65B9\u6CD5\u4E2D\u3002\u5E76\u4E14\u8FD8\u8981\u52A0\u5165\u6210\u529F\u7684<code>emit</code>\u3002</p><ul><li>\u5176\u6B21\uFF0C\u5728\u5904\u7406\u52A0\u8F7D\u5931\u8D25\u7684<code>onerror</code>\u65B9\u6CD5\u4E2D\uFF0C\u56E0\u4E3A\u5224\u65AD\u4E86\u5982\u679C\u5B58\u5728<code>errSrc</code>\u5C31\u7EE7\u7EED\u8C03\u7528 <code>loadCreateImg</code>\u52A0\u8F7D\u65B9\u6CD5\u91CD\u65B0\u52A0\u8F7D\u3002\u95EE\u9898\u662F\uFF0C\u5982\u679C\u4F20\u5165\u4E86<code>errSrc</code>\u90A3\u4E48<code>if (this.props.errSrc)</code>\u5176\u5B9E\u662F\u59CB\u7EC8\u4E3A\u771F\u7684\uFF0C\u8FD9\u4E5F\u5C31\u5BFC\u81F4\u4E86\u6B7B\u5FAA\u73AF\uFF0C\u4F1A\u91CD\u590D\u8C03\u7528\u52A0\u8F7D\u51FD\u6570\u3002</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">evt</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5224\u65AD\u59CB\u7EC8\u4E3A\u771F</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>errSrc<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">loadCreateImg</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>errSrc<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u5426\u5219\u8FD4\u56DE\u5931\u8D25\u56DE\u8C03</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> evt<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6240\u4EE5\u5C31\u9700\u8981\u7ED9\u5B83\u4E00\u4E2A\u53EF\u4EE5\u53D8\u4E3A\u5047\u7684\u65F6\u673A\uFF0C\u90A3\u4E48\u4FEE\u590D\u65B9\u6CD5\u4E3A\uFF1A\u5728\u4F20\u7ED9<code>loadCreateImg</code>\u65B9\u6CD5\u4E4B\u540E\uFF0C\u5C06<code>errSrc</code>\u6E05\u7A7A\uFF0C\u8FD9\u6837\u52A0\u8F7D\u4E00\u6B21\u4E4B\u540E\u5C31\u53EF\u4EE5\u5224\u65AD\u4E3A\u5047\u4E86\uFF0C\u6240\u4EE5\u5B8C\u6574\u4EE3\u7801\u4E3A\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Load</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> props<span class="token punctuation">,</span> emit</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>node <span class="token operator">=</span> node
    <span class="token keyword">this</span><span class="token punctuation">.</span>props <span class="token operator">=</span> props
    <span class="token keyword">this</span><span class="token punctuation">.</span>emit <span class="token operator">=</span> emit
  <span class="token punctuation">}</span>
  <span class="token function-variable function">loadCreateImg</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">errSrc<span class="token operator">?</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newImg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// \u5982\u679C errSrc \u5B58\u5728 \u5C31\u5C1D\u8BD5\u52A0\u8F7D errSrc</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>errSrc<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      newImg<span class="token punctuation">.</span>src <span class="token operator">=</span> errSrc
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      newImg<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>src
    <span class="token punctuation">}</span>

    newImg<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">evt</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onerror</span><span class="token punctuation">(</span>evt<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    newImg<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;load&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">evt</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onload</span><span class="token punctuation">(</span>evt<span class="token punctuation">,</span> newImg<span class="token punctuation">.</span>src<span class="token punctuation">)</span> <span class="token comment">// \u5C06\u52A0\u8F7D\u6210\u529F\u7684 src \u4F20\u7ED9 onload \u51FD\u6570</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u65B0\u589E src \u5C5E\u6027</span>
  <span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">evt<span class="token punctuation">,</span> <span class="token literal-property property">src</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>node<span class="token punctuation">.</span>src <span class="token operator">=</span> src <span class="token comment">// \u5C06\u771F\u5B9E dom \u7684 src \u8D4B\u503C\u7ED9\u4F20\u5165\u7684 src</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;load&#39;</span><span class="token punctuation">,</span> evt<span class="token punctuation">)</span> <span class="token comment">// \u65B0\u589E</span>
  <span class="token punctuation">}</span>
  <span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">evt</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>errSrc<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">loadCreateImg</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>errSrc<span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>errSrc <span class="token operator">=</span> <span class="token string">&#39;&#39;</span> <span class="token comment">// \u6E05\u7A7A errSrc \u907F\u514D\u91CD\u590D\u8C03\u7528\u6B7B\u5FAA\u73AF</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> evt<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u56DE\u8C03\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u56DE\u8C03\u51FD\u6570" aria-hidden="true">#</a> \u56DE\u8C03\u51FD\u6570</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Load</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> props<span class="token punctuation">,</span> emit<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>node <span class="token operator">=</span> node
    <span class="token keyword">this</span><span class="token punctuation">.</span>props <span class="token operator">=</span> props
    <span class="token keyword">this</span><span class="token punctuation">.</span>emit <span class="token operator">=</span> emit
    <span class="token keyword">this</span><span class="token punctuation">.</span>callback <span class="token operator">=</span> callback <span class="token comment">// \u65B0\u589E callback \u53C2\u6570</span>
  <span class="token punctuation">}</span>
  <span class="token function-variable function">loadCreateImg</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">errSrc<span class="token operator">?</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newImg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>errSrc<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      newImg<span class="token punctuation">.</span>src <span class="token operator">=</span> errSrc
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      newImg<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>src
    <span class="token punctuation">}</span>

    newImg<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">evt</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onerror</span><span class="token punctuation">(</span>evt<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    newImg<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;load&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">evt</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onload</span><span class="token punctuation">(</span>evt<span class="token punctuation">,</span> newImg<span class="token punctuation">.</span>src<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">evt<span class="token punctuation">,</span> <span class="token literal-property property">src</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>node<span class="token punctuation">.</span>src <span class="token operator">=</span> src
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;load&#39;</span><span class="token punctuation">,</span> evt<span class="token punctuation">)</span>

    <span class="token comment">// \u5982\u679C callback \u5B58\u5728\uFF0C\u5728\u52A0\u8F7D\u6210\u529F\u7684\u65F6\u5019\u8FD4\u56DE true</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>callback<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">callback</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">evt</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>errSrc<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">loadCreateImg</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>errSrc<span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>errSrc <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> evt<span class="token punctuation">)</span>
    <span class="token comment">// \u5982\u679C callback \u5B58\u5728\uFF0C\u5728\u52A0\u8F7D\u5931\u8D25\u7684\u65F6\u5019\u8FD4\u56DE false</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>callback<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">callback</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u61D2\u52A0\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u61D2\u52A0\u8F7D" aria-hidden="true">#</a> \u61D2\u52A0\u8F7D</h2>`,23),r={href:"https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver",target:"_blank",rel:"noopener noreferrer"},k={href:"https://developer.mozilla.org/zh-CN/",target:"_blank",rel:"noopener noreferrer"},d=t(`<p>\u5BF9\u4E8E\u61D2\u52A0\u8F7D\uFF0C\u56E0\u4E3A\u8FD9\u662F\u4E00\u4E2A\u53EF\u9009\u7684\u5C5E\u6027\uFF0C\u5E76\u4E0D\u662F\u6BCF\u6B21\u90FD\u9700\u8981\uFF0C\u6240\u4EE5\u6211\u5C06\u61D2\u52A0\u8F7D\u5355\u72EC\u62BD\u79BB\u51FA\u6765\u7684\u4E00\u4E2A Lazy \u7C7B\u8FDB\u884C\u5B9E\u73B0\uFF0C\u518D\u5C06<code>Lazy</code>\u7C7B\u7EE7\u627F\u5230<code>Load</code>\u7C7B\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Lazy</span> <span class="token keyword">extends</span> <span class="token class-name">Load</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">img<span class="token punctuation">,</span> props<span class="token punctuation">,</span> emit<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// super \u5173\u952E\u5B57\u8C03\u7528</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>img<span class="token punctuation">,</span> props<span class="token punctuation">,</span> emit<span class="token punctuation">,</span> callback<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function-variable function">observer</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IntersectionObserver</span><span class="token punctuation">(</span>
      <span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter"><span class="token keyword">void</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5982\u679C\u8FDB\u5165\u53EF\u89C6\u533A\u57DF</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>isIntersecting<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// \u5F00\u59CB\u52A0\u8F7D\u56FE\u7247 \u8C03\u7528\u7236\u7C7B</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">loadCreateImg</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          observer<span class="token punctuation">.</span><span class="token function">unobserve</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>node<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token doc-comment comment">/**
       * rootMargin \u4E3A\u89E6\u53D1\u61D2\u52A0\u8F7D\u7684\u8DDD\u79BB \u901A\u8FC7 props \u4F20\u5165
       * https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin
       */</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">rootMargin</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>rootMargin <span class="token punctuation">}</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">return</span> observer
  <span class="token punctuation">}</span>
  <span class="token comment">// \u6267\u884C \u61D2\u52A0\u8F7D</span>
  lazyCreateImg <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter"><span class="token keyword">void</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// IntersectionObserver \u5185\u90E8\u65B9\u6CD5\uFF0C\u9700\u8981\u5C06 dom \u8282\u70B9\u4F20\u5165</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">observer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>node<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>IntersectionObserver</code>\u63A5\u53E3\u53EF\u4EE5\u5224\u65AD<code>dom</code>\u5143\u7D20\u662F\u5426\u8FDB\u5165\u53EF\u89C6\u533A\u57DF\uFF0C\u901A\u8FC7\u5185\u7F6E\u65B9\u6CD5\u5224\u65AD\u8FDB\u5165\u53EF\u89C6\u533A\u57DF\u4E4B\u540E\uFF0C\u6267\u884C\u7236\u7C7B\u7684<code>loadCreateImg</code>\u65B9\u6CD5\u8FDB\u884C\u52A0\u8F7D\uFF0C\u4ECE\u800C\u5B9E\u73B0\u61D2\u52A0\u8F7D\u3002</p><h2 id="\u5BF9\u5916\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u5916\u63A5\u53E3" aria-hidden="true">#</a> \u5BF9\u5916\u63A5\u53E3</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5BFC\u51FA\u5BF9\u5916\u63A5\u53E3</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">loadImage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> prop<span class="token punctuation">,</span> emit<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * \u5982\u679C\u4F20\u5165\u4E86 lazy \u5219\u6267\u884C\u61D2\u52A0\u8F7D\u7C7B
   * \u5426\u5219\u6267\u884C\u6B63\u5E38\u52A0\u8F7D\u7C7B
   */</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>prop<span class="token punctuation">.</span>lazy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> lazy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Lazy</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> prop<span class="token punctuation">,</span> emit<span class="token punctuation">,</span> callback<span class="token punctuation">)</span>
    <span class="token keyword">return</span> lazy<span class="token punctuation">.</span><span class="token function">lazyCreateImg</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> load <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Load</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> prop<span class="token punctuation">,</span> emit<span class="token punctuation">,</span> callback<span class="token punctuation">)</span>
  load<span class="token punctuation">.</span><span class="token function">loadCreateImg</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6D4B\u8BD5\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5\u4F7F\u7528" aria-hidden="true">#</a> \u6D4B\u8BD5\u4F7F\u7528</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> loadImage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./load.js&#39;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

  <span class="token keyword">const</span> myImg <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token keyword">as</span> unknown <span class="token keyword">as</span> HTMLImageElement<span class="token punctuation">)</span>

  <span class="token comment">// \u6A21\u62DF props</span>
  <span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">&#39;https://tianyuha2o.cn/images/auto/my.jpg&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">errSrc</span><span class="token operator">:</span> <span class="token string">&#39;https://tianyuhao.cn/images/auto/4.jpg&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">lazy</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>

  <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">loadImage</span><span class="token punctuation">(</span>myImg<span class="token punctuation">.</span>value<span class="token punctuation">,</span> props<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myImg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B8C\u6574\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u5B8C\u6574\u4EE3\u7801" aria-hidden="true">#</a> \u5B8C\u6574\u4EE3\u7801</h2><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u8BE6\u60C5</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * \u5224\u65AD\u4E00\u4E2A\u503C\u662F\u5426\u4E3A\u5B57\u7B26\u4E32
 * <span class="token keyword">@param</span> <span class="token parameter">target</span> \u8981\u68C0\u6D4B\u7684\u503C
 * <span class="token keyword">@returns</span> boolean
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> isString<span class="token operator">:</span> i <span class="token operator">=</span> <span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span><span class="token operator">:</span> target <span class="token keyword">is</span> <span class="token builtin">string</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token keyword">typeof</span> target <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span> <span class="token operator">&amp;&amp;</span>
    Object<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;[object String]&#39;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * Load \u7C7B\u6240\u9700\u8981\u7684 props \u53C2\u6570
 */</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">LoadNeedImagePropsInterface</span> <span class="token punctuation">{</span>
  src<span class="token operator">:</span> <span class="token builtin">string</span>
  errSrc<span class="token operator">:</span> <span class="token builtin">string</span>
  rootMargin<span class="token operator">:</span> <span class="token builtin">string</span>
  lazy<span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">LazyInterface</span> <span class="token punctuation">{</span>
  <span class="token function">observer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> IntersectionObserver
  <span class="token function">lazyCreateImg</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">LoadImageInterface</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span>
    node<span class="token operator">:</span> HTMLImageElement<span class="token punctuation">,</span>
    prop<span class="token operator">:</span> LoadNeedImagePropsInterface<span class="token punctuation">,</span>
    emit<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span>
    callback<span class="token operator">:</span> callbackInterface <span class="token operator">|</span> <span class="token keyword">null</span>
  <span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">LoadInterface</span> <span class="token punctuation">{</span>
  node<span class="token operator">:</span> HTMLImageElement
  props<span class="token operator">:</span> LoadNeedImagePropsInterface
  emit<span class="token operator">:</span> <span class="token builtin">Function</span>
  callback<span class="token operator">:</span> callbackInterface <span class="token operator">|</span> <span class="token keyword">null</span>
  <span class="token function">loadCreateImg</span><span class="token punctuation">(</span>errSrc<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
  <span class="token function">onerror</span><span class="token punctuation">(</span>evt<span class="token operator">:</span> Event<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
  <span class="token function">onload</span><span class="token punctuation">(</span>evt<span class="token operator">:</span> Event<span class="token punctuation">,</span> src<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">CallbackInterface</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span>params<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * \u56FE\u7247\u52A0\u8F7D
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Load</span> <span class="token keyword">implements</span> <span class="token class-name">LoadInterface</span> <span class="token punctuation">{</span>
  node<span class="token operator">:</span> HTMLImageElement
  props<span class="token operator">:</span> LoadNeedImagePropsInterface
  emit<span class="token operator">:</span> <span class="token builtin">Function</span>
  callback<span class="token operator">:</span> CallbackInterface <span class="token operator">|</span> <span class="token keyword">null</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token parameter">node</span> \u56FE\u7247 dom \u8282\u70B9
   * <span class="token keyword">@param</span> <span class="token parameter">props</span> props \u53C2\u6570
   * <span class="token keyword">@param</span> <span class="token parameter">emit</span> \u4E8B\u4EF6
   * <span class="token keyword">@param</span> <span class="token parameter">callback</span> \u56DE\u8C03\u53C2\u6570
   */</span>
  <span class="token function">constructor</span> <span class="token punctuation">(</span>
    node<span class="token operator">:</span> HTMLImageElement<span class="token punctuation">,</span>
    props<span class="token operator">:</span> LoadNeedImagePropsInterface<span class="token punctuation">,</span>
    emit<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span>
    callback<span class="token operator">:</span> CallbackInterface <span class="token operator">|</span> <span class="token keyword">null</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>node <span class="token operator">=</span> node
    <span class="token keyword">this</span><span class="token punctuation">.</span>props <span class="token operator">=</span> props
    <span class="token keyword">this</span><span class="token punctuation">.</span>emit <span class="token operator">=</span> emit
    <span class="token keyword">this</span><span class="token punctuation">.</span>callback <span class="token operator">=</span> callback
  <span class="token punctuation">}</span>
  <span class="token doc-comment comment">/**
   * \u7B2C\u4E00\u6B65\u4F1A\u8FDB\u5165\u5230\u8FD9\u91CC
   * \u9996\u5148\u52A0\u8F7D\u5F53\u524D\u7684 src \u5730\u5740\u56FE\u7247
   * <span class="token keyword">@param</span> <span class="token parameter">errSrc</span> src \u5931\u8D25\u540E\u7684\u52A0\u8F7D\u8DEF\u5F84
   */</span>
  loadCreateImg <span class="token operator">=</span> <span class="token punctuation">(</span>errSrc<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newImg<span class="token operator">:</span> HTMLImageElement <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>errSrc<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      newImg<span class="token punctuation">.</span>src <span class="token operator">=</span> errSrc
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      newImg<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>src
    <span class="token punctuation">}</span>

    <span class="token comment">// src \u52A0\u8F7D\u5931\u8D25</span>
    newImg<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>evt<span class="token operator">:</span> Event<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onerror</span><span class="token punctuation">(</span>evt<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// src \u52A0\u8F7D\u6210\u529F</span>
    newImg<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;load&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>evt<span class="token operator">:</span> Event<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onload</span><span class="token punctuation">(</span>evt<span class="token punctuation">,</span> newImg<span class="token punctuation">.</span>src<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token doc-comment comment">/**
   * \u52A0\u8F7D\u5931\u8D25
   * <span class="token keyword">@param</span> <span class="token parameter">evt</span> \u4E8B\u4EF6\u5BF9\u8C61
   * <span class="token keyword">@returns</span>
   */</span>
  onerror <span class="token operator">=</span> <span class="token punctuation">(</span>evt<span class="token operator">:</span> Event<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5982\u679C\u5B58\u5728 errSrc \u5219\u7EE7\u7EED\u5C1D\u8BD5\u52A0\u8F7D</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>errSrc<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">loadCreateImg</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>errSrc<span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>errSrc <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u5426\u5219\u8FD4\u56DE\u5931\u8D25\u56DE\u8C03</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> evt<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>callback<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">callback</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token doc-comment comment">/**
   * \u56FE\u7247\u52A0\u8F7D
   * <span class="token keyword">@param</span> <span class="token parameter">evt</span> \u4E8B\u4EF6\u5BF9\u8C61
   * <span class="token keyword">@param</span> <span class="token parameter">src</span> \u9700\u8981\u52A0\u8F7D\u7684 src
   */</span>
  onload <span class="token operator">=</span> <span class="token punctuation">(</span>evt<span class="token operator">:</span> Event<span class="token punctuation">,</span> src<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>node<span class="token punctuation">.</span>src <span class="token operator">=</span> src
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;load&#39;</span><span class="token punctuation">,</span> evt<span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>callback<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">callback</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * \u56FE\u7247\u61D2\u52A0\u8F7D
 * \u4F7F\u7528 IntersectionObserver \u76D1\u89C6\u56FE\u7247
 * https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver/observe
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Lazy</span> <span class="token keyword">extends</span> <span class="token class-name">Load</span> <span class="token keyword">implements</span> <span class="token class-name">LazyInterface</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span> <span class="token punctuation">(</span>
    img<span class="token operator">:</span> HTMLImageElement<span class="token punctuation">,</span>
    props<span class="token operator">:</span> LoadNeedImagePropsInterface<span class="token punctuation">,</span>
    emit<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span>
    callback<span class="token operator">:</span> CallbackInterface <span class="token operator">|</span> <span class="token keyword">null</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>img<span class="token punctuation">,</span> props<span class="token punctuation">,</span> emit<span class="token punctuation">,</span> callback<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token doc-comment comment">/**
   * \u61D2\u52A0\u8F7D\u51FD\u6570
   * <span class="token keyword">@returns</span>
   */</span>
  observer <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> IntersectionObserver <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> observer<span class="token operator">:</span> IntersectionObserver <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IntersectionObserver</span><span class="token punctuation">(</span>
      <span class="token punctuation">(</span>arr<span class="token operator">:</span> IntersectionObserverEntry<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>isIntersecting<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">loadCreateImg</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          observer<span class="token punctuation">.</span><span class="token function">unobserve</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>node<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        rootMargin<span class="token operator">:</span> <span class="token function">isString</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>rootMargin<span class="token punctuation">)</span>
          <span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>rootMargin
          <span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>rootMargin <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">return</span> observer
  <span class="token punctuation">}</span>
  <span class="token doc-comment comment">/**
   * \u6267\u884C\u61D2\u52A0\u8F7D
   */</span>
  lazyCreateImg <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">observer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>node<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * \u5224\u65AD\u662F\u61D2\u52A0\u8F7D\u8FD8\u662F\u6B63\u5E38\u52A0\u8F7D
 * <span class="token keyword">@param</span> <span class="token parameter">node</span> img \u5143\u7D20
 * <span class="token keyword">@param</span> <span class="token parameter">prop</span> Props
 * <span class="token keyword">@param</span> <span class="token parameter">emit</span> Emits
 * <span class="token keyword">@param</span> <span class="token parameter">callback</span> \u56DE\u8C03\u51FD\u6570
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> loadImage<span class="token operator">:</span> LoadImageInterface <span class="token operator">=</span> <span class="token punctuation">(</span>
  node<span class="token operator">:</span> HTMLImageElement<span class="token punctuation">,</span>
  prop<span class="token operator">:</span> LoadNeedImagePropsInterface<span class="token punctuation">,</span>
  emit<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span>
  callback<span class="token operator">:</span> CallbackInterface <span class="token operator">|</span> <span class="token keyword">null</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * \u5982\u679C\u4F20\u5165\u4E86 lazy \u5219\u6267\u884C\u61D2\u52A0\u8F7D\u7C7B
   * \u5426\u5219\u6267\u884C\u6B63\u5E38\u52A0\u8F7D\u7C7B
   */</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>prop<span class="token punctuation">.</span>lazy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> lazy<span class="token operator">:</span> Lazy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Lazy</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> prop<span class="token punctuation">,</span> emit<span class="token punctuation">,</span> callback<span class="token punctuation">)</span>
    <span class="token keyword">return</span> lazy<span class="token punctuation">.</span><span class="token function">lazyCreateImg</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> load<span class="token operator">:</span> Load <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Load</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> prop<span class="token punctuation">,</span> emit<span class="token punctuation">,</span> callback<span class="token punctuation">)</span>
  <span class="token keyword">return</span> load<span class="token punctuation">.</span><span class="token function">loadCreateImg</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,9);function v(m,b){const a=o("ExternalLinkIcon");return c(),l("div",null,[u,s("p",null,[n("\u56FE\u7247\u7684\u61D2\u52A0\u8F7D\uFF0C\u4E5F\u662F\u4E00\u4E2A\u56FE\u7247\u52A0\u8F7D\u5FC5\u5907\u7684\u529F\u80FD\u4E86\uFF0C\u8FD9\u91CC\u6211\u4F7F\u7528\u7684\u662F\u5185\u7F6E\u7684"),s("a",r,[n("IntersectionObserver"),p(a)]),n("\u63A5\u53E3\uFF0C\u5BF9\u4E8E\u8FD9\u4E2A\u65B9\u6CD5\uFF0C\u8FD9\u91CC\u4E0D\u8FC7\u591A\u63CF\u8FF0\uFF0C\u5404\u4F4D\u53EF\u4EE5\u901A\u8FC7"),s("a",k,[n("MDN"),p(a)]),n("\u8FDB\u884C\u5B66\u4E60\u3002")]),d])}const g=e(i,[["render",v],["__file","32.html.vue"]]);export{g as default};
