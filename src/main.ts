import Vue from 'vue';
import { store } from './stores';
import App from './app/app.entry';
import router from './router';
import '@/assets/styles/main.less';

const app = new Vue({
  router,
  pinia: store,
  render: (h) => h(App),
});

app.$mount('#app');
