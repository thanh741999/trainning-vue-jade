import { GetProduct, GetProductByCategoryId } from '@/service/home.service'

const state = {
  Category1: null,
  Category2: null,
  HotSale: null
}

const actions = {
  setHotSale (context, payload = {}) {
    return GetProduct().then(res => {
      context.commit('setHotSale', res.data)
    }).catch(error => {
      console.log(error)
    })
  },
  setCategoryProduct (context, payload = []) {
    payload.forEach(id => {
      return GetProductByCategoryId(id).then(res => {
        context.commit(`setCategoryProduct${id}`, res.data)
      })
    })
  }
}

const mutations = {
  setCategoryProduct1 (state, data) {
    state.Category1 = data
  },
  setCategoryProduct2 (state, data) {
    state.Category2 = data
  },
  setHotSale (state, data) {
    state.HotSale = data
  }
}

const getters = {

}

export default {
  namespaced: true,
  actions,
  state,
  mutations,
  getters
}
