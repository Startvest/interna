export default function sendNotification() {
     const publicKey = 'BNN23SZRRIdcACXiNvS9_VaoF_-IxHpz6zwczq8BiqFIsv_FrYvpi1xbN14HwnP4RORoxVcp8DdPV5nkdI_7TkM';

     if ('serviceWorker' in navigator) {
          send().catch(e => console.error(e));
     }

     async function send() {
          console.log('Registering service worker...');
          const register = await navigator.serviceWorker.register('./worker.js', {
               scope: '/'
          });
          console.log('Service worker registered...');

          const subscription = await register.pushManager.subscribe({
               userVisibleOnly: true,
               applicationServerKey: urlBase64ToUint8Array(publicKey)
          });

          console.log("push Registered...");

          console.log("Sending push notification");

          await fetch('/api/subscribe', {
               method: 'POST',
               body: JSON.stringify(subscription),
               headers: {
                    'Content-type': 'application/json'
               }
          });
          console.log("push worked");
     }

     function urlBase64ToUint8Array(base64String) {
          const padding = "=".repeat((4 - base64String.length % 4) % 4);
          const base64 = (base64String + padding)
               .replace(/\-/g, "+")
               .replace(/_/g, "/");

          const rawData = window.atob(base64);
          const outputArray = new Uint8Array(rawData.length);

          for (let i = 0; i < rawData.length; ++i) {
               outputArray[i] = rawData.charCodeAt(i);
          }
          return outputArray;
     }
}