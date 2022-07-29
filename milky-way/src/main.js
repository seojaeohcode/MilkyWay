import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueScreen from 'vue-screen';

const app = createApp(App)

app.use(router).mount('#app');
Vue.use(VueScreen, {mobile: 320, tablet: 768, pc:1025});