import { createApp } from 'vue';
import {
  Button,
  Switch,
  Input,
  Radio,
  Icon,
  Layout,
} from 'ant-design-vue';
import App from './App.vue';
import router from './router';
import 'ant-design-vue/dist/antd.css';
import './index.scss';
import store from './store';

createApp(App)
  .use(store)
  .use(router)
  .use(Input)
  .use(Icon)
  .use(Button)
  .use(Switch)
  .use(Radio)
  .use(Layout)
  .mount('#app');
