import config from '@rocketseat/eslint-config/react.mjs'
import eslintSimpleImportPlugin from 'eslint-plugin-simple-import-sort'

export default [
  ...config,
  {
    plugins: {
      'simple-import-sort': eslintSimpleImportPlugin,
    },
    rules: {
      'simple-import-sort/imports': 'error',
    },
  },
]
