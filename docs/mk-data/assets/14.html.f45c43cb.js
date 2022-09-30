import{_ as i,r as p,o as u,c as r,e as a,w as t,a as c,b as n,d as s}from"./app.ac481352.js";const d={},k=c(`<h1 id="\u80FD\u7528css\u5B9E\u73B0\u7684\u5C31\u4E0D\u7528\u9EBB\u70E6javascript" tabindex="-1"><a class="header-anchor" href="#\u80FD\u7528css\u5B9E\u73B0\u7684\u5C31\u4E0D\u7528\u9EBB\u70E6javascript" aria-hidden="true">#</a> \u80FD\u7528CSS\u5B9E\u73B0\u7684\u5C31\u4E0D\u7528\u9EBB\u70E6JavaScript</h1><p>\u51E1\u662F\u53EF\u4EE5\u7528 JavaScript \u6765\u5199\u7684\u5E94\u7528\uFF0C\u6700\u7EC8\u90FD\u4F1A\u7528 JavaScript \u6765\u5199\u3002\u2014\u2014Atwood\u5B9A\u5F8B</p><p>\u867D\u7136\u4E07\u7269\u90FD\u53EF\u4EE5\u662FJavaScript\uFF0C\u4F46\u67D0\u79CD\u7A0B\u5EA6css\u7684\u8FD0\u884C\u6548\u7387\u4F1A\u6BD4JavaScript\u9AD8\uFF0C\u6240\u4EE5\u7B14\u8005\u8BA4\u4E3A:\u80FD\u7528CSS\u5B9E\u73B0\u7684\u5C31\u4E0D\u7528\u9EBB\u70E6JavaScript\u3002</p><p>\u4E24\u79CD\u8BED\u8A00\u90FD\u6709\u4E0D\u540C\u7684\u7528\u9014\u968F\u7740\u6D4F\u89C8\u5668\u7248\u672C\u7279\u6027\u548C\u5C5E\u6027\u7684\u589E\u52A0\uFF0CCSS\u6B63\u6210\u4E3A\u4E00\u79CD\u529F\u80FD\u5F3A\u5927\u7684\u8BED\u8A00\uFF0C\u80FD\u591F\u5904\u7406\u6211\u4EEC\u4EE5\u524D\u4F9D\u8D56JavaScript\u5B9E\u73B0\u7684\u529F\u80FD\u3002</p><h2 id="\u5E73\u6ED1\u6EDA\u52A8" tabindex="-1"><a class="header-anchor" href="#\u5E73\u6ED1\u6EDA\u52A8" aria-hidden="true">#</a> \u5E73\u6ED1\u6EDA\u52A8</h2><p>\u66FE\u7ECF\u6709\u4E00\u6BB5\u65F6\u95F4\uFF0C\u6211\u4EEC\u4E0D\u5F97\u4E0D\u4F9D\u9760JavaScript\u7684window.scrollY\u6765\u5B9E\u73B0\u6765\u6267\u884C\u6B64\u64CD\u4F5C\uFF0C\u5982\u679C\u60F3\u5E73\u6ED1\u6EDA\u52A8\u8FD8\u8981\u4F9D\u8D56\u5B9A\u65F6\u5668\u589E\u52A0\u4E00\u4E2A\u52A8\u753B\u3002\u968F\u7740scroll-behavior\u5C5E\u6027\u7684\u65B0\u589E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u4E00\u884CCSS\u4EE3\u7801\u6765\u5904\u7406\u7F51\u7AD9\u4E0A\u7684\u5E73\u6ED1\u6EDA\u52A8\uFF01\u6D4F\u89C8\u5668\u652F\u6301\u7EA6\u4E3A75\uFF05\uFF0C\u517C\u5BB9\u6027\u8FD8\u662F\u633A\u4E0D\u9519\u7684\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">html</span> <span class="token punctuation">{</span>
    <span class="token property">scroll-behavior</span><span class="token punctuation">:</span> smooth<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6EDA\u52A8\u6355\u6293" tabindex="-1"><a class="header-anchor" href="#\u6EDA\u52A8\u6355\u6293" aria-hidden="true">#</a> \u6EDA\u52A8\u6355\u6293</h2><p>\u5E7B\u706F\u7247\u3001\u56FE\u7247\u5E93\u8FD9\u4E9B\u4E5F\u662F\u524D\u7AEF\u9AD8\u9891\u4F7F\u7528\u529F\u80FD\uFF0C\u4E0A\u4E00\u4EE3CSS\u80FD\u529B\u6709\u9650\uFF0C\u6211\u4EEC\u4E0D\u5F97\u4E0D\u4F9D\u8D56JavaScript\u6765\u5B8C\u6210\u8FD9\u529F\u80FD\u3002\u73B0\u5728\u53EA\u8981\u51E0\u884C\u4EE3\u7801\u5C31\u53EF\u4EE5\u5B9E\u73B0\u6B64\u529F\u80FD\u3002\u4ECE\u67D0\u79CD\u610F\u4E49\u4E0A\u8BF4\uFF0C\u5B83\u4E0EFlexbox\u6216CSS Grid\u7684\u5DE5\u4F5C\u539F\u7406\u7C7B\u4F3C\uFF0C\u5373\u60A8\u9700\u8981\u4E00\u4E2A\u5BB9\u5668\u5143\u7D20\uFF0C\u5728\u8BE5\u5BB9\u5668\u5143\u7D20\u4E0A\u8BBE\u7F6Escrolln-snap-type\u548C\u591A\u4E2A\u4E3A\u5176\u8BBE\u7F6E\u4E86scroll-snap-align\u7684\u5B50\u5143\u7D20\uFF0C\u5982\u4E0B\u6240\u793A</p>`,9),v=n("div",{class:"language-html ext-html line-numbers-mode"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("main")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),s("\u201Dparent\u201D")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("section")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),s("\u201Dchild\u201D")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("section")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("section")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),s("\u201Dchild\u201D")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("section")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("section")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),s("\u201Dchild\u201D")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("section")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("main")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),m=n("div",{class:"language-css ext-css line-numbers-mode"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},".parent"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"scroll-snap-type"),n("span",{class:"token punctuation"},":"),s(" x mandatory"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".child"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"scroll-snap-align"),n("span",{class:"token punctuation"},":"),s(" start"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("h2",{id:"css\u52A8\u753B",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#css\u52A8\u753B","aria-hidden":"true"},"#"),s(" CSS\u52A8\u753B")],-1),h=n("p",null,"\u66FE\u7ECF\u67D0\u4E2A\u65F6\u671F\uFF0C\u5927\u591A\u6570\u5F00\u53D1\u8005\u4F7F\u7528 JavaScript(\u6216\u8005jQuery) \u7ED9\u6D4F\u89C8\u5668\u4E2D\u7684\u5143\u7D20\u6DFB\u52A0\u52A8\u753B\u3002\u8BA9\u8FD9\u4E2A\u6DE1\u5316\uFF0C\u8BA9\u90A3\u4E2A\u6269\u5927\uFF0C\u5F88\u7B80\u5355\u3002\u968F\u7740\u4E92\u52A8\u7684\u9879\u76EE\u8D8A\u6765\u8D8A\u590D\u6742\uFF0C\u79FB\u52A8\u8BBE\u5907\u7684\u5927\u91CF\u589E\u52A0\uFF0C\u8868\u73B0\u6027\u80FD\u53D8\u5F97\u8D8A\u6765\u8D8A\u91CD\u8981\u3002Flash \u88AB\u629B\u5F03\uFF0C\u6709\u5929\u8D4B\u7684\u52A8\u753B\u5F00\u53D1\u8005\u4F7F\u7528 HTML5 \u53BB\u5B9E\u73B0\u8FC7\u53BB\u4ECE\u672A\u5B9E\u73B0\u7684\u6548\u679C\u3002",-1),g=n("p",null,"\u4ED6\u4EEC\u9700\u8981\u66F4\u597D\u7684\u5DE5\u5177\u53BB\u5F00\u53D1\u590D\u6742\u7684\u52A8\u753B\u5E8F\u5217\u5E76\u83B7\u5F97\u6700\u597D\u7684\u6027\u80FD\u3002JavaScript(\u6216\u8005jQuery) \u5E76\u4E0D\u80FD\u591F\u505A\u5230\u3002\u6D4F\u89C8\u5668\u65E5\u6E10\u6210\u719F\u7684\u540C\u65F6\u4E5F\u5F00\u59CB\u63D0\u4F9B\u4E86\u4E00\u4E9B\u89E3\u51B3\u65B9\u6848\u3002\u6700\u88AB\u5E7F\u6CDB\u63A5\u53D7\u7684\u65B9\u6848\u662F\u4F7F\u7528 CSS \u52A8\u753B\u3002",-1),_=c('<h2 id="\u8868\u5355\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u8868\u5355\u9A8C\u8BC1" aria-hidden="true">#</a> \u8868\u5355\u9A8C\u8BC1</h2><p>html5 \u4E30\u5BCC\u4E86\u8868\u5355\u5143\u7D20\uFF0C\u63D0\u4F9B\u4E86\u7C7B\u4F3C required , email , tel \u7B49\u8868\u5355\u5143\u7D20\u5C5E\u6027\u3002\u540C\u6837\u7684\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5229\u7528 :valid \u548C :invalid \u6765\u505A\u9488\u5BF9html5\u8868\u5355\u5C5E\u6027\u7684\u6821\u9A8C\u3002</p><ul><li>:required \u4F2A\u7C7B\u6307\u5B9A\u5177\u6709required \u5C5E\u6027\u7684\u8868\u5355\u5143\u7D20</li><li>:valid \u4F2A\u7C7B\u6307\u5B9A\u4E00\u4E2A\u901A\u8FC7\u5339\u914D\u6B63\u786E\u7684\u6240\u8981\u6C42\u7684\u8868\u5355\u5143\u7D20</li><li>:invalid \u4F2A\u7C7B\u6307\u5B9A\u4E00\u4E2A\u4E0D\u5339\u914D\u6307\u5B9A\u8981\u6C42\u7684\u8868\u5355\u5143\u7D20</li></ul><h2 id="\u5229\u7528-css-\u7684-content-\u5C5E\u6027-attr-\u6293\u53D6\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u5229\u7528-css-\u7684-content-\u5C5E\u6027-attr-\u6293\u53D6\u8D44\u6599" aria-hidden="true">#</a> \u5229\u7528 CSS \u7684 content \u5C5E\u6027 attr \u6293\u53D6\u8D44\u6599</h2><p>\u60F3\u5FC5\u5927\u5BB6\u90FD\u60F3\u5230\u4E86\u4F2A\u5143\u7D20 after \uFF0C\u4F46\u662F\u6587\u5B57\u600E\u4E48\u83B7\u5F97\u5462\uFF0C\u53C8\u4E0D\u80FD\u7528 JavaScript \u3002</p><p>CSS \u7684\u4F2A\u5143\u7D20\u662F\u4E2A\u5F88\u5F37\u5927\u7684\u4E1C\u897F\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5229\u7528\u4ED6\u505A\u5F88\u591A\u8FD0\u7528\uFF0C\u901A\u5E38\u4E3A\u4E86\u505A\u4E00\u4E9B\u6548\u679C\uFF0C content:&quot; &quot; \u591A\u534A\u4F1A\u7559\u7A7A\uFF0C\u4F46\u5176\u5B9E\u53EF\u4EE5\u5728\u91CC\u9762\u5199\u4E0A attr \u6293\u8D44\u6599\u54E6\uFF01</p>',6),y=n("div",{class:"language-html ext-html line-numbers-mode"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"data-msg"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("\u8FD9\u91CC\u662F\u83B7\u53D6content\u7684\u5185\u5BB9"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    hover
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=n("div",{class:"language-css ext-css line-numbers-mode"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},"div"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s("100px"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s("1px solid red"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s("relative"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},"div:hover:after"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"content"),n("span",{class:"token punctuation"},":"),n("span",{class:"token function"},"attr"),n("span",{class:"token punctuation"},"("),s("data-msg"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s("absolute"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),s(" 12px"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s("200%"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"line-height"),n("span",{class:"token punctuation"},":"),s("30px"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),s("center"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"left"),n("span",{class:"token punctuation"},":"),s("0"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"top"),n("span",{class:"token punctuation"},":"),s("25px"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s("1px solid green"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=c(`<h2 id="\u9F20\u6807\u60AC\u6D6E\u65F6\u663E\u793A" tabindex="-1"><a class="header-anchor" href="#\u9F20\u6807\u60AC\u6D6E\u65F6\u663E\u793A" aria-hidden="true">#</a> \u9F20\u6807\u60AC\u6D6E\u65F6\u663E\u793A</h2><p>\u9F20\u6807\u60AC\u6D6E\u7684\u573A\u666F\u5341\u5206\u5E38\u89C1\uFF0C\u4F8B\u5982\u5BFC\u822A\u7684\u83DC\u5355\uFF1A</p><p>\u4E00\u822C\u8981\u628A\u9690\u85CF\u7684\u4E1C\u897F\u5982\u83DC\u5355\u4F5C\u4E3Ahover\u76EE\u6807\u7684\u5B50\u5143\u7D20\u6216\u8005\u76F8\u90BB\u5143\u7D20\uFF0C\u624D\u65B9\u4FBF\u7528css\u63A7\u5236\uFF0C\u4F8B\u5982\u4E0A\u9762\u7684\u83DC\u5355\uFF0C\u662F\u628Amenu\u5F53\u4F5C\u5BFC\u822A\u7684\u4E00\u4E2A\u76F8\u90BB\u5143\u7D20\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!--menu\u4E3A\u76F8\u90BB\u7684li--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u7528\u6237<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>menu<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>\u8D26\u6237\u8BBE\u7F6E<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>\u767B\u51FA<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>menu\u5728\u6B63\u5E38\u6001\u4E0B\u662F\u9690\u85CF\u7684\uFF1A</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.menu</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u800C\u5F53\u5BFC\u822Ahover\u65F6\u663E\u793A\uFF1A</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/*\u4F7F\u7528\u76F8\u90BB\u9009\u62E9\u5668\u548Chover*/</span>
<span class="token selector">.user:hover + .menu</span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> list-item<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\u8FD9\u91CC\u4F7F\u7528\u4E86\u4E00\u4E2A\u76F8\u90BB\u9009\u62E9\u5668\uFF0C\u8FD9\u4E5F\u662F\u4E0A\u9762\u8BF4\u7684\u4E3A\u4EC0\u4E48\u8981\u5199\u6210\u76F8\u90BB\u7684\u5143\u7D20\u3002menu\u7684\u4F4D\u7F6E\u53EF\u4EE5\u7528absolute\u5B9A\u4F4D\u3002</p><p>\u540C\u65F6menu\u81EA\u5DF2\u672C\u8EABhover\u7684\u65F6\u5019\u4E5F\u8981\u663E\u793A\uFF0C\u5426\u5219\u9F20\u6807\u4E00\u79BB\u5F00\u5BFC\u822A\u7684\u65F6\u5019\uFF0C\u83DC\u5355\u5C31\u6D88\u5931\u4E86\uFF1A</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.menu:hover</span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> list-item<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u4F1A\u6709\u4E00\u4E2A\u5C0F\u95EE\u9898\uFF0C\u5373menu\u548C\u5BFC\u822A\u9700\u8981\u6328\u7740\u4E00\u8D77\uFF0C\u5426\u5219\u4E2D\u95F4\u6709\u7A7A\u9699\u7684\u8BDD\uFF0C\u4E0A\u9762\u6DFB\u52A0\u7684\u83DC\u5355hover\u5C31\u4E0D\u80FD\u53D1\u6325\u4F5C\u7528\u4E86\uFF0C\u4F46\u662F\u5B9E\u9645\u60C5\u51B5\u4E0B\u4ECE\u7F8E\u89C2\u7684\u89D2\u5EA6\uFF0C\u4E24\u8005\u662F\u8981\u6709\u70B9\u8DDD\u79BB\u7684\u3002\u8FD9\u4E2A\u5176\u5B9E\u4E5F\u597D\u89E3\u51B3\uFF0C\u53EA\u8981\u5728menu\u4E0A\u9762\u518D\u753B\u4E00\u4E2A\u900F\u660E\u7684\u533A\u57DF\u5C31\u597D\u4E86\uFF0C\u5982\u4E0B\u84DD\u8272\u7684\u65B9\u5757\uFF1A</p><p>\u53EF\u4EE5\u7528before/after\u4F2A\u7C7B\u7528absoute\u5B9A\u4F4D\u5B9E\u73B0\uFF1A</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">ul.menu:before</span><span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> -20px<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token comment">/*background-color: rgba(0,0,0,0.2);*/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u6211\u65E2\u5199\u4E86css\u7684hover\uFF0C\u53C8\u76D1\u542C\u4E86mouse\u4E8B\u4EF6\uFF0C\u7528mouse\u63A7\u5236\u663E\u793A\u9690\u85CF\uFF0C\u53CC\u91CD\u6548\u679C\u4F1A\u6709\u4EC0\u4E48\u60C5\u51B5\u53D1\u751F\uFF0C\u5982\u679C\u6309\u6B63\u5E38\u5957\u8DEF\uFF0C\u5728mouse\u4E8B\u4EF6\u91CC\u9762hover\u7684\u65F6\u5019\uFF0C\u6DFB\u52A0\u4E86\u4E00\u4E2Adisplay: block\u7684style\uFF0C\u4F1A\u8986\u76D6\u6389CSS\u7684\u8BBE\u7F6E\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u53EA\u8981hover\u4E00\u6B21\uFF0Ccss\u7684\u4EE3\u7801\u5C31\u4E0D\u7BA1\u7528\u4E86\uFF0C\u56E0\u4E3A\u5185\u8054\u6837\u5F0F\u7684\u4F18\u5148\u7EA7\u4F1A\u9AD8\u4E8E\u5916\u94FE\u7684\u3002</p><p>\u4F46\u662F\u5B9E\u9645\u60C5\u51B5\u4E0B\u4F1A\u6709\u610F\u5916\u53D1\u751F\uFF0C\u90A3\u5C31\u662F\u5728\u79FB\u52A8\u7AEFiphone\u4E0A\u9762\uFF0C\u89E6\u6478\u4F1A\u89E6\u53D1CSS\u7684hover\uFF0C\u5E76\u4E14\u8FD9\u4E2A\u7684\u89E6\u53D1\u4F1A\u5F88\u9AD8\u6982\u7387\u5730\u5148\u4E8Etouchstart\u4E8B\u4EF6\uFF0C\u5728\u8FD9\u4E2A\u4E8B\u4EF6\u91CC\u9762\u4F1A\u5224\u65AD\u5F53\u524D\u662F\u663E\u793A\u8FD8\u662F\u9690\u85CF\u7684\u72B6\u6001\uFF0C\u7531\u4E8Ecss\u7684hover\u53D1\u6325\u4E86\u4F5C\u7528\uFF0C\u6240\u4EE5\u5224\u65AD\u4E3A\u663E\u793A\uFF0C\u7136\u540E\u53C8\u628A\u5B83\u9690\u85CF\u4E86\u3002</p><p>\u4E5F\u5C31\u662F\u8BF4\uFF0C\u70B9\u4E00\u6B21\u4E0D\u51FA\u6765\uFF0C\u8981\u70B9\u4E24\u6B21\u3002\u6240\u4EE5\u6700\u597D\u522B\u4E24\u4E2A\u540C\u65F6\u5199\u3002\u7B2C\u4E8C\u79CD\u573A\u666F\uFF0C\u4F7F\u7528\u5B50\u5143\u7D20\uFF0C\u8FD9\u4E2A\u66F4\u7B80\u5355\u3002\u628Ahover\u7684\u76EE\u6807\u548C\u9690\u85CF\u7684\u5BF9\u8C61\u5F53\u4F5C\u540C\u4E00\u4E2A\u7236\u5BB9\u5668\u7684\u5B50\u5143\u7D20\uFF0C\u7136\u540Ehover\u5199\u5728\u8FD9\u4E2A\u7236\u5BB9\u5668\u4E0A\u9762\u5C31\u53EF\u4EE5\u4E86\uFF0C\u4E0D\u7528\u50CF\u4E0A\u9762\u90A3\u6837\uFF0C\u9690\u85CF\u5143\u7D20\u4E5F\u8981\u5199\u4E2Ahover\uFF1A</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.marker-container .detail-info</span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> none
<span class="token punctuation">}</span>


<span class="token selector">.marker-container:hover .detail-info</span><span class="token punctuation">{</span>
   <span class="token property">display</span><span class="token punctuation">:</span> block
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18);function f(C,q){const e=p("CodeGroupItem"),l=p("CodeGroup"),o=p("CodeOpen");return u(),r("div",null,[k,a(l,null,{default:t(()=>[a(e,{title:"html"},{default:t(()=>[v]),_:1}),a(e,{title:"css"},{default:t(()=>[m]),_:1})]),_:1}),a(o,{id:"jOzKVZj",type:""}),b,h,g,a(o,{id:"bGvKBvZ",type:""}),_,a(l,null,{default:t(()=>[a(e,{title:"html"},{default:t(()=>[y]),_:1}),a(e,{title:"css"},{default:t(()=>[S]),_:1})]),_:1}),x])}var w=i(d,[["render",f],["__file","14.html.vue"]]);export{w as default};
