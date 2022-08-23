console.log("Notification service worker");

self.addEventListener('push', e=> {
     const data = e.data.json();
     console.log('Push received');
     self.registration.showNotification(data.title, {
         body: 'Notified by Interna',
         icon: 'https://interna.vercel.app/icons/icons-192x192.png' 
     });
})