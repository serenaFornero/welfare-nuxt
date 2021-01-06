
  <template>
    <v-container>
      <form v-for="user in users" :key="user.id" >
        <v-row>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-autocomplete
            v-model="model"
            :hint="!isEditing ? 'Clicca l\'icona per modificare' : 'Clicca l\'icona per salvare'"
            :items="states"
            :readonly="!isEditing"
            :label="`Nazione —${isEditing ?'Modifica' : user.state}`"
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
          </v-autocomplete>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-autocomplete
            v-model="model"
            :items="provinces"
            :readonly="!isEditing"
            :label="`Provincia — ${isEditing ?'Modifica' : user.province}`"
            persistent-hint
          >
          </v-autocomplete>
        </v-col>
          <v-col
            cols="12"
            sm="6"
            md="3"
          >
            <v-autocomplete
              v-model="model"
              :items="zipCodes"
              :readonly="!isEditing"
              :label="`Cap — ${isEditing ?'Modifica' : user.zipCode}`"
              persistent-hint
            >
            </v-autocomplete>
          </v-col>
        <v-col
          cols="12"
          sm="6"
          md="3"

        >
          <v-text-field
            :readonly="!isEditing"
            :label="`Indirizzo — ${isEditing ?'Modifica' : user.address}`"
          >
          </v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="3"

        >
          <v-text-field
            :readonly="!isEditing"
            :label="`Civico — ${isEditing ?'Modifica' : user.civic}`"
          >
          </v-text-field>
        </v-col>
        </v-row>
      </form>
    </v-container>
  </template>

  <script>
    export default {
      name: "ContactDetailsForm.vue",
      computed: {
        users() {
          return this.$store.getters["users/getUser"]
        }
      },
      props:{
        prependInnerIcon:{}
      },
      data () {
        return {
          isEditing: false,
          model: null,
          states: [
           'Croazia','Finlandia','Francia','Germania','Grecia','Italia','Olanda','Portogallo',
            'Regno Unito', 'Repubblica Ceca','Slovenia', 'Spagna','Svezia','Svizzera'
          ],
          provinces:[
            "Bologna","Cuneo","Genova","Milano","Roma","Torino","Sassari",
          ],
          zipCodes:[
            "10064", '10121', "14509", "12090","34567"
          ],

        }
      },
    }

  </script>

