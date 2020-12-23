<template>
  <v-container>
    <go-back/>
  <v-card class="py-2 px-2 my-2">
    <div class="mapouter">
      <div class="gmap_canvas">
        <iframe
          width="600"
          height="500"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=Pinerolo&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
        <a href="https://123movies.embedgooglemap.net"></a>
      </div>
    </div>
  </v-card>
  </v-container>
</template>

<script>
import GoBack from "@/components/GoBack";
export default {
name: "mappa",
  components: {GoBack}
}
</script>

<style scoped>
.mapouter {
  position:relative;
  text-align:right;
}
.gmap_canvas {
  overflow:hidden;
  background:none!important;
}
#gmap_canvas{
  width:100%;
  height:100%;
}

</style>
