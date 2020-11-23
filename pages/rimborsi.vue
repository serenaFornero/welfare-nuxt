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
    <v-row class="d-flex">
      <p class="headline">
        Rimborsi
      </p>
      <v-card class="rounded-lg">
        <v-card-title>
         Rimborsi in attesa
        </v-card-title>
        <v-card-text>
          <v-list>
            <v-list-item v-for="pendingRequest in pendingRequests" :key="pendingRequest.id" class="mb-5">
              <v-icon color="#29304d">mdi-shopping</v-icon>
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title>{{ pendingRequest.name }}</v-list-item-title>
                  <v-list-item-subtitle>{{pendingRequest.description}} </v-list-item-subtitle>
                  <v-list-item-action-text class="mt-2"> {{ pendingRequest.date }}</v-list-item-action-text>
                </v-list-item-content>
              </v-list-item>
              <p class="mt-3 font-weight-bold" :style="getColor(pendingRequest.credit)"> {{pendingRequest.credit}}</p>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
      <v-card class="mt-5 rounded-lg">
        <v-card-title>
          Storico rimborsi
        </v-card-title>
        <v-card-text>
          <v-list>
            <v-list-item v-for="transaction in transactions" :key="transaction.id" class="mb-5">
              <v-icon color="#29304d">mdi-shopping</v-icon>
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title>{{ transaction.name }}</v-list-item-title>
                  <v-list-item-subtitle>{{ transaction.date }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <p class="mt-3 font-weight-bold" :style="getColor(transaction.credit)"> {{transaction.credit}}</p>
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
        credit: "+" + 100,
        date: "12-12-2020"
      },
      {
        id: 1,
        name: "Rette scolastiche",
        credit: "+" + 500,
        date: "14-12-2020"
      }
    ],
    pendingRequests: [
      {
        id: 0,
        description: "Spese per i servizi di educazione e istruzione" ,
        name: "Rette scolastiche",
        credit: "+" + 500,
        date: "12-12-2020"
      },
    ]
  }),
  methods: {
    getColor(credit){
      console.log(credit)
      if (credit < 0){
        return "color: #f76c6c"
      } else if (credit > 0){
        return "color: #2573d5"
      }

    }
  },
}
</script>

