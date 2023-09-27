<template>
    <div>
        <Nav></Nav>
        <div class="header">
            <img class="logo1"
                    src="@/assets/images/LOGO1.png"
                    alt="">
            <div class="title">支付列表</div>
            <Steps :current="2">
                <Step title="已完成" content="选择要购买的商品"></Step>
                <Step title="已完成" content="确认订单信息"></Step>
                <Step title="已完成" content="付款到支付宝"></Step>
            </Steps>
        </div>
        <div class="content">
            <div class="title">支付成功</div>
            <div class="card" v-for="item of goodsList" :key="item._id">
                <span class="time">{{createTime|dateFormat}}</span>
                <span>{{item.code}}</span>
                <div class="goods">
                    <img class="pic" :src="item.goodsImg" alt="">
                    <div class="goods-title">{{item.title}}</div>
                    <div class="label">买家已付款</div>
                </div>
                <div class="payMoney">
                    <span>实付款:</span>
                    <span class="price">{{item.price}}</span>元
                </div>
            </div>
             <Button type="primary" class="btn" @click="goHome()">返回首页</Button>
        </div>
        
    </div>
</template>

<script>
    export default {
        name:'Pay',
        data() {
            return {
                goodsList:[],
                createTime:this.$store.state.time
            }
        },
        mounted() {
            this.getList()
        },
        methods: {
            getList(){
                this.$store.state.list.forEach(item=>{
                    this.$http.get(`/getGoodsById?id=${item._id}`).then(res=>{
                        this.goodsList.push(res.data.result[0])
                    })
                })
            },
            goHome(){
                this.$router.push('/home')
            }
        },
    }
</script>

<style  scoped>
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
.ivu-steps{
    margin-top: 20px;
    width: 50%;
    margin-left: 50px;
}
.content{
    width: 950px;
    margin:20px auto;
}
.content .title{
    font-size: 20px;
    color: #333;
    font-weight: bold;
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
    top: 101px;
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
    top: -13px;
}
.btn{
    margin-top: 20px;
    margin-left: 860px;
}
</style>