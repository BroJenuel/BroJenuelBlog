(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{270:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return r}));n(26),n(32);var r=function(data){return[{hid:"og:title",property:"og:title",content:data.title},{hid:"description",name:"description",content:data.description},{hid:"og:description",property:"og:description",content:data.description},{hid:"og:image",property:"og:image",content:data.image},{hid:"og:url",property:"og:url",content:e.env.HOST_NAME+"/"+data.url},{hid:"twitter:card",name:"twitter:card",content:data.cardType||"summary_large_image"}]}}).call(this,n(122))},280:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=t.sendForm=t.send=t.init=void 0;var r=n(281);Object.defineProperty(t,"EmailJSResponseStatus",{enumerable:!0,get:function(){return r.EmailJSResponseStatus}});var o=n(282),l=null,c="https://api.emailjs.com";function m(e,data,t){return void 0===t&&(t={}),new Promise((function(n,o){var l=new XMLHttpRequest;for(var c in l.addEventListener("load",(function(e){var t=new r.EmailJSResponseStatus(e.target);200===t.status||"OK"===t.text?n(t):o(t)})),l.addEventListener("error",(function(e){o(new r.EmailJSResponseStatus(e.target))})),l.open("POST",e,!0),t)l.setRequestHeader(c,t[c]);l.send(data)}))}function d(e){var element=document&&document.getElementById("g-recaptcha-response");return element&&element.value&&(e["g-recaptcha-response"]=element.value),element=null,e}function f(e,t){l=e,c=t||"https://api.emailjs.com"}function v(e,t,n,r){var o={lib_version:"2.6.4",user_id:r||l,service_id:e,template_id:t,template_params:d(n)};return m(c+"/api/v1.0/email/send",JSON.stringify(o),{"Content-type":"application/json"})}function h(e,t,form,n){var r;if("string"==typeof form&&(form=document.querySelector("#"!==(r=form)[0]&&"."!==r[0]?"#"+r:r)),!form||"FORM"!==form.nodeName)throw"Expected the HTML form element or the style selector of form";o.UI.progressState(form);var d=new FormData(form);return d.append("lib_version","2.6.4"),d.append("service_id",e),d.append("template_id",t),d.append("user_id",n||l),m(c+"/api/v1.0/email/send-form",d).then((function(e){return o.UI.successState(form),e}),(function(e){return o.UI.errorState(form),Promise.reject(e)}))}t.init=f,t.send=v,t.sendForm=h,t.default={init:f,send:v,sendForm:h}},281:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=void 0;var r=function(e){this.status=e.status,this.text=e.responseText};t.EmailJSResponseStatus=r},282:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UI=void 0;var r=function(){function e(){}return e.clearAll=function(form){form.classList.remove(this.PROGRESS),form.classList.remove(this.DONE),form.classList.remove(this.ERROR)},e.progressState=function(form){this.clearAll(form),form.classList.add(this.PROGRESS)},e.successState=function(form){form.classList.remove(this.PROGRESS),form.classList.add(this.DONE)},e.errorState=function(form){form.classList.remove(this.PROGRESS),form.classList.add(this.ERROR)},e.PROGRESS="emailjs-sending",e.DONE="emailjs-success",e.ERROR="emailjs-error",e}();t.UI=r},297:function(e,t,n){"use strict";n.r(t);n(16);var r=n(270),source=n(280),o=n.n(source);Object(source.init)("user_zdO7SqNAzUeW1bl8KtMhn");var l={data:function(){return{form:{subject:"From BorJenuelBlog",name:"",email:"",message:""},showError:!1,sent:!1,sending:!1}},head:{title:"Contact - Bro Jenuel Blog",meta:Object(r.a)({title:"Contact - Bro Jenuel Blog",description:"...share and to keep track and have a record of things I learned in my journey as I travel to the world of being a programmer. Bookmark this website in your browsers, and check it anytime. I will be posting here at least 1 to 2 times a week..",image:"https://i.ibb.co/WkWW3rs/Screenshot-2021-04-19-232949.png",url:"https://bro-jenuel-blog.netlify.app/"})},methods:{sendEmail:function(){var e=this;this.sending=!0,this.checkProperties()?o.a.send("service_88wvqn9","template_nulphu2",this.form).then((function(){e.sent=!0,e.showError=!1,e.sending=!1,e.form={subject:"",name:"",email:"",message:""}})).catch((function(){e.sent=!1,e.showError=!1,e.sending=!1})):(this.showError=!0,this.sending=!1)},checkProperties:function(){var form=this.form;return""!=form.subject&&""!=form.name&&""!=form.email&&""!=form.message}}},c=n(15),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"text-gray-400 bg-gray-900 body-font relative"},[n("div",{staticClass:"container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap"},[e._m(0),e._v(" "),n("div",{staticClass:"lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"},[n("h2",{staticClass:"text-white text-lg mb-1 font-medium title-font"},[e._v("\n                Contact Me\n            ")]),e._v(" "),n("p",{staticClass:"leading-relaxed mb-5"},[e._v("\n                You can Send me a message by filling up the form bellow.\n            ")]),e._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:e.sent,expression:"sent"}],staticClass:"border-2 p-4 border-blue-500 rounded-lg text-blue-500"},[e._v("Your Message was Sent Successfully! I will surely check my email.😁👍")]),e._v(" "),n("div",{staticClass:"relative mb-4"},[n("label",{staticClass:"leading-7 text-sm text-gray-400",attrs:{for:"name"}},[e._v("Name")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.name,expression:"form.name"}],staticClass:"w-full bg-gray-800 rounded border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",attrs:{type:"text",id:"name",name:"name"},domProps:{value:e.form.name},on:{input:function(t){t.target.composing||e.$set(e.form,"name",t.target.value)}}})]),e._v(" "),n("div",{staticClass:"relative mb-4"},[n("label",{staticClass:"leading-7 text-sm text-gray-400",attrs:{for:"email"}},[e._v("Email")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],staticClass:"w-full bg-gray-800 rounded border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",attrs:{type:"email",id:"email",name:"email"},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}})]),e._v(" "),n("div",{staticClass:"relative mb-4"},[n("label",{staticClass:"leading-7 text-sm text-gray-400",attrs:{for:"message"}},[e._v("Message")]),e._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.form.message,expression:"form.message"}],staticClass:"w-full bg-gray-800 rounded border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out",attrs:{id:"message",name:"message"},domProps:{value:e.form.message},on:{input:function(t){t.target.composing||e.$set(e.form,"message",t.target.value)}}})]),e._v(" "),n("button",{staticClass:"text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg",attrs:{disabled:e.sending},on:{click:function(t){return e.sendEmail()}}},[e._v("\n                "+e._s(e.sending?"Sending":"Submit")+"\n            ")]),e._v(" "),n("p",{staticClass:"text-xs text-gray-400 text-opacity-90 mt-3"},[e._v("\n                Information you've written will be in private and will not\n                be shared to anyone.\n            ")])])])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-center relative"},[n("iframe",{staticClass:"absolute inset-0",attrs:{width:"100%",height:"100%",title:"map",frameborder:"0",scrolling:"no",src:"https://www.google.com/maps/embed/v1/place?key=AIzaSyAHSeKxhRiCNzU3DEsIoyElfzZzBZJabzQ&q=16.444182987619534, 120.58955279593856&zoom=18"}}),e._v(" "),n("div",{staticClass:"bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md"},[n("div",{staticClass:"lg:w-1/2 px-6"},[n("h2",{staticClass:"title-font font-semibold text-white tracking-widest text-xs"},[e._v("\n                        ADDRESS\n                    ")]),e._v(" "),n("p",{staticClass:"mt-1"},[e._v("\n                        La Trinidad, Benguet, Region Car, Luzon, Philippines\n                    ")])]),e._v(" "),n("div",{staticClass:"lg:w-1/2 px-6 mt-4 lg:mt-0"},[n("h2",{staticClass:"title-font font-semibold text-white tracking-widest text-xs"},[e._v("\n                        EMAIL\n                    ")]),e._v(" "),n("a",{staticClass:"text-blue-400 leading-relaxed cursor-pointer"},[e._v("jenuelganawed936@gmail.com")]),e._v(" "),n("h2",{staticClass:"title-font font-semibold text-white tracking-widest text-xs mt-4"},[e._v("\n                        Telegram\n                    ")]),e._v(" "),n("p",{staticClass:"text-blue-400 leading-relaxed cursor-pointer"},[e._v("\n                        https://t.me/BroJenuelChannel\n                    ")])])])])}],!1,null,null,null);t.default=component.exports}}]);