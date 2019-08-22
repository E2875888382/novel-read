//导入bootstrap
import 'bootstrap/dist/css/bootstrap.css'

//导入vant
import Vant from 'vant';
import 'vant/lib/index.css';

//导入vue
import Vue from 'vue'
import App from './main/common/app.vue'

//导入vuex
import Vuex from 'vuex'
//导入路由
import router from './router.js'

//导入element UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueJsonp from 'vue-jsonp';
//导入全局函数
import Common from './main/common/common.js';

Vue.use(VueJsonp)
//配置elementUI，vuex，infiniteScroll,vant
Vue.use(ElementUI)
Vue.use(Vuex);
Vue.use(Common);
Vue.use(Vant);
// 创建vuex
var store = new Vuex.Store({
    state:{
        header_show:true,
        footer_show:true,
    },
    mutations:{
        hiddenHeader(state,show){
            state.header_show = show;
        },
        hiddenFooter(state,show){
            state.footer_show = show;
        }
    }
})

var vm=new Vue({
    el:'#app',
    store,
    render:c => c(App),
    router
})
