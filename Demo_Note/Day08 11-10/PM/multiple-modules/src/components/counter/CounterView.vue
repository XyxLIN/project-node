<template>
    <div class="counter-view">
        <h3>Count: {{count.count}}</h3>
        <h3>doubleCount: {{doubleCount}}</h3>
        <h3>magicalCount: {{magicalCount}}</h3>
        <h3>fnCount: {{fnCount('!')}}</h3>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
    // base
    // computed: {
    //     count () {
    //         return this.$store.state.count
    //     }
    // }
    // 对象  改名字 防止冲突 (state中的数据和data中的数据)
    // computed: mapState({
    //     // count: state => state.count,
    //     owncount: 'count'
    // })
    // 数组 不能改名字
    // computed: mapState(['count']),
    // 对象展开 可以添加自己组件内的计算属性
    computed : {
        // ...mapState({
        //     count: state => state.count.count
        // }),
        ...mapState(['count']),

        ...mapGetters({
            doubleCount: 'count/doubleCount',
            magicalCount: 'count/magicalCount',
            fnCount: 'count/fnCount',
        })
        // ....
    }




    
    // data () {
    //     return {
    //         count: this.$store.state.count
    //     }
    // },
    // watch: {
    //     '$store.state.count': {
    //         handler () {
    //             this.count = this.$store.state.count
    //         }
    //     }
    // } 
}
</script>
<style lang="scss">

</style>


