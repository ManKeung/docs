import{_ as n,o as s,c as a,a as e}from"./app.a5405d0d.js";const i={},l=e(`<h1 id="\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5757" aria-hidden="true">#</a> \u6A21\u5757</h1><p>.py\u6587\u4EF6\u5C31\u662F\u4E00\u4E2A\u6A21\u5757,\u6CE8\u610F\u547D\u540D\u4E0D\u8981\u548C\u5173\u952E\u5B57\u6709\u51B2\u7A81</p><ul><li>\u5BFC\u5165</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> \u6A21\u5757

<span class="token comment"># \u9650\u5236\u6A21\u5757\u540D\u5B57</span>
<span class="token keyword">import</span> \u6A21\u5757 <span class="token keyword">as</span> a

<span class="token comment"># from</span>
<span class="token comment"># from \u6A21\u5757 import \u5B50 as a</span>
<span class="token keyword">from</span> \u6A21\u5757 <span class="token keyword">import</span> \u5B50

<span class="token comment"># \u5BFC\u5165\u6240\u6709</span>
<span class="token comment"># \u4E0D\u5EFA\u8BAE\u8FD9\u6837</span>
<span class="token keyword">import</span> <span class="token operator">*</span>
<span class="token keyword">from</span> \u6A21\u5757 <span class="token keyword">import</span> <span class="token operator">*</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u641C\u7D22\u6A21\u5757</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> random

<span class="token keyword">print</span><span class="token punctuation">(</span>random<span class="token punctuation">.</span>__file__<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u6A21\u5757</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> mk_msg
<span class="token builtin class-name">cd</span> mk_msg
<span class="token function">touch</span> __init__.py
<span class="token function">touch</span> msg.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>msg <span class="token operator">=</span> <span class="token string">&#39;hello module&#39;</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53D1\u5E03\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u53D1\u5E03\u6A21\u5757" aria-hidden="true">#</a> \u53D1\u5E03\u6A21\u5757</h2><ul><li>\u6587\u4EF6\u76EE\u5F55\u7ED3\u6784</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u251C\u2500\u2500 mk_msg
\u2502   \u251C\u2500\u2500 __init__.py
\u2502   \u251C\u2500\u2500 receive_msg.py
\u2502   \u2514\u2500\u2500 send_msg.py
\u251C\u2500\u2500 setup.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># setup.py</span>
<span class="token keyword">from</span> distutils<span class="token punctuation">.</span>core <span class="token keyword">import</span> setup

setup<span class="token punctuation">(</span>
    name<span class="token operator">=</span><span class="token string">&#39;mk_msg&#39;</span><span class="token punctuation">,</span>  <span class="token comment"># \u5305\u540D</span>
    version<span class="token operator">=</span><span class="token string">&#39;1.0&#39;</span><span class="token punctuation">,</span>  <span class="token comment"># \u7248\u672C\u53F7</span>
    description<span class="token operator">=</span><span class="token string">&#39;mankeung&quot;s \u53D1\u9001\u548C\u63A5\u6536\u6D88\u606F\u6A21\u5757&#39;</span><span class="token punctuation">,</span>  <span class="token comment"># \u63CF\u8FF0\u4FE1\u606F</span>
    long_description<span class="token operator">=</span><span class="token string">&#39;\u5B8C\u6574\u7684\u53D1\u9001\u548C\u63A5\u6536\u6D88\u606F\u6A21\u5757&#39;</span><span class="token punctuation">,</span>  <span class="token comment"># \u5B8C\u6574\u63CF\u8FF0\u4FE1\u606F</span>
    author<span class="token operator">=</span><span class="token string">&#39;mankeung&#39;</span><span class="token punctuation">,</span>  <span class="token comment"># \u4F5C\u8005</span>
    author_email<span class="token operator">=</span><span class="token string">&#39;mankeung1011@gmail.com&#39;</span><span class="token punctuation">,</span>  <span class="token comment"># \u4F5C\u8005\u90AE\u7BB1</span>
    url<span class="token operator">=</span><span class="token string">&#39;www.mkimq.com&#39;</span><span class="token punctuation">,</span>  <span class="token comment"># \u4E3B\u9875</span>
    py_modules<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;mk_msg.send_message&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;mk_msg.receive_message&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u6784\u5EFA</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>python setup.py build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u53D1\u5E03\u538B\u7F29\u5305</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>python setup.py sdist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u5B89\u88C5\u6A21\u5757</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> mk_msg-1.0.tar.gz
<span class="token function">sudo</span> python setup.py <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5378\u8F7D\u6A21\u5757</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /urs/local/lib/python3.7/dist-packages/
<span class="token function">sudo</span> <span class="token function">rm</span> <span class="token parameter variable">-r</span> hm_msg*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,21),p=[l];function t(c,o){return s(),a("div",null,p)}const r=n(i,[["render",t],["__file","module.html.vue"]]);export{r as default};
