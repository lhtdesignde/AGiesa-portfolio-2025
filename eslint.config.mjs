import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import react from "eslint-plugin-react";
import _import from "eslint-plugin-import";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import jsxA11Y from "eslint-plugin-jsx-a11y";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import stylisticTs from '@stylistic/eslint-plugin-ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: ["**/node_modules/", "**/dist/"]},
    ...fixupConfigRules(compat.extends(
      "eslint:recommended",
      "plugin:react-hooks/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:jsx-a11y/strict",
    )), {
    plugins: {
      react: fixupPluginRules(react),
      import: fixupPluginRules(_import),
      "@typescript-eslint": fixupPluginRules(typescriptEslint),
      "jsx-a11y": fixupPluginRules(jsxA11Y),
      '@stylistic/ts': stylisticTs
    },
    files: ["src/**/*.ts", "src/**/*.tsx"],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parser: tsParser,
      ecmaVersion: 6,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "19.1.0",
      },
      "import/ignore": ["node_modules"],
    },
    rules: {
      "import/default": "error",
      "import/first": "error",
      "import/named": "error",
      "import/newline-after-import": ["warn", {
        count: 1,
      }],
      "import/no-useless-path-segments": "warn",
      "import/no-absolute-path": "warn",
      "import/no-unused-modules": ["warn"],
      "import/order": ["warn", {
        groups: [
          "external",
          "internal",
          "builtin",
          "parent",
          "sibling",
          "type",
          "index",
          "unknown",
        ],
        "newlines-between": "never",
        warnOnUnassignedImports: true,
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      }],
      "no-console": "warn",
      semi: ["error", "always"],
      indent: ["error", 2],
      "no-tabs": "error",
      quotes: ["error", "single"],
      "comma-dangle": ["error", "never"],
      "eol-last": ["error", "always"],
      "arrow-parens": ["error", "as-needed", {
        requireForBlockBody: true,
      }],
      "object-curly-spacing": ["error", "always"],
      "react/jsx-closing-bracket-location": [1, "after-props"],
      "no-param-reassign": ["error", {
        props: true,
        ignorePropertyModificationsFor: ["state"],
      }],
      "key-spacing": ["warn", {
        beforeColon: false,
      }],
      "keyword-spacing": ["warn", {
        before: true,
        after: true,
      }],
      "react/function-component-definition": ["error", {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      }],
      "padding-line-between-statements": ["error", {
        blankLine: "always",
        prev: ["const", "let", "var"],
        next: "*",
      }, {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
      }],
      "@typescript-eslint/array-type": "error",
      "@typescript-eslint/explicit-function-return-type": "warn",
      "@typescript-eslint/no-empty-function": "error",
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/typedef": ["error", {
        arrowParameter: false,
        memberVariableDeclaration: true,
        parameter: true,
        propertyDeclaration: true,
      }],
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
      "@stylistic/ts/type-annotation-spacing": ["error", {
        before: true,
        after: true,
        overrides: {
          colon: {
            before: false,
            after: true,
          },
        },
      }],
      "@stylistic/ts/member-delimiter-style": "error",
    },
}];
