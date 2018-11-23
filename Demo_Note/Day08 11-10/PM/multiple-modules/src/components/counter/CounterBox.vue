<template>
    <div class="counter-box">
        <h1>计算器Demo</h1>
        <counter-view></counter-view>
        <counter-control></counter-control>
        <counter-control-two></counter-control-two>
    </div>
</template>

<script>
import CounterView from '@/components/counter/CounterView'
import CounterControl from '@/components/counter/CounterControl'
import CounterControlTwo from '@/components/counter/CounterControlTwo'
export default {
    components: {
        CounterView,
        CounterControl,
        CounterControlTwo
    }
}
</script>
<style lang="scss">
    .counter-control {
        margin-bottom: 10px;
    }
</style>


