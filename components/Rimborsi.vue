<template>
  <v-list>
    <v-list-item v-for="item in getRefundRequest" :key="item.id" class="mb-5">
      <v-icon color="#29304d">mdi-cash-refund</v-icon>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
          <v-list-item-subtitle>{{item.description}} </v-list-item-subtitle>
          <v-list-item-action-text class="mt-2"> {{ item.date }}</v-list-item-action-text>
        </v-list-item-content>
      </v-list-item>
      <p class="mt-3 font-weight-bold" style="color: #f76c6c"> {{item.credit}}</p>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: "PendingRequests",
  computed:{
    getRefundRequest(){
      return this.$store.getters["refund/getRequest"]
    },
  }
}

</script>

