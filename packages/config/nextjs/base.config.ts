import type { NextConfig } from 'next'

export const baseNextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  assetPrefix: './',
  images: {
    unoptimized: true,
    qualities: [75, 90]
  }
}

