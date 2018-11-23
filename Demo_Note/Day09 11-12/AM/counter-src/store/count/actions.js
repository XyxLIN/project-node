
import {
    INCREMENT_COUNT,
    CHANGE_COUNT
} from './mutation-types'
import api from '@/util/api'
// actions用来封装一些异步的动作（异步之后要改state）
const actions = {
    randomChange: (context, payload = {max: 20}) => {
        return api.randomNumber(payload.max || 20).then(res => {
            context.commit({
                type: CHANGE_COUNT,
                count: res
            })
            return res
        })
    }
}

export default actions