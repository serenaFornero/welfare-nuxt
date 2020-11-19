<template>
  <v-container fluid>
    <v-row class="d-flex">
      <v-card-title>
        <p class="headline">
          Negozio
        </p>
      </v-card-title>
      <v-spacer></v-spacer>
      <v-card-actions>
        <v-fab-transition>
          <v-btn
            color="#374785"
            fab
            dark
            small
            class="mt-n5"
            to="/categorie"
          >
            <v-icon>mdi-format-list-bulleted-square</v-icon>
          </v-btn>
        </v-fab-transition>
      </v-card-actions>
    </v-row>
    <search-field></search-field>
    <v-card
      class="rounded-lg"
      hover
    >
      <div class="d-flex">
        <v-card-title>
          <p class="title">Buoni acquisto</p>
        </v-card-title>
        <v-spacer></v-spacer>
        <v-btn
          class="mt-4 mr-5 text-capitalize"
          small
          color="#374785"
          outlined

        >
          Filtri
        </v-btn>
      </div>
      <v-card-text>
        <v-fab-transition>
          <v-btn
            color="#374785"
            dark
            to="/negozio"
            absolute
            fab
            top
            left
            x-small
            class="ml-n9 mt-8"
          >
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
        </v-fab-transition>
      </v-card-text>
      <v-card-text class="mt-n15">
        <v-list>
          <v-list-item v-for="giftCard in giftCards" :key="giftCard.id">
            <v-icon>mdi-wallet-giftcard</v-icon>
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title>{{ giftCard.name }}</v-list-item-title>
                <v-list-item-content>{{giftCard.description}}</v-list-item-content>
                <v-list-item-action>
                  <dialog-ordini></dialog-ordini>
                </v-list-item-action>
              </v-list-item-content>
            </v-list-item>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-container>
</template>


<script>
import SearchField from "@/components/searchField";
import dialogOrdini from "@/components/dialogOrdini";

export default {
  layout: 'default',
  components: {
    SearchField,
    dialogOrdini
  },
  data: () => ({
    giftCards: [
      {
        id: 1,
        name: "Gift Card Amazon",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        id: 2,
        name: "Gift Card Decathlon",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        id: 3,
        name: "Gift Card Netflix",
        description: "Lorem ipsum dolor sit amet"
      }
    ]
  }),
}
</script>
