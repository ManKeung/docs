import{_ as n,o as s,c as a,a as t}from"./app.3f42ccdb.js";const p={},o=t(`<h1 id="\u4E8C\u53C9\u6811" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u53C9\u6811" aria-hidden="true">#</a> \u4E8C\u53C9\u6811</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/***
 * \u4E8C\u53C9\u67E5\u627E\u6811
 */</span>
<span class="token keyword">class</span> <span class="token class-name">TreeNode</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> leftNode<span class="token punctuation">,</span> rightNode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>leftNode <span class="token operator">=</span> leftNode<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>rightNode <span class="token operator">=</span> rightNode<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * \u4E8C\u53C9\u641C\u7D22\u6811
 * 1\u3001\u521B\u5EFA  create()<span class="token punctuation">{</span><span class="token punctuation">}</span>
 * 2\u3001\u63D2\u5165  insert()<span class="token punctuation">{</span><span class="token punctuation">}</span>
 * 3\u3001\u904D\u5386  display()<span class="token punctuation">{</span><span class="token punctuation">}</span>
 * 4\u3001\u67E5\u627E  find()<span class="token punctuation">{</span><span class="token punctuation">}</span>
 * 5\u3001\u5220\u9664  remove()<span class="token punctuation">{</span><span class="token punctuation">}</span>
 */</span>
<span class="token keyword">class</span> <span class="token class-name">BinarySearchTree</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>root <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">//\u521B\u5EFA\u4E8C\u53C9\u6811</span>
  <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> length <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> value <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">trunc</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>root <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">//\u63D2\u5165\u65B0\u7684\u8282\u70B9</span>
  <span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//\u5224\u65AD\u65B0\u589E\u8282\u70B9\u4E3A\u5DE6\u5B50\u6811\u7684\u8282\u70B9</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>value <span class="token operator">&gt;=</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      root<span class="token punctuation">.</span>leftNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>leftNode<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//\u5224\u65AD\u65B0\u589E\u8282\u70B9\u4E3A\u53F3\u5B50\u6811\u7684\u8282\u70B9</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>value <span class="token operator">&lt;</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      root<span class="token punctuation">.</span>rightNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>rightNode<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> root<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">//\u904D\u5386</span>
  <span class="token function">display</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">display</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>leftNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">display</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>rightNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">//\u67E5\u627E</span>
  <span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//\u53BB\u5DE6\u5B50\u6811\u4E0A\u53BB\u627E</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>value <span class="token operator">&gt;</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>leftNode<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//\u53BB\u53F3\u5B50\u6811\u4E0A\u627E</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>value <span class="token operator">&lt;</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>rightNode<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>value <span class="token operator">==</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u627E\u5230\u8282\u70B9:&quot;</span> <span class="token operator">+</span> root<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> root<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">//\u5220\u9664</span>
  <span class="token function">remove</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u5148\u67E5\u627E\u5230\u8282\u70B9</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>value <span class="token operator">&gt;</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      root<span class="token punctuation">.</span>leftNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>leftNode<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> root<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>value <span class="token operator">&lt;</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      root<span class="token punctuation">.</span>rightNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>rightNode<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> root<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//\u627E\u5230\u4E86\u8981\u5220\u9664\u7684\u8282\u70B9\u3002</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">.</span>leftNode <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>root<span class="token punctuation">.</span>rightNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">.</span>leftNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> root<span class="token punctuation">.</span>rightNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">.</span>rightNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> root<span class="token punctuation">.</span>leftNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">//\u5DE6\u53F3\u5B50\u6811\u90FD\u5B58\u5728\u7684\u60C5\u5F62</span>
      <span class="token keyword">let</span> node <span class="token operator">=</span> root<span class="token punctuation">.</span>rightNode<span class="token punctuation">;</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>leftNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        node <span class="token operator">=</span> node<span class="token punctuation">.</span>leftNode<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      root<span class="token punctuation">.</span>value <span class="token operator">=</span> node<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
      <span class="token comment">//\u518D\u5220\u9664node\u8282\u70B9</span>
      root<span class="token punctuation">.</span>rightNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>rightNode<span class="token punctuation">,</span> node<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> root<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> binarySearchTree <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BinarySearchTree</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
binarySearchTree<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
binarySearchTree<span class="token punctuation">.</span><span class="token function">display</span><span class="token punctuation">(</span>binarySearchTree<span class="token punctuation">.</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> findValue <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> node <span class="token operator">=</span> binarySearchTree<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>binarySearchTree<span class="token punctuation">.</span>root<span class="token punctuation">,</span> findValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u5B58\u5728\u503C\u4E3A</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>findValue<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\u7684\u8282\u70B9</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  binarySearchTree<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>binarySearchTree<span class="token punctuation">.</span>root<span class="token punctuation">,</span> findValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
  binarySearchTree<span class="token punctuation">.</span><span class="token function">display</span><span class="token punctuation">(</span>binarySearchTree<span class="token punctuation">.</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u4E0D\u5B58\u5728\u503C\u4E3A</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>findValue<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\u7684\u8282\u70B9</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports<span class="token punctuation">.</span>tree <span class="token operator">=</span> binarySearchTree<span class="token punctuation">.</span>root<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),e=[o];function c(l,i){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","35.html.vue"]]);export{k as default};
