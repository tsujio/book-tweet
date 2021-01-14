(this["webpackJsonpbook-tweet"]=this["webpackJsonpbook-tweet"]||[]).push([[0],{29:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),o=n.n(c),s=n(20),i=n.n(s),r=n(7),l=n(8),d=n(12),u=n(10),j=n(9),h=n(45),b=n(43),O=n(22),k=n(47),p=n(41),f=n(21),m=n(48),v=n(42),x=(n(29),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={value:""},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a}return Object(l.a)(n,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.state.value.length<=0?this.props.onCandidateBooksUpdate(null):fetch("https://www.googleapis.com/books/v1/volumes?q="+encodeURIComponent(this.state.value)).then((function(e){return e.json()})).then((function(e){return t.props.onCandidateBooksUpdate(e)}))}},{key:"render",value:function(){return Object(a.jsx)(k.a,{className:"book-search-form",onSubmit:this.handleSubmit,children:Object(a.jsxs)(p.a,{className:"mb-3",children:[Object(a.jsx)(f.a,{placeholder:"\u672c\u3092\u691c\u7d22\u3057\u3066\u30c4\u30a4\u30fc\u30c8\u3057\u307e\u3059",value:this.state.value,onChange:this.handleChange}),Object(a.jsx)(p.a.Append,{children:Object(a.jsx)(m.a,{variant:"primary",type:"submit",children:Object(a.jsx)(v.a,{})})})]})})}}]),n}(o.a.Component)),C=n(46),y=(n(33),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(r.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"extractISBN",value:function(e){return e.volumeInfo.industryIdentifiers?e.volumeInfo.industryIdentifiers.filter((function(e){return e.type.match(/isbn/i)})).reduce((function(e,t){return e.identifier.length>t.identifier.length?e:t}),{identifier:""}).identifier:""}},{key:"render",value:function(){if(!this.props.book)return null;var e=this.props.book;return Object(a.jsxs)("div",{className:"book",children:[Object(a.jsx)("div",{className:"book-img-container",children:Object(a.jsx)("img",{src:(e.volumeInfo.imageLinks||{}).smallThumbnail})}),Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{className:"book-title",children:e.volumeInfo.title}),Object(a.jsx)("span",{className:"book-authors",children:(e.volumeInfo.authors||[]).join(", ")}),Object(a.jsx)("span",{className:"book-publisher",children:e.volumeInfo.publisher}),Object(a.jsx)("span",{className:"book-published-date",children:e.volumeInfo.publishedDate}),Object(a.jsx)("span",{className:"book-isbn",children:this.extractISBN(e)})]})]})}}]),n}(o.a.Component)),g=(n(34),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).handleClick=a.handleClick.bind(Object(d.a)(a)),a}return Object(l.a)(n,[{key:"handleClick",value:function(e){this.props.onClick(this.props.book)}},{key:"render",value:function(){this.props.book;return Object(a.jsx)("div",{className:"candidate-book",onClick:this.handleClick,children:Object(a.jsx)(y,{book:this.props.book})})}}]),n}(o.a.Component)),B=(n(35),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(r.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;if(this.props.candidateBooks.length<=0)return null;var t=this.props.candidateBooks.items.map((function(t,n){return Object(a.jsx)(C.a.Item,{className:"candidate-books-item",children:Object(a.jsx)(g,{book:t,onClick:e.props.onSelect})})}));return Object(a.jsx)(C.a,{children:t})}}]),n}(o.a.Component)),N=(n(36),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(r.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){return this.props.book?Object(a.jsx)("div",{className:"selected-book",children:Object(a.jsx)(y,{book:this.props.book})}):null}}]),n}(o.a.Component));function I(e){return'"'.concat(e.volumeInfo.title||"",'",')+" ".concat((e.volumeInfo.authors||[]).join(", "),",")+" ".concat(e.volumeInfo.publisher||"",",")+" ".concat(e.volumeInfo.publishedDate||"")+" ".concat(e.volumeInfo.canonicalVolumeLink||"")+"\n#".concat("\u3088\u3080\u3088\u3080\u4f1a"," ").concat("https://yomuyomukai.tsujio.org")}n(37);var S=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(r.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){if(!this.props.book)return null;var e=I(this.props.book),t="http://twitter.com/share?url=".concat(encodeURIComponent(e));return Object(a.jsx)(b.a,{children:Object(a.jsx)(O.a,{children:Object(a.jsx)(m.a,{className:"tweet-button",variant:"primary",href:t,block:!0,target:"_blank",children:"\u3053\u306e\u672c\u3092\u30c4\u30a4\u30fc\u30c8\u3059\u308b"})})})}}]),n}(o.a.Component),w=n(44),U=(n(38),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).handleClick=a.handleClick.bind(Object(d.a)(a)),a}return Object(l.a)(n,[{key:"handleClick",value:function(e){navigator.clipboard&&navigator.clipboard.writeText(I(this.props.book))}},{key:"render",value:function(){return this.props.book?Object(a.jsx)(b.a,{children:Object(a.jsx)(O.a,{children:Object(a.jsx)(m.a,{className:"tweet-text-copy-button",variant:"light",onClick:this.handleClick,children:Object(a.jsx)(w.a,{})})})}):null}}]),n}(o.a.Component)),D=(n(39),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={candidateBooks:[],selectedBook:null},a.handleCandidateBooksUpdate=a.handleCandidateBooksUpdate.bind(Object(d.a)(a)),a.handleBookSelect=a.handleBookSelect.bind(Object(d.a)(a)),a}return Object(l.a)(n,[{key:"handleCandidateBooksUpdate",value:function(e){e?this.setState({candidateBooks:e,selectedBook:null}):this.setState({candidateBooks:[],selectedBook:null})}},{key:"handleBookSelect",value:function(e){this.setState({candidateBooks:[],selectedBook:e})}},{key:"render",value:function(){return Object(a.jsxs)(h.a,{children:[Object(a.jsx)(b.a,{className:"justify-content-center",children:Object(a.jsx)(O.a,{xs:12,md:10,lg:8,children:Object(a.jsx)("div",{className:"header",children:Object(a.jsx)("h1",{children:"\u672c\u3092\u3088\u3080\u3088\u3080\u4f1a"})})})}),Object(a.jsx)(b.a,{className:"justify-content-center",children:Object(a.jsx)(O.a,{xs:12,md:10,lg:8,children:Object(a.jsx)(x,{onCandidateBooksUpdate:this.handleCandidateBooksUpdate})})}),Object(a.jsx)(b.a,{className:"justify-content-center",children:Object(a.jsx)(O.a,{xs:12,md:10,lg:8,children:Object(a.jsx)(B,{candidateBooks:this.state.candidateBooks,onSelect:this.handleBookSelect})})}),Object(a.jsx)(b.a,{className:"justify-content-center",children:Object(a.jsx)(O.a,{xs:12,md:10,lg:8,children:Object(a.jsx)(N,{book:this.state.selectedBook})})}),Object(a.jsxs)(b.a,{className:"justify-content-center",children:[Object(a.jsx)(O.a,{xs:10,md:8,lg:6,children:Object(a.jsx)(S,{book:this.state.selectedBook})}),Object(a.jsx)(O.a,{xs:2,md:1,lg:1,children:Object(a.jsx)(U,{book:this.state.selectedBook})})]}),Object(a.jsx)(b.a,{className:"justify-content-center",children:Object(a.jsx)(O.a,{xs:12,md:10,lg:8,children:Object(a.jsx)("div",{className:"footer",children:Object(a.jsxs)("span",{children:["\xa9 ",Object(a.jsx)("a",{href:"https://www.tsujio.org",children:"\u8fbb\u5c3e\u7814"})]})})})})]})}}]),n}(o.a.Component));i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(D,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.8af37630.chunk.js.map