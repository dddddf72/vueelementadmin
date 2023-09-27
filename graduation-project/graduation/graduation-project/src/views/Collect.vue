<template>
    <div class="container">
        <Nav></Nav>
        <div class="collect-nav">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>个人中心</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="user">
            <img class="avatar" src="@/assets/images/avatar.jpg" alt="">
            <div class="user-right">
                <div class="user-name">登录名：{{this.$store.state.username}}</div>
                <div>描述：这个人很懒，什么都没留下。</div>
                <div>
                    <span>我的收货地址:</span>
                    <div class="location">
                        <div class="address">
                            <span class="icon"><i class="el-icon-location-outline"></i>寄送至  </span>{{totalAddress}}
                        </div>
                        <Button type="info" ghost @click="handleChange">修改收货地址</Button>
                    </div>

                    <div v-if="isShow">
                        <div id="dlgproject">
                            <span class="labels">选择地区:</span>
                            <Cascader :data="data" v-model="value1"></Cascader>
                        </div>
                        <div class="detail">
                            <span class="labels">详细地址:</span>
                            <el-input
                            type="textarea"
                            :rows="2"
                            placeholder="请输入详细地址"
                            v-model="textarea">
                            </el-input>
                        </div>
                        <div>
                            <span>收货人姓名:</span>
                            <el-input
                            placeholder="请输入内容"
                            v-model="name">
                            </el-input>
                        </div>
                        <div>
                            <span>收货人电话:</span>
                            <el-input
                            placeholder="请输入内容"
                            v-model="phoneNum">
                            </el-input>
                        </div>
                        <Button type="primary" style="margin-top:10px;" @click="submitAddress">确认修改</Button>
                    </div>
                </div>
            </div>
        </div>
        <div class="title">
            <div class="discount">我的特卖</div>
            <div class="eng">DISCOUNT</div>
        </div>
        
        <template>
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane class="label" label="我的收藏" name="first">
                    <div class="goods-card">
                        <div class="card"
                            v-for="item of collectList"
                            :key="item._id">
                            <router-link :to="{path:'detail',query:{id:item._id,table:item.table}}">
                            <img class="goodsImg"
                                :src="item.goodsImg"
                                @click="addHistory(item._id)">
                            </router-link>
                            <h2 class="price">￥{{item.price}}</h2>
                            <a href="#" class="goods-title">{{item.title}}</a>
                            <p class="store">{{item.store}}</p>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="我的足迹" name="second">
                    <div class="goods-card">
                        <div class="card"
                            v-for="item of historyList"
                            :key="item._id">
                            <router-link :to="{path:'detail',query:{id:item._id}}">
                            <img class="goodsImg"
                                :src="item.goodsImg"
                                alt="">
                            </router-link>
                            <h2 class="price">￥{{item.price}}</h2>
                            <a href="#" class="goods-title">{{item.title}}</a>
                            <p class="store">{{item.store}}</p>
                            
                            <el-row>
                                <el-button class="join-cart"
                                        type="success"
                                        @click="addCart(item._id)">加入购物车</el-button>
                                <el-button plain icon="el-icon-delete" type="danger"
                                 @click="deleteHistory(item._id)">删除记录</el-button>
                            </el-row>
                        </div>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </template>
        
    </div>
</template>

<script>
import Nav from '../components/Nav'
export default {
    name:'Collect',
    components:{
        Nav
    },
    data(){
        return{
            collectList:"",
            activeName:'first',
            historyList:"",
            username:this.$store.state.username,
            value1:[],
            data:[],
            project:{
                projectProvince:'',
                projectCity:"",
                projectCounty:""
            },
            cityName:"",
            textarea:"",
            totalAddress:"",
            name:"",
            phoneNum:"",
            isShow:false
        }
    },
    mounted(){
        this.value1 = [this.project.projectProvince,this.project.projectCity,this.project.projectCounty]
        this.getCollect()
        this.getCity()
        this.addState()
        this.getAddress()
    },
    computed:{
        isLoading(){
            return this.$store.state.username?true:false
        }
    },
    watch: {
        value1: function(newVal, oldVal) {
            this.project.projectProvince = newVal[0]
            this.project.projectCity = newVal[1]
            this.project.projectCounty = newVal[2]
            this.getCityName(newVal[0],newVal[1],newVal[2])
        },
        totalAddress:function(value){
            this.addState()
        }
    },
    methods:{
        handleChange(){
            this.isShow = !this.isShow
        },
        getAddress(){
            var username = this.username
            this.$http.get(`/getAddress?username=${username}`).then(res=>{
                this.totalAddress = res.data.data[0].address[0]
            })
        },
        getCity(){
            this.$http.get('/getCity').then(res=>{
                this.data = res.data.data
            })
        },
        getCityName(province,city,country){
            this.$http.get( `/getCityName?province=${province}&city=${city}&country=${country}`).then(res=>{
                this.cityName = res.data.res
            })
        },
        submitAddress(){
            this.totalAddress = this.cityName+' '+this.textarea+' ('+this.name+'收) '+this.phoneNum
            this.isShow = !this.isShow
        },
        //  添加到历史记录中
        addHistory(id){
             var username = this.username
            this.$http.post('/history',{id,username})
        },
        getCollect(){
            var username = this.username
            this.$http.get(`/collectList?username=${username}`).then(res=>{
                this.collectList = res.data.result
            })
        },
        getHistory(){
            var username = this.username
            this.$http.get(`/getHistory?username=${username}`).then(res=>{
                this.historyList = res.data.result
            })
        },
        handleClick(tab,event){
            var id = event.target.id
            if(id =='tab-second'){ 
                this.getHistory()
            }  
        },
        // 删除历史记录
        deleteHistory(id){
            this.$confirm('此操作将会删除此条历史记录, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                var username = this.username
                this.$http.post('/delHistory',{id,username}).then(res=>{
                    this.getHistory()
                })
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                })         
            });
        },
        addCart(id){
            var username = this.username
            this.$http.post('/addCart',{id,username}).then()
        },
        addState(){
            this.$store.commit('setAddress',this.totalAddress)
        },
        
    }
}
</script>

<style>
.container .user{
    margin-bottom: 20px;
    display: flex;
    border:1px solid #eee;
}
.container .avatar{
    width: 90px;
    height: 90px;
    border-radius: 50%;
    margin-left: 70px;
    margin-right: 50px;
    margin-top: 30px;
}
.container .user-right{
    color: #666;
    font-size: 15px;
}
.container .user-right>div{
    margin-top: 10px;
    margin-bottom: 20px;
}
.container .title{
    height: 174px;
    padding-top: 30px;
    background: url(http://ugc.vipstatic.com/img/fav/bg-fav-banner.png?a6ffc2f8) center top no-repeat;
}
.container .discount{
    margin-left: 60px;
    font-size: 38px;
}
.container .eng{
    margin-left: 60px;
    margin-top: 10px;
    font-size: 18px;
    letter-spacing:7px;
}
.container .collect-nav{
    margin-left: 80px;
    padding:20px 0;
}
.container .el-tabs__nav {
    margin-left: 200px  !important;
}

.container .goods-card {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  padding:0 100px;
}
.container .card:not(:nth-child(4n)) {
  margin-right: 50px;
}
.container .card {
  width: 248px;
  border: 1px solid rgb(223, 223, 223);
  padding: 10px;
  position: relative;
  margin-bottom: 25px;
}
.container .card .goodsImg {
  width: 200px;
  height: 200px;
}
.container .card .price {
  margin-top: 10px;
  color: #f57272;
  margin-bottom: 5px;
}
.container .card .goods-title {
  text-decoration: none;
  color: #333;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.container .join-cart {
  margin-left: 5px;
  height: 40px;
  width: 85px;
  padding: 5px;
}
.container .card .store {
  margin-left: 5px;
  font-size: 14px;
  color: #666;
}
.container .user #dlgproject{
    display: flex;
    margin-top: 10px;
}
.container .detail{
    margin-top: 10px;
}
.container .labels{
    padding-top: 4px;
    margin-right: 20px;
}
.container .user .address{
    padding:5px 10px;
    border: 1px solid #ff4400;
    background-color: #fff0e8;
    margin-right: 20px;
}
.container .icon{
    color: #ff4400;
}
.container .location{
    display: flex;
}
.container .logout{
    height: 40px;
    margin-top: 10px;
    margin-left: 50px;
}
</style>