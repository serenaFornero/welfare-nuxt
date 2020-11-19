<template>
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-top-transition"
    >
      <template v-slot:activator="{ on, attrs }">

          <v-icon
            v-bind="attrs"
            v-on="on"
            class="mt-n15"
          >mdi-information-outline

          </v-icon>

      </template>
      <v-card>
        <v-toolbar
          dark
          color="#374785"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Assistenza</v-toolbar-title>
        </v-toolbar>
          <v-row>
            <v-col class="d-flex flex-wrap justify-center">
              <div class="d-flex flex-column">
                <v-card
                  class="my-5 mx-5 pa-5"
                  height="100"
                  width="100"
                  outlined
                  rounded
                  elevation="2"
                  hover
                >
                  <nuxt-link to=""><v-img src="log-in.png"></v-img></nuxt-link>
                </v-card>
                <p class="text-center font-weight-bold">Login</p>
              </div>
              <div class="d-flex flex-column">
                <v-card
                  class="my-5 mx-5 pa-5"
                  height="100"
                  width="100"
                  outlined
                  rounded
                  elevation="2"
                  hover
                >
                  <nuxt-link to="/negozio"><v-img src="profile.png"></v-img></nuxt-link>
                </v-card>
                <p class="text-center font-weight-bold">Profilo personale</p>
              </div>
              <div class="d-flex flex-column">
                <v-card
                  class="my-5 mx-5 pa-5"
                  height="100"
                  width="100"
                  outlined
                  rounded
                  elevation="2"
                  hover
                >
                  <nuxt-link to="/negozio"><v-img src="wallet.png"></v-img></nuxt-link>
                </v-card>
                <p class="text-center font-weight-bold">Trasferimenti</p>
              </div>
              <div class="d-flex flex-column">
                <v-card
                  class="my-5 mx-5 pa-5"
                  height="100"
                  width="100"
                  outlined
                  rounded
                  elevation="2"
                  hover
                >
                  <nuxt-link to="/negozio"><v-img src="shop.png"></v-img></nuxt-link>
                </v-card>
                <p class="text-center font-weight-bold">Servizi</p>
              </div>
              <div class="d-flex flex-column">
                <v-card
                  class="my-5 mx-5 pa-5"
                  height="100"
                  width="100"
                  outlined
                  rounded
                  elevation="2"
                  hover
                >

                  <nuxt-link to="/negozio"><v-img src="credit-card.png"></v-img></nuxt-link>
                </v-card>
                <p class="text-center font-weight-bold">Crediti</p>
              </div>
              <div class="d-flex flex-column">
                <v-card
                  class="my-5 mx-5 pa-5"
                  height="100"
                  width="100"
                  outlined
                  rounded
                  elevation="2"
                  hover
                >
                  <nuxt-link to="/negozio"><v-img src="location-pin.png"></v-img></nuxt-link>
                </v-card>
                <p class="text-center font-weight-bold">Mappa e <br> localizzazione</p>
              </div>
            </v-col>
          </v-row>
        </v-card>
    </v-dialog>
</template>

<script>

export default {

  data () {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
    }
  },
}
</script>
