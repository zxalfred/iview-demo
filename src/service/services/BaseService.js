import Vue from 'vue';
import store from '@/store';
import router from '@/router';
import API from '../api';

export default class BaseService {
  constructor() {
    this.API = API;
  }

  async get(url, data = {}) {
    const token = store.state.token || localStorage.token || '';
    data.token = token;
    data.stamp = Date.now();
    let result = await Vue.axios.get(url, { params: data });
    result = result.data;
    if (!result.result && result.returnCode === '401') {
      localStorage.setItem('token', '');
      store.commit('setToke', '');
      router.push('/login');
      this.notice(result);
    }
    return result;
  }

  async post(url, data = {}) {
    let result = {};
    try {
      const token = store.state.token || localStorage.token || '';
      data.token = token;
      result = await Vue.axios.post(url, data);
      result = result.data;
    } catch (err) {
      result.data = {
        result: false,
        message: err.toString(),
      };
    }
    if (!result.result && result.returnCode === '401') {
      localStorage.token = '';
      store.commit('setToken', '');
      router.push('/login');
      this.notice(result.data);
    }
    return result;
  }

  notice(result) {
    if (result.result) {
      Vue.prototype.$Notice.success({
        title: '成功',
        desc: result.message,
      });
    } else {
      Vue.prototype.$Notice.error({
        title: '失败',
        desc: result.message,
      });
    }
  }
}
