import{_ as n,o as s,c as a,a as p}from"./app.ea8d1dfd.js";const t={},e=p(`<h1 id="nodejs" tabindex="-1"><a class="header-anchor" href="#nodejs" aria-hidden="true">#</a> nodejs</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> mysql2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> \u57FA\u672C\u4F7F\u7528</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// app.js</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> pool <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./mysql/db&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// ? \u5360\u4F4D\u7B26</span>
<span class="token keyword">const</span> sql <span class="token operator">=</span> <span class="token string">&#39;SELECT * FROM \`students\` WHERE \`name\` = ?&#39;</span>

pool<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;\u5C0F\u4E54&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> rows<span class="token punctuation">,</span> _fields</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>rows<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> sql2 <span class="token operator">=</span> <span class="token string">&#39;SELECT * FROM \`students\`&#39;</span>

pool<span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> conn</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    conn<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>sql2<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> rows</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>rows<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// \u5B8C\u6210\u540E\u8BF7\u4E0D\u8981\u5FD8\u8BB0\u91CA\u653E\u8FDE\u63A5\uFF01(\u5C06\u8FDE\u63A5\u8FD4\u56DE\u5230\u8FDE\u63A5\u6C60\u4E2D)</span>
    <span class="token comment">// conn.release()</span>
    pool<span class="token punctuation">.</span><span class="token function">releaseConnection</span><span class="token punctuation">(</span>conn<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// db.js</span>
<span class="token keyword">const</span> mysql <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mysql2&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// \u521B\u5EFA\u6570\u636E\u5E93</span>
<span class="token comment">// const connection = mysql.createConnection({</span>
<span class="token comment">//     host: &#39;localhost&#39;,</span>
<span class="token comment">//     user: &#39;root&#39;,</span>
<span class="token comment">//     password: &#39;123456&#39;,</span>
<span class="token comment">//     database: &#39;mktest&#39;,</span>
<span class="token comment">//     charset: &#39;utf8&#39;</span>
<span class="token comment">// })</span>

<span class="token comment">// connection.connect(err =&gt; {</span>
<span class="token comment">//     if (err) {</span>
<span class="token comment">//         console.log(\`\u94FE\u63A5\u9519\u8BEF: \${err.stack}\`)</span>
<span class="token comment">//         return</span>
<span class="token comment">//     }</span>
<span class="token comment">//     console.log(\`\u8FDE\u63A5ID: \${connection.threadId}\`)</span>
<span class="token comment">// })</span>

<span class="token comment">// \u521B\u5EFA\u8FDE\u63A5\u6C60</span>
<span class="token comment">// \u8FDE\u63A5\u6C60\u6709\u52A9\u4E8E\u51CF\u5C11\u8FDE\u63A5\u5230MySQL\u670D\u52A1\u5668\u7684\u65F6\u95F4\uFF0C \u901A\u8FC7\u91CD\u7528\u4EE5\u524D\u7684\u8FDE\u63A5</span>
<span class="token comment">// \u53EF\u4EE5\u907F\u514D\u67E5\u8BE2\u7684\u5EF6\u8FDF\uFF0C \u51CF\u5C11\u5EFA\u7ACB\u65B0\u8FDE\u63A5\u6240\u5E26\u6765\u7684\u5F00\u9500\u3002</span>
<span class="token keyword">const</span> pool <span class="token operator">=</span> mysql<span class="token punctuation">.</span><span class="token function">createPool</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&#39;123456&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">database</span><span class="token operator">:</span> <span class="token string">&#39;mktest&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">charset</span><span class="token operator">:</span> <span class="token string">&#39;utf8&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// \u4EE5\u4E0B\u9009\u9879\u5747\u4E3A\u9ED8\u8BA4\u503C\uFF08\u5982\u679C\u4E0D\u9700\u8981\u53D8\u52A8\u53EF\u7701\u7565\uFF09</span>
    <span class="token literal-property property">waitForConnections</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u4E3Atrue\u65F6\uFF0C\u8FDE\u63A5\u6392\u961F\u7B49\u5F85\u53EF\u7528\u8FDE\u63A5\u3002\u4E3Afalse\u5C06\u7ACB\u5373\u629B\u51FA\u9519\u8BEF</span>
    <span class="token literal-property property">connectionLimit</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token comment">// \u5355\u6B21\u53EF\u521B\u5EFA\u6700\u5927\u8FDE\u63A5\u6570</span>
    <span class="token literal-property property">queueLimit</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token comment">// \u8FDE\u63A5\u6C60\u7684\u6700\u5927\u8BF7\u6C42\u6570\uFF0C\u4ECEgetConnection\u65B9\u6CD5\u524D\u4F9D\u6B21\u6392\u961F\u3002\u8BBE\u7F6E\u4E3A0\u5C06\u6CA1\u6709\u9650\u5236</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token comment">// exports.conn = connection</span>
exports<span class="token punctuation">.</span>pool <span class="token operator">=</span> pool
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E8B\u52A1\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u52A1\u64CD\u4F5C" aria-hidden="true">#</a> \u4E8B\u52A1\u64CD\u4F5C</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> pool <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./mysql/db&#39;</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * 1\u3001\u4F7F\u7528\`\`\`pool.getConnection()\`\`\`\u83B7\u53D6\u5230\u8FDE\u63A5\u5BF9\u8C61\`\`\`conn\`\`\`
 * 2\u3001\u4F7F\u7528\`\`\`conn.beginTransaction()\`\`\`\u58F0\u660E\u5F00\u59CB\u4E8B\u52A1\u64CD\u4F5C
 * 3\u3001\u4F7F\u7528\`\`\`conn.rollback()\`\`\`\u8FDB\u884C\u4E8B\u52A1\u56DE\u6EDA
 * 4\u3001\u4F7F\u7528\`\`\`conn.commit()\`\`\`\u8FDB\u884C\u4E8B\u52A1\u63D0\u4EA4
 */</span>
pool<span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> conn</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;pool.getConnection\u51FA\u9519&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    conn<span class="token punctuation">.</span><span class="token function">beginTransaction</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u5F00\u59CB\u4E8B\u52A1\u9519\u8BEF&#39;</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        conn<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token string">&#39;UPDATE students SET gender=2 WHERE id=?&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> _rows</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> conn<span class="token punctuation">.</span><span class="token function">rollback</span><span class="token punctuation">(</span><span class="token parameter">_</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u4FEE\u6539id=4\u6027\u522B\u4E3A\u5973\u56DE\u6EDA\u4E86&#39;</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            conn<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token string">&#39;SELECT * FROM students where id=4&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> rows</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> conn<span class="token punctuation">.</span><span class="token function">rollback</span><span class="token punctuation">(</span><span class="token parameter">_</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u67E5\u8BE2id=4\u7684\u5B66\u751F&#39;</span><span class="token punctuation">)</span>
                    <span class="token punctuation">}</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
                conn<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token keyword">return</span> conn<span class="token punctuation">.</span><span class="token function">rollback</span><span class="token punctuation">(</span><span class="token parameter">_</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u63D0\u4EA4\u4E8B\u52A1\u5931\u8D25&#39;</span><span class="token punctuation">)</span>
                        <span class="token punctuation">}</span><span class="token punctuation">)</span>
                    <span class="token punctuation">}</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;success!&#39;</span><span class="token punctuation">)</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>rows<span class="token punctuation">)</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5206\u5757\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u5206\u5757\u67E5\u8BE2" aria-hidden="true">#</a> \u5206\u5757\u67E5\u8BE2</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> pool <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./mysql/db&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> sql <span class="token operator">=</span> <span class="token string">&#39;SELECT * FROM \`students\`&#39;</span>

<span class="token doc-comment comment">/**
 * \u901A\u8FC7\`\`\`conn.pause()\`\`\`\u53EF\u6682\u505C\u67E5\u8BE2,\u5F53\u5927\u91CF\u6570\u636E\u5904\u7406\u65F6\u5F88\u6709\u7528
 * \u901A\u8FC7\`\`\`conn.resume()\`\`\`\u53EF\u7EE7\u7EED\u67E5\u8BE2\uFF0C\u5F53\u5904\u7406\u5B8C\u4E00\u6BB5\u4E4B\u540E\u53EF\u901A\u8FC7\u8BE5\u65B9\u6CD5\u7EE7\u7EEDIO\u64CD\u4F5C
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">}</span></span>           [description]
 */</span>
pool<span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> conn</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;pool.getConnection\u51FA\u9519\u4E86&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> query <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span>
    query<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u9519\u8BEF\u5904\u7406</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;fields&#39;</span><span class="token punctuation">,</span> <span class="token parameter">fields</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u67E5\u8BE2\u884C\u6BB5\u4FE1\u606F</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;result&#39;</span><span class="token punctuation">,</span> <span class="token parameter">row</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u6682\u505C\uFF08row\u4E3A\u67E5\u8BE2\u7684\u6570\u636E\u6BCF\u67E5\u8BE2\u5230\u4E00\u884C\u89E6\u53D1\u4E00\u6B21\uFF09</span>
        conn<span class="token punctuation">.</span><span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment">// \u7EE7\u7EED\u67E5\u8BE2</span>
        conn<span class="token punctuation">.</span><span class="token function">resume</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>row<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;end&#39;</span><span class="token punctuation">,</span> <span class="token parameter">_</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        conn<span class="token punctuation">.</span><span class="token function">release</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment">// \u65E0\u8BBA\u6210\u529F\u4E0E\u5426\u6700\u540E\u5747\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="promise\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#promise\u7528\u6CD5" aria-hidden="true">#</a> Promise\u7528\u6CD5</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> mysql <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mysql2/promise&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> sql <span class="token operator">=</span> <span class="token string">&#39;SELECT * FROM \`students\`&#39;</span>

    <span class="token comment">// \u521B\u5EFA\u94FE\u63A5</span>
    <span class="token keyword">const</span> pool <span class="token operator">=</span> <span class="token keyword">await</span> mysql<span class="token punctuation">.</span><span class="token function">createPool</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&#39;123456&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">database</span><span class="token operator">:</span> <span class="token string">&#39;mktest&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">charset</span><span class="token operator">:</span> <span class="token string">&#39;utf8&#39;</span><span class="token punctuation">,</span>

        <span class="token comment">// \u4EE5\u4E0B\u9009\u9879\u5747\u4E3A\u9ED8\u8BA4\u503C\uFF08\u5982\u679C\u4E0D\u9700\u8981\u53D8\u52A8\u53EF\u7701\u7565\uFF09</span>
        <span class="token literal-property property">waitForConnections</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u4E3Atrue\u65F6\uFF0C\u8FDE\u63A5\u6392\u961F\u7B49\u5F85\u53EF\u7528\u8FDE\u63A5\u3002\u4E3Afalse\u5C06\u7ACB\u5373\u629B\u51FA\u9519\u8BEF</span>
        <span class="token literal-property property">connectionLimit</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token comment">// \u5355\u6B21\u53EF\u521B\u5EFA\u6700\u5927\u8FDE\u63A5\u6570</span>
        <span class="token literal-property property">queueLimit</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token comment">// \u8FDE\u63A5\u6C60\u7684\u6700\u5927\u8BF7\u6C42\u6570\uFF0C\u4ECEgetConnection\u65B9\u6CD5\u524D\u4F9D\u6B21\u6392\u961F\u3002\u8BBE\u7F6E\u4E3A0\u5C06\u6CA1\u6709\u9650\u5236</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// \u64CD\u4F5C\u6570\u636E\u5E93</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>rows<span class="token punctuation">,</span> firlds<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> pool<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>rows<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// mysql2 \u65B0\u65B9\u6CD5</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> pool <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./mysql/db&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> sql <span class="token operator">=</span> <span class="token string">&#39;SELECT * FROM \`students\`&#39;</span>

pool<span class="token punctuation">.</span><span class="token function">promise</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>rows<span class="token punctuation">,</span> fields<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>rows<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    pool<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","node.html.vue"]]);export{r as default};
