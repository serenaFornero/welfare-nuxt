<template>
  <v-card
    class="rounded-lg"
  >
        <v-card-title>
         Credito disponibile: 120,00
        </v-card-title>
    <v-card-actions class="mx-3">
      <v-btn
        dark
        outlined
        color="#374785"
        class="mb-5 text-capitalize"
        to="/movimenti"
        width="100"

      >
        Movimenti
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        dark
        outlined
        color="#374785"
        class="mb-5 text-capitalize"
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
  data: () => ({
    step: 1,
  }),

}
</script>
