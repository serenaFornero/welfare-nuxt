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
    <v-row>
     <avatar></avatar>
    </v-row>
    <card-credito class="my-3"></card-credito>
    <v-card
      class="rounded-lg d-flex flex-wrap" hover>
      <v-row justify="center">
        <v-img src="good.png" class="mt-5 mb-3" height="80" width="100" contain></v-img>
        <v-card-title>
          Richiesta inviata con successo!
        </v-card-title>
        <v-card-subtitle class="text-center mt-3">
          Tieni traccia delle tue richieste rimborso nella sezione <strong>rimborsi.</strong>
        </v-card-subtitle>
        <v-card-actions>
          <v-btn
            dark
            color="#2573d5"
            class="text-capitalize mb-5"
            to="/richiestaNonRiuscita"
          >
            Portafoglio
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
}
</script>
