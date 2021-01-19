<template>
    <v-footer
        fixed
        class="background"
    >
        <v-col class="text-center accent--text">
            {{ new Date().getFullYear() }} — <strong>WeLocal</strong>
        </v-col>
    </v-footer>
</template>

<script>
export default {
    name: 'MyFooter'
}
</script>
