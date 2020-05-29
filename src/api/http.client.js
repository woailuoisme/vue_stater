import axios from 'axios';
import Toast from "../utils/toast";
import vue from "../main"

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
      const client = axios.create({
          baseURL: this.baseURL,
          crossDomain: true,//设置cross跨域
          withCredentials: false,//设置cross跨域 并设置访问权限 允许跨域携带cookie信息
          headers: auth ? this.headersWithAuth : this.headers,
          timeout: 20000,
      });

      // request 拦截器
      client.interceptors.request.use(
          (config) => {
              //此处进行token等数据处理
              //   store.commit('setLoading', true);
              vue.$store.commit('share/SET_LOADING', true, {root: true})
              return config;
          },
          (error) => {
              vue.$store.commit('share/SET_LOADING', false, {root: true})
              Toast.error(error.message)
              return Promise.reject(error);
          }
    );

      // respone 拦截器
      client.interceptors.response.use(
          (response) => {
              const res = response.data;
              if (res.code === 401) {
                  if (localStorage.getItem('access_token')) {
                      localStorage.removeItem('access_token')
                  }
                  // store.dispatch('logout').then();
                  // return Promise.reject(res);
              }
              vue.$store.commit('share/SET_LOADING', false, {root: true})
        return response;
      },
      (error) => {
          // // Do something with response error
          // if (error.response.status === 401) {
          //     console.log('unauthorized, logging out ...');
          //     auth.logout();
          //     router.replace('/auth/login');
          // }
          vue.$store.commit('share/SET_LOADING', false, {root: true})
          Toast.error(error.message)
          return Promise.reject(error);
      }
    );
      return client;
  }
}

export default new HttpClient();
