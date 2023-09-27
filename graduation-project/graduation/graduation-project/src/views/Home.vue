<template>
  <div>
    <Header @handleSearch="getSearchData"></Header>
    <div class="home-container">
      <!-- 轮播图区域 -->
      <div>
        <h1 class="swiper-title">闲置物品轻松卖</h1>
        <p style="text-align:center;color:#444;font-size:15px;">二手轻松换成钱</p>
        <el-carousel :interval="4000"
                     type="card"
                     height="200px">
          <el-carousel-item v-for="item in images"
                            :key="item">
            <img :src="item"
                 class="rightImg">
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- 商品区域 -->
      <div class="goods">
        <div class="header">
          <div class="home">首页</div>
        </div>
        <el-menu class="el-menu-demo"
                 mode="horizontal"
                 active-text-color="#ffd04b"
                 background-color="#545c64"
                 text-color="#fff"
                 :default-active="activeIndex">
          <el-menu-item index="1"
                        @click="getGoods('goodsList')"
                        id="homepage">综合</el-menu-item>
          <el-submenu index="2">
            <template slot="title">分类</template>
            <el-submenu index="2-1">
              <template slot="title">手机</template>
              <el-menu-item index="2-1-1"
                            @click="getGoods('phone')">Apple</el-menu-item>
              <el-menu-item index="2-1-2"
                            @click="getGoods('miphone')">小米</el-menu-item>
              <el-menu-item index="2-1-3"
                            @click="getGoods('sanphone')">三星</el-menu-item>
              <el-menu-item index="2-1-4"
                            @click="getGoods('hwphone')">华为</el-menu-item>
              <el-menu-item index="2-1-5"
                            @click="getGoods('oppo')">oppo</el-menu-item>
              <el-menu-item index="2-1-6"
                            @click="getGoods('vivo')">vivo</el-menu-item>
            </el-submenu>
            <el-submenu index="2-2">
              <template slot="title">电脑</template>
              <el-menu-item index="2-2-1"
                            @click="getGoods('computer')">Apple</el-menu-item>
              <el-menu-item index="2-2-2"
                            @click="getGoods('milaptop')">小米</el-menu-item>
              <el-menu-item index="2-2-3"
                            @click="getGoods('sanlaptop')">三星</el-menu-item>
              <el-menu-item index="2-2-4"
                            @click="getGoods('hwlaptop')">华为</el-menu-item>
              <el-menu-item index="2-2-5"
                            @click="getGoods('hp')">惠普</el-menu-item>
              <el-menu-item index="2-2-6"
                            @click="getGoods('lenovo')">联想</el-menu-item>
            </el-submenu>
            <el-menu-item index="2-3"
                          @click="getGoods('cloth')">衣服</el-menu-item>
            <el-menu-item index="2-4"
                          @click="getGoods('caizhuang')">化妆品</el-menu-item>
            <el-submenu index="2-5">
              <template slot="title">书籍</template>
              <el-menu-item index="2-5-1"
                            @click="getGoods('english')">外语学习</el-menu-item>
              <el-menu-item index="2-5-2"
                            @click="getGoods('word')">字典词典/工具书</el-menu-item>
              <el-menu-item index="2-5-3"
                            @click="getGoods('college')">大中专教辅</el-menu-item>
              <el-menu-item index="2-5-4"
                            @click="getGoods('exam')">考试</el-menu-item>
              <el-menu-item index="2-5-5"
                            @click="getGoods('primary')">中小学教辅</el-menu-item>
              <el-menu-item index="2-5-6"
                            @click="getGoods('books')">文学/教程</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
        <div class="goods-card">
          <div class="card"
               v-for="item of goodsList"
               :key="item._id">
            <router-link :to="{path:'detail',query:{id:item._id,table:item.table}}">
              <img class="goodsImg"
                   :src="item.goodsImg"
                   @click="addHistory(item._id)">
            </router-link>
            <h2 class="price">￥{{item.price}}</h2>
            <a href="#"
               class="title">{{item.title}}</a>
            <p class="store">{{item.store}}</p>
          </div>
        </div>
        <template>
          <el-pagination background
                         @current-change="handleCurrentChange"
                         :page-size="12"
                         :current-page="currentPage"
                         layout="total,prev, pager,next,jumper"
                         :total="total">
          </el-pagination>
        </template>
      </div>
      <!-- 专业团队 -->
      <div>
        <h1 class="swiper-title">专业的团队</h1>
        <p style="text-align:center;color:#444;font-size:15px;">为您服务保驾护航</p>
        <div class="team">
          <div class="team-pay">
            <p class="title">腾讯投资</p>
            <p class="pro">微信支付&nbsp;平台担保交易</p>
          </div>
          <div class="team-assess">
            <p class="title">转转&富士康</p>
            <p class="pro">联合指定手机权威评估标准</p>
          </div>
          <div class="team-realname">
            <p class="title">真实个人</p>
            <p class="pro">各项实名认证&nbsp;层层把关</p>
          </div>
          <div class="team-sell">
            <p class="title">帮你卖</p>
            <p class="pro">海量竞拍&nbsp;帮你卖高价</p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="kefu">
        <img src="@/assets/images/kefu.png"
             alt="">
        <div>
          <p>在线客服服务时间</p>
          <p>9:00---20:00</p>
        </div>
      </div>
      <p class="title">"感谢有你，我们的坚持才更有意义"</p>
      <div class="by">by &nbsp;&nbsp;湖大知行校园二手交易网</div>
      <div class="address">&copy; CopyRight 2021 湖大知行校园二手交易网 </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
export default {
  name: "Home",
  components: {
    Header
  },
  data () {
    return {
      shoucang: require('../assets/images/shoucang.png'),
      shoucangBefore: require('../assets/images/shoucang-before.png'),
      images: [
        require('../assets/images/img1.png'),
        require('../assets/images/img2.png'),
        require('../assets/images/img3.png'),
        require('../assets/images/img4.png'),
        require('../assets/images/img5.png')
      ],
      activeIndex: '1',
      goodsList: [],
      currentPage: 1,
      total: 0,
      thisTable: "",  // 当前访问的那张表
      username: this.$store.state.username
    }
  },
  mounted () {
    this.getGoodsList(0, 'goodsList')
    this.getGoodsTotal('goodsList')
  },
  methods: {
    // 获取商品总数
    getGoodsTotal (table) {
      var url = `/goodsTotal?table=${table}`
      this.$http.get(url).then(res => {
        this.total = res.data.result.length
      })
    },
    // 根据表名获取商品列表
    getGoodsList (start, table) {
      this.$http.get(`/data?start=${start}&table=${table}`).then(res => {
        this.goodsList = res.data.result
        this.thisTable = table
      })
    },
    // 页码改变
    handleCurrentChange (newPage) {
      this.currentPage = newPage
      this.getGoodsList((newPage - 1) * 12, this.thisTable)
    },
    // 点击商品分类
    getGoods (table) {
      this.currentPage = 1
      this.getGoodsList(0, table)
      this.getGoodsTotal(table)
    },
    getSearchData (data) {
      this.goodsList = data
      this.total = this.goodsList.length
    },
    //  添加到历史记录中
    addHistory (id) {
      var username = this.username
      this.$http.post('/history', { id, username }).then(res => {
        console.log(res);
      })
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.home-container {
  padding: 20px;
}
.el-carousel--card {
  padding-left: 60px;
}
.rightImg {
  width: 460px;
  height: 200px;
}
.swiper-title {
  text-align: center;
}
#homepage {
  width: 60px;
  text-align: center;
}

.goods {
  margin-top: 30px;
  height: 1357px;
}
.goods .header {
  margin: 0 auto;
  border-bottom: 3px solid #f57272;
}
.goods > .header > .home {
  width: 80px;
  text-align: center;
  line-height: 37px;
  background-color: #f57272;
  border-radius: 3px;
  color: #333;
}
.goods-card {
  display: flex;
  flex-wrap: wrap;
}
.card:not(:nth-child(4n)) {
  margin-right: 68px;
}
.card {
  width: 274px;
  border: 1px solid rgb(223, 223, 223);
  padding: 10px;
  position: relative;
  margin-bottom: 25px;
}
.card .goodsImg {
  width: 230px;
  height: 220px;
}
.card .price {
  margin-top: 10px;
  color: #f57272;
}
.card .title {
  text-decoration: none;
  color: #333;
  font-size: 14px;
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.card .star {
  width: 35px;
  position: absolute;
  right: 70px;
  bottom: 14px;
}
.card .store {
  margin-left: 5px;
  font-size: 14px;
  color: #666;
}
.el-pagination {
  width: 600px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}
.team {
  display: flex;
}
.team > div {
  width: 200px;
  height: 200px;
  margin-left: 92px;
}
.team > div > p {
  text-align: center;
}
.team > div > .title {
  margin-top: 174px;
  margin-bottom: 5px;
}
.team > div > .pro {
  font-size: 14px;
  color: #666;
}
.team-pay {
  background: url("../assets/images/c1.png") no-repeat center;
}
.team-pay:hover {
  background: url("../assets/images/c2.png") no-repeat center;
}
.team-assess {
  background: url("../assets/images/b1.png") no-repeat center;
}
.team-assess:hover {
  background: url("../assets/images/b2.png") no-repeat center;
}
.team-realname {
  background: url("../assets/images/a1.png") no-repeat center;
}
.team-realname:hover {
  background: url("../assets/images/a2.png") no-repeat center;
}
.team-sell {
  background: url("../assets/images/d1.png") no-repeat center;
}
.team-sell:hover {
  background: url("../assets/images/d2.png") no-repeat center;
}
.footer {
  margin-top: 50px;
  height: 200px;
  border-top: 5px solid #f57272;
  background-color: #373737;
  color: rgb(204, 204, 204);
  position: relative;
}
.kefu {
  display: flex;
  margin-top: 50px;
  margin-left: 40px;
  font-size: 20px;
}
.kefu > img {
  margin-right: 20px;
  width: 58px;
}
.footer .title {
  position: absolute;
  font-size: 38px;
  text-align: center;
  top: 25px;
  left: 350px;
}
.by {
  position: absolute;
  right: 70px;
}
.address {
  position: absolute;
  top: 130px;
  left: 390px;
  font-size: 18px;
}
</style>