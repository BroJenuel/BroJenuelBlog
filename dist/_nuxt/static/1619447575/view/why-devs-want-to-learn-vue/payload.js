__NUXT_JSONP__("/view/why-devs-want-to-learn-vue", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){return {data:[{article:{slug:"why-devs-want-to-learn-vue",description:"According to the  State of JavaScript 2017 survey  Vue.js is the front-end library that developers would most like to learn. I’m here to explain why I think this is, and walk you through building a simple app with Vue. ... As you may know, JavaScript has matured a great deal in the last 10 years, and much of the code that was normally on the server-side has migrated into the browser. As that has grown more complex, so have the frameworks to keep things more organized.",title:"Why 43% of Front-End Developers want to learn Vue.js",img:"https:\u002F\u002Fi.imgur.com\u002FZB7471Il.jpg",category:n,tags:[n,"JavaScript","Developer"],toc:[],body:{type:"root",children:[{type:a,tag:c,props:{},children:[{type:b,value:"According to the  "},{type:a,tag:g,props:{href:"https:\u002F\u002Fstateofjs.com\u002F2017\u002Ffront-end\u002Fresults\u002F",rel:[h,i,j],target:k},children:[{type:b,value:"State of JavaScript 2017 survey"}]},{type:b,value:"  Vue.js is the front-end library that developers would most like to learn. I’m here to explain why I think this is, and walk you through building a simple app with Vue."}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:b,value:"I recently worked with Evan You, Chris Fritz, Sarah Drasner, and Adam Jahr to produce an introduction video, which you can now find on the front page of  "},{type:a,tag:g,props:{href:"http:\u002F\u002Fvuejs.org\u002F",rel:[h,i,j],target:k},children:[{type:b,value:"http:\u002F\u002Fvuejs.org"}]},{type:b,value:". What follows is a text version of that video."}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:a,tag:l,props:{},children:[{type:b,value:"The Great JavaScript Migration"}]}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:b,value:"As you may know, JavaScript has matured a great deal in the last 10 years, and much of the code that was normally on the server-side has migrated into the browser. As that has grown more complex, so have the frameworks to keep things more organized."}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{alt:f,src:"https:\u002F\u002Fmiro.medium.com\u002Fmax\u002F1248\u002F1*yo-xcHU5V8TGxejUinOO7w.png"},children:[]}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:b,value:"I’m not going to tell you why one is better than the other, although there is a great comparison page on the  "},{type:a,tag:g,props:{href:"https:\u002F\u002Fvuejs.org\u002Fv2\u002Fguide\u002Fcomparison.html",rel:[h,i,j],target:k},children:[{type:b,value:"official Vue docs"}]},{type:b,value:m}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:b,value:"Vue.js aims to be an approachable, versatile, performant, maintainable, and testable JavaScript framework. Vue also aims to be progressive, meaning that if you have an existing application you can use Vue in just one part of your front-end that needs a more interactive experience."}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:b,value:"Alternatively, you can build more business logic into your front-end from the start. Vue has the core libraries and ecosystem you’ll need to scale."}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{alt:f,src:"https:\u002F\u002Fmiro.medium.com\u002Ffreeze\u002Fmax\u002F60\u002F1*d1NRlPyQSIsYv4oW4AVdRA.gif?q=20"},children:[]}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{alt:f,src:"https:\u002F\u002Fmiro.medium.com\u002Fmax\u002F612\u002F1*d1NRlPyQSIsYv4oW4AVdRA.gif"},children:[]}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:b,value:"Like other front-end frameworks, Vue allows you to take a webpage and split the logic up into reusable components. Each of these can have it’s own HTML, CSS, and JavaScript needed to render each piece of the page."}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{alt:f,src:"https:\u002F\u002Fmiro.medium.com\u002Fmax\u002F60\u002F1*VmJ1_0-GdLOdluBKlwrtyg.png?q=20"},children:[]}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{alt:f,src:"https:\u002F\u002Fmiro.medium.com\u002Fmax\u002F870\u002F1*VmJ1_0-GdLOdluBKlwrtyg.png"},children:[]}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:b,value:"An example of how things might be split up into components"}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:a,tag:l,props:{},children:[{type:b,value:"Diving into our First Project"}]}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:b,value:"I’d like to give you a sense of what it’s like to code in Vue if you haven’t seen it before, and show you some of the syntax. I won’t be diving into the details, but we’ll see some core concepts along the way."}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:b,value:"As with many JavaScript applications, we start from the need to display our data onto a page."}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{alt:f,src:"https:\u002F\u002Fmiro.medium.com\u002Ffreeze\u002Fmax\u002F60\u002F1*rWz-r_zzZPygrDbJIpyHUw.gif?q=20"},children:[]}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{alt:f,src:"https:\u002F\u002Fmiro.medium.com\u002Fmax\u002F1600\u002F1*rWz-r_zzZPygrDbJIpyHUw.gif"},children:[]}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:b,value:"To start building with Vue it’s quite simple."}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{alt:f,src:"https:\u002F\u002Fmiro.medium.com\u002Ffreeze\u002Fmax\u002F60\u002F1*QY3SJZyTLuSYa3BsBP0fHg.gif?q=20"},children:[]}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{alt:f,src:"https:\u002F\u002Fmiro.medium.com\u002Fmax\u002F1616\u002F1*QY3SJZyTLuSYa3BsBP0fHg.gif"},children:[]}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:b,value:"As you can see in the above image we include the Vue library, create a Vue instance, and plug into our root element with the id of app. EL stands for element. We’ll also move our data inside an object and change X into an expression with the double curly braces."}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:b,value:"As you can see, it works:"}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{alt:f,src:"https:\u002F\u002Fmiro.medium.com\u002Ffreeze\u002Fmax\u002F60\u002F1*5h7dhL1Mgq-UW_bPgd7Tzw.gif?q=20"},children:[]}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{alt:f,src:"https:\u002F\u002Fmiro.medium.com\u002Fmax\u002F1336\u002F1*5h7dhL1Mgq-UW_bPgd7Tzw.gif"},children:[]}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:b,value:"Nothing special, but the magic of Vue starts when data changes. If I jump into the console and change the value of the product, check out what happens:"}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{alt:f,src:"https:\u002F\u002Fmiro.medium.com\u002Ffreeze\u002Fmax\u002F60\u002F1*d_aepwGUf-k7FGxhskIeNQ.gif?q=20"},children:[]}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{alt:f,src:"https:\u002F\u002Fmiro.medium.com\u002Fmax\u002F1112\u002F1*d_aepwGUf-k7FGxhskIeNQ.gif"},children:[]}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:b,value:"Vue is  "},{type:a,tag:l,props:{},children:[{type:b,value:"reactive"}]},{type:b,value:", meaning that when our data changes Vue takes care of updating all the places we’re using it on our webpage."}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:b,value:"This works with any kind of data — not just strings. So, instead of a single product let’s use an array of products and update our h2 to an unordered list. To create a new "}]},{type:a,tag:"li",props:{},children:[{type:b,value:" element for every product, we’ll used a special attribute (AKA directive) from Vue called the v-for. This way, each product gets it’s own list item."},{type:a,tag:c,props:{},children:[]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{alt:f,src:"https:\u002F\u002Fmiro.medium.com\u002Fmax\u002F58\u002F1*g7maoj6x_xDBEfFl96978w.png?q=20"},children:[]}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{alt:f,src:"https:\u002F\u002Fmiro.medium.com\u002Fmax\u002F1600\u002F1*g7maoj6x_xDBEfFl96978w.png"},children:[]}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:b,value:"If we jump into the browser, here’s what we’d see:"}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{alt:f,src:"https:\u002F\u002Fmiro.medium.com\u002Ffreeze\u002Fmax\u002F60\u002F1*mrhrdyLnrEnpVenDPgzfew.gif?q=20"},children:[]}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{alt:f,src:"https:\u002F\u002Fmiro.medium.com\u002Fmax\u002F914\u002F1*mrhrdyLnrEnpVenDPgzfew.gif"},children:[]}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:b,value:"This is still a little contrived though, so let’s start with our list empty and fetch our products from an actual API, which could be coming from a database somewhere."}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{alt:f,src:"https:\u002F\u002Fmiro.medium.com\u002Ffreeze\u002Fmax\u002F60\u002F1*LAHpyqHRUB6WeuLhvdk4BA.gif?q=20"},children:[]}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{alt:f,src:"https:\u002F\u002Fmiro.medium.com\u002Fmax\u002F1654\u002F1*LAHpyqHRUB6WeuLhvdk4BA.gif"},children:[]}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:b,value:"If we look at what gets printed to our page now we’ll see:"}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{alt:f,src:"https:\u002F\u002Fmiro.medium.com\u002Ffreeze\u002Fmax\u002F60\u002F1*IagKXJH-LIgYpKBOKW0shA.gif?q=20"},children:[]}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{alt:f,src:"https:\u002F\u002Fmiro.medium.com\u002Fmax\u002F1210\u002F1*IagKXJH-LIgYpKBOKW0shA.gif"},children:[]}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:b,value:"As you can see, each list item is showing the object it returned. In order for this data to be read by humans, we need to change the way it’s displayed."}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{alt:f,src:"https:\u002F\u002Fmiro.medium.com\u002Ffreeze\u002Fmax\u002F60\u002F1*jg68PgvevDzh36Lbf7fwTA.gif?q=20"},children:[]}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{alt:f,src:"https:\u002F\u002Fmiro.medium.com\u002Fmax\u002F1632\u002F1*jg68PgvevDzh36Lbf7fwTA.gif"},children:[]}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:b,value:"And our result is:"}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{alt:f,src:"https:\u002F\u002Fmiro.medium.com\u002Ffreeze\u002Fmax\u002F60\u002F1*mt4tG4e56k3pTtYm1uq9IQ.gif?q=20"},children:[]}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{alt:f,src:"https:\u002F\u002Fmiro.medium.com\u002Fmax\u002F988\u002F1*mt4tG4e56k3pTtYm1uq9IQ.gif"},children:[]}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:b,value:"We might want to call attention to the items that have quantity 0, so lets add a "},{type:a,tag:"span",props:{},children:[{type:b,value:" with the text “OUT OF STOCK.” We only want it to appear if our item.quantity === 0, so we’ll use Vue’s v-if directive."}]}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{alt:f,src:"https:\u002F\u002Fmiro.medium.com\u002Ffreeze\u002Fmax\u002F60\u002F1*qDad76tPLrI72spIjTjHcA.gif?q=20"},children:[]}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{alt:f,src:"https:\u002F\u002Fmiro.medium.com\u002Fmax\u002F1560\u002F1*qDad76tPLrI72spIjTjHcA.gif"},children:[]}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:b,value:"Sure enough, our jacket is out of stock:"}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{alt:f,src:"https:\u002F\u002Fmiro.medium.com\u002Ffreeze\u002Fmax\u002F60\u002F1*7htJVzU6h6OjQQePn4T_EQ.gif?q=20"},children:[]}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{alt:f,src:"https:\u002F\u002Fmiro.medium.com\u002Fmax\u002F1348\u002F1*7htJVzU6h6OjQQePn4T_EQ.gif"},children:[]}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:b,value:"What if we wanted to print out the total number of products under our list? We need to create a computed property called totalProducts, which returns the total quantity of our products. If you’re not familiar with JavaScript reduce, it’s adding up all the quantities from each product."}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{alt:f,src:"https:\u002F\u002Fmiro.medium.com\u002Ffreeze\u002Fmax\u002F60\u002F1*rXMr73Bd9R2avfgWblLSIw.gif?q=20"},children:[]}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{alt:f,src:"https:\u002F\u002Fmiro.medium.com\u002Fmax\u002F1656\u002F1*rXMr73Bd9R2avfgWblLSIw.gif"},children:[]}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:b,value:"As you can see below, we now have our total inventory printing out."}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{alt:f,src:"https:\u002F\u002Fmiro.medium.com\u002Ffreeze\u002Fmax\u002F60\u002F1*91GVR7Iy1W3jihPRro__Kw.gif?q=20"},children:[]}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{alt:f,src:"https:\u002F\u002Fmiro.medium.com\u002Fmax\u002F1396\u002F1*91GVR7Iy1W3jihPRro__Kw.gif"},children:[]}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:b,value:"This is probably a good time to tell you about the  "},{type:a,tag:g,props:{href:"https:\u002F\u002Fchrome.google.com\u002Fwebstore\u002Fdetail\u002Fvuejs-devtools\u002Fnhdogjmejiglipccpnnnanhbledajbpd?hl=en",rel:[h,i,j],target:k},children:[{type:b,value:"Vue.js devtools Chrome Extension"}]},{type:b,value:". One of the nice features of the extension is that you can inspect the data getting loaded onto your page."}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{alt:f,src:"https:\u002F\u002Fmiro.medium.com\u002Ffreeze\u002Fmax\u002F60\u002F1*DHgJtwUhOB1T-R5uAfGOeg.gif?q=20"},children:[]}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{alt:f,src:"https:\u002F\u002Fmiro.medium.com\u002Fmax\u002F764\u002F1*DHgJtwUhOB1T-R5uAfGOeg.gif"},children:[]}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:b,value:"Just to show of some of Vue’s Reactivity again, let’s pop two items off the array and see what happens. As you can see below, not only is our list updated, but our total as well."}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{alt:f,src:"https:\u002F\u002Fmiro.medium.com\u002Ffreeze\u002Fmax\u002F60\u002F1*lY_y9Kr5jd-OxzXQrxgsPg.gif?q=20"},children:[]}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{alt:f,src:"https:\u002F\u002Fmiro.medium.com\u002Fmax\u002F764\u002F1*lY_y9Kr5jd-OxzXQrxgsPg.gif"},children:[]}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:b,value:"Next, I want to show you how we can add interactivity to this page through the use of a button. We’ll create an Add button for each product, and when a click occurs on this button we’ll increment the quantity by one."}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{alt:f,src:"https:\u002F\u002Fmiro.medium.com\u002Ffreeze\u002Fmax\u002F60\u002F1*nQnSoo_l1jsyz5HKa9pgLA.gif?q=20"},children:[]}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{alt:f,src:"https:\u002F\u002Fmiro.medium.com\u002Fmax\u002F1562\u002F1*nQnSoo_l1jsyz5HKa9pgLA.gif"},children:[]}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:b,value:"Notice how when we add an item (below), not only does the total inventory get updated, but also if we increment our Jacket product, our Out of stock notice goes away."}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{alt:f,src:"https:\u002F\u002Fmiro.medium.com\u002Ffreeze\u002Fmax\u002F60\u002F1*jeMEehhL_gf_XyzzSZjDlg.gif?q=20"},children:[]}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{alt:f,src:"https:\u002F\u002Fmiro.medium.com\u002Fmax\u002F690\u002F1*jeMEehhL_gf_XyzzSZjDlg.gif"},children:[]}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:b,value:"But what if we want to just write in the quantity of jackets or hiking socks? We just create a new input field, and bind it to our product quantity field with the v-model directive, and specify that this is always a number."}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{alt:f,src:"https:\u002F\u002Fmiro.medium.com\u002Ffreeze\u002Fmax\u002F60\u002F1*50k2N2qclL3O0U99kWjh2w.gif?q=20"},children:[]}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{alt:f,src:"https:\u002F\u002Fmiro.medium.com\u002Fmax\u002F1710\u002F1*50k2N2qclL3O0U99kWjh2w.gif"},children:[]}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:b,value:"You’ll notice I can now input the total quantity of each item, and it gets updated immediately. I can even set the quantity back to zero and I get my OUT of Stock statement, and my add buttons still work."}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{alt:f,src:"https:\u002F\u002Fmiro.medium.com\u002Ffreeze\u002Fmax\u002F60\u002F1*7nuQ-w4c4uA-s_jWFfILUw.gif?q=20"},children:[]}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{alt:f,src:"https:\u002F\u002Fmiro.medium.com\u002Fmax\u002F1020\u002F1*7nuQ-w4c4uA-s_jWFfILUw.gif"},children:[]}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:b,value:"You can fiddle withthe finished version of this project and run it by heading  "},{type:a,tag:g,props:{href:"https:\u002F\u002Fjsfiddle.net\u002Fgreggpollack\u002Fgr1cs2tv\u002F",rel:[h,i,j],target:k},children:[{type:b,value:"over to this JSFiddle"}]},{type:b,value:m}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:a,tag:l,props:{},children:[{type:b,value:"A few more Vue Features"}]}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:b,value:"If we were building this into a larger application would want to start splitting things up at this point into multiple components and files to keep things organized."}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{alt:f,src:"https:\u002F\u002Fmiro.medium.com\u002Fmax\u002F60\u002F1*9xP0wNPNNet6R5TE_U3fTA.png?q=20"},children:[]}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{alt:f,src:"https:\u002F\u002Fmiro.medium.com\u002Fmax\u002F968\u002F1*9xP0wNPNNet6R5TE_U3fTA.png"},children:[]}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:b,value:"Vue even provides a Command Line Interface to make it simple to start developing real projects quickly. As you see below the init command can be used to start a new project."}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{alt:f,src:"https:\u002F\u002Fmiro.medium.com\u002Fmax\u002F60\u002F1*x6O6bhqAGout-GJGUSo0Vg.png?q=20"},children:[]}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{alt:f,src:"https:\u002F\u002Fmiro.medium.com\u002Fmax\u002F964\u002F1*x6O6bhqAGout-GJGUSo0Vg.png"},children:[]}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:b,value:"We could also use single file .vue components, which contain HTML, JavaScript, and scoped CSS or even SCSS."}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{alt:f,src:"https:\u002F\u002Fmiro.medium.com\u002Ffreeze\u002Fmax\u002F60\u002F1*Li4E560X92SneMC1lplWSw.gif?q=20"},children:[]}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{alt:f,src:"https:\u002F\u002Fmiro.medium.com\u002Fmax\u002F1382\u002F1*Li4E560X92SneMC1lplWSw.gif"},children:[]}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:b,value:"What you’ve seen here just barely scratches the surface of what Vue can do. There’s so much more to help you build, organize, and scale your front-end applications. To start coding yourself, I’ll recommend two resources."}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:b,value:"Take Vue Mastery’s free  "},{type:a,tag:g,props:{href:"https:\u002F\u002Fwww.vuemastery.com\u002Fcourses\u002Fintro-to-vue-js\u002Fvue-instance",rel:[h,i,j],target:k},children:[{type:b,value:"Intro to Vue.js course"}]},{type:b,value:". Vue Mastery also has a  "},{type:a,tag:g,props:{href:"https:\u002F\u002Fwww.vuemastery.com\u002Fvue-cheat-sheet\u002F",rel:[h,i,j],target:k},children:[{type:b,value:"free Vue cheat sheet"}]},{type:b,value:"  you’ll get if you create a free account, which has all of the syntax you need to know when you’re first getting started. Also, there is  "},{type:a,tag:g,props:{href:"https:\u002F\u002Fvuejs.org\u002Fv2\u002Fguide\u002F",rel:[h,i,j],target:k},children:[{type:b,value:"Introduction on the Official Documentation"}]},{type:b,value:m}]},{type:b,value:d},{type:a,tag:c,props:{},children:[{type:b,value:"Lastly I must thank Evan You, Chris Fritz, Sarah Drasner, and Adam Jahr for helping me create this content and the video."}]}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002Fwhy-devs-want-to-learn-vue",extension:".md",createdAt:"2021-04-26T14:22:44.872Z",updatedAt:"2021-04-26T14:25:58.075Z"}}],fetch:{},mutations:void 0}}("element","text","p","\n","img","","a","nofollow","noopener","noreferrer","_blank","strong",".","VueJs")));