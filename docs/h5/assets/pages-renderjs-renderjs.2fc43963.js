import{d as s,r as e,o as n,c as o,w as t,a as l,b as a,t as r,k as i,z as c,A as d}from"./index.497973e8.js";const h={data:()=>({msg:"hello renjerjs"}),methods:{handleClick2(s,e){console.log(s),console.log(this.$ownerInstance.selectComponent(".div").setStyle({color:"red"}));const n=this.$ownerInstance.selectComponent(".div");console.log(n.hasClass("div")),this.$ownerInstance.callMethod("handleClick","xxxxx"),this.test=2222,console.log(e)}}};var m=s=>{s.$renderjs||(s.$renderjs=[]),s.$renderjs.push("renderjs"),s.mixins||(s.mixins=[]),s.mixins.push({beforeCreate(){this.renderjs=this},mounted(){this.$ownerInstance=this.$gcd(this,!0)}}),s.mixins.push(h)};const u=s({setup(s){const h=d(),m=e(0),u=s=>{console.log(s),h.data.msg="handleClick"};return(s,e)=>{const d=i,h=c;return n(),o(d,null,{default:t((()=>[l(d,{class:"div",onClick:u},{default:t((()=>[a(r(s.renderjs.msg),1)])),_:1}),l(h,{onClick:s.renderjs.handleClick2},{default:t((()=>[a(" 点击"+r(m.value),1)])),_:1},8,["onClick"])])),_:1})}}});m(u);export{u as default};
//# sourceMappingURL=pages-renderjs-renderjs.2fc43963.js.map
