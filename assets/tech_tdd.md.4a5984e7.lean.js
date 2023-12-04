import{_ as a,z as t,A as n,I as p,B as o,W as c,D as e}from"./plugin-vue_export-helper.71bb0c0b.js";const w='{"title":"tdd","description":"","frontmatter":{"title":"tdd","tags":null},"headers":[{"level":2,"title":"\u6D89\u53CA\u6587\u6863","slug":"\u6D89\u53CA\u6587\u6863"},{"level":2,"title":"mocha \u6D4B\u8BD5\u5E38\u89C1\u95EE\u9898","slug":"mocha-\u6D4B\u8BD5\u5E38\u89C1\u95EE\u9898"}],"relativePath":"tech/tdd.md","lastUpdated":1701670426297}',u={},l={id:"frontmatter-title",tabindex:"-1"},i=n("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),k=c(`__VP_STATIC_START__<p><div class="table-of-contents"><ul><li><a href="#\u6D89\u53CA\u6587\u6863">\u6D89\u53CA\u6587\u6863</a></li><li><a href="#mocha-\u6D4B\u8BD5\u5E38\u89C1\u95EE\u9898">mocha \u6D4B\u8BD5\u5E38\u89C1\u95EE\u9898</a></li></ul></div></p><h2 id="\u6D89\u53CA\u6587\u6863" tabindex="-1">\u6D89\u53CA\u6587\u6863 <a class="header-anchor" href="#\u6D89\u53CA\u6587\u6863" aria-hidden="true">#</a></h2><ul><li><a href="https://github.com/mochajs/mocha" target="_blank" rel="noopener noreferrer">mocha</a> \u2615\uFE0F simple, flexible, fun javascript test framework for node.js &amp; the browser</li><li><a href="https://github.com/domenic/chai-as-promised" target="_blank" rel="noopener noreferrer">chai-as-promised</a> Extends Chai with assertions about promises.</li></ul><blockquote><p><a href="https://github.com/Jogiter/tdd" target="_blank" rel="noopener noreferrer">demo \u4ED3\u5E93</a></p></blockquote><h2 id="mocha-\u6D4B\u8BD5\u5E38\u89C1\u95EE\u9898" tabindex="-1">mocha \u6D4B\u8BD5\u5E38\u89C1\u95EE\u9898 <a class="header-anchor" href="#mocha-\u6D4B\u8BD5\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a></h2><p>\u5E38\u89C1\u7684 <code>promise</code>\u3001<code>async/await</code>\u3001<code>timeout</code> \u6D4B\u8BD5</p><div class="language-js"><pre><code><span class="token comment">// mocha-spec.js</span>
<span class="token keyword">const</span> chai <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;chai&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> expect<span class="token punctuation">,</span> assert <span class="token punctuation">}</span> <span class="token operator">=</span> chai
<span class="token keyword">const</span> timeout <span class="token operator">=</span> <span class="token number">5000</span>
<span class="token keyword">const</span> delay <span class="token operator">=</span> <span class="token number">1000</span>

<span class="token keyword">const</span> <span class="token function-variable function">p</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">status<span class="token punctuation">,</span> timeout <span class="token operator">=</span> <span class="token number">100</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">test</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>status <span class="token operator">===</span> <span class="token string">&#39;fulfilled&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">reject</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token function">setTimeout</span><span class="token punctuation">(</span>test<span class="token punctuation">,</span> timeout<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&#39;demo&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&#39;promise&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">done</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">p</span><span class="token punctuation">(</span><span class="token string">&#39;fulfilled&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">expect</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token string">&#39;fulfilled&#39;</span><span class="token punctuation">)</span>
      <span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&#39;promise multi&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">done</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u91CD\u65B0\u8BBE\u7F6E\u8D85\u65F6\u65F6\u95F4 &gt; \u6267\u884C\u65F6\u95F4</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">timeout</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">*</span> timeout<span class="token punctuation">)</span>

    <span class="token comment">// done \u4F1A\u5728 2200 \u540E\u6267\u884C\u3002\u8D85\u8FC7\u4E86\u9ED8\u8BA4 2000</span>
    <span class="token function">p</span><span class="token punctuation">(</span><span class="token string">&#39;fulfilled&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">expect</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token string">&#39;fulfilled&#39;</span><span class="token punctuation">)</span>

      <span class="token function">p</span><span class="token punctuation">(</span><span class="token string">&#39;fulfilled&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">expect</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token string">&#39;fulfilled&#39;</span><span class="token punctuation">)</span>
        <span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&#39;promise multi with delayed&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">done</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u91CD\u65B0\u8BBE\u7F6E\u8D85\u65F6\u65F6\u95F4\uFF0C\u5982\u679C\u4E0D\u8BBE\u7F6E\uFF0C\u5219\u62A5\u9519</span>
    <span class="token comment">// &#39;Error: Timeout of 2000ms exceeded. For async tests and hooks, ensure &quot;done()&quot; is called;if returning a Promise, ensure it resolves&#39;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">timeout</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span>

    <span class="token comment">// done \u4F1A\u5728 2200 \u540E\u6267\u884C\u3002\u8D85\u8FC7\u4E86\u9ED8\u8BA4 2000</span>
    <span class="token keyword">const</span> <span class="token function-variable function">test</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
      <span class="token function">p</span><span class="token punctuation">(</span><span class="token string">&#39;fulfilled&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">expect</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token string">&#39;fulfilled&#39;</span><span class="token punctuation">)</span>

        <span class="token function">p</span><span class="token punctuation">(</span><span class="token string">&#39;fulfilled&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token function">expect</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token string">&#39;fulfilled&#39;</span><span class="token punctuation">)</span>
          <span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token function">setTimeout</span><span class="token punctuation">(</span>test<span class="token punctuation">,</span> delay<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&#39;timeout&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">timeout</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>
    assert<span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&#39;timeout demo&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">done</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">timeout</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span>done<span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&#39;timeout with done&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">done</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">timeout</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span>
    <span class="token keyword">const</span> <span class="token function-variable function">test</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      assert<span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
      <span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span>test<span class="token punctuation">,</span> delay<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&#39;timeout with async done&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">done</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">timeout</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span>

    <span class="token keyword">const</span> <span class="token function-variable function">test</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">p</span><span class="token punctuation">(</span><span class="token string">&#39;fulfilled&#39;</span><span class="token punctuation">)</span>
      <span class="token function">expect</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token string">&#39;fulfilled&#39;</span><span class="token punctuation">)</span>
      <span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">setTimeout</span><span class="token punctuation">(</span>test<span class="token punctuation">,</span> delay<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&#39;timeout with promise done&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">done</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">timeout</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span>

    <span class="token keyword">const</span> <span class="token function-variable function">test</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">p</span><span class="token punctuation">(</span><span class="token string">&#39;rejected&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">expect</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token string">&#39;rejected&#39;</span><span class="token punctuation">)</span>
        <span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span>test<span class="token punctuation">,</span> delay<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&#39;timeout with promise catch done&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">done</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">timeout</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span>

    <span class="token keyword">const</span> <span class="token function-variable function">test</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">p</span><span class="token punctuation">(</span><span class="token string">&#39;rejected&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">expect</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token string">&#39;rejected&#39;</span><span class="token punctuation">)</span>
        <span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span>test<span class="token punctuation">,</span> delay<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&#39;timeout with async catch done&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">done</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">timeout</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span>

    <span class="token keyword">const</span> <span class="token function-variable function">test</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> multiPromise <span class="token operator">=</span> <span class="token punctuation">[</span>
          <span class="token keyword">await</span> <span class="token function">p</span><span class="token punctuation">(</span><span class="token string">&#39;fulfilled&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token keyword">await</span> <span class="token function">p</span><span class="token punctuation">(</span><span class="token string">&#39;fulfilled&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token keyword">await</span> <span class="token function">p</span><span class="token punctuation">(</span><span class="token string">&#39;fulfilled&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> p <span class="token keyword">of</span> multiPromise<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">expect</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token string">&#39;fulfilled&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">done</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token function">setTimeout</span><span class="token punctuation">(</span>test<span class="token punctuation">,</span> delay<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u5982\u679C\u6D4B\u8BD5\u7684\u7ED3\u679C\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A <code>Promise</code>\uFF0C\u66F4\u591A\u6D4B\u8BD5\u7528\u4F8B\u53C2\u8003<a href="https://github.com/domenic/chai-as-promised/tree/master/test" target="_blank" rel="noopener noreferrer">chai-as-promised/test</a></p><div class="language-js"><pre><code><span class="token comment">// chai setup</span>
<span class="token comment">// https://github.com/domenic/chai-as-promised/blob/master/test/support/setup.js</span>
<span class="token keyword">const</span> chai <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;chai&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> chaiAsPromised <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;chai-as-promised&#39;</span><span class="token punctuation">)</span>

chai<span class="token punctuation">.</span><span class="token function">should</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
chai<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>chaiAsPromised<span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> expect<span class="token punctuation">,</span> assert <span class="token punctuation">}</span> <span class="token operator">=</span> chai

<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&#39;demo&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u53C2\u8003 \u5B98\u65B9 demo</span>
  <span class="token comment">// https://github.com/domenic/chai-as-promised/blob/master/test/should-eventually.js</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div>__VP_STATIC_END__`,9);function r(s,d,f,m,h,g){return e(),t("div",null,[n("h1",l,[p(o(s.$frontmatter.title)+" ",1),i]),k])}var b=a(u,[["render",r]]);export{w as __pageData,b as default};
