<template>
  <div>
    <v-row>
      <v-col md="4" sm="4" class="mx-auto">
        <v-card
          elevation="2"
        >
          <v-card-title>
            Login
          </v-card-title>
          <v-card-subtitle>
            Login with your ShoppingIt credentials.
          </v-card-subtitle>
          <v-card-text>
            <v-text-field
            label="Username"
            ></v-text-field>
            <v-text-field
              label="Password"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text>
              Login
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'LoginComponent'
}
</script>
