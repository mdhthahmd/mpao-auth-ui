import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import SignInViewVue from "@/views/SignInView.vue";
import EmploymentsViewVue from "@/views/EmploymentsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "signin",
      component: SignInViewVue,
    },
    {
      path: "/employments",
      name: "employments",
      component: EmploymentsViewVue,
    },
  ],
});

export default router;
