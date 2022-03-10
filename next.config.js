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
      sw: 'service-worker.js'
    },
    poweredByHeader: false,
    devIndicators: {
      buildActivityPosition: 'bottom-right',
      autoPrerender: false
    },
    swcMinify: true,
    compress: true,
    reactStrictMode: true,
    images: {
      formats: ['image/avif', 'image/webp'],
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16,32,48,64,96,128,256,384],
      domains: ['github']
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
  

