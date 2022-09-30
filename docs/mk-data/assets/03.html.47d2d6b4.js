import{_ as n,o as s,c as e,a as i}from"./app.ac481352.js";const a={},l=i(`<h1 id="nginx\u914D\u7F6E\u53C2\u6570\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#nginx\u914D\u7F6E\u53C2\u6570\u8BF4\u660E" aria-hidden="true">#</a> Nginx\u914D\u7F6E\u53C2\u6570\u8BF4\u660E</h1><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code><span class="token comment">#\u5B9A\u4E49Nginx\u8FD0\u884C\u7684\u7528\u6237\u548C\u7528\u6237\u7EC4</span>
user www www;
<span class="token comment">#</span>
<span class="token comment">#nginx\u8FDB\u7A0B\u6570,\u5EFA\u8BAE\u8BBE\u7F6E\u4E3A\u7B49\u4E8ECPU\u603B\u6838\u5FC3\u6570.</span>
worker_processes 8;
<span class="token comment">#</span>
<span class="token comment">#\u5168\u5C40\u9519\u8BEF\u65E5\u5FD7\u5B9A\u4E49\u7C7B\u578B,[ debug | info | notice | warn | error | crit ]</span>
error_log /var/log/nginx/error.log info;
<span class="token comment">#</span>
<span class="token comment">#\u8FDB\u7A0B\u6587\u4EF6</span>
pid /var/run/nginx.pid;
<span class="token comment">#</span>
<span class="token comment">#\u4E00\u4E2Anginx\u8FDB\u7A0B\u6253\u5F00\u7684\u6700\u591A\u6587\u4EF6\u63CF\u8FF0\u7B26\u6570\u76EE,\u7406\u8BBA\u503C\u5E94\u8BE5\u662F\u6700\u591A\u6253\u5F00\u6587\u4EF6\u6570\uFF08\u7CFB\u7EDF\u7684\u503Culimit -n\uFF09\u4E0Enginx\u8FDB\u7A0B\u6570\u76F8\u9664,\u4F46\u662Fnginx\u5206\u914D\u8BF7\u6C42\u5E76\u4E0D\u5747\u5300,\u6240\u4EE5\u5EFA\u8BAE\u4E0Eulimit -n\u7684\u503C\u4FDD\u6301\u4E00\u81F4.</span>
worker_rlimit_nofile 65535;
<span class="token comment">#</span>
<span class="token comment">#\u5DE5\u4F5C\u6A21\u5F0F\u4E0E\u8FDE\u63A5\u6570\u4E0A\u9650</span>
events
{
    <span class="token comment">#\u53C2\u8003\u4E8B\u4EF6\u6A21\u578B,use [ kqueue | rtsig | epoll | /dev/poll | select | poll ]; epoll\u6A21\u578B\u662FLinux 2.6\u4EE5\u4E0A\u7248\u672C\u5185\u6838\u4E2D\u7684\u9AD8\u6027\u80FD\u7F51\u7EDCI/O\u6A21\u578B,\u5982\u679C\u8DD1\u5728FreeBSD\u4E0A\u9762,\u5C31\u7528kqueue\u6A21\u578B.</span>
    use epoll;
    <span class="token comment">#\u5355\u4E2A\u8FDB\u7A0B\u6700\u5927\u8FDE\u63A5\u6570\uFF08\u6700\u5927\u8FDE\u63A5\u6570=\u8FDE\u63A5\u6570*\u8FDB\u7A0B\u6570\uFF09</span>
    worker_connections 65535;
}
<span class="token comment">#</span>
<span class="token comment">#\u8BBE\u5B9Ahttp\u670D\u52A1\u5668</span>
http
{
    include mime.types; #\u6587\u4EF6\u6269\u5C55\u540D\u4E0E\u6587\u4EF6\u7C7B\u578B\u6620\u5C04\u8868
    default_type application/octet-stream; #\u9ED8\u8BA4\u6587\u4EF6\u7C7B\u578B
    <span class="token comment">#charset utf-8; #\u9ED8\u8BA4\u7F16\u7801</span>
    server_names_hash_bucket_size 128; #\u670D\u52A1\u5668\u540D\u5B57\u7684hash\u8868\u5927\u5C0F
    client_header_buffer_size 32k; #\u4E0A\u4F20\u6587\u4EF6\u5927\u5C0F\u9650\u5236
    large_client_header_buffers 4 64k; #\u8BBE\u5B9A\u8BF7\u6C42\u7F13
    client_max_body_size 8m; #\u8BBE\u5B9A\u8BF7\u6C42\u7F13

    <span class="token comment"># \u5F00\u542F\u76EE\u5F55\u5217\u8868\u8BBF\u95EE,\u5408\u9002\u4E0B\u8F7D\u670D\u52A1\u5668,\u9ED8\u8BA4\u5173\u95ED.</span>
    autoindex on;                   # \u663E\u793A\u76EE\u5F55
    autoindex_exact_size on;        # \u663E\u793A\u6587\u4EF6\u5927\u5C0F \u9ED8\u8BA4\u4E3Aon,\u663E\u793A\u51FA\u6587\u4EF6\u7684\u786E\u5207\u5927\u5C0F,\u5355\u4F4D\u662Fbytes \u6539\u4E3Aoff\u540E,\u663E\u793A\u51FA\u6587\u4EF6\u7684\u5927\u6982\u5927\u5C0F,\u5355\u4F4D\u662FkB\u6216\u8005MB\u6216\u8005GB
    autoindex_localtime on;         # \u663E\u793A\u6587\u4EF6\u65F6\u95F4 \u9ED8\u8BA4\u4E3Aoff,\u663E\u793A\u7684\u6587\u4EF6\u65F6\u95F4\u4E3AGMT\u65F6\u95F4 \u6539\u4E3Aon\u540E,\u663E\u793A\u7684\u6587\u4EF6\u65F6\u95F4\u4E3A\u6587\u4EF6\u7684\u670D\u52A1\u5668\u65F6\u95F4

    sendfile on; # \u5F00\u542F\u9AD8\u6548\u6587\u4EF6\u4F20\u8F93\u6A21\u5F0F,sendfile\u6307\u4EE4\u6307\u5B9Anginx\u662F\u5426\u8C03\u7528sendfile\u51FD\u6570\u6765\u8F93\u51FA\u6587\u4EF6,\u5BF9\u4E8E\u666E\u901A\u5E94\u7528\u8BBE\u4E3A on,\u5982\u679C\u7528\u6765\u8FDB\u884C\u4E0B\u8F7D\u7B49\u5E94\u7528\u78C1\u76D8IO\u91CD\u8D1F\u8F7D\u5E94\u7528,\u53EF\u8BBE\u7F6E\u4E3Aoff,\u4EE5\u5E73\u8861\u78C1\u76D8\u4E0E\u7F51\u7EDCI/O\u5904\u7406\u901F\u5EA6,\u964D\u4F4E\u7CFB\u7EDF\u7684\u8D1F\u8F7D.\u6CE8\u610F\uFF1A\u5982\u679C\u56FE\u7247\u663E\u793A\u4E0D\u6B63\u5E38\u628A\u8FD9\u4E2A\u6539\u6210off.
    tcp_nopush on; # \u9632\u6B62\u7F51\u7EDC\u963B\u585E
    tcp_nodelay on; # \u9632\u6B62\u7F51\u7EDC\u963B\u585E

    keepalive_timeout 120; # (\u5355\u4F4Ds)\u8BBE\u7F6E\u5BA2\u6237\u7AEF\u8FDE\u63A5\u4FDD\u6301\u6D3B\u52A8\u7684\u8D85\u65F6\u65F6\u95F4,\u5728\u8D85\u8FC7\u8FD9\u4E2A\u65F6\u95F4\u540E\u670D\u52A1\u5668\u4F1A\u5173\u95ED\u8BE5\u94FE\u63A5

    <span class="token comment"># FastCGI\u76F8\u5173\u53C2\u6570\u662F\u4E3A\u4E86\u6539\u5584\u7F51\u7AD9\u7684\u6027\u80FD\uFF1A\u51CF\u5C11\u8D44\u6E90\u5360\u7528,\u63D0\u9AD8\u8BBF\u95EE\u901F\u5EA6.\u4E0B\u9762\u53C2\u6570\u770B\u5B57\u9762\u610F\u601D\u90FD\u80FD\u7406\u89E3.</span>
    fastcgi_connect_timeout 300;
    fastcgi_send_timeout 300;
    fastcgi_read_timeout 300;
    fastcgi_buffer_size 64k;
    fastcgi_buffers 4 64k;
    fastcgi_busy_buffers_size 128k;
    fastcgi_temp_file_write_size 128k;

    <span class="token comment"># gzip\u6A21\u5757\u8BBE\u7F6E</span>
    gzip on; #\u5F00\u542Fgzip\u538B\u7F29\u8F93\u51FA
    gzip_min_length 1k; #\u5141\u8BB8\u538B\u7F29\u7684\u9875\u9762\u7684\u6700\u5C0F\u5B57\u8282\u6570,\u9875\u9762\u5B57\u8282\u6570\u4ECEheader\u5077\u5F97content-length\u4E2D\u83B7\u53D6.\u9ED8\u8BA4\u662F0,\u4E0D\u7BA1\u9875\u9762\u591A\u5927\u90FD\u8FDB\u884C\u538B\u7F29.\u5EFA\u8BAE\u8BBE\u7F6E\u6210\u5927\u4E8E1k\u7684\u5B57\u8282\u6570,\u5C0F\u4E8E1k\u53EF\u80FD\u4F1A\u8D8A\u538B\u8D8A\u5927
    gzip_buffers 4 16k; #\u8868\u793A\u7533\u8BF74\u4E2A\u5355\u4F4D\u4E3A16k\u7684\u5185\u5B58\u4F5C\u4E3A\u538B\u7F29\u7ED3\u679C\u6D41\u7F13\u5B58,\u9ED8\u8BA4\u503C\u662F\u7533\u8BF7\u4E0E\u539F\u59CB\u6570\u636E\u5927\u5C0F\u76F8\u540C\u7684\u5185\u5B58\u7A7A\u95F4\u6765\u5B58\u50A8gzip\u538B\u7F29\u7ED3\u679C
    gzip_http_version 1.1; #\u538B\u7F29\u7248\u672C\uFF08\u9ED8\u8BA41.1,\u76EE\u524D\u5927\u90E8\u5206\u6D4F\u89C8\u5668\u5DF2\u7ECF\u652F\u6301gzip\u89E3\u538B.\u524D\u7AEF\u5982\u679C\u662Fsquid2.5\u8BF7\u4F7F\u75281.0\uFF09
    gzip_comp_level 2; #\u538B\u7F29\u7B49\u7EA7.1\u538B\u7F29\u6BD4\u6700\u5C0F,\u5904\u7406\u901F\u5EA6\u5FEB.9\u538B\u7F29\u6BD4\u6700\u5927,\u6BD4\u8F83\u6D88\u8017cpu\u8D44\u6E90,\u5904\u7406\u901F\u5EA6\u6700\u6162,\u4F46\u662F\u56E0\u4E3A\u538B\u7F29\u6BD4\u6700\u5927,\u6240\u4EE5\u5305\u6700\u5C0F,\u4F20\u8F93\u901F\u5EA6\u5FEB
    gzip_types text/plain application/x-javascript text/css application/xml;
    <span class="token comment">#\u538B\u7F29\u7C7B\u578B,\u9ED8\u8BA4\u5C31\u5DF2\u7ECF\u5305\u542Btext/html,\u6240\u4EE5\u4E0B\u9762\u5C31\u4E0D\u7528\u518D\u5199\u4E86,\u5199\u4E0A\u53BB\u4E5F\u4E0D\u4F1A\u6709\u95EE\u9898,\u4F46\u662F\u4F1A\u6709\u4E00\u4E2Awarn.</span>
    gzip_vary on;#\u9009\u9879\u53EF\u4EE5\u8BA9\u524D\u7AEF\u7684\u7F13\u5B58\u670D\u52A1\u5668\u7F13\u5B58\u7ECF\u8FC7gzip\u538B\u7F29\u7684\u9875\u9762.\u4F8B\u5982:\u7528squid\u7F13\u5B58\u7ECF\u8FC7nginx\u538B\u7F29\u7684\u6570\u636E

    <span class="token comment">#\u5F00\u542F\u9650\u5236IP\u8FDE\u63A5\u6570\u7684\u65F6\u5019\u9700\u8981\u4F7F\u7528</span>
    <span class="token comment">#limit_zone crawler $binary_remote_addr 10m;</span>

    <span class="token comment">##upstream\u7684\u8D1F\u8F7D\u5747\u8861,\u56DB\u79CD\u8C03\u5EA6\u7B97\u6CD5(\u4E0B\u4F8B\u4E3B\u8BB2)##</span>

    <span class="token comment">#\u865A\u62DF\u4E3B\u673A\u7684\u914D\u7F6E</span>
    server
    {
        <span class="token comment"># \u76D1\u542C\u7AEF\u53E3</span>
        listen 80;
        <span class="token comment"># \u57DF\u540D\u53EF\u4EE5\u6709\u591A\u4E2A,\u7528\u7A7A\u683C\u9694\u5F00</span>
        server_name ably.com;
        <span class="token comment"># HTTP \u81EA\u52A8\u8DF3\u8F6C HTTPS</span>
        rewrite ^(.*) https://$server_name$1 permanent;
    }

    server
    {
        <span class="token comment"># \u76D1\u542C\u7AEF\u53E3 HTTPS</span>
        listen 443 ssl;
        server_name ably.com;

        <span class="token comment"># \u914D\u7F6E\u57DF\u540D\u8BC1\u4E66</span>
        ssl_certificate      C:\\WebServer\\Certs\\certificate.crt;
        ssl_certificate_key  C:\\WebServer\\Certs\\private.key;
        ssl_session_cache    shared:SSL:1m;
        ssl_session_timeout  5m;
        ssl_protocols SSLv2 SSLv3 TLSv1;
        ssl_ciphers ALL:!ADH:!EXPORT56:RC4+RSA:+HIGH:+MEDIUM:+LOW:+SSLv2:+EXP;
        ssl_prefer_server_ciphers  on;

        index index.html index.htm index.php;
        root /data/www/;
        location ~ .*\\.(php|php5)?$
        {
            fastcgi_pass 127.0.0.1:9000;
            fastcgi_index index.php;
            include fastcgi.conf;
        }

        <span class="token comment"># \u914D\u7F6E\u5730\u5740\u62E6\u622A\u8F6C\u53D1\uFF0C\u89E3\u51B3\u8DE8\u57DF\u9A8C\u8BC1\u95EE\u9898</span>
        location /oauth/{
            proxy_pass https://localhost:13580/oauth/;
            proxy_set_header HOST $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }

        <span class="token comment"># \u56FE\u7247\u7F13\u5B58\u65F6\u95F4\u8BBE\u7F6E</span>
        location ~ .*\\.(gif|jpg|jpeg|png|bmp|swf)$ {
            expires 10d;
        }

        <span class="token comment"># JS\u548CCSS\u7F13\u5B58\u65F6\u95F4\u8BBE\u7F6E</span>
        location ~ .*\\.(js|css)?$ {
            expires 1h;
        }

        <span class="token comment"># \u65E5\u5FD7\u683C\u5F0F\u8BBE\u5B9A</span>
        log_format access &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;
        &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
        &#39;&quot;$http_user_agent&quot; $http_x_forwarded_for&#39;;
        <span class="token comment"># \u5B9A\u4E49\u672C\u865A\u62DF\u4E3B\u673A\u7684\u8BBF\u95EE\u65E5\u5FD7</span>
        access_log /var/log/nginx/access.log access;

        <span class="token comment"># \u8BBE\u5B9A\u67E5\u770BNginx\u72B6\u6001\u7684\u5730\u5740.StubStatus\u6A21\u5757\u80FD\u591F\u83B7\u53D6Nginx\u81EA\u4E0A\u6B21\u542F\u52A8\u4EE5\u6765\u7684\u5DE5\u4F5C\u72B6\u6001\uFF0C\u6B64\u6A21\u5757\u975E\u6838\u5FC3\u6A21\u5757\uFF0C\u9700\u8981\u5728Nginx\u7F16\u8BD1\u5B89\u88C5\u65F6\u624B\u5DE5\u6307\u5B9A\u624D\u80FD\u4F7F\u7528</span>
        location /NginxStatus {
            stub_status on;
            access_log on;
            auth_basic &quot;NginxStatus&quot;;
            auth_basic_user_file conf/htpasswd;
            <span class="token comment">#htpasswd\u6587\u4EF6\u7684\u5185\u5BB9\u53EF\u4EE5\u7528apache\u63D0\u4F9B\u7684htpasswd\u5DE5\u5177\u6765\u4EA7\u751F.</span>
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx\u591A\u53F0\u670D\u52A1\u5668\u5B9E\u73B0\u8D1F\u8F7D\u5747\u8861" tabindex="-1"><a class="header-anchor" href="#nginx\u591A\u53F0\u670D\u52A1\u5668\u5B9E\u73B0\u8D1F\u8F7D\u5747\u8861" aria-hidden="true">#</a> Nginx\u591A\u53F0\u670D\u52A1\u5668\u5B9E\u73B0\u8D1F\u8F7D\u5747\u8861</h2><ul><li>Nginx\u8D1F\u8F7D\u5747\u8861\u670D\u52A1\u5668\uFF1A</li></ul><p>IP\uFF1A192.168.0.4\uFF08Nginx-Server\uFF09</p><ul><li>Web\u670D\u52A1\u5668\u5217\u8868\uFF1A</li></ul><p>Web1:192.168.0.5\uFF08Nginx-Node1/Nginx-Web1\uFF09 \uFF1B Web2:192.168.0.7\uFF08Nginx-Node2/Nginx-Web2\uFF09</p><ul><li>\u5B9E\u73B0\u76EE\u7684\uFF1A\u7528\u6237\u8BBF\u95EENginx-Server\uFF08\u201Chttp://mongo.demo.com:8888\u201D\uFF09\u65F6\uFF0C\u901A\u8FC7Nginx\u8D1F\u8F7D\u5747\u8861\u5230Web1\u548CWeb2\u670D\u52A1\u5668</li></ul><p>Nginx\u8D1F\u8F7D\u5747\u8861\u670D\u52A1\u5668\u7684nginx.conf\u914D\u7F6E\u6CE8\u91CA\u5982\u4E0B\uFF1A</p><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code>events
{
    use epoll;
    worker_connections 65535;
}
http
{
    <span class="token comment">##upstream\u7684\u8D1F\u8F7D\u5747\u8861,\u56DB\u79CD\u8C03\u5EA6\u7B97\u6CD5##</span>
    <span class="token comment">#\u8C03\u5EA6\u7B97\u6CD51:\u8F6E\u8BE2.\u6BCF\u4E2A\u8BF7\u6C42\u6309\u65F6\u95F4\u987A\u5E8F\u9010\u4E00\u5206\u914D\u5230\u4E0D\u540C\u7684\u540E\u7AEF\u670D\u52A1\u5668,\u5982\u679C\u540E\u7AEF\u67D0\u53F0\u670D\u52A1\u5668\u5B95\u673A,\u6545\u969C\u7CFB\u7EDF\u88AB\u81EA\u52A8\u5254\u9664,\u4F7F\u7528\u6237\u8BBF\u95EE\u4E0D\u53D7\u5F71\u54CD</span>
    upstream webhost {
        server 192.168.0.5:6666 ;
        server 192.168.0.7:6666 ;
    }
    <span class="token comment">#\u8C03\u5EA6\u7B97\u6CD52:weight(\u6743\u91CD).\u53EF\u4EE5\u6839\u636E\u673A\u5668\u914D\u7F6E\u5B9A\u4E49\u6743\u91CD.\u6743\u91CD\u8D8A\u9AD8\u88AB\u5206\u914D\u5230\u7684\u51E0\u7387\u8D8A\u5927</span>
    upstream webhost {
        <span class="token key attr-name">server 192.168.0.5:6666 weight</span><span class="token punctuation">=</span><span class="token value attr-value">2;</span>
        <span class="token key attr-name">server 192.168.0.7:6666 weight</span><span class="token punctuation">=</span><span class="token value attr-value">3;</span>
    }
    <span class="token comment">#\u8C03\u5EA6\u7B97\u6CD53:ip_hash. \u6BCF\u4E2A\u8BF7\u6C42\u6309\u8BBF\u95EEIP\u7684hash\u7ED3\u679C\u5206\u914D,\u8FD9\u6837\u6765\u81EA\u540C\u4E00\u4E2AIP\u7684\u8BBF\u5BA2\u56FA\u5B9A\u8BBF\u95EE\u4E00\u4E2A\u540E\u7AEF\u670D\u52A1\u5668,\u6709\u6548\u89E3\u51B3\u4E86\u52A8\u6001\u7F51\u9875\u5B58\u5728\u7684session\u5171\u4EAB\u95EE\u9898</span>
    upstream webhost {
        ip_hash;
        server 192.168.0.5:6666 ;
        server 192.168.0.7:6666 ;
    }
    <span class="token comment">#\u8C03\u5EA6\u7B97\u6CD54:url_hash(\u9700\u5B89\u88C5\u7B2C\u4E09\u65B9\u63D2\u4EF6).\u6B64\u65B9\u6CD5\u6309\u8BBF\u95EEurl\u7684hash\u7ED3\u679C\u6765\u5206\u914D\u8BF7\u6C42,\u4F7F\u6BCF\u4E2Aurl\u5B9A\u5411\u5230\u540C\u4E00\u4E2A\u540E\u7AEF\u670D\u52A1\u5668,\u53EF\u4EE5\u8FDB\u4E00\u6B65\u63D0\u9AD8\u540E\u7AEF\u7F13\u5B58\u670D\u52A1\u5668\u7684\u6548\u7387.Nginx\u672C\u8EAB\u662F\u4E0D\u652F\u6301url_hash\u7684,\u5982\u679C\u9700\u8981\u4F7F\u7528\u8FD9\u79CD\u8C03\u5EA6\u7B97\u6CD5,\u5FC5\u987B\u5B89\u88C5Nginx \u7684hash\u8F6F\u4EF6\u5305</span>
    upstream webhost {
        server 192.168.0.5:6666 ;
        server 192.168.0.7:6666 ;
        hash $request_uri;
    }
    <span class="token comment">#\u8C03\u5EA6\u7B97\u6CD55:fair(\u9700\u5B89\u88C5\u7B2C\u4E09\u65B9\u63D2\u4EF6).\u8FD9\u662F\u6BD4\u4E0A\u9762\u4E24\u4E2A\u66F4\u52A0\u667A\u80FD\u7684\u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5.\u6B64\u79CD\u7B97\u6CD5\u53EF\u4EE5\u4F9D\u636E\u9875\u9762\u5927\u5C0F\u548C\u52A0\u8F7D\u65F6\u95F4\u957F\u77ED\u667A\u80FD\u5730\u8FDB\u884C\u8D1F\u8F7D\u5747\u8861,\u4E5F\u5C31\u662F\u6839\u636E\u540E\u7AEF\u670D\u52A1\u5668\u7684\u54CD\u5E94\u65F6\u95F4\u6765\u5206\u914D\u8BF7\u6C42,\u54CD\u5E94\u65F6\u95F4\u77ED\u7684\u4F18\u5148\u5206\u914D.Nginx\u672C\u8EAB\u662F\u4E0D\u652F\u6301fair\u7684,\u5982\u679C\u9700\u8981\u4F7F\u7528\u8FD9\u79CD\u8C03\u5EA6\u7B97\u6CD5,\u5FC5\u987B\u4E0B\u8F7DNginx\u7684upstream_fair\u6A21\u5757</span>
    <span class="token comment">#</span>
    <span class="token comment">#\u865A\u62DF\u4E3B\u673A\u7684\u914D\u7F6E(\u91C7\u7528\u8C03\u5EA6\u7B97\u6CD53:ip_hash)</span>
    server
    {
        listen  80;
        server_name  mongo.demo.com;
        <span class="token comment">#\u5BF9 &quot;/&quot; \u542F\u7528\u53CD\u5411\u4EE3\u7406</span>
        location / {
            proxy_pass http://webhost;
            proxy_redirect off;
            proxy_set_header X-Real-IP $remote_addr;
            <span class="token comment">#\u540E\u7AEF\u7684Web\u670D\u52A1\u5668\u53EF\u4EE5\u901A\u8FC7X-Forwarded-For\u83B7\u53D6\u7528\u6237\u771F\u5B9EIP</span>
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            <span class="token comment">#\u4EE5\u4E0B\u662F\u4E00\u4E9B\u53CD\u5411\u4EE3\u7406\u7684\u914D\u7F6E,\u53EF\u9009.</span>
            proxy_set_header Host $host;
            client_max_body_size 10m; #\u5141\u8BB8\u5BA2\u6237\u7AEF\u8BF7\u6C42\u7684\u6700\u5927\u5355\u6587\u4EF6\u5B57\u8282\u6570
            client_body_buffer_size 128k; #\u7F13\u51B2\u533A\u4EE3\u7406\u7F13\u51B2\u7528\u6237\u7AEF\u8BF7\u6C42\u7684\u6700\u5927\u5B57\u8282\u6570,
            proxy_connect_timeout 90; #nginx\u8DDF\u540E\u7AEF\u670D\u52A1\u5668\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4(\u4EE3\u7406\u8FDE\u63A5\u8D85\u65F6)
            proxy_send_timeout 90; #\u540E\u7AEF\u670D\u52A1\u5668\u6570\u636E\u56DE\u4F20\u65F6\u95F4(\u4EE3\u7406\u53D1\u9001\u8D85\u65F6)
            proxy_read_timeout 90; #\u8FDE\u63A5\u6210\u529F\u540E,\u540E\u7AEF\u670D\u52A1\u5668\u54CD\u5E94\u65F6\u95F4(\u4EE3\u7406\u63A5\u6536\u8D85\u65F6)
            proxy_buffer_size 4k; #\u8BBE\u7F6E\u4EE3\u7406\u670D\u52A1\u5668\uFF08nginx\uFF09\u4FDD\u5B58\u7528\u6237\u5934\u4FE1\u606F\u7684\u7F13\u51B2\u533A\u5927\u5C0F
            proxy_buffers 4 32k; #proxy_buffers\u7F13\u51B2\u533A,\u7F51\u9875\u5E73\u5747\u572832k\u4EE5\u4E0B\u7684\u8BBE\u7F6E
            proxy_busy_buffers_size 64k; #\u9AD8\u8D1F\u8377\u4E0B\u7F13\u51B2\u5927\u5C0F\uFF08proxy_buffers*2\uFF09
            proxy_temp_file_write_size 64k;
            <span class="token comment">#\u8BBE\u5B9A\u7F13\u5B58\u6587\u4EF6\u5939\u5927\u5C0F,\u5927\u4E8E\u8FD9\u4E2A\u503C,\u5C06\u4ECEupstream\u670D\u52A1\u5668\u4F20</span>
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8D1F\u8F7D\u5747\u8861\u64CD\u4F5C\u6F14\u793A\u5982\u4E0B\uFF1A</p><ul><li>\u64CD\u4F5C\u5BF9\u8C61\uFF1A192.168.0.4\uFF08Nginx-Server\uFF09</li></ul><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code><span class="token comment"># \u521B\u5EFA\u6587\u4EF6\u5939\u51C6\u5907\u5B58\u653E\u914D\u7F6E\u6587\u4EF6</span>
$ mkdir -p /opt/confs
$ vim /opt/confs/nginx.conf

<span class="token comment"># \u7F16\u8F91\u5185\u5BB9\u5982\u4E0B\uFF1A</span>
events
{
  use epoll;
  worker_connections 65535;
}

http
{
    upstream webhost {
        ip_hash;
        server 192.168.0.5:6666 ;
        server 192.168.0.7:6666 ;
    }

    server
    {
        listen  80;
        server_name  mongo.demo.com;
        location / {
            proxy_pass http://webhost;
            proxy_redirect off;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header Host $host;
            client_max_body_size 10m;
            client_body_buffer_size 128k;
            proxy_connect_timeout 90;
            proxy_send_timeout 90;
            proxy_read_timeout 90;
            proxy_buffer_size 4k;
            proxy_buffers 4 32k;
            proxy_busy_buffers_size 64k;
            proxy_temp_file_write_size 64k;
        }
    }
}
<span class="token comment"># \u7136\u540E\u4FDD\u5B58\u5E76\u9000\u51FA</span>

<span class="token comment"># \u542F\u52A8\u8D1F\u8F7D\u5747\u8861\u670D\u52A1\u5668192.168.0.4\uFF08Nginx-Server\uFF09</span>
docker run -d -p 8888:80 --name nginx-server -v /opt/confs/nginx.conf:/etc/nginx/nginx.conf --restart always nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u64CD\u4F5C\u5BF9\u8C61\uFF1A192.168.0.5\uFF08Nginx-Node1/Nginx-Web1\uFF09</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u521B\u5EFA\u6587\u4EF6\u5939\u7528\u4E8E\u5B58\u653Eweb\u9875\u9762</span>
$ <span class="token function">mkdir</span> -p /opt/html
$ <span class="token function">vim</span> /opt/html/index.html

<span class="token comment"># \u7F16\u8F91\u5185\u5BB9\u5982\u4E0B\uFF1A</span>
<span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>h<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>
    The <span class="token function">host</span> is <span class="token number">192.168</span>.0.5<span class="token punctuation">(</span>Docker02<span class="token punctuation">)</span> - Node <span class="token number">1</span><span class="token operator">!</span>
  <span class="token operator">&lt;</span>/h<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>
<span class="token operator">&lt;</span>/div<span class="token operator">&gt;</span>
<span class="token comment"># \u7136\u540E\u4FDD\u5B58\u5E76\u9000\u51FA</span>

<span class="token comment"># \u542F\u52A8192.168.0.5\uFF08Nginx-Node1/Nginx-Web1\uFF09</span>
$ <span class="token function">docker</span> run -d -p <span class="token number">6666</span>:80 --name nginx-node1 -v /opt/html:/usr/share/nginx/html --restart always nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u64CD\u4F5C\u5BF9\u8C61\uFF1A192.168.0.7\uFF08Nginx-Node2/Nginx-Web2\uFF09</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u521B\u5EFA\u6587\u4EF6\u5939\u7528\u4E8E\u5B58\u653Eweb\u9875\u9762</span>
$ <span class="token function">mkdir</span> -p /opt/html
$ <span class="token function">vim</span> /opt/html/index.html

<span class="token comment"># \u7F16\u8F91\u5185\u5BB9\u5982\u4E0B\uFF1A</span>
<span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>h<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>
    The <span class="token function">host</span> is <span class="token number">192.168</span>.0.7<span class="token punctuation">(</span>Docker03<span class="token punctuation">)</span> - Node <span class="token number">2</span><span class="token operator">!</span>
  <span class="token operator">&lt;</span>/h<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>
<span class="token operator">&lt;</span>/div<span class="token operator">&gt;</span>
<span class="token comment"># \u7136\u540E\u4FDD\u5B58\u5E76\u9000\u51FA</span>

<span class="token comment"># \u542F\u52A8192.168.0.7\uFF08Nginx-Node2/Nginx-Web2\uFF09</span>
$ <span class="token function">docker</span> run -d -p <span class="token number">6666</span>:80 --name nginx-node2 -v <span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>/html:/usr/share/nginx/html --restart always nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u6D4B\u8BD5</li></ul><p>\u57DF\u540D:mongo.demo.com\uFF0C\u8FD9\u91CC\u662F\u7528Windows\u7CFB\u7EDF\u4E3B\u673A\u8BBF\u95EE\u670D\u52A1\u5668\uFF0C\u8981\u5728\u5F53\u524D\u4E3B\u673A\u7684hosts\u4E2D\u6DFB\u52A0\u89E3\u6790 \u201Cmongo.demo.com 192.168.0.4\u201D\uFF0Chosts\u6587\u4EF6\u6240\u5728\u7684\u8DEF\u5F84\u4E3A \u201CC:\\Windows\\System32\\drivers\\etc\u201D\u3002\u8FD9\u91CC\u5728Windows\u4E3B\u673A\u4E0A\u901A\u8FC7\u6D4F\u89C8\u5668\u8BBF\u95EE \u201Chttp://mongo.demo.com:8888\u201D \u8FD9\u4E2A\u7AD9\u70B9\u7684\u65F6\u5019\uFF0CNginx\u4F1A\u6839\u636E\u6765\u8BBF\u7684\u4E3B\u673A\u7684ip_hash\u503C\uFF0C\u8D1F\u8F7D\u5747\u8861\u5230192.168.0.5\uFF08Nginx-Node1/Nginx-Web1\uFF09\u548C192.168.0.7\uFF08Nginx-Node2/Nginx-Web2\uFF09\u670D\u52A1\u5668\u4E0A\u3002\u5982\u679C\u5176\u4E2D\u4E00\u4E2AWeb\u670D\u52A1\u5668\u65E0\u6548\u540E\uFF0C\u8D1F\u8F7D\u5747\u8861\u670D\u52A1\u5668\u4F1A\u81EA\u52A8\u5C06\u8BF7\u6C42\u8F6C\u53D1\u5230\u6B63\u5E38\u7684Web\u670D\u52A1\u5668\u3002</p>`,19),d=[l];function r(v,c){return s(),e("div",null,d)}var m=n(a,[["render",r],["__file","03.html.vue"]]);export{m as default};
