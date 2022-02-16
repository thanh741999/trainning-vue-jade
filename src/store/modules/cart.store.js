const state = {
  cart: []
}

const actions = {
  setCart (context, payload = {}) {
    context.commit('setCart', payload)
  }
}

const mutations = {
  setCart (state, data) {
    state.cart.push(data)
  }
}

const getters = {

}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
