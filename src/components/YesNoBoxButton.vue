<template>
<v-dialog
  v-model="dialog"
  persistent
  max-width="290"
>
  <template v-slot:activator="{ on, attrs }">
    <v-btn
      v-if="showButton"
      color="primary"
      v-bind="attrs"
      v-on="on"
    >
      {{ text }}
    </v-btn>
  </template>
  <v-card>
    <v-card-title class="headline">
      {{ title }}
    </v-card-title>
    <v-card-text>{{ body }}</v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        text
        @click="dialog = false"
      >
        No
      </v-btn>
      <v-btn
        color="primary"
        @click="ok"
      >
        Yes
      </v-btn>
    </v-card-actions>
  </v-card>
</v-dialog>
</template>

<script>
export default {
  name: 'YesNoBoxButton',
  props: {
    title: String,
    body: String,
    text: String,
    showButton: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data () {
    return {
      dialog: false
    }
  },
  methods: {
    ok () {
      this.$emit('ok')
      this.dialog = false
    }
  }
}
</script>
