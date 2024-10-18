import{_ as s,c as a,a as p,o as t}from"./app-BJ3_yarB.js";const e={};function l(o,n){return t(),a("div",null,n[0]||(n[0]=[p(`<h2 id="写法" tabindex="-1"><a class="header-anchor" href="#写法"><span>写法</span></a></h2><h3 id="命名函数" tabindex="-1"><a class="header-anchor" href="#命名函数"><span>命名函数</span></a></h3><p>函数中x和y参数都是string类型，小括号后面的string代表的是该函数的返回值也是string类型</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">x</span><span class="token operator">:</span>string<span class="token punctuation">,</span><span class="token literal-property property">y</span><span class="token operator">:</span>string</span><span class="token punctuation">)</span><span class="token operator">:</span>string<span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> x<span class="token operator">+</span>y</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token literal-property property">result</span><span class="token operator">:</span>string<span class="token operator">=</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;路飞&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;索隆&#39;</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="匿名函数" tabindex="-1"><a class="header-anchor" href="#匿名函数"><span>匿名函数</span></a></h3><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">const</span> <span class="token function-variable function">result</span><span class="token operator">=</span><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>y<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> x<span class="token operator">+</span>y</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">result</span><span class="token punctuation">(</span><span class="token string">&#39;路飞&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;索隆&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="完整写法" tabindex="-1"><a class="header-anchor" href="#完整写法"><span>完整写法</span></a></h3><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">const</span> <span class="token function-variable function">result</span><span class="token operator">:</span><span class="token punctuation">(</span>x<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>y<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token function-variable function">number</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span>x<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span>y<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> x<span class="token operator">+</span>y</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">result</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="可选参数和默认参数" tabindex="-1"><a class="header-anchor" href="#可选参数和默认参数"><span>可选参数和默认参数</span></a></h2><p>可选参数：函数在声明时候，内部的阐述使用？进行修饰，表示这个参数可传可不传 默认参数：函数在声明的时候，函数内部参数具有默认值，此时这个参数叫做默认参数</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">fullName</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span>firstName<span class="token operator">:</span><span class="token builtin">string</span><span class="token operator">=</span><span class="token string">&#39;罗罗诺亚&#39;</span><span class="token punctuation">,</span>lastName<span class="token operator">?</span><span class="token operator">:</span>lastName<span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span><span class="token punctuation">(</span>lastName<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> fistName<span class="token operator">+</span><span class="token string">&quot;-&quot;</span><span class="token operator">+</span>lastName</span>
<span class="line">    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> fistName</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="剩余参数" tabindex="-1"><a class="header-anchor" href="#剩余参数"><span>剩余参数</span></a></h2><p>剩余参数是放在函数声明的时候所有参数的最后</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>str<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>str2<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span><span class="token operator">...</span>args<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span></span>
<span class="line">  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span></span>
<span class="line">  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;4&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;5&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数重载" tabindex="-1"><a class="header-anchor" href="#函数重载"><span>函数重载</span></a></h2><p>函数名字相同，参数的类型或者个数不同</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token comment">// 函数重载</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>y<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">string</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span>y<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">number</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 函数声明</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token operator">:</span><span class="token builtin">string</span><span class="token operator">|</span><span class="token builtin">number</span><span class="token punctuation">,</span>y<span class="token operator">:</span><span class="token builtin">string</span><span class="token operator">|</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">string</span><span class="token operator">|</span><span class="token builtin">number</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> x <span class="token operator">===</span><span class="token string">&#39;string&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> y <span class="token operator">===</span><span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> x<span class="token operator">+</span>y</span>
<span class="line">  <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> x <span class="token operator">===</span><span class="token string">&#39;number&#39;</span><span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> y <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> x<span class="token operator">+</span>y</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// 正确</span></span>
<span class="line"><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 错误</span></span>
<span class="line"><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17)]))}const i=s(e,[["render",l],["__file","hanshu.html.vue"]]),r=JSON.parse('{"path":"/blogs/TypeScript/hanshu.html","title":"函数","lang":"en-US","frontmatter":{"title":"函数","date":"2022-9-26","autoSort":9,"tags":["TypeScript"],"categories":["TypeScript"]},"headers":[{"level":2,"title":"写法","slug":"写法","link":"#写法","children":[{"level":3,"title":"命名函数","slug":"命名函数","link":"#命名函数","children":[]},{"level":3,"title":"匿名函数","slug":"匿名函数","link":"#匿名函数","children":[]},{"level":3,"title":"完整写法","slug":"完整写法","link":"#完整写法","children":[]}]},{"level":2,"title":"可选参数和默认参数","slug":"可选参数和默认参数","link":"#可选参数和默认参数","children":[]},{"level":2,"title":"剩余参数","slug":"剩余参数","link":"#剩余参数","children":[]},{"level":2,"title":"函数重载","slug":"函数重载","link":"#函数重载","children":[]}],"git":{"createdTime":1728696783000,"updatedTime":1728696783000,"contributors":[{"name":"刘政杨","email":"314781333@qq.com","commits":1}]},"filePathRelative":"blogs/TypeScript/函数.md"}');export{i as comp,r as data};
