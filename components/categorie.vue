<template>

    <v-row>
      <v-col class="d-flex flex-wrap justify-center">
        <div class="d-flex flex-column">
          <v-card
            class="my-5 mx-5 pa-5"
            height="100"
            width="100"
            outlined
            rounded
            elevation="2"
            hover
          >
            <nuxt-link :to="'/categorie/' + category.id"><v-img :src="category.src"></v-img></nuxt-link>
          </v-card>
          <p class="text-center font-weight-bold" style="color: #29304d">{{category.name}}</p>
        </div>
      </v-col>
    </v-row>

</template>

<script>
export default {
  props: {
    category: {
      type: Object,
    },
  },
  components: {},
  data: () => ({}),

  computed: {
    services(){
      return this.$store.getters["services/getServices"]
    },

  },
  /*mounted(){
    console.log(this.category)
  }*/
}

</script>
