/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
  swcMinify: false,
  experimental: {
    forceSwcTransforms: false,
    webpackBuildWorker: false,
  },
  webpack: (config, { isServer }) => {
    // Force use of WASM SWC instead of native binary
    config.resolve.alias = {
      ...config.resolve.alias,
      '@next/swc': '@next/swc-wasm-nodejs',
    };
    return config;
  },
};

module.exports = nextConfig;
