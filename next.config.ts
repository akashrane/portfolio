import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/Akash_Rane_Resume",
        destination: "/resume",
      },
      {
        source: "/akash_rane_resume",
        destination: "/resume",
      },
    ];
  },
};

export default nextConfig;
