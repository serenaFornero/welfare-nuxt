<template>
  <v-container fluid>
    <p class="headline" style="color: #29304d">
      Portafoglio
    </p>
    <v-card
      class="rounded-lg"
      hover
    >
      <v-row>
        <v-col class="d-flex flex-wrap justify-center mt-3">
          <div class="d-flex flex-column">
            <v-card
              class="mb-2 mx-5 pa-5"
              height="100"
              width="100"
              outlined
              rounded
              elevation="2"
              hover
            >
              <nuxt-link to="/ordini">
                <v-img src="orders.png"></v-img>
              </nuxt-link>
            </v-card>
            <p class="text-center font-weight-bold" style="color: #29304d">Ordini</p>
          </div>
          <div class="d-flex flex-column">
            <v-card
              class="mb-2 mx-5 pa-5"
              height="100"
              width="100"
              outlined
              rounded
              elevation="2"
              hover
            >
              <nuxt-link to="/uploadReceipts">
                <v-img src="billing.png"></v-img>
              </nuxt-link>
            </v-card>
            <p class="text-center font-weight-bold" style="color: #29304d">Ricevute</p>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex flex-wrap justify-center">
          <div class="d-flex flex-column">
            <v-card
              class="mb-2 mx-5 pa-5"
              height="100"
              width="100"
              outlined
              rounded
              elevation="2"
              hover
            >
              <nuxt-link to="/richiestaRimborso">
                <v-img src="add.png"></v-img>
              </nuxt-link>
            </v-card>
            <p class="text-center font-weight-bold" style="color: #29304d">Richiedi rimborso</p>
          </div>
          <div class="d-flex flex-column">
            <v-card
              class="mb-2 mx-5 pa-5"
              height="100"
              width="100"
              outlined
              rounded
              elevation="2"
              hover
            >
              <nuxt-link to="/rimborsi">
                <v-img src="deposit.png"></v-img>
              </nuxt-link>
            </v-card>
            <p class="text-center font-weight-bold" style="color: #29304d">Rimborsi</p>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex flex-wrap justify-center">
          <div class="d-flex flex-column">
            <v-card
              class="mb-2 mx-5 pa-5"
              height="100"
              width="100"
              outlined
              rounded
              elevation="2"
              hover
            >
              <nuxt-link to="/richiestaVersamento">
                <v-img src="edit.png"></v-img>
              </nuxt-link>
            </v-card>
            <p class="text-center font-weight-bold" style="color: #29304d">Effettua versamento</p>
          </div>
          <div class="d-flex flex-column">
            <v-card
              class="mb-2 mx-5 pa-5"
              height="100"
              width="100"
              outlined
              rounded
              elevation="2"
              hover
            >
              <nuxt-link to="/versamenti">
                <v-img src="share.png"></v-img>
              </nuxt-link>
            </v-card>
            <p class="text-center font-weight-bold" style="color: #29304d">Versamenti</p>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  components: {},
  layout: 'default',

  computed: {},
}
</script>
