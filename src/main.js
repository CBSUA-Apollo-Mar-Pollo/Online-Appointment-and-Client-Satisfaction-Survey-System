import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from './store'
import "./assets/style.css";
import "./assets/tailwind.css";
import "./assets/main.css";
import "./assets/index.js";
import { BootstrapVue3 } from 'bootstrap-vue-3'
import Vuelidate from 'vuelidate';

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

createApp(App).use(store).use(router).use(VueSweetalert2).use(BootstrapVue3).use(Vuelidate).mount("#app");
