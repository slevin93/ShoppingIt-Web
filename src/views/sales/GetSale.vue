<template>
  <div>
    <EditSale :sale-id="this.$route.params.saleId" />
  </div>
</template>

<script>
import EditSale from '@/components/sales/EditSale'

export default {
  name: 'GetSale',
  components: {
    EditSale
  }
}
</script>
