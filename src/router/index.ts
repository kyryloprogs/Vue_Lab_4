import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/Form",
    name: "TaskForm",
    component: () => import("./views/TaskForm.vue"),
  },
  {
    path: "/",
    name: "TaskList",
    component: () => import("./views/TaskList.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;