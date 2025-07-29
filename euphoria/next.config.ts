import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: true,
  experimental: {
    reactCompiler: true,
  },
};

export default nextConfig;
