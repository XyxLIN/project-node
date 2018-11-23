
import {
    INCREMENT_COUNT,
    CHANGE_COUNT
} from './mutation-types'

// mutations是用来更改数据的，拥有很多方法，这些方法都是用来更改state的
const mutations = {
    // 键名为type 值为handler ，handler接收的第一个参数为state，第二个参数是载荷payload （参数）
    [INCREMENT_COUNT]:  (state, { count = 1 }) => { // 让count自加
        state.count += count
    },
    [CHANGE_COUNT]:  (state, { count }) => { // 更改count
        state.count = (count === undefined) ? state.count : count
    }
}

export default mutations