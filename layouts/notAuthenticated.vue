<template>
    <v-app>
        <v-app-bar
            class="background"
            dark
            dense
            flat
            app
        >
            <v-toolbar-title
                class="font-weight-medium mt-6 mb-3 text-center access--text"
            >
                WeLocal
            </v-toolbar-title>
        </v-app-bar>
            <v-main class="background-image">
                <nuxt/>
            </v-main>
        <my-footer></my-footer>
    </v-app>
</template>

<script>
import MyFooter from '~/components/MyFooter'

export default {
    components: { MyFooter }
}
</script>
<style>
.background-image {
    background-image: url("/directions.png");
    background-position: 10% center;
    background-size: 40%;
}
</style>
