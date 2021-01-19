<template>
    <v-app>
        <v-main>
            <v-container fluid>
                <v-row class="d-flex justify-center">
                    <v-col cols="12" lg="12" md="10" sm="10" xs="6">
                        <v-row>
                            <v-col class="d-flex flex-row-reverse mb-n10 mt-2">
                                <nuxt-link to="/assistenza" style="text-decoration: none">
                                    <v-icon
                                        class="mt-n15">mdi-progress-question
                                    </v-icon>
                                </nuxt-link>
                            </v-col>
                        </v-row>
                        <nuxt/>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
        <nav-bar></nav-bar>
    </v-app>
</template>
<script>

import NavBar from '@/components/NavBar'

export default {
    middleware: 'authenticated',
    components: {
        NavBar
    }
}
</script>
