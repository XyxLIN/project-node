<template>
  <div id="app">
    <vue-progress-bar></vue-progress-bar>
    <app-header></app-header>
    
    <main>
      <keep-alive include="app-citys">
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
    },
    created () {
      // 头部进度条
      this.$router.beforeEach((to, from ,next) => {
        console.log('beforeEach')
        if ( to.name !== 'user-info'  ) {
          this.$Progress.start()
        }
        
        next()
      })
      this.$router.afterEach((to, from ,next) => {
         console.log('afterEach')
         if ( to.name !== 'user-info' ) {
          this.$Progress.finish()
        }
      })
    }
}

</script>

<style lang="scss">

main {
  padding-top: 1.333333rem;
 
}
html, body, #app, main {
   height: 100%;
}


</style>
