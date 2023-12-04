import{_ as a,z as t,A as n,I as p,B as o,W as e,D as c}from"./plugin-vue_export-helper.71bb0c0b.js";const v='{"title":"vue2 + typescript + composition-api \u5E38\u89C1\u95EE\u9898","description":"","frontmatter":{"title":"vue2 + typescript + composition-api \u5E38\u89C1\u95EE\u9898"},"headers":[{"level":2,"title":"\u73AF\u5883","slug":"\u73AF\u5883"},{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":2,"title":"setup","slug":"setup"},{"level":2,"title":"router & route","slug":"router-route"},{"level":2,"title":"$axios","slug":"axios"},{"level":2,"title":"$loading","slug":"loading"},{"level":2,"title":"vuex","slug":"vuex"},{"level":3,"title":"mapState / mapMutations / mapActions / mapGetters","slug":"mapstate-mapmutations-mapactions-mapgetters"},{"level":2,"title":"refs","slug":"refs"},{"level":2,"title":"jsx in typescript","slug":"jsx-in-typescript"},{"level":2,"title":"vuex types","slug":"vuex-types"},{"level":2,"title":"provide/inject(\u54CD\u5E94\u6027)","slug":"provide-inject-\u54CD\u5E94\u6027"},{"level":2,"title":"readings","slug":"readings"}],"relativePath":"tech/vue2-composition-api-faq.md","lastUpdated":1701670426297}',u={},l={id:"frontmatter-title",tabindex:"-1"},i=n("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),k=e(`__VP_STATIC_START__<p><div class="table-of-contents"><ul><li><a href="#\u73AF\u5883">\u73AF\u5883</a></li><li><a href="#\u5B89\u88C5">\u5B89\u88C5</a></li><li><a href="#setup">setup</a></li><li><a href="#router-route">router &amp; route</a></li><li><a href="#axios">$axios</a></li><li><a href="#loading">$loading</a></li><li><a href="#vuex">vuex</a><ul><li><a href="#mapstate-mapmutations-mapactions-mapgetters">mapState / mapMutations / mapActions / mapGetters</a></li></ul></li><li><a href="#refs">refs</a></li><li><a href="#jsx-in-typescript">jsx in typescript</a></li><li><a href="#vuex-types">vuex types</a></li><li><a href="#provide-inject-\u54CD\u5E94\u6027">provide/inject(\u54CD\u5E94\u6027)</a></li><li><a href="#readings">readings</a></li></ul></div></p><div class="danger custom-block"><p class="custom-block-title">WARNING</p><p>\u4F7F\u7528\u9650\u5236 <a href="https://github.com/vuejs/composition-api#limitations" target="_blank" rel="noopener noreferrer">composition-api#limitations</a></p></div><h2 id="\u73AF\u5883" tabindex="-1">\u73AF\u5883 <a class="header-anchor" href="#\u73AF\u5883" aria-hidden="true">#</a></h2><ul><li>nuxt@2.15.3</li><li>typescript@4.2.4</li><li>vue@2.6.12</li></ul><h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><p>\u5B89\u88C5 <code>@nuxtjs/composition-api</code>:</p><blockquote><p>yarn add @nuxtjs/composition-api</p></blockquote><p>\u914D\u7F6E <code>nuxt.config.js</code> \u5F00\u542F\u6A21\u5757</p><div class="language-typescript"><pre><code><span class="token punctuation">{</span>
  buildModules<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@nuxtjs/composition-api/module&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="setup" tabindex="-1">setup <a class="header-anchor" href="#setup" aria-hidden="true">#</a></h2><div class="language-typescript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  defineComponent<span class="token punctuation">,</span>
  reactive<span class="token punctuation">,</span>
  onMounted<span class="token punctuation">,</span>
  useRoute<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nuxtjs/composition-api&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="router-route" tabindex="-1">router &amp; route <a class="header-anchor" href="#router-route" aria-hidden="true">#</a></h2><blockquote><p><a href="https://composition-api.nuxtjs.org/packages/routes" target="_blank" rel="noopener noreferrer">@nuxtjs/composition-api#routes</a></p></blockquote><div class="language-typescript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> useRoute<span class="token punctuation">,</span> useRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nuxtjs/composition-api&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> query <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value
    <span class="token keyword">const</span> id <span class="token operator">=</span> query<span class="token punctuation">.</span>id <span class="token keyword">as</span> <span class="token builtin">string</span>

    <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="axios" tabindex="-1">$axios <a class="header-anchor" href="#axios" aria-hidden="true">#</a></h2><blockquote><p><a href="https://axios.nuxtjs.org/setup#typescript" target="_blank" rel="noopener noreferrer">@nuxtjs/axios#typescript</a></p></blockquote><p>\u914D\u7F6E tsconfig.json</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;types&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@nuxt/types&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;@nuxtjs/axios&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-typescript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> useContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nuxtjs/composition-api&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> $axios <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="loading" tabindex="-1">$loading <a class="header-anchor" href="#loading" aria-hidden="true">#</a></h2><div class="language-typescript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  defineComponent<span class="token punctuation">,</span>
  useRoute<span class="token punctuation">,</span>
  wrapProperty<span class="token punctuation">,</span>
  useContext<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nuxtjs/composition-api&#39;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> ElLoadingComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-ui/types/loading&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> $axios <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> query <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value
    <span class="token keyword">const</span> id <span class="token operator">=</span> query<span class="token punctuation">.</span>id <span class="token keyword">as</span> <span class="token builtin">string</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token keyword">const</span> <span class="token function-variable function">fetchApi</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> $loading <span class="token operator">=</span> <span class="token function">wrapProperty</span><span class="token punctuation">(</span><span class="token string">&#39;$loading&#39;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">let</span> loading<span class="token operator">!</span><span class="token operator">:</span> ElLoadingComponent
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        loading <span class="token operator">=</span> <span class="token function">$loading</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
        data <span class="token operator">=</span> <span class="token keyword">await</span> $axios<span class="token punctuation">.</span><span class="token function">$get</span><span class="token punctuation">(</span><span class="token constant">API</span><span class="token punctuation">.</span><span class="token function">apiDetail</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
        loading<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token function">fetchApi</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      data<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><a href="https://composition-api.nuxtjs.org/API/wrap" target="_blank" rel="noopener noreferrer">wrapProperty</a> \u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u4E00\u4E2A\u5E03\u5C14\u503C\uFF0C\u6307\u793A\u8F85\u52A9\u51FD\u6570\u662F\u5426\u5E94\u8BE5\u8FD4\u56DE\u4E00\u4E2A\u8BA1\u7B97\u5C5E\u6027\uFF0C\u5B83\u9ED8\u8BA4\u4E3A true</p></div><h2 id="vuex" tabindex="-1">vuex <a class="header-anchor" href="#vuex" aria-hidden="true">#</a></h2><div class="language-typescript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> useStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nuxtjs/composition-api&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="mapstate-mapmutations-mapactions-mapgetters" tabindex="-1">mapState / mapMutations / mapActions / mapGetters <a class="header-anchor" href="#mapstate-mapmutations-mapactions-mapgetters" aria-hidden="true">#</a></h3><p>\u65B9\u5F0F\u4E00\uFF1A<a href="https://next.vuex.vuejs.org/guide/composition-api.html#accessing-mutations-and-actions" target="_blank" rel="noopener noreferrer">vuex#accessing-mutations-and-actions</a></p><div class="language-typescript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> useStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nuxtjs/composition-api&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> <span class="token function-variable function">fooMutation</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
      store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;namespace/fooMutation&#39;</span><span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">)</span>
    <span class="token comment">// call fooMutation with args</span>
    <span class="token comment">// fooMutation(&#39;foo&#39;, &#39;bar&#39;)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token comment">// access a mutation</span>
      <span class="token function-variable function">increment</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;increment&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

      <span class="token comment">// access an action</span>
      <span class="token function-variable function">asyncIncrement</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;asyncIncrement&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u65B9\u5F0F\u4E8C\uFF1A<a href="https://github.com/greenpress/vuex-composition-helpers" target="_blank" rel="noopener noreferrer">vuex-composition-helpers</a> (\u5C01\u88C5\u4E86 store \u7684 state/commit/dispath)</p><div class="language-typescript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  useNamespacedMutations<span class="token punctuation">,</span>
  useNamespacedState<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex-composition-helpers&#39;</span>

<span class="token keyword">const</span> namespace <span class="token operator">=</span> <span class="token string">&#39;interface-setting&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> code <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useNamespacedState</span><span class="token punctuation">(</span>namespace<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;code&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> <span class="token punctuation">{</span> updateCode <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useNamespacedMutations</span><span class="token punctuation">(</span>namespace<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;updateCode&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      code<span class="token punctuation">,</span>
      updateCode<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="refs" tabindex="-1">refs <a class="header-anchor" href="#refs" aria-hidden="true">#</a></h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-form</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialogFormRef<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialogForm<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ... --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-form</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onDialogFormSubmit<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u786E \u5B9A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> ref<span class="token punctuation">,</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nuxtjs/composition-api&#39;</span>
  <span class="token keyword">import</span> type <span class="token punctuation">{</span> ElForm <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-ui/types/form&#39;</span>

  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> dialogForm <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    	<span class="token keyword">const</span> dialogFormRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">as</span> ElForm<span class="token punctuation">)</span>

      <span class="token keyword">const</span> <span class="token function-variable function">onDialogFormSubmit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        dialogFormRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token parameter">valid</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>valid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// do with dialogForm</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        dialogForm<span class="token punctuation">,</span>
      	dialogFormRef<span class="token punctuation">,</span>
        onDialogFormSubmit<span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="jsx-in-typescript" tabindex="-1">jsx in typescript <a class="header-anchor" href="#jsx-in-typescript" aria-hidden="true">#</a></h2><p>way 1: replace jsx with vnode</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table</span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tableData<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 100%</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span>
      <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>col in columns<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>col.prop<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ ...col }<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-table</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> ref<span class="token punctuation">,</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nuxtjs/composition-api&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> h <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vue/composition-api&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">tableData</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">&#39;2016-05-03&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u738B\u5C0F\u864E&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">&#39;\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">columns</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;date&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u65E5\u671F&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u59D3\u540D&#39;</span><span class="token punctuation">,</span>
          <span class="token function">formatter</span><span class="token punctuation">(</span><span class="token parameter">row<span class="token punctuation">,</span> column<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// avoid writing jsx in typescript. instead of return a vdom</span>
            <span class="token keyword">return</span> <span class="token punctuation">[</span>
              <span class="token function">h</span><span class="token punctuation">(</span>
                ElementPlus<span class="token punctuation">.</span>ElButton<span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;success&#39;</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;el-icon-search&#39;</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token string">&#39;\u641C\u7D22&#39;</span>
              <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;address&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u5730\u5740&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p><a href="https://codepen.io/Jogiter/pen/JjWrdNP?editors=0010" target="_blank" rel="noopener noreferrer">demo</a></p><p>way2: (\u63A8\u8350)</p><ol><li>\u521B\u5EFA jsx.d.ts</li></ol><div class="language-typescript"><pre><code><span class="token keyword">import</span> Vue<span class="token punctuation">,</span> <span class="token punctuation">{</span> VNode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">declare</span> global <span class="token punctuation">{</span>
  <span class="token keyword">namespace</span> <span class="token constant">JSX</span> <span class="token punctuation">{</span>
    <span class="token keyword">interface</span> <span class="token class-name">Element</span> <span class="token keyword">extends</span> <span class="token class-name">VNode</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">interface</span> <span class="token class-name">ElementClass</span> <span class="token keyword">extends</span> <span class="token class-name">Vue</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">interface</span> <span class="token class-name">ElementAttributesProperty</span> <span class="token punctuation">{</span>
      $props<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">interface</span> <span class="token class-name">IntrinsicElements</span> <span class="token punctuation">{</span>
      <span class="token punctuation">[</span>elemName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ol start="2"><li>\u66F4\u65B0 <code>tsconfig.json</code></li></ol><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;jsx&quot;</span><span class="token operator">:</span> <span class="token string">&quot;preserve&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ol start="3"><li>code</li></ol><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table</span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tableData<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 100%</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>col in columns<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>col.prop<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{...col}<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-table</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tsx<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> ref<span class="token punctuation">,</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nuxtjs/composition-api&#39;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">tableData</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">&#39;2016-05-03&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u738B\u5C0F\u864E&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">&#39;\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">columns</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;date&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u65E5\u671F&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u59D3\u540D&#39;</span><span class="token punctuation">,</span>
            <span class="token function">formatter</span><span class="token punctuation">(</span><span class="token parameter">row<span class="token punctuation">,</span> column<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token keyword">return</span> <span class="token operator">&lt;</span>ElButton type<span class="token operator">=</span><span class="token punctuation">{</span>row<span class="token punctuation">.</span>type<span class="token punctuation">}</span> icon<span class="token operator">=</span><span class="token punctuation">{</span>row<span class="token punctuation">.</span>icon<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>ElButton<span class="token operator">&gt;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;address&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u5730\u5740&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="vuex-types" tabindex="-1">vuex types <a class="header-anchor" href="#vuex-types" aria-hidden="true">#</a></h2><blockquote><p>vuex@3.6.2 \u652F\u6301 vue2\u3002\u5982\u679C\u4F7F\u7528 vue3\uFF0C\u8BF7\u4F7F\u7528 vuex@4</p></blockquote><div class="language-typescript"><pre><code><span class="token comment">// Getter, Plugin \u7B49\u53C2\u89C1 vuex/types</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> MutationTree<span class="token punctuation">,</span> ActionTree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

<span class="token keyword">const</span> <span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">state</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  stateA<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
  stateB<span class="token operator">:</span> <span class="token punctuation">{</span>
    foo<span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  stateC<span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">type</span> <span class="token class-name">State</span> <span class="token operator">=</span> ReturnType<span class="token operator">&lt;</span><span class="token keyword">typeof</span> state<span class="token operator">&gt;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> mutations<span class="token operator">:</span> MutationTree<span class="token operator">&lt;</span>State<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">updateA</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> payload<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    state<span class="token punctuation">.</span>stateA <span class="token operator">=</span> payload
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">updateB</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> payload<span class="token operator">:</span> <span class="token punctuation">{</span>foo<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    state<span class="token punctuation">.</span>stateB <span class="token operator">=</span> payload
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> actions<span class="token operator">:</span> ActionTree<span class="token operator">&lt;</span>State<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token keyword">async</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">{</span> commit <span class="token punctuation">}</span><span class="token punctuation">,</span> payload<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> json <span class="token operator">=</span> <span class="token keyword">await</span> $axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token constant">API</span><span class="token punctuation">.</span>login<span class="token punctuation">,</span> payload<span class="token punctuation">)</span>
    <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;updateB&#39;</span><span class="token punctuation">,</span> json<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="provide-inject-\u54CD\u5E94\u6027" tabindex="-1">provide/inject(\u54CD\u5E94\u6027) <a class="header-anchor" href="#provide-inject-\u54CD\u5E94\u6027" aria-hidden="true">#</a></h2><p>\u7236\u7EC4\u4EF6\u4E2D\u63D0\u4F9B\u54CD\u5E94\u5F0F\u7684\u6CE8\u5165</p><div class="language-typescript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> provide<span class="token punctuation">,</span> toRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nuxtjs/composition-api&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//</span>
    <span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&#39;height&#39;</span><span class="token punctuation">,</span> <span class="token function">toRef</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> <span class="token string">&#39;height&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5B50\u7EC4\u4EF6\u4E2D\u76D1\u542C\u54CD\u5E94\u5F0F\u7684\u6CE8\u5165</p><div class="language-typescript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> inject<span class="token punctuation">,</span> watch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nuxtjs/composition-api&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">watch</span><span class="token punctuation">(</span>
      <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&#39;height&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
      <span class="token punctuation">(</span>height<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// do something with height</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        immediate<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p><a href="https://v3.cn.vuejs.org/guide/composition-api-provide-inject.html#%E8%AE%BE%E6%83%B3%E5%9C%BA%E6%99%AF" target="_blank" rel="noopener noreferrer">Provide / Inject</a></p><h2 id="readings" tabindex="-1">readings <a class="header-anchor" href="#readings" aria-hidden="true">#</a></h2><ul><li><a href="https://composition-api.nuxtjs.org/" target="_blank" rel="noopener noreferrer">nuxt-community/composition-api</a></li><li><a href="https://axios.nuxtjs.org/setup" target="_blank" rel="noopener noreferrer">@nuxtjs/axios</a></li><li><a href="https://v3.vuejs.org/guide/composition-api-introduction.html" target="_blank" rel="noopener noreferrer">vue/composition-api</a></li></ul>__VP_STATIC_END__`,53);function r(s,d,g,m,y,f){return c(),t("div",null,[n("h1",l,[p(o(s.$frontmatter.title)+" ",1),i]),k])}var w=a(u,[["render",r]]);export{v as __pageData,w as default};
