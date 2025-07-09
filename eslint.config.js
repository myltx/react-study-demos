import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { globalIgnores } from "eslint/config";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      tseslint.configs.stylistic,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    plugins: {
      react,
    },
    rules: {
      "react/jsx-uses-vars": "error",
      // 解决接口扩展报错
      "@typescript-eslint/no-empty-interface": [
        "error",
        {
          allowSingleExtends: true, // 允许单独扩展一个接口
        },
      ],
      // 其他规则...
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
      "react/jsx-key": "error",
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        // 添加 UnoCSS 全局类型声明
        UnoCSSAttributes: "readonly",
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    // 为 UnoCSS 添加特定设置
    settings: {
      react: {
        version: "detect",
      },
      unocss: {
        prefix: "un-", // 与你的 unocss.config.ts 保持一致
      },
    },
  },
]);
