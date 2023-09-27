<template>
  <div>
    <Header></Header>
    <div class="line"></div>
    <div class="name">{{keyworld}}动漫</div>
    <!-- 地区 -->
    <div class="flex">
      <div class="">{{nav[1].address}}</div>
      <div v-for="item of nav[1].area" :key="item.address">
        <router-link to="" @click.native="navigate(item)">{{item}}</router-link>
      </div>
    </div>
    <!-- 类型 -->
    <div class="flex">
      <div class="">{{nav[2].type}}</div>
      <div v-for="item of nav[2].area" :key="item._id">
        <router-link to="" @click.native="navigate(item)">{{item}}</router-link>
      </div>
    </div>
    <!-- 年代 -->
    <div class="flex">
      <div class="">{{nav[3].year}}</div>
      <div v-for="item of nav[3].area" :key="item.index">
        <router-link to="" @click.native="navigate(item)">{{item}}</router-link>
      </div>
    </div>
    <div class="sort">
    </div>
    <!-- 动漫部分 -->
    <div class="content">
      <div class="left">
        <div v-for="item of leftdate" :key="item.image" >
          <router-link :to="{path:'/detail',query:{title:item.title}}" class="left-lists">
            <div><img :src="item.image"></div>
            <div class="text">
              <div>{{item.title}}</div>
              <div>{{item.name}}</div>
              <div>{{item.type}}</div>
              <div>{{item.info}}</div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="right">
          <h2>推荐动漫</h2>
          <div v-for="item of rightdate" :key="item._id8" class="right-lists">
            <div style="color:#fc8bbb">{{item.num}}</div>
            <div class="lists-img"><router-link :to="{path:'/detail',query:{title:item.title}}"><img :src="item.img"></router-link></div>
            <div class="lists-R">
                <h4 class="title"><router-link :to="{path:'/detail',query:{title:item.title}}">{{item.title}}</router-link></h4>
                <div style="color:#ff0000">{{item.state}}</div>
                <div>{{item.molds}}</div>
                <div class="introduce">{{item.introduce}}</div>
            </div>
          </div>
        </div>
    </div>
    <!-- page -->
    <div class="pages">
      <div><Page :total="dataCount" show-elevator @on-change="onchange" /> </div>
    </div> 
    <!-- 底部 -->
    <Footer></Footer>
  </div>
</template>

<script>
import '../../css/navJump.css'
import Header from '../Header'
import Footer from '../Footer'
import {getAnime} from '../../api/request'
  export default {
    data(){
      return{
        nav:[],
        leftdate:[],
        rightdate:[],
        clicks:[],
        keyworld:"",
        total:[],
        dataCount:0,
        pageSize:10
      }
    },
    components:{Header,Footer},
    mounted() {
      // console.log(this.$route.query);
      var {keyworld} = this.$route.query;
      this.keyworld = keyworld
      var navUrl = "/navJump";
      getAnime(navUrl).then(res=>{
        this.nav = res.data.res;
      })
      //首页搜索传来的keyworld
      var leftUrl = `/navdetailDate1?keyworld=${keyworld}`;
      getAnime(leftUrl).then(res=>{
        this.total = res.data.res;
        this.dataCount = this.total.length;
        if(this.dataCount<this.pageSize){
          this.leftdate = this.total;
        }else {
          this.leftdate = this.total.slice(0,this.pageSize)
        }
      })
      var rightUrl = "/navdetailDate2";
      getAnime(rightUrl).then(res=>{
        this.rightdate = res.data.res;
      })
    },
    methods: {
      onchange(index){
        var start = (index-1)*this.pageSize;
        var end = index*this.pageSize;
        this.leftdate = this.total.slice(start,end)
      },
      navigate(item){
      this.keyworld = item;
      //本页点击获取的keyworld
      var nowurl = `/navdetailDate1?keyworld=${item}`;
      getAnime(nowurl).then(res=>{
        this.leftdate = res.data.res;
      })
    }
    },
  }
</script>

<style scoped>
</style>