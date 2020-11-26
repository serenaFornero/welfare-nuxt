<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-combobox
          v-model="select"
          :items="categoria"
          label="Scegli la categoria di spesa"
          multiple
        ></v-combobox>
      </v-col>
      <v-col cols="12">
        <v-combobox
          v-model="select2"
          :items="tipo"
          label="Scegli il tipo di spesa"
          multiple
        ></v-combobox>
      </v-col>
      <v-col cols="12">
        <v-combobox
          v-model="select3"
          :items="beneficiario"
          label="Scegli l'effettivo beneficiario"
          multiple
        ></v-combobox>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="select"
          label="I'm readonly"
          max-width="50"
          readonly
        ></v-text-field>
        <v-text-field
          v-model="select2"
          label="I'm readonly"
          max-width="50"
          readonly
        ></v-text-field>
        <v-text-field
          v-model="select3"
          label="I'm readonly"
          max-width="50"
          readonly
        ></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  data () {
    return {
      categoria: ["Spese per servizi di educazione e istruzione","Spese per servizi di assistenza ai familiari", "Abbonamenti a trasporto pubblico"],
      tipo: [1,2,3,4,5],
      beneficiario: [1,2,3,4,5],
      select: "",
      select2: "",
      select3: "",
      items: [
        'Programming',
        'Design',
        'Vue',
        'Vuetify',
      ],
    }
  },
}

</script>
