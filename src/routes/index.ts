import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: () => import("@/views/home/index.vue"),
        },
        {
            path: "/preview",
            component: () => import("@/views/preview/index.vue"),
        },
    ],
});

export default router;
