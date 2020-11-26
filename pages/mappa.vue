<template>
  <v-input></v-input>
</template>

<script>
export default {
  mounted() {
    const autocomplete = new this.$google.maps.places.Autocomplete(inputElement,
      {
        types: ['geocode'],
      },
    );
  },
}
</script>
