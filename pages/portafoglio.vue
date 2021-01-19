<template>
  <v-container fluid>
    <p class="headline primary--text">
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
            <p class="text-center font-weight-bold primary--text">Ordini</p>
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
              <nuxt-link to="/carica-ricevute">
                <v-img src="billing.png"></v-img>
              </nuxt-link>
            </v-card>
            <p class="text-center font-weight-bold primary--text">Ricevute</p>
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
              <nuxt-link to="/richiesta-rimborso">
                <v-img src="add.png"></v-img>
              </nuxt-link>
            </v-card>
            <p class="text-center font-weight-bold primary--text">Richiedi rimborso</p>
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
            <p class="text-center font-weight-bold primary--text">Rimborsi</p>
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
              <nuxt-link to="/richiesta-versamento">
                <v-img src="edit.png"></v-img>
              </nuxt-link>
            </v-card>
            <p class="text-center font-weight-bold primary--text">Effettua versamento</p>
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
            <p class="text-center font-weight-bold primary--text">Versamenti</p>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  layout: 'default',
}
</script>
