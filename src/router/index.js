import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/role",
    name: "role",
    component: () => import("../views/RoleView.vue"),
  },
  {
    path: "/productBacklog",
    name: "productBacklog",
    component: () => import("../views/ProductBacklogView.vue"),
  },
  {
    path: "/notify",
    name: "notify",
    component: () => import("../views/NotifyView.vue"),
  },
  {
    path: "/message",
    name: "message",
    component: () => import("../views/MessageView.vue"),
  },
  {
    path: "/sprintPlan",
    name: "sprintPlan",
    component: () => import("../views/SprintPlanView.vue"),
  },
  {
    path: "/dvMessage",
    name: "dvMessage",
    component: () => import("../views/DvMessageView.vue"),
  },
  {
    path: "/retro",
    name: "retro",
    component: () => import("../views/RetroView.vue"),
  },
  {
    path: "/end",
    name: "end",
    component: () => import("../views/EndView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
