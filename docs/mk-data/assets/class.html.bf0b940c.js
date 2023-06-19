import{_ as n,o as s,c as a,a as e}from"./app.6afbe0de.js";const p={},t=e(`<h1 id="\u9762\u5411\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u9762\u5411\u5BF9\u8C61" aria-hidden="true">#</a> \u9762\u5411\u5BF9\u8C61</h1><ul><li>\u57FA\u672C\u4F7F\u7528</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token string">&#39;\u732B&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u8FD9\u662F\u4E00\u4E2A\u521D\u59CB\u5316\u65B9\u6CD5&#39;</span><span class="token punctuation">)</span>

        <span class="token comment"># self.\u5C5E\u6027\u540D = \u5C5E\u6027\u7684\u521D\u59CB\u503C</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name

        <span class="token comment"># \u5B9E\u6709\u5C5E\u6027</span>
        self<span class="token punctuation">.</span>__zr <span class="token operator">=</span> <span class="token number">18</span>

    <span class="token keyword">def</span> <span class="token function">__zr</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># \u5728\u5BF9\u8C61\u65B9\u6CD5\u5185\u90E8\u65F6\u53EF\u4EE5\u8BBF\u95EE\u79C1\u6709\u5C5E\u6027\u7684</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;%s\u7684\u4E3B\u4EBA%s&#39;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>name<span class="token punctuation">,</span> self<span class="token punctuation">.</span>__zr<span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">eat</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;%s\u7231\u5403&lt;\u3002)#)))\u2266&#39;</span> <span class="token operator">%</span> self<span class="token punctuation">.</span>name<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">__del__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;%s\u53BB\u4E86&#39;</span> <span class="token operator">%</span> self<span class="token punctuation">.</span>name<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">__str__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># \u5FC5\u987B\u8FD4\u56DE\u4E00\u4E2A\u5B57\u7B26\u4E32</span>
        <span class="token comment"># return super().__str__() + &#39;\u6211\u662F\u5C0F\u732B&#39;</span>
        <span class="token keyword">return</span> <span class="token string">&#39;\u6211\u662F\u5C0F\u732B[%s]&#39;</span> <span class="token operator">%</span> self<span class="token punctuation">.</span>name


<span class="token comment"># \u81EA\u52A8\u8C03\u7528\u521D\u59CB\u5316\u65B9\u6CD5 __init__</span>
tom <span class="token operator">=</span> Cat<span class="token punctuation">(</span><span class="token string">&#39;Tom&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>tom<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>tom<span class="token punctuation">)</span>
<span class="token comment"># del \u5173\u952E\u5B57\u53EF\u4EE5\u5220\u9664\u4E00\u4E2A\u5BF9\u8C61</span>
<span class="token keyword">del</span> tom

lazy_cat <span class="token operator">=</span> Cat<span class="token punctuation">(</span><span class="token string">&#39;\u61D2\u732B&#39;</span><span class="token punctuation">)</span>
lazy_cat<span class="token punctuation">.</span>eat<span class="token punctuation">(</span><span class="token punctuation">)</span>

cat <span class="token operator">=</span> Cat<span class="token punctuation">(</span><span class="token punctuation">)</span>

cat<span class="token punctuation">.</span>eat<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># \u79C1\u6709\u5C5E\u6027\u5728\u5916\u754C\u4E0D\u80FD\u8BBF\u95EE</span>
<span class="token comment"># print(cat.zr)</span>
<span class="token comment"># \u79C1\u6709\u65B9\u6CD5\uFF0C\u540C\u6837\u4E0D\u80FD\u88AB\u5916\u754C\u8C03\u7528</span>
<span class="token comment"># cat.__zr()</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9762\u5411\u5BF9\u8C61\u7279\u5F81" tabindex="-1"><a class="header-anchor" href="#\u9762\u5411\u5BF9\u8C61\u7279\u5F81" aria-hidden="true">#</a> \u9762\u5411\u5BF9\u8C61\u7279\u5F81</h2><ul><li>\u4F7F\u7528\u7EE7\u627F</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Animal</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">eat</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u5403&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">drink</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u559D&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u8DD1&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">sleep</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u7761&#39;</span><span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span>Animal<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token comment"># \u5728\u5B50\u7C7B\u7684\u5BF9\u8C61\u65B9\u6CD5\u4E2D\uFF0C\u4E0D\u80FD\u8BBF\u95EE\u7236\u7C7B\u7684\u79C1\u6709\u5C5E\u6027</span>
    <span class="token comment"># \u5728\u5B50\u7C7B\u7684\u5BF9\u8C61\u65B9\u6CD5\u4E2D\uFF0C\u4E0D\u80FD\u8BBF\u95EE\u8C03\u7528\u7236\u7C7B\u7684\u79C1\u6709\u65B9\u6CD5</span>

    <span class="token keyword">def</span> <span class="token function">bark</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># \u8986\u76D6\u7236\u7C7B\u65B9\u6CD5</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u6C6A\u6C6A\u53EB&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">eat</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># \u9488\u5BF9\u5B50\u7C7B\u7279\u6B8A\u7684\u9700\u6C42\uFF0C\u7F16\u5199\u4EE3\u7801\u554A</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u5565\u90FD\u6562\u5403&#39;</span><span class="token punctuation">)</span>

        <span class="token comment"># \u4F7F\u7528super() \u8C03\u7528\u539F\u672C\u5728\u7236\u7C7B\u4E2D\u7684\u65B9\u6CD5</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>eat<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># \u7236\u7C7B\u540D.\u65B9\u6CD5(self)</span>
        <span class="token comment"># Dog.bark(self) # \u4E0D\u63A8\u8350\u4F7F\u7528</span>

        <span class="token comment"># \u589E\u52A0\u5176\u4ED6\u5B50\u7C7B\u7684\u4EE3\u7801</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;*&amp;^%$$@!#$%&amp;&#39;</span><span class="token punctuation">)</span>


<span class="token comment"># \u521B\u5EFA\u4E00\u4E2A\u5BF9\u8C61 - \u72D7\u5BF9\u8C61</span>
wangcai <span class="token operator">=</span> Dog<span class="token punctuation">(</span><span class="token punctuation">)</span>

wangcai<span class="token punctuation">.</span>eat<span class="token punctuation">(</span><span class="token punctuation">)</span>
wangcai<span class="token punctuation">.</span>drink<span class="token punctuation">(</span><span class="token punctuation">)</span>
wangcai<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span>
wangcai<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token punctuation">)</span>
wangcai<span class="token punctuation">.</span>bark<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u591A\u7EE7\u627F</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">test</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;test \u65B9\u6CD5&#39;</span><span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">B</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">demo</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;demo \u65B9\u6CD5&#39;</span><span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">C</span><span class="token punctuation">(</span>A<span class="token punctuation">,</span> B<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>


<span class="token comment"># \u521B\u5EFA\u5B50\u7C7B\u5BF9\u8C61</span>
c <span class="token operator">=</span> C<span class="token punctuation">(</span><span class="token punctuation">)</span>

c<span class="token punctuation">.</span>demo<span class="token punctuation">(</span><span class="token punctuation">)</span>
c<span class="token punctuation">.</span>test<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># \u786E\u5B9AC\u7C7B\u5BF9\u8C61\u8C03\u7528\u7684\u987A\u5E8F</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>C<span class="token punctuation">.</span>__mro__<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u591A\u6001</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name

    <span class="token keyword">def</span> <span class="token function">game</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;%s\u8E66\u8E66\u8DF3\u8DF3\u7684\u73A9\u800D...&#39;</span> <span class="token operator">%</span> self<span class="token punctuation">.</span>name<span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">XioaTianQuan</span><span class="token punctuation">(</span>Dog<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">game</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;%s\u98DE\u5230\u5929\u4E0A\u73A9\u800D...&#39;</span> <span class="token operator">%</span> self<span class="token punctuation">.</span>name<span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name

    <span class="token keyword">def</span> <span class="token function">game_with_dog</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> dog<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;%s\u548C%s\u4E00\u8D77\u73A9\u800D&#39;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>name<span class="token punctuation">,</span> dog<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span>

        <span class="token comment"># \u8BA9\u72D7\u73A9\u800D</span>
        dog<span class="token punctuation">.</span>game<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token comment"># \u521B\u5EFA\u4E00\u4E2A\u72D7\u5BF9\u8C61</span>
<span class="token comment"># wangcai = Dog(&#39;\u65FA\u8D22&#39;)</span>
wangcai <span class="token operator">=</span> XioaTianQuan<span class="token punctuation">(</span><span class="token string">&#39;\u54EE\u5929\u72AC&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># \u521B\u5EFA\u4E00\u4E2A\u5C0F\u660E\u5BF9\u8C61</span>
xiaoming <span class="token operator">=</span> Person<span class="token punctuation">(</span><span class="token string">&#39;\u5C0F\u660E&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># \u8BA9\u5C0F\u660E\u548C\u72D7\u73A9\u7684\u65B9\u6CD5</span>
xiaoming<span class="token punctuation">.</span>game_with_dog<span class="token punctuation">(</span>wangcai<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u7C7B\u5C5E\u6027</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Tool</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token comment"># \u4F7F\u7528\u8D4B\u503C\u8BED\u53E5\u5B9A\u4E49\u7C7B\u5C5E\u6027\uFF0C\u8BB0\u5F55\u6240\u6709\u5DE5\u5177\u5BF9\u8C61\u7684\u6570\u91CF</span>
    count <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name

        <span class="token comment"># \u8BA9\u7C7B\u5C5E\u6027\u7684\u503C+1</span>
        Tool<span class="token punctuation">.</span>count <span class="token operator">+=</span> <span class="token number">1</span>


<span class="token comment"># \u521B\u5EFA\u5DE5\u5177</span>
tool1 <span class="token operator">=</span> Tool<span class="token punctuation">(</span><span class="token string">&#39;\u65A7\u5934&#39;</span><span class="token punctuation">)</span>
tool2 <span class="token operator">=</span> Tool<span class="token punctuation">(</span><span class="token string">&#39;\u6994\u5934&#39;</span><span class="token punctuation">)</span>
tool3 <span class="token operator">=</span> Tool<span class="token punctuation">(</span><span class="token string">&#39;\u6C34\u6876&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># \u8F93\u51FA\u5DE5\u5177\u5BF9\u8C61\u7684\u603B\u6570</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>Tool<span class="token punctuation">.</span>count<span class="token punctuation">)</span>
<span class="token comment"># print(tool1.count) # \u4E0D\u63A8\u8350</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u7C7B\u65B9\u6CD5</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Game</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token comment"># \u5386\u53F2\u6700\u9AD8\u5206</span>
    top_score <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> player_name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>player_name <span class="token operator">=</span> player_name

    <span class="token comment"># \u9759\u6001\u65B9\u6CD5</span>
    <span class="token decorator annotation punctuation">@staticmethod</span>
    <span class="token keyword">def</span> <span class="token function">show_help</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u5E2E\u52A9\u4FE1\u606F\uFF1A\u8BA9\u50F5\u5C38\u8FDB\u5165\u5927\u95E8&#39;</span><span class="token punctuation">)</span>

    <span class="token comment"># \u7C7B\u65B9\u6CD5</span>
    <span class="token decorator annotation punctuation">@classmethod</span>
    <span class="token keyword">def</span> <span class="token function">show_top_score</span><span class="token punctuation">(</span>cls<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u5386\u53F2\u6700\u9AD8\u5206\uFF1A%d&#39;</span> <span class="token operator">%</span> cls<span class="token punctuation">.</span>top_score<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">start_game</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;%s\u5F00\u59CB\u6E38\u620F\u4E86...&#39;</span> <span class="token operator">%</span> self<span class="token punctuation">.</span>player_name<span class="token punctuation">)</span>


<span class="token comment"># \u67E5\u770B\u6E38\u620F\u7684\u5E2E\u52A9\u4FE1\u606F</span>
Game<span class="token punctuation">.</span>show_help<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># \u67E5\u770B\u5386\u53F2\u6700\u9AD8\u5206</span>
Game<span class="token punctuation">.</span>show_top_score<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># \u521B\u5EFA\u6E38\u620F\u5BF9\u8C61</span>
game <span class="token operator">=</span> Game<span class="token punctuation">(</span><span class="token string">&#39;\u5C0F\u660E&#39;</span><span class="token punctuation">)</span>

game<span class="token punctuation">.</span>start_game<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>__new__\u65B9\u6CD5</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">MusicPlayer</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__new__</span><span class="token punctuation">(</span>cls<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># \u521B\u5EFA\u5BF9\u8C61\u65F6new\u65B9\u6CD5\u4F1A\u88AB\u81EA\u52A8\u8C03\u7528</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u521B\u5EFA\u5BF9\u8C61\uFF0C\u5206\u914D\u7A7A\u95F4&#39;</span><span class="token punctuation">)</span>

        <span class="token comment"># \u4E3A\u5BF9\u8C61\u5206\u914D\u7A7A\u95F4</span>
        instance <span class="token operator">=</span> <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__new__<span class="token punctuation">(</span>cls<span class="token punctuation">)</span>

        <span class="token comment"># \u8FD4\u56DE\u5BF9\u8C61\u7684\u5F15\u7528</span>
        <span class="token keyword">return</span> instance

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u97F3\u4E50\u64AD\u653E\u5668\u521D\u59CB\u5316&#39;</span><span class="token punctuation">)</span>


<span class="token comment"># \u521B\u5EFA\u64AD\u653E\u5668\u5BF9\u8C61</span>
player <span class="token operator">=</span> MusicPlayer<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>player<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5355\u4F8B\u521D\u59CB\u5316\u4E00\u6B21</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">MusicPlayer</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token comment"># \u8BB0\u5F55\u7B2C\u4E00\u4E2A\u521B\u5EFA\u5BF9\u8C61\u7684\u5F15\u7528</span>
    instance <span class="token operator">=</span> <span class="token boolean">None</span>

    <span class="token comment"># \u8BB0\u5F55\u662F\u5426\u6267\u884C\u8FC7\u521D\u59CB\u5316\u52A8\u4F5C</span>
    init_flag <span class="token operator">=</span> <span class="token boolean">False</span>

    <span class="token keyword">def</span> <span class="token function">__new__</span><span class="token punctuation">(</span>cls<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>

        <span class="token comment"># \u5224\u65AD\u7C7B\u5C5E\u6027\u662F\u5426\u662F\u7A7A\u5BF9\u8C61</span>
        <span class="token keyword">if</span> cls<span class="token punctuation">.</span>instance <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            <span class="token comment"># \u8C03\u7528\u7236\u7C7B\u7684\u65B9\u6CD5\uFF0C\u4E3A\u7B2C\u4E00\u4E2A\u5BF9\u8C61\u5206\u914D\u7A7A\u95F4</span>
            cls<span class="token punctuation">.</span>instance <span class="token operator">=</span> <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__new__<span class="token punctuation">(</span>cls<span class="token punctuation">)</span>

        <span class="token comment"># \u8FD4\u56DE\u7C7B\u5C5E\u6027\u4FDD\u5B58\u7684\u5BF9\u8C61\u5F15\u7528</span>
        <span class="token keyword">return</span> cls<span class="token punctuation">.</span>instance

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>

        <span class="token comment"># \u5224\u65AD\u662F\u5426\u6267\u884C\u8FC7\u521D\u59CB\u5316\u52A8\u4F5C</span>
        <span class="token keyword">if</span> MusicPlayer<span class="token punctuation">.</span>init_flag<span class="token punctuation">:</span>
            <span class="token keyword">return</span>

        <span class="token comment"># \u5982\u679C\u6CA1\u6709\u6267\u884C\u8FC7\uFF0C\u518D\u6267\u884C\u521D\u59CB\u5316\u52A8\u4F5C</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u64AD\u653E\u5668\u521D\u59CB\u5316&#39;</span><span class="token punctuation">)</span>

        <span class="token comment"># \u4FEE\u6539\u7C7B\u5C5E\u6027\u7684\u6807\u8BB0</span>
        MusicPlayer<span class="token punctuation">.</span>init_flag <span class="token operator">=</span> <span class="token boolean">True</span>


<span class="token comment"># \u521B\u5EFA\u591A\u4E2A\u5BF9\u8C61</span>
player1 <span class="token operator">=</span> MusicPlayer<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>player1<span class="token punctuation">)</span>

player2 <span class="token operator">=</span> MusicPlayer<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>player2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),c=[t];function i(l,o){return s(),a("div",null,c)}const d=n(p,[["render",i],["__file","class.html.vue"]]);export{d as default};
