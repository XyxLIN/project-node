<template>
    <div class="counter-control">
        <el-button @click = "INCREMENT_COUNT({count:2})" type="primary">increment</el-button>
        <el-button @click = "randomChange" type="danger">random-change</el-button>
    </div>
</template>

<script>
import { Button } from 'element-ui'
import { INCREMENT_COUNT } from '@/store/mutation-types'
import { mapMutations } from 'vuex'
import api from '@/util/api'
export default {
    components: {
        [Button.name]: Button
    },
    // 对象
    // methods: mapMutations({
    //     increment: INCREMENT_COUNT // 需要的方法方法和mutation类型的对应 调用此方法就相当于在commit一个type为此type的mutation了， 注意，payload需要传进去
    // })
    // 数组，方面名和type就一样了
    // methods: mapMutations([
    //     INCREMENT_COUNT 
    // ])
    methods: {
        ... mapMutations([
            INCREMENT_COUNT 
        ]),
        //....
        randomChange () {
           // 直接调用action
           this.$store.dispatch('randomChange')
        }
    }
    // methods: {
    //     increment () {
    //         // 提交mutations
    //         // 第一个参数为type类型， 第二个参数为载荷
    //         // this.$store.commit('increment', {
    //         //     count: 2
    //         // })
    //         // payload和type结合再一起
    //         this.$store.commit({
    //             type: INCREMENT_COUNT,
    //             count: 1             
    //         })
    //     }
    // }
}
</script>
<style lang="scss">

</style>


