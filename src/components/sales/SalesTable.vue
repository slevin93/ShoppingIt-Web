<template>
  <v-data-table
    :headers="headers"
    :items="sales"
    :loading="isLoading"
    loading-text="Loading... Please Wait"
    class="elevation-1">
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>
          Sales
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <router-link :to="{ name: 'NewSale' }">
          <v-btn text primary>Add</v-btn>
        </router-link>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <router-link :to="{ name: 'GetOrder', params: { orderId: item.saleId } }">
        <v-icon small class="mr-2"> mdi-pencil </v-icon>
      </router-link>
    </template>
  </v-data-table>
</template>

<script>
import saleService from '@/services/sales'

export default {
  name: 'SalesTable',
  data () {
    return {
      isLoading: false,
      headers: [
        { text: 'Sale Id', value: 'saleId' },
        { text: 'Account Id', value: 'accountId' },
        { text: 'Status', value: 'salesStatusId' },
        { text: 'Time Stamp', value: 'timeStamp' },
        { text: 'Sale Id', value: 'saleId' },
        { text: 'Actions', value: 'actions', sortable: false }
      ],
      sales: []
    }
  },
  async mounted () {
    this.isLoading = true
    this.sales = (await saleService.getSales()).data
    this.isLoading = false
  }
}
</script>
