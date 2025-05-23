import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vueDevTools from "vite-plugin-vue-devtools";
import postcssNested from "postcss-nested";
import postcssEach from "postcss-each";
import postcssEachVariables from "postcss-each-variables";
import postcssFor from "postcss-for";
import postcssColorMix from "postcss-color-mix";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), vueDevTools()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    postcss: {
      plugins: [postcssEach(), postcssEachVariables(),postcssNested(),postcssFor(),postcssColorMix()],
    },
  },
});
