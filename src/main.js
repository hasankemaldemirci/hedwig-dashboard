import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Firebase authentication config file
import { auth } from "../firebaseConfig";

/* FontAwesome icon library */
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faCaretDown,
  faRedo,
  faDownload,
  faEye,
  faChartBar
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add([faUser, faCaretDown, faRedo, faDownload, faEye, faChartBar]);

Vue.component("font-awesome-icon", FontAwesomeIcon);
/* FontAwesome icon library */

Vue.config.productionTip = false;

let app;

auth.onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }

  if (user) {
    store.dispatch("fetchUserProfile", user);
  }
});
