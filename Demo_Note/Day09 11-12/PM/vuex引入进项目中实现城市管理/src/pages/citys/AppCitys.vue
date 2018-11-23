<template>
    <section class="app-citys">
       <gp8-content-block title = "当前所在城市">
           <gp8-content-item v-if = "chunks.city" class="active">{{chunks.city.cityName}}</gp8-content-item>
       </gp8-content-block>

       <gp8-content-block title = "热门城市">
           <gp8-content-item 
                v-for = "city in hotCitys"
                :key  = "city.id"
                @click.native = "changeCity(city)"
           >{{city.name}}</gp8-content-item>
       </gp8-content-block>

        <app-citys-content></app-citys-content>
    </section>
</template>

<script>

import AppCitysContent from '@c/common/app-citys/AppCitysContent'
import { mapState } from 'vuex'
import { CHANGE_CITY } from '@/store/chunks/mutation-types'
export default {
    name: 'app-citys',
    data () {
        return {
            hotCitys: [
                {id: 12, name: '北京'},
                {id: 11, name: '上海'},
                {id: 13, name: '广州'},
                {id: 10, name: '深圳'}
            ]
        }
    },
    computed: mapState(['chunks']),
    components: {
        AppCitysContent
    },
    methods: {
        changeCity ({id: cityId, name: cityName}) {
            // 更改城市信息
            this.$store.commit({type: 'chunks/' + CHANGE_CITY, city: {
                cityId, cityName
            }})
            // 回到首页
            this.$router.push({name: 'home'})
        }
    }
}
</script>

<style lang="scss" >
    .app-citys {
        
    }
</style>

