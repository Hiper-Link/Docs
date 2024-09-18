import{_ as t}from"./Start-2-09626833.js";import{_ as o,M as e,p as c,q as u,R as s,t as n,N as l,a1 as a}from"./framework-cc651620.js";const k={},i=a(`<h1 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python</h1><div class="custom-container tip"><p class="custom-container-title">提示</p><p>笔者使用的Python版本为<code>3.10.9</code>，因此一切操作均以此为准。</p><p>版本要求 <code>Python 3.5</code> 或更高版本。</p></div><p>在本案例中，我们将会编写一个在加载插件时弹出<code>Hello World!</code>弹窗的插件。</p><p>让我们进入终端，输入以下命令来设置依赖：</p><div class="language-cmd" data-ext="cmd"><pre class="language-cmd"><code>pip install grpcio
pip install grpcio-tools
</code></pre></div>`,5),r={href:"/file/hl_plugin_python.zip",target:"_blank",rel:"noopener noreferrer"},d=s("code",null,"study_plugin",-1),y=a(`<p>此时<code>study_plugin</code>的内部文件结构如下：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>└─study_plugin
    health_pb2.py
    health_pb2_grpc.py
    hiperlink_pb2.py
    hiperlink_pb2_grpc.py
    metadata.json
    plugin.py
</code></pre></div><p>我们开发的核心工作主要集中在<code>plugin.py</code>，在此基础上你可以加入任何文件到此文件夹。</p><p><code>plugin.py</code>的内部代码如下：</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token comment"># 本模板由天机Ceyase编写，基于MIT许可证开源</span>
<span class="token keyword">import</span> hiperlink_pb2
<span class="token keyword">import</span> hiperlink_pb2_grpc
<span class="token keyword">import</span> health_pb2_grpc
<span class="token keyword">import</span> grpc
<span class="token keyword">import</span> concurrent<span class="token punctuation">.</span>futures <span class="token keyword">as</span> futures
<span class="token keyword">import</span> sys
<span class="token keyword">import</span> time
<span class="token keyword">import</span> random
<span class="token keyword">import</span> socket

<span class="token keyword">class</span> <span class="token class-name">HiperLinkServicer</span><span class="token punctuation">(</span>hiperlink_pb2_grpc<span class="token punctuation">.</span>PluginServicer<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token comment"># 加载插件</span>
    <span class="token keyword">def</span> <span class="token function">OnLoad</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> hiperlink_pb2<span class="token punctuation">.</span>EventsResponse<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># 停用插件</span>
    <span class="token keyword">def</span> <span class="token function">OnUnload</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> hiperlink_pb2<span class="token punctuation">.</span>EventsResponse<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># 安装插件</span>
    <span class="token keyword">def</span> <span class="token function">OnInstall</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> hiperlink_pb2<span class="token punctuation">.</span>EventsResponse<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># 卸载插件</span>
    <span class="token keyword">def</span> <span class="token function">OnUninstall</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> hiperlink_pb2<span class="token punctuation">.</span>EventsResponse<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># HL 启动</span>
    <span class="token keyword">def</span> <span class="token function">OnStart</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> hiperlink_pb2<span class="token punctuation">.</span>EventsResponse<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># HL 停止</span>
    <span class="token keyword">def</span> <span class="token function">OnStop</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> hiperlink_pb2<span class="token punctuation">.</span>EventsResponse<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># 前后端交互</span>
    <span class="token keyword">def</span> <span class="token function">Interaction</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> hiperlink_pb2<span class="token punctuation">.</span>InteractionResponse<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">get_free_port</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        port <span class="token operator">=</span> random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">32768</span><span class="token punctuation">,</span> <span class="token number">61000</span><span class="token punctuation">)</span>
        sock <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SOCK_STREAM<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> <span class="token punctuation">(</span>sock<span class="token punctuation">.</span>connect_ex<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span> port<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> port 

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    health <span class="token operator">=</span> health_pb2_grpc<span class="token punctuation">.</span>HealthServicer<span class="token punctuation">(</span><span class="token punctuation">)</span>
    server <span class="token operator">=</span> grpc<span class="token punctuation">.</span>server<span class="token punctuation">(</span>futures<span class="token punctuation">.</span>ThreadPoolExecutor<span class="token punctuation">(</span>max_workers<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    hiperlink_pb2_grpc<span class="token punctuation">.</span>add_PluginServicer_to_server<span class="token punctuation">(</span>HiperLinkServicer<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> server<span class="token punctuation">)</span>
    health_pb2_grpc<span class="token punctuation">.</span>add_HealthServicer_to_server<span class="token punctuation">(</span>health<span class="token punctuation">,</span> server<span class="token punctuation">)</span>
    port <span class="token operator">=</span> get_free_port<span class="token punctuation">(</span><span class="token punctuation">)</span>
    server<span class="token punctuation">.</span>add_insecure_port<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;127.0.0.1:</span><span class="token interpolation"><span class="token punctuation">{</span>port<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
    server<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;1|1|tcp|127.0.0.1:</span><span class="token interpolation"><span class="token punctuation">{</span>port<span class="token punctuation">}</span></span><span class="token string">|grpc&quot;</span></span><span class="token punctuation">)</span>
    sys<span class="token punctuation">.</span>stdout<span class="token punctuation">.</span>flush<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
            time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">24</span><span class="token punctuation">)</span>
    <span class="token keyword">except</span> KeyboardInterrupt<span class="token punctuation">:</span>
        server<span class="token punctuation">.</span>stop<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
</code></pre></div><p>你可以随意扩展本代码，HiperLink中的相关操作将会触发类似于<code>OnLoad</code>的回调事件。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p><code>OnInstall</code>与<code>OnUninstall</code>暂不可用。</p></div><p>本教程中，我们将会引入<code>winapi</code>，在<code>OnLoad</code>中写入弹窗代码：</p><blockquote><ol><li>使用终端命令<code>pip install pywin32</code>设置依赖</li><li>写入<code>import win32api,win32con</code>，在<code>OnLoad</code>下写入<code>win32api.MessageBox(0,&quot;HelloWorld!&quot;,&quot;StudyPlugin&quot;,win32con.MB_OK)</code></li></ol></blockquote><p>完整代码如下：</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token comment"># 本模板由天机Ceyase编写，基于MIT许可证开源</span>
<span class="token keyword">import</span> hiperlink_pb2
<span class="token keyword">import</span> hiperlink_pb2_grpc
<span class="token keyword">import</span> health_pb2_grpc
<span class="token keyword">import</span> grpc
<span class="token keyword">import</span> concurrent<span class="token punctuation">.</span>futures <span class="token keyword">as</span> futures
<span class="token keyword">import</span> sys
<span class="token keyword">import</span> time
<span class="token keyword">import</span> random
<span class="token keyword">import</span> socket
<span class="token keyword">import</span> win32api<span class="token punctuation">,</span>win32con

<span class="token keyword">class</span> <span class="token class-name">HiperLinkServicer</span><span class="token punctuation">(</span>hiperlink_pb2_grpc<span class="token punctuation">.</span>PluginServicer<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token comment"># 加载插件</span>
    <span class="token keyword">def</span> <span class="token function">OnLoad</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">:</span>
        win32api<span class="token punctuation">.</span>MessageBox<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token string">&quot;HelloWorld!&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;StudyPlugin&quot;</span><span class="token punctuation">,</span>win32con<span class="token punctuation">.</span>MB_OK<span class="token punctuation">)</span>
        <span class="token keyword">return</span> hiperlink_pb2<span class="token punctuation">.</span>EventsResponse<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># 停用插件</span>
    <span class="token keyword">def</span> <span class="token function">OnUnload</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> hiperlink_pb2<span class="token punctuation">.</span>EventsResponse<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># 安装插件</span>
    <span class="token keyword">def</span> <span class="token function">OnInstall</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> hiperlink_pb2<span class="token punctuation">.</span>EventsResponse<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># 卸载插件</span>
    <span class="token keyword">def</span> <span class="token function">OnUninstall</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> hiperlink_pb2<span class="token punctuation">.</span>EventsResponse<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># HL 启动</span>
    <span class="token keyword">def</span> <span class="token function">OnStart</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> hiperlink_pb2<span class="token punctuation">.</span>EventsResponse<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># HL 停止</span>
    <span class="token keyword">def</span> <span class="token function">OnStop</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> hiperlink_pb2<span class="token punctuation">.</span>EventsResponse<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># 前后端交互</span>
    <span class="token keyword">def</span> <span class="token function">Interaction</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> hiperlink_pb2<span class="token punctuation">.</span>InteractionResponse<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">get_free_port</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        port <span class="token operator">=</span> random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">32768</span><span class="token punctuation">,</span> <span class="token number">61000</span><span class="token punctuation">)</span>
        sock <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SOCK_STREAM<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> <span class="token punctuation">(</span>sock<span class="token punctuation">.</span>connect_ex<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span> port<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> port 

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    health <span class="token operator">=</span> health_pb2_grpc<span class="token punctuation">.</span>HealthServicer<span class="token punctuation">(</span><span class="token punctuation">)</span>
    server <span class="token operator">=</span> grpc<span class="token punctuation">.</span>server<span class="token punctuation">(</span>futures<span class="token punctuation">.</span>ThreadPoolExecutor<span class="token punctuation">(</span>max_workers<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    hiperlink_pb2_grpc<span class="token punctuation">.</span>add_PluginServicer_to_server<span class="token punctuation">(</span>HiperLinkServicer<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> server<span class="token punctuation">)</span>
    health_pb2_grpc<span class="token punctuation">.</span>add_HealthServicer_to_server<span class="token punctuation">(</span>health<span class="token punctuation">,</span> server<span class="token punctuation">)</span>
    port <span class="token operator">=</span> get_free_port<span class="token punctuation">(</span><span class="token punctuation">)</span>
    server<span class="token punctuation">.</span>add_insecure_port<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;127.0.0.1:</span><span class="token interpolation"><span class="token punctuation">{</span>port<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
    server<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;1|1|tcp|127.0.0.1:</span><span class="token interpolation"><span class="token punctuation">{</span>port<span class="token punctuation">}</span></span><span class="token string">|grpc&quot;</span></span><span class="token punctuation">)</span>
    sys<span class="token punctuation">.</span>stdout<span class="token punctuation">.</span>flush<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
            time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">24</span><span class="token punctuation">)</span>
    <span class="token keyword">except</span> KeyboardInterrupt<span class="token punctuation">:</span>
        server<span class="token punctuation">.</span>stop<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
</code></pre></div><p>让我们使用<code>python plugin.py</code>命令运行此py文件。</p><p>如果出现了<code>1|1|tcp|127.0.0.1:xxxxx|grpc</code>的输出，并且程序一直保持运行，那么该插件就可以进行下一步了。</p><p>为了照顾没有<code>python</code>的用户，你应该打包此插件！</p><p>目前尚不支持<code>pyinstaller</code>打包，我们推荐你使用<code>cxfreeze</code>打包。</p><p>在<code>study_plugin</code>文件夹下输入此终端命令：</p><div class="language-cmd" data-ext="cmd"><pre class="language-cmd"><code>pip install cx_Freeze
cxfreeze plugin.py
</code></pre></div><p>等待片刻，<code>study_plugin</code>文件夹下将会生成<code>build</code>文件夹，将其中的可执行文件移动到<code>study_plugin</code>文件夹（当然，你可以删除一些冗余文件）</p><p>最终<code>study_plugin</code>文件夹的目录结构如下：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>└─study_plugin
    │  metadata.json
    │  plugin.exe
    │  plugin.py
    │  python3.dll
    │  python310.dll
    └─lib
</code></pre></div><p>让我们打开<code>metadata.json</code>进行最后的编写：</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
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
</code></pre></div><p>以上所有东西您都能改！我们写入了软件的启动命令<code>./plugin</code>。</p><p>回到HiperLink，查看并开启我们的插件。</p><p><img src="`+t+'" alt="HiperLink插件界面" title="HiperLink插件界面"></p>',25);function _(g,m){const p=e("ExternalLinkIcon");return c(),u("div",null,[i,s("p",null,[n("Python插件开发需要模板，请"),s("a",r,[n("点击此处"),l(p)]),n("下载模板，然后将模板解压至"),d,n("文件夹。")]),y])}const f=o(k,[["render",_],["__file","Python.html.vue"]]);export{f as default};
