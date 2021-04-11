<template>
  <v-data-table
    :headers="headers"
    :items="orders"
    class="elevation-1"
    :loading="isLoading"
    loading-text="Loading... Please wait">
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>
          Orders
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <router-link :to="{ name: 'NewOrder' }">
          <v-btn text primary>Add</v-btn>
        </router-link>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <router-link :to="{ name: 'GetOrder', params: { orderId: item.saleId } }">
        <v-icon small class="mr-2"> mdi-pencil </v-icon>
      </router-link>
      <v-icon small class="mr-2" @click="deleteOrder(item)"> mdi-delete </v-icon>
    </template>
  </v-data-table>
</template>

<script>
import order from '@/services/orders'

export default {
  name: 'OrderTable',
  data () {
    return {
      isLoading: false,
      headers: [
        { text: 'Order Id', value: 'saleId' },
        { text: 'Time Stamp', value: 'timeStamp' },
        { text: 'Payment Type', value: 'paymentTypeId' },
        { text: 'Actions', value: 'actions', sortable: false }
      ],
      orders: []
    }
  },
  async mounted () {
    this.isLoading = true
    this.orders = (await order.getOrders()).data
    this.isLoading = false
  },
  methods: {
    deleteOrder (item) {
      this.orders.splice(this.orders.indexOf(item), 1)
    }
  }
}
</script>
