<template>
  <v-form @submit.stop.prevent="addRelative" ref="form">
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="3">
        <v-text-field
          :rules="inputRules"
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
          :rules="inputRules"
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
          :rules="inputRules"
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
          :rules="inputRules"
          v-model="relative.relation"
          id="relation"
          :items="relative.relationship"
          prepend-inner-icon="mdi-account-multiple"
          label="Legame di parentela"
        ></v-select>
      </v-col>
    </v-row>
    <v-card-actions class="justify-center">
      <v-dialog
        v-model="dialog"
        persistent
        max-width="290"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="mb-5 text-capitalize rounded-lg white--text"
            type="submit"
            color="#2573d5"
            v-bind="attrs"
            v-on="on"
            :disabled="!valid"

          >
            Aggiungi

          </v-btn>
        </template>
        <v-card class="text-center rounded-lg">
          <v-card-actions class="justify-end">
            <v-btn
              icon
              @click="dialog = false"
            >
              <v-icon> mdi-close</v-icon>
            </v-btn>
          </v-card-actions>
          <v-card-text class="font-weight-bold mt-n5">Familiare aggiunto <br/> correttamente!</v-card-text>
        </v-card>
      </v-dialog>
    </v-card-actions>
  </v-form>
</template>

<script>
export default {
  components: {},

  data: () => ({
    valid: true,
    dialog: false,
    relative: {
      name: '',
      surname: '',
      birthDate: '',
      relation: '',
      relationship: ["Coniuge", "Figlio", "Fratello", "Sorella", "Suocero"],
    },
    inputRules: [v => !!v || 'I campi sono obbligatori'],


  }),
  methods: {
    addRelative: function () {
      this.$store.commit('relatives/addRelative', {...this.relative})
    },
    /*clear(){
      this.name= ''
      this.surname=''
      this.birthDate=''
      this.relation=''
      this.$refs.form.reset()
    }*/

  }
}
</script>

