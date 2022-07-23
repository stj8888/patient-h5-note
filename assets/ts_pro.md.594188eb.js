import{_ as e,c as t,o as i,e as r}from"./app.a4ab4dc4.js";const f=JSON.parse('{"title":"TypeScript \u5E94\u7528","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u2460 TypeScript\u4E0EVue","slug":"\u2460-typescript\u4E0Evue"},{"level":2,"title":"defineProps\u4E0ETypescript","slug":"defineprops\u4E0Etypescript"},{"level":2,"title":"defineEmits\u4E0ETypescript","slug":"defineemits\u4E0Etypescript"},{"level":2,"title":"ref\u4E0ETypescript","slug":"ref\u4E0Etypescript"},{"level":2,"title":"computed\u4E0ETypescript","slug":"computed\u4E0Etypescript"},{"level":2,"title":"\u4E8B\u4EF6\u5904\u7406\u4E0ETypescript","slug":"\u4E8B\u4EF6\u5904\u7406\u4E0Etypescript"},{"level":2,"title":"Template Ref\u4E0ETypescript","slug":"template-ref\u4E0Etypescript"},{"level":2,"title":"\u53EF\u9009\u94FE\u64CD\u4F5C\u7B26","slug":"\u53EF\u9009\u94FE\u64CD\u4F5C\u7B26"},{"level":2,"title":"\u975E\u7A7A\u65AD\u8A00","slug":"\u975E\u7A7A\u65AD\u8A00"},{"level":2,"title":"\u2461 TypeScript\u7C7B\u578B\u58F0\u660E\u6587\u4EF6","slug":"\u2461-typescript\u7C7B\u578B\u58F0\u660E\u6587\u4EF6"},{"level":2,"title":"\u57FA\u672C\u4ECB\u7ECD","slug":"\u57FA\u672C\u4ECB\u7ECD"},{"level":2,"title":"\u5185\u7F6E\u7C7B\u578B\u58F0\u660E\u6587\u4EF6","slug":"\u5185\u7F6E\u7C7B\u578B\u58F0\u660E\u6587\u4EF6"},{"level":2,"title":"\u7B2C\u4E09\u65B9\u5E93\u7C7B\u578B\u58F0\u660E\u6587\u4EF6","slug":"\u7B2C\u4E09\u65B9\u5E93\u7C7B\u578B\u58F0\u660E\u6587\u4EF6"},{"level":2,"title":"\u81EA\u5B9A\u4E49\u7C7B\u578B\u58F0\u660E\u6587\u4EF6","slug":"\u81EA\u5B9A\u4E49\u7C7B\u578B\u58F0\u660E\u6587\u4EF6"}],"relativePath":"ts/pro.md","lastUpdated":1658573895000}'),a={name:"ts/pro.md"},p=r('<h1 id="typescript-\u5E94\u7528" tabindex="-1">TypeScript \u5E94\u7528 <a class="header-anchor" href="#typescript-\u5E94\u7528" aria-hidden="true">#</a></h1><h2 id="\u2460-typescript\u4E0Evue" tabindex="-1">\u2460 TypeScript\u4E0EVue <a class="header-anchor" href="#\u2460-typescript\u4E0Evue" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>typescript \u914D\u5408 Vue3 composition-api \u4F7F\u7528</p></div><h2 id="defineprops\u4E0Etypescript" tabindex="-1">defineProps\u4E0ETypescript <a class="header-anchor" href="#defineprops\u4E0Etypescript" aria-hidden="true">#</a></h2><h2 id="defineemits\u4E0Etypescript" tabindex="-1">defineEmits\u4E0ETypescript <a class="header-anchor" href="#defineemits\u4E0Etypescript" aria-hidden="true">#</a></h2><h2 id="ref\u4E0Etypescript" tabindex="-1">ref\u4E0ETypescript <a class="header-anchor" href="#ref\u4E0Etypescript" aria-hidden="true">#</a></h2><h2 id="computed\u4E0Etypescript" tabindex="-1">computed\u4E0ETypescript <a class="header-anchor" href="#computed\u4E0Etypescript" aria-hidden="true">#</a></h2><h2 id="\u4E8B\u4EF6\u5904\u7406\u4E0Etypescript" tabindex="-1">\u4E8B\u4EF6\u5904\u7406\u4E0ETypescript <a class="header-anchor" href="#\u4E8B\u4EF6\u5904\u7406\u4E0Etypescript" aria-hidden="true">#</a></h2><h2 id="template-ref\u4E0Etypescript" tabindex="-1">Template Ref\u4E0ETypescript <a class="header-anchor" href="#template-ref\u4E0Etypescript" aria-hidden="true">#</a></h2><h2 id="\u53EF\u9009\u94FE\u64CD\u4F5C\u7B26" tabindex="-1">\u53EF\u9009\u94FE\u64CD\u4F5C\u7B26 <a class="header-anchor" href="#\u53EF\u9009\u94FE\u64CD\u4F5C\u7B26" aria-hidden="true">#</a></h2><h2 id="\u975E\u7A7A\u65AD\u8A00" tabindex="-1">\u975E\u7A7A\u65AD\u8A00 <a class="header-anchor" href="#\u975E\u7A7A\u65AD\u8A00" aria-hidden="true">#</a></h2><h2 id="\u2461-typescript\u7C7B\u578B\u58F0\u660E\u6587\u4EF6" tabindex="-1">\u2461 TypeScript\u7C7B\u578B\u58F0\u660E\u6587\u4EF6 <a class="header-anchor" href="#\u2461-typescript\u7C7B\u578B\u58F0\u660E\u6587\u4EF6" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>typescript \u7C7B\u578B\u58F0\u660E\u6587\u4EF6\u76F8\u5173\u77E5\u8BC6</p></div><h2 id="\u57FA\u672C\u4ECB\u7ECD" tabindex="-1">\u57FA\u672C\u4ECB\u7ECD <a class="header-anchor" href="#\u57FA\u672C\u4ECB\u7ECD" aria-hidden="true">#</a></h2><h2 id="\u5185\u7F6E\u7C7B\u578B\u58F0\u660E\u6587\u4EF6" tabindex="-1">\u5185\u7F6E\u7C7B\u578B\u58F0\u660E\u6587\u4EF6 <a class="header-anchor" href="#\u5185\u7F6E\u7C7B\u578B\u58F0\u660E\u6587\u4EF6" aria-hidden="true">#</a></h2><h2 id="\u7B2C\u4E09\u65B9\u5E93\u7C7B\u578B\u58F0\u660E\u6587\u4EF6" tabindex="-1">\u7B2C\u4E09\u65B9\u5E93\u7C7B\u578B\u58F0\u660E\u6587\u4EF6 <a class="header-anchor" href="#\u7B2C\u4E09\u65B9\u5E93\u7C7B\u578B\u58F0\u660E\u6587\u4EF6" aria-hidden="true">#</a></h2><h2 id="\u81EA\u5B9A\u4E49\u7C7B\u578B\u58F0\u660E\u6587\u4EF6" tabindex="-1">\u81EA\u5B9A\u4E49\u7C7B\u578B\u58F0\u660E\u6587\u4EF6 <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u7C7B\u578B\u58F0\u660E\u6587\u4EF6" aria-hidden="true">#</a></h2>',17),s=[p];function c(d,h,l,n,o,u){return i(),t("div",null,s)}var m=e(a,[["render",c]]);export{f as __pageData,m as default};
