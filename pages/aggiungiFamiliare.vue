<template>
  <v-container fluid>
    <v-btn
      fab
      x-small
      class="mt-n10"
      to="/profilo"
      color="#29304d"
      outlined
      dark
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-card
      class="rounded-lg flex-column justify-center" elevation="5"
    >
      <v-card-title style="color: #232649">
      Aggiungi familiare
        </v-card-title>
      <v-alert border="top"
               colored-border
               type="info"
               elevation="2"
               class="mx-2 subtitle-2 grey--text text--darken-1"

      >
        In base all’art. 12 del Tuir sono ammessi i familiari anche non a carico fiscalmente e non necessariamente conviventi
        o parte del nucleo familiare. Si tratta in particolare del coniuge, dei figli legittimi, naturali o adottivi, dei
        genitori, fratelli o sorelle, dei suoceri, generi e nuore.
      </v-alert>
      <v-card-text>
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="3">
            <v-text-field
              max-width="50"
              value=""
              label="Nome e cognome"
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="3">
            <v-text-field
              value=""
              label="Data di nascita"
              append-icon="mdi-calendar"
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="3">
            <v-select
              :items="items"
              value=""
              label="Legame di parentela"
            ></v-select>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn
          class="mb-5 mt-n5 text-capitalize rounded-lg" dark color="#2573d5" >
          Aggiungi
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>


export default {
  layout: 'default',
  components: {},

  data: () => ({
  items: ["Coniuge", "Figlio", "Fratello", "Sorella", "Suocero"]
})

}
</script>
