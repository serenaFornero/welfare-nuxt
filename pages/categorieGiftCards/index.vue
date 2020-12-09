<template>
  <v-card
    class="rounded-lg"
    elevation="5"
  >
    <tabs></tabs>

  </v-card>
</template>

<script>

import tabs from "@/components/tabs";

export default {
  layout: 'default',
  components: {tabs},
  data () {
    return {}
  },
  methods:{},
  computed: {
    categories(){
      return this.$store.getters["giftCards/getCategory"]
    }
  },


}
</script>
