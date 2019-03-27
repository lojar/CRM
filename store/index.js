import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 1,
    data:'新的数据',
    info:[
            {title:'客户管理',
            name:'my-div1',
            pic:'-',
            isSubShow:false,
              products:[
                {id:1,name:'新增客户',hre:'aa'},
                {id:2,name:'客户列表',hre:'ab'},
              ]
            },
            {title:'联系人管理',
            name:'my-div2',
            pic:'-',
            isSubShow:false,
              products:[
                {id:3,name:'新增联系人',hre:'ba'},
                {id:4,name:'联系人列表',hre:'bb'},
              ]
            },
            {title:'客户拜访管理',
            name:'my-div3',
            pic:'-',
            isSubShow:false,
              products:[
                {id:5,name:'新增客户拜访',hre:'ca'},
                {id:6,name:'客户拜访列表',hre:'cb'},
              ]
            },
            {title:'综合查询',
            name:'my-div4',
            pic:'-',
            isSubShow:false,
              products:[
                {id:7,name:'新增综合查询',hre:'da'},
                {id:8,name:'综合查询列表',hre:'db'},
              ]
            },
            {title:'系统管理',
            name:'my-div5',
            pic:'-',
            isSubShow:false,
              products:[
                {id:9,name:'系统管理一',hre:'ea'},
                {id:10,name:'系统管理二',hre:'eb'},
              ]
            }
    ]
    
  },
  mutations: {
    newCount(state,str){
      state.count = '100' + str
    }
  },
  getters:{
    addCount(state){
      return state.data + '我是得到的数据'
    }
  },
  actions:{
    // newCount(context){
    //   console.log(context)
    //   context.commit('newCount','是个异步的')
    // }
    newCount({commit}){
      setTimeout(()=>{
          commit('newCount','是个异步的')
      }, 1000);
    }
  }
})
export default store;