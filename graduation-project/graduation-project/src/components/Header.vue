<template>
  <div>
    <div class="head">
    <div class="name">
      <img src="../images/logo.png" class="logo">
      <a href="">桜アニメ</a>
    </div>
    <div class="search">
      <Input suffix="ios-search" placeholder="搜索动漫" 
      style="width: auto" @on-enter="enter(value)" v-model="value"/>
      <Button type="primary" @click="enter(value)">搜索</Button>
    </div>
    <div class="hand-user">
      <router-link to=""><Logon></Logon></router-link>
    </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import '../css/Header.css';
import Logon from './Logon'
  export default {
    data(){
      return{
        value:"",
        title:""
      }
    },
    components:{Logon},
    methods:{
      enter(){
        var title = this.value;
        this.http({
                method:'get',
                url:`http://124.71.180.178:8001/search?keyworld=${title}`,
            }).then((res) =>{          //这里使用了ES6的语法
                // console.log(res)       //请求成功返回的数据
                this.movies = res.data.res
            }).catch((error) =>{
                console.log(error)       //请求失败返回的数据
            })
            this.$router.push({
              path:'/navJump',
              query:{
                keyworld:title
              }
            })
      }
    }
  }
</script>

<style scoped>

</style>