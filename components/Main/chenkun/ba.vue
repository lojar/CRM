<template>
  <div class="ck_ba1">
     <p class="my-weizhi">当前位置:  联系人管理 > 新增联系人</p>
     <div class="ck_ba1-1">
        <div class="ck_ba1-1-1">
          <label for="">所属客户：</label>
          <input type="text" class="ck_ba1-1-1input">
          <button class="ck_ba_button1">选择客户</button>
        </div>
        <div>
          <label for="">联系人名称：</label>
          <input type="text" class="ck_ba1-1-2input">
          <label for="">联系人性别：</label>
          <input class="boy" name="sex" type="radio" />男
          <input class="girl" name="sex" type="radio" />女
        </div>
        <div>
          <label for="">联系人办公电话：</label>
          <input type="text" class="ck_ba1-1-3input1">
          <label for="">联系人手机：</label>
          <input type="text" class="ck_ba1-1-3input2">
        </div>
        <button class="ck_ba_button2">保存</button>
     </div>
    
    <!--<my-lick></my-lick>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      // ones:'新增联系人',
      // tows:' > 联系人列表'
    }
  },
}
</script>

<style>
  .ck_ba1-1{
    margin-top:2.5vw;
    font-size: 1.3vw;
  }
  .ck_ba1-1>div{
    width: 94%;
    margin: 0 auto;
    padding: 1vw;
    height: 2.2vw;
  }
  .ck_ba1-1 label{
    display: inline-block;
    width: 12vw;
    /*background-color: skyblue;*/
  }
  .ck_ba1 .ck_ba1-1 .ck_ba1-1-1 .ck_ba1-1-1input,.ck_ba1-1-2input,.ck_ba1-1-3input1,.ck_ba1-1-3input2{
    width: 20vw;
    height: 2vw;
    margin-right: 2vw;
    border: 1px solid skyblue;
    border-radius: 0.3vw;
  }
  .girl{
    margin-left: 2vw;
  }
  .ck_ba1 button{
    padding:0.2vw 0.5vw;
    font-size: 1vw;
  }
  .ck_ba_button2{
    margin-left: 3vw;
    margin-top: 1vw;
    margin-bottom: 2vw;
    padding:0.2vw 1vw !important;
  }
</style>
