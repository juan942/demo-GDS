import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Usuario
    {
      path: "/",
      name: "loginUser",
      component: () => import("../views/user/LoginUserView.vue"),
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../views/user/HomeUserView.vue"),
    },
    {
      path: "/clarifications",
      name: "clarifications",
      component: () => import("../views/user/ClarificationsUserView.vue"),
    },
    {
      path: "/new-clarification",
      name: "new-clarification",
      component: () => import("../views/user/NewClarificationUserView.vue"),
    },
    // Empleado
    {
      path: "/loginE",
      name: "loginEmpleado",
      component: () => import("../views/employe/LoginEmpleadoView.vue"),
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
