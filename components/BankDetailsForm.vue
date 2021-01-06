<template>
  <v-container>
    <form v-for="user in users" :key="user.id" >
     <v-row>
      <v-col
        cols="12"
        sm="6"
        md="3"
      >
        <v-text-field
          max-width="50"
          :value="user.name + user.surname"
          readonly
          label="Intestatario"
        >

        </v-text-field>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="3"

      >
        <v-text-field
          :value="user.iban"
          label="IBAN"
          readonly
        ></v-text-field>

      </v-col>
     </v-row>
    </form>
  </v-container>
</template>

<script>

export default {
  name: "",
  components:{


  },
  data () {
    return {
    }
  },
  computed: {
    users() {
      return this.$store.getters["users/getUser"]
    }
  },
}
</script>
