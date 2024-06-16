/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? true : false,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "style")]
  },
  
};

module.exports = nextConfig;