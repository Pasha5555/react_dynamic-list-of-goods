(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{15:function(t,n,e){},16:function(t,n,e){"use strict";e.r(n);var o=e(0),a=e.n(o),r=e(3),c=e.n(r),u=e(1),s=e.n(u),i=e(4),l=e(5),d=e(6),f=e(8),m=e(7),h=(e(15),"https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json");var p=function(t){var n=t.goods;return a.a.createElement("ul",null,n.map((function(t){return a.a.createElement("li",{key:t.id,style:{color:"".concat(t.color)}},t.name)})))},b=function(t){Object(f.a)(e,t);var n=Object(m.a)(e);function e(){var t;Object(l.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=n.call.apply(n,[this].concat(a))).state={goods:[]},t.handleLoad=function(){var n=Object(i.a)(s.a.mark((function n(e){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.then((function(n){t.setState({goods:n})}));case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),t}return Object(d.a)(e,[{key:"render",value:function(){var t=this,n=this.state.goods;return a.a.createElement("div",null,a.a.createElement("h1",null,"Dynamic list of Goods"),a.a.createElement("button",{type:"button",className:"buttons",onClick:function(){return t.handleLoad(fetch(h).then((function(t){return t.json()})))}},"Load All Goods")," ",a.a.createElement("button",{type:"button",className:"buttons",onClick:function(){return t.handleLoad(fetch(h).then((function(t){return t.json()})).then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5)})))}},"Load 5 first goods")," ",a.a.createElement("button",{type:"button",className:"buttons",onClick:function(){return t.handleLoad(fetch(h).then((function(t){return t.json()})).then((function(t){return t.filter((function(t){return"red"===t.color}))})))}},"Load red goods"),n&&a.a.createElement(p,{goods:n}))}}]),e}(a.a.Component);c.a.render(a.a.createElement(b,null),document.getElementById("root"))},9:function(t,n,e){t.exports=e(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.266c3f38.chunk.js.map