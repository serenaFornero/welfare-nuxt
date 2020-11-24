<template>
    <v-container fluid>
      <v-row class="d-flex">
        <p class="headline" style="color: #29304d">
          Alimentari
        </p>
      </v-row>
      <search-field></search-field>

      <v-card
        class="rounded-lg"
        elevation="5"
      >

        <v-list>
          <v-list-item v-for="shop in shops" :key="shop.id">
            <v-list-item-avatar><v-icon :color="getIcon(shop.category).color"> {{getIcon(shop.category).icon}}</v-icon></v-list-item-avatar>
            <nuxt-link to="/trasferimentoEffettuato" style="text-decoration: none">
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
              id: 1,
              category: "market",
              name: "Market Pinerolo",
              rating: 5,
              address: "Via Buniva 5, Pinerolo",
              description: "Lorem ipsum dolor sit amet"
            },
            {
              id: 2,
              category: "market",
              name: "Claudio Market",
              rating: 4,
              address: "Corso Torino 340, Pinerolo",
              description: "Lorem ipsum dolor sit amet"
            },
            {
              id: 3,
              category: "market",
              name: "Natura Sì",
              rating: 5,
              address: "Via Cambiano 15, Pinerolo",
              description: "Lorem ipsum dolor sit amet"
            },
            {
              id: 4,
              category: "market",
              name: "Mini Market",
              rating: 3,
              address: "Via Pasubio 8, Pinerolo",
              description: "Lorem ipsum dolor sit amet"
            },
            {
              id: 5,
              category: "market",
              name: "Alimentari Pinerolo",
              rating: 1,
              address: "Via Buniva 5, Pinerolo",
              description: "Lorem ipsum dolor sit amet"
            },
            {
              id: 6,
              category: "market",
              name: "Bio Bottega",
              rating: 2,
              address: "Via Buniva 5, Pinerolo",
              description: "Lorem ipsum dolor sit amet"
            },
          ],
          categoriesIcons: [
            {
              type: "market",
              icon: "mdi-food",
              color: "#29304d"
            },
            {
              type: "transport",
              icon: "mdi-bus",
              color: "#29304d"
            },
            {
              type: "beauty",
              icon: "mdi-account-heart",
              color: "#29304d"
            },
            {
              type: "bar",
              icon: "mdi-coffee",
              color: "#29304d"
            },
          ],
        }
      },
      methods: {
        getIcon(category){
          for(let i = 0; i < this.categoriesIcons.length; i++){
            if (category === this.categoriesIcons[i].type){
              return this.categoriesIcons[i]
            }
          }
        }
      },
    }

  </script>
