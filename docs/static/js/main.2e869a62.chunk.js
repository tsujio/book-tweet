(this["webpackJsonpbook-tweet"]=this["webpackJsonpbook-tweet"]||[]).push([[0],{37:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),o=n.n(c),s=n(13),i=n.n(s),l=n(8),r=n(9),d=n(12),j=n(11),h=n(10),b=n(59),u=n(56),p=n(29),O=n(61),k=n(54),m=n(28),f=n(63),x=n(55),v=(n(37),function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={value:""},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a}return Object(r.a)(n,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.state.value.length<=0?this.props.onCandidateBooksUpdate(null):fetch("https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?applicationId=1035158805071077100&title="+encodeURIComponent(this.state.value)).then((function(e){return e.json()})).then((function(e){return t.props.onCandidateBooksUpdate(e)}))}},{key:"render",value:function(){return Object(a.jsx)(O.a,{className:"book-search-form",onSubmit:this.handleSubmit,children:Object(a.jsxs)(k.a,{className:"mb-3",children:[Object(a.jsx)(m.a,{placeholder:"\u672c\u3092\u691c\u7d22\u3057\u3066\u30c4\u30a4\u30fc\u30c8\u3057\u307e\u3059",value:this.state.value,onChange:this.handleChange}),Object(a.jsx)(k.a.Append,{children:Object(a.jsx)(f.a,{variant:"primary",type:"submit",children:Object(a.jsx)(x.a,{})})})]})})}}]),n}(o.a.Component)),g=n(62);function C(e){return'"'.concat(e.title||"",'",')+" ".concat(e.author||"",",")+" ".concat(e.publisherName||"",",")+" ".concat(y(e.salesDate).slice(0,2).filter((function(e){return e})).join("/")||"")+" ".concat(e.itemUrl||"")+"\n#".concat("\u3088\u3080\u3088\u3080\u4f1a"," ").concat("https://yomuyomukai.tsujio.org")}function y(e){var t=e.match(/\s*(\d+)\D+(\d+)\D+(\d+)/);return t?[parseInt(t[1]),parseInt(t[2]),parseInt(t[3])]:(t=e.match(/\s*(\d+)\D+(\d+)/))?[parseInt(t[1]),parseInt(t[2]),null]:(t=e.match(/\s*(\d+)/))?[parseInt(t[1]),null,null]:[null,null,null]}n(41);var B=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){if(!this.props.book)return null;var e=this.props.book;return Object(a.jsxs)("div",{className:"book",children:[Object(a.jsx)("div",{className:"book-img-container",children:Object(a.jsx)("img",{src:e.mediumImageUrl,alt:e.title})}),Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{className:"book-title",children:e.title}),Object(a.jsx)("span",{className:"book-authors",children:e.author}),Object(a.jsx)("span",{className:"book-publisher",children:e.publisherName}),Object(a.jsx)("span",{className:"book-published-date",children:y(e.salesDate).slice(0,2).filter((function(e){return e})).join("/")}),Object(a.jsx)("span",{className:"book-isbn",children:e.isbn})]})]})}}]),n}(o.a.Component),N=(n(42),function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleClick=a.handleClick.bind(Object(d.a)(a)),a}return Object(r.a)(n,[{key:"handleClick",value:function(e){this.props.onClick(this.props.book)}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"candidate-book",onClick:this.handleClick,children:Object(a.jsx)(B,{book:this.props.book})})}}]),n}(o.a.Component)),S=(n(43),function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this;if(this.props.candidateBooks.length<=0)return null;var t=this.props.candidateBooks.Items.map((function(t,n){return Object(a.jsx)(g.a.Item,{className:"candidate-books-item",children:Object(a.jsx)(N,{book:t.Item,onClick:e.props.onSelect})})}));return Object(a.jsx)(g.a,{children:t})}}]),n}(o.a.Component)),w=(n(44),function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return this.props.book?Object(a.jsx)("div",{className:"selected-book",children:Object(a.jsx)(B,{book:this.props.book})}):null}}]),n}(o.a.Component)),I=(n(45),function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){if(!this.props.book)return null;var e=C(this.props.book),t="http://twitter.com/share?url=".concat(encodeURIComponent(e));return Object(a.jsx)(u.a,{children:Object(a.jsx)(p.a,{children:Object(a.jsx)(f.a,{className:"tweet-button",variant:"primary",href:t,block:!0,target:"_blank",children:"\u3053\u306e\u672c\u3092\u30c4\u30a4\u30fc\u30c8\u3059\u308b"})})})}}]),n}(o.a.Component)),T=n(27),U=n(60),D=n(57),J=n(58),R=(n(46),function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={tooltipShown:!1},a.handleClick=a.handleClick.bind(Object(d.a)(a)),a.handleTooltipToggle=a.handleTooltipToggle.bind(Object(d.a)(a)),a}return Object(r.a)(n,[{key:"handleClick",value:function(e){navigator.clipboard&&navigator.clipboard.writeText(C(this.props.book))}},{key:"handleTooltipToggle",value:function(e){var t=this;this.setState({tooltipShown:e}),setTimeout((function(){t.setState({tooltipShown:!1})}),1e3)}},{key:"render",value:function(){return this.props.book?Object(a.jsx)(u.a,{children:Object(a.jsx)(p.a,{children:Object(a.jsx)(U.a,{placement:"bottom",trigger:"click",show:this.state.tooltipShown,onToggle:this.handleTooltipToggle,overlay:function(e){return Object(a.jsx)(D.a,Object(T.a)(Object(T.a)({},e),{},{children:"Copied"}))},children:Object(a.jsx)(f.a,{className:"tweet-text-copy-button",variant:"light",onClick:this.handleClick,children:Object(a.jsx)(J.a,{})})})})}):null}}]),n}(o.a.Component)),A=(n(48),function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={candidateBooks:[],selectedBook:null},a.handleCandidateBooksUpdate=a.handleCandidateBooksUpdate.bind(Object(d.a)(a)),a.handleBookSelect=a.handleBookSelect.bind(Object(d.a)(a)),a}return Object(r.a)(n,[{key:"handleCandidateBooksUpdate",value:function(e){e?this.setState({candidateBooks:e,selectedBook:null}):this.setState({candidateBooks:[],selectedBook:null})}},{key:"handleBookSelect",value:function(e){this.setState({candidateBooks:[],selectedBook:e})}},{key:"render",value:function(){return Object(a.jsxs)(b.a,{children:[Object(a.jsx)(u.a,{className:"justify-content-center",children:Object(a.jsx)(p.a,{xs:12,md:10,lg:8,children:Object(a.jsx)("div",{className:"header",children:Object(a.jsx)("h1",{children:"\u672c\u3092\u3088\u3080\u3088\u3080\u4f1a"})})})}),Object(a.jsx)(u.a,{className:"justify-content-center",children:Object(a.jsx)(p.a,{xs:12,md:10,lg:8,children:Object(a.jsx)(v,{onCandidateBooksUpdate:this.handleCandidateBooksUpdate})})}),Object(a.jsx)(u.a,{className:"justify-content-center",children:Object(a.jsx)(p.a,{xs:12,md:10,lg:8,children:Object(a.jsx)(S,{candidateBooks:this.state.candidateBooks,onSelect:this.handleBookSelect})})}),Object(a.jsx)(u.a,{className:"justify-content-center",children:Object(a.jsx)(p.a,{xs:12,md:10,lg:8,children:Object(a.jsx)(w,{book:this.state.selectedBook})})}),Object(a.jsxs)(u.a,{className:"justify-content-center",children:[Object(a.jsx)(p.a,{xs:10,md:8,lg:6,children:Object(a.jsx)(I,{book:this.state.selectedBook})}),Object(a.jsx)(p.a,{xs:2,md:1,lg:1,children:Object(a.jsx)(R,{book:this.state.selectedBook})})]}),Object(a.jsx)(u.a,{className:"justify-content-center",children:Object(a.jsx)(p.a,{xs:12,md:10,lg:8,children:Object(a.jsx)("div",{className:"footer",children:Object(a.jsxs)("span",{children:["\xa9 ",Object(a.jsx)("a",{href:"https://www.tsujio.org",children:"\u8fbb\u5c3e\u7814"})]})})})})]})}}]),n}(o.a.Component));i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(A,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.2e869a62.chunk.js.map