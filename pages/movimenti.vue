<template>
  <v-container fluid>
    <v-row v-for="values in users" :key="values.id">
      <avatar class="d-flex" :user="values"></avatar>
    </v-row>
    <CardCreditAvailable class="my-3"></CardCreditAvailable>
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
            v-for="item in transaction"
            :key="item.id"
            class="mb-5"
          >
            <v-list-item-avatar>
              <v-icon :color="getItem(item.idCategory).color">{{ getItem(item.idCategory).icon }}</v-icon>
              <!-- <v-icon>{{getTransactionCategory(transaction.id).icon}}</v-icon> -->
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{ item.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ item.date }}</v-list-item-subtitle>
            </v-list-item-content>
            <p class="mt-3 font-weight-bold" :style="getColor(item.value)"> {{ item.value }} €</p>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import CardCreditAvailable from "@/components/CardCreditAvailable";
import Avatar from "@/components/Avatar";
import SearchField from "@/components/SearchField";

export default {
  layout: 'default',
  components: {
    SearchField,
    Avatar,
      CardCreditAvailable,
  },
  data: () => ({}),
  computed: {
    transaction() {
      return this.$store.getters["transactions/getTransactions"]
    },
    categories() {
      return this.$store.getters["categories/getCategory"]
    },
    catGiftCard(){
      return this.$store.getters["giftCards/getCategory"]
    },
    concat(){
      return this.categories.concat(this.catGiftCard)
    },
    refund() {
      return this.$store.getters["wallet/getRefund"]
    },
    users() {
      return this.$store.getters["users/getUser"]
    },
    concatena(){
      return this.categories.concat(this.refund)
    },
  },
  methods: {
    getColor(value) {
      if (value < 0) {
        return "color: #f76c6c"
      } else if (value > 0) {
        return "color: #2573d5"
      }
    },
    getItem(idCategory) {
      for (let i = 0; i < this.concat.length; i++ ){
        if (idCategory === this.concat[i].id) {
          return this.concat[i]
        }
      }
    },
  }
}
</script>
