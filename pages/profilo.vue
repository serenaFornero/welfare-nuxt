<template>
  <v-container fluid>
    <v-btn
      fab
      x-small
      class="mt-n10"
      to="/credito"
      color="#29304d"
      outlined
      dark
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>

    <v-card
      class="rounded-lg flex-column justify-center" elevation="5"
    >
      <div class="text-center"
      >
        <v-row class="d-flex flex-column" v-for="values in users" :key="values.id">
          <avatar :user="values"></avatar>
        </v-row>
        <!--<v-avatar size="70" class="my-2">
          <nuxt-link
            tag="img"
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            alt="user"
            to="/profilo">
          </nuxt-link>
        </v-avatar>
        <p class="mt-2 ml-2 headline" style="color: #29304d">
          John Doe
        </p>-->
        <v-btn
          class="my-2 text-capitalize rounded-lg"
          outlined
          color="#2573d5"
        >
          Cambia immagine
        </v-btn>
      </div>
      <v-card-title style="color: #232649">
        I miei dati
      </v-card-title>
      <v-card-text>
        <v-row v-for="user in users"
               :key="user.id">
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
              :value="user.email"
              label="E-mail"
              readonly
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
        </v-row>
      </v-card-text>
      <v-card-title style="color: #232649">
        Modifica password
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="3"
          >
            <password
              label="Nuova Password"
              cols="12"
              sm="6"
              md="3"
              class="mx-2"
            ></password>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="3"
          >
            <password
              label="Ripeti Password"
              cols="12"
              sm="6"
              md="3"
              class="mx-2"
            ></password>
          </v-col>

        </v-row>
        <div class="text-center">
          <v-btn class="my-5 text-capitalize rounded-lg" dark color="#2573d5" outlined>
            Aggiorna
          </v-btn>
        </div>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-title style="color: #232649">
        I miei familiari
      </v-card-title>
      <v-card-actions class="subtitle-2 mx-2 grey--text text--darken-1">
        Aggiungi nuovo familiare
        <v-spacer></v-spacer>
        <v-btn
          to="/aggiungiFamiliare"
          color="#2573d5"
          dark
          fab
          x-small
        >
          <v-icon
            small
          >mdi-plus
          </v-icon>
        </v-btn>
      </v-card-actions>
      <v-card-text>
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="3">
            <relatives-autocomplete v-model="relative"></relatives-autocomplete>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="3">
            <v-text-field
              readonly
              v-model="birthDate"
              label="Data di nascita"
            ></v-text-field>
          </v-col>
          <v-col

            cols="12"
            sm="6"
            md="3">
            <v-text-field
              readonly
              v-model="relation"
              label="Legame di parentela"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>


<script>

import Password from "@/components/Password";
import RelativesAutocomplete from "~/components/RelativesAutocomplete";
import avatar from "@/components/Avatar";

export default {
  layout: 'default',
  components: {
    RelativesAutocomplete,
    Password,
    avatar
  },
  data: () => ({
    color: 'red',
    relative: null,
    birthDate: null,
    relation: null,
    dialog: false,

  }),
  computed: {
    users() {
      return this.$store.getters["users/getUser"]
    }
  },
  watch: {
    relative: {
      immediate: false,
      deep: true,
      handler(value) {
        if (!value) {
          return false
        }

        this.relation = value.relation
        this.birthDate = value.birthDate
      }
    }
  },
  methods: {}

}
</script>
