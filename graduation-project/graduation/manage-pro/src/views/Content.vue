<template>
    <div class="content">
        <el-table
            :data="arr"
            border
            stripe
            style="width: 100%"
            :header-cell-style="{textAlign: 'center',color: '#333'}"
            :cell-style="{ textAlign: 'center',fontSize: '10px',padding:'5px'}">
            <el-table-column
            prop="_id"
            label="商品编号"
            width="230">
            </el-table-column>
            <el-table-column prop="goodsImg" label="商品图片" width="80">
                <template slot-scope="scope">
                    <img  :src="scope.row.goodsImg" alt="" style="width:40px; height: 40px">
                </template>
            </el-table-column>
            <el-table-column prop="title" label="商品名称" width="349">
            </el-table-column>
            <el-table-column prop="price" label="商品价格" width="100">
            </el-table-column>
            <el-table-column prop="store" label="店铺名称" width="170">
            </el-table-column>
            <el-table-column label="操作" width="170">   
            <template scope="scope">
                <el-button type="danger" size="mini" @click="doDelete(scope.row._id)">删除</el-button>
                <el-button type="warning" size="mini" @click="doEdit(scope.row)">修改</el-button>
            </template>
            </el-table-column>
        </el-table>
        <div class="page">
            <el-pagination background
                        @current-change="handleCurrentChange"
                        :page-size="12"
                        :current-page="currentPage"
                        layout="total,prev, pager,next,jumper"
                        :total="total">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                arr:[],
                total:12,
                currentPage:1,
                table:'',
                isShow:true
            }
        },
        created(){
            setTimeout(()=>{
                this.total = this.$store.state.total
                this.arr = this.$store.state.data
                this.table = this.$store.state.table
            },1000)
        },
        methods: {
            handleCurrentChange(newPage){
                this.currentPage = newPage
                this.getGoodsList((newPage - 1) * 12, this.table)
            },
            async getGoodsList(start,table){
                var res = await this.$http.get(`/api/data?start=${start}&table=${table}`)
                this.arr = res.data.result
            },
            doDelete(id){
                this.$confirm('你确定要删除此条商品吗?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    var table = this.table
                    this.$http.post('/manage/doDelete',{id,table}).then(()=>{
                        this.arr = this.arr.filter(item=>item._id!=id)
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                    })
                    
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '您已取消!'
                    });          
                }); 
            },
            doEdit(value){
                this.$router.push({path:'/home/edit',query:value})
            }
        }
    }
</script>

<style scoped>
.content{
    width: 1100px;
}
.el-table td, .el-table th.is-leaf{
    text-align: center;
}
.page{
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
}
</style>