const withPWA = require('next-pwa')


module.exports = withPWA(
  {
    pwa:{
      dest: 'public',
      disable: process.env.NODE_ENV !== 'production'? true : false,
      register: true,
      scope: '/',
      sw: 'service-worker.js',
      customWorkerDir: './public/serviceWorker'
    },
    images: {
      domains: ['github.com']
    },
    poweredByHeader: false,
    devIndicators: {
      buildActivityPosition: 'bottom-right',
      autoPrerender: false
    },
    swcMinify: true,
    compress: true,
    reactStrictMode: true
  }
)
  

