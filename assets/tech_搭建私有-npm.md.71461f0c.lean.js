import{_ as a,z as s,A as n,I as o,B as t,W as r,D as p}from"./plugin-vue_export-helper.71bb0c0b.js";const y='{"title":"\u642D\u5EFA\u79C1\u6709 npm","description":"","frontmatter":{"title":"\u642D\u5EFA\u79C1\u6709 npm","tags":null},"headers":[{"level":2,"title":"\u4F7F\u7528 verdaccio","slug":"\u4F7F\u7528-verdaccio"},{"level":3,"title":"Install","slug":"install"},{"level":3,"title":"Nginx setting","slug":"nginx-setting"},{"level":3,"title":"Keeping verdaccio running forever","slug":"keeping-verdaccio-running-forever"},{"level":3,"title":"\u672C\u5730\u914D\u7F6E registry","slug":"\u672C\u5730\u914D\u7F6E-registry"},{"level":3,"title":"\u53D1\u5E03\u548C\u5B89\u88C5\u79C1\u6709\u5305","slug":"\u53D1\u5E03\u548C\u5B89\u88C5\u79C1\u6709\u5305"},{"level":2,"title":"\u4F7F\u7528 cnpmjs.org","slug":"\u4F7F\u7528-cnpmjs-org"},{"level":3,"title":"Dependencies","slug":"dependencies"},{"level":3,"title":"Install","slug":"install-1"},{"level":2,"title":"difference","slug":"difference"},{"level":2,"title":"Readings","slug":"readings"}],"relativePath":"tech/\u642D\u5EFA\u79C1\u6709-npm.md","lastUpdated":1701670426301}',c={},l={id:"frontmatter-title",tabindex:"-1"},i=n("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=r(`__VP_STATIC_START__<p><div class="table-of-contents"><ul><li><a href="#\u4F7F\u7528-verdaccio">\u4F7F\u7528 verdaccio</a><ul><li><a href="#install">Install</a></li><li><a href="#nginx-setting">Nginx setting</a></li><li><a href="#keeping-verdaccio-running-forever">Keeping verdaccio running forever</a></li><li><a href="#\u672C\u5730\u914D\u7F6E-registry">\u672C\u5730\u914D\u7F6E registry</a></li><li><a href="#\u53D1\u5E03\u548C\u5B89\u88C5\u79C1\u6709\u5305">\u53D1\u5E03\u548C\u5B89\u88C5\u79C1\u6709\u5305</a></li></ul></li><li><a href="#\u4F7F\u7528-cnpmjs-org">\u4F7F\u7528 cnpmjs.org</a><ul><li><a href="#dependencies">Dependencies</a></li><li><a href="#install">Install</a></li></ul></li><li><a href="#difference">difference</a></li><li><a href="#readings">Readings</a></li></ul></div></p><p>\u76EE\u524D\u6709\u4EE5\u4E0B\u4E24\u79CD\u63A8\u8350\u65B9\u6848\uFF1A</p><h2 id="\u4F7F\u7528-verdaccio" tabindex="-1">\u4F7F\u7528 <code>verdaccio</code> <a class="header-anchor" href="#\u4F7F\u7528-verdaccio" aria-hidden="true">#</a></h2><p><a href="https://github.com/verdaccio/verdaccio" target="_blank" rel="noopener noreferrer">verdaccio</a>: A lightweight private npm proxy registry</p><h3 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-hidden="true">#</a></h3><p>\u5728\u670D\u52A1\u5668\u4E0A\u5168\u5C40\u5B89\u88C5 <code>verdaccio</code></p><div class="language-"><pre><code>$ npm install -g verdaccio
$ verdaccio
warn --- config file - /home/.config/verdaccio/config.yaml
warn --- http address - http://localhost:4873/ - verdaccio/3.0.0
</code></pre></div><h3 id="nginx-setting" tabindex="-1">Nginx setting <a class="header-anchor" href="#nginx-setting" aria-hidden="true">#</a></h3><p>\u4E3A\u4E86\u4E0D\u548C\u5176\u4ED6\u7684 <code>ginx</code>\u914D\u7F6E\u51B2\u7A81\uFF0C\u6211\u4EEC\u5C06 <code>verdaccio</code> \u7684\u9ED8\u8BA4\u7AEF\u53E3\u6307\u5411\u670D\u52A1\u5668\u7684\u5B50\u76EE\u5F55 <code>/verdaccio/</code> \u4E0B</p><div class="language-"><pre><code>server {
  listen       80;
  server_name  host;

  location ~ ^/verdaccio/(.*)$ {
    proxy_pass http://127.0.0.1:4873/$1;
    proxy_set_header Host            $host:$server_port;
    proxy_set_header X-Forwarded-For $remote_addr;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
</code></pre></div><p>\u540C\u65F6\u6211\u4EEC\u8FD8\u9700\u8981\u4FEE\u6539 <code>verdaccio</code> \u7684\u914D\u7F6E\u6587\u4EF6 <code>~/.config/verdaccio/config.yaml</code>\uFF0C\u66F4\u591A<a href="https://verdaccio.org/docs/en/configuration" target="_blank" rel="noopener noreferrer">\u914D\u7F6E\u53C2\u8003</a></p><div class="language-"><pre><code>url_prefix:  /verdaccio/
</code></pre></div><ul><li><code>~/.config/verdaccio/storage</code> \uFF1A\u50A8\u5B58\u53D1\u5E03\u548C\u7F13\u5B58\u7684\u5305\uFF0C\u4F1A\u7F13\u5B58\u4E0B\u8F7D\u7684\u5305</li><li><code>~/.config/verdaccio/htpasswd</code> \uFF1A\u50A8\u5B58\u6CE8\u518C\u7528\u6237\u7684\u8D26\u53F7\u540D\u548C\u5BC6\u7801</li></ul><h3 id="keeping-verdaccio-running-forever" tabindex="-1">Keeping verdaccio running forever <a class="header-anchor" href="#keeping-verdaccio-running-forever" aria-hidden="true">#</a></h3><p>You can use node package called <a href="https://github.com/nodejitsu/forever" target="_blank" rel="noopener noreferrer">&#39;forever&#39;</a> to keep <code>verdaccio</code> running all the time.</p><p>First install <code>forever</code> globally:</p><div class="language-bash"><pre><code>$ <span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> forever
</code></pre></div><p>Make sure you&#39;ve run <code>verdaccio</code> at least once to generate the config file and write down the created admin user. You can then use the following command to start <code>verdaccio</code>:</p><div class="language-bash"><pre><code>$ forever start <span class="token variable"><span class="token variable">\`</span><span class="token function">which</span> verdaccio<span class="token variable">\`</span></span>
</code></pre></div><p>You can check the documentation for more information on how to use forever.</p><h4 id="surviving-server-restarts" tabindex="-1">Surviving server restarts <a class="header-anchor" href="#surviving-server-restarts" aria-hidden="true">#</a></h4><p>You can use <code>crontab</code> and <code>forever</code> together to start <code>verdaccio</code> after a server reboot. When you&#39;re logged in as the <code>verdaccio</code> user do the following:</p><div class="language-bash"><pre><code>$ <span class="token function">crontab</span> <span class="token parameter variable">-e</span>
</code></pre></div><p>This might ask you to choose an editor. Pick your favorite and proceed. Add the following entry to the file:</p><pre><code>@reboot /usr/bin/forever start /usr/lib/node_modules/verdaccio/bin/verdaccio
</code></pre><p>The locations may vary depending on your server setup. If you want to know where your files are you can use the &#39;which&#39; command:</p><div class="language-bash"><pre><code>$ <span class="token function">which</span> forever
$ <span class="token function">which</span> verdaccio
</code></pre></div><h3 id="\u672C\u5730\u914D\u7F6E-registry" tabindex="-1">\u672C\u5730\u914D\u7F6E registry <a class="header-anchor" href="#\u672C\u5730\u914D\u7F6E-registry" aria-hidden="true">#</a></h3><p>\u63A8\u8350\u5B89\u88C5 <a href="https://github.com/Pana/nrm" target="_blank" rel="noopener noreferrer">nrm</a> \u6765\u7BA1\u7406 registry</p><div class="language-bash"><pre><code>$ <span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> nrm
$ nrm <span class="token function">add</span> knpm http://host/verdaccio/
$ nrm use knpm
</code></pre></div><h3 id="\u53D1\u5E03\u548C\u5B89\u88C5\u79C1\u6709\u5305" tabindex="-1">\u53D1\u5E03\u548C\u5B89\u88C5\u79C1\u6709\u5305 <a class="header-anchor" href="#\u53D1\u5E03\u548C\u5B89\u88C5\u79C1\u6709\u5305" aria-hidden="true">#</a></h3><div class="language-bash"><pre><code>$ <span class="token function">npm</span> publish @private/util
$ <span class="token function">npm</span> <span class="token function">install</span> @vue/cli
</code></pre></div><hr><h2 id="\u4F7F\u7528-cnpmjs-org" tabindex="-1">\u4F7F\u7528 <code>cnpmjs.org</code> <a class="header-anchor" href="#\u4F7F\u7528-cnpmjs-org" aria-hidden="true">#</a></h2><p><a href="https://github.com/cnpm/cnpmjs.org" target="_blank" rel="noopener noreferrer">cnpmjs.org</a>: Private npm registry and web for Enterprise, base on <a href="http://koajs.com/" target="_blank" rel="noopener noreferrer">koa</a>, MySQL and <a href="https://github.com/cnpm/cnpmjs.org/wiki/NFS-Guide" target="_blank" rel="noopener noreferrer">Simple Store Service</a>.</p><h3 id="dependencies" tabindex="-1">Dependencies <a class="header-anchor" href="#dependencies" aria-hidden="true">#</a></h3><ul><li>Node &gt;= 6.11.3</li><li>MySQL &gt;= 0.5.0, include <code>mysqld</code> and <code>mysql</code> cli</li><li><s><a href="https://github.com/cnpm/cnpmjs.org/wiki/NFS-Guide" target="_blank" rel="noopener noreferrer">Simple File Store Service, like qiniu, aliyun-oss, tfs, upyun</a></s></li></ul><h3 id="install-1" tabindex="-1">Install <a class="header-anchor" href="#install-1" aria-hidden="true">#</a></h3><ol><li>Get the Code</li></ol><div class="language-shell"><pre><code><span class="token comment"># clone from github</span>
$ <span class="token function">git</span> clone git://github.com/cnpm/cnpmjs.org.git <span class="token environment constant">$HOME</span>/cnpmjs.org
$ <span class="token builtin class-name">cd</span> <span class="token environment constant">$HOME</span>/cnpmjs.org
</code></pre></div><p>Install <code>cnpmjs.org</code> and <code>cnpm</code> from npm</p><div class="language-"><pre><code>$ npm install -g --build-from-source cnpmjs.org cnpm sqlite3
</code></pre></div><p>If you&#39;re in China, maybe you should use China mirror</p><div class="language-shell"><pre><code>$ <span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> --build-from-source <span class="token punctuation">\\</span>
  <span class="token parameter variable">--registry</span><span class="token operator">=</span>https://registry.npm.taobao.org <span class="token punctuation">\\</span>
  <span class="token parameter variable">--disturl</span><span class="token operator">=</span>https://npm.taobao.org/mirrors/node <span class="token punctuation">\\</span>
  cnpmjs.org cnpm sqlite3
</code></pre></div><ol><li><code>mysql</code> \u6570\u636E\u5E93\u64CD\u4F5C\uFF1A</li></ol><p>a. \u521B\u5EFA\u6570\u636E\u5E93 <code>private-npm</code>\uFF1A</p><div class="language-sql"><pre><code><span class="token keyword">create</span> <span class="token keyword">database</span> private<span class="token operator">-</span>npm
</code></pre></div><p>b. \u521B\u5EFA\u8868\uFF1A<a href="https://github.com/cnpm/cnpmjs.org/blob/master/docs/db.sql" target="_blank" rel="noopener noreferrer">Get all the sqls here</a></p><blockquote><p><a href="http://www.ifepoland.com/lilip/p/10109557.html" target="_blank" rel="noopener noreferrer">mysql 8.0 \u521B\u5EFA table \u65F6\u62A5\u9519:\u3010MYSQL\u3011MYSQL \u62A5\u9519\u89E3\u51B3\u65B9\u6CD5\uFF1A Warning: (3719, &quot;&#39;utf8&#39; is currently an alias for the character set UTF8MB3, but will be an alias for UTF8M B4 in a future release.&quot;</a></p></blockquote><ol start="3"><li>Edit Your Own Config File</li></ol><div class="language-"><pre><code>$ cd $HOME/cnpmjs.org
$ vim config/index.js
</code></pre></div><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">debug</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">enableCluster</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// enable cluster mode</span>
  <span class="token literal-property property">enablePrivate</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// enable private mode, only admin can publish, other use just can sync package from source npm</span>
  <span class="token literal-property property">database</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">db</span><span class="token operator">:</span> <span class="token string">&#39;private-npm&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// the sql dialect of the database</span>
    <span class="token comment">// - currently supported: &#39;mysql&#39;, &#39;sqlite&#39;, &#39;postgres&#39;, &#39;mariadb&#39;</span>
    <span class="token literal-property property">dialect</span><span class="token operator">:</span> <span class="token string">&#39;mysql&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// custom host; default: 127.0.0.1</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// custom port; default: 3306</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3306</span><span class="token punctuation">,</span>

    <span class="token literal-property property">ssl</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">ca</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>dataDir<span class="token punctuation">,</span> <span class="token string">&#39;certs/mysql-test.pem&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// use pooling in order to reduce db connection overload and to increase speed</span>
    <span class="token comment">// currently only for mysql and postgresql (since v1.5.0)</span>
    <span class="token literal-property property">pool</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">maxConnections</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
      <span class="token literal-property property">minConnections</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token literal-property property">maxIdleTime</span><span class="token operator">:</span> <span class="token number">30000</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">dialectOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">trace</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// the storage engine for &#39;sqlite&#39;</span>
    <span class="token comment">// default store into ~/.cnpmjs.org/data.sqlite</span>
    <span class="token literal-property property">storage</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>dataDir<span class="token punctuation">,</span> <span class="token string">&#39;data.sqlite&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token literal-property property">logging</span><span class="token operator">:</span> <span class="token operator">!</span><span class="token operator">!</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">SQL_DEBUG</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">admins</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">admin</span><span class="token operator">:</span> <span class="token string">&#39;admin@cnpmjs.org&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// registry scopes, if don&#39;t set, means do not support scopes</span>
  <span class="token literal-property property">scopes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@knpm&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;@knpmtest&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;@knpm-test&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// &#39;none&#39;: \u6C38\u4E0D\u540C\u6B65\uFF0C\u53EA\u7BA1\u7406\u79C1\u6709\u7528\u6237\u4E0A\u4F20\u7684\u5305\uFF0C\u5176\u5B83\u6E90\u5305\u4F1A\u76F4\u63A5\u4ECE\u6E90\u7AD9\u83B7\u53D6</span>
  <span class="token comment">// &#39;exist&#39;: \u5B9A\u65F6\u540C\u6B65\u5DF2\u7ECF\u5B58\u5728\u4E8E\u6570\u636E\u5E93\u7684\u5305</span>
  <span class="token comment">// &#39;all&#39;: \u5B9A\u65F6\u540C\u6B65\u6240\u6709\u6E90\u7AD9\u7684</span>
  <span class="token literal-property property">syncModel</span><span class="token operator">:</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">,</span> <span class="token comment">// &#39;none&#39;, &#39;all&#39;, &#39;exist&#39;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6CE8\u610F\u8FD9\u91CC\u7684 <code>mysql</code> \u7684\u8FDE\u63A5\u4F7F\u7528\u6D4B\u8BD5\u73AF\u5883\u7684 <code>mysql</code>\uFF0C\u91C7\u7528 <code>ssl</code> \u7684\u65B9\u5F0F\u8FDB\u884C\u8FDE\u63A5\uFF0C\u56E0\u6B64\u8FD8\u9700\u8981\u6DFB\u52A0 <code>ssl</code> \u914D\u7F6E\u3002</p><blockquote><p>\u8BE6\u7EC6\u914D\u7F6E\u53C2\u8003<a href="https://medoc.000webhostapp.com/2018/04/19/npm%E7%A7%81%E5%BA%93%E6%90%AD%E5%BB%BA-cnpm-js/" target="_blank" rel="noopener noreferrer">\u914D\u7F6E\u5B57\u6BB5\u53C2\u8003</a></p></blockquote><ol start="4"><li>\u6DFB\u52A0 <code>ssl</code> \u6587\u4EF6\uFF0C\u540C\u65F6\u5C06 <code>key</code> \u5185\u5BB9\u62F7\u8D1D\u5230 <code>~/.cnpmjs.org/certs/mysql-test.pem</code> \u6587\u4EF6\u3002\u5177\u4F53\u7684 <code>key</code> \u8BF7\u54A8\u8BE2\u6D4B\u8BD5\u540C\u4E8B\u3002</li></ol><div class="language-"><pre><code>$ cd ~/.cnpmjs.org/
$ mkdir certs
$ touch mysql-test.pem
</code></pre></div><ul><li><code>~/.cnpmjs.org/nfs</code> \uFF1A\u9ED8\u8BA4\u50A8\u5B58\u53D1\u5E03\u548C\u7F13\u5B58\u7684\u5305\uFF0C\u53EF\u8BBE\u7F6E\u4E0D\u7F13\u5B58\u4E0B\u8F7D\u7684\u5305\u3002\u5177\u4F53\u8BF7\u53C2\u8003\u914D\u7F6E\u53C2\u8003\u3002</li></ul><ol start="5"><li>\u5F00\u542F\u670D\u52A1</li></ol><div class="language-"><pre><code>$ cd ~/cnpmjs.org/
$ npm run start
</code></pre></div><p><code>registry</code>\uFF1A<a href="http://localhost:7001" target="_blank" rel="noopener noreferrer">http://localhost:7001</a><code>web</code>\uFF1A<a href="http://localhost:7002" target="_blank" rel="noopener noreferrer">http://localhost:7002</a></p><p>\u914D\u7F6E <code>Nginx</code></p><div class="language-"><pre><code>$ cd /etc/nginx/
$ vim nginx.conf
</code></pre></div><p><code>Nginx</code> \u8BBE\u7F6E</p><pre><code>server {
  listen       80;
  server_name  host;

  location ~ ^/knpm/(.*)$ {
    proxy_pass http://127.0.0.1:7001/$1;
    proxy_set_header Host            $host:$server_port;
    proxy_set_header X-Forwarded-For $remote_addr;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
  location / {
    proxy_pass http://127.0.0.1:7002/;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header Host  $http_host;
    proxy_set_header X-Nginx-Proxy true;
    proxy_http_version 1.1;
    proxy_set_header Connection &quot;&quot;;
  }
}
</code></pre><ol start="6"><li>\u672C\u5730\u73AF\u5883\u8BBE\u7F6E <code>registry</code></li></ol><div class="language-"><pre><code>$ cnpm set registry http://host/knpm/
</code></pre></div><p>\u53D1\u5E03\u548C\u5B89\u88C5\u5305</p><div class="language-"><pre><code>$ cnpm login
$ cnpm publish
$ cnpm install
</code></pre></div><ol start="7"><li>\u4E2A\u6027\u5316\u914D\u7F6E <code>npm</code> \uFF0C\u8BE6\u7EC6\u8BF7\u9605\u8BFB\u9879\u76EE\u6E90\u7801~</li></ol><div class="language-"><pre><code>$ cd ~/cnpmjs.org/
</code></pre></div><h2 id="difference" tabindex="-1">difference <a class="header-anchor" href="#difference" aria-hidden="true">#</a></h2><ul><li>verdaccio <ul><li>\u5B89\u88C5\u7B80\u5355\uFF0C\u4E0D\u9700\u8981\u6570\u636E\u5E93\u652F\u6301</li><li>\u8BBE\u7F6E <code>registry</code> \u540E\u901A\u8FC7 <code>npm</code> \u6765\u8FDB\u884C\u5305\u7BA1\u7406</li><li>\u53EF\u914D\u7F6E\u6027\u4F4E\uFF1B\u670D\u52A1\u5668\u4F1A\u50A8\u5B58\u6240\u6709\u7684\u5305\uFF0C\u5305\u62EC\u53D1\u5E03\u7684\u79C1\u8BED\u5305\u548C\u4E0B\u8F7D\u7684\u5305</li><li>\u5B9A\u5236\u5316\u9875\u9762\u9700\u8981\u4FEE\u6539\u5168\u5C40\u5B89\u88C5\u7684\u6E90\u7801</li></ul></li><li><a href="http://cnpmjs.org" target="_blank" rel="noopener noreferrer">cnpmjs.org</a><ul><li>\u5B89\u88C5\u590D\u6742\uFF0C\u9700\u8981\u5B89\u88C5 <code>mysql</code></li><li>\u8BBE\u7F6E <code>registry</code> \u540E\u901A\u8FC7 <code>cnpm</code> \u6765\u8FDB\u884C\u5305\u7BA1\u7406</li><li>\u9AD8\u5EA6\u53EF\u914D\u7F6E\uFF1B\u652F\u6301\u670D\u52A1\u5668\u53EA\u5B58\u50A8\u53D1\u5E03\u7684\u79C1\u6709\u5305</li><li>\u5B9A\u5236\u5316\u9875\u9762\u9700\u8981\u4FEE\u6539\u90E8\u7F72\u5B89\u88C5\u7684\u6E90\u7801</li></ul></li></ul><h2 id="readings" tabindex="-1">Readings <a class="header-anchor" href="#readings" aria-hidden="true">#</a></h2><ul><li><a href="https://verdaccio.org/docs/en/installation" target="_blank" rel="noopener noreferrer">verdaccio \u5B89\u88C5</a></li><li><a href="https://github.com/cnpm/cnpmjs.org/wiki/Deploy-a-private-npm-registry-in-5-minutes" target="_blank" rel="noopener noreferrer">Deploy a private npm registry in 5 minutes</a></li><li><a href="https://github.com/jaywcjlove/handbook/blob/master/CentOS/%E5%9C%A85%E5%88%86%E9%92%9F%E5%86%85%E6%90%AD%E5%BB%BA%E4%BC%81%E4%B8%9A%E5%86%85%E9%83%A8%E7%A7%81%E6%9C%89npm%E4%BB%93%E5%BA%93.md" target="_blank" rel="noopener noreferrer">\u5728 5 \u5206\u949F\u5185\u642D\u5EFA\u4F01\u4E1A\u5185\u90E8\u79C1\u6709 npm \u4ED3\u5E93</a></li></ul>__VP_STATIC_END__`,74);function u(e,g,h,k,m,v){return p(),s("div",null,[n("h1",l,[o(t(e.$frontmatter.title)+" ",1),i]),d])}var b=a(c,[["render",u]]);export{y as __pageData,b as default};
