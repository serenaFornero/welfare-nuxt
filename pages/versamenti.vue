<template>
  <v-container fluid>
    <v-btn
      fab
      x-small
      class="mt-n10"
      to="/portafoglio"
      color="#29304d"
      outlined
      dark
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
      <v-card class="rounded-lg" elevation="5">
        <v-card-title style="color: #232649">
          Versamenti in attesa
        </v-card-title>
        <v-card-subtitle>
          Al momento non ci sono versamenti in attesa di essere confermati.
        </v-card-subtitle>
      </v-card>
      <v-card class="mt-5 rounded-lg" elevation="5">
        <v-card-title style="color: #232649">
          Storico versamenti
        </v-card-title>
        <v-card-text>
          <storico-versamenti></storico-versamenti>
        </v-card-text>
      </v-card>
  </v-container>
</template>

<script>

import StoricoVersamenti from "@/components/StoricoVersamenti";
export default {
  layout: 'default',
  components: {
    StoricoVersamenti
  },
  data: () => ({}),
  methods: {},
}
</script>

