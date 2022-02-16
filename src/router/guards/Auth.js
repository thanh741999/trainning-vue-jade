import store from '@/store'

export const Auth = (to, from, next) => {
  if (!store.state.auth.accessToken) {
    return store.commit('auth/setToken', '')
  }
  next()
}
