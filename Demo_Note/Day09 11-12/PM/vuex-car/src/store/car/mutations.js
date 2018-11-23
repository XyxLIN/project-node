
// 加强的工具库
import _ from 'lodash'

import {
    UPDATE_CAR_GOODS
} from './mutation-types'

const mutations = {
    // 更改购物车数据
    [UPDATE_CAR_GOODS]: (state, payload) => {
        // 预防引入类型地址传递后的问题，深拷贝
        state.goods = _.cloneDeep(payload.goods)
    }
}

export default mutations