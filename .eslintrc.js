module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
    "prettier/react",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "react/jsx-props-no-spreading": [0],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
  },
};
