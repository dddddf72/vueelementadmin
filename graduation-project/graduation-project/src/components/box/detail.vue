<template>
  <div>
    <Header></Header>
    <h1>{{details.title}}</h1>
    <div class="line2"></div>
    <div class="box">
      <div class="left">
        <div class="detail-top">
          <div class="detail-img"><img :src="details.image"></div>
          <div class="information">
            <div>
              <Rate show-text allow-half v-model="valueCustomText">
                <span style="color: #f5a623">{{ valueCustomText }}</span>
              </Rate>
            </div>
            <div>{{details.name}}</div>
            <div>
              <div>{{details.address}}</div>
              <div>{{details.type}}</div>
            </div>
            <div>{{details.year}}</div>
            <div>{{details.news}}</div>
            <div class="state-img">
              <img :src="state?noSrc:yesSrc" @click="like"><span>点击收藏</span>
            </div>
          </div>
        </div>
        <Divider orientation="left" style="color:#fc8bbb">{{title}} 播放列表：</Divider>
        <div class="detail-nums">
          <div v-for="item of details.nums" :key="item.key">
            <router-link :to="{path:'/play',query:{title:title,num:item}}"><div class="detail-num">{{item}}</div></router-link>
          </div>
        </div>
        <div>
          <div>《{{title}}》动漫相关推荐：</div>
          <el-row>
            <el-col :span="6" v-for="item of details.rels" :key="item.img">
              <div class="grid-content detail-rels">
              <router-link to="">
                <div><img :src="item.img"></div>
                <p>{{item.imgname}}</p>
              </router-link>
            </div></el-col>
          </el-row>
        </div>
        <div>
          <Divider orientation="left" style="color:#fc8bbb">{{title}} 相关介绍：</Divider>
          <p>{{details.info}}</p>
        </div>
        <div>
          <Divider orientation="left" style="color:#fc8bbb">{{title}} 评论：</Divider>
          <Input v-model="value17" maxlength="100" show-word-limit type="textarea" 
          placeholder="请输入你的评论 (按下回车键发表评论)" style="width: 650px" :rows="4" @on-enter="onDiscuss"/>
          <div class="yonghu" v-for="item of Discusses">
            <div><img src="../../images/ndz.jpg"><span>动漫头号粉丝</span></div>
            <div class="pinglun">{{item}}</div>
          </div>
          <div class="yonghu">
            <div><img src="../../images/q1.jpg"><span>超人一号</span></div>
            <div class="pinglun">很好看的一部动漫,值得观看。</div>
          </div>
          <div class="yonghu">
            <div><img src="../../images/q2.jpg"><span>宇宙无敌大冬瓜</span></div>
            <div class="pinglun">我非常喜欢这部动漫，他十分符合我的口味，还是我喜欢的类型，赞！</div>
          </div>
        </div>
      </div>
      <div class="right">
          <h2>推荐动漫</h2>
          <div v-for="item of details.recs" :key="item._id8" class="right-lists">
            <div class="lists-img"><router-link to="" @click.native="click(item.rname)"><img :src="item.rimg"></router-link></div>
            <div class="lists-R">
                <h4><router-link class="title-R" to="" @click.native="click(item.rname)">{{item.rname}}</router-link></h4>
                <div style="color:#ff0000">{{item.rstate}}</div>
                <div>{{item.rtext}}</div>
                <div class="introduce">{{item.rtype}}</div>
            </div>
          </div>
        </div>
    </div>
    <div class="comment">
      发表于：
      <Time :time="time3" :interval="1"></Time>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import '../../css/detail.css'
import Header from '../Header'
import Footer from '../Footer'
import {getAnime} from '../../api/request'
  export default {
    data(){
      return{
        value17: '',
        time3: new Date(),
        details:[],
        valueCustomText:4.5,
        title:"",
        yesSrc:require("../../images/shoucang.png"),
        noSrc:require("../../images/noshoucang.png"),
        state:false,
        Discusses:[]
      }
    },
    components:{
      Header,
      Footer
    },
    mounted() {
      console.log(this.$route.query);
      var t = this.$route.query.title;
      this.title = t
      console.log(t);
      var detailUrl = `/detail?title=${t}`;
      getAnime(detailUrl).then(res=>{
        this.details = res.data.res[0];
      })
    },
    methods:{
      click(value){
        var clickUrl = `/detail?title=${value}`;
        getAnime(clickUrl).then(res=>{
          this.details = res.data.res;
        })
      },
      like(){
        console.log(this.details);
        this.state = !this.state;
        var id = this.details._id;
        var title = this.details.title;
        var image = this.details.image;
        var name = this.details.name;
        var state = this.state;
        var username = this.$cookies.get("user").usernum
        // console.log(username);
        this.http({
          method:"post",
          url:"http://124.71.180.178:8001/collect",
          data:{
            id,title,image,name,state,username
          }
        })
      },
      onDiscuss(){
        var value = this.value17;
        this.Discusses.unshift(value);
      }
    }
  }
</script>

<style scoped>
  .title-R {
    width: 116px;
    display:-webkit-box;
    overflow:hidden;
    text-overflow:ellipsis;
    -webkit-line-clamp:1; 
    -webkit-box-orient:vertical;
  }
  .state-img img {
    width: 50px;
    height: 40px;
    vertical-align: middle;
  }
  .state-img {
    padding-top: 50px;
  }
</style>