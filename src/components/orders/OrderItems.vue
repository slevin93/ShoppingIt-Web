<template>
  <div id="order-items">
    <v-row>
      <v-col>
        <v-simple-table class="elevation-1">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  Name
                </th>
                <th class="text-left">
                  Quantity
                </th>
                <th class="text-left">
                  Price
                </th>
                <th class="text-left">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in items"
                :key="item.saleListId"
              >
                <td>{{ item.name }}</td>
                <td>{{ item.quantity }}</td>
                <td>{{ item.price + 5}}</td>
                <td>{{ item.price * item.quantity }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import products from '@/services/product'
import orders from '@/services/orders'

export default {
  name: 'OrderItems',
  props: {
    orderId: Number
  },
  data () {
    return {
      items: []
    }
  },
  async mounted () {
    const orderItems = (await orders.getOrderItems(this.orderId)).data

    for (let index = 0; index < orderItems.length; index++) {
      const orderItem = orderItems[index]

      const product = (await products.getProductById(orderItem.productId)).data

      this.total += orderItem.total

      this.items.push({
        saleItemId: orderItem.saleItemId,
        name: product.name,
        price: orderItem.price,
        quantity: orderItem.quantity,
        total: orderItem.total
      })
    }
  }
}
</script>
