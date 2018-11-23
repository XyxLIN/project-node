<template>
    <div class="counter-view">
        <h3>Count: {{count}}</h3>
    </div>
</template>

<script>
import { mapState } from 'vuex'
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
        ...mapState(['count']),
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


