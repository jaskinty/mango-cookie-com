import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/about',
        destination: '/index.html',
      },
      {
        source: '/',
        destination: '/index.html',
      },
    ];
  },
};

export default nextConfig;