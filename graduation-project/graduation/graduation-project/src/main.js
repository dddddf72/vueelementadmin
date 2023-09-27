import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './routers'
import store from './store'
import './plugins/view'
import 'view-design/dist/styles/iview.css'
import './config/axios'
import './config/filters'
import VueCookie from 'vue-cookie'
Vue.use(VueCookie)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
