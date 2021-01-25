<template>
    <v-app>
        <v-main class="background-image">
            <nuxt/>
        </v-main>
        <my-footer></my-footer>
    </v-app>
</template>

<script>
import MyFooter from '~/components/MyFooter'

export default {
    components: {MyFooter}
}
</script>

<style>
.background-image {
    background-image: url("/directions.png");
    background-position: 10% center;
    background-size: 40%;
}
</style>
