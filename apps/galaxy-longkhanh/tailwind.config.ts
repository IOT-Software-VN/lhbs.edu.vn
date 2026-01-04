import type { Config } from 'tailwindcss'
import baseConfig from '@lhbs/config/tailwind'

const config: Config = {
  ...baseConfig,
  content: ['./src/**/*.{ts,tsx}', '../../packages/ui/src/**/*.{ts,tsx}', '../../packages/styles/**/*.css']
}

export default config
