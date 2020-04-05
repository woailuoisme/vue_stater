import axios from 'axios';
class HttpClient {
  baseURL = 'http://localhost:3000/api';
  loading = fasle;
  error = null;
  headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  currentUserString = window.localStorage.currentUser;
  currentUser = currentUserString ? JSON.parse(currentUserString) : '';
  headersWithAuth = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: currentUser && currentUser.token,
  };

  instance(auth = false) {
    // 创建axios实例
    const service = axios.create({
      // baseURL: process.env.BASE_API, // api的base_url
      baseURL: this.baseURL,
      withCredentials: false,
      headers: auth ? this.headersWithAuth : this.headers,
      timeout: 20000, // 请求超时时间
    });

    // request拦截器
    service.interceptors.request.use(
      (config) => {
        //此处进行token等数据处理
        this.loading = true;
        return config;
      },
      (error) => {
        // Do something with request error
        this.error = error;
        this.loading = false;
        Promise.reject(error);
      }
    );

    // respone拦截器
    service.interceptors.response.use(
      (response) => {
        const res = response.data;
        // if (res.code !== 200) {
        //   //此处进行异常处理
        //   return Promise.reject(res);
        // }
        this.loading = false;
        return response;
      },
      (error) => {
        //此处进行异常处理
        this.error = error;
        this.loading = false;
        return Promise.reject(error);
      }
    );
    return service;
  }
}

export default new HttpClient();
