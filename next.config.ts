import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.microcms-assets.io",
      },
    ],
  },
  experimental: {
    // メモリ使用量を削減
    workerThreads: false,
    cpus: 1,
  },
};

export default nextConfig;
