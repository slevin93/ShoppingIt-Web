import Vue from 'vue'

export default {
  async addOrder (accountId, paymentTypeId, saleStatusId, saleItems) {
    return await Vue.prototype.$http
      .post('sales', {
        accountId: accountId,
        paymentTypeId: paymentTypeId,
        saleStatusId: saleStatusId,
        items: saleItems
      })
  },
  async getOrderDetails (orderId) {
    return await Vue.prototype.$http
      .get(`sales/${orderId}`)
  },
  async getOrderItems (orderId) {
    return await Vue.prototype.$http
      .get(`sales/${orderId}/items`)
  },
  async getOrders () {
    return await Vue.prototype.$http
      .get('sales')
  }
}
