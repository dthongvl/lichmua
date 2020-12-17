import { createApp } from 'vue';
import {
  Toggle,
} from 'equal-vue';
import 'equal-vue/dist/equal.css';
import { Switch, Spin, Select } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue';
import router from './router';
import './index.scss';
import store from './store';

createApp(App)
  .use(store)
  .use(router)
  .use(Select)
  .use(Spin)
  .use(Switch)
  .use(Toggle)
  .mount('#app');
