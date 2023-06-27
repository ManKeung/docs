import{_ as n,o as s,c as a,a as p}from"./app.296c1869.js";const t={},e=p(`<h1 id="mongoose\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#mongoose\u793A\u4F8B" aria-hidden="true">#</a> mongoose\u793A\u4F8B</h1><h2 id="\u57FA\u672C\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u64CD\u4F5C" aria-hidden="true">#</a> \u57FA\u672C\u64CD\u4F5C</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5F15\u5165</span>
<span class="token keyword">const</span> mongoose <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mongoose&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// \u5EFA\u7ACB\u8FDE\u63A5</span>
mongoose<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token string">&#39;mongodb://localhost:27017/mktest&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">useUnifiedTopology</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">useNewUrlParser</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> db <span class="token operator">=</span> mongoose<span class="token punctuation">.</span>connection

<span class="token comment">// \u5931\u8D25\u8B66\u544A</span>
db<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>console<span class="token punctuation">,</span> <span class="token string">&#39;connection error&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// \u8FDE\u63A5\u6210\u529F\u63D0\u9192</span>
db<span class="token punctuation">.</span><span class="token function">once</span><span class="token punctuation">(</span><span class="token string">&#39;open&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;we are connected!&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u6570\u636E\u7C7B\u578B</span>
<span class="token keyword">const</span> types <span class="token operator">=</span> mongoose<span class="token punctuation">.</span>Schema<span class="token punctuation">.</span>Types

<span class="token comment">// \u64CD\u4F5Cusers\u8868\uFF08\u96C6\u5408\uFF09 \u5B9A\u4E49schema Schema\u91CC\u9762\u7684\u5BF9\u8C61\u548C\u6570\u636E\u5E93\u8868\u91CC\u9762\u7684\u5B57\u6BB5\u9700\u8981\u4E00\u4E00\u5BF9\u5E94</span>
<span class="token keyword">const</span> UserSchema <span class="token operator">=</span> mongoose<span class="token punctuation">.</span><span class="token function">Schema</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> types<span class="token punctuation">.</span>String<span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> types<span class="token punctuation">.</span>Number<span class="token punctuation">,</span>
    <span class="token literal-property property">sex</span><span class="token operator">:</span> types<span class="token punctuation">.</span>String<span class="token punctuation">,</span>
    <span class="token literal-property property">subject</span><span class="token operator">:</span> types<span class="token punctuation">.</span>Mixed
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u5B9A\u4E49\u6570\u636E\u5E93\u6A21\u578B \u64CD\u4F5C\u6570\u636E\u5E93</span>
<span class="token comment">// model\u91CC\u9762\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570 \u8981\u6CE8\u610F\uFF1A1\u9996\u5B57\u6BCD\u5927\u5199  2\u3001\u8981\u548C\u6570\u636E\u5E93\u8868\uFF08\u96C6\u5408 \uFF09\u540D\u79F0\u5BF9\u5E94  \u8FD9\u4E2A\u6A21\u578B\u4F1A\u548C\u6A21\u578B\u540D\u79F0\u76F8\u540C\u7684\u590D\u6570\u7684\u6570\u636E\u5E93\u8868\u5EFA\u7ACB\u8FDE\u63A5</span>
<span class="token comment">// const User = mongoose.model(&#39;User&#39;, UserSchema) // \u9ED8\u8BA4\u4F1A\u64CD\u4F5C users\u8868\uFF08\u96C6\u5408\uFF09</span>
<span class="token keyword">const</span> User <span class="token operator">=</span> mongoose<span class="token punctuation">.</span><span class="token function">model</span><span class="token punctuation">(</span><span class="token string">&#39;User&#39;</span><span class="token punctuation">,</span> UserSchema<span class="token punctuation">,</span> <span class="token string">&#39;user&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// \u589E</span>
<span class="token comment">// const u = new User({</span>
<span class="token comment">//     name: &#39;\u95FA\u5973&#39;,</span>
<span class="token comment">//     age: 0,</span>
<span class="token comment">//     sex: &#39;\u5973&#39;,</span>
<span class="token comment">//     subject: {</span>
<span class="token comment">//         shuxue: 90,</span>
<span class="token comment">//         yingyu: 85,</span>
<span class="token comment">//         yuwen: 90</span>
<span class="token comment">//     }</span>
<span class="token comment">// })</span>
<span class="token comment">// u.save().then(data =&gt; {</span>
<span class="token comment">//     console.log(data)</span>
<span class="token comment">// }).catch(err =&gt; {</span>
<span class="token comment">//     console.log(err)</span>
<span class="token comment">// })</span>

<span class="token comment">// \u5220</span>
<span class="token comment">// User.deleteOne({name: &#39;123&#39;}).then(data =&gt; {</span>
<span class="token comment">//     console.log(data)</span>
<span class="token comment">// }).catch(err =&gt; {</span>
<span class="token comment">//     console.log(err)</span>
<span class="token comment">// })</span>

<span class="token comment">// \u6539</span>
<span class="token comment">// User.updateOne({name: &#39;\u95FA\u5973&#39;}, {age: 1}).then(data =&gt; {</span>
<span class="token comment">//     console.log(data)</span>
<span class="token comment">// }).catch(err =&gt; {</span>
<span class="token comment">//     console.log(err)</span>
<span class="token comment">// })</span>

<span class="token comment">// \u67E5</span>
User<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">$gt</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6A21\u5757\u5316" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5757\u5316" aria-hidden="true">#</a> \u6A21\u5757\u5316</h2><ul><li>app.js</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> UserModel <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./mongoose/userinfo&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> OrderModel <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./mongoose/order&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserModel</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u8001\u8BB8&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">40</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// user.save().then(_data =&gt; {</span>
<span class="token comment">//     UserModel.find().then(data =&gt; {</span>
<span class="token comment">//         console.log(data)</span>
<span class="token comment">//     }).catch(err =&gt; {</span>
<span class="token comment">//         console.log(\`\u6570\u636E\u67E5\u627E\u5931\u8D25\${err}\`)</span>
<span class="token comment">//     })</span>
<span class="token comment">// }).catch(err =&gt; {</span>
<span class="token comment">//     console.log(\`\u6570\u636E\u589E\u52A0\u5931\u8D25:\${err}\`)</span>
<span class="token comment">// })</span>
OrderModel<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>db.js</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> mongoose <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mongoose&#39;</span><span class="token punctuation">)</span>
exports<span class="token punctuation">.</span>types <span class="token operator">=</span> mongoose<span class="token punctuation">.</span>Schema<span class="token punctuation">.</span>Types

mongoose<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token string">&#39;mongodb://localhost:27017/mktest&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">useUnifiedTopology</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">useNewUrlParser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">useCreateIndex</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u6570\u636E\u5E93\u8FDE\u63A5\u6210\u529F</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>data<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u6570\u636E\u5E93\u8FDE\u63A5\u5931\u8D25</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>err<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

exports<span class="token punctuation">.</span>mongoose <span class="token operator">=</span> mongoose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>userinfo.js</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>mongoose<span class="token punctuation">,</span> types<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./db&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> UserInfoSchema <span class="token operator">=</span> mongoose<span class="token punctuation">.</span><span class="token function">Schema</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> types<span class="token punctuation">.</span>String<span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> types<span class="token punctuation">.</span>Number<span class="token punctuation">,</span>
    <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> types<span class="token punctuation">.</span>String<span class="token punctuation">,</span>
        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;\u7537&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> mongoose<span class="token punctuation">.</span><span class="token function">model</span><span class="token punctuation">(</span><span class="token string">&#39;UserInfo&#39;</span><span class="token punctuation">,</span> UserInfoSchema<span class="token punctuation">,</span> <span class="token string">&#39;userinfo&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>order.js</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>mongoose<span class="token punctuation">,</span> types<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./db&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> OrderSchema <span class="token operator">=</span> mongoose<span class="token punctuation">.</span><span class="token function">Schema</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">order_id</span><span class="token operator">:</span> types<span class="token punctuation">.</span>String<span class="token punctuation">,</span>
    <span class="token literal-property property">uid</span><span class="token operator">:</span> types<span class="token punctuation">.</span>Number<span class="token punctuation">,</span>
    <span class="token literal-property property">trade_no</span><span class="token operator">:</span> types<span class="token punctuation">.</span>String<span class="token punctuation">,</span>
    <span class="token literal-property property">all_price</span><span class="token operator">:</span> types<span class="token punctuation">.</span>Number<span class="token punctuation">,</span>
    <span class="token literal-property property">all_num</span><span class="token operator">:</span> types<span class="token punctuation">.</span>Number
<span class="token punctuation">}</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> mongoose<span class="token punctuation">.</span><span class="token function">model</span><span class="token punctuation">(</span><span class="token string">&#39;Order&#39;</span><span class="token punctuation">,</span> OrderSchema<span class="token punctuation">,</span> <span class="token string">&#39;order&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u6027\u80FD\u6D4B\u8BD5</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">time</span><span class="token punctuation">(</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> UserModel <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./mongoose/userinfo&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">timeEnd</span><span class="token punctuation">(</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">time</span><span class="token punctuation">(</span><span class="token string">&#39;order&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> Order <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./mongoose/order&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">timeEnd</span><span class="token punctuation">(</span><span class="token string">&#39;order&#39;</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">time</span><span class="token punctuation">(</span><span class="token string">&#39;user2&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> UserModel2 <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./mongoose/userinfo&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">timeEnd</span><span class="token punctuation">(</span><span class="token string">&#39;user2&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u6A21\u578B\u53C2\u6570\u7EA6\u5B9A</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>mongoose<span class="token punctuation">,</span> types<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./db&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// mongoose\u6570\u636E\u6821\u9A8C:\u7528\u6237\u901A\u8FC7mongoose\u7ED9mongodb\u6570\u636E\u5E93\u589E\u52A0\u6570\u636E\u7684\u65F6\u5019\uFF0C\u5BF9\u6570\u636E\u7684\u5408\u6CD5\u6027\u8FDB\u884C\u7684\u9A8C\u8BC1</span>
<span class="token comment">// mongoose\u91CC\u9762\u5B9A\u4E49Schema:\u5B57\u6BB5\u7C7B\u578B\uFF0C\u4FEE\u9970\u7B26\u3001\u9ED8\u8BA4\u53C2\u6570 \u3001\u6570\u636E\u6821\u9A8C\u90FD\u662F\u4E3A\u4E86\u6570\u636E\u5E93\u6570\u636E\u7684\u4E00\u81F4\u6027</span>
<span class="token comment">// Schema\uFF0C\u4E3A\u6570\u636E\u5E93\u5BF9\u8C61\u7684\u96C6\u5408,\u6BCF\u4E2Aschema\u4F1A\u6620\u5C04\u5230mongodb\u4E2D\u7684\u4E00\u4E2Acollection,\u5B9A\u4E49Schema\u53EF\u4EE5\u7406\u89E3\u4E3A\u8868\u7ED3\u6784\u7684\u5B9A\u4E49</span>

<span class="token keyword">const</span> PersonSchema <span class="token operator">=</span> mongoose<span class="token punctuation">.</span><span class="token function">Schema</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> types<span class="token punctuation">.</span>String<span class="token punctuation">,</span> <span class="token comment">// \u6307\u5B9A\u7C7B\u578B</span>
        <span class="token literal-property property">trim</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u4FEE\u9970\u7B26</span>
        <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sn</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> types<span class="token punctuation">.</span>String<span class="token punctuation">,</span>
        <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u7D22\u5F15</span>
        <span class="token function">set</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u81EA\u5B9A\u4E49\u4FEE\u9970\u7B26</span>
            <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">mk:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>val<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">maxlength</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token literal-property property">minlength</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
        <span class="token comment">// match: /^sn(.*)/,</span>
        <span class="token comment">// validate: (sn) =&gt; {</span>
        <span class="token comment">//     return sn.length &gt;= 4</span>
        <span class="token comment">// }</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> types<span class="token punctuation">.</span>Number<span class="token punctuation">,</span>
        <span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">240</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> types<span class="token punctuation">.</span>String<span class="token punctuation">,</span>
        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;success&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u9ED8\u8BA4\u503C</span>
        <span class="token keyword">enum</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;success&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">]</span> <span class="token comment">// status\u7684\u503C\u5FC5\u987B\u5728 \u5BF9\u5E94\u7684\u6570\u7EC4\u91CC\u9762  \u6CE8\u610F\u679A\u4E3E\u662F\u7528\u5728String</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> mongoose<span class="token punctuation">.</span><span class="token function">model</span><span class="token punctuation">(</span><span class="token string">&#39;Person&#39;</span><span class="token punctuation">,</span> PersonSchema<span class="token punctuation">,</span> <span class="token string">&#39;person&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5173\u8054\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u5173\u8054\u67E5\u8BE2" aria-hidden="true">#</a> \u5173\u8054\u67E5\u8BE2</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> OrderModel <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./mongoose/order&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// order\u8868\u5173\u8054order_item</span>
<span class="token comment">// OrderModel.find().then(data =&gt; {</span>
<span class="token comment">//     console.log(data)</span>
<span class="token comment">// }).catch(err =&gt; {</span>
<span class="token comment">//     console.log(err)</span>
<span class="token comment">// })</span>

<span class="token comment">// order\u8868\u5173\u8054order_item</span>
OrderModel<span class="token punctuation">.</span><span class="token function">aggregate</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">$lookup</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">from</span><span class="token operator">:</span> <span class="token string">&#39;order_item&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">localField</span><span class="token operator">:</span> <span class="token string">&#39;order_id&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">foreignField</span><span class="token operator">:</span> <span class="token string">&#39;order_id&#39;</span><span class="token punctuation">,</span>
            <span class="token keyword">as</span><span class="token operator">:</span> <span class="token string">&#39;items&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">$match</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">all_price</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">$gte</span><span class="token operator">:</span> <span class="token number">90</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E09\u8868\u5173\u8054" tabindex="-1"><a class="header-anchor" href="#\u4E09\u8868\u5173\u8054" aria-hidden="true">#</a> \u4E09\u8868\u5173\u8054</h2><ul><li>app.js</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> ArticleModel <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./mongoose/article&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// \u67E5\u8BE2\u6587\u7AE0\u4FE1\u606F</span>
<span class="token comment">// ArticleModel.find().then(data =&gt; {</span>
<span class="token comment">//     console.log(data)</span>
<span class="token comment">// }).catch(err =&gt; {</span>
<span class="token comment">//     console.log(err)</span>
<span class="token comment">// })</span>

<span class="token comment">// \u4E24\u8868\u5173\u8054</span>
<span class="token comment">// ArticleModel.aggregate([</span>
<span class="token comment">//     {</span>
<span class="token comment">//         $lookup: {</span>
<span class="token comment">//             from: &#39;articlecate&#39;,</span>
<span class="token comment">//             localField: &#39;cid&#39;,</span>
<span class="token comment">//             foreignField: &#39;_id&#39;,</span>
<span class="token comment">//             as: &#39;cate&#39;</span>
<span class="token comment">//         }</span>
<span class="token comment">//     }</span>
<span class="token comment">// ]).then(data =&gt; {</span>
<span class="token comment">//     console.log(data)</span>
<span class="token comment">// }).catch(err =&gt; {</span>
<span class="token comment">//     console.log(err)</span>
<span class="token comment">// })</span>

<span class="token comment">// \u4E09\u4E2A\u8868\u5173\u8054\u67E5\u8BE2</span>
ArticleModel<span class="token punctuation">.</span><span class="token function">aggregate</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">$lookup</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">from</span><span class="token operator">:</span> <span class="token string">&quot;articlecate&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">localField</span><span class="token operator">:</span> <span class="token string">&quot;cid&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">foreignField</span><span class="token operator">:</span> <span class="token string">&quot;_id&quot;</span><span class="token punctuation">,</span>
            <span class="token keyword">as</span><span class="token operator">:</span> <span class="token string">&quot;cate&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">$lookup</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">from</span><span class="token operator">:</span> <span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">localField</span><span class="token operator">:</span> <span class="token string">&quot;author_id&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">foreignField</span><span class="token operator">:</span> <span class="token string">&quot;_id&quot;</span><span class="token punctuation">,</span>
            <span class="token keyword">as</span><span class="token operator">:</span> <span class="token string">&quot;user&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>add.js</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> ArticleCateModel <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./mongoose/articlecate&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> UserModel <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./mongoose/user&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> ArticleModel <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./mongoose/article&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// \u5206\u7C7B\u7684\u589E\u52A0</span>
<span class="token comment">// const cate = new ArticleCateModel({</span>
<span class="token comment">//     title: &#39;\u56FD\u5185\u65B0\u95FB&#39;,</span>
<span class="token comment">//     description: &#39;\u56FD\u5185\u65B0\u95FB&#39;</span>
<span class="token comment">// })</span>

<span class="token comment">// cate.save().then(data =&gt; {</span>
<span class="token comment">//     console.log(data)</span>
<span class="token comment">// }).catch(err =&gt; {</span>
<span class="token comment">//     console.log(err)</span>
<span class="token comment">// })</span>
<span class="token comment">// id 5df86b3c1074f23f10a6a800</span>

<span class="token comment">// \u589E\u52A0\u7528\u6237</span>
<span class="token comment">// const user = new UserModel({</span>
<span class="token comment">//     username: &#39;lisi&#39;,</span>
<span class="token comment">//     password: &#39;123456&#39;,</span>
<span class="token comment">//     name: &#39;\u674E\u56DB&#39;,</span>
<span class="token comment">//     age: 20,</span>
<span class="token comment">//     sex: &#39;\u7537&#39;,</span>
<span class="token comment">//     tel: 10086</span>
<span class="token comment">// })</span>

<span class="token comment">// user.save().then(data =&gt; {</span>
<span class="token comment">//     console.log(data)</span>
<span class="token comment">// }).catch(err =&gt; {</span>
<span class="token comment">//     console.log(err)</span>
<span class="token comment">// })</span>
<span class="token comment">// id 5df86bcf4956d93f5083fd97</span>

<span class="token keyword">const</span> article <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArticleModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
article<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">&#39;\u8FD9\u662F\u4E00\u4E2A\u56FD\u5185\u65B0\u95FB11111111&#39;</span>
article<span class="token punctuation">.</span>cid <span class="token operator">=</span> <span class="token string">&#39;5df86b3c1074f23f10a6a800&#39;</span> <span class="token comment">/*\u56FD\u5185\u65B0\u95FB*/</span>
article<span class="token punctuation">.</span>author_id <span class="token operator">=</span> <span class="token string">&#39;5df86bcf4956d93f5083fd97&#39;</span>
article<span class="token punctuation">.</span>author_name <span class="token operator">=</span> <span class="token string">&#39;\u5F20\u4E09&#39;</span>
article<span class="token punctuation">.</span>description <span class="token operator">=</span> <span class="token string">&#39;\u8FD9\u662F\u4E00\u4E2A\u56FD\u5185\u65B0\u95FB11111111 \u6B64\u5904\u7701\u7565300\u5B57&#39;</span>
article<span class="token punctuation">.</span>content <span class="token operator">=</span> <span class="token string">&#39;\u4E60\u8FD1\u5E73\u8BBF\u95EE\u7F8E\u56FD \u8FD9\u662F\u4E00\u4E2A\u56FD\u5185\u65B0\u95FB11111111&#39;</span>

article<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>user.js</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>mongoose<span class="token punctuation">,</span> types<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./db&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> Schrma <span class="token operator">=</span> mongoose<span class="token punctuation">.</span>Schema

<span class="token keyword">const</span> UserSchema <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Schrma</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> types<span class="token punctuation">.</span>String<span class="token punctuation">,</span>
        <span class="token literal-property property">unique</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span> types<span class="token punctuation">.</span>String<span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> types<span class="token punctuation">.</span>String<span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> types<span class="token punctuation">.</span>Number<span class="token punctuation">,</span>
    <span class="token literal-property property">sex</span><span class="token operator">:</span> types<span class="token punctuation">.</span>String<span class="token punctuation">,</span>
    <span class="token literal-property property">tel</span><span class="token operator">:</span> types<span class="token punctuation">.</span>Number<span class="token punctuation">,</span>
    <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> types<span class="token punctuation">.</span>Number<span class="token punctuation">,</span>
        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> mongoose<span class="token punctuation">.</span><span class="token function">model</span><span class="token punctuation">(</span><span class="token string">&#39;User&#39;</span><span class="token punctuation">,</span> UserSchema<span class="token punctuation">,</span> <span class="token string">&#39;user&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>article.js</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>mongoose<span class="token punctuation">,</span> types<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./db&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> Schrma <span class="token operator">=</span> mongoose<span class="token punctuation">.</span>Schema

<span class="token keyword">const</span> ArticleSchema <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Schrma</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> types<span class="token punctuation">.</span>String<span class="token punctuation">,</span>
        <span class="token literal-property property">unique</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">cid</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> types<span class="token punctuation">.</span>ObjectId
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">author_id</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> types<span class="token punctuation">.</span>ObjectId
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">author_name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> types<span class="token punctuation">.</span>String
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">description</span><span class="token operator">:</span> types<span class="token punctuation">.</span>String<span class="token punctuation">,</span>
    <span class="token literal-property property">content</span><span class="token operator">:</span> types<span class="token punctuation">.</span>String
<span class="token punctuation">}</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> mongoose<span class="token punctuation">.</span><span class="token function">model</span><span class="token punctuation">(</span><span class="token string">&#39;Article&#39;</span><span class="token punctuation">,</span> ArticleSchema<span class="token punctuation">,</span> <span class="token string">&#39;article&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>articlecate.js</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>mongoose<span class="token punctuation">,</span> types<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./db&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> Schrma <span class="token operator">=</span> mongoose<span class="token punctuation">.</span>Schema

<span class="token keyword">const</span> ArticleCateSchema <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mongoose<span class="token punctuation">.</span>Schema</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> types<span class="token punctuation">.</span>String<span class="token punctuation">,</span>
        <span class="token literal-property property">unique</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">descripton</span><span class="token operator">:</span> types<span class="token punctuation">.</span>String<span class="token punctuation">,</span>
    <span class="token literal-property property">addtime</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> Date<span class="token punctuation">,</span>
        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> mongoose<span class="token punctuation">.</span><span class="token function">model</span><span class="token punctuation">(</span><span class="token string">&#39;ArticleCate&#39;</span><span class="token punctuation">,</span> ArticleCateSchema<span class="token punctuation">,</span> <span class="token string">&#39;articlecate&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="populate" tabindex="-1"><a class="header-anchor" href="#populate" aria-hidden="true">#</a> populate</h3><ul><li>app.js</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u6CE8\u610F\u4F7F\u7528 populate\u9700\u8981\u5F15\u5165\u7528\u5230\u7684model</span>
<span class="token keyword">const</span> ArticleCateModel <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./mongoose/articlecate&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> ArticleModel <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./mongoose/article.js&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> UserModel <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./mongoose/user.js&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// \u6587\u7AE0\u8868\u548C \u5206\u7C7B\u8868\u7684\u5173\u8054</span>
ArticleModel<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">populate</span><span class="token punctuation">(</span><span class="token string">&#39;cid&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u4E09\u4E2A\u8868\u5173\u8054</span>
ArticleModel<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">populate</span><span class="token punctuation">(</span><span class="token string">&#39;cid&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">populate</span><span class="token punctuation">(</span><span class="token string">&#39;author_id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>article.js</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>mongoose<span class="token punctuation">,</span> types<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./db&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> Schrma <span class="token operator">=</span> mongoose<span class="token punctuation">.</span>Schema

<span class="token keyword">const</span> ArticleSchema <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Schrma</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> types<span class="token punctuation">.</span>String<span class="token punctuation">,</span>
        <span class="token literal-property property">unique</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">cid</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> types<span class="token punctuation">.</span>ObjectId<span class="token punctuation">,</span>
        <span class="token literal-property property">ref</span><span class="token operator">:</span> <span class="token string">&#39;ArticleCate&#39;</span> <span class="token comment">//cid\u548C \u6587\u7AE0\u5206\u7C7B\u5EFA\u7ACB\u5173\u7CFB\u3002   model</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">author_id</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> types<span class="token punctuation">.</span>ObjectId<span class="token punctuation">,</span>
        <span class="token literal-property property">ref</span><span class="token operator">:</span> <span class="token string">&#39;ArticleCate&#39;</span> <span class="token comment">//cid\u548C \u6587\u7AE0\u5206\u7C7B\u5EFA\u7ACB\u5173\u7CFB\u3002   model</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">author_name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> types<span class="token punctuation">.</span>String
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">description</span><span class="token operator">:</span> types<span class="token punctuation">.</span>String<span class="token punctuation">,</span>
    <span class="token literal-property property">content</span><span class="token operator">:</span> types<span class="token punctuation">.</span>String
<span class="token punctuation">}</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> mongoose<span class="token punctuation">.</span><span class="token function">model</span><span class="token punctuation">(</span><span class="token string">&#39;Article&#39;</span><span class="token punctuation">,</span> ArticleSchema<span class="token punctuation">,</span> <span class="token string">&#39;article&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34),o=[e];function c(l,i){return s(),a("div",null,o)}const u=n(t,[["render",c],["__file","mongoose.html.vue"]]);export{u as default};
