(this["webpackJsonpreact-hw-03-image-fiinder"]=this["webpackJsonpreact-hw-03-image-fiinder"]||[]).push([[0],{2:function(e,t,a){e.exports={App:"styles_App__YvBup",Searchbar:"styles_Searchbar__xsUfw",SearchForm:"styles_SearchForm__moQgQ",form:"styles_form__1Nnt1",label:"styles_label__OdBjV",seaIntut:"styles_seaIntut__3GC2E",ImageGallery:"styles_ImageGallery__2PMS-",ImageGalleryItem:"styles_ImageGalleryItem__1wXkq",ImageGalleryItemimage:"styles_ImageGalleryItemimage__1mvWm",Overlay:"styles_Overlay__1Udm3",Modal:"styles_Modal__1zzyJ",Button:"styles_Button__1Zg6i"}},24:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(3),s=a.n(n),o=a(19),r=a.n(o),c=(a(24),a(10)),l=a(4),i=a(5),m=a(7),u=a(6),g=a(9),h=a.n(g),d=a(2),p=a.n(d),b=a(0),j=function(e){var t=e.images,a=e.getImage;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("ul",{className:p.a.ImageGallery,children:t.map((function(e){var t=e.id,n=e.previewURL,s=e.largeImageURL;return Object(b.jsx)("li",{className:p.a.ImageGalleryItem,children:Object(b.jsx)("img",{className:p.a.ImageGalleryItemimage,onClick:function(){return a(s)},src:n,alt:"rg"})},t)}))})})},y=function(e){var t=e.handlSubmit,a=e.handlChange;return Object(b.jsxs)("form",{className:p.a.SearchForm,onSubmit:t,children:[Object(b.jsx)("button",{type:"submit",className:p.a.form,children:Object(b.jsx)("span",{className:p.a.label,children:"Search"})}),Object(b.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:a})]})},f=function(e){var t=e.getMore;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("button",{type:"button",className:p.a.Button,onClick:t,children:"Load more"})})},_=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.props.closeModal)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.props.closeModal)}},{key:"render",value:function(){return Object(b.jsx)("div",{className:p.a.Overlay,onClick:this.props.closeModal,children:Object(b.jsx)("div",{className:p.a.Modal,children:Object(b.jsx)("img",{src:this.props.largeImage,alt:"sac",width:"480px",height:"320px"})})})}}]),a}(n.Component),O=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={inputValue:"",images:[],pages:1,showModal:!1,isModalOpen:!1,largeImage:""},e.closeModal=function(t){"IMG"===t.target.nodeName&&"Escape"!==t.key||e.setState({showModal:!1})},e.toogleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.handlChange=function(t){e.setState({inputValue:t.currentTarget.value})},e.handlSubmit=function(t){t.preventDefault(),console.log(e.state),h.a.get("https://pixabay.com/api/?q=".concat(e.state.inputValue,"&page=1\n        &key=21154603-c9a2e40d899ce118beef17ceb&image_type=photo&orientation=horizontal&per_page=12")).then((function(t){e.setState({images:t.data.hits})}))},e.getMore=function(){h.a.get("https://pixabay.com/api/?q=".concat(e.state.inputValue,"&page=").concat(e.state.pages+1,"&key=21154603-c9a2e40d899ce118beef17ceb&image_type=photo&orientation=horizontal&per_page=12")).then((function(t){e.setState((function(e){return{images:[].concat(Object(c.a)(e.images),Object(c.a)(t.data.hits)),pages:e.pages+1}}))}))},e.getImage=function(t){e.setState({largeImage:t}),e.toogleModal()},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.images,a=e.showModal;return Object(b.jsxs)("header",{className:"Searchbar",children:[Object(b.jsx)(y,{handlChange:this.handlChange,handlSubmit:this.handlSubmit}),Object(b.jsx)(j,{images:t,getImage:this.getImage}),Object(b.jsx)(f,{getMore:this.getMore}),a&&Object(b.jsx)(_,{closeModal:this.closeModal,largeImage:this.state.largeImage,children:"image"})]})}}]),a}(n.Component);var x=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(O,{})})};r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.af680436.chunk.js.map