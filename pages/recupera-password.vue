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
import RecoverPasswordForm from "@/components/RecoverPasswordForm";

export default {
    components: {
        RecoverPasswordForm,
    },
    layout: 'notAuthenticated',
}
</script>





