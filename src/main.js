import '@babel/polyfill';
import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
// import 'lib-flexible'; // 移动端适配
import '@/assets/js/rem.js';
import '@/assets/css/reset.css';
import Alert from './components/alert';

Vue.config.productionTip = false;
Vue.use(Alert);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
