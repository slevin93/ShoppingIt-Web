<template>
<v-dialog
  v-model="dialog"
  max-width="400"
>
  <template v-slot:activator="{ on, attrs }">
    <v-btn
      text
      color="primary"
      v-bind="attrs"
      v-on="on"
    >
      Add Item
    </v-btn>
  </template>
  <v-card>
    <v-card-title class="headline">
      Order Item
    </v-card-title>
    <v-card-text>
      <v-select v-model="selectedProduct" :items="products"
        item-text="name"
        item-value="productId"
        label="Product"
        persistent-hint></v-select>
      <v-text-field v-model="quantity" type="number" label="quantity" />
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn text @click="close()">Close</v-btn>
      <v-btn color="primary" @click="addItemAndClose()">Add And Close</v-btn>
      <v-btn color="primary" @click="addItem()">Add</v-btn>
    </v-card-actions>
  </v-card>
</v-dialog>
</template>

<script>
import product from '@/services/product'

export default {
  name: 'NewOrderItem',
  data () {
    return {
      dialog: false,
      quantity: 0,
      selectedProduct: null,
      products: []
    }
  },
  async mounted () {
    this.products = (await product.getProducts()).data
  },
  methods: {
    close () {
      this.dialog = false
      this.quantity = 0
    },
    addItemAndClose () {
      this.addItem()
      this.close()
    },
    addItem () {
      const product = this.products.find(x => x.productId === this.selectedProduct)

      this.$emit('onAddItem', {
        productId: product.productId,
        name: product.name,
        price: product.price,
        quantity: parseInt(this.quantity)
      })

      this.quantity = 0
    }
  }
}
</script>
