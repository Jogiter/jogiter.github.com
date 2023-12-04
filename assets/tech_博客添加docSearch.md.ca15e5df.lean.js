import{_ as s,z as e,A as a,I as t,B as o,W as p,D as l}from"./plugin-vue_export-helper.71bb0c0b.js";var r="/assets/algolia-api-keys.352c9f07.jpg";const v='{"title":"\u535A\u5BA2\u6DFB\u52A0docSearch","description":"","frontmatter":{"title":"\u535A\u5BA2\u6DFB\u52A0docSearch","tags":"blog"},"headers":[{"level":2,"title":"\u4EC0\u4E48\u662F DocSearch","slug":"\u4EC0\u4E48\u662F-docsearch"},{"level":2,"title":"vitepress \u535A\u5BA2\u6DFB\u52A0 algolia \u914D\u7F6E","slug":"vitepress-\u535A\u5BA2\u6DFB\u52A0-algolia-\u914D\u7F6E"},{"level":2,"title":"\u4E0A\u4F20\u7D22\u5F15","slug":"\u4E0A\u4F20\u7D22\u5F15"},{"level":3,"title":"\u672C\u5730\u8FD0\u884C","slug":"\u672C\u5730\u8FD0\u884C"},{"level":3,"title":"\u4F7F\u7528 GithubAction","slug":"\u4F7F\u7528-githubaction"},{"level":2,"title":"\u76F8\u5173\u94FE\u63A5","slug":"\u76F8\u5173\u94FE\u63A5"}],"relativePath":"tech/\u535A\u5BA2\u6DFB\u52A0docSearch.md","lastUpdated":1701670426297}',c={},i={id:"frontmatter-title",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=p(`__VP_STATIC_START__<p><div class="table-of-contents"><ul><li><a href="#\u4EC0\u4E48\u662F-docsearch">\u4EC0\u4E48\u662F DocSearch</a></li><li><a href="#vitepress-\u535A\u5BA2\u6DFB\u52A0-algolia-\u914D\u7F6E">vitepress \u535A\u5BA2\u6DFB\u52A0 algolia \u914D\u7F6E</a></li><li><a href="#\u4E0A\u4F20\u7D22\u5F15">\u4E0A\u4F20\u7D22\u5F15</a><ul><li><a href="#\u672C\u5730\u8FD0\u884C">\u672C\u5730\u8FD0\u884C</a></li><li><a href="#\u4F7F\u7528-githubaction">\u4F7F\u7528 GithubAction</a></li></ul></li><li><a href="#\u76F8\u5173\u94FE\u63A5">\u76F8\u5173\u94FE\u63A5</a></li></ul></div></p><p>\u81EA\u4ECE\u535A\u5BA2\u4ECE <code>hexo</code> \u8FC1\u79FB\u5230 <code>vitepress</code> \u540E\uFF08\u5BF9 vuepress \u611F\u89C9\u4E0D\u597D\uFF0C\u6240\u4EE5\u4E00\u76F4\u6CA1\u6709\u8FC1\u79FB\uFF0C\u4F46\u662F vitepress \u771F\u9999\u5B9A\u5F8B\u8BA9\u6211\u52A8\u4E86\u5FC3\u601D\uFF09\uFF0C\u4E00\u76F4\u5FC3\u5FC3\u5FF5\u5FF5\u7684\u60F3\u8981\u96C6\u6210\u535A\u5BA2\u641C\u7D22\u529F\u80FD\u3002\u524D\u51E0\u5929\u5728 <a href="https://www.algolia.com/" target="_blank" rel="noopener noreferrer">https://www.algolia.com/</a> \u6CE8\u518C\u4E86\u8D26\u53F7\u540E\uFF0C\u53D1\u73B0\u641C\u7D22\u6CA1\u6709\u7ED3\u679C\uFF0C\u4ECA\u5929\u82B1\u4E86\u5927\u534A\u5929\u8E29\u5751\uFF0C\u7EC8\u4E8E\u5B8C\u6574\u7684\u5B9E\u73B0\u4E86\u641C\u7D22\u529F\u80FD\u3002</p><h2 id="\u4EC0\u4E48\u662F-docsearch" tabindex="-1">\u4EC0\u4E48\u662F DocSearch <a class="header-anchor" href="#\u4EC0\u4E48\u662F-docsearch" aria-hidden="true">#</a></h2><p>\u6839\u636E <a href="https://docsearch.algolia.com/docs/what-is-docsearch/" target="_blank" rel="noopener noreferrer">docsearch.algolia.com</a> \u7684\u5FEB\u901F\u63CF\u8FF0\u3002 DocSearch \u5206\u4E3A 2 \u4E2A\u90E8\u5206\uFF1A\u4E00\u4E2A\u722C\u866B\u7A0B\u5E8F\u548C\u4E00\u4E2A\u524D\u7AEF\u5E93\u3002</p><ul><li>\u722C\u866B\u7A0B\u5E8F\uFF1A\u7528\u6765\u83B7\u53D6\u535A\u5BA2\u7684\u67E5\u8BE2\u5173\u952E\u5B57\uFF0C\u4E3A\u535A\u5BA2\u641C\u7D22\u63A5\u53E3\u63D0\u4F9B\u7ED3\u679C\u3002</li><li>\u524D\u7AEF\u5E93\uFF1A\u7528\u6765\u63D0\u4F9B\u6C89\u6D78\u5F0F\u641C\u7D22\u4F53\u9A8C\u3002\uFF08\u5C31\u662F\u96C6\u6210\u4E86 UI \u7EC4\u4EF6\u548C\u641C\u7D22\u63A5\u53E3\uFF0C\u80FD\u591F\u5FEB\u901F\u63A5\u5165\u641C\u7D22\u529F\u80FD\uFF09</li></ul><h2 id="vitepress-\u535A\u5BA2\u6DFB\u52A0-algolia-\u914D\u7F6E" tabindex="-1">vitepress \u535A\u5BA2\u6DFB\u52A0 algolia \u914D\u7F6E <a class="header-anchor" href="#vitepress-\u535A\u5BA2\u6DFB\u52A0-algolia-\u914D\u7F6E" aria-hidden="true">#</a></h2><p>\u6839\u636E <a href="https://vitepress.vuejs.org/config/algolia-search.html" target="_blank" rel="noopener noreferrer">vitepress#theme-config-algolia-search</a> \u6587\u6863\uFF0C\u53EA\u9700\u8981\u5982\u4E0B\u914D\u7F6E\uFF1A</p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">algolia</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">apiKey</span><span class="token operator">:</span> <span class="token string">&#39;your_api_key&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">indexName</span><span class="token operator">:</span> <span class="token string">&#39;index_name&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8FD9\u91CC\u7684\u914D\u7F6E\u4FE1\u606F\u9700\u8981\u767B\u5F55 <a href="https://www.algolia.com/" target="_blank" rel="noopener noreferrer">https://www.algolia.com/</a> \u540E\uFF0C\u67E5\u770B API Keys \u83B7\u5F97\u3002</p><p><img src="`+r+`" alt="API Keys"></p><ul><li><code>Application ID</code> \u8FD9\u662F\u60A8\u7684\u552F\u4E00\u5E94\u7528\u7A0B\u5E8F\u6807\u8BC6\u7B26\u3002\u5B83\u7528\u4E8E\u5728\u4F7F\u7528 Algolia \u7684 API \u65F6\u8BC6\u522B\u60A8\u3002</li><li><code>Search-Only API Key</code> \u8FD9\u662F\u5728\u524D\u7AEF\u4EE3\u7801\u4E2D\u4F7F\u7528\u7684\u516C\u5171 API \u5BC6\u94A5\u3002\u6B64\u5BC6\u94A5\u4EC5\u7528\u4E8E\u641C\u7D22\u67E5\u8BE2\u548C\u5411 Insights API \u53D1\u9001\u6570\u636E\u3002</li><li><code>Admin API Key</code> \u8FD9\u662F\u7BA1\u7406 API \u5BC6\u94A5\u3002\u8BF7\u4FDD\u5B88\u79D8\u5BC6\uFF0C\u4EC5\u4ECE\u540E\u7AEF\u4F7F\u7528\uFF1A\u6B64\u5BC6\u94A5\u7528\u4E8E\u521B\u5EFA\u3001\u66F4\u65B0\u548C\u5220\u9664\u7D22\u5F15\u3002\u60A8\u8FD8\u53EF\u4EE5\u4F7F\u7528\u5B83\u6765\u7BA1\u7406 API \u5BC6\u94A5\u3002</li><li><code>IndexName</code> \u521B\u5EFA\u5E94\u7528\u540E\uFF0C\u521B\u5EFA\u7528\u4E8E\u535A\u5BA2\u641C\u7D22\u7684\u7D22\u5F15\u3002</li></ul><p>\u5B8C\u6210\u914D\u7F6E\u540E\uFF0C\u5C31\u53EF\u4EE5\u5728\u535A\u5BA2\u754C\u9762\u4E0A\u770B\u5230\u641C\u7D22\u6846\u4E86\u3002\u4F46\u662F\u8F93\u5165\u4EFB\u4F55\u5185\u5BB9\uFF0C\u4F60\u4F1A\u53D1\u73B0\u90FD\u67E5\u4E0D\u5230\u7ED3\u679C\u3002\u8FD9\u662F\u56E0\u4E3A\u5728 algolia \u7684\u540E\u53F0\u8FD8\u6CA1\u6709\u4E0A\u4F20\u7D22\u5F15\u3002</p><div class="warning custom-block"><p class="custom-block-title">Note</p><p><a href="https://community.algolia.com/docsearch/" target="_blank" rel="noopener noreferrer">Algolia DocSearch</a> requires you to submit your site to them for indexing before it starts working.</p></div><h2 id="\u4E0A\u4F20\u7D22\u5F15" tabindex="-1">\u4E0A\u4F20\u7D22\u5F15 <a class="header-anchor" href="#\u4E0A\u4F20\u7D22\u5F15" aria-hidden="true">#</a></h2><p><a href="https://www.algolia.com/doc/tools/crawler/getting-started/overview/" target="_blank" rel="noopener noreferrer">Algolia Crawler</a> \u652F\u6301\u4E24\u79CD\u65B9\u5F0F\u8FDB\u884C\u751F\u6210\u7D22\u5F15\u3002</p><ul><li>\u5B98\u65B9\u63A8\u8350\u4F7F\u7528 <a href="https://crawler.algolia.com/admin/" target="_blank" rel="noopener noreferrer">The admin console</a>\u3002\u9700\u8981\u4ED8\u8D39\u3002</li><li>\u4F7F\u7528 <a href="https://www.algolia.com/doc/tools/crawler/apis/crawler-rest-api" target="_blank" rel="noopener noreferrer">Crawler REST API</a></li></ul><p>\u4E0A\u8FF0\u4E24\u79CD\u65B9\u5F0F\uFF0C\u5176\u4E00\u9700\u8981\u4ED8\u8D39\uFF0C\u672C\u7BC7\u4E0D\u505A\u4ECB\u7ECD\uFF0C\u6709\u5174\u8DA3\u7684\u53EF\u4EE5\u53C2\u9605\u5B98\u65B9\u6587\u6863\u3002\u5176\u4E8C\u4F7F\u7528 API \u8C03\u7528\u76F8\u5BF9\u8F83\u9EBB\u70E6\u3002\u7ECF\u8FC7\u591A\u756A\u67E5\u9605\u6587\u6863\uFF0C\u7EC8\u4E8E\u627E\u5230\u4E86\u53EF\u4EE5\u5728\u53EF\u4EE5\u81EA\u884C\u751F\u6210\u7D22\u5F15\u7684\u65B9\u5F0F <a href="https://docsearch.algolia.com/docs/legacy/run-your-own" target="_blank" rel="noopener noreferrer">docsearch#legacy/run-your-own</a></p><h3 id="\u672C\u5730\u8FD0\u884C" tabindex="-1">\u672C\u5730\u8FD0\u884C <a class="header-anchor" href="#\u672C\u5730\u8FD0\u884C" aria-hidden="true">#</a></h3><p>\u9700\u8981\u5B89\u88C5 python \u73AF\u5883\u3002\u6211\u5728\u8FD9\u91CC\u82B1\u8D39\u4E86\u5F88\u591A\u65F6\u95F4\u3002\u6700\u7EC8\u4ECD\u662F\u8FD0\u884C\u5931\u8D25\u3002\u56E0\u6B64\u5F03\u5751\u4E86\u3002</p><p>\u8BB0\u5F55\u4E00\u4E0B\u9047\u5230\u7684\u95EE\u9898\uFF1A</p><ul><li>\u5B89\u88C5 python 3.10.0 \u7248\u672C\uFF1A<code>choco install python3</code>\uFF08\u4F7F\u7528\u7BA1\u7406\u5458\u8EAB\u4EFD\u8FD0\u884C power shell\uFF09\u3002</li><li>\u5B89\u88C5 pipenv \u9700\u8981\u4F7F\u7528\u56FD\u5185\u7684 python \u955C\u50CF\u6E90\u3002</li><li>\u516C\u53F8\u7F51\u7EDC\u6709\u8FDB\u884C\u62E6\u622A\uFF0C\u5BFC\u81F4\u5B89\u88C5\u5931\u8D25\u3002\uFF08\u4F7F\u7528\u4E2A\u4EBA wifi \u540E\u5B89\u88C5\u6210\u529F\u{1F622}\uFF09</li><li>windows \u5E73\u53F0\u4E0B\u8FD0\u884C <code>pipenv install</code>\u3001 <code>pipenv shell</code>\u547D\u4EE4\u5931\u8D25\u3002\u5F03\u5751\u4E8E\u6B64\uFF01</li></ul><h3 id="\u4F7F\u7528-githubaction" tabindex="-1">\u4F7F\u7528 GithubAction <a class="header-anchor" href="#\u4F7F\u7528-githubaction" aria-hidden="true">#</a></h3><p>\u4F7F\u7528 <a href="https://github.com/darrenjennings/algolia-docsearch-action" target="_blank" rel="noopener noreferrer">darrenjennings/algolia-docsearch-action</a> \u8FDB\u884C\u641C\u7D22\u7D22\u5F15\u4E0A\u4F20\u3002</p><div class="language-yaml"><pre><code><span class="token key atrule">name</span><span class="token punctuation">:</span> Index Algolia
<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> vitepress
  <span class="token key atrule">pull_request_review</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> vitepress
    <span class="token key atrule">types</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> submitted

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">algolia_indexer</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest

    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> darrenjennings/algolia<span class="token punctuation">-</span>docsearch<span class="token punctuation">-</span>action@master
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">algolia_application_id</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.ALGOLIA_APPID <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">algolia_api_key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.ALGOLIA_APIKEY <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">file</span><span class="token punctuation">:</span> algolia<span class="token punctuation">-</span>config.json
</code></pre></div><ol><li>\u521B\u5EFA <code>.github/workflows/algolia.yml</code></li><li>\u6DFB\u52A0 <code>Actions secrets</code><ol><li>\u6DFB\u52A0 <code>ALGOLIA_APIKEY</code>\uFF0C\u503C\u4E3A <a href="#vitepress-%E5%8D%9A%E5%AE%A2%E6%B7%BB%E5%8A%A0-algolia-%E9%85%8D%E7%BD%AE">algolia \u914D\u7F6E</a> \u7684 <code>Admin API Key</code></li><li>\u6DFB\u52A0 <code>ALGOLIA_APPID</code>\uFF0C\u503C\u4E3A <a href="#vitepress-%E5%8D%9A%E5%AE%A2%E6%B7%BB%E5%8A%A0-algolia-%E9%85%8D%E7%BD%AE">algolia \u914D\u7F6E</a> \u7684 <code>Application ID</code></li><li>\u6DFB\u52A0 <code>ALGOLIA_INDEXNAME</code>\uFF0C\u503C\u4E3A <a href="#vitepress-%E5%8D%9A%E5%AE%A2%E6%B7%BB%E5%8A%A0-algolia-%E9%85%8D%E7%BD%AE">algolia \u914D\u7F6E</a> \u7684 <code>IndexName</code></li></ol></li><li>\u5728\u9879\u76EE\u6839\u76EE\u5F55\u521B\u5EFA <code>algolia-config.json</code></li></ol><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;index_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jogiter-blog&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;start_urls&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;http://blog.jogiter.cn/&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;selectors&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;lvl0&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.content h1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lvl1&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.content h2&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lvl2&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.content h3&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lvl3&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.content h4&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lvl4&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.content h5&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lvl5&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.content h6&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.content p, .content li&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u81F3\u6B64\uFF0C\u5DF2\u5B8C\u6210 Action \u914D\u7F6E\u3002\u63D0\u4EA4\u4EE3\u7801\u5230 github\uFF0C\u7136\u540E\u7B49\u5F85 Action \u6267\u884C\u5B8C\u6BD5\u540E\uFF0C\u5373\u53EF\u8FDB\u884C\u641C\u7D22\u5566\u{1F604}\u3002</p><h2 id="\u76F8\u5173\u94FE\u63A5" tabindex="-1">\u76F8\u5173\u94FE\u63A5 <a class="header-anchor" href="#\u76F8\u5173\u94FE\u63A5" aria-hidden="true">#</a></h2><ul><li><a href="https://www.algolia.com/" target="_blank" rel="noopener noreferrer">https://www.algolia.com/</a></li><li><a href="https://vitepress.vuejs.org/" target="_blank" rel="noopener noreferrer">https://vitepress.vuejs.org/</a></li><li><a href="https://docsearch.algolia.com/" target="_blank" rel="noopener noreferrer">https://docsearch.algolia.com/</a></li><li><a href="https://github.com/darrenjennings/algolia-docsearch-action" target="_blank" rel="noopener noreferrer">GithubAction: algolia-docsearch-action</a> \u8FD0\u884C docsearch scraper \u5E76\u66F4\u65B0\u7D22\u5F15</li></ul>__VP_STATIC_END__`,29);function k(n,d,g,f,_,A){return l(),e("div",null,[a("h1",i,[t(o(n.$frontmatter.title)+" ",1),u]),h])}var m=s(c,[["render",k]]);export{v as __pageData,m as default};
