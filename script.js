if ('serviceWorker' in navigator){
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('serviceworker.js')
      .then(reg => console.log('Service Worker: Registered'))
      .catch(err => console.log(`service worker: error: ${err}`))
  })
}


