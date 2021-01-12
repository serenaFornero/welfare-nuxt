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
      <v-list >
        <v-list-item four-line v-for="item in services" :key="item.id" >
          <v-list-item-avatar class="rounded-lg">
            <v-img :src="item.src"></v-img>
          </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="font-weight-bold" style="color: #29304d">{{ item.name }}</v-list-item-title>
              <v-list-item-subtitle class="font-weight-light">{{ item.address }}</v-list-item-subtitle>
              <v-list-item-subtitle class="grey--text text--darken-1">{{ item.description }}</v-list-item-subtitle>
              <v-list-item-subtitle class="grey--text text--darken-1 mt-2">{{ item.rating }}/5</v-list-item-subtitle>
            </v-list-item-content>
              <v-list-item-action >
                <v-btn
                fab
                @click="$refs.dialog.open(item)"
                color="#2573d5"
                x-small
                class="white--text"
              >
                <v-icon> mdi-arrow-right-bold-circle </v-icon>
              </v-btn>
              </v-list-item-action>
        </v-list-item>
      </v-list>

      <dialog-trasferisci ref="dialog"></dialog-trasferisci>
    </v-card>
  </v-container>
</template>


<script>
import SearchField from "@/components/SearchField";
import GoBack from "@/components/GoBack";
import DialogTrasferisci from "@/components/DialogTrasferisci";


export default {

  layout: 'default',
  components: {
    GoBack,
    SearchField,
    DialogTrasferisci


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
