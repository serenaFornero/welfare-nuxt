
<template>
  <v-container class="mb-10" fluid >
    <v-card
      class="text-center rounded-xl"
      max-width="600"
      align="center"
      hover
    >
      <v-card-text>
        <h1 class="font-weight-light mt-5">Benvenuto su WeLocal</h1>
        <h2 class="font-weight-light mt-5">Registrati e scopri le soluzioni pensate per te</h2>
        <v-form
          class="mt-5"
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="name"
                :rules="nameRules"
                label="Nome e Cognome"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-select
                v-model="select"
                :items="items"
                :rules="[v => !!v || 'Il campo è obbligatorio']"
                label="Azienda"
              ></v-select>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="username"
                :rules="usernameRules"
                label="Username"
                value=""
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                :type="showPassword ? 'text' : 'password'"
                label="Password*"
                v-model="password"
                type="password"
                :rules="[v => !!v || 'Il campo è obbligatorio']"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                :type="showPassword ? 'text' : 'password'"
                label="Conferma Password*"
                v-model="confirm_password"
                type="password"
                :rules="[(password === confirm_password) || 'La Password non corrisponde']"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
              >
              </v-text-field>

            </v-col>
          </v-row>
          <v-card-actions>
            <v-btn

              color="rgb(247, 108, 108, 0.8)"
              dark
              @click="reset"
            >
              Reset
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              :disabled="!valid"
              color="#24305e"
              dark
              @click="validate"
            >
              Registrati
            </v-btn>
          </v-card-actions>
        </v-form>

        <v-card-text>
          <v-divider></v-divider>
          <v-card-subtitle>Hai già un account? <nuxt-link to="/">Accedi</nuxt-link></v-card-subtitle>
        </v-card-text>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>

export default {
  data: () => ({
    valid: false,
    step: 1,

    name: '',
    nameRules: [
      v => !!v || 'Il campo è obbligatorio',
    ],
    username: '',
    usernameRules: [
      v => !!v || 'Il campo è obbligatorio',
    ],
    email: '',
    emailRules: [
      v => !!v || 'Il campo è obbligatorio',
      v => /.+@.+\..+/.test(v) || 'E-mail non valida',
    ],
    confirm_password: '',
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
    ],
    checkbox: false,
    showPassword: false,
    password: '',


  }),

  methods: {
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    },
  },
}

</script>


