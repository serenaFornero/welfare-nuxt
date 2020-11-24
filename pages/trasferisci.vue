<template>
  <v-container fluid>
    <v-btn
      fab
      x-small
      class="mt-n10"
      to="/portafoglio"
      color="#29304d"
      outlined
      dark
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-card class="rounded-lg" elevation="5" >
        <v-card-title class="justify-center" style="color: #232649">Shop Name</v-card-title>
        <v-card-subtitle class="text-center">shop address</v-card-subtitle>
      <v-row justify="center" >
      <v-col
        cols="12"
        sm="6"
        md="3"
      >
        <v-text-field
          class="mx-2 rounded-lg my-5"
          label="Solo"
          placeholder="Inserisci importo"
          solo
        ></v-text-field>
      </v-col>
      </v-row>
      <v-card-actions class="justify-center">
        <v-btn
          color="#2573d5"
          class="text-capitalize my-5 rounded-lg"
          dark
          large
          to="/richiestaInviata"
        >Invia</v-btn>
      </v-card-actions>
    </v-card>


  </v-container>

</template>

<script>

export default {
  layout: 'default',
  components: {

  },
  data () {
    return {

    }
  },
}
</script>

