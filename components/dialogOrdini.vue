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
          color="#374785"
          dark
          v-bind="attrs"
          v-on="on"
          class="text-capitalize"
        >
          scopri
        </v-btn>
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
          <v-toolbar-title>Gift Card Name</v-toolbar-title>
        </v-toolbar>
        <v-list
          three-line
          subheader
        >
          <v-list-item v-for="giftCard in giftCards" :key="giftCard.id">
            <v-list-item-content>
              <v-list-item-title class="font-weight-bold">Gift Card {{giftCard.name}}</v-list-item-title>
              <v-list-item>  <v-img src="giftCardAmazon.png" class="my-5" contain width="200" height="150"></v-img></v-list-item>
              <v-list-item-subtitle class="text-center">Buono Regalo valido per l’acquisto di prodotti disponibili su Amazon.it del vaore di {{giftCard.price}}€ </v-list-item-subtitle>
              <v-list-item-title class="font-weight-bold text-center my-2">{{giftCard.price}}€</v-list-item-title>
            <v-row justify="center"><v-btn color="#374785" dark class="text-capitalize my-5">Acquista</v-btn></v-row>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      giftCards: [
        {
          id: 1,
          name: "Amazon",
          price: "50,00"
        },
        {
          id: 2,
          name: "Amazon",
          price: "20,00"
        },
        {
          id: 3,
          name: "Amazon",
          price: "15,00"
        },

      ]
    }

  },
}
</script>
