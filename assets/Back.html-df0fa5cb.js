import{_ as n,p as s,q as a,a1 as t}from"./framework-cc651620.js";const p={},o=t(`<h1 id="后端" tabindex="-1"><a class="header-anchor" href="#后端" aria-hidden="true">#</a> 后端</h1><p>无论是使用哪种语言编写的插件，都存在有Interaction事件。</p><p>该事件接收了上文所阐述的&quot;function&quot;字段，依据此字段可以进行交互。</p><p>其中json_text为返回的JSON文本。</p><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>API<span class="token punctuation">)</span> <span class="token function">Interaction</span><span class="token punctuation">(</span>p <span class="token builtin">string</span><span class="token punctuation">,</span> function <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> json_text <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
	<span class="token keyword">switch</span> function <span class="token punctuation">{</span>
	<span class="token keyword">case</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">:</span>
		<span class="token comment">//todo</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> json_text<span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-rust" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">async</span> <span class="token keyword">fn</span> <span class="token function-definition function">interaction</span><span class="token punctuation">(</span>
    <span class="token operator">&amp;</span><span class="token keyword">self</span><span class="token punctuation">,</span>
    _request<span class="token punctuation">:</span> <span class="token class-name">Request</span><span class="token operator">&lt;</span><span class="token class-name">InteractionRequest</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Result</span><span class="token operator">&lt;</span><span class="token class-name">Response</span><span class="token operator">&lt;</span><span class="token class-name">InteractionResponse</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token class-name">Status</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> <span class="token keyword">mut</span> json_text <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">.</span><span class="token function">to_string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">match</span> <span class="token operator">&amp;</span>function <span class="token keyword">as</span> <span class="token operator">&amp;</span><span class="token keyword">str</span><span class="token punctuation">{</span>
        <span class="token string">&quot;xxx&quot;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
			<span class="token comment">// todo</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>

		_ <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

    <span class="token keyword">let</span> reply <span class="token operator">=</span> <span class="token namespace">hiper_link<span class="token punctuation">::</span></span><span class="token class-name">InteractionResponse</span> <span class="token punctuation">{</span>value <span class="token punctuation">:</span> json_text<span class="token punctuation">.</span><span class="token function">into</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token class-name">Ok</span><span class="token punctuation">(</span><span class="token class-name">Response</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span>reply<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div>`,6),e=[o];function c(l,u){return s(),a("div",null,e)}const i=n(p,[["render",c],["__file","Back.html.vue"]]);export{i as default};
