<template>
  <v-container fluid>
      <p class="headline" style="color: #29304d">
        Ordini
      </p>
      <v-card
        class="rounded-lg d-flex flex-wrap flex-column justify-center"
        elevation="5"
      >
        <v-card-title style="color: #29304d">
          I miei ordini
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
          I voucher sono solitamente disponibili entro 48 ore lavorative dall'ordine.
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
        <v-card-text class="mt-n5">
          <v-card-subtitle v-if="orderList.length === 0">
            Al momento non ci sono ordini da visualizzare.
          </v-card-subtitle>
      <lista-ordini v-else v-for="item in orderList" :key="item.id" :orderList="item"></lista-ordini>
        </v-card-text>
      </v-card>
  </v-container>
</template>


<script>
import CardCredito from "@/components/CardCredito";
import listaOrdini from "@/components/ListaOrdini";
import Avatar from "@/components/Avatar";

export default {
  layout: 'default',
  components: {
    Avatar,
    CardCredito,
    listaOrdini
  },
  data: () => ({
    alert:false,
  }),
  methods: {},
  computed: {
    orderList(){
      return this.$store.getters['orders/getOrderList']
    }
  }
}
</script>
