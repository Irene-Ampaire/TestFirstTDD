import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import pluginVue from "eslint-plugin-vue";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,vue}"] },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { files: ["**/*.{js,mjs,cjs,vue}"], plugins: { js }, extends: ["js/recommended"] },
  pluginVue.configs["flat/essential"],
  {
		rules: {
			"no-unused-vars": "warn",
			"no-undef": "warn",
		},
	},
]);