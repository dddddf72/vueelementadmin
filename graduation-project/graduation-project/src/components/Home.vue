<template>
  <div>
    <!-- 头部 -->
    <div class="header">
      <Header></Header>
    </div>
    <Tabs v-model="name" @on-click='onClick(name)'>
        <TabPane label="首页" name="name1"><Index></Index></TabPane>
        <TabPane label="动漫电影" name="name2" id="movies"><Movies></Movies></TabPane>
        <TabPane label="日本动漫" name="name3"><Japan></Japan></TabPane>
        <TabPane label="国产动漫" name="name4"><Domestic></Domestic></TabPane>
        <TabPane label="美国动漫" name="name5"><Usa></Usa></TabPane>
    </Tabs>
  </div>
</template>
<script>
import Index from './Index.vue';
import Header from './Header';
import Movies from './Movies';
import Japan from './box/Japan';
import Domestic from './box/domestic';
import Usa from './box/usa';
  export default {
    data(){
      return{
        name:"name1"
      }
    },
    components:{Index,Header,Movies,Japan,Domestic,Usa},
    created(){
      // console.log('/lists/'+this.name);
      this.$router.push('/lists/'+this.name) //页面加载触发
    },
    methods:{
      onClick(name){
        this.$router.push('/lists/'+name);
        this.name = name;
      }
    },
  }
</script>

<style scoped>
#movies {
  height: 1000px;
}
</style>