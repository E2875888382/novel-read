//导入vue
import Vue from 'vue'

//导入vue-router
import VueRouter from 'vue-router'

//导入自定义的vue组件
import Index from './main/common/index.vue'


//手动安装vue-router
Vue.use(VueRouter)

//创建vue-router对象
var router=new VueRouter({
    routes:[
        { path:'/',component:Index },
    ]
})

export default router