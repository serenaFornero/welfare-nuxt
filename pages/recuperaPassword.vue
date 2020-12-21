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
          <recupera-password-form></recupera-password-form>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import Password from "@/components/Password";
import RecuperaPasswordForm from "@/components/RecuperaPasswordForm";

export default {
  components: {
    Password,
    RecuperaPasswordForm
  },
  layout: 'notAutenticated',

  watch: {
    password(val) {
      console.log(val)
    }
  },

  data: () => ({
    valid: true,
    email: '',
    rules: {
      required: value => !!value || 'Il campo è obbligatorio',
      emailRules: v => /.+@.+/.test(v) || 'Email non valida',
    },
  }),
  methods: {}
}
</script>





