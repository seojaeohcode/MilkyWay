import { createWebHistory, createRouter } from "vue-router";
import Header from "../views/Header.vue"
import Award from "../views/Award.vue"
const routes = [
  {
    path: "/",
    name: "Header",
    component: Header,
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