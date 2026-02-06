/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
  swcMinify: false,
  experimental: {
    forceSwcTransforms: false,
  },
};

module.exports = nextConfig;
