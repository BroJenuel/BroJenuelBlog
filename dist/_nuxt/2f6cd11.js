(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{291:function(t,e,n){"use strict";n.r(e);var r=n(5),c=(n(32),n(1).a.extend({asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,t.params,e.next=3,n("articles").only(["title","description","img","slug","author","category","createdAt"]).sortBy("createdAt","desc").fetch();case 3:return r=e.sent,e.abrupt("return",{articles:r});case 5:case"end":return e.stop()}}),e)})))()}})),o=n(7),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mr-auto ml-auto dark:bg-gray-800"},[n("Contents",{attrs:{articles:t.articles}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Contents:n(126).default})}}]);