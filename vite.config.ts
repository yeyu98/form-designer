/*
 * @Author: yeyu98
 * @Date: 2025-05-31 19:39:00
 * @LastEditors: yeyu98
 * @LastEditTime: 2025-05-31 20:11:18
 * @Description: 
 */
import { defineConfig, UserConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { createHtmlPlugin } from "vite-plugin-html";
import { codeInspectorPlugin } from "code-inspector-plugin";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


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
      port: 3000,
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
      }),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
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
