<template>
  <v-container fluid>
    <v-row class="d-flex">
      <p class="headline" style="color: #29304d">
        Portafoglio
      </p>
    </v-row>
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
              <nuxt-link to="/trasferimentiQrCode"><v-img src="no-border.png"></v-img></nuxt-link>
            </v-card>
            <p class="text-center font-weight-bold">Qr-code</p>
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
              <nuxt-link to="/negozio"><v-img src="up-arrow.png"></v-img></nuxt-link>
            </v-card>
            <p class="text-center font-weight-bold">Trasferimenti</p>
          </div>
        </v-col>
      </v-row>
      <!-- <v-card-title>
         <p class="title">Rimborsi</p>
       </v-card-title>-->
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
              <nuxt-link to="/richiestaRimborso"><v-img src="edit.png"></v-img></nuxt-link>
            </v-card>
            <p class="text-center font-weight-bold">Richiedi rimborso</p>
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
              <nuxt-link to="/rimborsi"><v-img src="deposit.png"></v-img></nuxt-link>
            </v-card>
            <p class="text-center font-weight-bold">Rimborsi</p>
          </div>
        </v-col>
      </v-row>
      <!--<v-card-title>
        <p class="title">Versamenti</p>
      </v-card-title>-->
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
              <nuxt-link to="/richiestaVersamento"><v-img src="edit.png"></v-img></nuxt-link>
            </v-card>
            <p class="text-center font-weight-bold">Effettua versamento</p>
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
              <nuxt-link to="/versamenti"><v-img src="share.png"></v-img></nuxt-link>
            </v-card>
            <p class="text-center font-weight-bold">Versamenti</p>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>

export default {

  layout: 'default',

  computed: {
    categoriesWallet(){
      return this.$store.getters["categories/getCategoryWallet"]
    }
  },
}
</script>
