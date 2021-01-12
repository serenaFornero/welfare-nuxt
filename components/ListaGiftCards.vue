<template>
  <v-list>
    <v-list-item>
      <v-list-item-avatar tile class="rounded-lg">
        <v-img :src="category.src"></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="font-weight-bold text-center" style="color: #29304d">{{ category.brand }}
        </v-list-item-title>
        <v-list-item-subtitle class="grey--text text--darken-1 text-center">Buono Regalo valido per l’acquisto <br> di
          prodotti disponibili su <br> {{ category.webSite }}
        </v-list-item-subtitle>
        <v-list-item-action class="justify-center">
          <v-btn
            color="#2573d5"
            dark
            class="text-capitalize rounded-lg"
            :to="'/giftCards/' + category.id"
          >
            Scopri
          </v-btn>
        </v-list-item-action>
        <v-list-item-content>
          <v-divider></v-divider>
        </v-list-item-content>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  props: {
    category: {
      type: Object
    }
  },

  components: {},
  data() {
    return {}
  },
  methods: {},
  computed: {},
}
</script>
