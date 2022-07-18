import{_ as s,c as n,o as a,b as l}from"./app.079a9b36.js";var p="/patient-h5-note/assets/image-20220708155637594.f61e170a.png";const u=JSON.parse('{"title":"\u5728\u7EBF\u95EE\u8BCA-\u8D77\u6B65","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u9879\u76EE\u4ECB\u7ECD","slug":"\u9879\u76EE\u4ECB\u7ECD"},{"level":2,"title":"\u4F7F\u7528\u6280\u672F","slug":"\u4F7F\u7528\u6280\u672F"},{"level":2,"title":"\u9879\u76EE\u642D\u5EFA","slug":"\u9879\u76EE\u642D\u5EFA"},{"level":2,"title":"Pinia \u57FA\u672C\u4ECB\u7ECD","slug":"pinia-\u57FA\u672C\u4ECB\u7ECD"},{"level":2,"title":"Pinia \u6838\u5FC3\u4EE3\u7801","slug":"pinia-\u6838\u5FC3\u4EE3\u7801"}],"relativePath":"project/index.md","lastUpdated":1658185828000}'),o={name:"project/index.md"},e=l('<h1 id="\u5728\u7EBF\u95EE\u8BCA-\u8D77\u6B65" tabindex="-1">\u5728\u7EBF\u95EE\u8BCA-\u8D77\u6B65 <a class="header-anchor" href="#\u5728\u7EBF\u95EE\u8BCA-\u8D77\u6B65" aria-hidden="true">#</a></h1><h2 id="\u9879\u76EE\u4ECB\u7ECD" tabindex="-1">\u9879\u76EE\u4ECB\u7ECD <a class="header-anchor" href="#\u9879\u76EE\u4ECB\u7ECD" aria-hidden="true">#</a></h2><h2 id="\u4F7F\u7528\u6280\u672F" tabindex="-1">\u4F7F\u7528\u6280\u672F <a class="header-anchor" href="#\u4F7F\u7528\u6280\u672F" aria-hidden="true">#</a></h2><h2 id="\u9879\u76EE\u642D\u5EFA" tabindex="-1">\u9879\u76EE\u642D\u5EFA <a class="header-anchor" href="#\u9879\u76EE\u642D\u5EFA" aria-hidden="true">#</a></h2><h2 id="pinia-\u57FA\u672C\u4ECB\u7ECD" tabindex="-1">Pinia \u57FA\u672C\u4ECB\u7ECD <a class="header-anchor" href="#pinia-\u57FA\u672C\u4ECB\u7ECD" aria-hidden="true">#</a></h2><h2 id="pinia-\u6838\u5FC3\u4EE3\u7801" tabindex="-1">Pinia \u6838\u5FC3\u4EE3\u7801 <a class="header-anchor" href="#pinia-\u6838\u5FC3\u4EE3\u7801" aria-hidden="true">#</a></h2><p><img src="'+p+`" alt="image-20220708155637594"></p><p>\u5728Vue3\u4F7F\u7528Pinia\u4E0D\u9700\u8981\u6709\u5FC3\u667A\u8D1F\u62C5\uFF0C\u72B6\u6001\u7BA1\u7406\u53EF\u4EE5\u4F7F\u7528\u7EC4\u5408API\u5B9E\u73B0\uFF0C\u4E14\u518D\u4E5F\u4E0D\u8981\u62C5\u5FC3this\u7684\u95EE\u9898\u3002</p><p>\u771F\u7684\u8FD9\u4E48\u7B80\u5355\u5417\uFF1F\u4E3B\u8981\u4ECE\u4ED3\u5E93\u7684\u521B\u5EFA\u548C\u4F7F\u7528\uFF0C\u72B6\u6001\u7684\u7BA1\u7406\u6765\u4F53\u4F1A\u3002</p><p>\u4F7F\u7528\u6B65\u9AA4\uFF1A</p><ul><li>\u5B89\u88C5</li></ul><div class="language-bash line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">yarn add pinia</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># or</span></span>
<span class="line"><span style="color:#A6ACCD;">npm i pinia</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>\u5BFC\u5165\uFF0C\u5B9E\u4F8B\u5316\uFF0C\u5F53\u505A\u63D2\u4EF6\u4F7F\u7528\uFF0C\u548C\u5176\u4ED6\u63D2\u4EF6\u4F7F\u7528\u5957\u8DEF\u76F8\u540C</li></ul><div class="language-diff line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { createApp } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;"> import { createPinia } from &#39;pinia&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import App from &#39;./App.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;"> const pinia = createPinia()</span></span>
<span class="line"><span style="color:#A6ACCD;">const app = createApp(App)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;"> app.use(pinia)</span></span>
<span class="line"><span style="color:#A6ACCD;">app.mount(&#39;#app&#39;)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li>\u521B\u5EFA\u4ED3\u5E93&amp;\u4F7F\u7528\u4ED3\u5E93</li></ul><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">defineStore</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">pinia</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">computed</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> useCounterStore </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineStore</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">counter</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-vue line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#A6ACCD;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useCounterStore</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./store/counter</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// store\u4E2D\u6709\u72B6\u6001\u548C\u51FD\u6570</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> store </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useCounterStore</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>\u8FDB\u884C\u72B6\u6001\u7BA1\u7406</li></ul><div class="language-typescript line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// state</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> count </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// getters</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> doubleCount </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">computed</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> count</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// mutations</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> update </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> count</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// actions</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> asyncUpdate </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1000</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> count</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> doubleCount</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> update</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> asyncUpdate </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><div class="language-vue line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  APP </span><span style="color:#89DDFF;">{{</span><span style="color:#A6ACCD;"> store</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">count </span><span style="color:#89DDFF;">}}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{{</span><span style="color:#A6ACCD;"> store</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">doubleCount </span><span style="color:#89DDFF;">}}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">store</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">update</span><span style="color:#89DDFF;">()</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">count++</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">store</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">asyncUpdate</span><span style="color:#89DDFF;">()</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">async update</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u603B\u7ED3\uFF1A</p><ul><li>\u901A\u8FC7 <code>const useXxxStore = defineStore(&#39;id&#39;,\u51FD\u6570)</code> \u521B\u5EFA\u4ED3\u5E93\u5F97\u5230\u4F7F\u7528\u4ED3\u5E93\u7684\u51FD\u6570</li></ul><table><thead><tr><th>Vuex</th><th>Pinia</th></tr></thead><tbody><tr><td>state</td><td><code>ref</code> \u548C <code>reactive</code>\u521B\u5EFA\u7684\u54CD\u5E94\u5F0F\u6570\u636E</td></tr><tr><td>getter</td><td><code>computed</code> \u521B\u5EFA\u7684\u8BA1\u7B97\u5C5E\u6027</td></tr><tr><td>mutations \u548C actions</td><td>\u666E\u901A\u51FD\u6570\uFF0C\u540C\u6B65\u5F02\u6B65\u5747\u53EF</td></tr></tbody></table><ul><li>\u4E0E\u5728\u7EC4\u4EF6\u4E2D\u7EF4\u62A4\u6570\u636E\u76F8\u540C\uFF0C\u8FD9\u5C31\u662F <code>Pinia</code> \u7684\u72B6\u6001\u7BA1\u7406\u57FA\u672C\u4F7F\u7528</li></ul>`,24),t=[e];function r(c,D,i,y,F,A){return a(),n("div",null,t)}var d=s(o,[["render",r]]);export{u as __pageData,d as default};