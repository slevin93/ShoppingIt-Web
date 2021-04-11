import Vue from 'vue'

export default {
  async addProduct (product) {
    return await Vue.prototype.$http
      .post('products', product)
  },
  async getProducts () {
    return await Vue.prototype.$http
      .get('products')
  },
  async getProductById (id) {
    return await Vue.prototype.$http
      .get(`products/${id}`)
  },
  async deleteProduct (id) {
    return await Vue.prototype.$http
      .delete(`products/${id}`)
  },
  async updateProduct (id, product) {
    return await Vue.prototype.$http
      .patch(`products/${id}`, product)
  }
}
