import Vue from 'vue';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import '@/style/main.css';
import './plugins/axios';
import App from './App';
import router from './router';
import store from './store';

Vue.use(iView);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
