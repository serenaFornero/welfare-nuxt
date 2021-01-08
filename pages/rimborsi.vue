<template>
  <v-container fluid>
    <go-back/>
      <v-card class="rounded-lg" elevation="5">
        <v-card-title style="color: #232649">
          Rimborsi in attesa
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
        <v-card-text>
          <v-card-subtitle v-if="getRefundRequest.length === 0">
            Al momento non ci sono richieste di rimborso in attesa di essere confermate.
          </v-card-subtitle>
          <v-list v-else>
            <v-list-item two-line v-for="item in getRefundRequest" :key="item.id" class="mb-5">
              <v-icon class="mr-5" color="#29304d">mdi-cash-refund</v-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ item.category }}</v-list-item-title>
                  <v-list-item-subtitle>{{item.type}} </v-list-item-subtitle>
                </v-list-item-content>
              <p class="mt-3 font-weight-bold" style="color:#F4976C"> {{item.credit}}€</p>
            </v-list-item>
          </v-list>
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
        <v-card-subtitle v-if="getRefund.length === 0">
          Al momento non ci sono richieste di rimborso in attesa di essere confermate.
        </v-card-subtitle>
          <v-list v-else>
            <v-list-item two-line v-for="transaction in getRefund" :key="transaction.id" class="mb-5">
              <v-icon class="mr-5"  color="#29304d">mdi-cash-refund</v-icon>
                <v-list-item-content>
                  <v-list-item-title> {{transaction.name}}</v-list-item-title>
                  <v-list-item-subtitle>{{ transaction.date }}</v-list-item-subtitle>
                </v-list-item-content>
              <p class="mt-3 font-weight-bold" :style="getColor(transaction.value)"> {{transaction.value}}€</p>
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
    alert2: false
  }),
  computed: {
    getRefundRequest(){
      return this.$store.getters["refund/getRequest"]
    },
    getRefund(){
      return this.$store.getters["transactions/getRefund"]
    },
  },
  methods: {
    getColor(value){
      console.log(value)
      if (value < 0){
        return "color: #f76c6c"
      } else if (value > 0){
        return "color: #2573d5"
      }
    },
  },
}
</script>

