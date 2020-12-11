<template>
  <v-list>
    <v-list-item v-for="transaction in transactions" :key="transaction.id" class="mb-5">
      <v-icon color="#29304d">mdi-shopping</v-icon>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>{{ transaction.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ transaction.date }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <p class="mt-3 font-weight-bold" :style="getColor(transaction.credit)"> {{transaction.credit}}</p>
    </v-list-item>
  </v-list>
</template>


<script>

export default {
  name: "StoricoVersamenti",
  layout: 'default',
  components: {
  },
  data: () => ({
    transactions : [
      {
        id: 0,
        name: "Versamento previdenza",
        credit:  "+" + 1000,
        date: "12-12-2020"
      },
      {
        id: 1,
        name: "Versamento previdenza",
        credit:  "+" + 3000,
        date: "14-12-2020"
      }
    ],

  }),
  methods: {
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


