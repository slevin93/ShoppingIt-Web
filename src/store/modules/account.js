import auth from '@/common/auth'
import authentication from '@/services/authentication'

const state = () => ({
  isAuth: auth.isValid()
})

const getters = {
  isValid (state) {
    return state.isAuth
  }
}

const actions = {
  async login ({ commit }, account) {
    const authResult = await authentication.login(account.username, account.password)
    if (authResult.data.token != null) {
      auth.setToken(authResult.data.token)
      commit('setAuth', true)
    }
  },
  async logout ({ commit }) {
    auth.removeToken()
    commit('setAuth', false)
  }
}

const mutations = {
  setAuth (state, data) {
    state.isAuth = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
