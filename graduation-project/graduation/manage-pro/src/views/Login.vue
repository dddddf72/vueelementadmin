<template>
    <div class="login" >
         <div class="box">
         <h2>登录</h2>
          <form :model="ruleForm">
             <div class="inputbox">
                 <input type="text" name="username" v-model="ruleForm.username" required="">
                 <label>用户名</label>
             </div>
             <div class="inputbox">
                 <input type="password" name="pwd" v-model="ruleForm.pwd"  required="">
                 <label>密码</label>
             </div>
             <el-button type="primary" @click="submit(ruleForm)">提交</el-button>
         </form>
     </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ruleForm:{
                    username:'',
                    pwd:''
                }
            }
        },
        methods: {
            submit(value){
                this.$http.post('/manage/login',value).then((res)=>{
                // this.$http.post('/api/doLogin',value).then((res)=>{
                    if(res.data.code==200){
                        this.$message.success('登录成功')
                        this.$router.push('/home');
                    }else{
                        this.$message.error('用户名或密码错误');
                    }
                })
            }
        },
    }
</script>

<style scoped>
.login{
    background:url("../assets/images/bg.jpg");
    background-size:100% 100%;
    height: 100%;
    position: fixed;
    width: 100%;
}
.box{
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    width:450px;
    padding:50px;
    background: rgba(0,0,0,.5);
    box-sizing:border-box;
    box-shadow: 0px 10px 25px rgba(0,0,0,.5);
    border-radius:15px;
 }
.box h2{
    margin:0 0 30px;
    padding:0;
    color: #fff;
    text-align:center;
}
.box .inputbox{
    position:relative;
}
.box .inputbox input{
    width: 100%;
    padding:10px 0;
    font-size:16px;
    color:#fff;
    letter-spacing: 1px;
    margin-bottom: 30px;
    border:none;
    border-bottom: 1px solid #fff;
    outline:none;
    background: transparent;
}
 .box .inputbox label{
    position:absolute;
    top:0px;
    left:0px;
    padding:10px 0;
    font-size: 16px;
    color:#fff;
    pointer-events:none;
    transition:.5s;
 }
 .box .inputbox input:focus ~ label,
 .box .inputbox input:valid ~ label
 {
    top:-18px;
    left:0;
    color:#03a9f4;
    font-size:14px;
 }
 .box input[type="submit"]
 {
    background: transparent;
    border:none;
    outline:none;
    font-size: 16px;
    color:#fff;
    background: #03a9f4;
    padding:10px 20px;
    cursor: pointer;
    border-radius:10px; 
 }
</style>