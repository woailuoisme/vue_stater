import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./stores/index";
import vuetify from "./plugins/vuetify";
import DateFilter from "./filters/date";

import VuetifyConfirm from "vuetify-confirm";
import Editor from '@tinymce/tinymce-vue'
import VueIziToast from 'vue-izitoast';
import 'izitoast/dist/css/iziToast.min.css';

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

Vue.use(Editor)
Vue.use(VueIziToast);

Vue.config.productionTip = false;
Vue.filter("date", DateFilter);

export default new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount("#app");
