import axios from 'axios';
import store from '../stores/index';
class HttpClient {
    baseURL = 'http://localhost:8000/api/v1';
  headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
    token = window.localStorage.getItem('access_token');
  headersWithAuth = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}`
  };

  instance(auth = false) {
    const service = axios.create({
      baseURL: this.baseURL,
        crossDomain: true,//设置cross跨域
        withCredentials: false,//设置cross跨域 并设置访问权限 允许跨域携带cookie信息
      headers: auth ? this.headersWithAuth : this.headers,
        timeout: 20000,
    });

      // request 拦截器
    service.interceptors.request.use(
      (config) => {
        //此处进行token等数据处理
          store.commit('setLoading', true);
        return config;
      },
      (error) => {
          store.commit('setLoading', false);
          store.commit('setError', error);
        Promise.reject(error);
      }
    );

      // respone 拦截器
    service.interceptors.response.use(
      (response) => {
        const res = response.data;
          if (res.code === 401) {
              if (localStorage.getItem('access_token')) {
                  localStorage.removeItem('access_token')
              }
              store.dispatch('logout').then();
              // return Promise.reject(res);
          }
          store.commit('setLoading', false);
        return response;
      },
      (error) => {
          console.log(error.response.data)
          store.commit('N', false);
          store.commit('setError', error);
        return Promise.reject(error);
      }
    );
    return service;
  }
}

export default new HttpClient();
