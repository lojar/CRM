<template>
  <div class="ck_ba2">
     <p class="my-weizhi">当前位置:  联系人管理 > 联系人列表</p>
     <div class="ck_ba2-1">
       <div class="ck_ba2-1-1">
         <label for="">联系人名称：</label>
         <input type="text">
         <label for="">客户名称：</label>
         <input type="text">
         <button>选择客户</button>
         <button>筛选</button>
       </div>
       <div class="ck_ba2-1-2">
         <div class="ck_ba2-1-2er">
            <label for="">联系人名称</label>
            <label for=""></label>
            <label for="">|性别</label>
            <label for="">|办公电话</label>
            <label for=""></label>
            <label for="">|手机</label>
            <label for="">|操作</label>
         </div>
       </div> 
     </div>
     <pager :pageSize="pageSize" v-model="pageNo" @jumpPage="jump"></pager>
  </div>
</template>

<script>
import pager from './bbchild.vue'
export default {
  components:{ pager },//组件调用声明
  data(){//参数
    return{
      pageSize: 30,//总页数 -- 后台传值
      pageNo: 2//当前页
    }
  },
  methods:{//接收跳转事件
    jump(id){
      console.log(id)
    }
  }
}
</script>
  
<style>
  .ck_ba2-1{
    margin-top:2.5vw;
    font-size: 1.3vw;
  }
  .ck_ba2-1 button{
    padding:0.2vw 0.5vw;
    margin-right: 1vw;
    font-size: 1vw;
  }
  .ck_ba2-1-1{
    width: 76vw;
    margin: 0 auto;
    padding: 1vw 0;
    height: 2.2vw;
  }
  .ck_ba2-1-2{
     width: 76vw;
    margin: 0 auto;
    /*padding: 0 1vw 0 1vw;*/
    height: 3vw;
  }
  .ck_ba2-1-2er{
    display: flex;
    align-items: center;
    justify-content:space-between;
    background-color: #eeeeee;
  }
  .ck_ba2-1-2er label{
    display: inline-block;
    width: 20vw;
  }
  .ck_ba2-1 input{
    width: 8vw;
    height: 2vw;
    margin-right: 1vw;
    border: 1px solid skyblue;
    border-radius: 0.3vw;
  }
  .ck_ba2-1-2er label{
    font-weight: 550;
    font-size: 1.3vw;
    height: 2vw;
    line-height: 2vw;
  }
</style>
