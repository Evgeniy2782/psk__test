<template>
  <div class="wrapper">
    <div class="block" v-for="( arrEntrance, i ) in $store.getters.getAllEntrances" :key="i">
      <Entrances  :floors="arrEntrance['floors']" />
      <h5>{{ arrEntrance.title }}</h5>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Entrances from '@/components/entrances.vue'
import { onMounted } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'Home',
  components: {
    Entrances
  },

  setup () {
    const store = useStore()
    onMounted(store.dispatch('getDataFlats'))

    return {
    }
  }
}
</script>

<style scoped>
.wrapper {
  max-width: 1370px;
  margin: 0 auto;
}
.block {
  display: inline-block;
  margin: 15px;
  flex-wrap: wrap;
}

</style>
