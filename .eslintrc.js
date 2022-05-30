const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig(
  {
    root: true,
    env: {
      node: true
    },
    extends: [
      'plugin:vue/vue3-essential',
      '@vue/typescript/recommended'
    ],
    parserOptions: {
      ecmaVersion: 12,
      parser: '@typescript-eslint/parser',
      sourceType: 'module'
    },
    plugins: [
      'vue',
      '@typescript-eslint'
    ],
    rules: {
      'indent': ['error', 2, { 'SwitchCase': 1 }],
      '@typescript-eslint/no-explicit-any': 'off',
      'quotes': 'off',
      'quote-props': 'off',
      'vue/multi-word-component-names': 'off',
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    }
  }
)
