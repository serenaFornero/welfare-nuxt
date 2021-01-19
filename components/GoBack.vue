<template>
    <div class="mt-n8">
        <v-icon
            class="my-3 primary--text"
            @click="goBack"
        >
            mdi-arrow-left
        </v-icon>
    </div>
</template>

<script>
export default {
    name: "GoBack",
    methods: {
        goBack() {
            return this.$router.go(-1)
        }
    }
}
</script>

