<template>
  <div>
    <div class="user-nav">
      <div>
        <img src="../images/logo.png">
        <span>桜アニメ</span>
      </div>
      <div><router-link to="/home">首页</router-link></div>
      <div><router-link to="" @click.native="esc">退出</router-link></div>
    </div>
    <div class="user-top">
      <img src="../images/02.jpg">
      <div class="user-name">mumu</div>
    </div>
    <div class="us">
      <el-tabs :tab-position="tabPosition" style="height: 200px">
      <el-tab-pane label="用户管理">
        <div class="user-gl">
          <div class="user-img">
            <div><span>头像：</span><img :src="userinfo.avatar"></div>
            <div class="user-name"><span>昵称：</span>{{userinfo.name}}</div>
          </div>
          <div class="info">
            <div><span>账号：</span>{{userinfo.username}}</div>
            <div><span>密码：</span>{{userinfo.pwd}}</div>
            <div><span>年龄：</span>{{userinfo.age}}</div>
            <div><span>性别：</span>{{userinfo.sex}}</div>
          </div>
          <div><Button type="warning" @click="onClick">修改</Button></div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="我的收藏">
        <div v-for="item of collects" :key="item.id" class="us-sc">
          <div>
            {{item.title}}
          </div>
          <div><Button type="error" @click="deteleClick(item.title)">删除</Button></div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="我的评论">我的评论</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>
    </div>
  </div>
</template>

<script>
import '../css/User.css'
export default {
  inject:['reload'],
  data() {
    return {
      tabPosition: 'left',
      userinfo:"",
      collects:[]
    };
  },
  mounted() {
      var cookie = this.$cookies.get("user");
      var username = cookie.usernum;
      //用户管理--收藏
      this.http({
        method:"get",
        url:`http://124.71.180.178:8001/edit?username=${username}`
      }).then(res=>{
        this.collects = res.data.res[0].collect
        this.userinfo = res.data.res[0];
      }).catch(err=>{
        console.log(err);
      })
  },
  methods: {
    onClick(){
      var username = this.userinfo.username;
      this.$router.push({
        path:'/rist',
        query:{
          username
        }
      })
    },
    esc(){
    this.$cookies.remove("user")
    this.$router.push({
      path:'/'
    })
  },
  deteleClick(value){
    console.log(value);
    var cookie = this.$cookies.get("user");
    var username = cookie.usernum;
    console.log(username);
    var title = value
    this.http({
      method:"post",
      url:`http://124.71.180.178:8001/delete?`,
      data:{
        title,username
      }
    })
    this.reload()
  }
  },
};
</script>

<style scoped>
</style>