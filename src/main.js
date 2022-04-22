import { createApp } from "vue";
import App from "./App.vue";
import NavBar from "./NavBar";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";

createApp(App).use(store).use(router).mount("#app");
createApp(NavBar).use(store).use(router).mount("#NavBar");
