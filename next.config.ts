import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.ucarecdn.com",
      },
      {
        protocol: "https",
        hostname: "**.ucarecd.net",
      },
    ],
  },
};

export default nextConfig;
