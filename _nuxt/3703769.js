(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{477:function(t,e,o){"use strict";o.r(e);var n=o(10),r=(o(32),o(289),o(58),o(208),{layout:"blog",head:function(){return{title:this.post?this.post.yoast_head_json.og_title:"",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width,initial-scale=1.0,user-scalable=0,minimal-ui"},{hid:"description",name:"description",content:this.post?this.post.yoast_head_json.og_description:""},{hid:"og:description",name:"og:description",content:this.post?this.post.yoast_head_json.og_description:""},{hid:"keywords",name:"keywords",content:"1989s Media, 1989s Media Blog"},{hid:"dc.keywords",name:"dc.keywords",content:"1989s Media, 1989s Media Blog"},{hid:"news_keywords",name:"news_keywords",content:"1989s Media, 1989s Media Blog"},{hid:"og:url",name:"og:url",content:this.baseUrl},{hid:"og:site_name",name:"og:site_name",content:this.post&&this.post.yoast_head_json.og_image?this.post.yoast_head_json.og_site_name:"1989s Media"},{hid:"dc.title",name:"dc.title",content:this.post?this.post.yoast_head_json.og_title:"1989s Media"},{hid:"og:title",name:"og:title",content:this.post?this.post.yoast_head_json.og_title:"1989s Media"},{hid:"og:image",name:"og:image",content:this.post&&this.post.yoast_head_json.og_image?this.post.yoast_head_json.og_image[0].url:this.baseUrl+"/img/hero-bg-2.jpeg"},{name:"format-detection",content:"telephone=no"},{name:"robots",content:"index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"},{rel:"apple-touch-icon",sizes:"180x180",type:"image/x-icon",href:"/favicon.ico"},{rel:"canonical",href:this.url}]}},data:function(){return{post:null,url:null,baseUrl:null,id:null}},methods:{getPost:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$blog.get("/posts/"+t.id,{});case 2:o=e.sent,t.post=o.data;case 4:case"end":return e.stop()}}),e)})))()}},created:function(){var t=this.$route.params.slug;this.id=t.split("-")[0],this.getPost()}}),d=o(4),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.post?o("div",{staticClass:"col-lg-8 col-md-8"},[o("article",{staticClass:"post"},[o("div",{staticClass:"post-preview"},[o("img",{staticClass:"img-fluid rounded",attrs:{src:t.post.yoast_head_json.og_image?t.post.yoast_head_json.og_image[0].url:"/img/hero-bg-2.jpeg",alt:t.post.yoast_head_json.title,title:t.post.yoast_head_json.title}})]),t._v(" "),o("div",{staticClass:"post-wrapper"},[o("div",{staticClass:"post-header"},[o("h1",{staticClass:"post-title",domProps:{innerHTML:t._s(t.post.title.rendered)}}),t._v(" "),o("ul",{staticClass:"post-meta"},[o("li",[t._v(t._s(new Date(t.post.date).toDateString()))]),t._v(" "),o("li",[t._v("Administrator")])])]),t._v(" "),o("div",{staticClass:"post-content"},[o("p",{domProps:{innerHTML:t._s(t.post.content.rendered)}})]),t._v(" "),t._m(0)])])]):t._e()}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"post-footer"},[o("div",{staticClass:"post-tags"},[o("a",{attrs:{href:"#"}},[t._v("Lifestyle")]),o("a",{attrs:{href:"#"}},[t._v("Music")]),o("a",{attrs:{href:"#"}},[t._v("News")]),o("a",{attrs:{href:"#"}},[t._v("Travel")])])])}],!1,null,null,null);e.default=component.exports}}]);