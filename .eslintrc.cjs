
module.exports = {
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['.eslintrc.js'],

  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, 
    },
    project: './tsconfig.json',

  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:import/typescript',
    'eslint-config-airbnb-typescript',
  ],
  plugins: ['@typescript-eslint', 'react', 'import'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    '@typescript-eslint/ban-ts-comment': [
      'error',
      { 'ts-ignore': 'allow-with-description' },
    ],
    'react/function-component-definition': 'off',
    'react/no-unknown-property': 'off',
    'react/prop-types': 'off',
    'no-param-reassign': 'off',
    "linebreak-style": 0,
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "arrow-body-style": "off",
    "implicit-arrow-linebreak": "off",
    "react-hooks/exhaustive-deps": "off",
    "react/react-in-jsx-scope": "off",
    "react/no-unused-prop-types": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "import/prefer-default-export": "off",
  },
};
