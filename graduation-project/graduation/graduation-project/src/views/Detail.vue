<template>
    <div>
        <Header></Header>
        <div class="nav">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>商品详情</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="content" v-for="item of goodsDetail" :key="item._id">
            <img class="pic" :src="item.goodsImg" alt="">
            <div>
                <p class="title">
                    <img src="//img11.360buyimg.com/devfe/s37x16_jfs/t1/20786/13/1309/1233/5c10bc25E56fdebff/f8a8193c17673628.png" alt="">
                    {{item.title}}  
                </p>
                <div class="pro">价格全网优惠，下单京东速发，支持7天无理由退换货，下单好评现金红包，欢迎咨询客服砍价！查看</div>
                <div class="price">
                    <span>(独享)</span>
                    价格<span class="sell-price">￥{{item.price}}</span>
                </div>
                <div class="service">
                    服务支持
                    <div class="icon"></div>
                    <div class="tag blank">极速审核</div>
                    <div class="tag">7天价保</div>
                    <div class="tag">免费上门取货</div>
                </div>
                <div class="service">
                    店铺名
                    <span>{{item.store}}</span>
                </div>
                <div class="contact">
                    <div class="sprite-icon"></div>
                    <div class="kefu">联系客服</div>
                    <div class="sprite-icon2"></div>
                    <div class="follow"><a href="###" @click="handleCollect(item._id,item.collected,item.table)">{{item.collected?'已收藏':'收藏此商品'}}</a></div>
                </div>
  
                <el-button type="success" class="buy" @click="handleBuy(item)">购买</el-button>
                <el-button type="primary" @click="addCart(item._id)">加入购物车</el-button>
            </div>
        </div>
        <div class="recommend">
            <div class="jinpin-wrap">
                <span class="jinpin-tit">精品推荐</span>
                <span class="jinpin-txt">小编精挑细选好商品</span>
            </div>
            <div class="goods-card">
                <div class="card"
                v-for="item of goodsList"
                :key="item._id">
                <img class="goodsImg"
                    :src="item.goodsImg"
                    @click="refresh(item._id)" >
                <h2 class="price">￥{{item.price}}</h2>
                <a href="#"
                class="title">{{item.title}}</a>
                <p class="store">{{item.store}}</p>
                </div>
            </div>
          </div>
        </div>
        
    </div>
</template>

<script>
import Header from '../components/Header'
export default {
    name:"Detail",
    components:{
        Header
    },
    data(){
        return {
            goodsDetail:[],
            goodsList: [],
            table:"",
            username:''
        }
    },
    created(){
        setTimeout(() => {
            this.username = this.$store.state.username
        }, 500);
    },
    mounted(){
        this.getDetail()
        this.getGoodsList(0,this.table)
    },
    methods:{
        addCart(id){
            var username = this.username
            this.$http.post('/addCart',{id,username})
            this.$message({
                message: '成功添加购物车！',
                type: 'success'
            })
            
        },
        getDetail(){
            var {id,table}= this.$route.query
            this.table = table
            var url = `/detail?id=${id}`
            this.$http.get(url).then(res=>{
                this.goodsDetail = res.data.result
            })
        },
        getGoodsList (start,table) {
            this.$http.get(`/data?start=${start}&table=${table}`).then(res=>{
                this.goodsList = res.data.result
            })
        },
        refresh(id){
           var url = `/detail?id=${id}`
            this.$http.get(url).then(res=>{
                this.goodsDetail = res.data.result
                this.addHistory(id)
            })
        },
        addHistory(id){
            var username = this.username
            this.$http.post('/history',{id,username})
        },
        handleBuy(obj){
            var checkedGoods=[]
            checkedGoods.push(obj)
            var total = obj.price
            var createTime = new Date()
            this.$store.commit('setState',{
                total,
                checkedGoods,
                createTime
            })
            this.$router.push('/order')
        },
        handleCollect(id,collected,table){
            var table = table
            var username = this.username
            this.goodsDetail[0].collected = !collected
            collected = this.goodsDetail[0].collected
            var data={id,collected,username}
            this.$http.post(`/collect/${table}`,data)
        }
    }
}
</script>

<style  scoped>
.nav{
    margin-left: 67px;
    margin-top: 20px;
}
.content{
    height: 450px;
    width: 1100px;
    margin: 0 auto;
    margin-top: 20px;
    display: flex;
}
.content .pic{
    width:400px;
    height: 400px;
    border: 1px solid #eee;
    margin-right: 100px;
}
.content .title{
    font-size: 18px;
}
.content .pro{
    font-size: 13px;
    color: red;
}
.content .price{
    margin-top: 15px;
    line-height: 70px;
    padding-left: 20px;
    background-color: #eee;
    font-size: 14px;
    color: #555;
}
.content .price span{
    color: rgb(218, 23, 23);
}
.content .sell-price{
    font-size: 30px;
}
.content .service{
    margin-top: 15px;
    position: relative;
    display: flex;
    color: #777;
    font-size: 15px;
}
.content .service .tag{
    color: #646FB0;
    font-size: 14px;
    margin-left: 20px;
    cursor: pointer;
}
.content .service .tag:hover{
    color: rgb(218, 23, 23);
}
.content .service .blank{
  margin-left: 114px;  
}
.content .service>.icon{
    position: absolute;
    top: 3px;
    left: 77px;
    width: 84px;
    height:16px;
    background-image: url("../assets/images/sprite.png");
    background-position: 0 -16px;
}
.content .service span{
    margin-left: 30px;
    color: rgb(161, 62, 140);
    cursor: pointer;
}
.content .contact{
    display: flex;
    font-size: 14px;
    color: #666;
    position: relative;
}
.sprite-icon{
    margin-top: 15px;
    width: 16px;
    height: 16px;
    background:url("../assets/images/sprite2.png") -34px -16px;
}
.contact .kefu{
    position: absolute;
    top: 13px;
    left: 27px;
}
.sprite-icon2{
    margin-top: 15px;
    margin-left: 105px;
    width: 16px;
    height: 16px;
    background:url("../assets/images/sprite2.png") -34px 0px;
}
.follow{
    position: absolute;
    top: 13px;
    left: 145px
}
.buy{
    margin-top: 25px;
    width: 100px;
    margin-right: 20px;
}
.recommend{
    width: 1100px;
    margin: 0 auto;
}
.recommend .title{
    font-size: 20px;
}
.jinpin-wrap{
    height: 24px;
    line-height: 24px;
    margin: 0px auto 20px;
    font-size: 20px;
    font-family: "Microsoft YaHei";
    color: #2D2D2D;
    display: block;
}
.jinpin-wrap .jinpin-tit {
    float: left;
    background: url(http://291194134.qqku.com/template/100/img/jptj.png) left center no-repeat;
    padding-left: 30px;
    letter-spacing: 2px;
    color: #454545;
}
.jinpin-wrap .jinpin-txt {
    float: left;
    margin-left: 8px;
    font-size: 14px;
    padding-top: 4px;
    color: #999;
}
.goods-card {
  display: flex;
  flex-wrap: wrap;
}
.card:not(:nth-child(4n)) {
  margin-right: 20px;
}
.card {
  width: 250px;
  border: 1px solid rgb(223, 223, 223);
  padding: 10px;
  position: relative;
  margin-bottom: 25px;
}
.card .goodsImg {
  width: 230px;
  height: 220px;
  cursor: pointer;
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
</style>