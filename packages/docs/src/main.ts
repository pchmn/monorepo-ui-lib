
import MonorepoLibExample from '@monorepo-lib-example/vue';
import '@monorepo-lib-example/vue/dist/style.css';
import { createApp } from 'vue';
import App from './App.vue';

createApp(App).use(MonorepoLibExample).mount('#app')
