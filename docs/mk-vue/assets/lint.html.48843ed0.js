import{_ as p,r as e,o,c as i,d as n,e as s,b as t,a as l}from"./app.1960f1eb.js";const c={},r=n("h1",{id:"\u4EE3\u7801\u89C4\u8303",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4EE3\u7801\u89C4\u8303","aria-hidden":"true"},"#"),s(" \u4EE3\u7801\u89C4\u8303")],-1),u={class:"custom-container tip"},d=n("p",{class:"custom-container-title"},"\u6CE8\u610F",-1),k={href:"https://mankeung.github.io/docs/mk-data/tools_article/23.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://mankeung.github.io/docs/mk-data/tools_article/23.html",target:"_blank",rel:"noopener noreferrer"},m=l(`<h2 id="editorconfig" tabindex="-1"><a class="header-anchor" href="#editorconfig" aria-hidden="true">#</a> EditorConfig</h2><h3 id="editorconfig-1" tabindex="-1"><a class="header-anchor" href="#editorconfig-1" aria-hidden="true">#</a> .editorconfig</h3><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u8BE6\u60C5</summary><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code><span class="token key attr-name">root</span> <span class="token punctuation">=</span> <span class="token value attr-value">true</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">*</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">charset</span> <span class="token punctuation">=</span> <span class="token value attr-value">utf-8</span>
<span class="token key attr-name">indent_style</span> <span class="token punctuation">=</span> <span class="token value attr-value">space</span>
<span class="token key attr-name">indent_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">4</span>
<span class="token key attr-name">end_of_line</span> <span class="token punctuation">=</span> <span class="token value attr-value">lf</span>
<span class="token key attr-name">insert_final_newline</span> <span class="token punctuation">=</span> <span class="token value attr-value">true</span>
<span class="token key attr-name">trim_trailing_whitespace</span> <span class="token punctuation">=</span> <span class="token value attr-value">true</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">*.md</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">trim_trailing_whitespace</span> <span class="token punctuation">=</span> <span class="token value attr-value">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="vscode-settings-json" tabindex="-1"><a class="header-anchor" href="#vscode-settings-json" aria-hidden="true">#</a> .vscode/settings.json</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">&quot;editor.tabSize&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
	<span class="token property">&quot;cSpell.words&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token string">&quot;Mankeung&quot;</span><span class="token punctuation">,</span>
		<span class="token string">&quot;pinia&quot;</span>
	<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="eslint" tabindex="-1"><a class="header-anchor" href="#eslint" aria-hidden="true">#</a> eslint</h2><h3 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> eslint eslint-config-standard eslint-plugin-vue <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="eslintrc-js" tabindex="-1"><a class="header-anchor" href="#eslintrc-js" aria-hidden="true">#</a> .eslintrc.js</h3><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u8BE6\u60C5</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">browser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">node</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">es6</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">commonjs</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">amd</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">settings</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&#39;import/resolver&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">map</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">[</span><span class="token string">&#39;@&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;./src&#39;</span><span class="token punctuation">]</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;.ts&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.js&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.jsx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.json&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.vue&#39;</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">globals</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u4F60\u7684\u5168\u5C40\u53D8\u91CF\uFF08\u8BBE\u7F6E\u4E3A false \u8868\u793A\u5B83\u4E0D\u5141\u8BB8\u88AB\u91CD\u65B0\u8D4B\u503C\uFF09</span>
        <span class="token comment">//</span>
        <span class="token comment">// myGlobal: false</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token string">&#39;vue-eslint-parser&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// ts eslint \u914D\u7F6E</span>
    <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token string">&#39;@typescript-eslint/parser&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">ecmaVersion</span><span class="token operator">:</span> <span class="token number">2020</span><span class="token punctuation">,</span> <span class="token comment">// Allows for the parsing of modern ECMAScript features</span>
        <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">&#39;module&#39;</span><span class="token punctuation">,</span> <span class="token comment">// Allows for the use of imports</span>
        <span class="token literal-property property">ecmaFeatures</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">jsx</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@typescript-eslint&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;plugin:vue/vue3-recommended&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;plugin:@typescript-eslint/recommended&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// ! \u89E3\u51B3eslint\u62A5\u4F7F\u7528v-html\u8B66\u544A</span>
        <span class="token string-property property">&#39;vue/no-v-html&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;vue/html-self-closing&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;vue/html-indent&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;vue/html-closing-bracket-newline&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;vue/max-attributes-per-line&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;no-debugger&#39;</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">?</span> <span class="token string">&#39;warn&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u7981\u7528 debugger</span>
        <span class="token string-property property">&#39;no-console&#39;</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">?</span> <span class="token string">&#39;warn&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u7981\u7528 console</span>
        <span class="token string-property property">&#39;@typescript-eslint/ban-ts-ignore&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;@typescript-eslint/explicit-function-return-type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;@typescript-eslint/no-explicit-any&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;@typescript-eslint/no-var-requires&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;@typescript-eslint/no-empty-function&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;vue/custom-event-name-casing&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;vue/multi-word-component-names&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;no-use-before-define&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;prefer-rest-params&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;@typescript-eslint/no-this-alias&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;@typescript-eslint/no-use-before-define&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;@typescript-eslint/ban-ts-comment&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;@typescript-eslint/ban-types&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;@typescript-eslint/no-non-null-assertion&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;@typescript-eslint/explicit-module-boundary-types&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;@typescript-eslint/no-unused-vars&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">argsIgnorePattern</span><span class="token operator">:</span> <span class="token string">&#39;^h$&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">varsIgnorePattern</span><span class="token operator">:</span> <span class="token string">&#39;^h$&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;no-unused-vars&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">argsIgnorePattern</span><span class="token operator">:</span> <span class="token string">&#39;^h$&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">varsIgnorePattern</span><span class="token operator">:</span> <span class="token string">&#39;^h$&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;space-before-function-paren&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">quotes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;single&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;comma-dangle&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;vue/component-tags-order&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">order</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;style&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;template&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;script&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;max-len&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// \u7EDF\u4E00\u8C41\u514D\u89C4\u5219\uFF0C\u539F\u56E0\uFF1A\u76F4\u63A5\u4FEE\u6539\u53EF\u80FD\u5BF9\u73B0\u6709\u529F\u80FD\u4EA7\u751F\u5F71\u54CD</span>
        <span class="token string-property property">&#39;eqeqeq&#39;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token comment">//  &#39;vue/no-v-html&#39;: 1,</span>
        <span class="token comment">// \u5176\u4E2D\u4EE3\u7801\u672C\u8EAB\u6709\u95EE\u9898\u7684\u89C4\u5219\u9519\u8BEF\u6709</span>
        <span class="token string-property property">&#39;no-undef&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;import/no-duplicates&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>

        <span class="token comment">// \u53EF\u80FD\u5F15\u8D77\u683C\u5F0F\u5316\u95EE\u9898\u4F46\u5EFA\u8BAE\u624B\u52A8\u4FEE\u6539\u4EE3\u7801\u7684\u6709</span>
        <span class="token string-property property">&#39;no-plusplus&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;no-eval&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;no-prototype-builtins&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;no-multi-assign&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;no-unused-vars&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;no-useless-escape&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;camelcase&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;vue/no-unused-components&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;vue/return-in-computed-property&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;no-param-reassign&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;prefer-const&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;prefer-destructuring&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;no-underscore-dangle&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;no-restricted-syntax&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;no-nested-ternary&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;radix&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;vue/no-side-effects-in-computed-properties&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;vue/order-in-components&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;function-paren-newline&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="eslintignore" tabindex="-1"><a class="header-anchor" href="#eslintignore" aria-hidden="true">#</a> .eslintignore</h3><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u8BE6\u60C5</summary><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code><span class="token comment"># \u6839\u636E\u81EA\u5DF1\u7684\u5B9E\u9645\u9700\u6C42\u8FDB\u884C\u6DFB\u52A0</span>

<span class="token comment"># npm</span>

node_modules

<span class="token comment"># folder</span>

dist
public
templates
docs
www
scripts

<span class="token comment"># file</span>

postcss.config.js
babel.config.js
.eslintrc.js
plopfile.js
.stylelintrc.js
.prettierrc.js
*.json
*.html
*.d.ts

<span class="token comment"># vscode</span>

.vscode
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="npm\u547D\u4EE4\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#npm\u547D\u4EE4\u914D\u7F6E" aria-hidden="true">#</a> npm\u547D\u4EE4\u914D\u7F6E</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>        <span class="token property">&quot;lint:eslint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint --fix \\&quot;src/**/*.{vue,ts,js}\\&quot;&quot;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="stylelint" tabindex="-1"><a class="header-anchor" href="#stylelint" aria-hidden="true">#</a> stylelint</h2><h3 id="\u5B89\u88C5-1" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-1" aria-hidden="true">#</a> \u5B89\u88C5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> stylelint stylelint-config-html stylelint-config-prettier stylelint-config-standard stylelint-order stylelint-scss postcss-html postcss-scss <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="stylelintrc-js" tabindex="-1"><a class="header-anchor" href="#stylelintrc-js" aria-hidden="true">#</a> .stylelintrc.js</h3><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u8BE6\u60C5</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;stylelint-order&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;stylelint-scss&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">customSyntax</span><span class="token operator">:</span> <span class="token string">&#39;postcss-html&#39;</span><span class="token punctuation">,</span>
    <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;stylelint-config-standard&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;stylelint-config-prettier&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;stylelint-config-html&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">indentation</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;media-feature-name-no-unknown&#39;</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;selector-class-pattern&#39;</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;selector-pseudo-class-no-unknown&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>

                <span class="token literal-property property">ignorePseudoClasses</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;deep&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;global&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;selector-pseudo-element-no-unknown&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>

                <span class="token literal-property property">ignorePseudoElements</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;v-deep&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;v-global&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;v-slotted&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;at-rule-no-unknown&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>

                <span class="token literal-property property">ignoreAtRules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token string">&#39;tailwind&#39;</span><span class="token punctuation">,</span>
                    <span class="token string">&#39;apply&#39;</span><span class="token punctuation">,</span>
                    <span class="token string">&#39;variants&#39;</span><span class="token punctuation">,</span>
                    <span class="token string">&#39;responsive&#39;</span><span class="token punctuation">,</span>
                    <span class="token string">&#39;screen&#39;</span><span class="token punctuation">,</span>
                    <span class="token string">&#39;function&#39;</span><span class="token punctuation">,</span>
                    <span class="token string">&#39;if&#39;</span><span class="token punctuation">,</span>
                    <span class="token string">&#39;each&#39;</span><span class="token punctuation">,</span>
                    <span class="token string">&#39;include&#39;</span><span class="token punctuation">,</span>
                    <span class="token string">&#39;mixin&#39;</span><span class="token punctuation">,</span>
                    <span class="token string">&#39;at-root&#39;</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;no-empty-source&#39;</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;named-grid-areas-no-invalid&#39;</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;unicode-bom&#39;</span><span class="token operator">:</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;no-descending-specificity&#39;</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;font-family-no-missing-generic-family-keyword&#39;</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;declaration-colon-space-after&#39;</span><span class="token operator">:</span> <span class="token string">&#39;always-single-line&#39;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;declaration-colon-space-before&#39;</span><span class="token operator">:</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// &#39;declaration-block-trailing-semicolon&#39;: &#39;always&#39;,</span>
        <span class="token string-property property">&#39;rule-empty-line-before&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&#39;always&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>

                <span class="token literal-property property">ignore</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;after-comment&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;first-nested&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;unit-no-unknown&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">ignoreUnits</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;rpx&#39;</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;keyframes-name-pattern&#39;</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;order/order&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span>
                <span class="token string">&#39;dollar-variables&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;custom-properties&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;at-rules&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;declarations&#39;</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>

                    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;at-rule&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;supports&#39;</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>

                    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;at-rule&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;media&#39;</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token string">&#39;rules&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">severity</span><span class="token operator">:</span> <span class="token string">&#39;warning&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;order/properties-order&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&#39;position&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;top&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;right&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;bottom&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;left&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;z-index&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;display&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;float&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;width&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;height&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;max-width&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;max-height&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;min-width&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;min-height&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;padding&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;padding-top&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;padding-right&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;padding-bottom&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;padding-left&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;margin&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;margin-top&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;margin-right&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;margin-bottom&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;margin-left&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;margin-collapse&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;margin-top-collapse&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;margin-right-collapse&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;margin-bottom-collapse&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;margin-left-collapse&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;overflow&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;overflow-x&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;overflow-y&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;clip&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;clear&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;font&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;font-family&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;font-size&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;font-smoothing&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;osx-font-smoothing&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;font-style&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;font-weight&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;hyphens&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;src&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;line-height&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;letter-spacing&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;word-spacing&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;color&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;text-align&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;text-decoration&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;text-indent&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;text-overflow&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;text-rendering&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;text-size-adjust&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;text-shadow&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;text-transform&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;word-break&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;word-wrap&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;white-space&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;vertical-align&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;list-style&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;list-style-type&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;list-style-position&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;list-style-image&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;pointer-events&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;cursor&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;background&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;background-attachment&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;background-color&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;background-image&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;background-position&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;background-repeat&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;background-size&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;border&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;border-collapse&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;border-top&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;border-right&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;border-bottom&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;border-left&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;border-color&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;border-image&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;border-top-color&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;border-right-color&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;border-bottom-color&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;border-left-color&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;border-spacing&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;border-style&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;border-top-style&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;border-right-style&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;border-bottom-style&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;border-left-style&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;border-width&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;border-top-width&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;border-right-width&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;border-bottom-width&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;border-left-width&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;border-radius&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;border-top-right-radius&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;border-bottom-right-radius&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;border-bottom-left-radius&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;border-top-left-radius&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;border-radius-topright&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;border-radius-bottomright&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;border-radius-bottomleft&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;border-radius-topleft&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;content&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;quotes&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;outline&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;outline-offset&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;opacity&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;filter&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;visibility&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;size&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;zoom&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;transform&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;box-align&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;box-flex&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;box-orient&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;box-pack&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;box-shadow&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;box-sizing&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;table-layout&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;animation&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;animation-delay&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;animation-duration&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;animation-iteration-count&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;animation-name&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;animation-play-state&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;animation-timing-function&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;animation-fill-mode&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;transition&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;transition-delay&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;transition-duration&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;transition-property&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;transition-timing-function&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;background-clip&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;backface-visibility&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;appearance&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;user-select&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;interpolation-mode&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;direction&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;marks&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;page&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;set-link-source&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;unicode-bidi&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;speak&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">ignoreFiles</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;**/*.js&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;**/*.jsx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;**/*.tsx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;**/*.ts&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="stylelintignore" tabindex="-1"><a class="header-anchor" href="#stylelintignore" aria-hidden="true">#</a> .stylelintignore</h3><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u8BE6\u60C5</summary><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code><span class="token comment"># npm</span>

node_modules

<span class="token comment"># folder</span>

dist
public
templates

<span class="token comment"># file</span>

postcss.config.js
babel.config.js
.eslintrc.js
.prettierrc.js
plopfile.js
.stylelintrc.js
*.json
*.html
normalize.scss
*.d.ts

<span class="token comment"># vscode</span>

.vscode
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="npm\u547D\u4EE4\u914D\u7F6E-1" tabindex="-1"><a class="header-anchor" href="#npm\u547D\u4EE4\u914D\u7F6E-1" aria-hidden="true">#</a> npm\u547D\u4EE4\u914D\u7F6E</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>        <span class="token property">&quot;lint:prettier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;prettier --write  \\&quot;src/**/*.{js,ts,json,tsx,css,less,scss,vue,html,md}\\&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;lint:style&quot;</span><span class="token operator">:</span> <span class="token string">&quot;stylelint --fix \\&quot;src/**/*.{scss,less,vue,css}\\&quot; --cache --cache-location node_modules/.cache/stylelint/&quot;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="prettier" tabindex="-1"><a class="header-anchor" href="#prettier" aria-hidden="true">#</a> prettier</h2><h3 id="\u5B89\u88C5-2" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-2" aria-hidden="true">#</a> \u5B89\u88C5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> prettier <span class="token parameter variable">--dev</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="prettierrc-js" tabindex="-1"><a class="header-anchor" href="#prettierrc-js" aria-hidden="true">#</a> .prettierrc.js</h3><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u8BE6\u60C5</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">printWidth</span><span class="token operator">:</span> <span class="token number">180</span><span class="token punctuation">,</span> <span class="token comment">//\u4E00\u884C\u7684\u5B57\u7B26\u6570\uFF0C\u5982\u679C\u8D85\u8FC7\u4F1A\u8FDB\u884C\u6362\u884C\uFF0C\u9ED8\u8BA4\u4E3A80</span>
    <span class="token literal-property property">tabWidth</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token comment">//\u4E00\u4E2Atab\u4EE3\u8868\u51E0\u4E2A\u7A7A\u683C\u6570\uFF0C\u9ED8\u8BA4\u4E3A80</span>
    <span class="token literal-property property">useTabs</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//\u662F\u5426\u4F7F\u7528tab\u8FDB\u884C\u7F29\u8FDB\uFF0C\u9ED8\u8BA4\u4E3Afalse\uFF0C\u8868\u793A\u7528\u7A7A\u683C\u8FDB\u884C\u7F29\u51CF</span>
    <span class="token literal-property property">singleQuote</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//\u5B57\u7B26\u4E32\u662F\u5426\u4F7F\u7528\u5355\u5F15\u53F7\uFF0C\u9ED8\u8BA4\u4E3Afalse\uFF0C\u4F7F\u7528\u53CC\u5F15\u53F7</span>
    <span class="token literal-property property">semi</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//\u884C\u4F4D\u662F\u5426\u4F7F\u7528\u5206\u53F7\uFF0C\u9ED8\u8BA4\u4E3Atrue</span>
    <span class="token literal-property property">vueIndentScriptAndStyle</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">trailingComma</span><span class="token operator">:</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">,</span> <span class="token comment">//\u662F\u5426\u4F7F\u7528\u5C3E\u9017\u53F7\uFF0C\u6709\u4E09\u4E2A\u53EF\u9009\u503C&quot;&lt;none|es5|all&gt;&quot;</span>
    <span class="token literal-property property">bracketSpacing</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//\u5BF9\u8C61\u5927\u62EC\u53F7\u76F4\u63A5\u662F\u5426\u6709\u7A7A\u683C\uFF0C\u9ED8\u8BA4\u4E3Atrue\uFF0C\u6548\u679C\uFF1A{ foo: bar }</span>
    <span class="token literal-property property">jsxSingleQuote</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// jsx\u8BED\u6CD5\u4E2D\u4F7F\u7528\u5355\u5F15\u53F7</span>
    <span class="token literal-property property">htmlWhitespaceSensitivity</span><span class="token operator">:</span> <span class="token string">&#39;strict&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">endOfLine</span><span class="token operator">:</span> <span class="token string">&#39;auto&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="npm\u547D\u4EE4\u914D\u7F6E-2" tabindex="-1"><a class="header-anchor" href="#npm\u547D\u4EE4\u914D\u7F6E-2" aria-hidden="true">#</a> npm\u547D\u4EE4\u914D\u7F6E</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>        <span class="token property">&quot;lint:style&quot;</span><span class="token operator">:</span> <span class="token string">&quot;stylelint --fix \\&quot;src/**/*.{scss,less,vue,css}\\&quot; --cache --cache-location node_modules/.cache/stylelint/&quot;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="husky" tabindex="-1"><a class="header-anchor" href="#husky" aria-hidden="true">#</a> husky</h2><h3 id="\u5B89\u88C5-3" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-3" aria-hidden="true">#</a> \u5B89\u88C5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> husky @commitlint/cli @commitlint/config-conventional
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="commitlint-config-js" tabindex="-1"><a class="header-anchor" href="#commitlint-config-js" aria-hidden="true">#</a> commitlint.config.js</h3><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u8BE6\u60C5</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@commitlint/config-conventional&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&#39;type-enum&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token string">&#39;always&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span>
                <span class="token string">&#39;feat&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u65B0\u7279\u6027</span>
                <span class="token string">&#39;improvement&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u52A0\u5F3A\u73B0\u6709\u7279\u6027</span>
                <span class="token string">&#39;fix&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u4FEE\u8865bug</span>
                <span class="token string">&#39;refactor&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u91CD\u6784</span>
                <span class="token string">&#39;docs&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6587\u6863</span>
                <span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5355\u5143\u6D4B\u8BD5</span>
                <span class="token string">&#39;config&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u914D\u7F6E\u6587\u4EF6</span>
                <span class="token string">&#39;style&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u683C\u5F0F\u9700\u6539</span>
                <span class="token string">&#39;perf&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6027\u80FD\u63D0\u5347</span>
                <span class="token string">&#39;ci&#39;</span><span class="token punctuation">,</span> <span class="token comment">// ci \u4E3B\u8981\u76EE\u7684\u662F\u4FEE\u6539\u9879\u76EE\u7EE7\u7EED\u96C6\u6210\u6D41\u7A0B(\u4F8B\u5982 Travis\uFF0CJenkins\uFF0CGitLab CI\uFF0CCircle\u7B49)\u7684\u63D0\u4EA4</span>
                <span class="token string">&#39;revert&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u7248\u672C\u56DE\u9000</span>
                <span class="token string">&#39;chore&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5176\u4ED6\u4FEE\u6539</span>
                <span class="token string">&#39;scope&#39;</span> <span class="token comment">// commit \u5F71\u54CD\u7684\u8303\u56F4\uFF08\u9009\u586B\uFF09, \u6BD4\u5982: route, component, utils, build</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;type-empty&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// type\u4E0D\u80FD\u4E3A\u7A7A</span>
        <span class="token string-property property">&#39;type-case&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;always&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;lower-case&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// type\u4E0D\u9650\u5236\u5927\u5C0F\u5199</span>
        <span class="token string-property property">&#39;subject-empty&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// subject\uFF08\u7B80\u77ED\u5F97\u63CF\u8FF0\uFF09\u4E0D\u80FD\u4E3A\u7A7A</span>
        <span class="token string-property property">&#39;subject-max-length&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;always&#39;</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// subject\u6700\u5927\u957F\u5EA6\uFF0C\u8D85\u51FA\u53EA\u4F1A\u8B66\u544A\uFF0C\u4E0D\u963B\u6B62\u63D0\u4EA4</span>
        <span class="token string-property property">&#39;body-leading-blank&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;always&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;footer-leading-blank&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;always&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;header-max-length&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;always&#39;</span><span class="token punctuation">,</span> <span class="token number">72</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="scripts-prepare-js" tabindex="-1"><a class="header-anchor" href="#scripts-prepare-js" aria-hidden="true">#</a> scripts/prepare.js</h3><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u8BE6\u60C5</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/*
 * @Description: \u9879\u76EE\u521D\u59CB\u5316
 * @Author: Mankeung
 * @Date: 2022-09-25 13:48:49
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-02 21:45:17
 */</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> prompt <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;enquirer&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> chalk <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;chalk&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> funExec <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./utils&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;pnpm&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yarn&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;npm&#39;</span><span class="token punctuation">]</span>
    <span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token keyword">null</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        name <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">funExec</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> --version</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            name <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
            <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u6CA1\u6709\u5305\u7BA1\u7406\u5DE5\u5177</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>name<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BF7\u5B89\u88C5\u5305\u7BA1\u7406\u5DE5\u5177&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> git <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">funExec</span><span class="token punctuation">(</span><span class="token string">&#39;git init&#39;</span><span class="token punctuation">)</span>

    <span class="token comment">// \u6CA1\u6709git</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>git<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BF7\u4F60\u4F7F\u7528git\u529E\u7406\u7BA1\u7406\u5DE5\u5177&#39;</span><span class="token punctuation">)</span>

    <span class="token comment">// \u5904\u7406husky</span>
    <span class="token keyword">const</span> husky <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">funExec</span><span class="token punctuation">(</span><span class="token string">&#39;npx husky install&#39;</span><span class="token punctuation">)</span>

    <span class="token comment">// \u547D\u4EE4\u5931\u8D25</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>husky<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;npx husky install error&#39;</span><span class="token punctuation">)</span>

    console<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>chalk<span class="token punctuation">.</span><span class="token function">cyan</span><span class="token punctuation">(</span><span class="token string">&#39;\u9879\u76EE\u521D\u59CB\u5316 ...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> answer <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;confirm&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;q1&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;\u662F\u5426\u9700\u8981lint&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">initial</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;confirm&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;q2&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;\u624B\u5426\u9700\u8981commitlint&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">initial</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;\u51FA\u9519\u4E86&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>answer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;\u51FA\u9519\u4E86&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> npm <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> run precommit</span><span class="token template-punctuation string">\`</span></span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>answer<span class="token punctuation">.</span>q1<span class="token punctuation">)</span> npm <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&amp;&amp; </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> run lint</span><span class="token template-punctuation string">\`</span></span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>npm<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> d <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">funExec</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">npx husky add .husky/pre-commit &quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>npm<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>d<span class="token punctuation">)</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>chalk<span class="token punctuation">.</span><span class="token function">cyan</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>answer<span class="token punctuation">.</span>q2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> d <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">funExec</span><span class="token punctuation">(</span><span class="token string">&#39;npx husky add .husky/commit-msg &quot;npx --no-install commitlint --edit &quot;$1&quot;&quot;&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>d<span class="token punctuation">)</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>chalk<span class="token punctuation">.</span><span class="token function">cyan</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>chalk<span class="token punctuation">.</span><span class="token function">cyan</span><span class="token punctuation">(</span><span class="token string">&#39;\u9879\u76EE\u521D\u59CB\u5316\u5B8C\u6210&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="npm\u547D\u4EE4\u914D\u7F6E-3" tabindex="-1"><a class="header-anchor" href="#npm\u547D\u4EE4\u914D\u7F6E-3" aria-hidden="true">#</a> npm\u547D\u4EE4\u914D\u7F6E</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>        <span class="token property">&quot;precommit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node ./scripts/precommit.js&quot;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,39);function b(g,y){const a=e("ExternalLinkIcon");return o(),i("div",null,[r,n("div",u,[d,n("p",null,[s("\u8FD9\u91CC\u4E0D\u505A\u8BE6\u7EC6\u914D\u7F6E\u8BF4\u660E\uFF0C\u4F60\u53EF\u4EE5\u67E5\u770B\u4E4B\u524D\u6587\u7AE0"),n("a",k,[s("\u524D\u7AEF\u4EE3\u7801\u5DE5\u4F5C\u6D41"),t(a)]),s("\u3001"),n("a",v,[s("\u4ECE 0 \u5230 1 \u642D\u5EFA\u4E00\u4E2A\u4F01\u4E1A\u7EA7\u524D\u7AEF\u5F00\u53D1\u89C4\u8303"),t(a)]),s("\u4E86\u89E3\u3002")])]),m])}const f=p(c,[["render",b],["__file","lint.html.vue"]]);export{f as default};
