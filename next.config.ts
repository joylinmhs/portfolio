import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "http://localhost:3000",
    "http://localhost:3001",
    "http://192.168.1.8:3000",
    "http://172.17.0.137:3000",
    "http://172.17.0.137:3001",
  ],
};

export default nextConfig;
