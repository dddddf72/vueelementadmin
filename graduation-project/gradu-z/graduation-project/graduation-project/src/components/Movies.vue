<template>
  <div>
    <div><h2>动漫电影</h2></div>
    <div class="movies">
      <div v-for="item of movies" :key="item._id">
        <div class="grid-content bg-purple"><router-link target="_blank" :to="{path:'/detail',query:{title:item.title}}">
                <img :src="item.image">
                <div class="movies-title">{{item.title}}</div>
              </router-link></div>
      </div>
    </div>
    <div class="pages">
      <div>共有{{length}}条数据</div>
      <div><Page :total="dataCount" show-elevator @on-change="onchange" /> </div>
    </div> 
  </div>
</template>

<script>
import '../css/Movies.css'
import {getAnime} from '../api/request'
  export default {
    data(){
      return{
        movies:[],
        num:"",
        length:"",
        totalProblemList:[],
        dataCount:0,
        pageSize:35
      }
    },
    mounted() {
      let url = `/movies`;
      getAnime(url).then(res=>{
        this.totalProblemList = res.data.res; //取到所有数据
        this.dataCount = this.totalProblemList.length; //总条数
        if(this.dataCount<this.pageSize){
          this.movies = this.totalProblemList;
        }else {
          this.movies = this.totalProblemList.slice(0,this.pageSize)
        }
      })
    },
    methods: {
      onchange(index){
        console.log(index);
        var start = (index-1)*this.pageSize;
        var end = index*this.pageSize;
        this.movies = this.totalProblemList.slice(start,end);
      }
    },
  }
</script>

<style scoped>

</style>