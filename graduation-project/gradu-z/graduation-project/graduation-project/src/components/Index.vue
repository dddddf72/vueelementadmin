<template>
  <div class="index">
    <!-- 轮播 -->
    <div>
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="item of lunbo" :key="item.image">
            <router-link target="_blank" :to="{path:'/detail',query:{title:item.title}}"><img :src="item.image" class="lunbo"></router-link>
          </el-carousel-item>
        </el-carousel>
    </div>
    <Center></Center>
    <!-- 中间 -->
    <div class="container">
      <div class="container-left">
        <div class="lable"><h2>最近更新</h2><div><router-link to="" class="more">更多</router-link></div></div>
        <el-row :gutter="20" class="item">
          <el-col :span="6" v-for="item of latelies" :key="item.id">
            <div class="grid-content bg-purple"><router-link target="_blank" :to="{path:'/detail',query:{title:item.title}}">
                <img :src="item.images" class="index-img">
                <div class="index-title">{{item.title}}</div>
                <div>{{item.snum}}</div>
              </router-link></div>
          </el-col>
        </el-row>
        <div class="lable"><h2>日本动漫</h2><div><router-link to="" class="more">更多</router-link></div></div>
        <el-row :gutter="20">
          <el-col :span="6" v-for="item of Japans" :key="item.title">
            <div class="grid-content bg-purple"><router-link target="_blank" :to="{path:'/detail',query:{title:item.title}}">
                <img :src="item.images" class="index-img">
                <div class="index-title">{{item.title}}</div>
                <div>{{item.snum}}</div>
              </router-link></div>
          </el-col>
        </el-row>
        <div class="lable"><h2>国产动漫</h2><div><router-link to="" class="more">更多</router-link></div></div>
        <el-row :gutter="20">
          <el-col :span="6" v-for="item of domestic" :key="item.snum">
            <div class="grid-content bg-purple">
              <router-link target="_blank" :to="{path:'/detail',query:{title:item.title}}">
                <img :src="item.images" class="index-img">
                <div class="index-title">{{item.title}}</div>
                <div>{{item.snum}}</div>
              </router-link></div>
          </el-col>
        </el-row>
        <div class="lable"><h2>美国动漫</h2><div><router-link to="" class="more">更多</router-link></div></div>
        <el-row :gutter="20">
          <el-col :span="6" v-for="item of usas" :key="item._id0">
            <div class="grid-content bg-purple"><router-link target="_blank" :to="{path:'/detail',query:{title:item.title}}">
                <img :src="item.images" class="index-img">
                <div class="index-title">{{item.title}}</div>
                <div>{{item.snum}}</div>
              </router-link></div>
          </el-col>
        </el-row>
        <div class="lable"><h2>动漫电影</h2><div><router-link to="" class="more">更多</router-link></div></div>
        <el-row :gutter="20">
          <el-col :span="6" v-for="item of movies" :key="item.index">
            <div class="grid-content bg-purple"><router-link target="_blank" :to="{path:'/detail',query:{title:item.title}}">
                <img :src="item.images" class="index-img">
                <div class="index-title">{{item.title}}</div>
                <div>{{item.snum}}</div>
              </router-link></div>
          </el-col>
        </el-row>
        <div>
          <h2>友情链接</h2>
          <div class="link">
            <span><router-link to="">樱花动漫</router-link></span>
            <span><router-link to="">樱花动漫网</router-link></span>
          </div>
        </div>
      </div>
      <div class="container-right">
        <div>
          <h2>每日更新列表</h2>
            <el-tabs type="card">
              <el-tab-pane label="周一">
                <div class="lists" v-for="item of one" :key="item._id1">
                  <router-link target="_blank" :to="{path:'/detail',query:{title:item.titles}}"><div class="lists-titles"><li>{{item.titles}}</li></div></router-link>
                  <div>{{item.snums}}</div>
                </div>
              </el-tab-pane>
              <el-tab-pane label="周二">
                <div class="lists" v-for="item of two" :key="item._id2">
                  <router-link target="_blank" :to="{path:'/detail',query:{title:item.titles}}"><div class="lists-titles"><li>{{item.titles}}</li></div></router-link>
                  <div>{{item.snums}}</div>
                </div>
              </el-tab-pane>
              <el-tab-pane label="周三"><div class="lists" v-for="item of three" :key="item._id3">
                  <router-link target="_blank" :to="{path:'/detail',query:{title:item.titles}}"><div class="lists-titles"><li>{{item.titles}}</li></div></router-link>
                  <div>{{item.snums}}</div>
                </div></el-tab-pane>
              <el-tab-pane label="周四"><div class="lists" v-for="item of four" :key="item._id4">
                  <router-link target="_blank" :to="{path:'/detail',query:{title:item.titles}}"><div class="lists-titles"><li>{{item.titles}}</li></div></router-link>
                  <div>{{item.snums}}</div>
                </div></el-tab-pane>
              <el-tab-pane label="周五"><div class="lists" v-for="item of five" :key="item._id5">
                  <router-link target="_blank" :to="{path:'/detail',query:{title:item.titles}}"><div class="lists-titles"><li>{{item.titles}}</li></div></router-link>
                  <div>{{item.snums}}</div>
                </div></el-tab-pane>
              <el-tab-pane label="周六"><div class="lists" v-for="item of six" :key="item._id6">
                  <router-link target="_blank" :to="{path:'/detail',query:{title:item.titles}}"><div class="lists-titles"><li>{{item.titles}}</li></div></router-link>
                  <div>{{item.snums}}</div>
                </div></el-tab-pane>
              <el-tab-pane label="周日"><div class="lists" v-for="item of seven" :key="item._id7">
                  <router-link target="_blank" :to="{path:'/detail',query:{title:item.titles}}"><div class="lists-titles"><li>{{item.titles}}</li></div></router-link>
                  <div>{{item.snums}}</div>
                </div></el-tab-pane>
            </el-tabs>
        </div>
        <div class="R-box">
          <h2>一周动漫排行榜</h2>
          <div v-for="item of lists" :key="item._id8" class="Rlists">
            <div>{{item.Rnum}}</div>
            <div class="Rlists-img"><router-link target="_blank" :to="{path:'/detail',query:{title:item.Rtitle}}"><img :src="item.Rimg"></router-link></div>
            <div class="Rlists-R">
                <h4 class="Rtitle"><router-link target="_blank" :to="{path:'/detail',query:{title:item.Rtitle}}">{{item.Rtitle}}</router-link></h4>
                <div>{{item.Rstate}}</div>
                <div>{{item.Rmolds}}</div>
                <div class="Rintroduce">{{item.Rintroduce}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <Footer></Footer>
  </div>
</template>

<script>
import '../css/Index.css';
import Center from './Center.vue';
import Footer from './Footer';
import {getAnime} from '../api/request'
export default {
  name: 'Index',
  props: {
    msg: String
  },
  components:{
    Footer,
    Center
  },
  data(){
    return{
      lunbo:[],
      latelies:[],
      Japans:[],
      domestic:[],
      usas:[],
      movies:[],
      one:[],
      two:[],
      three:[],
      four:[],
      five:[],
      six:[],
      seven:[],
      lists:[]
    }
  },
  mounted(){
    let url = "/lunbo";
    getAnime(url).then(res=>{
      console.log(res);
      this.lunbo = res.data.res;
    })
   let url2 = "/covers";
   getAnime(url2).then(res=>{
      this.latelies = res.data.res.slice(0,8);
      this.Japans = res.data.res.slice(8,16);
      this.domestic = res.data.res.slice(16,24);
      this.usas = res.data.res.slice(24,32);
      this.movies = res.data.res.slice(32,40);
    })
    let url3  = "/news";
    getAnime(url3).then(res=>{
      this.one = res.data.res.slice(0,7);
      this.two = res.data.res.slice(7,14);
      this.three = res.data.res.slice(14,22);
      this.four = res.data.res.slice(22,29);
      this.five = res.data.res.slice(29,34);
      this.six = res.data.res.slice(34,46);
      this.seven = res.data.res.slice(46,60);
    })
    let url4 = "/lists";
    getAnime(url4).then(res=>{
      this.lists = res.data.res;
    })
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
