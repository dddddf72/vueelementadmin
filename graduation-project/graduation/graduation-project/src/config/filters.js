import Vue from 'vue'
// 全局过滤器
Vue.filter('dateFormat', function () {
    const dt = new Date()
  
    const y = dt.getFullYear()
    const m = (dt.getMonth() + 1 + '').padStart(2, '0')
    const d = (dt.getDate() + '').padStart(2, '0')
  
    const hh = (dt.getHours() + '').padStart(2, '0')
    const mm = (dt.getMinutes() + '').padStart(2, '0')
    const ss = (dt.getSeconds() + '').padStart(2, '0')
  
    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})