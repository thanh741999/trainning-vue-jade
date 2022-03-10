import {ChangeProfile, GetUserInfo, Login} from "@/service/auth.service";

const state = {
  isLogin: false,
  userInfo: null,
  isCheckout: false
}

const actions = {
  UserLogin (context, payload) {
    return  Login(payload).then(res => {
      localStorage.setItem('access_token',res.data.access_token)
    }).then(_ => {
       GetUserInfo().then(res => {
         context.commit('setUserInfo',res.data)
       })
    }).catch(error => {
      return error
    })
  },
  GetuserInfo (context, payload) {
    return GetUserInfo().then(res => {
      context.commit('setUserInfo',res.data)
      return res.data
    })
  },
  ChangeProfile (context, payload = {}) {
    return ChangeProfile(payload).then(res => {
      context.commit('setUserInfo',res.data)
      return res.data
    }).catch((error) => {
      return error.response.data
    })
  },
  setLogin (context, payload) {
    context.commit('setLogin', payload)
  },
  setCheckout(context, payload) {
    context.commit('setCheckout', payload)
  }
}

const mutations = {
  setLogin (state, data) {
    state.isLogin = data
  },
  setUserInfo(state, data) {
    state.userInfo = data
  },
  setCheckout (state, data) {
    state.isCheckout = data
  }
}

const getters = {
  Login: state => state.isLogin,
  Checkout: state => state.isCheckout
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
