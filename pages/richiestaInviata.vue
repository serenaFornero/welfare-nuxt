<template>
  <v-container fluid>
    <v-btn
      fab
      x-small
      class="mt-n10"
      to="/negozio"
      color="#29304d"
      outlined
      dark
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-row v-for="values in users" :key="values.id">
      <avatar class="d-flex" :user="values"></avatar>
    </v-row>
    <card-credito class="my-3"></card-credito>
        <v-card
          class="rounded-lg" elevation="5">
          <v-row>
            <v-img src="good.png" class="mt-5 mb-3" height="80" width="100" contain></v-img>
          </v-row>
          <v-row justify="center">
            <v-card-title style="color: #232649">
              Richiesta inviata con successo!
            </v-card-title>
          </v-row>
            <v-card-subtitle class="text-center mt-3">
              Tieni traccia delle tue richieste rimborso nella sezione <strong>rimborsi.</strong>
            </v-card-subtitle>
            <v-card-text class="grey--text text--darken-1 text-center mt-2" >
              <span>Torna a </span> <nuxt-link to="/richiestaNonRiuscita"> Portafoglio</nuxt-link>
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
    return{

    }
  },
  computed: {
    users() {
      return this.$store.getters["users/getUser"]
    },
  }
}
</script>
