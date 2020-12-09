<template>
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
      v-for="item in services"
      :key="item.id"
    >
      <v-list-item-avatar  tile class="rounded-lg">
        <v-img
          :src="item.src"
        ></v-img>
      </v-list-item-avatar>
      <nuxt-link to="/trasferisci" style="text-decoration: none">
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
</v-tab-item>
<v-tab-item>
  <v-list>
    <v-list-item v-for="value in categories" :key="value.id">
      <v-list-item-avatar tile class="rounded-lg">
        <v-img :src="value.src"></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="font-weight-bold text-center" style="color: #29304d">{{value.brand}}</v-list-item-title>
        <v-list-item-subtitle class="grey--text text--darken-1 text-center">Buono Regalo valido per l’acquisto <br> di prodotti  disponibili su <br> {{value.webSite}}</v-list-item-subtitle>
        <v-list-item-action class="justify-center">
          <v-btn
            color="#2573d5"
            dark
            class="text-capitalize rounded-lg"
            :to="'/categorieGiftCards/' + value.id"
          >
            Scopri
          </v-btn>
        </v-list-item-action>
        <v-list-item-content><v-divider></v-divider></v-list-item-content>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</v-tab-item>
</v-tabs>
</template>

<script>
export default {
  layout: 'default',
  components: {},
  data () {
    return {
      tab: null,
    }
  },
  methods:{},
  computed: {
    services() {
      return this.$store.getters["services/getServices"]
    },
    categories(){
      console.log(this.$store.getters["giftCards/getCategory"])
      return this.$store.getters["giftCards/getCategory"]
    }
  },
  /*mounted(){
    console.log(this.categories)
  }*/
}
</script>
