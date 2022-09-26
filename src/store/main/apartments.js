// import axios from 'axios'
import data from '../../../public/data.json'

export default {
  state: {
    apartments: {}
  },

  mutations: {
    updateApartments (state, apartments) {
      state.apartments = apartments
    }
  },

  getters: {
    getflat: (state) => (id) => {
      const flat = state.apartments.flats[id]
      return flat
    },

    getAllEntrances (state) {
      const findAllEntrances = []

      if (state.apartments.houses === undefined) return
      state.apartments.houses.forEach(id => {
        findAllEntrances.push(...state.apartments.entrances.filter(item => item.house_id === id))
      })
      return findAllEntrances
    }
  },

  actions: {
    getDataFlats ({ commit }) {
      setTimeout(() => {
        commit('updateApartments', data)
      }, 200)
    }
  }

}
