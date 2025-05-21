import { defineConfig, UserConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { createHtmlPlugin } from "vite-plugin-html";
import { codeInspectorPlugin } from "code-inspector-plugin";

export default defineConfig((): UserConfig => {
  return {
    base: "/",
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src")
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/var.scss" as *;`,
          silenceDeprecations: ["legacy-js-api"]
        }
      }
    },
    server: {
      port: 8888,
      open: true
    },
    plugins: [
      vue(),
      vueJsx(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: { title: "form designer" }
        }
      }),
      codeInspectorPlugin({
        bundler: "vite"
      })
    ],
    build: {
      outDir: "dist",
      minify: "esbuild",
      sourcemap: false,
      reportCompressedSize: false,
      chunkSizeWarningLimit: 2000,
      rollupOptions: {
        output: {
          chunkFileNames: "assets/js/[name]-[hash].js",
          entryFileNames: "assets/js/[name]-[hash].js",
          assetFileNames: "assets/[ext]/[name]-[hash].[ext]"
        }
      }
    }
  };
});
