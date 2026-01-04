import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import reactHooks from 'eslint-plugin-react-hooks'

const isProd = process.env.NODE_ENV === 'production'

export function createNextConfig({ tsconfigPath, tsconfigRootDir }) {
  return [
    {
      ignores: ['dist', 'out', '.next', 'node_modules', 'src/components/ui']
    },

    js.configs.recommended,

    ...tseslint.configs.recommended,

    {
      files: ['**/*.{ts,tsx}'],
      languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        parserOptions: {
          tsconfigRootDir,
          project: [tsconfigPath]
        }
      },
      plugins: {
        'react-hooks': reactHooks
      },
      rules: {
        'no-console': [isProd ? 'error' : 'warn', { allow: isProd ? ['warn', 'error'] : ['warn', 'error', 'log'] }],
        'no-duplicate-imports': 'error',
        'no-unused-vars': 'off',

        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            args: 'all',
            argsIgnorePattern: '^_',
            caughtErrors: 'all',
            caughtErrorsIgnorePattern: '^_',
            destructuredArrayIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            ignoreRestSiblings: true
          }
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/consistent-type-imports': [
          'error',
          {
            prefer: 'type-imports',
            fixStyle: 'inline-type-imports',
            disallowTypeAnnotations: false
          }
        ],

        ...reactHooks.configs.recommended.rules
      }
    },

    {
      files: ['**/*.d.ts'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/consistent-type-imports': 'off'
      }
    }
  ]
}

export default createNextConfig
