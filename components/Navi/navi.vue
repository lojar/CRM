<template>
  <div class="navi">
    <div class="navi-up"></div>
    <div class="navi-down">
        <p>当前用户：xxx</p>
        <a href="">修改密码</a>
        <a href="">安全退出</a>
    </div>
    <span>客户关系管理系统v1.0</span>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .navi-up{
        height: 3vw;
        background-color: #dfedf8;
    }
    .navi-down{
        height: 3vw;
        background-color: #7bdee4;
        display: flex;
        justify-content: flex-end;
        align-items:center;
    }
    .navi-down a,.navi-down p{
        margin: 0 1vw 0 1vw;
        font-size: 1vw;
    }
    .navi-down a{
        color: red;
    }
    .navi{
        position: relative;
    }
    .navi>span{
        position: absolute;
        font-size: 2.04vw;
        line-height: 6vw;
        margin-left: 1vw;
        top: 0;
        left: 0;
        color: #003366;
        font-weight: 800;
    }
</style>
