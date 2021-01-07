<template>
  <v-container fluid>
    <go-back/>
    <v-card class="rounded-lg" elevation="5">
      <v-card-title style="color: #232649">
        Carica Ricevuta
      </v-card-title>
      <v-card-text>
        <v-alert
          dismissible
          close-text="Close Alert"
          v-model="alert"
          border="left"
          colored-border
          color="info"
          elevation="2"
          class="mx-3 subtitle-2 grey--text text--darken-1 mb-12"
          max-width="500"
        >
          Per caricare una ricevuta:<br>
          1. Seleziona il file da allegare (sono consenti file pdf, jpg, png, bmp).<br>
          2. Clicca su Upload per caricare il file.<br>
          3. Ripeti l'operazione per ogni file da allegare.
          Le ricevute caricate potranno essere utilizzate per effettuare richieste di rimborso
          direttamente dalla seizione <strong>Richiedi rimborso</strong>.
        </v-alert>
        <div class="text-right mt-n13 mx-2">
          <v-btn
            color="info"
            icon
            v-if="!alert"
            @click="alert = true"
          >
            <v-icon>mdi-information</v-icon>
          </v-btn>
        </div>
        <v-form ref="form" v-model="valid">
          <v-file-input label="File name"></v-file-input>
          <v-textarea
            v-model="receipt.description"
            prepend-icon="mdi-comment"
            label="Note"
            rows="2"
          ></v-textarea>
          <v-card-actions class="justify-center">
            <v-btn
              @click="addReceipt"
              color="#2573d5"
              class="text-capitalize rounded-lg white--text"
              large
            >
              Carica
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
    <v-card class=" mt-5 rounded-lg" elevation="5">
      <v-card-title style="color: #232649">
        Storico Ricevute
      </v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item two-line v-for="item in receipts" :key="item.id">
            <v-icon color="#29304d" class="mr-5">mdi-shopping</v-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.fileName }}</v-list-item-title>
              <v-list-item-subtitle>
                {{ item.description }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import GoBack from "@/components/GoBack";

export default {
  components: {
    GoBack
  },
  name: "uploadReceipts",
  data: () => ({
    valid: true,
    alert: false,
    rules: [v => !!v || 'Il campo è cobbligatorio'],
    select4: null,
    receipt: {
      fileName: '',
      description: '',
      show: true
    },
    files: []
  }),
  computed: {
    receipts() {
      return this.$store.getters["receipts/getReceipt"]
    }
  },
  methods: {
    reset() {
      this.$refs.form.reset()
    },
    addReceipt: function () {
      this.$store.commit('receipts/addReceipt', {...this.receipt})
    },

  },
}
</script>
