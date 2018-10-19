import BaseService from './BaseService';

export default class DataService extends BaseService {
  async getCity(data) {
    const url = this.API.cities.listCities;
    const result = await this.post(url, data);
    return result;
  }

  async getProvinceList() {
    const url = this.API.cities.listProvince;
    const result = await this.post(url);
    return result;
  }

  async getCityList(data) {
    const url = this.API.cities.listCity;
    const result = await this.post(url, data);
    return result;
  }

  async getCityStatusList() {
    const url = this.API.cities.listCitystatus;
    const result = await this.post(url);
    return result;
  }

  async editCity(data) {
    const url = this.API.cities.addCity;
    const result = await this.post(url, data);
    return result;
  }
}
