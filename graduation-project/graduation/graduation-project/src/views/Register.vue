<template>
    <div>
        <div class="title">用户注册</div>
        <div class="form">
            <el-form :model="form" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="form.username" ></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pwd">
                    <el-input  type="password" v-model="form.pwd" ></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="form.checkPass"></el-input>
                </el-form-item>
                <el-form-item label="邮箱地址" prop="mail">
                    <el-input type="text" v-model="form.mail"></el-input>
                </el-form-item>
                <el-form-item label="电话" prop="phone">
                    <el-input type="text" v-model.number="form.phone"></el-input>
                </el-form-item>
                <el-form-item label="收货地址" prop="Address">
                    <el-input type="text" v-model.number="form.Address"></el-input>
                </el-form-item>
                <el-form-item class="button">
                    <el-button type="warning" size="medium" @click="handleRegister(form)">注册</el-button>
                    <el-button size="medium" @click="resetForm('form')">重置</el-button>
                </el-form-item>
            </el-form>
    </div>
    </div>
</template>

<script>
export default {
    name:'Register',
    data(){
        var validatePass = (rule,value, callback) => {
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
        var validateCheck = (rule,value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.form.pwd) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        }
        var validateMail = (rule,value,callback)=>{
            if (value === '') {
                callback(new Error('邮箱不能为空'));
            }else{
                var reg =  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
            if(!reg.test(value)){
                callback(new Error('请输入正确的邮箱地址'))
            }else{
                callback()
                }
            } 
        }
        var validatePhone=(rule,value,callback)=>{
            if (value === '') {
                callback(new Error('电话不能为空'));
            }else{
                var reg = /^1[3-9]\d{9}$/
            if(!reg.test(value)){
                callback(new Error('请输入正确的电话号码'))
            }else{
                callback()
                }
            }
        }
        return{
            form:{
                username:"",
                pwd:"",
                checkPass:'',
                mail:"",
                phone:"",
                Address:""
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名' ,trigger: 'blur'},
                    { min: 2, max: 6, message: '长度在 2 到 6 个字符', trigger: 'blur' }
                ],
                pwd:[
                    {required:true,validator: validatePass}
                ],
                checkPass: [
                    {required:true, validator: validateCheck}
                ],
                mail:[
                    {required: true,validator: validateMail}
                ],
                phone:[
                    {required: true,validator: validatePhone}
                ],
                Address:[
                    {required: true,message: '收货地址不能为空' ,trigger: 'blur'}
                ]
            }
        }
    },
    methods:{
        handleRegister(value){
            var {username,pwd,Address} = value
            this.$http.post('/doRegister',{username,pwd,Address}).then(res=>{
                if(res.data.code==200){
                    this.$store.commit('setUserName',value.username)
                    this.$message.success('注册成功')
                    this.$router.push('/home')
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
.title{
    width: 100px;
    margin:30px auto;
    font-size: 23px;
}
.el-input{
    width: 450px;
}
.btn{
    margin-left: 20px;
}
.form{
    width: 680px;
    margin:40px auto;
}
</style>