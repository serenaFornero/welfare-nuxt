<template>
  <v-container fluid>
    <v-btn
      fab
      x-small
      class="mt-n10"
      to="/profilo"
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-card
      class="rounded-xl flex-column justify-center"
    >
      <v-card-title>
      Aggiungi familiare
        </v-card-title>
      <v-card-subtitle>
     In base all’art. 12 del Tuir sono ammessi i familiari anche non a carico fiscalmente e non necessariamente conviventi o parte del nucleo familiare.
      </v-card-subtitle>
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
          class="mb-5 mt-n5 text-capitalize" dark color="#374785" >
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
