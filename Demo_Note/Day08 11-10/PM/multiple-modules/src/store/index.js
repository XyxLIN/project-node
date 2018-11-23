


import Vue from 'vue'
import Vuex from 'vuex'

import count from './count'
import todos from './todos'

Vue.use(Vuex)


// 创建store
const store = new Vuex.Store({
    modules: {
        count,
        todos
    }
})

export default store