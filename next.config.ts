import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {
    appName: 'Family Mealplan'
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.unsplash.com'
      }
    ]
  }
};

export default nextConfig;
