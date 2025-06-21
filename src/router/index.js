// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import GameDetails from "../views/GameDetails.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/game/:id",
    name: "GameDetails",
    component: GameDetails,
    props: true,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   component: () => import("@/views/About.vue"),
  // },
  // {
  //   path: "/contact",
  //   name: "Contact",
  //   component: () => import("@/views/Contact.vue"),
  // },
  // {
  //   path: "/game",
  //   name: "Game",
  //   component: () => import("@/views/Game.vue"),
  // },
  // {
  //   path: "/categories",
  //   name: "Categories",
  //   component: () => import("@/views/Categories.vue"),
  // },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
