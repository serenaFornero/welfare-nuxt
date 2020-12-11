<template>
  <v-container fluid>
            <v-card
              class="text-center mb-16 rounded-lg"
              width="400"
              elevation="5"

            >
              <v-row justify="center">
                <v-card-title class="mb-2 mt-3" style="color: #29304d">Reimposta Password</v-card-title>
                <v-card-subtitle>Scegli una nuova password</v-card-subtitle>
              </v-row>
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
              <v-card-text>
                <password
                  label="Nuova password"
                  v-model="password"
                ></password>
                <password
                  label="Conferma Password"
                  v-model="confirm_password"
                  :rules="[(password === confirm_password) || 'Le password non corrispondono', rules.required]"
                ></password>
              </v-card-text>
                </form>
              <v-card-actions class="justify-center">
                <v-btn
                  color="#2573d5"
                  large
                  class="mb-5 text-capitalize rounded-lg white--text"
                  to="/credito"
                >
                  Login
                </v-btn>
              </v-card-actions>
            </v-card>
  </v-container>
</template>

<script>
import Password from "@/components/Password";
export default {
  components: {Password},
  layout: 'notAutenticated',

  watch:{
    password(val) {
      console.log(val)
    }
  },

  data: () => ({
    password:"",
    confirm_password:"",
    rules: {
      required: value => !!value || 'Il campo è obbligatorio',

    },
  }),
  methods: {}
}
</script>
