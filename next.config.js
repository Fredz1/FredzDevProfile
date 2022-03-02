const withPWA = require('next-pwa')

const usePWA = false

module.exports = withPWA(
  {
    pwa:{
      dest: 'public',
      disable: usePWA/* process.env.NODE_ENV === 'development' */,
      register: true,
      scope: '/',
      sw: 'service-worker.js',
      customWorkerDir: './public/serviceWorker'
    },
    images: {
      domains: ['github.com']
    },
    poweredByHeader: false,
    env:{
      TEST: 'production'
    },
    devIndicators: {
      buildActivityPosition: 'bottom-right'
    },
    swcMinify: true

  }
)
  

