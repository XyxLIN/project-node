
import api from '@/util/api'
import {
    namespace,
    UPDATE_CAR_GOODS
} from './mutation-types'
const actions = {
    // 添加商品
    async addGoods (context, payload) {
        // 与后端交互，执行异步动作
        let result = await api.addGoods(payload)
       
        if ( result.status === 200 ) {
            // 提交 mutations
            context.commit({
                type: UPDATE_CAR_GOODS,
                goods: result.goods
            })
        }
    },
    async initialCarGoods (context) { // 初始化数据
        let result = await api.getCarGoods()
        if ( result.status === 200 ) {
            // 提交 mutations
            context.commit({
                type: UPDATE_CAR_GOODS,
                goods: result.goods
            })
        }
    },
    // 加
    async controlGoodNumber (context, payload) { // 操作商品的数量
        let result = await api.controlGoodNumber(payload)
        if ( result.status === 200 ) {
            // 提交 mutations
            context.commit({
                type: UPDATE_CAR_GOODS,
                goods: result.goods
            })
        }
    }
}

export default actions