<template>
    <div>
        <Nav></Nav>
        <div class="header">
            <img class="logo1"
                    src="@/assets/images/LOGO1.png"
                    alt="">
            <div class="title">订单列表</div>
            <Steps :current="1">
                <Step title="已完成" content="选择要购买的商品"></Step>
                <Step title="进行中" content="确认订单信息"></Step>
                <Step title="待进行" content="付款到支付宝"></Step>
            </Steps>
        </div>
        <div class="order-nav">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{path:'/shopCart'}">购物车</el-breadcrumb-item>
                <el-breadcrumb-item>订单列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="card" v-for="item of goodsList" :key="item._id">
            <span class="time">{{createTime|dateFormat}}</span> |
            <span>{{item.code}}</span> |
            <span>在线支付</span>
            <div class="payMoney">
                <span>应付金额:</span>
                <span class="price">{{item.price}}</span>元
            </div>
            <div class="goods">
                <img class="pic" :src="item.goodsImg" alt="">
                <div class="goods-title">{{item.title}}</div>
                <div class="label">未支付</div>
            </div>
        </div>
        <div class="address">
            <div class="title">确认收货地址：</div>
            <div class="box">
                <span class="icon"><i class="el-icon-location-outline"></i>寄送至  </span>{{this.$store.state.address}}
            </div>
        </div>
        <div class="btn">
            <el-button type="danger" plain round @click="canclePay">取消支付</el-button>
            <el-button type="warning" round @click="pay">去支付</el-button>
        </div>
    </div>
</template>

<script>
import Nav from '../components/Nav'
export default {
    name:"Order",
    components:{
        Nav
    },
    data(){
        return{
            goodsList:[],
            createTime:this.$store.state.time
        }
    },
    mounted(){
        this.getList()
    },
    methods:{
        getList(){
            this.$store.state.list.forEach(item=>{
                this.$http.get(`/getGoodsById?id=${item._id}`).then(res=>{
                    this.goodsList.push(res.data.result[0])
                    this.codeCount()
                })
            })
        },
        createNum(){
            var code = ''
            var codeLength = 10
            var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            for(let i=0;i<codeLength;i++){
                var index = Math.floor(Math.random()*9)
                code+=arr[index]
            }
            return code
        },
        codeCount(){
            this.goodsList.forEach(item=>{
                item.code = this.createNum()
            })
        },
        canclePay(){
            this.$confirm('你确定要取消支付吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '您已确定取消支付!'
                });
                this.$router.push('/shopCart')
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '请继续支付！'
                });          
            });
        },
        pay(){
            this.$router.push('/pay')
        }
    }
}
</script>

<style scoped>
.order-nav{
    margin-top: 20px;
    margin-left: 100px;
}
.logo1 {
  width: 130px;
  height: 90px;
  margin-right: 20px;
  margin-left: 100px;
}
.header{
    display: flex;
    padding: 10px 0;
    border-bottom: 2px solid #ED3D5D;
}
.header .title{
    line-height: 80px;
    font-size: 38px;
}
.card{
    width: 950px;
    margin:0 auto;
    border:1px solid #666;
    padding:20px 20px;
    margin-top: 30px;
    position: relative;
}
.card span{
    color: #333;
    font-size: 15px;
}
.payMoney{
    position: absolute;
    right: 37px;
    top: 21px;
}
.payMoney .price{
    font-size: 18px;
    padding: 0 10px;
}
.pic{
    width:50px;
    height: 50px;
    margin-right: 30px;
}
.goods{
    padding:10px 0;
    display: flex;
    position: relative;
}
.goods-title{
    width: 280px;
    height: 58px;
    font-size: 13px;
    overflow: hidden;
}
.label{
    color: red;
    font-size: 16px;
    position: absolute;
    right: 20px;
    top: 23px;
}
.btn{
    margin-top: 20px;
    margin-left: 920px;
}
.address{
    width: 950px;
    margin:20px auto;
}
.address .title{
    font-size: 16px;
    font-weight: bold;
    color: #333;
}
.address .box{
    padding:5px 10px;
    border: 1px solid #ff4400;
    background-color: #fff0e8;
    margin-right: 20px;
}
.box .icon{
    color: #ff4400;
}
.ivu-steps{
    margin-top: 20px;
    width: 50%;
    margin-left: 50px;
}
</style>