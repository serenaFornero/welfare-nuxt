<template>
  <v-container fluid>
    <v-row class="d-flex">
      <p class="headline" style="color: #232649">
        Portafoglio
      </p>
    </v-row>
    <v-card
      class="rounded-lg"
      elevation="5"
    >
       <v-row>
         <v-col class="d-flex flex-wrap justify-center mt-3" v-for="values in categoriesWallet" :key="values.id">
           <div class="d-flex flex-column">
             <v-card
               class="mb-2 mx-5 pa-5"
               height="100"
               width="100"
               outlined
               rounded
               elevation="2"
               hover
             >
               <nuxt-link to="/trasferimentiQrCode"><v-img :src="values.src"></v-img></nuxt-link>
             </v-card>
             <p class="text-center font-weight-bold" style="color: #232649">{{values.name}}</p>
           </div>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default{
  layout: 'default',

  computed: {
    categoriesWallet(){
      return this.$store.getters["categories/getCategoryWallet"]
    }
  },



}


</script>
