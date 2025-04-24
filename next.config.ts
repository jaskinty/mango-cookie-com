import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/home.html',
      },
    ];
  },
};

export default nextConfig;