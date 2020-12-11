<template>
  <v-card
    class="rounded-lg"
    style="background-color: #29304d"
  >
    <v-card-title style="color: white" >
      Credito disponibile: {{ credit }} €
    </v-card-title>
    <v-card-actions class="mx-3">
      <v-btn
        dark
        outlined
        class="mb-5 text-capitalize rounded-lg"
        to="/movimenti"
        width="100"

      >
        Movimenti
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        dark
        outlined
        class="mb-5 text-capitalize rounded-lg"
        to="/credito"
        width="100"
      >
        Crediti
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({}),
  computed: {
    credit() {
      return this.$store.getters["credit/getCreditAvailable"]
    },
  }
}
</script>
