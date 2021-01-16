<template>
  <v-app-bar flat app color="transparent">
    <router-link :to="{ name: 'Home' }">
      <v-app-bar-title>ShoppingIt</v-app-bar-title>
    </router-link>
    <v-spacer></v-spacer>
    <router-link :to="{ name: 'Login' }">
      <v-btn
        text
      >
        <span class="mr-2">Login</span>
        <v-icon>mdi-login</v-icon>
      </v-btn>
    </router-link>
  </v-app-bar>
</template>
