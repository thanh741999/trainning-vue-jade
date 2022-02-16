const state = {
  sidebar: null
}

const actions = {
  setSidebar (context, data) {
    context.commit('setSidebar', data)
  }
}

const mutations = {
  setSidebar (state, data) {
    state.sidebar = data
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
