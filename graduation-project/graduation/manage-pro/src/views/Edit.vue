<template>
    <div class="edit">
        <div class="header">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>商品管理</el-breadcrumb-item>
                <el-breadcrumb-item>修改商品</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="content">
            <el-form ref="form" :model="form" label-width="100px">
                <el-form-item label="商品名称">
                    <el-input v-model="form.title"></el-input>
                </el-form-item>
                <el-form-item label="商品价格">
                    <el-input v-model="form.price"></el-input>
                </el-form-item>
                <el-form-item label="店铺名字">
                    <el-input v-model="form.store"></el-input>
                </el-form-item>
                <el-form-item label="是否收藏">
                    <el-switch v-model="form.collected"></el-switch>
                </el-form-item>
                <el-form-item label="商品数量">
                    <el-input-number v-model="form.num" :min="1" :max="10" label="描述文字"></el-input-number>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">修改</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form:{}
            }
        },
        methods: {
            onSubmit() {
                this.$http.post('/manage/doEdit',this.form).then((res)=>{
                    if(res.data.code==200){
                        this.$message.success('修改商品信息成功！')
                        this.$router.back()
                    }else{
                        this.$message.error('修改失败！');
                    }
                })
            }
        },
        mounted() {
            this.form = this.$route.query
        },
    }
</script>

<style scoped>
.header{
    padding:20px;
}
.el-input{
    width: 800px;
}
.content{
    margin-top: 20px;
}
</style>