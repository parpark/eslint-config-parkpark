module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  globals: { fetch: false, alert: false, __DEV__: true },
  env: {
    es6: true
  },
  extends: [
    "standard",
    "plugin:react/recommended",
    "prettier",
    "prettier/react"
  ],
  plugins: ["prettier", "react", "standard"],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error"
  }
};
