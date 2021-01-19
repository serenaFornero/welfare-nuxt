<template>
    <v-container fill-height>
        <v-row align="center" justify="end">
            <v-col cols="12" sm="6">
                <reset-password-form></reset-password-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import ResetPasswordForm from '@/components/ResetPasswordForm'

export default {
    components: {
        ResetPasswordForm
    },
    layout: 'notAuthenticated',
}
</script>
