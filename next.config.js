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
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '**'
      }
    ]
  }
}

module.exports = nextConfig