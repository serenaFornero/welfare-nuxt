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
      <v-card class="rounded-lg">
        <v-card-title>
          Versamenti in attesa
        </v-card-title>
        <v-card-subtitle>
          Al momento non ci sono versamenti in attesa di essere confermati.
        </v-card-subtitle>
      </v-card>
      <v-card class="mt-5 rounded-lg">
        <v-card-title>
          Storico versamenti
        </v-card-title>
        <v-card-text>
          <v-list>
            <v-list-item v-for="transaction in transactions" :key="transaction.id" class="mb-5">
              <v-icon>mdi-shopping</v-icon>
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title>{{ transaction.name }}</v-list-item-title>
                  <v-list-item-subtitle>{{ transaction.date }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <p class="mt-3"> {{transaction.credit}}</p>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>

export default {
  layout: 'default',
  components: {
  },
  data: () => ({
    transactions : [
      {
        id: 0,
        name: "Abbonamento trasporti",
        credit: "+100,00",
        date: "12-12-2020"
      },
      {
        id: 1,
        name: "Rette scolastiche",
        credit: "+500,00",
        date: "14-12-2020"
      }
    ],
    pendingRequests: [
      {
        id: 0,
        description: "Spese per i servizi di educazione e istruzione" ,
        name: "Rette scolastiche",
        credit: "+500,00",
        date: "12-12-2020"
      },
    ]
  }),
}
</script>

