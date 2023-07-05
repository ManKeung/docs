import{_ as n,o as s,c as a,a as p}from"./app.b7a23fca.js";const t={},e=p(`<h1 id="\u7F51\u7EDC\u7F16\u7A0Budp" tabindex="-1"><a class="header-anchor" href="#\u7F51\u7EDC\u7F16\u7A0Budp" aria-hidden="true">#</a> \u7F51\u7EDC\u7F16\u7A0BUDP</h1><ul><li>\u57FA\u672C\u4F7F\u7528</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> socket

<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># \u521B\u5EFA\u4E00\u4E2Audp\u5957\u63A5\u5B57</span>
    udp_socket <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SOCK_DGRAM<span class="token punctuation">)</span>

    <span class="token comment"># \u53EF\u4EE5\u4F7F\u7528\u5957\u63A5\u5B57\u6536\u53D1\u6570\u636E</span>
    <span class="token comment"># udp_socket.sendto(&#39;hahah&#39;, \u5BF9\u65B9\u7684ip\u548Cport)</span>
    <span class="token comment"># udp_socket.sendto(send_data.encode(&#39;utf-8&#39;), (&#39;192.168.247.1&#39;, 8080))</span>
    udp_socket<span class="token punctuation">.</span>sendto<span class="token punctuation">(</span><span class="token string">b&#39;hello python&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;192.168.247.1&#39;</span><span class="token punctuation">,</span> <span class="token number">8080</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment"># \u5173\u95ED\u5957\u63A5\u5B57</span>
    udp_socket<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u7ED1\u5B9A\u7AEF\u53E3\u7528\u6765\u63A5\u6536\u6570\u636E</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> socket

<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># \u521B\u5EFA\u5957\u63A5\u5B57</span>
    udp_socket <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SOCK_DGRAM<span class="token punctuation">)</span>

    <span class="token comment"># \u7ED1\u5B9A\u672C\u5730\u4FE1\u606F</span>
    localaddr <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token number">7788</span><span class="token punctuation">)</span>
    udp_socket<span class="token punctuation">.</span>bind<span class="token punctuation">(</span>localaddr<span class="token punctuation">)</span>

    <span class="token comment"># \u63A5\u6536\u6570\u636E</span>
    recv_data <span class="token operator">=</span> udp_socket<span class="token punctuation">.</span>recvfrom<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span>  <span class="token comment"># 1024\u63A5\u6536\u591A\u5927</span>
    <span class="token comment"># recv_data\u8FD9\u4E2A\u53D8\u91CF\u5B58\u50A8\u7684\u662F\u4E00\u4E2A\u5143\u7956\uFF08\u63A5\u6536\u5230\u7684\u6570\u636E\uFF0C\uFF08\u53D1\u9001\u7684ip\uFF0Cport\uFF09\uFF09</span>
    recv_msg <span class="token operator">=</span> recv_data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>  <span class="token comment"># \u5B58\u50A8\u63A5\u6536\u5230\u7684\u6570\u636E</span>
    recv_addr <span class="token operator">=</span> recv_data<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>  <span class="token comment"># \u5B58\u50A8\u53D1\u9001\u65B9\u7684\u5730\u5740</span>

    <span class="token comment"># \u6253\u5370\u63A5\u6536\u5230\u7684\u6570\u636E</span>
    <span class="token comment"># print(recv_data)</span>
    <span class="token comment"># print(&#39;%s:%s&#39; % (str(recv_addr), recv_msg.decode(&#39;utf-8&#39;)))  # windos\u9ED8\u8BA4gbk</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;%s:%s&#39;</span> <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">(</span>recv_addr<span class="token punctuation">)</span><span class="token punctuation">,</span> recv_msg<span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;gbk&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment"># \u5173\u95ED\u5957\u63A5\u5B57</span>
    udp_socket<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u63A5\u6536\u6D88\u606F</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> socket


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># \u521B\u5EFA\u5957\u63A5\u5B57</span>
    udp_socket <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SOCK_DGRAM<span class="token punctuation">)</span>

    <span class="token comment"># \u7ED1\u5B9A\u672C\u5730\u4FE1\u606F</span>
    localaddr <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token number">7788</span><span class="token punctuation">)</span>
    udp_socket<span class="token punctuation">.</span>bind<span class="token punctuation">(</span>localaddr<span class="token punctuation">)</span>

    <span class="token comment"># \u63A5\u6536\u6570\u636E</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        recv_data <span class="token operator">=</span> udp_socket<span class="token punctuation">.</span>recvfrom<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span>
        <span class="token comment"># recv_data\u8FD9\u4E2A\u53D8\u91CF\u5B58\u50A8\u7684\u662F\u4E00\u4E2A\u5143\u7956\uFF08\u63A5\u6536\u5230\u7684\u6570\u636E\uFF0C\uFF08\u53D1\u9001\u7684ip\uFF0Cport\uFF09\uFF09</span>
        recv_msg <span class="token operator">=</span> recv_data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>  <span class="token comment"># \u5B58\u50A8\u63A5\u6536\u5230\u7684\u6570\u636E</span>
        recv_addr <span class="token operator">=</span> recv_data<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>  <span class="token comment"># \u5B58\u50A8\u53D1\u9001\u65B9\u7684\u5730\u5740</span>

        <span class="token comment"># \u6253\u5370\u63A5\u6536\u5230\u7684\u6570\u636E</span>
        <span class="token comment"># print(recv_data)</span>
        <span class="token comment"># print(&#39;%s:%s&#39; % (str(recv_addr), recv_msg.decode(&#39;utf-8&#39;)))  # windos\u9ED8\u8BA4gbk</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;%s:%s&#39;</span> <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">(</span>recv_addr<span class="token punctuation">)</span><span class="token punctuation">,</span> recv_msg<span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment"># \u5173\u95ED\u5957\u63A5\u5B57</span>
    udp_socket<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u53D1\u9001\u6D88\u606F</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> socket


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># \u521B\u5EFA\u4E00\u4E2Audp\u5957\u63A5\u5B57</span>
    udp_socket <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SOCK_DGRAM<span class="token punctuation">)</span>

    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        <span class="token comment"># \u4ECE\u952E\u76D8\u83B7\u53D6\u6570\u636E</span>
        send_data <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BF7\u8F93\u5165\u8981\u53D1\u9001\u7684\u6570\u636E\uFF1A&#39;</span><span class="token punctuation">)</span>

        <span class="token comment"># \u5982\u679C\u8212\u670D\u7684\u6570\u636E\u662Fexit\uFF0C\u90A3\u4E48\u9000\u51FA\u7A0B\u5E8F</span>
        <span class="token keyword">if</span> send_data <span class="token operator">==</span> <span class="token string">&#39;exit&#39;</span><span class="token punctuation">:</span>
            <span class="token keyword">break</span>

        <span class="token comment"># \u53EF\u4EE5\u4F7F\u7528\u5957\u63A5\u5B57\u6536\u53D1\u6570\u636E</span>
        udp_socket<span class="token punctuation">.</span>sendto<span class="token punctuation">(</span>send_data<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token number">7788</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment"># \u5173\u95ED\u5957\u63A5\u5B57</span>
    udp_socket<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u804A\u5929\u6848\u4F8B</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> socket

<span class="token keyword">def</span> <span class="token function">send_msg</span><span class="token punctuation">(</span>udp_socket<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot; \u53D1\u9001\u6D88\u606F &quot;&quot;&quot;</span>
    dest_ip <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BF7\u8F93\u5165\u5BF9\u65B9\u7684ip\uFF1A&#39;</span><span class="token punctuation">)</span>
    dest_port <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BF7\u8F93\u5165\u5BF9\u65B9\u7684port\uFF1A&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    send_data <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BF7\u8F93\u5165\u8981\u53D1\u9001\u7684\u6D88\u606F\uFF1A&#39;</span><span class="token punctuation">)</span>
    udp_socket<span class="token punctuation">.</span>sendto<span class="token punctuation">(</span>send_data<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>dest_ip<span class="token punctuation">,</span> dest_port<span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">recv_msg</span><span class="token punctuation">(</span>udp_socket<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot; \u63A5\u6536\u6D88\u606F &quot;&quot;&quot;</span>
    recv_data <span class="token operator">=</span> udp_socket<span class="token punctuation">.</span>recvfrom<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;%s:%s&#39;</span> <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">(</span>recv_data<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> recv_data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># \u521B\u5EFA\u5957\u63A5\u5B57</span>
    udp_socket <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SOCK_DGRAM<span class="token punctuation">)</span>

    <span class="token comment"># \u7ED1\u5B9A\u4FE1\u606F</span>
    udp_socket<span class="token punctuation">.</span>bind<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token number">7788</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment"># \u5FAA\u73AF\u8FDB\u884C\u5904\u7406\u4E8B\u60C5</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;---------\u804A\u5929\u5668-------&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;1:\u53D1\u9001\u6D88\u606F&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;2:\u63A5\u6536\u6D88\u606F&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;0:\u9000\u51FA\u7CFB\u7EDF&#39;</span><span class="token punctuation">)</span>
        op <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BF7\u8F93\u5165\u529F\u80FD\uFF1A&#39;</span><span class="token punctuation">)</span>

        <span class="token keyword">if</span> op <span class="token operator">==</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">:</span>
            <span class="token comment"># \u53D1\u9001</span>
            send_msg<span class="token punctuation">(</span>udp_socket<span class="token punctuation">)</span>
        <span class="token keyword">elif</span> op <span class="token operator">==</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">:</span>
            <span class="token comment"># \u63A5\u6536\u5E76\u663E\u793A</span>
            recv_msg<span class="token punctuation">(</span>udp_socket<span class="token punctuation">)</span>
        <span class="token keyword">elif</span> op <span class="token operator">==</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">:</span>
            <span class="token keyword">break</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u8F93\u5165\u6709\u8BEF\u8BF7\u91CD\u65B0\u8F93\u5165&#39;</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),c=[e];function o(i,l){return s(),a("div",null,c)}const d=n(t,[["render",o],["__file","udp.html.vue"]]);export{d as default};
