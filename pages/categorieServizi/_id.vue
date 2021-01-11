<template>
  <v-container fluid >
    <go-back/>

      <p class="headline" style="color: #29304d">
        {{getCategoryItem(services[0].categoryId).name}}
      </p>

    <search-field></search-field>
    <v-card
      class="rounded-lg"
      elevation="5"
    >
      <v-list>
        <v-list-item v-for="value in services" :key="value.id">
          <v-list-item-avatar class="rounded-lg">
            <v-img :src="value.src"></v-img>
           <!-- <v-icon :color="getCategoryItem(value.categoryId).color">{{ getCategoryItem(value.categoryId).icon }}</v-icon>-->
          </v-list-item-avatar>
          <nuxt-link to="/trasferisci" style="text-decoration: none">
            <v-list-item-content>
              <v-list-item-title class="font-weight-bold" style="color: #29304d">{{ value.name }}</v-list-item-title>
              <v-list-item-action-text class="font-weight-light">{{ value.address }}</v-list-item-action-text>
              <v-list-item-subtitle class="grey--text text--darken-1">{{ value.description }}</v-list-item-subtitle>
              <v-list-item-action-text class="grey--text text--darken-1 mt-2">{{ value.rating }}/5
              </v-list-item-action-text>
              <v-list-item-content>
                <v-divider></v-divider>
              </v-list-item-content>
            </v-list-item-content>
          </nuxt-link>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>


<script>
import SearchField from "@/components/SearchField";
import GoBack from "@/components/GoBack";


export default {

  layout: 'default',
  components: {
    GoBack,
    SearchField,

  },
  data() {
    return {}
  },

  computed: {
    categories() {
      return this.$store.getters["categories/getCategory"]
    },
    services(){
      console.log(this.$store.getters["services/getServiceById"](parseInt(this.$route.params.id)))
      return this.$store.getters["services/getServiceById"](parseInt(this.$route.params.id))
    },
  },
  methods: {
    getCategoryItem(categoryId) {
      for (let i = 0; i < this.categories.length; i++) {
        if (categoryId === this.categories[i].id) {
          return this.categories[i]
        }
      }
    },
  },
 /*mounted() {
    console.log(this.$route.params.id)
  }*/
}


</script>
