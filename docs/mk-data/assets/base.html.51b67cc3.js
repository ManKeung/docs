import{_ as p,r as e,o as t,c as l,b as n,d as s,e as c,a as i}from"./app.69a66903.js";const o={},u={id:"scss",tabindex:"-1"},r=n("a",{class:"header-anchor",href:"#scss","aria-hidden":"true"},"#",-1),d={href:"https://www.sass.hk/",target:"_blank",rel:"noopener noreferrer"},k=i(`<h2 id="sass\u57FA\u672C\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#sass\u57FA\u672C\u8BED\u6CD5" aria-hidden="true">#</a> sass\u57FA\u672C\u8BED\u6CD5</h2><ol><li><p>sass\u7F16\u8BD1</p><ol><li>\u4E00\u6B21\u7F16\u8BD1 <code>sass \u9700\u8981\u7F16\u8BD1\u7684\u6587\u4EF6 \u7F16\u8BD1\u540E\u7684\u6587\u4EF6</code></li><li>\u5355\u6587\u4EF6\u76D1\u542C <code>sass --watch common.scss:xx.css</code></li><li>\u6587\u4EF6\u5939\u76D1\u542C <code>sass --watch \u6587\u4EF6\u540D\u540D\u79F0\uFF08\u8981\u76D1\u542C\u7684\u6587\u4EF6\u5939\uFF09\uFF1A\u7F16\u8BD1\u5230\u54EA\u513F\uFF08\u7F16\u8BD1\u540E\u7684\u4F4D\u7F6E\uFF09</code></li><li>\u81EA\u52A8\u641C\u7D22\uFF08windows cmd \u547D\u4EE4\u5927\u5168\uFF09 <ul><li>dir \u67E5\u770B\u5F53\u524D\u76EE\u5F55\u6587\u4EF6</li><li>cd \u6253\u5F00\u6587\u4EF6 cd a cd a.txt cd .. \u4E0A\u4E00\u5C42</li><li>cls \u6E05\u9664\u5F53\u524D\u54C1\u76EE</li><li>ctrl + c \u662F\u5426\u7EC8\u6B62\u64CD\u4F5C y / n</li><li>\u6309\u4E0A\u4E0B\u7BAD\u5934 \u4F7F\u7528\u4F60\u6700\u8FD1\u4F7F\u7528\u7684\u51E0\u4E2A\u547D\u4EE4</li></ul></li><li>\u7F16\u8BD1\u6A21\u5F0F <ul><li>\u8BED\u6CD5 <code>sass --watch \u6587\u4EF6\u5939 : \u6587\u4EF6\u5939 --stye nested \u9ED8\u8BA4 / expanded css\u7EB5\u5411\u5199\u6CD5 / compact \u6A2A\u5411 / compressed \u538B\u7F29\uFF08\u6240\u6709\u4EE3\u7801\u538B\u7F29\u6210\u4E00\u884C\u4EE3\u7801\uFF09</code></li></ul></li></ol></li><li><p>sass\u6CE8\u91CA</p><ul><li>// \u6CE8\u91CA\u4E0D\u4F1A\u88AB\u7F16\u8BD1</li><li>/* \u5C5E\u4E8Ecss\u6CE8\u91CA\uFF0C\u4F1A\u88AB\u7F16\u8BD1\u51FA\u6765*/</li></ul></li><li><p>\u53D8\u91CF(\u53EF\u4EE5\u5B58 css\u5355\u4F4D\u3001\u989C\u8272\u3001\u6587\u5B57)</p><ul><li>\u8BED\u6CD5 <code>$\u53D8\u91CF:\u53C2\u6570</code></li><li>\u5B9E\u4F8B</li></ul></li></ol><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code>	<span class="token property"><span class="token variable">$width</span></span><span class="token punctuation">:</span>300px<span class="token punctuation">;</span>
	<span class="token property"><span class="token variable">$color</span></span><span class="token punctuation">:</span>yellowgreen pink<span class="token punctuation">;</span>
	<span class="token selector">div </span><span class="token punctuation">{</span>
		<span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">$width</span><span class="token punctuation">;</span>
		<span class="token property">height</span><span class="token punctuation">:</span> <span class="token variable">$width</span><span class="token punctuation">;</span>
		<span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">nth</span><span class="token punctuation">(</span><span class="token variable">$color</span><span class="token punctuation">,</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// nth(\u90A3\u4E2A\u53D8\u91CF\uFF0C\u7B2C\u51E0\u4E2A) 1 2 ...\uFF08**\u4E0D\u662F\u4ECE0\u5F00\u59CB**\uFF09</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>- \u53D8\u91CF\u4F5C\u7528\u57DF \u548Cjs\u4E2D\u7684 \u4F5C\u7528\u57DF\u4E00\u6837
</code></pre><ol start="4"><li>\u5D4C\u5957\uFF08\u6807\u7B7E\u53EF\u4EE5\u600E\u4E48\u5D4C\u5957\u5C31\u80FD\u600E\u4E48\u5D4C\u5957\uFF09 <ul><li>\u8BED\u6CD5</li></ul></li></ol><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code>	<span class="token selector">ul </span><span class="token punctuation">{</span>
		<span class="token property"><span class="token variable">$lh</span></span><span class="token punctuation">:</span>30px<span class="token punctuation">;</span>
		<span class="token selector">li </span><span class="token punctuation">{</span>
			<span class="token property">height</span><span class="token punctuation">:</span><span class="token variable">$lh</span><span class="token punctuation">;</span>
		 	<span class="token selector">a </span><span class="token punctuation">{</span>
				<span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
				<span class="token property">margin-top</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token variable">$lh</span> <span class="token operator">-</span> 12px<span class="token punctuation">)</span> <span class="token operator">/</span> 2<span class="token punctuation">;</span> <span class="token comment">// \u9075\u5FAAcss3\u89C4\u5219 \u8FD0\u7B97\u7B26 \u524D\u540E\u7A7A\u683C\u5206\u5F00</span>
		 <span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>- ~~\u5C5E\u6027\u5D4C\u5957\uFF08\u8981\u7528 : \u533A\u5206\uFF09~~
</code></pre><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code>	<span class="token selector">.box </span><span class="token punctuation">{</span>
    <span class="token comment">//\u590D\u5408\u6837\u5F0F</span>
    <span class="token selector">font:</span><span class="token punctuation">{</span>
      <span class="token property">style</span><span class="token punctuation">:</span>normal<span class="token punctuation">;</span>
      <span class="token property">weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
      <span class="token property">size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
      <span class="token property">family</span><span class="token punctuation">:</span> <span class="token variable">$ms</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">margin: </span><span class="token punctuation">{</span>
      <span class="token property">top</span><span class="token punctuation">:</span>12px<span class="token punctuation">;</span>
      <span class="token property">right</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
      <span class="token property">bottom</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
      <span class="token property">left</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>- \u8DF3\u51FA\u6839
</code></pre><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code>	<span class="token selector">.news </span><span class="token punctuation">{</span>
		<span class="token atrule"><span class="token rule">@at-root</span> .news_title</span> <span class="token punctuation">{</span>
			<span class="token property">width</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token selector">.news_content </span><span class="token punctuation">{</span>
			<span class="token property">width</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

<span class="token comment">// \u5355\u4E2A\u8DF3\u51FA</span>

        <span class="token selector">.news</span><span class="token punctuation">{</span>
    <span class="token comment">//@at-root .news_title{</span>
    <span class="token comment">//    width: 10px;</span>
    <span class="token comment">//  }</span>
    <span class="token comment">//@at-root .news_content{</span>
    <span class="token comment">//    width: 20px;</span>
    <span class="token comment">//  }</span>

    <span class="token atrule"><span class="token rule">@at-root</span></span> <span class="token punctuation">{</span>
        <span class="token selector">.news_title</span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.abc</span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4E00\u7EC4\u8DF3\u51FA</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>- \u5E26\u5165\u4E0A\u4E00\u5C42\u9009\u62E9\u5668\uFF08\u4E0D\u5E26\u7236\u7EA7\uFF09
</code></pre><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token selector">.box</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token selector"><span class="token parent important">&amp;</span>_cont</span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
        <span class="token selector"><span class="token parent important">&amp;</span>_abc</span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

&amp; === \u4E0A\u4E00\u5C42\u9009\u62E9\u5668 --&gt; .box_cont .box_cont_abc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>\u6DF7\u5408 <ul><li>\u57FA\u672C\u8BED\u6CD5</li></ul></li></ol><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token function">opa</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token property">opacity</span><span class="token punctuation">:</span> .5<span class="token punctuation">;</span>
	<span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">alpha</span><span class="token punctuation">(</span>opacity=50<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u4E0D\u5E26\u53C2\u6570</span>

<span class="token keyword">@mixin</span> <span class="token function">opa</span><span class="token punctuation">(</span><span class="token variable">$opa</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token property">opacity</span><span class="token punctuation">:</span> <span class="token variable">$opa</span> <span class="token operator">/</span> 100<span class="token punctuation">;</span>
	<span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">alpha</span><span class="token punctuation">(</span>opacity=<span class="token variable">$opa</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u5E26\u53C2\u6570\uFF0C\u5FC5\u987B\u4F20\u53C2\u6570</span>

<span class="token keyword">@mixin</span> <span class="token function">opa</span><span class="token punctuation">(</span><span class="token property"><span class="token variable">$opa</span></span><span class="token punctuation">:</span>50<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token property">opacity</span><span class="token punctuation">:</span> <span class="token variable">$opa</span> <span class="token operator">/</span> 100<span class="token punctuation">;</span>
	<span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">alpha</span><span class="token punctuation">(</span>opacity=<span class="token variable">$opa</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u4F20\u53C2\u6570\u5C31\u662F\u4F20\u7684\u6570\uFF0C\u4E0D\u4F20\u5C31\u662F\u9ED8\u8BA4\u503C50 \u53EF\u4EE5\u81EA\u5DF1\u8BBE\u5B9A</span>

<span class="token selector">.demo</span><span class="token punctuation">{</span>
	<span class="token keyword">@include</span> <span class="token function">opa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * @mixin \u58F0\u660E
 *
 * @include \u662F\u8C03\u7528 @mixin \u6240\u58F0\u660E\u7684\u4E1C\u897F
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>- \u53C2\u6570\u4E0D\u786E\u5B9A
</code></pre><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token function">shadow</span><span class="token punctuation">(</span><span class="token variable">$shadow</span>...<span class="token punctuation">)</span><span class="token punctuation">{</span>
     <span class="token property">box-shadow</span><span class="token punctuation">:</span> <span class="token variable">$shadow</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/**
 * ... \u4EE3\u8868\u53C2\u6570\u4E0D\u786E\u5B9A
 * \u53EF\u4EFB\u610F\u4F20
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>if else\u5224\u65AD <ul><li>\u8BED\u6CD5</li></ul></li></ol><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token function">sj</span><span class="token punctuation">(</span><span class="token property"><span class="token variable">$fx</span></span><span class="token punctuation">:</span>top<span class="token punctuation">,</span><span class="token property"><span class="token variable">$size</span></span><span class="token punctuation">:</span>10px<span class="token punctuation">,</span><span class="token property"><span class="token variable">$color</span></span><span class="token punctuation">:</span>red<span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token keyword">@if</span> <span class="token punctuation">(</span><span class="token variable">$fx</span> <span class="token operator">==</span> top<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token property">border-color</span><span class="token punctuation">:</span> transparent transparent <span class="token variable">$color</span> transparent<span class="token punctuation">;</span>
        <span class="token property">border-style</span><span class="token punctuation">:</span> dashed dashed solid dashed<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">@else if</span><span class="token punctuation">(</span><span class="token variable">$fx</span> <span class="token operator">==</span> right<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token property">border-color</span><span class="token punctuation">:</span> transparent transparent transparent <span class="token variable">$color</span><span class="token punctuation">;</span>
        <span class="token property">border-style</span><span class="token punctuation">:</span> dashed dashed dashed solid<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">@else if</span><span class="token punctuation">(</span><span class="token variable">$fx</span> <span class="token operator">==</span> bottom<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token property">border-color</span><span class="token punctuation">:</span> <span class="token variable">$color</span> transparent transparent transparent <span class="token punctuation">;</span>
        <span class="token property">border-style</span><span class="token punctuation">:</span> solid dashed dashed dashed <span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">@else if</span><span class="token punctuation">(</span><span class="token variable">$fx</span> <span class="token operator">==</span> left<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token property">border-color</span><span class="token punctuation">:</span> transparent <span class="token variable">$color</span> transparent transparent <span class="token punctuation">;</span>
        <span class="token property">border-style</span><span class="token punctuation">:</span> dashed solid dashed dashed <span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token property">border-width</span><span class="token punctuation">:</span> <span class="token variable">$size</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token selector">.demo</span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> <span class="token function">sj</span><span class="token punctuation">(</span><span class="token property"><span class="token variable">$fx</span></span><span class="token punctuation">:</span>bottom<span class="token punctuation">,</span><span class="token property"><span class="token variable">$color</span></span><span class="token punctuation">:</span>yellowgreen<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>- if\u6761\u4EF6 not \u975E | or \u6216 | and \u4E0E | == \u7B49\u4E8E | != \u4E0D\u7B49\u4E8E
**\u5199\u517C\u5BB9\u5F88\u9002\u7528\uFF08css3\uFF09**
</code></pre><ol start="7"><li><p>\u7EE7\u627F</p><ul><li>\u8BED\u6CD5</li></ul></li></ol><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token selector">.fl</span><span class="token punctuation">{</span>
    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token keyword">@extend</span> .fl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box2</span><span class="token punctuation">{</span>
     <span class="token keyword">@extend</span> .box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>- % \u5360\u4F4D\u9009\u62E9\u5668\uFF08\u5728\u7528\u5230\u7684\u65F6\u5019 \u624D\u4F1A\u88AB\u7F16\u8BD1\u51FA\u6765\uFF09
</code></pre><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token selector"><span class="token placeholder">%clearfix</span></span><span class="token punctuation">{</span>
    *<span class="token property">zoom</span><span class="token punctuation">:</span>1<span class="token punctuation">;</span>
    <span class="token selector"><span class="token parent important">&amp;</span>:after,
    <span class="token parent important">&amp;</span>:before</span><span class="token punctuation">{</span>
        <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> table<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector"><span class="token parent important">&amp;</span>:after</span><span class="token punctuation">{</span>
        <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.abc</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token keyword">@extend</span> <span class="token placeholder selector">%clearfix</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="8"><li><p># \u5B57\u7B26\u4E32\u63D2\u503C</p><ul><li>\u8BED\u6CD5</li></ul></li></ol><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token property"><span class="token variable">$icon</span></span><span class="token punctuation">:</span><span class="token string">&#39;../images/icon/&#39;</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$img</span></span><span class="token punctuation">:</span><span class="token string">&#39;../images/&#39;</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sina</span></span><span class="token punctuation">:</span><span class="token string">&#39;http://img2.sina.com.cn/2016-11-21/qiaobusi/images/icon/&#39;</span><span class="token punctuation">;</span>

<span class="token comment">//  #{\u53D8\u91CF\u540D}</span>

<span class="token selector">.content</span><span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url">url</span><span class="token punctuation">(</span><span class="token variable">#{$sina}</span>/a.jpg<span class="token punctuation">)</span> left top no-repeat<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="9"><li><p>sass\u4E2D\u7684\u8FD0\u7B97 \u8FD0\u7B97\u7B26\u7684\u524D\u540E \u5FC5\u987B\u8981\u6709\u7A7A\u683C</p><ul><li>\u8BED\u6CD5</li></ul></li></ol><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token selector">.ys</span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #F00 <span class="token operator">+</span> 255<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">$width</span> <span class="token operator">/</span> 2<span class="token punctuation">;</span>

    <span class="token property"><span class="token variable">$fs</span></span><span class="token punctuation">:</span>12px<span class="token punctuation">;</span>
    <span class="token property"><span class="token variable">$lh</span></span><span class="token punctuation">:</span>24px<span class="token punctuation">;</span>

    <span class="token property">font</span><span class="token punctuation">:</span> <span class="token variable">#{$fs}</span>/<span class="token variable">#{$lh}</span> <span class="token string">&quot;Microsoft YaHei&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;\u5FAE\u8F6F\u96C5\u9ED1&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="10"><li><p>for\u5FAA\u73AF</p><ul><li>\u8BED\u6CD5</li></ul></li></ol><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token property"><span class="token variable">$max</span></span><span class="token punctuation">:</span>10<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$min</span></span><span class="token punctuation">:</span>5<span class="token punctuation">;</span>
<span class="token comment">//sass</span>
<span class="token comment">//  &lt;=</span>
<span class="token keyword">@for</span> <span class="token variable">$i</span> <span class="token keyword">from</span> <span class="token variable">$min</span> <span class="token keyword">through</span> <span class="token selector"><span class="token variable">$max</span></span><span class="token punctuation">{</span>
    <span class="token selector">.item_<span class="token variable">#{$i}</span></span><span class="token punctuation">{</span>
         <span class="token property">background-position</span><span class="token punctuation">:</span> <span class="token function">-</span><span class="token punctuation">(</span><span class="token variable">$i</span> <span class="token operator">-</span> 1<span class="token punctuation">)</span> <span class="token operator">*</span> 20px 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// &lt;</span>
<span class="token keyword">@for</span> <span class="token variable">$i</span> <span class="token keyword">from</span> <span class="token selector">1 to 10</span><span class="token punctuation">{</span>
    <span class="token selector">.demo_<span class="token variable">#{$i}</span></span><span class="token punctuation">{</span>
        <span class="token property">background-position</span><span class="token punctuation">:</span> <span class="token function">-</span><span class="token punctuation">(</span><span class="token variable">$i</span> <span class="token operator">-</span> 1<span class="token punctuation">)</span> <span class="token operator">*</span> 20px 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="11"><li><p>while</p><ul><li>\u8BED\u6CD5</li></ul></li></ol><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token property"><span class="token variable">$a</span></span><span class="token punctuation">:</span>5<span class="token punctuation">;</span>
<span class="token keyword">@while</span><span class="token punctuation">(</span><span class="token variable">$a</span> <span class="token operator">&gt;=</span> 1<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token selector">.aaa_<span class="token variable">#{$a}</span></span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 20px <span class="token operator">*</span> <span class="token variable">$a</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token property"><span class="token variable">$a</span></span><span class="token punctuation">:</span><span class="token variable">$a</span> <span class="token operator">-</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="12"><li><p>each</p><ul><li>\u8BED\u6CD5</li></ul></li></ol><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token property"><span class="token variable">$icon_name</span></span><span class="token punctuation">:</span>user<span class="token punctuation">,</span>pass<span class="token punctuation">,</span>checked<span class="token punctuation">,</span>select<span class="token punctuation">;</span>
<span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$i</span> in <span class="token variable">$icon_name</span></span><span class="token punctuation">{</span>
    <span class="token selector">.icon_<span class="token variable">#{$i}</span></span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="13"><li><p>\u4E09\u76EE</p><ul><li>\u8BED\u6CD5</li></ul></li></ol><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token function">if</span><span class="token punctuation">(</span><span class="token variable">$condition</span><span class="token punctuation">,</span> <span class="token variable">$if</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token variable">$if</span> <span class="token boolean">false</span><span class="token punctuation">)</span>

<span class="token function">if</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> 1px<span class="token punctuation">,</span> 2px<span class="token punctuation">)</span> --&gt; 1px
<span class="token function">if</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> 1px<span class="token punctuation">,</span> 2px<span class="token punctuation">)</span> --&gt;2px
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35);function v(m,b){const a=e("ExternalLinkIcon");return t(),l("div",null,[n("h1",u,[r,s(),n("a",d,[s("SCSS"),c(a)])]),k])}const h=p(o,[["render",v],["__file","base.html.vue"]]);export{h as default};
