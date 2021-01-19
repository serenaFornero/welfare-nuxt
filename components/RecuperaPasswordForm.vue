<template>
    <v-container fluid>
        <v-card
            class="text-center mb-16 rounded-lg"
            width="400"
            elevation="5"
        >
            <v-row justify="center">
                <v-card-title class="mb-2 mt-3" style="color: #29304d">Recupera Password</v-card-title>
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
            <v-card-actions class="justify-center">
                <v-btn
                    color="#2573d5"
                    large
                    class="mb-5 text-capitalize rounded-lg white--text"
                    to="/resetPassword"
                    :disabled="!valid"
                >
                    Invia
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
import Password from '@/components/Password'

export default {
    components: { Password },
    name: 'RecuperaPassword',
    layout: 'notAuthenticated',

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
            emailRules: v => /.+@.+/.test(v) || 'Email non valida'
        }
    }),
    methods: {}
}
</script>


