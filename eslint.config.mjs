import tailwind from "eslint-plugin-tailwindcss";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  // your custom flat configs go here, for example:
  ...tailwind.configs["flat/recommended"],
  {
    files: ["**/*.ts", "**/*.mjs"],
    rules: {
      "vue/brace-style": "error",
      "@stylistic/object-curly-newline": "error",
    },
  },
).overrides({ "tailwindcss:rules": {
  rules: {
    "tailwindcss/no-custom-classname": "off",
  },
} });
