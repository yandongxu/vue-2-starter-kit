import type { RouteConfig } from 'vue-router';

export const routes: RouteConfig[] = [
  {
    path: '/contact',
    name: 'contact',
    meta: {
      layout: 'WorkspaceLayout',
    },
    component: () => import('.'),
  },
];
