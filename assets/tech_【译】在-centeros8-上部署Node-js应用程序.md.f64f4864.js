import{_ as a,z as t,A as n,I as e,B as o,W as p,D as l}from"./plugin-vue_export-helper.71bb0c0b.js";const b='{"title":"\u3010\u8BD1\u3011\uFF1A\u5728 centeros8 \u4E0A\u90E8\u7F72Node.js\u5E94\u7528\u7A0B\u5E8F","description":"","frontmatter":{"title":"\u3010\u8BD1\u3011\uFF1A\u5728 centeros8 \u4E0A\u90E8\u7F72Node.js\u5E94\u7528\u7A0B\u5E8F","tags":["deploment"]},"headers":[{"level":2,"title":"install Git","slug":"install-git"},{"level":2,"title":"install Nodejs","slug":"install-nodejs"},{"level":2,"title":"install Nginx","slug":"install-nginx"},{"level":2,"title":"Installing and Using PM2","slug":"installing-and-using-pm2"},{"level":2,"title":"\u53C2\u8003\u94FE\u63A5","slug":"\u53C2\u8003\u94FE\u63A5"}],"relativePath":"tech/\u3010\u8BD1\u3011\u5728-centeros8-\u4E0A\u90E8\u7F72Node-js\u5E94\u7528\u7A0B\u5E8F.md","lastUpdated":1701670426297}',c={},i={id:"frontmatter-title",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),r=p(`<p><div class="table-of-contents"><ul><li><a href="#install-git">install Git</a></li><li><a href="#install-nodejs">install Nodejs</a></li><li><a href="#install-nginx">install Nginx</a></li><li><a href="#installing-and-using-pm2">Installing and Using PM2</a></li><li><a href="#\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5</a></li></ul></div></p><h2 id="install-git" tabindex="-1">install Git <a class="header-anchor" href="#install-git" aria-hidden="true">#</a></h2><div class="language-sh"><pre><code><span class="token comment"># \u4F7F\u7528DNF\u7A0B\u5E8F\u5305\u7BA1\u7406\u5DE5\u5177\u6765\u66F4\u65B0\u60A8\u7684\u672C\u5730\u7A0B\u5E8F\u5305\u7D22\u5F15</span>
$ <span class="token function">sudo</span> dnf update <span class="token parameter variable">-y</span>

<span class="token comment"># \u5B89\u88C5 Git</span>
$ <span class="token function">sudo</span> dnf <span class="token function">install</span> <span class="token function">git</span> <span class="token parameter variable">-y</span>

<span class="token comment"># \u51CF\u4EA7\u662F\u5426\u5B89\u88C5\u6210\u529F</span>
$ <span class="token function">git</span> <span class="token parameter variable">--version</span>
<span class="token comment"># \u8F93\u51FA</span>
<span class="token comment"># git version 2.18.2</span>
</code></pre></div><h2 id="install-nodejs" tabindex="-1">install Nodejs <a class="header-anchor" href="#install-nodejs" aria-hidden="true">#</a></h2><p><strong>\u4F7F\u7528 dnf \u5B89\u88C5</strong></p><div class="language-sh"><pre><code>$ <span class="token function">sudo</span> dnf module list nodejs
<span class="token comment"># Output</span>
<span class="token comment">#   Name                     Stream                   Profiles                                                Summary</span>
<span class="token comment">#   nodejs                   10 [d]                   common [d], development, minimal, s2i                   Javascript runtime</span>
<span class="token comment">#   nodejs                   12                       common, development, minimal, s2i</span>
<span class="token comment"># [d] \u8868\u793A\u662F\u9ED8\u8BA4\u662F Nodejs 10\u3002</span>

<span class="token comment"># \u5982\u679C\u60A8\u60F3\u5B89\u88C5 Node.js 12\uFF0C\u8BF7\u7ACB\u5373\u5207\u6362\u6A21\u5757\u6D41</span>
$ <span class="token function">sudo</span> dnf module <span class="token builtin class-name">enable</span> nodejs:12

<span class="token comment"># \u5B89\u88C5 nodejs</span>
$ <span class="token function">sudo</span> dnf <span class="token function">install</span> nodejs

<span class="token comment"># \u68C0\u67E5\u5B89\u88C5\u662F\u5426\u6210\u529F</span>
$ <span class="token function">node</span> <span class="token parameter variable">--version</span>
<span class="token comment"># Output</span>
<span class="token comment"># v12.13.1</span>
</code></pre></div><p><strong>\u4F7F\u7528 nvm \u5B89\u88C5</strong></p><div class="language-sh"><pre><code><span class="token comment"># \u8BBF\u95EE nvm \u5B98\u65B9\u94FE\u63A5\u5B89\u88C5\u6700\u65B0\u7248</span>
<span class="token comment"># https://github.com/nvm-sh/nvm#install--update-script</span>
$ <span class="token function">curl</span> -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh <span class="token operator">|</span> <span class="token function">bash</span>

<span class="token comment"># \u83B7\u53D6.bash_profile\u6587\u4EF6</span>
$ <span class="token builtin class-name">source</span> ~/.bash_profile

<span class="token comment"># NVM\u54EA\u4E9B\u7248\u672C\u7684Node\u53EF\u7528</span>
$ nvm list-remote
<span class="token comment"># ...</span>
<span class="token comment"># v12.13.0   (LTS: Erbium)</span>
<span class="token comment"># v12.13.1   (LTS: Erbium)</span>
<span class="token comment"># v12.14.0   (LTS: Erbium)</span>
<span class="token comment"># ...</span>

<span class="token comment"># \u5B89\u88C5\u6307\u5B9A\u7248\u672C\u7684 nodejs</span>
$ nvm <span class="token function">install</span> v13.6.0

<span class="token comment"># \u68C0\u67E5\u5B89\u88C5\u662F\u5426\u6210\u529F</span>
$ <span class="token function">node</span> <span class="token parameter variable">--version</span>
<span class="token comment"># Output</span>
<span class="token comment"># v13.6.0</span>
</code></pre></div><h2 id="install-nginx" tabindex="-1">install Nginx <a class="header-anchor" href="#install-nginx" aria-hidden="true">#</a></h2><ol><li>\u5B89\u88C5 Nginx</li></ol><div class="language-sh"><pre><code><span class="token comment"># Install</span>
$ <span class="token function">sudo</span> dnf <span class="token function">install</span> nginx
<span class="token comment"># enable</span>
$ <span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> nginx
<span class="token comment"># start</span>
$ <span class="token function">sudo</span> systemctl start nginx
</code></pre></div><ol start="2"><li>\u8C03\u6574\u9632\u706B\u5899\u89C4\u5219</li></ol><div class="language-sh"><pre><code><span class="token comment"># \u6C38\u4E45\u542F\u7528\u7AEF\u53E380\u4E0A\u7684HTTP\u8FDE\u63A5</span>
$ <span class="token function">sudo</span> firewall-cmd <span class="token parameter variable">--permanent</span> --add-service<span class="token operator">=</span>http

<span class="token comment"># \u9A8C\u8BC1\u662F\u5426\u6B63\u786E\u6DFB\u52A0\u4E86http\u9632\u706B\u5899\u670D\u52A1</span>
$ <span class="token function">sudo</span> firewall-cmd <span class="token parameter variable">--permanent</span> --list-all
<span class="token comment"># Output</span>
<span class="token comment"># public</span>
<span class="token comment">#   target: default</span>
<span class="token comment">#   icmp-block-inversion: no</span>
<span class="token comment">#   interfaces:</span>
<span class="token comment">#   sources:</span>
<span class="token comment">#   services: cockpit dhcpv6-client http ssh</span>
<span class="token comment">#   ports:</span>
<span class="token comment">#   protocols:</span>
<span class="token comment">#   masquerade: no</span>
<span class="token comment">#   forward-ports:</span>
<span class="token comment">#   source-ports:</span>
<span class="token comment">#   icmp-blocks:</span>
<span class="token comment">#   rich rules:</span>

<span class="token comment"># \u91CD\u542F\u9632\u706B\u5899\u670D\u52A1</span>
$ <span class="token function">sudo</span> firewall-cmd <span class="token parameter variable">--reload</span>
</code></pre></div><ol start="3"><li>\u68C0\u67E5 Web \u670D\u52A1\u5668</li></ol><div class="language-sh"><pre><code><span class="token comment"># \u67E5\u8BE2\u670D\u52A1\u5668\u7684\u516C\u5171IP\u5730\u5740</span>
$ <span class="token function">ip</span> addr show eth0 <span class="token operator">|</span> <span class="token function">grep</span> inet <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{ print $2; }&#39;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/\\/.*$//&#39;</span>
<span class="token comment"># 172.18.4.110</span>
<span class="token comment"># fe80::216:3eff:fe14:85b2</span>

<span class="token comment"># \u67E5\u770B\u57DF\u540D\u662F\u5426\u8BBF\u95EE</span>
$ <span class="token function">curl</span> <span class="token parameter variable">-4</span> icanhazip.com
</code></pre></div><ol start="4"><li>\u7BA1\u7406 Nginx \u6D41\u7A0B</li></ol><div class="language-sh"><pre><code><span class="token comment"># \u505C\u6B62\u670D\u52A1</span>
$ <span class="token function">sudo</span> systemctl stop nginx
<span class="token comment"># \u542F\u7528\u670D\u52A1</span>
$ <span class="token function">sudo</span> systemctl start nginx
<span class="token comment"># \u91CD\u542F\u670D\u52A1</span>
$ <span class="token function">sudo</span> systemctl restart nginx
<span class="token comment"># \u91CD\u65B0\u52A0\u8F7D\u914D\u7F6E\u66F4\u6539</span>
$ <span class="token function">sudo</span> systemctl reload nginx
<span class="token comment"># \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CNginx\u914D\u7F6E\u4E3A\u5728\u670D\u52A1\u5668\u542F\u52A8\u65F6\u81EA\u52A8\u542F\u52A8\u3002\u5982\u679C\u8FD9\u4E0D\u662F\u60A8\u60F3\u8981\u7684\uFF0C\u5219\u53EF\u4EE5\u901A\u8FC7\u952E\u5165\u4EE5\u4E0B\u5185\u5BB9\u6765\u7981\u7528\u6B64\u884C\u4E3A</span>
$ <span class="token function">sudo</span> systemctl disable nginx
<span class="token comment"># \u8981\u91CD\u65B0\u542F\u7528\u670D\u52A1\uFF0C\u5E76\u4F7FNginx\u518D\u6B21\u5728\u542F\u52A8\u65F6\u542F\u52A8</span>
$ <span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> nginx
</code></pre></div><blockquote><p>Nginx \u5F00\u542F gzip &amp; cache-control \u7B49\u7B49\u914D\u7F6E\u8BF7\u53C2\u8003\u5B98\u65B9\u6587\u6863</p></blockquote><h2 id="installing-and-using-pm2" tabindex="-1">Installing and Using PM2 <a class="header-anchor" href="#installing-and-using-pm2" aria-hidden="true">#</a></h2><div class="language-sh"><pre><code><span class="token comment"># install PM2:</span>
$ <span class="token function">sudo</span> <span class="token function">npm</span> <span class="token function">install</span> pm2@latest <span class="token parameter variable">-g</span>

<span class="token comment">#  run your application, hello.js, in the background</span>
$ pm2 start hello.js
<span class="token comment"># Output</span>
<span class="token comment"># \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510</span>
<span class="token comment"># \u2502 App name \u2502 id \u2502 mode \u2502 pid   \u2502 status \u2502 restart \u2502 uptime \u2502 memory      \u2502 watching \u2502</span>
<span class="token comment"># \u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524</span>
<span class="token comment"># \u2502 hello    \u2502 0  \u2502 fork \u2502 30099 \u2502 online \u2502 0       \u2502 0s     \u2502 14.227 MB   \u2502 disabled \u2502</span>
<span class="token comment"># \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518</span>

<span class="token comment"># startup\u5B50\u547D\u4EE4\u751F\u6210\u5E76\u914D\u7F6E\u542F\u52A8\u811A\u672C\uFF0C\u4EE5\u5728\u670D\u52A1\u5668\u542F\u52A8\u65F6\u542F\u52A8PM2\u53CA\u5176\u6258\u7BA1\u8FDB\u7A0B</span>
$ <span class="token function">sudo</span> pm2 startup systemd
<span class="token comment"># Output</span>
<span class="token comment"># [PM2] Generating system init script in /etc/systemd/system/pm2.service</span>
<span class="token comment"># [PM2] Making script booting at startup...</span>
<span class="token comment"># [PM2] -systemd- Using the command:</span>
      <span class="token comment"># su root -c &quot;pm2 dump &amp;&amp; pm2 kill&quot; &amp;&amp; su root -c &quot;systemctl daemon-reload &amp;&amp; systemctl enable pm2 &amp;&amp; systemctl start pm2&quot;</span>
<span class="token comment"># [PM2] Dumping processes</span>
<span class="token comment"># [PM2] Stopping PM2...</span>
<span class="token comment"># [PM2] All processes have been stopped and deleted</span>
<span class="token comment"># [PM2] PM2 stopped</span>
<span class="token comment"># [PM2] Done.</span>

<span class="token comment"># \u4E3A\u4E86\u786E\u4FDDPM2\u77E5\u9053\u8981\u5728\u542F\u52A8\u65F6\u542F\u52A8\u7684\u5E94\u7528\u7A0B\u5E8F\uFF0C\u6211\u4EEC\u9700\u8981\u4FDD\u5B58\u5F53\u524D\u8FDB\u7A0B\u5217\u8868\u3002\u8981\u4FDD\u5B58\u5217\u8868</span>
$ pm2 save
<span class="token comment"># Output</span>
<span class="token comment"># [PM2] Saving current process list...</span>
<span class="token comment"># [PM2] Successfully saved in /home/deployer/.pm2/dump.pm2</span>

$ pm2 stop example
$ pm2 restart example
<span class="token comment"># \u67E5\u770B\u6240\u6709\u5E94\u7528\u7A0B\u5E8F</span>
$ pm2 list
$ pm2 info example
<span class="token comment"># \u663E\u793A\u5E94\u7528\u7A0B\u5E8F\u72B6\u6001\uFF0CCPU\u548C\u5185\u5B58\u4F7F\u7528\u60C5\u51B5</span>
$ pm2 monit
</code></pre></div><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1">\u53C2\u8003\u94FE\u63A5 <a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a></h2><ul><li><a href="https://www.digitalocean.com/community/tutorials/initial-server-setup-with-centos-8" target="_blank" rel="noopener noreferrer">https://www.digitalocean.com/community/tutorials/initial-server-setup-with-centos-8</a></li><li><a href="https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-centos-8" target="_blank" rel="noopener noreferrer">https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-centos-8</a></li><li><a href="https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-centos-7" target="_blank" rel="noopener noreferrer">https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-centos-7</a></li></ul>`,22);function d(s,u,k,g,h,f){return l(),t("div",null,[n("h1",i,[e(o(s.$frontmatter.title)+" ",1),m]),r])}var _=a(c,[["render",d]]);export{b as __pageData,_ as default};
