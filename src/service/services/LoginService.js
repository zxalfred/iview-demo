import store from '@/store';
import BaseService from './BaseService';

export default class LoginService extends BaseService {
  async login(data) {
    const url = this.API.login.login;
    const result = await this.post(url, data);
    if (result.result) {
      const { token } = result.returnData;
      localStorage.setItem('token', token);
      store.commit('setToken', token);
    }
    return result;
  }
}
