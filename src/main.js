//导入bootstrap
import 'bootstrap/dist/css/bootstrap.css'
//导入vant
import Vant from 'vant';
import 'vant/lib/index.css';
//导入vue
import Vue from 'vue'
import App from './main/common/app.vue'
//导入路由
import router from './router.js'
// 创建vuex
import store from './store.js'
//导入element UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 导入vue-jsonp
import VueJsonp from 'vue-jsonp';
//导入全局函数
import Common from './main/common/common.js';

Vue.use(VueJsonp)
Vue.use(ElementUI)
Vue.use(Common);
Vue.use(Vant);

var vm=new Vue({
    el:'#app',
    store,
    render:c => c(App),
    router
})
