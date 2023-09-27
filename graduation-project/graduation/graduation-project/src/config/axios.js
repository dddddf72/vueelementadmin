import Vue from 'vue'
import axios from 'axios'
// axios.defaults.baseURL = "http://123.60.44.105:4002/api"
// axios.defaults.baseURL = "http://192.168.4.88:4002/api"
axios.defaults.baseURL = "http://124.71.191.216:4002/api"
axios.defaults.withCredentials = true
Vue.prototype.$http = axios