import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  assetPrefix: './', // Use relative paths for file:// protocol
  images: {
    unoptimized: true
  }
}

export default nextConfig
