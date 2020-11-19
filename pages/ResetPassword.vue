<template>
  <v-container fluid>
    <v-card
      class="d-flex justify-center rounded-xl"
      color="transparent"
      flat
    >
            <v-card
              class="text-center mb-16"
              width="400"
              flat
            >
              <v-card-text>
                <p class="headline mt-3 font-weight-regular">Reimposta Password</p>
                <p class="subtitle-1 mt-3 mb-5 font-weight-regular">Scegli una nuova password</p>
                <v-img
                  contain
                  fluid
                  height="200"
                  src="/mobile-login.png"
                  class="d-none d-sm-flex"
                ></v-img>

                <form
                  ref="form"
                >
                <password
                  label="Nuova password"
                  v-model="password"
                ></password>
                <password
                  label="Conferma Password"
                  v-model="confirm_password"
                  :rules="[(password === confirm_password) || 'Password must match', rules.required]"
                ></password>
                </form>
              </v-card-text>
              <v-card-actions class="justify-center">
                <v-btn
                  color="#374785"
                  large
                  dark
                  class="mb-5 text-capitalize"
                  @click="e1 = 2"
                  to="/credito"
                >
                  Login
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
    e1: 1,
    email: '',
    password:"",
    confirm_password:"",
    rules: {
      required: value => !!value || 'Required.',
      emailMatch: () => (`The email and password you entered don't match`),
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
