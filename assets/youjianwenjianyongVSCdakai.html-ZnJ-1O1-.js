import{_ as i,c as t,b as n,e as a,a as o,d as s,o as d,r}from"./app-BJ3_yarB.js";const c={},u={href:"https://imgtu.com/i/jJDtEt",target:"_blank",rel:"noopener noreferrer"},p={href:"https://imgtu.com/i/jJrPat",target:"_blank",rel:"noopener noreferrer"},m={href:"https://blog.csdn.net/BigFamer/article/details/125513859",target:"_blank",rel:"noopener noreferrer"};function v(b,e){const l=r("ExternalLinkIcon");return d(),t("div",null,[e[4]||(e[4]=n("h2",{id:"知晓查找vs-code在你的电脑中位置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#知晓查找vs-code在你的电脑中位置"},[n("span",null,"知晓查找VS code在你的电脑中位置")])],-1)),n("p",null,[n("a",u,[e[0]||(e[0]=n("img",{src:"https://s1.ax1x.com/2022/07/04/jJDtEt.md.png",alt:"jJDtEt.md.png"},null,-1)),a(l)])]),e[5]||(e[5]=o(`<blockquote><p>我的路径为<code>&quot;D:\\tool\\Microsoft VS Code\\Code.exe&quot;</code></p></blockquote><h2 id="在桌面上右键创建一个txt文本-名字随便" tabindex="-1"><a class="header-anchor" href="#在桌面上右键创建一个txt文本-名字随便"><span>在桌面上右键创建一个txt文本(名字随便)</span></a></h2><p>将下列代码复制到其中</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">Windows Registry Editor Version 5.00</span>
<span class="line">    </span>
<span class="line">[HKEY_CLASSES_ROOT\\*\\shell\\VSCode]</span>
<span class="line">@=&quot;Open with Code&quot;</span>
<span class="line">&quot;Icon&quot;=&quot;D:\\\\tool\\\\Microsoft VS Code\\\\Code.exe&quot;</span>
<span class="line">    </span>
<span class="line">[HKEY_CLASSES_ROOT\\*\\shell\\VSCode\\command]</span>
<span class="line">@=&quot;\\&quot;D:\\\\tool\\\\Microsoft VS Code\\\\Code.exe\\&quot; \\&quot;%1\\&quot;&quot;</span>
<span class="line">    </span>
<span class="line">Windows Registry Editor Version 5.00</span>
<span class="line">    </span>
<span class="line">[HKEY_CLASSES_ROOT\\Directory\\shell\\VSCode]</span>
<span class="line">@=&quot;Open with Code&quot;</span>
<span class="line">&quot;Icon&quot;=&quot;D:\\\\tool\\\\Microsoft VS Code\\\\Code.exe&quot;</span>
<span class="line">    </span>
<span class="line">[HKEY_CLASSES_ROOT\\Directory\\shell\\VSCode\\command]</span>
<span class="line">@=&quot;\\&quot;D:\\\\tool\\\\Microsoft VS Code\\\\Code.exe\\&quot; \\&quot;%V\\&quot;&quot;</span>
<span class="line">    </span>
<span class="line">Windows Registry Editor Version 5.00</span>
<span class="line">    </span>
<span class="line">[HKEY_CLASSES_ROOT\\Directory\\Background\\shell\\VSCode]</span>
<span class="line">@=&quot;Open with Code&quot;</span>
<span class="line">&quot;Icon&quot;=&quot;D:\\\\tool\\\\Microsoft VS Code\\\\Code.exe&quot;</span>
<span class="line">    </span>
<span class="line">[HKEY_CLASSES_ROOT\\Directory\\Background\\shell\\VSCode\\command]</span>
<span class="line">@=&quot;\\&quot;D:\\\\tool\\\\Microsoft VS Code\\\\Code.exe\\&quot; \\&quot;%V\\&quot;&quot;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)),n("p",null,[e[2]||(e[2]=s("将自己的VS code文件路径对应替换 ")),n("a",p,[e[1]||(e[1]=n("img",{src:"https://s1.ax1x.com/2022/07/04/jJrPat.md.png",alt:"jJrPat.md.png"},null,-1)),a(l)])]),e[6]||(e[6]=n("blockquote",null,[n("p",null,[s("切记一定要将你自己路径的"),n("code",null,"\\"),s(" 改为 "),n("code",null,"\\\\")])],-1)),e[7]||(e[7]=n("h2",{id:"修改后缀",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#修改后缀"},[n("span",null,"修改后缀")])],-1)),e[8]||(e[8]=n("p",null,[s("将替换路径的txt文件保存并修改为reg格式的文件 "),n("img",{src:"https://s1.ax1x.com/2022/07/04/jJrBi6.png",alt:"图片"}),s(" 双击运行,根据提示点确定")],-1)),n("p",null,[n("a",m,[e[3]||(e[3]=s("该教程摘抄与")),a(l)])])])}const S=i(c,[["render",v],["__file","youjianwenjianyongVSCdakai.html.vue"]]),g=JSON.parse('{"path":"/blogs/gaoxiaokaifa/youjianwenjianyongVSCdakai.html","title":"右键文件用VSC打开","lang":"en-US","frontmatter":{"title":"右键文件用VSC打开","date":"2022-7-4","autoIgnore":true,"tags":["高效开发"],"categories":["高效开发"]},"headers":[{"level":2,"title":"知晓查找VS code在你的电脑中位置","slug":"知晓查找vs-code在你的电脑中位置","link":"#知晓查找vs-code在你的电脑中位置","children":[]},{"level":2,"title":"在桌面上右键创建一个txt文本(名字随便)","slug":"在桌面上右键创建一个txt文本-名字随便","link":"#在桌面上右键创建一个txt文本-名字随便","children":[]},{"level":2,"title":"修改后缀","slug":"修改后缀","link":"#修改后缀","children":[]}],"git":{"createdTime":1728696783000,"updatedTime":1728696783000,"contributors":[{"name":"刘政杨","email":"314781333@qq.com","commits":1}]},"filePathRelative":"blogs/高效开发/右键文件用VSC打开.md"}');export{S as comp,g as data};
