//导入bootstrap
import 'bootstrap/dist/css/bootstrap.css'

//导入vant
import Vant from 'vant';
import 'vant/lib/index.css';

// 导入滚动条插件，用于无限滚动加载数据
import infiniteScroll from 'vue-infinite-scroll';

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

//导入全局函数
import Common from './main/common/common.js';

//配置elementUI，vuex，infiniteScroll,vant
Vue.use(ElementUI)
Vue.use(Vuex);
Vue.use(infiniteScroll);
Vue.use(Common);
Vue.use(Vant);
// 创建vuex
var store = new Vuex.Store({
    state:{

    },
    mutations:{

    }
})

var vm=new Vue({
    el:'#app',
    store,
    render:c => c(App),
    router
})
