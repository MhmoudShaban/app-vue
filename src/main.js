import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// pinia config
import { createPinia } from "pinia";

//Emeitter config
import mitt from "mitt";
const Emitter = mitt();
// Swiper Config
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";
const vuetify = createVuetify({
  components,
  directives,
});
createApp(App)
  .use(vuetify)
  .use(createPinia())
  .provide("Emitter", Emitter)
  .use(router)
  .mount("#app");
