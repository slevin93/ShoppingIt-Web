<template>
  <v-dialog
    v-model="dialog"
    persistent
    max-width="600"
    small
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        text
        color="primary"
        v-bind="attrs"
        v-on="on">
        Add
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="headline">
        Add Product
      </v-card-title>
      <v-card-text>
        <v-text-field v-model="name" label="Name:"></v-text-field>
        <v-text-field v-model="description" label="Description:"></v-text-field>
        <v-text-field v-model="salesPrice" label="SalesPrice:"></v-text-field>
        <v-text-field v-model="wholePrice" label="WholePrice:"></v-text-field>
        <v-text-field v-model="wholeSaleLink" label="WholeSaleLink:"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="closeModal">Cancel</v-btn>
        <v-btn color="primary" @click="addProduct">Create</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import product from '@/services/product.js'

export default {
  name: 'AddProduct',
  data () {
    return {
      name: null,
      description: null,
      salesPrice: null,
      wholePrice: null,
      wholeSaleLink: null,
      dialog: false
    }
  },
  methods: {
    async addProduct () {
      const newProduct = {
        name: this.name,
        description: this.description,
        salesPrice: this.salesPrice,
        wholePrice: this.wholePrice,
        wholeSaleLink: this.wholeSaleLink
      }

      const x = (await product.addProduct(newProduct)).data

      this.$emit('addedProduct', x)

      this.closeModal()
    },
    closeModal () {
      this.name = ''
      this.description = ''
      this.SalesPrice = ''
      this.wholePrice = ''
      this.wholeSaleLink = ''
      this.dialog = false
    }
  }
}
</script>
