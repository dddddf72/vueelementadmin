<template>
    <!-- 头部标签栏 -->
    <div class="nav">
        <div class="welcome">欢迎来到湖大知行校园二手交易网！</div>
        <ul class="nav-right">
            <li>
              <a @click="handleLogout">退出登录</a>
            </li>
            <li>
              <router-link to="/shopCart">购物车</router-link>
            </li>
            <li>
                <router-link to="/collect">个人中心</router-link>
            </li>
            <li>
              <router-link to="/home">首页</router-link>
            </li>
             <li><a>欢迎,{{this.$store.state.username}}</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:"Nav",
        methods: {
          handleLogout(){
            this.$confirm('你确定要退出登录吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '退出登录成功!'
                });
                this.$http.post('/logout').then(()=>{
                    this.$router.push('/login')
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '您已取消！'
                });          
            }); 
          }
        },
    }
</script>

<style scoped>
.nav {
  height: 40px;
  line-height: 40px;
  padding-left: 20px;
  font-size: 14px;
  border-bottom: 1px solid #eee;
}
.welcome {
  float: left;
}
.nav .nav-right li {
  float: right;
  list-style: none;
  margin-right: 20px;
}
.nav .nav-right li a {
  text-decoration: none;
  color: #666;
}
.nav .nav-right li:hover a {
  display: block;
  color: #f57272;
  height: 38.5px;
  border-bottom: 2px solid #f57272;
}
</style>