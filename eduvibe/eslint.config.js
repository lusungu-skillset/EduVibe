// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import reactPlugin from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node, // add if you also run in Node.js
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      react: reactPlugin,
    },
    rules: {
      ...js.configs.recommended.rules, // JS recommended rules
      ...reactPlugin.configs.recommended.rules, // React recommended rules
    },
  },
]);
