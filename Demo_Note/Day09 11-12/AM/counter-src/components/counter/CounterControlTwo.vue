<template>
    <div class="counter-control">
        <el-button type="danger" @click ="randomChange({max: 100})">random-change</el-button>
    </div>
</template>

<script>
import { Button } from 'element-ui'
import { mapActions } from 'vuex'

export default {
    components: {
        [Button.name]: Button
    },
    // methods: mapActions({
    //     random: 'randomChange' // 组件中有了random，调用的时候会去dispatch一个type为randomChange的action, payload需要传入
    // }),
    // methods: mapActions([
    //     'randomChange' // 组件中有了random，调用的时候会去dispatch一个type为randomChange的action, payload需要传入
    // ])
    // methods: {
    //     ...mapActions(['randomChange'])
    // }
    methods: {
        randomChange () {
            // this.$store.dispatch('randomChange', {
            //     max: 50
            // })
            this.$store.dispatch({
                type: 'count/randomChange',
                max: 50
            }).then(res => { // 注意，actions应该只用来操作异步动作，其他的事情应该由组件自己完成
                this.$message({
                    message:'这次改为了' + res
                });
            })
            
        }
    }
   
}
</script>
<style lang="scss">

</style>


