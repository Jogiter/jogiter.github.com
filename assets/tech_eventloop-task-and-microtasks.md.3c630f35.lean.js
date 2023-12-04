import{_ as t,z as p,A as n,I as o,B as e,W as s,D as c}from"./plugin-vue_export-helper.71bb0c0b.js";const w=`{"title":"eventloop,task and microtasks","description":"","frontmatter":{"title":"eventloop,task and microtasks","tags":["nodejs","translation"],"categories":["JavaScript"]},"headers":[{"level":2,"title":"\u9605\u8BFB\u94FE\u63A5","slug":"\u9605\u8BFB\u94FE\u63A5"},{"level":2,"title":"What's event loop","slug":"what-s-event-loop"},{"level":2,"title":"tests","slug":"tests"},{"level":2,"title":"task and microtask","slug":"task-and-microtask"},{"level":3,"title":"Tasks, microtasks, queues and schedules\uFF08\u8BD1\uFF09","slug":"tasks-microtasks-queues-and-schedules\uFF08\u8BD1\uFF09"}],"relativePath":"tech/eventloop-task-and-microtasks.md","lastUpdated":1701670426297}`,u={},l={id:"frontmatter-title",tabindex:"-1"},i=n("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),k=s('',4),r=n("iframe",{src:"https://player.bilibili.com/player.html?aid=37759434&cid=66380541&page=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true",style:{width:"100%","min-height":"500px"}},null,-1),d=s(`__VP_STATIC_START__<h2 id="tests" tabindex="-1">tests <a class="header-anchor" href="#tests" aria-hidden="true">#</a></h2><p>Q1:</p><div class="language-js"><pre><code><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token comment">// \u8F93\u51FA\u987A\u5E8F: 5 2 3 4 1</span>
</code></pre></div><p>Q2:</p><div class="language-js"><pre><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;script start&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> promise1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;promise1&#39;</span><span class="token punctuation">)</span>
  <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;promise1 end&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;promise2&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;settimeout&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;script end&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// \u8F93\u51FA\u987A\u5E8F: script start-&gt;promise1-&gt;promise1 end-&gt;script end-&gt;promise2-&gt;settimeout</span>
</code></pre></div><p>Q3:</p><div class="language-js"><pre><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;async1 start&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">await</span> <span class="token function">async2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;async1 end&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;async2&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;script start&#39;</span><span class="token punctuation">)</span>
<span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;script end&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// \u8F93\u51FA\u987A\u5E8F\uFF1Ascript start-&gt;async1 start-&gt;async2-&gt;script end-&gt;async1 end</span>
</code></pre></div><p>Q4:</p><div class="language-js"><pre><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">generator</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;inside before&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">yield</span> i
  <span class="token keyword">yield</span> i <span class="token operator">+</span> <span class="token number">10</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;inside after&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> gen <span class="token operator">=</span> <span class="token function">generator</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;outside before&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;outside after&#39;</span><span class="token punctuation">)</span>
gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">/**
 * outside before
 * inside before
 * 10
 * 20
 * outside after
 * inside after // \u5982\u679C\u4E0D\u52A0\u6700\u540E\u4E00\u4E2Agen.next(); \u5C31\u4E0D\u4F1A\u6709\u8FD9\u4E00\u884C
 */</span>
</code></pre></div><blockquote><p><a href="https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/33" target="_blank" rel="noopener noreferrer">Daily-Interview-Question#33</a></p></blockquote><h2 id="task-and-microtask" tabindex="-1">task and microtask <a class="header-anchor" href="#task-and-microtask" aria-hidden="true">#</a></h2><ul><li>macrotasks: <code>setTimeout</code>, <code>setInterval</code>, <code>setImmediate</code>, <code>I/O</code>, <code>UI\u6E32\u67D3</code></li><li>microtasks: <code>Promise</code>, <code>process.nextTick</code>, <code>Object.observe</code>, <code>MutationObserver</code></li></ul><p><strong>\u4ECE\u89C4\u8303\u4E2D\u7406\u89E3</strong></p><p>whatwg \u89C4\u8303\uFF1A<a href="https://html.spec.whatwg.org/multipage/webappapis.html#task-queue" target="_blank" rel="noopener noreferrer">https://html.spec.whatwg.org/multipage/webappapis.html#task-queue</a></p><ul><li>\u4E00\u4E2A\u4E8B\u4EF6\u5FAA\u73AF(event loop)\u4F1A\u6709\u4E00\u4E2A\u6216\u591A\u4E2A\u4EFB\u52A1\u961F\u5217(task queue) task queue \u5C31\u662F macrotask queue</li><li>\u6BCF\u4E00\u4E2A event loop \u90FD\u6709\u4E00\u4E2A microtask queue</li><li>task queue == macrotask queue != microtask queue</li><li>\u4E00\u4E2A\u4EFB\u52A1 task \u53EF\u4EE5\u653E\u5165 macrotask queue \u4E5F\u53EF\u4EE5\u653E\u5165 microtask queue \u4E2D</li><li>\u5F53\u4E00\u4E2A task \u88AB\u653E\u5165\u961F\u5217 queue(macro \u6216 micro) \u90A3\u8FD9\u4E2A task \u5C31\u53EF\u4EE5\u88AB\u7ACB\u5373\u6267\u884C\u4E86</li></ul><p>\u5F53\u6267\u884C\u6808(call stack)\u4E3A\u7A7A\u7684\u65F6\u5019\uFF0C\u5F00\u59CB\u4F9D\u6B21\u6267\u884C\uFF1A</p><ol><li>\u628A\u6700\u65E9\u7684\u4EFB\u52A1(task A)\u653E\u5165\u4EFB\u52A1\u961F\u5217</li><li>\u5982\u679C task A \u4E3A null (\u90A3\u4EFB\u52A1\u961F\u5217\u5C31\u662F\u7A7A)\uFF0C\u76F4\u63A5\u8DF3\u5230\u7B2C 6 \u6B65</li><li>\u5C06 currently running task \u8BBE\u7F6E\u4E3A task A</li><li>\u6267\u884C task A (\u4E5F\u5C31\u662F\u6267\u884C\u56DE\u8C03\u51FD\u6570)</li><li>\u5C06 currently running task \u8BBE\u7F6E\u4E3A null \u5E76\u79FB\u51FA task A</li><li>\u6267\u884C microtask \u961F\u5217</li></ol><ul><li>a: \u5728 microtask \u4E2D\u9009\u51FA\u6700\u65E9\u7684\u4EFB\u52A1 task X</li><li>b: \u5982\u679C task X \u4E3A null (\u90A3 microtask \u961F\u5217\u5C31\u662F\u7A7A)\uFF0C\u76F4\u63A5\u8DF3\u5230 g</li><li>c: \u5C06 currently running task \u8BBE\u7F6E\u4E3A task X</li><li>d: \u6267\u884C task X</li><li>e: \u5C06 currently running task \u8BBE\u7F6E\u4E3A null \u5E76\u79FB\u51FA task X</li><li>f: \u5728 microtask \u4E2D\u9009\u51FA\u6700\u65E9\u7684\u4EFB\u52A1 , \u8DF3\u5230 b</li><li>g: \u7ED3\u675F microtask \u961F\u5217</li></ul><ol start="7"><li>\u8DF3\u5230\u7B2C\u4E00\u6B65</li></ol><p>\u4E0A\u9762\u5C31\u7B97\u662F\u4E00\u4E2A\u7B80\u5355\u7684 event-loop \u6267\u884C\u6A21\u578B</p><h3 id="tasks-microtasks-queues-and-schedules\uFF08\u8BD1\uFF09" tabindex="-1">Tasks, microtasks, queues and schedules\uFF08\u8BD1\uFF09 <a class="header-anchor" href="#tasks-microtasks-queues-and-schedules\uFF08\u8BD1\uFF09" aria-hidden="true">#</a></h3><p><strong>demo1</strong></p><div class="language-js"><pre><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;script start&#39;</span><span class="token punctuation">)</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;setTimeout&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>

Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;promise1&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;promise2&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;script end&#39;</span><span class="token punctuation">)</span>
</code></pre></div><p>\u65E5\u5FD7\u5E94\u4EE5\u4EC0\u4E48\u987A\u5E8F\u51FA\u73B0\uFF1F</p><div class="language-js"><pre><code>script start
script end
promise1
promise2
setTimeout
</code></pre></div><p><strong>demo2</strong></p><p>HTML \u5982\u4E0B\uFF1A</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>outer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inner<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>JavaScript \u5982\u4E0B\uFF1A</p><div class="language-js"><pre><code><span class="token comment">// Let&#39;s get hold of those elements</span>
<span class="token keyword">var</span> outer <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.outer&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> inner <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.inner&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// Let&#39;s listen for attribute changes on the</span>
<span class="token comment">// outer element</span>
<span class="token keyword">new</span> <span class="token class-name">MutationObserver</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;mutate&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>outer<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">attributes</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// Here&#39;s a click listener\u2026</span>
<span class="token keyword">function</span> <span class="token function">onClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">)</span>

  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;timeout&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>

  Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;promise&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  outer<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;data-random&#39;</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u2026which we&#39;ll attach to both elements</span>
inner<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> onClick<span class="token punctuation">)</span>
outer<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> onClick<span class="token punctuation">)</span>
</code></pre></div><p>\u5F53\u70B9\u51FB <code>div.inner</code> \u65F6\u4F1A\u8F93\u51FA\u4EC0\u4E48\u65E5\u5FD7\u5462\uFF1F</p><div class="language-js"><pre><code>click
promise
mutate
click
promise
mutate
timeout
timeout
</code></pre></div><p><strong>\u7EFC\u4E0A\u6240\u8FF0\uFF1A</strong></p><ul><li><code>task</code> \u6309\u987A\u5E8F\u6267\u884C\uFF0C\u6D4F\u89C8\u5668\u53EF\u4EE5\u5728\u5B83\u4EEC\u4E4B\u95F4\u8FDB\u884C\u6E32\u67D3</li><li><code>Microtasks</code> \u6309\u987A\u5E8F\u6267\u884C\uFF0C\u5E76\u6267\u884C\uFF1A <ul><li>\u6BCF\u6B21\u56DE\u8C03\u540E\uFF0C\u53EA\u8981\u6CA1\u6709\u5176\u4ED6 <code>JavaScript</code> \u5728\u6267\u884C\u4E2D</li><li>\u5728\u6BCF\u9879 <code>task</code> \u7ED3\u675F\u65F6</li></ul></li></ul><p>\u66F4\u8BE6\u7EC6\u7684\u7406\u89E3\u8BF7<a href="https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/" target="_blank" rel="noopener noreferrer">\u9605\u8BFB\u539F\u6587</a></p>__VP_STATIC_END__`,35);function g(a,m,f,h,v,b){return c(),p("div",null,[n("h1",l,[o(e(a.$frontmatter.title)+" ",1),i]),k,r,d])}var _=t(u,[["render",g]]);export{w as __pageData,_ as default};
