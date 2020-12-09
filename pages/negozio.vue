<template>
    <v-container fluid>
      <v-row class="d-flex">
        <p class="headline" style="color: #29304d;">
          Negozio
        </p>
        <v-spacer></v-spacer>
          <v-btn
            class="mt-n1"
            color="#2573d5"
            fab
            dark
            small
            to="/categorieServizi"
          >
            <v-icon>mdi-format-list-bulleted-square</v-icon>
          </v-btn>
      </v-row>
      <search-field></search-field>
      <div >
       <index></index>
      </div>
    </v-container>
</template>



<script>
import SearchField from "@/components/searchField";
import index from "@/pages/categorieGiftCards/index";


export default {

  layout: 'default',
  components: {
    SearchField,
    index


  },
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
      giftCards() {
        return this.$store.getters["giftCards/getGiftCard"]
      }
    }
}
</script>



