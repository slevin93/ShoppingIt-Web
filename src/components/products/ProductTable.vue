<template>
  <v-data-table
    :headers="headers"
    :items="products"
    class="elevation-1"
    :loading="isLoading"
    loading-text="Loading... Please wait">
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>
          Products
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <AddProduct v-on:addedProduct="onAddedProduct" />
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <EditProduct :productId="item.productId" v-on:productSaved="onEditItem" />
      <v-icon small class="mr-2" @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>
  </v-data-table>
</template>

<script>
import AddProduct from './AddProduct'
import EditProduct from './EditProduct'
import product from '@/services/product.js'

export default {
  name: 'ProductTable',
  components: {
    AddProduct,
    EditProduct
  },
  async mounted () {
    this.isLoading = true
    this.products = (await product.getProducts()).data
    this.isLoading = false
  },
  data () {
    return {
      itemToDelete: null,
      isLoading: false,
      headers: [
        { text: 'Product Id', value: 'productId' },
        { text: 'Name', value: 'name' },
        { text: 'Description', value: 'description' },
        { text: 'Sale Price', value: 'salesPrice' },
        { text: 'Whole Price', value: 'wholePrice' },
        { text: 'Stock', value: 'stock' },
        { text: 'Link', value: 'wholeSaleLink' },
        { text: 'Actions', value: 'actions', sortable: false }
      ],
      products: []
    }
  },
  methods: {
    onAddedProduct (item) {
      this.products.push(item)
    },
    onEditItem (item) {
      const product = this.products.find(x => x.productId === item.productId)

      const index = this.products.indexOf(product)

      this.products.splice(index, 1, item)
    },
    deleteItem (item) {
      product.deleteProduct(item.productId)

      this.products.splice(this.products.indexOf(item), 1)
    }
  }
}
</script>
