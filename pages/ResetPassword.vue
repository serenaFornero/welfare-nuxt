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
          <reset-password-form></reset-password-form>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import ResetPasswordForm from "@/components/ResetPasswordForm";

export default {
  components: {
    ResetPasswordForm
  },
  layout: 'notAutenticated',

  data: () => ({}),
  methods: {}
}
</script>
