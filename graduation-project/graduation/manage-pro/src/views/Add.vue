<template>
  <div>
    <div class="header">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>商品管理</el-breadcrumb-item>
        <el-breadcrumb-item>添加商品</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-card>
      <!-- 提示区域 -->
      <el-alert title="添加商品信息"
                type="info"
                center
                show-icon
                :closable="false">
      </el-alert>
      <el-steps :space="200"
                :active="activeSteps"
                finish-status="success"
                align-center>
        <el-step title="商品信息"></el-step>
        <el-step title="商品属性"></el-step>
        <el-step title="商品信息预览"></el-step>
        <el-step title="完成"></el-step>
      </el-steps>

      <el-form :model="addForm"
               :rules="addFormRules"
               ref="addFormRef"
               label-width="100px"
               label-position="top">
        
      <el-tabs v-model="activeIndex"
                 :tab-position="'left'"
                 :before-leave="TabsBeforeLeave"
                 @tab-click="TabClicked">
        <el-tab-pane label="基本信息" :model="addForm"
                    name="0">
            <el-form-item label="商品名称" prop="title">
                <el-input v-model="addForm.title"></el-input>
            </el-form-item>
            <el-form-item label="商品价格" prop="price">
                <el-input v-model="addForm.price" type="number"></el-input>
            </el-form-item>
            
            <el-form-item label="商品数量" prop="num">
                <el-input v-model="addForm.num" type="number"></el-input>
            </el-form-item>
            <el-form-item label="商品分类" prop="table">
                <el-input v-model="addForm.table"></el-input>
            </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="商品属性" :model="addForm"
                    name="1">
            <el-form-item label="店铺名称" prop="store">
                <el-input v-model="addForm.store"></el-input>
            </el-form-item>
            <el-form-item label="商品图片">
               <el-upload action="http://192.168.4.93:4000/manage/upLoad"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        list-type="picture"
                        :on-success="handleSuccess">
                <el-button size="small"
                            type="primary">点击上传</el-button>
                <div slot="tip"
                    class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
            </el-form-item>
            <el-form-item label="是否收藏" prop="title">
               <el-switch v-model="addForm.collected"></el-switch>
            </el-form-item>
            
        </el-tab-pane>
        <el-tab-pane label="商品信息预览" :model="addForm"
                    name="2">
            <div class="goodsInfo">
                <div>
                    <img class="goodsImg" :src="addForm.goodsImg" alt="">
                </div>
                <div class="content">
                    <div class="goodsName">{{addForm.title}}</div>
                    <div class="store">店铺名  <span class="tag">{{addForm.store}}</span></div>
                    <div class="price">
                        价格  <span class="sell-price">￥{{addForm.price}}</span>
                    </div>
                    <div>是否收藏 
                        <el-switch v-model="addForm.collected"></el-switch>
                    </div>
                </div>
            </div>
            <el-button type="primary" @click="handleAdd">确定提交</el-button>
        </el-tab-pane>
        </el-tabs>
      </el-form>

    </el-card>

    <el-dialog title="图片预览"
               :visible.sync="previewVisible"
               width="50%">
      <img :src="previewPath"
           alt=""
           class="preciewImg">
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeSteps: 0,
      activeIndex: '0',
      previewPath: '',
      previewVisible: false,
      addForm: {
        title: '',
        price: '',
        num: '',
        table: '',
        store: '',
        goodsImg: '',
        collected: false
      },
      addFormRules: {
        title: [
          { required: true, message: '请输入商品名称', trigger: 'blur' }
        ],
        price: [
          { required: true, message: '请输入商品价格', trigger: 'blur' }
        ],
        num: [
          { required: true, message: '请输入商品数量', trigger: 'blur' }
        ],
        table: [
          { required: true, message: '请选择商品分类', trigger: 'blur' }
        ],
        store: [
          { required: true, message: '请输入店铺名称', trigger: 'blur' }
        ]
      },
    }
  },
  methods: {
    TabsBeforeLeave (activeName, oldActiveName) {
      var value = false
      if (Boolean(this.addForm.title) == true &&
        Boolean(this.addForm.price) == true &&
        Boolean(this.addForm.num) == true && Boolean(this.addForm.table) == true) {
        value = true
      }
      if (oldActiveName === '0' && value == false) {
        this.$message.error('请填写商品基本信息！')
        return false
      }
    },
    TabClicked () {
      if (this.activeIndex == '1') {
        this.activeSteps = 1
      } else if (this.activeIndex == '2') {
        this.activeSteps = 2
      }
    },
    handleAdd () {
      this.$http.post('/manage/doAdd', this.addForm).then(() => {
        console.log(this.addForm);
        this.$message.success('添加商品成功！')
        this.$router.push('/home')
      })
    },
    handleRemove () {
      this.addForm.goodsImg=''
    },
    handlePreview (file) {
      console.log(file);
      this.previewPath = file.response.url
      this.previewVisible = true
    },
    // 监听 图片上传成功的
    handleSuccess (response) {
     this.addForm.goodsImg = response.url
    console.log(this.addForm);
    },
  },
}
</script>

<style scoped>
.header {
  padding: 10px;
}
.el-card {
  width: 1080px;
}
.el-steps {
  margin-top: 20px;
}
.el-form {
  margin-top: 10px;
}
.goodsInfo {
  display: flex;
}
.goodsInfo .content {
  margin-top: 24px;
  margin-left: 20px;
}
.goodsInfo .content > div {
  font-size: 14px;
  color: #666;
}
.goodsInfo .content .goodsName {
  font-size: 20px;
}
.goodsImg{
    width: 200px;
}
.goodsInfo .content div span {
  margin-left: 20px;
}
.store {
  margin-top: 15px;
}
.tag {
  color: #646fb0;
  font-size: 14px;
  margin-left: 20px;
  cursor: pointer;
}
.price {
  width: 300px;
  margin-top: 10px;
  line-height: 70px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #eee;
  font-size: 14px;
  color: #555;
  margin-bottom: 10px;
}
.price span {
  color: rgb(218, 23, 23);
  font-size: 30px;
}
.preciewImg {
  width: 100%;
}
</style>