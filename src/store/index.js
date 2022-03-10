import Vue from 'vue'
import Vuex from 'vuex'

// MODULE
import product from './modules/product.store'
import sidebar from './modules/sidebar.store'
import banner from './modules/banner.store'
import home from './modules/home.store'
import productdetail from './modules/productDetail.store'
import cart from './modules/cart.store'
import auth from './modules/auth.store'
const modules = {
  product,
  sidebar,
  banner,
  productdetail,
  cart,
  auth,
  home
}
const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

export default new Vuex.Store({
  state () {
    return {
      loading: false,
      countRequest: 0
    }
  },
  mutations: {
    SET_LOADING (state, payload) {
      if (payload) {
        state.countRequest ++
        state.loading = true
        document.getElementsByTagName('body')[0].style.overflow = 'hidden'
      } else {
        state.countRequest--
        if (state.countRequest === 0) {
          state.loading = false
          document.getElementsByTagName('body')[0].style.overflow = 'unset'
        }
      }
    }
  },
  modules,
  strict: debug
})
