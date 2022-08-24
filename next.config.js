const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    importScripts: ['/worker.js'],
    disable: process.env.NODE_ENV === 'development',
  },
});
