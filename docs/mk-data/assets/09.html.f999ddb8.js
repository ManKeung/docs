import{_ as n,o as s,c as a,a as e}from"./app.3b7c88d8.js";const p={},t=e(`<h1 id="typescript-\u4E2D\u5FC5\u987B\u77E5\u9053\u7684-6-\u4E2A\u6CDB\u578B\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#typescript-\u4E2D\u5FC5\u987B\u77E5\u9053\u7684-6-\u4E2A\u6CDB\u578B\u65B9\u6CD5" aria-hidden="true">#</a> TypeScript \u4E2D\u5FC5\u987B\u77E5\u9053\u7684 6 \u4E2A\u6CDB\u578B\u65B9\u6CD5</h1><p>ypeScript \u539F\u751F\u63D0\u4F9B\u4E86\u51E0\u79CD\u6709\u7528\u7684\u5B9E\u7528\u7C7B\u578B\u6765\u5E2E\u52A9\u6211\u4EEC\u6267\u884C\u4E00\u4E9B\u5E38\u89C1\u7684\u7C7B\u578B\u8F6C\u6362\u3002</p><p>TypeScript \u4E2D\u7684\u7C7B\u578B\u7CFB\u7EDF\u975E\u5E38\u5F3A\u5927\u3002\u5B83\u4E3A\u6211\u4EEC\u63D0\u4F9B\u4E86\u7C7B\u578B\u5B89\u5168\u3002\u867D\u7136\u7C7B\u578B\u7CFB\u7EDF\u6DF1\u53D7\u559C\u7231\uFF0C\u4F46\u5982\u679C\u6211\u4EEC\u4E0D\u89C4\u5212\u548C\u8BBE\u8BA1\u7C7B\u578B\u63A5\u53E3\uFF0C\u5B83\u4E5F\u4F1A\u4F7F\u6211\u4EEC\u7684\u4EE3\u7801\u6DF7\u4E71\u548C\u96BE\u4EE5\u9605\u8BFB\u3002</p><p>TypeScript \u539F\u751F\u63D0\u4F9B\u4E86\u51E0\u79CD\u6709\u7528\u7684\u5B9E\u7528\u7C7B\u578B\u6765\u5E2E\u52A9\u6211\u4EEC\u6267\u884C\u4E00\u4E9B\u5E38\u89C1\u7684\u7C7B\u578B\u8F6C\u6362\u3002\u8FD9\u4E9B\u5B9E\u7528\u7C7B\u578B\u90FD\u662F\u5168\u5C40\u53EF\u7528\u7684\uFF0C\u800C\u4E14\u90FD\u4F7F\u7528\u4E86\u6CDB\u578B\uFF0C\u5728\u5F00\u59CB\u4E4B\u524D\uFF0C\u5148\u7B80\u5355\u4ECB\u7ECD\u4E00\u4E0B\u6CDB\u578B\u3002</p><h2 id="\u901A\u7528\u7684" tabindex="-1"><a class="header-anchor" href="#\u901A\u7528\u7684" aria-hidden="true">#</a> \u901A\u7528\u7684</h2><p>\u907F\u514D\u4EE3\u7801\u91CD\u590D\u548C\u521B\u5EFA\u53EF\u91CD\u7528\u7C7B\u578B\u662F\u7F16\u5199\u5E72\u51C0\u4EE3\u7801\u7684\u91CD\u8981\u90E8\u5206\u3002\u6CDB\u578B\u662F TypeScript \u7684\u4E00\u4E2A\u7279\u6027\uFF0C\u5B83\u5141\u8BB8\u6211\u4EEC\u7F16\u5199\u53EF\u91CD\u7528\u7684\u7C7B\u578B\u3002\u770B\u4E0B\u9762\u7684\u4F8B\u5B50\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Add<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> addNumbers<span class="token operator">:</span> Add<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> addStrings<span class="token operator">:</span> Add<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5C06\u6B63\u786E\u7684\u7C7B\u578B\u653E\u5165 Add \u7684\u6CDB\u578B\u4E2D\uFF0C\u53EF\u4EE5\u7528\u6765\u63CF\u8FF0\u4E24\u4E2A\u6570\u5B57\u7684\u76F8\u52A0\u6216\u8005\u4E24\u4E2A\u5B57\u7B26\u4E32\u7684\u8FDE\u63A5\u3002</p><p>\u6211\u4EEC\u4E0D\u9700\u8981\u4E3A\u6BCF\u4E2A\u51FD\u6570\u90FD\u5199\u4E00\u4E2A\u7C7B\u578B\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u7528\u4E00\u4E2A\u6CDB\u578B\u7C7B\u578B\u5199\u4E00\u6B21\u3002\u8FD9\u4E0D\u4EC5\u8282\u7701\u4E86\u6211\u4EEC\u7684\u7CBE\u529B\uFF0C\u800C\u4E14\u4F7F\u6211\u4EEC\u7684\u4EE3\u7801\u66F4\u5E72\u51C0\uFF0C\u66F4\u4E0D\u5BB9\u6613\u51FA\u9519\u3002</p><p>\u4E0B\u9762\u6211\u5C06\u8DDF\u5927\u5BB6\u4E00\u8D77\u6765\u5206\u4EAB 7 \u79CD\u5B9E\u7528\u7C7B\u578B\uFF0C\u4E5F\u662F\u6211\u4EEC\u7ECF\u5E38\u7528\u5230\u7684\u3002</p><h2 id="partial-type" tabindex="-1"><a class="header-anchor" href="#partial-type" aria-hidden="true">#</a> <code>Partial&lt;Type&gt;</code></h2><p>Partial \u6784\u9020\u4E00\u4E2A\u7C7B\u578B\uFF0C\u5176\u6240\u6709\u7C7B\u578B\u5C5E\u6027\u90FD\u8BBE\u7F6E\u4E3A\u53EF\u9009\u3002\u8FD9\u5728\u6211\u4EEC\u4E3A\u5BF9\u8C61\u7F16\u5199\u66F4\u65B0\u903B\u8F91\u65F6\u975E\u5E38\u6709\u7528\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">User</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    address<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    occupation<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">PartialUser</span> <span class="token operator">=</span> Partial<span class="token operator">&lt;</span>User<span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token comment">// type PartialUser = {</span>
<span class="token comment">//   name?: string;</span>
<span class="token comment">//   age?: number;</span>
<span class="token comment">//   address?: string;</span>
<span class="token comment">//   occupation?: string;</span>
<span class="token comment">// }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="required-type" tabindex="-1"><a class="header-anchor" href="#required-type" aria-hidden="true">#</a> <code>Required&lt;Type&gt;</code></h2><p>Required \u4E0E Partial \u76F8\u53CD\u3002\u5B83\u6784\u9020\u4E00\u4E2A\u7C7B\u578B\uFF0C\u5176\u4E2D\u9700\u8981\u8BE5\u7C7B\u578B\u7684\u6240\u6709\u5C5E\u6027\u3002\u5B83\u53EF\u7528\u4E8E\u786E\u4FDD\u6CA1\u6709\u53EF\u9009\u5C5E\u6027\u51FA\u73B0\u5728\u7C7B\u578B\u4E2D\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">PartialUser</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    address<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    occupation<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">User</span> <span class="token operator">=</span> Required<span class="token operator">&lt;</span>PartialUser<span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token comment">// type User = {</span>
<span class="token comment">//   name: string;</span>
<span class="token comment">//   age: number;</span>
<span class="token comment">//   address: string;</span>
<span class="token comment">//   occupation: string;</span>
<span class="token comment">// }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pick-type-keys" tabindex="-1"><a class="header-anchor" href="#pick-type-keys" aria-hidden="true">#</a> <code>Pick&lt;Type, Keys&gt;</code></h2><p>Pick \u5C06\u4ECE Type \u4E2D\u9009\u53D6\u5C5E\u6027\u96C6 Keys \u4EE5\u521B\u5EFA\u65B0\u7C7B\u578B\u3002\u952E\u53EF\u4EE5\u662F\u5B57\u7B26\u4E32\u6587\u5B57\u6216\u5B57\u7B26\u4E32\u6587\u5B57\u7684\u5E76\u96C6\u3002Keys \u7684\u503C\u5FC5\u987B\u662F Type \u7684\u952E\uFF0C\u5426\u5219 TypeScript \u7F16\u8BD1\u5668\u4F1A\u62A5\u9519\u3002\u5F53\u60A8\u60F3\u8981\u901A\u8FC7\u4ECE\u5177\u6709\u8BB8\u591A\u5C5E\u6027\u7684\u5BF9\u8C61\u4E2D\u9009\u53D6\u67D0\u4E9B\u5C5E\u6027\u6765\u521B\u5EFA\u66F4\u8F7B\u7684\u5BF9\u8C61\u65F6\uFF0C\u6B64\u5B9E\u7528\u7A0B\u5E8F\u7C7B\u578B\u7279\u522B\u6709\u7528\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">User</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    address<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    occupation<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">BasicUser</span> <span class="token operator">=</span> Pick<span class="token operator">&lt;</span>User<span class="token punctuation">,</span> <span class="token string">&quot;name&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;age&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token comment">// type BasicUser = {</span>
<span class="token comment">//   name: string;</span>
<span class="token comment">//   age: number;</span>
<span class="token comment">// }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="omit-type-keys" tabindex="-1"><a class="header-anchor" href="#omit-type-keys" aria-hidden="true">#</a> <code>Omit&lt;Type, Keys&gt;</code></h2><p>\u7701\u7565\u4E0E\u9009\u62E9\u76F8\u53CD\u3002keys \u4E0D\u662F\u5173\u4E8E\u4FDD\u7559\u54EA\u4E9B\u5C5E\u6027\uFF0C\u800C\u662F\u8981\u7701\u7565\u7684\u5C5E\u6027\u952E\u96C6\u3002\u5F53\u6211\u4EEC\u53EA\u60F3\u4ECE\u5BF9\u8C61\u4E2D\u5220\u9664\u67D0\u4E9B\u5C5E\u6027\u5E76\u4FDD\u7559\u5176\u4ED6\u5C5E\u6027\u65F6\uFF0C\u8FD9\u4F1A\u66F4\u6709\u7528\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">User</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    address<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    occupation<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">BasicUser</span> <span class="token operator">=</span> Omit<span class="token operator">&lt;</span>User<span class="token punctuation">,</span> <span class="token string">&quot;address&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;occupation&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token comment">// type BasicUser = {</span>
<span class="token comment">//   name: string;</span>
<span class="token comment">//   age: number;</span>
<span class="token comment">// }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="readonly-type" tabindex="-1"><a class="header-anchor" href="#readonly-type" aria-hidden="true">#</a> <code>Readonly&lt;Type&gt;</code></h2><p>Readonly \u6784\u9020\u4E00\u4E2A\u7C7B\u578B\uFF0C\u8BE5\u7C7B\u578B\u7684\u6240\u6709\u5C5E\u6027\u90FD\u8BBE\u7F6E\u4E3A\u53EA\u8BFB\u3002\u7ED9 TS \u91CD\u65B0\u8D4B\u65B0\u503C\u4F1A\u62A5\u9519\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">User</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    address<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    occupation<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">ReadOnlyUser</span> <span class="token operator">=</span> Readonly<span class="token operator">&lt;</span>User<span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> user<span class="token operator">:</span> ReadOnlyUser <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&quot;Mark&quot;</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">34</span><span class="token punctuation">,</span>
    address<span class="token operator">:</span> <span class="token string">&quot;Chicago&quot;</span><span class="token punctuation">,</span>
    occupation<span class="token operator">:</span> <span class="token string">&quot;IT Engineer&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

user<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;Maxwell&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// Cannot assign to &#39;name&#39; because it is a read-only property.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="returntype-type" tabindex="-1"><a class="header-anchor" href="#returntype-type" aria-hidden="true">#</a> <code>ReturnType&lt;Type&gt;</code></h2><p>ReturnType \u4ECE\u51FD\u6570\u7C7B\u578B\u7684\u8FD4\u56DE\u7C7B\u578B\u6784\u9020\u4E00\u4E2A\u7C7B\u578B\u3002\u5F53\u6211\u4EEC\u5904\u7406\u6765\u81EA\u5916\u90E8\u5E93\u7684\u51FD\u6570\u7C7B\u578B\u5E76\u5E0C\u671B\u57FA\u4E8E\u5B83\u4EEC\u6784\u5EFA\u81EA\u5B9A\u4E49\u7C7B\u578B\u65F6\uFF0C\u5B83\u5F88\u6709\u7528\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&quot;axios&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">Response</span> <span class="token operator">=</span> ReturnType<span class="token operator">&lt;</span><span class="token keyword">typeof</span> axios<span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">callAPI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Response <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">axios</span><span class="token punctuation">(</span><span class="token string">&quot;url&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9664\u4E86\u4E0A\u9762\u63D0\u5230\u7684\u90A3\u4E9B\uFF0C\u8FD8\u6709\u5176\u4ED6\u5B9E\u7528\u7A0B\u5E8F\u7C7B\u578B\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u7F16\u5199\u66F4\u5E72\u51C0\u7684\u4EE3\u7801\u3002\u53EF\u4EE5\u5728\u6B64\u5904\u627E\u5230\u6709\u5173\u5B9E\u7528\u7A0B\u5E8F\u7C7B\u578B\u7684 TypeScript \u6587\u6863\u7684\u94FE\u63A5\u3002</p><p>\u5B9E\u7528\u7A0B\u5E8F\u7C7B\u578B\u662F TypeScript \u63D0\u4F9B\u7684\u4E00\u9879\u975E\u5E38\u6709\u7528\u7684\u529F\u80FD\uFF0C\u5F00\u53D1\u4EBA\u5458\u5E94\u8BE5\u4F7F\u7528\u5B83\u4EEC\u6765\u907F\u514D\u786C\u7F16\u7801\u7C7B\u578B\u3002</p>`,30),o=[t];function i(c,l){return s(),a("div",null,o)}const u=n(p,[["render",i],["__file","09.html.vue"]]);export{u as default};