import{_ as s,c as a,a as p,o as t}from"./app-BJ3_yarB.js";const e={};function o(l,n){return t(),a("div",null,n[0]||(n[0]=[p(`<blockquote><p>选中坐标的时候,让坐标下方有一个闪烁图片效果</p></blockquote><p>在点击事件中加入添加闪烁图片函数</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token comment">// 给全图绑定事件</span></span>
<span class="line"><span class="token keyword">const</span> handler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>ScreenSpaceEventHandler</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>canvas<span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 点击事件</span></span>
<span class="line">handler<span class="token punctuation">.</span><span class="token function">setInputAction</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">click</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 添加弹框特效(红色选中波纹特效)</span></span>
<span class="line">  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">addCircleRippleInit</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>viewer<span class="token punctuation">,</span> lon2<span class="token punctuation">,</span> lat2<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>闪烁图片函数，选中效果</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token comment">// 选中效果</span></span>
<span class="line"><span class="token function">addCircleRippleInit</span><span class="token punctuation">(</span><span class="token parameter">viewer<span class="token punctuation">,</span> long<span class="token punctuation">,</span> lat<span class="token punctuation">,</span> height</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;abcd-111&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;abcd-222&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 2个实现圆弧效果的实体id，后面对这2个实体的操作都是通过这个id来的</span></span>
<span class="line">    <span class="token literal-property property">lon</span><span class="token operator">:</span> long <span class="token operator">*</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// 经度 就不多说了</span></span>
<span class="line">    <span class="token literal-property property">lat</span><span class="token operator">:</span> lat <span class="token operator">*</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// 维度 也不多说了</span></span>
<span class="line">    <span class="token literal-property property">height</span><span class="token operator">:</span> height<span class="token punctuation">,</span> <span class="token comment">// 因为是3d地图，地图上的实体会有高度属性，可以设置实体的高度</span></span>
<span class="line">    <span class="token literal-property property">maxR</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token comment">// 圆弧的最大半径</span></span>
<span class="line">    <span class="token literal-property property">minR</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 最好为0</span></span>
<span class="line">    <span class="token literal-property property">deviationR</span><span class="token operator">:</span> <span class="token number">0.3</span><span class="token punctuation">,</span> <span class="token comment">// 差值 差值也大 速度越快</span></span>
<span class="line">    <span class="token literal-property property">eachInterval</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token comment">// 两个圈的时间间隔</span></span>
<span class="line">    <span class="token literal-property property">imageUrl</span><span class="token operator">:</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@/assets/image/zl.jpg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 调用上面构造圆弧的方法</span></span>
<span class="line">  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">addCircleRipple</span><span class="token punctuation">(</span>viewer<span class="token punctuation">,</span> data<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token comment">// 构建圆弧效果</span></span>
<span class="line"><span class="token function">addCircleRipple</span><span class="token punctuation">(</span><span class="token parameter">viewer<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// console.log(&#39;🚀 ~ file: No01-init.vue ~ line 288 ~ addCircleRipple ~ viewer, data&#39;, viewer, data)</span></span>
<span class="line">  <span class="token keyword">const</span> Cesium <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>cesium</span>
<span class="line">  <span class="token keyword">var</span> r1 <span class="token operator">=</span> data<span class="token punctuation">.</span>minR<span class="token punctuation">,</span></span>
<span class="line">    r2 <span class="token operator">=</span> data<span class="token punctuation">.</span>minR</span>
<span class="line">  <span class="token comment">// 通过 entities.getById()方法找到要操作的实体</span></span>
<span class="line">  <span class="token comment">// 移除上一次的波纹效果</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">getById</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>id<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">getById</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>id<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">getById</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>id<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">getById</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>id<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 回调函数1</span></span>
<span class="line">  <span class="token keyword">function</span> <span class="token function">changeR1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//这是callback，参数不能内传</span></span>
<span class="line">    r1 <span class="token operator">=</span> r1 <span class="token operator">+</span> data<span class="token punctuation">.</span>deviationR</span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>r1 <span class="token operator">&gt;=</span> data<span class="token punctuation">.</span>maxR<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      r1 <span class="token operator">=</span> data<span class="token punctuation">.</span>minR</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> r1</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token comment">// 回调函数2</span></span>
<span class="line">  <span class="token keyword">function</span> <span class="token function">changeR2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    r2 <span class="token operator">=</span> r2 <span class="token operator">+</span> data<span class="token punctuation">.</span>deviationR</span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>r2 <span class="token operator">&gt;=</span> data<span class="token punctuation">.</span>maxR<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      r2 <span class="token operator">=</span> data<span class="token punctuation">.</span>minR</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> r2</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> data<span class="token punctuation">.</span>id<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">position</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>lon<span class="token punctuation">,</span> data<span class="token punctuation">.</span>lat<span class="token punctuation">,</span> data<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">ellipse</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 这里为什么一个方法要写成 changeR1 changeR2</span></span>
<span class="line">      <span class="token comment">// 因为 Cesium中使用圆的扩散，可以采用回调函数来进行绘制，这样可以可以获得动态扩散的效果。但是做的过程中遇到一个长半轴小于短半轴的报错</span></span>
<span class="line">      <span class="token comment">// 原因</span></span>
<span class="line">      <span class="token comment">// semiMinorAxis和semiMajorAxis使用同一个回调函数，并且semiMajorAxis属性要早于semiMinorAxis属性，所以造成长半轴小于短半轴。</span></span>
<span class="line">      <span class="token comment">// 解决方案：</span></span>
<span class="line">      <span class="token comment">// semiMinorAxis使用另一个回调函数</span></span>
<span class="line">      <span class="token comment">// 关于这里的报错，可以看最下方的参考文章那里</span></span>
<span class="line">      <span class="token literal-property property">semiMinorAxis</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>CallbackProperty</span><span class="token punctuation">(</span>changeR1<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">semiMajorAxis</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>CallbackProperty</span><span class="token punctuation">(</span>changeR2<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">height</span><span class="token operator">:</span> data<span class="token punctuation">.</span>height<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">material</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>ImageMaterialProperty</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">image</span><span class="token operator">:</span> data<span class="token punctuation">.</span>imageUrl<span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">repeat</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Cartesian2</span><span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">transparent</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>CallbackProperty</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">var</span> alp <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">-</span> r1 <span class="token operator">/</span> data<span class="token punctuation">.</span>maxR</span>
<span class="line">          <span class="token keyword">return</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">WHITE</span><span class="token punctuation">.</span><span class="token function">withAlpha</span><span class="token punctuation">(</span>alp<span class="token punctuation">)</span> <span class="token comment">//entity的颜色透明 并不影响材质，并且 entity也会透明哦</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">id</span><span class="token operator">:</span> data<span class="token punctuation">.</span>id<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">position</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>lon<span class="token punctuation">,</span> data<span class="token punctuation">.</span>lat<span class="token punctuation">,</span> data<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">ellipse</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">semiMinorAxis</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>CallbackProperty</span><span class="token punctuation">(</span>changeR1<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">semiMajorAxis</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>CallbackProperty</span><span class="token punctuation">(</span>changeR2<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">height</span><span class="token operator">:</span> data<span class="token punctuation">.</span>height<span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">material</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>ImageMaterialProperty</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">image</span><span class="token operator">:</span> data<span class="token punctuation">.</span>imageUrl<span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">repeat</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Cartesian2</span><span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">transparent</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>CallbackProperty</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">var</span> alp <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line">            alp <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">-</span> r2 <span class="token operator">/</span> data<span class="token punctuation">.</span>maxR</span>
<span class="line">            <span class="token keyword">return</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">WHITE</span><span class="token punctuation">.</span><span class="token function">withAlpha</span><span class="token punctuation">(</span>alp<span class="token punctuation">)</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> data<span class="token punctuation">.</span>eachInterval<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5)]))}const i=s(e,[["render",o],["__file","zuobiaodimianshanshuo.html.vue"]]),u=JSON.parse('{"path":"/blogs/cesium/zuobiaodimianshanshuo.html","title":"坐标地面闪烁","lang":"en-US","frontmatter":{"title":"坐标地面闪烁","date":"2022-8-16","tags":["cesium三维地图"],"categories":["cesium"]},"headers":[],"git":{"createdTime":1728696783000,"updatedTime":1728696783000,"contributors":[{"name":"刘政杨","email":"314781333@qq.com","commits":1}]},"filePathRelative":"blogs/cesium/坐标地面闪烁.md"}');export{i as comp,u as data};
