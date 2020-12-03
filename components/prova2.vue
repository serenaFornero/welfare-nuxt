<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="#2573d5"
          dark
          v-bind="attrs"
          v-on="on"
          class="text-capitalize rounded-lg"

        >
          scopri
        </v-btn>
      </template>
      <v-card>
        <v-toolbar
          dark
          color="#29304d"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Gift card Name</v-toolbar-title>
        </v-toolbar>
        <v-list
          three-line
          subheader
        >
          <v-list-item v-for="values in giftCards" :key="values.id">
            <v-list-item-content>
              <v-list-item-title
                class="font-weight-bold"
                style="color: #29304d"
              >
                Gift Card {{ values.name }}
              </v-list-item-title>
              <v-list-item>
                <v-img
                  src="giftCardAmazon.png"
                  class="my-5"
                  contain
                  width="200"
                  height="150"
                >
                </v-img>
              </v-list-item>
              <v-list-item-subtitle
                class="text-center"
              >
                Buono Regalo valido per l’acquisto di prodotti disponibili su {{values.webSite}} del vaore di {{}}€
              </v-list-item-subtitle>
              <v-row justify="center">
                <v-btn
                  color="#2573d5"
                  dark
                  class="text-capitalize my-5 rounded-lg"
                  to="/trasferimentoEffettuato"
                >
                  Acquista {{}}€
                </v-btn>
              </v-row>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,

    }
  },
  computed: {
    giftCards() {
      return this.$store.getters["giftCards/getGiftCard"]
    }
  }

}
</script>
