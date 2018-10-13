import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: '/app/',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('./views/Login.vue'),
    },
    {
      path: '/',
      name: 'Index',
      component: () => import('./views/Index.vue'),
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'Home',
          component: () => import('./views/Home.vue'),
        },
        {
          path: '/data',
          name: 'Data',
          component: () => import('./components/data/IndexData.vue'),
          redirect: '/data/city',
          children: [
            {
              path: 'city',
              name: 'CityData',
              component: () => import('./components/data/CityData.vue'),
            },
          ],
        },
      ],
    },
    {
      path: '*',
      redirect: '/home',
    },
  ],
});

router.beforeEach((to, from, next) => {
  store.commit('setCrumbArr', []);
  next();
});

export default router;
