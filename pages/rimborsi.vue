<template>
  <v-container fluid>
    <go-back/>
      <v-card class="rounded-lg" elevation="5">
        <v-card-title style="color: #232649">
          Rimborsi in attesa
        </v-card-title>
        <v-card-text>
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
            Le richieste di rimborso verranno processate in 7 giorni lavorativi.
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
          <rimborsi></rimborsi>
        </v-card-text>
      </v-card>
      <v-card class="mt-5 rounded-lg" elevation="5">
        <v-card-title style="color: #232649">
          Storico rimborsi
        </v-card-title>
        <v-alert
          dismissible
          close-text="Close Alert"
          v-model="alert2"
          border="left"
          colored-border
          color="info"
          elevation="2"
          class="mx-3 subtitle-2 grey--text text--darken-1 mb-12"
          max-width="500"
        >
          I rimborsi andati a buon fine non verranno accreditati come credito welfare spendibile ma direttamente sul conto del beneficiario.
        </v-alert>
        <div class="text-right mt-n13 mx-2">
          <v-btn
            color="info"
            icon
            v-if="!alert2"
            @click="alert2 = true"
          >
            <v-icon>mdi-information</v-icon>
          </v-btn>
        </div>
        <v-card-text>
          <storico-rimborsi></storico-rimborsi>
        </v-card-text>
      </v-card>
  </v-container>
</template>

<script>

import Rimborsi from "@/components/Rimborsi";
import StoricoRimborsi from "@/components/StoricoRimborsi";
import GoBack from "@/components/GoBack";

export default {
  layout: 'default',
  components: {
    GoBack,
    StoricoRimborsi,
    Rimborsi

  },
  data: () => ({
    alert: false,
    alert2: false
  }),
  computed: {},
  methods: {},
}
</script>

