import Vuex from "vuex"
import Vue from "vue"
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        num:0
    },
    // mutions 触发状态 
    // mutations: {
    //     add(state,n) {
    //         state.num+=n;
    //     },
    //     reduce(state,n) {
    //         state.num-=n;
    //     }
    // },

    mutations: {
        add(state) {
            state.num++;
        },
        reduce(state) {
            state.num--;
        }
    },
    // getters 计算属性 
    getters:{
        num(state){
           return state.num
        }
    },
    actions:{
        addAction(context){
            context.commit("add")
        },
       reduceAction({commit}){
           commit("reduce")
        }
    }
})