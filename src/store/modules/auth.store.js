const state = {
  token: localStorage.getItem('access_token'),
  isLogin: false
}

const actions = {
  setToken (context, payload) {
    context.commit('setToken', payload)
  },
  setLogin (context, payload) {
    context.commit('setLogin', payload)
  }
}

const mutations = {
  setToken (state, data) {
    state.token = data
  },
  setLogin (state, data) {
    state.isLogin = data
  }
}

const getters = {
  Login: state => state.isLogin
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
