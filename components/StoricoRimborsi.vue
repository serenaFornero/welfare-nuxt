<template>
  <v-list>
    <v-list-item v-for="transaction in getRefund" :key="transaction.id" class="mb-5">
      <v-icon color="#29304d">mdi-cash-refund</v-icon>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title> {{transaction.name}}</v-list-item-title>
          <v-list-item-subtitle>{{ transaction.date }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <p class="mt-3 font-weight-bold" :style="getColor(transaction.value)"> {{transaction.value}}</p>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
name: "StoricoRimborsi",
  computed:{
    getRefund(){
      return this.$store.getters["transactions/getRefund"]
    },
  },
  methods:{
    getColor(value){
      console.log(value)
      if (value < 0){
        return "color: #f76c6c"
      } else if (value > 0){
        return "color: #2573d5"
      }
    },
  },
}
</script>

