module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    "plugin:vue/strongly-recommended",
    "eslint:recommended",
    "@vue/prettier",
    "plugin:vue/essential",
    "plugin:prettier/recommended",
  ],

  parserOptions: {
    parser: "@babel/eslint-parser",
  },

  rules: {
    "prettier/prettier": [
      "warn",
      {
        singleQuote: true,
        semi: true,
        trailingComma: "all",
      },
    ],
    "vue/multi-word-component-names": "off",
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
