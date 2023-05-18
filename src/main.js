import { createApp } from 'vue';
import './style.css';
import AppComposition from './AppComposition.vue';
import router from './router';
import { createPinia } from 'pinia';


createApp(AppComposition)
    .use(createPinia())
    .use(router)
    .mount('#app');
