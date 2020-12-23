<template>
  <v-container fluid>
    <go-back/>
    <v-card class="rounded-lg" elevation="5">
      <v-card-title style="color: #232649">
        Versamenti al fondo di <br> previdenza complementare
      </v-card-title>
      <v-alert
        dismissible
        close-text="Close Alert"
        v-model="alert"
        border="left"
        color="info"
        colored-border
        elevation="2"
        class="mx-3 subtitle-2 grey--text text--darken-1 mb-16"
        max-width="500"

      >
        I contributi volontari che il lavoratore decide di destinare al fondo di previdenza complementare,
        sono integralmente esclusi dal reddito e non si cumulano con altra contribuzione ai fini del raggiungimento
        del limite di deducibilità pari a 5.164,57 euro annui. Oltre questa soglia tutte le somme
        versate alla fondo di previdenza complementare sono tassabili e dovranno essere inserite nella dichiarazione dei
        redditi.


      </v-alert>
      <div class="text-right mt-n16 mx-2">
        <v-btn
          color="info"
          icon
          v-if="!alert"
          @click="alert = true"
        >
          <v-icon>mdi-information</v-icon>
        </v-btn>
      </div>
      <v-card-text>
        <v-form>
          <v-text-field
            max-width="50"
            label="Inserisci importo da versare"
            placeholder="0,00"
            required
          ></v-text-field>
          <div class="d-flex justify-center">
            <v-btn class="mt-10 text-capitalize mb-3 rounded-lg" dark color="#2573d5" to="/richiestaInviata">
              Invia richiesta
            </v-btn>
          </div>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>

import GoBack from "@/components/GoBack";
export default {
  components: {GoBack},
  layout: 'default',

  data: () => ({
    alert: false,
  }),
  computed: {},
  methods: {},
}
</script>

