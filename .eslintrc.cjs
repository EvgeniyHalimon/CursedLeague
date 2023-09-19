module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react-refresh',
    'react',
    'import',
    'unused-imports'
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ], 
    '@typescript-eslint/no-explicit-any': 'off',
    'no-console': 'warn',
    'semi': 'warn',
    'no-unused-vars': 'warn',
    'prefer-const': 'warn',
    'quotes': ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-single'],
    'indent': ['warn', 2],
    'comma-dangle': ['error', 'always-multiline'],
    'func-call-spacing': ['error', 'never'],
    'padded-blocks': ['error', 'never'],
    'max-params': ['error', 3],
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'unused-imports/no-unused-imports': 'error',
    'import/order': [
      'error',
      {
        'groups': [
          'builtin',
          'external',
          'parent',
          'sibling',
          'index',
          'object',
          'type'
        ],
        'newlines-between': 'always-and-inside-groups',
        'pathGroups': [
          {
            'pattern': '@/**/**',
            'group': 'parent',
            'position': 'before'
          }
        ],
        'alphabetize': { 'order': 'asc' }
      }
    ],
  },
}
