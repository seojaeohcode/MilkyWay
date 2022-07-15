import { createWebHistory, createRouter } from "vue-router";
import About from "../views/About.vue"
import Award from "../views/Award.vue"
import Lab from "../views/Lab.vue"
import News from "../views/News.vue"
import Survey from "../views/Survey.vue"
import Technology from "../views/Technology.vue"

const routes = [
  {
    path: "/",
    name: "About",
    component: About,
  },
  {
    path: "/Award",
    name: "Award",
    component: Award,
  },
  {
    path: "/Lab",
    name: "Lab",
    component: Lab,
  },
  {
    path: "/News",
    name: "News",
    component: News,
  },
  {
    path: "/Survey",
    name: "Survey",
    component: Survey,
  },
  {
    path: "/Technology",
    name: "Technology",
    component: Technology,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;