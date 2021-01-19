<template>
    <v-container fill-height>
        <v-row align="top" justify="end">
            <v-col cols="12" sm="6">
                <login></login>
            </v-col>
        </v-row>
    </v-container>
</template>


<script>
import Login from '@/components/Login'

export default {
    layout: 'notAuthenticated',
    components: {
        Login
    }
}
</script>
