import Vue from 'vue'

export default {
  async addSale (accountId, paymentTypeId, saleStatusId, saleItems) {
    return await Vue.prototype.$http
      .post('sales', {
        accountId: accountId,
        paymentTypeId: paymentTypeId,
        saleStatusId: saleStatusId,
        items: saleItems
      })
  },
  async getSaleById (saleId) {
    return await Vue.prototype.$http
      .get(`sales/${saleId}`)
  },
  async getSaleItems (saleId) {
    return await Vue.prototype.$http
      .get(`sales/${saleId}/items`)
  },
  async getSales () {
    return await Vue.prototype.$http
      .get('sales')
  },
  async updateSale (saleId, data) {
    return await Vue.prototype.$http
      .patch(`sales/${saleId}`, data)
  }
}
