const withPWA = require('next-pwa')
const siteMap = require('./scripts/generate-sitemap.js')
const nonceHash = require('./scripts/hashMaker.js')


const generateCsp = async() => {

  return `default-src 'self' www.googletagmanager.com ; style-src 'self' 'unsafe-inline'; script-src 'sha256-${ nonceHash }' 'self' www.googletagmanager.com 'unsafe-inline' ; font-src 'self' data:; img-src 'self' www.googletagmanager.com data:;`
}


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
    headers: async () => [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: await generateCsp()
          }
        ]
      }
    ]
  }
)
  

