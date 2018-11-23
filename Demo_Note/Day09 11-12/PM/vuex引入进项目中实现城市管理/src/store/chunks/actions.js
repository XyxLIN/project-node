
import http from '@util/axios'

import {
    CHANGE_CITY
} from './mutation-types'


export default {
    async getCurrentPosition (context) {
        let cityId = 12
        let cityName =  '北京'
        
        // 先去获取城市信息
        let citys = await http({
            url: '/mz/v4/api/city'
        })
        // 定位当前城市
        let result = await http({
            url: '/bd/location/ip',
            params: {
                ak: 'EajH3hpCLeGgNMbnPqbVl1Bm9PWGD0HO'
            }
        }, true)

        

        if ( result ) { // 如果定位成功
            cityName =  result.data.content.address.replace('市', '')
            for (let i = 0; i < citys.cities.length; i++) {
                if ( citys.cities[i].name === cityName ) {
                    cityId = citys.cities[i].id
                    break;
                }
            }
        } 
        context.commit({
            type: CHANGE_CITY,
            city: { cityId, cityName },
            cities: citys.cities
        })
    }
}