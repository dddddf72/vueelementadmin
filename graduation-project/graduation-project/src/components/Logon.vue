<template>
  <div>
    <div v-if="userinfo==null">
        <Icon type="ios-contacts" class="contacts"/>
        <Button @click="value3= true" type="primary">登录</Button>
        <Drawer
            title="Create"
            v-model="value3"
            width="250"
            :mask-closable="true" 
            :styles="styles"
        >
            <Form method="POST" role="form" action="/m1/doLogon"> 
                    <Col span="12">
                        <FormItem label="账号：" label-position="top">
                            <input v-model="numvalue" placeholder="请输入账号">
                            </input>
                        </FormItem>
                    </Col>
                    <Col span="12">
                        <FormItem label="密码：" label-position="top">
                            <input v-model="pwdvalue" placeholder="请输入密码">
                            </input>
                        </FormItem>
                    </Col>
                <div>没有账号?</div>
                <div>
                  <span>点击这里:</span>
                  <Button type="warning" @click="register">注册</Button>
                </div>
            </Form>
            <div class="demo-drawer-footer">
                <Button style="margin-right: 8px" @click="value3 = false">退出</Button>
                <Button type="primary" @click="create?onSumbit():closable()" v-model="value3">登录</Button>
            </div>
        </Drawer> 
    </div>
    <div v-else="userinfo!=null">
      <img :src="indexuserinfo.avatar"  @click="value2 = true" type="primary" class="userimg"><span class="user-center">用户中心</span>
      <Drawer title="用户信息" placement="left" :closable="false" v-model="value2">
        <div class="drawer">
          <div><span>头像：</span><img :src="indexuserinfo.avatar" class="dearer-img"></div>
          <div class="user-name"><span>昵称：</span>{{indexuserinfo.name}}</div>
          <div><span>账号：</span>{{indexuserinfo.username}}</div>
          <div><span>密码：</span>{{indexuserinfo.pwd}}</div>
          <div><span>年龄：</span>{{indexuserinfo.age}}</div>
          <div><span>性别：</span>{{indexuserinfo.sex}}</div>
          <div><Button type="success" @click="userEnter">用户中心</Button></div>
        </div>
      </Drawer>
    </div> 
  </div>
</template>

<script>
import {getAnime} from '../api/request'
  export default {
    data () {
            return {
                value2:false,
                value3: false,
                numvalue:"",  //1.输入账号
                pwdvalue:"", //1.输入密码
                styles: {
                    height: 'calc(100% - 55px)',
                    overflow: 'auto',
                    paddingBottom: '53px',
                    position: 'static',
                    backgroundColor:'#f7c0d3',
                    display:'block'
                },
                create:true ,
                userinfo:"" ,//获取的缓存
                indexuserinfo:""
            }
        },
        mounted() {
          this.userinfo = this.$cookies.get('user');
          var username = this.userinfo.usernum;
          this.http({
            method:"get",
            url:`http://124.71.180.178:8001/edit?username=${username}`
           }).then(res=>{
            this.indexuserinfo = res.data.res[0];
            // console.log(res.data.res[0]);
          }).catch(err=>{
           console.log(err);
          })
        },
        methods: {
          //登录
          onSumbit(){
          var num = this.numvalue;
          var pwd = this.pwdvalue;
           this.http({
            method:"post",
            url:`http://124.71.180.178:8001/doLogon`,
            data:{
              num,
              pwd
            }
          }).then(res=>{
            var usernum = res.data.data[0].username;
            var userpwd = res.data.data[0].pwd;
            if(usernum && userpwd){
            this.$router.push({
              path:'/User',
            })
            var user = {usernum,userpwd};
            this.$cookies.set('user',user)
          }
          }).catch(err=>{
            this.closable()
          })
          },
          //错误提示
           closable () {
                this.$Message.info({
                    content: '用户名或密码错误',
                    duration: 10,
                    closable: true
                });
           },
           //注册
           register(){
             this.$router.push({
               path:'/rist'
             })
           },
           userEnter(){
             this.$router.push({
               path:'/User'
             })
           }
        },
  }
</script>

<style scoped>
.demo-drawer-footer{
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        border-top: 1px solid #e8e8e8;
        padding: 10px 16px;
        text-align: right;
        background: #fff;
    }
    input {
      padding-left: 20px;
      outline: none;
      border: none;
      border-radius: 20px;
    }
    .userimg {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      vertical-align: middle;
    }
    .user-center {
      color: #e9849c;
      font-size: 14px;
    }
    .dearer-img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      vertical-align: middle;
    }
    .drawer>div {
      padding-top: 20px;
    }
    .drawer>div:nth-child(7){
      padding-top: 100px;
      text-align: center;
    }
</style>