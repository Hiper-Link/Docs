import{_ as e,M as p,p as r,q as c,R as n,t as a,N as t,a1 as o}from"./framework-cc651620.js";const l={},d=o(`<h1 id="插件元数据" tabindex="-1"><a class="header-anchor" href="#插件元数据" aria-hidden="true">#</a> 插件元数据</h1><p>此时你的插件还无法被识别，因为我们需要编写metadata.json的内容。</p><p>metadata.json 的基础模板如下：</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;link&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gRPC&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;root&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;frontend&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;ui&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;configuration&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2><h3 id="id" tabindex="-1"><a class="header-anchor" href="#id" aria-hidden="true">#</a> id</h3><ul><li>字段键名：<code>id</code></li><li>字段类型：<code>string</code></li></ul><p>ID（即插件 ID）是你插件的“身份证号”。</p><p>该值要与文件夹名称保持一致。</p><p>HiperLink 使用插件 ID 来区分不同的插件并检查插件间的依赖。 HiperLink 中加载的所有插件都应使用不同的插件 ID。如果新加载的插件具有与现有插件完全相同的插件 ID，则新插件将无法加载</p><p>请明智地选择你的插件 ID。强烈建议你在发布插件后不要再更改插件 ID</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>小心可能的包名冲突。非常不推荐为你的插件取一个与标准库 / 第三方库名相同的 id，如 test，否则 HiperLink 很可能无法正确地加载你的插件</p></div><h3 id="version" tabindex="-1"><a class="header-anchor" href="#version" aria-hidden="true">#</a> version</h3><ul><li>字段键名：<code>version</code></li><li>字段类型：<code>string</code></li></ul>`,14),i={href:"https://semver.org/lang/zh-CN/",target:"_blank",rel:"noopener noreferrer"},u=o(`<h3 id="name" tabindex="-1"><a class="header-anchor" href="#name" aria-hidden="true">#</a> name</h3><ul><li>字段键名：<code>name</code></li><li>字段类型：<code>string</code></li></ul><p>你的插件名称——给你的插件起一个好听的名字吧</p><p>尽量不要使插件名称太长。你可以把插件的详细信息放在 <code>description</code> 之中</p><h3 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> description</h3><ul><li>字段键名：<code>description</code></li><li>字段类型：<code>string</code></li></ul><p>你的插件描述。在这里写下你的插件的功能总结吧</p><h3 id="author" tabindex="-1"><a class="header-anchor" href="#author" aria-hidden="true">#</a> author</h3><ul><li>字段键名：<code>author</code></li><li>字段类型：<code>string[]</code></li></ul><p>插件作者。该值为数组，可以容纳多个作者</p><h3 id="link" tabindex="-1"><a class="header-anchor" href="#link" aria-hidden="true">#</a> link</h3><ul><li>字段键名：<code>link</code></li><li>字段类型：<code>string</code></li></ul><p>你的插件的网址。你可以将其指向插件的 github 链接。它的值应为一个可访问的网址</p><h3 id="dependencies" tabindex="-1"><a class="header-anchor" href="#dependencies" aria-hidden="true">#</a> dependencies</h3><ul><li>字段键名：<code>dependencies</code></li><li>字段类型：<code>dist</code></li></ul><p>该字段描述了你插件的依赖，这是一个例子：</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;HiperLink&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&gt;=0.2.6&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>键值为依赖的插件ID，HiperLink的ID就是HiperLink。右侧为版本运算符。</p><p>运算符详情可见此表格。</p><table><thead><tr><th>运算符</th><th>示例</th><th>解释</th><th>允许的值</th><th>不允许的值</th></tr></thead><tbody><tr><td>&gt;=</td><td>&gt;=1.2.3</td><td>目标版本应大于等于1.2.3</td><td>1.2.3，1.3.0</td><td>1.2.0</td></tr><tr><td>&gt;</td><td>&gt;1.2.3</td><td>目标版本应大于1.2.3</td><td>1.2.4，1.3.0</td><td>1.2.0，1.2.3</td></tr><tr><td>&lt;=</td><td>&lt;=1.2.3</td><td>目标版本应小于等于1.2.3</td><td>1.2.3，1.1.0</td><td>1.2.4，2.0.0</td></tr><tr><td>&lt;</td><td>&lt;1.2.3</td><td>目标版本应小于1.2.3</td><td>1.1.0</td><td>1.2.3，1.5</td></tr><tr><td>=</td><td>=1.2.3</td><td>目标版本应等于1.2.3</td><td>1.2.3</td><td>1.2，1.2.4</td></tr><tr><td></td><td>1.2.3</td><td>目标版本应等于1.2.3</td><td>1.2.3</td><td>1.2，1.2.4</td></tr><tr><td>^</td><td>^1.2.3</td><td>目标版本应大于等于1.2.3，且目标版本的第一个版本分段等于运算版本。</td><td>1.2.3，1.2.4，1.4.4</td><td>1.0.0，2.0.0</td></tr><tr><td>~</td><td>~1.2.3</td><td>目标版本应大于等于1.2.3，且目标版本的第一个和第二个版本分段等于运算版本。</td><td>1.2.3，1.2.4</td><td>1.0.0，1.4.4，2.0.0</td></tr></tbody></table><h3 id="command" tabindex="-1"><a class="header-anchor" href="#command" aria-hidden="true">#</a> command</h3><ul><li>字段键名：<code>command</code></li><li>字段类型：<code>string</code></li></ul><p>插件的运行指令，如<code>./plugin</code>，<code>python plugin.py</code>，<code>java -jar plugin.jar</code>等。</p><h3 id="args" tabindex="-1"><a class="header-anchor" href="#args" aria-hidden="true">#</a> args</h3><ul><li>字段键名：<code>args</code></li><li>字段类型：<code>string[]</code></li></ul><p>插件的指令参数</p><h3 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> type</h3><ul><li>字段键名：<code>type</code></li><li>字段类型：<code>string</code></li><li>可选值 : <code>gRPC</code>与<code>netRPC</code></li></ul><p>插件与HiperLink通信方式，目前可选的值只有<code>gRPC</code>与<code>netRPC</code></p><h3 id="root" tabindex="-1"><a class="header-anchor" href="#root" aria-hidden="true">#</a> root</h3><ul><li>字段键名：<code>root</code></li><li>字段类型：<code>bool</code></li></ul><p>插件是否需要使用管理员权限运行</p><h3 id="color" tabindex="-1"><a class="header-anchor" href="#color" aria-hidden="true">#</a> color</h3><ul><li>字段键名：<code>color</code></li><li>字段类型：<code>string</code></li></ul>`,34),k={href:"http://zhongguose.com",target:"_blank",rel:"noopener noreferrer"},h=n("h3",{id:"icon",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#icon","aria-hidden":"true"},"#"),a(" icon")],-1),q=n("ul",null,[n("li",null,[a("字段键名："),n("code",null,"icon")]),n("li",null,[a("字段类型："),n("code",null,"string")])],-1),g=n("code",null,"mdi-",-1),f={href:"https://materialdesignicons.com/",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"mdi-user-arrow-left-outline",-1),m=o(`<h3 id="frontend-ui" tabindex="-1"><a class="header-anchor" href="#frontend-ui" aria-hidden="true">#</a> frontend.ui</h3><ul><li>字段键名：<code>ui</code></li><li>字段类型：<code>bool</code></li></ul><p>是否显示插件页面</p><h3 id="frontend-configuration" tabindex="-1"><a class="header-anchor" href="#frontend-configuration" aria-hidden="true">#</a> frontend.configuration</h3><ul><li>字段键名：<code>configuration</code></li><li>字段类型：<code>bool</code></li></ul><p>是否显示配置页面</p><h2 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h2><p>在本案例中，metadata.json的内容应该是：</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;study_plugin&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.0.1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;StudyPlugin&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;一个基础教程插件&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;天机&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;link&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hiper.ink&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gRPC&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;root&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#93d5dc&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mdi-book&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;frontend&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;ui&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;configuration&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,9);function _(b,x){const s=p("ExternalLinkIcon");return r(),c("div",null,[d,n("p",null,[a("version 字段代表你的插件版本。它基本上采用了 "),n("a",i,[a("语义化版本"),t(s)]),a(" 的格式，不过限制较少，如你可以定义任意长度的版本号")]),u,n("p",null,[a("插件图标的颜色，为十六进制颜色码(#FFFFFF)和RGB颜色码()。颜色的选择可以参考"),n("a",k,[a("中国色"),t(s)])]),h,q,n("p",null,[a("插件图标，该值为"),g,a(" + "),n("a",f,[a("Material Design Icons"),t(s)]),a("上的所有可选图标代码，如"),y]),m])}const j=e(l,[["render",_],["__file","Metadata.html.vue"]]);export{j as default};
