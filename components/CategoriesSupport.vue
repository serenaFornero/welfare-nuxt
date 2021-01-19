<template>
    <v-col class="d-flex flex-wrap justify-center mt-3">
        <div class="d-flex flex-column">
            <v-card
                class="mb-2 pa-5"
                height="100"
                width="100"
                outlined
                rounded
                elevation="2"
                hover
            >
                <nuxt-link :to="'/assistenza/' + category.id">
                    <v-img :src="category.src"></v-img>
                </nuxt-link>
            </v-card>
            <p class="text-center font-weight-bold primary--text">{{ category.name }}</p>
        </div>
    </v-col>
</template>

<script>
export default {
    name: "CategoriesSupport",
    props: {
        category: {
            type: Object,
        },
    },
}
</script>


