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
          Rimborsi in attesa
        </v-card-title>
        <v-card-text>
          <v-alert
            border="top"
            colored-border
            type="info"
            elevation="2"
            class="mx-3 subtitle-2 grey--text text--darken-1"
            max-width="500"
          >
            Le richieste di rimborso verranno processate in 7 giorni lavorativi.
          </v-alert>
          <rimborsi></rimborsi>
        </v-card-text>
      </v-card>
      <v-card class="mt-5 rounded-lg" elevation="5">
        <v-card-title style="color: #232649">
          Storico rimborsi
        </v-card-title>
        <v-card-text>
          <storico-rimborsi></storico-rimborsi>
        </v-card-text>
      </v-card>
  </v-container>
</template>

<script>

import Rimborsi from "@/components/Rimborsi";
import StoricoRimborsi from "@/components/StoricoRimborsi";

export default {
  layout: 'default',
  components: {
    StoricoRimborsi,
    Rimborsi

  },
  data: () => ({}),
  computed: {},
  methods: {},
}
</script>

