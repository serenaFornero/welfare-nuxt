<template>
    <v-container fluid>
      <v-row class="d-flex">
        <p class="headline">
          Negozio
        </p>
        <v-spacer></v-spacer>
        <v-card-actions>
          <v-btn
            color="#374785"
            fab
            dark
            small
            class="mt-n2"
            to="/categorie"
          >
            <v-icon>mdi-format-list-bulleted-square</v-icon>
          </v-btn>
        </v-card-actions>
      </v-row>
      <search-field></search-field>
      <v-card
        class="rounded-lg"
        hover
      >
        <v-tabs color="#374785" centered grow slider-color="#374785">
          <v-tab class="text-capitalize">Servizi vicino a te</v-tab>
          <v-tab class="text-capitalize">Buoni acquisto</v-tab>
          <v-tab-item>
              <v-list class="mt-5">
                <v-list-item v-for="shop in shops" :key="shop.id">
                  <v-icon>mdi-shopping</v-icon>
                  <v-list-item four-line>
                    <nuxt-link to="/trasferimentoEffettuato" style="text-decoration: none">
                      <v-list-item-content>
                        <v-list-item-title>{{ shop.name }} {{shop.rating}}/5</v-list-item-title>
                        <v-list-item-subtitle class="subtitle-2">{{ shop.address }}</v-list-item-subtitle>
                        <v-list-item-content>{{shop.description}}</v-list-item-content>
                        <v-list-item-content><v-divider></v-divider></v-list-item-content>
                      </v-list-item-content>
                    </nuxt-link>
                  </v-list-item>
                </v-list-item>
              </v-list>
          </v-tab-item>
          <v-tab-item>
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
                      <v-list-item-content><v-divider></v-divider></v-list-item-content>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item>
              </v-list>
          </v-tab-item>
        </v-tabs>
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
  data () {
    return {
      tab: null,
      shops: [
        {
          src:"good.png",
          id: 1,
          name: "Tasty place",
          rating: 5,
          address: "Via Buniva 5, Pinerolo",
          description: "Lorem ipsum dolor sit amet"
        },
        {
          id: 2,
          name: "Bar Italia",
          rating: 4,
          address: "Corso Torino 340, Pinerolo",
          description: "Lorem ipsum dolor sit amet"
        },
        {
          id: 3,
          name: "Bar Roma",
          rating: 5,
          address: "Via Cambiano 15, Pinerolo",
          description: "Lorem ipsum dolor sit amet"
        },
        {
          id: 4,
          name: "Mini Market",
          rating: 3,
          address: "Via Pasubio 8, Pinerolo",
          description: "Lorem ipsum dolor sit amet"
        },
        {
          id: 5,
          name: "Alimentari",
          rating: 1,
          address: "Via Buniva 5, Pinerolo",
          description: "Lorem ipsum dolor sit amet"
        },
        {
          id: 6,
          name: "Parrucchiere",
          rating: 2,
          address: "Via Buniva 5, Pinerolo",
          description: "Lorem ipsum dolor sit amet"
        },
      ],
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
    }
  },
}
</script>




