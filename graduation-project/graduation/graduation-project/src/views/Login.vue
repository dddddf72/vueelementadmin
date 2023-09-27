<template>
  <div class="home">
    <div class="header">
        <div class="logo">
            <img src="@/assets/images/LOGO1.png" alt="">
            <div class="title">用户登录</div>
            <router-link to="/register">
                <div class="register">免费注册</div>
            </router-link>
        </div>
    </div>
    <div class="form">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
            <el-input v-model="ruleForm.username" ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pwd">
            <el-input  type="password" v-model="ruleForm.pwd" ></el-input>
        </el-form-item>
        <el-form-item class="button">
            <el-button type="warning" size="medium" @click="submitForm(ruleForm)">登录</el-button>
            <el-button size="medium" @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
        </el-form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
     var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('密码不能为空'));
        }else{
          // 数字、大小写字母，特殊字符组成长度不能小于6
          var reg =  /^(?![A-z0-9]+$)(?=.[^%&',;=?$\x22])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}$/
          if(!reg.test(value)){
            callback(new Error('密码必须由数字、大小写字母、特殊字符组成，且长度不能小于6'))
          }else{
            callback()
          }
        } 
    }
    return {
      ruleForm:{
        username:'',
        pwd:''
      },
      rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 2, max: 6, message: '长度在 2 到 6 个字符', trigger: 'blur' }
          ],
          pwd:[
            {required:true,validator: validatePass}
          ]
      }
    }
  },
  methods: {
    submitForm(value) {
        this.$http.post('/doLogin',value).then((res)=>{
            if(res.data.code==200){
                this.$store.commit('setUserName',value.username)
                this.$message.success('登录成功')
                this.$router.push('/home');
            }else{
                this.$message.error('用户名或密码错误');
            }
        })
    },
    resetForm(formName) {
    this.$refs[formName].resetFields();
    }
  }
}
</script>
<style scoped>
.el-input{
    width: 450px;
}
.el-form-item{
    margin-bottom: 40px;
}
.header{
    height: 90px;
    margin-bottom: 30px;
    box-shadow: 0px 3px 5px rgba(216, 216, 216, 0.918);
}
.logo{
    width: 1200px;
    margin:0 auto;
    display: flex;
    padding-bottom: 5px;
}
.logo img{
    width: 127px;
}
.title{
    line-height: 90px;
    margin-left: 40px;
}
.form{
    width: 600px;
    margin:60px auto;
}
.register{
    line-height: 90px;
    margin-left: 700px;
}
.button{
    width: 500px;
    text-align: center;
}
.el-button{
    margin-right: 20px;
}
</style>