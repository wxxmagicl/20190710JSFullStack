import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

// export default导出去
export default new Vuex.Store({
    state:{
        counter:1
    },
    mutations:{
        add(state){
            state.counter++
        },
        sub(state){
            state.counter--
        },
        addN(state,obj){
            console.log(obj)
            state.counter += obj;
        }
    }
})



















