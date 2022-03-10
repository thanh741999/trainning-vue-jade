import { GetProduct, GetProductList, SortProduct, GetProductPaginationSort, GetProductSearch } from '@/service/product.service'
const state = {
  pagination: null,
  product: null,
  activeSort: null,
}

const actions = {
  setPagination (context, data) {
    context.commit('setPagination', data)
  },
  setProduct (context, payload = {}) {
    return GetProductList(payload.id).then(res => {
      if (res.data) {

        context.commit('setProduct', res.data)
        context.commit('setPagination', res.pagination)
      }
    }).catch(error => {
      console.log(error)
    })
  },
  setProductBySort (context, payload) {
    return SortProduct(payload).then(res => {
      if (res.data) {
        context.commit('setPagination', res.pagination)
        context.commit('setProduct', res.data)
        context.commit('setActiveSort', payload)
      }
    })
  },
  setProductBySideBar (context, payload) {
    context.commit('setActiveSort', null)
    return GetProduct(payload.id).then(res => {
      if (res.data) {
        context.commit('setProduct', res.data)
      }
    })
  },
  setProductByPaginationSort (context, payload) {
    return GetProductPaginationSort(payload).then(res => {
      if (res.data) {
        context.commit('setProduct', res.data)
        context.commit('setPagination', res.pagination)
      }
    })
  },
  setProductBySearch (context, payload) {
    return GetProductSearch(payload).then(res => {
      if (res.data) {
        context.commit('setProduct', res.data)
        context.commit('setPagination', res.pagination)
      }
      return res
    })
  }
}

const mutations = {
  setPagination (state, data) {
    state.pagination = data
  },
  setProduct (state, data) {
    state.product = data
  },
  setActiveSort (state, data) {
    state.activeSort = data
  }
}
const getters = {
  BreadCrumb: state => state.BreadCrumb
}
export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
