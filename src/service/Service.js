import BaseService from './services/BaseService';
import LoginService from './services/LoginService';


class Service {
  constructor() {
    this.base = new BaseService();
    this.login = new LoginService();
  }
}

const services = {
  install(Vue) {
    Vue.prototype.$service = new Service();
  },
};

export default services;
