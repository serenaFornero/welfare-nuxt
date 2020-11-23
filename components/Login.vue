<template>
  <v-container fluid>
    <v-card
      class="text-center rounded-lg"
      width="400"
      hover
    >
<v-row justify="center">
      <v-card-title class=" mt-3" style="color: #29304d" >
        Accedi alla tua area personale
      </v-card-title>
</v-row>
      <v-card-text>
        <v-form>
          <v-text-field
            v-model="email"
            :rules="[rules.emailRules, rules.required, rules.emailMatch]"
            label="E-mail"
            prepend-icon="mdi-account-circle"
          />
          <v-text-field
            :type="showPassword ? 'text' : 'password'"
            :rules="[rules.required, rules.emailMatch]"
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
            class="my-5 text-capitalize rounded-lg"
            large
            dark
            to="/credito"

          >
            Login
          </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>


<script>

export default {
  data: () => ({
    showPassword: false,
    checkbox: true,
    email: '',
    rules: {
      required: value => !!value || 'Required.',
      emailMatch: () => (`The email and password you entered don't match`),
      emailRules: v => /.+@.+/.test(v) || 'E-mail must be valid',
    },
  }),
}
</script>
