import globals from "globals";

export default [
  {
    ignores: ["dist/**", "node_modules/**"]
  },

  // Настройки для исходного кода браузера (src/)
  {
    files: ["src/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.browser
      }
    }
  },

  // Настройки для файлов конфигурации Node.js / Webpack
  {
    files: ["webpack.*.js"],
    languageOptions: {
      globals: {
        ...globals.node
      }
    }
  }
];