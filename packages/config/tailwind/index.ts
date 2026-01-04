import type { Config } from 'tailwindcss'

export const baseConfig: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        'brand-green': '#1e5338',
        'brand-gold': '#faba1e',
        'lhbs-green': '#1e5338',
        'lhbs-green-dark': '#00602f',
        'lhbs-yellow': '#faba1e'
      },
      fontFamily: {
        sans: ['var(--font-svn-gotham)', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  }
}

export default baseConfig
