<template>
  <v-footer
    dark
    fixed
    color="#F7F9FC"
  >
    <v-col
      class="text-center"
      style="color: #2573d5"
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
