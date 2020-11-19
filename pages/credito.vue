<template>
  <v-container fluid>
            <v-row>
<avatar></avatar>
            </v-row>
            <card-credito class="my-3"></card-credito>
            <v-card
              class="rounded-lg d-flex flex-wrap" hover>
              <v-card-title class="text--secondary">
               I miei crediti
              </v-card-title>
              <v-card-text>
                    <p class="subtitle-1 mx-3">Totale accreditato nel  {{ new Date().getFullYear() }}:</p>
                    <p class="pb-3 ml-3">{{credit}} €</p>
                      <v-divider></v-divider>
                    <p class="subtitle-1 pt-3 mx-3">Credito residuo Gift Card:</p>
                    <p class="pb-3 ml-3">{{ giftCardCredit }} €</p>
                      <v-divider></v-divider>
                    <p class="subtitle-1 pt-3 mx-3">Scadenza credito disponibile:</p>
                    <p class="pb-3 ml-3">{{ expirationDate }}</p>
              </v-card-text>
            </v-card>
      </v-container>
</template>


<script>
import CardCredito from "@/components/cardCredito";
import Avatar from "@/components/avatar";
export default {
  layout: 'default',
  components: {
    Avatar,
    CardCredito,
  },
  data () {
    return {
      credit: 860.00,
      giftCardCredit: 258.23,
      expirationDate: "12/11/2020"

    }
  },
}
</script>
