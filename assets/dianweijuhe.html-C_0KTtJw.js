import{_ as s,c as a,a as e,o as t}from"./app-BJ3_yarB.js";const p={};function c(l,n){return t(),a("div",null,n[0]||(n[0]=[e(`<h2 id="实现思路" tabindex="-1"><a class="header-anchor" href="#实现思路"><span>实现思路</span></a></h2><ol><li>创建一个<code>dataSources</code>数据源对象，用于存放聚合后的点位数据</li><li>设置一下<code>dataSources</code>的聚合条件</li><li>监听聚合对象设置一些触发后的的效果，例如：文字，图标</li></ol><h2 id="撒点" tabindex="-1"><a class="header-anchor" href="#撒点"><span>撒点</span></a></h2><p>通过<code>viewer.dataSources.add</code>这个API先加载一些基本点位，我这里加载的是KML数据，是用官网上的案例数据，这个文件路径在cesium中里有<br><img src="https://z1.ax1x.com/2023/09/14/pPRDJYQ.png" alt=""></p><p>加载这些点位等于一个<code>dataSources</code>数据源对象</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">  <span class="token keyword">let</span> dataSources <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>viewer<span class="token punctuation">.</span>dataSources<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span></span>
<span class="line">        Cesium<span class="token punctuation">.</span>KmlDataSource<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span></span>
<span class="line">          <span class="token string">&quot;/cesium包/Apps/SampleData/kml/facilities/facilities.kml&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">camera</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>camera<span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">canvas</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>canvas</span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">)</span> </span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时的效果如图<br><img src="https://z1.ax1x.com/2023/09/14/pPRDq1A.png" alt=""></p><h2 id="设置聚合" tabindex="-1"><a class="header-anchor" href="#设置聚合"><span>设置聚合</span></a></h2><p>通过上面的声明的<code>dataSources</code>对象，设置一下聚合条件</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">    dataSources<span class="token punctuation">.</span>clustering<span class="token punctuation">.</span>enabled <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 开启聚合</span></span>
<span class="line">    dataSources<span class="token punctuation">.</span>clustering<span class="token punctuation">.</span>pixelRange <span class="token operator">=</span> <span class="token number">15</span><span class="token punctuation">;</span> <span class="token comment">// 聚合像素范围</span></span>
<span class="line">    dataSources<span class="token punctuation">.</span>clustering<span class="token punctuation">.</span>minimumClusterSize <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// 聚合最小数量</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时的效果如图<br><img src="https://z1.ax1x.com/2023/09/14/pPRrkXq.png" alt=""></p><p>此时已经实现了聚合的效果，但是这个聚合效果是默认的，我们还可以自定义聚合的效果，例如：聚合后的文字，聚合后的图标等</p><h2 id="设置聚合效果" tabindex="-1"><a class="header-anchor" href="#设置聚合效果"><span>设置聚合效果</span></a></h2><p>通过监听<code>dataSources</code>的<code>clusterEvent</code>事件，来设置聚合后的效果</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">    <span class="token keyword">const</span> pinBuilder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>PinBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//创建一个图钉</span></span>
<span class="line">      </span>
<span class="line">    <span class="token comment">// 聚合事件监听 第一个参数是被聚合的实体集合 第二个参数是聚合后的实体</span></span>
<span class="line">    dataSources<span class="token punctuation">.</span>clustering<span class="token punctuation">.</span>clusterEvent<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">clusteredEntities<span class="token punctuation">,</span> cluster</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> pinImg <span class="token operator">=</span> pinBuilder<span class="token punctuation">.</span><span class="token function">fromText</span><span class="token punctuation">(</span>cluster<span class="token punctuation">.</span>label<span class="token punctuation">.</span>text<span class="token punctuation">,</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">RED</span><span class="token punctuation">,</span> <span class="token number">48</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toDataURL</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        cluster<span class="token punctuation">.</span>label<span class="token punctuation">.</span>show <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">        cluster<span class="token punctuation">.</span>billboard<span class="token punctuation">.</span>image <span class="token operator">=</span> pinImg<span class="token punctuation">;</span></span>
<span class="line">        cluster<span class="token punctuation">.</span>billboard<span class="token punctuation">.</span>verticalOrigin <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>VerticalOrigin<span class="token punctuation">.</span><span class="token constant">BOTTOM</span><span class="token punctuation">;</span></span>
<span class="line">        cluster<span class="token punctuation">.</span>billboard<span class="token punctuation">.</span>heightReference <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>HeightReference<span class="token punctuation">.</span><span class="token constant">CLAMP_TO_GROUND</span><span class="token punctuation">;</span></span>
<span class="line">        cluster<span class="token punctuation">.</span>billboard<span class="token punctuation">.</span>show <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时的效果如图<br></p><p><img src="https://z1.ax1x.com/2023/09/14/pPRrsDP.png" alt=""></p>`,17)]))}const i=s(p,[["render",c],["__file","dianweijuhe.html.vue"]]),u=JSON.parse('{"path":"/blogs/cesium/dianweijuhe.html","title":"点位聚合","lang":"en-US","frontmatter":{"title":"点位聚合","date":"2023-9-14","tags":["cesium三维地图"],"categories":["cesium"]},"headers":[{"level":2,"title":"实现思路","slug":"实现思路","link":"#实现思路","children":[]},{"level":2,"title":"撒点","slug":"撒点","link":"#撒点","children":[]},{"level":2,"title":"设置聚合","slug":"设置聚合","link":"#设置聚合","children":[]},{"level":2,"title":"设置聚合效果","slug":"设置聚合效果","link":"#设置聚合效果","children":[]}],"git":{"createdTime":1728696783000,"updatedTime":1728696783000,"contributors":[{"name":"刘政杨","email":"314781333@qq.com","commits":1}]},"filePathRelative":"blogs/cesium/点位聚合.md"}');export{i as comp,u as data};
