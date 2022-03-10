import store from '@/store'

export const Auth = (to, from, next) => {
  if (localStorage.getItem('access_token')) {
    return next()
  } else {
    next({name: 'Cart'})
    store.commit('auth/setLogin',true)
  }
}

