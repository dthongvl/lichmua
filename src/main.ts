import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './index.scss';

require('./init.ts');

createApp(App)
  .use(router)
  .mount('#app');
