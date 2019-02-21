//Make sure SW is supported
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('sw_site.js')
            .then(reg => console.log('Service Worker: Register'))
            .catch(err => console.log('Service Worker: ${err}'))
    })     
}