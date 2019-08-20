//导入vue
import Vue from 'vue'

//导入vue-router
import VueRouter from 'vue-router'

//导入自定义的vue组件
import Index from './main/common/index.vue'
import Recommended from './main/recommended/index.vue'
import Search from './main/search/index.vue'
import Ranking from './main/ranking/index.vue'
import Hot from './main/hot/index.vue'

//手动安装vue-router
Vue.use(VueRouter)

//创建vue-router对象
var router=new VueRouter({
    routes:[
        { path:'/',component:Index },
        { path:'/recommended',component:Recommended },
        { path:'/search',component:Search },
        { path:'/ranking',component:Ranking },
        { path:'/hot',component:Hot },
    ]
})

export default router