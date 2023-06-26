import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/HomePage.vue";
import Exam from "./pages/ExamPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/exam",
    name: "Exam",
    component: Exam,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
