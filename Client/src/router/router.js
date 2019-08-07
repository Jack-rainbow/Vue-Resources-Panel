import Vue from 'vue';
import Router from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import store from '@/store/store';
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
      meta: {
        title: '首页'
      },
      hidden: true
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index'),
      meta: {
        title: '登陆'
      }
    },
    {
      path: '/404',
      component: () => import('@/components/ErrorPage/404')
    },
    {
      path: '/401',
      component: () => import('@/components/ErrorPage/401'),
      hidden: true
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      hidden: true
    },
    {
      path: '/dashboard',
      component: () => import('@/views/dashboard/index'),
      hidden: true
    },
    {
      path: '/registered',
      component: () => import('@/views/registered/index'),
      hidden: true
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
});

myRouter.beforeEach((to, from, next) => {
  NProgress.start();

  if (to.path !== '/login' && !store.state.token) {
    next('/login');
    NProgress.done();
  }
  next();
});
myRouter.afterEach(() => {
  NProgress.done();
});

export default myRouter;
