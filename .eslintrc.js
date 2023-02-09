module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['tailwindcss', '@typescript-eslint', 'import'],
  extends: [
    'next/core-web-vitals',
    'airbnb',
    'airbnb/hooks',
    'plugin:tailwindcss/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  plugins: ['tailwindcss'],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'arrow-body-style': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'import/extensions': 'off',
    'default-param-last': 'off',
    'no-nested-ternary': 'off',
    'arrow-parens': 'off',
    'no-underscore-dangle': 'off',
    'consistent-return': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
      },
    ],
    'import/order': [
      'warn',
      {
        'newlines-between': 'always-and-inside-groups',
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
      },
    ],
    '@next/next/no-img-element': 'off',
  },
};
