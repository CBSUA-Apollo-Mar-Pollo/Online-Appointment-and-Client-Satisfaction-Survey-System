import { createApp } from "vue";
import App from "./App.vue";
import NavBar from "./components/NavBar";
import WelcomePage from "./views/pages/WelcomePage";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./assets/style.css";
import "./assets/tailwind.css";
import "./assets/main.css";

createApp(App).use(store).use(router).mount("#app");
createApp(NavBar).use(store).use(router).mount("#NavBar");
createApp(WelcomePage).use(store).use(router).mount("#WelcomePage");
