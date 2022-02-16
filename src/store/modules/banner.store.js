import { GetBanner } from '@/service/home.service'

const state = {
  banner: null
}

const actions = {
  setBanner (context, data) {
    return GetBanner().then(res => {
      context.commit('setBanner', res.data)
    }).catch(error => {
      console.log(error)
    })
  }
}

const mutations = {
  setBanner (state, data) {
    state.banner = data
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
