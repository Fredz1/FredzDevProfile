const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')



module.exports = withPWA(
  {
    pwa:{
      dest: 'public',
      disable: process.env.NODE_ENV !== 'production'? true : false,
      register: false,
      scope: '/',
      sw: 'service-worker.js'
    },
    poweredByHeader: false,
    reactStrictMode: true,
    optimizeFonts: true,
    compress: true,
    images: {
      formats: ['image/avif', 'image/webp'],
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16,32,48,64,96,128,256,384],
      domains: ['github']
    },
  }
)
  

