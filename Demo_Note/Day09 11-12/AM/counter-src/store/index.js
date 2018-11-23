


import Vue from 'vue'
import Vuex from 'vuex'

import count from './count'
import todos from './todos'

Vue.use(Vuex)


const loggerPlugin = store => {
    // 会在每一次mutation提交的时候执行
    store.subscribe((mutation, state) => {
        console.log('mutation:', mutation)
        console.log('state:', state)
    })
}


// 创建store
const store = new Vuex.Store({
    plugins: [loggerPlugin],
    modules: {
        count,
        todos
    }
})

export default store