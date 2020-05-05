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

import VueQuillEditor from 'vue-quill-editor'

// import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
// import 'quill/dist/quill.bubble.css' // for bubble theme

Vue.use(VueQuillEditor, /* { default global options } */)


Vue.config.productionTip = false;
Vue.filter("date", DateFilter);
// Vue.component('app-alert', AlertCmp);


new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount("#app");
