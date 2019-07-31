import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// const types = {
//     SET_IS_AUTNENTIATED: 'SET_IS_AUTNENTIATED', // 是否认证通过
//     SET_USER: 'SET_USER' // 用户信息
// }

const state = { // 需要维护的状态
    isAutnenticated: false, // 是否认证
    user: {} // 存储用户信息
}

const getters = {
    isAutnenticated: state => state.isAutnenticated,
    user: state => state.user
}

const mutations = {
    setIsAutnentiated(state, isAutnenticated) {
        if (isAutnenticated)
            state.isAutnenticated = isAutnenticated
        else
            state.isAutnenticated = false
    },
    setUser(state, user) {
        if (user)
            state.user = user
        else
            state.user = {}
    }
}

const actions = {
    setIsAutnenticated: ({ commit }, isAutnenticated) => {
        commit("setIsAutnentiated", isAutnenticated)
    },
    setUser: ({ commit }, user) => {
        commit("setUser", user)
    },
    clearCurrentState: ({ commit }) => {
        commit("setIsAutnentiated", false)
        commit("setUser", null)
    }
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})