<template>
  <v-row>
    <v-col lg="3" md="4" sm="6" class="mx-auto">
      <v-form @submit.prevent="login()">
        <v-card :loading="isLoading">
          <v-card-title>Login</v-card-title>
          <v-card-subtitle>Login with your ShoppingIt user credentials.</v-card-subtitle>
          <v-card-text>
            <v-text-field v-model="Username" type="text" label="Username:" :rules="rules" />
            <v-text-field v-model="Password" type="password" label="Password:" :rules="rules" />
          </v-card-text>
          <v-card-actions>
            {{ Message }}
            <v-spacer></v-spacer>
            <v-btn type="submit" color="primary">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Login',
  computed: {
    ...mapState({
      isValid: state => state.account.isAuth
    })
  },
  data () {
    return {
      isLoading: false,
      Username: null,
      Password: null,
      Message: null,
      rules: [
        value => !!value || 'Required.'
      ]
    }
  },
  methods: {
    async login () {
      if (!this.rules) {
        return false
      }

      this.isLoading = true

      try {
        await this.$store.dispatch('account/login', {
          username: this.Username,
          password: this.Password
        })

        this.$router.push({ name: 'Home' })
      } catch (error) {
        this.Message = 'Invalid user credentials.'
        this.Password = ''
        this.isLoading = false
      }
    }
  }
}
</script>
