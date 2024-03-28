import './assets/styles/style.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import VueKonva from 'vue-konva';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueKonva);
app.mount('#app');
