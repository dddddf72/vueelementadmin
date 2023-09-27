<template>
  <div>
    <Center></Center>
    <div><h2>搞笑·童话</h2></div>
    <div class="movies">
      <div v-for="item of Funny" :key="item._id">
        <div class="grid-content bg-purple"><router-link target="_blank" :to="{path:'/detail',query:{title:item.title}}">
                <img :src="item.image">
                <div class="movies-title">{{item.title}}</div>
              </router-link></div>
      </div>
    </div>
    <div><h2>格斗·冒险</h2></div>
    <div class="movies">
      <div v-for="item of combat" :key="item.title">
        <div class="grid-content bg-purple"><router-link target="_blank" :to="{path:'/detail',query:{title:item.title}}">
                <img :src="item.image">
                <div class="movies-title">{{item.title}}</div>
              </router-link></div>
      </div>
    </div>
    <div><h2>运动·恋爱</h2></div>
    <div class="movies">
      <div v-for="item of Sports" :key="item.image">
        <div class="grid-content bg-purple"><router-link target="_blank" :to="{path:'/detail',query:{title:item.title}}">
                <img :src="item.image">
                <div class="movies-title">{{item.title}}</div>
              </router-link></div>
      </div>
    </div>
    <div><h2>神魔·科幻</h2></div>
    <div class="movies">
      <div v-for="item of Ghost" :key="item.index">
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
        Funny:[],
        combat:[],
        Sports:[],
        Ghost:[]
      }
    },
  components: {
    Footer,
    Center
    },
    mounted() {
      let url = "/domestic"
      getAnime(url).then(res=>{
        this.Funny = res.data.res.slice(0,14);
        this.combat = res.data.res.slice(14,28);
        this.Sports = res.data.res.slice(28,42);
        this.Ghost = res.data.res.slice(42);
      })
    },
  }
</script>

<style scoped>

</style>