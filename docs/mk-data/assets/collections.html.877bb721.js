import{_ as n,o as s,c as a,a as t}from"./app.4601641c.js";const e={},p=t(`<h1 id="\u534F\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u534F\u7A0B" aria-hidden="true">#</a> \u534F\u7A0B</h1><ul><li>\u81EA\u5DF1\u5B9E\u73B0\u4E00\u4E2A\u53EF\u4EE5\u8FED\u4EE3\u7684\u5BF9\u8C61</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">from</span> collections<span class="token punctuation">.</span>abc <span class="token keyword">import</span> Iterable
<span class="token keyword">from</span> collections<span class="token punctuation">.</span>abc <span class="token keyword">import</span> Iterator
<span class="token keyword">import</span> time


<span class="token keyword">class</span> <span class="token class-name">Classmate</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>names <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>names<span class="token punctuation">.</span>append<span class="token punctuation">(</span>name<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">__iter__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot; \u5982\u679C\u60F3\u8981\u4E00\u4E2A\u5BF9\u8C61\u6210\u4E3A\u4E00\u4E2A \u53EF\u4EE5\u8FED\u4EE3\u7684\u5BF9\u8C61\uFF0C\u65E2\u53EF\u4EE5\u4F7F\u7528for\uFF0C\u90A3\u4E48\u5FC5\u987B\u5B9E\u73B0__iter__\u65B9\u6CD5 &quot;&quot;&quot;</span>
        <span class="token keyword">return</span> ClassIterator<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">ClassIterator</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__iter__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>

    <span class="token keyword">def</span> <span class="token function">__next__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token number">11</span>


classmate <span class="token operator">=</span> Classmate<span class="token punctuation">(</span><span class="token punctuation">)</span>

classmate<span class="token punctuation">.</span>add<span class="token punctuation">(</span><span class="token string">&#39;\u8001\u738B&#39;</span><span class="token punctuation">)</span>
classmate<span class="token punctuation">.</span>add<span class="token punctuation">(</span><span class="token string">&#39;\u8001\u4E8C&#39;</span><span class="token punctuation">)</span>
classmate<span class="token punctuation">.</span>add<span class="token punctuation">(</span><span class="token string">&#39;\u5F20\u4E09&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># print(&#39;\u5224\u65ADclassmate\u662F\u4E0D\u662F\u53EF\u4EE5\u8FED\u4EE3\u7684\u5BF9\u8C61:&#39;, isinstance(classmate, Iterable))</span>
<span class="token comment"># classmate_iterator = iter(classmate)</span>
<span class="token comment"># print(&#39;\u5224\u65ADclassmate_iterator\u662F\u5426\u662F\u8FED\u4EE3\u5668\uFF1A&#39;, isinstance(classmate_iterator, Iterator))</span>

<span class="token comment"># print(next(classmate_iterator))</span>

<span class="token keyword">for</span> name <span class="token keyword">in</span> classmate<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot; 2 &quot;&quot;&quot;</span>
<span class="token keyword">import</span> time
<span class="token keyword">from</span> collections<span class="token punctuation">.</span>abc <span class="token keyword">import</span> Iterable
<span class="token keyword">from</span> collections<span class="token punctuation">.</span>abc <span class="token keyword">import</span> Iterator


<span class="token keyword">class</span> <span class="token class-name">Classmate</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>names <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>names<span class="token punctuation">.</span>append<span class="token punctuation">(</span>name<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">__iter__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;\u5982\u679C\u60F3\u8981\u4E00\u4E2A\u5BF9\u8C61\u79F0\u4E3A\u4E00\u4E2A\u3000\u53EF\u4EE5\u8FED\u4EE3\u7684\u5BF9\u8C61\uFF0C\u5373\u53EF\u4EE5\u4F7F\u7528for\uFF0C\u90A3\u4E48\u5FC5\u987B\u5B9E\u73B0__iter__\u65B9\u6CD5&quot;&quot;&quot;</span>
        <span class="token keyword">return</span> ClassIterator<span class="token punctuation">(</span>self<span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">ClassIterator</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> obj<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>obj <span class="token operator">=</span> obj

    <span class="token keyword">def</span> <span class="token function">__iter__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>

    <span class="token keyword">def</span> <span class="token function">__next__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>obj<span class="token punctuation">.</span>names<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>


classmate <span class="token operator">=</span> Classmate<span class="token punctuation">(</span><span class="token punctuation">)</span>
classmate<span class="token punctuation">.</span>add<span class="token punctuation">(</span><span class="token string">&quot;\u8001\u738B&quot;</span><span class="token punctuation">)</span>
classmate<span class="token punctuation">.</span>add<span class="token punctuation">(</span><span class="token string">&quot;\u738B\u4E8C&quot;</span><span class="token punctuation">)</span>
classmate<span class="token punctuation">.</span>add<span class="token punctuation">(</span><span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># print(&quot;\u5224\u65ADclassmate\u662F\u5426\u662F\u53EF\u4EE5\u8FED\u4EE3\u7684\u5BF9\u8C61:&quot;, isinstance(classmate, Iterable))</span>
<span class="token comment"># classmate_iterator = iter(classmate)</span>
<span class="token comment"># print(&quot;\u5224\u65ADclassmate_iterator\u662F\u5426\u662F\u8FED\u4EE3\u5668:&quot;, isinstance(classmate_iterator, Iterator))</span>
<span class="token comment"># print(next(classmate_iterator))</span>

<span class="token keyword">for</span> name <span class="token keyword">in</span> classmate<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot; 3 &quot;&quot;&quot;</span>
<span class="token keyword">import</span> time
<span class="token keyword">from</span> collections<span class="token punctuation">.</span>abc <span class="token keyword">import</span> Iterable
<span class="token keyword">from</span> collections<span class="token punctuation">.</span>abc <span class="token keyword">import</span> Iterator


<span class="token keyword">class</span> <span class="token class-name">Classmate</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>names <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>names<span class="token punctuation">.</span>append<span class="token punctuation">(</span>name<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">__iter__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;\u5982\u679C\u60F3\u8981\u4E00\u4E2A\u5BF9\u8C61\u79F0\u4E3A\u4E00\u4E2A\u3000\u53EF\u4EE5\u8FED\u4EE3\u7684\u5BF9\u8C61\uFF0C\u5373\u53EF\u4EE5\u4F7F\u7528for\uFF0C\u90A3\u4E48\u5FC5\u987B\u5B9E\u73B0__iter__\u65B9\u6CD5&quot;&quot;&quot;</span>
        <span class="token keyword">return</span> ClassIterator<span class="token punctuation">(</span>self<span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">ClassIterator</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> obj<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>obj <span class="token operator">=</span> obj
        self<span class="token punctuation">.</span>current_num <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">def</span> <span class="token function">__iter__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>

    <span class="token keyword">def</span> <span class="token function">__next__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        ret <span class="token operator">=</span> self<span class="token punctuation">.</span>obj<span class="token punctuation">.</span>names<span class="token punctuation">[</span>self<span class="token punctuation">.</span>current_num<span class="token punctuation">]</span>
        self<span class="token punctuation">.</span>current_num <span class="token operator">+=</span> <span class="token number">1</span>
        <span class="token keyword">return</span> ret


classmate <span class="token operator">=</span> Classmate<span class="token punctuation">(</span><span class="token punctuation">)</span>
classmate<span class="token punctuation">.</span>add<span class="token punctuation">(</span><span class="token string">&quot;\u8001\u738B&quot;</span><span class="token punctuation">)</span>
classmate<span class="token punctuation">.</span>add<span class="token punctuation">(</span><span class="token string">&quot;\u738B\u4E8C&quot;</span><span class="token punctuation">)</span>
classmate<span class="token punctuation">.</span>add<span class="token punctuation">(</span><span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># print(&quot;\u5224\u65ADclassmate\u662F\u5426\u662F\u53EF\u4EE5\u8FED\u4EE3\u7684\u5BF9\u8C61:&quot;, isinstance(classmate, Iterable))</span>
<span class="token comment"># classmate_iterator = iter(classmate)</span>
<span class="token comment"># print(&quot;\u5224\u65ADclassmate_iterator\u662F\u5426\u662F\u8FED\u4EE3\u5668:&quot;, isinstance(classmate_iterator, Iterator))</span>
<span class="token comment"># print(next(classmate_iterator))</span>

<span class="token keyword">for</span> name <span class="token keyword">in</span> classmate<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot; 4 &quot;&quot;&quot;</span>
<span class="token keyword">import</span> time
<span class="token keyword">from</span> collections<span class="token punctuation">.</span>abc <span class="token keyword">import</span> Iterable
<span class="token keyword">from</span> collections<span class="token punctuation">.</span>abc <span class="token keyword">import</span> Iterator


<span class="token keyword">class</span> <span class="token class-name">Classmate</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>names <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>names<span class="token punctuation">.</span>append<span class="token punctuation">(</span>name<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">__iter__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;\u5982\u679C\u60F3\u8981\u4E00\u4E2A\u5BF9\u8C61\u79F0\u4E3A\u4E00\u4E2A\u3000\u53EF\u4EE5\u8FED\u4EE3\u7684\u5BF9\u8C61\uFF0C\u5373\u53EF\u4EE5\u4F7F\u7528for\uFF0C\u90A3\u4E48\u5FC5\u987B\u5B9E\u73B0__iter__\u65B9\u6CD5&quot;&quot;&quot;</span>
        <span class="token keyword">return</span> ClassIterator<span class="token punctuation">(</span>self<span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">ClassIterator</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> obj<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>obj <span class="token operator">=</span> obj
        self<span class="token punctuation">.</span>current_num <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">def</span> <span class="token function">__iter__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>

    <span class="token keyword">def</span> <span class="token function">__next__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> self<span class="token punctuation">.</span>current_num <span class="token operator">&lt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>obj<span class="token punctuation">.</span>names<span class="token punctuation">)</span><span class="token punctuation">:</span>
            ret <span class="token operator">=</span> self<span class="token punctuation">.</span>obj<span class="token punctuation">.</span>names<span class="token punctuation">[</span>self<span class="token punctuation">.</span>current_num<span class="token punctuation">]</span>
            self<span class="token punctuation">.</span>current_num <span class="token operator">+=</span> <span class="token number">1</span>
            <span class="token keyword">return</span> ret
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">raise</span> StopIteration


classmate <span class="token operator">=</span> Classmate<span class="token punctuation">(</span><span class="token punctuation">)</span>
classmate<span class="token punctuation">.</span>add<span class="token punctuation">(</span><span class="token string">&quot;\u8001\u738B&quot;</span><span class="token punctuation">)</span>
classmate<span class="token punctuation">.</span>add<span class="token punctuation">(</span><span class="token string">&quot;\u738B\u4E8C&quot;</span><span class="token punctuation">)</span>
classmate<span class="token punctuation">.</span>add<span class="token punctuation">(</span><span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># print(&quot;\u5224\u65ADclassmate\u662F\u5426\u662F\u53EF\u4EE5\u8FED\u4EE3\u7684\u5BF9\u8C61:&quot;, isinstance(classmate, Iterable))</span>
<span class="token comment"># classmate_iterator = iter(classmate)</span>
<span class="token comment"># print(&quot;\u5224\u65ADclassmate_iterator\u662F\u5426\u662F\u8FED\u4EE3\u5668:&quot;, isinstance(classmate_iterator, Iterator))</span>
<span class="token comment"># print(next(classmate_iterator))</span>

<span class="token keyword">for</span> name <span class="token keyword">in</span> classmate<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot; 5 &quot;&quot;&quot;</span>
<span class="token keyword">import</span> time
<span class="token keyword">from</span> collections<span class="token punctuation">.</span>abc <span class="token keyword">import</span> Iterable
<span class="token keyword">from</span> collections<span class="token punctuation">.</span>abc <span class="token keyword">import</span> Iterator


<span class="token keyword">class</span> <span class="token class-name">Classmate</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>names <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>current_num <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>names<span class="token punctuation">.</span>append<span class="token punctuation">(</span>name<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">__iter__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;\u5982\u679C\u60F3\u8981\u4E00\u4E2A\u5BF9\u8C61\u79F0\u4E3A\u4E00\u4E2A\u3000\u53EF\u4EE5\u8FED\u4EE3\u7684\u5BF9\u8C61\uFF0C\u5373\u53EF\u4EE5\u4F7F\u7528for\uFF0C\u90A3\u4E48\u5FC5\u987B\u5B9E\u73B0__iter__\u65B9\u6CD5&quot;&quot;&quot;</span>
        <span class="token keyword">return</span> self  <span class="token comment"># \u8C03\u7528iter(xxobj)\u7684\u65F6\u5019 \u53EA\u8981__iter__\u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A \u8FED\u4EE3\u5668\u5373\u53EF\uFF0C\u81F3\u4E8E\u662F\u81EA\u5DF1 \u8FD8\u662F \u522B\u7684\u5BF9\u8C61\u90FD\u53EF\u4EE5\u7684, \u4F46\u662F\u8981\u4FDD\u8BC1\u662F\u4E00\u4E2A\u8FED\u4EE3\u5668(\u5373\u5B9E\u73B0\u4E86 __iter__  __next__\u65B9\u6CD5)</span>

    <span class="token keyword">def</span> <span class="token function">__next__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> self<span class="token punctuation">.</span>current_num <span class="token operator">&lt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>names<span class="token punctuation">)</span><span class="token punctuation">:</span>
            ret <span class="token operator">=</span> self<span class="token punctuation">.</span>names<span class="token punctuation">[</span>self<span class="token punctuation">.</span>current_num<span class="token punctuation">]</span>
            self<span class="token punctuation">.</span>current_num <span class="token operator">+=</span> <span class="token number">1</span>
            <span class="token keyword">return</span> ret
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">raise</span> StopIteration


classmate <span class="token operator">=</span> Classmate<span class="token punctuation">(</span><span class="token punctuation">)</span>
classmate<span class="token punctuation">.</span>add<span class="token punctuation">(</span><span class="token string">&quot;\u8001\u738B&quot;</span><span class="token punctuation">)</span>
classmate<span class="token punctuation">.</span>add<span class="token punctuation">(</span><span class="token string">&quot;\u738B\u4E8C&quot;</span><span class="token punctuation">)</span>
classmate<span class="token punctuation">.</span>add<span class="token punctuation">(</span><span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># print(&quot;\u5224\u65ADclassmate\u662F\u5426\u662F\u53EF\u4EE5\u8FED\u4EE3\u7684\u5BF9\u8C61:&quot;, isinstance(classmate, Iterable))</span>
<span class="token comment"># classmate_iterator = iter(classmate)</span>
<span class="token comment"># print(&quot;\u5224\u65ADclassmate_iterator\u662F\u5426\u662F\u8FED\u4EE3\u5668:&quot;, isinstance(classmate_iterator, Iterator))</span>
<span class="token comment"># print(next(classmate_iterator))</span>

<span class="token keyword">for</span> name <span class="token keyword">in</span> classmate<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>fibonacci</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>nums <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

a <span class="token operator">=</span> <span class="token number">0</span>
b <span class="token operator">=</span> <span class="token number">1</span>
i <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">while</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">:</span>
    nums<span class="token punctuation">.</span>append<span class="token punctuation">(</span>a<span class="token punctuation">)</span>
    a<span class="token punctuation">,</span> b <span class="token operator">=</span> b<span class="token punctuation">,</span> a<span class="token operator">+</span>b
    i <span class="token operator">+=</span> <span class="token number">1</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot; \u8FED\u4EE3\u5668\u5B9E\u73B0 &quot;&quot;&quot;</span>
<span class="token keyword">import</span> time
<span class="token keyword">from</span> collections<span class="token punctuation">.</span>abc <span class="token keyword">import</span> Iterable
<span class="token keyword">from</span> collections<span class="token punctuation">.</span>abc <span class="token keyword">import</span> Iterator


<span class="token keyword">class</span> <span class="token class-name">Fibonacci</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> all_num<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>all_num <span class="token operator">=</span> all_num
        self<span class="token punctuation">.</span>current_num <span class="token operator">=</span> <span class="token number">0</span>
        self<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">0</span>
        self<span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token number">1</span>

    <span class="token keyword">def</span> <span class="token function">__iter__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self

    <span class="token keyword">def</span> <span class="token function">__next__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> self<span class="token punctuation">.</span>current_num <span class="token operator">&lt;</span> self<span class="token punctuation">.</span>all_num<span class="token punctuation">:</span>
            ret <span class="token operator">=</span> self<span class="token punctuation">.</span>a
            self<span class="token punctuation">.</span>a<span class="token punctuation">,</span> self<span class="token punctuation">.</span>b <span class="token operator">=</span> self<span class="token punctuation">.</span>b<span class="token punctuation">,</span> self<span class="token punctuation">.</span>a <span class="token operator">+</span> self<span class="token punctuation">.</span>b
            self<span class="token punctuation">.</span>current_num <span class="token operator">+=</span> <span class="token number">1</span>
            <span class="token keyword">return</span> ret
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">raise</span> StopIteration


fibo <span class="token operator">=</span> Fibonacci<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>

<span class="token keyword">for</span> num <span class="token keyword">in</span> fibo<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot; \u4F7F\u7528\u751F\u6210\u5668 &quot;&quot;&quot;</span>
<span class="token keyword">def</span> <span class="token function">create_num</span><span class="token punctuation">(</span>all_num<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># a = 0</span>
    <span class="token comment"># b = 1</span>
    a<span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span>
    current_num <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">while</span> current_num <span class="token operator">&lt;</span> all_num<span class="token punctuation">:</span>
        <span class="token comment"># print(a)</span>
        <span class="token keyword">yield</span> a  <span class="token comment"># \u5982\u679C\u4E00\u4E2A\u51FD\u6570\u4E2D\u6709yield\u8BED\u53E5\uFF0C\u90A3\u4E48\u4E0D\u518D\u662F\u51FD\u6570\uFF0C\u800C\u662F\u4E00\u4E2A\u751F\u6210\u5668\u6A21\u677F</span>
        a<span class="token punctuation">,</span> b <span class="token operator">=</span> b<span class="token punctuation">,</span> a<span class="token operator">+</span>b
        current_num <span class="token operator">+=</span> <span class="token number">1</span>


<span class="token comment"># \u5982\u679C\u5728\u8C03\u7528create_num\u7684\u65F6\u5019\uFF0C\u53D1\u73B0\u8FD9\u4E2A\u51FD\u6570\u4E2D\u6709yield\u90A3\u4E48\u6B64\u65F6\uFF0C\u4E0D\u662F\u8C03\u7528\u51FD\u6570\uFF0C\u800C\u662F\u521B\u5EFA\u7231\u4F60\u4E00\u4E2A\u751F\u6210\u5668\u5BF9\u8C61</span>
obj <span class="token operator">=</span> create_num<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>

<span class="token keyword">for</span> num <span class="token keyword">in</span> obj<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u751F\u6210\u5668\u7684\u7814\u7A76</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">create_num</span><span class="token punctuation">(</span>all_num<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;---1---&#39;</span><span class="token punctuation">)</span>
    a<span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span>
    current_num <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">while</span> current_num <span class="token operator">&lt;</span> all_num<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;---2---&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">yield</span> a  <span class="token comment"># \u5982\u679C\u4E00\u4E2A\u51FD\u6570\u4E2D\u6709yield\u8BED\u53E5\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u5C31\u4E0D\u5728\u662F\u51FD\u6570\uFF0C\u800C\u662F\u4E00\u4E2A\u751F\u6210\u5668\u7684\u6A21\u677F</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;---3---&#39;</span><span class="token punctuation">)</span>
        a<span class="token punctuation">,</span> b <span class="token operator">=</span> b<span class="token punctuation">,</span> a<span class="token operator">+</span>b
        current_num <span class="token operator">+=</span> <span class="token number">1</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;---4---&#39;</span><span class="token punctuation">)</span>


<span class="token comment"># \u5982\u679C\u5728\u8C03\u7528create_num\u7684\u65F6\u5019\uFF0C\u53D1\u73B0\u8FD9\u4E2A\u51FD\u6570\u4E2D\u6709yield\u90A3\u4E48\u6B64\u65F6\uFF0C\u4E0D\u662F\u8C03\u7528\u51FD\u6570\uFF0C\u800C\u662F\u521B\u5EFA\u4E00\u4E2A\u751F\u6210\u5668\u5BF9\u8C61</span>
obj <span class="token operator">=</span> create_num<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
obj2 <span class="token operator">=</span> create_num<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>

ret <span class="token operator">=</span> <span class="token builtin">next</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;obj:%d&#39;</span> <span class="token operator">%</span> ret<span class="token punctuation">)</span>

ret <span class="token operator">=</span> <span class="token builtin">next</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;obj:%d&#39;</span> <span class="token operator">%</span> ret<span class="token punctuation">)</span>

ret <span class="token operator">=</span> <span class="token builtin">next</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;obj2:%d&#39;</span> <span class="token operator">%</span> ret<span class="token punctuation">)</span>

ret <span class="token operator">=</span> <span class="token builtin">next</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;obj:%d&#39;</span> <span class="token operator">%</span> ret<span class="token punctuation">)</span>

ret <span class="token operator">=</span> <span class="token builtin">next</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;obj:%d&#39;</span> <span class="token operator">%</span> ret<span class="token punctuation">)</span>

ret <span class="token operator">=</span> <span class="token builtin">next</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;obj:%d&#39;</span> <span class="token operator">%</span> ret<span class="token punctuation">)</span>

ret <span class="token operator">=</span> <span class="token builtin">next</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;obj2:%d&#39;</span> <span class="token operator">%</span> ret<span class="token punctuation">)</span>

ret <span class="token operator">=</span> <span class="token builtin">next</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;obj2:%d&#39;</span> <span class="token operator">%</span> ret<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u901A\u8FC7\u5F02\u5E38\u5224\u65AD\u751F\u6210\u5668\u5DF2\u7ECF\u7ED3\u675F</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">create_num</span><span class="token punctuation">(</span>all_num<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># a = 0</span>
    <span class="token comment"># b = 1</span>
    a<span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span>
    current_num <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">while</span> current_num <span class="token operator">&lt;</span> all_num<span class="token punctuation">:</span>
        <span class="token comment"># print(a)</span>
        <span class="token keyword">yield</span> a  <span class="token comment"># \u5982\u679C\u4E00\u4E2A\u51FD\u6570\u4E2D\u6709yield\u8BED\u53E5\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u5C31\u4E0D\u5728\u662F\u51FD\u6570\uFF0C\u800C\u662F\u4E00\u4E2A\u751F\u6210\u5668\u7684\u6A21\u677F</span>
        a<span class="token punctuation">,</span> b <span class="token operator">=</span> b<span class="token punctuation">,</span> a<span class="token operator">+</span>b
        current_num <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token keyword">return</span> <span class="token string">&#39;ok....&#39;</span>


obj2 <span class="token operator">=</span> create_num<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span>

<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        ret <span class="token operator">=</span> <span class="token builtin">next</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span>
    <span class="token keyword">except</span> Exception <span class="token keyword">as</span> ret<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>ret<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
        <span class="token keyword">break</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u901A\u8FC7send\u4F20\u503C\u5E76\u542F\u52A8\u751F\u6210\u5668</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">create_num</span><span class="token punctuation">(</span>all_num<span class="token punctuation">)</span><span class="token punctuation">:</span>
    a<span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span>
    current_num <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">while</span> current_num <span class="token operator">&lt;</span> all_num<span class="token punctuation">:</span>
        ret <span class="token operator">=</span> <span class="token keyword">yield</span> a
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;&gt;&gt;&gt;ret&gt;&gt;&gt;&#39;</span><span class="token punctuation">,</span> ret<span class="token punctuation">)</span>
        a<span class="token punctuation">,</span> b <span class="token operator">=</span> b<span class="token punctuation">,</span> a<span class="token operator">+</span>b
        current_num <span class="token operator">+=</span> <span class="token number">1</span>


obj <span class="token operator">=</span> create_num<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>

ret <span class="token operator">=</span> <span class="token builtin">next</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span>

<span class="token comment"># ret = obj.send(None)  #  \u4F20\u503C</span>
ret <span class="token operator">=</span> obj<span class="token punctuation">.</span>send<span class="token punctuation">(</span><span class="token string">&#39;\u54C8\u54C8&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u534F\u7A0Byield\u5B9E\u73B0</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> time


<span class="token keyword">def</span> <span class="token function">task_1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;---1---&#39;</span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.1</span><span class="token punctuation">)</span>
        <span class="token keyword">yield</span>


<span class="token keyword">def</span> <span class="token function">task_2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;---2---&#39;</span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.1</span><span class="token punctuation">)</span>
        <span class="token keyword">yield</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    t1 <span class="token operator">=</span> task_1<span class="token punctuation">(</span><span class="token punctuation">)</span>
    t2 <span class="token operator">=</span> task_2<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        <span class="token builtin">next</span><span class="token punctuation">(</span>t1<span class="token punctuation">)</span>
        <span class="token builtin">next</span><span class="token punctuation">(</span>t2<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>greenlet</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pip3 <span class="token function">install</span> greenlet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">from</span> greenlet <span class="token keyword">import</span> greenlet  <span class="token comment"># pip3 install greenlet</span>
<span class="token keyword">import</span> time


<span class="token keyword">def</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;---A--&quot;</span><span class="token punctuation">)</span>
        gr2<span class="token punctuation">.</span>switch<span class="token punctuation">(</span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;---B--&quot;</span><span class="token punctuation">)</span>
        gr1<span class="token punctuation">.</span>switch<span class="token punctuation">(</span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span>


gr1 <span class="token operator">=</span> greenlet<span class="token punctuation">(</span>test1<span class="token punctuation">)</span>
gr2 <span class="token operator">=</span> greenlet<span class="token punctuation">(</span>test2<span class="token punctuation">)</span>

<span class="token comment">#\u5207\u6362\u5230gr1\u4E2D\u8FD0\u884C</span>
gr1<span class="token punctuation">.</span>switch<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>gevent</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pip3 <span class="token function">install</span> gevent
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> gevent
<span class="token keyword">import</span> time


<span class="token keyword">def</span> <span class="token function">f1</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>gevent<span class="token punctuation">.</span>getcurrent<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
        <span class="token comment"># time.sleep(0.5)</span>
        gevent<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">f2</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>gevent<span class="token punctuation">.</span>getcurrent<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
        <span class="token comment"># time.sleep(0.5)</span>
        gevent<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">f3</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>gevent<span class="token punctuation">.</span>getcurrent<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
        <span class="token comment"># time.sleep(0.5)</span>
        gevent<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span>


<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;----1---&quot;</span><span class="token punctuation">)</span>
g1 <span class="token operator">=</span> gevent<span class="token punctuation">.</span>spawn<span class="token punctuation">(</span>f1<span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;----2---&quot;</span><span class="token punctuation">)</span>
g2 <span class="token operator">=</span> gevent<span class="token punctuation">.</span>spawn<span class="token punctuation">(</span>f2<span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;----3---&quot;</span><span class="token punctuation">)</span>
g3 <span class="token operator">=</span> gevent<span class="token punctuation">.</span>spawn<span class="token punctuation">(</span>f3<span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;----4---&quot;</span><span class="token punctuation">)</span>
g1<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
g2<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
g3<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot; \u6253\u8865\u4E01 &quot;&quot;&quot;</span>
<span class="token keyword">import</span> gevent
<span class="token keyword">import</span> time
<span class="token keyword">from</span> gevent <span class="token keyword">import</span> monkey

monkey<span class="token punctuation">.</span>patch_all<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">f1</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>gevent<span class="token punctuation">.</span>getcurrent<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">f2</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>gevent<span class="token punctuation">.</span>getcurrent<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">f3</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>gevent<span class="token punctuation">.</span>getcurrent<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span>


<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;----1---&quot;</span><span class="token punctuation">)</span>
g1 <span class="token operator">=</span> gevent<span class="token punctuation">.</span>spawn<span class="token punctuation">(</span>f1<span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;----2---&quot;</span><span class="token punctuation">)</span>
g2 <span class="token operator">=</span> gevent<span class="token punctuation">.</span>spawn<span class="token punctuation">(</span>f2<span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;----3---&quot;</span><span class="token punctuation">)</span>
g3 <span class="token operator">=</span> gevent<span class="token punctuation">.</span>spawn<span class="token punctuation">(</span>f3<span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;----4---&quot;</span><span class="token punctuation">)</span>
g1<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
g2<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
g3<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u793A\u4F8B</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> urllib<span class="token punctuation">.</span>request
<span class="token keyword">import</span> gevent
<span class="token keyword">from</span> gevent <span class="token keyword">import</span> monkey

monkey<span class="token punctuation">.</span>patch_all<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">downloader</span><span class="token punctuation">(</span>img_name<span class="token punctuation">,</span> img_url<span class="token punctuation">)</span><span class="token punctuation">:</span>
	req <span class="token operator">=</span> urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>urlopen<span class="token punctuation">(</span>img_url<span class="token punctuation">)</span>

	img_content <span class="token operator">=</span> req<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>img_name<span class="token punctuation">,</span> <span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
		f<span class="token punctuation">.</span>write<span class="token punctuation">(</span>img_content<span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	gevent<span class="token punctuation">.</span>joinall<span class="token punctuation">(</span><span class="token punctuation">[</span>
		gevent<span class="token punctuation">.</span>spawn<span class="token punctuation">(</span>downloader<span class="token punctuation">,</span> <span class="token string">&#39;3.jpg&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;https://rpic.douyucdn.cn/appCovers/2017/09/22/1760931_20170922133718_big.jpg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		gevent<span class="token punctuation">.</span>spawn<span class="token punctuation">(</span>downloader<span class="token punctuation">,</span> <span class="token string">&#39;4.jpg&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;https://rpic.douyucdn.cn/appCovers/2017/09/17/2308890_20170917232900_big.jpg&#39;</span><span class="token punctuation">)</span>
	<span class="token punctuation">]</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
	main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),o=[p];function i(c,l){return s(),a("div",null,o)}const r=n(e,[["render",i],["__file","collections.html.vue"]]);export{r as default};
