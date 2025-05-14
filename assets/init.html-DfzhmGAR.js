import{_ as n,c as a,e,o as i}from"./app--DK3glja.js";const l={};function t(p,s){return i(),a("div",null,s[0]||(s[0]=[e(`<h2 id="init" tabindex="-1"><a class="header-anchor" href="#init"><span>Init</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> config  user.name <span class="token string">&quot;Alice&quot;</span></span>
<span class="line"><span class="token function">git</span> config  user.email <span class="token string">&quot;alys8715ia@gmail.com&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> push --set-upstream origin work</span>
<span class="line"><span class="token function">git</span> commit <span class="token parameter variable">--amend</span> --reset-author <span class="token parameter variable">-m</span> <span class="token string">&#39;some comments&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> remote remove origin</span>
<span class="line"><span class="token function">git</span> remote <span class="token function">add</span> origin xxx</span>
<span class="line"><span class="token function">git</span> push <span class="token parameter variable">-u</span> origin main</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="debug" tabindex="-1"><a class="header-anchor" href="#debug"><span>Debug</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 测试该 key 是否有效：</span></span>
<span class="line"><span class="token function">ssh</span> <span class="token parameter variable">-T</span> git@github.com</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 检查 SSH Agent</span></span>
<span class="line">ssh-add <span class="token parameter variable">-l</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 如果没看到 ~/.ssh/id_rsa，就运行：</span></span>
<span class="line">ssh-add ~/.ssh/id_rsa</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 验证当前身份：</span></span>
<span class="line"><span class="token function">ssh</span> <span class="token parameter variable">-i</span> ~/.ssh/id_rsa <span class="token parameter variable">-T</span> git@github.com</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)]))}const r=n(l,[["render",t],["__file","init.html.vue"]]),d=JSON.parse('{"path":"/Init/init.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Init","slug":"init","link":"#init","children":[]},{"level":2,"title":"Debug","slug":"debug","link":"#debug","children":[]}],"git":{"updatedTime":1747178431000},"filePathRelative":"Init/init.md"}');export{r as comp,d as data};
