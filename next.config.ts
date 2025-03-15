import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  fontLoaders: [
    { loader: "@next/font/google", options: { subsets: ["latin"] } },
  ],
  env: {
    API_BASE_URL: "https://siriuspolk.online/api/v1",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.yandexcloud.net",
      },
    ],
  },
};

export default nextConfig;
