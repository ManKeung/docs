import{_ as s,r as i,o as d,c as l,b as e,d as n,e as r,a as o}from"./app.3f42ccdb.js";const c={},t={id:"n",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#n","aria-hidden":"true"},"#",-1),p={href:"https://github.com/tj/n",target:"_blank",rel:"noopener noreferrer"},h=o(`<h2 id="ubuntu\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#ubuntu\u5B89\u88C5" aria-hidden="true">#</a> ubuntu\u5B89\u88C5</h2><ul><li>\u9996\u5148\u5B89\u88C5npm\u5305\u7BA1\u7406\u5DE5\u5177</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token function">npm</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u5B89\u88C5</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u9A8C\u8BC1\u662F\u5426\u5B89\u88C5\u6210\u529F</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>n <span class="token parameter variable">-V</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u5B89\u88C5node</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>n lts <span class="token comment"># n 10.16.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5B89\u88C5node\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5node\u7248\u672C" aria-hidden="true">#</a> \u5B89\u88C5node\u7248\u672C</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>n stable <span class="token comment"># \u5B89\u88C5\u7A33\u5B9A\u7684\u5B98\u65B9\u7248\u672C</span>
n lts <span class="token comment"># \u5B89\u88C5\u6700\u65B0\u7684LTS\u5B98\u65B9\u7248\u672C</span>
n latest <span class="token comment"># \u5B89\u88C5\u6700\u65B0\u7684node\u7248\u672C</span>
n <span class="token operator">&lt;</span>version<span class="token operator">&gt;</span> <span class="token comment"># \u5B89\u88C5\u6307\u5B9Anode\u7248\u672C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5217\u51FA\u53EF\u7528\u7684\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u5217\u51FA\u53EF\u7528\u7684\u7248\u672C" aria-hidden="true">#</a> \u5217\u51FA\u53EF\u7528\u7684\u7248\u672C</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>n ls-remote
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5217\u51FA\u5B89\u88C5\u7684node" tabindex="-1"><a class="header-anchor" href="#\u5217\u51FA\u5B89\u88C5\u7684node" aria-hidden="true">#</a> \u5217\u51FA\u5B89\u88C5\u7684node</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>n <span class="token function">ls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="node\u7248\u672C\u5207\u6362" tabindex="-1"><a class="header-anchor" href="#node\u7248\u672C\u5207\u6362" aria-hidden="true">#</a> node\u7248\u672C\u5207\u6362</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>n <span class="token comment"># \u4E0A\u4E0B\u7BAD\u5934\u9009\u62E9\uFF0C\u56DE\u8F66\u5207\u6362</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5378\u8F7Dnode" tabindex="-1"><a class="header-anchor" href="#\u5378\u8F7Dnode" aria-hidden="true">#</a> \u5378\u8F7Dnode</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>n <span class="token function">rm</span> <span class="token operator">&lt;</span>version<span class="token operator">&gt;</span> <span class="token comment"># n - &lt;version&gt; \u5220\u9664\u7F13\u5B58\u7248\u672C</span>
n uninstall <span class="token operator">&lt;</span>version<span class="token operator">&gt;</span> <span class="token comment"># \u5220\u9664node&amp;npm</span>
n prune <span class="token comment"># \u5220\u9664\u9664\u5F53\u524D\u7248\u672C\u5916\u6240\u6709\u5176\u4ED6\u7248\u672C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19);function m(v,b){const a=i("ExternalLinkIcon");return d(),l("div",null,[e("h1",t,[u,n(),e("a",p,[n("n"),r(a)])]),h])}const k=s(c,[["render",m],["__file","n.html.vue"]]);export{k as default};
