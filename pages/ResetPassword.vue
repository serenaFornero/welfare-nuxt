<template>
    <v-container>
        <v-row class="my-10" align="center" justify="center">
            <v-col class="d-flex flex-row mt-n10">
                <v-img
                    contain
                    class="d-none d-md-block "
                    fluid
                    max-width="40%"
                    src="/directions.png">
                </v-img>
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

    data: () => ({}),
    methods: {}
}
</script>
