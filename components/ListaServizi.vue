<template>
  <v-list class="mt-5">
    <v-row class="d-none d-lg-block ml-3 mb-3 ">
      <span class="font-weight-light grey--text text--darken-1 ">Visualizza sulla </span> <nuxt-link style="text-decoration: none" class="font-weight-bold" to="/mappa"> Mappa</nuxt-link>
    </v-row>
    <v-list-item
      v-for="item in services"
      :key="item.id"
    >
      <v-list-item-avatar  tile class="rounded-lg">
        <v-img
          :src="item.src"
        ></v-img>
      </v-list-item-avatar>
      <nuxt-link :to="'/servizi/' + item.id" style="text-decoration: none">
        <v-list-item-content>
          <v-list-item-title class="font-weight-bold" style="color: #29304d">{{ item.name}}</v-list-item-title>
          <v-list-item-action-text class="font-weight-light" >{{ item.address}}</v-list-item-action-text>
          <v-list-item-subtitle class="grey--text text--darken-1">{{item.description}}</v-list-item-subtitle>
          <v-list-item-action-text class="grey--text text--darken-1 mt-2">{{item.rating}}/5</v-list-item-action-text>
          <v-list-item-content><v-divider></v-divider></v-list-item-content>
        </v-list-item-content>
      </nuxt-link>
    </v-list-item>
  </v-list>
</template>

<script>
import DialogTrasferisci from "@/components/DialogTrasferisci";
export default {
  props: {

  },

  components: {DialogTrasferisci},
  data () {
    return {}
  },
  methods:{},
  computed: {
    services() {
      return this.$store.getters["services/getServices"]
    },

  },
}
</script>
