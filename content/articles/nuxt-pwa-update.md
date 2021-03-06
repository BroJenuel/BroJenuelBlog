---
title: "NuxtJs: UPDATE PWA APP, if their is new changes"
description: Let us learn how to update our PWA app, if their are any changes so that it refreshes the cache if their are any new content or changes in our NUXT PWA APP.
img: https://pwa.nuxtjs.org/preview.png
category: NuxtJs PWA
tags: ['NuxtJs', 'PWA','JavaScript']
createdAtDate: 2021-04-16T00:00:00.000Z
---

One day I was creating my Nuxt App, and wanted it to be PWA or Progressive Web App. After Setting up the PWA, and deployed it. I saw a problem where if I have a new update, you can't see the changes you made when you redeploy. The problem here is that, it saves the caches and then thats it, when the browser check the url it will always use the caches if available. So in order to refresh the cache we need to `windows.location.reload()`.  

The only problem was we have to make sure to detect first and reload the web app. To do that, in your `plugin` folder create this file.

```js
// pwa-update.js

export default async (context) => {
  const workbox = await window.$workbox

  if (!workbox) {
    console.debug("Workbox couldn't be loaded.")
    return
  }

  workbox.addEventListener('installed', (event) => {
    if (!event.isUpdate) {
      console.debug('The PWA is on the latest version.')
      return
    }

    console.debug('There is an update for the PWA, reloading...')
    window.location.reload()
  })
}
```


and then add the plugin to your `nuxt.config.js`
```js
// nuxt.config.js

// ...

  plugins: [
    { src: '~/plugins/pwa-update.js', mode: 'client' },
  ],

// ...
```

I hope this post helped. Enjoy 🎉
