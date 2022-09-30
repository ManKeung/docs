import{_ as n,o as s,c as a,a as e}from"./app.bdf3b1f1.js";const t={},p=e(`<h1 id="\u4FBF\u6377\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#\u4FBF\u6377\u5DE5\u5177" aria-hidden="true">#</a> \u4FBF\u6377\u5DE5\u5177</h1><p>\u6B64\u4E13\u9898\u5185\u5BB9\u4E3A\u4E00\u4E9B\u65B9\u4FBF\u7528\u6237\u5FEB\u901F\uFF0C\u4FBF\u6377\u4F7F\u7528\u7684\u5C0F\u5DE5\u5177\uFF0C\u53EF\u80FD\u662FmView\u7684\u4E00\u4E9B\u65B9\u6CD5\u7684\u7B80\u6613\u7248\uFF0C\u6216\u8005\u5BF9uni\u7684\u4E00\u4E9B\u65B9\u6CD5\u8FDB\u884C\u4E8C\u6B21\u5C01\u88C5\uFF0C\u65B9\u4FBF\u7528\u6237 \u5FEB\u901F\u4F7F\u7528\u3002</p><h2 id="sys" tabindex="-1"><a class="header-anchor" href="#sys" aria-hidden="true">#</a> sys()</h2><p>\u6B64\u65B9\u6CD5\u7528\u4E8E\u83B7\u53D6\u8BBE\u5907\u7684\u4FE1\u606F\uFF0C\u76F8\u5F53\u4E8Euni.getSystemInfoSync()\u7684\u6548\u679C</p><p>\u6CE8\u610F\uFF1A<code>mView</code>\u4E2D\u7684<code>navbar</code>\u4F7F\u6709\u4F7F\u7528\u6B64\u65B9\u6CD5\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> sys <span class="token operator">=</span> uni<span class="token punctuation">.</span>$m<span class="token punctuation">.</span><span class="token function">sys</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u65B0\u589EmpW \u5C0F\u7A0B\u5E8F\u80F6\u56CA\u4FE1\u606F</span>
sys<span class="token punctuation">.</span>mpW <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    top<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// \u4E0A\u8FB9\u754C\u5750\u6807 \u5355\u4F4Dpx</span>
    right<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// \u53F3\u8FB9\u754C\u5750\u6807 \u5355\u4F4Dpx</span>
    bottom<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// \u4E0B\u8FB9\u754C\u5750\u6807 \u5355\u4F4Dpx</span>
    left<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// \u5DE6\u8FB9\u754C\u5750\u6807 \u5355\u4F4Dpx</span>
    width<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// \u5BBD\u5EA6</span>
    height<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// \u9AD8\u5EA6</span>
    pad<span class="token operator">:</span> <span class="token number">10</span> <span class="token comment">// \u53F3\u8FB9\u8DDD</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u81EA\u5B9A\u4E49\u5BFC\u822A\u9AD8\u5EA6 \u9ED8\u8BA444px \u5C0F\u7A0B\u5E8F\u6839\u636E\u80F6\u56CA\u8BA1\u7B97</span>
sys<span class="token punctuation">.</span>customBar <span class="token operator">=&gt;</span> <span class="token number">44</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="platform" tabindex="-1"><a class="header-anchor" href="#platform" aria-hidden="true">#</a> platform</h2><p>\u6B64\u5C5E\u6027\u7528\u4E8E\u83B7\u53D6\u5F53\u524D\u8FD0\u884C\u7684\u5E73\u53F0\u540D\u79F0\uFF0C\u76F8\u8F83\u4E8Euni-app\u7CFB\u7EDF\u81EA\u5E26\u7684\u6761\u4EF6\u7F16\u8BD1\u7684\u533A\u522B\u662F\uFF0C\u6B64\u65B9\u5F0F\u8BA9\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7js\u7684if | else if\u8FDB\u884C\u5224\u65AD\uFF0C \u60A8\u53EF\u4EE5\u7ED3\u5408\u5B9E\u9645\u573A\u666F\u8FDB\u884C\u4F7F\u7528\u3002</p><p>\u6CE8\u610F\uFF1A\u6B64\u5C5E\u6027\u8FD4\u56DE\u7684\u7ED3\u679C\uFF0C\u548Cuni-app\u7684\u6761\u4EF6\u7F16\u8BD1\u540D\u79F0\u6709\u5DEE\u522B\uFF0C\u5E76\u4E14\u7ED3\u679C\u90FD\u4E3A\u5C0F\u5199\u3002</p><p>\u5404\u5E73\u53F0\u8FD4\u56DE\u503C\u5982\u4E0B\u8868\uFF1A</p><table><thead><tr><th>\u5E73\u53F0</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td>VUE3\uFF0CHBuilderX 3.2.0+</td><td>vue3</td></tr><tr><td>VUE2</td><td>vue2</td></tr><tr><td>App</td><td>plus</td></tr><tr><td>App nvue</td><td>nvue</td></tr><tr><td>H5</td><td>h5</td></tr><tr><td>\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F</td><td>weixin</td></tr><tr><td>\u652F\u4ED8\u5B9D\u5C0F\u7A0B\u5E8F</td><td>alipay</td></tr><tr><td>\u767E\u5EA6\u5C0F\u7A0B\u5E8F</td><td>baidu</td></tr><tr><td>\u5B57\u8282\u8DF3\u52A8\u5C0F\u7A0B\u5E8F\u3001\u98DE\u4E66\u5C0F\u7A0B\u5E8F</td><td>toutiao</td></tr><tr><td>QQ\u5C0F\u7A0B\u5E8F</td><td>qq</td></tr><tr><td>\u5FEB\u624B\u5C0F\u7A0B\u5E8F</td><td>kuaishou</td></tr><tr><td>360\u5C0F\u7A0B\u5E8F</td><td>360</td></tr><tr><td>\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F/\u652F\u4ED8\u5B9D\u5C0F\u7A0B\u5E8F/\u767E\u5EA6\u5C0F\u7A0B\u5E8F/\u5B57\u8282\u8DF3\u52A8\u5C0F\u7A0B\u5E8F/QQ\u5C0F\u7A0B\u5E8F/360\u5C0F\u7A0B\u5E8F</td><td>mp</td></tr><tr><td>\u5FEB\u5E94\u7528\u901A\u7528(\u5305\u542B\u8054\u76DF\u3001\u534E\u4E3A)</td><td>webview</td></tr><tr><td>\u5FEB\u5E94\u7528\u8054\u76DF</td><td>webview-union</td></tr><tr><td>\u5FEB\u5E94\u7528\u534E\u4E3A</td><td>webview-huawei</td></tr></tbody></table><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> platform <span class="token punctuation">}</span> <span class="token operator">=</span> uni<span class="token punctuation">.</span>$m

<span class="token keyword">if</span> <span class="token punctuation">(</span>platform <span class="token operator">===</span> <span class="token string">&#39;h5&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sleep-value" tabindex="-1"><a class="header-anchor" href="#sleep-value" aria-hidden="true">#</a> sleep(value)</h2><p>\u5EF6\u65F6\u4E00\u5B9A\u65F6\u95F4\u8FDB\u884C\u56DE\u8C03\uFF0C\u7C7B\u4F3C\u4E8E<code>promise</code>\u7684\u4F7F\u7528\u65B9\u5F0F</p><ul><li><code>value</code>\uFF0C\u6570\u503C\uFF0C\u5355\u4F4D\u9ED8\u8BA4\u4E3A<code>ms</code></li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>uni<span class="token punctuation">.</span>$m<span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="addstyle-style-target-object" tabindex="-1"><a class="header-anchor" href="#addstyle-style-target-object" aria-hidden="true">#</a> addStyle(style [, target = &#39;object&#39;])</h2><p>\u7528\u4E8E\u5C06<code>\u5B57\u7B26\u4E32</code>\u5F62\u5F0F\u7684\u5185\u8054\u6837\u5F0F\u6837\u5F0F\u8F6C\u4E3A<code>\u5BF9\u8C61</code>\u5F62\u5F0F\uFF0C\u6216\u8005\u5C06<code>\u5BF9\u8C61</code>\u5F62\u5F0F\u7684\u6837\u5F0F\u5199\u6CD5\u8F6C\u4E3A<code>\u5B57\u7B26\u4E32</code>\u5F62\u5F0F\u3002</p><ul><li><code>style</code>\uFF0C\u6837\u5F0F\uFF0C\u53EF\u4E3A\u5BF9\u8C61\u6216\u8005\u5B57\u7B26\u4E32\u5F62\u5F0F</li><li><code>target</code>\uFF0C\u53EF\u9009\uFF0C\u8F6C\u6362\u7ED3\u679C\u7684\u7C7B\u578B\uFF0C\u9ED8\u8BA4\u4E3A<code>object</code>\uFF1B\u5982\u679C\u4E3A<code>object</code>\u5219\u8FD4\u56DE\u5BF9\u8C61\u5F62\u5F0F\u7684\u7ED3\u679C\uFF0C\u5982\u679C\u4E3A<code>string</code>\u5219\u8FD4\u56DE\u5B57\u7B26\u4E32\u5F62\u5F0F\u7684\u7ED3\u679C</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> style <span class="token operator">=</span> <span class="token punctuation">{</span>padding<span class="token operator">:</span> <span class="token string">&#39;10px&#39;</span><span class="token punctuation">,</span> margin<span class="token operator">:</span> <span class="token string">&#39;10px&#39;</span><span class="token punctuation">}</span>
uni<span class="token punctuation">.</span>$m<span class="token punctuation">.</span><span class="token function">addStyle</span><span class="token punctuation">(</span>style<span class="token punctuation">,</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> style <span class="token operator">=</span> <span class="token string">&quot;padding: 10px; margin: 10px&quot;</span>
uni<span class="token punctuation">.</span>$m<span class="token punctuation">.</span><span class="token function">addStyle</span><span class="token punctuation">(</span>style<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="addunit-value-unit-px" tabindex="-1"><a class="header-anchor" href="#addunit-value-unit-px" aria-hidden="true">#</a> addUnit(value [, unit = &#39;px&#39;])</h2><p>\u7528\u4E8E\u7ED9\u503C\u52A0\u4E0A\u5355\u4F4D\uFF0C\u5982\u679C\u503C\u5DF2\u6709\u5355\u4F4D\uFF0C\u5219\u76F4\u63A5\u539F\u6837\u8FD4\u56DE\uFF0C\u5982\u679C\u503C\u4E3A<code>\u6570\u503C</code>\uFF0C\u5219\u52A0\u4E0A<code>unit</code>\u53C2\u6570\u7684\u5355\u4F4D\u3002</p><ul><li><code>value</code>\uFF0C\u53EF\u4E3A<code>5</code>\uFF0C<code>5px</code>\uFF0C<code>6rpx</code>\uFF0C<code>100%</code>\u7B49\u683C\u5F0F\u7684\u503C</li><li><code>unit</code>\uFF0C\u53EF\u9009\uFF0C\u9ED8\u8BA4\u4E3A<code>px</code>\uFF0C\u5982\u679C\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\u6570\u503C\uFF0C\u5219\u62FC\u63A5\u4E0A\u6B64\u5355\u4F4D</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>uni<span class="token punctuation">.</span>$m<span class="token punctuation">.</span><span class="token function">addUnit</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="priceformat-value-decimals-0-decimalpoint-thousandsseparator" tabindex="-1"><a class="header-anchor" href="#priceformat-value-decimals-0-decimalpoint-thousandsseparator" aria-hidden="true">#</a> priceFormat(value [, decimals = 0 [, decimalPoint = &#39;.&#39; [, thousandsSeparator = &#39;,&#39;]]])</h2><p>\u6B64\u65B9\u6CD5\u53EF\u7528\u4E8E\u5BF9\u6570\u503C\u5F62\u5F0F\u7684\u91D1\u989D\u8FDB\u884C\u683C\u5F0F\u5316</p><ul><li><code>value</code>\uFF0C\u9700\u8981\u683C\u5F0F\u5316\u7684\u91D1\u989D\u6570\u503C\uFF0C\u53EA\u80FD\u4E3A\u6570\u503C\uFF0C\u5982<code>300.52</code>\uFF0C<code>300</code>\uFF0C\u800C\u4E0D\u80FD\u4E3A\u8BF8\u5982\u5E26\u5343\u5206\u4F4D\u7684\u5199\u6CD5<code>3,000.5</code></li><li><code>decimals</code>\uFF0C\u53EF\u9009\uFF0C\u683C\u5F0F\u5316\u540E\u5C0F\u6570\u70B9\u7684\u4F4D\u6570\uFF0C\u9ED8\u8BA4\u4E3A<code>0</code>\uFF0C\u5C0F\u6570\u6700\u540E\u4E00\u4F4D\u4F1A\u8FDB\u884C\u56DB\u820D\u4E94\u5165</li><li><code>decimalPoint</code>\uFF0C\u53EF\u9009\uFF0C\u5C0F\u6570\u70B9\u7684\u7B26\u53F7\uFF0C\u9ED8\u8BA4\u4E3A<code>.</code></li><li><code>thousandsSeparator</code>\uFF0C\u53EF\u9009\uFF0C\u5343\u5206\u4F4D\u5206\u9694\u7B26\uFF0C\u9ED8\u8BA4\u4E3A\u82F1\u6587\u9017\u53F7<code>,</code></li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>uni<span class="token punctuation">.</span>$m<span class="token punctuation">.</span><span class="token function">priceFormat</span><span class="token punctuation">(</span><span class="token number">3002.365</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
uni<span class="token punctuation">.</span>$m<span class="token punctuation">.</span><span class="token function">priceFormat</span><span class="token punctuation">(</span><span class="token number">3002</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="page" tabindex="-1"><a class="header-anchor" href="#page" aria-hidden="true">#</a> page()</h2><p>\u6B64\u65B9\u6CD5\u7528\u4E8E\u83B7\u53D6\u5F53\u524D\u9875\u9762\u7684\u8DEF\u5F84\uFF0C\u8FD4\u56DE\u7684\u8DEF\u5F84\u4EE5<code>/</code>\u5F00\u5934\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>uni<span class="token punctuation">.</span>$m<span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,31),c=[p];function o(i,d){return s(),a("div",null,c)}var u=n(t,[["render",o],["__file","fastUse.html.vue"]]);export{u as default};
