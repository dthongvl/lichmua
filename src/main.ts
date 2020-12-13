import { createApp } from 'vue';
import {
  Button,
  Toggle,
  Input,
  Icon,
  Checkbox,
} from 'equal-vue';
import App from './App.vue';
import router from './router';
import 'equal-vue/dist/equal.css';
import './index.scss';

createApp(App)
  .use(router)
  .use(Toggle)
  .use(Input)
  .use(Icon)
  .use(Button)
  .use(Checkbox)
  .mount('#app');
