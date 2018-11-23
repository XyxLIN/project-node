<template>
  <div class="about">
    <h1>{{ todos.message }}</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState(['todos'])
}
</script>
