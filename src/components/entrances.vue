<template>
  <div class="block" v-for="( item, i ) in floors" :key="i">
    <div class="block__column"> {{ item.floor }} </div>
    <Flats :flats="item.flats" />
  </div>
</template>

<script>
import Flats from '@/components/flats.vue'
export default {
  name: 'entrances',

  components: {
    Flats
  },

  props: {
    floors: Object
  }
}
</script>

<style scoped>
  .block {
    display: flex;
    flex-direction: row;
  }

  .block__column {
    width: 30px;
    margin-right: 5px;
  }
</style>
