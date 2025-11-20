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
    path: "/categories",
    name: "التصنيفات",
    component: () => import("../views/categories.vue"),
  },
  {
    path: "/Support",
    name: "إدعمنا",
    component: () => import("../views/Support.vue"),
  },
  {
    path: "/logIn",
    name: "logIn",
    component: () => import("../views/LoginView.vue"),
  },
  { path: "/add-game", name: "Add Game", component: () => import("../views/ZAddGame.vue"), meta: { requiresAuth: true } },
  { path: "/edit-game/:id", name: "edit-game", component: () => import("../views/ZEditGame.vue"), meta: { requiresAuth: true } },
  { path: "/GamesTable", name: "Game-Table", component: () => import("../views/GamesTable.vue"), meta: { requiresAuth: true } },
  { path: "/zgame/:id", name: "ZGameDetails", component: () => import("../views/zGameDetailsView.vue"), props: true, meta: { requiresAuth: true } },
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
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("adminToken");
  if (to.meta.requiresAuth && !token) {
    return next({ name: "logIn" }); // لو مفيش توكن يروح login
  }
  next();
});
export default router;
