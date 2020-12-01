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
                <v-row class="d-none d-lg-block ml-3 mb-3 ">
                  <span class="font-weight-light grey--text text--darken-1 ">Visualizza sulla </span> <nuxt-link style="text-decoration: none" class="font-weight-bold" to="/mappa"> Mappa</nuxt-link>
                </v-row>
                <v-list-item
                  v-for="values in services"
                  :key="values.id"
                >
                  <v-list-item-avatar  tile class="rounded-lg">
                    <v-img
                      :src="values.src"
                    ></v-img>
                  </v-list-item-avatar>
                    <nuxt-link to="/trasferisci" style="text-decoration: none">
                      <v-list-item-content>
                        <v-list-item-title class="font-weight-bold" style="color: #29304d">{{ values.name}}</v-list-item-title>
                        <v-list-item-action-text class="font-weight-light" >{{ values.address}}</v-list-item-action-text>
                        <v-list-item-subtitle class="grey--text text--darken-1">{{values.description}}</v-list-item-subtitle>
                        <v-list-item-action-text class="grey--text text--darken-1 mt-2">{{values.rating}}/5</v-list-item-action-text>
                        <v-list-item-content><v-divider></v-divider></v-list-item-content>
                      </v-list-item-content>
                    </nuxt-link>
                  </v-list-item>
              </v-list>
          </v-tab-item>
          <v-tab-item>
              <v-list>
                <v-list-item
                  v-for="values in giftCards"
                  :key="values.id"
                >
                  <v-list-item-avatar
                    tile
                    class="rounded-lg"
                  >
                   <v-img :src="values.src"></v-img>
                  </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title class="font-weight-bold" style="color: #29304d">{{ values.brand }}</v-list-item-title>
                      <v-list-item-subtitle class="grey--text text--darken-1">{{values.description}}</v-list-item-subtitle>
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
    }
  },
  methods:{
    //imm negozio

    //imm gift card
   /* getImage(id){
      for(let i = 0; i < this.imgGiftCard.length; i++){
        if(id === this.imgGiftCard[i].id){
          return this.imgGiftCard[i]
        }
      }
    }*/
  },
  computed: {
    services() {
      return this.$store.getters["services/getServices"]
    },
    giftCards() {
      return this.$store.getters["giftCards/getGiftCard"]
    }
  }
}
</script>



