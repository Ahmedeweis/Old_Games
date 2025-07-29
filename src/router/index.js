// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import GameDetails from "../views/GameDetails.vue";
import aboutUs from "../views/aboutUs.vue";
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
  {
    path: "/about",
    name: "من نحن",
    component: aboutUs,
  },
  {
    path: "/contact",
    name: "تواصل معنا",
    component: Contact,
  },
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
