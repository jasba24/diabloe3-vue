import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "Home" */ `@/views/Home/index.vue`),
  },
  {
    path: "/region/:region/profile/:battleTag",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "Profile" */ `@/views/Profile/index.vue`),
  },
  {
    path: "/region/:region/profile/:battleTag/hero/:heroId",
    name: "Hero",
    component: () =>
      import(/* webpackChunkName: "Hero" */ `@/views/Hero/index.vue`),
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "About" */ `@/views/About/index.vue`),
  },
  {
    path: "/error",
    name: "Error",
    component: () =>
      import(/* webpackChunkName: "Error" */ `@/views/Error/index.vue`),
  },
  {
    path: "*",
    redirect: {
      name: "Home",
      component: () =>
        import(/* webpackChunkName: "Home" */ `@/views/Home/index.vue`),
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
