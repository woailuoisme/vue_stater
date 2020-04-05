import Vue from 'vue';
import './plugins/axios';
import App from './App.vue';
import router from './router/index';
import store from './stores/index';
import vuetify from './plugins/vuetify';
import DateFilter from './filters/date';
import AlertCmp from './components/Shared/AlertBar';

Vue.config.productionTip = false;
Vue.filter('date', DateFilter);
Vue.component('app-alert', AlertCmp);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
