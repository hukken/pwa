// Make sure SW is supported
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('sw_site.js')
            .then(reg => console.log('Service Worker: Register'))
            .catch(err => console.log('Service Worker: ${err}'))
    })
}

// Promt Android users for install
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI notify the user they can add to home screen
    // showAddToHomeScreen();
    console.log('Add');
});

function showAddToHomeScreen() {
    var btnAdd = document.querySelector(".btnAdd");
    btnAdd.style.display = "block";

}