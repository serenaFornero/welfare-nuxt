<template>
<v-col>
<v-avatar
  size="56"
>
  <nuxt-link
    tag="img"
    :src="user.avatar"
    alt="user"
    to="/profilo">
  </nuxt-link>
</v-avatar>
<p class="headline mt-2 ml-2" style="color: #29304d ">
  {{user.name}} {{user.surname}}
</p>
</v-col>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },

  data: () => ({

  }),
  computed: {
    users() {
      return this.$store.getters["users/getUser"]
    },

  },

  methods: {

  }

}
</script>
