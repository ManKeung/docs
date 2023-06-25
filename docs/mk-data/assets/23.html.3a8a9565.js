import{_ as o,r as a,o as i,c as l,b as n,d as s,e,w as c,a as r}from"./app.d71537a2.js";const u={},d=n("h1",{id:"\u524D\u7AEF\u4EE3\u7801\u5DE5\u4F5C\u6D41",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u524D\u7AEF\u4EE3\u7801\u5DE5\u4F5C\u6D41","aria-hidden":"true"},"#"),s(" \u524D\u7AEF\u4EE3\u7801\u5DE5\u4F5C\u6D41")],-1),v={class:"custom-container tip"},k=n("p",{class:"custom-container-title"},"\u63D0\u793A",-1),m=r(`<p>\u5DE5\u6B32\u5584\u5176\u4E8B\uFF0C\u5FC5\u5148\u5229\u5176\u5668\u3002\u5BF9\u4E8E\u5199\u4EE3\u7801\u800C\u8A00\uFF0C\u4E5F\u662F\u9700\u8981\u6709\u4E00\u5957\u5B8C\u5584\u7684\u5DE5\u4F5C\u6D41\uFF08\u5DE5\u5177\u548C\u6D41\u7A0B\uFF09\u3002</p><h2 id="eslint" tabindex="-1"><a class="header-anchor" href="#eslint" aria-hidden="true">#</a> ESLint</h2><p>ESLint \u662F\u4E00\u6B3E\u63D2\u4EF6\u5316\u7684 JavaScript \u4EE3\u7801\u9759\u6001\u68C0\u67E5\u5DE5\u5177\uFF0C\u5176\u6838\u5FC3\u662F\u901A\u8FC7\u5BF9\u4EE3\u7801\u89E3\u6790\u5F97\u5230\u7684 AST\uFF08Abstract Syntax Tree\uFF0C\u62BD\u8C61\u8BED\u6CD5\u6811\uFF09\u8FDB\u884C\u6A21\u5F0F\u5339\u914D\uFF0C\u6765\u5206\u6790\u4EE3\u7801\u8FBE\u5230\u68C0\u67E5\u4EE3\u7801\u8D28\u91CF\u548C\u98CE\u683C\u95EE\u9898\u7684\u80FD\u529B\u3002</p><h3 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h3><p>\u5B89\u88C5\u5E76\u521D\u59CB\u5316 eslint\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5168\u5C40\u5B89\u88C5</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> eslint

<span class="token comment"># cd\u5230\u9879\u76EE\u6839\u76EE\u5F55\u4E0B</span>
<span class="token comment"># \u5F3A\u5236\u521D\u59CB\u5316package.json</span>
<span class="token function">npm</span> init <span class="token parameter variable">-force</span>

<span class="token comment"># \u521D\u59CB\u5316ESLint</span>
eslint <span class="token parameter variable">--init</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u65B9\u5F0F" aria-hidden="true">#</a> \u4F7F\u7528\u65B9\u5F0F</h3><p><strong>\u5199\u6CE8\u91CA</strong></p><p>\u4E0B\u9762\u8FD9\u884C\u6CE8\u91CA\u8868\u793A\u5728\u5F53\u524D\u6587\u4EF6\u4E2D\u7981\u7528 console \u5173\u952E\u5B57</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/* eslint no-console: &quot;error&quot; */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u5199\u6587\u4EF6</strong></p><p>ESLint \u652F\u6301 eslint.js \uFF0C eslintrc.yaml \uFF0C eslintrc.json \u7C7B\u578B\u7684\u914D\u7F6E\u6587\u4EF6\u3002</p><p>\u5982 eslint.js \u914D\u7F6E\u6587\u4EF6\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u73AF\u5883</span>
        <span class="token literal-property property">browser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">es2021</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// \u62D3\u5C55</span>
        <span class="token string">&quot;eslint:recommended&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;plugin:@typescript-eslint/recommended&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token string">&quot;@typescript-eslint/parser&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u89E3\u6790\u5668\uFF0C\u672C\u89E3\u6790\u5668\u652F\u6301Ts</span>
    <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u89E3\u6790\u5668\u914D\u7F6E\u9009\u9879</span>
        <span class="token literal-property property">ecmaVersion</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token comment">// \u6307\u5B9Aes\u7248\u672C</span>
        <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">&quot;module&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u4EE3\u7801\u652F\u6301es6\uFF0C\u4F7F\u7528module</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// \u63D2\u4EF6</span>
        <span class="token string">&quot;@typescript-eslint&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u89C4\u5219</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;eslint-define-config&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">browser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">node</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">jest</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">es6</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;vue&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token string">&quot;vue-eslint-parser&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">ecmaVersion</span><span class="token operator">:</span> <span class="token string">&quot;latest&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">&quot;module&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">allowImportExportEverywhere</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">ecmaFeatures</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">jsx</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;airbnb-base&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;eslint:recommended&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;plugin:vue/vue3-essential&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;plugin:vue/vue3-recommended&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;plugin:prettier/recommended&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u7981\u6B62\u4F7F\u7528\u591A\u4F59\u7684\u5305</span>
        <span class="token string-property property">&quot;import/no-extraneous-dependencies&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token comment">// \u786E\u4FDD\u5728\u5BFC\u5165\u8DEF\u5F84\u5185\u4E00\u81F4\u4F7F\u7528\u6587\u4EF6\u6269\u5C55\u540D</span>
        <span class="token string-property property">&quot;import/extensions&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token comment">// \u786E\u4FDD\u5BFC\u5165\u6307\u5411\u53EF\u4EE5\u89E3\u6790\u7684\u6587\u4EF6/\u6A21\u5757</span>
        <span class="token string-property property">&quot;import/no-unresolved&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token comment">// \u9996\u9009\u9ED8\u8BA4\u5BFC\u51FA\u5BFC\u5165/\u9996\u9009\u9ED8\u8BA4\u5BFC\u51FA</span>
        <span class="token string-property property">&quot;import/prefer-default-export&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token comment">// \u8981\u6C42\u4F7F\u7528 let \u6216 const \u800C\u4E0D\u662F var</span>
        <span class="token string-property property">&quot;no-var&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// \u7981\u6B62\u4F7F\u7528 new \u4EE5\u907F\u514D\u4EA7\u751F\u526F\u4F5C\u7528</span>
        <span class="token string-property property">&quot;no-new&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token comment">// \u7981\u6B62\u53D8\u91CF\u58F0\u660E\u4E0E\u5916\u5C42\u4F5C\u7528\u57DF\u7684\u53D8\u91CF\u540C\u540D</span>
        <span class="token string-property property">&quot;no-shadow&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token comment">// \u7981\u7528 console</span>
        <span class="token string-property property">&quot;no-console&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token comment">// \u7981\u6B62\u6807\u8BC6\u7B26\u4E2D\u6709\u60AC\u7A7A\u4E0B\u5212\u7EBF</span>
        <span class="token string-property property">&quot;no-underscore-dangle&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token comment">// \u7981\u6B62\u5728\u53EF\u80FD\u4E0E\u6BD4\u8F83\u64CD\u4F5C\u7B26\u76F8\u6DF7\u6DC6\u7684\u5730\u65B9\u4F7F\u7528\u7BAD\u5934\u51FD\u6570</span>
        <span class="token string-property property">&quot;no-confusing-arrow&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token comment">// \u7981\u7528\u4E00\u5143\u64CD\u4F5C\u7B26 ++ \u548C --</span>
        <span class="token string-property property">&quot;no-plusplus&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token comment">// \u7981\u6B62\u5BF9 function \u7684\u53C2\u6570\u8FDB\u884C\u91CD\u65B0\u8D4B\u503C</span>
        <span class="token string-property property">&quot;no-param-reassign&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token comment">// \u7981\u7528\u7279\u5B9A\u7684\u8BED\u6CD5</span>
        <span class="token string-property property">&quot;no-restricted-syntax&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token comment">// \u7981\u6B62\u5728\u53D8\u91CF\u5B9A\u4E49\u4E4B\u524D\u4F7F\u7528\u5B83\u4EEC</span>
        <span class="token string-property property">&quot;no-use-before-define&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token comment">// \u7981\u6B62\u76F4\u63A5\u8C03\u7528 Object.prototypes \u7684\u5185\u7F6E\u5C5E\u6027</span>
        <span class="token string-property property">&quot;no-prototype-builtins&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token comment">// \u7981\u6B62\u53EF\u4EE5\u5728\u6709\u66F4\u7B80\u5355\u7684\u53EF\u66FF\u4EE3\u7684\u8868\u8FBE\u5F0F\u65F6\u4F7F\u7528\u4E09\u5143\u64CD\u4F5C\u7B26</span>
        <span class="token string-property property">&quot;no-unneeded-ternary&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// \u7981\u6B62\u91CD\u590D\u6A21\u5757\u5BFC\u5165</span>
        <span class="token string-property property">&quot;no-duplicate-imports&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// \u7981\u6B62\u5728\u5BF9\u8C61\u4E2D\u4F7F\u7528\u4E0D\u5FC5\u8981\u7684\u8BA1\u7B97\u5C5E\u6027</span>
        <span class="token string-property property">&quot;no-useless-computed-key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// \u5F3A\u5236\u4F7F\u7528\u4E00\u81F4\u7684\u7F29\u8FDB</span>
        <span class="token literal-property property">indent</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// \u5F3A\u5236\u4F7F\u7528\u9A86\u9A7C\u62FC\u5199\u6CD5\u547D\u540D\u7EA6\u5B9A</span>
        <span class="token literal-property property">camelcase</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token comment">// \u5F3A\u5236\u7C7B\u65B9\u6CD5\u4F7F\u7528 this</span>
        <span class="token string-property property">&quot;class-methods-use-this&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token comment">// \u8981\u6C42\u6784\u9020\u51FD\u6570\u9996\u5B57\u6BCD\u5927\u5199</span>
        <span class="token string-property property">&quot;new-cap&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token comment">// \u5F3A\u5236\u4E00\u81F4\u5730\u4F7F\u7528 function \u58F0\u660E\u6216\u8868\u8FBE\u5F0F</span>
        <span class="token string-property property">&quot;func-style&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token comment">// \u5F3A\u5236\u4E00\u884C\u7684\u6700\u5927\u957F\u5EA6</span>
        <span class="token string-property property">&quot;max-len&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token comment">// \u8981\u6C42 return \u8BED\u53E5\u8981\u4E48\u603B\u662F\u6307\u5B9A\u8FD4\u56DE\u7684\u503C\uFF0C\u8981\u4E48\u4E0D\u6307\u5B9A</span>
        <span class="token string-property property">&quot;consistent-return&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token comment">// \u5F3A\u5236switch\u8981\u6709default\u5206\u652F</span>
        <span class="token string-property property">&quot;default-case&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token comment">// \u5F3A\u5236\u5269\u4F59\u548C\u6269\u5C55\u8FD0\u7B97\u7B26\u53CA\u5176\u8868\u8FBE\u5F0F\u4E4B\u95F4\u6709\u7A7A\u683C</span>
        <span class="token string-property property">&quot;rest-spread-spacing&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// \u8981\u6C42\u4F7F\u7528 const \u58F0\u660E\u90A3\u4E9B\u58F0\u660E\u540E\u4E0D\u518D\u88AB\u4FEE\u6539\u7684\u53D8\u91CF</span>
        <span class="token string-property property">&quot;prefer-const&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// \u5F3A\u5236\u7BAD\u5934\u51FD\u6570\u7684\u7BAD\u5934\u524D\u540E\u4F7F\u7528\u4E00\u81F4\u7684\u7A7A\u683C</span>
        <span class="token string-property property">&quot;arrow-spacing&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">overrides</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">files</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;*.vue&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// \u8981\u6C42\u7EC4\u4EF6\u540D\u79F0\u603B\u662F\u591A\u4E2A\u5355\u8BCD</span>
                <span class="token string-property property">&quot;vue/multi-word-component-names&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u914D\u7F6E\u9879</strong></p><ul><li>parser - \u89E3\u6790\u5668</li><li>parserOptions - \u89E3\u6790\u5668\u9009\u9879</li><li>env \u548C globals - \u73AF\u5883\u548C\u5168\u5C40\u53D8\u91CF</li><li>rules - \u89C4\u5219 <ul><li>off \u6216 0\uFF0C\u5173\u95ED\u89C4\u5219</li><li>warn \u6216 1\uFF0C\u5F00\u542F\u89C4\u5219</li><li>error \u6216 2\uFF0C\u5F00\u542F\u89C4\u5219\uFF0C\u5E76\u4F1A\u51FA\u9519\u963B\u6B62\u4EE3\u7801\u8FD0\u884C</li></ul></li><li>plugins - \u63D2\u4EF6</li><li>extends - \u62D3\u5C55</li></ul><p><strong>\u914D\u7F6E\u4F18\u5148\u7EA7</strong></p><p>\u89C4\u5219\u662F\u4F7F\u7528\u79BB\u8981\u68C0\u6D4B\u7684\u6587\u4EF6\u6700\u8FD1\u7684 .eslintrc \u6587\u4EF6\u4F5C\u4E3A\u6700\u9AD8\u4F18\u5148\u7EA7\u3002</p><ul><li>\u884C\u5185\u914D\u7F6E</li><li>\u547D\u4EE4\u884C\u9009\u9879</li><li>\u9879\u76EE\u7EA7\u914D\u7F6E</li><li>IDE \u73AF\u5883\u914D\u7F6E</li></ul><h2 id="stylelint" tabindex="-1"><a class="header-anchor" href="#stylelint" aria-hidden="true">#</a> Stylelint</h2><p>\u5728\u9879\u76EE\u6839\u76EE\u5F55\u521B\u5EFA .stylelintrc.js \u6587\u4EF6\uFF0C\u5E76\u586B\u5165\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">defaultSeverity</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
    <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;stylelint-config-standard&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;stylelint-config-prettier&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;stylelint-order&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u4E0D\u5141\u8BB8\u672A\u77E5\u51FD\u6570</span>
        <span class="token string-property property">&quot;function-no-unknown&quot;</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token comment">// \u6307\u5B9A\u7C7B\u9009\u62E9\u5668\u7684\u6A21\u5F0F</span>
        <span class="token string-property property">&quot;selector-class-pattern&quot;</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token comment">// \u7981\u6B62\u7A7A\u6E90\u7801</span>
        <span class="token string-property property">&quot;no-empty-source&quot;</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token comment">// \u6307\u5B9A\u5B57\u7B26\u4E32\u4F7F\u7528\u5355\u5F15\u53F7</span>
        <span class="token string-property property">&quot;string-quotes&quot;</span><span class="token operator">:</span> <span class="token string">&quot;single&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// \u7981\u6B62\u672A\u77E5\u7684@\u89C4\u5219</span>
        <span class="token string-property property">&quot;at-rule-no-unknown&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">ignoreAtRules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token string">&quot;tailwind&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;apply&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;variants&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;responsive&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;screen&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;function&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;if&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;each&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;include&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;mixin&quot;</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// \u6307\u5B9A@\u89C4\u5219\u540D\u7684\u5927\u5C0F\u5199</span>
        <span class="token string-property property">&quot;at-rule-name-case&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lower&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// \u6307\u5B9A\u7F29\u8FDB</span>
        <span class="token literal-property property">indentation</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">severity</span><span class="token operator">:</span> <span class="token string">&quot;warning&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// \u7981\u6B62\u672A\u77E5\u7684\u4F2A\u7C7B\u9009\u62E9\u5668</span>
        <span class="token string-property property">&quot;selector-pseudo-class-no-unknown&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">ignorePseudoClasses</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;global&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// \u7981\u6B62\u672A\u77E5\u7684\u4F2A\u5143\u7D20\u9009\u62E9\u5668</span>
        <span class="token string-property property">&quot;selector-pseudo-element-no-unknown&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">ignorePseudoElements</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;v-deep&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;order/properties-order&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;position&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;top&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;right&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;bottom&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;left&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;z-index&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;display&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;justify-content&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;align-items&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;float&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;clear&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;overflow&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;overflow-x&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;overflow-y&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;margin&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;margin-top&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;margin-right&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;margin-bottom&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;margin-left&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;padding&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;padding-top&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;padding-right&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;padding-bottom&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;padding-left&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;width&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;min-width&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;max-width&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;height&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;min-height&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;max-height&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;font-size&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;font-family&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;font-weight&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;border&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;border-style&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;border-width&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;border-color&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;border-top&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;border-top-style&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;border-top-width&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;border-top-color&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;border-right&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;border-right-style&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;border-right-width&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;border-right-color&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;border-bottom&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;border-bottom-style&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;border-bottom-width&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;border-bottom-color&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;border-left&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;border-left-style&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;border-left-width&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;border-left-color&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;border-radius&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;text-align&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;text-justify&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;text-indent&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;text-overflow&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;text-decoration&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;white-space&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;color&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;background&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;background-position&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;background-repeat&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;background-size&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;background-color&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;background-clip&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;opacity&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;filter&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;list-style&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;outline&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;visibility&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;box-shadow&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;text-shadow&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;resize&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;transition&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="prettier" tabindex="-1"><a class="header-anchor" href="#prettier" aria-hidden="true">#</a> Prettier</h2><p>Prettier \u662F\u4E00\u4E2A\u4EE3\u7801\u683C\u5F0F\u5316\u7684\u5DE5\u5177\u3002</p><h3 id="\u5B89\u88C5\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u4F7F\u7528" aria-hidden="true">#</a> \u5B89\u88C5\u4F7F\u7528</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev --save-exact prettier

<span class="token comment"># \u683C\u5F0F\u5316\u6240\u6709\u6587\u4EF6\uFF0Cnpx\u547D\u4EE4\u662F\u4F7F\u7528\u5F53\u524D\u9879\u76EE\u4E0B\u7684prettier</span>
npx prettier <span class="token parameter variable">--write</span> <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6</h3><p>Prettier \u652F\u6301 .prettierrc \u4E3A\u540D\u79F0\uFF0C\u4EE5 .yaml .yml .json .js \u4E3A\u540E\u7F00\u7684\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u5F53\u7136\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528 package.json \u6587\u4EF6\u4E2D\u7684 Prettier \u5C5E\u6027\u6765\u914D\u7F6E\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">printWidth</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token comment">//\u4E00\u884C\u7684\u5B57\u7B26\u6570\uFF0C\u5982\u679C\u8D85\u8FC7\u4F1A\u8FDB\u884C\u6362\u884C\uFF0C\u9ED8\u8BA4\u4E3A80</span>
    <span class="token literal-property property">tabWidth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">//\u4E00\u4E2Atab\u4EE3\u8868\u51E0\u4E2A\u7A7A\u683C\u6570\uFF0C\u9ED8\u8BA4\u4E3A80</span>
    <span class="token literal-property property">useTabs</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//\u662F\u5426\u4F7F\u7528tab\u8FDB\u884C\u7F29\u8FDB\uFF0C\u9ED8\u8BA4\u4E3Afalse\uFF0C\u8868\u793A\u7528\u7A7A\u683C\u8FDB\u884C\u7F29\u51CF</span>
    <span class="token literal-property property">singleQuote</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//\u5B57\u7B26\u4E32\u662F\u5426\u4F7F\u7528\u5355\u5F15\u53F7\uFF0C\u9ED8\u8BA4\u4E3Afalse\uFF0C\u4F7F\u7528\u53CC\u5F15\u53F7</span>
    <span class="token literal-property property">semi</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//\u884C\u4F4D\u662F\u5426\u4F7F\u7528\u5206\u53F7\uFF0C\u9ED8\u8BA4\u4E3Atrue</span>
    <span class="token literal-property property">trailingComma</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span> <span class="token comment">//\u662F\u5426\u4F7F\u7528\u5C3E\u9017\u53F7\uFF0C\u6709\u4E09\u4E2A\u53EF\u9009\u503C&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u4E00\u884C\u6700\u591A 120 \u5B57\u7B26</span>
    <span class="token literal-property property">printWidth</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
    <span class="token comment">// \u4F7F\u7528 2 \u4E2A\u7A7A\u683C\u7F29\u8FDB</span>
    <span class="token literal-property property">tabWidth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u4E0D\u4F7F\u7528\u7F29\u8FDB\u7B26\uFF0C\u800C\u4F7F\u7528\u7A7A\u683C</span>
    <span class="token literal-property property">useTabs</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// \u884C\u5C3E\u9700\u8981\u6709\u5206\u53F7</span>
    <span class="token literal-property property">semi</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u4F7F\u7528\u5355\u5F15\u53F7</span>
    <span class="token literal-property property">singleQuote</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5BF9\u8C61\u7684 key \u4EC5\u5728\u5FC5\u8981\u65F6\u7528\u5F15\u53F7</span>
    <span class="token literal-property property">quoteProps</span><span class="token operator">:</span> <span class="token string">&quot;as-needed&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// jsx \u4E0D\u4F7F\u7528\u5355\u5F15\u53F7\uFF0C\u800C\u4F7F\u7528\u53CC\u5F15\u53F7</span>
    <span class="token literal-property property">jsxSingleQuote</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// \u672B\u5C3E\u9700\u8981\u6709\u9017\u53F7</span>
    <span class="token literal-property property">trailingComma</span><span class="token operator">:</span> <span class="token string">&quot;all&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5927\u62EC\u53F7\u5185\u7684\u9996\u5C3E\u9700\u8981\u7A7A\u683C</span>
    <span class="token literal-property property">bracketSpacing</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// jsx \u6807\u7B7E\u7684\u53CD\u5C16\u62EC\u53F7\u9700\u8981\u6362\u884C</span>
    <span class="token literal-property property">jsxBracketSameLine</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7BAD\u5934\u51FD\u6570\uFF0C\u53EA\u6709\u4E00\u4E2A\u53C2\u6570\u7684\u65F6\u5019\uFF0C\u4E5F\u9700\u8981\u62EC\u53F7</span>
    <span class="token literal-property property">arrowParens</span><span class="token operator">:</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u6BCF\u4E2A\u6587\u4EF6\u683C\u5F0F\u5316\u7684\u8303\u56F4\u662F\u6587\u4EF6\u7684\u5168\u90E8\u5185\u5BB9</span>
    <span class="token literal-property property">rangeStart</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">rangeEnd</span><span class="token operator">:</span> <span class="token number">Infinity</span><span class="token punctuation">,</span>
    <span class="token comment">// \u4E0D\u9700\u8981\u5199\u6587\u4EF6\u5F00\u5934\u7684 @prettier</span>
    <span class="token literal-property property">requirePragma</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// \u4E0D\u9700\u8981\u81EA\u52A8\u5728\u6587\u4EF6\u5F00\u5934\u63D2\u5165 @prettier</span>
    <span class="token literal-property property">insertPragma</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// \u4F7F\u7528\u9ED8\u8BA4\u7684\u6298\u884C\u6807\u51C6</span>
    <span class="token literal-property property">proseWrap</span><span class="token operator">:</span> <span class="token string">&quot;preserve&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u6839\u636E\u663E\u793A\u6837\u5F0F\u51B3\u5B9A html \u8981\u4E0D\u8981\u6298\u884C</span>
    <span class="token literal-property property">htmlWhitespaceSensitivity</span><span class="token operator">:</span> <span class="token string">&quot;css&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// vue \u6587\u4EF6\u4E2D\u7684 script \u548C style \u5185\u4E0D\u7528\u7F29\u8FDB</span>
    <span class="token literal-property property">vueIndentScriptAndStyle</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// \u6362\u884C\u7B26\u4F7F\u7528 lf</span>
    <span class="token literal-property property">endOfLine</span><span class="token operator">:</span> <span class="token string">&quot;lf&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u683C\u5F0F\u5316\u5D4C\u5165\u7684\u5185\u5BB9</span>
    <span class="token literal-property property">embeddedLanguageFormatting</span><span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// html, vue, jsx \u4E2D\u6BCF\u4E2A\u5C5E\u6027\u5360\u4E00\u884C</span>
    <span class="token literal-property property">singleAttributePerLine</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="editorconfig" tabindex="-1"><a class="header-anchor" href="#editorconfig" aria-hidden="true">#</a> EditorConfig</h2><p>EditorConfig \u6709\u52A9\u4E8E\u7EF4\u62A4\u8DE8\u591A\u4E2A\u7F16\u8F91\u5668\u548C IDE \u4ECE\u4E8B\u540C\u4E00\u9879\u76EE\u7684\u591A\u4E2A\u5F00\u53D1\u4EBA\u5458\u7684\u4E00\u81F4\u7F16\u7801\u98CE\u683C\uFF0C\u56E2\u961F\u5FC5\u5907\u795E\u5668\u3002</p><h3 id="editorconfig-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#editorconfig-\u6587\u4EF6" aria-hidden="true">#</a> .editorconfig \u6587\u4EF6</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># EditorConfig is awesome: https://EditorConfig.org

# top-most EditorConfig file \u8868\u793A\u662F\u6700\u9876\u5C42\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u53D1\u73B0\u8BBE\u4E3Atrue\u65F6\uFF0C\u624D\u4F1A\u505C\u6B62\u67E5\u627E.editorconfig\u6587\u4EF6
root = true

# Unix-style newlines with a newline ending every file \u5BF9\u4E8E\u6240\u6709\u7684\u6587\u4EF6  \u59CB\u7EC8\u5728\u6587\u4EF6\u672B\u5C3E\u63D2\u5165\u4E00\u4E2A\u65B0\u884C
[*]
end_of_line = lf
insert_final_newline = true

# Matches multiple files with brace expansion notation
# Set default charset  \u5BF9\u4E8E\u6240\u6709\u7684js,py\u6587\u4EF6\uFF0C\u8BBE\u7F6E\u6587\u4EF6\u5B57\u7B26\u96C6\u4E3Autf-8
[*.{js,py}]
charset = utf-8

# 4 space indentation \u63A7\u5236py\u6587\u4EF6\u7C7B\u578B\u7684\u7F29\u8FDB\u5927\u5C0F
[*.py]
indent_style = space
indent_size = 4

# Tab indentation (no size specified) \u8BBE\u7F6E\u67D0\u4E2D\u6587\u4EF6\u7684\u7F29\u8FDB\u98CE\u683C\u4E3Atab Makefile\u672A\u6307\u660E
[Makefile]
indent_style = tab

# Indentation override for all JS under lib directory  \u8BBE\u7F6E\u5728lib\u76EE\u5F55\u4E0B\u6240\u6709JS\u7684\u7F29\u8FDB\u4E3A
[lib/**.js]
indent_style = space
indent_size = 2

# Matches the exact files either package.json or .travis.yml \u8BBE\u7F6E\u786E\u5207\u6587\u4EF6 package.json/.travis/.yml\u7684\u7F29\u8FDB\u7C7B\u578B
[{package.json,.travis.yml}]
indent_style = space
indent_size = 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u8868\u793A\u662F\u6700\u9876\u5C42\u7684 EditorConfig \u914D\u7F6E\u6587\u4EF6
root = true

# \u8868\u793A\u6240\u6709\u6587\u4EF6\u9002\u7528
[*]
# \u7F29\u8FDB\u98CE\u683C\uFF08tab | space\uFF09
indent_style = space
# \u63A7\u5236\u6362\u884C\u7C7B\u578B(lf | cr | crlf)
end_of_line = lf
# \u8BBE\u7F6E\u6587\u4EF6\u5B57\u7B26\u96C6\u4E3A utf-8
charset = utf-8
# \u53BB\u9664\u884C\u9996\u7684\u4EFB\u610F\u7A7A\u767D\u5B57\u7B26
trim_trailing_whitespace = true
# \u59CB\u7EC8\u5728\u6587\u4EF6\u672B\u5C3E\u63D2\u5165\u4E00\u4E2A\u65B0\u884C
insert_final_newline = true

# \u8868\u793A\u4EC5 md \u6587\u4EF6\u9002\u7528\u4EE5\u4E0B\u89C4\u5219
[*.md]
max_line_length = off
trim_trailing_whitespace = false

# \u8868\u793A\u4EC5 ts\u3001js\u3001vue\u3001css \u6587\u4EF6\u9002\u7528\u4EE5\u4E0B\u89C4\u5219
[*.{ts,js,vue,css}]
indent_size = 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u901A\u914D\u7B26" tabindex="-1"><a class="header-anchor" href="#\u901A\u914D\u7B26" aria-hidden="true">#</a> \u901A\u914D\u7B26</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>*                \u5339\u914D\u9664/\u4E4B\u5916\u7684\u4EFB\u610F\u5B57\u7B26\u4E32
**               \u5339\u914D\u4EFB\u610F\u5B57\u7B26\u4E32
?                \u5339\u914D\u4EFB\u610F\u5355\u4E2A\u5B57\u7B26
[name]           \u5339\u914Dname\u4E2D\u7684\u4EFB\u610F\u4E00\u4E2A\u5355\u4E00\u5B57\u7B26
[!name]          \u5339\u914D\u4E0D\u5B58\u5728name\u4E2D\u7684\u4EFB\u610F\u4E00\u4E2A\u5355\u4E00\u5B57\u7B26
{s1,s2,s3}       \u5339\u914D\u7ED9\u5B9A\u7684\u5B57\u7B26\u4E32\u4E2D\u7684\u4EFB\u610F\u4E00\u4E2A(\u7528\u9017\u53F7\u5206\u9694)
{num1..num2}   \u3000\u5339\u914Dnum1\u5230num2\u4E4B\u95F4\u7684\u4EFB\u610F\u4E00\u4E2A\u6574\u6570, \u8FD9\u91CC\u7684num1\u548Cnum2\u53EF\u4EE5\u4E3A\u6B63\u6574\u6570\u4E5F\u53EF\u4EE5\u4E3A\u8D1F\u6574\u6570
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a> \u5C5E\u6027</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>indent_style    \u8BBE\u7F6E\u7F29\u8FDB\u98CE\u683C(tab\u662F\u786C\u7F29\u8FDB\uFF0Cspace\u4E3A\u8F6F\u7F29\u8FDB)
indent_size     \u7528\u4E00\u4E2A\u6574\u6570\u5B9A\u4E49\u7684\u5217\u6570\u6765\u8BBE\u7F6E\u7F29\u8FDB\u7684\u5BBD\u5EA6\uFF0C\u5982\u679Cindent_style\u4E3Atab\uFF0C\u5219\u6B64\u5C5E\u6027\u9ED8\u8BA4\u4E3Atab_width
tab_width       \u7528\u4E00\u4E2A\u6574\u6570\u6765\u8BBE\u7F6Etab\u7F29\u8FDB\u7684\u5217\u6570\u3002\u9ED8\u8BA4\u662Findent_size
end_of_line     \u8BBE\u7F6E\u6362\u884C\u7B26\uFF0C\u503C\u4E3Alf\u3001cr\u548Ccrlf
charset         \u8BBE\u7F6E\u7F16\u7801\uFF0C\u503C\u4E3Alatin1\u3001utf-8\u3001utf-8-bom\u3001utf-16be\u548Cutf-16le\uFF0C\u4E0D\u5EFA\u8BAE\u4F7F\u7528utf-8-bom
trim_trailing_whitespace  \u8BBE\u4E3Atrue\u8868\u793A\u4F1A\u53BB\u9664\u6362\u884C\u884C\u9996\u7684\u4EFB\u610F\u7A7A\u767D\u5B57\u7B26\u3002
insert_final_newline      \u8BBE\u4E3Atrue\u8868\u793A\u4F7F\u6587\u4EF6\u4EE5\u4E00\u4E2A\u7A7A\u767D\u884C\u7ED3\u5C3E
root        \u3000\u3000\u3000\u8868\u793A\u662F\u6700\u9876\u5C42\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u53D1\u73B0\u8BBE\u4E3Atrue\u65F6\uFF0C\u624D\u4F1A\u505C\u6B62\u67E5\u627E.editorconfig\u6587\u4EF6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vscode-\u96C6\u6210" tabindex="-1"><a class="header-anchor" href="#vscode-\u96C6\u6210" aria-hidden="true">#</a> VSCode \u96C6\u6210</h2><p>\u6211\u4F7F\u7528\u7684\u662F VSCode \uFF0C\u6765\u7ED9\u5B83\u6DFB\u52A0\u9B54\u6CD5\uFF0C\u52A0 EditorConfig \uFF0C Eslint \uFF0C Prettier \uFF0C Git \u6269\u5C55\u3002</p><p>\u914D\u7F6E\u5168\u5C40\u5DE5\u4F5C\u533A setting.json \u6587\u4EF6\uFF0C\u5728\u6587\u4EF6\u4E2D\u52A0\u5165\u4E0B\u9762\u914D\u7F6E\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// \u8BBE\u7F6E\u5168\u90E8\u8BED\u8A00\u5728\u4FDD\u5B58\u65F6\u81EA\u52A8\u683C\u5F0F\u5316</span>
<span class="token property">&quot;editor.formatOnSave&quot;</span><span class="token operator">:</span> ture<span class="token punctuation">,</span>
<span class="token comment">// \u8BBE\u7F6E\u7279\u5B9A\u8BED\u8A00\u5728\u4FDD\u5B58\u65F6\u81EA\u52A8\u683C\u5F0F\u5316</span>
<span class="token property">&quot;[javascript]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.formatOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>prettier \u914D\u7F6E</strong></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token comment">// \u8BBE\u7F6E\u5168\u90E8\u8BED\u8A00\u7684\u9ED8\u8BA4\u683C\u5F0F\u5316\u7A0B\u5E8F\u4E3Aprettier</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u8BBE\u7F6E\u7279\u5B9A\u8BED\u8A00\u7684\u9ED8\u8BA4\u683C\u5F0F\u5316\u7A0B\u5E8F\u4E3Aprettier</span>
    <span class="token property">&quot;[javascript]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>ESLint \u914D\u7F6E</strong></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token comment">// \u4FDD\u5B58\u65F6\u81EA\u52A8\u4FEE\u590D</span>
    \u200B<span class="token property">&quot;editor.codeActionsOnSave&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// For ESLint</span>
        <span class="token property">&quot;source.fixAll.eslint&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="husky-lint-staged" tabindex="-1"><a class="header-anchor" href="#husky-lint-staged" aria-hidden="true">#</a> husky/lint-staged</h2><p>\u5728\u63D0\u4EA4 git \u4E4B\u524D\uFF0C\u6211\u4EEC\u9700\u8981\u6821\u9A8C\u6211\u4EEC\u7684\u4EE3\u7801\u662F\u5426\u7B26\u5408\u89C4\u8303\uFF0C\u5982\u679C\u4E0D\u7B26\u5408\uFF0C\u5219\u4E0D\u5141\u8BB8\u63D0\u4EA4\u4EE3\u7801\u3002</p><h3 id="\u5B89\u88C5\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u4F9D\u8D56" aria-hidden="true">#</a> \u5B89\u88C5\u4F9D\u8D56</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> husky

<span class="token comment"># lint-staged \u53EF\u4EE5\u8BA9husky\u53EA\u68C0\u9A8Cgit\u5DE5\u4F5C\u533A\u7684\u6587\u4EF6\uFF0C\u4E0D\u4F1A\u5BFC\u81F4\u4F60\u4E00\u4E0B\u51FA\u73B0\u6210\u767E\u4E0A\u5343\u4E2A\u9519\u8BEF</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> lint-staged
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7136\u540E\u4FEE\u6539-package-json-\u589E\u52A0\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u7136\u540E\u4FEE\u6539-package-json-\u589E\u52A0\u914D\u7F6E" aria-hidden="true">#</a> \u7136\u540E\u4FEE\u6539 package.json\uFF0C\u589E\u52A0\u914D\u7F6E</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	<span class="token property">&quot;precommit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint src/**/*.js&quot;</span>
<span class="token punctuation">}</span>
<span class="token property">&quot;husky&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;hooks&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;pre-commit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lint-staged&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">&quot;lint-staged&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;src/**/*.{js,vue}&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;prettier --write&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;eslint --cache --fix&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;git add&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728 git commit \u4E4B\u524D\u4F1A\u8FDB\u5165 \u5DE5\u4F5C\u533A\u6587\u4EF6\u7684\u626B\u63CF\uFF0C\u6267\u884C prettier \u811A\u672C\uFF0C\u4FEE\u6539 eslint \u95EE\u9898\uFF0C\u7136\u540E\u91CD\u8981\u63D0\u4EA4\u5230\u5DE5\u4F5C\u533A\u3002</p><h2 id="commitizen" tabindex="-1"><a class="header-anchor" href="#commitizen" aria-hidden="true">#</a> Commitizen</h2><ul><li>\u597D\u5904\uFF1A <ul><li>\u63D0\u4F9B\u66F4\u591A\u7684\u5386\u53F2\u4FE1\u606F\uFF0C\u65B9\u4FBF\u5FEB\u901F\u6D4F\u89C8</li><li>\u53EF\u4EE5\u8FC7\u6EE4\u67D0\u4E9B commit\uFF0C\u4FBF\u4E8E\u7B5B\u9009\u4EE3\u7801 review</li><li>\u53EF\u4EE5\u8FFD\u8E2A commit \u751F\u6210\u66F4\u65B0\u65E5\u5FD7</li><li>\u53EF\u4EE5\u5173\u8054 issues</li></ul></li></ul><h3 id="\u5B89\u88C5-1" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-1" aria-hidden="true">#</a> \u5B89\u88C5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> commitizen
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B89\u88C5\u7B26\u5408 AngularJS \u89C4\u8303\u7684\u63D0\u4EA4\u8BF4\u660E\uFF0C\u521D\u59CB\u5316 cz-conventional-changelog \u9002\u914D\u5668\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>commitizen init cz-conventional-changelog <span class="token parameter variable">--save</span> --save-exact
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7136\u540E\u4F7F\u7528 git cz \u547D\u4EE4 \u4EE3\u66FF git comit \u6765\u63D0\u4EA4 git \u8BF4\u660E\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> cz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u5B9A\u5236\u5316\u9879\u76EE\u63D0\u4EA4\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u5236\u5316\u9879\u76EE\u63D0\u4EA4\u8BF4\u660E" aria-hidden="true">#</a> \u5B9A\u5236\u5316\u9879\u76EE\u63D0\u4EA4\u8BF4\u660E</h3><p>\u4E0A\u9762\u7684\u63D0\u4EA4\u8BF4\u660E\u90FD\u662F\u82F1\u6587\u7684\uFF0C\u5982\u679C\u60F3\u81EA\u5B9A\u4E49\uFF0C\u53EF\u4EE5\u8BD5\u8BD5 cz-customizable\uFF0C\u5148\u5B89\u88C5\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> cz-customizable --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4FEE\u6539 package.json \u6587\u4EF6\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;config&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;commitizen&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node_modules/cz-customizable&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u521B\u5EFA .cz.config.js \u6587\u4EF6\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">types</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;\u7279\u6027&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u7279\u6027:    \u4E00\u4E2A\u65B0\u7684\u7279\u6027&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;\u4FEE\u590D&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u4FEE\u590D:    \u4FEE\u590D\u4E00\u4E2ABug&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;\u6587\u6863&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u6587\u6863:    \u53D8\u66F4\u7684\u53EA\u6709\u6587\u6863&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;\u683C\u5F0F&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u683C\u5F0F:    \u7A7A\u683C, \u5206\u53F7\u7B49\u683C\u5F0F\u4FEE\u590D&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;\u91CD\u6784&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u91CD\u6784:    \u4EE3\u7801\u91CD\u6784\uFF0C\u6CE8\u610F\u548C\u7279\u6027\u3001\u4FEE\u590D\u533A\u5206\u5F00&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;\u6027\u80FD&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u6027\u80FD:    \u63D0\u5347\u6027\u80FD&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;\u6D4B\u8BD5&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u6D4B\u8BD5:    \u6DFB\u52A0\u4E00\u4E2A\u6D4B\u8BD5&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;\u5DE5\u5177&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u5DE5\u5177:    \u5F00\u53D1\u5DE5\u5177\u53D8\u52A8(\u6784\u5EFA\u3001\u811A\u624B\u67B6\u5DE5\u5177\u7B49)&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;\u56DE\u6EDA&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u56DE\u6EDA:    \u4EE3\u7801\u56DE\u9000&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token literal-property property">scopes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u6A21\u57571&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u6A21\u57572&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u6A21\u57573&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u6A21\u57574&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// it needs to match the value for field type. Eg.: &#39;fix&#39;</span>
    <span class="token comment">/*
  scopeOverrides: {
    fix: [
      {name: &#39;merge&#39;},
      {name: &#39;style&#39;},
      {name: &#39;e2eTest&#39;},
      {name: &#39;unitTest&#39;}
    ]
  },
  */</span>
    <span class="token comment">// override the messages, defaults are as follows</span>
    <span class="token literal-property property">messages</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;\u9009\u62E9\u4E00\u79CD\u4F60\u7684\u63D0\u4EA4\u7C7B\u578B:&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">scope</span><span class="token operator">:</span> <span class="token string">&quot;\u9009\u62E9\u4E00\u4E2Ascope (\u53EF\u9009):&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// used if allowCustomScopes is true</span>
        <span class="token literal-property property">customScope</span><span class="token operator">:</span> <span class="token string">&quot;Denote the SCOPE of this change:&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">subject</span><span class="token operator">:</span> <span class="token string">&quot;\u77ED\u8BF4\u660E:\\n&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token string">&#39;\u957F\u8BF4\u660E\uFF0C\u4F7F\u7528&quot;|&quot;\u6362\u884C(\u53EF\u9009)\uFF1A\\n&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">breaking</span><span class="token operator">:</span> <span class="token string">&quot;\u975E\u517C\u5BB9\u6027\u8BF4\u660E (\u53EF\u9009):\\n&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">footer</span><span class="token operator">:</span> <span class="token string">&quot;\u5173\u8054\u5173\u95ED\u7684issue\uFF0C\u4F8B\u5982\uFF1A#31, #34(\u53EF\u9009):\\n&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">confirmCommit</span><span class="token operator">:</span> <span class="token string">&quot;\u786E\u5B9A\u63D0\u4EA4\u8BF4\u660E?&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">allowCustomScopes</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">allowBreakingChanges</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;\u7279\u6027&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u4FEE\u590D&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// limit subject length</span>
    <span class="token literal-property property">subjectLimit</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u8FD0\u884C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> cz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="commitizen-\u6821\u9A8C" tabindex="-1"><a class="header-anchor" href="#commitizen-\u6821\u9A8C" aria-hidden="true">#</a> Commitizen \u6821\u9A8C</h3><p>\u68C0\u9A8C\u63D0\u4EA4\u7684\u8BF4\u660E\u662F\u5426\u7B26\u5408\u89C4\u8303\uFF0C\u4E0D\u7B26\u5408\u5219\u4E0D\u53EF\u4EE5\u63D0\u4EA4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev @commitlint/cli

<span class="token comment"># \u5B89\u88C5\u7B26\u5408Angular\u98CE\u683C\u7684\u6821\u9A8C\u89C4\u5219</span>
<span class="token function">npm</span> <span class="token function">install</span> --save-dev @commitlint/config-conventional
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u6839\u76EE\u5F55\u4E0B\u521B\u5EFA commitlint.config.js \u5E76\u914D\u7F6E\u68C0\u9A8C\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@commitlint/config-conventional&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u5728 package.json \u4E2D\u914D\u7F6E husky \uFF0C\u4E4B\u524D\u6211\u4EEC\u5DF2\u7ECF\u5B89\u88C5\u8FC7\u4E86\uFF0C\u76F4\u63A5\u6DFB\u52A0\u914D\u7F6E\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;husky&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;hooks&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;commit-msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;commitlint -E HUSKY_GIT_PARAMS&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7ED9-commit-\u52A0\u8868\u60C5" tabindex="-1"><a class="header-anchor" href="#\u7ED9-commit-\u52A0\u8868\u60C5" aria-hidden="true">#</a> \u7ED9 commit \u52A0\u8868\u60C5</h3><p>\u5B89\u88C5\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-g</span> gitmoji-cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,82),b={href:"https://gitmoji.dev/",target:"_blank",rel:"noopener noreferrer"},g=n("h4",{id:"\u5982\u4E0B\u793A\u4F8B",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5982\u4E0B\u793A\u4F8B","aria-hidden":"true"},"#"),s(" \u5982\u4E0B\u793A\u4F8B")],-1),q=n("pre",null,`\u{1F3A8} (\u8C03\u8272\u677F)    :art:    \u6539\u8FDB\u4EE3\u7801\u7ED3\u6784/\u4EE3\u7801\u683C\u5F0F
\u26A1\uFE0F (\u95EA\u7535)    :zap:    \u63D0\u5347\u6027\u80FD
\u{1F525} (\u706B\u7130)    :fire:    \u79FB\u9664\u4EE3\u7801\u6216\u6587\u4EF6
\u{1F41B} (bug)    :bug:    \u4FEE\u590D bug
\u{1F691} (\u6025\u6551\u8F66)    :ambulance:    \u91CD\u8981\u8865\u4E01
\u2728 (\u706B\u82B1)    :sparkles:    \u5F15\u5165\u65B0\u529F\u80FD
\u{1F4DD} (\u5907\u5FD8\u5F55)    :memo:    \u64B0\u5199\u6587\u6863
\u{1F680} (\u706B\u7BAD)    :rocket:    \u90E8\u7F72\u529F\u80FD
\u{1F484} (\u53E3\u7EA2)    :lipstick:    \u66F4\u65B0 UI \u548C\u6837\u5F0F\u6587\u4EF6
\u{1F389} (\u5E86\u795D)    :tada:    \u521D\u6B21\u63D0\u4EA4
\u2705 (\u590D\u9009\u6846)    :white_check_mark:    \u589E\u52A0\u6D4B\u8BD5
\u{1F512} (\u9501)    :lock:    \u4FEE\u590D\u5B89\u5168\u95EE\u9898
\u{1F34E} (\u82F9\u679C)    :apple:    \u4FEE\u590D macOS \u4E0B\u7684\u95EE\u9898
\u{1F427} (\u4F01\u9E45)    :penguin:    \u4FEE\u590D Linux \u4E0B\u7684\u95EE\u9898
\u{1F3C1} (\u65D7\u5E1C)    :checkered_flag:    \u4FEE\u590D Windows \u4E0B\u7684\u95EE\u9898
\u{1F916} (\u673A\u5668\u4EBA)    :robot:    \u4FEE\u590D Android \u4E0B\u7684\u95EE\u9898
\u{1F34F} (\u82F9\u679C)    :green_apple:    \u4FEE\u590D IOS\u4E0B\u7684\u95EE\u9898
\u{1F516} (\u4E66\u7B7E)    :bookmark:    \u53D1\u884C/\u7248\u672C\u6807\u7B7E
\u{1F6A8} (\u8B66\u8F66\u706F)    :rotating_light:    \u79FB\u9664 linter \u8B66\u544A
\u{1F6A7} (\u65BD\u5DE5)    :construction:    \u5DE5\u4F5C\u8FDB\u884C\u4E2D
\u{1F49A} (\u7EFF\u5FC3)    :green_heart:    \u4FEE\u590D CI \u6784\u5EFA\u95EE\u9898
\u2B07\uFE0F (\u4E0B\u964D\u7BAD\u5934)    :arrow_down:    \u964D\u7EA7\u4F9D\u8D56
\u2B06\uFE0F (\u4E0A\u5347\u7BAD\u5934)    :arrow_up:    \u5347\u7EA7\u4F9D\u8D56
\u{1F4CC} (\u56FE\u9489)    :pushpin:    \u4F9D\u8D56\u56FA\u5B9A\u5230\u7279\u5B9A\u7248\u672C
\u{1F477} (\u5DE5\u4EBA)    :construction_worker:    \u6DFB\u52A0 CI \u6784\u5EFA\u7CFB\u7EDF
\u{1F4C8} (\u4E0A\u5347\u8D8B\u52BF\u56FE)    :chart_with_upwards_trend:    \u6DFB\u52A0\u5206\u6790\u6216\u8DDF\u8E2A\u4EE3\u7801
\u267B\uFE0F (\u56DE\u6536)    :recycle:    \u91CD\u6784\u4EE3\u7801
\u{1F433} (\u9CB8\u9C7C)    :whale:    Docker \u76F8\u5173\u5DE5\u4F5C
\u{1F528} (\u9524\u5B50)    :hammer:    \u91CD\u5927\u91CD\u6784
\u2795 (\u52A0\u53F7)    :heavy_plus_sign:    \u589E\u52A0\u4E00\u4E2A\u4F9D\u8D56
\u2796 (\u51CF\u53F7)    :heavy_minus_sign:    \u51CF\u5C11\u4E00\u4E2A\u4F9D\u8D56
\u{1F527} (\u6273\u624B)    :wrench:    \u4FEE\u6539\u914D\u7F6E\u6587\u4EF6
\u{1F310} (\u5730\u7403)    :globe_with_meridians:    \u56FD\u9645\u5316\u4E0E\u672C\u5730\u5316
\u270F\uFE0F (\u94C5\u7B14)    :pencil2:    \u4FEE\u590D\u9519\u522B\u5B57
\u{1F4A9} (\u7C91\u7C91)    :poop:    \u7F16\u5199\u9700\u8981\u6539\u8FDB\u7684\u9519\u8BEF\u4EE3\u7801
\u23EA (\u540E\u9000)    :rewind:    \u8FD8\u539F\u66F4\u6539
\u{1F500}    :twisted_rightwards_arrows:    Merge \u5206\u652F
\u{1F4E6} (\u5305\u88F9)    :package:    \u66F4\u65B0\u7F16\u8BD1\u6587\u4EF6\u6216Package
\u{1F47D} (\u5916\u661F\u4EBA)    :alien:    \u7531\u4E8E\u5916\u90E8API\u7684\u66F4\u6539\u800C\u66F4\u65B0\u4E86\u4EE3\u7801
\u{1F69A} (\u5361\u8F66)    :truck:    \u79FB\u52A8\u6216\u91CD\u547D\u540D\u6587\u4EF6
\u{1F4C4} (\u6587\u4EF6)    :page_facing_up:    \u6DFB\u52A0\u6216\u66F4\u65B0 Licence
\u{1F4A5} (\u9686\u9686\u58F0)    :boom:    \u5F15\u5165\u91CD\u5927\u53D8\u5316
\u{1F371} (\u4FBF\u5F53)    :bento:    \u6DFB\u52A0\u6216\u66F4\u65B0 Assets
\u{1F44C}(OK)    :ok_hand:    \u7531\u4E8E\u4EE3\u7801\u8BC4\u5BA1\u66F4\u6539\u800C\u66F4\u65B0\u4EE3\u7801
\u267F\uFE0F (\u8F6E\u6905)    :wheelchair:    \u63D0\u9AD8\u53EF\u8BBF\u95EE\u6027
\u{1F4A1} (\u7535\u706F\u6CE1)    :bulb:    \u8BB0\u5F55\u6E90\u4EE3\u7801
\u{1F37B} (\u5564\u9152)    :beers:    \u9189\u91BA\u91BA\u5730\u7F16\u5199\u4EE3\u7801
\u{1F4AC} (\u53D1\u8A00)    :speech_balloon:    \u66F4\u65B0\u6587\u672C\u548C\u6587\u5B57
\u{1F5C3} (\u6587\u4EF6\u76D2)    :card_file_box:    \u6267\u884C\u4E0E\u6570\u636E\u5E93\u76F8\u5173\u7684\u66F4\u6539
\u{1F50A} (\u5DE8\u5927\u58F0\u54CD)    :loud_sound:    \u6DFB\u52A0\u65E5\u5FD7
\u{1F507} (\u9759\u97F3)    :mute:    \u79FB\u9664\u65E5\u5FD7
\u{1F465} (\u8F6E\u5ED3\u534A\u8EAB\u50CF)    :busts_in_silhouette:    \u6DFB\u52A0\u8D21\u732E\u8005
\u{1F6B8} (\u513F\u7AE5\u901A\u8FC7)    :children_crossing:    \u63D0\u9AD8\u7528\u6237\u4F53\u9A8C/\u53EF\u7528\u6027
\u{1F3D7} (\u623F\u5C4B)    :building_construction:    \u4F7F\u5EFA\u7B51\u53D8\u5316
\u{1F4F1} (\u82F9\u679C\u624B\u673A)    :iphone:    \u81F4\u529B\u4E8E\u54CD\u5E94\u5F0F\u8BBE\u8BA1
\u{1F921} (\u5C0F\u4E11)    :clown_face:    Mock \u76F8\u5173
\u{1F95A} (\u5F69\u86CB)    :egg:    \u52A0\u5165\u4E00\u4E2A\u590D\u6D3B\u8282\u5F69\u86CB
\u{1F648} (\u975E\u793C\u52FF\u89C6)    :see_no_evil:    \u6DFB\u52A0\u6216\u66F4\u65B0 .gitignore \u6587\u4EF6
\u{1F4F8} (\u76F8\u673A)    :camera_flash:    \u6DFB\u52A0\u6216\u66F4\u65B0\u5FEB\u7167
\u2697\uFE0F (\u84B8\u998F\u5668)    :alembic:    \u5C1D\u8BD5\u65B0\u4E8B\u7269
\u{1F50D} (\u653E\u5927\u955C)    :mag:    SEO \u63D0\u5347
\u2638\uFE0F (\u8FBE\u6469\u8F66\u8F6E)    :wheel_of_dharma:    Kubernetes \u76F8\u5173\u5DE5\u4F5C
\u{1F3F7} (\u6807\u7B7E)    :label:    \u6DFB\u52A0\u6216\u66F4\u65B0 types (Flow, TypeScript)
\u{1F331} (\u79CD\u5B50)    :seedling:    \u6DFB\u52A0\u6216\u66F4\u65B0\u79CD\u5B50\u6587\u4EF6
\u{1F6A9} (\u65D7\u5E1C)    :triangular_flag_on_post:    \u6DFB\u52A0\u3001\u66F4\u65B0\u6216\u5220\u9664\u529F\u80FD\u6807\u5FD7
\u{1F4AB} (\u5934\u660F\u773C\u82B1)    :dizzy:    \u6DFB\u52A0\u6216\u66F4\u65B0\u52A8\u753B\u548C\u8F6C\u6362
`,-1);function y(h,f){const t=a("RouterLink"),p=a("ExternalLinkIcon");return i(),l("div",null,[d,n("div",v,[k,n("p",null,[s("\u53EF\u4EE5\u7ED3\u5408"),e(t,{to:"/tools_article/20.html"},{default:c(()=>[s("\u4ECE 0 \u5230 1 \u642D\u5EFA\u4E00\u4E2A\u4F01\u4E1A\u7EA7\u524D\u7AEF\u5F00\u53D1\u89C4\u8303")]),_:1})])]),m,n("p",null,[s("\u4F7F\u7528\uFF1A \u4F60\u53EF\u4EE5\u5728\u8FD9\u4E2A "),n("a",b,[s("gitmoji"),e(p)]),s(" \u7F51\u7AD9\u627E\u5230\u66F4\u591A\u7684\u8868\u60C5\u6765\u4E30\u5BCC\u4F60\u7684\u63D0\u4EA4\u8BB0\u5F55\uFF0C\u53EA\u9700\u8981\u5728\u63D0\u4EA4\u8BB0\u5F55\u4E2D\u52A0\u4E0A\u7C7B\u578B \u{1F41B} \u7684\u4EE3\u7801\u5C31\u53EF\u4EE5\u663E\u793A\u8868\u60C5\u4E86\u3002")]),g,q])}const _=o(u,[["render",y],["__file","23.html.vue"]]);export{_ as default};
