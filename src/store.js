import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
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