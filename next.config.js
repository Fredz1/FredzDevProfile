/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  env: {
    SITEMAP_URL: "https://www.fredmadethis.co.za",
  },
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? true : false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "**",
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "style")]
  },
};

module.exports = nextConfig;