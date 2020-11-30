<template>
  <v-container fluid>
    <v-row>
      <avatar></avatar>
    </v-row>
    <card-credito class="my-3"></card-credito>
    <search-field></search-field>
    <v-card
      class="rounded-lg d-flex flex-wrap"
      elevation="5"
    >
      <v-card-title style="color: #232649">
        Le mie transazioni
      </v-card-title>
      <v-spacer></v-spacer>
      <v-card-text class="mt-n5">
        <v-list>
          <v-list-item
            v-for="transactions in transaction"
            :key="transactions.id"
            class="mb-5"
          >
            <v-list-item-avatar>
              <v-icon>{{getTransactionCategory(transaction.id).icon}}</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{ transactions.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ transactions.date }}</v-list-item-subtitle>
            </v-list-item-content>
            <p class="mt-3 font-weight-bold" :style="getColor(transactions.value)"> {{ transactions.value }} €</p>
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
  data: () => ({}),
  computed: {
    transaction() {
      return this.$store.getters["transactions/getTransactions"]
    },
    icons() {
      return this.$store.getters["icons/getIcons"]
    },
    categories() {
      return [
        {
          id: 0,
        color: 'red',
        icon: 'mdi-home'
        }
      ]
    }
  },
  methods: {
    getColor(value) {
      console.log(value)
      if (value < 0) {
        return "color: #f76c6c"
      } else if (value > 0) {
        return "color: #2573d5"
      }
    },
    getTransactionCategory(categoryId) {
      return this.categories.filter(el => el.id === 0)[0]
    }
    /*getIcon(name){
      for(let i = 0; i < this.icons.length; i++){
        console.log(name)
        if (name === this.icons[i].type){
          return this.icons[i].icon
        }
      }
    },*/

  },
}
</script>
