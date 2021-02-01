<template>
    <v-container fluid>
        <go-back/>
        <v-row>
            <p class="headline primary--text">
                Servizi vicino a te
            </p>
            <v-spacer></v-spacer>
        </v-row>

        <v-card class="rounded-lg d-flex flex-wrap" hover>
            <CategoriesServices v-for="value in categoriesServices"
                                :key="value.id"
                                :category="value"
            ></CategoriesServices>
        </v-card>

        <v-row justify="center" class="d-md-none">
            <v-btn
                color="accent"
                fixed
                fab
                bottom
                right
                style="bottom: 64px!important;"
                to="/mappa-servizi"
            >
                <v-icon>mdi-map-marker</v-icon>
            </v-btn>
        </v-row>
    </v-container>
</template>

<script>

import CategoriesServices from "@/components/CategoriesServices";
import GoBack from "@/components/GoBack";

export default {
    layout: 'default',
    components: {
        GoBack,
        CategoriesServices
    },
    computed: {
        categoriesServices() {
            return this.$store.getters["services/getCategory"]
        },
    }
}

</script>

