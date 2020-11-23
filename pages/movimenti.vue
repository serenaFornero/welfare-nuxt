<template>
  <v-container fluid>
    <v-row>
      <avatar></avatar>
    </v-row>
    <card-credito class="my-3"></card-credito>
    <search-field></search-field>
    <v-card
      class="rounded-lg d-flex flex-wrap"
      hover
    >
      <v-card-title>
        Le mie transazioni
      </v-card-title>
     <v-spacer></v-spacer>
      <v-card-text class="mt-n5">
      <v-list>
        <v-list-item
          v-for="transaction in transactions"
          :key="transaction.id"
          class="mb-5">
          <v-list-item-avatar><v-icon :color="getIcon(transaction.category).color"> {{getIcon(transaction.category).icon}}</v-icon></v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{ transaction.shopName }}</v-list-item-title>
              <v-list-item-subtitle>{{ transaction.date }}</v-list-item-subtitle>
            </v-list-item-content >
          <p class="mt-3 font-weight-bold" :style="getColor(transaction.credit)"> {{transaction.credit}} €</p>
        </v-list-item>
      </v-list>
      </v-card-text>
    </v-card>
  </v-container>
</template>


<script>
import CardCredito from "@/components/cardCredito";
import Avatar from "@/components/avatar";
import SearchField from "@/components/searchField";

export default {
  layout: 'default',
  components: {
    SearchField,
    Avatar,
    CardCredito,
  },
data: () => ({
  trans:{
    shop: "Market"
  },

  categoriesIcons: [
    {
      type: "market",
      icon: "mdi-food",
      color:"#29304d"
    },
    {
      type: "transport",
      icon: "mdi-bus",
      color:  "#29304d"
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

  transactions : [
    {
      id: 0,
      shopName: "Market Pinerolo",
      category: "market",
      credit: -20,
      date: "12-12-2020"
    },
    {
      id: 1,
      shopName: "Trasporti",
      category: "transport",
      credit: "+" + 100,
      date: "14-12-2020"
    },
    {
      id: 2,
      shopName: "Bar Pinerolo",
      category: "bar",
      credit: -30.00,
      date: "15-12-2020"
    },
    {
      id: 3,
      shopName: "Parrucchiere Pinerolo",
      category: "beauty",
      credit: 0,
      date: "15-12-2020"
    },
    {
      id: 4,
      shopName: "Pasticceria Pinerolo",
      category: "market",
      credit: -10.00,
      date: "15-12-2020"
    }
  ],
}),
  methods: {
    getIcon(category){
      for(let i = 0; i < this.categoriesIcons.length; i++){
        if (category === this.categoriesIcons[i].type){
          return this.categoriesIcons[i]
        }
      }
    },
    getColor(credit){
      console.log(credit)
        if (credit < 0){
          return "color: #f76c6c"
        } else if (credit > 0){
          return "color: #2573d5"
        }

    }
  },
}
</script>
