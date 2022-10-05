const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
    importScripts: ['/worker.js'],
    disable: process.env.NODE_ENV === 'development',
})

module.exports = withPWA