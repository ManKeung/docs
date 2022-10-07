import{_ as a,r as s,o as d,c as l,b as e,d as i,e as t,a as r}from"./app.23d51b2e.js";const c={},o=r(`<h1 id="\u5E38\u7528\u5DE5\u5177\u77E5\u8BC6\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u5DE5\u5177\u77E5\u8BC6\u603B\u7ED3" aria-hidden="true">#</a> \u5E38\u7528\u5DE5\u5177\u77E5\u8BC6\u603B\u7ED3</h1><h2 id="_1-git-\u4E0E-svn-\u7684\u533A\u522B\u5728\u54EA\u91CC" tabindex="-1"><a class="header-anchor" href="#_1-git-\u4E0E-svn-\u7684\u533A\u522B\u5728\u54EA\u91CC" aria-hidden="true">#</a> 1. git \u4E0E svn \u7684\u533A\u522B\u5728\u54EA\u91CC\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git \u548C svn \u6700\u5927\u7684\u533A\u522B\u5728\u4E8E git \u662F\u5206\u5E03\u5F0F\u7684\uFF0C\u800C svn \u662F\u96C6\u4E2D\u5F0F\u7684\u3002\u56E0\u6B64\u6211\u4EEC\u4E0D\u80FD\u518D\u79BB\u7EBF\u7684\u60C5\u51B5\u4E0B\u4F7F\u7528 svn\u3002\u5982\u679C\u670D\u52A1\u5668
\u51FA\u73B0\u95EE\u9898\uFF0C\u6211\u4EEC\u5C31\u6CA1\u6709\u529E\u6CD5\u4F7F\u7528 svn \u6765\u63D0\u4EA4\u6211\u4EEC\u7684\u4EE3\u7801\u3002

svn \u4E2D\u7684\u5206\u652F\u662F\u6574\u4E2A\u7248\u672C\u5E93\u7684\u590D\u5236\u7684\u4E00\u4EFD\u5B8C\u6574\u76EE\u5F55\uFF0C\u800C git \u7684\u5206\u652F\u662F\u6307\u9488\u6307\u5411\u67D0\u6B21\u63D0\u4EA4\uFF0C\u56E0\u6B64 git \u7684\u5206\u652F\u521B\u5EFA\u66F4\u52A0\u5F00\u9500\u66F4\u5C0F
\u5E76\u4E14\u5206\u652F\u4E0A\u7684\u53D8\u5316\u4E0D\u4F1A\u5F71\u54CD\u5230\u5176\u4ED6\u4EBA\u3002svn \u7684\u5206\u652F\u53D8\u5316\u4F1A\u5F71\u54CD\u5230\u6240\u6709\u7684\u4EBA\u3002

svn \u7684\u6307\u4EE4\u76F8\u5BF9\u4E8E git \u6765\u8BF4\u8981\u7B80\u5355\u4E00\u4E9B\uFF0C\u6BD4 git \u66F4\u5BB9\u6613\u4E0A\u624B\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),g={href:"https://github.com/geeeeeeeeek/git-recipes/wiki/3.5-%E5%B8%B8%E8%A7%81%E5%B7%A5%E4%BD%9C%E6%B5%81%E6%AF%94%E8%BE%83",target:"_blank",rel:"noopener noreferrer"},h={href:"https://juejin.im/post/5bd95bf4f265da392c5307eb",target:"_blank",rel:"noopener noreferrer"},m={href:"https://blog.csdn.net/github_33304260/article/details/80171456",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.jianshu.com/p/e8ad60710017",target:"_blank",rel:"noopener noreferrer"},u=r(`<h2 id="_2-\u7ECF\u5E38\u4F7F\u7528\u7684-git-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_2-\u7ECF\u5E38\u4F7F\u7528\u7684-git-\u547D\u4EE4" aria-hidden="true">#</a> 2. \u7ECF\u5E38\u4F7F\u7528\u7684 git \u547D\u4EE4\uFF1F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git init                     // \u65B0\u5EFA git \u4EE3\u7801\u5E93
git add                      // \u6DFB\u52A0\u6307\u5B9A\u6587\u4EF6\u5230\u6682\u5B58\u533A
git rm                       // \u5220\u9664\u5DE5\u4F5C\u533A\u6587\u4EF6\uFF0C\u5E76\u4E14\u5C06\u8FD9\u6B21\u5220\u9664\u653E\u5165\u6682\u5B58\u533A
git commit -m [message]      // \u63D0\u4EA4\u6682\u5B58\u533A\u5230\u4ED3\u5E93\u533A
git branch                   // \u5217\u51FA\u6240\u6709\u5206\u652F
git checkout -b [branch]     // \u65B0\u5EFA\u4E00\u4E2A\u5206\u652F\uFF0C\u5E76\u5207\u6362\u5230\u8BE5\u5206\u652F
git status                   // \u663E\u793A\u6709\u53D8\u66F4\u7684\u6587\u4EF6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),b={href:"http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html",target:"_blank",rel:"noopener noreferrer"},_=r(`<h2 id="_3-git-pull-\u548C-git-fetch-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_3-git-pull-\u548C-git-fetch-\u7684\u533A\u522B" aria-hidden="true">#</a> 3. git pull \u548C git fetch \u7684\u533A\u522B</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git fetch \u53EA\u662F\u5C06\u8FDC\u7A0B\u4ED3\u5E93\u7684\u53D8\u5316\u4E0B\u8F7D\u4E0B\u6765\uFF0C\u5E76\u6CA1\u6709\u548C\u672C\u5730\u5206\u652F\u5408\u5E76\u3002

git pull \u4F1A\u5C06\u8FDC\u7A0B\u4ED3\u5E93\u7684\u53D8\u5316\u4E0B\u8F7D\u4E0B\u6765\uFF0C\u5E76\u548C\u5F53\u524D\u5206\u652F\u5408\u5E76\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),p={href:"https://blog.csdn.net/weixin_41975655/article/details/82887273",target:"_blank",rel:"noopener noreferrer"},f=r(`<h2 id="_4-git-rebase-\u548C-git-merge-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_4-git-rebase-\u548C-git-merge-\u7684\u533A\u522B" aria-hidden="true">#</a> 4. git rebase \u548C git merge \u7684\u533A\u522B</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git merge \u548C git rebase \u90FD\u662F\u7528\u4E8E\u5206\u652F\u5408\u5E76\uFF0C\u5173\u952E\u5728 commit \u8BB0\u5F55\u7684\u5904\u7406\u4E0A\u4E0D\u540C\u3002

git merge \u4F1A\u65B0\u5EFA\u4E00\u4E2A\u65B0\u7684 commit \u5BF9\u8C61\uFF0C\u7136\u540E\u4E24\u4E2A\u5206\u652F\u4EE5\u524D\u7684 commit \u8BB0\u5F55\u90FD\u6307\u5411\u8FD9\u4E2A\u65B0 commit \u8BB0\u5F55\u3002\u8FD9\u79CD\u65B9\u6CD5\u4F1A
\u4FDD\u7559\u4E4B\u524D\u6BCF\u4E2A\u5206\u652F\u7684 commit \u5386\u53F2\u3002

git rebase \u4F1A\u5148\u627E\u5230\u4E24\u4E2A\u5206\u652F\u7684\u7B2C\u4E00\u4E2A\u5171\u540C\u7684 commit \u7956\u5148\u8BB0\u5F55\uFF0C\u7136\u540E\u5C06\u63D0\u53D6\u5F53\u524D\u5206\u652F\u8FD9\u4E4B\u540E\u7684\u6240\u6709 commit \u8BB0\u5F55\uFF0C\u7136\u540E
\u5C06\u8FD9\u4E2A commit \u8BB0\u5F55\u6DFB\u52A0\u5230\u76EE\u6807\u5206\u652F\u7684\u6700\u65B0\u63D0\u4EA4\u540E\u9762\u3002\u7ECF\u8FC7\u8FD9\u4E2A\u5408\u5E76\u540E\uFF0C\u4E24\u4E2A\u5206\u652F\u5408\u5E76\u540E\u7684 commit \u8BB0\u5F55\u5C31\u53D8\u4E3A\u4E86\u7EBF\u6027\u7684\u8BB0
\u5F55\u4E86\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),x={href:"https://www.jianshu.com/p/f23f72251abc",target:"_blank",rel:"noopener noreferrer"},k={href:"https://blog.csdn.net/liuxiaoheng1992/article/details/79108233",target:"_blank",rel:"noopener noreferrer"};function w(E,B){const n=s("ExternalLinkIcon");return d(),l("div",null,[o,e("p",null,[i("\u8BE6\u7EC6\u8D44\u6599\u53EF\u4EE5\u53C2\u8003\uFF1A "),e("a",g,[i("\u300A\u5E38\u89C1\u5DE5\u4F5C\u6D41\u6BD4\u8F83\u300B"),t(n)]),e("a",h,[i("\u300A\u5BF9\u6BD4 Git \u4E0E SVN\uFF0C\u8FD9\u7BC7\u8BB2\u7684\u5F88\u6613\u61C2\u300B"),t(n)]),e("a",m,[i("\u300AGIT \u4E0E SVN \u4E16\u7EAA\u5927\u6218\u300B"),t(n)]),e("a",v,[i("\u300AGit \u5B66\u4E60\u5C0F\u8BB0\u4E4B\u5206\u652F\u539F\u7406\u300B"),t(n)])]),u,e("p",null,[i("\u8BE6\u7EC6\u8D44\u6599\u53EF\u4EE5\u53C2\u8003\uFF1A "),e("a",b,[i("\u300A\u5E38\u7528 Git \u547D\u4EE4\u6E05\u5355\u300B"),t(n)])]),_,e("p",null,[e("a",p,[i("\u300A\u8BE6\u89E3 git pull \u548C git fetch \u7684\u533A\u522B\u300B"),t(n)])]),f,e("p",null,[e("a",x,[i("\u300Agit rebase \u548C git merge \u7684\u533A\u522B\u300B"),t(n)]),e("a",k,[i("\u300Agit merge \u4E0E git rebase \u7684\u533A\u522B\u300B"),t(n)])])])}const V=a(c,[["render",w],["__file","08.html.vue"]]);export{V as default};