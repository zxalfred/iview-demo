import Vue from 'vue';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import service from '@/service/Service';
import './plugins/axios';
import App from './App';
import router from './router';
import store from './store';

Vue.use(iView);
Vue.use(service);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
