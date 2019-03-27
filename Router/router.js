import VueRouter from "vue-router";
import Vue from "vue";

import Pages from "@/components/Pages/page.vue";
import  Aa from "@/components/Main/cuiweikang/aa.vue";
import  Ab from "@/components/Main/cuiweikang/ab.vue";
import  Ba from "@/components/Main/chenkun/ba.vue";
import  Bb from "@/components/Main/chenkun/bb.vue";
import  Ca from "@/components/Main/zhangziyan/ca.vue";
import  Cb from "@/components/Main/zhangziyan/cb.vue";
import  Da from "@/components/Main/liudunhao/da.vue";
import  Db from "@/components/Main/liudunhao/db.vue";
import  Ea from "@/components/Main/system/ea.vue";
import  Eb from "@/components/Main/system/eb.vue";
import  mains from "@/components/Main/mains.vue";

Vue.use(VueRouter);

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [

  { path: "/", component: Pages,
    children:[
      {
        path:'aa',
        component:Aa
      },
      {
        path:'ab',
        component:Ab
      },
      {
        path:'ba',
        component:Ba
      },
      {
        path:'bb',
        component:Bb
      },
      {
        path:'ca',
        component:Ca
      },
      {
        path:'cb',
        component:Cb
      },
      {
        path:'da',
        component:Da
      },
      {
        path:'db',
        component:Db
      },
      {
        path:'ea',
        component:Ea
      },
      {
        path:'eb',
        component:Eb
      },
      {
        path:'/',
        component:mains
      }
    ] }

];

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。

let vr = new VueRouter({
  routes // (缩写) 相当于 routes: routes
});
//路由守卫
// vr.beforeEach((to, from, next) => {
//   console.log(to.path, from.path);
//   next();
// });
export default vr;
