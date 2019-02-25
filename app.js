// Make sure SW is supported
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('sw_site.js')
            .then(reg => console.log('Service Worker: Register'))
            .catch(err => console.log('Service Worker: ${err}'))
    })
}

// window.addEventListener('beforeinstallprompt', (event) => {
//     console.log('👍', 'beforeinstallprompt', event);
//     // Stash the event so it can be triggered later.
//     window.deferredPrompt = event;
//     // Remove the 'hidden' class from the install button container
//     divInstall.classList.toggle('hidden', false);
// });
