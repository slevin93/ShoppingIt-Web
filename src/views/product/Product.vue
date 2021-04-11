<template>
  <div id="product">
    <ProductTable />
  </div>
</template>

<script>
import ProductTable from '@/components/products/ProductTable'

export default {
  name: 'Product',
  components: {
    ProductTable
  }
}
</script>
