import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/login.vue"),
  },
  {
    path: "/contents",
    name: "contents",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/contents.vue"),
    children: [
      {
        path: "",
        redirect: "/page1",
      },
      {
        path: "/page1",
        name: "page1",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/page1.vue"),
      },
      {
        path: "/rolehandle",
        name: "rolehandle",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/rolehandle.vue"),
      },
      {
        path: "/page3",
        name: "page3",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/page3.vue"),
      },
      {
        path: "/page4",
        name: "page4",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/page4.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
// router.beforeEach((to, from, next) => {
//   let isLogin = window.localStorage.getItem("hasLogin");
//   console.log(isLogin);

//   if (to.meta.noToLogin === true) {
//     next();
//   } else {
//     if (isLogin) {
//       // 判断是否已经登录
//       next();
//     } else {
//       next({
//         path: "/login",
//       });
//     }
//   }
// });
// 解决不允许导航当前页报错
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function (location) {
  return routerPush.call(this, location).catch((error) => error);
};
export default router;
