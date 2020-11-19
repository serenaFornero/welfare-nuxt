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
            <v-icon>mdi-shopping</v-icon>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>{{ transaction.shopName }}</v-list-item-title>
                <v-list-item-subtitle>{{ transaction.date }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <p class="mt-3"> {{transaction.credit}}</p>
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
    transactions : [
      {
        id: 0,
        shopName: "Market",
        credit: "-20,00",
        date: "12-12-2020"
      },
      {
        id: 1,
        shopName: "Trasporti",
        credit: "+100,00",
        date: "14-12-2020"
      },
      {
        id: 2,
        shopName: "Alimentari Pinerolo",
        credit: "-30,00",
        date: "15-12-2020"
      },
      {
        id: 3,
        shopName: "Parrucchiere Pinerolo",
        credit: "-30,00",
        date: "15-12-2020"
      },
      {
        id: 4,
        shopName: "Pasticceria Pinerolo",
        credit: "-10,00",
        date: "15-12-2020"
      }
    ],
  }),
  computed: {
    changeIcon(){
      let a
      let shopName = this.transactions.shopName
      if (shopName === "Market"){
        a = "a"
      } else if (shopName === "Trasporti"){
        a = "b"
      } else a = "c"
    }
  }

}
</script>
