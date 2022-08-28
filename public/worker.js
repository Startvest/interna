console.log("Notification service worker");

self.addEventListener('push', e=> {
     const data = e.data.json();
     console.log('Push received');
     self.registration.showNotification(data.title, {
         body: data.body,
         icon: 'https://interna.vercel.app/icons/icon-192x192.png',
        //  actions: '', 
     });
})