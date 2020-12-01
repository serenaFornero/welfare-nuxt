<template>
  <v-container fluid>
    <v-row class="d-flex">
      <p class="headline" style="color: #29304d">
        Ordini
      </p>

    </v-row>
    <v-card
      class="rounded-lg d-flex flex-wrap flex-column justify-center" elevation="5"
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
        <v-list>
          <v-list-item v-for="values in orders" :key="values.id">
            <v-icon color="#29304d">mdi-shopping</v-icon>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>{{ values.name }}</v-list-item-title>
                <v-list-item-subtitle>{{values.description}}</v-list-item-subtitle>
                <v-list-item-action><dialog-utilizza></dialog-utilizza></v-list-item-action>
              </v-list-item-content>
            </v-list-item>
          <p class="mt-3 font-weight-bold" :style="getColor(values.value)"> {{values.value}}€</p>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-container>
</template>


<script>
import CardCredito from "@/components/cardCredito";
import dialogUtilizza from "@/components/dialogUtilizza";
import Avatar from "@/components/avatar";
export default {
  layout: 'default',
  components: {
    Avatar,
    CardCredito,
    dialogUtilizza
  },
  data: () =>  ({}),
  methods:{
    getColor(value){
      if (value < 0){
        return "color: #f76c6c"
      } else if (value > 0){
        return "color: #2573d5"
      }
    }
  },
  computed: {
    orders() {
      return this.$store.getters["orders/getOrder"]
    }
  }
}
</script>
