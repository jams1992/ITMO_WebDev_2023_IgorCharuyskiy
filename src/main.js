import { createApp } from 'vue';
import './style.css';
import AppComposition from './AppComposition.vue';
import router from './router';
import { createPinia } from 'pinia';
import piniaPluginPersistedState from 'pinia-plugin-persistedstate';


createApp(AppComposition)
    .use(createPinia().use(piniaPluginPersistedState))
    .use(router)
    .mount('#app');
