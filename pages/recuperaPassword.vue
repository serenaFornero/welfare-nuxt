<template>
    <v-container fill-height>
        <v-row align="center" justify="end">
            <v-col cols="12" sm="6">
                <recupera-password-form></recupera-password-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Password from '@/components/Password'
import RecuperaPasswordForm from '@/components/RecuperaPasswordForm'

export default {
    components: {
        Password,
        RecuperaPasswordForm
    },
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





