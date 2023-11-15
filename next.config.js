/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ['lh3.google.com']
  }
};

module.exports = nextConfig;
