<template>
    <transition>
      <div class="modal">
        <div class="modal__wrapper">
          <div class="modal__container">
            <div class="modal__svg" @click="$emit('close')"> X </div>

            <div class="modal__body">
              <h2 class="modal__title"> {{ flat.type }} </h2>
              <div class="modal__popup">
                <div class="modal__text">Этаж: {{ flat.floor }}</div>
                <div class="modal__text">Номер кв: {{ flat.number }}</div>
                <div class="modal__text">Площадь: {{ flat.square }}</div>
                <div class="modal__text">Цена: {{ flat.cost }}</div>
                <div class="modal__text">Тип: {{ flat.plan_type }}</div>
                <div class="modal__text">Ремонт: {{ flat.renovation ? 'Да' : 'Нет' }}</div>
                <div class="modal__text">Рассрочка: {{ flat.installment ? 'Да' : 'Нет' }}</div>
                <div class="modal__text">Субсидия: {{ flat.subsidy ? 'Да' : 'Нет' }}</div>
                <div class="modal__text">Статус: {{ flat.status }}</div>
                <div class="modal__text">ID: {{ flat.id }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </template>

<script>
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'month',

  setup (props) {
    const store = useStore()
    const flat = ref({})

    onMounted(() => { flat.value = store.getters.getflat(props.id) })

    return {
      flat
    }
  },

  props: {
    id: String
  }

}
</script>
<style scoped>
.modal {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(68, 66, 66, 0.205);
  display: table;
  transition: opacity 0.7s ease;
}

.modal__wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal__container {
  width: 350px;
  margin: 0px auto;
  padding: 20px 25px;
  border-radius: 2px;
  background-color: #FFFFFF;
  transition: all 0.3s ease;
}

.modal__svg {
  position: relative;
  float: right;
  cursor: pointer;
}

.modal__body {
  margin: 20px 0;
}

.modal__title {
  color: #1f82e6;
}
.modal__popup {
  display: flex;
  flex-direction: column;
  margin: 5px;
  padding-top: 12px;
  height: 320px;
}

.modal__text {
  height: 36px;
  font-size: 16px;
  font-weight: 700;
  color: #1f82e6;
  text-align: start;
}

.popup__btn-ready {
}

.popup__btn-delete {
}
</style>
