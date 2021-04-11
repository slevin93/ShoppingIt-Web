<template>
  <v-app :style="{ background: $vuetify.theme.themes[theme].background }">
    <v-app-bar
      app
      color="transparent"
      flat
    >
      <router-link :to="{ name: 'Home' }">
        <v-toolbar-title>ShoppingIt</v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <div v-if="isValid">
        <router-link :to="{ name: 'Product' }">
          <v-btn text primary>Product</v-btn>
        </router-link>
        <router-link :to="{ name: 'Sales' }">
          <v-btn text primary>Sales</v-btn>
        </router-link>
        <v-btn text @click="logout">Logout</v-btn>
      </div>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'App',
  computed: {
    theme () {
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    },
    ...mapState({
      isValid: state => state.account.isAuth
    })
  },
  methods: {
    logout () {
      this.$store.dispatch('account/logout')

      this.$router.push({ name: 'Login' })
    }
  }
}
</script>
<style>
  a {
    text-decoration: none;
    color: inherit!important;
  }
</style>
