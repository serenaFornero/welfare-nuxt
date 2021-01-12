<template>
  <v-container fluid>

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
        label="Nome e cognome"
      ></v-text-field>
    </v-col>
    <v-col
      cols="12"
      sm="6"
      md="3"

    >
      <v-text-field
        :value="user.birthDate"
        label="Data di nascita"
        readonly
      ></v-text-field>

    </v-col>
      <v-col
        cols="12"
        sm="6"
        md="3"

      >
        <v-text-field
          :value="user.taxCode"
          label="Codice Fiscale"
          readonly
        ></v-text-field>

      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="3"

      >
        <v-text-field
          :value="user.sex"
          label="Sesso"
          readonly
        ></v-text-field>

      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="3"
      >
        <v-text-field
          max-width="50"
          :value="user.email"
          readonly
          label="Email"
        ></v-text-field>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="3"
      >
        <v-text-field
          :value="user.phone"
          label="Telefono"
          readonly
        ></v-text-field>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="3"
      >
        <v-text-field
          :append-icon=" showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type=" showPassword ? 'text' : 'password'"
          label="Password"
          :hint="!isEditing ? 'Clicca l\'icona a sinistra per modificare' : 'Clicca l\'icona per salvare'"
          :value="user.password"
          @click:append=" showPassword = ! showPassword"
          persistent-hint
        >

          <template v-slot:prepend-inner>
            <v-slide-x-reverse-transition
              mode="out-in"
            >
              <v-icon
                :key="`icon-${isEditing}`"
                :color="isEditing ? 'success' : 'gray'"
                @click="isEditing = !isEditing"
                v-text="isEditing ? 'mdi-check-outline' : 'mdi-border-color'"
              ></v-icon>
            </v-slide-x-reverse-transition>
          </template>
        </v-text-field>
      </v-col>
      </v-row>
    </form>

  </v-container>
</template>

<script>

export default {
name: "PersonalDataForm",
  components:{},
  data () {
    return {
      isEditing: false,
      showPassword: false,
      password: ""
    }
      },
  computed: {
    users() {
      return this.$store.getters["users/getUser"]
    }
  },
  methods:{
  updatePassword(){
    this.$store.commit("users/changePassword");
  }
  }
}
</script>
