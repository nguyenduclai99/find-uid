(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{453:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var o=n(152);var r=n(208),c=n(105);function l(t){return function(t){if(Array.isArray(t))return Object(o.a)(t)}(t)||Object(r.a)(t)||Object(c.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},478:function(t,e,n){"use strict";n.r(e);var o=n(453),r=n(10),c=(n(58),n(102),n(32),n(292),{layout:"blog",data:function(){return{posts:[],idCategory:""}},methods:{getPosts:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$blog.$get("/posts?categories="+t.idCategory,{}).then((function(data){t.loading=!1;var e=[].concat(Object(o.a)(t.posts),Object(o.a)(data));t.posts=e,t.page++})).catch((function(e){t.loading=!1}));case 2:case"end":return e.stop()}}),e)})))()}},created:function(){var t=this.$route.params.slug;this.idCategory=t.split("-")[0],this.getPosts()}}),l=n(4),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.posts.length>0?n("div",{staticClass:"col-lg-8 col-md-8"},[t._l(t.posts,(function(e,o){return n("article",{key:o,staticClass:"post"},[n("div",{staticClass:"post-preview"},[n("NuxtLink",{attrs:{to:"/blog/"+e.id+"-"+e.slug+".html"}},[n("img",{attrs:{src:e.yoast_head_json.og_image?e.yoast_head_json.og_image[0].url:"/img/hero-bg-2.jpeg",alt:e.yoast_head_json.title}})])],1),t._v(" "),n("div",{staticClass:"post-wrapper"},[n("div",{staticClass:"post-header"},[n("h2",{staticClass:"post-title"},[n("NuxtLink",{attrs:{to:"/blog/"+e.id+"-"+e.slug+".html"},domProps:{innerHTML:t._s(e.title.rendered)}})],1),t._v(" "),n("ul",{staticClass:"post-meta"},[n("li",[t._v(t._s(new Date(e.date).toDateString()))]),t._v(" "),n("li",[t._v("Administrator")])])]),t._v(" "),n("div",{staticClass:"post-content"},[n("p",{domProps:{innerHTML:t._s(e.excerpt.rendered)}})]),t._v(" "),n("div",{staticClass:"post-more pt-4 align-items-center d-flex"},[n("NuxtLink",{staticClass:"btn solid-btn",attrs:{to:"/blog/"+e.id+"-"+e.slug+".html"}},[t._v("\n                    Xem thêm "),n("span",{staticClass:"ti-arrow-right"})])],1)])])})),t._v(" "),t.posts.length>0?n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("nav",{staticClass:"custom-pagination-nav"},[n("ul",{staticClass:"pagination justify-content-center"},[n("div",{staticClass:"post-more pt-4 align-items-center d-flex"},[n("button",{staticClass:"btn solid-btn",on:{click:t.getPosts}},[t._v("Load more")])])])])])]):t._e()],2):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);