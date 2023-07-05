import{_ as n,o as s,c as a,a as t}from"./app.b7a23fca.js";const p={},e=t(`<h1 id="\u6A21\u62DFexpress" tabindex="-1"><a class="header-anchor" href="#\u6A21\u62DFexpress" aria-hidden="true">#</a> \u6A21\u62DFexpress</h1><ul><li>express_route.js</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;url&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// \u5C01\u88C5\u65B9\u6CD5\u6539\u53D8res  \u7ED1\u5B9Ares.send()</span>
<span class="token keyword">const</span> <span class="token function-variable function">changeRes</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    res<span class="token punctuation">.</span><span class="token function-variable function">send</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

        res<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;Content-Type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text/html;charset=&#39;utf-8&#39;&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>

        res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u66B4\u9732\u7684\u6A21\u5757</span>
<span class="token keyword">const</span> <span class="token function-variable function">Server</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>


    <span class="token keyword">const</span> <span class="token constant">G</span> <span class="token operator">=</span> <span class="token keyword">this</span> <span class="token comment">/*\u5168\u5C40\u53D8\u91CF*/</span>

    <span class="token comment">//\u5904\u7406get\u548Cpost\u8BF7\u6C42</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_get <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>_post <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>



    <span class="token keyword">const</span> <span class="token function-variable function">app</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>


        <span class="token function">changeRes</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>

        <span class="token comment">//\u83B7\u53D6\u8DEF\u7531</span>
        <span class="token keyword">let</span> pathname <span class="token operator">=</span> url<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span>pathname
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>pathname<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            pathname <span class="token operator">=</span> pathname <span class="token operator">+</span> <span class="token string">&#39;/&#39;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">//\u83B7\u53D6\u8BF7\u6C42\u7684\u65B9\u5F0F get  post</span>
        <span class="token keyword">let</span> method <span class="token operator">=</span> req<span class="token punctuation">.</span>method<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>


        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">G</span><span class="token punctuation">[</span><span class="token string">&#39;_&#39;</span> <span class="token operator">+</span> method<span class="token punctuation">]</span><span class="token punctuation">[</span>pathname<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>method <span class="token operator">==</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">/*\u6267\u884Cpost\u8BF7\u6C42*/</span>

                <span class="token keyword">let</span> postStr <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
                req<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">chunk</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

                    postStr <span class="token operator">+=</span> chunk
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
                req<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;end&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> chunk</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

                    req<span class="token punctuation">.</span>body <span class="token operator">=</span> postStr <span class="token comment">/*\u8868\u793A\u62FF\u5230post\u7684\u503C*/</span>


                    <span class="token comment">//G._post[&#39;dologin&#39;](req,res)</span>

                    <span class="token constant">G</span><span class="token punctuation">[</span><span class="token string">&#39;_&#39;</span> <span class="token operator">+</span> method<span class="token punctuation">]</span><span class="token punctuation">[</span>pathname<span class="token punctuation">]</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span> <span class="token comment">/*\u6267\u884C\u65B9\u6CD5*/</span>

                <span class="token punctuation">}</span><span class="token punctuation">)</span>



            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token comment">/*\u6267\u884Cget\u8BF7\u6C42*/</span>
                <span class="token constant">G</span><span class="token punctuation">[</span><span class="token string">&#39;_&#39;</span> <span class="token operator">+</span> method<span class="token punctuation">]</span><span class="token punctuation">[</span>pathname<span class="token punctuation">]</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span> <span class="token comment">/*\u6267\u884C\u65B9\u6CD5*/</span>

            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>

            res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;no router&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

    app<span class="token punctuation">.</span><span class="token function-variable function">get</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">string<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>string<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            string <span class="token operator">=</span> string <span class="token operator">+</span> <span class="token string">&#39;/&#39;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>string<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            string <span class="token operator">=</span> <span class="token string">&#39;/&#39;</span> <span class="token operator">+</span> string
        <span class="token punctuation">}</span>
        <span class="token comment">//    /login/</span>
        <span class="token constant">G</span><span class="token punctuation">.</span>_get<span class="token punctuation">[</span>string<span class="token punctuation">]</span> <span class="token operator">=</span> callback

    <span class="token punctuation">}</span>

    app<span class="token punctuation">.</span><span class="token function-variable function">post</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">string<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>string<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            string <span class="token operator">=</span> string <span class="token operator">+</span> <span class="token string">&#39;/&#39;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>string<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            string <span class="token operator">=</span> <span class="token string">&#39;/&#39;</span> <span class="token operator">+</span> string

        <span class="token punctuation">}</span>
        <span class="token comment">//    /login/</span>
        <span class="token constant">G</span><span class="token punctuation">.</span>_post<span class="token punctuation">[</span>string<span class="token punctuation">]</span> <span class="token operator">=</span> callback

        <span class="token comment">//G._post[&#39;dologin&#39;]=function(req,res){</span>
        <span class="token comment">//</span>
        <span class="token comment">//}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> app

<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Server</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4E3B\u7A0B\u5E8F</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> ejs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;ejs&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./model/express_route.js&#39;</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span>
http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8000</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    <span class="token keyword">let</span> msg <span class="token operator">=</span> <span class="token string">&#39;\u8FD9\u662F\u6570\u636E\u5E93\u7684\u6570\u636E&#39;</span>
    ejs<span class="token punctuation">.</span><span class="token function">renderFile</span><span class="token punctuation">(</span><span class="token string">&#39;views/index.ejs&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        msg
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

        res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","express.html.vue"]]);export{r as default};
