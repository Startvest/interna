const webpush = require('web-push');
// const vapidKeys = require('../../config/vapidKeys');

// const { 
//      publicKey, 
//      privateKey 
// } = vapidKeys;
const vapidKeys = {
     publicKey: 'BNN23SZRRIdcACXiNvS9_VaoF_-IxHpz6zwczq8BiqFIsv_FrYvpi1xbN14HwnP4RORoxVcp8DdPV5nkdI_7TkM',
     privateKey: 'f2ryigNfsCmrikw-Xo7OVwkcwqwWATm3g7YkMZWee70'
}
export function Configure(){
     webpush.setVapidDetails('mailto:contact@startvest.io',vapidKeys.publicKey, vapidKeys.privateKey);
}
