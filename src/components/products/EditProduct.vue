<template>
  <v-dialog
    v-model="dialog"
    persistent
    max-width="600">
    <template v-slot:activator="{ on, attrs }">
      <v-icon
        v-bind="attrs"
        v-on="on"
        small
        class="mr-2">
          mdi-pencil
        </v-icon>
    </template>
    <v-card>
      <v-card-title class="headline">
        Edit Product
      </v-card-title>
      <v-card-text>
        <v-text-field v-model="updateProduct.name" label="Name:"></v-text-field>
        <v-text-field v-model="updateProduct.description" label="Description:"></v-text-field>
        <v-text-field v-model="updateProduct.salesPrice" label="SalesPrice:"></v-text-field>
        <v-text-field v-model="updateProduct.wholePrice" label="WholePrice:"></v-text-field>
        <v-text-field v-model="updateProduct.wholeSaleLink" label="WholeSaleLink:"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="closeModal">Cancel</v-btn>
        <v-btn color="primary" @click="editProduct()">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import product from '@/services/product'

export default {
  props: {
    productId: Number
  },
  data () {
    return {
      dialog: false,
      updateProduct: {
        name: null,
        description: null,
        salesPrice: null,
        wholePrice: null,
        wholeSaleLink: null
      }
    }
  },
  watch: {
    dialog: async function (value) {
      if (value === true) {
        this.updateProduct = (await product.getProductById(this.productId)).data
      }
    }
  },
  methods: {
    async editProduct () {
      const newProduct = (await product.updateProduct(this.productId, this.updateProduct)).data
      this.$emit('productSaved', newProduct)
      this.dialog = false
    },
    closeModal () {
      this.dialog = false
    }
  }
}
</script>
