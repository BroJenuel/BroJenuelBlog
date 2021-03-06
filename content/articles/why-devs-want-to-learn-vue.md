---
title: "Why 43% of Front-End Developers want to learn Vue.js"
description: According to the  State of JavaScript 2017 survey  Vue.js is the front-end library that developers would most like to learn. I’m here to explain why I think this is, and walk you through building a simple app with Vue. ... As you may know, JavaScript has matured a great deal in the last 10 years, and much of the code that was normally on the server-side has migrated into the browser. As that has grown more complex, so have the frameworks to keep things more organized.
img: https://i.imgur.com/ZB7471Il.jpg
category: VueJs
tags: ['VueJs', 'JavaScript','Developer']
createdAtDate: 2021-04-29T00:00:00.000Z
---

According to the  [State of JavaScript 2017 survey](https://stateofjs.com/2017/front-end/results/)  Vue.js is the front-end library that developers would most like to learn. I’m here to explain why I think this is, and walk you through building a simple app with Vue.

I recently worked with Evan You, Chris Fritz, Sarah Drasner, and Adam Jahr to produce an introduction video, which you can now find on the front page of  [http://vuejs.org](http://vuejs.org/). What follows is a text version of that video.

**The Great JavaScript Migration**

As you may know, JavaScript has matured a great deal in the last 10 years, and much of the code that was normally on the server-side has migrated into the browser. As that has grown more complex, so have the frameworks to keep things more organized.

  
![](https://miro.medium.com/max/1248/1*yo-xcHU5V8TGxejUinOO7w.png)

I’m not going to tell you why one is better than the other, although there is a great comparison page on the  [official Vue docs](https://vuejs.org/v2/guide/comparison.html).

Vue.js aims to be an approachable, versatile, performant, maintainable, and testable JavaScript framework. Vue also aims to be progressive, meaning that if you have an existing application you can use Vue in just one part of your front-end that needs a more interactive experience.

Alternatively, you can build more business logic into your front-end from the start. Vue has the core libraries and ecosystem you’ll need to scale.

![](https://miro.medium.com/freeze/max/60/1*d1NRlPyQSIsYv4oW4AVdRA.gif?q=20)

![](https://miro.medium.com/max/612/1*d1NRlPyQSIsYv4oW4AVdRA.gif)

Like other front-end frameworks, Vue allows you to take a webpage and split the logic up into reusable components. Each of these can have it’s own HTML, CSS, and JavaScript needed to render each piece of the page.

![](https://miro.medium.com/max/60/1*VmJ1_0-GdLOdluBKlwrtyg.png?q=20)

![](https://miro.medium.com/max/870/1*VmJ1_0-GdLOdluBKlwrtyg.png)

An example of how things might be split up into components

**Diving into our First Project**

I’d like to give you a sense of what it’s like to code in Vue if you haven’t seen it before, and show you some of the syntax. I won’t be diving into the details, but we’ll see some core concepts along the way.

As with many JavaScript applications, we start from the need to display our data onto a page.

![](https://miro.medium.com/freeze/max/60/1*rWz-r_zzZPygrDbJIpyHUw.gif?q=20)

![](https://miro.medium.com/max/1600/1*rWz-r_zzZPygrDbJIpyHUw.gif)

To start building with Vue it’s quite simple.

![](https://miro.medium.com/freeze/max/60/1*QY3SJZyTLuSYa3BsBP0fHg.gif?q=20)

![](https://miro.medium.com/max/1616/1*QY3SJZyTLuSYa3BsBP0fHg.gif)

As you can see in the above image we include the Vue library, create a Vue instance, and plug into our root element with the id of app. EL stands for element. We’ll also move our data inside an object and change X into an expression with the double curly braces.

As you can see, it works:

![](https://miro.medium.com/freeze/max/60/1*5h7dhL1Mgq-UW_bPgd7Tzw.gif?q=20)

![](https://miro.medium.com/max/1336/1*5h7dhL1Mgq-UW_bPgd7Tzw.gif)

Nothing special, but the magic of Vue starts when data changes. If I jump into the console and change the value of the product, check out what happens:

![](https://miro.medium.com/freeze/max/60/1*d_aepwGUf-k7FGxhskIeNQ.gif?q=20)

![](https://miro.medium.com/max/1112/1*d_aepwGUf-k7FGxhskIeNQ.gif)

Vue is  **reactive**, meaning that when our data changes Vue takes care of updating all the places we’re using it on our webpage.

This works with any kind of data — not just strings. So, instead of a single product let’s use an array of products and update our h2 to an unordered list. To create a new <li> element for every product, we’ll used a special attribute (AKA directive) from Vue called the v-for. This way, each product gets it’s own list item.

![](https://miro.medium.com/max/58/1*g7maoj6x_xDBEfFl96978w.png?q=20)

![](https://miro.medium.com/max/1600/1*g7maoj6x_xDBEfFl96978w.png)

If we jump into the browser, here’s what we’d see:

![](https://miro.medium.com/freeze/max/60/1*mrhrdyLnrEnpVenDPgzfew.gif?q=20)

![](https://miro.medium.com/max/914/1*mrhrdyLnrEnpVenDPgzfew.gif)

This is still a little contrived though, so let’s start with our list empty and fetch our products from an actual API, which could be coming from a database somewhere.

![](https://miro.medium.com/freeze/max/60/1*LAHpyqHRUB6WeuLhvdk4BA.gif?q=20)

![](https://miro.medium.com/max/1654/1*LAHpyqHRUB6WeuLhvdk4BA.gif)

If we look at what gets printed to our page now we’ll see:

![](https://miro.medium.com/freeze/max/60/1*IagKXJH-LIgYpKBOKW0shA.gif?q=20)

![](https://miro.medium.com/max/1210/1*IagKXJH-LIgYpKBOKW0shA.gif)

As you can see, each list item is showing the object it returned. In order for this data to be read by humans, we need to change the way it’s displayed.

![](https://miro.medium.com/freeze/max/60/1*jg68PgvevDzh36Lbf7fwTA.gif?q=20)

![](https://miro.medium.com/max/1632/1*jg68PgvevDzh36Lbf7fwTA.gif)

And our result is:

![](https://miro.medium.com/freeze/max/60/1*mt4tG4e56k3pTtYm1uq9IQ.gif?q=20)

![](https://miro.medium.com/max/988/1*mt4tG4e56k3pTtYm1uq9IQ.gif)

We might want to call attention to the items that have quantity 0, so lets add a <span> with the text “OUT OF STOCK.” We only want it to appear if our item.quantity === 0, so we’ll use Vue’s v-if directive.

![](https://miro.medium.com/freeze/max/60/1*qDad76tPLrI72spIjTjHcA.gif?q=20)

![](https://miro.medium.com/max/1560/1*qDad76tPLrI72spIjTjHcA.gif)

Sure enough, our jacket is out of stock:

![](https://miro.medium.com/freeze/max/60/1*7htJVzU6h6OjQQePn4T_EQ.gif?q=20)

![](https://miro.medium.com/max/1348/1*7htJVzU6h6OjQQePn4T_EQ.gif)

What if we wanted to print out the total number of products under our list? We need to create a computed property called totalProducts, which returns the total quantity of our products. If you’re not familiar with JavaScript reduce, it’s adding up all the quantities from each product.

![](https://miro.medium.com/freeze/max/60/1*rXMr73Bd9R2avfgWblLSIw.gif?q=20)

![](https://miro.medium.com/max/1656/1*rXMr73Bd9R2avfgWblLSIw.gif)

As you can see below, we now have our total inventory printing out.

![](https://miro.medium.com/freeze/max/60/1*91GVR7Iy1W3jihPRro__Kw.gif?q=20)

![](https://miro.medium.com/max/1396/1*91GVR7Iy1W3jihPRro__Kw.gif)

This is probably a good time to tell you about the  [Vue.js devtools Chrome Extension](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en). One of the nice features of the extension is that you can inspect the data getting loaded onto your page.

![](https://miro.medium.com/freeze/max/60/1*DHgJtwUhOB1T-R5uAfGOeg.gif?q=20)

![](https://miro.medium.com/max/764/1*DHgJtwUhOB1T-R5uAfGOeg.gif)

Just to show of some of Vue’s Reactivity again, let’s pop two items off the array and see what happens. As you can see below, not only is our list updated, but our total as well.

![](https://miro.medium.com/freeze/max/60/1*lY_y9Kr5jd-OxzXQrxgsPg.gif?q=20)

![](https://miro.medium.com/max/764/1*lY_y9Kr5jd-OxzXQrxgsPg.gif)

Next, I want to show you how we can add interactivity to this page through the use of a button. We’ll create an Add button for each product, and when a click occurs on this button we’ll increment the quantity by one.

![](https://miro.medium.com/freeze/max/60/1*nQnSoo_l1jsyz5HKa9pgLA.gif?q=20)

![](https://miro.medium.com/max/1562/1*nQnSoo_l1jsyz5HKa9pgLA.gif)

Notice how when we add an item (below), not only does the total inventory get updated, but also if we increment our Jacket product, our Out of stock notice goes away.

![](https://miro.medium.com/freeze/max/60/1*jeMEehhL_gf_XyzzSZjDlg.gif?q=20)

![](https://miro.medium.com/max/690/1*jeMEehhL_gf_XyzzSZjDlg.gif)

But what if we want to just write in the quantity of jackets or hiking socks? We just create a new input field, and bind it to our product quantity field with the v-model directive, and specify that this is always a number.

![](https://miro.medium.com/freeze/max/60/1*50k2N2qclL3O0U99kWjh2w.gif?q=20)

![](https://miro.medium.com/max/1710/1*50k2N2qclL3O0U99kWjh2w.gif)

You’ll notice I can now input the total quantity of each item, and it gets updated immediately. I can even set the quantity back to zero and I get my OUT of Stock statement, and my add buttons still work.

![](https://miro.medium.com/freeze/max/60/1*7nuQ-w4c4uA-s_jWFfILUw.gif?q=20)

![](https://miro.medium.com/max/1020/1*7nuQ-w4c4uA-s_jWFfILUw.gif)

You can fiddle withthe finished version of this project and run it by heading  [over to this JSFiddle](https://jsfiddle.net/greggpollack/gr1cs2tv/).

**A few more Vue Features**

If we were building this into a larger application would want to start splitting things up at this point into multiple components and files to keep things organized.

![](https://miro.medium.com/max/60/1*9xP0wNPNNet6R5TE_U3fTA.png?q=20)

![](https://miro.medium.com/max/968/1*9xP0wNPNNet6R5TE_U3fTA.png)

Vue even provides a Command Line Interface to make it simple to start developing real projects quickly. As you see below the init command can be used to start a new project.

![](https://miro.medium.com/max/60/1*x6O6bhqAGout-GJGUSo0Vg.png?q=20)

![](https://miro.medium.com/max/964/1*x6O6bhqAGout-GJGUSo0Vg.png)

We could also use single file .vue components, which contain HTML, JavaScript, and scoped CSS or even SCSS.

![](https://miro.medium.com/freeze/max/60/1*Li4E560X92SneMC1lplWSw.gif?q=20)

![](https://miro.medium.com/max/1382/1*Li4E560X92SneMC1lplWSw.gif)

What you’ve seen here just barely scratches the surface of what Vue can do. There’s so much more to help you build, organize, and scale your front-end applications. To start coding yourself, I’ll recommend two resources.

Take Vue Mastery’s free  [Intro to Vue.js course](https://www.vuemastery.com/courses/intro-to-vue-js/vue-instance). Vue Mastery also has a  [free Vue cheat sheet](https://www.vuemastery.com/vue-cheat-sheet/)  you’ll get if you create a free account, which has all of the syntax you need to know when you’re first getting started. Also, there is  [Introduction on the Official Documentation](https://vuejs.org/v2/guide/).

Lastly I must thank Evan You, Chris Fritz, Sarah Drasner, and Adam Jahr for helping me create this content and the video.