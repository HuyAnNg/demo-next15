import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  output: 'standalone',
  reactStrictMode: false,
}

export default nextConfig
