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
        <v-card-subtitle v-if="pendingDeposit.length === 0">
          Al momento non ci sono versamenti in attesa di essere confermati.
        </v-card-subtitle>
        <v-list v-else>
          <v-list-item two-line class="mb-5" v-for="item in pendingDeposit" :key="item.id">
            <v-icon color="#29304d" class="mr-5">mdi-cash-plus</v-icon>
            <v-list-item-content>
              <v-list-item-title>{{item.name}}</v-list-item-title>
              <v-list-item-subtitle>{{ item.date }}</v-list-item-subtitle>
            </v-list-item-content>
            <p class="mt-4 font-weight-bold" style="color:#F4976C">{{item.credit}}€</p>
          </v-list-item>
        </v-list>

      </v-card>
      <v-card class="mt-5 rounded-lg" elevation="5">
        <v-card-title style="color: #232649">
          Storico versamenti
        </v-card-title>
        <v-card-subtitle v-if="deposits.length === 0">
          Al momento non ci sono versamenti da mostrare.
        </v-card-subtitle>
        <v-card-text>
          <v-list>
            <v-list-item two-line v-for="item in deposits" :key="item.id" class="mb-5">
              <v-icon color="#29304d" class="mr-5">mdi-cash-plus</v-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ item.name }}</v-list-item-title>
                  <v-list-item-subtitle>{{ item.date }}</v-list-item-subtitle>
                </v-list-item-content>
              <p class="mt-3 font-weight-bold" :style="getColor(item.credit)"> {{item.credit}}€</p>
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

  }),
  computed:{
    deposits(){
      return this.$store.getters["deposit/getDeposit"]
    },
    pendingDeposit(){
      return this.$store.getters["deposit/getPendingDeposit"]
    },
  },
  methods: {
    getColor(credit){
      console.log(credit)
      if (credit < 0){
        return "color: #f76c6c"
      } else if (credit > 0){
        return "color: #2573d5"
      }
    },
  },
}
</script>

