import Vue from 'vue';
import Router from 'vue-router';
import store from '../store/store';
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
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
  ],
});

//路由配置

myRouter.beforeEach((to, from, next)=> {
  NProgress.start();
  if (to.path !== '/login') {
    next('/'); //跳转登录
    NProgress.done(); // 结束Progress
  }
})
myRouter.afterEach(() => {
  NProgress.done(); // 结束Progress
})

export default myRouter;