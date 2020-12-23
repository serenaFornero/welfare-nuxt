<template>
  <v-container fluid>
    <go-back/>
      <v-card class="rounded-lg" elevation="5">
        <v-card-title style="color: #232649">
          Versamenti in attesa
        </v-card-title>
        <v-alert
          dismissible
          close-text="Close Alert"
          v-model="alert"
          border="left"
          colored-border
          color="info"
          elevation="2"
          class="mx-3 subtitle-2 grey--text text--darken-1 mb-12"
          max-width="500"
        >
          I versamenti in attesa verranno processati in 7 giorni lavorativi.
        </v-alert>
        <div class="text-right mt-n13 mx-2">
          <v-btn
            color="info"
            icon
            v-if="!alert"
            @click="alert = true"
          >
            <v-icon>mdi-information</v-icon>
          </v-btn>
        </div>
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
import GoBack from "@/components/GoBack";
export default {
  layout: 'default',
  components: {
    GoBack,
    StoricoVersamenti
  },
  data: () => ({
    alert: false
  }),
  methods: {},
}
</script>

