import Vue from 'vue'

export default {
  async getAccounts () {
    return await Vue.prototype.$http
      .get('accounts')
  }
}
