<template>
  <div id="app">
    <app-header></app-header>
    
    <main>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <!-- <transition
        enter-active-class="animated slideInLeft"
        leave-active-class="animated slideOutRight"
        mode = "out-in"
      >
      <router-view></router-view>
      </transition> -->
    </main>

  </div>
</template>


<script>
import AppHeader from '@c/layout/AppHeader'

export default {
    name: 'app',
    components: {
      AppHeader
    }
}

</script>

<style lang="scss">

main {
  padding-top: 1.333333rem;
  
}


</style>
