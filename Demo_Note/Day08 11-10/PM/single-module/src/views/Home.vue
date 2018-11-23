<template>
  <div class="home">
    <counter-box></counter-box>
  </div>
</template>

<script>
import CounterBox from '@/components/counter/CounterBox'
export default {
  name: 'home',
  components: {
    CounterBox
  }
}
</script>
