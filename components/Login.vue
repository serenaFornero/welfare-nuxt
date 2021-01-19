<template>
    <v-container fluid>
        <v-card
            class="text-center rounded-lg"
            width="400"
            elevation="5"
        >
            <v-row justify="center">
                <v-card-title class=" mt-3 primary--text">
                    Accedi alla tua area personale
                </v-card-title>
            </v-row>
            <v-form
                class="login"
                ref="form"
                v-model="valid"
                @submit.stop.prevent="login">
                <v-card-text>
                    <v-text-field
                        v-model="email"
                        :rules="[rules.emailRules, rules.required]"
                        label="E-mail"
                        prepend-icon="mdi-account-circle"
                    />
                    <v-text-field
                        v-model="password"
                        :append-icon=" showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required]"
                        :type=" showPassword ? 'text' : 'password'"
                        label="Password"
                        prepend-icon="mdi-lock"
                        @click:append=" showPassword = ! showPassword"
                    ></v-text-field>

                    <v-row justify="center">
                        <v-checkbox class="mt-1 ml-3 font-weight-light accent--text "
                                    v-model="checkbox"
                                    label="Ricordami"

                        ></v-checkbox>
                        <v-spacer></v-spacer>
                        <nuxt-link
                            to="/recuperaPassword"
                            class="font-weight-light mt-2 mr-2 text-decoration-none secondary--text"
                        >
                            Password dimenticata?
                        </nuxt-link>
                    </v-row>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions class="justify-center">
                    <v-btn
                        type="submit"
                        class="my-5 text-capitalize rounded-lg white--text accent"
                        large
                        :disabled="!valid"
                    >
                        Login
                    </v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
    </v-container>
</template>


<script>
import Password from '@/components/Password'

export default {
    components: {
        Password
    },
    name: "Login",
    data: () => ({
        valid: true,
        showPassword: false,
        checkbox: true,
        email: '',
        password: '',
        rules: {
            required: value => !!value || 'Il campo è obbligatorio',
            emailMatch: () => (`L'email e la password non corrispondono`),
            emailRules: v => /.+@.+/.test(v) || 'Email non valida'
        }
    }),
    methods: {
        login() {
            this.$store.commit('authenticate', true)
            this.$nextTick(() => {
                this.$router.push('/home')
            })
        }
    }
}
</script>
