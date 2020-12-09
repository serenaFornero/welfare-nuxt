<template>
  <v-container fluid>
    <v-btn
      fab
      x-small
      class="mt-n10"
      to="/credito"
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
      <v-row  justify="center">
      <v-card-title>
        Trasferimento Effettuato!
      </v-card-title>
      </v-row >
      <v-card-subtitle class="text-center mt-3">
        Tieni traccia delle tue transazioni nella sezione <strong>movimenti.</strong>
      </v-card-subtitle>
      <v-row  justify="center">
      <v-card-actions>
        <v-btn
        dark
        color="#2573d5"
        class="text-capitalize mb-5 rounded-lg"
        to="/trasferimentoNonRiuscito"
        >
          Trasferisci di nuovo
        </v-btn>
      </v-card-actions>
      </v-row>
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
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],
    }
  },
  computed: {
    users() {
      return this.$store.getters["users/getUser"]
    },
  }
}
</script>
