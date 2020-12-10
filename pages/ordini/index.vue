<template>
  <v-container fluid>
    <v-row class="d-flex">
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
        <v-alert border="top"
                 colored-border
                 type="info"
                 elevation="2"
                 class="mx-3 subtitle-2 grey--text text--darken-1"
                 max-width="500"

        >
          I voucher sono solitamente disponibili entro 48 ore lavorative dall'ordine.
        </v-alert>
        <v-card-text class="mt-n5">
      <lista-ordini v-for="item in orderList" :key="item.id" :orderList="item"></lista-ordini>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>


<script>
import CardCredito from "@/components/cardCredito";
import listaOrdini from "@/components/listaOrdini";
import Avatar from "@/components/avatar";

export default {
  layout: 'default',
  components: {
    Avatar,
    CardCredito,
    listaOrdini
  },
  data: () => ({}),
  methods: {},
  computed: {
    orderList(){
      return this.$store.getters['orders/getOrderList']
    }
  }
}
</script>
