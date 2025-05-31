/*
 * @Author: yeyu98
 * @Date: 2025-05-31 19:39:00
 * @LastEditors: yeyu98
 * @LastEditTime: 2025-05-31 20:12:13
 * @Description: 
 */
import { createApp } from "vue";
import router from "@/routes";
import App from "./App.vue";
import "@/styles/index.scss";

const plugins = [router];

const app = createApp(App);

plugins.forEach((plugin) => {
    app.use(plugin);
});

app.mount("#app");
