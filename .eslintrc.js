module.exports = {
  env: {
    es6: true,
    browser: true,
  },
  extends: [
    "prettier",
    "prettier/react",
    "plugin:react/recommended",
    "eslint:recommended",
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "jsx-a11y", "import", "react-hooks", "prettier"],
  rules: {
    "quotes": "off",
    "import/extensions": "off",
    "prettier/prettier": "off",
    "react/jsx-filename-extension": ["off", { extensions: [".js", ".jsx"] }],
    "import/prefer-default-export": "off",
    "no-unused-vars": ["off", { argsIgnorePattern: "^_" }],
    "react/jsx-one-expression-per-line": "off",
    "global-require": "off",
    "react-native/no-raw-text": "off",
    "no-param-reassign": "off",
    "no-underscore-dangle": "off",
    camelcase: "off",
    "react-hooks/rules-of-hooks": "off",
    "react-hooks/exhaustive-deps": "off",
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": ["error", { ignore: ["navigation", "route", "props"] }],
  },
};
