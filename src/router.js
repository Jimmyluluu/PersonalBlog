import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/HomePage.vue";
import Exam from "./pages/ExamPage.vue";
import List from "./pages/ListPage.vue";
import AboutThisBlog from "./pages/AboutThisBlog.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/list",
    name: "List",
    component: List,
  },
  {
    path: "/exam",
    name: "Exam",
    component: Exam,
  },
  {
    path: "/aboutthisblog",
    name: "AboutThisBlog",
    component: AboutThisBlog,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
