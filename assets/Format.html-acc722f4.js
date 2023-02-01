import{_ as e,p as o,q as t,a1 as c}from"./framework-cc651620.js";const d={},n=c(`<h1 id="插件目录格式" tabindex="-1"><a class="header-anchor" href="#插件目录格式" aria-hidden="true">#</a> 插件目录格式</h1><p>插件的基本组织形式为<code>文件夹</code>，一个文件夹即为一个插件。</p><p>插件所需要用到的一切都可以放进这个文件夹中。</p><p>现在，让我们制作一个名为<code>StudyPlugin</code>的插件。</p><p>首先我们需要一个<code>唯一ID</code>，这将会成为你插件的标志。在这里我们将<code>StudyPlugin</code>的唯一ID设定为<code>study_plugin</code>。</p><p>然后我们需要进行三步：</p><blockquote><ol><li><p>创建一个名为 <code>study_plugin</code> 的文件夹</p></li><li><p>在文件夹中创建 <code>metadata.json</code> 文件</p></li><li><p>将文件夹移动到HiperLink下的plugins文件夹（如果没有就新建）</p></li></ol></blockquote><p>目录在此时应该是这样的：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>│ HiperLink.exe
├─config
├─libs        
├─logs
└─plugins
    ├─study_plugin
        ├─metadata.json
</code></pre></div>`,9),a=[n];function i(l,p){return o(),t("div",null,a)}const r=e(d,[["render",i],["__file","Format.html.vue"]]);export{r as default};
