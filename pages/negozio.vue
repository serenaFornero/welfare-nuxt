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
            to="/categorie"
          >
            <v-icon>mdi-format-list-bulleted-square</v-icon>
          </v-btn>
      </v-row>
      <search-field></search-field>
      <div >
        <services/>
      </div>
    </v-container>
</template>



<script>
import SearchField from "@/components/searchField";
import services from "@/components/services";

export default {

  layout: 'default',
  components: {
    SearchField,
    services

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



