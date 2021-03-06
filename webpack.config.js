const loaderHTML = `<div class="full-page"><div class="spinner">\
<svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">\
  <circle class="length" fill="none" stroke-width="8" stroke-linecap="round" cx="33" cy="33" r="28"></circle>\
</svg>\
<svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">\
  <circle fill="none" stroke-width="8" stroke-linecap="round" cx="33" cy="33" r="28"></circle>\
</svg>\
<svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">\
  <circle fill="none" stroke-width="8" stroke-linecap="round" cx="33" cy="33" r="28"></circle>\
</svg>\
<svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">\
  <circle fill="none" stroke-width="8" stroke-linecap="round" cx="33" cy="33" r="28"></circle>\
</svg>\
</div></div>`;

module.exports = require('webpack-boiler')({
  react: true,
  manifest: {
    background_color: '#ffffff',
    display: 'standalone',
    start_url: '/dashboard',
    short_name: 'vroom',
  },
  offline: process.env.NODE_ENV === 'development' ? false : {
    ServiceWorker: {
      output: 'vroom-sw.js',
      events: true,
    },
  },
  url: 'https://vroom.now.sh',
  pages: [{
    title: 'vroom',
    favicon: './src/images/vroom-car.png',
    meta: {
      'theme-color': '#FA7C91',
      description: 'A platform for people sleeping in their vehicles to find overnight parking',
      keywords: 'vroom,rent,sleep,vehicle,overnight,parking',
    },
    loader: loaderHTML,
  }],
  googleAnalytics: 'UA-105229811-4',
});

delete module.exports.module.rules[3].include;
