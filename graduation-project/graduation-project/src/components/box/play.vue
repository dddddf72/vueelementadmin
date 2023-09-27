<template>
  <div>
    <Header></Header>
    <h2 class="play-title">{{title}}: {{num}}</h2>
    <div class="video-box">
      <video-player class="video-player vjs-custom-skin vjs-big-play-centered" ref="videoPlayer" :playsinline="true" :options="playerOptions"></video-player>
    </div>
    <Divider orientation="left" style="color:#fc8bbb">{{title}} 播放列表：</Divider>
        <div class="detail-nums">
          <div v-for="item of details.nums" :key="item.key">
            <router-link to=""><div class="detail-num">{{item}}</div></router-link>
          </div>
        </div>
        <div>
          <div class="tuijian">《{{title}}》动漫相关推荐：</div>
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
        <Footer></Footer>
  </div>
</template>

<script>
import Header from '../Header'
import Footer from '../Footer'
import {getAnime} from '../../api/request'
  export default {
    components:{Header,Footer},
    data() {
      return {
        scurces:[{
          type:"video/mp4",
          src:require('../../static/dl.mp4')
        }],
        details:[],
        title:"",
        num:"",
         //vue-video
          playerOptions: {
          playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
          autoplay: false, // 如果true,浏览器准备好时开始回放。
          muted: false, // 默认情况下将会消除任何音频。
          loop: false, // 导致视频一结束就重新开始。
          preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: 'zh-CN',
          aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [{
            type: 'video/mp4', // 这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
            src: require('../../static/dl.mp4') // url地址
          }],
          hls: true,
          poster: 'http://wl.aidezy.com/2020012112152436584843.jpg', // 你的封面地址
          width: document.documentElement.clientWidth, // 播放器宽度
          notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
          controlBar: {
            timeDivider: true,//时间分割线
            durationDisplay: true,//总时间
            remainingTimeDisplay: false,//剩余播放时间
            progressControl: true, // 进度条
            fullscreenToggle: true // 全屏按钮
          },
        },
      }
    },
    mounted() {
      var {title,num} = this.$route.query;
      this.title = title;
      this.num = num;
      var detailUrl = `/detail?title=${title}`;
      getAnime(detailUrl).then(res=>{
        this.details = res.data.res[0];
      })
    },
  }
  
</script>

<style scoped>
  .play-title {
    padding-bottom: 10px;
  }
  .tuijian {
    padding-top: 20px;
    padding-bottom: 20px;
  }
</style>