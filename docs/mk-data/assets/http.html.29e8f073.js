import{_ as n,o as s,c as a,a as e}from"./app.e2f0ed4f.js";const t={},p=e(`<h1 id="http\u534F\u8BAE" tabindex="-1"><a class="header-anchor" href="#http\u534F\u8BAE" aria-hidden="true">#</a> http\u534F\u8BAE</h1><ul><li>\u57FA\u672C</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> socket

<span class="token keyword">def</span> <span class="token function">service_client</span><span class="token punctuation">(</span>new_socket<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot; \u4E3A\u5BA2\u670D\u7AEF\u8FD4\u56DE\u6570\u636E &quot;&quot;&quot;</span>

    <span class="token comment"># 1. \u63A5\u6536\u6D4F\u89C8\u5668\u53D1\u9001\u8FC7\u6765\u7684\u8BF7\u6C42 \uFF0C\u5373http\u8BF7\u6C42</span>
    <span class="token comment"># GET / HTTP/1.1</span>
    <span class="token comment"># .....</span>
    request <span class="token operator">=</span> new_socket<span class="token punctuation">.</span>recv<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span>

    <span class="token comment"># 2. \u8FD4\u56DEhttp\u683C\u5F0F\u7684\u6570\u636E\uFF0C\u7ED9\u6D4F\u89C8\u5668</span>
    <span class="token comment"># 2.1 \u51C6\u5907\u53D1\u9001\u7ED9\u6D4F\u89C8\u5668\u7684\u6570\u636E---header</span>
    response <span class="token operator">=</span> <span class="token string">&#39;HTTP/1.1 200 OK\\r\\n&#39;</span>
    response <span class="token operator">+=</span> <span class="token string">&#39;\\r\\n&#39;</span>
    <span class="token comment"># 2.2 \u51C6\u5907\u53D1\u9001\u7ED9\u6D4F\u89C8\u5668\u7684\u6570\u636E---boy</span>
    <span class="token comment"># response += &#39;hahahhah&#39;</span>
    <span class="token comment"># new_socket.send(response.encode(&quot;utf-8&quot;))</span>

    f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;./html/index.html&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rb&#39;</span><span class="token punctuation">)</span>
    html_content <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
    f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># \u5C06response header\u53D1\u9001\u7ED9\u6D4F\u89C8\u5668</span>
    new_socket<span class="token punctuation">.</span>send<span class="token punctuation">(</span>response<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment"># \u5C06response body\u53D1\u9001\u7ED9\u6D4F\u89C8\u5668</span>
    new_socket<span class="token punctuation">.</span>send<span class="token punctuation">(</span>html_content<span class="token punctuation">)</span>

    <span class="token comment"># \u5173\u95ED\u5957\u63A5\u5B57</span>
    new_socket<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;\u7528\u6765\u5B8C\u6210\u6574\u4F53\u7684\u63A7\u5236&quot;&quot;&quot;</span>
    <span class="token comment"># 1. \u521B\u5EFA\u5957\u63A5\u5B57</span>
    tcp_server_socket <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SOCK_STREAM<span class="token punctuation">)</span>
    <span class="token comment"># \u8BBE\u7F6E\u5F53\u670D\u52A1\u5668\u5148close \u5373\u670D\u52A1\u5668\u7AEF4\u6B21\u6325\u624B\u4E4B\u540E\u8D44\u6E90\u80FD\u591F\u7ACB\u5373\u91CA\u653E\uFF0C\u8FD9\u6837\u5C31\u4FDD\u8BC1\u4E86\uFF0C\u4E0B\u6B21\u8FD0\u884C\u7A0B\u5E8F\u65F6 \u53EF\u4EE5\u7ACB\u5373\u7ED1\u5B9A7890\u7AEF\u53E3</span>
    tcp_server_socket<span class="token punctuation">.</span>setsockopt<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>SOL_SOCKET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SO_REUSEADDR<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>

    <span class="token comment"># 2. \u7ED1\u5B9A</span>
    tcp_server_socket<span class="token punctuation">.</span>bind<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token number">7890</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment"># 3. \u53D8\u4E3A\u76D1\u542C\u5957\u63A5\u5B57</span>
    tcp_server_socket<span class="token punctuation">.</span>listen<span class="token punctuation">(</span><span class="token number">128</span><span class="token punctuation">)</span>

    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        <span class="token comment"># 4. \u7B49\u5F85\u65B0\u5BA2\u6237\u7AEF\u7684\u94FE\u63A5</span>
        new_socket<span class="token punctuation">,</span> client_addr <span class="token operator">=</span> tcp_server_socket<span class="token punctuation">.</span>accept<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># 5. \u4E3A\u8FD9\u4E2A\u5BA2\u6237\u7AEF\u670D\u52A1</span>
        service_client<span class="token punctuation">(</span>new_socket<span class="token punctuation">)</span>

    <span class="token comment"># \u5173\u95ED\u76D1\u542C\u5957\u63A5\u5B57</span>
    tcp_server_socket<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u6839\u636E\u7528\u6237\u8BF7\u6C42\u8FD4\u56DE\u9875\u9762</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> socket
<span class="token keyword">import</span> re

<span class="token keyword">def</span> <span class="token function">service_client</span><span class="token punctuation">(</span>new_socket<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot; \u4E3A\u5BA2\u670D\u7AEF\u8FD4\u56DE\u6570\u636E &quot;&quot;&quot;</span>

    <span class="token comment"># 1. \u63A5\u6536\u6D4F\u89C8\u5668\u53D1\u9001\u8FC7\u6765\u7684\u8BF7\u6C42 \uFF0C\u5373http\u8BF7\u6C42</span>
    <span class="token comment"># GET / HTTP/1.1</span>
    <span class="token comment"># .....</span>
    request <span class="token operator">=</span> new_socket<span class="token punctuation">.</span>recv<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
    <span class="token comment"># print(request)</span>
    request_lines <span class="token operator">=</span> request<span class="token punctuation">.</span>splitlines<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;&gt;&#39;</span><span class="token operator">*</span><span class="token number">50</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>request_lines<span class="token punctuation">)</span>

    <span class="token comment"># GET /index.html HTTP/1.1</span>
    <span class="token comment"># get post put del</span>
    file_name <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
    ret <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">r&#39;[^/]+(/[^ ]*)&#39;</span><span class="token punctuation">,</span> request_lines<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> ret<span class="token punctuation">:</span>
        file_name <span class="token operator">=</span> ret<span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BF7\u6C42\u7684\u6587\u4EF6:%s&#39;</span> <span class="token operator">%</span> file_name<span class="token punctuation">)</span>
        <span class="token keyword">if</span> file_name <span class="token operator">==</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">:</span>
            file_name <span class="token operator">=</span> <span class="token string">&#39;/index.html&#39;</span>

    <span class="token comment"># 2. \u8FD4\u56DEhttp\u683C\u5F0F\u7684\u6570\u636E\uFF0C\u7ED9\u6D4F\u89C8\u5668</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;./html&#39;</span> <span class="token operator">+</span> file_name<span class="token punctuation">,</span> <span class="token string">&#39;rb&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">except</span><span class="token punctuation">:</span>
        response <span class="token operator">=</span> <span class="token string">&#39;HTTP/1.1 404 NOT FOUND\\r\\n&#39;</span>
        response <span class="token operator">+=</span> <span class="token string">&#39;\\r\\n&#39;</span>
        response <span class="token operator">+=</span> <span class="token string">&#39;------file not found-----&#39;</span>
        new_socket<span class="token punctuation">.</span>send<span class="token punctuation">(</span>response<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        html_content <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
        f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment"># 2.1 \u51C6\u5907\u53D1\u9001\u7ED9\u6D4F\u89C8\u5668\u7684\u6570\u636E---header</span>
        response <span class="token operator">=</span> <span class="token string">&#39;HTTP/1.1 200 OK\\r\\n&#39;</span>
        response <span class="token operator">+=</span> <span class="token string">&#39;\\r\\n&#39;</span>
        <span class="token comment"># 2.2 \u51C6\u5907\u53D1\u9001\u7ED9\u6D4F\u89C8\u5668\u7684\u6570\u636E---boy</span>
        <span class="token comment"># response += &quot;hahahhah&quot;</span>

        <span class="token comment"># \u5C06response header\u53D1\u9001\u7ED9\u6D4F\u89C8\u5668</span>
        new_socket<span class="token punctuation">.</span>send<span class="token punctuation">(</span>response<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token comment"># \u5C06response body\u53D1\u9001\u7ED9\u6D4F\u89C8\u5668</span>
        new_socket<span class="token punctuation">.</span>send<span class="token punctuation">(</span>html_content<span class="token punctuation">)</span>

    <span class="token comment"># \u5173\u95ED\u5957\u63A5\u5B57</span>
    new_socket<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;\u7528\u6765\u5B8C\u6210\u6574\u4F53\u7684\u63A7\u5236&quot;&quot;&quot;</span>
    <span class="token comment"># 1. \u521B\u5EFA\u5957\u63A5\u5B57</span>
    tcp_server_socket <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SOCK_STREAM<span class="token punctuation">)</span>
    <span class="token comment"># \u8BBE\u7F6E\u5F53\u670D\u52A1\u5668\u5148close \u5373\u670D\u52A1\u5668\u7AEF4\u6B21\u6325\u624B\u4E4B\u540E\u8D44\u6E90\u80FD\u591F\u7ACB\u5373\u91CA\u653E\uFF0C\u8FD9\u6837\u5C31\u4FDD\u8BC1\u4E86\uFF0C\u4E0B\u6B21\u8FD0\u884C\u7A0B\u5E8F\u65F6 \u53EF\u4EE5\u7ACB\u5373\u7ED1\u5B9A7890\u7AEF\u53E3</span>
    tcp_server_socket<span class="token punctuation">.</span>setsockopt<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>SOL_SOCKET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SO_REUSEADDR<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>

    <span class="token comment"># 2. \u7ED1\u5B9A</span>
    tcp_server_socket<span class="token punctuation">.</span>bind<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token number">7890</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment"># 3. \u53D8\u4E3A\u76D1\u542C\u5957\u63A5\u5B57</span>
    tcp_server_socket<span class="token punctuation">.</span>listen<span class="token punctuation">(</span><span class="token number">128</span><span class="token punctuation">)</span>

    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        <span class="token comment"># 4. \u7B49\u5F85\u65B0\u5BA2\u6237\u7AEF\u7684\u94FE\u63A5</span>
        new_socket<span class="token punctuation">,</span> client_addr <span class="token operator">=</span> tcp_server_socket<span class="token punctuation">.</span>accept<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># 5. \u4E3A\u8FD9\u4E2A\u5BA2\u6237\u7AEF\u670D\u52A1</span>
        service_client<span class="token punctuation">(</span>new_socket<span class="token punctuation">)</span>

    <span class="token comment"># \u5173\u95ED\u76D1\u542C\u5957\u63A5\u5B57</span>
    tcp_server_socket<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4F7F\u7528\u591A\u8FDB\u7A0B</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> socket
<span class="token keyword">import</span> re
<span class="token keyword">import</span> multiprocessing

<span class="token keyword">def</span> <span class="token function">service_client</span><span class="token punctuation">(</span>new_socket<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot; \u4E3A\u5BA2\u670D\u7AEF\u8FD4\u56DE\u6570\u636E &quot;&quot;&quot;</span>

    <span class="token comment"># 1. \u63A5\u6536\u6D4F\u89C8\u5668\u53D1\u9001\u8FC7\u6765\u7684\u8BF7\u6C42 \uFF0C\u5373http\u8BF7\u6C42</span>
    <span class="token comment"># GET / HTTP/1.1</span>
    <span class="token comment"># .....</span>
    request <span class="token operator">=</span> new_socket<span class="token punctuation">.</span>recv<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
    <span class="token comment"># print(request)</span>
    request_lines <span class="token operator">=</span> request<span class="token punctuation">.</span>splitlines<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;&gt;&#39;</span><span class="token operator">*</span><span class="token number">50</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>request_lines<span class="token punctuation">)</span>

    <span class="token comment"># GET /index.html HTTP/1.1</span>
    <span class="token comment"># get post put del</span>
    file_name <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
    ret <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">r&#39;[^/]+(/[^ ]*)&#39;</span><span class="token punctuation">,</span> request_lines<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> ret<span class="token punctuation">:</span>
        file_name <span class="token operator">=</span> ret<span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BF7\u6C42\u7684\u6587\u4EF6:%s&#39;</span> <span class="token operator">%</span> file_name<span class="token punctuation">)</span>
        <span class="token keyword">if</span> file_name <span class="token operator">==</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">:</span>
            file_name <span class="token operator">=</span> <span class="token string">&#39;/index.html&#39;</span>

    <span class="token comment"># 2. \u8FD4\u56DEhttp\u683C\u5F0F\u7684\u6570\u636E\uFF0C\u7ED9\u6D4F\u89C8\u5668</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;./html&#39;</span> <span class="token operator">+</span> file_name<span class="token punctuation">,</span> <span class="token string">&#39;rb&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">except</span><span class="token punctuation">:</span>
        response <span class="token operator">=</span> <span class="token string">&#39;HTTP/1.1 404 NOT FOUND\\r\\n&#39;</span>
        response <span class="token operator">+=</span> <span class="token string">&#39;\\r\\n&#39;</span>
        response <span class="token operator">+=</span> <span class="token string">&#39;------file not found-----&#39;</span>
        new_socket<span class="token punctuation">.</span>send<span class="token punctuation">(</span>response<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        html_content <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
        f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment"># 2.1 \u51C6\u5907\u53D1\u9001\u7ED9\u6D4F\u89C8\u5668\u7684\u6570\u636E---header</span>
        response <span class="token operator">=</span> <span class="token string">&#39;HTTP/1.1 200 OK\\r\\n&#39;</span>
        response <span class="token operator">+=</span> <span class="token string">&#39;\\r\\n&#39;</span>
        <span class="token comment"># 2.2 \u51C6\u5907\u53D1\u9001\u7ED9\u6D4F\u89C8\u5668\u7684\u6570\u636E---boy</span>
        <span class="token comment"># response += &quot;hahahhah&quot;</span>

        <span class="token comment"># \u5C06response header\u53D1\u9001\u7ED9\u6D4F\u89C8\u5668</span>
        new_socket<span class="token punctuation">.</span>send<span class="token punctuation">(</span>response<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token comment"># \u5C06response body\u53D1\u9001\u7ED9\u6D4F\u89C8\u5668</span>
        new_socket<span class="token punctuation">.</span>send<span class="token punctuation">(</span>html_content<span class="token punctuation">)</span>

    <span class="token comment"># \u5173\u95ED\u5957\u63A5\u5B57</span>
    new_socket<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;\u7528\u6765\u5B8C\u6210\u6574\u4F53\u7684\u63A7\u5236&quot;&quot;&quot;</span>
    <span class="token comment"># 1. \u521B\u5EFA\u5957\u63A5\u5B57</span>
    tcp_server_socket <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SOCK_STREAM<span class="token punctuation">)</span>
    <span class="token comment"># \u8BBE\u7F6E\u5F53\u670D\u52A1\u5668\u5148close \u5373\u670D\u52A1\u5668\u7AEF4\u6B21\u6325\u624B\u4E4B\u540E\u8D44\u6E90\u80FD\u591F\u7ACB\u5373\u91CA\u653E\uFF0C\u8FD9\u6837\u5C31\u4FDD\u8BC1\u4E86\uFF0C\u4E0B\u6B21\u8FD0\u884C\u7A0B\u5E8F\u65F6 \u53EF\u4EE5\u7ACB\u5373\u7ED1\u5B9A7890\u7AEF\u53E3</span>
    tcp_server_socket<span class="token punctuation">.</span>setsockopt<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>SOL_SOCKET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SO_REUSEADDR<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>

    <span class="token comment"># 2. \u7ED1\u5B9A</span>
    tcp_server_socket<span class="token punctuation">.</span>bind<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token number">7890</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment"># 3. \u53D8\u4E3A\u76D1\u542C\u5957\u63A5\u5B57</span>
    tcp_server_socket<span class="token punctuation">.</span>listen<span class="token punctuation">(</span><span class="token number">128</span><span class="token punctuation">)</span>

    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        <span class="token comment"># 4. \u7B49\u5F85\u65B0\u5BA2\u6237\u7AEF\u7684\u94FE\u63A5</span>
        new_socket<span class="token punctuation">,</span> client_addr <span class="token operator">=</span> tcp_server_socket<span class="token punctuation">.</span>accept<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># 5. \u4E3A\u8FD9\u4E2A\u5BA2\u6237\u7AEF\u670D\u52A1</span>
        p <span class="token operator">=</span> multiprocessing<span class="token punctuation">.</span>Process<span class="token punctuation">(</span>target<span class="token operator">=</span>service_client<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span>new_socket<span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        p<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>

        new_socket<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># \u5173\u95ED\u76D1\u542C\u5957\u63A5\u5B57</span>
    tcp_server_socket<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4F7F\u7528\u591A\u7EBF\u7A0B</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> socket
<span class="token keyword">import</span> re
<span class="token keyword">import</span> threading

<span class="token keyword">def</span> <span class="token function">service_client</span><span class="token punctuation">(</span>new_socket<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot; \u4E3A\u5BA2\u670D\u7AEF\u8FD4\u56DE\u6570\u636E &quot;&quot;&quot;</span>

    <span class="token comment"># 1. \u63A5\u6536\u6D4F\u89C8\u5668\u53D1\u9001\u8FC7\u6765\u7684\u8BF7\u6C42 \uFF0C\u5373http\u8BF7\u6C42</span>
    <span class="token comment"># GET / HTTP/1.1</span>
    <span class="token comment"># .....</span>
    request <span class="token operator">=</span> new_socket<span class="token punctuation">.</span>recv<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
    <span class="token comment"># print(request)</span>
    request_lines <span class="token operator">=</span> request<span class="token punctuation">.</span>splitlines<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;&gt;&#39;</span><span class="token operator">*</span><span class="token number">50</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>request_lines<span class="token punctuation">)</span>

    <span class="token comment"># GET /index.html HTTP/1.1</span>
    <span class="token comment"># get post put del</span>
    file_name <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
    ret <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">r&#39;[^/]+(/[^ ]*)&#39;</span><span class="token punctuation">,</span> request_lines<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> ret<span class="token punctuation">:</span>
        file_name <span class="token operator">=</span> ret<span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BF7\u6C42\u7684\u6587\u4EF6:%s&#39;</span> <span class="token operator">%</span> file_name<span class="token punctuation">)</span>
        <span class="token keyword">if</span> file_name <span class="token operator">==</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">:</span>
            file_name <span class="token operator">=</span> <span class="token string">&#39;/index.html&#39;</span>

    <span class="token comment"># 2. \u8FD4\u56DEhttp\u683C\u5F0F\u7684\u6570\u636E\uFF0C\u7ED9\u6D4F\u89C8\u5668</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;./html&#39;</span> <span class="token operator">+</span> file_name<span class="token punctuation">,</span> <span class="token string">&#39;rb&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">except</span><span class="token punctuation">:</span>
        response <span class="token operator">=</span> <span class="token string">&#39;HTTP/1.1 404 NOT FOUND\\r\\n&#39;</span>
        response <span class="token operator">+=</span> <span class="token string">&#39;\\r\\n&#39;</span>
        response <span class="token operator">+=</span> <span class="token string">&#39;------file not found-----&#39;</span>
        new_socket<span class="token punctuation">.</span>send<span class="token punctuation">(</span>response<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        html_content <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
        f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment"># 2.1 \u51C6\u5907\u53D1\u9001\u7ED9\u6D4F\u89C8\u5668\u7684\u6570\u636E---header</span>
        response <span class="token operator">=</span> <span class="token string">&#39;HTTP/1.1 200 OK\\r\\n&#39;</span>
        response <span class="token operator">+=</span> <span class="token string">&#39;\\r\\n&#39;</span>
        <span class="token comment"># 2.2 \u51C6\u5907\u53D1\u9001\u7ED9\u6D4F\u89C8\u5668\u7684\u6570\u636E---boy</span>
        <span class="token comment"># response += &quot;hahahhah&quot;</span>

        <span class="token comment"># \u5C06response header\u53D1\u9001\u7ED9\u6D4F\u89C8\u5668</span>
        new_socket<span class="token punctuation">.</span>send<span class="token punctuation">(</span>response<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token comment"># \u5C06response body\u53D1\u9001\u7ED9\u6D4F\u89C8\u5668</span>
        new_socket<span class="token punctuation">.</span>send<span class="token punctuation">(</span>html_content<span class="token punctuation">)</span>

    <span class="token comment"># \u5173\u95ED\u5957\u63A5\u5B57</span>
    new_socket<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;\u7528\u6765\u5B8C\u6210\u6574\u4F53\u7684\u63A7\u5236&quot;&quot;&quot;</span>
    <span class="token comment"># 1. \u521B\u5EFA\u5957\u63A5\u5B57</span>
    tcp_server_socket <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SOCK_STREAM<span class="token punctuation">)</span>
    <span class="token comment"># \u8BBE\u7F6E\u5F53\u670D\u52A1\u5668\u5148close \u5373\u670D\u52A1\u5668\u7AEF4\u6B21\u6325\u624B\u4E4B\u540E\u8D44\u6E90\u80FD\u591F\u7ACB\u5373\u91CA\u653E\uFF0C\u8FD9\u6837\u5C31\u4FDD\u8BC1\u4E86\uFF0C\u4E0B\u6B21\u8FD0\u884C\u7A0B\u5E8F\u65F6 \u53EF\u4EE5\u7ACB\u5373\u7ED1\u5B9A7890\u7AEF\u53E3</span>
    tcp_server_socket<span class="token punctuation">.</span>setsockopt<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>SOL_SOCKET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SO_REUSEADDR<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>

    <span class="token comment"># 2. \u7ED1\u5B9A</span>
    tcp_server_socket<span class="token punctuation">.</span>bind<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token number">7890</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment"># 3. \u53D8\u4E3A\u76D1\u542C\u5957\u63A5\u5B57</span>
    tcp_server_socket<span class="token punctuation">.</span>listen<span class="token punctuation">(</span><span class="token number">128</span><span class="token punctuation">)</span>

    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        <span class="token comment"># 4. \u7B49\u5F85\u65B0\u5BA2\u6237\u7AEF\u7684\u94FE\u63A5</span>
        new_socket<span class="token punctuation">,</span> client_addr <span class="token operator">=</span> tcp_server_socket<span class="token punctuation">.</span>accept<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># 5. \u4E3A\u8FD9\u4E2A\u5BA2\u6237\u7AEF\u670D\u52A1</span>
        t <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>service_client<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span>new_socket<span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        t<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># \u5173\u95ED\u76D1\u542C\u5957\u63A5\u5B57</span>
    tcp_server_socket<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4F7F\u7528\u534F\u7A0B</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> socket
<span class="token keyword">import</span> re
<span class="token keyword">import</span> gevent
<span class="token keyword">from</span> gevent <span class="token keyword">import</span> monkey

monkey<span class="token punctuation">.</span>patch_all<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">service_client</span><span class="token punctuation">(</span>new_socket<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot; \u4E3A\u5BA2\u670D\u7AEF\u8FD4\u56DE\u6570\u636E &quot;&quot;&quot;</span>

    <span class="token comment"># 1. \u63A5\u6536\u6D4F\u89C8\u5668\u53D1\u9001\u8FC7\u6765\u7684\u8BF7\u6C42 \uFF0C\u5373http\u8BF7\u6C42</span>
    <span class="token comment"># GET / HTTP/1.1</span>
    <span class="token comment"># .....</span>
    request <span class="token operator">=</span> new_socket<span class="token punctuation">.</span>recv<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
    <span class="token comment"># print(request)</span>
    request_lines <span class="token operator">=</span> request<span class="token punctuation">.</span>splitlines<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;&gt;&#39;</span><span class="token operator">*</span><span class="token number">50</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>request_lines<span class="token punctuation">)</span>

    <span class="token comment"># GET /index.html HTTP/1.1</span>
    <span class="token comment"># get post put del</span>
    file_name <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
    ret <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">r&#39;[^/]+(/[^ ]*)&#39;</span><span class="token punctuation">,</span> request_lines<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> ret<span class="token punctuation">:</span>
        file_name <span class="token operator">=</span> ret<span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BF7\u6C42\u7684\u6587\u4EF6:%s&#39;</span> <span class="token operator">%</span> file_name<span class="token punctuation">)</span>
        <span class="token keyword">if</span> file_name <span class="token operator">==</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">:</span>
            file_name <span class="token operator">=</span> <span class="token string">&#39;/index.html&#39;</span>

    <span class="token comment"># 2. \u8FD4\u56DEhttp\u683C\u5F0F\u7684\u6570\u636E\uFF0C\u7ED9\u6D4F\u89C8\u5668</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;./html&#39;</span> <span class="token operator">+</span> file_name<span class="token punctuation">,</span> <span class="token string">&#39;rb&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">except</span><span class="token punctuation">:</span>
        response <span class="token operator">=</span> <span class="token string">&#39;HTTP/1.1 404 NOT FOUND\\r\\n&#39;</span>
        response <span class="token operator">+=</span> <span class="token string">&#39;\\r\\n&#39;</span>
        response <span class="token operator">+=</span> <span class="token string">&#39;------file not found-----&#39;</span>
        new_socket<span class="token punctuation">.</span>send<span class="token punctuation">(</span>response<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        html_content <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
        f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment"># 2.1 \u51C6\u5907\u53D1\u9001\u7ED9\u6D4F\u89C8\u5668\u7684\u6570\u636E---header</span>
        response <span class="token operator">=</span> <span class="token string">&#39;HTTP/1.1 200 OK\\r\\n&#39;</span>
        response <span class="token operator">+=</span> <span class="token string">&#39;\\r\\n&#39;</span>
        <span class="token comment"># 2.2 \u51C6\u5907\u53D1\u9001\u7ED9\u6D4F\u89C8\u5668\u7684\u6570\u636E---boy</span>
        <span class="token comment"># response += &quot;hahahhah&quot;</span>

        <span class="token comment"># \u5C06response header\u53D1\u9001\u7ED9\u6D4F\u89C8\u5668</span>
        new_socket<span class="token punctuation">.</span>send<span class="token punctuation">(</span>response<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token comment"># \u5C06response body\u53D1\u9001\u7ED9\u6D4F\u89C8\u5668</span>
        new_socket<span class="token punctuation">.</span>send<span class="token punctuation">(</span>html_content<span class="token punctuation">)</span>

    <span class="token comment"># \u5173\u95ED\u5957\u63A5\u5B57</span>
    new_socket<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;\u7528\u6765\u5B8C\u6210\u6574\u4F53\u7684\u63A7\u5236&quot;&quot;&quot;</span>
    <span class="token comment"># 1. \u521B\u5EFA\u5957\u63A5\u5B57</span>
    tcp_server_socket <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SOCK_STREAM<span class="token punctuation">)</span>
    <span class="token comment"># \u8BBE\u7F6E\u5F53\u670D\u52A1\u5668\u5148close \u5373\u670D\u52A1\u5668\u7AEF4\u6B21\u6325\u624B\u4E4B\u540E\u8D44\u6E90\u80FD\u591F\u7ACB\u5373\u91CA\u653E\uFF0C\u8FD9\u6837\u5C31\u4FDD\u8BC1\u4E86\uFF0C\u4E0B\u6B21\u8FD0\u884C\u7A0B\u5E8F\u65F6 \u53EF\u4EE5\u7ACB\u5373\u7ED1\u5B9A7890\u7AEF\u53E3</span>
    tcp_server_socket<span class="token punctuation">.</span>setsockopt<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>SOL_SOCKET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SO_REUSEADDR<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>

    <span class="token comment"># 2. \u7ED1\u5B9A</span>
    tcp_server_socket<span class="token punctuation">.</span>bind<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token number">7890</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment"># 3. \u53D8\u4E3A\u76D1\u542C\u5957\u63A5\u5B57</span>
    tcp_server_socket<span class="token punctuation">.</span>listen<span class="token punctuation">(</span><span class="token number">128</span><span class="token punctuation">)</span>

    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        <span class="token comment"># 4. \u7B49\u5F85\u65B0\u5BA2\u6237\u7AEF\u7684\u94FE\u63A5</span>
        new_socket<span class="token punctuation">,</span> client_addr <span class="token operator">=</span> tcp_server_socket<span class="token punctuation">.</span>accept<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># 5. \u4E3A\u8FD9\u4E2A\u5BA2\u6237\u7AEF\u670D\u52A1</span>
        gevent<span class="token punctuation">.</span>spawn<span class="token punctuation">(</span>service_client<span class="token punctuation">,</span> new_socket<span class="token punctuation">)</span>

    <span class="token comment"># \u5173\u95ED\u76D1\u542C\u5957\u63A5\u5B57</span>
    tcp_server_socket<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u975E\u963B\u585E</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> socket
<span class="token keyword">import</span> time

tcp_server_tcp <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SOCK_STREAM<span class="token punctuation">)</span>
tcp_server_tcp<span class="token punctuation">.</span>bind<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token number">7890</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
tcp_server_tcp<span class="token punctuation">.</span>listen<span class="token punctuation">(</span><span class="token number">128</span><span class="token punctuation">)</span>
tcp_server_tcp<span class="token punctuation">.</span>setblocking<span class="token punctuation">(</span><span class="token boolean">False</span><span class="token punctuation">)</span>  <span class="token comment"># \u8BBE\u7F6E\u5957\u63A5\u5B57\u4E3A\u975E\u5835\u585E\u7684\u65B9\u5F0F</span>

client_socket_list <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>

    <span class="token comment"># time.sleep(0.5)</span>

    <span class="token keyword">try</span><span class="token punctuation">:</span>
        new_socket<span class="token punctuation">,</span> new_addr <span class="token operator">=</span> tcp_server_tcp<span class="token punctuation">.</span>accept<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">except</span> Exception <span class="token keyword">as</span> ret<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;---\u6CA1\u6709\u65B0\u7684\u5BA2\u6237\u7AEF\u5230\u6765---&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;---\u53EA\u8981\u6CA1\u6709\u4EA7\u751F\u5F02\u5E38\uFF0C\u90A3\u4E48\u4E5F\u5C31\u610F\u5473\u7740 \u6765\u4E86\u4E00\u4E2A\u65B0\u7684\u5BA2\u6237\u7AEF----&#39;</span><span class="token punctuation">)</span>
        new_socket<span class="token punctuation">.</span>setblocking<span class="token punctuation">(</span><span class="token boolean">False</span><span class="token punctuation">)</span>  <span class="token comment"># \u8BBE\u7F6E\u5957\u63A5\u5B57\u4E3A\u975E\u5835\u585E\u7684\u65B9\u5F0F</span>
        client_socket_list<span class="token punctuation">.</span>append<span class="token punctuation">(</span>new_socket<span class="token punctuation">)</span>

    <span class="token keyword">for</span> client_socket <span class="token keyword">in</span> client_socket_list<span class="token punctuation">:</span>
        <span class="token keyword">try</span><span class="token punctuation">:</span>
            recv_data <span class="token operator">=</span> client_socket<span class="token punctuation">.</span>recv<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span>
        <span class="token keyword">except</span> Exception <span class="token keyword">as</span> ret<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;----\u8FD9\u4E2A\u5BA2\u6237\u7AEF\u6CA1\u6709\u53D1\u9001\u8FC7\u6765\u6570\u636E----&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;-----\u6CA1\u6709\u5F02\u5E38-----&#39;</span><span class="token punctuation">)</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>recv_data<span class="token punctuation">)</span>
            <span class="token keyword">if</span> recv_data<span class="token punctuation">:</span>
                <span class="token comment"># \u5BF9\u65B9\u53D1\u9001\u8FC7\u6765\u6570\u636E</span>
                <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;----\u5BA2\u6237\u7AEF\u53D1\u9001\u8FC7\u6765\u4E86\u6570\u636E-----&#39;</span><span class="token punctuation">)</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                <span class="token comment"># \u5BF9\u65B9\u8C03\u7528close \u5BFC\u81F4\u4E86 recv\u8FD4\u56DE</span>
                client_socket<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
                client_socket_list<span class="token punctuation">.</span>remove<span class="token punctuation">(</span>client_socket<span class="token punctuation">)</span>
                <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;---\u5BA2\u6237\u7AEF\u5DF2\u7ECF\u5173\u95ED----&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u975E\u963B\u585E\u957F\u94FE\u63A5</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> socket
<span class="token keyword">import</span> re


<span class="token keyword">def</span> <span class="token function">service_client</span><span class="token punctuation">(</span>new_socket<span class="token punctuation">,</span> request<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;\u4E3A\u8FD9\u4E2A\u5BA2\u6237\u7AEF\u8FD4\u56DE\u6570\u636E&quot;&quot;&quot;</span>

    <span class="token comment"># 1. \u63A5\u6536\u6D4F\u89C8\u5668\u53D1\u9001\u8FC7\u6765\u7684\u8BF7\u6C42 \uFF0C\u5373http\u8BF7\u6C42</span>
    <span class="token comment"># GET / HTTP/1.1</span>
    <span class="token comment"># .....</span>
    <span class="token comment"># request = new_socket.recv(1024).decode(&#39;utf-8&#39;)</span>
    <span class="token comment"># print(&#39;&gt;&gt;&gt;&#39;*50)</span>
    <span class="token comment"># print(request)</span>

    request_lines <span class="token operator">=</span> request<span class="token punctuation">.</span>splitlines<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;&gt;&#39;</span><span class="token operator">*</span><span class="token number">20</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>request_lines<span class="token punctuation">)</span>

    <span class="token comment"># GET /index.html HTTP/1.1</span>
    <span class="token comment"># get post put del</span>
    file_name <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
    ret <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">r&#39;[^/]+(/[^ ]*)&#39;</span><span class="token punctuation">,</span> request_lines<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> ret<span class="token punctuation">:</span>
        file_name <span class="token operator">=</span> ret<span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token comment"># print(&#39;*&#39;*50, file_name)</span>
        <span class="token keyword">if</span> file_name <span class="token operator">==</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">:</span>
            file_name <span class="token operator">=</span> <span class="token string">&#39;/index.html&#39;</span>

    <span class="token comment"># 2. \u8FD4\u56DEhttp\u683C\u5F0F\u7684\u6570\u636E\uFF0C\u7ED9\u6D4F\u89C8\u5668</span>

    <span class="token keyword">try</span><span class="token punctuation">:</span>
        f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;./html&#39;</span> <span class="token operator">+</span> file_name<span class="token punctuation">,</span> <span class="token string">&#39;rb&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">except</span><span class="token punctuation">:</span>
        response <span class="token operator">=</span> <span class="token string">&#39;HTTP/1.1 404 NOT FOUND\\r\\n&#39;</span>
        response <span class="token operator">+=</span> <span class="token string">&#39;\\r\\n&#39;</span>
        response <span class="token operator">+=</span> <span class="token string">&#39;------file not found-----&#39;</span>
        new_socket<span class="token punctuation">.</span>send<span class="token punctuation">(</span>response<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        html_content <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
        f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

        response_body <span class="token operator">=</span> html_content

        response_header <span class="token operator">=</span> <span class="token string">&#39;HTTP/1.1 200 OK\\r\\n&#39;</span>
        response_header <span class="token operator">+=</span> <span class="token string">&#39;Content-Length:%d\\r\\n&#39;</span> <span class="token operator">%</span> <span class="token builtin">len</span><span class="token punctuation">(</span>response_body<span class="token punctuation">)</span>
        response_header <span class="token operator">+=</span> <span class="token string">&#39;\\r\\n&#39;</span>

        response <span class="token operator">=</span> response_header<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> response_body

        new_socket<span class="token punctuation">.</span>send<span class="token punctuation">(</span>response<span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;\u7528\u6765\u5B8C\u6210\u6574\u4F53\u7684\u63A7\u5236&quot;&quot;&quot;</span>
    <span class="token comment"># 1. \u521B\u5EFA\u5957\u63A5\u5B57</span>
    tcp_server_socket <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SOCK_STREAM<span class="token punctuation">)</span>
    tcp_server_socket<span class="token punctuation">.</span>setsockopt<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>SOL_SOCKET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SO_REUSEADDR<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>

    <span class="token comment"># 2. \u7ED1\u5B9A</span>
    tcp_server_socket<span class="token punctuation">.</span>bind<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token number">7890</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment"># 3. \u53D8\u4E3A\u76D1\u542C\u5957\u63A5\u5B57</span>
    tcp_server_socket<span class="token punctuation">.</span>listen<span class="token punctuation">(</span><span class="token number">128</span><span class="token punctuation">)</span>
    tcp_server_socket<span class="token punctuation">.</span>setblocking<span class="token punctuation">(</span><span class="token boolean">False</span><span class="token punctuation">)</span>  <span class="token comment"># \u5C06\u5957\u63A5\u5B57\u53D8\u4E3A\u975E\u5835\u585E</span>

    client_socket_list <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        <span class="token comment"># 4. \u7B49\u5F85\u65B0\u5BA2\u6237\u7AEF\u7684\u94FE\u63A5</span>
        <span class="token keyword">try</span><span class="token punctuation">:</span>
            new_socket<span class="token punctuation">,</span> client_addr <span class="token operator">=</span> tcp_server_socket<span class="token punctuation">.</span>accept<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">except</span> Exception <span class="token keyword">as</span> ret<span class="token punctuation">:</span>
            <span class="token keyword">pass</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            new_socket<span class="token punctuation">.</span>setblocking<span class="token punctuation">(</span><span class="token boolean">False</span><span class="token punctuation">)</span>
            client_socket_list<span class="token punctuation">.</span>append<span class="token punctuation">(</span>new_socket<span class="token punctuation">)</span>

        <span class="token keyword">for</span> client_socket <span class="token keyword">in</span> client_socket_list<span class="token punctuation">:</span>
            <span class="token keyword">try</span><span class="token punctuation">:</span>
                recv_data <span class="token operator">=</span> client_socket<span class="token punctuation">.</span>recv<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
            <span class="token keyword">except</span> Exception <span class="token keyword">as</span> ret<span class="token punctuation">:</span>
                <span class="token keyword">pass</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                <span class="token keyword">if</span> recv_data<span class="token punctuation">:</span>
                    service_client<span class="token punctuation">(</span>client_socket<span class="token punctuation">,</span> recv_data<span class="token punctuation">)</span>
                <span class="token keyword">else</span><span class="token punctuation">:</span>
                    client_socket<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
                    client_socket_list<span class="token punctuation">.</span>remove<span class="token punctuation">(</span>client_socket<span class="token punctuation">)</span>

    <span class="token comment"># \u5173\u95ED\u76D1\u542C\u5957\u63A5\u5B57</span>
    tcp_server_socket<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>epoll</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> socket
<span class="token keyword">import</span> re
<span class="token keyword">import</span> select  <span class="token comment"># epoll window\u4E0B\u6CA1\u6709</span>


<span class="token keyword">def</span> <span class="token function">service_client</span><span class="token punctuation">(</span>new_socket<span class="token punctuation">,</span> request<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;\u4E3A\u8FD9\u4E2A\u5BA2\u6237\u7AEF\u8FD4\u56DE\u6570\u636E&quot;&quot;&quot;</span>

    <span class="token comment"># 1. \u63A5\u6536\u6D4F\u89C8\u5668\u53D1\u9001\u8FC7\u6765\u7684\u8BF7\u6C42 \uFF0C\u5373http\u8BF7\u6C42</span>
    <span class="token comment"># GET / HTTP/1.1</span>
    <span class="token comment"># .....</span>
    <span class="token comment"># request = new_socket.recv(1024).decode(&#39;utf-8&#39;)</span>
    <span class="token comment"># print(&#39;&gt;&gt;&gt;&#39;*50)</span>
    <span class="token comment"># print(request)</span>

    request_lines <span class="token operator">=</span> request<span class="token punctuation">.</span>splitlines<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;&gt;&#39;</span><span class="token operator">*</span><span class="token number">20</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>request_lines<span class="token punctuation">)</span>

    <span class="token comment"># GET /index.html HTTP/1.1</span>
    <span class="token comment"># get post put del</span>
    file_name <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
    ret <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">r&#39;[^/]+(/[^ ]*)&#39;</span><span class="token punctuation">,</span> request_lines<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> ret<span class="token punctuation">:</span>
        file_name <span class="token operator">=</span> ret<span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token comment"># print(&#39;*&#39;*50, file_name)</span>
        <span class="token keyword">if</span> file_name <span class="token operator">==</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">:</span>
            file_name <span class="token operator">=</span> <span class="token string">&#39;/index.html&#39;</span>

    <span class="token comment"># 2. \u8FD4\u56DEhttp\u683C\u5F0F\u7684\u6570\u636E\uFF0C\u7ED9\u6D4F\u89C8\u5668</span>

    <span class="token keyword">try</span><span class="token punctuation">:</span>
        f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;./html&#39;</span> <span class="token operator">+</span> file_name<span class="token punctuation">,</span> <span class="token string">&#39;rb&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">except</span><span class="token punctuation">:</span>
        response <span class="token operator">=</span> <span class="token string">&#39;HTTP/1.1 404 NOT FOUND\\r\\n&#39;</span>
        response <span class="token operator">+=</span> <span class="token string">&#39;\\r\\n&#39;</span>
        response <span class="token operator">+=</span> <span class="token string">&#39;------file not found-----&#39;</span>
        new_socket<span class="token punctuation">.</span>send<span class="token punctuation">(</span>response<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        html_content <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
        f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

        response_body <span class="token operator">=</span> html_content

        response_header <span class="token operator">=</span> <span class="token string">&#39;HTTP/1.1 200 OK\\r\\n&#39;</span>
        response_header <span class="token operator">+=</span> <span class="token string">&#39;Content-Length:%d\\r\\n&#39;</span> <span class="token operator">%</span> <span class="token builtin">len</span><span class="token punctuation">(</span>response_body<span class="token punctuation">)</span>
        response_header <span class="token operator">+=</span> <span class="token string">&#39;\\r\\n&#39;</span>

        response <span class="token operator">=</span> response_header<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> response_body

        new_socket<span class="token punctuation">.</span>send<span class="token punctuation">(</span>response<span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;\u7528\u6765\u5B8C\u6210\u6574\u4F53\u7684\u63A7\u5236&quot;&quot;&quot;</span>
    <span class="token comment"># 1. \u521B\u5EFA\u5957\u63A5\u5B57</span>
    tcp_server_socket <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SOCK_STREAM<span class="token punctuation">)</span>
    tcp_server_socket<span class="token punctuation">.</span>setsockopt<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>SOL_SOCKET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SO_REUSEADDR<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>

    <span class="token comment"># 2. \u7ED1\u5B9A</span>
    tcp_server_socket<span class="token punctuation">.</span>bind<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token number">7890</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment"># 3. \u53D8\u4E3A\u76D1\u542C\u5957\u63A5\u5B57</span>
    tcp_server_socket<span class="token punctuation">.</span>listen<span class="token punctuation">(</span><span class="token number">128</span><span class="token punctuation">)</span>
    tcp_server_socket<span class="token punctuation">.</span>setblocking<span class="token punctuation">(</span><span class="token boolean">False</span><span class="token punctuation">)</span>  <span class="token comment"># \u5C06\u5957\u63A5\u5B57\u53D8\u4E3A\u975E\u5835\u585E</span>

    <span class="token comment"># \u521B\u5EFA\u4E00\u4E2Aepoll\u5BF9\u8C61</span>
    epl <span class="token operator">=</span> select<span class="token punctuation">.</span>epoll<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># \u5C06\u76D1\u542C\u5957\u63A5\u5B57\u5BF9\u5E94\u7684fd\u6CE8\u518C\u5230epoll\u4E2D</span>
    epl<span class="token punctuation">.</span>register<span class="token punctuation">(</span>tcp_server_socket<span class="token punctuation">.</span>fileno<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> select<span class="token punctuation">.</span>EPOLLIN<span class="token punctuation">)</span>

    fd_event_dict <span class="token operator">=</span> <span class="token builtin">dict</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>

        fd_event_list <span class="token operator">=</span> epl<span class="token punctuation">.</span>poll<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># \u9ED8\u8BA4\u4F1A\u5835\u585E\uFF0C\u76F4\u5230 os\u76D1\u6D4B\u5230\u6570\u636E\u5230\u6765 \u901A\u8FC7\u4E8B\u4EF6\u901A\u77E5\u65B9\u5F0F \u544A\u8BC9\u8FD9\u4E2A\u7A0B\u5E8F\uFF0C\u6B64\u65F6\u624D\u4F1A\u89E3\u5835\u585E</span>

        <span class="token comment"># [(fd, event), (\u5957\u63A5\u5B57\u5BF9\u5E94\u7684\u6587\u4EF6\u63CF\u8FF0\u7B26, \u8FD9\u4E2A\u6587\u4EF6\u63CF\u8FF0\u7B26\u5230\u5E95\u662F\u4EC0\u4E48\u4E8B\u4EF6 \u4F8B\u5982 \u53EF\u4EE5\u8C03\u7528recv\u63A5\u6536\u7B49)]</span>
        <span class="token keyword">for</span> fd<span class="token punctuation">,</span> event <span class="token keyword">in</span> fd_event_list<span class="token punctuation">:</span>
            <span class="token comment"># \u7B49\u5F85\u65B0\u5BA2\u6237\u7AEF\u7684\u94FE\u63A5</span>
            <span class="token keyword">if</span> fd <span class="token operator">==</span> tcp_server_socket<span class="token punctuation">.</span>fileno<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                new_socket<span class="token punctuation">,</span> client_addr <span class="token operator">=</span> tcp_server_socket<span class="token punctuation">.</span>accept<span class="token punctuation">(</span><span class="token punctuation">)</span>
                epl<span class="token punctuation">.</span>register<span class="token punctuation">(</span>new_socket<span class="token punctuation">.</span>fileno<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> select<span class="token punctuation">.</span>EPOLLIN<span class="token punctuation">)</span>
                fd_event_dict<span class="token punctuation">[</span>new_socket<span class="token punctuation">.</span>fileno<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> new_socket
            <span class="token keyword">elif</span> event <span class="token operator">==</span> select<span class="token punctuation">.</span>EPOLLIN<span class="token punctuation">:</span>
                <span class="token comment"># \u5224\u65AD\u5DF2\u7ECF\u94FE\u63A5\u7684\u5BA2\u6237\u7AEF\u662F\u5426\u6709\u6570\u636E\u53D1\u9001\u8FC7\u6765</span>
                recv_data <span class="token operator">=</span> fd_event_dict<span class="token punctuation">[</span>fd<span class="token punctuation">]</span><span class="token punctuation">.</span>recv<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span>
                <span class="token keyword">if</span> recv_data<span class="token punctuation">:</span>
                    service_client<span class="token punctuation">(</span>fd_event_dict<span class="token punctuation">[</span>fd<span class="token punctuation">]</span><span class="token punctuation">,</span> recv_data<span class="token punctuation">)</span>
                <span class="token keyword">else</span><span class="token punctuation">:</span>
                    fd_event_dict<span class="token punctuation">[</span>fd<span class="token punctuation">]</span><span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
                    epl<span class="token punctuation">.</span>unregister<span class="token punctuation">(</span>fd<span class="token punctuation">)</span>
                    <span class="token keyword">del</span> fd_event_dict<span class="token punctuation">[</span>fd<span class="token punctuation">]</span>

    <span class="token comment"># \u5173\u95ED\u76D1\u542C\u5957\u63A5\u5B57</span>
    tcp_server_socket<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),c=[p];function o(i,l){return s(),a("div",null,c)}const k=n(t,[["render",o],["__file","http.html.vue"]]);export{k as default};
