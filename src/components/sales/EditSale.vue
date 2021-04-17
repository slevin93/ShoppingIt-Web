<template>
  <div id="edit-sale">
    <v-row>
      <v-col md="6" sm="12">
        <v-card>
          <v-card-title>
            {{ saleId }}
          </v-card-title>
          <v-card-text>
            <v-select v-model="saleDetails.paymentTypeId" :items="paymentTypes"
              item-text="name"
              item-value="paymentTypeId"
              label="Payment Type">
            </v-select>
            <v-select v-model="saleDetails.salesStatusId" :items="orderStatus"
              item-text="name"
              item-value="salesStatusId"
              label="Order Status">
            </v-select>
          </v-card-text>
          <v-card-actions>
            <AddSaleItem @onAddItem="addSaleItem" />
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="updateSale()">Update</v-btn>
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
import AddSaleItem from '@/components/sales/AddSaleItem'
import saleService from '@/services/sales'
import lookupService from '@/services/lookup'

export default {
  props: {
    saleId: Number
  },
  components: {
    AddSaleItem
  },
  name: 'EditSale',
  data () {
    return {
      accountId: 0,
      saleDetails: null,
      saleItems: [],
      paymentTypes: [],
      orderStatus: []
    }
  },
  async mounted () {
    this.saleDetails = (await saleService.getSaleById(this.saleId)).data
    this.saleItems = (await saleService.getSaleItems(this.saleId)).data
    this.paymentTypes = (await lookupService.getPaymentType()).data
    this.orderStatus = (await lookupService.getOrderStatus()).data
  },
  methods: {
    addSaleItem (sale) {
      for (var i in this.saleItems) {
        if (this.saleItems[i].productId === sale.productId) {
          this.saleItems[i].quantity += parseInt(sale.quantity)
          return 0
        }
      }
      this.saleItems.push(sale)
    },
    deleteItem (productId) {
      this.saleItems = this.saleItems.filter(x => x.productId !== productId)
    },
    async updateSale () {
      var sale = {
        saleId: this.saleId,
        paymentTypeId: this.saleDetails.paymentTypeId,
        salesStatusId: this.saleDetails.salesStatusId
      }

      var data = {
        sale
      }

      await saleService.updateSale(this.saleId, data)
    }
  }
}
</script>
