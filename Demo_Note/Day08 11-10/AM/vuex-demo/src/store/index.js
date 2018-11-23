


import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)

// 创建store
const store = new Vuex.Store({
    state, // 挂载数据
    mutations,
    actions
})

export default store