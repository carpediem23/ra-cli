import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { files: ["**/*.js"], languageOptions: { sourceType: "script" } },
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: { globals: globals.node },
  },
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    plugins: { js },
    extends: ["js/recommended"],
    rules: {
      semi: ["error", "always"],
      "no-console": ["error", { allow: ["error", "warn", "info"] }],
    },
  },
  tseslint.configs.recommended,
]);
