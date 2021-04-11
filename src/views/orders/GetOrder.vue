<template>
  <div id="getorder">
    <div v-if="isLoading" >
      <v-row>
        <v-col cols="12">
          <router-link :to="{ name: 'Order' }">
            <v-btn
              text
              color="primary"
            >
              <v-icon
                dark
                left
              >
                mdi-arrow-left
              </v-icon>Back
            </v-btn>
          </router-link>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-card>
            <v-card-title>
              Sales Details
            </v-card-title>
            <v-card-text>
              <v-select v-model="order.paymentTypeId" :items="paymentTypes"
                item-text="name"
                item-value="paymentTypeId"
                label="Payment Type">
              </v-select>
              <v-select v-model="order.salesStatusId" :items="orderStatus"
                item-text="name"
                item-value="salesStatusId"
                label="Order Status">
              </v-select>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <YesNoBoxButton text="Update" title="Update Order" body="Are your sure you want to update order." v-on:ok="updateOrder" />
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <OrderItems :orderId="orderId" />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import orders from '@/services/orders'
import lookup from '@/services/lookup'
import account from '@/services/account'
import OrderItems from '@/components/orders/OrderItems'
import YesNoBoxButton from '@/components/YesNoBoxButton'

export default {
  name: 'GetOrder',
  components: {
    YesNoBoxButton,
    OrderItems
  },
  data () {
    return {
      isLoading: false,
      orderId: this.$route.params.orderId,
      paymentTypeId: 0,
      accountId: 0,
      salesStatusId: 0,
      paymentTypes: [],
      orderStatus: [],
      total: 0.00,
      timeStamp: '2012-04-23T18:25:43.511Z',
      order: null,
      items: []
    }
  },
  async mounted () {
    this.isLoading = true
    this.order = (await orders.getOrderDetails(this.orderId)).data
    this.paymentTypes = (await lookup.getPaymentType()).data
    this.orderStatus = (await lookup.getOrderStatus()).data
    this.accounts = (await account.getAccounts()).data
    this.isLoading = false
  },
  methods: {
    updateOrder () {
      alert('Updated.')
    },
    DeleteSaleItem (id) {
    }
  }
}
</script>
