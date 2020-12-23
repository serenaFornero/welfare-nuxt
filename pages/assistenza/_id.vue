<template>
  <v-container>
    <go-back/>
    <v-card class="rounded-lg mt-2">
      <v-toolbar
        color="#29304d"
      >
        <v-toolbar-title class="white--text">{{getCategoryItem(getFaq[0].categoryId).name}}</v-toolbar-title>
      </v-toolbar>
      <template>
        <v-expansion-panels accordion focusable>
          <v-expansion-panel
            v-for="value in getFaq"
            :key="value.id"
          >
            <v-expansion-panel-header>
              {{ value.name }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              {{value.description}}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </template>
    </v-card>
  </v-container>
</template>

<script>
import GoBack from "@/components/GoBack";

export default {
  components:{
    GoBack
  },
  data () {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
    }
  },
  computed:{
    categories() {
      return this.$store.getters["faq/getCategory"]
    },
    getFaq(){
      return this.$store.getters["faq/getFaqById"](parseInt(this.$route.params.id))
    }
  },
  methods:{
    getCategoryItem(categoryId) {
      for (let i = 0; i < this.categories.length; i++) {
        if (categoryId === this.categories[i].id) {
          return this.categories[i]
        }
      }
    },
  },
  mounted() {
    console.log(this.$route.params.id)
  }
}
</script>
