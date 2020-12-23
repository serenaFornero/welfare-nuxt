<template>
  <div class="mt-n8">
  <v-btn
    fab
    x-small
    color="#29304d"
    outlined
    @click="goBack"
    class="my-3"
  >
    <v-icon>mdi-arrow-left</v-icon>
  </v-btn>
  </div>
</template>

<script>
export default {
  name: "GoBack",
  methods: {
    goBack(){
      return this.$router.go(-1)
    }
  }
}
</script>

