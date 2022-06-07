import { createApp } from "vue";
import { createPinia } from "pinia";
// import { BootstrapVue } from "bootstrap-vue";

// Import Bootstrap and BootstrapVue CSS files (order is important)
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

// Make BootstrapVue available throughout your project
// app.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
// app.use(IconsPlugin);

app.use(createPinia());
app.use(router);

app.mount("#app");
