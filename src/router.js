import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/HomePage.vue";
import Exam from "./pages/ExamPage.vue";
import List from "./pages/ListPage.vue";
import AboutThisBlog from "./article/AboutThisBlog.vue";
import IOOperations from "./article/IOOperations.vue";

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
  {
    path: "/iooperations",
    name: "IOOperations",
    component: IOOperations,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
