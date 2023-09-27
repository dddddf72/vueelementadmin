import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Content from '../views/Content.vue'
Vue.use(VueRouter)

const routes = [
  {path:'/',redirect:'/login'},
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {path:'/home',redirect:'/home/content'},
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children:[
      {
        path: 'content',
        component:Content
      },
      {
        path: 'edit',
        component: () => import('../views/Edit.vue')
      },
      {
        path: 'add',
        component: () => import('../views/Add.vue')
      }
    ]
  }
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
var vm = new Vue()
router.beforeEach((to,from,next)=>{
  var auth = vm.$cookie.get('ManageLogin')   // 使用vue-cookie获取cookie
  if(to.path=='/login'){
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
