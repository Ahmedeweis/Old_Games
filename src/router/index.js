// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import GameDetails from "../views/GameDetails.vue"; // ← تأكد من اسم الملف ومكانه
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/game/:id", // ← ID ديناميكي
    name: "GameDetails",
    component: GameDetails,
    props: true, // ← يسهل تمرير ID كـ prop لو حبيت
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
