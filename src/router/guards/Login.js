import store from '@/store'

export const LoginGuard = (to, from, next) => {
  if (!store.state.auth.accessToken) {
    return store.commit('auth/setToken', '')
  }
}
