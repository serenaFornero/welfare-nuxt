<template>
  <v-footer
    dark
    fixed
    color="#A8D0E6"
  >
    <v-col
      class="text-center"
    >
      {{ new Date().getFullYear() }} — <strong>WeCare</strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: "MyFooter"
}
</script>
