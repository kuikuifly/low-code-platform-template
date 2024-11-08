import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import AntDV from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

const app = createApp(App)
app.use(AntDV)
app.mount('#app')
