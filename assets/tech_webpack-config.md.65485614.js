import{_ as a,z as p,A as n,I as t,B as e,W as o,D as c}from"./plugin-vue_export-helper.71bb0c0b.js";const b='{"title":"webpack.config","description":"","frontmatter":{"title":"webpack.config","tags":["webpack","vue"],"categories":["JavaScript"]},"headers":[{"level":2,"title":"\u5E38\u7528\u7684 webpack \u63D2\u4EF6","slug":"\u5E38\u7528\u7684-webpack-\u63D2\u4EF6"},{"level":2,"title":"webpack \u517C\u5BB9 ie8 \u95EE\u9898","slug":"webpack-\u517C\u5BB9-ie8-\u95EE\u9898"},{"level":2,"title":"\u5982\u4F55\u5728 webpack \u4E2D\u5F15\u5165\u672A\u6A21\u5757\u5316\u7684\u5E93\uFF0C\u5982 Zepto","slug":"\u5982\u4F55\u5728-webpack-\u4E2D\u5F15\u5165\u672A\u6A21\u5757\u5316\u7684\u5E93\uFF0C\u5982-zepto"},{"level":2,"title":"tree-shaking","slug":"tree-shaking"},{"level":2,"title":"vue webpack \u9879\u76EE\u914D\u7F6E","slug":"vue-webpack-\u9879\u76EE\u914D\u7F6E"},{"level":2,"title":".eslintrc.js: lint .js and .vue files","slug":"eslintrc-js-lint-js-and-vue-files"},{"level":2,"title":"add favicon to spa","slug":"add-favicon-to-spa"}],"relativePath":"tech/webpack-config.md","lastUpdated":1701670426297}',l={},r={id:"frontmatter-title",tabindex:"-1"},i=n("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=o(`<p><div class="table-of-contents"><ul><li><a href="#\u5E38\u7528\u7684-webpack-\u63D2\u4EF6">\u5E38\u7528\u7684 webpack \u63D2\u4EF6</a></li><li><a href="#webpack-\u517C\u5BB9-ie8-\u95EE\u9898">webpack \u517C\u5BB9 ie8 \u95EE\u9898</a></li><li><a href="#\u5982\u4F55\u5728-webpack-\u4E2D\u5F15\u5165\u672A\u6A21\u5757\u5316\u7684\u5E93\uFF0C\u5982-zepto">\u5982\u4F55\u5728 webpack \u4E2D\u5F15\u5165\u672A\u6A21\u5757\u5316\u7684\u5E93\uFF0C\u5982 Zepto</a></li><li><a href="#tree-shaking">tree-shaking</a></li><li><a href="#vue-webpack-\u9879\u76EE\u914D\u7F6E">vue webpack \u9879\u76EE\u914D\u7F6E</a></li><li><a href="#eslintrc-js-lint-js-and-vue-files">.eslintrc.js: lint .js and .vue files</a></li><li><a href="#add-favicon-to-spa">add favicon to spa</a></li></ul></div></p><h2 id="\u5E38\u7528\u7684-webpack-\u63D2\u4EF6" tabindex="-1">\u5E38\u7528\u7684 webpack \u63D2\u4EF6 <a class="header-anchor" href="#\u5E38\u7528\u7684-webpack-\u63D2\u4EF6" aria-hidden="true">#</a></h2><ul><li><a href="https://github.com/NMFR/optimize-css-assets-webpack-plugin" target="_blank" rel="noopener noreferrer">\u63D0\u53D6 css \u6587\u4EF6\u5E76\u538B\u7F29</a></li><li><a href="https://router.vuejs.org/zh-cn/advanced/lazy-loading.html" target="_blank" rel="noopener noreferrer">\u8DEF\u7531\u61D2\u52A0\u8F7D</a></li><li><a href="https://github.com/ftlabs/fastclick" target="_blank" rel="noopener noreferrer">fastclick</a></li><li>\u6DFB\u52A0 loading \u7EC4\u4EF6 -- <a href="https://molunerfinn.com/vue-components/#Loading" target="_blank" rel="noopener noreferrer">Vue \u7EC4\u4EF6\u7684\u4E09\u79CD\u8C03\u7528\u65B9\u5F0F</a></li><li><code>.vue</code>\u6587\u4EF6\u4E0D\u4F1A<code>eslint --fix</code>\uFF0C\u4F7F\u7528<a href="https://github.com/vuejs/eslint-plugin-vue#user-content-gear-configs" target="_blank" rel="noopener noreferrer">eslint-plugin-vue</a></li><li><a href="https://github.com/vuejs/vue/issues/7323" target="_blank" rel="noopener noreferrer">Duplicate keys detected</a>\uFF0C\u89C1<code>src/component/numbers.vue</code></li><li>\u4EFF\u539F\u751F\u6EDA\u52A8\u4E0B\u62C9\u5237\u65B0&amp;\u4E0A\u62C9\u52A0\u8F7D\u3002<a href="https://github.com/didi/cube-ui/blob/dev/src/components/scroll/scroll.vue" target="_blank" rel="noopener noreferrer">didi-scroll</a></li></ul><h2 id="webpack-\u517C\u5BB9-ie8-\u95EE\u9898" tabindex="-1">webpack \u517C\u5BB9 ie8 \u95EE\u9898 <a class="header-anchor" href="#webpack-\u517C\u5BB9-ie8-\u95EE\u9898" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token comment">/** [uglify#1179](https://github.com/mishoo/UglifyJS2/pull/1179)
   * [Webpack\u6784\u5EFA\u517C\u5BB9IE8](https://segmentfault.com/a/1190000007699918?winzoom=1)
   */</span>
  <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>optimize<span class="token punctuation">.</span>UglifyJsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">screw_ie8</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">mangle</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">screw_ie8</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre></div><p>\u4F7F\u7528 webpack \u6253\u5305\u540E\uFF0C\u4EE3\u7801\u6CA1\u6709\u517C\u5BB9\u95EE\u9898\uFF1B<a href="https://github.com/mishoo/UglifyJS2/" target="_blank" rel="noopener noreferrer">uglifyjs</a>\u538B\u7F29\u540E\u624D\u4F1A\u4E0D\u517C\u5BB9 ie8\u3002\u56E0\u6B64\u5728\u538B\u7F29\u65F6\u914D\u7F6E\u517C\u5BB9 ie8\uFF1B</p><h2 id="\u5982\u4F55\u5728-webpack-\u4E2D\u5F15\u5165\u672A\u6A21\u5757\u5316\u7684\u5E93\uFF0C\u5982-zepto" tabindex="-1"><a href="https://sebastianblade.com/how-to-import-unmodular-library-like-zepto/" target="_blank" rel="noopener noreferrer">\u5982\u4F55\u5728 webpack \u4E2D\u5F15\u5165\u672A\u6A21\u5757\u5316\u7684\u5E93\uFF0C\u5982 Zepto</a> <a class="header-anchor" href="#\u5982\u4F55\u5728-webpack-\u4E2D\u5F15\u5165\u672A\u6A21\u5757\u5316\u7684\u5E93\uFF0C\u5982-zepto" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token comment">// webpack.config</span>
<span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">loaders</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;zepto&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;exports-loader?window.Zepto!script-loader&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8FD9\u6837\u6211\u4EEC\u5728\u9875\u9762\u5165\u53E3\u6587\u4EF6\u4E2D\u5C31\u53EF\u4EE5\u8FD9\u4E48\u5199\uFF1A</p><div class="language-js"><pre><code><span class="token comment">// entry.js</span>
<span class="token keyword">import</span> $ <span class="token keyword">from</span> <span class="token string">&#39;zepto&#39;</span>

<span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><hr><h2 id="tree-shaking" tabindex="-1">tree-shaking <a class="header-anchor" href="#tree-shaking" aria-hidden="true">#</a></h2><ul><li><a href="https://doc.webpack-china.org/guides/tree-shaking/" target="_blank" rel="noopener noreferrer">Tree Shaking</a></li></ul><p>\u4E3A\u4E86\u5B66\u4F1A\u4F7F\u7528 tree shaking\uFF0C\u4F60\u5FC5\u987B\u2026\u2026</p><ul><li>\u4F7F\u7528 ES2015 \u6A21\u5757\u8BED\u6CD5\uFF08\u5373 import \u548C export\uFF09\u3002</li><li>\u5F15\u5165\u4E00\u4E2A\u80FD\u591F\u5220\u9664\u672A\u5F15\u7528\u4EE3\u7801(dead code)\u7684\u538B\u7F29\u5DE5\u5177(minifier)\uFF08\u4F8B\u5982 UglifyJSPlugin\uFF09\u3002</li></ul><hr><h2 id="vue-webpack-\u9879\u76EE\u914D\u7F6E" tabindex="-1">vue webpack \u9879\u76EE\u914D\u7F6E <a class="header-anchor" href="#vue-webpack-\u9879\u76EE\u914D\u7F6E" aria-hidden="true">#</a></h2><p>a demo config file:</p><div class="language-js"><pre><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> Jarvis <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack-jarvis&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> merge <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack-merge&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> ExtractTextPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;extract-text-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> CopyWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;copy-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> UglifyJsPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;uglifyjs-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> OptimizeCSSPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;optimize-css-assets-webpack-plugin&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">let</span> base <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;js/[name].js&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;.js&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.vue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;@&#39;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">vue$</span><span class="token operator">:</span> <span class="token string">&#39;vue/dist/vue.common.js&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">enforce</span><span class="token operator">:</span> <span class="token string">&#39;pre&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(js|vue)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token comment">// to lint .vue files, also need to config .eslintrc.js</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;eslint-loader&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">formatter</span><span class="token operator">:</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;eslint-friendly-formatter&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
              <span class="token literal-property property">fix</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// eslint --fix</span>
              <span class="token literal-property property">failOnError</span><span class="token operator">:</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.vue$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;vue-loader&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">loaders</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">js</span><span class="token operator">:</span> <span class="token string">&#39;babel-loader!eslint-loader&#39;</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">&#39;babel-loader&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> ExtractTextPlugin<span class="token punctuation">.</span><span class="token function">extract</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">fallback</span><span class="token operator">:</span> <span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">&#39;css-loader&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|jp(e)?g|gif|svg)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;url-loader&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">8192</span><span class="token punctuation">,</span>
              <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;image/[name].[ext]&#39;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.html$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;html-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">minimize</span><span class="token operator">:</span> <span class="token boolean">true</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">ExtractTextPlugin</span><span class="token punctuation">(</span><span class="token string">&#39;css/style.css&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">OptimizeCSSPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">cssProcessorOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">assetNameRegExp</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.optimize\\.css$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">cssProcessor</span><span class="token operator">:</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;cssnano&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">cssProcessorOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">discardComments</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">removeAll</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">canPrint</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>optimize<span class="token punctuation">.</span>CommonsChunkPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;vendor&#39;</span><span class="token punctuation">,</span>
      <span class="token function-variable function">minChunks</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">module</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// any required modules inside node_modules are extracted to vendor</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
          module<span class="token punctuation">.</span>resource <span class="token operator">&amp;&amp;</span>
          <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>module<span class="token punctuation">.</span>resource<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
          module<span class="token punctuation">.</span>resource<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>
            path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./node_modules&#39;</span><span class="token punctuation">)</span>
          <span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">0</span>
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// extract webpack runtime and module manifest to its own file in order to</span>
    <span class="token comment">// prevent vendor hash from being updated whenever app bundle is updated</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>optimize<span class="token punctuation">.</span>CommonsChunkPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;manifest&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;vendor&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;index.html&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.html&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">chunksSortMode</span><span class="token operator">:</span> <span class="token string">&#39;dependency&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">hash</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">cache</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;dev&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  base <span class="token operator">=</span> <span class="token function">merge</span><span class="token punctuation">(</span>base<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">contentBase</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">// host: &#39;0.0.0.0&#39;,</span>
        <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
        <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DefinePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token constant">DEV</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token comment">// A very intelligent browser based Webpack dashboard</span>
      <span class="token keyword">new</span> <span class="token class-name">Jarvis</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">1337</span> <span class="token comment">// optional: set a port</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  base <span class="token operator">=</span> <span class="token function">merge</span><span class="token punctuation">(</span>base<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// spa add favicon</span>
      <span class="token keyword">new</span> <span class="token class-name">CopyWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">from</span><span class="token operator">:</span> <span class="token string">&#39;src/favicon.ico&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token keyword">new</span> <span class="token class-name">UglifyJsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">uglifyOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">drop_console</span><span class="token operator">:</span> <span class="token boolean">true</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> base
</code></pre></div><p>\u6253\u5305\u540E\u751F\u4EA7\u7684\u76EE\u5F55\u7ED3\u6784\u5982\u4E0B\uFF1A</p><div class="language-"><pre><code>\u251C\u2500\u2500 dist
|   \u251C\u2500\u2500 css/
|   \u251C\u2500\u2500 image/
|   \u2514\u2500\u2500 js/
|   \u2514\u2500\u2500 index.html
|   \u2514\u2500\u2500 favicon.ico
</code></pre></div><hr><h2 id="eslintrc-js-lint-js-and-vue-files" tabindex="-1"><code>.eslintrc.js</code>: lint <code>.js</code> and <code>.vue</code> files <a class="header-anchor" href="#eslintrc-js-lint-js-and-vue-files" aria-hidden="true">#</a></h2><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">es6</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">browser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token string">&#39;babel-eslint&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">&#39;module&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// more configs see https://github.com/vuejs/eslint-plugin-vue#user-content-gear-configs</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;plugin:vue/base&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;standard&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><hr><h2 id="add-favicon-to-spa" tabindex="-1">add favicon to spa <a class="header-anchor" href="#add-favicon-to-spa" aria-hidden="true">#</a></h2><p>1.use <a href="https://github.com/webpack-contrib/copy-webpack-plugin" target="_blank" rel="noopener noreferrer">copy-webpack-plugin</a></p><div class="language-js"><pre><code><span class="token comment">// spa add favicon</span>
<span class="token keyword">new</span> <span class="token class-name">CopyWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">from</span><span class="token operator">:</span> <span class="token string">&#39;favicon.ico&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">to</span><span class="token operator">:</span> <span class="token string">&#39;dest&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre></div><p>2.use native javascript</p><p>in your <code>main.js</code></p><div class="language-js"><pre><code><span class="token comment">// add favicon</span>
<span class="token keyword">const</span> favicon <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./images/favicon.png&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> link <span class="token operator">=</span>
  window<span class="token punctuation">.</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;link[rel*=&quot;icon&quot;]&#39;</span><span class="token punctuation">)</span> <span class="token operator">||</span>
  document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;link&#39;</span><span class="token punctuation">)</span>
link<span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">&#39;image/x-icon&#39;</span>
link<span class="token punctuation">.</span>rel <span class="token operator">=</span> <span class="token string">&#39;shortcut icon&#39;</span>
link<span class="token punctuation">.</span>href <span class="token operator">=</span> favicon
window<span class="token punctuation">.</span>document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&#39;head&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>link<span class="token punctuation">)</span>
</code></pre></div>`,31);function k(s,d,g,y,m,f){return c(),p("div",null,[n("h1",r,[t(e(s.$frontmatter.title)+" ",1),i]),u])}var w=a(l,[["render",k]]);export{b as __pageData,w as default};
