<template>
    <div>
        <Nav></Nav>
        <div class="header">
            <img class="logo1"
                    src="@/assets/images/LOGO1.png"
                    alt="">
            <div class="title">购物袋</div>
            <div>
                <ul>
                    <li>
                        <span class="icon1 small-icon"></span>
                        <span>100%正品保证</span>
                    </li>
                    <li>
                        <span class="icon2 small-icon"></span>
                        <span>七天无理由放心退</span>
                    </li>
                    <li>
                        <span class="icon3 small-icon"></span>
                        <span>限时抢购</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="shopcart-nav">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>购物车</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="content">
            <div class="line"></div>
            <div class="title">商品列表</div>
            <div class="table">
                <ul class="table-title">
                    <li class="btn-item">
                        <input type="checkBox" @click="handleCheckAllChange(checkAll)" :checked="checkAll">全选
                    </li>
                    <li class="product-item">商品</li>
                    <li class="price-item">单价</li>
                    <li class="num-item">数量</li>
                    <li class="total-item">总价</li>
                    <li class="actions-item">操作</li>
                </ul>
                <template>
                <ul class="goodsCard">
                    <li class="item" v-for="item of cart" :key="item._id">
                        <div class="item-check">
                            <input type="checkBox" :checked="item.isChecked" @click="handleCheckedGoodsChange(item._id)">
                            <div class="goods">
                                <img class="goodsImg" :src="item.goodsImg" alt="">
                                <div class="goods-name">{{item.title}}</div>
                            </div>
                            <div class="price-item" style="margin-left:30px; line-height:72px;">
                                {{item.price}}元 
                            </div>
                            <span class="goods-num">
                                <el-input-number v-model="item.num" :min="1" :max="10" @change="handleChangeNum(item._id)" label="描述文字" size="small"></el-input-number>
                            </span>
                            <span class="allPrice total-item" style="position:absolute; left:75%;line-height:72px; text-align: center;">{{item.allPrice}}元</span>
                            <div class="action actions-item">
                                <el-button type="danger" class="delete" icon="el-icon-delete" circle
                                @click="deleteCart(item._id)"></el-button>
                            </div>
                        </div>
                    </li>
                    <div class="order-wrap clearfix">
                        <div class="cart-tip">
                            <a  href="/#/home">
                             <el-button  type="primary" round>继续购物</el-button>
                            </a>
                            <span class="total">
                            共 <span> {{cart.length}} </span>件商品，已选择 <span>{{checkedGoods.length}} </span>件
                            </span>
                        </div>
                        <div class="fr">
                            <span class="allPrice">
                            合计：<span>{{total}}</span>元
                            </span>
                            <router-link to="/order">
                                <el-button class="pay btn" @click="addState(total,checkedGoods)">去结算</el-button>
                            </router-link>
                        </div>
                    </div>
                </ul>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import Nav from '../components/Nav'
export default {
    name:'ShopCart',
    components:{
        Nav
    },
    data(){
        return{
            checkAll: false,
            checkedGoods:[],
            cart:"",
            username:this.$store.state.username
        }
    },
    mounted(){
        this.getCart()
    },
    computed:{
        total: function () {
            var total = 0;
            if(this.checkedGoods.length==0){
                total = 0
            }
            for (var i = 0; i < this.checkedGoods.length; i++) {
                total += this.checkedGoods[i].price * this.checkedGoods[i].num;
            }
            return total
        },
    },
    methods:{
        getCart(){
            var username = this.username
            this.$http.get(`/getCart?username=${username}`).then(res=>{
                res.data.result.forEach(item=>{
                    item.allPrice = Number(item.num*item.price).toFixed(2)
                    item.isChecked = false
                })
                this.cart = res.data.result
            })
        },
        handleCheckAllChange(val) {
            val = !val
            this.checkAll = val
            for(var i=0;i<this.cart.length;i++){
                this.cart[i].isChecked = val
            }
            var arr = this.cart.filter(item=>{
                return item.isChecked
            })
            this.checkedGoods = arr
        },
        handleCheckedGoodsChange(id) {
            var obj = this.cart.find(item=>{
                return item._id==id
            })
            obj.isChecked = !obj.isChecked
            var arr = this.cart.filter(item=>{
                return item.isChecked
            })
            this.checkedGoods = arr
        },
        handleChangeNum(val) {
            this.cart.filter((item) => {
                if (item._id == val) {
                    item.allPrice =Number(item.num*item.price).toFixed(2)
                }
            });
        },
        deleteCart(id){
            var username = this.username
            var data = {id,username}
            this.$http.post('/deleteCart',data).then(res=>{
                var arr = this.cart.filter(item=>item._id!=id)
                this.cart = arr
            })
        },
        addState(total,checkedGoods){
            var createTime = new Date()
            this.$store.commit('setState',{
                total,
                checkedGoods,
                createTime
            })
        }
    }
    
}
</script>

<style scoped>
.logo1 {
  width: 130px;
  height: 90px;
  margin-right: 20px;
  margin-left: 200px;
}
.header{
    display: flex;
    border-bottom: 2px solid #ED3D5D;
}
.header .title{
    line-height: 80px;
    font-size: 38px;
}
.header ul{
    list-style: none;
    margin-left: 200px;
    display: flex;
}
.header ul li{
    margin-right: 60px;
    position: relative;
    margin-top: 30px;
}
.icon1{
    background-position: -587px -145px;
    left: -30px;
}
.small-icon{
    position: absolute;
    background-image: url(//shop.vipstatic.com/v2/dist/front/biz/cart/asset/img/te5/commons/sprites-hash-29a8cdc6.png);
    width: 20px;
    height: 20px;
    display: inline-block;
    margin-right: 12px;
}
.icon2{
    background-position: -432px -253px;
    left: -27px;
}
.icon3{
    background-position: -587px -169px;
    left: -30px;
}
.shopcart-nav{
    margin-left: 67px;
    margin-top: 20px;
}
.content{
    width: 950px;
    margin:0 auto;
    /* border:1px solid #666; */
    padding:20px 10px;
    position: relative;
}
.line{
    width:951px;
    height: 1px;
    border-bottom: 1px solid #999;
    position: absolute;
    top: 53px;
}
.content .title{
    text-align: center;
    width:100px;
    height: 31px;
    color: #ED3D5D;
    border-bottom: 3px solid #ED3D5D;
}
.table{
    width: 950px;
    height: 40px;
    background-color: #f9f9f9;
}
ul{
    list-style: none;
}
.table .table-title{
    border: 1px solid #e0e0e0;
    height: 38px;
    line-height: 38px;
    display: flex;
}
.table .table-title li{
    text-align: center;
}
.btn-item{
    width: 92px;
}
.product-item{
    width: 340px;
}
.price-item{
    width: 210px;
}
.num-item{
    width: 150px;
}
.total-item{
    width: 150px;
}
.actions-item{
    width: 150px;
}
.goodsCard{
    padding: 0;
}
.item{
    border: 1px solid #e0e0e0;
    width: 950px;
    padding:5px 50px;
    height: 90px;
    box-sizing: border-box;
} 
.item input{
    margin-top: 33px;
}
.item-check{
    display: flex;
}
.goods{
    display: flex;
    height: 100px;
}
.goodsImg{
    margin-left: 70px;
    width: 50px;
    height: 50px;
    margin-right: 10px;
    margin-top: 10px;
}
.goods .goods-name{
    width: 220px;
    height: 100px;
    color: black;
    font-size: 13px;
}
.item-check{
    position: relative;
}
.goods-num{
    position: absolute;
    line-height: 60px;
    left: 61%;
}
.action{
    position: absolute;
    line-height: 60px;
    left: 96%;
   
}
.order-wrap{
    margin-top: 20px;
}
.total>span{
    color: chocolate;
    font-size: 16px;
}
.total{
    font-size: 15px;
    margin-left: 20px;
}
.fr{
    float: right;
}
.allPrice{
    color: red;
    display: inline-block;
    margin-right: 30px;
}
.pay{
    background-color: #f8531c;
    color: white;
}
</style>