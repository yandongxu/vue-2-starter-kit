import type { RouteConfig } from 'vue-router';
import HomePage from '.';

export const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '首页',
      layout: 'DefaultLayout',
    },
    component: HomePage,
  },
];
