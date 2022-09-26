<template>
  <div class="block_" v-for="( item, i ) in flats" :key="i">
    <div class="block__row" @click="openModal(item.id)"> {{ $store.getters.getflat(item.id).plan_type }} </div>
  </div>
  <Modal
    v-if="showModal"
      @close="eventClose"
      :id="idFlat"
  />
</template>

<script>

import Modal from '@/components/modal.vue'
import { ref } from 'vue'

export default {
  name: 'flats',

  components: {
    Modal
  },

  setup () {
    const showModal = ref(false)
    const idFlat = ref('')

    const eventClose = () => { showModal.value = false }

    const openModal = (id) => {
      idFlat.value = id
      showModal.value = true
    }

    return {
      openModal,
      eventClose,
      showModal,
      idFlat
    }
  },

  props: {
    flats: Array
  }
}
</script>

<style scoped>
  .block {
    display: flex;
  }

  .block__row {
    display: inline-block;
    background-color: rgb(214, 212, 212);
    min-width: 1.2rem;
    min-height: 1.2rem;
    margin: 3px;
    cursor: pointer;
}
</style>
