/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["encrypted-tbn0.gstatic.com", "cdn.sanity.io"],
  },
  webpack: function (config, options) {
    config.module.noParse = /gun\.js$/;
    return config;
  },
};

module.exports = nextConfig;
