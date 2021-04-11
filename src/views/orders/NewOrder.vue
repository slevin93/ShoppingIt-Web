<template>
  <div>
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
      <v-col md="6" sm="12">
        <v-card>
          <v-card-title>New Order</v-card-title>
          <v-card-text>
            <v-select v-model="accountId" :items="accounts"
              item-text="email"
              item-value="accountId"
              label="Account"
              persistent-hint></v-select>
            <v-select v-model="paymentTypeId" :items="paymentTypes"
              item-text="name"
              item-value="paymentTypeId"
              label="Payment Type">
            </v-select>
            <v-select v-model="salesStatusId" :items="orderStatus"
              item-text="name"
              item-value="salesStatusId"
              label="Order Status">
            </v-select>
          </v-card-text>
          <v-card-actions>
            <NewOrderItem @onAddItem="addOrderItem" />
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="completeOrder()">Complete Order</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col md="6" sm="12">
        <v-row v-for="(saleItem, index) in saleItems" :key="index">
          <v-col>
            <v-card>
              <v-card-title>
                {{saleItem.productId}}: {{ saleItem.name }}
              </v-card-title>
              <v-card-text>
                <v-row dense>
                  <v-col cols="12">
                    Price: {{ saleItem.price }}
                  </v-col>
                </v-row>
                <v-row dense>
                  <v-col cols="12">
                    Quantity: {{ saleItem.quantity }}
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-actions>
                <v-btn @click="deleteItem(saleItem.productId)" small color="primary">
                  <v-icon>
                    mdi-delete
                  </v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import NewOrderItem from '@/components/orders/NewOrderItem'
import orders from '@/services/orders'
import account from '@/services/account'
import lookup from '@/services/lookup'

export default {
  name: 'NewOrder',
  components: {
    NewOrderItem
  },
  data () {
    return {
      accountId: 0,
      paymentTypeId: 0,
      salesStatusId: 0,
      saleItems: [],
      paymentTypes: [],
      orderStatus: [],
      accounts: []
    }
  },
  async mounted () {
    this.accounts = (await account.getAccounts()).data
    this.paymentTypes = (await lookup.getPaymentType()).data
    this.orderStatus = (await lookup.getOrderStatus()).data
  },
  methods: {
    addOrderItem (order) {
      for (var i in this.saleItems) {
        if (this.saleItems[i].productId === order.productId) {
          this.saleItems[i].quantity += parseInt(order.quantity)
          return 0
        }
      }
      this.saleItems.push(order)
    },
    async completeOrder () {
      await orders.addOrder(this.accountId, this.paymentTypeId, this.salesStatusId, this.saleItems)
    },
    deleteItem (productId) {
      this.saleItems = this.saleItems.filter(x => x.productId !== productId)
    }
  }
}
</script>
