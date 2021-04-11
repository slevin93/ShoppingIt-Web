<template>
  <div id="order">
    <OrderTable />
  </div>
</template>

<script>
import OrderTable from '@/components/orders/OrderTable'

export default {
  name: 'Order',
  components: {
    OrderTable
  }
}
</script>
