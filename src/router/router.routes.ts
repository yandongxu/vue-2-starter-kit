import type { RouteConfig } from 'vue-router';

function getRoutes(configs: Record<string, RouteConfig[]>) {
  const routes: RouteConfig[] = [];
  for (const filePath in configs) {
    for (const currentRoute of configs[filePath]) {
      for (const existRoute of routes) {
        if (existRoute.path === currentRoute.path) {
          throw new Error(
            `[vue-router] Duplicate route path definition: { name: "${currentRoute.name}", path: "${currentRoute.path}" }`
          );
        }
      }
      routes.push(currentRoute);
    }
  }
  return routes;
}

const configs = import.meta.glob<RouteConfig[]>(
  '@/pages/**/*/routes.config.ts',
  {
    eager: true,
    import: 'routes',
  }
);

export const routes = getRoutes(configs);
