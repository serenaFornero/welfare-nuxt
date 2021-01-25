<template>
    <v-container fluid>
        <v-card
            class="text-center mb-16 rounded-lg"
            width="400"
            elevation="5"
        >
            <v-row justify="center">
                <v-card-title class="mb-2 mt-3 primary--text">Recupera Password</v-card-title>
                <v-card-subtitle>Inserisci l'indirizzo e-mail associato <br> al tuo account</v-card-subtitle>
            </v-row>

            <v-card-text>
                <v-form
                    ref="form"
                    v-model="valid"
                >
                    <v-text-field
                        v-model="email"
                        :rules="[rules.emailRules, rules.required]"
                        label="E-mail"
                        prepend-icon="mdi-account-circle"
                    />
                </v-form>
            </v-card-text>
            <v-card-actions class="justify-center flex-column" >
                <v-btn
                    large
                    class="mb-5 text-capitalize rounded-lg white--text accent"
                    to="/reset-password"
                    :disabled="!valid"
                >
                    Invia
                </v-btn>
              <v-card-subtitle> Hai già un account?
                  <nuxt-link to="/" class="text-decoration-none">Login</nuxt-link>
              </v-card-subtitle>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
import Password from '@/components/Password'

export default {
    name: 'RecoverPasswordForm',
    components: {
        Password
    },
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
            emailRules: v => /\S+@\S+\.\S+/.test(v) || 'Email non valida'
        }
    }),
}
</script>


