import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import utils from "./utils/utils.js"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

var app = createApp(App);
app.use(router).mount('#app');
app.use(ElementPlus);

app.config.globalProperties.$utils = utils;
