(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{472:function(e,o,t){"use strict";t.r(o);t(33),t(34),t(47);var n=t(446),c=t(454),r=t(22),l=t(448),d=t(449),f=t(450),h=t(451),w=t(452),v={layout:"service",components:{QA:l.default,PriceList:d.default,ShouldBuyService:f.default,BuyProcess:h.default,ServiceInfo:w.default},data:function(){return{followFacebook:c.a,priceList:[],path:r.a.hostname+this.$route.path}},head:function(){return{title:this.$service.name+this.$siteName,meta:[{hid:"description",name:"description",content:c.a.serviceInfo.description},{hid:"og:description",name:"og:description",content:c.a.serviceInfo.description},{hid:"keywords",name:"keywords",content:c.a.serviceInfo.keyword},{hid:"dc.keywords",name:"dc.keywords",content:c.a.serviceInfo.keyword},{hid:"news_keywords",name:"news_keywords",content:c.a.serviceInfo.keyword},{hid:"og:url",name:"og:url",content:this.path},{hid:"og:site_name",name:"og:site_name",content:this.$service.name+this.$siteName},{hid:"dc.title",name:"dc.title",content:this.$service.name+this.$siteName},{hid:"og:title",name:"og:title",content:this.$service.name+this.$siteName},{hid:"og:image",name:"og:image",content:r.a.hostname+c.a.buyProcess.img}]}},created:function(){Object(n.b)(this.$route),this.priceList=Object(n.a)(c.a.price.priceList,11)}},m=t(4),component=Object(m.a)(v,(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("ServiceInfo",{attrs:{serviceInfo:e.followFacebook.serviceInfo}}),e._v(" "),t("ShouldBuyService",{attrs:{whyShouldBuyService:e.followFacebook.whyShouldBuyFollow,serviceInfo:e.followFacebook.serviceInfo}}),e._v(" "),t("PriceList",{attrs:{priceList:e.priceList,type:e.followFacebook.type,h2:e.followFacebook.price.h2,serviceInfo:e.followFacebook.buffFollowInfor}}),e._v(" "),t("QA",{attrs:{QA:e.followFacebook.QA}}),e._v(" "),t("BuyProcess",{attrs:{buyProcess:e.followFacebook.buyProcess,serviceInfo:e.followFacebook.serviceInfo}})],1)}),[],!1,null,null,null);o.default=component.exports}}]);