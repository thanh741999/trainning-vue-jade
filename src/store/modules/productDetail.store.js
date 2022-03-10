import {AddProductLike, DeleteProductLike, GetProductDetail, GetProductLike} from '@/service/productDetail.service'

const state = {
  productDetail: null,
  productLike: null
}

const actions = {
  setProductDetail (context, payload = {}) {
    return GetProductDetail(payload.id).then(res => {
      context.commit('setProductDetail', res.data)
    })
  },
  setProductLike (context, payload) {
    return AddProductLike(payload).then(res => {
      if (res.success) {
        return GetProductLike(payload).then(res => {
          context.commit('setProductLike',res.data.data)
        })
      }
    }).catch(error => {
      console.log({error})
    })
  },
  getProductLike (context, payload) {
    return GetProductLike(payload).then(res => {
      context.commit('setProductLike', res.data.data)
    })
  },
  setDeleteProductLike (context, payload) {
    return DeleteProductLike(payload.product_id).then(res => {
      if (res.success) {
        return GetProductLike(payload).then(res => {
          context.commit('setProductLike',res.data.data)
        })
      }
      return res.data
    })
  }
}

const mutations = {
  setProductDetail (state, data) {
    state.productDetail = data
  },
  setProductLike(state, data) {
    state.productLike = data
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
