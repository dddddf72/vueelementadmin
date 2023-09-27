<template>
  <div>
    <div class="type">
      <div>
         <Tag color="blue">按地区/时间</Tag>
         <el-row :gutter="20" >
           <el-col :span="6" v-for="item of nav1" :key="item._area">
             <router-link target="_blank" :to="{path:'/navJump',query:{keyworld:item.area}}" 
             @click.native="navigate(item.area)" :dat="atter">
             <div class="grid-content bg-purple" id="area">{{item.area}}</div></router-link>
           </el-col>
        </el-row>
      </div>
      <div>
         <Tag color="blue">按类型</Tag>
         <el-row :gutter="20">
            <el-col :span="2" v-for="item of nav2" :key="item._kids">
              <router-link target="_blank" :to="{path:'/navJump',query:{keyworld:item.kids}}" 
              @click.native="navigate(item.kids)" :dat="atter">
              <div class="grid-content bg-purple" id="area">{{item.kids}}</div></router-link>
            </el-col>
         </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import {getAnime} from '../api/request'
import '../css/Center.css';
  export default {
    data(){
      return{
        nav1:[],
        nav2:[],
        atter:""
      }
    },
    mounted(){
      let url1 = "/nav1";
      let url2 = "/nav2";
      getAnime(url1).then(res=>{
        this.nav1 = res.data.res
      })
      getAnime(url2).then(res=>{
        this.nav2 = res.data.res
      })
    },
    methods:{
      navigate(atter){
        this.atter = atter;
        this.http({
          method:"get",
          url:`http://124.71.180.178:8001/navdetailDate1?keyworld=${atter}`,
        }).then(res=>{
          console.log(res.data.res);
        }).catch(err=>{
          console.log(err);
        })
      }
    }
  }
</script>

<style scoped>

</style>