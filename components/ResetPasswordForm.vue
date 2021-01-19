<template>
    <v-container fluid>
        <v-card
            class="text-center rounded-lg"
            width="400"
            elevation="5"
        >
            <v-row justify="center">
                <v-card-title class="mb-2 mt-3 primary--text">Reimposta Password</v-card-title>
                <v-card-subtitle>Scegli una nuova password</v-card-subtitle>
            </v-row>
            <v-form class="login"
                    ref="form"
                    v-model="valid"
                    @submit.stop.prevent="login"
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
import Password from "@/components/Password";

export default {
    components: {
        Password
    },
    name: "ResetPasswordForm",
    watch: {
        password(val) {
            console.log(val)
        }
    },

    data: () => ({
        valid: true,
        password: "",
        confirm_password: "",
        rules: {
            required: value => !!value || 'Il campo è obbligatorio',
        },
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
