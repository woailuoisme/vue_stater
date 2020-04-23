import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./stores/index";
import vuetify from "./plugins/vuetify";
import DateFilter from "./filters/date";
// import AlertCmp from './components/Shared/AlertBar';

import VuetifyConfirm from "vuetify-confirm";

Vue.use(VuetifyConfirm, {
    vuetify,
    buttonTrueText: '确定',
    buttonFalseText: '取消',
    color: 'error',
    icon: 'error',
    title: 'error',
    width: 350,
    property: '$confirm'
});

Vue.config.productionTip = false;
Vue.filter("date", DateFilter);
// Vue.component('app-alert', AlertCmp);



new Vue({
  router,
  store,
  vuetify,
    render: h => h(App)
}).$mount("#app");
