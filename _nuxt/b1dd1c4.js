(window.webpackJsonp=window.webpackJsonp||[]).push([[36,13],{446:function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return f}));n(32),n(292),n(447),n(16),n(57);var r=n(22),o=n(150),c=r.a.menu;function l(t){var e=t.path.split("/"),n=""!=v(e[1])?v(e[1]):"Facebook",r=c[n].find((function(e){return e.url==t.path}));return Object(o.b)(r),r}function v(t){return t.charAt(0).toUpperCase()+t.slice(1)}function f(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:11,n=[],i=1;i<e;i++){var r={number:t.number*i,price:t.price*i};n.push(r)}return n}},447:function(t,e,n){"use strict";var r=n(3),o=n(101).find,c=n(207),l="find",v=!0;l in[]&&Array(1).find((function(){v=!1})),r({target:"Array",proto:!0,forced:v},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),c(l)},456:function(t,e,n){"use strict";var r=n(3),o=n(457);r({target:"String",proto:!0,forced:n(458)("link")},{link:function(t){return o(this,"a","href",t)}})},457:function(t,e,n){var r=n(5),o=n(27),c=n(14),l=/"/g,v=r("".replace);t.exports=function(t,e,n,r){var f=c(o(t)),m="<"+e;return""!==n&&(m+=" "+n+'="'+v(c(r),l,"&quot;")+'"'),m+">"+f+"</"+e+">"}},458:function(t,e,n){var r=n(6);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},462:function(t,e,n){"use strict";n.r(e);var r=n(10),o=(n(58),n(33),n(456),n(446)),c={head:function(){return{title:this.$service.name+this.$siteName}},data:function(){return{loading:!1,urlTiktok:"",link:"",username:""}},methods:{convertLinkToUID:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t.link="",t.urlTiktok){e.next=6;break}t.$notify.error({title:"Error",message:"Vui lòng nhập link cần convert"}),e.next=9;break;case 6:return t.loading=!0,e.next=9,t.$axios.$post("/v1/tiktok/convert-link-share",{link:t.urlTiktok}).then((function(e){var data=e.data;t.loading=!1,!data||data.length<=0?t.$notify.error({title:"Error",message:"Get UID thất bại."}):(t.link=data,t.$notify({title:"Success",message:"Get UID thành công.",type:"success"}))})).catch((function(e){t.loading=!1,t.$notify.error({title:"Error",message:"Đã xảy ra lỗi, vui lòng thử lại sau."})}));case 9:e.next=13;break;case 11:e.prev=11,e.t0=e.catch(0);case 13:case"end":return e.stop()}}),e,null,[[0,11]])})))()},copyURL:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.clipboard.writeText(t.link);case 3:t.$notify({title:"Success",message:"Copy thành công.",type:"success"}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),t.$notify.error({title:"Error",message:"Copy thất bại."});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()}},created:function(){Object(o.b)(this.$route)}},l=n(4),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row align-items-center justify-content-between"},[n("div",{staticClass:"col-md-12 col-lg-1"}),t._v(" "),n("div",{staticClass:"col-md-12 col-lg-10"},[n("div",{staticClass:"hero-content-left text-white mt-5"},[n("h1",{staticClass:"text-white font-weight-bold text-center"},[t._v("Tìm link Gốc bằng Link Share")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.urlTiktok,expression:"urlTiktok"}],staticClass:"form-control custom-input",attrs:{type:"text",placeholder:"Nhập link facebook cần tìm ID",required:""},domProps:{value:t.urlTiktok},on:{input:function(e){e.target.composing||(t.urlTiktok=e.target.value)}}}),t._v(" "),n("div",{staticClass:"text-center custom-btn"},[t.loading?t._e():n("button",{staticClass:"btn google-play-btn mr-3 custom-btn col-md-12 col-lg-3",on:{click:t.convertLinkToUID}},[t._v("Tìm Link Ngay")])]),t._v(" "),t.loading?n("div",{staticClass:"text-center",staticStyle:{margin:"10px 0 0 0"}},[t._m(0)]):t._e(),t._v(" "),t.link?n("div",{staticClass:"show-uid-facebook"},[n("div",{staticClass:"form-group design-form-input-UID-bottom text-center my-5 py-5"},[t._m(1),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"col"},[n("h4",{staticClass:"font-bold text-left custom-text"},[t._v("Link gốc: ")]),t._v(" "),n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.link,expression:"link"}],staticClass:"form-control custom-input",attrs:{type:"text",disabled:!0,placeholder:"Nhập link facebook cần tìm ID","aria-label":"Amount"},domProps:{value:t.link},on:{input:function(e){e.target.composing||(t.link=e.target.value)}}}),t._v(" "),n("button",{staticClass:"btn btn-outline-primary waves-effect",on:{click:t.copyURL}},[t._v("Copy")])])])])])])]):t._e()])]),t._v(" "),n("div",{staticClass:"col-md-12 col-lg-1"})])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spinner-border icon",attrs:{role:"status"}},[n("span",{staticClass:"sr-only"},[t._v("Loading...")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h2",{staticClass:"text-white custom-text"},[t._v("Chúc mừng bạn đã tìm thành công! ID cần tìm là")])])}],!1,null,null,null);e.default=component.exports},477:function(t,e,n){"use strict";n.r(e);var r={components:{TiktokConvertByLinkShare:n(462).default},name:"TiktokConvertLinkShare"},o=n(4),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("TiktokConvertByLinkShare")}),[],!1,null,null,null);e.default=component.exports}}]);