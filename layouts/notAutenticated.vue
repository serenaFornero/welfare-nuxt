<template>
  <v-app>
    <nav-bar></nav-bar>
    <v-main>
      <v-container fluid>
        <v-row justify="center" align="center" no-gutters>
          <v-col
            cols="12"
            sm="6"
            md="8"
            align="center"
          >
            <v-img
              class="d-none d-md-block"
              fluid
              width="50%"
              src="/directions.png">
            </v-img>
          </v-col>
          <v-col
            cols="12"
            md="4"
            align="center"

          >
            <v-card
              class="text-center rounded-xl mb-5"
              width="400"
              height="650"
              max-height="650"
              align="center"
              hover
            >
              <v-card-text>
                <h1 class="font-weight-light my-10">Accedi alla tua area <br> <br> personale</h1>
                <v-form>
                  <v-text-field
                    label="Username"
                    prepend-icon="mdi-account-circle"
                  />
                  <v-text-field
                    :type="showPassword ? 'text' : 'password'"
                    label="Password"
                    prepend-icon="mdi-lock"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showPassword = !showPassword"/>
                </v-form>
                <v-row>

                  <v-checkbox class="mt-1 ml-3"
                              v-model="checkbox"
                              label="Remember"
                              color="#374785"
                  ></v-checkbox>
                  <v-spacer></v-spacer>
                  <v-btn
                    class=" text-capitalize text--secondary"
                    text
                  >Forgot password ?
                  </v-btn>
                </v-row>
              </v-card-text>
              <v-card-actions class="justify-center">
                <v-btn
                  color="#374785"
                  class="text-capitalize"
                  large
                  dark
                >
                  Login
                </v-btn>
              </v-card-actions>
              <v-card-text class="my-3">
                <v-divider class="mb-3"></v-divider>
                <v-card-subtitle>Non sei ancora registrato?</v-card-subtitle>
              </v-card-text>
              <v-card-actions class="justify-center">
                <v-btn
                  color="#24305E"
                  class="text-capitalize mt-n3 "
                  large
                  dark
                  nuxt to="/registration"
                >

                    Registrati ora
                
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <my-footer></my-footer>
  </v-app>
</template>

<script>
import MyFooter from "~/components/MyFooter";
import NavBar from "@/components/NavBar";

export default {
  components: {MyFooter, NavBar },
  data: () => ({
    showPassword: false,
    checkbox: true
  }),
}
</script>
