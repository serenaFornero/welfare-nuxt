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
    <v-row class="d-flex">
      <p class="headline">
        Rimborsi
      </p>
    </v-row>

    <v-card class="rounded-lg">
      <v-card-title>
        Richiedi rimborso
      </v-card-title>
      <v-stepper  v-model="e6">
        <v-stepper-header>
          <v-stepper-step
            :complete="e6 > 1"
            color="#2573d5"
            step="1"
          >
            Dettagli spesa
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step
            :complete="e6 > 2"
            color="#2573d5"
            step="2"

          >
            Caricamento documenti
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step
            step="3"
            color="#2573d5"
          >
            Conferma e invia
          </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <v-alert border="top"
                     colored-border
                     type="info"
                     elevation="2"
                     class="mx-2 subtitle-2 secondary--text"

            >
              1. Inserisci l'importo di cui desideri richiedere il rimborso (è possibile richiedere un rimborso parziale della spesa sostenuta).
              <br> 2. Seleziona l'effettivo beneficiario. Se non è presente nell'elenco, vai in profilo e inseriscilo fra i tuoi familiari.

            </v-alert>

            <v-card
              flat
            >
              <v-form
                ref="form"
              >
                <v-row>
              <v-col
                cols="12"
                sm="6"
                md="3"
              >
                  <v-text-field
                    placeholder="0,00"
                    hint="Inserisci importo da rimborsare"
                    persistent-hint
                    required

                  ></v-text-field>
              </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="3"
                >
                  <v-select
                    :items="categoria"
                    placeholder=""
                    hint="Scegli la categoria di spesa"
                    persistent-hint
                    required
                  ></v-select>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="3"
                >
                  <v-select
                    :items="tipo"
                    hint="Scegli il tipo di spesa"
                    persistent-hint
                    required
                  ></v-select>
                </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="3"
                  >
                  <v-select
                    :items="beneficiario"
                    hint="Scegli l'effettivo beneficiario"
                    persistent-hint
                    required
                  ></v-select>
                  </v-col>
                </v-row>
              </v-form>
            </v-card>
            <div class="d-flex justify-center my-3">
              <v-btn
                @click="e6 = 2"
                color="#2573d5"
                class="text-capitalize"
                dark

              >
                Avanti
              </v-btn>
            </div>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-alert border="top"
                     colored-border
                     type="info"
                     elevation="2"
                     class="mx-2 subtitle-2 secondary--text"

            >
              1. Seleziona il file da allegare (sono consenti file pdf, jpg, png, bmp). <br>
              2. Clicca su Upload per caricare il file.<br>
              3. Ripeti l'operazione per ogni file da allegare
            </v-alert>
            <v-card-subtitle>

            </v-card-subtitle>
            <v-card
              flat
            >
              <v-card-text>
                <v-file-input
                  accept="image/*"
                  label=""
                  hint="Scegli i file da allegare"
                  persistent-hint
                  required
                ></v-file-input>
              </v-card-text>
            </v-card>
            <div class="d-flex justify-center my-3">
              <v-btn
                @click="e6 = 3"
                color="#2573d5"
                class="text-capitalize"
                dark
              >
                Avanti
              </v-btn>
            </div>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-alert border="top"
                     colored-border
                     type="info"
                     elevation="2"
                     class="mx-2 subtitle-2 secondary--text"

            >
              1. Controlla che tutti i dati siano corretti. <br>
              2. Clicca su Invia richiesta per completare la richiesta di rimborso.
            </v-alert>

<v-row justify="center" class="my-3">
            <v-btn
              color="#2573d5"
              class="text-capitalize"
              dark
              to="/trasferisci"
            >
              Invia richiesta
            </v-btn>
</v-row>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-card>
  </v-container>
</template>

<script>
export default {
  layouts: 'default',
  data () {
    return {
      e6: 1,
      categoria: ["Spese per servizi di educazione e istruzione","Spese per servizi di assistenza ai familiari", "Abbonamenti a trasporto pubblico"],
      tipo: [1,2,3,4,5],
      beneficiario: [1,2,3,4,5],
    }

    },
  methods: {
    reset () {
      this.$refs.form.reset()
    }

  },

}

</script>
