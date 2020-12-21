<template>
  <v-app>
    <v-container class="mx-auto">
      <v-row class="my-10" align="center" justify="center">
        <v-col class="d-flex flex-row mt-n10">
          <v-img
            contain
            class="d-none d-md-block "
            fluid
            max-width="40%"
            src="/directions.png">
          </v-img>
          <login></login>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>


<script>
import Login from "@/components/Login";

export default {
  layout: 'notAutenticated',
  components: {
    Login,

  }
}
</script>
