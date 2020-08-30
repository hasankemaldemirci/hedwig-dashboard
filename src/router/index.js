import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard";
import { auth } from "../../firebaseConfig";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/signin",
    name: "Signin",
    component: () => import("../views/Signin.vue")
  },
  {
    path: "/user/profile",
    name: "Profile",
    component: () => import("../views/Profile.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);

  if (requiresAuth && !auth.currentUser) {
    next("/signin");
  } else {
    next();
  }
});

export default router;
