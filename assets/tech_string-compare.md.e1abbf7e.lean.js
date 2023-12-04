import{_ as a,z as t,A as n,I as p,B as o,W as e,D as c}from"./plugin-vue_export-helper.71bb0c0b.js";const y='{"title":"js \u5B57\u7B26\u4E32\u6BD4\u8F83\u5927\u5C0F","description":"","frontmatter":{"title":"js \u5B57\u7B26\u4E32\u6BD4\u8F83\u5927\u5C0F"},"headers":[{"level":2,"title":"demos","slug":"demos"},{"level":2,"title":"\u7248\u672C\u53F7\u6BD4\u8F83\u5927\u5C0F","slug":"\u7248\u672C\u53F7\u6BD4\u8F83\u5927\u5C0F"},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0"}],"relativePath":"tech/string-compare.md","lastUpdated":1701670426297}',l={},u={id:"frontmatter-title",tabindex:"-1"},r=n("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),k=e(`__VP_STATIC_START__<p><div class="table-of-contents"><ul><li><a href="#demos">demos</a></li><li><a href="#\u7248\u672C\u53F7\u6BD4\u8F83\u5927\u5C0F">\u7248\u672C\u53F7\u6BD4\u8F83\u5927\u5C0F</a></li><li><a href="#\u53C2\u8003\u6587\u7AE0">\u53C2\u8003\u6587\u7AE0</a></li></ul></div></p><blockquote><p>\u6309\u6BCF\u4E2A\u5B57\u7B26\u7684 charCode \u5927\u5C0F\u8FDB\u884C\u6BD4\u8F83\uFF0C\u76F4\u5230\u5206\u51FA\u5927\u5C0F\u4E3A\u6B62</p></blockquote><h2 id="demos" tabindex="-1">demos <a class="header-anchor" href="#demos" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token punctuation">{</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token string">&#39;a11&#39;</span>
  <span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token string">&#39;a2&#39;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">&gt;</span> b<span class="token punctuation">)</span> <span class="token comment">// false</span>
<span class="token punctuation">}</span>
</code></pre></div><p>a \u548C b \u6BD4\u8F83\uFF0C\u6B65\u9AA4\u5982\u4E0B\uFF1A</p><ol><li>a[0]=&#39;a&#39;, b[0]=&#39;a&#39;, \u4ED6\u4EEC\u7684 charCode \u76F8\u7B49\uFF0C\u6240\u4EE5\u6BD4\u8F83\u4E0B\u4E00\u9879</li><li>a[1]=&#39;1&#39;, b[1]=&#39;2&#39;, 1 \u7684 charCode \u662F 49\uFF0C 2 \u7684\u662F 50\uFF0C \u6240\u4EE5 a[1] &lt; b[1]</li><li>\u6240\u4EE5 a &lt; b</li></ol><div class="language-js"><pre><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u9009\u62E9&#39;</span> <span class="token operator">&gt;</span> <span class="token string">&#39;\u52AA\u529B&#39;</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre></div><p>\u56E0\u4E3A &quot;\u9009&quot; \u7684 charCode \u662F 36873\uFF0C&quot;\u52AA&quot; \u7684 charCode \u662F 21162</p><h2 id="\u7248\u672C\u53F7\u6BD4\u8F83\u5927\u5C0F" tabindex="-1">\u7248\u672C\u53F7\u6BD4\u8F83\u5927\u5C0F <a class="header-anchor" href="#\u7248\u672C\u53F7\u6BD4\u8F83\u5927\u5C0F" aria-hidden="true">#</a></h2><p>\u5E38\u89C1<a href="https://semver.org/lang/zh-CN/" target="_blank" rel="noopener noreferrer">\u7248\u672C\u53F7</a> <code>0.0.1</code> \u7B49\uFF0C\u5F53\u67D0\u4E9B\u7279\u5B9A\u60C5\u51B5\u4E0B\uFF0C\u5982\u8981\u8FDB\u884C\u7248\u672C\u53F7\u5927\u5C0F\u5BF9\u6BD4\u3002\u56E0\u6B64\u6709\u4EBA\u4F1A\u91C7\u7528\u4E0A\u8FF0\u529E\u6CD5\u6765\u6BD4\u8F83\u3002\u4F46\u662F\u4F1A\u6709 bug\u3002</p><div class="language-js"><pre><code><span class="token punctuation">{</span>
  <span class="token keyword">let</span> v1 <span class="token operator">=</span> <span class="token string">&#39;9.1.21&#39;</span>
  <span class="token keyword">let</span> v2 <span class="token operator">=</span> <span class="token string">&#39;7.1.1.28&#39;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v1 <span class="token operator">&gt;</span> v2<span class="token punctuation">)</span> <span class="token comment">// true</span>
<span class="token punctuation">}</span>
<span class="token punctuation">{</span>
  <span class="token comment">// v2 \u5B9E\u9645\u4E0A\u662F\u5927\u4E8E v1</span>
  <span class="token keyword">let</span> v1 <span class="token operator">=</span> <span class="token string">&#39;9.1.21&#39;</span>
  <span class="token keyword">let</span> v2 <span class="token operator">=</span> <span class="token string">&#39;10.1.1.28&#39;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v1 <span class="token operator">&gt;</span> v2<span class="token punctuation">)</span> <span class="token comment">// true</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4E3A\u4E86\u4FEE\u590D\u6B64 Bug\uFF0C\u6211\u5199\u4E86\u4E00\u4E2A\u51FD\u6570\uFF1A</p><div class="language-js"><pre><code><span class="token comment">// \u5BF9\u6BD4\u7248\u672C\u53F7\u5927\u5C0F</span>
<span class="token keyword">function</span> <span class="token function">isBiggerVersion</span><span class="token punctuation">(</span><span class="token parameter">v1<span class="token punctuation">,</span> v2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token keyword">var</span> array1 <span class="token operator">=</span> v1<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">var</span> array2 <span class="token operator">=</span> v2<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">var</span> isFirstLonger <span class="token operator">=</span> array1<span class="token punctuation">.</span>length <span class="token operator">&gt;=</span> array2<span class="token punctuation">.</span>length

  <span class="token keyword">function</span> <span class="token function">_bigger</span><span class="token punctuation">(</span><span class="token parameter">longer<span class="token punctuation">,</span> shorter</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> l <span class="token operator">=</span> <span class="token operator">~</span><span class="token operator">~</span><span class="token punctuation">(</span>longer<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">var</span> s <span class="token operator">=</span> <span class="token operator">~</span><span class="token operator">~</span><span class="token punctuation">(</span>shorter<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>s <span class="token operator">&gt;=</span> l<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>s <span class="token operator">&lt;</span> l<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>s <span class="token operator">===</span> l<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      longer<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      shorter<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

      <span class="token keyword">return</span> <span class="token function">_bigger</span><span class="token punctuation">(</span>longer<span class="token punctuation">,</span> shorter<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> isFirstLonger <span class="token operator">?</span> <span class="token function">_bigger</span><span class="token punctuation">(</span>array1<span class="token punctuation">,</span> array2<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token operator">!</span><span class="token function">_bigger</span><span class="token punctuation">(</span>array2<span class="token punctuation">,</span> array1<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4E0B\u9762\u662F\u6D4B\u8BD5\uFF1A</p><div class="language-js"><pre><code><span class="token punctuation">{</span>
  <span class="token keyword">let</span> v1 <span class="token operator">=</span> <span class="token string">&#39;9.1.21&#39;</span>
  <span class="token keyword">let</span> v2 <span class="token operator">=</span> v1
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isBiggerVersion</span><span class="token punctuation">(</span>v1<span class="token punctuation">,</span> v2<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
<span class="token punctuation">}</span>

<span class="token punctuation">{</span>
  <span class="token keyword">let</span> v1 <span class="token operator">=</span> <span class="token string">&#39;9.1.21&#39;</span>
  <span class="token keyword">let</span> v2 <span class="token operator">=</span> <span class="token string">&#39;10.1.1.28&#39;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isBiggerVersion</span><span class="token punctuation">(</span>v1<span class="token punctuation">,</span> v2<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
<span class="token punctuation">}</span>

<span class="token punctuation">{</span>
  <span class="token keyword">let</span> v1 <span class="token operator">=</span> <span class="token string">&#39;9.1.21&#39;</span>
  <span class="token keyword">let</span> v2 <span class="token operator">=</span> <span class="token string">&#39;10.0.1.28&#39;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isBiggerVersion</span><span class="token punctuation">(</span>v1<span class="token punctuation">,</span> v2<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
<span class="token punctuation">}</span>

<span class="token punctuation">{</span>
  <span class="token keyword">let</span> v1 <span class="token operator">=</span> <span class="token string">&#39;9.1.21&#39;</span>
  <span class="token keyword">let</span> v2 <span class="token operator">=</span> <span class="token string">&#39;9.0.1.28&#39;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isBiggerVersion</span><span class="token punctuation">(</span>v1<span class="token punctuation">,</span> v2<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
<span class="token punctuation">}</span>

<span class="token punctuation">{</span>
  <span class="token keyword">let</span> v1 <span class="token operator">=</span> <span class="token string">&#39;9.1.21&#39;</span>
  <span class="token keyword">let</span> v2 <span class="token operator">=</span> <span class="token string">&#39;9.1.1.28&#39;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isBiggerVersion</span><span class="token punctuation">(</span>v1<span class="token punctuation">,</span> v2<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
<span class="token punctuation">}</span>
<span class="token punctuation">{</span>
  <span class="token keyword">let</span> v1 <span class="token operator">=</span> <span class="token string">&#39;9.1.21&#39;</span>
  <span class="token keyword">let</span> v2 <span class="token operator">=</span> <span class="token string">&#39;8.1.1.28&#39;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isBiggerVersion</span><span class="token punctuation">(</span>v1<span class="token punctuation">,</span> v2<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
<span class="token punctuation">}</span>

<span class="token punctuation">{</span>
  <span class="token keyword">let</span> v1 <span class="token operator">=</span> <span class="token string">&#39;9.1.21&#39;</span>
  <span class="token keyword">let</span> v2 <span class="token operator">=</span> <span class="token string">&#39;8.1&#39;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isBiggerVersion</span><span class="token punctuation">(</span>v1<span class="token punctuation">,</span> v2<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
<span class="token punctuation">}</span>

<span class="token punctuation">{</span>
  <span class="token keyword">let</span> v1 <span class="token operator">=</span> <span class="token string">&#39;9.1.21&#39;</span>
  <span class="token keyword">let</span> v2 <span class="token operator">=</span> <span class="token string">&#39;10.1&#39;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isBiggerVersion</span><span class="token punctuation">(</span>v1<span class="token punctuation">,</span> v2<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1">\u53C2\u8003\u6587\u7AE0 <a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a></h2><ul><li><a href="https://www.cnblogs.com/52cik/p/js-string-comparison.html" target="_blank" rel="noopener noreferrer">\u5C0F\u8BAE js \u4E0B\u5B57\u7B26\u4E32\u6BD4\u8F83\u5927\u5C0F</a></li><li><a href="https://github.com/npm/node-semver/blob/master/semver.js#L471-L491" target="_blank" rel="noopener noreferrer">node-semver</a></li></ul>__VP_STATIC_END__`,17);function i(s,d,g,v,f,m){return c(),t("div",null,[n("h1",u,[p(o(s.$frontmatter.title)+" ",1),r]),k])}var w=a(l,[["render",i]]);export{y as __pageData,w as default};
