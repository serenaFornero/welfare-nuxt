<template>
      <v-list>
        <v-list-item>
          <v-list-item-avatar tile class="rounded-lg">
            <v-img :src="orderList.src"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-text="'Gift Card ' + orderList.brand"></v-list-item-title>
            <v-list-item-subtitle v-text="orderList.description"></v-list-item-subtitle>
            <v-list-item-action>
             <v-btn :to="'/ordini/' + orderList.id"
                    color="#2573d5"
                    dark
                    class="text-capitalize rounded-lg"
             >
               Utilizza
             </v-btn>
            </v-list-item-action>
          </v-list-item-content>
          <v-list-item-action-text class="font-weight-bold" :style="getColor(orderList.value)">
            {{orderList.value }}€
          </v-list-item-action-text>
        </v-list-item>
      </v-list>
</template>

<script>


export default {
  layout: 'default',
  props:{
    orderList: {
      type: Object
    }
  },
  components: {},
  data: () => ({}),
  methods: {
    getColor(value) {
      if (value < 0) {
        return "color: #f76c6c"
      } else if (value > 0) {
        return "color: #2573d5"
      }
    },
  },


}
</script>
