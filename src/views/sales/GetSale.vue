<template>
  <div>
    {{ saleId }}
  </div>
</template>

<script>
export default {
  name: 'GetSale',
  data () {
    return {
      saleId: 0
    }
  },
  mounted () {
    this.saleId = this.$route.params.saleId
  }
}
</script>
