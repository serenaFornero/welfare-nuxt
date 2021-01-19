<template>
    <v-container fill-height>
        <v-row align="center" justify="end">
            <v-col cols="12" sm="6">
                <recover-password-form></recover-password-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Password from '@/components/Password'
import RecoverPasswordForm from "@/components/RecoverPasswordForm";

export default {
    components: {
        RecoverPasswordForm,
        Password,
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
}
</script>





