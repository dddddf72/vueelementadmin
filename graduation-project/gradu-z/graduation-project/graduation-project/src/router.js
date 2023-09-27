import Vue from 'vue'
import ElementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import VueRouter from 'vue-router';

import home from './components/Home'
import index from './components/Index'
import movies from './components/Movies'
import navJump from './components/box/navJump';
import detail from './components/box/detail';
import User from './components/User'
import Register from './components/Register';
import play from './components/box/play'
Vue.use(ElementUi);
Vue.use(ViewUI);
Vue.use(VueRouter);

const router = new VueRouter({
  routes:[
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      name:'home',
      component:home
    },
    {
      path:'/index',
      name:'index',
      component:index
    },
    {
      path:'/movies',
      name:'movies',
      component:movies
    },
    {
      path:'/lists/:name',
      component:home
    },
    {
      path:'/navJump',
      name:'navJump',
      component:navJump
    },
    {
      path:'/detail',
      name:"detail",
      component:detail
    },
    {
      path:'/User',
      component:User
    },
    {
      path:'/rist',
      component:Register
    },
    {
      path:'/play',
      component:play
    }
  ]
})
export default router;