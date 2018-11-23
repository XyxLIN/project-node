
// 模拟后端， localStorage模拟数据库
import _ from 'lodash'

const api = {
    addGoods ({id, name, price, num = 1, imgUrl}) {
        // 模拟后端能力，存储数据到数据库中
        return new Promise(resolve => {
            setTimeout(async () => {
                let { goods } = await this.getCarGoods()
                // 判断有没有这个商品
                let good = _.find(goods, item => item.id === id)
                
                if ( good ) {
                    good.num += num
                } else {
                    // 如果是新商品
                    goods.push({
                        id, name, price, imgUrl, num
                    })
                }              

                this.changeCarGoods(goods)

                resolve({status: 200, goods})

            }, 200);
        })  
    },
    getCarGoods () {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    status: 200,
                    goods: localStorage.goods ? JSON.parse(localStorage.goods) : []
                })
            }, 200)
        })
    },
    changeCarGoods (goods) {
        localStorage.goods = JSON.stringify(goods)
    }
}

export default api