(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(2),l=n.n(c),o=(n(12),n(3)),u=n(4),i=n(6),s=n(5),b=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={currentIndex:0},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this,e=this.props.tabs,n=this.state.currentIndex;return r.a.createElement("div",null,r.a.createElement("div",null,e.map((function(e,n){return r.a.createElement("button",{key:e.title,type:"button",onClick:function(){return t.setState({currentIndex:n})}},e.title)}))),r.a.createElement("div",null,e[n].content))}}]),n}(r.a.Component),m=[{title:"Tab 1",content:"Some text 1"},{title:"Tab 2",content:"Some text 2"},{title:"Tab 3",content:"Some text 3"}],p=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"React tabs"),r.a.createElement(b,{tabs:m}))};l.a.render(r.a.createElement(p,null),document.getElementById("root"))},7:function(t,e,n){t.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.6f73b73b.chunk.js.map