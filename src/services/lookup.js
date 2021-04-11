import Vue from 'vue'

export default {
  async getSalesStatus () {
    return await Vue.prototype.$http
      .get('lookups/sales-status')
  },
  async getPaymentType () {
    return await Vue.prototype.$http
      .get('lookups/payment-types')
  },
  async getOrderStatus () {
    return await Vue.prototype.$http
      .get('lookups/order-status')
  }
}
