import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/HomeView.vue"),
  },
  {
    path: "/role",
    name: "role",
    component: () =>
      import(/* webpackChunkName: "role" */ "../views/RoleView.vue"),
  },
  {
    path: "/productBacklog",
    name: "productBacklog",
    component: () =>
      import(/* webpackChunkName: "productBacklog" */ "../views/ProductBacklogView.vue"),
  },
  {
    path: "/notify",
    name: "notify",
    component: () =>
      import(/* webpackChunkName: "notify" */ "../views/NotifyView.vue"),
  },
  {
    path: "/message",
    name: "message",
    component: () =>
      import(/* webpackChunkName: "message" */ "../views/MessageView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
