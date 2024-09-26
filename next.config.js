const withPWA = require('next-pwa')({
    dest: 'public',  // Esto asegura que el service worker se genere en public/sw.js
    disable: process.env.NODE_ENV === 'development',  // El service worker solo se generará en producción
  });
  
  module.exports = withPWA({
    // Otras configuraciones de Next.js
  });
  