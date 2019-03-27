import Vue from 'vue';
import App from './App.vue';
import router from "./Router/router";
import store from "./store/index";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false;



// Vue.prototype.$store = store;
// 引入全局组件
// import Aoo from '@/components/Side/quanju.vue';

// 封装全剧组件
// Vue.component('my-lick',Aoo)




new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
