<template>
    <div>
        <Nav></Nav>
        <!-- 搜索框区域 -->
        <div class="logo">
            <img class="logo1"
                src="@/assets/images/LOGO1.png"
                alt="">
            <div class="search">
            <input class="input"
                    type="text"
                    placeholder="请输入你要搜索的商品"
                    v-model.trim="keyword"
                    @keyup.enter="handleSearch">
            <button class="btn-search" @click="handleSearch">搜索</button>
            </div>
        </div>
    </div>
</template>

<script>

import Nav from './Nav'
export default {
    name:"Header",
    components:{
      Nav
    },
    data(){
      return{
        keyword:"",
        goods:[]
      }
    },
    methods:{
      handleSearch(){
        var keyword = this.keyword
        var url = `/search?keyword=${keyword}`
        this.$http.get(url).then(res=>{
          this.goods = res.data.result
          this.$emit('handleSearch',this.goods)
        })
        
      }
    }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.container {
  padding: 20px;
}

.logo {
  display: flex;
}
.logo1 {
  width: 130px;
  margin-right: 300px;
  margin-left: 30px;
}
.search {
  width: 480px;
  height: 40px;
  overflow: hidden;
  margin-top: 20px;
  border: 2px solid #f57272;
  position: relative;
  border-radius: 20px;
}
.input,
.btn-search {
  border: none;
  outline: none;
  position: absolute;
}
.input {
  width: 320px;
  height: 36px;
  padding-left: 20px;
  left: 0;
  top: 0;
}
.btn-search {
  width: 140px;
  height: 37px;
  right: 0;
  top: 0;
  background-color: #f57272;
  color: rgb(31, 29, 29);
}
</style>