const { version } = require("react");

module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  settings: {
    "import/resolver": {
      "typescript": {}
    },
    react: {
      version
    }
  },
  extends: [
    'eslint:recommended',
    'prettier'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite-env.d.ts', 'postcss.config.js', 'public/mockServiceWorker.js', 'coverage', 'src/openapi/**/*'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: './tsconfig.eslint.json'
  },
  plugins: ['prettier'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ]
  },
  reportUnusedDisableDirectives: true,
  overrides: [
    {
      files: ['src/**/*.ts', 'src/**/*.tsx'],
      excludedFiles: ['**/*.test.tsx', '**/*.test.ts', 'src/openapi/**/*'],
      env: {
        browser: true,
        es2022: true,
        node: false
      },
      plugins: ["@typescript-eslint", 'react-refresh', '@tanstack/query'],
      extends: [
        'eslint:recommended',
        'plugin:promise/recommended',
        'plugin:@typescript-eslint/strict-type-checked',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:@tanstack/eslint-plugin-query/recommended',
        'plugin:testing-library/react',
        'plugin:jsx-a11y/strict',
        'prettier'
      ],
      rules: {
        'react-refresh/only-export-components': 'warn',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/no-confusing-void-expression': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        'no-async-promise-executor': 'error',
        'no-await-in-loop': 'error',
        'no-promise-executor-return': 'error',
        'require-atomic-updates': 'error',
        'max-nested-callbacks': ['error', 3],
        'no-return-await': 'error',
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/promise-function-async': ['error'],
        'promise/always-return': 'off',
        'promise/catch-or-return': 'off',
        'react/hook-use-state': 'error',
        'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'ignore', propElementValues: 'always' }]
      }
    },
    {
      files: ['**/*.test.ts', '**/*.test.tsx'],
      parser: '@typescript-eslint/parser',
      env: {
        browser: true,
        es2022: true,
        node: false
      },
      plugins: ["@typescript-eslint", 'react-refresh'],
      extends: [
        'eslint:recommended',
        'plugin:promise/recommended',
        'plugin:@typescript-eslint/strict-type-checked',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:testing-library/react',
        'prettier'
      ],
      rules: {
        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        'no-async-promise-executor': 'error',
        'no-await-in-loop': 'error',
        'no-promise-executor-return': 'error',
        'require-atomic-updates': 'error',
        'no-return-await': 'error',
        'testing-library/no-node-access': 'off',
        'testing-library/no-container': 'off'
      }
    }
  ]

}
