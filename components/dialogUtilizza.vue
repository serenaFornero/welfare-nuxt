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
          Utilizza
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
          <v-toolbar-title>Gift Card Name</v-toolbar-title>
        </v-toolbar>
        <v-list
          two-line
          subheader
        >
          <v-alert border="top"
                   colored-border
                   type="info"
                   elevation="2"
                   class="mx-2 mt-5 subtitle-2 grey--text text--darken-1"

          >
            I voucher potranno essere attivati cliccando sul pulsante "attiva". I voucher, dopo essere stati attivati, dovranno essere utilizzati entro 30 minuti.
          </v-alert>
          <v-list-item>
            <v-list-item-content>
              <v-list-item>  <v-img src="giftCardAmazon.png" class="my-5" contain width="200" height="150"></v-img></v-list-item>
              <v-list-item-subtitle class="text-center">Buono Regalo valido per l’acquisto di prodotti <br> disponibili su Amazon.it del vaore di 50,00 € </v-list-item-subtitle>
             <v-row justify="center" class="mt-3"> <dialog-attiva></dialog-attiva></v-row>
            </v-list-item-content>
          </v-list-item>

        </v-list>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import dialogAttiva from "@/components/dialogAttiva";

export default {
  components:{
    dialogAttiva

  },
  data () {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      giftCards: [
        {
          id: 1,
          name: "Amazon 50",
          price: 50
        },
        {
          id: 2,
          name: "Amazon 20",
          price: 20
        },
        {
          id: 3,
          name: "Amazon 15",
          price: 15
        },

      ]
    }

  },

}
</script>
