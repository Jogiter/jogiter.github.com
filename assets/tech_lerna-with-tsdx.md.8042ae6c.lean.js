import{_ as a,z as s,A as n,I as t,B as o,W as p,D as l}from"./plugin-vue_export-helper.71bb0c0b.js";const x='{"title":"lerna with tsdx","description":"","frontmatter":{"title":"lerna with tsdx"},"headers":[{"level":2,"title":"\u4F7F\u7528 lerna \u521B\u5EFA Mono Project","slug":"\u4F7F\u7528-lerna-\u521B\u5EFA-mono-project"},{"level":2,"title":"tsdx","slug":"tsdx"}],"relativePath":"tech/lerna-with-tsdx.md","lastUpdated":1701670426297}',c={},r={id:"frontmatter-title",tabindex:"-1"},i=n("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=p(`__VP_STATIC_START__<p><div class="table-of-contents"><ul><li><a href="#\u4F7F\u7528-lerna-\u521B\u5EFA-mono-project">\u4F7F\u7528 lerna \u521B\u5EFA Mono Project</a></li><li><a href="#tsdx">tsdx</a></li></ul></div></p><h2 id="\u4F7F\u7528-lerna-\u521B\u5EFA-mono-project" tabindex="-1">\u4F7F\u7528 lerna \u521B\u5EFA Mono Project <a class="header-anchor" href="#\u4F7F\u7528-lerna-\u521B\u5EFA-mono-project" aria-hidden="true">#</a></h2><div class="language-"><pre><code># \u521B\u5EFA\u9879\u76EE
lerna init

# \u521B\u5EFA\u5305
cd packages
tsdx create packageName --template basic

# \u4F7F\u7528 typedoc \u751F\u6210\u6587\u6863
typedoc --theme minimal

# \u7F16\u8BD1\u6240\u6709\u7684\u5305
lerna run build

# \u6267\u884C @scopeName/packageName \u5305\u4E0B\u9762\u7684 build \u547D\u4EE4
lerna run build --scope @scopeName/packageName

# \u6DFB\u52A0 devDependencies \u4F9D\u8D56
lerna add module-1 packages/prefix-* --dev
</code></pre></div><h2 id="tsdx" tabindex="-1">tsdx <a class="header-anchor" href="#tsdx" aria-hidden="true">#</a></h2><p>Note: this works on tsdx@0.13.3 or lower version. tsdx@14.x may be blocked</p><blockquote><p><a href="https://github.com/formium/tsdx/issues/6" target="_blank" rel="noopener noreferrer">tsdx#6</a></p></blockquote><p><strong>tsdx build does not bundle the dependencies?</strong></p><p>Currently createRollupConfig.ts does the following:</p><ul><li>Marks all imports as external if they are not relative / are absolute (seen here). <ul><li>The intention is so that rollup doesn&#39;t bundle external dependencies. It assumes they&#39;re available in the environment.</li></ul></li><li>Only uses the commonjs rollup plugin if the umd format is used (seen here). <ul><li>The commonjs plugin is needed because there&#39;s a chance your dependencies are not written in es6 and need to be converted so you can bundle them.</li></ul></li></ul><p>Both of these become an issue for this use case. Firstly we need all external dependencies bundled. Secondly a number of our bundles are probably not written in es6 and we&#39;ll need this conversion.</p><p>My work around is fairly simple, but there&#39;s potential implications I don&#39;t currently full understand:</p><p>Create a <code>tsdx.config.js</code> (in your project root):</p><div class="language-js"><pre><code><span class="token keyword">const</span> commonjs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@rollup/plugin-commonjs&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">rollup</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Delete the external config property.</span>
    <span class="token comment">// This essentially means we&#39;re allowing all packages to be bundled.</span>
    <span class="token keyword">delete</span> config<span class="token punctuation">.</span>external

    <span class="token comment">// Manually use the commonjs plugin.</span>
    <span class="token comment">// This is opposed to specifying umd as the format as there&#39;s more implications that, again, are unclear.</span>
    config<span class="token punctuation">.</span>plugins<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">commonjs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> config
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>You can then call yarn build and use the resulting dist/ as your lambda. When building expect a ton of warnings around dependencies, e.g.</p><p><strong>\u6253\u5305\u5904\u7406</strong></p><p><code>package.json</code> \u4E2D\u4FEE\u6539 <code>build</code> \u547D\u4EE4\uFF0C\u6DFB\u52A0 <code>format</code> \u548C <code>name</code> \u6307\u5B9A\u6700\u7EC8\u7248\u672C\u3002</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tsdx build --format umd --name ZegoRoom&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>__VP_STATIC_END__`,17);function u(e,m,h,k,g,f){return l(),s("div",null,[n("h1",r,[t(o(e.$frontmatter.title)+" ",1),i]),d])}var _=a(c,[["render",u]]);export{x as __pageData,_ as default};
