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
               class="mx-3 subtitle-2 grey--text text--darken-1"
               max-width="500"
      >
        In base all’art. 12 del Tuir sono ammessi i familiari anche non a carico fiscalmente e non necessariamente
        conviventi o parte del nucleo familiare. Si tratta in particolare del coniuge, dei figli legittimi, naturali o adottivi,
        dei genitori, fratelli o sorelle, dei suoceri, generi e nuore.
      </v-alert>
      <v-card-text>
        <v-form @submit.stop.prevent="addRelative">
          <v-row>
            <v-col
              cols="12"
              sm="6"
              md="3">
              <v-text-field
                v-model="relative.name"
                id="name"
                label="Nome"
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="3">
              <v-text-field
                v-model="relative.surname"
                id="surname"
                label="Cognome"
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="3">
              <v-text-field
                v-model="relative.birthDate"
                id="birthDate"
                label="Data di nascita"
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="3">
              <v-select
                v-model="relative.relation"
                id="relation"
                :items="relative.relationship"
                prepend-inner-icon="mdi-account-multiple"
                label="Legame di parentela"
              ></v-select>
            </v-col>
          </v-row>
          <v-card-actions class="justify-center">
            <v-btn
              class="mb-5 mt-n5 text-capitalize rounded-lg"
              type="submit"
              dark
              color="#2573d5"
              @click="addRelative"
            >
              Aggiungi

            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>

    </v-card>
  </v-container>
</template>

<script>
export default {

  data: () => ({
    relative: {
      name: '',
      surname: '',
      birthDate: '',
      relation: '',
      relationship: ["Coniuge", "Figlio", "Fratello", "Sorella", "Suocero"],
    }
  }),
  methods: {
    addRelative: function () {
      this.$store.commit('relatives/addRelative',{...this.relative})
      this.relative = {
        name: '',
        surname: '',
        birthDate: '',
        relation: '',
      }
    }
  }
}
</script>
