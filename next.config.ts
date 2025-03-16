import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  fontLoaders: [
    { loader: '@next/font/google', options: { subsets: ['latin'] } },
  ],
  env: {
    API_BASE_URL: 'https://siriuspolk.online/api/v1',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.yandexcloud.net',
      },
      {
        protocol: 'https',
        hostname: 'sirius-ft.ru',
      },
      {
        protocol: 'https',
        hostname: 'sun9-38.userapi.com',
      },
      {
        protocol: 'https',
        hostname: 'siriuslyceum.ru',
      },
      {
        protocol: 'https',
        hostname: 's1.sochi-bloknot.ru',
      },
      {
        protocol: 'https',
        hostname: 'sochisirius.ru',
      },
    ],
  },
};

export default nextConfig;
