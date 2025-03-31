import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/locoin",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
