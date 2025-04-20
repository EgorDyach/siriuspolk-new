import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  fontLoaders: [
    { loader: '@next/font/google', options: { subsets: ['latin'] } },
  ],

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      },
      {
        protocol: 'http',
        hostname: '*',
      },
    ],
  },
};

export default nextConfig;
