(window.webpackJsonp=window.webpackJsonp||[]).push([[32,4,6,7,8,9],{446:function(n,t,h){"use strict";h.d(t,"b",(function(){return l})),h.d(t,"a",(function(){return m}));h(32),h(292),h(447),h(16),h(57);var c=h(22),e=h(150),o=c.a.menu;function l(n){var t=n.path.split("/"),h=""!=r(t[1])?r(t[1]):"Facebook",c=o[h].find((function(t){return t.url==n.path}));return Object(e.b)(c),c}function r(n){return n.charAt(0).toUpperCase()+n.slice(1)}function m(n){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:11,h=[],i=1;i<t;i++){var c={number:n.number*i,price:n.price*i};h.push(c)}return h}},447:function(n,t,h){"use strict";var c=h(3),e=h(101).find,o=h(207),l="find",r=!0;l in[]&&Array(1).find((function(){r=!1})),c({target:"Array",proto:!0,forced:r},{find:function(n){return e(this,n,arguments.length>1?arguments[1]:void 0)}}),o(l)},448:function(n,t,h){"use strict";h.r(t);var c={props:["QA"]},e=h(4),component=Object(e.a)(c,(function(){var n=this,t=n.$createElement,h=n._self._c||t;return h("section",{staticClass:"download-section pt-100 gray-light-bg"},[h("div",{staticClass:"container"},[h("div",{staticClass:"row"},[h("div",{staticClass:"col-lg-12 col-md-10"},[h("div",{staticClass:"section-heading mb-5"},[h("h2",{staticClass:"mb-6 text-center"},[n._v(n._s(n.QA.h2))])])])]),n._v(" "),h("div",{staticClass:"row align-items-center justify-content-between"},[h("div",{staticClass:"col-lg-12"},[h("div",{staticClass:"accordion accordion-faq pb-100",attrs:{id:"accordion-1"}},n._l(n.QA.contents,(function(t,c){return h("div",{key:c,staticClass:"card"},[h("div",{staticClass:"card-header py-4",attrs:{id:"heading-1-"+c+1,"data-toggle":"collapse",role:"button","data-target":"#collapse-1-"+c+1,"aria-expanded":"false","aria-controls":"collapse-1-1"+c+1}},[h("h6",{staticClass:"mb-0"},[h("span",{staticClass:"ti-receipt mr-3"}),n._v(" "+n._s(t.question))])]),n._v(" "),h("div",{staticClass:"collapse",attrs:{id:"collapse-1-"+c+1,"aria-labelledby":"heading-1-1"+c+1,"data-parent":"#accordion-1"}},[h("div",{staticClass:"card-body"},n._l(t.answers,(function(t,c){return h("p",{key:c},[h("span",[n._v(n._s(t))])])})),0)])])})),0)])])])])}),[],!1,null,null,null);t.default=component.exports},449:function(n,t,h){"use strict";h.r(t);var c={props:["priceList","type","h2","serviceInfo"]},e=h(4),component=Object(e.a)(c,(function(){var n=this,t=n.$createElement,h=n._self._c||t;return h("section",{staticClass:"promo-section mt-5 ptb-100"},[h("div",{staticClass:"container"},[h("div",{staticClass:"row"},[h("div",{staticClass:"col-lg-12 col-md-10"},[h("div",{staticClass:"section-heading mb-5"},[h("h2",{staticClass:"mb-6 text-center"},[n._v(n._s(n.h2))])])])]),n._v(" "),h("div",{staticClass:"row"},[h("table",{staticClass:"table table-bordered"},[n._m(0),n._v(" "),h("tbody",n._l(n.priceList,(function(t,c){return h("tr",{key:c},[h("td",{staticClass:"text-center"},[n._v(n._s(new Intl.NumberFormat("de-DE").format(t.number))+" "+n._s(n.type))]),n._v(" "),h("td",{staticClass:"text-center"},[n._v(n._s(new Intl.NumberFormat("de-DE").format(t.price))+"đ")])])})),0)]),n._v(" "),n.serviceInfo?h("div",{staticClass:"feature-contents section-heading"},[h("h5",[n._v(n._s(n.serviceInfo.h2))]),n._v(" "),n._l(n.serviceInfo.contents,(function(content,t){return h("li",{key:t,staticClass:"custom"},[n._v("\n                "+n._s(content))])}))],2):n._e()])])])}),[function(){var n=this,t=n.$createElement,h=n._self._c||t;return h("thead",{staticClass:"thead-dark"},[h("tr",[h("th",{staticClass:"text-center",attrs:{scope:"col"}},[n._v("Số lượng")]),n._v(" "),h("th",{staticClass:"text-center",attrs:{scope:"col"}},[n._v("Giá tiền")])])])}],!1,null,null,null);t.default=component.exports},450:function(n,t,h){"use strict";h.r(t);var c={props:["whyShouldBuyService","serviceInfo"]},e=h(4),component=Object(e.a)(c,(function(){var n=this,t=n.$createElement,h=n._self._c||t;return h("section",{staticClass:"feature-section ptb-100 gray-light-bg"},[h("div",{staticClass:"container"},[h("div",{staticClass:"row align-items-center justify-content-between"},[h("div",{staticClass:"col-md-4"},[h("div",{staticClass:"download-img"},[h("img",{staticClass:"img-fluid",attrs:{src:n.whyShouldBuyService.img,alt:n.serviceInfo.keyword,title:n.serviceInfo.keyword}})])]),n._v(" "),h("div",{staticClass:"col-md-7"},[h("div",{staticClass:"feature-contents section-heading"},[h("h2",[n._v(n._s(n.whyShouldBuyService.h2))]),n._v(" "),n._l(n.whyShouldBuyService.contents1,(function(content,t){return h("li",{key:t,staticClass:"custom"},[n._v("\n                    "+n._s(content))])})),n._v(" "),n.whyShouldBuyService.contents2?h("div",n._l(n.whyShouldBuyService.contents2,(function(content,t){return h("p",{key:t+.1},[n._v("\n                        "+n._s(content))])})),0):n._e()],2)])]),n._v(" "),h("div",{staticClass:"row align-items-center justify-content-between text-center",staticStyle:{display:"block","padding-top":"40px"}},[h("a",{staticClass:"btn solid-btn",attrs:{href:n.whyShouldBuyService.url,target:"_blank"}},[n._v("Mua ngay")])])])])}),[],!1,null,null,null);t.default=component.exports},451:function(n,t,h){"use strict";h.r(t);var c={props:["buyProcess","serviceInfo"]},e=h(4),component=Object(e.a)(c,(function(){var n=this,t=n.$createElement,h=n._self._c||t;return h("section",{staticClass:"feature-section ptb-100"},[h("div",{staticClass:"container"},[h("div",{staticClass:"row align-items-center justify-content-between"},[h("div",{staticClass:"col-md-4"},[h("div",{staticClass:"download-img"},[h("img",{staticClass:"img-fluid",attrs:{src:n.buyProcess.img,alt:n.serviceInfo.keyword,title:n.serviceInfo.keyword}})])]),n._v(" "),h("div",{staticClass:"col-md-7"},[h("div",{staticClass:"feature-contents section-heading"},[h("h2",[n._v(n._s(n.buyProcess.h2))]),n._v(" "),n._l(n.buyProcess.contents,(function(content,t){return h("p",{key:t,staticClass:"custom"},[n._v("\n                    "+n._s(content))])}))],2)])])])])}),[],!1,null,null,null);t.default=component.exports},452:function(n,t,h){"use strict";h.r(t);var c={props:["serviceInfo"]},e=h(4),component=Object(e.a)(c,(function(){var n=this,t=n.$createElement,h=n._self._c||t;return h("section",{staticClass:"promo-section mt-5 ptb-100"},[h("div",{staticClass:"container"},[h("div",{staticClass:"row"},[h("div",{staticClass:"col-lg-12 col-md-10"},[h("div",{staticClass:"section-heading mb-5"},[h("h2",{staticClass:"mb-6 text-center"},[n._v(n._s(n.serviceInfo.h2))])])])]),n._v(" "),h("div",{staticClass:"row"},n._l(n.serviceInfo.contents,(function(content,t){return h("li",{key:t,staticClass:"custom"},[n._v("\n                "+n._s(content)+"\n            ")])})),0)])])}),[],!1,null,null,null);t.default=component.exports},455:function(n,t,h){"use strict";h.d(t,"a",(function(){return c})),h.d(t,"b",(function(){return e}));var c={serviceInfo:{h2:"Dịch vụ tăng follow Instagram Người Việt, mua follow Instagram "+(new Date).getFullYear(),type:"Follow Instagram",keyword:"1989s Media, mualikegiare.xyz, tuongtacmangxahoi.com, Mua Follow Instagram, Mua follow instagram, Mua follow instagram giá rẻ, tăng tương tác Instagram, tăng follow instagram người Việt, tăng follow instagram miễn phí, tăng follow instagram uy tín, tăng follow instagram "+(new Date).getFullYear(),description:"1989s Media, mualikegiare.xyz, tuongtacmangxahoi.com chuyên cung cấp các dịch vụ tăng follow instagram "+(new Date).getFullYear()+" uy tín, nhanh chóng, đem lại sự hài lòng cho khách hàng",contents:["Nhờ vào sự phát triển mạnh mẽ của internet Instagram đang là một trong những kênh thông tin phổ biến hàng đầu trên thế giới, giúp các cá nhân hay doanh nghiệp, công ty quảng bá hình ảnh của mình đến cộng đồng.","Đặc biệt là đối với các chủ shop, các chủ cửa hàng, Instagram còn đem lại nhiều cơ hội kinh doanh mới. Đối với Instagram, đã và đang có rất nhiều Shop đạt doanh thu rất tốt từ kênh này.","Việc kiếm được nhiều follow tại Instaram trên những tài khoản chơi lâu năm hoặc người nổi tiếng là điều rất dễ nhưng với những người mới chơi, những shop kinh doanh mới phát triển để đạt được nhiều follow thì quả thật là một điều khá khó khăn.","Hiểu được những khó khăn trên chúng tôi 1898s Media ra mắt dịch vụ tăng follow Instagram người Việt Nam giá rẻ, giúp bạn mua follow Instagram nhanh chóng và an toàn 100%. Hãy tham khảo dịch vụ tại bài viết bên dưới nhé!"]},whyShouldBuyFollow:{h2:"Tác dụng của dịch vụ tăng Follow Instagram là gì?",img:"/img/fl-ig.png",contents1:["Việc tăng follow instagram người Việt, mua follow instagram, mua fl instagram, tăng fl instagram,… là những cụm từ khoá phổ biến trong cộng đồng dùng Instagram những năm gần đây. Những từ khóa này cùng tìm đến dịch vụ hiện tại chúng tôi đang cung cấp đó là sử dụng tiền để mua những lượt follow trên kênh Instagram của bạn. Việc này sẽ giúp một số lợi ích dưới đây chúng tôi sẽ liệt kê mời các bạn tham khảo:","Tạo độ chất lượng cao cho tài khoản Instagram","Tăng tỷ lệ đề xuất và tiếp cận đến nhiều khách hàng tiềm năng.","Tăng like Instagram khi có bài viết mới","Tạo ấn tượng tốt đối với khách hàng và đối tác","Giúp cho trang Instagram của bạn có thêm nhiều lượng tương tác","Giúp bạn kinh doanh tốt hơn trên trang Instagram của mình."],contents2:["Khi khách hàng vào 1 trang Instagram điều họ nhìn thấy đầu tiên đó là lượng follow của shop có nhiều hay không?","Nếu lượng follow quá ít thì sẽ không tạo được lòng tin nhiều mặc dù sản phẩm của shop rất tốt. Hãy mua follow Instagram Việt Nam để tăng độ tin tưởng cho shop của bạn ngay hôm nay nhé!","Tăng follow Instagram người Việt – Tăng tỷ lệ chốt đơn"],url:"https://tuongtacmangxahoi.com/instagram-follow"},price:{h2:"Bảng giá mua follow Instagram",priceList:{number:100,price:3e3}},buffFollowInfor:{h2:"",contents:["Follower 100% là người Việt Nam.","Bảo hành vĩnh viễn không tụt quá 5%. (Luôn tăng dư 5-10% số lượng follow mua)","Mua số lượng lớn sẽ có hợp đồng của công ty.","Bảo hành vĩnh viễn không bao giờ tụt","Bảo mật thông tin khách hàng tuyệt đối","Thời gian hoàn thành dịch vụ nhanh chóng","Mua tối thiểu 100 follow, tối đa mua được 50,000 Follow. (Nếu tăng follow Instagram nhiều hơn chúng tối vẫn cung cấp được nhưng sẽ áp dụng bảng giá khác. Tối đa có thể đạt mốc 500k follow)"]},QA:{h2:"Câu hỏi thường gặp",contents:[{question:"Tăng follow Instagram có an toàn không?",answers:["Theo như chính sách của Instagram thì họ không khuyến khích điều này, không muốn các tài khoản tăng lượt follow bằng thủ thuật. Tuy nhiên với kinh nghiệm của chúng tôi và nhiều người sử dụng dịch vụ mua follow cho tài khoản Instagram  không ảnh hưởng gì cả.","Một khi tài khoản đang hoạt động sẽ có đường link mà bất kỳ ai cũng có thể bấm vào follow. Việc lượng follow tăng nhanh chóng là điều rất tốt cho tài khoản của bạn. Nếu không an toàn thì sẽ có rất nhiều anti fan mua cho người nổi tiếng, mua cho đối thủ cạnh tranh, mà nếu Instagram có bất cứ hình phạt nào tới tài khoản được tăng follow sẽ dẫn đến trừng phạt oan. Từ đó suy ra việc mua follow Instagram an toàn  100% cho tài khoản của bạn."]},{question:"Tốc độ tăng follow của Instagram như thế nào?",answers:["Tốc độ tăng trung bình của 1000 follow là ~60 phút. Số lượng càng cao sẽ có tốc độ hoàn thành càng lâu. Vui lòng liên hệ để được hỗ trợ tốt nhất."]},{question:"Tài khoản follower là tài khoản gì?",answers:["Follow chúng tôi cung cấp nguồn từ những tài khoản Instagram người dùng Việt Nam."]},{question:"Follower có bị giảm sau khi tăng không?",answers:["Có bị giảm. Tỷ lệ không đáng kể. ~3-5%/1 năm. Follow chúng tôi là loại follow tốt nhất trên thị trường. Không có bất cứ loại follow nào cố định không bị giảm cả."]},{question:"Có cần follow lại những tài khoản follow mình không?",answers:["Không cần follow lại những tài khoản follow mình."]},{question:"Thanh toán qua hình thức nào?",answers:["• Thanh toán qua Vietconbank.","• Thanh toán qua ví điện tử MOMO","Liên hệ để được hướng dẫn cụ thể!"]}]},buyProcess:{h2:"Quy trình làm việc khi dùng dịch vụ tăng Follow Instagram:",img:"/img/fl-ig.png",contents:["1: Tiếp nhận đơn hàng và thông tin mong muốn của khách hàng.","2: Tư vấn nội dung đánh giá, số lượng và tốc độ hoàn thành đánh giá","3: Hướng dẫn thanh toán chi phí dịch vụ tăng Follow Instagram","4: Triển khai dịch vụ tăng Follow Instagram cho khách hàng","5: Hoàn thành dịch vụ tăng Follow Instagram","Chúng tôi sẽ có giá tốt cho các lần sử dụng dịch vụ dịch vụ tăng Follow Instagram tiếp theo hoặc mua cho nhiều fanpage"]}},e={serviceInfo:{h2:"Dịch vụ tăng like Instagram, mua like Instagram Việt Nam "+(new Date).getFullYear(),type:"Like Instagram",keyword:"1989s Media, mualikegiare.xyz, tuongtacmangxahoi.com, Mua like Instagram, Mua like instagram, Mua like instagram giá rẻ, tăng tương tác Instagram, dịch vụ tăng like instagram, tăng like instagram miễn phí, hastag tăng like instagram, tăng like instagram uy tín, tăng like instagram "+(new Date).getFullYear(),description:"1989s Media, mualikegiare.xyz, tuongtacmangxahoi.com chuyên cung cấp dịch vụ tăng like instagram, tăng like instagram miễn phí một cách nhanh chóng",contents:["Nhờ vào sự phát triển mạnh mẽ của internet Instagram đang là một trong những kênh thông tin phổ biến hàng đầu trên thế giới, giúp các cá nhân hay doanh nghiệp, công ty quảng bá hình ảnh của mình đến cộng đồng.","Đặc biệt là đối với các chủ shop, các chủ cửa hàng, Instagram còn đem lại nhiều cơ hội kinh doanh mới. Đối với Instagram, đã và đang có rất nhiều Shop đạt doanh thu rất tốt từ kênh này.","Việc kiếm được nhiều like tại Instaram trên những tài khoản chơi lâu năm hoặc người nổi tiếng là điều rất dễ nhưng với những người mới chơi, những shop kinh doanh mới phát triển để đạt được nhiều like thì quả thật là một điều khá khó khăn.","Hiểu được những khó khăn trên chúng tôi 1898s Media ra mắt dịch vụ tăng like Instagram người Việt Nam giá rẻ, giúp bạn mua like Instagram nhanh chóng và an toàn 100%. Hãy tham khảo dịch vụ tại bài viết bên dưới nhé!"]},whyShouldBuyFollow:{h2:"Tác dụng của dịch vụ tăng like Instagram là gì?",img:"/img/fl-ig.png",contents1:["Việc tăng like instagram người Việt, mua like instagram, mua fl instagram, tăng fl instagram,… là những cụm từ khoá phổ biến trong cộng đồng dùng Instagram những năm gần đây. Những từ khóa này cùng tìm đến dịch vụ hiện tại chúng tôi đang cung cấp đó là sử dụng tiền để mua những lượt like trên kênh Instagram của bạn. Việc này sẽ giúp một số lợi ích dưới đây chúng tôi sẽ liệt kê mời các bạn tham khảo:","Tạo độ chất lượng cao cho tài khoản Instagram","Tăng tỷ lệ đề xuất và tiếp cận đến nhiều khách hàng tiềm năng.","Tăng like Instagram khi có bài viết mới","Tạo ấn tượng tốt đối với khách hàng và đối tác","Giúp cho trang Instagram của bạn có thêm nhiều lượng tương tác","Giúp bạn kinh doanh tốt hơn trên trang Instagram của mình."],contents2:["Khi khách hàng vào 1 trang Instagram điều họ nhìn thấy đầu tiên đó là lượng like của shop có nhiều hay không?","Nếu lượng like quá ít thì sẽ không tạo được lòng tin nhiều mặc dù sản phẩm của shop rất tốt. Hãy mua like Instagram Việt Nam để tăng độ tin tưởng cho shop của bạn ngay hôm nay nhé!","Tăng like Instagram người Việt – Tăng tỷ lệ chốt đơn"],url:"https://tuongtacmangxahoi.com/instagram-like"},price:{h2:"Bảng giá mua like Instagram",priceList:{number:100,price:3e3}},bufflikeInfor:{h2:"",contents:["likeer 100% là người Việt Nam.","Bảo hành vĩnh viễn không tụt quá 5%. (Luôn tăng dư 5-10% số lượng like mua)","Mua số lượng lớn sẽ có hợp đồng của công ty.","Bảo hành vĩnh viễn không bao giờ tụt","Bảo mật thông tin khách hàng tuyệt đối","Thời gian hoàn thành dịch vụ nhanh chóng","Mua tối thiểu 100 like, tối đa mua được 50,000 like. (Nếu tăng like Instagram nhiều hơn chúng tối vẫn cung cấp được nhưng sẽ áp dụng bảng giá khác. Tối đa có thể đạt mốc 500k like)"]},QA:{h2:"Câu hỏi thường gặp",contents:[{question:"Tăng like Instagram có an toàn không?",answers:["Theo như chính sách của Instagram thì họ không khuyến khích điều này, không muốn các tài khoản tăng lượt like bằng thủ thuật. Tuy nhiên với kinh nghiệm của chúng tôi và nhiều người sử dụng dịch vụ mua like cho tài khoản Instagram  không ảnh hưởng gì cả.","Một khi tài khoản đang hoạt động sẽ có đường link mà bất kỳ ai cũng có thể bấm vào like. Việc lượng like tăng nhanh chóng là điều rất tốt cho tài khoản của bạn. Nếu không an toàn thì sẽ có rất nhiều anti fan mua cho người nổi tiếng, mua cho đối thủ cạnh tranh, mà nếu Instagram có bất cứ hình phạt nào tới tài khoản được tăng like sẽ dẫn đến trừng phạt oan. Từ đó suy ra việc mua like Instagram an toàn  100% cho tài khoản của bạn."]},{question:"Tốc độ tăng like của Instagram như thế nào?",answers:["Tốc độ tăng trung bình của 1000 like là ~60 phút. Số lượng càng cao sẽ có tốc độ hoàn thành càng lâu. Vui lòng liên hệ để được hỗ trợ tốt nhất."]},{question:"Tài khoản likeer là tài khoản gì?",answers:["like chúng tôi cung cấp nguồn từ những tài khoản Instagram người dùng Việt Nam."]},{question:"likeer có bị giảm sau khi tăng không?",answers:["Có bị giảm. Tỷ lệ không đáng kể. ~3-5%/1 năm. like chúng tôi là loại like tốt nhất trên thị trường. Không có bất cứ loại like nào cố định không bị giảm cả."]},{question:"Có cần like lại những tài khoản like mình không?",answers:["Không cần like lại những tài khoản like mình."]},{question:"Thanh toán qua hình thức nào?",answers:["• Thanh toán qua Vietconbank.","• Thanh toán qua ví điện tử MOMO","Liên hệ để được hướng dẫn cụ thể!"]}]},buyProcess:{h2:"Quy trình làm việc khi dùng dịch vụ tăng like Instagram:",img:"/img/like-ig.png",contents:["1: Tiếp nhận đơn hàng và thông tin mong muốn của khách hàng.","2: Tư vấn nội dung đánh giá, số lượng và tốc độ hoàn thành đánh giá","3: Hướng dẫn thanh toán chi phí dịch vụ tăng like Instagram","4: Triển khai dịch vụ tăng like Instagram cho khách hàng","5: Hoàn thành dịch vụ tăng like Instagram","Chúng tôi sẽ có giá tốt cho các lần sử dụng dịch vụ dịch vụ tăng like Instagram tiếp theo hoặc mua cho nhiều fanpage"]}}},475:function(n,t,h){"use strict";h.r(t);h(33),h(34),h(47);var c=h(446),e=h(455),o=h(22),l=h(448),r=h(449),m=h(450),d=h(451),k=h(452),v={layout:"service",components:{QA:l.default,PriceList:r.default,ShouldBuyService:m.default,BuyProcess:d.default,ServiceInfo:k.default},data:function(){return{followInstagram:e.a,priceList:[],path:o.a.hostname+this.$route.path}},head:function(){return{title:this.$service.name+this.$siteName,meta:[{hid:"description",name:"description",content:e.a.serviceInfo.description},{hid:"og:description",name:"og:description",content:e.a.serviceInfo.description},{hid:"keywords",name:"keywords",content:e.a.serviceInfo.keyword},{hid:"dc.keywords",name:"dc.keywords",content:e.a.serviceInfo.keyword},{hid:"news_keywords",name:"news_keywords",content:e.a.serviceInfo.keyword},{hid:"og:url",name:"og:url",content:this.path},{hid:"og:site_name",name:"og:site_name",content:this.$service.name+this.$siteName},{hid:"dc.title",name:"dc.title",content:this.$service.name+this.$siteName},{hid:"og:title",name:"og:title",content:this.$service.name+this.$siteName},{hid:"og:image",name:"og:image",content:o.a.hostname+e.a.buyProcess.img}]}},created:function(){Object(c.b)(this.$route),this.priceList=Object(c.a)(e.a.price.priceList,11)}},f=h(4),component=Object(f.a)(v,(function(){var n=this,t=n.$createElement,h=n._self._c||t;return h("div",[h("ServiceInfo",{attrs:{serviceInfo:n.followInstagram.serviceInfo}}),n._v(" "),h("ShouldBuyService",{attrs:{whyShouldBuyService:n.followInstagram.whyShouldBuyFollow,serviceInfo:n.followInstagram.serviceInfo}}),n._v(" "),h("PriceList",{attrs:{priceList:n.priceList,type:n.followInstagram.type,h2:n.followInstagram.price.h2,serviceInfo:n.followInstagram.buffFollowInfor}}),n._v(" "),h("QA",{attrs:{QA:n.followInstagram.QA}}),n._v(" "),h("BuyProcess",{attrs:{buyProcess:n.followInstagram.buyProcess,serviceInfo:n.followInstagram.serviceInfo}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);