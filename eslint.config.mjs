import js from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";

const eslintConfig = [
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "dist/**",
      "playwright-report/**",
      "test-results/**",
      "*.config.js",
      "*.config.mjs",
      "next-env.d.ts",
    ],
  },
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        React: "readonly",
        console: "readonly",
        document: "readonly",
        globalThis: "readonly",
        process: "readonly",
        require: "readonly",
        window: "readonly",
      },
    },
    plugins: {
      "@next/next": nextPlugin,
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      ...nextPlugin.configs["core-web-vitals"].rules,
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-namespace": "off",
      "array-callback-return": "error",
      eqeqeq: "error",
      "no-alert": "error",
      "no-return-assign": "error",
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "@mui/material",
              message:
                "Please use \"import ComponentName from '@mui/material/ComponentName'\" instead.",
            },
            {
              name: "@mui/icons-material",
              message:
                "Please use \"import IconName from '@mui/icons-material/IconName'\" instead.",
            },
            {
              name: "next/link",
              message:
                'Please use "import Link from \"@/components/link\"" instead. This is need for "leave page" logic',
            },
          ],
        },
      ],
      "no-restricted-syntax": [
        "error",
        {
          selector:
            "CallExpression[callee.property.name=required][callee.object.callee.property.name=nullable]",
          message:
            ".nullable() should be after .required() for correct validation and type inference. Example: id: yup.string().required().nullable()",
        },
        {
          selector:
            "CallExpression[callee.name=watch], MemberExpression[object.name=methods][property.name=watch]",
          message:
            '"watch" re-render the whole form component. Use hook "useWatch" instead.',
        },
        {
          selector:
            "VariableDeclarator > ObjectPattern > Property[key.name=formState]",
          message:
            '"formState" re-render the whole form component. Use hook "useFormState" instead.',
        },
        {
          selector: "MemberExpression[object.name=React][property.name=/^use/]",
          message:
            'Use hooks without "React" prefix. For avoid using both import styles. Example: "useEffect" instead of "React.useEffect".',
        },
        {
          selector:
            "ConditionalExpression[consequent.type=Literal][consequent.value=true][alternate.type=Literal][alternate.value=false]",
          message:
            'Do not use "condition ? true : false". Simplify "someVariable === 42 ? true : false " to "someVariable === 42"',
        },
      ],
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      "no-undef": "off",
    },
  },
];

export default eslintConfig;
