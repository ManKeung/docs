import{_ as n,o as s,c as a,a as e}from"./app.86c675ad.js";const t={},p=e(`<h1 id="\u7C7B\u4E0E\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u4E0E\u63A5\u53E3" aria-hidden="true">#</a> \u7C7B\u4E0E\u63A5\u53E3</h1><h2 id="\u7C7B\u7684\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u7684\u5B9A\u4E49" aria-hidden="true">#</a> \u7C7B\u7684\u5B9A\u4E49</h2><p>\u4E0B\u9762\u662F\u4F7F\u7528 TS \u7EA6\u675F\u5C5E\u6027\u5E76\u5B9E\u4F8B\u5316\u5BF9\u8C61</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token builtin">string</span>
	age<span class="token operator">:</span> <span class="token builtin">number</span>

	<span class="token function">constructor</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> n
		<span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> a
	<span class="token punctuation">}</span>

	<span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\u7684\u5E74\u9F84\u662F</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> ls <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&#39;\u674E\u56DB&#39;</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> zs <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&#39;\u5F20\u4E09&#39;</span><span class="token punctuation">,</span> <span class="token number">35</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7\u7EA6\u675F\u6570\u7EC4\u7684\u7C7B\u578B\u4E3AUser\uFF0C\u4F7F\u5176\u6210\u5458\u53EA\u80FD\u662F User \u7C7B\u578B\u5BF9\u8C61</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> users<span class="token operator">:</span> User<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>ls<span class="token punctuation">,</span> zs<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u4FEE\u9970\u7B26" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u9970\u7B26" aria-hidden="true">#</a> \u4FEE\u9970\u7B26</h2><h3 id="public" tabindex="-1"><a class="header-anchor" href="#public" aria-hidden="true">#</a> public</h3><p>\u4E0B\u9762\u6765\u4ECB\u7ECD\u7B2C\u4E00\u4E2A\u8BBF\u95EE\u4FEE\u9970\u7B26 public\uFF0C\u6307<strong>\u516C\u5F00</strong>\u7684\u5C5E\u6027\u6216\u65B9\u6CD5</p><ul><li>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5C5E\u6027\u662F public \uFF08\u516C\u5F00\u7684\uFF09\uFF0C\u5373\u53EF\u4EE5\u5728\u7C7B\u7684\u5185\u90E8\u4E0E\u5916\u90E8\u4FEE\u6539\u548C\u8BBF\u95EE</li><li>\u4E0D\u660E\u786E\u8BBE\u7F6E\u4FEE\u9970\u7B26\u5373\u4E3Apublic</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> name<span class="token operator">:</span> <span class="token builtin">string</span>
	<span class="token keyword">public</span> age<span class="token operator">:</span> <span class="token builtin">number</span>

	<span class="token function">constructor</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> n
		<span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> a
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\u7684\u5E74\u9F84\u662F</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> ls <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&#39;\u674E\u56DB&#39;</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> zs <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&#39;\u5F20\u4E09&#39;</span><span class="token punctuation">,</span> <span class="token number">35</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="protected" tabindex="-1"><a class="header-anchor" href="#protected" aria-hidden="true">#</a> protected</h3><p>protected \u4FEE\u9970\u7B26\u6307<strong>\u53D7\u4FDD\u62A4</strong>\u7684\uFF0C\u53EA\u5141\u8BB8\u5728\u7236\u7C7B\u4E0E\u5B50\u7C7B\u4F7F\u7528\uFF0C\u4E0D\u5141\u8BB8\u5728\u7C7B\u7684\u5916\u90E8\u4F7F\u7528</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
	<span class="token keyword">protected</span> name<span class="token operator">:</span> <span class="token builtin">string</span>

	<span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">super</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> ls <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&#39;\u674E\u56DB&#39;</span><span class="token punctuation">)</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ls<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// protected \u4E0D\u5141\u8BB8\u8BBF\u95EE</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="private" tabindex="-1"><a class="header-anchor" href="#private" aria-hidden="true">#</a> private</h3><p>protected\u4FEE\u9970\u7B26\u6307<strong>\u79C1\u6709</strong>\u7684\uFF0C\u4E0D\u5141\u8BB8\u5728\u5B50\u7C7B\u4E0E\u7C7B\u7684\u5916\u90E8\u4F7F\u7528</p><p>\u7236\u7C7B\u58F0\u660E private \u5C5E\u6027\u6216\u65B9\u6CD5\u5B50\u7C7B\u4E0D\u5141\u8BB8\u8986\u76D6</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
	<span class="token keyword">private</span> name<span class="token operator">:</span> <span class="token builtin">string</span>

	<span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
	<span class="token punctuation">}</span>

	<span class="token keyword">private</span> <span class="token function">info</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">super</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B50\u7C7B\u4E0D\u80FD\u8BBF\u95EE\u7236\u7C7B\u7684 private \u5C5E\u6027\u6216\u65B9\u6CD5</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
	<span class="token keyword">private</span> name<span class="token operator">:</span> <span class="token builtin">string</span>

	<span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">super</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B50\u7C7B\u66F4\u6539\u7236\u7C7B\u65B9\u6CD5\u6216\u5C5E\u6027\u7684\u8BBF\u95EE\u4FEE\u9970\u7B26\u6709\u4E9B\u9650\u5236\u7684</p><ul><li>\u7236\u7C7B\u7684 private \u4E0D\u5141\u8BB8\u5B50\u7C7B\u4FEE\u6539</li><li>\u7236\u7C7B\u7684 protected \u5B50\u7C7B\u53EF\u4EE5\u4FEE\u6539\u4E3A protected \u6216 public</li><li>\u7236\u7C7B\u7684 public \u5B50\u7C7B\u53EA\u80FD\u8BBE\u7F6E\u4E3A public</li></ul><h3 id="readonly" tabindex="-1"><a class="header-anchor" href="#readonly" aria-hidden="true">#</a> readonly</h3><p>readonly \u5C06\u5C5E\u6027\u5B9A\u4E49\u4E3A\u53EA\u8BFB\uFF0C\u4E0D\u5141\u8BB8\u5728\u7C7B\u7684\u5185\u90E8\u4E0E\u5916\u90E8\u8FDB\u884C\u4FEE\u6539</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
	<span class="token keyword">readonly</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;mkimq&#39;</span>

	<span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> constructor</h2><p>\u6784\u9020\u51FD\u6570\u662F\u521D\u59CB\u5316\u5B9E\u4F8B\u53C2\u6570\u4F7F\u7528\u7684\uFF0C\u5728 TS \u4E2D\u6709\u4E9B\u7EC6\u8282\u4E0E\u5176\u4ED6\u7A0B\u5E8F\u4E0D\u540C</p><p>\u6211\u4EEC\u53EF\u4EE5\u5728\u6784\u9020\u51FD\u6570 constructor \u4E2D\u5B9A\u4E49\u5C5E\u6027\uFF0C\u8FD9\u6837\u5C31\u4E0D\u7528\u5728\u7C7B\u4E2D\u58F0\u660E\u5C5E\u6027\u4E86\uFF0C\u53EF\u4EE5\u7B80\u5316\u4EE3\u7801\u91CF</p><ul><li>\u5FC5\u987B\u8981\u5728\u5C5E\u6027\u524D\u52A0\u4E0A public\u3001private\u3001readonly\u7B49\u4FEE\u9970\u7B26\u624D\u6709\u6548</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span>
		<span class="token keyword">public</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
		<span class="token keyword">public</span> age<span class="token operator">:</span> <span class="token builtin">number</span>
	<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\u7684\u5E74\u9F84\u662F</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="static" tabindex="-1"><a class="header-anchor" href="#static" aria-hidden="true">#</a> static</h2><p>static \u7528\u4E8E\u5B9A\u4E49\u9759\u6001\u5C5E\u6027\u6216\u65B9\u6CD5\uFF0C\u5C5E\u6027\u6216\u65B9\u6CD5\u662F\u5C5E\u4E8E\u6784\u9020\u51FD\u6570\u7684</p><ul><li>\u9759\u6001\u5C5E\u6027\u662F\u5C5E\u4E8E\u6784\u9020\u51FD\u6570\u7684\uFF0C\u4E0D\u662F\u5BF9\u8C61\u72EC\u6709\u7684\uFF0C\u6240\u4EE5\u662F\u6240\u6709\u5BF9\u8C61\u90FD\u53EF\u4EE5\u5171\u4EAB\u7684</li></ul><h3 id="\u8BED\u6CD5\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5\u4ECB\u7ECD" aria-hidden="true">#</a> \u8BED\u6CD5\u4ECB\u7ECD</h3><p>\u4E0B\u9762\u662Fstatic \u4F7F\u7528\u7684\u8BED\u6CD5</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
	<span class="token keyword">static</span> n<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;mkimq&#39;</span>

	<span class="token keyword">static</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> Person<span class="token punctuation">.</span>n
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Person<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5355\u4F8B\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5355\u4F8B\u6A21\u5F0F" aria-hidden="true">#</a> \u5355\u4F8B\u6A21\u5F0F</h3><p>\u5F53\u628A construct \u5B9A\u4E49\u4E3A\u975E public \u4FEE\u9970\u7B26\u540E\uFF0C\u5C31\u4E0D\u80FD\u901A\u8FC7\u8FD9\u4E2A\u7C7B\u5B9E\u4F8B\u5316\u5BF9\u8C61\u4E86\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
	<span class="token keyword">protected</span> <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5229\u7528\u8FD9\u4E2A\u7279\u6027\u518D\u7ED3\u5408 static \u5373\u53EF\u5B9E\u73B0\u5355\u4F8B\u6A21\u5F0F\uFF0C\u5373\u53EA\u5B9E\u4F8B\u5316\u4E00\u4E2A\u5BF9\u8C61</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
	<span class="token keyword">static</span> instance<span class="token operator">:</span> Person <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span>
	<span class="token keyword">protected</span> <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Person <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>Person<span class="token punctuation">.</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> Person<span class="token punctuation">.</span>instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span>

		<span class="token keyword">return</span> Person<span class="token punctuation">.</span>instance
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> p <span class="token operator">=</span> Person<span class="token punctuation">.</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="get-set" tabindex="-1"><a class="header-anchor" href="#get-set" aria-hidden="true">#</a> get/set</h2><p>\u4F7F\u7528get \u4E0E set \u8BBF\u95EE\u5668\u53EF\u4EE5\u52A8\u6001\u8BBE\u7F6E\u548C\u83B7\u53D6\u5C5E\u6027\uFF0C\u7C7B\u4F3C\u4E8E vue \u6216 laravel \u4E2D\u7684\u8BA1\u7B97\u5C5E\u6027</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
	<span class="token keyword">private</span> _name<span class="token operator">:</span> <span class="token builtin">string</span>

	<span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>_name <span class="token operator">=</span> name
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">get</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_name
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">set</span> <span class="token function">name</span><span class="token punctuation">(</span>v<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>_name <span class="token operator">=</span> v
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> ls <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&#39;\u674E\u56DB&#39;</span><span class="token punctuation">)</span>
ls<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;mkimq&#39;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ls<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="abstract" tabindex="-1"><a class="header-anchor" href="#abstract" aria-hidden="true">#</a> abstract</h2><p>\u62BD\u8C61\u7C7B\u5B9A\u4E49\u4F7F\u7528abstract \u5173\u952E\u5B57\uFF0C\u62BD\u8C61\u7C7B\u9664\u4E86\u5177\u6709\u666E\u901A\u7C7B\u7684\u529F\u80FD\u5916\uFF0C\u8FD8\u53EF\u4EE5\u5B9A\u4E49\u62BD\u8C61\u65B9\u6CD5</p><ul><li>\u62BD\u8C61\u7C7B\u53EF\u4EE5\u4E0D\u5305\u542B\u62BD\u8C61\u65B9\u6CD5\uFF0C\u4F46\u62BD\u8C61\u65B9\u6CD5\u5FC5\u987B\u5B58\u5728\u4E8E\u62BD\u8C61\u7C7B\u4E2D</li><li>\u62BD\u8C61\u65B9\u6CD5\u662F\u5BF9\u65B9\u6CD5\u7684\u5B9A\u4E49\uFF0C\u5B50\u7C7B\u5FC5\u987B\u5B9E\u73B0\u8FD9\u4E2A\u65B9\u6CD5</li><li>\u62BD\u8C61\u7C7B\u4E0D\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\uFF0C\u53EA\u80FD\u88AB\u7EE7\u627F</li><li>\u62BD\u8C61\u7C7B\u7C7B\u4F3C\u4E8E\u7C7B\u7684\u6A21\u677F\uFF0C\u5B9E\u73B0\u89C4\u8303\u7684\u4EE3\u7801\u5B9A\u4E49</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Animation</span> <span class="token punctuation">{</span>
	<span class="token keyword">protected</span> <span class="token function">getPos</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token punctuation">{</span>x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Tank</span> <span class="token keyword">extends</span> <span class="token class-name">Animation</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Player</span> <span class="token keyword">extends</span> <span class="token class-name">Animation</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u4F8B\u4E2D\u7684\u5B50\u7C7B\u90FD\u6709 move \u65B9\u6CD5\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728\u62BD\u8C61\u65B9\u6CD5\u4E2D\u5BF9\u5176\u8FDB\u884C\u89C4\u8303\u5B9A\u4E49</p><ul><li>\u62BD\u8C61\u65B9\u6CD5\u53EA\u80FD\u5B9A\u4E49\uFF0C\u4E0D\u80FD\u5B9E\u73B0\uFF0C\u5373\u6CA1\u6709\u51FD\u6570\u4F53</li><li>\u5B50\u7C7B\u5FC5\u987B\u5B9E\u73B0\u62BD\u8C61\u65B9\u6CD5</li><li>\u5B50\u7C7B\u5FC5\u987B\u5B9E\u73B0\u62BD\u8C61\u7C7B\u5B9A\u4E49\u7684\u62BD\u8C61\u5C5E\u6027</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Animation</span> <span class="token punctuation">{</span>
	<span class="token keyword">abstract</span> name<span class="token operator">:</span> <span class="token builtin">string</span>
	<span class="token keyword">protected</span> <span class="token function">getPos</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token punctuation">{</span>x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">abstract</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Tank</span> <span class="token keyword">extends</span> <span class="token class-name">Animation</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;tk&#39;</span>
	<span class="token keyword">public</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Player</span> <span class="token keyword">extends</span> <span class="token class-name">Animation</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;p&#39;</span>
	<span class="token keyword">public</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u62BD\u8C61\u7C7B\u4E0D\u80FD\u88AB\u76F4\u63A5\u4F7F\u7528\uFF0C\u53EA\u80FD\u88AB\u7EE7\u627F</p></blockquote><h2 id="interface" tabindex="-1"><a class="header-anchor" href="#interface" aria-hidden="true">#</a> Interface</h2><p>\u63A5\u53E3\u7528\u4E8E\u63CF\u8FF0\u7C7B\u548C\u5BF9\u8C61\u7684\u7ED3\u6784</p><ul><li>\u4F7F\u9879\u76EE\u4E2D\u4E0D\u540C\u6587\u4EF6\u4F7F\u7528\u7684\u5BF9\u8C61\u4FDD\u6301\u7EDF\u4E00\u7684\u89C4\u8303</li><li>\u4F7F\u7528\u63A5\u53E3\u4E5F\u4F1A\u652F\u6709\u89C4\u8303\u66F4\u597D\u7684\u4EE3\u7801\u63D0\u793A</li></ul><h3 id="\u62BD\u8C61\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u62BD\u8C61\u7C7B" aria-hidden="true">#</a> \u62BD\u8C61\u7C7B</h3><p>\u4E0B\u9762\u662F\u62BD\u8C61\u7C7B\u4E0E\u63A5\u53E3\u7684\u7ED3\u5408\u4F7F\u7528</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">AnimationInterface</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token builtin">string</span>
	<span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Animation</span> <span class="token punctuation">{</span>
	<span class="token keyword">protected</span> <span class="token function">getPos</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token punctuation">{</span>x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Tank</span> <span class="token keyword">extends</span> <span class="token class-name">Animation</span> <span class="token keyword">implements</span> <span class="token class-name">AnimationInterface</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;tk&#39;</span>
	<span class="token keyword">public</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Player</span> <span class="token keyword">extends</span> <span class="token class-name">Animation</span> <span class="token keyword">implements</span> <span class="token class-name">AnimationInterface</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;p&#39;</span>
	<span class="token keyword">public</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61" aria-hidden="true">#</a> \u5BF9\u8C61</h3><p>\u4E0B\u9762\u4F7F\u7528\u63A5\u53E3\u6765\u7EA6\u675F\u5BF9\u8C61</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">UserInterface</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token builtin">string</span>
	age<span class="token operator">:</span> <span class="token builtin">number</span>
	isLock<span class="token operator">:</span> <span class="token builtin">boolean</span>
	<span class="token function">info</span><span class="token punctuation">(</span>other<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span>
	<span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token comment">// \u6DFB\u52A0\u4EFB\u610F\u5C5E\u6027</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> u<span class="token operator">:</span> UserInterface <span class="token operator">=</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token string">&#39;mkimq&#39;</span><span class="token punctuation">,</span>
	age<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
	isLock<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
	<span class="token function">info</span><span class="token punctuation">(</span>o<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\u5DF2\u7ECF</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\u5C81\u4E86,</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>o<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u63A5\u53E3\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#\u63A5\u53E3\u7EE7\u627F" aria-hidden="true">#</a> \u63A5\u53E3\u7EE7\u627F</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">UserInterface</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token builtin">string</span>
	age<span class="token operator">:</span> <span class="token builtin">number</span>
	isLock<span class="token operator">:</span> <span class="token builtin">boolean</span>
	<span class="token function">info</span><span class="token punctuation">(</span>other<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span>
	<span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token comment">// \u6DFB\u52A0\u4EFB\u610F\u5C5E\u6027</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Boy</span> <span class="token keyword">extends</span> <span class="token class-name">UserInterface</span> <span class="token punctuation">{</span>
	sex<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5BF9\u8C61\u53EF\u4EE5\u4F7F\u7528\u5B9E\u73B0\u591A\u4E2A\u63A5\u53E3\uFF0C\u591A\u4E2A\u63A5\u53E3\u7528\u9017\u53F7\u8FDE\u63A5</p></blockquote><h3 id="\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570" aria-hidden="true">#</a> \u51FD\u6570</h3><p>\u4E0B\u9762\u4F7F\u7528 UserInterface \u63A5\u53E3\u7EA6\u675F\u51FD\u6570\u7684\u53C2\u6570\u4E0E\u8FD4\u56DE\u503C</p><ul><li>\u4F1A\u6839\u636E\u63A5\u53E3\u89C4\u8303\u63D0\u793A\u4EE3\u7801\u63D0\u793A</li><li>\u4E25\u683C\u7EA6\u675F\u53C2\u6570\u7C7B\u578B\uFF0C\u7EF4\u62A4\u4EE3\u7801\u5B89\u5168</li></ul><h4 id="\u51FD\u6570\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u53C2\u6570" aria-hidden="true">#</a> \u51FD\u6570\u53C2\u6570</h4><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">UserInterface</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token builtin">string</span>
	age<span class="token operator">:</span> <span class="token builtin">number</span>
	isLock<span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">lockUser</span><span class="token punctuation">(</span>user<span class="token operator">:</span> UserInterface<span class="token punctuation">,</span> state<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u51FD\u6570\u58F0\u660E" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u58F0\u660E" aria-hidden="true">#</a> \u51FD\u6570\u58F0\u660E</h4><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Fn</span> <span class="token punctuation">{</span>
	<span class="token punctuation">(</span>str<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> get<span class="token operator">:</span> <span class="token function-variable function">Fn</span> <span class="token operator">=</span> <span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">!</span><span class="token operator">!</span>s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6784\u9020\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u6784\u9020\u51FD\u6570" aria-hidden="true">#</a> \u6784\u9020\u51FD\u6570</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">UserInterface</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token builtin">string</span>
	age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
	info<span class="token operator">:</span> UserInterface

	<span class="token function">constructor</span><span class="token punctuation">(</span>user<span class="token operator">:</span> UserInterface<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>info <span class="token operator">=</span> user
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4" aria-hidden="true">#</a> \u6570\u7EC4</h3><p>\u5BF9\u6570\u7EC4\u7C7B\u578B\u4F7F\u7528\u63A5\u53E3\u8FDB\u884C\u7EA6\u675F</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">UserInterface</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token builtin">string</span>
	age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> user<span class="token operator">:</span> UserInterface<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u679A\u4E3E" tabindex="-1"><a class="header-anchor" href="#\u679A\u4E3E" aria-hidden="true">#</a> \u679A\u4E3E</h3><p>\u4E0B\u9762\u662F\u4F7F\u7528\u679A\u4E3E\u8BBE\u7F6E\u6027\u522B</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">enum</span> SexType <span class="token punctuation">{</span>
	<span class="token constant">BOY</span><span class="token punctuation">,</span>
	<span class="token constant">GIRL</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">UserInterface</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
	sex<span class="token operator">:</span> SexType
<span class="token punctuation">}</span>

<span class="token keyword">const</span> u<span class="token operator">:</span> UserInterface <span class="token operator">=</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token string">&#39;mkimq&#39;</span><span class="token punctuation">,</span>
	sex<span class="token operator">:</span> SexType<span class="token punctuation">.</span><span class="token constant">BOY</span>
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>u<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> type</h2><p>type \u4E0E interface \u975E\u5E38\u76F8\u4F3C\u90FD\u53EF\u4EE5\u63CF\u8FF0\u4E00\u4E2A\u5BF9\u8C61\u6216\u8005\u51FD\u6570\uFF0C\u4F7F\u7528 type \u7528\u4E8E\u5B9A\u4E49\u7C7B\u578B\u7684\u522B\u540D\uFF0C\u662F\u975E\u5E38\u7075\u6D3B\u7684\u7C7B\u578B\u5B9A\u4E49\u65B9\u5F0F\u3002</p><ul><li>type \u4E0E interface \u90FD\u662F\u53EF\u4EE5\u8FDB\u884C\u6269\u5C55</li><li>\u4F7F\u7528 type \u76F8\u6BD4 interface \u66F4\u7075\u6D3B</li><li>\u5982\u679C\u4F60\u719F\u6089\u5176\u4ED6\u7F16\u7A0B\u8BED\u8A00\uFF0C\u4F7F\u7528 interface \u4F1A\u8BA9\u4F60\u66F4\u4EB2\u5207</li><li>\u4F7F\u7528\u7C7B(class) \u65F6\u5EFA\u8BAE\u4F7F\u7528\u63A5\u53E3\uFF0C\u8FD9\u53EF\u4EE5\u4E0E\u5176\u4ED6\u7F16\u7A0B\u8BED\u8A00\u4FDD\u6301\u7EDF\u4E00</li><li>\u51B3\u5B9A\u4F7F\u7528\u54EA\u4E2A\u65B9\u5F0F\u58F0\u660E\u7C7B\u578B\uFF0C\u6700\u7EC8\u8FD8\u662F\u770B\u56E2\u961F\u7684\u89C4\u8303</li></ul><h3 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> \u57FA\u672C\u4F7F\u7528</h3><p>\u4E0B\u9762\u662F\u4F7F\u7528 type \u58F0\u660E\u5BF9\u8C61\u7C7B\u578B</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">User</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
	age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> u<span class="token operator">:</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token string">&#39;mkimq&#39;</span><span class="token punctuation">,</span>
	age<span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7528 type \u58F0\u660E\u51FD\u6570\u7684\u65B9\u5F0F</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Fn</span> <span class="token operator">=</span> <span class="token punctuation">(</span>str<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span>

<span class="token keyword">const</span> fn<span class="token operator">:</span> <span class="token function-variable function">Fn</span> <span class="token operator">=</span> <span class="token punctuation">(</span>str<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">!</span><span class="token operator">!</span>str
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7C7B\u578B\u522B\u540D" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u522B\u540D" aria-hidden="true">#</a> \u7C7B\u578B\u522B\u540D</h3><p>type \u53EF\u4EE5\u4E3A number\u3001string\u3001boolean\u3001object \u7B49\u57FA\u672C\u7C7B\u578B\u5B9A\u4E49\u522B\u540D\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u57FA\u672C\u7C7B\u578B\u522B\u540D</span>
<span class="token keyword">type</span> <span class="token class-name">IsLogin</span> <span class="token operator">=</span> <span class="token builtin">boolean</span>
<span class="token comment">// \u5B9A\u4E49\u8054\u5408\u7C7B\u578B</span>
<span class="token keyword">type</span> <span class="token class-name">Sex</span> <span class="token operator">=</span> <span class="token string">&#39;boy&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;girl&#39;</span>

<span class="token keyword">type</span> <span class="token class-name">User</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    isLogin<span class="token operator">:</span> IsLogin<span class="token punctuation">,</span>
    sex<span class="token operator">:</span> Sex
<span class="token punctuation">}</span>

<span class="token keyword">const</span> u<span class="token operator">:</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
    isLogin<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    sex<span class="token operator">:</span> <span class="token string">&#39;boy&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u58F0\u660E\u5143\u7EC4</span>
<span class="token keyword">const</span> users<span class="token operator">:</span> <span class="token punctuation">[</span>User<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>u<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7D22\u5F15\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u7D22\u5F15\u7C7B\u578B" aria-hidden="true">#</a> \u7D22\u5F15\u7C7B\u578B</h3><p>type \u4E0E interface \u5728\u7D22\u5F15\u7C7B\u578B\u4E0A\u7684\u58F0\u660E\u662F\u76F8\u540C\u7684</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">UserType</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u58F0\u660E\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#\u58F0\u660E\u7EE7\u627F" aria-hidden="true">#</a> \u58F0\u660E\u7EE7\u627F</h3><p>typescript \u4F1A\u5C06\u540C\u540D\u63A5\u53E3\u58F0\u660E\u8FDB\u884C\u5408\u5E76</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
	age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> u<span class="token operator">:</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token string">&#39;mkimq&#39;</span><span class="token punctuation">,</span>
	age<span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>interface\u4E5F\u53EF\u4EE5\u4F7F\u7528 extends \u7EE7\u627F</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Admin</span> <span class="token punctuation">{</span>
	role<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token keyword">extends</span> <span class="token class-name">Admin</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> u<span class="token operator">:</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token string">&#39;mkimq&#39;</span><span class="token punctuation">,</span>
	role<span class="token operator">:</span> <span class="token string">&#39;admin&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>interface \u4E5F\u53EF\u4EE5 extends \u7EE7\u627F type</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Admin</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
	role<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token keyword">extends</span> <span class="token class-name">Admin</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> u<span class="token operator">:</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token string">&#39;mkimq&#39;</span><span class="token punctuation">,</span>
	role<span class="token operator">:</span> <span class="token string">&#39;admin&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>type \u4E0E interface \u4E0D\u540C\uFF0C\u5B58\u5728\u540C\u540D\u7684 type \u65F6\u5C06\u662F\u4E0D\u5141\u8BB8\u7684</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// error</span>
<span class="token keyword">type</span> <span class="token class-name">User</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">User</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
	age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528&amp; \u6765\u8FDB\u884C interface \u7684\u5408\u5E76</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Name</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Age</span> <span class="token punctuation">{</span>
	age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">User</span> <span class="token operator">=</span> Name <span class="token operator">&amp;</span> Age
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>type \u7C7B\u578B\u7684\u58F0\u660E\u5408\u5E76</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Name</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">Age</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
	age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">User</span> <span class="token operator">=</span> Name <span class="token operator">&amp;</span> Age
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0B\u9762\u58F0\u660E\u7684\u662F\u6EE1\u8DB3\u4EFB\u4F55\u4E00\u4E2A type \u58F0\u660E\u5373\u53EF</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Name</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">Age</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
	age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">User</span> <span class="token operator">=</span> Name <span class="token operator">|</span> Age
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="implements" tabindex="-1"><a class="header-anchor" href="#implements" aria-hidden="true">#</a> implements</h3><p>class \u53EF\u4EE5\u4F7F\u7528 implements \u6765\u5B9E\u73B0 type \u6216 interface</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Age</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token keyword">implements</span> <span class="token class-name">Age</span> <span class="token punctuation">{</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">18</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,111),i=[p];function o(c,l){return s(),a("div",null,i)}var u=n(t,[["render",o],["__file","class.html.vue"]]);export{u as default};
