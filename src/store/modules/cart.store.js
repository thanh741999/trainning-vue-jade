import {CreateOder, GetOderDetail, GetOderList} from "@/service/cart.service";

const state = {
  carts: null,
  totalQuantity: 0
}

const actions = {
  setCart (context, payload = {}) {
    context.commit('setCart', payload)
  },
  setTotalQuantity(context, payload) {
    context.commit('setTotalQuantity',payload)
  },
  CreatedOder(context, payload) {
    return CreateOder(payload).then(res => {
      return res
    }).catch(error => {
      return error
    })
  },
  GetOrderList (context, payload) {
    return GetOderList(payload).then(res => {
      return res
    }).catch(error => {
      return error
    })
  },
  getOderDetail (context, payload) {
    return GetOderDetail(payload).then(res => {
      return res.data
    }).catch(error => {
      return error
    })
  }
}

const mutations = {
  setCart (state, data) {
    state.carts = data
  },
  setTotalQuantity (state, data) {
    if (typeof data === "number") {
      state.totalQuantity += data
    } else {
      data.forEach(item => {
        state.totalQuantity += item.quantity
      })
    }
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
