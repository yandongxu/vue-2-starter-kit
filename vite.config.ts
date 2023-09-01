import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import vue from '@vitejs/plugin-vue2';
import jsx from '@vitejs/plugin-vue2-jsx';

const PLUGINS = [
  vue(),
  jsx(),
  legacy({
    targets: ['ie >= 11'],
    additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
  }),
];

const ALIAS = {
  '@': fileURLToPath(new URL('./src', import.meta.url)),
};

export default defineConfig({
  plugins: PLUGINS,
  resolve: {
    alias: ALIAS,
  },
  server: {
    host: '0.0.0.0',
    // 本地代理API服务器
    proxy: {
      '^/rover': {
        target: process.env.API_ENTRYPOINT || 'http://kys.test.greatld.com',
        changeOrigin: true,
        xfwd: false, // 禁止本地 node 服务器重写 x-forward-for
      },
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
      generateScopedName: '[folder]__[local]___[hash:base64:5]',
    },
    postcss: {
      map: false,
      plugins: [],
    },
    preprocessorOptions: {
      less: {
        math: 'always',
        javascriptenabled: true,
      },
    },
  },
});
