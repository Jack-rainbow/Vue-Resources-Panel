import Vue from 'vue';
import Router from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import Home from '../views/Home.vue';

Vue.use(Router);

const myRouter = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    // },
  ],
});

// 路由配置

myRouter.beforeEach((to, from, next) => {
  NProgress.start();
  console.log(to, from, next);
  // if (to.path !== '/login') {  //此处可能引起 router 爆栈 Maximum call stack size exceeded
  //   next('/'); // 跳转登录
  NProgress.done(); // 结束Progress
  // }
});
myRouter.afterEach(() => {
  NProgress.done(); // 结束Progress
});


export default myRouter;
