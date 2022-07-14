import { createWebHistory, createRouter } from "vue-router";
import About from "../views/About.vue"
import Award from "../views/Award.vue"
const routes = [
  {
    path: "/",
    name: "About",
    component: About,
  },
  {
    path: "/award",
    name: "Award",
    component: Award,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;