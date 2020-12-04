


<template>
  <v-card>
    <v-list v-for="values in giftCards"
            :key="values.id">
      <v-list v-for="child in values.type"
              :key="child.id">
        <v-list-item-title
          class="font-weight-bold"
          style="color: #29304d"
        >
          Gift Card {{child.brand}}
        </v-list-item-title>
        <v-list-item v-for="item in child.variants" :key="item.id">
          {{item.value}}
        </v-list-item>
      </v-list>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,

    }
  },
  computed: {
    giftCards() {
      return this.$store.getters["giftCards/getGiftCard"]
    }
  }

}
</script>




