import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

const types = {
    SET_IS_AUTNENTIATED: 'setIsAutnentiated', // 是否认证通过
}

let state = {
    isAutnenticated: false, // 是否认证
}
// let getters = {
//     isAutnenticated: state => state.isAutnenticated,
// }
const mutations = {
    setIsAutnentiated(state, isAutnenticated) {
        if (isAutnenticated)
            state.isAutnenticated = isAutnenticated
        else
            state.isAutnenticated = false
    }
}
// const actions = {
//     setIsAutnenticated: ({ commit }, isAutnenticated) => {
//         commit(types.SET_IS_AUTNENTIATED, isAutnenticated)
//     }
// }
let store = new Vuex.Store({
    state,
    // getters,
    mutations,
    // actions
})

export default store