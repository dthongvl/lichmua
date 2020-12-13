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

createApp(App)
  .use(router)
  .use(Input)
  .use(Icon)
  .use(Button)
  .use(Switch)
  .use(Radio)
  .use(Layout)
  .mount('#app');
