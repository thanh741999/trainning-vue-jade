import { GetProduct, GetProductList, SortProduct, GetProductPaginationSort, GetProductSearch } from '@/service/product.service'
const state = {
  pagination: null,
  product: null,
  BreadCrumb: 1,
  activeSort: null,
  loading: false
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
    context.commit('setBreadCrumb', payload.id)
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
        context.commit('setBreadCrumb', res.data[0].category.id)
        context.commit('setProduct', res.data)
        context.commit('setPagination', res.pagination)
      }
    })
  },
  setLoading (context, payload) {
    context.commit('setLoading', payload)
  }
}

const mutations = {
  setPagination (state, data) {
    state.pagination = data
  },
  setProduct (state, data) {
    state.product = data
  },
  setBreadCrumb (state, data) {
    state.BreadCrumb = data
  },
  setActiveSort (state, data) {
    state.activeSort = data
  },
  setLoading (state, data) {
    state.loading = data
  }
}
const getters = {
  Loading: state => state.loading,
  BreadCrumb: state => state.BreadCrumb
}
export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
