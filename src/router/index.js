import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/game/:id",
    name: "GameDetails",
    component: () => import("../views/GameDetails.vue"),
    props: true,
  },
  {
    path: "/about",
    name: "من نحن",
    component: () => import("../views/aboutUs.vue"),
  },
  {
    path: "/contact",
    name: "تواصل معنا",
    component: () => import("../views/Contact.vue"),
  },
  {
    path: "/TestBak",
    name: "تيست الباك",
    component: () => import("../views/TestBak.vue"),
  },
  {
    path: "/zAllGames",
    name: "كل الألعاب",
    component: () => import("../views/zAllGamesView.vue"),
  },
  {
    path: "/zgame/:id",
    name: "ZGameDetails",
    component: () => import("../views/zGameDetailsView.vue"),
    props: true,
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
