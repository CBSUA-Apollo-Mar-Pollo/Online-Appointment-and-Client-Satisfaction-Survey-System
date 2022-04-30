import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./assets/style.css";
import "./assets/tailwind.css";
import "./assets/main.css";
import "./assets/index.js";

createApp(App).use(store).use(router).mount("#app");
