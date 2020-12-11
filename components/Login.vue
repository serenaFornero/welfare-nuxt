<template>
  <v-container fluid>
    <v-card
      class="text-center rounded-lg"
      width="400"
      elevation="5"
    >
      <v-row justify="center">
            <v-card-title class=" mt-3" style="color: #29304d" >
              Accedi alla tua area personale
            </v-card-title>
      </v-row>
      <v-card-text>
        <v-form class="login" ref="form"  v-model="valid">
          <v-text-field
            v-model="email"
            :rules="[rules.emailRules, rules.required]"
            label="E-mail"
            prepend-icon="mdi-account-circle"
          />
          <!--
           :rules="[rules.emailRules, rules.required, rules.emailMatch]"
          :rules="[rules.required, rules.emailMatch]"
          -->
          <v-text-field
            v-model="password"
            :type="showPassword ? 'text' : 'Password.vue'"
            :rules="[rules.required]"

            label="Password"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
        </v-form>
        <v-row justify="center">
            <v-checkbox class="mt-1 ml-3 font-weight-light "
                        v-model="checkbox"
                        label="Ricordami"
                        color="#2573d5"

            ></v-checkbox>
            <v-spacer></v-spacer>
            <nuxt-link
              to="/recuperaPassword"
              style="color: #757575"
              class="font-weight-light mt-2 mr-2 text-decoration-none"
            >
              Password dimenticata?
            </nuxt-link>
        </v-row>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions class="justify-center">
          <v-btn
            color="#2573d5"
            class="my-5 text-capitalize rounded-lg white--text"
            large
            to="/credito"
            :disabled="!valid"
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
  data: () => ({
    valid: true,
    showPassword: false,
    checkbox: true,
    email: '',
    password: '',
    rules: {
      required: value => !!value || 'Il campo è obbligatorio',
      emailMatch: () => (`L'email e la password non corrispondono`),
      emailRules: v => /.+@.+/.test(v) || 'Email non valida' ,
    },
  }),
  methods:{}
}
</script>
