<template>
    <v-container fluid>
        <go-back/>
        <p class="headline primary--text">
            Assistenza
        </p>
        <v-card class="rounded-lg d-flex flex-wrap" hover>
            <CategoriesSupport v-for="value in categoriesSupport" :key="value.id" :category="value"></CategoriesSupport>
        </v-card>
    </v-container>
</template>

<script>

import CategoriesSupport from "@/components/CategoriesSupport"
import GoBack from "@/components/GoBack";

export default {
    layout: 'default',
    components: {
        GoBack,
        CategoriesSupport
    },
    computed: {
        categoriesSupport() {
            return this.$store.getters["faq/getCategory"]
        },
    }
}

</script>
