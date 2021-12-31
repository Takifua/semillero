import { createStore } from 'vuex'

export default createStore({
  state: {
    frutas: [
      { nombre: 'Manzana', cantidad: 0 },
      { nombre: 'Mandarina', cantidad: 0 },
      { nombre: 'Melon', cantidad: 0 }
    ]
  },
  mutations: {
    aumentar(state, index) {
      state.frutas[index].cantidad++
    },
    reset(state){
      state.frutas.forEach(fruta => {
        fruta.cantidad = 0
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
