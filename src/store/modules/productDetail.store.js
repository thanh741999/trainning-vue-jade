import { GetProductDetail } from '@/service/productDetail.service'

const state = {
  productDetail: null
}

const actions = {
  setProductDetail (context, payload = {}) {
    console.log(payload)
    return GetProductDetail(payload.id).then(res => {
      console.log(res)
      context.commit('setProductDetail', res.data)
    })
  }
}

const mutations = {
  setProductDetail (state, data) {
    state.productDetail = data
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
