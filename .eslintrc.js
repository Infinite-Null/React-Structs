module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    // Code Quality Rules
    'no-console': 'error',
    'no-debugger': 'error',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    eqeqeq: ['error', 'always'],
    curly: ['error', 'all'],

    // Best Practices
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-no-bind': ['error', { allowArrowFunctions: true }],
    'react/self-closing-comp': 'error',
    'react/prop-types': 'off',

    // React Native Specific Rules
    'react-native/no-inline-styles': 'error',
    'react-native/no-unused-styles': 'error',
    'react-native/split-platform-components': 'error',
    'react-native/no-color-literals': 'warn',

    // Formatting and Style
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'object-curly-spacing': ['error', 'always'],
  },
};
