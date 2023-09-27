import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [
    {path:'/',redirect:'/login'},
    {
        path:'/login',
        component:() => import('../views/Login.vue')
    },
    {
        path:'/register',
        component:() => import('../views/Register.vue')
    },
    {path:'/home',component:Home},
    {
        path:'/detail',
        component:() => import('../views/Detail.vue')
    },
    {
        path:'/collect',
        component:() => import('../views/Collect.vue')
    },
    {
        path:'/shopCart',
        component:() => import('../views/ShopCart.vue')
    },
    {
        path:"/order",
        component:() => import('../views/Order.vue')
    },
    {
        path:"/pay",
        component:() => import('../views/Pay.vue')
    }
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
var vm = new Vue()
router.beforeEach((to,from,next)=>{
  var auth = vm.$cookie.get('loginAuth')   // 使用vue-cookie获取cookie
  if(to.path=='/login' || to.path=="/register"){
    if(auth){
      router.push('/home')
    }else{
      next()
    }
  }else{
    if(auth){
      next()
    }else{
      router.push('/login')
    }
  }
})
export default router