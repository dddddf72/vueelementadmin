<template>
  <div class="home">
    <div class="header">
      <h4 style="margin-left:20px;">校园二手交易网后台管理系统</h4>
      <el-button type="danger" class="danger-btn" @click="logout">退出登录</el-button>
    </div>
    <div class="content">
      <div class="aside">
        <div class="title">
          <i class="el-icon-setting"></i>
          <span>商品管理</span>
        </div>
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          background-color="#222d32"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title" @click="handleClick('goodsList')">全部商品</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>手机</span>
            </template>
            <el-menu-item index="2-1" @click="handleClick('phone')">Apple</el-menu-item>
            <el-menu-item index="2-2" @click="handleClick('hwphone')">华为</el-menu-item>
            <el-menu-item index="2-3" @click="handleClick('oppo')">oppo</el-menu-item>
            <el-menu-item index="2-4" @click="handleClick('sanphone')">三星</el-menu-item>
            <el-menu-item index="2-5" @click="handleClick('vivo')">vivo</el-menu-item>
            <el-menu-item index="2-6" @click="handleClick('miphone')">小米</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>电脑</span>
            </template>
            <el-menu-item index="3-1" @click="handleClick('computer')">Apple</el-menu-item>
            <el-menu-item index="3-2" @click="handleClick('hwlaptop')">华为</el-menu-item>
            <el-menu-item index="3-3" @click="handleClick('lenovo')">联想</el-menu-item>
            <el-menu-item index="3-4" @click="handleClick('sanlaptop')">三星</el-menu-item>
            <el-menu-item index="3-5" @click="handleClick('hp')">惠普</el-menu-item>
            <el-menu-item index="3-6" @click="handleClick('milaptop')">小米</el-menu-item>
          </el-submenu>
          <el-menu-item index="4">
            <i class="el-icon-menu"></i>
            <span slot="title" @click="handleClick('cloth')">衣服</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-menu"></i>
            <span slot="title" @click="handleClick('caizhuang')">彩妆</span>
          </el-menu-item>
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>书籍</span>
            </template>
            <el-menu-item index="6-1" @click="handleClick('english')">外语学习</el-menu-item>
            <el-menu-item index="6-2" @click="handleClick('word')">字典词典/工具书</el-menu-item>
            <el-menu-item index="6-3" @click="handleClick('college')">大中专教辅</el-menu-item>
            <el-menu-item index="6-4" @click="handleClick('exam')">考试</el-menu-item>
            <el-menu-item index="6-5" @click="handleClick('primary')">中小学教辅</el-menu-item>
            <el-menu-item index="6-6" @click="handleClick('books')">文学/教程</el-menu-item>
          </el-submenu>
          <el-menu-item index="7">
            <i class="el-icon-document"></i>
            <span slot="title" @click="handleAdd">添加商品</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="right">
        <router-view v-if="isShow"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      isShow:false
    }
  },
  mounted() {
    this.getGoodsList(0,'goodsList')
    this.getGoodsTotal('goodsList')
    setTimeout(()=>{
      this.isShow=true
    },500)
  },
  methods: {
      handleClick(table){
        this.getGoodsList(0,table)
        this.isShow=false
        this.$router.push('/home/content')
        this.getGoodsTotal(table)
        setTimeout(()=>{
          this.isShow = true
        },10)
        
        
      },
      async getGoodsList(start,table){
        var res = await this.$http.get(`/api/data?start=${start}&table=${table}`)
        var goodsList = res.data.result
        this.$store.commit('setState',{goodsList,table})
      },
      async getGoodsTotal (table) {
        var url = `/api/goodsTotal?table=${table}`
        var res = await this.$http.get(url)
        var total = res.data.result.length
        this.$store.commit('setTotal',total)
      },
      logout(){
        this.$confirm('你确定要退出登录吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '退出登录成功!'
                });
                this.$http.post('/manage/logout').then(()=>{
                  this.$router.push('/login')
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '您已取消！'
                });          
          }); 
      },
      handleAdd(){
        this.$router.push('/home/add')
      }
    }
}
</script>

<style scoped>
.home{
  color: white;
  background-color: #222d32;
}
.header{
  overflow: hidden;
}
h4{
  float: left;
}
.danger-btn{
  height: 40px;
  float: right;
  margin-top: 10px;
  margin-right: 40px;
}
.title{
  height: 56px;
  width: 99.1%;
  background-color:#333744;
  color: white;
  line-height: 56px;
  padding-left: 20px;
  box-sizing: border-box;
}
.title span{
  margin-left: 20px;
  color:#ffd04b;
}
.aside{
  width: 220px;
  float: left;
  height:800px;
  background-color: #1e2a36;
}
.right{
  margin-top: 1px;
  float: left;
}
</style>
