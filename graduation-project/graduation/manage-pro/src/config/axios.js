import Vue from 'vue'
import axios from 'axios';
import store from '../store/index'
// axios.defaults.baseURL = "http://123.60.44.105:4000"
axios.defaults.baseURL = "http://124.71.191.216:4002"
// axios.defaults.baseURL = "http://192.168.4.88:4000"
axios.defaults.withCredentials = true; 
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    store.state.isLoading = true
    return config;
});
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    store.state.isLoading = false
    return response;
});   
Vue.prototype.$http = axios;