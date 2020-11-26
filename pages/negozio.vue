<template>
    <v-container fluid>

      <v-row class="d-flex">
        <p class="headline" style="color: #29304d;">
          Negozio
        </p>
        <v-spacer></v-spacer>
          <v-btn
            class="mt-n1"
            color="#2573d5"
            fab
            dark
            small
            to="/categorie"
          >
            <v-icon>mdi-format-list-bulleted-square</v-icon>
          </v-btn>
      </v-row>
      <v-row class="d-none d-lg-block">

      </v-row>
      <search-field></search-field>
      <v-card
        class="rounded-lg"
        elevation="5"
      >
        <v-tabs
          color="#29304d"
          centered
          grow
          slider-color="#29304d"
        >
          <v-tab class="text-capitalize">Servizi vicino a te</v-tab>
          <v-tab class="text-capitalize">Buoni acquisto</v-tab>
          <v-tab-item>
            <v-row justify="center" class="d-md-none">
              <v-btn
                color="#2573d5"
                dark
                fixed
                style="margin-top: 550px;"
                top
                fab
                small
                to="/mappa"
              >
                <v-icon>mdi-map-marker</v-icon>
              </v-btn>
            </v-row>
              <v-list class="mt-5">
                <v-row class="d-none d-lg-block ml-3 mb-3" >
                  <span>Visualizza sulla </span> <nuxt-link to="/mappa"> Mappa</nuxt-link>
                </v-row>
                <v-list-item
                  v-for="shop in shops"
                  :key="shop.id"
                >
                  <v-list-item-avatar  tile class="rounded-lg">
                    <v-img
                      :src="changeImage(shop.id).src"
                    ></v-img>
                  </v-list-item-avatar>
                    <nuxt-link to="/trasferisci" style="text-decoration: none">
                      <v-list-item-content>
                        <v-list-item-title class="font-weight-bold" style="color: #29304d">{{ shop.name }}</v-list-item-title>
                        <v-list-item-action-text class="font-weight-light" >{{ shop.address }}</v-list-item-action-text>
                        <v-list-item-subtitle class="grey--text text--darken-1">{{shop.description}}</v-list-item-subtitle>
                        <v-list-item-action-text class="grey--text text--darken-1 mt-2">{{shop.rating}}/5</v-list-item-action-text>
                        <v-list-item-content><v-divider></v-divider></v-list-item-content>
                      </v-list-item-content>
                    </nuxt-link>
                  </v-list-item>
              </v-list>
          </v-tab-item>
          <v-tab-item>
              <v-list>
                <v-list-item
                  v-for="giftCard in giftCards"
                  :key="giftCard.id"
                >
                  <v-list-item-avatar
                    tile
                    class="rounded-lg"
                  >
                    <v-img :src="getImage(giftCard.id).src"></v-img>
                  </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title class="font-weight-bold" style="color: #29304d">{{ giftCard.name }}</v-list-item-title>
                      <v-list-item-subtitle class="grey--text text--darken-1">{{giftCard.description}}</v-list-item-subtitle>
                      <v-list-item-action>
                        <dialog-buoni-acquisto></dialog-buoni-acquisto>
                      </v-list-item-action>
                      <v-list-item-content><v-divider></v-divider></v-list-item-content>
                    </v-list-item-content>
                </v-list-item>
              </v-list>
          </v-tab-item>
        </v-tabs>
      </v-card>
    </v-container>
</template>



<script>
import SearchField from "@/components/searchField";
import dialogBuoniAcquisto from "@/components/dialogBuoniAcquisto";

export default {
  layout: 'default',
  components: {
    SearchField,
    dialogBuoniAcquisto

  },
  data () {
    return {
      tab: null,
      src:"shop1.jpg",
      imgShop:[
        {
          id: 1,
          src: "shop1.jpg",
        },
        {
          id: 2,
          src: "shop2.jpg",
        },
        {
          id: 3,
          src: "shop3.jpg",
        },
        {
          id: 4,
          src: "shop4.jpg",
        },
        {
          id: 5,
          src: "shop5.jpg",
        },
        {
          id: 6,
          src: "shop6.jpg",
        },
      ],
      shops: [
        {
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
          name: "Market",
          rating: 2,
          address: "Via Buniva 5, Pinerolo",
          description: "Lorem ipsum dolor sit amet"
        },
      ],
      imgGiftCard:[
        {
          id: 1,
          src: "amazon.jpg",
        },
        {
          id: 2,
          src: "decathlon.png",
        },
        {
          id: 3,
          src: "netflix.jpeg",
        }
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
  methods:{
    //imm negozio
    changeImage(id){
      for(let i = 0; i < this.imgShop.length; i++){
        if(id === this.imgShop[i].id){
          return this.imgShop[i]
        }
      }
    },
    //imm gift card
    getImage(id){
      for(let i = 0; i < this.imgGiftCard.length; i++){
        if(id === this.imgGiftCard[i].id){
          return this.imgGiftCard[i]
        }
      }
    }
  }
}
</script>



