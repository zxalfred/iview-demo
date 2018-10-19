import BaseService from './services/BaseService';
import LoginService from './services/LoginService';
import DataService from './services/DataService';

class Service {
  constructor() {
    this.base = new BaseService();
    this.login = new LoginService();
    this.data = new DataService();
  }
}

const services = {
  install(Vue) {
    Vue.prototype.$service = new Service();
  },
};

export default services;
