import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'animate.css';
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css';
AOS.init()
createApp(App).use(store).use(router).use( VueSplide ).mount('#app')
