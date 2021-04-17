<template>
  <div>
    <v-row>
      <v-col cols="12">
        <router-link :to="{ name: 'Sales' }">
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
    </v-row>
    <AddSale />
  </div>
</template>

<script>
import AddSale from '@/components/sales/AddSale'

export default {
  name: 'NewSale',
  components: {
    AddSale
  }
}
</script>
