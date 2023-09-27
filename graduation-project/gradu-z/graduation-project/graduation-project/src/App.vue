<template>
  <div id="app">
      <router-view v-if="isRouterAlive"></router-view>
      <!-- 返回顶部 -->
    <BackTop :height="100" :bottom="200">
      <div class="top">返回顶端</div>
    </BackTop>
  </div>
</template>

<script>
import './css/App.css'
// import Index from './components/Index.vue'

export default {
  name: 'App',
  provide(){
    return{
      reload:this.reload
    }
  },
  data(){
  return{
    isRouterAlive:true
  }
},
methods: {
  reload(){
    this.isRouterAlive = false;
    this.$nextTick(function(){
      this.isRouterAlive = true
    })
  }
},
}

</script>

<style>
#app {
  padding-left: 16%;
  padding-right: 16%;
}
.top{
        padding: 10px;
        background: rgba(0, 153, 229, .7);
        color: #fff;
        text-align: center;
        border-radius: 2px;
    }
</style>
