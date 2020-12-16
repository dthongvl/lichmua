import { createApp } from 'vue';
import {
  Button,
  Switch,
  Input,
  Toggle,
  Icon,
} from 'equal-vue';
import 'equal-vue/dist/equal.css';
import { Spin, Select } from 'ant-design-vue';
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
  .use(Input)
  .use(Icon)
  .use(Button)
  .use(Switch)
  .use(Toggle)
  .mount('#app');
