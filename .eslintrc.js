const os = require('os');

module.exports = {
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  extends: 'airbnb',
  ignorePatterns: ['node_modules/', 'build/'],
  parser: '@babel/eslint-parser',
  plugins: ['react'],
  rules: {
    'linebreak-style': 0, // Disable linebreak-style check
    'react/jsx-one-expression-per-line': 0, // Disable strict rule for JSX expressions on new lines
    'jsx-a11y/click-events-have-key-events': 0, // Disable requirement for keyboard listeners
    'jsx-a11y/no-static-element-interactions': 0, // Allow click handlers on static elements
    'jsx-a11y/anchor-is-valid': 0, // Disable anchor validation checks
    'react/jsx-no-useless-fragment': 0, // Allow single-child fragments
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'info'],
      },
    ],
    'no-underscore-dangle': 0,
    'react/destructuring-assignment': 0,
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/jsx-props-no-spreading': 0,
    'no-unused-vars': ['warn'], // Treat unused variables as warnings
    'max-len': ['warn', { code: 400 }], // Increase line length limit
  },
};
