import type { NextConfig } from "next";

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  assetPrefix: isProd ? '/your-repository-name/' : '',
  basePath: isProd ? '/your-repository-name' : '',
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
