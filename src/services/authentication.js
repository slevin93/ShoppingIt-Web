import Vue from 'vue'

export default {
  async login (username, password) {
    return await Vue.prototype.$http
      .post('auth/login', {
        Email: username,
        Password: password
      })
  }
}
