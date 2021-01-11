<template>

  <v-card class="rounded-lg" elevation="5" >
    <div v-for="item in services" :key="item.id">
      <v-card-title class="justify-center" style="color: #232649">shop name {{item.name}}</v-card-title>
      <v-card-subtitle class="text-center"> shop address </v-card-subtitle>
      <v-btn
        @click="$refs.dialog.open(item)"
        color="#2573d5"
        class="text-capitalize rounded-lg mb-3 white--text"
      >
        Acquista
      </v-btn>
    </div>
    <dialog-trasferisci ref="dialog"></dialog-trasferisci>
  </v-card>
</template>

<script>
import DialogTrasferisci from "@/components/DialogTrasferisci";
export default {
  components: {DialogTrasferisci},
  computed: {
  services(){
    return this.$store.getters["services/getServiceById"](parseInt(this.$route.params.id))
  }
  },

}
</script>

<style scoped>

</style>
