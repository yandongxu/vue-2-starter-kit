import type { RouteConfig } from 'vue-router';

export const routes: RouteConfig[] = [
  {
    path: '/about',
    name: 'about',
    meta: {
      layout: 'WorkspaceLayout',
    },
    component: () => import('.'),
  },
];
