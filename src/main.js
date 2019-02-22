import "./assets/style/reset.less";
import "./utils/rem";
import Vue from "vue";
import Vant from "vant";
import Dialog from "vant";
import "vant/lib/vant-css/index.css";
import App from "./App.vue";
import { getRouterData } from "./router";
import store from "./store/index";
import "babel-polyfill";
import "./utils/registerServiceWorker";
import Sto from "store";
import { Config } from "@/utils/";
import Router from "@/utils/routerConfig.js";
import accounting from "accounting";
import { Toast } from "vant";

Vue.use(Vant);
Vue.prototype.$sto = Sto;
Vue.prototype.$conf = Config;
Vue.prototype.$routeConf = Router;
Vue.prototype.$accounting = accounting;
Vue.prototype.$toast = Toast;

Vue.config.productionTip = false;
new Vue({
  store,
  Dialog,
  router: getRouterData(),
  render: h => h(App)
}).$mount("#app");
