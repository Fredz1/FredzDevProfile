/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: true,
  compiler: {
    removeConsole: process.env.production ? true : false,
  },
  
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer(nextConfig)