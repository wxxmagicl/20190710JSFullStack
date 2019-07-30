import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        list:[1,2,3]
    },
    mutations:{
        add(state,n){
            state.list.push(n)
        }
    },
})