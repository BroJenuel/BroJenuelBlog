(window.webpackJsonp=window.webpackJsonp||[]).push([[6,4],{269:function(t,e,r){t.exports=function(){"use strict";return function(t,e,r){t=t||{};var l=e.prototype,n={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function i(t,e,r,n){return l.fromToBase(t,e,r,n)}r.en.relativeTime=n,l.fromToBase=function(e,l,i,o,u){for(var a,c,s,d=i.$locale().relativeTime||n,f=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],m=f.length,h=0;h<m;h+=1){var v=f[h];v.d&&(a=o?r(e).diff(i,v.d,!0):i.diff(e,v.d,!0));var p=(t.rounding||Math.round)(Math.abs(a));if(s=a>0,p<=v.r||!v.r){p<=1&&h>0&&(v=f[h-1]);var x=d[v.l];u&&(p=u(""+p)),c="string"==typeof x?x.replace("%d",p):x(p,l,v.l,s);break}}if(l)return c;var w=s?d.future:d.past;return"function"==typeof w?w(c):w.replace("%s",c)},l.to=function(t,e){return i(t,e,this,!0)},l.from=function(t,e){return i(t,e,this)};var o=function(t){return t.$u?r.utc():r()};l.toNow=function(t){return this.to(o(this),t)},l.fromNow=function(t){return this.from(o(this),t)}}}()},271:function(t,e,r){"use strict";r.r(e);var l=r(0),n=r(269),o=r.n(n),c=l.a.extend({props:["article"],methods:{dateNow:function(t){return this.$dayjs.extend(o.a),this.$dayjs(t).fromNow()}}}),d=r(15),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"p-4 md:w-1/2 sm:w-1/2 lg:w-1/3 xl:w-1/4"},[r("div",{staticClass:"h-full border-2 border-gray-800 rounded-lg overflow-hidden flex flex-col justify-between"},[r("div",[r("img",{staticClass:"lg:h-48 md:h-36 w-full object-cover object-center cursor-pointer",attrs:{src:t.article.img,alt:"blog"},on:{click:function(e){return t.$router.push("/view/"+t.article.slug)}}}),t._v(" "),r("div",{staticClass:"p-6 flex flex-col justify-between"},[r("div",[r("h2",{staticClass:"tracking-widest text-xs title-font font-medium text-gray-500 mb-1"},[t._v(t._s(t.article.category))]),t._v(" "),r("h1",{staticClass:"title-font text-lg font-medium text-white mb-3"},[t._v(t._s(t.article.title))]),t._v(" "),r("p",{staticClass:"leading-relaxed mb-3"},[t._v(t._s(t.article.description))])])])]),t._v(" "),r("div",{staticClass:"flex items-center px-6 pb-6 justify-between"},[r("div",{staticClass:"text-blue-400 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer hover:text-blue-200 duration-200",on:{click:function(e){return t.$router.push("/view/"+t.article.slug)}}},[t._v("\n                    Read More\n                    "),r("svg",{staticClass:"w-4 h-4 ml-2",attrs:{viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[r("path",{attrs:{d:"M5 12h14"}}),t._v(" "),r("path",{attrs:{d:"M12 5l7 7-7 7"}})])]),t._v(" "),r("span",{staticClass:"text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm"},[r("svg",{staticClass:"mr-2",attrs:{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15"}},[r("path",{attrs:{d:"M7.5 7.5H7a.5.5 0 00.146.354L7.5 7.5zm0 6.5A6.5 6.5 0 011 7.5H0A7.5 7.5 0 007.5 15v-1zM14 7.5A6.5 6.5 0 017.5 14v1A7.5 7.5 0 0015 7.5h-1zM7.5 1A6.5 6.5 0 0114 7.5h1A7.5 7.5 0 007.5 0v1zm0-1A7.5 7.5 0 000 7.5h1A6.5 6.5 0 017.5 1V0zM7 3v4.5h1V3H7zm.146 4.854l3 3 .708-.708-3-3-.708.708z",fill:"currentColor"}})]),t._v(t._s(t.dateNow(t.article.createdAt))+"\n                ")])])])])}),[],!1,null,null,null);e.default=component.exports},278:function(t,e,r){"use strict";r.r(e);var l={props:["articles"]},n=r(15),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"text-gray-400 bg-gray-900 body-font"},[r("div",{staticClass:"container px-5 py-10 mx-auto"},[t._m(0),t._v(" "),r("div",{staticClass:"flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4"},[r("div",{staticClass:"container px-5 mx-auto"},[r("div",{staticClass:"flex flex-wrap -m-4"},t._l(t.articles,(function(article){return r("CommonBlogCard",{key:article.slug,attrs:{article:article}})})),1)])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-col"},[r("div",{staticClass:"h-1 bg-gray-800 rounded overflow-hidden"},[r("div",{staticClass:"w-24 h-full bg-blue-500"})]),t._v(" "),r("div",{staticClass:"flex flex-wrap sm:flex-row flex-col py-6 mb-12"},[r("h1",{staticClass:"sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0"},[t._v("\n                    Blog Contents\n                ")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{CommonBlogCard:r(271).default})}}]);