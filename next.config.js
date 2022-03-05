const withPWA = require('next-pwa')
const siteMap = require('./scripts/generate-sitemap.js')

const securityHeaders = [
  {
  key: 'X-DNS-Prefetch-Control',
  value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  }
]


module.exports = withPWA(
  {
    pwa:{
      dest: 'public',
      disable: process.env.NODE_ENV !== 'production'? true : false,
      register: true,
      scope: '/',
      sw: 'service-worker.js',
      customWorkerDir: './public/serviceWorker',
      runtimeCaching
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
    reactStrictMode: true,
    i18n:{
      locales: ['default', 'en'],
      defaultLocale: 'default',
      localDetection: true
    },
    webpack: 
    (config, {isServer}) => {
      if(isServer){
        siteMap
      }
      return config
    },
    async headers () {
      return[
        {
          source: '/:path*',
          headers: securityHeaders
        }  
      ]
      
    }
  }
)
  

