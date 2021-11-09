import Router from "vue-router";

import Login from "@/components/Login";
import Register from "@/components/Register";
import searchParkings from "@/components/searchParkings";
import myBookings from "@/components/myBookings";
import uploadParkings from "@/components/uploadParkings";
import bookedSpaces from "@/components/bookedSpaces";

import PageNotFound from "@/components/PageNotFound";

import store from "../Store";

const router = new Router({
  mode: "history",
  routes: [
    {
      name: "login",
      path: "/login",
      component: Login,
      meta: { requiresAuth: false },
    },
    {
      name: "register",
      path: "/register",
      component: Register,
      meta: { requiresAuth: false },
    },
    {
      name: "searchParkings",
      path: "/search-parkings",
      component: searchParkings,
      meta: { requiresAuth: true },
    },
    {
      name: "myBookings",
      path: "/my-bookings",
      component: myBookings,
      meta: { requiresAuth: true },
    },
    {
      name: "uploadParkings",
      path: "/upload-parkings",
      component: uploadParkings,
      meta: { requiresAuth: true },
    },
    {
      name: "bookedSpaces",
      path: "/booked-spaces",
      component: bookedSpaces,
      meta: { requiresAuth: true },
    },
    {
      name: "pageNotFound",
      path: "*",
      component: PageNotFound,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next({
      name: "login",
    });
  } else {
      
    if (store.getters.isAuthenticated && to.meta.requiresAuth) {
 
      next();
     
    } else if (
      !to.meta.requiresAuth &&
      store.getters.isAuthenticated &&
      (to.name === "login" || to.name === "register")
    ) {
      next({ name: "searchParkings" });
     
    } else {
      next();
    }
  }
});

export default router;
