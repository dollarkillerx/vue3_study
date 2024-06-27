import './index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import naive from 'naive-ui'

import App from './App.vue'
import router from './router'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaFlag, RiZhihuFill } from "oh-vue-icons/icons";

addIcons(FaFlag, RiZhihuFill);


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(naive)
app.component("v-icon", OhVueIcon);

app.mount('#app')
