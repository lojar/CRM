<template>
  <div id="aqq">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
    name:'aqq'
}
</script>

<style>
    #aqq{
        margin-top: 0.8vw;
        margin-left: 0;
        /*height: 400px;*/
        width: 79vw;
        background-color: #fff;
        border-radius: 0.5vw;
    }
    .my-weizhi{
        width: 74vw;
        height: 2.2vw;
        line-height: 2.2vw;
        font-size: 1.3vw;
        font-weight: 550;
        border: 1px solid #e1e1e1;
        background-color: #f4f4f4;
        margin: 0 auto;
        padding: 0 1vw;
        position: relative;
        top: 1.7vw;
    }
</style>
