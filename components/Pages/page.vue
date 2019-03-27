<template>
  
  <div class="">
   
      <el-container>
        <el-header>
          <snavi></snavi>
        </el-header>
        <el-container>
          <el-aside width="19%">
            <sside></sside>
          </el-aside>
          <el-main>
            <smain></smain>
          </el-main>
        </el-container>
      </el-container>
  </div>
</template>

<script>
import snavi from "@/components/Navi/navi"
import sside from "@/components/Side/side"
import smain from "@/components/Main/main"
export default {
    data() {
      return {

      }
    },
    components:{
      snavi,
      sside,
      smain
    },

  }
</script>

<style>
    /*顶部导航条*/
  .el-header{
    padding: 0 !important;
    height: 6vw !important;
    border: 1px solid #8ecbf1;
    /*width: 1280px;*/
  }
  .el-container{
    background-color: #2a8dc8 !important;
    height: 550px;
  }
  /*左侧side部分*/
  /*主体mian部分*/
  .el-main{
    padding: 0 !important;
  }
</style>
