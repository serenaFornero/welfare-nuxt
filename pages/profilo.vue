<template>
  <v-container fluid>
    <v-btn
    fab
    x-small
    class="mt-n10"
    to="/credito"
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-card
      class="rounded-lg flex-column justify-center"
    >
        <div class="text-center"
        >
          <v-avatar size="70" class="my-2">
            <nuxt-link
              tag="img"
              src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
              alt="user"
              to="/profilo">
            </nuxt-link>
          </v-avatar>
          <p class="mt-2 ml-2 headline">
            John Doe
          </p>
          <v-btn
            class="my-2 text-capitalize"
            outlined
            color="#374785"
          >
            Cambia immagine
          </v-btn>
        </div>
      <v-card-title>
        I miei dati
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="3">
            <v-text-field
              max-width="50"
              :value="profile.nome"
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
              :value="profile.email"
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
              :value="profile.dataNascita"
              label="Data di nascita"
              readonly
              append-icon="mdi-calendar"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-title>
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
              cols="12"
              sm="6"
              md="3"
              class="mx-2"
            ></password>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-title>
       I miei familiari
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="3">
            <v-select
              :items="userRelatives()"
            ></v-select>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="3">
            <v-text-field
              value=""
              label="Data di nascita"
              readonly
              append-icon="mdi-calendar"
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="3">
            <v-text-field
              value=""
              readonly
              label="Legame di parentela"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn
          class="mb-5 mt-n5 text-capitalize"
          to="/aggiungiFamiliare"
          outlined
          color="#374785"
          dark
        >
          Aggiungi familiare
        </v-btn>
      </v-card-actions>
      <v-divider></v-divider>
        <div class="text-center">
          <v-btn class="my-5 text-capitalize" dark color="#374785" >
            Salva modifiche
          </v-btn>
        </div>
    </v-card>
  </v-container>
</template>


<script>

import Password from "@/components/password";
export default {
  layout: 'default',
  components: {
    Password
  },
  data: () => ({
    profile: {
      id:0,
      nome: "John Doe",
      email: `john.doe@nomeazienda.it`,
      dataNascita: "12/12/1990",
    },
    relatives:[
      {
        id: 0,
        nome:"Carlo Rossi",
        dataNascita: "2/2/2010",
        relationship: "Figlio"
      },
      {
        id: 1,
        nome:"Valeria Bianchi",
        dataNascita: "1/5/1990",
        relationship: "Coniuge"
      },
      {
        id: 2,
        nome:"Ginevra Rossi",
        dataNascita: "1/5/2008",
        relationship: "Figlio"
      }
    ],

    dialog: false,

  }),
  methods: {
    /*
    selectedRelative(name){
      for(let i = 0; i < this.relatives.length; i++){
        if (name === this.relatives[i].nome){
          return this.relatives[i].dataNascita
        }
      }
    },
    */

    userRelatives(){
      let name = []
      for(let i = 0; i < this.relatives.length; i++){
       name[i] = this.relatives[i].nome
      }

      return name
    },






  }

}
</script>
