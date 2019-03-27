<template>
  <div class="side">
    <p class="p1">人力资源-功能菜单</p>
      <div v-for="(ones,index) in this.$store.state.info" :key="index" class="one">
        <span @click="showToggle(ones,index)" class="one-span1"><span>{{pic[0]}}</span>{{ones.title}}</span><br>
        
        <div v-show="ones.isSubShow">
          <router-link v-for="tows in ones.products" :key="tows.id" :to="tows.hre" class="my-a"><span>-</span>{{tows.name}}</router-link>
        </div>
        <div :class="ones.name"></div>
      </div>
      
      <!--<el-col :span="24">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
          <el-submenu index="1">
            <template slot="title">
              <span>客户管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1" @click="faa">新增客户</el-menu-item>
              <el-menu-item index="1-2" @click="fab">客户列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
           <el-submenu index="2">
            <template slot="title">
              <span>联系人管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1" @click="fba">新增联系人</el-menu-item>
              <el-menu-item index="1-2" @click="fbb">联系人列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
           <el-submenu index="3">
            <template slot="title">
              <span>客户拜访管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1" @click="fca">新增客户拜访</el-menu-item>
              <el-menu-item index="1-2" @click="fcb">客户拜访列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
           <el-submenu index="4">
            <template slot="title">
              <span>综合查询管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1" @click="fda">新增综合查询</el-menu-item>
              <el-menu-item index="1-2" @click="fdb">综合查询列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
           <el-submenu index="5">
            <template slot="title">
              <span>系统管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1" @click="fea">系统管理一</el-menu-item>
              <el-menu-item index="1-2" @click="feb">系统管理二</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>-->
  </div>
</template>

<script>
// import mapActions from 'vuex';
export default {
  data() {
    return {
    pic:['+','-'],
    mog:[],
    mtg:[]
    }
  },
  methods: {
    // ...mapActions([
    //   'showToggle'
    // ])
    showToggle:function(ones,ind){
      this.$store.state.info.forEach(i=>{
        if (i.isSubShow != this.$store.state.info[ind].isSubShow){
            i.isSubShow = false;
        }
      });
      ones.isSubShow = !ones.isSubShow;
     
    },
   
    // faa(){this.$router.push('aa')},
    // fab(){this.$router.push('ab')},
    // fba(){this.$router.push('ba')},
    // fbb(){this.$router.push('bb')},
    // fca(){this.$router.push('ca')},
    // fcb(){this.$router.push('cb')},
    // fda(){this.$router.push('da')},
    // fdb(){this.$router.push('db')},
    // fea(){this.$router.push('ea')},
    // feb(){this.$router.push('eb')},
    // handleOpen(key, keyPath) {
    //   console.log(key, keyPath);
    // },
    // handleClose(key, keyPath) {
    //   console.log(key, keyPath);
    // }
  },
}
</script>

<style>
   .side{
       background-color: #fff;
       /*width: 90%;*/
       /*height: 400px;*/
       margin: 0.8vw;
       border-radius: 0.3vw;
       list-style: none;
   }
   .side .p1{
       color: #154c8d;
       text-align: center;
       font-size: 1vw;
       padding-top:0.5vw;
       padding-bottom:0.5vw;
   }
   .my-div5{
     display: none;
   }
   .one>span{
     display: inline-block;
     /*width: 80%;*/
     height: 3vw;
     line-height: 3vw;
     font-size: 1.4vw;
     padding: 0 1.3vw;
     font-weight: 550;
     cursor: pointer;
   }
   .one>span span{
     /*font-weight: 10;*/
     color: red;
     padding: 0 0.7vw;
   }
   .my-a{
     height: 2vw;
     line-height: 2vw;
     font-size: 1.2vw;
     display: flex;
     /*flex-direction:column;*/
     padding: 0 1.8vw;
     text-decoration:none;
     color: #0c59be;
   }
   .my-a span{
     padding: 0 0.9vw;
   }
   .my-div1,.my-div2,.my-div3,.my-div4{
    width: 84%;
    height: 1vw;
    margin: 0 auto;
    background: blue;
   }
   .my-div4{
     height: 1.7vw;
   }

   /*当前位置*/
   .side .my-weizhi{
        /*margin: 0 auto;*/
        width: 73vw;
        padding: 0 1%;
        height: 2.2vw;
        color: #000 ;
        font-family: '微软雅黑';
        line-height: 2vw;
        font-size: 1.3vw ;
        font-weight: 550;
        border: 1px solid #e1e1e1;
        background-color: #f4f4f4;
        position: absolute;
        top: 8.6vw;
        left: 20.9vw;
    }
</style>
