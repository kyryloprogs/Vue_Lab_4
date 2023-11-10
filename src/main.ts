import Vue from "vue";
import App from "./App.vue";
import router from "./router"; // Імпортуємо створений router
import TaskServicePlugin from '@/plugins/TaskServicePlugin';

Vue.config.productionTip = false;

Vue.use(TaskServicePlugin);

new Vue({
  router, // Додаємо router до додатку
  render: (h) => h(App),
}).$mount("#app");