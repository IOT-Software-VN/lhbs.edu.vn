import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createNextConfig } from '@lhbs/config/eslint/next.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default createNextConfig({
  tsconfigPath: path.join(__dirname, 'tsconfig.json'),
  tsconfigRootDir: __dirname
})
