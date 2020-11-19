<template>
  <v-container fluid>
    <v-btn
      fab
      x-small
      class="mt-n10"
      to="/portafoglio"
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-row class="d-flex">
      <p class="headline">
        Versamenti
      </p>
    </v-row>

    <v-card class="rounded-lg">
      <v-card-title>
       Versamenti al fondo di <br> previdenza complementare
      </v-card-title>
      <v-card-subtitle>
        I contributi volontari che il lavoratore decide di destinare al fondo di previdenza complementare,
        sono integralmente esclusi dal reddito e non si cumulano con altra contribuzione ai fini del raggiungimento
        del limite di deducibilità pari a 5.164,57 euro annui. Oltre questa soglia tutte le somme
        versate alla fondo di previdenza complementare sono tassabili e dovranno essere inserite nella dichiarazione dei redditi.
      </v-card-subtitle>
      <v-card-text>
        <v-form>
          <v-text-field
            placeholder="0,00"
            hint="Inserisci importo da versare"
            persistent-hint
            required
          ></v-text-field>
          <div class="d-flex justify-center">
            <v-btn class="mt-10 text-capitalize mb-3" dark color="#374785" to="/richiestaInviata">
              Invia richiesta
            </v-btn>
          </div>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>
