<template>
  <div>
    <Center></Center>
    <div><h2>欧美经典动漫</h2></div>
    <div class="movies">
      <div v-for="item of classic" :key="item._id">
        <div class="grid-content bg-purple"><router-link target="_blank" :to="{path:'/detail',query:{title:item.title}}">
                <img :src="item.image">
                <div class="movies-title">{{item.title}}</div>
              </router-link></div>
      </div>
    </div>
    <div><h2>英国幼教系列</h2></div>
    <div class="movies">
      <div v-for="item of child" :key="item.title">
        <div class="grid-content bg-purple"><router-link target="_blank" :to="{path:'/detail',query:{title:item.title}}">
                <img :src="item.image">
                <div class="movies-title">{{item.title}}</div>
              </router-link></div>
      </div>
    </div>
    <div><h2>欧美原版动漫</h2></div>
    <div class="movies">
      <div v-for="item of source" :key="item.image">
        <div class="grid-content bg-purple"><router-link target="_blank" :to="{path:'/detail',query:{title:item.title}}">
                <img :src="item.image">
                <div class="movies-title">{{item.title}}</div>
              </router-link></div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../Footer';
import Center from '../Center';
import {getAnime} from '../../api/request'
  export default {
    data(){
      return{
        classic:[],
        child:[],
        source:[]
      }
    },
  components: {
    Footer,
    Center
    },
    mounted() {
      let url = "/usa"
      getAnime(url).then(res=>{
        this.classic = res.data.res.slice(0,13);
        this.child = res.data.res.slice(13,27);
        this.source = res.data.res.slice(27);
      })
    },
  }
</script>

<style scoped>

</style>