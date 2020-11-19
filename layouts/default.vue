<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-row class="d-flex justify-center">
          <v-col cols="12" lg="12" md="10" sm="10" xs="6">
            <v-row >
              <v-col class="d-flex flex-row-reverse mb-n10 mt-2">
                <dialog-assistenza></dialog-assistenza>
              </v-col>
            </v-row>
            <nuxt/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
   <nav-bar></nav-bar>
  </v-app>
</template>
<script>

import NavBar from "@/components/navBar";
import dialogAssistenza from "@/components/dialogAssistenza";
export default {
  components: {
    NavBar,
    dialogAssistenza
  },
  data: () => ({
  }),

}
</script>
