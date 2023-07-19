/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    SITEMAP_URL: 'https://www.fredmadethis.co.za'
  },
  reactStrictMode: true,
  optimizeFonts: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? true : false,
  },
  images: {
    domains : ['picsum.photos']
  }
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer(nextConfig)