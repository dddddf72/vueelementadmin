<template>
  <div>
    <Center></Center>
    <div><h2>日本经典动漫</h2></div>
    <div class="movies">
      <div v-for="item of classic" :key="item._id">
        <div class="grid-content bg-purple"><router-link target="_blank" :to="{path:'/detail',query:{title:item.title}}">
                <img :src="item.image">
                <div class="movies-title">{{item.title}}</div>
              </router-link></div>
      </div>
    </div>
    <div><h2>日本剧场版动漫</h2></div>
    <div class="movies">
      <div v-for="item of theatre" :key="item.title">
        <div class="grid-content bg-purple"><router-link target="_blank" :to="{path:'/detail',query:{title:item.title}}">
                <img :src="item.image">
                <div class="movies-title">{{item.title}}</div>
              </router-link></div>
      </div>
    </div>
    <div><h2>日本OVA版动漫</h2></div>
    <div class="movies">
      <div v-for="item of ova" :key="item.image">
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
        theatre:[],
        ova:[]
      }
    },
  components: {
    Footer,
    Center
    },
    mounted() {
      let url = "/japan"
      getAnime(url).then(res=>{
        this.classic = res.data.res.slice(0,14);
        this.theatre = res.data.res.slice(14,28);
        this.ova = res.data.res.slice(28);
      })
    },
  }
</script>

<style scoped>

</style>