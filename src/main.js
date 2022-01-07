import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Amplify from "aws-amplify";
// import "@aws-amplify/ui-vue";
import aws_exports from "./aws-exports";
import { onAuthUIStateChange } from "@aws-amplify/ui-components";

Amplify.configure(aws_exports);

Vue.config.productionTip = false;

export default {
  name: "AuthStateApp",
  created() {
    this.unsubscribeAuth = onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData;
    });
  },
  data() {
    return {
      user: undefined,
      authState: undefined,
      unsubscribeAuth: undefined,
    };
  },
  beforeUnmount() {
    this.unsubscribeAuth();
  },
};

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
