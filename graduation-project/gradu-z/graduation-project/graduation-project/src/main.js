import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import cookies from 'vue-cookies';
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
Vue.use(VueVideoPlayer)
Vue.prototype.http = axios;
Vue.prototype.$cookies = cookies;
Vue.config.productionTip = false
Vue.use(cookies);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
