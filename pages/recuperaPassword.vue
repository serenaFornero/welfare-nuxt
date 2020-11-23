<template>
  <v-container fluid>
    <v-card
      class="d-flex justify-center rounded-lg"
      color="transparent"
      flat
    >
      <v-card
        class="text-center mb-16"
        width="400"
        flat
      >
        <v-row justify="center">
          <v-card-title class="mb-2 mt-3 ">Recupera Password</v-card-title>
          <v-card-subtitle>Inserisci l'indirizzo e-mail associato <br> al tuo account</v-card-subtitle>
        </v-row>

        <v-card-text>
          <v-img
            contain
            fluid
            height="200"
            src="/forgot-password.png"
            class="d-none d-sm-flex"
          ></v-img>
          <v-form
            ref="form"
          >
            <v-text-field
              v-model="email"
              :rules="[rules.emailRules, rules.required]"
              label="E-mail"
              prepend-icon="mdi-account-circle"
            />
          </v-form>
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn
            color="#374785"
            large
            dark
            class="mb-5 text-capitalize rounded-lg"
            to="/resetPassword"

          >
            Invia
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-card>
  </v-container>
</template>

<script>
import Password from "@/components/password";
export default {
  components: {Password},
  layout: 'notAutenticated',

  watch:{
    password(val) {
      console.log(val)
    }
  },

  data: () => ({
    email: '',
    rules: {
      required: value => !!value || 'Required.',
      emailRules: v => /.+@.+/.test(v) || 'E-mail must be valid',
    },
  }),
  methods: {
    reset () {
      this.$refs.form.reset()
    },
  }
}
</script>





