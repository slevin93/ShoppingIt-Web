<template>
  <v-app :style="{background: $vuetify.theme.themes[theme].background}">
    <AppBar/>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from '@/layouts/AppBar.vue'
export default {
  name: 'App',
  components: {
    AppBar
  },
  computed: {
    theme () {
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    }
  }
}
</script>

<style>
.v-application a {
  color: inherit!important;
  text-decoration: inherit!important;
}
</style>
