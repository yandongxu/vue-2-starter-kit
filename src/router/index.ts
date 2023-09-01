import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes } from './router.routes';

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes,
});

Vue.use(VueRouter);

export default router;
