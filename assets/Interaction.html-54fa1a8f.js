import{_ as n,p as a,q as s,a1 as t}from"./framework-cc651620.js";const p={},o=t(`<h1 id="交互" tabindex="-1"><a class="header-anchor" href="#交互" aria-hidden="true">#</a> 交互</h1><p>前文的<code>HTML</code>中可以加入<code>JavaScript</code>，<code>HiperLink</code> 添加了 <code>HLInteraction</code> 方法来进行后端与前端的交互。</p><p>HLInteraction 用法如下</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token function">HLInteraction</span><span class="token punctuation">(</span><span class="token string">&quot;插件ID&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;方法名&quot;</span><span class="token punctuation">)</span>
</code></pre></div><p>使用案例：</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">var</span> PluginID <span class="token operator">=</span> <span class="token string">&#39;study_plugin&#39;</span>
    <span class="token keyword">function</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">HLInteraction</span><span class="token punctuation">(</span>PluginID<span class="token punctuation">,</span> <span class="token string">&#39;something&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
			<span class="token comment">// 其中obj即为方法返回的json对象。</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    window<span class="token punctuation">.</span>onload <span class="token operator">=</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,6),c=[o];function e(u,l){return a(),s("div",null,c)}const k=n(p,[["render",e],["__file","Interaction.html.vue"]]);export{k as default};
