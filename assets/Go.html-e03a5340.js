import{_ as n}from"./Start-2-09626833.js";import{_ as s,p as a,q as t,a1 as p}from"./framework-cc651620.js";const o={},c=p(`<h1 id="golang" tabindex="-1"><a class="header-anchor" href="#golang" aria-hidden="true">#</a> Golang</h1><p>由于 <code>HiperLink</code> 就是由 <code>Golang</code> 编写的软件，使用 <code>Golang</code> 开发插件变得极度简单。</p><p>在本案例中，我们将会编写一个在加载插件时弹出<code>Hello World!</code>弹窗的插件。</p><p>在 <code>study_plugin</code> 文件夹中进入终端，输入以下命令初始化工程并设置依赖：</p><div class="language-cmd" data-ext="cmd"><pre class="language-cmd"><code>go mod init study_plugin
go get github.com/Hiper-Link/go-plugin
go get github.com/Hiper-Link/plugin-libs/shared
</code></pre></div><p>新建 <code>plugin.go</code> 文件，在其中编写以下示例代码</p><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;github.com/Hiper-Link/go-plugin&quot;</span>
	<span class="token string">&quot;github.com/Hiper-Link/plugin-libs/shared&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> Handshake <span class="token operator">=</span> plugin<span class="token punctuation">.</span>HandshakeConfig<span class="token punctuation">{</span>
	ProtocolVersion<span class="token punctuation">:</span>  <span class="token number">1</span><span class="token punctuation">,</span>
	MagicCookieKey<span class="token punctuation">:</span>   <span class="token string">&quot;study_plugin&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 此处为你的插件ID</span>
	MagicCookieValue<span class="token punctuation">:</span> <span class="token string">&quot;Hello, HiperLink&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> API <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// 加载插件</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>API<span class="token punctuation">)</span> <span class="token function">OnLoad</span><span class="token punctuation">(</span>p <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token comment">// 停用插件</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>API<span class="token punctuation">)</span> <span class="token function">OnUnload</span><span class="token punctuation">(</span>p <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token comment">// 安装插件</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>API<span class="token punctuation">)</span> <span class="token function">OnInstall</span><span class="token punctuation">(</span>p <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token comment">// 卸载插件</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>API<span class="token punctuation">)</span> <span class="token function">OnUninstall</span><span class="token punctuation">(</span>p <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token comment">// HL 启动</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>API<span class="token punctuation">)</span> <span class="token function">OnStart</span><span class="token punctuation">(</span>p <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token comment">// HL 停止</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>API<span class="token punctuation">)</span> <span class="token function">OnStop</span><span class="token punctuation">(</span>p <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token comment">// 前后端交互</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>API<span class="token punctuation">)</span> <span class="token function">Interaction</span><span class="token punctuation">(</span>p <span class="token builtin">string</span><span class="token punctuation">,</span> function <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> function<span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	plugin<span class="token punctuation">.</span><span class="token function">Serve</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>plugin<span class="token punctuation">.</span>ServeConfig<span class="token punctuation">{</span>
		HandshakeConfig<span class="token punctuation">:</span> Handshake<span class="token punctuation">,</span>
		Plugins<span class="token punctuation">:</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span>plugin<span class="token punctuation">.</span>Plugin<span class="token punctuation">{</span>
			<span class="token string">&quot;grpc&quot;</span><span class="token punctuation">:</span> <span class="token operator">&amp;</span>shared<span class="token punctuation">.</span>GRPCPlugin<span class="token punctuation">{</span>Impl<span class="token punctuation">:</span> <span class="token operator">&amp;</span>API<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		NetworkType<span class="token punctuation">:</span> <span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span>
		GRPCServer<span class="token punctuation">:</span> plugin<span class="token punctuation">.</span>DefaultGRPCServer<span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>你可以随意扩展本代码，HiperLink中的相关操作将会触发类似于<code>OnLoad</code>的回调事件。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p><code>OnInstall</code>与<code>OnUninstall</code>暂不可用。</p></div><p>我们将会在<code>import</code>中引入<code>walk</code>，在<code>OnLoad</code>中写入弹窗代码：</p><blockquote><ol><li>使用终端命令<code>go get github.com/lxn/walk</code>设置依赖</li><li>在<code>OnLoad</code>下写入<code>walk.MsgBox(nil, &quot;StudyPlugin&quot;, &quot;HelloWorld!&quot;, walk.MsgBoxIconInformation)</code></li></ol></blockquote><p>完整代码如下：</p><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;github.com/Hiper-Link/go-plugin&quot;</span>
	<span class="token string">&quot;github.com/Hiper-Link/plugin-libs/shared&quot;</span>
	<span class="token string">&quot;github.com/lxn/walk&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> Handshake <span class="token operator">=</span> plugin<span class="token punctuation">.</span>HandshakeConfig<span class="token punctuation">{</span>
	ProtocolVersion<span class="token punctuation">:</span>  <span class="token number">1</span><span class="token punctuation">,</span>
	MagicCookieKey<span class="token punctuation">:</span>   <span class="token string">&quot;study_plugin&quot;</span><span class="token punctuation">,</span>
	MagicCookieValue<span class="token punctuation">:</span> <span class="token string">&quot;Hello, HiperLink&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> API <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// 加载插件</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>API<span class="token punctuation">)</span> <span class="token function">OnLoad</span><span class="token punctuation">(</span>p <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	walk<span class="token punctuation">.</span><span class="token function">MsgBox</span><span class="token punctuation">(</span><span class="token boolean">nil</span><span class="token punctuation">,</span> <span class="token string">&quot;StudyPlugin&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;HelloWorld!&quot;</span><span class="token punctuation">,</span> walk<span class="token punctuation">.</span>MsgBoxIconInformation<span class="token punctuation">)</span>
	<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token comment">// 停用插件</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>API<span class="token punctuation">)</span> <span class="token function">OnUnload</span><span class="token punctuation">(</span>p <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token comment">// 安装插件</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>API<span class="token punctuation">)</span> <span class="token function">OnInstall</span><span class="token punctuation">(</span>p <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token comment">// 卸载插件</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>API<span class="token punctuation">)</span> <span class="token function">OnUninstall</span><span class="token punctuation">(</span>p <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token comment">// HL 启动</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>API<span class="token punctuation">)</span> <span class="token function">OnStart</span><span class="token punctuation">(</span>p <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token comment">// HL 停止</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>API<span class="token punctuation">)</span> <span class="token function">OnStop</span><span class="token punctuation">(</span>p <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token comment">// 前后端交互</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>API<span class="token punctuation">)</span> <span class="token function">Interaction</span><span class="token punctuation">(</span>p <span class="token builtin">string</span><span class="token punctuation">,</span> function <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> function<span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	plugin<span class="token punctuation">.</span><span class="token function">Serve</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>plugin<span class="token punctuation">.</span>ServeConfig<span class="token punctuation">{</span>
		HandshakeConfig<span class="token punctuation">:</span> Handshake<span class="token punctuation">,</span>
		Plugins<span class="token punctuation">:</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span>plugin<span class="token punctuation">.</span>Plugin<span class="token punctuation">{</span>
			<span class="token string">&quot;grpc&quot;</span><span class="token punctuation">:</span> <span class="token operator">&amp;</span>shared<span class="token punctuation">.</span>GRPCPlugin<span class="token punctuation">{</span>Impl<span class="token punctuation">:</span> <span class="token operator">&amp;</span>API<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		NetworkType<span class="token punctuation">:</span> <span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span>
		GRPCServer<span class="token punctuation">:</span> plugin<span class="token punctuation">.</span>DefaultGRPCServer<span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>最后，我们编译该代码：</p><div class="language-cmd" data-ext="cmd"><pre class="language-cmd"><code>go build plugin.go
</code></pre></div><p>在study_plugin文件夹下将会生成一个名为plugin的二进制可执行文件。</p><p>让我们打开<code>metadata.json</code>进行最后的编写：</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;study_plugin&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.0.1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;StudyPlugin&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;一个基础教程插件&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;天机&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;link&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hiper.ink&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./plugin&quot;</span><span class="token punctuation">,</span>
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
</code></pre></div><p>以上所有东西您都能改！我们写入了软件的启动命令<code>./plugin</code>。</p><p>回到HiperLink，查看并开启我们的插件。</p><p><img src="`+n+'" alt="HiperLink插件界面" title="HiperLink插件界面"></p>',21),e=[c];function u(l,i){return a(),t("div",null,e)}const d=s(o,[["render",u],["__file","Go.html.vue"]]);export{d as default};
