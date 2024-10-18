import{_ as n,c as a,a as p,o as e}from"./app-BJ3_yarB.js";const t={};function o(l,s){return e(),a("div",null,s[0]||(s[0]=[p(`<h2 id="require-context" tabindex="-1"><a class="header-anchor" href="#require-context"><span>require.context()</span></a></h2><ol><li>场景：如果页面上需要引入多个组件原始写法</li></ol><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">import</span> titleCom <span class="token keyword">from</span> <span class="token string">&#39;@/components/home/titleCom&#39;</span></span>
<span class="line"><span class="token keyword">import</span> bannerCom <span class="token keyword">from</span> <span class="token string">&#39;@/components/home/bannerCom&#39;</span></span>
<span class="line"><span class="token keyword">import</span> cellCom <span class="token keyword">from</span> <span class="token string">&#39;@/components/home/cellCom&#39;</span></span>
<span class="line"><span class="token literal-property property">components</span><span class="token operator">:</span><span class="token punctuation">{</span>titleCom<span class="token punctuation">,</span>bannerCom<span class="token punctuation">,</span>cellCom<span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>这样大量重复的代码，频繁写法，可以利用require.context优化</li></ol><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> files <span class="token operator">=</span> require<span class="token punctuation">.</span><span class="token function">context</span><span class="token punctuation">(</span><span class="token string">&#39;@/components/home&#39;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.vue$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> modules <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">files<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> name <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">basename</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token string">&#39;.vue&#39;</span><span class="token punctuation">)</span></span>
<span class="line">  modules<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">files</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">.</span>default <span class="token operator">||</span> <span class="token function">files</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token literal-property property">components</span><span class="token operator">:</span>modules</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>API方法</li></ol><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">实际上是 webpack 的方法<span class="token punctuation">,</span>vue 工程一般基于 webpack<span class="token punctuation">,</span>所以可以使用</span>
<span class="line">require<span class="token punctuation">.</span><span class="token function">context</span><span class="token punctuation">(</span>directory<span class="token punctuation">,</span>useSubdirectories<span class="token punctuation">,</span>regExp<span class="token punctuation">)</span></span>
<span class="line"><span class="token literal-property property">接收三个参数</span><span class="token operator">:</span></span>
<span class="line">directory：说明需要检索的目录</span>
<span class="line">useSubdirectories：是否检索子目录</span>
<span class="line"><span class="token literal-property property">regExp</span><span class="token operator">:</span> 匹配文件的正则表达式<span class="token punctuation">,</span>一般是文件名</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组件通信" tabindex="-1"><a class="header-anchor" href="#组件通信"><span>组件通信</span></a></h2><h3 id="props写法" tabindex="-1"><a class="header-anchor" href="#props写法"><span>props写法</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token comment">// 数组:不建议使用</span></span>
<span class="line"><span class="token literal-property property">props</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 对象</span></span>
<span class="line"><span class="token literal-property property">props</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line"> <span class="token literal-property property">inpVal</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">type</span><span class="token operator">:</span>Number<span class="token punctuation">,</span> <span class="token comment">//传入值限定类型</span></span>
<span class="line">  <span class="token comment">// type 值可为String,Number,Boolean,Array,Object,Date,Function,Symbol</span></span>
<span class="line">  <span class="token comment">// type 还可以是一个自定义的构造函数，并且通过 instanceof 来进行检查确认</span></span>
<span class="line">  <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//是否必传</span></span>
<span class="line">  <span class="token keyword">default</span><span class="token operator">:</span><span class="token number">200</span><span class="token punctuation">,</span>  <span class="token comment">//默认值,对象或数组默认值必须从一个工厂函数获取如 default:()=&gt;[]</span></span>
<span class="line">  <span class="token literal-property property">validator</span><span class="token operator">:</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 这个值必须匹配下列字符串中的一个</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string">&#39;success&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;warning&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;danger&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="emit" tabindex="-1"><a class="header-anchor" href="#emit"><span>$emit</span></a></h3><p>子级组件触发父组件方法</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token comment">// 父组件</span></span>
<span class="line"><span class="token operator">&lt;</span>home @title<span class="token operator">=</span><span class="token string">&quot;title&quot;</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token comment">// 子组件</span></span>
<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;title&#39;</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">&#39;这是title&#39;</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="attrs和listeners" tabindex="-1"><a class="header-anchor" href="#attrs和listeners"><span>attrs和listeners</span></a></h3><h4 id="attrs" tabindex="-1"><a class="header-anchor" href="#attrs"><span>attrs</span></a></h4><p>如果父传子有很多值,那么在子组件需要定义多个props解决:attrs获取子传父中未在 props 定义的值</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token comment">// 父组件</span></span>
<span class="line"><span class="token operator">&lt;</span>home title<span class="token operator">=</span><span class="token string">&quot;这是标题&quot;</span> width<span class="token operator">=</span><span class="token string">&quot;80&quot;</span> height<span class="token operator">=</span><span class="token string">&quot;80&quot;</span> imgUrl<span class="token operator">=</span><span class="token string">&quot;imgUrl&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 子组件</span></span>
<span class="line"><span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$attrs<span class="token punctuation">)</span> <span class="token comment">//{title: &quot;这是标题&quot;, width: &quot;80&quot;, height: &quot;80&quot;, imgUrl: &quot;imgUrl&quot;}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果定义props接收啦，打印的就是其余的props属性</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span></span>
<span class="line">    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$attrs<span class="token punctuation">)</span> <span class="token comment">//{title: &quot;这是标题&quot;, height: &quot;80&quot;, imgUrl: &quot;imgUrl&quot;}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="listeners" tabindex="-1"><a class="header-anchor" href="#listeners"><span>listeners</span></a></h4><p>子组件需要调用父组件的方法解决:父组件的方法可以通过v−on=&quot;listeners&quot; 传入内部组件——在创建更高层次的组件时非常有用</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token comment">// 父组件</span></span>
<span class="line"><span class="token operator">&lt;</span>home @change<span class="token operator">=</span><span class="token string">&quot;change&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 子组件</span></span>
<span class="line"><span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$listeners<span class="token punctuation">)</span> <span class="token comment">//即可拿到 change 事件</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="render-函数" tabindex="-1"><a class="header-anchor" href="#render-函数"><span>render 函数</span></a></h2><blockquote><p>有的代码在template里面会重复很多，可以使用render函数优化 未优化</p></blockquote><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>div v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;level === 1&quot;</span><span class="token operator">&gt;</span> <span class="token operator">&lt;</span>slot<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">&gt;</span> <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>p v<span class="token operator">-</span><span class="token keyword">else</span><span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;level === 2&quot;</span><span class="token operator">&gt;</span> <span class="token operator">&lt;</span>slot<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">&gt;</span> <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>h1 v<span class="token operator">-</span><span class="token keyword">else</span><span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;level === 3&quot;</span><span class="token operator">&gt;</span> <span class="token operator">&lt;</span>slot<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">&gt;</span> <span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>h2 v<span class="token operator">-</span><span class="token keyword">else</span><span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;level === 4&quot;</span><span class="token operator">&gt;</span> <span class="token operator">&lt;</span>slot<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">&gt;</span> <span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>strong v<span class="token operator">-</span><span class="token keyword">else</span><span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;level === 5&quot;</span><span class="token operator">&gt;</span> <span class="token operator">&lt;</span>slot<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">&gt;</span> <span class="token operator">&lt;</span><span class="token operator">/</span>stong<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>textarea v<span class="token operator">-</span><span class="token keyword">else</span><span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;level === 6&quot;</span><span class="token operator">&gt;</span> <span class="token operator">&lt;</span>slot<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">&gt;</span> <span class="token operator">&lt;</span><span class="token operator">/</span>textarea<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>优化</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token comment">// 优化版,利用 render 函数减小了代码重复率</span></span>
<span class="line"><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>child <span class="token operator">:</span>level<span class="token operator">=</span><span class="token string">&quot;level&quot;</span><span class="token operator">&gt;</span>Hello world<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>child<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">&#39;text/javascript&#39;</span><span class="token operator">&gt;</span></span>
<span class="line">  <span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span></span>
<span class="line">  Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;child&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> tag <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;p&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;strong&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;h1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;h2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;textarea&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>level<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span>tag<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$slots<span class="token punctuation">.</span>default<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">level</span><span class="token operator">:</span> <span class="token punctuation">{</span>  <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>  <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span>  <span class="token punctuation">}</span> </span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span>   </span>
<span class="line">  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;hehe&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">level</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27)]))}const i=n(t,[["render",o],["__file","vuekaifajiqiao.html.vue"]]),r=JSON.parse('{"path":"/blogs/VUE2/vuekaifajiqiao.html","title":"vue开发技巧","lang":"en-US","frontmatter":{"title":"vue开发技巧","date":"2022-7-11","autoSort":0,"tags":["VUE2"],"categories":["VUE2"]},"headers":[{"level":2,"title":"require.context()","slug":"require-context","link":"#require-context","children":[]},{"level":2,"title":"组件通信","slug":"组件通信","link":"#组件通信","children":[{"level":3,"title":"props写法","slug":"props写法","link":"#props写法","children":[]},{"level":3,"title":"$emit","slug":"emit","link":"#emit","children":[]},{"level":3,"title":"attrs和listeners","slug":"attrs和listeners","link":"#attrs和listeners","children":[]}]},{"level":2,"title":"render 函数","slug":"render-函数","link":"#render-函数","children":[]}],"git":{"createdTime":1728696783000,"updatedTime":1728696783000,"contributors":[{"name":"刘政杨","email":"314781333@qq.com","commits":1}]},"filePathRelative":"blogs/VUE2/vue开发技巧.md"}');export{i as comp,r as data};
