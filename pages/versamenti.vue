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
          <v-list>
            <v-list-item v-for="transaction in transactions" :key="transaction.id" class="mb-5">
              <v-icon color="#29304d">mdi-shopping</v-icon>
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title>{{ transaction.name }}</v-list-item-title>
                  <v-list-item-subtitle>{{ transaction.date }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <p class="mt-3 font-weight-bold" :style="getColor(transaction.credit)"> {{transaction.credit}}€</p>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
  </v-container>
</template>

<script>

import GoBack from "@/components/GoBack";
export default {
  layout: 'default',
  components: {
    GoBack,
  },
  data: () => ({
    alert: false,
    transactions : [
      {
        id: 0,
        name: "Versamento previdenza",
        credit:  1000,
        date: "12-12-2020"
      },
      {
        id: 1,
        name: "Versamento previdenza",
        credit:  3000,
        date: "14-12-2020"
      }
    ],
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

